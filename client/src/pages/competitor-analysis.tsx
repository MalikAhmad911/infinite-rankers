import { useEffect, useRef, useState } from "react";
import { jsPDF } from "jspdf";

// ─── colour palette ───────────────────────────────────────────────────────────
const NAVY   = "#0F2B5B";
const TEAL   = "#0B8F8C";
const BLUE   = "#0F4FBF";
const LGRAY  = "#F4F7FB";
const MGRAY  = "#6B7280";
const BORDER = "#DBE4F0";

// ─── data ─────────────────────────────────────────────────────────────────────
const COMPETITORS = [
  { name: "Birdeye",    stage: "Series C / Growth",  pricing: "Custom / quote", strength: "Review aggregation depth",        weakness: "Complex setup, clunky UI"            },
  { name: "Yext",       stage: "Public (NYSE: YEXT)", pricing: "$199–$999+/mo",  strength: "Listings & knowledge graph",        weakness: "Expensive, listings-only focus"       },
  { name: "Weave",      stage: "Public (NYSE: WEAV)", pricing: "Custom quote",   strength: "Phones + inbox for healthcare",      weakness: "Limited to medical verticals"         },
  { name: "Thryv",      stage: "Public (NASDAQ: THRY)", pricing: "$199–$449/mo", strength: "SMB all-in-one (CRM+billing)",     weakness: "Dated UI, weak AI story"              },
  { name: "GoHighLevel",stage: "Private / bootstrapped", pricing: "$97–$497/mo", strength: "Agency-grade automation & white-label", weakness: "Steep learning curve, no SMB focus" },
  { name: "Broadly",    stage: "Acquired by Workiz",  pricing: "~$299/mo",       strength: "Simple reviews + webchat",           weakness: "Limited channel coverage"             },
  { name: "NiceJob",    stage: "Series A",            pricing: "$75–$149/mo",    strength: "Affordable review automation",        weakness: "No AI, no inbox, no payments"         },
];

const FEATURES = [
  { feature: "AI Lead Follow-Up",      weight: 5, ir: true,  podium: true,  birdeye: false, yext: false, ghl: true,  weave: false },
  { feature: "Unified Inbox",          weight: 5, ir: true,  podium: true,  birdeye: true,  yext: false, ghl: true,  weave: true  },
  { feature: "Review Generation",      weight: 4, ir: true,  podium: true,  birdeye: true,  yext: true,  ghl: true,  weave: true  },
  { feature: "Transparent Pricing",    weight: 5, ir: true,  podium: false, birdeye: false, yext: true,  ghl: true,  weave: false },
  { feature: "SEO Authority Pages",    weight: 5, ir: true,  podium: false, birdeye: false, yext: true,  ghl: false, weave: false },
  { feature: "Payments / Invoicing",   weight: 3, ir: false, podium: true,  birdeye: false, yext: false, ghl: true,  weave: true  },
  { feature: "Text Marketing",         weight: 3, ir: false, podium: true,  birdeye: true,  yext: false, ghl: true,  weave: false },
  { feature: "Vertical Specialisation",weight: 4, ir: true,  podium: false, birdeye: false, yext: false, ghl: false, weave: true  },
  { feature: "Case-Study Density",     weight: 4, ir: true,  podium: false, birdeye: false, yext: false, ghl: false, weave: false },
  { feature: "Human-Supervised AI",    weight: 5, ir: true,  podium: false, birdeye: false, yext: false, ghl: false, weave: false },
  { feature: "Google Indexing API",    weight: 4, ir: true,  podium: false, birdeye: false, yext: false, ghl: false, weave: false },
  { feature: "White-label / Agency",   weight: 2, ir: false, podium: false, birdeye: false, yext: false, ghl: true,  weave: false },
];

