import { ReactNode } from "react";
import { ArrowUpRight, Building2, Sparkles, ShieldCheck, AlertTriangle, TrendingUp, TrendingDown, Minus } from "lucide-react";
import { cn } from "@/lib/utils";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { RiskLevel } from "@/lib/raiffeisen-mock-data";

export function SectionTitle({
  eyebrow,
  title,
  description,
  action,
}: {
  eyebrow?: string;
  title: string;
  description?: string;
  action?: ReactNode;
}) {
  return (
    <div className="mb-6 flex flex-col gap-3 md:flex-row md:items-end md:justify-between">
      <div>
        {eyebrow && (
          <div className="mb-1.5 text-[11px] font-semibold uppercase tracking-[0.18em] text-amber-600">
            {eyebrow}
          </div>
        )}
        <h2 className="text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">{title}</h2>
        {description && (
          <p className="mt-2 max-w-2xl text-sm text-neutral-600">{description}</p>
        )}
      </div>
      {action}
    </div>
  );
}

export function MetricCard({
  label,
  value,
  delta,
  icon,
  tone = "neutral",
}: {
  label: string;
  value: string;
  delta?: string;
  icon?: ReactNode;
  tone?: "neutral" | "positive" | "warning" | "danger";
}) {
  const toneRing = {
    neutral: "ring-neutral-200",
    positive: "ring-emerald-200",
    warning: "ring-amber-200",
    danger: "ring-rose-200",
  }[tone];
  const toneText = {
    neutral: "text-neutral-700",
    positive: "text-emerald-700",
    warning: "text-amber-700",
    danger: "text-rose-700",
  }[tone];
  return (
    <Card className={cn("relative overflow-hidden border-0 shadow-sm ring-1", toneRing)} data-testid={`metric-${label.toLowerCase().replace(/\s+/g, "-")}`}>
      <div className="pointer-events-none absolute -right-6 -top-6 h-24 w-24 rounded-full bg-gradient-to-br from-amber-200/40 to-transparent blur-2xl" />
      <CardContent className="relative p-5">
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">{label}</span>
          {icon && <div className="text-neutral-400">{icon}</div>}
        </div>
        <div className="mt-2 text-2xl font-semibold tracking-tight text-neutral-900 md:text-3xl">
          {value}
        </div>
        {delta && <div className={cn("mt-1 text-xs font-medium", toneText)}>{delta}</div>}
      </CardContent>
    </Card>
  );
}

const RISK_STYLES: Record<RiskLevel, string> = {
  low: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  moderate: "bg-amber-50 text-amber-800 ring-amber-200",
  elevated: "bg-orange-50 text-orange-800 ring-orange-200",
  high: "bg-rose-50 text-rose-700 ring-rose-200",
};

export function RiskBadge({ level }: { level: RiskLevel }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold capitalize ring-1",
        RISK_STYLES[level]
      )}
      data-testid={`risk-${level}`}
    >
      <ShieldCheck className="h-3 w-3" />
      {level}
    </span>
  );
}

export function TrendIcon({ trend }: { trend: "improving" | "stable" | "deteriorating" }) {
  if (trend === "improving") return <TrendingUp className="h-3.5 w-3.5 text-emerald-600" />;
  if (trend === "deteriorating") return <TrendingDown className="h-3.5 w-3.5 text-rose-600" />;
  return <Minus className="h-3.5 w-3.5 text-neutral-500" />;
}

export function OpportunityCard({
  title,
  rationale,
  impact,
  effort,
  owner,
}: {
  title: string;
  rationale: string;
  impact: string;
  effort: string;
  owner: string;
}) {
  return (
    <Card className="group h-full border-0 ring-1 ring-neutral-200 transition hover:ring-amber-300 hover:shadow-md">
      <CardHeader className="pb-2">
        <div className="flex items-start justify-between">
          <CardTitle className="text-sm font-semibold leading-snug text-neutral-900">
            {title}
          </CardTitle>
          <ArrowUpRight className="h-4 w-4 text-neutral-300 transition group-hover:text-neutral-900" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pt-0">
        <p className="text-xs text-neutral-600">{rationale}</p>
        <div className="flex flex-wrap gap-1.5">
          <Badge variant="outline" className="border-amber-300 bg-amber-50 text-amber-800">
            <Sparkles className="mr-1 h-3 w-3" /> {impact}
          </Badge>
          <Badge variant="outline" className="border-neutral-300 text-neutral-700">
            Effort: {effort}
          </Badge>
        </div>
        <div className="flex items-center gap-1.5 text-[11px] text-neutral-500">
          <Building2 className="h-3 w-3" /> Owner: <span className="font-medium text-neutral-700">{owner}</span>
        </div>
      </CardContent>
    </Card>
  );
}

export function GlassCard({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={cn(
        "relative overflow-hidden rounded-2xl border border-white/60 bg-white/70 p-6 shadow-sm backdrop-blur-xl ring-1 ring-neutral-200",
        className
      )}
    >
      <div className="pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-amber-200/30 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-16 -left-12 h-40 w-40 rounded-full bg-neutral-200/40 blur-3xl" />
      <div className="relative">{children}</div>
    </div>
  );
}

export function AlertChip({ children, tone = "amber" }: { children: ReactNode; tone?: "amber" | "rose" | "emerald" }) {
  const t = {
    amber: "bg-amber-50 text-amber-800 ring-amber-200",
    rose: "bg-rose-50 text-rose-700 ring-rose-200",
    emerald: "bg-emerald-50 text-emerald-700 ring-emerald-200",
  }[tone];
  return (
    <span className={cn("inline-flex items-center gap-1 rounded-full px-2 py-0.5 text-[11px] font-semibold ring-1", t)}>
      <AlertTriangle className="h-3 w-3" />
      {children}
    </span>
  );
}
