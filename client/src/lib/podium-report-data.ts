export const REPORT_META = {
  title: "Competitive Analysis Report",
  subtitle: "InfiniteRankers.io vs. Podium.com",
  category: "Local Service Business AI Automation",
  date: "March 2026",
  preparedBy: "InfiniteRankers.io",
};

export const POSITIONING_STATEMENT = {
  for: "local service businesses who are missing leads and wasting money on rigid SaaS contracts",
  product: "InfiniteRankers",
  category: "custom AI automation agency",
  keyBenefit: "builds done-for-you systems for lead capture, follow-up, booking, and review generation",
  primaryAlternative: "Podium",
  keyDifferentiator:
    "builds custom AI infrastructure you own — not a monthly subscription to a platform that may not fit your workflow",
};

export const TOP_RECOMMENDATIONS = [
  {
    number: 1,
    title: "Target Podium's Price-Locked Accounts",
    description:
      "Businesses paying $500–$800+/mo on Podium (after add-ons and per-user fees) are your highest-propensity prospect. Lead every sales conversation with total cost of ownership, not feature comparison.",
    sources: [1, 2, 3],
  },
  {
    number: 2,
    title: "Counter-Position on AI Ownership",
    description:
      "Podium's AI Employee still hallucinates and customers detect it immediately. Promote InfiniteRankers' custom-trained, client-owned AI systems as the antidote — not a black-box SaaS add-on.",
    sources: [8],
  },
  {
    number: 3,
    title: "Win the Support & Flexibility Story",
    description:
      "With 75+ G2 mentions of Podium support decline and 229+ messaging reliability complaints, offer dedicated build teams, transparent workflows, and no annual contract lock-in as core differentiators.",
    sources: [2, 7],
  },
];

export const COMPETITORS = [
  {
    company: "Podium",
    stage: "Series D / ~$400M raised",
    headcount: "~1,500 employees",
    founded: "2014",
    customers: "90,000+ local businesses",
    entryPrice: "~$399/mo",
    realPrice: "$500–$800+/mo after add-ons",
    strength: "Best-in-class Google review generation via SMS; unified inbox (SMS, webchat, GBP, Facebook); 200+ integrations",
    weakness: "Opaque pricing, annual lock-in, unauthorized charges [1,2]; 75+ G2 support complaints [2]; 229+ messaging issues [2]; AI hallucinates [8]",
  },
  {
    company: "Birdeye",
    stage: "Series C / ~$60M raised",
    headcount: "~1,000 employees",
    founded: "2012",
    customers: "100,000+ businesses",
    entryPrice: "~$299/mo",
    realPrice: "$299–$499/mo",
    strength: "Broadest feature set, multi-location management, transparent pricing, strong customer success [4,5]",
    weakness: "Less SMS-first than Podium, less payment integration, can feel overwhelming for small teams [4]",
  },
  {
    company: "GoHighLevel",
    stage: "Bootstrapped / profitable",
    headcount: "~500 employees",
    founded: "2018",
    customers: "60,000+ agencies",
    entryPrice: "$97/mo",
    realPrice: "$97–$497/mo + usage fees [9]",
    strength: "Full CRM + pipeline management, white-label for agencies, broad automation, extremely low entry cost [9]",
    weakness: "Steep learning curve, DIY setup, usage fees add up, not designed for non-technical operators [9]",
  },
  {
    company: "NiceJob",
    stage: "Bootstrapped",
    headcount: "~50 employees",
    founded: "2017",
    customers: "6,000+ businesses",
    entryPrice: "$75/mo",
    realPrice: "$75/mo flat",
    strength: "Simple review automation, extremely low cost, fast setup, minimal friction for small local service companies [6]",
    weakness: "No messaging, no AI, limited scope — only review automation, no lead capture or follow-up [6]",
  },
  {
    company: "Broadly",
    stage: "Series B / ~$22M raised",
    headcount: "~150 employees",
    founded: "2015",
    customers: "~5,000 businesses",
    entryPrice: "~$299/mo",
    realPrice: "$299–$399/mo",
    strength: "Simple, purpose-built for local service businesses, clean UX, solid webchat and review features [6]",
    weakness: "Limited AI capabilities, fewer integrations, less competitive for multi-location [6]",
  },
  {
    company: "InfiniteRankers",
    stage: "Agency / Custom",
    headcount: "Boutique team",
    founded: "2022",
    customers: "Select local service businesses",
    entryPrice: "Custom",
    realPrice: "Custom — no SaaS subscription",
    strength: "Custom-built AI systems the client owns, done-for-you implementation, no rigid contracts, full automation stack",
    weakness: "Less brand awareness vs. Podium, not self-serve, requires discovery and build phase",
  },
];

