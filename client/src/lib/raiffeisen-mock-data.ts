// Strategic AI Concept Demo — synthetic data only.
// No real customer data. Prepared for executive discussion with
// Raiffeisenlandesbank Niederösterreich-Wien AG (short: Raiffeisen NÖ-Wien).

export type RiskLevel = "low" | "moderate" | "elevated" | "high";

export interface PipelineDeal {
  id: string;
  project: string;
  developer: string;
  region: "Vienna" | "Lower Austria" | "Cross-border";
  segment: "Residential" | "Commercial" | "Mixed-Use" | "ESG Retrofit";
  volumeEur: number;
  ltv: number;
  esgScore: number;
  stage: "Origination" | "Underwriting" | "Approval" | "Funded" | "Monitoring";
  risk: RiskLevel;
  probability: number;
  nextAction: string;
}

export interface RelationshipSignal {
  id: string;
  client: string;
  signal: string;
  source: string;
  ts: string;
  impact: "Cross-sell" | "Retention" | "Risk" | "ESG";
  confidence: number;
}

export interface RiskSignal {
  id: string;
  topic: string;
  exposureEur: number;
  trend: "improving" | "stable" | "deteriorating";
  level: RiskLevel;
  detail: string;
}

export interface EsgOpportunity {
  id: string;
  client: string;
  project: string;
  measure: string;
  capexEur: number;
  expectedCo2Reduction: string;
  eligibleProgramme: string;
  status: "Scoping" | "Eligible" | "Pre-approved" | "Funded";
}

export interface RegionalExposure {
  region: string;
  exposureEur: number;
  yoyChange: number;
  riskAdjustedReturn: number;
}

export interface CovenantAlert {
  id: string;
  borrower: string;
  covenant: string;
  threshold: string;
  observed: string;
  status: "Within" | "Watch" | "Breach";
  action: string;
}

export interface AiRecommendation {
  id: string;
  title: string;
  rationale: string;
  expectedImpactEur: number;
  effort: "Low" | "Medium" | "High";
  owner: string;
}

export interface DigitalTwinProject {
  name: string;
  developer: {
    name: string;
    sinceYear: number;
    rating: string;
    relationshipScore: number;
    portfolioCount: number;
  };
  loan: {
    requestedEur: number;
    tenorYears: number;
    rateBps: number;
    indicativeMargin: string;
    structure: string;
  };
  collateral: {
    type: string;
    appraisedValueEur: number;
    ltv: number;
    coverage: string;
  };
  esg: {
    score: number;
    rating: string;
    taxonomyAligned: boolean;
    certifications: string[];
  };
  metrics: {
    rentalYieldPct: number;
    irrPct: number;
    dscr: number;
    interestSensitivityBps: number;
  };
  covenants: { name: string; threshold: string; observed: string }[];
  documents: { name: string; status: "Received" | "Pending" | "Verified" }[];
  redFlags: { title: string; severity: RiskLevel; note: string }[];
  opportunities: { title: string; note: string; revenueEur: number }[];
  memo: string[];
  approvalChain: { role: string; name: string; status: "Pending" | "Approved" | "Awaiting" }[];
}

export interface ExecutiveBriefData {
  title: string;
  subtitle: string;
  whyNow: string[];
  businessImpact: { metric: string; value: string; note: string }[];
  riskGovernance: string[];
  useCase: string[];
  pilot90Day: { week: string; milestone: string }[];
  vercelReadiness: string[];
  productionPath: string[];
  agenda: { time: string; item: string }[];
}

export interface AgentSpec {
  id: string;
  name: string;
  purpose: string;
  input: string;
  reasoning: string;
  output: string;
  humanGate: string;
  impact: string;
}

