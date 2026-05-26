import { Link } from "wouter";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Network,
  LayoutDashboard,
  GitBranch,
  Sparkles,
  FileText,
  ShieldCheck,
  Building2,
  Leaf,
  Gauge,
  Users,
} from "lucide-react";
import { PageShell } from "@/components/raiffeisen/PageShell";
import { GlassCard, MetricCard, SectionTitle } from "@/components/raiffeisen/primitives";
import { Button } from "@/components/ui/button";

const CTAS = [
  { href: "/raiffeisen/command-center", label: "View AI Command Center", icon: LayoutDashboard, primary: true },
  { href: "/raiffeisen/knowledge-graph", label: "Explore Knowledge Graph", icon: Network },
  { href: "/raiffeisen/deal-digital-twin", label: "Open Deal Digital Twin", icon: GitBranch },
  { href: "/raiffeisen/executive-brief", label: "Generate Executive Brief", icon: FileText },
];

const PILLARS = [
  {
    icon: Building2,
    title: "Real Estate Finance, in focus",
    body: "Mortgage portfolio, commercial and residential project finance — orchestrated in one evidence-first workspace for Vienna and Lower Austria.",
  },
  {
    icon: Network,
    title: "Knowledge graph at the core",
    body: "Borrower, property, collateral, covenants, ESG and market signals — joined so Claude can see relationships humans would miss.",
  },
  {
    icon: GitBranch,
    title: "Deal digital twins",
    body: "Every live project becomes a living, queryable twin: memo, term-sheet draft, evidence pack and red flags in hours, not days.",
  },
  {
    icon: Leaf,
    title: "Going Green Credit, accelerated",
    body: "Match the existing borrower base to EU-taxonomy and klimaaktiv programmes; grow the green book with full auditability.",
  },
  {
    icon: Gauge,
    title: "Covenant Watch, always on",
    body: "Continuous monitoring surfaces covenant drift +38 days earlier than the quarterly review — explainable signals only.",
  },
  {
    icon: ShieldCheck,
    title: "Evidence-first governance",
    body: "Every AI output cites its source. Human approval gates on every credit-relevant action. EU AI Act high-risk aligned.",
  },
];

export default function RaiffeisenLanding() {
  return (
    <PageShell>
      <Hero />
      <Pillars />
      <Outcomes />
      <Persona />
    </PageShell>
  );
}

function Hero() {
  return (
    <section className="relative">
      <GlassCard className="overflow-hidden">
        <div className="grid items-center gap-8 md:grid-cols-[1.4fr_1fr]">
          <div>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 rounded-full bg-neutral-900 px-3 py-1 text-[11px] font-semibold text-amber-300"
            >
              <Sparkles className="h-3 w-3" /> Raiffeisen NÖ-Wien · Real Estate Finance · Concept Demo
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.6 }}
              className="mt-4 text-4xl font-semibold leading-[1.05] tracking-tight text-neutral-900 md:text-6xl"
            >
              Real Estate Finance,
              <br />
              <span className="bg-gradient-to-r from-amber-500 via-amber-600 to-yellow-700 bg-clip-text text-transparent">
                upgraded by Agentic AI.
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.25, duration: 0.6 }}
              className="mt-5 max-w-xl text-base text-neutral-700"
            >
              Claude-powered relationship intelligence, project-finance digital twins, and knowledge-graph
              decision support — prepared for{" "}
              <span className="font-semibold text-neutral-900">Max V. Zechmann</span>, Key Account Manager
              for Real Estate Finance at Raiffeisenlandesbank Niederösterreich-Wien AG.
            </motion.p>

            <div className="mt-7 flex flex-wrap gap-3">
              {CTAS.map((c) => {
                const Icon = c.icon;
                return (
                  <Link key={c.href} href={c.href}>
                    <Button
                      data-testid={`cta-${c.label.toLowerCase().replace(/\s+/g, "-")}`}
                      className={
                        c.primary
                          ? "bg-neutral-900 text-white shadow hover:bg-neutral-800"
                          : "bg-white text-neutral-900 ring-1 ring-neutral-200 hover:bg-neutral-50"
                      }
                      size="lg"
                    >
                      <Icon className="mr-2 h-4 w-4" />
                      {c.label}
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </Link>
                );
              })}
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 text-[11px] text-neutral-600">
              <span className="rounded-full bg-white px-2 py-0.5 ring-1 ring-neutral-200">claude-opus class</span>
              <span className="rounded-full bg-white px-2 py-0.5 ring-1 ring-neutral-200">evidence-first</span>
              <span className="rounded-full bg-white px-2 py-0.5 ring-1 ring-neutral-200">human approval gates</span>
              <span className="rounded-full bg-white px-2 py-0.5 ring-1 ring-neutral-200">EU AI Act aligned</span>
              <span className="rounded-full bg-white px-2 py-0.5 ring-1 ring-neutral-200">Vercel-ready</span>
            </div>
          </div>

          <HeroVisual />
        </div>
      </GlassCard>
    </section>
  );
}