export const COMPETITIVE_LANDSCAPE_INTRO =
  "The local business communication and reputation management market is dominated by Podium [2,8], with several well-funded challengers and a fragmented long tail of point solutions. InfiniteRankers occupies a distinct 'done-for-you custom build' category that no SaaS competitor currently serves.";

export const FUNDING_CONTEXT = [
  "Podium: Founded 2014 · Series D · ~$400M+ raised · ~1,500 employees · 90,000+ local business customers across US, Canada, Australia [1,2]",
  "Birdeye: Founded 2012 · Series C · ~$60M raised · ~1,000 employees · 100,000+ business locations [4,5]",
  "GoHighLevel: Founded 2018 · Bootstrapped & profitable · ~500 employees · 60,000+ agency customers · white-label platform [9]",
  "NiceJob: Founded 2017 · Bootstrapped · ~50 employees · 6,000+ businesses · pure review automation focus [6]",
  "Broadly: Founded 2015 · Series B · ~$22M raised · ~150 employees · focused on local service verticals [6]",
];

export const FEATURE_MATRIX_COLUMNS = [
  "InfiniteRankers",
  "Podium",
  "Birdeye",
  "GoHighLevel",
  "NiceJob",
  "Broadly",
];

export type CellStatus = "win" | "partial" | "lose" | "no";

export interface FeatureRow {
  feature: string;
  weight: number;
  description: string;
  cells: CellStatus[];
  sources: number[];
}

export const FEATURE_MATRIX: FeatureRow[] = [
  {
    feature: "Review Generation (SMS)",
    weight: 5,
    description: "Automated SMS-based Google review requests",
    cells: ["win", "win", "win", "partial", "win", "win"],
    sources: [1, 4],
  },
  {
    feature: "Unified Messaging Inbox",
    weight: 5,
    description: "SMS, webchat, GBP, Facebook in one inbox",
    cells: ["win", "win", "win", "win", "no", "partial"],
    sources: [1, 4, 5],
  },
  {
    feature: "AI Lead Capture & Follow-Up",
    weight: 5,
    description: "AI responds to leads 24/7 and follows up automatically",
    cells: ["win", "partial", "partial", "partial", "no", "no"],
    sources: [8],
  },
  {
    feature: "Appointment Booking Automation",
    weight: 5,
    description: "AI books appointments without human involvement",
    cells: ["win", "partial", "no", "partial", "no", "no"],
    sources: [8],
  },
  {
    feature: "Custom AI Training (No Hallucination)",
    weight: 4,
    description: "AI trained on your business data, correctable, reliable",
    cells: ["win", "lose", "lose", "lose", "no", "no"],
    sources: [8],
  },
  {
    feature: "Client Ownership of AI System",
    weight: 4,
    description: "You own the system if you leave — not locked in",
    cells: ["win", "lose", "lose", "lose", "no", "no"],
    sources: [2, 3],
  },
  {
    feature: "CRM & Pipeline Management",
    weight: 4,
    description: "Track leads through full sales pipeline",
    cells: ["win", "partial", "partial", "win", "no", "no"],
    sources: [9],
  },
  {
    feature: "Transparent Pricing",
    weight: 4,
    description: "No hidden fees, no surprise renewals, no sales-call-required tiers",
    cells: ["win", "lose", "win", "win", "win", "win"],
    sources: [1, 2, 3],
  },
  {
    feature: "No Annual Contract Lock-In",
    weight: 4,
    description: "Month-to-month or project-based, no forced renewal",
    cells: ["win", "lose", "partial", "win", "win", "partial"],
    sources: [2, 3, 7],
  },
  {
    feature: "Payment Processing",
    weight: 3,
    description: "Integrated payment collection from customers",
    cells: ["partial", "win", "partial", "win", "no", "partial"],
    sources: [1],
  },
  {
    feature: "Multi-Location Support",
    weight: 3,
    description: "Manage multiple business locations from one dashboard",
    cells: ["win", "win", "win", "win", "no", "partial"],
    sources: [4, 5],
  },
  {
    feature: "Third-Party Integrations (200+)",
    weight: 3,
    description: "Connects with Salesforce, Jobber, QuickBooks, Shopify, etc.",
    cells: ["win", "win", "win", "win", "no", "partial"],
    sources: [1, 4],
  },
  {
    feature: "Bulk SMS Campaigns",
    weight: 3,
    description: "Send marketing SMS to large contact lists",
    cells: ["win", "partial", "win", "win", "no", "partial"],
    sources: [1, 2],
  },
  {
    feature: "Dedicated Support Team",
    weight: 4,
    description: "Direct access to a team that built your system",
    cells: ["win", "lose", "partial", "partial", "no", "partial"],
    sources: [2, 7],
  },
  {
    feature: "Self-Serve / No Code Setup",
    weight: 2,
    description: "Business owner can set up without technical help",
    cells: ["no", "win", "win", "partial", "win", "win"],
    sources: [6, 9],
  },
];