export const pipelineDeals: PipelineDeal[] = [
  {
    id: "VGL-2026-014",
    project: "Vienna Green Living Quarter",
    developer: "Donaupark Development GmbH",
    region: "Vienna",
    segment: "Mixed-Use",
    volumeEur: 184_000_000,
    ltv: 0.62,
    esgScore: 84,
    stage: "Underwriting",
    risk: "moderate",
    probability: 0.72,
    nextAction: "Validate ESG taxonomy alignment & draft term sheet v2",
  },
  {
    id: "LAN-2026-031",
    project: "Krems Logistik Hub",
    developer: "Wachau Industrial AG",
    region: "Lower Austria",
    segment: "Commercial",
    volumeEur: 96_500_000,
    ltv: 0.58,
    esgScore: 71,
    stage: "Origination",
    risk: "low",
    probability: 0.55,
    nextAction: "Schedule site visit; request 36-month tenant roll",
  },
  {
    id: "RES-2026-022",
    project: "St. Pölten Residence Park",
    developer: "Niederösterreich Wohnbau eG",
    region: "Lower Austria",
    segment: "Residential",
    volumeEur: 64_000_000,
    ltv: 0.7,
    esgScore: 78,
    stage: "Approval",
    risk: "low",
    probability: 0.88,
    nextAction: "Route to credit committee with covenant pack v3",
  },
  {
    id: "ESG-2026-009",
    project: "Mariahilf Retrofit Programme",
    developer: "Wien Stadt Immobilien GmbH",
    region: "Vienna",
    segment: "ESG Retrofit",
    volumeEur: 38_200_000,
    ltv: 0.55,
    esgScore: 92,
    stage: "Origination",
    risk: "low",
    probability: 0.61,
    nextAction: "Match with Going Green Credit Real Estate framework",
  },
  {
    id: "COM-2026-040",
    project: "Floridsdorf Office Campus",
    developer: "DonauCity Office Partners",
    region: "Vienna",
    segment: "Commercial",
    volumeEur: 142_000_000,
    ltv: 0.68,
    esgScore: 64,
    stage: "Monitoring",
    risk: "elevated",
    probability: 0.4,
    nextAction: "Watch occupancy ratio; pre-discuss restructuring options",
  },
  {
    id: "MIX-2026-052",
    project: "Tulln Riverside Mixed-Use",
    developer: "AlpenImmo Holding AG",
    region: "Lower Austria",
    segment: "Mixed-Use",
    volumeEur: 71_000_000,
    ltv: 0.6,
    esgScore: 80,
    stage: "Underwriting",
    risk: "moderate",
    probability: 0.66,
    nextAction: "Request updated DSCR forecast; confirm tenant pre-leases",
  },
];

export const relationshipSignals: RelationshipSignal[] = [
  {
    id: "rs-01",
    client: "Donaupark Development GmbH",
    signal: "Quarterly earnings call mentioned green bond issuance in Q3",
    source: "Public filings",
    ts: "2026-05-18",
    impact: "Cross-sell",
    confidence: 0.86,
  },
  {
    id: "rs-02",
    client: "Wachau Industrial AG",
    signal: "Senior CFO change announced — historically positive for refinancing",
    source: "Press release",
    ts: "2026-05-12",
    impact: "Retention",
    confidence: 0.78,
  },
  {
    id: "rs-03",
    client: "Wien Stadt Immobilien GmbH",
    signal: "City of Vienna issued new ESG retrofit subsidy programme",
    source: "Public registry",
    ts: "2026-05-09",
    impact: "ESG",
    confidence: 0.93,
  },
  {
    id: "rs-04",
    client: "DonauCity Office Partners",
    signal: "Tenant occupancy decline of 4.1 pp QoQ in Floridsdorf submarket",
    source: "Market intel",
    ts: "2026-05-21",
    impact: "Risk",
    confidence: 0.81,
  },
  {
    id: "rs-05",
    client: "AlpenImmo Holding AG",
    signal: "Filed building permit for second phase in Tulln",
    source: "Public registry",
    ts: "2026-05-04",
    impact: "Cross-sell",
    confidence: 0.74,
  },
];

