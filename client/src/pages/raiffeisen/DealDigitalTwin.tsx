import {
  Building2,
  ShieldCheck,
  Leaf,
  AlertTriangle,
  Sparkles,
  FileCheck2,
  UserCheck,
  CheckCircle2,
  Clock,
  Hourglass,
} from "lucide-react";
import { PageShell } from "@/components/raiffeisen/PageShell";
import { SectionTitle, GlassCard, AlertChip, RiskBadge } from "@/components/raiffeisen/primitives";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { digitalTwinProject as p, formatEur } from "@/lib/raiffeisen-mock-data";

export default function DealDigitalTwin() {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="Deal digital twin"
        title={p.name}
        description="A live, queryable twin of a real estate finance project — memo, evidence pack, red flags, opportunities and approval chain in one workspace."
        action={
          <Badge variant="outline" className="border-emerald-300 bg-emerald-50 text-emerald-800">
            <Leaf className="mr-1 h-3 w-3" /> EU-taxonomy aligned
          </Badge>
        }
      />

      <GlassCard className="mb-8">
        <div className="grid gap-6 md:grid-cols-[1.5fr_1fr]">
          <div>
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
              <Building2 className="h-3.5 w-3.5" /> Developer
            </div>
            <div className="mt-1 text-xl font-semibold text-neutral-900">{p.developer.name}</div>
            <div className="text-xs text-neutral-600">
              Client since {p.developer.sinceYear} · {p.developer.portfolioCount} projects · {p.developer.rating}
            </div>
            <div className="mt-3 flex items-center gap-2">
              <div className="text-[11px] text-neutral-500">Relationship score</div>
              <Progress value={p.developer.relationshipScore} className="h-2 w-40" />
              <span className="text-xs font-semibold">{p.developer.relationshipScore}/100</span>
            </div>

            <div className="mt-6 grid grid-cols-2 gap-4 md:grid-cols-4">
              <KV label="Loan requested" value={formatEur(p.loan.requestedEur)} />
              <KV label="Tenor" value={`${p.loan.tenorYears}y`} />
              <KV label="Rate" value={`${(p.loan.rateBps / 100).toFixed(2)}%`} />
              <KV label="LTV" value={`${(p.collateral.ltv * 100).toFixed(0)}%`} />
              <KV label="DSCR" value={`${p.metrics.dscr.toFixed(2)}x`} />
              <KV label="IRR" value={`${p.metrics.irrPct.toFixed(1)}%`} />
              <KV label="Yield" value={`${p.metrics.rentalYieldPct.toFixed(1)}%`} />
              <KV label="Rate sens." value={`${p.metrics.interestSensitivityBps}bps`} />
            </div>
            <div className="mt-4 text-xs text-neutral-600">
              <span className="font-semibold text-neutral-900">Structure:</span> {p.loan.structure}
              <br />
              <span className="font-semibold text-neutral-900">Margin grid:</span> {p.loan.indicativeMargin}
            </div>
          </div>

          <div className="space-y-3">
            <Card className="border-0 bg-neutral-900 text-white ring-1 ring-amber-300/30">
              <CardContent className="space-y-2 p-5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-amber-300">Collateral</div>
                <div className="text-sm font-semibold">{p.collateral.type}</div>
                <div className="text-xs text-neutral-200">Appraised: {formatEur(p.collateral.appraisedValueEur)}</div>
                <div className="text-xs text-neutral-200">Coverage: {p.collateral.coverage}</div>
              </CardContent>
            </Card>
            <Card className="border-0 bg-emerald-50 ring-1 ring-emerald-200">
              <CardContent className="space-y-2 p-5">
                <div className="text-[11px] font-semibold uppercase tracking-wider text-emerald-700">ESG</div>
                <div className="flex items-center gap-2">
                  <div className="text-2xl font-semibold text-emerald-900">{p.esg.score}</div>
                  <div className="text-xs text-emerald-800">{p.esg.rating}</div>
                </div>
                <div className="flex flex-wrap gap-1">
                  {p.esg.certifications.map((c) => (
                    <span key={c} className="rounded-full bg-white px-2 py-0.5 text-[10px] font-semibold text-emerald-800 ring-1 ring-emerald-200">
                      {c}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </GlassCard>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-0 ring-1 ring-neutral-200">
          <CardHeader>
            <CardTitle className="text-base">Covenants</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {p.covenants.map((c) => (
              <div key={c.name} className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 text-xs">
                <span className="font-semibold text-neutral-900">{c.name}</span>
                <span className="text-neutral-500">Threshold: {c.threshold}</span>
                <span className="rounded-full bg-emerald-100 px-2 py-0.5 font-semibold text-emerald-800">{c.observed}</span>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 ring-1 ring-neutral-200">
          <CardHeader>
            <CardTitle className="text-base">Documents checklist</CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {p.documents.map((d) => (
              <div key={d.name} className="flex items-center justify-between rounded-lg bg-neutral-50 px-3 py-2 text-xs">
                <span className="text-neutral-800">{d.name}</span>
                {d.status === "Verified" && (
                  <span className="inline-flex items-center gap-1 text-emerald-700">
                    <CheckCircle2 className="h-3.5 w-3.5" /> Verified
                  </span>
                )}
                {d.status === "Received" && (
                  <span className="inline-flex items-center gap-1 text-neutral-700">
                    <FileCheck2 className="h-3.5 w-3.5" /> Received
                  </span>
                )}
                {d.status === "Pending" && (
                  <span className="inline-flex items-center gap-1 text-amber-700">
                    <Hourglass className="h-3.5 w-3.5" /> Pending
                  </span>
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Card className="border-0 ring-1 ring-rose-200 bg-gradient-to-br from-rose-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <AlertTriangle className="h-4 w-4 text-rose-600" /> AI red flags
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {p.redFlags.map((f) => (
              <div key={f.title} className="rounded-lg border border-rose-100 bg-white p-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-neutral-900">{f.title}</div>
                  <RiskBadge level={f.severity} />
                </div>
                <div className="mt-1 text-xs text-neutral-700">{f.note}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 ring-1 ring-amber-200 bg-gradient-to-br from-amber-50 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Sparkles className="h-4 w-4 text-amber-600" /> AI opportunities
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2">
            {p.opportunities.map((o) => (
              <div key={o.title} className="rounded-lg border border-amber-100 bg-white p-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-neutral-900">{o.title}</div>
                  <span className="rounded-full bg-amber-100 px-2 py-0.5 text-[11px] font-semibold text-amber-900">
                    +{formatEur(o.revenueEur)} NPV
                  </span>
                </div>
                <div className="mt-1 text-xs text-neutral-700">{o.note}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <SectionTitle
        eyebrow="AI-generated"
        title="Relationship & credit memo (Claude draft)"
        description="Memo cites every figure to its underlying source. Underwriter reviews before submission."
      />
      <Card className="border-0 ring-1 ring-neutral-200">
        <CardContent className="space-y-3 p-6 text-sm leading-relaxed text-neutral-800">
          {p.memo.map((line, i) => (
            <p key={i} className="flex gap-3">
              <span className="mt-1 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-amber-500" />
              <span>{line}</span>
            </p>
          ))}
          <div className="mt-4 flex flex-wrap items-center gap-2 border-t border-neutral-100 pt-3">
            <AlertChip tone="emerald">Evidence-first</AlertChip>
            <AlertChip>Sponsor letter pending</AlertChip>
            <AlertChip>Hedge mandate recommended</AlertChip>
          </div>
        </CardContent>
      </Card>

      <SectionTitle
        eyebrow="Governance"
        title="Human approval chain"
        description="No autonomous credit actions — every gate is a named human approver."
      />
      <Card className="border-0 ring-1 ring-neutral-200">
        <CardContent className="grid gap-3 p-6 md:grid-cols-4">
          {p.approvalChain.map((a) => (
            <div key={a.role} className="rounded-xl border border-neutral-200 p-4">
              <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">{a.role}</div>
              <div className="mt-1 text-sm font-semibold text-neutral-900">{a.name}</div>
              <div className="mt-2 inline-flex items-center gap-1 text-xs">
                {a.status === "Approved" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-50 px-2 py-0.5 text-emerald-700 ring-1 ring-emerald-200">
                    <CheckCircle2 className="h-3 w-3" /> Approved
                  </span>
                )}
                {a.status === "Pending" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-amber-800 ring-1 ring-amber-200">
                    <Clock className="h-3 w-3" /> Pending
                  </span>
                )}
                {a.status === "Awaiting" && (
                  <span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-neutral-700 ring-1 ring-neutral-200">
                    <UserCheck className="h-3 w-3" /> Awaiting
                  </span>
                )}
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-neutral-500">
        <ShieldCheck className="h-3.5 w-3.5 text-emerald-600" />
        Every output above carries an evidence link to its underlying document or signal — auditable by Risk and Internal Audit.
      </div>
    </PageShell>
  );
}

function KV({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg bg-neutral-50 px-3 py-2">
      <div className="text-[10px] uppercase tracking-wider text-neutral-500">{label}</div>
      <div className="text-sm font-semibold text-neutral-900">{value}</div>
    </div>
  );
}