export interface MapPoint {
  name: string;
  /** normalized 0–1, 0 = left (low price), 1 = right (high price) */
  nx: number;
  /** normalized 0–1, 0 = top (custom AI), 1 = bottom (generic AI) */
  ny: number;
  color: string;
  bold?: boolean;
}

export const POSITIONING_MAP_DATA: MapPoint[] = [
  { name: "InfiniteRankers", nx: 0.15, ny: 0.2, color: "#2563eb", bold: true },
  { name: "Podium", nx: 0.82, ny: 0.58, color: "#dc2626" },
  { name: "Birdeye", nx: 0.52, ny: 0.7, color: "#7c3aed" },
  { name: "GoHighLevel", nx: 0.18, ny: 0.65, color: "#059669" },
  { name: "NiceJob", nx: 0.1, ny: 0.82, color: "#d97706" },
  { name: "Broadly", nx: 0.4, ny: 0.75, color: "#0891b2" },
];

export const MAP_INTRO =
  "Axes chosen based on the two dimensions buyers care most about in the local service business market [2,4,9]: (1) Pricing Transparency & Flexibility — from opaque/expensive to transparent/affordable, and (2) AI Customization & Ownership — from generic black-box SaaS AI to fully custom, client-owned AI systems.";

export const MAP_INSIGHT =
  "InfiniteRankers occupies the upper-left quadrant — the only player combining genuinely custom AI (client-owned, trained on their data, no hallucination [8]) with transparent pricing and no annual contract [1,2]. Podium sits in the expensive + generic AI quadrant, which is where its review complaints concentrate [2,7]. GHL is affordable but trapped in the generic/DIY AI quadrant [9].";

export interface QuadrantItem {
  title: string;
  who: string;
  note: string;
  colorKey: "blue" | "red" | "green" | "amber";
  sources: number[];
}