export const riskSignals: RiskSignal[] = [
  {
    id: "risk-01",
    topic: "Vienna office vacancy index",
    exposureEur: 412_000_000,
    trend: "deteriorating",
    level: "elevated",
    detail: "Submarket vacancy rose to 9.2%; concentrated in two borrowers.",
  },
  {
    id: "risk-02",
    topic: "Interest-rate sensitivity, floating-rate book",
    exposureEur: 980_000_000,
    trend: "stable",
    level: "moderate",
    detail: "+100bps stress reduces aggregate DSCR by 14%.",
  },
  {
    id: "risk-03",
    topic: "ESG transition risk — pre-2000 buildings",
    exposureEur: 318_000_000,
    trend: "improving",
    level: "moderate",
    detail: "Retrofit pipeline covers 41% of stranded-asset exposure.",
  },
  {
    id: "risk-04",
    topic: "Construction cost inflation",
    exposureEur: 226_000_000,
    trend: "stable",
    level: "moderate",
    detail: "Hedge programmes cover 62% of in-flight project costs.",
  },
];

export const esgOpportunities: EsgOpportunity[] = [
  {
    id: "esg-01",
    client: "Wien Stadt Immobilien GmbH",
    project: "Mariahilf Retrofit Programme",
    measure: "Façade insulation, district heating connection, PV roof",
    capexEur: 38_200_000,
    expectedCo2Reduction: "−42% CO₂e / year",
    eligibleProgramme: "Going Green Credit Real Estate",
    status: "Eligible",
  },
  {
    id: "esg-02",
    client: "AlpenImmo Holding AG",
    project: "Tulln Riverside Mixed-Use",
    measure: "Geothermal heating, taxonomy-aligned design",
    capexEur: 11_400_000,
    expectedCo2Reduction: "−28% CO₂e / year",
    eligibleProgramme: "EU Taxonomy linked green loan",
    status: "Pre-approved",
  },
  {
    id: "esg-03",
    client: "Niederösterreich Wohnbau eG",
    project: "St. Pölten Residence Park",
    measure: "Passive-house certification path",
    capexEur: 6_300_000,
    expectedCo2Reduction: "−35% CO₂e / year",
    eligibleProgramme: "klimaaktiv-linked finance",
    status: "Scoping",
  },
];

export const regionalExposure: RegionalExposure[] = [
  { region: "Vienna — Inner districts", exposureEur: 1_180_000_000, yoyChange: 0.062, riskAdjustedReturn: 0.143 },
  { region: "Vienna — Outer districts", exposureEur: 740_000_000, yoyChange: 0.041, riskAdjustedReturn: 0.121 },
  { region: "Lower Austria — Central", exposureEur: 612_000_000, yoyChange: 0.082, riskAdjustedReturn: 0.156 },
  { region: "Lower Austria — North", exposureEur: 318_000_000, yoyChange: 0.027, riskAdjustedReturn: 0.118 },
  { region: "Lower Austria — South", exposureEur: 264_000_000, yoyChange: 0.038, riskAdjustedReturn: 0.129 },
];

export const covenantAlerts: CovenantAlert[] = [
  {
    id: "cov-01",
    borrower: "DonauCity Office Partners",
    covenant: "Minimum occupancy ratio",
    threshold: "≥ 82%",
    observed: "79.4%",
    status: "Breach",
    action: "Schedule restructuring discussion; prepare amendment pack",
  },
  {
    id: "cov-02",
    borrower: "Donaupark Development GmbH",
    covenant: "DSCR (rolling 4Q)",
    threshold: "≥ 1.25x",
    observed: "1.27x",
    status: "Watch",
    action: "Refresh DSCR forecast with hedged rate scenario",
  },
  {
    id: "cov-03",
    borrower: "Wachau Industrial AG",
    covenant: "LTV ceiling",
    threshold: "≤ 65%",
    observed: "58.2%",
    status: "Within",
    action: "Confirm at next quarterly review",
  },
];