function HeroVisual() {
  return (
    <div className="relative h-[360px] w-full">
      <motion.div
        initial={{ opacity: 0, rotate: -3, scale: 0.95 }}
        animate={{ opacity: 1, rotate: -3, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="absolute right-2 top-2 h-44 w-72 rounded-2xl border border-neutral-200 bg-white p-4 shadow-xl"
      >
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">Deal digital twin</span>
          <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700 ring-1 ring-emerald-200">
            Taxonomy aligned
          </span>
        </div>
        <div className="text-sm font-semibold text-neutral-900">Vienna Green Living Quarter</div>
        <div className="text-[11px] text-neutral-500">Donaupark Development GmbH</div>
        <div className="mt-3 grid grid-cols-3 gap-2 text-center">
          <Stat label="Volume" value="€184m" />
          <Stat label="LTV" value="62%" />
          <Stat label="ESG" value="84" />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, rotate: 2, scale: 0.95 }}
        animate={{ opacity: 1, rotate: 2, scale: 1 }}
        transition={{ delay: 0.15, duration: 0.6 }}
        className="absolute left-2 top-32 h-44 w-72 rounded-2xl border border-neutral-200 bg-neutral-900 p-4 text-white shadow-xl"
      >
        <div className="mb-2 flex items-center gap-2">
          <div className="grid h-7 w-7 place-items-center rounded-md bg-amber-400 text-black">
            <Network className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-semibold uppercase tracking-wider text-amber-300">Knowledge graph</span>
        </div>
        <div className="text-sm font-semibold">14 entities · 36 relationships</div>
        <div className="text-[11px] text-amber-200">Borrower → collateral → covenant → ESG → market</div>
        <div className="mt-3 flex -space-x-2">
          {[
            "bg-amber-400",
            "bg-emerald-400",
            "bg-sky-400",
            "bg-violet-400",
            "bg-rose-400",
          ].map((c, i) => (
            <div key={i} className={`h-7 w-7 rounded-full ring-2 ring-neutral-900 ${c}`} />
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        className="absolute bottom-2 right-2 h-32 w-72 rounded-2xl border border-amber-200 bg-amber-50 p-4 shadow-xl"
      >
        <div className="text-[10px] font-semibold uppercase tracking-wider text-amber-700">Claude recommendation</div>
        <div className="mt-1 text-sm font-semibold text-neutral-900">
          Refinance Donaupark green tranche with EU-taxonomy linked margin
        </div>
        <div className="mt-2 text-[11px] text-neutral-700">+€2.4m relationship NPV · Effort: Medium</div>
      </motion.div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-md bg-neutral-50 py-1.5">
      <div className="text-[9px] uppercase tracking-wider text-neutral-500">{label}</div>
      <div className="text-sm font-semibold text-neutral-900">{value}</div>
    </div>
  );
}

function Pillars() {
  return (
    <section className="mt-14">
      <SectionTitle
        eyebrow="The product"
        title="A premium banking workspace, designed around Real Estate Finance."
        description="Eight Claude-style agents working together — orchestrated by Max, governed by the bank, auditable by design."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {PILLARS.map((p) => {
          const Icon = p.icon;
          return (
            <div key={p.title} className="group relative overflow-hidden rounded-2xl border border-neutral-200 bg-white p-6 transition hover:-translate-y-0.5 hover:shadow-md">
              <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl bg-gradient-to-br from-amber-300 via-yellow-400 to-amber-500 text-black ring-1 ring-amber-300">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-sm font-semibold text-neutral-900">{p.title}</div>
              <p className="mt-2 text-xs leading-relaxed text-neutral-600">{p.body}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

function Outcomes() {
  return (
    <section className="mt-14">
      <SectionTitle
        eyebrow="Outcomes"
        title="What changes for Max — and for the Real Estate Finance Board."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Deal preparation time" value="−55%" delta="Memo & evidence pack in hours" tone="positive" icon={<Gauge className="h-4 w-4" />} />
        <MetricCard label="Pipeline visibility" value="3.2×" delta="Knowledge-graph cross-views" tone="positive" icon={<Network className="h-4 w-4" />} />
        <MetricCard label="Green book growth" value="+€420m" delta="24-month modelled uplift" tone="positive" icon={<Leaf className="h-4 w-4" />} />
        <MetricCard label="Covenant lead-time" value="+38 days" delta="Earlier-than-quarterly signals" tone="positive" icon={<ShieldCheck className="h-4 w-4" />} />
      </div>
    </section>
  );
}

function Persona() {
  return (
    <section className="mt-14">
      <div className="overflow-hidden rounded-2xl bg-gradient-to-br from-neutral-900 via-neutral-800 to-neutral-900 p-8 text-white shadow-lg ring-1 ring-amber-300/30">
        <div className="grid gap-6 md:grid-cols-[1fr_auto] md:items-center">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">Prepared for</div>
            <div className="mt-2 text-2xl font-semibold md:text-3xl">Max V. Zechmann</div>
            <div className="text-sm text-amber-200">Key Account Manager · Real Estate Finance</div>
            <div className="mt-3 max-w-xl text-sm text-neutral-200">
              Raiffeisenlandesbank Niederösterreich-Wien AG — regional and universal bank for Vienna and
              Lower Austria, connected to the Raiffeisen network. Public site: raiffeisen.at
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Users className="h-10 w-10 text-amber-300" />
            <div>
              <div className="text-xs uppercase tracking-wider text-amber-300">Concept demo</div>
              <div className="text-sm font-semibold">Synthetic data only · No production customer data</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
