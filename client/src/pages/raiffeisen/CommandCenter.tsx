import {
  Activity,
  TrendingUp,
  Leaf,
  Users,
  AlertTriangle,
  MapPin,
  Sparkles,
  Gauge,
  ArrowRight,
} from "lucide-react";
import {
  AreaChart,
  Area,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  BarChart,
  Bar,
  Cell,
} from "recharts";
import { PageShell } from "@/components/raiffeisen/PageShell";
import {
  MetricCard,
  SectionTitle,
  OpportunityCard,
  RiskBadge,
  TrendIcon,
  AlertChip,
} from "@/components/raiffeisen/primitives";
import { AgentCard } from "@/components/raiffeisen/AgentCard";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import {
  pipelineDeals,
  relationshipSignals,
  riskSignals,
  esgOpportunities,
  regionalExposure,
  covenantAlerts,
  aiRecommendations,
  agentSpecs,
  portfolioTrend,
  formatEur,
} from "@/lib/raiffeisen-mock-data";

export default function CommandCenter() {
  const totalPipeline = pipelineDeals.reduce((s, d) => s + d.volumeEur, 0);
  const greenShare =
    pipelineDeals.filter((d) => d.esgScore >= 75).reduce((s, d) => s + d.volumeEur, 0) /
    totalPipeline;
  const totalExposure = regionalExposure.reduce((s, r) => s + r.exposureEur, 0);
  const watchExposure = riskSignals.reduce((s, r) => s + r.exposureEur, 0);

  return (
    <PageShell>
      <SectionTitle
        eyebrow="Monday morning · Real Estate Finance"
        title="AI Command Center"
        description="Live, evidence-linked view of pipeline, mortgage portfolio, ESG opportunities, covenants and relationships — ranked by Claude, owned by Max."
        action={
          <Badge variant="outline" className="border-amber-300 bg-amber-50 text-amber-800">
            <Activity className="mr-1 h-3 w-3" /> 7 active agents · 4 next-best-actions
          </Badge>
        }
      />

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <MetricCard label="Active pipeline" value={formatEur(totalPipeline)} delta="+12.4% QoQ" tone="positive" icon={<TrendingUp className="h-4 w-4" />} />
        <MetricCard label="Mortgage-backed exposure" value={formatEur(totalExposure)} delta="Vienna 60% · NÖ 40%" icon={<MapPin className="h-4 w-4" />} />
        <MetricCard label="Green book share" value={`${(greenShare * 100).toFixed(0)}%`} delta="ESG-eligible volume" tone="positive" icon={<Leaf className="h-4 w-4" />} />
        <MetricCard label="Watchlist exposure" value={formatEur(watchExposure)} delta="2 covenant alerts" tone="warning" icon={<AlertTriangle className="h-4 w-4" />} />
      </div>

      <div className="mt-8 grid gap-6 lg:grid-cols-3">
        <Card className="lg:col-span-2 border-0 ring-1 ring-neutral-200">
          <CardHeader>
            <div className="flex items-start justify-between">
              <div>
                <CardTitle className="text-base">Portfolio composition — green vs. traditional</CardTitle>
                <p className="text-xs text-neutral-500">Monthly book €m · synthetic 12-month view</p>
              </div>
              <Badge variant="outline" className="border-emerald-300 bg-emerald-50 text-emerald-800">
                <Sparkles className="mr-1 h-3 w-3" /> +€420m modelled green uplift
              </Badge>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={portfolioTrend}>
                  <defs>
                    <linearGradient id="g-green" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10b981" stopOpacity={0.5} />
                      <stop offset="100%" stopColor="#10b981" stopOpacity={0} />
                    </linearGradient>
                    <linearGradient id="g-trad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#f59e0b" stopOpacity={0.4} />
                      <stop offset="100%" stopColor="#f59e0b" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis dataKey="month" tick={{ fontSize: 11 }} />
                  <YAxis tick={{ fontSize: 11 }} />
                  <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} />
                  <Area type="monotone" dataKey="traditional" stroke="#f59e0b" fill="url(#g-trad)" strokeWidth={2} name="Traditional RE" />
                  <Area type="monotone" dataKey="green" stroke="#10b981" fill="url(#g-green)" strokeWidth={2} name="Green / ESG" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        <Card className="border-0 ring-1 ring-neutral-200">
          <CardHeader>
            <CardTitle className="text-base">Regional exposure</CardTitle>
            <p className="text-xs text-neutral-500">Vienna & Lower Austria · €m</p>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={regionalExposure} layout="vertical" margin={{ left: 10, right: 10 }}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                  <XAxis type="number" tick={{ fontSize: 11 }} hide />
                  <YAxis type="category" dataKey="region" width={140} tick={{ fontSize: 10 }} />
                  <Tooltip contentStyle={{ borderRadius: 8, fontSize: 12 }} formatter={(v: number) => `€${(v / 1_000_000).toFixed(0)}m`} />
                  <Bar dataKey="exposureEur" radius={[4, 4, 4, 4]}>
                    {regionalExposure.map((_, i) => (
                      <Cell key={i} fill={i % 2 === 0 ? "#0a0a0a" : "#f59e0b"} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>

      <SectionTitle
        eyebrow="Pipeline"
        title="Active real estate finance deals"
        description="Ranked by relationship NPV; Claude provides next-action context per deal."
      />
      <Card className="border-0 ring-1 ring-neutral-200">
        <CardContent className="overflow-x-auto p-0">
          <table className="w-full text-sm">
            <thead className="bg-neutral-50 text-[11px] uppercase tracking-wider text-neutral-500">
              <tr>
                <th className="px-4 py-3 text-left">ID</th>
                <th className="px-4 py-3 text-left">Project · Developer</th>
                <th className="px-4 py-3 text-left">Region · Segment</th>
                <th className="px-4 py-3 text-right">Volume</th>
                <th className="px-4 py-3 text-right">LTV</th>
                <th className="px-4 py-3 text-right">ESG</th>
                <th className="px-4 py-3 text-left">Stage · Risk</th>
                <th className="px-4 py-3 text-left">Next action</th>
              </tr>
            </thead>
            <tbody>
              {pipelineDeals.map((d) => (
                <tr key={d.id} className="border-t border-neutral-100 align-top text-xs hover:bg-neutral-50" data-testid={`deal-${d.id}`}>
                  <td className="px-4 py-3 font-mono text-[11px] text-neutral-500">{d.id}</td>
                  <td className="px-4 py-3">
                    <div className="font-semibold text-neutral-900">{d.project}</div>
                    <div className="text-[11px] text-neutral-500">{d.developer}</div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-neutral-800">{d.region}</div>
                    <div className="text-[11px] text-neutral-500">{d.segment}</div>
                  </td>
                  <td className="px-4 py-3 text-right font-semibold tabular-nums">{formatEur(d.volumeEur)}</td>
                  <td className="px-4 py-3 text-right tabular-nums">{(d.ltv * 100).toFixed(0)}%</td>
                  <td className="px-4 py-3 text-right">
                    <div className="flex items-center justify-end gap-1.5">
                      <Leaf className="h-3 w-3 text-emerald-600" />
                      <span className="tabular-nums">{d.esgScore}</span>
                    </div>
                  </td>
                  <td className="px-4 py-3">
                    <div className="text-neutral-800">{d.stage}</div>
                    <RiskBadge level={d.risk} />
                  </td>
                  <td className="px-4 py-3 text-neutral-700">{d.nextAction}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </CardContent>
      </Card>

      <SectionTitle
        eyebrow="Claude · next-best-actions"
        title="AI-recommended actions ranked by relationship NPV"
        description="Each action carries an evidence pack and a named human approver."
      />
      <div className="grid gap-4 md:grid-cols-2">
        {aiRecommendations.map((r) => (
          <OpportunityCard
            key={r.id}
            title={r.title}
            rationale={r.rationale}
            impact={`+${formatEur(r.expectedImpactEur)} NPV`}
            effort={r.effort}
            owner={r.owner}
          />
        ))}
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="border-0 ring-1 ring-neutral-200">
          <CardHeader>
            <CardTitle className="text-base">Covenant Watch</CardTitle>
            <p className="text-xs text-neutral-500">Continuous monitoring · evidence-linked</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {covenantAlerts.map((c) => (
              <div key={c.id} className="rounded-lg border border-neutral-200 p-3" data-testid={`covenant-${c.id}`}>
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-neutral-900">{c.borrower}</div>
                  {c.status === "Breach" && <AlertChip tone="rose">Breach</AlertChip>}
                  {c.status === "Watch" && <AlertChip tone="amber">Watch</AlertChip>}
                  {c.status === "Within" && <AlertChip tone="emerald">Within</AlertChip>}
                </div>
                <div className="mt-1 text-[12px] text-neutral-700">{c.covenant}</div>
                <div className="mt-2 grid grid-cols-2 gap-2 text-[11px]">
                  <div className="rounded bg-neutral-50 px-2 py-1">
                    <div className="text-neutral-500">Threshold</div>
                    <div className="font-semibold text-neutral-900">{c.threshold}</div>
                  </div>
                  <div className="rounded bg-neutral-50 px-2 py-1">
                    <div className="text-neutral-500">Observed</div>
                    <div className="font-semibold text-neutral-900">{c.observed}</div>
                  </div>
                </div>
                <div className="mt-2 text-[11px] text-neutral-600">{c.action}</div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 ring-1 ring-neutral-200">
          <CardHeader>
            <CardTitle className="text-base">Portfolio risk signals</CardTitle>
            <p className="text-xs text-neutral-500">Macro, ESG-transition and concentration drivers</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {riskSignals.map((r) => (
              <div key={r.id} className="rounded-lg border border-neutral-200 p-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-neutral-900">{r.topic}</div>
                  <RiskBadge level={r.level} />
                </div>
                <div className="mt-1 flex items-center gap-2 text-[11px] text-neutral-500">
                  <TrendIcon trend={r.trend} />
                  Exposure {formatEur(r.exposureEur)} · {r.trend}
                </div>
                <div className="mt-2 text-[11px] text-neutral-600">{r.detail}</div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-2">
        <Card className="border-0 ring-1 ring-neutral-200">
          <CardHeader>
            <CardTitle className="text-base">Relationship signals</CardTitle>
            <p className="text-xs text-neutral-500">Cross-sell, retention, ESG — sourced and ranked</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {relationshipSignals.map((s) => (
              <div key={s.id} className="flex items-start gap-3 rounded-lg border border-neutral-200 p-3">
                <div className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-amber-100 text-amber-700">
                  <Users className="h-4 w-4" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between gap-2">
                    <div className="text-sm font-semibold text-neutral-900">{s.client}</div>
                    <Badge variant="outline" className="border-neutral-300 text-[10px]">{s.impact}</Badge>
                  </div>
                  <div className="mt-0.5 text-[12px] text-neutral-700">{s.signal}</div>
                  <div className="mt-1 flex items-center justify-between text-[11px] text-neutral-500">
                    <span>{s.source} · {s.ts}</span>
                    <span>conf {(s.confidence * 100).toFixed(0)}%</span>
                  </div>
                  <div className="mt-1.5">
                    <Progress value={s.confidence * 100} className="h-1" />
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 ring-1 ring-neutral-200">
          <CardHeader>
            <CardTitle className="text-base">ESG transformation opportunities</CardTitle>
            <p className="text-xs text-neutral-500">Going Green Credit Real Estate eligibility</p>
          </CardHeader>
          <CardContent className="space-y-3">
            {esgOpportunities.map((o) => (
              <div key={o.id} className="rounded-lg border border-neutral-200 p-3">
                <div className="flex items-center justify-between">
                  <div className="text-sm font-semibold text-neutral-900">{o.project}</div>
                  <Badge variant="outline" className="border-emerald-300 bg-emerald-50 text-emerald-800">
                    {o.status}
                  </Badge>
                </div>
                <div className="text-[11px] text-neutral-500">{o.client}</div>
                <div className="mt-2 text-[12px] text-neutral-700">{o.measure}</div>
                <div className="mt-2 grid grid-cols-3 gap-2 text-[11px]">
                  <div className="rounded bg-neutral-50 px-2 py-1">
                    <div className="text-neutral-500">CapEx</div>
                    <div className="font-semibold text-neutral-900">{formatEur(o.capexEur)}</div>
                  </div>
                  <div className="rounded bg-neutral-50 px-2 py-1">
                    <div className="text-neutral-500">Impact</div>
                    <div className="font-semibold text-emerald-700">{o.expectedCo2Reduction}</div>
                  </div>
                  <div className="rounded bg-neutral-50 px-2 py-1">
                    <div className="text-neutral-500">Programme</div>
                    <div className="font-semibold text-neutral-900 text-[10px]">{o.eligibleProgramme}</div>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <SectionTitle
        eyebrow="The crew"
        title="Eight Claude-style agents, one human approver"
        description="Each agent shows input, reasoning, output, human gate and business impact — the same posture you would deploy in production."
      />
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {agentSpecs.map((a) => (
          <AgentCard key={a.id} agent={a} />
        ))}
      </div>

      <div className="mt-10 flex items-center justify-between rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 p-6 text-white">
        <div>
          <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-300">Revenue opportunity score</div>
          <div className="mt-1 text-2xl font-semibold">
            87 <span className="text-base text-neutral-300">/ 100</span>
          </div>
          <div className="text-xs text-amber-200">Risk-adjusted growth score: 78 / 100</div>
        </div>
        <Gauge className="h-12 w-12 text-amber-300" />
        <a href="/raiffeisen/executive-brief" className="inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-amber-300">
          Generate executive brief <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </PageShell>
  );
}