export const aiRecommendations: AiRecommendation[] = [
  {
    id: "rec-01",
    title: "Refinance Donaupark green tranche with EU-taxonomy linked margin",
    rationale: "Signals indicate green bond issuance; we can offer a 15bps step-down on taxonomy compliance.",
    expectedImpactEur: 2_400_000,
    effort: "Medium",
    owner: "Max V. Zechmann",
  },
  {
    id: "rec-02",
    title: "Pre-approve ESG retrofit envelope for Wien Stadt Immobilien",
    rationale: "Existing subsidy alignment + strong relationship score; accelerates decisioning by 6 weeks.",
    expectedImpactEur: 1_150_000,
    effort: "Low",
    owner: "ESG Finance Desk",
  },
  {
    id: "rec-03",
    title: "Initiate amendment dialogue with DonauCity Office Partners",
    rationale: "Occupancy breach; proactive restructuring preserves NPV vs. workout pathway.",
    expectedImpactEur: 4_800_000,
    effort: "High",
    owner: "Workout Advisory + Max V. Zechmann",
  },
  {
    id: "rec-04",
    title: "Cross-sell hedge programme to floating-rate borrowers >€50m",
    rationale: "Portfolio rate sensitivity exceeds target band; Treasury can structure interest-rate swaps.",
    expectedImpactEur: 1_900_000,
    effort: "Medium",
    owner: "Treasury Sales",
  },
];

export const digitalTwinProject: DigitalTwinProject = {
  name: "Vienna Green Living Quarter",
  developer: {
    name: "Donaupark Development GmbH",
    sinceYear: 2011,
    rating: "Investment grade — BBB equivalent",
    relationshipScore: 87,
    portfolioCount: 14,
  },
  loan: {
    requestedEur: 184_000_000,
    tenorYears: 12,
    rateBps: 285,
    indicativeMargin: "3M EURIBOR + 185 bps (taxonomy step-down −15 bps)",
    structure: "Senior secured, EU-taxonomy linked margin grid, 24-month draw",
  },
  collateral: {
    type: "First-rank mortgage on mixed-use development",
    appraisedValueEur: 296_700_000,
    ltv: 0.62,
    coverage: "1.61x at completion / 1.42x at peak draw",
  },
  esg: {
    score: 84,
    rating: "Aligned — Going Green Credit Real Estate",
    taxonomyAligned: true,
    certifications: ["klimaaktiv Gold (design)", "DGNB Platinum (target)", "EU Taxonomy art. 7"],
  },
  metrics: {
    rentalYieldPct: 4.6,
    irrPct: 9.8,
    dscr: 1.42,
    interestSensitivityBps: 175,
  },
  covenants: [
    { name: "LTV (drawn)", threshold: "≤ 65%", observed: "62.0%" },
    { name: "Pre-let ratio at draw 60%", threshold: "≥ 45%", observed: "51%" },
    { name: "Rolling DSCR", threshold: "≥ 1.25x", observed: "1.42x" },
    { name: "ESG taxonomy compliance", threshold: "Maintain", observed: "Verified" },
  ],
  documents: [
    { name: "Valuation report (independent)", status: "Verified" },
    { name: "ESG taxonomy assessment", status: "Verified" },
    { name: "Construction risk pack", status: "Received" },
    { name: "Tenant pre-let agreements", status: "Received" },
    { name: "Sponsor support letter", status: "Pending" },
    { name: "Hedging mandate confirmation", status: "Pending" },
  ],
  redFlags: [
    {
      title: "Sponsor support letter outstanding",
      severity: "moderate",
      note: "Required before approval committee; flagged for follow-up with developer CFO.",
    },
    {
      title: "Floating-rate exposure above policy band",
      severity: "moderate",
      note: "Recommend mandatory hedge of ≥ 60% notional during draw period.",
    },
  ],
  opportunities: [
    {
      title: "Green bond co-arrangement",
      note: "Sponsor signalled intent to issue €120m green bond in Q3; mandate fee opportunity.",
      revenueEur: 1_800_000,
    },
    {
      title: "Treasury hedging mandate",
      note: "Structure 60% IRS programme; recurring revenue + risk alignment.",
      revenueEur: 620_000,
    },
    {
      title: "Private banking referral",
      note: "Sponsor principals fit Premium Private Banking profile.",
      revenueEur: 480_000,
    },
  ],
  memo: [
    "Strategic flagship deal in Vienna inner-district regeneration corridor.",
    "EU taxonomy alignment supports Raiffeisen NÖ-Wien green book growth target.",
    "Relationship NPV uplift of €4.9m across financing, treasury, and private banking.",
    "Recommended subject to sponsor support letter and 60% interest-rate hedge.",
  ],
  approvalChain: [
    { role: "Key Account Manager", name: "Max V. Zechmann", status: "Approved" },
    { role: "Credit Risk", name: "Real Estate Credit Desk", status: "Pending" },
    { role: "ESG Committee", name: "Sustainable Finance Office", status: "Approved" },
    { role: "Approval Committee", name: "Real Estate Finance Board", status: "Awaiting" },
  ],
};

