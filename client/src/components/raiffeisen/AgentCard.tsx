import { Bot, ArrowRight, ShieldCheck, Target, Brain, FileOutput, UserCheck, TrendingUp } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { AgentSpec } from "@/lib/raiffeisen-mock-data";

export function AgentCard({ agent }: { agent: AgentSpec }) {
  return (
    <Card className="group h-full overflow-hidden border-0 ring-1 ring-neutral-200 transition hover:ring-amber-300 hover:shadow-md" data-testid={`agent-${agent.id}`}>
      <div className="flex items-center gap-3 border-b border-neutral-100 bg-gradient-to-r from-neutral-900 to-neutral-800 px-5 py-3 text-white">
        <div className="grid h-9 w-9 place-items-center rounded-lg bg-amber-400 text-black ring-1 ring-amber-300">
          <Bot className="h-4 w-4" />
        </div>
        <div className="flex-1">
          <div className="text-sm font-semibold">{agent.name}</div>
          <div className="text-[11px] text-amber-200">{agent.purpose}</div>
        </div>
      </div>
      <CardContent className="space-y-3 p-5 text-xs">
        <Row icon={<Target className="h-3.5 w-3.5" />} label="Input" value={agent.input} />
        <Row icon={<Brain className="h-3.5 w-3.5" />} label="Reasoning" value={agent.reasoning} />
        <Row icon={<FileOutput className="h-3.5 w-3.5" />} label="Output" value={agent.output} />
        <Row icon={<UserCheck className="h-3.5 w-3.5" />} label="Human gate" value={agent.humanGate} />
        <div className="mt-2 flex items-center gap-2 rounded-lg bg-amber-50 px-3 py-2 ring-1 ring-amber-200">
          <TrendingUp className="h-3.5 w-3.5 text-amber-700" />
          <span className="text-[11px] font-medium text-amber-900">{agent.impact}</span>
        </div>
        <div className="flex items-center gap-2 text-[11px] text-neutral-500">
          <ShieldCheck className="h-3 w-3 text-emerald-600" />
          Evidence-first · auditable trail
          <ArrowRight className="ml-auto h-3 w-3 transition group-hover:translate-x-1" />
        </div>
      </CardContent>
    </Card>
  );
}

function Row({ icon, label, value }: { icon: React.ReactNode; label: string; value: string }) {
  return (
    <div className="flex gap-2">
      <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-md bg-neutral-100 text-neutral-600">
        {icon}
      </div>
      <div className="flex-1">
        <div className="text-[10px] font-semibold uppercase tracking-wider text-neutral-500">{label}</div>
        <div className="text-[12px] leading-snug text-neutral-700">{value}</div>
      </div>
    </div>
  );
}
