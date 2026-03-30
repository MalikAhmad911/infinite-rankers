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

// ─── Web preview ──────────────────────────────────────────────────────────────
export default function CompetitorAnalysis() {
  const [generated, setGenerated] = useState(false);

  const handleDownload = () => { generatePDF(); setGenerated(true); };

  return (
    <div className="min-h-screen bg-[#F4F7FB] pb-16">
      <SEOHead
        title="Competitive Analysis Report | InfiniteRankers vs. Podium"
        description="Confidential competitive analysis: InfiniteRankers vs. Podium — positioning, feature matrix, white space, 90-day action plan, and sales battlecard."
        noIndex={true}
      />

      {/* Banner */}
      <div style={{ background: "linear-gradient(135deg,#0F2B5B 0%,#0B8F8C 100%)" }} className="text-white px-6 py-12">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-200 mb-2">INFINITERANKERS.IO — CONFIDENTIAL · Strategy Report · March 2026</p>
          <h1 className="text-3xl font-bold mb-1">Competitive Analysis Report</h1>
          <p className="text-lg text-blue-100 mb-1">InfiniteRankers.io vs. Podium.com</p>
          <p className="text-blue-200 text-sm mb-5">Local Service Business AI Automation · March 2026</p>
          <button
            onClick={handleDownload}
            data-testid="button-download-pdf"
            className="inline-flex items-center gap-2 bg-white text-[#0F2B5B] font-bold px-5 py-2.5 rounded-lg shadow hover:bg-blue-50 transition text-sm"
          >
            ⬇ Download PDF Report
          </button>
          {generated && <p className="mt-2 text-green-300 text-xs">PDF downloaded successfully.</p>}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8 space-y-6">

        {/* Positioning Statement */}
        <Section title="Positioning Statement (Dunford Format)">
          <div className="bg-[#F0F4FF] border-l-4 border-[#0F4FBF] px-5 py-4 rounded text-sm text-gray-800 leading-relaxed">
            For <strong>local service businesses</strong> who are missing leads and wasting money on rigid SaaS contracts, <strong>InfiniteRankers</strong> is a custom AI automation agency that builds done-for-you systems for lead capture, follow-up, booking, and review generation. Unlike <strong>Podium</strong>, InfiniteRankers builds custom AI infrastructure you own — not a monthly subscription to a platform that may not fit your workflow.
          </div>
        </Section>

        {/* Top 3 Recommendations */}
        <Section title="Top 3 Strategic Recommendations">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { num: "1", title: "Target Podium's Price-Locked Accounts", detail: "Businesses paying $500–$800+/mo on Podium are your highest-propensity prospect. Lead with total cost of ownership, not feature comparison." },
              { num: "2", title: "Counter-Position on AI Ownership", detail: "Podium's AI Employee still hallucinates. Promote InfiniteRankers' custom-trained, client-owned AI systems as the antidote — not a black-box SaaS add-on." },
              { num: "3", title: "Win the Support & Flexibility Story", detail: "With 75+ G2 support complaints and 229+ messaging reliability issues, offer dedicated build teams, transparent workflows, and no annual lock-in." },
            ].map((r) => (
              <div key={r.num} className="bg-white rounded-xl border border-blue-100 p-5 shadow-sm">
                <span className="text-3xl font-black text-[#0B8F8C]">{r.num}</span>
                <p className="font-bold text-[#0F2B5B] text-sm mt-1 mb-2">{r.title}</p>
                <p className="text-xs text-gray-600 leading-relaxed">{r.detail}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Competitive Landscape */}
        <Section title="Competitive Landscape Overview">
          <p className="text-xs text-gray-500 mb-3">The local business communication and reputation management market is dominated by Podium. InfiniteRankers occupies a distinct "done-for-you custom build" category that no SaaS competitor currently serves.</p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#0F2B5B] text-white">
                  {["Company", "Stage / Scale", "Entry Price", "Strength", "Weakness", "Real Cost"].map(h => (
                    <th key={h} className="text-left px-3 py-2 font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((c, i) => (
                  <tr
                    key={c.name}
                    className={c.ir ? "bg-[#F0FDF4] border border-green-300" : (i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]")}
                  >
                    <td className={`px-3 py-2 font-bold ${c.ir ? "text-[#15A26B]" : "text-[#0F2B5B]"}`}>{c.name}{c.ir ? " ★" : ""}</td>
                    <td className="px-3 py-2 text-gray-600">{c.stage}</td>
                    <td className="px-3 py-2 font-semibold text-gray-800 whitespace-nowrap">{c.entry}</td>
                    <td className="px-3 py-2 text-gray-700">{c.strength}</td>
                    <td className="px-3 py-2 text-red-600">{c.weakness}</td>
                    <td className="px-3 py-2 font-semibold text-gray-800 whitespace-nowrap">{c.realCost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Feature Matrix */}
        <Section title="Feature Comparison Matrix">
          <p className="text-xs text-gray-500 mb-3">Weight 1–5 based on buyer conversation frequency. &nbsp;<span className="text-green-600 font-bold">✓ = IR wins</span> &nbsp;<span className="text-blue-500 font-bold">~ = partial</span> &nbsp;<span className="text-red-500">✓ = competitor wins</span> &nbsp;<span className="text-gray-300">✗ / – = loses / N/A</span></p>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#0F2B5B] text-white">
                  {["Feature", "Wt", "InfiniteRankers", "Podium", "Birdeye", "GHL", "NiceJob", "Broadly"].map(h => (
                    <th key={h} className="text-left px-2 py-2 font-semibold whitespace-nowrap">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((f, i) => (
                  <tr key={f.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]"}>
                    <td className="px-2 py-1.5 font-semibold text-gray-800">{f.feature}</td>
                    <td className="px-2 py-1.5 text-yellow-700 font-bold">{f.weight}</td>
                    {([f.ir, f.podium, f.birdeye, f.ghl, f.nicejob, f.broadly] as CellVal[]).map((v, ci) => (
                      <td key={ci} className={`px-2 py-1.5 text-center font-bold ${cellClass(v, ci === 0)}`}>
                        {cellSymbol(v)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Positioning Map */}
        <Section title="Positioning Map — Price vs. AI Customization">
          <p className="text-xs text-gray-500 mb-4">Axes: (1) Pricing Transparency &amp; Flexibility — opaque/expensive → transparent/affordable. (2) AI Customization &amp; Ownership — generic black-box SaaS → fully custom, client-owned AI systems.</p>
          <div className="relative bg-gray-50 rounded-xl border border-gray-200 overflow-hidden" style={{ height: 320 }}>
            {/* Quadrants */}
            <div className="absolute inset-0 grid grid-cols-2 grid-rows-2">
              <div className="bg-red-50 border-r border-b border-gray-200 flex items-start justify-start p-3">
                <span className="text-xs text-gray-400 font-medium">Generic + Expensive</span>
              </div>
              <div className="bg-yellow-50 border-b border-gray-200 flex items-start justify-start p-3">
                <span className="text-xs text-gray-400 font-medium">Generic + Affordable</span>
              </div>
              <div className="bg-blue-50 border-r border-gray-200 flex items-start justify-start p-3">
                <span className="text-xs text-gray-400 font-medium">Custom + Expensive</span>
              </div>
              <div className="bg-green-50 flex items-start justify-start p-3">
                <span className="text-xs text-green-700 font-bold">★ WHITE SPACE (Custom + Affordable)</span>
              </div>
            </div>
            {/* Axis labels */}
            <div className="absolute top-1/2 left-0 right-0 flex justify-between px-4 -translate-y-3 z-10">
              <span className="text-[10px] font-bold text-gray-500 bg-white px-1 rounded">HIGH PRICE / OPAQUE</span>
              <span className="text-[10px] font-bold text-gray-500 bg-white px-1 rounded">LOW PRICE / TRANSPARENT</span>
            </div>
            <div className="absolute left-1/2 top-0 bottom-0 flex flex-col justify-between py-4 -translate-x-12 z-10">
              <span className="text-[10px] font-bold text-gray-500 bg-white px-1 rounded">GENERIC / SAAS AI</span>
              <span className="text-[10px] font-bold text-gray-500 bg-white px-1 rounded">CUSTOM / OWNED AI</span>
            </div>
            {/* Competitor dots */}
            {[
              { label: "Podium",       left: "15%", top: "22%", ir: false },
              { label: "Birdeye",      left: "42%", top: "26%", ir: false },
              { label: "GoHighLevel",  left: "68%", top: "30%", ir: false },
              { label: "NiceJob",      left: "62%", top: "24%", ir: false },
              { label: "Broadly",      left: "36%", top: "28%", ir: false },
              { label: "InfiniteRankers ★", left: "68%", top: "68%", ir: true },
            ].map((p) => (
              <div key={p.label} className="absolute z-20" style={{ left: p.left, top: p.top }}>
                <div className={`w-3 h-3 rounded-full border-2 border-white shadow ${p.ir ? "bg-green-500" : "bg-blue-600"}`} />
                <span className={`text-[10px] font-bold ml-1 whitespace-nowrap ${p.ir ? "text-green-700" : "text-[#0F2B5B]"}`}>{p.label}</span>
              </div>
            ))}
          </div>
          <div className="mt-3 bg-green-50 border border-green-200 rounded-lg px-4 py-3 text-xs text-green-800">
            <strong>InfiniteRankers Positioning Insight:</strong> InfiniteRankers occupies the upper-left quadrant — the only player combining genuinely custom AI (client-owned, trained on their data, no hallucination) with transparent pricing and no annual contract. Podium sits in the expensive + generic AI quadrant, which is where its review complaints concentrate.
          </div>
        </Section>

        {/* White Space */}
        <Section title="White Space & Strategic Opportunities">
          <div className="space-y-4">
            {WHITESPACE.map((op) => (
              <div key={op.gap} className="bg-white rounded-xl border border-gray-100 shadow-sm p-5">
                <div className="flex items-start gap-3 mb-2">
                  <div className="flex-1">
                    <h3 className="font-bold text-[#0F2B5B] text-base">{op.gap}</h3>
                    <div className="flex gap-2 mt-1">
                      <span className="text-xs px-2 py-0.5 rounded-full font-bold bg-blue-100 text-blue-700">{op.label}</span>
                      <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${op.kano === "Delighter" ? "bg-green-100 text-green-700" : "bg-purple-100 text-purple-700"}`}>
                        Kano: {op.kano}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 leading-relaxed mb-2">{op.detail}</p>
                <p className="text-xs text-gray-400 italic">Evidence: {op.evidence}</p>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#F4F7FB] rounded-xl p-4 text-xs text-gray-700 space-y-2">
            <p><strong>Basic (Table Stakes):</strong> Review generation, unified messaging inbox, basic CRM, payment processing. Losing here disqualifies — winning here doesn't differentiate.</p>
            <p><strong>Performance (More = Better):</strong> Pricing transparency, messaging reliability, support responsiveness. Podium is actively failing here. Exploitable today.</p>
            <p><strong>Delighter (Unexpected):</strong> Custom-owned AI, zero hallucination guarantee, system ownership on exit. No SaaS competitor offers this. Today's delighter, tomorrow's expectation.</p>
          </div>
        </Section>

        {/* 90-Day Action Plan */}
        <Section title="90-Day Action Plan">
          <div className="space-y-4">
            {ACTIONS.map((a) => (
              <div key={a.num} className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
                <div className="flex items-start gap-4">
                  <span className="text-3xl font-black text-[#0B8F8C] leading-none">{a.num}</span>
                  <div>
                    <h3 className="font-bold text-[#0F2B5B] text-base mb-1">{a.title}</h3>
                    <p className="text-sm text-gray-700 leading-relaxed">{a.detail}</p>
                    <p className="text-xs text-gray-400 mt-2">Sources: {a.sources}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Section>

        {/* Battlecard */}
        <Section title="Sales Battlecard — Trap-Setting Questions">
          <p className="text-sm text-gray-600 mb-4">Use these questions to expose Podium's key vulnerabilities before the prospect self-identifies. Ask in a consultative tone — they surface pain, not attack. Once the prospect acknowledges the pain, pivot to InfiniteRankers' counter-positioning.</p>
          <div className="space-y-3">
            {BATTLECARD.map((bc) => (
              <div key={bc.q} className="bg-[#FEFCE8] border-l-4 border-[#CA8A04] rounded-r-xl px-5 py-3 flex gap-3">
                <span className="font-black text-[#92400E] text-lg leading-none">Q{bc.q}</span>
                <p className="text-sm text-gray-800 italic leading-relaxed">"{bc.text}"</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Sources */}
        <Section title="Sources & Citations">
          <p className="text-xs text-gray-500 mb-4">All claims supported by publicly available sources as of March 2026.</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {SOURCES.map((s) => (
              <div key={s.num} className="flex gap-2 text-xs">
                <span className="font-bold text-[#0F2B5B] min-w-[28px]">[{s.num}]</span>
                <div>
                  <p className="font-semibold text-gray-700">{s.label}</p>
                  <a href={s.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline break-all">{s.url}</a>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-4 bg-[#F4F7FB] rounded-lg px-4 py-3 text-xs text-gray-600">
            This report was prepared for strategic sales and positioning use. The data represents publicly available information as of March 2026. For questions or a custom competitive analysis, contact InfiniteRankers.io.
          </div>
        </Section>

      </div>
    </div>
  );
}

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div className="bg-white rounded-2xl border border-blue-50 shadow-sm p-6">
      <h2 className="text-xl font-bold text-[#0F2B5B] border-b-2 border-[#0B8F8C] pb-2 mb-4">{title}</h2>
      {children}
    </div>
  );
}