export const executiveBriefData: ExecutiveBriefData = {
  title: "Real Estate Finance, upgraded by Agentic AI",
  subtitle:
    "Strategic concept demonstration for Raiffeisen NÖ-Wien — Claude-powered relationship intelligence and project-finance digital twins.",
  whyNow: [
    "Vienna and Lower Austria real-estate market is rebalancing — opportunity to grow the green book while tightening risk controls.",
    "EU taxonomy and klimaaktiv frameworks reward banks that can prove evidence-first ESG financing.",
    "Senior account managers spend 40-60% of their week on memo preparation, data reconciliation and follow-ups.",
    "Claude-class models combined with knowledge graphs and digital twins are now mature enough for regulated banking workflows.",
  ],
  businessImpact: [
    { metric: "Deal preparation time", value: "−55%", note: "Memo, evidence pack and term-sheet drafts produced in hours." },
    { metric: "Pipeline visibility", value: "+3.2x", note: "Cross-portfolio knowledge graph surfaces hidden relationship value." },
    { metric: "Green book growth", value: "+€420m / 24m", note: "ESG-eligible deals matched against existing borrower base." },
    { metric: "Covenant lead-time", value: "+38 days", note: "Earlier detection of covenant drift via continuous monitoring." },
  ],
  riskGovernance: [
    "Evidence-first: every AI output cites the underlying document, signal or data point.",
    "Human approval gate on every credit-relevant action; no autonomous decisions.",
    "Synthetic data only in the demo; production deployment uses bank-controlled data perimeter.",
    "Model governance aligned with EU AI Act high-risk obligations.",
  ],
  useCase: [
    "Max V. Zechmann opens the AI Command Center to start his Monday review.",
    "Claude surfaces 4 prioritised opportunities and 1 covenant watch with evidence packs.",
    "He opens the Vienna Green Living Quarter digital twin, validates the AI memo and approves it for committee.",
    "An executive brief is generated and shared with the Real Estate Finance Board the same morning.",
  ],
  pilot90Day: [
    { week: "Week 0-2", milestone: "Use-case scoping with Real Estate Finance + Risk + ESG offices." },
    { week: "Week 3-5", milestone: "Knowledge-graph seed with synthetic + de-identified portfolio data." },
    { week: "Week 6-8", milestone: "Two live workflows — credit memo agent and ESG eligibility agent." },
    { week: "Week 9-12", milestone: "Executive read-out, success metrics, production hardening plan." },
  ],
  vercelReadiness: [
    "Deployable to Vercel in minutes with the included build pipeline.",
    "Edge-network performance for European users; data residency configurable.",
    "Preview URLs per branch for stakeholder review without code access.",
  ],
  productionPath: [
    "Move data layer into a Raiffeisen-controlled VPC with private connectivity to Claude.",
    "Replace synthetic data with curated, role-scoped views of the production data warehouse.",
    "Add audit logging, RBAC, prompt-injection defenses, and red-team test harness.",
    "Integrate with existing credit committee workflow and document management.",
  ],
  agenda: [
    { time: "0-5 min", item: "Strategic context — why now for Raiffeisen NÖ-Wien Real Estate Finance." },
    { time: "5-15 min", item: "Live walkthrough — Command Center, Knowledge Graph, Deal Digital Twin." },
    { time: "15-25 min", item: "Risk, ESG, and governance posture; SSDLC readiness." },
    { time: "25-35 min", item: "90-day pilot proposal and success metrics." },
    { time: "35-45 min", item: "Q&A and next steps." },
  ],
};

