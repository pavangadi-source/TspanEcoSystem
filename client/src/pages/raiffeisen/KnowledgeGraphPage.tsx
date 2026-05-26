import { ArrowRight, Network, Sparkles } from "lucide-react";
import { PageShell } from "@/components/raiffeisen/PageShell";
import { SectionTitle, GlassCard } from "@/components/raiffeisen/primitives";
import { KnowledgeGraphViz } from "@/components/raiffeisen/KnowledgeGraphViz";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const INSIGHTS = [
  {
    title: "Hidden cross-sell — Donaupark → green bond",
    detail:
      "Knowledge graph joins the borrower's earnings-call signal to the Going Green Credit programme and treasury hedging desk, surfacing a mandate fee + IRS opportunity worth €2.4m NPV.",
    chain: ["Donaupark Development GmbH", "Public filings", "ESG taxonomy", "Treasury hedging", "Cross-sell"],
  },
  {
    title: "Concentration risk — Floridsdorf submarket",
    detail:
      "Two borrowers in the same submarket trigger a concentration signal once tenant occupancy drops. Graph reasoning brings the covenant breach into the relationship manager's daily view.",
    chain: ["Floridsdorf Office Campus", "DonauCity Office Partners", "Market data", "Covenant Watch", "Risk dashboard"],
  },
  {
    title: "ESG retrofit pipeline — Vienna stock pre-2000",
    detail:
      "Graph identifies €318m of pre-2000 building exposure, links it to the Mariahilf Retrofit Programme and the city's new subsidy registry, and turns transition risk into green-book growth.",
    chain: ["Mortgage portfolio", "Pre-2000 stock", "City of Vienna subsidies", "ESG retrofit finance", "Green book growth"],
  },
];

export default function KnowledgeGraphPage() {
  return (
    <PageShell>
      <SectionTitle
        eyebrow="Knowledge graph"
        title="Borrower, property, covenant, ESG and market — joined."
        description="Claude reads the graph to find opportunities humans would miss across the Real Estate Finance book."
        action={
          <Badge variant="outline" className="border-amber-300 bg-amber-50 text-amber-800">
            <Network className="mr-1 h-3 w-3" /> 16 entities · 18+ relationships
          </Badge>
        }
      />

      <GlassCard>
        <KnowledgeGraphViz />
      </GlassCard>

      <SectionTitle
        eyebrow="What the graph reveals"
        title="Three relationship insights Claude surfaces automatically"
      />

      <div className="grid gap-4 md:grid-cols-3">
        {INSIGHTS.map((i) => (
          <Card key={i.title} className="border-0 ring-1 ring-neutral-200">
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-semibold leading-snug">{i.title}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <p className="text-xs text-neutral-700">{i.detail}</p>
              <div className="flex flex-wrap items-center gap-1.5">
                {i.chain.map((step, idx) => (
                  <span key={idx} className="inline-flex items-center gap-1">
                    <span className="rounded-full bg-neutral-100 px-2 py-0.5 text-[10px] font-medium text-neutral-700">
                      {step}
                    </span>
                    {idx < i.chain.length - 1 && <ArrowRight className="h-3 w-3 text-neutral-400" />}
                  </span>
                ))}
              </div>
              <div className="inline-flex items-center gap-1 rounded-full bg-amber-50 px-2 py-0.5 text-[10px] font-semibold text-amber-800 ring-1 ring-amber-200">
                <Sparkles className="h-3 w-3" /> Claude-surfaced · evidence-linked
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageShell>
  );
}
