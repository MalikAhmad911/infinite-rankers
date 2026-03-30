import { useState } from "react";
import { jsPDF } from "jspdf";
import SEOHead from "@/components/seo-head";

// ─── colour palette ────────────────────────────────────────────────────────────
const NAVY   = "#0F2B5B";
const TEAL   = "#0B8F8C";
const BLUE   = "#0F4FBF";
const GREEN  = "#15A26B";
const LGRAY  = "#F4F7FB";
const MGRAY  = "#6B7280";
const BORDER = "#DBE4F0";

// ─── data ──────────────────────────────────────────────────────────────────────
const COMPETITORS = [
  {
    name: "Podium",
    stage: "Series D / ~$400M raised",
    entry: "~$399/mo",
    strength: "Best-in-class Google review generation via SMS; unified inbox (SMS, webchat, GBP, Facebook); 200+ integrations",
    weakness: "Opaque pricing, annual lock-in, unauthorized charges; 75+ G2 support complaints; 229+ messaging issues; AI hallucinates",
    realCost: "$500–$800+/mo after add-ons",
  },
  {
    name: "Birdeye",
    stage: "Series C / ~$60M raised",
    entry: "~$299/mo",
    strength: "Broadest feature set, multi-location management, transparent pricing, strong customer success",
    weakness: "Less SMS-first than Podium, less payment integration, overwhelming for small teams",
    realCost: "$299–$499/mo",
  },
  {
    name: "GoHighLevel",
    stage: "Bootstrapped / profitable",
    entry: "$97/mo",
    strength: "Full CRM + pipeline management, white-label for agencies, broad automation, extremely low entry cost",
    weakness: "Steep learning curve, DIY setup, usage fees add up, not designed for non-technical operators",
    realCost: "$97–$497/mo + usage fees",
  },
  {
    name: "NiceJob",
    stage: "Bootstrapped",
    entry: "$75/mo",
    strength: "Simple review automation, extremely low cost, fast setup, minimal friction for small local service companies",
    weakness: "No messaging, no AI, limited scope — only review automation, no lead capture or follow-up",
    realCost: "$75/mo flat",
  },
  {
    name: "Broadly",
    stage: "Series B / ~$22M raised",
    entry: "~$299/mo",
    strength: "Simple, purpose-built for local service businesses, clean UX, solid webchat and review features",
    weakness: "Limited AI capabilities, fewer integrations, less competitive for multi-location",
    realCost: "$299–$399/mo",
  },
  {
    name: "InfiniteRankers",
    stage: "Agency / Custom",
    entry: "Custom",
    strength: "Custom-built AI systems the client owns, done-for-you implementation, no rigid contracts, full automation stack",
    weakness: "Less brand awareness vs. Podium, not self-serve, requires discovery and build phase",
    realCost: "Custom — no SaaS subscription",
    ir: true,
  },
];

// ✓ = full  ~ = partial  ✗ = loses  – = N/A
type CellVal = "win" | "partial" | "lose" | "na";
interface Feature {
  feature: string;
  weight: number;
  ir: CellVal;
  podium: CellVal;
  birdeye: CellVal;
  ghl: CellVal;
  nicejob: CellVal;
  broadly: CellVal;
}

const FEATURES: Feature[] = [
  { feature: "Review Generation (SMS)",          weight: 5, ir: "win",     podium: "win",     birdeye: "win",     ghl: "partial", nicejob: "win",  broadly: "win"     },
  { feature: "Unified Messaging Inbox",          weight: 5, ir: "win",     podium: "win",     birdeye: "win",     ghl: "win",     nicejob: "na",   broadly: "partial" },
  { feature: "AI Lead Capture & Follow-Up",      weight: 5, ir: "win",     podium: "partial", birdeye: "partial", ghl: "partial", nicejob: "na",   broadly: "na"      },
  { feature: "Appointment Booking Automation",   weight: 5, ir: "win",     podium: "partial", birdeye: "na",      ghl: "partial", nicejob: "na",   broadly: "na"      },
  { feature: "Custom AI Training (No Halluc.)",  weight: 4, ir: "win",     podium: "lose",    birdeye: "lose",    ghl: "lose",    nicejob: "na",   broadly: "na"      },
  { feature: "Client Ownership of AI System",    weight: 4, ir: "win",     podium: "lose",    birdeye: "lose",    ghl: "lose",    nicejob: "na",   broadly: "na"      },
  { feature: "CRM & Pipeline Management",        weight: 4, ir: "win",     podium: "partial", birdeye: "partial", ghl: "win",     nicejob: "na",   broadly: "na"      },
  { feature: "Transparent Pricing",              weight: 4, ir: "win",     podium: "lose",    birdeye: "win",     ghl: "win",     nicejob: "win",  broadly: "win"     },
  { feature: "No Annual Contract Lock-In",       weight: 4, ir: "win",     podium: "lose",    birdeye: "partial", ghl: "win",     nicejob: "win",  broadly: "partial" },
  { feature: "Payment Processing",               weight: 3, ir: "partial", podium: "win",     birdeye: "partial", ghl: "win",     nicejob: "na",   broadly: "partial" },
  { feature: "Multi-Location Support",           weight: 3, ir: "win",     podium: "win",     birdeye: "win",     ghl: "win",     nicejob: "na",   broadly: "partial" },
  { feature: "Third-Party Integrations (200+)",  weight: 3, ir: "win",     podium: "win",     birdeye: "win",     ghl: "win",     nicejob: "na",   broadly: "partial" },
  { feature: "Bulk SMS Campaigns",               weight: 3, ir: "win",     podium: "partial", birdeye: "win",     ghl: "win",     nicejob: "na",   broadly: "partial" },
  { feature: "Dedicated Support Team",           weight: 4, ir: "win",     podium: "lose",    birdeye: "partial", ghl: "partial", nicejob: "na",   broadly: "partial" },
  { feature: "Self-Serve / No Code Setup",       weight: 2, ir: "na",      podium: "win",     birdeye: "win",     ghl: "partial", nicejob: "win",  broadly: "win"     },
];

