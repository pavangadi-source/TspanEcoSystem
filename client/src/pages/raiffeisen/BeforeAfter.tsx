import { Check, X, ArrowRight, Sparkles } from "lucide-react";
import { PageShell } from "@/components/raiffeisen/PageShell";
import { SectionTitle } from "@/components/raiffeisen/primitives";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { beforeAfter } from "@/lib/raiffeisen-mock-data";

export default function BeforeAfter() {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="Transformation"
        title="Before Claude · After Claude"
        description="Same Real Estate Finance desk. Same bank policy. Different operating model."
      />

      <div className="grid gap-6 lg:grid-cols-2">
        <Card className="border-0 ring-1 ring-rose-200 bg-gradient-to-br from-rose-50/70 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <span className="rounded-full bg-rose-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-rose-700">
                Before
              </span>
              Manual, fragmented, lagging
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2.5">
            {beforeAfter.before.map((line, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white/70 p-3 ring-1 ring-rose-100">
                <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-rose-100 text-rose-700">
                  <X className="h-3 w-3" />
                </div>
                <p className="text-sm text-neutral-700">{line}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card className="border-0 ring-1 ring-emerald-200 bg-gradient-to-br from-emerald-50/70 to-white">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-emerald-700">
                After
              </span>
              Evidence-first, agentic, leadership-ready
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-2.5">
            {beforeAfter.after.map((line, i) => (
              <div key={i} className="flex items-start gap-3 rounded-lg bg-white/70 p-3 ring-1 ring-emerald-100">
                <div className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-emerald-100 text-emerald-700">
                  <Check className="h-3 w-3" />
                </div>
                <p className="text-sm text-neutral-700">{line}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      <SectionTitle eyebrow="The day, redesigned" title="One Monday morning, two ways" />

      <Card className="border-0 ring-1 ring-neutral-200">
        <CardContent className="grid gap-0 p-0 md:grid-cols-2">
          <div className="border-b border-neutral-200 p-6 md:border-b-0 md:border-r">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-rose-600">Before</div>
            <ol className="space-y-3 text-sm text-neutral-700">
              <li>08:30 — Open eight tabs, three spreadsheets, two CRM views.</li>
              <li>09:45 — Email chain with risk to reconcile DSCR forecast.</li>
              <li>11:00 — Manually flag ESG documents and chase the developer.</li>
              <li>14:00 — Start drafting the credit memo from scratch.</li>
              <li>17:00 — Memo half-done; covenant breach in Floridsdorf still unseen.</li>
            </ol>
          </div>
          <div className="p-6">
            <div className="mb-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-600">After</div>
            <ol className="space-y-3 text-sm text-neutral-700">
              <li>08:30 — Command Center opens with 4 ranked next-best-actions.</li>
              <li>09:00 — Vienna Green Living Quarter twin shows AI memo + red flags.</li>
              <li>09:30 — ESG Finance Agent confirms taxonomy eligibility with evidence pack.</li>
              <li>10:00 — Covenant Watch Agent surfaces Floridsdorf breach; restructuring prep starts.</li>
              <li>11:30 — Executive Brief sent to the Real Estate Finance Board, fully linked.</li>
            </ol>
          </div>
        </CardContent>
      </Card>

      <div className="mt-10 rounded-2xl bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-900 p-6 text-white">
        <div className="flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-amber-300" />
          <div className="text-sm">
            Same Max. Same bank. Same governance. Different cycle time, different visibility, different
            relationship NPV.
          </div>
          <a
            href="/raiffeisen/executive-brief"
            className="ml-auto inline-flex items-center gap-2 rounded-lg bg-amber-400 px-4 py-2 text-sm font-semibold text-neutral-900 hover:bg-amber-300"
          >
            See the executive brief <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </PageShell>
  );
}