const OPPORTUNITIES = [
  { gap: "Opaque pricing",         evidence: "Podium pricing page hides all numbers behind sales CTAs",             kano: "Performance" },
  { gap: "Vertical depth",         evidence: "Podium covers 15+ verticals shallowly — specialists can own one",     kano: "Delighter"   },
  { gap: "Human-supervised AI",    evidence: "Buyers trust AI less when they can't oversee it — we offer oversight", kano: "Delighter"   },
  { gap: "SEO-first positioning",  evidence: "No competitor leads with Google Indexing API + authority content",     kano: "Delighter"   },
  { gap: "ROI proof density",      evidence: "Podium case studies are thin on hard metrics; we lead with numbers",   kano: "Performance" },
  { gap: "Fast implementation",    evidence: "G2 reviews cite long onboarding; we position as live in 48 hrs",      kano: "Performance" },
];

const ACTIONS = [
  {
    action: "Own one vertical first",
    detail: "Pick the vertical Podium targets most (home services / HVAC / dental) and build a dedicated authority page with case studies, pricing calculator, and vertical-specific proof.",
    trap: "Ask prospects: 'Does your current platform have a dedicated onboarding specialist for [your industry]?'",
  },
  {
    action: "Publish transparent pricing",
    detail: "Add a public pricing page with tiers, inclusions, and an ROI calculator. Podium and Birdeye hide pricing — this alone wins comparison searches.",
    trap: "Ask prospects: 'Did you have to talk to three people before you found out what it would cost?'",
  },
  {
    action: "Attack comparison keywords",
    detail: "Create pages for 'Podium alternative,' 'Podium vs [us],' and '[vertical] review software' — high-intent, low-competition bottom-funnel traffic Podium's content team ignores.",
    trap: "Ask prospects: 'If you searched for an alternative tomorrow, would you know exactly why you'd switch?'",
  },
];

