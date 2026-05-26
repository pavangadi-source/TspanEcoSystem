import { Lock, ShieldCheck, FileWarning, Users, Database, ClipboardCheck, Bot, Cloud, ServerCog } from "lucide-react";
import { PageShell } from "@/components/raiffeisen/PageShell";
import { SectionTitle, GlassCard } from "@/components/raiffeisen/primitives";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ssdlcControls } from "@/lib/raiffeisen-mock-data";

const ICONS: Record<string, React.ComponentType<{ className?: string }>> = {
  "Threat model": FileWarning,
  "Data protection": Database,
  "Prompt-injection defense": ShieldCheck,
  "Audit logs": ClipboardCheck,
  "Role-based access control": Users,
  "Human approval workflow": Bot,
  "Evidence-first controls": Lock,
  "Model governance": ServerCog,
  "Deployment controls": Cloud,
  "Critical-infrastructure-grade resilience": ShieldCheck,
};

export default function SSDLCPage() {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="SSDLC · trust posture"
        title="Demo today. Production-grade roadmap tomorrow."
        description="Security and governance designed for a regulated, systemically relevant bank — even at the concept stage."
        action={
          <Badge variant="outline" className="border-emerald-300 bg-emerald-50 text-emerald-800">
            <ShieldCheck className="mr-1 h-3 w-3" /> EU AI Act high-risk aligned
          </Badge>
        }
      />

      <GlassCard className="mb-8">
        <div className="grid gap-6 md:grid-cols-3">
          <Pillar
            title="No real customer data"
            body="The demo runs on synthetic figures only. Production deployment uses bank-controlled data perimeter — Claude operates on de-identified, role-scoped views."
          />
          <Pillar
            title="Evidence-first by construction"
            body="Every agent output cites the underlying source. Unsourced inferences are blocked at the orchestration layer."
          />
          <Pillar
            title="Human always in the loop"
            body="Every credit-relevant action routes through the bank's approval matrix. Agents orchestrate, humans decide."
          />
        </div>
      </GlassCard>

      <div className="grid gap-4 md:grid-cols-2">
        {ssdlcControls.map((c) => {
          const Icon = ICONS[c.domain] ?? ShieldCheck;
          return (
            <Card key={c.domain} className="border-0 ring-1 ring-neutral-200" data-testid={`ssdlc-${c.domain.toLowerCase().replace(/\s+/g, "-")}`}>
              <CardContent className="p-5">
                <div className="flex items-start gap-3">
                  <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-amber-300 to-yellow-500 text-black ring-1 ring-amber-300">
                    <Icon className="h-5 w-5" />
                  </div>
                  <div className="flex-1">
                    <div className="text-sm font-semibold text-neutral-900">{c.domain}</div>
                    <p className="mt-1 text-xs text-neutral-700">{c.item}</p>
                    <div className="mt-2 inline-flex rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-semibold text-neutral-700">
                      {c.status}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <SectionTitle
        eyebrow="Deployment posture"
        title="Vercel today · bank-controlled cloud tomorrow"
        description="A frictionless concept-to-pilot path that does not compromise the production target."
      />
      <div className="grid gap-4 md:grid-cols-3">
        <Tier title="Concept demo" subtitle="Vercel · synthetic data" items={["Preview URL per branch", "Edge-optimised in Europe", "Stakeholder review without code access", "No customer data, no PII"]} />
        <Tier title="Pilot" subtitle="Bank tenancy · de-identified data" items={["Bank-controlled VPC", "SSO + entitlements", "WORM audit log store", "Red-team test harness"]} />
        <Tier title="Production" subtitle="Bank-controlled cloud · private model access" items={["Private Claude endpoint", "Full data residency in EU", "Integrated to committee workflow", "Critical-infrastructure-grade resilience"]} />
      </div>
    </PageShell>
  );
}

function Pillar({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <div className="text-sm font-semibold text-neutral-900">{title}</div>
      <p className="mt-1 text-xs leading-relaxed text-neutral-700">{body}</p>
    </div>
  );
}

function Tier({ title, subtitle, items }: { title: string; subtitle: string; items: string[] }) {
  return (
    <Card className="border-0 ring-1 ring-neutral-200">
      <CardContent className="p-5">
        <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">{title}</div>
        <div className="mt-1 text-sm font-semibold text-neutral-900">{subtitle}</div>
        <ul className="mt-3 space-y-1.5 text-xs text-neutral-700">
          {items.map((i) => (
            <li key={i} className="flex gap-2">
              <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <span>{i}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
}
