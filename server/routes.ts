import type { Express, Request, Response, NextFunction } from "express";
import express from "express";
import crypto from "crypto";
import Stripe from "stripe";
import { type Server } from "http";
import { z } from "zod";

import { storage } from "./storage";
import { isAuthenticated } from "./replit_integrations/auth";
import { db } from "./db";
import { courses as coursesTable } from "@shared/schema";
import { eq } from "drizzle-orm";

const APP_BASE_URL = process.env.APP_BASE_URL;
const NODE_ENV = process.env.NODE_ENV || "development";

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const STRIPE_WEBHOOK_SECRET = process.env.STRIPE_WEBHOOK_SECRET;

if (!STRIPE_SECRET_KEY) {
  console.warn("[WARN] STRIPE_SECRET_KEY is not set. Stripe endpoints will fail.");
}
const stripe = STRIPE_SECRET_KEY
  ? new Stripe(STRIPE_SECRET_KEY, { apiVersion: "2024-06-20" as any })
  : (null as any);

const KYC_ENCRYPTION_KEY_B64 = process.env.KYC_ENCRYPTION_KEY;

function getBaseUrl(req: Request) {
  if (APP_BASE_URL && /^https?:\/\//i.test(APP_BASE_URL)) return APP_BASE_URL.replace(/\/+$/, "");
  const proto = req.protocol;
  const host = req.get("host") || "localhost";
  return `${proto}://${host}`.replace(/\/+$/, "");
}

type Role = "student" | "ta" | "instructor" | "admin" | "partner_admin";
function requireRole(allowed: Role[]) {
  return async (req: any, res: Response, next: NextFunction) => {
    try {
      const userId = req.user?.claims?.sub;
      if (!userId) return res.status(401).json({ message: "Unauthorized" });

      const profile = await storage.getUserProfile(userId);
      const role = (profile?.role || "student") as Role;

      if (!allowed.includes(role)) {
        return res.status(403).json({ message: "Forbidden", required: allowed, role });
      }
      (req as any).profile = profile;
      next();
    } catch (e) {
      console.error("[RBAC] Error:", e);
      res.status(500).json({ message: "Authorization failed" });
    }
  };
}

function requireKycKey() {
  if (!KYC_ENCRYPTION_KEY_B64) {
    throw new Error("KYC_ENCRYPTION_KEY is not configured (base64 32 bytes)");
  }
  const key = Buffer.from(KYC_ENCRYPTION_KEY_B64, "base64");
  if (key.length !== 32) throw new Error("KYC_ENCRYPTION_KEY must decode to 32 bytes");
  return key;
}

function encryptJson(obj: any) {
  const key = requireKycKey();
  const iv = crypto.randomBytes(12);
  const cipher = crypto.createCipheriv("aes-256-gcm", key, iv);
  const plaintext = Buffer.from(JSON.stringify(obj), "utf8");
  const ciphertext = Buffer.concat([cipher.update(plaintext), cipher.final()]);
  const tag = cipher.getAuthTag();
  return Buffer.concat([iv, tag, ciphertext]).toString("base64");
}

const seedCourse = z.object({
  slug: z.string().min(3).max(80).regex(/^[a-z0-9-]+$/),
  title: z.string().min(3).max(200),
  description: z.string().min(10).max(2000),
  category: z.string().min(2).max(60),
  duration: z.string().min(2).max(40),
  price: z.number().int().nonnegative(),
  level: z.enum(["beginner", "intermediate", "advanced"]),
  imageUrl: z.string().optional(),
  tags: z.array(z.string().min(1).max(40)).default([]),
  curriculum: z.any(),
  startDate: z.string().optional(),
  endDate: z.string().optional(),
  stripePriceId: z.string().min(4).optional(),
});

async function autoSeedIfEmpty() {
  const allowSeed = NODE_ENV === "development" || process.env.ALLOW_PROD_SEED === "true";
  if (!allowSeed) return;

  const existing = await storage.getCourses();
  if (existing.length > 0) {
    console.log(`[Seed] Found ${existing.length} courses; skipping.`);
    return;
  }

  console.log("[Seed] DB empty, seeding courses (dev-only).");

  const seedCourses = [
    {
      slug: "dns-security-tcpwave-ddi",
      title: "DNS Security & TCPWave DDI",
      description:
        "Master DNS security fundamentals and TCPWave's DDI platform. Learn DNS tunneling detection, fast-flux identification, and enterprise-grade DNS operations.",
      category: "DNS Security",
      duration: "10 Weekends",
      price: 2500,
      level: "advanced",
      imageUrl: "/attached_assets/generated_images/dns-security-visualization_af5e47c0.png",
      tags: ["DNS", "TCPWave", "DDI", "Cybersecurity"],
      curriculum: {
        weeks: [
          { title: "Week 1-2: DNS Architecture & TCPWave Fundamentals", topics: ["DNS protocol deep-dive", "TCPWave DDI setup", "Zone management"] },
          { title: "Week 3-4: DNS Threat Landscape", topics: ["DNS tunneling", "Fast-flux networks", "DDoS via DNS"] },
          { title: "Week 5-6: TCPWave Security Features", topics: ["DNSSEC implementation", "RPZ", "Threat intel feeds"] },
          { title: "Week 7-8: SOC Operations", topics: ["Monitoring", "Incident response", "Forensics"] },
          { title: "Week 9-10: Capstone", topics: ["Threat hunting", "Hardening", "Certification"] },
        ],
      },
      startDate: "Upcoming",
      endDate: "Upcoming",
    },
  ].map((c) => seedCourse.parse(c));

  for (const c of seedCourses) {
    await storage.upsertCourseBySlug(c as any);
  }

  console.log(`[Seed] Seeded ${seedCourses.length} courses successfully.`);
}

const zCourseId = z.string().min(1).max(64);

const zCheckoutBody = z.object({
  courseId: zCourseId,
});

const zEnrollmentAdminBody = z.object({
  courseId: zCourseId,
  targetUserId: z.string().min(1).max(128).optional(),
});

const zStripeVerifyQuery = z.object({
  courseId: zCourseId,
  sessionId: z.string().min(8).max(256).optional(),
});

const kycSchema = z.object({
  fullName: z.string().min(2).max(120),
  dateOfBirth: z.string().min(6).max(20),
  nationality: z.string().min(2).max(60),
  idType: z.enum(["passport", "national_id", "driver_license", "other"]),
  idNumber: z.string().min(4).max(40),
  address: z.string().min(5).max(200),
  city: z.string().min(2).max(80),
  country: z.string().min(2).max(80),
  phone: z.string().min(6).max(30).optional(),
}).strict();

const zKycBody = z.object({
  kycData: kycSchema,
});

const zEventBody = z.object({
  name: z.string().min(2).max(80),
  properties: z.record(z.any()).optional(),
  ts: z.number().int().optional(),
});

export async function registerRoutes(httpServer: Server, app: Express): Promise<Server> {
  app.post(
    "/api/stripe/webhook",
    express.raw({ type: "application/json" }),
    async (req: Request, res: Response) => {
      try {
        if (!stripe) return res.status(500).send("Stripe not configured");
        if (!STRIPE_WEBHOOK_SECRET) return res.status(500).send("Missing STRIPE_WEBHOOK_SECRET");

        const sig = req.headers["stripe-signature"];
        if (!sig || typeof sig !== "string") return res.status(400).send("Missing stripe-signature");

        const event = stripe.webhooks.constructEvent(req.body, sig, STRIPE_WEBHOOK_SECRET);

        if (event.type === "checkout.session.completed") {
          const session = event.data.object as Stripe.Checkout.Session;
          const courseId = session.metadata?.courseId;
          const userId = session.metadata?.userId;

          if (!courseId || !userId) {
            console.warn("[Webhook] Missing metadata; ignoring");
            return res.status(200).json({ received: true });
          }

          await storage.updatePaymentBySessionId(session.id, {
            status: session.payment_status === "paid" ? "paid" : "unknown",
            stripePaymentIntentId: (session.payment_intent as string) || null,
          });

          if (session.payment_status === "paid") {
            await storage.ensureEnrollment(userId, courseId);
          }
        }

        res.json({ received: true });
      } catch (err: any) {
        console.error("[Stripe Webhook] Error:", err?.message || err);
        res.status(400).send(`Webhook Error: ${err?.message || "unknown"}`);
      }
    }
  );

  app.use(express.json({ limit: "200kb" }));

  await autoSeedIfEmpty();

  app.get("/api/courses", async (_req, res) => {
    try {
      const list = await storage.getCourses();
      res.json(list);
    } catch (e) {
      console.error("[Courses] list error:", e);
      res.status(500).json({ message: "Failed to fetch courses" });
    }
  });

  app.get("/api/courses/:id", async (req, res) => {
    try {
      const id = zCourseId.parse(req.params.id);
      const course = await storage.getCourse(id);
      if (!course) return res.status(404).json({ message: "Course not found" });
      res.json(course);
    } catch (e) {
      console.error("[Courses] get error:", e);
      res.status(500).json({ message: "Failed to fetch course" });
    }
  });

  app.get("/api/profile", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      let profile = await storage.getUserProfile(userId);

      if (!profile) {
        const referralCode = crypto.randomBytes(6).toString("hex");
        profile = await storage.createUserProfile({
          userId,
          role: "student",
          kycStatus: "not_started",
          referralCode,
          utm: null,
        });
      }
      res.json(profile);
    } catch (e) {
      console.error("[Profile] get error:", e);
      res.status(500).json({ message: "Failed to fetch profile" });
    }
  });

  app.post("/api/profile/utm", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const utm = z
        .object({
          utm_source: z.string().max(120).optional(),
          utm_medium: z.string().max(120).optional(),
          utm_campaign: z.string().max(120).optional(),
          utm_term: z.string().max(120).optional(),
          utm_content: z.string().max(120).optional(),
          ref: z.string().max(120).optional(),
        })
        .strict()
        .parse(req.body);

      const updated = await storage.updateUserProfile(userId, { utm });
      res.json(updated);
    } catch (e: any) {
      if (e instanceof z.ZodError) return res.status(400).json({ message: "Invalid data", errors: e.errors });
      console.error("[Profile] utm error:", e);
      res.status(500).json({ message: "Failed to save UTM" });
    }
  });

  app.patch("/api/profile/kyc", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      
      const kycData = kycSchema.parse(req.body);
      
      let profile = await storage.getUserProfile(userId);
      if (!profile) {
        const referralCode = crypto.randomBytes(6).toString("hex");
        profile = await storage.createUserProfile({
          userId,
          role: "student",
          kycStatus: "not_started",
          referralCode,
          utm: null,
        });
      }

      let updateData: any = {
        kycData,
        kycStatus: "pending_review",
      };

      if (KYC_ENCRYPTION_KEY_B64) {
        try {
          const encrypted = encryptJson(kycData);
          const summary = {
            fullName: kycData.fullName,
            nationality: kycData.nationality,
            country: kycData.country,
            idType: kycData.idType,
            idLast4: kycData.idNumber.slice(-4),
          };
          updateData = {
            kycEncrypted: encrypted,
            kycSummary: summary,
            kycData,
            kycStatus: "pending_review",
          };
        } catch (encErr) {
          console.warn("[KYC] Encryption failed, storing plaintext:", encErr);
        }
      }

      const updated = await storage.updateUserProfile(userId, updateData);
      res.json(updated);
    } catch (e: any) {
      if (e instanceof z.ZodError) return res.status(400).json({ message: "Invalid KYC data", errors: e.errors });
      console.error("[KYC] update error:", e);
      res.status(500).json({ message: "Failed to update KYC" });
    }
  });

  app.get("/api/enrollments", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const enrollments = await storage.getEnrollmentsByUser(userId);
      res.json(enrollments);
    } catch (e) {
      console.error("[Enrollments] list error:", e);
      res.status(500).json({ message: "Failed to fetch enrollments" });
    }
  });

  app.post("/api/enrollments", isAuthenticated, requireRole(["admin"]), async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const { courseId, targetUserId } = zEnrollmentAdminBody.parse(req.body);
      const enrollUserId = targetUserId || userId;

      const existing = await storage.getEnrollmentsByUser(enrollUserId);
      if (existing.some((e: any) => e.courseId === courseId)) {
        return res.status(409).json({ message: "Already enrolled" });
      }

      const enrollment = await storage.createEnrollment({
        userId: enrollUserId,
        courseId,
        status: "active",
        source: "admin",
      });

      res.status(201).json(enrollment);
    } catch (e: any) {
      if (e instanceof z.ZodError) return res.status(400).json({ message: "Invalid data", errors: e.errors });
      console.error("[Admin Enrollment] error:", e);
      res.status(500).json({ message: "Failed to create enrollment" });
    }
  });

  app.get("/api/applications", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const applications = await storage.getApplicationsByUser(userId);
      res.json(applications);
    } catch (e) {
      console.error("[Applications] list error:", e);
      res.status(500).json({ message: "Failed to fetch applications" });
    }
  });

  app.post("/api/applications", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const body = z.record(z.any()).parse(req.body);
      const application = await storage.createApplication({
        ...body,
        userId,
        status: "pending",
      } as any);

      res.status(201).json(application);
    } catch (e: any) {
      if (e instanceof z.ZodError) return res.status(400).json({ message: "Invalid data", errors: e.errors });
      console.error("[Applications] create error:", e);
      res.status(500).json({ message: "Failed to create application" });
    }
  });

  app.post("/api/admin/courses", isAuthenticated, requireRole(["admin"]), async (req: any, res) => {
    try {
      const data = seedCourse.parse(req.body);
      const created = await storage.upsertCourseBySlug(data as any);
      res.status(201).json(created);
    } catch (e: any) {
      if (e instanceof z.ZodError) return res.status(400).json({ message: "Invalid data", errors: e.errors });
      console.error("[Admin Courses] create error:", e);
      res.status(500).json({ message: "Failed to create course" });
    }
  });

  app.post("/api/stripe/checkout", isAuthenticated, async (req: any, res) => {
    try {
      if (!stripe) return res.status(500).json({ message: "Stripe not configured" });

      const userId = req.user.claims.sub;
      const { courseId } = zCheckoutBody.parse(req.body);

      const course = await storage.getCourse(courseId);
      if (!course) return res.status(404).json({ message: "Course not found" });

      const priceId = course.stripePriceId;
      if (!priceId) {
        return res.status(400).json({ message: "Course is not purchasable (missing Stripe price mapping)" });
      }

      let profile = await storage.getUserProfile(userId);
      if (!profile) {
        const referralCode = crypto.randomBytes(6).toString("hex");
        profile = await storage.createUserProfile({
          userId,
          role: "student",
          kycStatus: "not_started",
          referralCode,
          utm: null,
        });
      }

      let customerId = profile.stripeCustomerId;
      if (!customerId) {
        const userEmail = req.user.claims.email || `user-${userId}@tspan.edu`;
        const userName = req.user.claims.name || "T-SPAN Student";

        const customer = await stripe.customers.create({
          email: userEmail,
          name: userName,
          metadata: { userId },
        });

        await storage.updateUserProfile(userId, { stripeCustomerId: customer.id });
        customerId = customer.id;
      }

      const baseUrl = getBaseUrl(req);

      const session = await stripe.checkout.sessions.create({
        mode: "payment",
        customer: customerId,
        line_items: [{ price: priceId, quantity: 1 }],
        success_url: `${baseUrl}/checkout/success?courseId=${encodeURIComponent(courseId)}&session_id={CHECKOUT_SESSION_ID}`,
        cancel_url: `${baseUrl}/courses/${encodeURIComponent(courseId)}`,
        metadata: {
          courseId,
          userId,
        },
      });

      await storage.createPaymentRecord({
        userId,
        courseId,
        stripeCheckoutSessionId: session.id,
        status: "pending",
        amount: course.price,
        currency: "usd",
      });

      res.json({ url: session.url });
    } catch (e: any) {
      if (e instanceof z.ZodError) return res.status(400).json({ message: "Invalid data", errors: e.errors });
      console.error("[Stripe] checkout error:", e);
      res.status(500).json({ message: "Failed to create checkout session" });
    }
  });

  app.get("/api/stripe/verify-session", isAuthenticated, async (req: any, res) => {
    try {
      if (!stripe) return res.status(500).json({ message: "Stripe not configured" });

      const userId = req.user.claims.sub;
      const { courseId, sessionId } = zStripeVerifyQuery.parse(req.query);

      if (sessionId) {
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        if (session?.metadata?.userId && session.metadata.userId !== userId) {
          return res.status(403).json({ message: "Session does not belong to user" });
        }
        if (session?.metadata?.courseId && session.metadata.courseId !== courseId) {
          return res.status(400).json({ message: "Session does not match course" });
        }

        const paid = session.payment_status === "paid";
        if (paid) {
          await storage.updatePaymentBySessionId(session.id, {
            status: "paid",
            stripePaymentIntentId: (session.payment_intent as string) || null,
          });

          const enrollments = await storage.getEnrollmentsByUser(userId);
          const existing = enrollments.find((e: any) => e.courseId === courseId);

          if (!existing) {
            const enrollment = await storage.createEnrollment({
              userId,
              courseId,
              status: "active",
              source: "stripe_verify",
            });
            return res.json({ enrolled: true, enrollment, message: "Payment confirmed; enrollment created" });
          }
          return res.json({ enrolled: true, enrollment: existing, message: "Payment confirmed; enrollment active" });
        }

        return res.json({ enrolled: false, message: `Payment status: ${session.payment_status}` });
      }

      const enrollments = await storage.getEnrollmentsByUser(userId);
      const enrollment = enrollments.find((e: any) => e.courseId === courseId);
      return res.json({
        enrolled: Boolean(enrollment),
        enrollment: enrollment || null,
        message: enrollment ? "Enrollment active" : "Not enrolled",
      });
    } catch (e: any) {
      if (e instanceof z.ZodError) return res.status(400).json({ message: "Invalid query", errors: e.errors });
      console.error("[Stripe] verify-session error:", e);
      res.status(500).json({ message: "Failed to verify session" });
    }
  });

  app.post("/api/stripe/portal", isAuthenticated, async (req: any, res) => {
    try {
      if (!stripe) return res.status(500).json({ message: "Stripe not configured" });

      const userId = req.user.claims.sub;
      const profile = await storage.getUserProfile(userId);
      if (!profile?.stripeCustomerId) return res.status(400).json({ message: "No Stripe customer found" });

      const baseUrl = getBaseUrl(req);
      const session = await stripe.billingPortal.sessions.create({
        customer: profile.stripeCustomerId,
        return_url: `${baseUrl}/dashboard`,
      });

      res.json({ url: session.url });
    } catch (e) {
      console.error("[Stripe] portal error:", e);
      res.status(500).json({ message: "Failed to create portal session" });
    }
  });

  app.post("/api/events", isAuthenticated, async (req: any, res) => {
    try {
      const userId = req.user.claims.sub;
      const ev = zEventBody.parse(req.body);

      await storage.writeEvent({
        userId,
        name: ev.name,
        properties: ev.properties || {},
        ts: ev.ts || Date.now(),
      });

      res.status(201).json({ ok: true });
    } catch (e: any) {
      if (e instanceof z.ZodError) return res.status(400).json({ message: "Invalid event", errors: e.errors });
      console.error("[Events] error:", e);
      res.status(500).json({ message: "Failed to write event" });
    }
  });

  const zRegistrationBody = z.object({
    fullName: z.string().min(2, "Name is required"),
    email: z.string().email("Invalid email address"),
    phone: z.string().min(10, "Valid phone number required"),
    linkedIn: z.string().optional(),
    background: z.string().min(10, "Please tell us about your background"),
  });

  app.post("/api/registrations", async (req: Request, res: Response) => {
    try {
      const data = zRegistrationBody.parse(req.body);

      const registration = await storage.createRegistration({
        fullName: data.fullName,
        email: data.email,
        phone: data.phone,
        linkedIn: data.linkedIn || null,
        background: data.background,
      });

      console.log(`[Registration] New registration: ${data.fullName} <${data.email}>`);

      res.status(201).json({ 
        ok: true, 
        message: "Registration received successfully",
        id: registration.id 
      });
    } catch (e: any) {
      if (e instanceof z.ZodError) {
        return res.status(400).json({ message: "Invalid registration data", errors: e.errors });
      }
      console.error("[Registration] error:", e);
      res.status(500).json({ message: "Failed to submit registration" });
    }
  });

  return httpServer;
}