export const agentSpecs: AgentSpec[] = [
  {
    id: "agent-rel",
    name: "Relationship Intelligence Agent",
    purpose: "Discover cross-sell, retention and ESG signals across the borrower base.",
    input: "Borrower base, public filings, market intel, internal CRM, news feeds.",
    reasoning: "Joins signals to knowledge-graph entities and ranks by relationship NPV.",
    output: "Prioritised next-best-actions per account, with evidence trail.",
    humanGate: "Account manager reviews and approves outreach before contact.",
    impact: "+3.2x pipeline visibility, +12% cross-sell conversion in pilot.",
  },
  {
    id: "agent-memo",
    name: "Credit Memo Agent",
    purpose: "Draft a complete credit memo from deal inputs and digital twin state.",
    input: "Digital twin, valuation, sponsor data, market comparables, policy library.",
    reasoning: "Applies bank credit policy; cites every figure to source document.",
    output: "Committee-ready memo, term-sheet draft, and evidence pack.",
    humanGate: "Underwriter validates and signs off before committee submission.",
    impact: "Memo preparation time reduced from days to hours.",
  },
  {
    id: "agent-esg",
    name: "ESG Finance Agent",
    purpose: "Determine eligibility for taxonomy-aligned and Going Green Credit products.",
    input: "Project specs, certifications, EU taxonomy, klimaaktiv, internal ESG policy.",
    reasoning: "Maps evidence to taxonomy criteria; produces gap analysis.",
    output: "Eligibility verdict, gap list, and pre-approval pack.",
    humanGate: "Sustainable Finance Office signs eligibility before pricing.",
    impact: "Accelerates green book growth with auditable traceability.",
  },
  {
    id: "agent-cov",
    name: "Covenant Watch Agent",
    purpose: "Continuously monitor covenants and surface early-warning signals.",
    input: "Loan agreements, financial filings, market data, property KPIs.",
    reasoning: "Detects drift versus thresholds; ranks by exposure and trend.",
    output: "Watchlist with severity, exposure, and recommended action.",
    humanGate: "Risk reviews; account manager owns the borrower dialogue.",
    impact: "+38 days earlier detection vs. quarterly review cadence.",
  },
  {
    id: "agent-port",
    name: "Portfolio Risk Agent",
    purpose: "Stress-test the book against rate, ESG-transition and concentration shocks.",
    input: "Portfolio positions, market scenarios, regulatory stress assumptions.",
    reasoning: "Runs scenarios; explains drivers; suggests hedging or rebalancing.",
    output: "Heatmap and prioritised mitigation actions.",
    humanGate: "Portfolio committee approves any rebalancing or hedge mandate.",
    impact: "Faster response to macro shocks; lower tail-risk capital usage.",
  },
  {
    id: "agent-exec",
    name: "Executive Brief Agent",
    purpose: "Compile a one-page executive brief from the latest agent outputs.",
    input: "Agent outputs, KPIs, and committee templates.",
    reasoning: "Synthesises into a board-ready narrative with traceable links.",
    output: "Polished brief, ready for the Real Estate Finance Board.",
    humanGate: "Head of Real Estate Finance signs off before distribution.",
    impact: "Same-morning executive visibility into the book.",
  },
  {
    id: "agent-evid",
    name: "Evidence Pack Agent",
    purpose: "Assemble the auditable evidence pack supporting every recommendation.",
    input: "All cited documents, signals, KPIs, and policy references.",
    reasoning: "Links each AI claim to its source; flags any unsourced inferences.",
    output: "Audit pack with hashes, timestamps, and policy citations.",
    humanGate: "Internal audit can review and challenge any item.",
    impact: "Evidence-first governance posture; lowers audit and regulatory friction.",
  },
  {
    id: "agent-gate",
    name: "Human Approval Gate Agent",
    purpose: "Route every credit-relevant action through the correct approver.",
    input: "Agent recommendations, approval matrix, role assignments.",
    reasoning: "Selects the right approver, attaches evidence, tracks status.",
    output: "Approval status, audit trail, and re-route on rejection.",
    humanGate: "All gates are humans — agent only orchestrates.",
    impact: "Compliant by construction; no autonomous credit actions.",
  },
];