const WHITESPACE = [
  {
    gap: "Price + Support + Contract Rigidity",
    label: "Primary Gap",
    kano: "Performance",
    detail: "Podium's #1 complaint is pricing opacity — 'nearly three times higher than comparable platforms' with opaque, ever-changing fees, annual lock-in, and aggressive renewal tactics. Businesses that outgrow Podium's one-size-fits-all pricing are InfiniteRankers' primary prospect. No competitor in the local service space offers a custom, ownership-based alternative.",
    evidence: "Podium G2 reviews; TrustRadius; Capterra alternatives data",
  },
  {
    gap: "Trustworthy AI That Doesn't Hallucinate",
    label: "Differentiator Gap",
    kano: "Delighter",
    detail: "Podium's AI Employee ('Jerry') is documented to 'send false information even after being corrected and trained multiple times.' Customers detect the AI immediately, eroding trust. InfiniteRankers' custom-trained AI systems, built on each client's actual data, are a direct counter-positioning angle. No SaaS competitor can match this because it requires custom build work per client.",
    evidence: "Podium G2 1-2 star reviews; Emitrr blog; Business.com reviews",
  },
  {
    gap: "Done-For-You Custom Build Position",
    label: "Category Gap",
    kano: "Delighter",
    detail: "GoHighLevel is cheap but requires a steep learning curve and DIY setup — it is built for agencies, not end operators. Podium is turnkey but rigid. No competitor occupies the 'done-for-you custom build' position where an expert team builds, trains, and maintains the AI system and the client owns it outright.",
    evidence: "GHL pricing/feature data; Capterra comparison reviews",
  },
  {
    gap: "Ownership of Automation Infrastructure",
    label: "Strategic Gap",
    kano: "Delighter",
    detail: "Every competitor — Podium, Birdeye, GHL, NiceJob, Broadly — is a SaaS subscription. Cancel the subscription and your automation vanishes. InfiniteRankers is the only option where the client owns the system and data. This is a powerful objection-handler for businesses burned by platform lock-in.",
    evidence: "Podium billing/contract abuse reviews; competitive landscape analysis",
  },
];

const ACTIONS = [
  {
    num: 1,
    title: "Launch a 'Podium Escape' Campaign",
    detail: "Build a dedicated landing page targeting businesses searching 'Podium alternatives' and 'Podium cancellation'. Offer a free audit of their current Podium cost vs. a custom build estimate. Highlight contract flexibility and system ownership upfront.",
    sources: "[1, 2, 3]",
  },
  {
    num: 2,
    title: "Build a Custom AI Demo for Local Service Businesses",
    detail: "Create an industry-specific demo (HVAC, plumbing, dental) showing InfiniteRankers AI handling a real lead conversation — no hallucinations, no generic responses. Use side-by-side comparison with a documented Podium AI failure case from G2 reviews.",
    sources: "[4, 5, 8]",
  },
  {
    num: 3,
    title: "Develop a Sales Battlecard with Trap-Setting Questions",
    detail: "Equip the sales team with specific questions that expose Podium's vulnerabilities before the prospect self-identifies as a Podium user. Focus on total cost, AI reliability, and what happens to their system if they cancel.",
    sources: "[6, 7]",
  },
];

const BATTLECARD = [
  { q: 1, text: "How much are you currently spending on Podium each month, including add-ons and overages?" },
  { q: 2, text: "Have you had leads fall through because a text didn't deliver and nobody was alerted?" },
  { q: 3, text: "When your AI gives a customer wrong information, who fixes it — and how long does it take?" },
  { q: 4, text: "What happens to your automation system if you cancel your Podium subscription?" },
  { q: 5, text: "Does your current platform let you own and export your conversation data?" },
];

const SOURCES = [
  { num: 1, label: "Podium Official Pricing Page",              url: "https://www.podium.com/getpricing" },
  { num: 2, label: "G2 — Podium Pricing Reviews",              url: "https://www.g2.com/products/podium/pricing" },
  { num: 3, label: "TrustRadius — Podium Pricing",             url: "https://www.trustradius.com/products/podium/pricing" },
  { num: 4, label: "SocialPilot — Birdeye vs Podium",          url: "https://www.socialpilot.co/reviews/comparison/birdeye-vs-podium" },
  { num: 5, label: "Birdeye Official Comparison Blog",         url: "https://birdeye.com/blog/birdeye-vs-podium-comparison/" },
  { num: 6, label: "Capterra — Podium Alternatives",           url: "https://www.capterra.com/p/164285/Podium/alternatives/" },
  { num: 7, label: "Emitrr — Podium Alternatives Deep Dive",   url: "https://emitrr.com/blog/podium-alternative/" },
  { num: 8, label: "Business.com — Podium Expert Review",      url: "https://www.business.com/reviews/podium/" },
  { num: 9, label: "GoHighLevel Pricing & Plans 2026",         url: "https://ghl-services-playbooks-automation-crm-marketing.ghost.io/gohighlevel-pricing-plans-explained-features-value-cost-comparison-2026/" },
];

// ─── helpers ───────────────────────────────────────────────────────────────────
function cellSymbol(v: CellVal) {
  if (v === "win")     return "✓";
  if (v === "partial") return "~";
  if (v === "lose")    return "✗";
  return "–";
}
function cellBg(v: CellVal, isIR: boolean) {
  if (v === "win")     return isIR ? "bg-green-100 text-green-700 font-bold" : "bg-red-50 text-red-600";
  if (v === "partial") return isIR ? "bg-blue-100 text-blue-700 font-bold" : "bg-yellow-50 text-yellow-700";
  if (v === "lose")    return "bg-gray-50 text-gray-300";
  return "bg-gray-50 text-gray-300";
}
function cellClass(v: CellVal, isIR: boolean) {
  if (v === "win")     return isIR ? "text-green-600 font-bold" : "text-red-500";
  if (v === "partial") return isIR ? "text-blue-500 font-bold" : "text-yellow-600";
  if (v === "lose")    return "text-gray-300";
  return "text-gray-300";
}