export const QUADRANT_ANALYSIS: QuadrantItem[] = [
  {
    title: "Upper-Left (Custom AI + Low Price)",
    who: "InfiniteRankers",
    note: "The white-space quadrant — no SaaS competitor operates here. Custom-built AI you own, at project pricing.",
    colorKey: "blue",
    sources: [],
  },
  {
    title: "Upper-Right (Custom AI + High Price)",
    who: "Enterprise AI agencies",
    note: "Boutique AI consultancies with enterprise price tags. Not accessible to local service businesses.",
    colorKey: "red",
    sources: [],
  },
  {
    title: "Lower-Left (Generic AI + Low Price)",
    who: "GoHighLevel, NiceJob",
    note: "Cheap but self-serve and generic. Requires technical expertise. AI is template-based, not custom [9].",
    colorKey: "green",
    sources: [9],
  },
  {
    title: "Lower-Right (Generic AI + High Price)",
    who: "Podium, Birdeye, Broadly",
    note: "Premium SaaS pricing for template AI. Podium's AI Employee documented to hallucinate [8].",
    colorKey: "amber",
    sources: [8],
  },
];

export const WHITE_SPACE_INTRO =
  "The following gaps represent exploitable market opportunities where Podium's structural weaknesses align with InfiniteRankers' unique capabilities. Each item is classified by Kano category: Basic (expected), Performance (more = better), or Delighter (unexpected).";

export interface WhiteSpaceItem {
  title: string;
  type: string;
  kano: "Performance" | "Delighter" | "Basic";
  description: string;
  evidence: string;
  sources: number[];
}

export const WHITE_SPACE: WhiteSpaceItem[] = [
  {
    title: "Price + Support + Contract Rigidity",
    type: "Primary Gap",
    kano: "Performance",
    description:
      "Podium's #1 complaint is pricing opacity — 'nearly three times higher than comparable platforms' with opaque, ever-changing fees, annual lock-in, and aggressive renewal tactics. Businesses that outgrow Podium's one-size-fits-all pricing are InfiniteRankers' primary prospect. No competitor in the local service space offers a custom, ownership-based alternative.",
    evidence: "Podium G2 reviews; TrustRadius; Capterra alternatives data",
    sources: [1, 2, 3, 7],
  },
  {
    title: "Trustworthy AI That Doesn't Hallucinate",
    type: "Differentiator Gap",
    kano: "Delighter",
    description:
      "Podium's AI Employee ('Jerry') is documented to 'send false information even after being corrected and trained multiple times.' Customers detect the AI immediately, eroding trust. InfiniteRankers' custom-trained AI systems, built on each client's actual data, are a direct counter-positioning angle. No SaaS competitor can match this because it requires custom build work per client.",
    evidence: "Podium G2 1-2 star reviews; Emitrr blog; Business.com reviews",
    sources: [7, 8],
  },
  {
    title: "Done-For-You Custom Build Position",
    type: "Category Gap",
    kano: "Delighter",
    description:
      "GoHighLevel is cheap but requires a steep learning curve and DIY setup — it is built for agencies, not end operators. Podium is turnkey but rigid. No competitor occupies the 'done-for-you custom build' position where an expert team builds, trains, and maintains the AI system and the client owns it outright.",
    evidence: "GHL pricing/feature data; Capterra comparison reviews",
    sources: [6, 9],
  },
  {
    title: "Ownership of Automation Infrastructure",
    type: "Strategic Gap",
    kano: "Delighter",
    description:
      "Every competitor — Podium, Birdeye, GHL, NiceJob, Broadly — is a SaaS subscription. Cancel the subscription and your automation vanishes. InfiniteRankers is the only option where the client owns the system and data. This is a powerful objection-handler for businesses burned by platform lock-in.",
    evidence: "Podium billing/contract abuse reviews; competitive landscape analysis",
    sources: [2, 3],
  },
];

export interface KanoItem {
  label: string;
  colorKey: "green" | "blue" | "purple";
  text: string;
  sources: number[];
}

export const KANO_SUMMARY: KanoItem[] = [
  {
    label: "Basic (Table Stakes)",
    colorKey: "green",
    text: "Review generation, unified messaging inbox, basic CRM, payment processing. Every competitor has these [1,4,5]. Losing here disqualifies — but winning here doesn't differentiate.",
    sources: [1, 4, 5],
  },
  {
    label: "Performance (More = Better)",
    colorKey: "blue",
    text: "Pricing transparency, messaging reliability, support responsiveness. Podium is actively failing here [2,7]. These are exploitable in sales conversations today.",
    sources: [2, 7],
  },
  {
    label: "Delighter (Unexpected)",
    colorKey: "purple",
    text: "Custom-owned AI, zero hallucination guarantee, system ownership on exit [8]. No SaaS competitor offers this. Today's delighter, tomorrow's expectation as the market matures.",
    sources: [8],
  },
];