export const knowledgeGraphNodes: { id: string; label: string; group: string; x: number; y: number }[] = [
  { id: "rbnow", label: "Raiffeisen NÖ-Wien", group: "bank", x: 50, y: 50 },
  { id: "max", label: "Max V. Zechmann", group: "person", x: 22, y: 32 },
  { id: "dev", label: "Developer Clients", group: "client", x: 18, y: 62 },
  { id: "mort", label: "Mortgage Portfolio", group: "portfolio", x: 35, y: 82 },
  { id: "comm", label: "Commercial RE", group: "asset", x: 60, y: 84 },
  { id: "res", label: "Residential Projects", group: "asset", x: 78, y: 76 },
  { id: "esg", label: "ESG Retrofit Finance", group: "esg", x: 86, y: 52 },
  { id: "ggc", label: "Going Green Credit RE", group: "esg", x: 80, y: 28 },
  { id: "coll", label: "Collateral", group: "risk", x: 55, y: 22 },
  { id: "cov", label: "Covenants", group: "risk", x: 38, y: 16 },
  { id: "risk", label: "Risk Signals", group: "risk", x: 64, y: 38 },
  { id: "mkt", label: "Market Data", group: "data", x: 72, y: 58 },
  { id: "rel", label: "Relationship History", group: "data", x: 28, y: 78 },
  { id: "cross", label: "Cross-Sell Opportunities", group: "value", x: 12, y: 46 },
  { id: "exec", label: "Executive Committee", group: "exec", x: 48, y: 66 },
  { id: "crit", label: "Critical-infrastructure resilience", group: "strategy", x: 62, y: 70 },
];

export const knowledgeGraphEdges: { from: string; to: string; label?: string }[] = [
  { from: "max", to: "rbnow" },
  { from: "max", to: "dev", label: "manages" },
  { from: "dev", to: "mort" },
  { from: "mort", to: "comm" },
  { from: "mort", to: "res" },
  { from: "comm", to: "esg" },
  { from: "res", to: "esg" },
  { from: "esg", to: "ggc" },
  { from: "mort", to: "coll" },
  { from: "coll", to: "cov" },
  { from: "cov", to: "risk" },
  { from: "risk", to: "mkt" },
  { from: "rel", to: "cross" },
  { from: "cross", to: "max" },
  { from: "exec", to: "rbnow" },
  { from: "rbnow", to: "crit" },
  { from: "ggc", to: "exec" },
  { from: "mort", to: "exec" },
];