// ─── PDF generator ─────────────────────────────────────────────────────────────
function generatePDF() {
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const PW = 612, PH = 792, M = 36;
  const CW = PW - M * 2;
  let y = M;
  let pageNum = 1;

  const hex2rgb = (hex: string): [number, number, number] => [
    parseInt(hex.slice(1, 3), 16),
    parseInt(hex.slice(3, 5), 16),
    parseInt(hex.slice(5, 7), 16),
  ];
  const setFill  = (h: string) => doc.setFillColor(...hex2rgb(h));
  const setColor = (h: string) => doc.setTextColor(...hex2rgb(h));
  const setDraw  = (h: string) => doc.setDrawColor(...hex2rgb(h));

  const addHeader = () => {
    setFill(NAVY); doc.rect(0, 0, PW, 24, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(8); setColor("#FFFFFF");
    doc.text("INFINITERANKERS.IO — CONFIDENTIAL", M, 15);
    doc.text("Competitive Analysis: InfiniteRankers vs. Podium", PW - M, 15, { align: "right" });
  };

  const addFooter = () => {
    const sv = y;
    setFill("#E8EEF9"); doc.rect(0, PH - 22, PW, 22, "F");
    doc.setFont("helvetica", "normal"); doc.setFontSize(7.5); setColor(MGRAY);
    doc.text(`© 2026 InfiniteRankers.io · infiniterankers.io · All rights reserved · March 2026`, M, PH - 8);
    doc.text(`For internal and sales use only     Page ${pageNum} of 7`, PW - M, PH - 8, { align: "right" });
    y = sv;
  };

  const newPage = () => {
    addFooter(); doc.addPage(); pageNum++; y = M + 32; addHeader(); setColor("#1F2937");
  };

  const checkY = (needed: number) => {
    if (y + needed > PH - M - 28) { newPage(); return true; }
    return false;
  };

  const sectionTitle = (title: string) => {
    checkY(36);
    doc.setFont("helvetica", "bold"); doc.setFontSize(14); setColor(NAVY);
    doc.text(title, M, y); y += 4;
    setDraw(TEAL); doc.setLineWidth(1.5); doc.line(M, y, M + CW, y); y += 14;
    setColor("#1F2937");
  };

  const subTitle = (title: string) => {
    checkY(22);
    doc.setFont("helvetica", "bold"); doc.setFontSize(10); setColor(BLUE);
    doc.text(title, M, y); y += 14; setColor("#1F2937");
  };

  const bodyText = (text: string, indent = 0) => {
    doc.setFont("helvetica", "normal"); doc.setFontSize(9); setColor("#1F2937");
    const lines = doc.splitTextToSize(text, CW - indent);
    for (const line of lines) { checkY(13); doc.text(line, M + indent, y); y += 13; }
  };

  const bullet = (text: string) => {
    checkY(13);
    doc.setFont("helvetica", "normal"); doc.setFontSize(9); setColor("#1F2937");
    const lines = doc.splitTextToSize(text, CW - 18);
    doc.text("•", M + 8, y);
    lines.forEach((line: string, i: number) => {
      if (i > 0) checkY(13);
      doc.text(line, M + 18, y); y += 13;
    });
  };

  const gap = (px = 8) => { y += px; };

  // ── PAGE 1: Cover + Positioning + Top 3 Recommendations ──────────────────
  addHeader();
  y = M + 28;

  setFill(NAVY);
  doc.roundedRect(M, y, CW, 100, 6, 6, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(20); setColor("#FFFFFF");
  doc.text("Competitive Analysis Report", M + 16, y + 28);
  doc.setFont("helvetica", "normal"); doc.setFontSize(11); setColor("#93C5FD");
  doc.text("InfiniteRankers.io vs. Podium.com", M + 16, y + 48);
  doc.setFontSize(9); setColor("#BFDBFE");
  doc.text("Local Service Business AI Automation · March 2026", M + 16, y + 64);
  doc.text("CONFIDENTIAL · For internal and sales use only", M + 16, y + 80);
  y += 116;

  sectionTitle("POSITIONING STATEMENT (DUNFORD FORMAT)");
  checkY(52);
  setFill("#EEF4FF"); doc.roundedRect(M, y, CW, 52, 4, 4, "F");
  setDraw(BLUE); doc.setLineWidth(2); doc.line(M, y, M, y + 52);
  doc.setFont("helvetica", "normal"); doc.setFontSize(9); setColor("#1F2937");
  const posText = "For local service businesses who are missing leads and wasting money on rigid SaaS contracts, InfiniteRankers is a custom AI automation agency that builds done-for-you systems for lead capture, follow-up, booking, and review generation. Unlike Podium, InfiniteRankers builds custom AI infrastructure you own — not a monthly subscription to a platform that may not fit your workflow.";
  const posLines = doc.splitTextToSize(posText, CW - 16);
  posLines.forEach((line: string, i: number) => doc.text(line, M + 10, y + 12 + i * 11));
  y += 58; gap(8);

  sectionTitle("TOP 3 STRATEGIC RECOMMENDATIONS");
  const recs = [
    { num: "1", title: "Target Podium's Price-Locked Accounts", detail: "Businesses paying $500–$800+/mo on Podium (after add-ons and per-user fees) are your highest-propensity prospect. Lead every sales conversation with total cost of ownership, not feature comparison." },
    { num: "2", title: "Counter-Position on AI Ownership", detail: "Podium's AI Employee still hallucinates and customers detect it immediately. Promote InfiniteRankers' custom-trained, client-owned AI systems as the antidote — not a black-box SaaS add-on." },
    { num: "3", title: "Win the Support & Flexibility Story", detail: "With 75+ G2 mentions of Podium support decline and 229+ messaging reliability complaints, offer dedicated build teams, transparent workflows, and no annual contract lock-in as core differentiators." },
  ];
  for (const r of recs) {
    checkY(54);
    setFill(LGRAY); doc.roundedRect(M, y, CW, 50, 4, 4, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(20); setColor(TEAL);
    doc.text(r.num, M + 12, y + 34);
    doc.setFont("helvetica", "bold"); doc.setFontSize(10); setColor(NAVY);
    doc.text(r.title, M + 36, y + 16);
    doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); setColor("#374151");
    const dLines = doc.splitTextToSize(r.detail, CW - 48);
    dLines.forEach((line: string, i: number) => doc.text(line, M + 36, y + 28 + i * 11));
    y += 56;
  }

  addFooter();

  // ── PAGE 2: Competitive Landscape ─────────────────────────────────────────
  newPage();
  sectionTitle("COMPETITIVE LANDSCAPE OVERVIEW");
  bodyText("The local business communication and reputation management market is dominated by Podium. InfiniteRankers occupies a distinct 'done-for-you custom build' category that no SaaS competitor currently serves.");
  gap(8);

  const colW = [86, 90, 56, 100, 100, 78];
  const hdrs = ["Company", "Stage / Scale", "Entry Price", "Strength", "Weakness", "Real Cost"];
  setFill(NAVY); doc.rect(M, y, CW, 18, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(7.5); setColor("#FFFFFF");
  let cx = M + 4;
  hdrs.forEach((h, i) => { doc.text(h, cx, y + 12); cx += colW[i]; });
  y += 18;

  for (let ri = 0; ri < COMPETITORS.length; ri++) {
    const c = COMPETITORS[ri];
    const row = [c.name, c.stage, c.entry, c.strength, c.weakness, c.realCost];
    const rowLines = row.map((cell, ci) => doc.splitTextToSize(cell, colW[ci] - 5));
    const maxL = Math.max(...rowLines.map(l => l.length));
    const rh = maxL * 9 + 8;
    checkY(rh);
    setFill(c.ir ? "#F0FDF4" : (ri % 2 === 0 ? "#FFFFFF" : LGRAY));
    doc.rect(M, y, CW, rh, "F");
    if (c.ir) { setDraw(GREEN); doc.setLineWidth(1.2); doc.rect(M, y, CW, rh, "S"); }
    else { setDraw(BORDER); doc.setLineWidth(0.3); doc.rect(M, y, CW, rh, "S"); }
    cx = M + 4;
    for (let ci = 0; ci < row.length; ci++) {
      doc.setFont("helvetica", (ci === 0 || c.ir) ? "bold" : "normal");
      doc.setFontSize(7.5);
      setColor(c.ir && ci === 0 ? GREEN : "#1F2937");
      rowLines[ci].forEach((line: string, li: number) => doc.text(line, cx, y + 9 + li * 9));
      cx += colW[ci];
    }
    y += rh;
  }
  gap(10);

  subTitle("Funding & Headcount Context");
  bullet("Podium: Founded 2014 · Series D · ~$400M+ raised · ~1,500 employees · 90,000+ local business customers across US, Canada, Australia");
  bullet("Birdeye: Founded 2012 · Series C · ~$60M raised · ~1,000 employees · 100,000+ business locations");
  bullet("GoHighLevel: Founded 2018 · Bootstrapped & profitable · ~500 employees · 60,000+ agency customers · white-label platform");
  bullet("NiceJob: Founded 2017 · Bootstrapped · ~50 employees · 6,000+ businesses · pure review automation focus");
  bullet("Broadly: Founded 2015 · Series B · ~$22M raised · ~150 employees · focused on local service verticals");

  addFooter();

  // ── PAGE 3: Feature Matrix ─────────────────────────────────────────────────
  newPage();
  sectionTitle("FEATURE COMPARISON MATRIX");
  bodyText("Weight 1–5 based on buyer conversation frequency.   ✓ = full   ~ = partial   ✗ = loses   – = N/A");
  gap(6);

  const fmW = [155, 36, 68, 56, 56, 52, 52, 52];
  const fmH = ["Feature (Weight)", "Wt", "InfiniteRankers", "Podium", "Birdeye", "GHL", "NiceJob", "Broadly"];
  setFill(NAVY); doc.rect(M, y, CW, 20, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(7.5); setColor("#FFFFFF");
  cx = M + 4;
  fmH.forEach((h, i) => { doc.text(h, cx, y + 13); cx += fmW[i]; });
  y += 20;

  const SYMBOL: Record<CellVal, string> = { win: "✓", partial: "~", lose: "✗", na: "–" };
  const FCOLOR: Record<CellVal, string> = { win: "#15A26B", partial: "#2563EB", lose: "#9CA3AF", na: "#D1D5DB" };
  const FCOLOR_COMP: Record<CellVal, string> = { win: "#DC2626", partial: "#D97706", lose: "#9CA3AF", na: "#D1D5DB" };

  for (let ri = 0; ri < FEATURES.length; ri++) {
    const f = FEATURES[ri];
    const rh = 16;
    checkY(rh);
    setFill(ri % 2 === 0 ? "#FFFFFF" : LGRAY);
    doc.rect(M, y, CW, rh, "F");
    setDraw(BORDER); doc.setLineWidth(0.3); doc.rect(M, y, CW, rh, "S");
    cx = M + 4;
    // feature name
    doc.setFont("helvetica", "bold"); doc.setFontSize(7.5); setColor("#1F2937");
    doc.text(f.feature, cx, y + 11); cx += fmW[0];
    // weight
    doc.setFont("helvetica", "normal"); setColor("#92400E");
    doc.text(String(f.weight), cx, y + 11); cx += fmW[1];
    // IR
    const vals: CellVal[] = [f.ir, f.podium, f.birdeye, f.ghl, f.nicejob, f.broadly];
    vals.forEach((v, vi) => {
      const isIR = vi === 0;
      setColor(isIR ? FCOLOR[v] : FCOLOR_COMP[v]);
      doc.setFont("helvetica", "bold");
      doc.text(SYMBOL[v], cx, y + 11);
      cx += fmW[vi + 2];
    });
    y += rh;
  }
  gap(8);
  doc.setFont("helvetica", "italic"); doc.setFontSize(8); setColor(MGRAY);
  doc.text("IR Win = green ✓   IR Partial = blue ~   Competitor Win = red ✓   Not offered = grey", M, y);
  y += 16;

  addFooter();

  // ── PAGE 4: Positioning Map ────────────────────────────────────────────────
  newPage();
  sectionTitle("POSITIONING MAP — PRICE VS. AI CUSTOMIZATION");
  bodyText("Axes chosen based on the two dimensions buyers care most about: (1) Pricing Transparency & Flexibility — opaque/expensive to transparent/affordable, and (2) AI Customization & Ownership — generic black-box SaaS AI to fully custom, client-owned AI systems.");
  gap(10);

  const mapX = M + 20, mapY = y, mapW = CW - 40, mapH = 240;
  const midX = mapX + mapW / 2, midY = mapY + mapH / 2;

  setFill("#FFF7F7"); doc.rect(mapX, mapY, mapW / 2, mapH / 2, "F");
  setFill("#F0FDF4"); doc.rect(midX, mapY, mapW / 2, mapH / 2, "F");
  setFill("#FFFDF0"); doc.rect(mapX, midY, mapW / 2, mapH / 2, "F");
  setFill("#EEF4FF"); doc.rect(midX, midY, mapW / 2, mapH / 2, "F");

  setDraw("#1F2937"); doc.setLineWidth(1);
  doc.line(mapX, midY, mapX + mapW, midY);
  doc.line(midX, mapY, midX, mapY + mapH);

  doc.setFont("helvetica", "bold"); doc.setFontSize(7); setColor(NAVY);
  doc.text("HIGH PRICE / OPAQUE", mapX + 4, midY - 4);
  doc.text("LOW PRICE / TRANSPARENT", midX + 4, midY - 4);
  doc.text("GENERIC / SAAS AI", mapX + mapW / 4, mapY + 10, { align: "center" });
  doc.text("CUSTOM / OWNED AI", mapX + mapW / 4, mapY + mapH - 6, { align: "center" });

  doc.setFont("helvetica", "italic"); doc.setFontSize(7); setColor(MGRAY);
  doc.text("Generic + Expensive", mapX + 6, mapY + 20);
  doc.text("Generic + Affordable", midX + 6, mapY + 20);
  doc.text("Custom + Expensive", mapX + 6, midY + 20);
  doc.text("Custom + Affordable (WHITE SPACE)", midX + 4, midY + 20);

  type PlotPt = { label: string; px: number; py: number; ir?: boolean };
  const plots: PlotPt[] = [
    { label: "Podium",          px: 0.20, py: 0.28 },
    { label: "Birdeye",         px: 0.55, py: 0.30 },
    { label: "GoHighLevel",     px: 0.78, py: 0.36 },
    { label: "NiceJob",         px: 0.70, py: 0.32 },
    { label: "Broadly",         px: 0.48, py: 0.35 },
    { label: "InfiniteRankers ★", px: 0.72, py: 0.75, ir: true },
  ];

  for (const p of plots) {
    const px = mapX + p.px * mapW;
    const py = mapY + p.py * mapH;
    setFill(p.ir ? GREEN : BLUE);
    doc.circle(px, py, p.ir ? 6 : 4, "F");
    doc.setFont("helvetica", p.ir ? "bold" : "normal"); doc.setFontSize(7.5);
    setColor(p.ir ? GREEN : NAVY);
    doc.text(p.label, px + 8, py + 3);
  }

  y = mapY + mapH + 12;
  doc.setFont("helvetica", "italic"); doc.setFontSize(8); setColor(MGRAY);
  doc.text("★ InfiniteRankers occupies the unique white-space quadrant — custom AI + transparent pricing. No SaaS competitor operates here.", M, y);
  y += 20;

  addFooter();

  // ── PAGE 5: White Space & Opportunities ───────────────────────────────────
  newPage();
  sectionTitle("WHITE SPACE & STRATEGIC OPPORTUNITIES");
  bodyText("The following gaps represent exploitable market opportunities where Podium's structural weaknesses align with InfiniteRankers' unique capabilities. Each item is classified by Kano category.");
  gap(8);

  for (const op of WHITESPACE) {
    checkY(78);
    setFill(LGRAY); doc.roundedRect(M, y, CW, 4, 2, 2, "F");
    y += 8;
    doc.setFont("helvetica", "bold"); doc.setFontSize(11); setColor(NAVY);
    doc.text(op.gap, M, y); y += 13;
    const kanoColor = op.kano === "Delighter" ? GREEN : BLUE;
    setFill(op.kano === "Delighter" ? "#D1FAE5" : "#DBEAFE");
    doc.roundedRect(M, y, 65, 14, 3, 3, "F");
    doc.setFont("helvetica", "bold"); doc.setFontSize(7.5); setColor(kanoColor);
    doc.text(`Kano: ${op.kano}   ${op.label}`, M + 4, y + 10); y += 18;
    doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); setColor("#374151");
    const dLines = doc.splitTextToSize(op.detail, CW);
    dLines.forEach((line: string) => { checkY(12); doc.text(line, M, y); y += 12; });
    gap(4);
    doc.setFont("helvetica", "italic"); doc.setFontSize(7.5); setColor(MGRAY);
    doc.text(`Evidence: ${op.evidence}`, M, y); y += 14;
    gap(4);
  }

  gap(8);
  subTitle("Kano Analysis Summary");
  bullet("Basic (Table Stakes): Review generation, unified messaging inbox, basic CRM, payment processing. Every competitor has these. Losing here disqualifies — but winning here doesn't differentiate.");
  bullet("Performance (More = Better): Pricing transparency, messaging reliability, support responsiveness. Podium is actively failing here. These are exploitable in sales conversations today.");
  bullet("Delighter (Unexpected): Custom-owned AI, zero hallucination guarantee, system ownership on exit. No SaaS competitor offers this. Today's delighter, tomorrow's expectation as the market matures.");

  addFooter();

  // ── PAGE 6: 90-Day Action Plan ─────────────────────────────────────────────
  newPage();
  sectionTitle("90-DAY ACTION PLAN");

  for (const a of ACTIONS) {
    checkY(70);
    setFill("#EEF4FF"); doc.roundedRect(M, y, CW, 4, 2, 2, "F"); y += 8;
    doc.setFont("helvetica", "bold"); doc.setFontSize(11); setColor(NAVY);
    doc.text(`${a.num}.  ${a.title}`, M, y); y += 14;
    doc.setFont("helvetica", "normal"); doc.setFontSize(9); setColor("#374151");
    const dLines = doc.splitTextToSize(a.detail, CW);
    dLines.forEach((line: string) => { checkY(13); doc.text(line, M, y); y += 13; });
    gap(4);
    doc.setFont("helvetica", "italic"); doc.setFontSize(8); setColor(MGRAY);
    doc.text(`Sources: ${a.sources}`, M, y); y += 18;
  }

  gap(6);
  sectionTitle("SALES BATTLECARD — TRAP-SETTING QUESTIONS");
  bodyText("Use these questions to expose Podium's key vulnerabilities before the prospect self-identifies. Ask in a consultative tone — they surface pain, not attack. Once the prospect acknowledges the pain, pivot to InfiniteRankers' counter-positioning.");
  gap(8);

  for (const bc of BATTLECARD) {
    checkY(32);
    setFill("#F9FBE7"); doc.roundedRect(M, y, CW, 28, 4, 4, "F");
    setDraw("#B5CC3A"); doc.setLineWidth(1.5); doc.line(M, y, M, y + 28);
    doc.setFont("helvetica", "bold"); doc.setFontSize(9); setColor("#5A6600");
    doc.text(`Q${bc.q}.`, M + 10, y + 11);
    doc.setFont("helvetica", "normal"); setColor("#1F2937");
    const qLines = doc.splitTextToSize(`"${bc.text}"`, CW - 30);
    qLines.forEach((line: string, li: number) => doc.text(line, M + 28, y + 11 + li * 11));
    y += 34;
  }

  addFooter();

  // ── PAGE 7: Sources ────────────────────────────────────────────────────────
  newPage();
  sectionTitle("SOURCES & CITATIONS");
  bodyText("All claims in this report are supported by publicly available sources. Source numbers in brackets throughout the report correspond to entries below. This report was prepared in March 2026 using current pricing, review, and market data.");
  gap(10);

  for (const s of SOURCES) {
    checkY(24);
    doc.setFont("helvetica", "bold"); doc.setFontSize(9); setColor(NAVY);
    doc.text(`[${s.num}]  ${s.label}`, M, y); y += 12;
    doc.setFont("helvetica", "normal"); doc.setFontSize(8); setColor(BLUE);
    doc.text(s.url, M + 16, y); y += 14;
  }

  gap(12);
  checkY(40);
  setFill(LGRAY); doc.roundedRect(M, y, CW, 38, 4, 4, "F");
  doc.setFont("helvetica", "normal"); doc.setFontSize(8.5); setColor("#374151");
  doc.text("This report was prepared for strategic sales and positioning use. The data represents publicly available information as of March 2026.", M + 10, y + 14);
  doc.text("For questions or a custom competitive analysis, contact InfiniteRankers.io.", M + 10, y + 26);
  y += 44;

  addFooter();
  doc.save("Infinite-Rankers-Podium-Competitor-Analysis.pdf");
}

// ─── Web page ─────────────────────────────────────────────────────────────────
export default function CompetitorAnalysis() {
  const [pdfDone, setPdfDone] = useState(false);
  const handleDownload = () => { generatePDF(); setPdfDone(true); };

  return (
    <div className="min-h-screen bg-[#F4F7FB]">
      <SEOHead
        title="InfiniteRankers vs. Podium — Competitive Breakdown | Infinite Rankers"
        description="See exactly how InfiniteRankers beats Podium on AI ownership, pricing, support, and revenue automation — with a full feature matrix, positioning map, and sales battlecard."
        noIndex={true}
      />

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <div style={{ background: "linear-gradient(135deg,#0B1120 0%,#0F2B5B 55%,#0B8F8C 100%)" }} className="text-white pt-14 pb-16 px-6 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none" style={{ background: "radial-gradient(ellipse 60% 50% at 80% 40%, rgba(11,143,140,0.18) 0%, transparent 70%)" }} />
        <div className="max-w-5xl mx-auto relative">
          <div className="flex items-start justify-between gap-4 flex-wrap mb-6">
            <div>
              <span className="inline-block text-xs font-bold tracking-widest uppercase px-3 py-1 rounded-full mb-3" style={{ background: "rgba(11,143,140,0.25)", color: "#5EEAD4" }}>
                Competitive Analysis · March 2026 · Confidential
              </span>
              <h1 className="text-4xl md:text-5xl font-black leading-tight mb-3">
                InfiniteRankers<br />
                <span style={{ color: "#5EEAD4" }}>vs. Podium</span>
              </h1>
              <p className="text-blue-100 text-lg max-w-xl leading-relaxed">
                A full breakdown of why local service businesses are leaving Podium — and choosing custom AI they actually own.
              </p>
            </div>
            <button
              onClick={handleDownload}
              data-testid="button-download-pdf"
              className="flex-shrink-0 inline-flex items-center gap-2 text-sm font-semibold px-4 py-2 rounded-lg border border-white/20 text-white/80 hover:bg-white/10 transition mt-2"
            >
              ⬇ Download PDF
            </button>
          </div>
          {pdfDone && <p className="text-green-300 text-xs mb-4">PDF downloaded.</p>}

          {/* Key stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
            {[
              { stat: "$500–$800+", label: "Podium true monthly cost", sub: "after add-ons & per-user fees" },
              { stat: "75+",        label: "G2 support complaints",    sub: "documented since 2023" },
              { stat: "229+",       label: "Messaging failures",       sub: "G2 reliability issues" },
              { stat: "0",          label: "IR annual contracts",      sub: "you own everything you build" },
            ].map((s) => (
              <div key={s.stat} className="rounded-xl p-4 text-center" style={{ background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)" }}>
                <p className="text-3xl font-black" style={{ color: "#5EEAD4" }}>{s.stat}</p>
                <p className="text-white text-xs font-semibold mt-1">{s.label}</p>
                <p className="text-blue-300 text-[10px] mt-0.5">{s.sub}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 py-10 space-y-10">

        {/* ── POSITIONING STATEMENT ─────────────────────────────────────────── */}
        <div className="rounded-2xl overflow-hidden shadow-sm" style={{ border: "1px solid #DBE4F0" }}>
          <div className="px-6 py-4" style={{ background: "#0F2B5B" }}>
            <p className="text-xs font-bold tracking-widest uppercase" style={{ color: "#93C5FD" }}>Positioning Statement (Dunford Format)</p>
          </div>
          <div className="bg-white px-6 py-6">
            <p className="text-gray-800 leading-relaxed text-base">
              For <strong>local service businesses</strong> who are missing leads and wasting money on rigid SaaS contracts,{" "}
              <strong className="text-[#0F2B5B]">InfiniteRankers</strong> is a custom AI automation agency that builds done-for-you systems
              for lead capture, follow-up, booking, and review generation. Unlike <strong className="text-red-600">Podium</strong>,
              InfiniteRankers builds custom AI infrastructure <em>you own</em> — not a monthly subscription to a platform that may not fit your workflow.
            </p>
          </div>
        </div>

        {/* ── TOP 3 RECOMMENDATIONS ─────────────────────────────────────────── */}
        <div>
          <SectionLabel>Top 3 Strategic Recommendations</SectionLabel>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {[
              { num: "01", color: "#0B8F8C", bg: "#F0FDFA", title: "Target Podium's Price-Locked Accounts", detail: "Businesses paying $500–$800+/mo on Podium (after add-ons and per-user fees) are your highest-propensity prospect. Lead every sales conversation with total cost of ownership, not feature comparison." },
              { num: "02", color: "#7C3AED", bg: "#FAF5FF", title: "Counter-Position on AI Ownership", detail: "Podium's AI Employee still hallucinates and customers detect it immediately. Promote InfiniteRankers' custom-trained, client-owned AI systems as the antidote — not a black-box SaaS add-on." },
              { num: "03", color: "#0F4FBF", bg: "#EFF6FF", title: "Win the Support & Flexibility Story", detail: "With 75+ G2 mentions of Podium support decline and 229+ messaging reliability complaints, offer dedicated build teams, transparent workflows, and no annual contract lock-in as core differentiators." },
            ].map((r) => (
              <div key={r.num} className="rounded-2xl p-6 shadow-sm" style={{ background: r.bg, border: `1.5px solid ${r.color}22` }}>
                <p className="text-4xl font-black mb-3" style={{ color: r.color }}>{r.num}</p>
                <p className="font-bold text-[#0F2B5B] text-sm mb-2">{r.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── PODIUM PAIN POINTS ─────────────────────────────────────────────── */}
        <div style={{ background: "#0B1120", borderRadius: 20 }} className="px-6 py-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#F87171" }}>Why Businesses Are Leaving Podium</p>
          <h2 className="text-2xl font-black text-white mb-6">Podium's Core Vulnerabilities</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { icon: "💸", label: "Pricing Opacity",           color: "#FCA5A5", bg: "rgba(239,68,68,0.1)",  text: "Podium's pricing is 'nearly three times higher than comparable platforms' with opaque fees, annual lock-in, and aggressive renewal tactics. Real cost: $500–$800+/mo after add-ons." },
              { icon: "🤖", label: "AI That Hallucinates",      color: "#FCD34D", bg: "rgba(245,158,11,0.1)", text: "Podium's AI Employee ('Jerry') is documented to 'send false information even after being corrected and trained multiple times.' Customers detect the AI, eroding trust instantly." },
              { icon: "📵", label: "229+ Messaging Failures",   color: "#86EFAC", bg: "rgba(34,197,94,0.1)",  text: "Over 229 G2 reviews cite text messages not delivering with no alert sent. Leads fall through the cracks while the platform stays silent." },
              { icon: "📞", label: "Support in Decline",        color: "#93C5FD", bg: "rgba(59,130,246,0.1)", text: "75+ G2 reviews cite support response time degradation, account managers who disappear after contract signing, and billing disputes going unresolved for months." },
            ].map((p) => (
              <div key={p.label} className="rounded-xl p-4 flex gap-4" style={{ background: p.bg, border: `1px solid ${p.color}33` }}>
                <span className="text-2xl flex-shrink-0">{p.icon}</span>
                <div>
                  <p className="font-bold text-sm mb-1" style={{ color: p.color }}>{p.label}</p>
                  <p className="text-blue-100 text-xs leading-relaxed">{p.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── COMPETITIVE LANDSCAPE ─────────────────────────────────────────── */}
        <div>
          <SectionLabel>Competitive Landscape Overview</SectionLabel>
          <p className="text-sm text-gray-500 mt-1 mb-4">InfiniteRankers occupies a distinct "done-for-you custom build" category no SaaS competitor currently serves.</p>
          <div className="overflow-x-auto rounded-2xl shadow-sm" style={{ border: "1px solid #DBE4F0" }}>
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr style={{ background: "#0F2B5B" }} className="text-white">
                  {["Company", "Stage / Scale", "Entry Price", "Strength", "Weakness", "Real Cost"].map(h => (
                    <th key={h} className="text-left px-4 py-3 font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((c, i) => (
                  <tr key={c.name} style={c.ir ? { background: "#F0FDF4", borderTop: "2px solid #16A34A", borderBottom: "2px solid #16A34A" } : { background: i % 2 === 0 ? "#fff" : "#F8FAFC" }}>
                    <td className="px-4 py-3 font-bold whitespace-nowrap" style={{ color: c.ir ? "#15803D" : "#0F2B5B" }}>
                      {c.ir ? "★ " : ""}{c.name}
                    </td>
                    <td className="px-4 py-3 text-gray-500">{c.stage}</td>
                    <td className="px-4 py-3 font-semibold whitespace-nowrap" style={{ color: c.name === "Podium" ? "#DC2626" : "#374151" }}>{c.entry}</td>
                    <td className="px-4 py-3 text-gray-600">{c.strength}</td>
                    <td className="px-4 py-3" style={{ color: c.ir ? "#6B7280" : "#DC2626" }}>{c.weakness}</td>
                    <td className="px-4 py-3 font-bold whitespace-nowrap" style={{ color: c.name === "Podium" ? "#DC2626" : c.ir ? "#15803D" : "#374151" }}>{c.realCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── FEATURE MATRIX ─────────────────────────────────────────────────── */}
        <div>
          <SectionLabel>Feature Comparison Matrix</SectionLabel>
          <div className="flex flex-wrap gap-3 mt-2 mb-4 text-xs">
            <span className="px-2.5 py-1 rounded-full font-bold bg-green-100 text-green-700">✓ InfiniteRankers wins</span>
            <span className="px-2.5 py-1 rounded-full font-bold bg-blue-100 text-blue-700">~ Partial</span>
            <span className="px-2.5 py-1 rounded-full font-bold bg-red-50 text-red-600">✓ Competitor wins</span>
            <span className="px-2.5 py-1 rounded-full bg-gray-100 text-gray-400">✗ / – Not offered</span>
            <span className="ml-auto text-gray-400">Weight = buyer conversation frequency (1–5)</span>
          </div>
          <div className="overflow-x-auto rounded-2xl shadow-sm" style={{ border: "1px solid #DBE4F0" }}>
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr style={{ background: "#0F2B5B" }} className="text-white">
                  {["Feature", "Wt", "InfiniteRankers", "Podium", "Birdeye", "GHL", "NiceJob", "Broadly"].map((h, i) => (
                    <th key={h} className={`px-3 py-3 font-semibold whitespace-nowrap ${i >= 2 ? "text-center" : "text-left"}`}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((f, ri) => (
                  <tr key={f.feature} style={{ background: ri % 2 === 0 ? "#fff" : "#F8FAFC" }}>
                    <td className="px-3 py-2.5 font-semibold text-gray-800">{f.feature}</td>
                    <td className="px-3 py-2.5 text-center">
                      <span className="inline-block w-5 h-5 rounded-full text-center text-[10px] font-black leading-5" style={{ background: "#FEF3C7", color: "#92400E" }}>{f.weight}</span>
                    </td>
                    {([f.ir, f.podium, f.birdeye, f.ghl, f.nicejob, f.broadly] as CellVal[]).map((v, ci) => (
                      <td key={ci} className="px-3 py-2.5 text-center">
                        <span className={`inline-block px-2 py-0.5 rounded text-xs font-bold ${cellBg(v, ci === 0)}`}>
                          {cellSymbol(v)}
                        </span>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── POSITIONING MAP ────────────────────────────────────────────────── */}
        <div>
          <SectionLabel>Positioning Map — Price vs. AI Customization</SectionLabel>
          <p className="text-sm text-gray-500 mt-1 mb-4">The two axes buyers care about most: pricing transparency vs. AI customization & ownership.</p>
          <div className="relative rounded-2xl overflow-hidden shadow-sm" style={{ height: 380, border: "1px solid #DBE4F0" }}>
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="flex flex-col items-start justify-start p-4" style={{ background: "#FEF2F2", borderRight: "1.5px dashed #FCA5A5", borderBottom: "1.5px dashed #FCA5A5" }}>
                <span className="text-xs font-bold text-red-400">EXPENSIVE + GENERIC AI</span>
                <span className="text-[10px] text-red-300 mt-1">Podium's problem zone</span>
              </div>
              <div className="flex flex-col items-start justify-start p-4" style={{ background: "#FFFBEB", borderBottom: "1.5px dashed #FCD34D" }}>
                <span className="text-xs font-bold text-yellow-600">AFFORDABLE + GENERIC AI</span>
                <span className="text-[10px] text-yellow-500 mt-1">DIY / self-serve tools</span>
              </div>
              <div className="flex flex-col items-start justify-start p-4" style={{ background: "#EFF6FF", borderRight: "1.5px dashed #BFDBFE" }}>
                <span className="text-xs font-bold text-blue-500">EXPENSIVE + CUSTOM AI</span>
                <span className="text-[10px] text-blue-400 mt-1">Enterprise AI agencies</span>
              </div>
              <div className="flex flex-col items-start justify-start p-4" style={{ background: "#F0FDF4" }}>
                <span className="text-xs font-bold text-green-700">★ WHITE SPACE</span>
                <span className="text-[10px] text-green-600 mt-1">Custom AI + Affordable</span>
              </div>
            </div>

            {/* Axis labels */}
            <div className="absolute inset-0 flex items-center justify-between px-5 z-10 pointer-events-none">
              <span className="text-[10px] font-black text-gray-500 bg-white px-2 py-0.5 rounded shadow-sm border border-gray-200">← HIGH PRICE / OPAQUE</span>
              <span className="text-[10px] font-black text-gray-500 bg-white px-2 py-0.5 rounded shadow-sm border border-gray-200">LOW PRICE / TRANSPARENT →</span>
            </div>
            <div className="absolute inset-0 flex flex-col items-center justify-between py-5 z-10 pointer-events-none">
              <span className="text-[10px] font-black text-gray-500 bg-white px-2 py-0.5 rounded shadow-sm border border-gray-200">GENERIC / SAAS AI ↑</span>
              <span className="text-[10px] font-black text-gray-500 bg-white px-2 py-0.5 rounded shadow-sm border border-gray-200">↓ CUSTOM / OWNED AI</span>
            </div>

            {/* Dots */}
            {[
              { label: "Podium",      left: "14%", top: "18%", ir: false, red: true },
              { label: "Birdeye",     left: "40%", top: "22%", ir: false },
              { label: "GoHighLevel", left: "66%", top: "28%", ir: false },
              { label: "NiceJob",     left: "60%", top: "19%", ir: false },
              { label: "Broadly",     left: "34%", top: "26%", ir: false },
              { label: "InfiniteRankers ★", left: "66%", top: "66%", ir: true },
            ].map((p) => (
              <div key={p.label} className="absolute z-20 flex items-center gap-1.5" style={{ left: p.left, top: p.top }}>
                <div className="rounded-full border-2 border-white shadow-md" style={{ width: p.ir ? 14 : 10, height: p.ir ? 14 : 10, background: p.ir ? "#16A34A" : p.red ? "#DC2626" : "#2563EB" }} />
                <span className="text-[11px] font-bold whitespace-nowrap px-1.5 py-0.5 rounded" style={{ background: p.ir ? "#F0FDF4" : "rgba(255,255,255,0.85)", color: p.ir ? "#15803D" : p.red ? "#DC2626" : "#1E3A8A", border: p.ir ? "1px solid #86EFAC" : "1px solid #E5E7EB" }}>
                  {p.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-3 rounded-xl px-5 py-4 text-sm" style={{ background: "#F0FDF4", border: "1px solid #86EFAC" }}>
            <strong className="text-green-800">InfiniteRankers occupies the white-space quadrant</strong>
            <span className="text-green-700"> — the only player combining genuinely custom AI (client-owned, trained on their data, no hallucination) with transparent pricing and no annual contract. No SaaS competitor operates here.</span>
          </div>
        </div>

        {/* ── WHITE SPACE & OPPORTUNITIES ──────────────────────────────────── */}
        <div>
          <SectionLabel>White Space & Strategic Opportunities</SectionLabel>
          <p className="text-sm text-gray-500 mt-1 mb-5">Gaps where Podium's structural weaknesses align with InfiniteRankers' unique capabilities.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {WHITESPACE.map((op, i) => {
              const colors = [
                { border: "#FCA5A5", bg: "#FFF5F5", badge: "#FEE2E2", badgeText: "#991B1B", icon: "💰" },
                { border: "#86EFAC", bg: "#F0FDF4", badge: "#DCFCE7", badgeText: "#166534", icon: "🤖" },
                { border: "#93C5FD", bg: "#EFF6FF", badge: "#DBEAFE", badgeText: "#1E40AF", icon: "🔧" },
                { border: "#C4B5FD", bg: "#FAF5FF", badge: "#EDE9FE", badgeText: "#6D28D9", icon: "🔒" },
              ][i];
              return (
                <div key={op.gap} className="rounded-2xl p-5 shadow-sm" style={{ background: colors.bg, border: `1.5px solid ${colors.border}` }}>
                  <div className="flex items-start gap-3 mb-3">
                    <span className="text-2xl flex-shrink-0">{colors.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#0F2B5B] text-sm leading-tight">{op.gap}</h3>
                      <div className="flex gap-2 mt-1.5">
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: colors.badge, color: colors.badgeText }}>{op.label}</span>
                        <span className="text-[10px] px-2 py-0.5 rounded-full font-bold" style={{ background: op.kano === "Delighter" ? "#DCFCE7" : "#E0E7FF", color: op.kano === "Delighter" ? "#166534" : "#3730A3" }}>
                          Kano: {op.kano}
                        </span>
                      </div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-700 leading-relaxed mb-2">{op.detail}</p>
                  <p className="text-[10px] text-gray-400 italic">Evidence: {op.evidence}</p>
                </div>
              );
            })}
          </div>
          <div className="mt-5 grid grid-cols-1 md:grid-cols-3 gap-3">
            {[
              { label: "Basic (Table Stakes)", color: "#374151", bg: "#F9FAFB", border: "#E5E7EB", text: "Review generation, unified inbox, CRM, payments. Losing here disqualifies — but winning here doesn't differentiate." },
              { label: "Performance (More = Better)", color: "#1D4ED8", bg: "#EFF6FF", border: "#BFDBFE", text: "Pricing transparency, messaging reliability, support responsiveness. Podium is actively failing here. Exploit today." },
              { label: "Delighter (Unexpected Win)", color: "#15803D", bg: "#F0FDF4", border: "#86EFAC", text: "Custom-owned AI, zero hallucination guarantee, system ownership on exit. No SaaS competitor offers this." },
            ].map((k) => (
              <div key={k.label} className="rounded-xl px-4 py-3 text-xs" style={{ background: k.bg, border: `1px solid ${k.border}` }}>
                <p className="font-bold mb-1" style={{ color: k.color }}>{k.label}</p>
                <p className="text-gray-600 leading-relaxed">{k.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── 90-DAY ACTION PLAN ────────────────────────────────────────────── */}
        <div style={{ background: "#0B1120", borderRadius: 20 }} className="px-6 py-8">
          <p className="text-xs font-bold tracking-widest uppercase mb-1" style={{ color: "#5EEAD4" }}>Strategy</p>
          <h2 className="text-2xl font-black text-white mb-6">90-Day Action Plan</h2>
          <div className="space-y-4">
            {ACTIONS.map((a) => (
              <div key={a.num} className="rounded-xl p-5 flex gap-5" style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)" }}>
                <div className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-xl font-black" style={{ background: "#0B8F8C", color: "#fff" }}>
                  {a.num}
                </div>
                <div>
                  <h3 className="font-bold text-white text-base mb-1">{a.title}</h3>
                  <p className="text-blue-200 text-sm leading-relaxed">{a.detail}</p>
                  <p className="text-blue-400 text-[10px] mt-2">Sources: {a.sources}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* ── SALES BATTLECARD ─────────────────────────────────────────────── */}
        <div>
          <SectionLabel>Sales Battlecard — Trap-Setting Questions</SectionLabel>
          <p className="text-sm text-gray-500 mt-1 mb-5">Use these questions in a consultative tone to surface Podium's pain before the prospect self-identifies. Once they acknowledge the pain, pivot to your counter-positioning.</p>
          <div className="space-y-3">
            {BATTLECARD.map((bc) => (
              <div key={bc.q} className="rounded-xl flex gap-4 items-start px-5 py-4" style={{ background: "#FFFBEB", border: "1.5px solid #FCD34D" }}>
                <div className="flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center text-sm font-black" style={{ background: "#92400E", color: "#FEF3C7" }}>
                  Q{bc.q}
                </div>
                <p className="text-gray-800 text-sm italic leading-relaxed pt-0.5">"{bc.text}"</p>
              </div>
            ))}
          </div>
          <div className="mt-4 rounded-xl px-5 py-4 text-xs text-gray-600" style={{ background: "#F9FAFB", border: "1px solid #E5E7EB" }}>
            <strong className="text-gray-800">How to use:</strong> Ask all 5 before mentioning Podium. Let the prospect self-identify their pain. When they do, respond: "That's actually one of the top reasons businesses come to us — here's what we do differently."
          </div>
        </div>

        {/* ── SOURCES ──────────────────────────────────────────────────────── */}
        <div>
          <SectionLabel>Sources & Citations</SectionLabel>
          <p className="text-sm text-gray-500 mt-1 mb-4">All claims are supported by publicly available sources as of March 2026.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {SOURCES.map((s) => (
              <div key={s.num} className="flex gap-3 rounded-xl px-4 py-3 text-xs" style={{ background: "#F8FAFC", border: "1px solid #E5E7EB" }}>
                <span className="font-black text-[#0B8F8C] min-w-[28px]">[{s.num}]</span>
                <div>
                  <p className="font-semibold text-gray-700">{s.label}</p>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline break-all">{s.url}</a>
                </div>
              </div>
            ))}
          </div>
          <p className="text-[10px] text-gray-400 mt-4 text-center">This report was prepared for strategic sales and positioning use. Data represents publicly available information as of March 2026. · InfiniteRankers.io</p>
        </div>

      </div>
    </div>
  );
}

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3">
      <h2 className="text-xl font-black text-[#0F2B5B]">{children}</h2>
      <div className="flex-1 h-px" style={{ background: "linear-gradient(90deg,#0B8F8C,transparent)" }} />
    </div>
  );
}