export const ACTION_PLAN_INTRO =
  "Each action targets a documented gap in Podium's market position, backed by customer review data and competitive pricing analysis.";

export interface ActionItem {
  number: number;
  title: string;
  description: string;
  sources: number[];
}

export const ACTION_PLAN: ActionItem[] = [
  {
    number: 1,
    title: "Launch a 'Podium Escape' Campaign",
    description:
      "Build a dedicated landing page targeting businesses searching 'Podium alternatives' and 'Podium cancellation' [7]. Offer a free audit of their current Podium cost vs. a custom build estimate. Highlight contract flexibility and system ownership upfront.",
    sources: [1, 2, 3],
  },
  {
    number: 2,
    title: "Build a Custom AI Demo for Local Service Businesses",
    description:
      "Create an industry-specific demo (HVAC, plumbing, dental) showing InfiniteRankers AI handling a real lead conversation — no hallucinations, no generic responses [8]. Use side-by-side comparison with a documented Podium AI failure case from G2 reviews.",
    sources: [4, 5, 8],
  },
  {
    number: 3,
    title: "Develop a Sales Battlecard with Trap-Setting Questions",
    description:
      "Equip the sales team with specific questions that expose Podium's vulnerabilities before the prospect self-identifies as a Podium user [6,7]. Focus on total cost, AI reliability, and what happens to their system if they cancel.",
    sources: [6, 7],
  },
];

export const BATTLECARD_INTRO =
  "Use these questions to expose Podium's key vulnerabilities [2,7] before the prospect self-identifies. Ask in a consultative tone — they are designed to surface pain, not attack. Once the prospect acknowledges the pain, pivot to InfiniteRankers' counter-positioning.";

export const TRAP_QUESTIONS = [
  "How much are you currently spending on Podium each month, including add-ons and overages? [1,2]",
  "Have you had leads fall through because a text didn't deliver and nobody was alerted? [2]",
  "When your AI gives a customer wrong information, who fixes it — and how long does it take? [8]",
  "What happens to your automation system if you cancel your Podium subscription? [2,3]",
  "Does your current platform let you own and export your conversation data? [2,3]",
];

export const SOURCES_INTRO =
  "All claims in this report are supported by publicly available sources. Source numbers in brackets throughout the report correspond to entries below. This report was prepared in March 2026 using current pricing, review, and market data.";

export const SOURCES = [
  { number: 1, url: "https://www.podium.com/getpricing", label: "Podium Official Pricing Page" },
  { number: 2, url: "https://www.g2.com/products/podium/pricing", label: "G2 — Podium Pricing Reviews" },
  { number: 3, url: "https://www.trustradius.com/products/podium/pricing", label: "TrustRadius — Podium Pricing" },
  { number: 4, url: "https://www.socialpilot.co/reviews/comparison/birdeye-vs-podium", label: "SocialPilot — Birdeye vs Podium Comparison" },
  { number: 5, url: "https://birdeye.com/blog/birdeye-vs-podium-comparison/", label: "Birdeye Official Comparison Blog" },
  { number: 6, url: "https://www.capterra.com/p/164285/Podium/alternatives/", label: "Capterra — Podium Alternatives" },
  { number: 7, url: "https://emitrr.com/blog/podium-alternative/", label: "Emitrr — Podium Alternatives Deep Dive" },
  { number: 8, url: "https://www.business.com/reviews/podium/", label: "Business.com — Podium Expert Review" },
  { number: 9, url: "https://ghl-services-playbooks-automation-crm-marketing.ghost.io/gohighlevel-pricing-plans-explained-features-value-cost-comparison-2026/", label: "GoHighLevel Pricing & Plans 2026" },
];