export const beforeAfter = {
  before: [
    "Manual spreadsheets reconciled across email threads.",
    "Memo preparation takes 2–4 working days per deal.",
    "Risk signals scattered across systems; covenant drift detected at quarter-end.",
    "ESG eligibility evidenced manually, slowing green book growth.",
    "Executive briefings rely on best-effort summaries, not live evidence.",
    "Cross-sell opportunities identified anecdotally.",
  ],
  after: [
    "Knowledge graph joins borrower, project, covenant, market and ESG context in one place.",
    "Deal digital twin produces memo, term-sheet draft, and evidence pack in hours.",
    "Covenant Watch Agent surfaces drift +38 days earlier with explainable signals.",
    "ESG Finance Agent maps each project against EU taxonomy and klimaaktiv automatically.",
    "Executive Brief Agent delivers same-morning, evidence-linked board updates.",
    "Relationship Intelligence Agent ranks next-best-actions per account.",
  ],
};

export const ssdlcControls = [
  {
    domain: "Threat model",
    item: "STRIDE assessment maintained per release; prompt-injection and data-exfiltration scenarios explicitly modelled.",
    status: "Demo: documented • Production: continuous review",
  },
  {
    domain: "Data protection",
    item: "Synthetic data only in the demo. Production uses bank-controlled VPC, no customer PII leaves the perimeter.",
    status: "Demo: enforced • Production: required",
  },
  {
    domain: "Prompt-injection defense",
    item: "Source isolation, output schema validation, evidence-citation requirement, and adversarial test harness.",
    status: "Demo: scaffolded • Production: hardened",
  },
  {
    domain: "Audit logs",
    item: "Every agent invocation, input, output, and human decision is logged with cryptographic integrity.",
    status: "Demo: in-memory • Production: WORM store",
  },
  {
    domain: "Role-based access control",
    item: "Granular role mapping (Account Manager, Risk, ESG, Committee, Audit) with least-privilege defaults.",
    status: "Demo: simulated • Production: SSO + entitlements",
  },
  {
    domain: "Human approval workflow",
    item: "Every credit-relevant action routes through the bank's approval matrix; agents never decide autonomously.",
    status: "Demo: implemented • Production: integrated to existing workflow",
  },
  {
    domain: "Evidence-first controls",
    item: "Each AI output cites source documents, KPIs, and policy clauses. Unsourced inferences are flagged.",
    status: "Demo: enforced • Production: enforced",
  },
  {
    domain: "Model governance",
    item: "Model cards, change-management, drift monitoring, and EU AI Act high-risk alignment.",
    status: "Demo: documented • Production: continuous",
  },
  {
    domain: "Deployment controls",
    item: "Vercel preview + production; future move to bank-controlled cloud with private model access.",
    status: "Demo: Vercel • Production: bank-controlled cloud",
  },
  {
    domain: "Critical-infrastructure-grade resilience",
    item: "Defense-in-depth, blast-radius limits, and recovery objectives suitable for systemically relevant workflows.",
    status: "Demo: architected • Production: tested at scale",
  },
];

export const portfolioTrend = [
  { month: "Jan", green: 920, traditional: 1640 },
  { month: "Feb", green: 980, traditional: 1660 },
  { month: "Mar", green: 1040, traditional: 1655 },
  { month: "Apr", green: 1120, traditional: 1650 },
  { month: "May", green: 1210, traditional: 1648 },
  { month: "Jun", green: 1300, traditional: 1640 },
  { month: "Jul", green: 1380, traditional: 1635 },
  { month: "Aug", green: 1465, traditional: 1632 },
  { month: "Sep", green: 1560, traditional: 1630 },
  { month: "Oct", green: 1640, traditional: 1628 },
  { month: "Nov", green: 1725, traditional: 1620 },
  { month: "Dec", green: 1820, traditional: 1615 },
];

export function formatEur(value: number): string {
  if (value >= 1_000_000_000) return `€${(value / 1_000_000_000).toFixed(2)}b`;
  if (value >= 1_000_000) return `€${(value / 1_000_000).toFixed(1)}m`;
  if (value >= 1_000) return `€${(value / 1_000).toFixed(0)}k`;
  return `€${value}`;
}

export const demoDisclaimer =
  "Strategic AI Concept Demo — No production customer data. Synthetic figures only.";
