import { db } from "./db";
import { eq, and } from "drizzle-orm";
import {
  type Course,
  type InsertCourse,
  type Enrollment,
  type InsertEnrollment,
  type Application,
  type InsertApplication,
  type UserProfile,
  type InsertUserProfile,
  type Payment,
  type InsertPayment,
  type Event,
  type InsertEvent,
  type Registration,
  type InsertRegistration,
  courses,
  enrollments,
  applications,
  userProfiles,
  payments,
  events,
  registrations,
} from "@shared/schema";

export interface IStorage {
  getCourses(): Promise<Course[]>;
  getCourse(id: string): Promise<Course | undefined>;
  createCourse(course: InsertCourse): Promise<Course>;
  upsertCourseBySlug(course: InsertCourse & { slug: string }): Promise<Course>;
  
  getUserProfile(userId: string): Promise<UserProfile | undefined>;
  createUserProfile(profile: InsertUserProfile): Promise<UserProfile>;
  updateUserProfile(userId: string, data: Partial<InsertUserProfile>): Promise<UserProfile>;
  
  getEnrollmentsByUser(userId: string): Promise<Enrollment[]>;
  getEnrollmentsByCourse(courseId: string): Promise<Enrollment[]>;
  createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment>;
  updateEnrollmentStatus(id: string, status: string): Promise<Enrollment>;
  ensureEnrollment(userId: string, courseId: string): Promise<Enrollment>;
  
  getApplicationsByUser(userId: string): Promise<Application[]>;
  createApplication(application: InsertApplication): Promise<Application>;
  updateApplicationStatus(id: string, status: string): Promise<Application>;
  
  createPaymentRecord(payment: InsertPayment): Promise<Payment>;
  updatePaymentBySessionId(sessionId: string, data: Partial<InsertPayment>): Promise<Payment | undefined>;
  
  writeEvent(event: InsertEvent): Promise<Event>;
  
  createRegistration(registration: InsertRegistration): Promise<Registration>;
  getRegistrations(): Promise<Registration[]>;
}

export class DatabaseStorage implements IStorage {
  async getCourses(): Promise<Course[]> {
    return db.select().from(courses);
  }

  async getCourse(id: string): Promise<Course | undefined> {
    const [course] = await db.select().from(courses).where(eq(courses.id, id));
    return course;
  }

  async createCourse(course: InsertCourse): Promise<Course> {
    const [newCourse] = await db.insert(courses).values(course).returning();
    return newCourse;
  }

  async upsertCourseBySlug(course: InsertCourse & { slug: string }): Promise<Course> {
    const existing = await db.select().from(courses).where(eq(courses.slug, course.slug));
    if (existing.length > 0) {
      const [updated] = await db
        .update(courses)
        .set({ ...course, updatedAt: new Date() })
        .where(eq(courses.slug, course.slug))
        .returning();
      return updated;
    }
    const [newCourse] = await db.insert(courses).values(course).returning();
    return newCourse;
  }

  async getUserProfile(userId: string): Promise<UserProfile | undefined> {
    const [profile] = await db
      .select()
      .from(userProfiles)
      .where(eq(userProfiles.userId, userId));
    return profile;
  }

  async createUserProfile(profile: InsertUserProfile): Promise<UserProfile> {
    const [newProfile] = await db
      .insert(userProfiles)
      .values(profile)
      .returning();
    return newProfile;
  }

  async updateUserProfile(userId: string, data: Partial<InsertUserProfile>): Promise<UserProfile> {
    const [updated] = await db
      .update(userProfiles)
      .set({ ...data, updatedAt: new Date() })
      .where(eq(userProfiles.userId, userId))
      .returning();
    return updated;
  }

  async getEnrollmentsByUser(userId: string): Promise<Enrollment[]> {
    return db
      .select()
      .from(enrollments)
      .where(eq(enrollments.userId, userId));
  }

  async getEnrollmentsByCourse(courseId: string): Promise<Enrollment[]> {
    return db
      .select()
      .from(enrollments)
      .where(eq(enrollments.courseId, courseId));
  }

  async createEnrollment(enrollment: InsertEnrollment): Promise<Enrollment> {
    const [newEnrollment] = await db
      .insert(enrollments)
      .values(enrollment)
      .returning();
    return newEnrollment;
  }

  async updateEnrollmentStatus(id: string, status: string): Promise<Enrollment> {
    const [updated] = await db
      .update(enrollments)
      .set({ status: status as any })
      .where(eq(enrollments.id, id))
      .returning();
    return updated;
  }

  async ensureEnrollment(userId: string, courseId: string): Promise<Enrollment> {
    const existing = await db
      .select()
      .from(enrollments)
      .where(and(eq(enrollments.userId, userId), eq(enrollments.courseId, courseId)));
    
    if (existing.length > 0) {
      return existing[0];
    }

    const [newEnrollment] = await db
      .insert(enrollments)
      .values({
        userId,
        courseId,
        status: "active",
        source: "stripe_webhook",
      })
      .returning();
    return newEnrollment;
  }

  async getApplicationsByUser(userId: string): Promise<Application[]> {
    return db
      .select()
      .from(applications)
      .where(eq(applications.userId, userId));
  }

  async createApplication(application: InsertApplication): Promise<Application> {
    const [newApplication] = await db
      .insert(applications)
      .values(application)
      .returning();
    return newApplication;
  }

  async updateApplicationStatus(id: string, status: string): Promise<Application> {
    const [updated] = await db
      .update(applications)
      .set({ status: status as any, reviewedAt: new Date() })
      .where(eq(applications.id, id))
      .returning();
    return updated;
  }

  async createPaymentRecord(payment: InsertPayment): Promise<Payment> {
    const [newPayment] = await db
      .insert(payments)
      .values(payment)
      .returning();
    return newPayment;
  }

  async updatePaymentBySessionId(sessionId: string, data: Partial<InsertPayment>): Promise<Payment | undefined> {
    const [updated] = await db
      .update(payments)
      .set(data)
      .where(eq(payments.stripeCheckoutSessionId, sessionId))
      .returning();
    return updated;
  }

  async writeEvent(event: InsertEvent): Promise<Event> {
    const [newEvent] = await db
      .insert(events)
      .values(event)
      .returning();
    return newEvent;
  }

  async createRegistration(registration: InsertRegistration): Promise<Registration> {
    const [newRegistration] = await db
      .insert(registrations)
      .values(registration)
      .returning();
    return newRegistration;
  }

  async getRegistrations(): Promise<Registration[]> {
    return db.select().from(registrations);
  }
}

export const storage = new DatabaseStorage();