// ─── PDF generator ────────────────────────────────────────────────────────────
function generatePDF() {
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  const PW = 612, PH = 792, M = 36;
  const CW = PW - M * 2;
  let y = M;
  let pageNum = 1;
  let isNewPage = false;

  const hex2rgb = (hex: string) => {
    const r = parseInt(hex.slice(1, 3), 16);
    const g = parseInt(hex.slice(3, 5), 16);
    const b = parseInt(hex.slice(5, 7), 16);
    return [r, g, b] as [number, number, number];
  };

  const setFill  = (hex: string) => doc.setFillColor(...hex2rgb(hex));
  const setColor = (hex: string) => doc.setTextColor(...hex2rgb(hex));
  const setDraw  = (hex: string) => doc.setDrawColor(...hex2rgb(hex));

  const addHeader = () => {
    setFill(NAVY);
    doc.rect(0, 0, PW, 24, "F");
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    setColor("#FFFFFF");
    doc.text("INFINITE RANKERS — PODIUM COMPETITOR ANALYSIS", M, 15);
    doc.text(`CONFIDENTIAL`, PW - M, 15, { align: "right" });
  };

  const addFooter = () => {
    const savedY = y;
    setFill("#E8EEF9");
    doc.rect(0, PH - 22, PW, 22, "F");
    doc.setFont("helvetica", "normal");
    doc.setFontSize(7.5);
    setColor(MGRAY);
    doc.text("© 2026 Infinite Rankers LLC · infiniterankers.io", M, PH - 8);
    doc.text(`Page ${pageNum}`, PW - M, PH - 8, { align: "right" });
    y = savedY;
  };

  const newPage = () => {
    addFooter();
    doc.addPage();
    pageNum++;
    y = M + 32;
    isNewPage = true;
    addHeader();
    setColor("#1F2937");
  };

  const checkY = (needed: number) => {
    if (y + needed > PH - M - 28) { newPage(); return true; }
    isNewPage = false;
    return false;
  };

  const sectionTitle = (title: string) => {
    checkY(36);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(14);
    setColor(NAVY);
    doc.text(title, M, y);
    y += 4;
    setDraw(TEAL);
    doc.setLineWidth(1.5);
    doc.line(M, y, M + CW, y);
    y += 14;
    setColor("#1F2937");
  };

  const subTitle = (title: string) => {
    checkY(22);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    setColor(BLUE);
    doc.text(title, M, y);
    y += 14;
    setColor("#1F2937");
  };

  const bodyText = (text: string, indent = 0) => {
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    setColor("#1F2937");
    const lines = doc.splitTextToSize(text, CW - indent);
    for (const line of lines) {
      checkY(13);
      doc.text(line, M + indent, y);
      y += 13;
    }
  };

  const bullet = (text: string, indent = 8) => {
    checkY(13);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    setColor("#1F2937");
    const lines = doc.splitTextToSize(text, CW - indent - 10);
    doc.text("•", M + indent, y);
    for (let i = 0; i < lines.length; i++) {
      if (i > 0) checkY(13);
      doc.text(lines[i], M + indent + 10, y);
      y += 13;
    }
  };

  const gap = (px = 8) => { y += px; };

  // ── PAGE 1: Cover + Executive Summary ─────────────────────────────────────
  addHeader();
  y = M + 32;

  // hero band
  setFill(NAVY);
  doc.roundedRect(M, y, CW, 90, 6, 6, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(20);
  setColor("#FFFFFF");
  doc.text("Podium.com Competitor Analysis", M + 16, y + 28);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);
  doc.text("Deep structured audit for Infinite Rankers LLC · March 2026", M + 16, y + 48);
  doc.setFontSize(9);
  doc.text("Strategy Consulting Deliverable · Confidential", M + 16, y + 66);
  y += 108;

  sectionTitle("EXECUTIVE SUMMARY");

  subTitle("Positioning Statement (Dunford Format)");
  bodyText("For local service businesses and multi-location operators who need to capture, follow up, and convert more leads without adding headcount, Infinite Rankers is an AI Revenue Growth Agency that combines human-supervised automation, SEO authority content, and proven lead systems. Unlike Podium — whose broad positioning, opaque pricing, and shallow vertical coverage leave buyers guessing — we deliver vertical-specific proof, transparent ROI, and a live implementation in 48 hours.");
  gap();

  subTitle("Top 3 Strategic Recommendations");
  bullet("Own one vertical deeply before expanding. Podium spreads thin across 15+ industries. A specialist beats a generalist in conversion and trust.");
  bullet("Publish transparent pricing. Podium and Birdeye both hide numbers. A public pricing page with ROI calculator alone wins comparison searches.");
  bullet("Attack comparison & alternative keywords. High-intent bottom-funnel traffic Podium's content team ignores — easy, fast wins for organic authority.");
  gap(4);

  subTitle("Key Findings");
  bullet("Podium's strongest moat: unified inbox creates workflow lock-in once a team adopts it.");
  bullet("Podium's largest gap: no human-supervised AI, no SEO-authority content, no transparent pricing.");
  bullet("White space: vertical specialisation + SEO-first positioning is uncontested in this category.");
  bullet("Kano shift in progress: AI follow-up is moving from Delighter to Basic — first movers win.");

  addFooter();

  // ── PAGE 2: Competitive Landscape ─────────────────────────────────────────
  newPage();
  sectionTitle("COMPETITIVE LANDSCAPE");
  bodyText("Key players in the local-business communication and AI-lead-conversion category — funding stage, pricing, top strength, and most-cited weakness (sourced from G2/Capterra 1-3 star reviews).");
  gap();

  const colW2 = [100, 110, 80, 120, 130];
  const headers2 = ["Company", "Stage", "Pricing", "Strength", "Weakness"];
  const rowH = 32;
  const tblX = M;

  // header row
  setFill(NAVY);
  doc.rect(tblX, y, CW, 20, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(8);
  setColor("#FFFFFF");
  let cx = tblX + 4;
  for (let i = 0; i < headers2.length; i++) {
    doc.text(headers2[i], cx, y + 13);
    cx += colW2[i];
  }
  y += 20;

  for (let ri = 0; ri < COMPETITORS.length; ri++) {
    const comp = COMPETITORS[ri];
    const row = [comp.name, comp.stage, comp.pricing, comp.strength, comp.weakness];
    const rowLines = row.map((cell, ci) => doc.splitTextToSize(cell, colW2[ci] - 6));
    const maxLines = Math.max(...rowLines.map(l => l.length));
    const rh = maxLines * 10 + 8;
    checkY(rh);
    setFill(ri % 2 === 0 ? "#FFFFFF" : LGRAY);
    doc.rect(tblX, y, CW, rh, "F");
    setDraw(BORDER);
    doc.setLineWidth(0.4);
    doc.rect(tblX, y, CW, rh, "S");
    doc.setFont("helvetica", ri === 0 ? "bold" : "normal");
    doc.setFontSize(8);
    setColor("#1F2937");
    cx = tblX + 4;
    for (let ci = 0; ci < row.length; ci++) {
      rowLines[ci].forEach((line: string, li: number) => {
        doc.text(line, cx, y + 10 + li * 10);
      });
      cx += colW2[ci];
    }
    y += rh;
  }
  gap(12);

  // Podium context blurb
  checkY(50);
  setFill("#EEF4FF");
  doc.roundedRect(M, y, CW, 44, 4, 4, "F");
  setDraw(BLUE);
  doc.setLineWidth(2);
  doc.line(M, y, M, y + 44);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  setColor(NAVY);
  doc.text("Podium's core vulnerability:", M + 10, y + 14);
  doc.setFont("helvetica", "normal");
  setColor("#1F2937");
  const podNote = "Podium wins when buyers want a simple, all-in-one inbox + AI layer. It becomes vulnerable the moment buyers want vertical depth, pricing transparency, or proof-dense case studies. That is precisely where Infinite Rankers attacks.";
  const podLines = doc.splitTextToSize(podNote, CW - 16);
  podLines.forEach((line: string, i: number) => doc.text(line, M + 10, y + 26 + i * 11));
  y += 52;

  addFooter();

  // ── PAGE 3: Feature Matrix ─────────────────────────────────────────────────
  newPage();
  sectionTitle("FEATURE MATRIX");
  bodyText("Rows weighted 1–5 by buyer-conversation frequency. Green = Infinite Rankers leads; Red = competitor leads; Grey = not offered.");
  gap();

  const fmCols = ["Feature", "Weight", "Inf. Rankers", "Podium", "Birdeye", "Yext", "GHL", "Weave"];
  const fmW   = [160, 40, 72, 58, 58, 44, 44, 44];
  const CHECK = "\u2714", CROSS = "\u2718";

  setFill(NAVY);
  doc.rect(M, y, CW, 20, "F");
  doc.setFont("helvetica", "bold");
  doc.setFontSize(7.5);
  setColor("#FFFFFF");
  cx = M + 4;
  for (let i = 0; i < fmCols.length; i++) {
    doc.text(fmCols[i], cx, y + 13);
    cx += fmW[i];
  }
  y += 20;

  for (let ri = 0; ri < FEATURES.length; ri++) {
    const f = FEATURES[ri];
    const cells = [
      f.feature,
      "★".repeat(f.weight),
      f.ir     ? CHECK : CROSS,
      f.podium ? CHECK : CROSS,
      f.birdeye? CHECK : CROSS,
      f.yext   ? CHECK : CROSS,
      f.ghl    ? CHECK : CROSS,
      f.weave  ? CHECK : CROSS,
    ];
    const rh = 16;
    checkY(rh);
    setFill(ri % 2 === 0 ? "#FFFFFF" : LGRAY);
    doc.rect(M, y, CW, rh, "F");
    setDraw(BORDER);
    doc.setLineWidth(0.3);
    doc.rect(M, y, CW, rh, "S");
    cx = M + 4;
    for (let ci = 0; ci < cells.length; ci++) {
      doc.setFont("helvetica", ci === 0 ? "bold" : "normal");
      doc.setFontSize(8);
      // colour check/cross cells
      if (ci >= 2) {
        const isIR = ci === 2;
        if (cells[ci] === CHECK) {
          setColor(isIR ? "#15A26B" : "#D14343");
        } else {
          setColor(MGRAY);
        }
      } else {
        setColor("#1F2937");
      }
      doc.text(cells[ci], cx, y + 11);
      cx += fmW[ci];
    }
    y += rh;
  }
  gap(10);

  checkY(36);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  setColor(MGRAY);
  doc.text("★ = buyer conversation weight (1 = rarely mentioned, 5 = mentioned in nearly every deal). Green = Inf. Rankers wins. Red = competitor has it. Grey dash = neither.", M, y);
  y += 20;

  addFooter();

  // ── PAGE 4: Positioning Map ────────────────────────────────────────────────
  newPage();
  sectionTitle("POSITIONING MAP");
  bodyText("Axes chosen by buyer decision criteria: X = Pricing Transparency (opaque → clear); Y = Vertical Specialisation (generalist → specialist). Each label represents positioning as perceived by the SMB buyer.");
  gap(10);

  // draw 2x2 manually in jsPDF
  const mapX = M + 20, mapY = y, mapW = CW - 40, mapH = 260;
  const midX = mapX + mapW / 2, midY = mapY + mapH / 2;

  setFill(LGRAY);
  doc.rect(mapX, mapY, mapW, mapH, "F");

  // quadrant fills
  setFill("#FFF7F7"); doc.rect(mapX, mapY, mapW/2, mapH/2, "F");       // top-left: bad
  setFill("#F4FFF9"); doc.rect(midX, mapY, mapW/2, mapH/2, "F");       // top-right: ideal
  setFill("#FFFDF0"); doc.rect(mapX, midY, mapW/2, mapH/2, "F");       // bottom-left: meh
  setFill("#EEF4FF"); doc.rect(midX, midY, mapW/2, mapH/2, "F");       // bottom-right: ok

  // axes
  setDraw("#1F2937");
  doc.setLineWidth(1);
  doc.line(mapX, midY, mapX + mapW, midY);  // horizontal
  doc.line(midX, mapY, midX, mapY + mapH);  // vertical

  // axis labels
  doc.setFont("helvetica", "bold"); doc.setFontSize(7); setColor(NAVY);
  doc.text("OPAQUE PRICING", mapX + 4, midY - 4);
  doc.text("TRANSPARENT PRICING", mapX + mapW - 100, midY - 4);
  doc.text("GENERALIST", midX + 4, mapY + 12);
  doc.text("SPECIALIST", midX + 4, mapY + mapH - 6);

  // quadrant titles
  doc.setFont("helvetica", "italic"); doc.setFontSize(7); setColor(MGRAY);
  doc.text("Opaque + Generalist", mapX + 6, mapY + 14);
  doc.text("Transparent + Generalist", midX + 6, mapY + 14);
  doc.text("Opaque + Specialist", mapX + 6, midY + 14);
  doc.text("Transparent + Specialist (WIN ZONE)", midX + 6, midY + 14);

  // plot competitors as dots + labels
  type Plot = { label: string; x: number; y: number; ir?: boolean };
  const plots: Plot[] = [
    { label: "Podium",          x: 0.15, y: 0.25 },
    { label: "Birdeye",         x: 0.20, y: 0.20 },
    { label: "Yext",            x: 0.70, y: 0.15 },
    { label: "GoHighLevel",     x: 0.80, y: 0.35 },
    { label: "Weave",           x: 0.18, y: 0.78 },
    { label: "Thryv",           x: 0.60, y: 0.30 },
    { label: "NiceJob",         x: 0.65, y: 0.75 },
    { label: "Inf. Rankers ★",  x: 0.85, y: 0.82, ir: true },
  ];

  for (const p of plots) {
    const px = mapX + p.x * mapW;
    const py = mapY + p.y * mapH;
    setFill(p.ir ? "#15A26B" : "#0F4FBF");
    doc.circle(px, py, p.ir ? 6 : 4, "F");
    doc.setFont("helvetica", p.ir ? "bold" : "normal");
    doc.setFontSize(7.5);
    setColor(p.ir ? "#15A26B" : NAVY);
    doc.text(p.label, px + 7, py + 3);
  }

  y = mapY + mapH + 12;
  doc.setFont("helvetica", "italic"); doc.setFontSize(8); setColor(MGRAY);
  doc.text("★ Infinite Rankers target position. Competitors plotted based on public positioning signals.", M, y);
  y += 20;

  addFooter();

  // ── PAGE 5: White Space & Opportunities ───────────────────────────────────
  newPage();
  sectionTitle("WHITE SPACE & OPPORTUNITIES");
  subTitle("Gaps No Competitor Serves Well");
  gap(4);

  const gapHeaders = ["Gap", "Evidence", "Kano Type"];
  const gapW = [130, 280, 90];
  setFill(NAVY);
  doc.rect(M, y, CW, 18, "F");
  doc.setFont("helvetica", "bold"); doc.setFontSize(8); setColor("#FFFFFF");
  cx = M + 4;
  gapHeaders.forEach((h, i) => { doc.text(h, cx, y + 12); cx += gapW[i]; });
  y += 18;

  OPPORTUNITIES.forEach((op, ri) => {
    const row = [op.gap, op.evidence, op.kano];
    const rowLines2 = row.map((cell, ci) => doc.splitTextToSize(cell, gapW[ci] - 6));
    const maxL = Math.max(...rowLines2.map(l => l.length));
    const rh2 = maxL * 10 + 6;
    checkY(rh2);
    setFill(ri % 2 === 0 ? "#FFFFFF" : LGRAY);
    doc.rect(M, y, CW, rh2, "F");
    setDraw(BORDER); doc.setLineWidth(0.3); doc.rect(M, y, CW, rh2, "S");
    cx = M + 4;
    row.forEach((_, ci) => {
      doc.setFont("helvetica", ci === 2 ? "bold" : "normal");
      doc.setFontSize(8);
      setColor(op.kano === "Delighter" && ci === 2 ? "#15A26B" : "#1F2937");
      rowLines2[ci].forEach((line: string, li: number) => doc.text(line, cx, y + 10 + li * 10));
      cx += gapW[ci];
    });
    y += rh2;
  });

  gap(14);
  subTitle("Kano Analysis — Where the Bar Is Moving");
  bullet("BASICS (table stakes, you must have): Unified inbox, SMS messaging, Google review generation, mobile-friendly dashboard.");
  bullet("PERFORMANCE (more = better): AI follow-up speed, review volume growth, integration breadth, reporting clarity.");
  bullet("DELIGHTERS (unexpected, win deals): Human-supervised AI with explainability, Google Indexing API, SEO authority content, vertical-specific case studies with hard ROI numbers, public transparent pricing.");
  gap(4);
  bodyText("Key Kano insight: Podium's AI Employee feature is still a Delighter in the market. Competitors that lead with human-supervised AI — and can explain what the AI does and doesn't do — will differentiate themselves before AI becomes a Basic expectation (estimated 12–18 months).");

  addFooter();

  // ── PAGE 6: Action Plan ────────────────────────────────────────────────────
  newPage();
  sectionTitle("ACTION PLAN & BATTLECARDS");

  ACTIONS.forEach((a, i) => {
    checkY(80);
    setFill("#EEF4FF");
    doc.roundedRect(M, y, CW, 6, 2, 2, "F");
    y += 10;

    doc.setFont("helvetica", "bold"); doc.setFontSize(11); setColor(NAVY);
    doc.text(`${i + 1}. ${a.action}`, M, y);
    y += 14;

    doc.setFont("helvetica", "normal"); doc.setFontSize(9); setColor("#1F2937");
    const dLines = doc.splitTextToSize(a.detail, CW);
    dLines.forEach((line: string) => { checkY(13); doc.text(line, M, y); y += 13; });
    gap(4);

    // trap box
    checkY(36);
    setFill("#F9FBE7");
    doc.roundedRect(M, y, CW, 28, 4, 4, "F");
    setDraw("#B5CC3A"); doc.setLineWidth(1.5); doc.line(M, y, M, y + 28);
    doc.setFont("helvetica", "bold"); doc.setFontSize(8.5); setColor("#5A6600");
    doc.text("TRAP-SETTING QUESTION:", M + 10, y + 11);
    doc.setFont("helvetica", "italic"); setColor("#1F2937");
    const tLines = doc.splitTextToSize(`"${a.trap}"`, CW - 16);
    tLines.forEach((line: string, li: number) => doc.text(line, M + 10, y + 21 + li * 10));
    y += 36;
    gap(10);
  });

  gap(6);
  subTitle("Summary Battlecard");
  bullet("Lead with: 'What's your current cost per lead, and do you know your follow-up response time?' — Podium's pitch relies on speed; force them to expose the gap first.");
  bullet("Objection — 'We use Podium already': 'Great — are you getting dedicated SEO authority content and human-reviewed AI with your plan? Because that's where our clients are seeing the compounding returns.'");
  bullet("Objection — 'Podium is bigger': 'Bigger isn't the same as better-fit. Podium serves 15 verticals shallowly. We go deep in yours with proof.'");

  addFooter();

  // ── FINAL PAGE: Sources ────────────────────────────────────────────────────
  newPage();
  sectionTitle("SOURCES & METHODOLOGY");
  subTitle("Data Sources");
  const sources = [
    "1. podium.com — public marketing site, pricing page, product pages, industry pages (March 2026)",
    "2. g2.com/products/podium — 1–3 star reviews for competitor weakness signals",
    "3. g2.com — Birdeye, Weave, Thryv, NiceJob, GoHighLevel product pages and reviews",
    "4. crunchbase.com — funding stage and headcount data for all listed competitors",
    "5. capterra.com — supplementary review data for SMB platforms",
    "6. similarweb.com — traffic channel mix estimates (note: estimates, not audited data)",
    "7. linkedin.com/jobs — hiring signals used to infer Podium's AI roadmap direction",
    "8. web.archive.org — historical Podium messaging to identify positioning pivots",
    "9. Podium competitor analysis HTML report — provided by Infinite Rankers team (attached_assets/)",
  ];
  sources.forEach(s => { bodyText(s, 0); gap(2); });

  gap(10);
  subTitle("Methodology Notes");
  bullet("Competitor weaknesses are sourced from 1–3 star user reviews to capture actual buyer language, not marketing claims.");
  bullet("Pricing data reflects publicly visible pricing only. Enterprise/custom quotes are flagged as opaque.");
  bullet("Kano classification is based on current buyer expectation signals from review sites and sales conversation patterns.");
  bullet("Feature matrix weighting (1–5) reflects frequency in prospect conversations, not engineering priority.");
  bullet("SimilarWeb traffic estimates are low-confidence for competitors under ~50k monthly visits — treat as directional only.");
  gap(10);
  bodyText("This report was prepared as a strategy consulting deliverable for internal use by Infinite Rankers LLC. All competitor data reflects publicly available information as of March 2026.", 0);

  addFooter();

  doc.save("Infinite-Rankers-Podium-Competitor-Analysis.pdf");
}

// ─── Web preview ──────────────────────────────────────────────────────────────
export default function CompetitorAnalysis() {
  const [generated, setGenerated] = useState(false);

  const handleDownload = () => {
    generatePDF();
    setGenerated(true);
  };

  return (
    <div className="min-h-screen bg-[#F4F7FB] pb-16">
      {/* banner */}
      <div style={{ background: "linear-gradient(135deg,#0F2B5B,#0B8F8C)" }} className="text-white px-6 py-10">
        <div className="max-w-5xl mx-auto">
          <p className="text-xs uppercase tracking-widest text-blue-200 mb-2">Strategy Report · March 2026</p>
          <h1 className="text-3xl font-bold mb-2">Podium.com Competitor Analysis</h1>
          <p className="text-blue-100 max-w-2xl text-sm">
            Deep structured audit of Podium's business model, product architecture, SEO posture, feature gaps, and strategic opportunities for Infinite Rankers.
          </p>
          <button
            onClick={handleDownload}
            data-testid="button-download-pdf"
            className="mt-6 inline-flex items-center gap-2 bg-white text-[#0F2B5B] font-bold px-5 py-2.5 rounded-lg shadow hover:bg-blue-50 transition text-sm"
          >
            ⬇ Download PDF Report
          </button>
          {generated && <p className="mt-2 text-green-300 text-xs">PDF downloaded successfully.</p>}
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 mt-8 space-y-6">

        {/* Executive Summary */}
        <Section title="Executive Summary">
          <Highlight>
            <strong>Positioning:</strong> For local service businesses who need to capture and convert more leads without adding headcount, Infinite Rankers is an AI Revenue Growth Agency. Unlike Podium — whose broad positioning, opaque pricing, and shallow verticals leave buyers guessing — we deliver vertical-specific proof, transparent ROI, and a live implementation in 48 hours.
          </Highlight>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-4">
            {["Own one vertical deeply before expanding", "Publish transparent pricing + ROI calculator", "Attack comparison & alternative keywords"].map((r, i) => (
              <div key={i} className="bg-white rounded-xl border border-blue-100 p-4 shadow-sm">
                <span className="text-2xl font-black text-[#0F4FBF]">{i+1}</span>
                <p className="text-sm font-semibold text-gray-800 mt-1">{r}</p>
              </div>
            ))}
          </div>
        </Section>

        {/* Competitive Landscape */}
        <Section title="Competitive Landscape">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F2B5B] text-white text-xs">
                  {["Company","Stage","Pricing","Strength","Weakness"].map(h => (
                    <th key={h} className="text-left px-3 py-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPETITORS.map((c, i) => (
                  <tr key={c.name} className={i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]"}>
                    <td className="px-3 py-2 font-semibold text-[#0F2B5B]">{c.name}</td>
                    <td className="px-3 py-2 text-gray-600 text-xs">{c.stage}</td>
                    <td className="px-3 py-2 text-gray-700 text-xs">{c.pricing}</td>
                    <td className="px-3 py-2 text-green-700 text-xs">{c.strength}</td>
                    <td className="px-3 py-2 text-red-600 text-xs">{c.weakness}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Feature Matrix */}
        <Section title="Feature Matrix">
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="bg-[#0F2B5B] text-white">
                  {["Feature","Weight","Inf. Rankers","Podium","Birdeye","Yext","GHL","Weave"].map(h => (
                    <th key={h} className="text-left px-2 py-2">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {FEATURES.map((f, i) => (
                  <tr key={f.feature} className={i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]"}>
                    <td className="px-2 py-1.5 font-medium text-gray-800">{f.feature}</td>
                    <td className="px-2 py-1.5 text-yellow-500">{"★".repeat(f.weight)}</td>
                    {[f.ir, f.podium, f.birdeye, f.yext, f.ghl, f.weave].map((val, ci) => (
                      <td key={ci} className={`px-2 py-1.5 font-bold text-center ${ci === 0 ? (val ? "text-green-600" : "text-red-400") : (val ? "text-red-500" : "text-gray-300")}`}>
                        {val ? "✔" : "✘"}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-2">Green ✔ = Infinite Rankers leads. Red ✔ = competitor has it. ✘ = not offered.</p>
        </Section>

        {/* White Space */}
        <Section title="White Space & Opportunities">
          <div className="overflow-x-auto">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-[#0F2B5B] text-white text-xs">
                  {["Gap","Evidence","Kano Type"].map(h => <th key={h} className="text-left px-3 py-2">{h}</th>)}
                </tr>
              </thead>
              <tbody>
                {OPPORTUNITIES.map((op, i) => (
                  <tr key={op.gap} className={i % 2 === 0 ? "bg-white" : "bg-[#F4F7FB]"}>
                    <td className="px-3 py-2 font-semibold text-[#0F2B5B] text-xs">{op.gap}</td>
                    <td className="px-3 py-2 text-gray-600 text-xs">{op.evidence}</td>
                    <td className="px-3 py-2 text-xs">
                      <span className={`inline-block px-2 py-0.5 rounded-full font-bold ${op.kano === "Delighter" ? "bg-green-100 text-green-700" : "bg-blue-100 text-blue-700"}`}>
                        {op.kano}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Section>

        {/* Action Plan */}
        <Section title="Action Plan & Battlecards">
          <div className="space-y-5">
            {ACTIONS.map((a, i) => (
              <div key={i} className="bg-white rounded-xl border border-blue-100 shadow-sm p-5">
                <h3 className="font-bold text-[#0F2B5B] text-base mb-1">{i+1}. {a.action}</h3>
                <p className="text-sm text-gray-700 mb-3">{a.detail}</p>
                <div className="bg-[#F9FBE7] border-l-4 border-[#B5CC3A] px-4 py-2 rounded text-sm">
                  <span className="font-bold text-[#5A6600] text-xs uppercase">Trap-setting question: </span>
                  <span className="italic text-gray-700">"{a.trap}"</span>
                </div>
              </div>
            ))}
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

function Highlight({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-[#F9FBFF] border-l-4 border-[#0F4FBF] px-4 py-3 rounded text-sm text-gray-800">{children}</div>
  );
}
