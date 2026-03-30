import { jsPDF } from "jspdf";
import {
  REPORT_META,
  POSITIONING_STATEMENT,
  TOP_RECOMMENDATIONS,
  COMPETITORS,
  COMPETITIVE_LANDSCAPE_INTRO,
  FUNDING_CONTEXT,
  FEATURE_MATRIX,
  FEATURE_MATRIX_COLUMNS,
  POSITIONING_MAP_DATA,
  MAP_INTRO,
  MAP_INSIGHT,
  QUADRANT_ANALYSIS,
  WHITE_SPACE,
  WHITE_SPACE_INTRO,
  KANO_SUMMARY,
  ACTION_PLAN,
  ACTION_PLAN_INTRO,
  BATTLECARD_INTRO,
  TRAP_QUESTIONS,
  SOURCES,
  SOURCES_INTRO,
  CellStatus,
} from "./podium-report-data";

const PAGE_W = 612;
const PAGE_H = 792;
const MARGIN = 36;
const CONTENT_W = PAGE_W - MARGIN * 2;
const HEADER_H = 28;
const FOOTER_H = 20;
const CONTENT_TOP = MARGIN + HEADER_H + 8;
const CONTENT_BOTTOM = PAGE_H - MARGIN - FOOTER_H - 8;
const TOTAL_PAGES = 7;

function hexToRgb(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return [r, g, b];
}

function addHeader(doc: jsPDF, pageNum: number) {
  doc.saveGraphicsState();
  doc.setFillColor(37, 99, 235);
  doc.rect(MARGIN, MARGIN, CONTENT_W, HEADER_H, "F");
  doc.setFontSize(8);
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.text("INFINITERANKERS.IO — CONFIDENTIAL", MARGIN + 6, MARGIN + 10);
  doc.setFont("helvetica", "normal");
  doc.text("Competitive Analysis: InfiniteRankers vs. Podium", MARGIN + 6, MARGIN + 19);
  doc.setFont("helvetica", "bold");
  doc.text(`Page ${pageNum} of ${TOTAL_PAGES}`, PAGE_W - MARGIN - 6, MARGIN + 19, { align: "right" });
  doc.restoreGraphicsState();
}

function addFooter(doc: jsPDF) {
  doc.saveGraphicsState();
  const fy = PAGE_H - MARGIN - FOOTER_H + 6;
  doc.setDrawColor(200, 200, 200);
  doc.setLineWidth(0.5);
  doc.line(MARGIN, PAGE_H - MARGIN - FOOTER_H, PAGE_W - MARGIN, PAGE_H - MARGIN - FOOTER_H);
  doc.setFontSize(7);
  doc.setTextColor(120, 120, 120);
  doc.setFont("helvetica", "normal");
  doc.text("© 2026 InfiniteRankers.io · infiniterankers.io · All rights reserved · March 2026", MARGIN, fy);
  doc.text("For internal and sales use only", PAGE_W - MARGIN, fy, { align: "right" });
  doc.restoreGraphicsState();
}

/** Check if y + needed exceeds page bottom; if so, add a new page and reset y */
function ensureSpace(
  doc: jsPDF,
  y: number,
  needed: number,
  pageNum: number,
  onNewPage: (pg: number) => void
): [number, number] {
  if (y + needed > CONTENT_BOTTOM) {
    doc.addPage();
    const newPage = pageNum + 1;
    onNewPage(newPage);
    return [CONTENT_TOP, newPage];
  }
  return [y, pageNum];
}

function drawSectionHeader(doc: jsPDF, title: string, y: number): number {
  doc.setFillColor(37, 99, 235);
  doc.rect(MARGIN, y, CONTENT_W, 16, "F");
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  doc.text(title.toUpperCase(), MARGIN + 6, y + 11);
  doc.setTextColor(0, 0, 0);
  return y + 22;
}

function cellStatusLabel(s: CellStatus): string {
  if (s === "win") return "\u2713";
  if (s === "partial") return "~";
  if (s === "lose") return "\u2717";
  return "\u2013";
}

function cellBgColor(s: CellStatus, isIR: boolean): [number, number, number] {
  if (isIR && s === "win") return [219, 234, 254];
  if (isIR && s === "partial") return [254, 243, 199];
  if (s === "win") return [240, 253, 244];
  if (s === "partial") return [254, 249, 195];
  if (s === "lose") return [254, 226, 226];
  return [245, 245, 245];
}

function cellFgColor(s: CellStatus, isIR: boolean): [number, number, number] {
  if (isIR && s === "win") return [30, 64, 175];
  if (s === "win") return [22, 101, 52];
  if (s === "partial") return [133, 77, 14];
  if (s === "lose") return [153, 27, 27];
  return [100, 100, 100];
}

/** Render the positioning map to a canvas and return base64 PNG data URL */
function renderMapToImage(widthPx: number, heightPx: number): string {
  const canvas = document.createElement("canvas");
  canvas.width = widthPx;
  canvas.height = heightPx;
  const ctx = canvas.getContext("2d")!;
  const PAD = 50;
  const W = widthPx;
  const H = heightPx;

  ctx.fillStyle = "#f8fafc";
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = "#e2e8f0";
  ctx.lineWidth = 1;
  ctx.strokeRect(0, 0, W, H);

  ctx.strokeStyle = "#cbd5e1";
  ctx.lineWidth = 1;
  ctx.setLineDash([5, 4]);
  ctx.beginPath();
  ctx.moveTo(PAD, H / 2);
  ctx.lineTo(W - PAD, H / 2);
  ctx.stroke();
  ctx.beginPath();
  ctx.moveTo(W / 2, PAD);
  ctx.lineTo(W / 2, H - PAD);
  ctx.stroke();
  ctx.setLineDash([]);

  ctx.font = "bold 11px sans-serif";
  ctx.fillStyle = "#94a3b8";
  ctx.textAlign = "left";
  ctx.fillText("LOW PRICE / TRANSPARENT", PAD + 4, H / 2 - 8);
  ctx.textAlign = "right";
  ctx.fillText("HIGH PRICE / OPAQUE", W - PAD - 4, H / 2 - 8);
  ctx.textAlign = "center";
  ctx.fillText("GENERIC / SAAS AI", W / 2, H - PAD + 16);
  ctx.fillText("CUSTOM / OWNED AI", W / 2, PAD - 8);

  for (const pt of POSITIONING_MAP_DATA) {
    const px = PAD + pt.nx * (W - PAD * 2);
    const py = PAD + pt.ny * (H - PAD * 2);
    const radius = pt.bold ? 10 : 7;

    ctx.beginPath();
    ctx.arc(px, py, radius, 0, Math.PI * 2);
    ctx.fillStyle = pt.color;
    ctx.globalAlpha = 0.85;
    ctx.fill();
    ctx.globalAlpha = 1;

    const labelX = pt.nx > 0.65 ? px - radius - 5 : px + radius + 5;
    ctx.textAlign = pt.nx > 0.65 ? "right" : "left";
    ctx.font = pt.bold ? "bold 11px sans-serif" : "10px sans-serif";
    ctx.fillStyle = pt.color;
    ctx.fillText(pt.name, labelX, py + 4);
  }

  return canvas.toDataURL("image/png");
}

export function generatePodiumPDF(): void {
  const doc = new jsPDF({ unit: "pt", format: "letter" });
  let pageNum = 1;

  function newPage() {
    doc.addPage();
    pageNum++;
    addHeader(doc, pageNum);
    addFooter(doc);
  }

  function checkSpace(y: number, needed: number): number {
    if (y + needed > CONTENT_BOTTOM) {
      newPage();
      return CONTENT_TOP;
    }
    return y;
  }

  // ─── PAGE 1: Executive Summary ────────────────────────────────────────────
  addHeader(doc, 1);
  addFooter(doc);
  let y = CONTENT_TOP;

  doc.setFillColor(248, 250, 252);
  doc.rect(MARGIN, y, CONTENT_W, 56, "F");
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(3);
  doc.line(MARGIN, y, MARGIN, y + 56);
  doc.setLineWidth(0.5);

  doc.setFontSize(20);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text(REPORT_META.title, MARGIN + 12, y + 20);
  doc.setFontSize(13);
  doc.setTextColor(37, 99, 235);
  doc.text(REPORT_META.subtitle, MARGIN + 12, y + 36);
  doc.setFontSize(9);
  doc.setTextColor(100, 116, 139);
  doc.setFont("helvetica", "normal");
  doc.text(`${REPORT_META.category} · ${REPORT_META.date}`, MARGIN + 12, y + 50);
  y += 68;

  y = drawSectionHeader(doc, "Positioning Statement (Dunford Format)", y);

  const posText =
    `For ${POSITIONING_STATEMENT.for}, ${POSITIONING_STATEMENT.product} is a ` +
    `${POSITIONING_STATEMENT.category} that ${POSITIONING_STATEMENT.keyBenefit}. ` +
    `Unlike ${POSITIONING_STATEMENT.primaryAlternative}, InfiniteRankers ${POSITIONING_STATEMENT.keyDifferentiator}.`;

  doc.setFillColor(239, 246, 255);
  const posLines = doc.splitTextToSize(posText, CONTENT_W - 24);
  const posH = posLines.length * 13 + 12;
  doc.rect(MARGIN, y, CONTENT_W, posH, "F");
  doc.setDrawColor(37, 99, 235);
  doc.setLineWidth(2);
  doc.line(MARGIN, y, MARGIN, y + posH);
  doc.setLineWidth(0.5);
  doc.setFontSize(9);
  doc.setFont("helvetica", "italic");
  doc.setTextColor(30, 41, 59);
  doc.text(posLines, MARGIN + 10, y + 10);
  y += posH + 20;

  y = drawSectionHeader(doc, "Top 3 Strategic Recommendations", y);

  for (const rec of TOP_RECOMMENDATIONS) {
    const titleLines = doc.splitTextToSize(rec.title, CONTENT_W - 44);
    const descLines = doc.splitTextToSize(rec.description, CONTENT_W - 44);
    const srcLabel = `Sources: [${rec.sources.join(", ")}]`;
    const cardH = titleLines.length * 12 + descLines.length * 11 + 26;
    y = checkSpace(y, cardH + 8);

    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(210, 220, 230);
    doc.setLineWidth(0.5);
    doc.rect(MARGIN, y, CONTENT_W, cardH, "FD");

    doc.setFillColor(37, 99, 235);
    doc.circle(MARGIN + 14, y + cardH / 2, 9, "F");
    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(String(rec.number), MARGIN + 14, y + cardH / 2 + 3, { align: "center" });

    doc.setTextColor(15, 23, 42);
    doc.setFontSize(10);
    doc.setFont("helvetica", "bold");
    doc.text(titleLines, MARGIN + 28, y + 12);

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(descLines, MARGIN + 28, y + 12 + titleLines.length * 12);

    doc.setFontSize(7);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100, 116, 139);
    doc.text(srcLabel, MARGIN + 28, y + cardH - 8);

    y += cardH + 8;
  }

  // ─── PAGE 2: Competitive Landscape ──────────────────────────────────────
  doc.addPage();
  pageNum = 2;
  addHeader(doc, 2);
  addFooter(doc);
  y = CONTENT_TOP;

  y = drawSectionHeader(doc, "Competitive Landscape Overview", y);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  const introLines = doc.splitTextToSize(COMPETITIVE_LANDSCAPE_INTRO, CONTENT_W);
  doc.text(introLines, MARGIN, y);
  y += introLines.length * 11 + 12;

  const colW = [80, 74, 62, 80, 90, 74];
  const colHdrs = ["Company", "Stage / Scale", "Entry Price", "Strength", "Weakness", "Real Cost"];

  doc.setFillColor(37, 99, 235);
  doc.rect(MARGIN, y, CONTENT_W, 14, "F");
  doc.setFontSize(7.5);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  let cx = MARGIN;
  for (let i = 0; i < colHdrs.length; i++) {
    doc.text(colHdrs[i], cx + 4, y + 10);
    cx += colW[i];
  }
  y += 14;

  for (let ri = 0; ri < COMPETITORS.length; ri++) {
    const comp = COMPETITORS[ri];
    const isIR = comp.company === "InfiniteRankers";
    const rowData = [comp.company, comp.stage, comp.entryPrice, comp.strength, comp.weakness, comp.realPrice];
    const cellLines = rowData.map((d, ci) => doc.splitTextToSize(d, colW[ci] - 8));
    const maxLines = Math.max(...cellLines.map((l) => l.length));
    const rh = Math.max(maxLines * 9.5 + 8, 22);

    y = checkSpace(y, rh);

    if (isIR) doc.setFillColor(239, 246, 255);
    else doc.setFillColor(ri % 2 === 0 ? 248 : 255, ri % 2 === 0 ? 250 : 255, ri % 2 === 0 ? 252 : 255);
    doc.rect(MARGIN, y, CONTENT_W, rh, "F");
    doc.setDrawColor(210, 220, 230);
    doc.setLineWidth(0.3);
    doc.rect(MARGIN, y, CONTENT_W, rh, "D");

    cx = MARGIN;
    for (let ci = 0; ci < colW.length; ci++) {
      if (ci === 0 && isIR) { doc.setFont("helvetica", "bold"); doc.setTextColor(37, 99, 235); }
      else if (ci === 3) { doc.setFont("helvetica", "normal"); doc.setTextColor(22, 101, 52); }
      else if (ci === 4) { doc.setFont("helvetica", "normal"); doc.setTextColor(153, 27, 27); }
      else { doc.setFont("helvetica", "normal"); doc.setTextColor(30, 41, 59); }
      doc.setFontSize(7);
      doc.text(cellLines[ci], cx + 4, y + 9);
      cx += colW[ci];
    }
    y += rh;
  }

  y += 14;
  y = checkSpace(y, 30);
  y = drawSectionHeader(doc, "Funding & Headcount Context", y);

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  for (const ctx of FUNDING_CONTEXT) {
    const lines = doc.splitTextToSize(`\u2022 ${ctx}`, CONTENT_W);
    y = checkSpace(y, lines.length * 11 + 2);
    doc.text(lines, MARGIN, y);
    y += lines.length * 11 + 2;
  }

  // ─── PAGE 3: Feature Matrix ───────────────────────────────────────────────
  doc.addPage();
  pageNum = 3;
  addHeader(doc, 3);
  addFooter(doc);
  y = CONTENT_TOP;

  y = drawSectionHeader(doc, "Feature Comparison Matrix", y);

  doc.setFontSize(8);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text("Weight 1\u20135 = buyer conversation frequency.  \u2713 = full  ~ = partial  \u2717 = loses  \u2013 = N/A", MARGIN, y);
  doc.text("Green = IR wins   Yellow = partial   Red = competitor loses", MARGIN, y + 11);

  const legendItems = [
    { label: "IR Win", bg: [219, 234, 254] as [number,number,number], fg: [30, 64, 175] as [number,number,number] },
    { label: "Win", bg: [240, 253, 244] as [number,number,number], fg: [22, 101, 52] as [number,number,number] },
    { label: "Partial", bg: [254, 249, 195] as [number,number,number], fg: [133, 77, 14] as [number,number,number] },
    { label: "Lose", bg: [254, 226, 226] as [number,number,number], fg: [153, 27, 27] as [number,number,number] },
    { label: "N/A", bg: [245, 245, 245] as [number,number,number], fg: [100, 100, 100] as [number,number,number] },
  ];
  let lx = MARGIN + 305;
  for (const ld of legendItems) {
    doc.setFillColor(...ld.bg);
    doc.rect(lx, y + 3, 38, 10, "F");
    doc.setFontSize(6.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(...ld.fg);
    doc.text(ld.label, lx + 19, y + 10, { align: "center" });
    lx += 42;
  }
  y += 22;

  const mColW = [162, 65, 55, 58, 55, 55, 50];
  const mHdrs = ["Feature (Weight)", ...FEATURE_MATRIX_COLUMNS];

  doc.setFillColor(37, 99, 235);
  doc.rect(MARGIN, y, CONTENT_W, 14, "F");
  doc.setFontSize(7);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(255, 255, 255);
  let mx = MARGIN;
  for (let i = 0; i < mHdrs.length; i++) {
    const label = mHdrs[i] === "InfiniteRankers" ? "IR" : mHdrs[i] === "GoHighLevel" ? "GHL" : mHdrs[i];
    doc.text(label, mx + mColW[i] / 2, y + 10, { align: "center" });
    mx += mColW[i];
  }
  y += 14;

  for (let ri = 0; ri < FEATURE_MATRIX.length; ri++) {
    const row = FEATURE_MATRIX[ri];
    const featText = `${row.feature} (${row.weight}) [${row.sources.join(",")}]`;
    const featLines = doc.splitTextToSize(featText, mColW[0] - 8);
    const rh = Math.max(featLines.length * 9.5 + 6, 16);
    y = checkSpace(y, rh);

    doc.setFillColor(ri % 2 === 0 ? 248 : 255, ri % 2 === 0 ? 250 : 255, ri % 2 === 0 ? 252 : 255);
    doc.rect(MARGIN, y, mColW[0], rh, "F");
    doc.setFontSize(7);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(30, 41, 59);
    doc.text(featLines, MARGIN + 4, y + 9);

    mx = MARGIN + mColW[0];
    for (let ci = 0; ci < row.cells.length; ci++) {
      const status = row.cells[ci];
      const isIR = ci === 0;
      doc.setFillColor(...cellBgColor(status, isIR));
      doc.rect(mx, y, mColW[ci + 1], rh, "F");
      doc.setFontSize(9);
      doc.setFont("helvetica", "bold");
      doc.setTextColor(...cellFgColor(status, isIR));
      doc.text(cellStatusLabel(status), mx + mColW[ci + 1] / 2, y + rh / 2 + 3, { align: "center" });
      mx += mColW[ci + 1];
    }

    doc.setDrawColor(210, 220, 230);
    doc.setLineWidth(0.3);
    doc.rect(MARGIN, y, CONTENT_W, rh, "D");
    y += rh;
  }

  // ─── PAGE 4: Positioning Map ─────────────────────────────────────────────
  doc.addPage();
  pageNum = 4;
  addHeader(doc, 4);
  addFooter(doc);
  y = CONTENT_TOP;

  y = drawSectionHeader(doc, "Positioning Map \u2014 Price vs. AI Customization", y);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  const mapIntroLines = doc.splitTextToSize(MAP_INTRO, CONTENT_W);
  doc.text(mapIntroLines, MARGIN, y);
  y += mapIntroLines.length * 11 + 10;

  // Render map to canvas image and embed via addImage
  const MAP_IMG_W_PT = CONTENT_W;
  const MAP_IMG_H_PT = 200;
  const MAP_PX_W = 800;
  const MAP_PX_H = Math.round(MAP_PX_W * (MAP_IMG_H_PT / MAP_IMG_W_PT));
  const mapImgData = renderMapToImage(MAP_PX_W, MAP_PX_H);
  doc.addImage(mapImgData, "PNG", MARGIN, y, MAP_IMG_W_PT, MAP_IMG_H_PT);
  y += MAP_IMG_H_PT + 14;

  doc.setFontSize(8);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(37, 99, 235);
  doc.text("InfiniteRankers Positioning Insight:", MARGIN, y);
  y += 12;
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  const insightLines = doc.splitTextToSize(MAP_INSIGHT, CONTENT_W);
  doc.text(insightLines, MARGIN, y);
  y += insightLines.length * 11 + 14;

  y = drawSectionHeader(doc, "Quadrant Analysis", y);

  const quadColorMap: Record<string, [number, number, number]> = {
    blue: [37, 99, 235],
    red: [153, 27, 27],
    green: [22, 101, 52],
    amber: [133, 77, 14],
  };

  for (const q of QUADRANT_ANALYSIS) {
    const [cr, cg, cb] = quadColorMap[q.colorKey];
    const noteLines = doc.splitTextToSize(q.note, CONTENT_W - 10);
    const needed = 12 + noteLines.length * 10 + 6;
    y = checkSpace(y, needed);

    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(cr, cg, cb);
    doc.text(`${q.title} \u2192 ${q.who}`, MARGIN, y);
    y += 10;
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(noteLines, MARGIN + 10, y);
    y += noteLines.length * 10 + 6;
  }

  // ─── PAGE 5: White Space & Opportunities ────────────────────────────────
  doc.addPage();
  pageNum = 5;
  addHeader(doc, 5);
  addFooter(doc);
  y = CONTENT_TOP;

  y = drawSectionHeader(doc, "White Space & Strategic Opportunities", y);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  const wsIntroLines = doc.splitTextToSize(WHITE_SPACE_INTRO, CONTENT_W);
  doc.text(wsIntroLines, MARGIN, y);
  y += wsIntroLines.length * 11 + 12;

  const typeColorMap: Record<string, [number, number, number]> = {
    "Primary Gap": [37, 99, 235],
    "Differentiator Gap": [124, 58, 237],
    "Category Gap": [5, 150, 105],
    "Strategic Gap": [217, 119, 6],
  };

  for (const ws of WHITE_SPACE) {
    const [tcr, tcg, tcb] = typeColorMap[ws.type] || [37, 99, 235];
    const descLines = doc.splitTextToSize(ws.description, CONTENT_W - 16);
    const evLines = doc.splitTextToSize(`Evidence: ${ws.evidence} [${ws.sources.join(",")}]`, CONTENT_W - 16);
    const cardH = 14 + descLines.length * 10 + evLines.length * 9 + 18;
    y = checkSpace(y, cardH + 10);

    doc.setFillColor(248, 250, 252);
    doc.setDrawColor(210, 220, 230);
    doc.setLineWidth(0.5);
    doc.rect(MARGIN, y, CONTENT_W, cardH, "FD");
    doc.setFillColor(tcr, tcg, tcb);
    doc.rect(MARGIN, y, 4, cardH, "F");

    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(tcr, tcg, tcb);
    doc.text(ws.title, MARGIN + 10, y + 12);

    doc.setFontSize(7);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.setFillColor(tcr, tcg, tcb);
    doc.roundedRect(MARGIN + CONTENT_W - 82, y + 4, 38, 10, 2, 2, "F");
    doc.text(ws.type.toUpperCase(), MARGIN + CONTENT_W - 63, y + 11, { align: "center" });

    const kanoColors: Record<string, [number, number, number]> = {
      Performance: [37, 99, 235],
      Delighter: [124, 58, 237],
      Basic: [22, 101, 52],
    };
    const [kcr, kcg, kcb] = kanoColors[ws.kano] || [37, 99, 235];
    doc.setFillColor(kcr, kcg, kcb);
    doc.roundedRect(MARGIN + CONTENT_W - 40, y + 4, 36, 10, 2, 2, "F");
    doc.text(`${ws.kano.toUpperCase()}`, MARGIN + CONTENT_W - 22, y + 11, { align: "center" });

    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    doc.text(descLines, MARGIN + 10, y + 24);

    doc.setFontSize(7.5);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100, 116, 139);
    doc.text(evLines, MARGIN + 10, y + 24 + descLines.length * 10 + 4);

    y += cardH + 10;
  }

  y += 6;
  y = checkSpace(y, 30);
  y = drawSectionHeader(doc, "Kano Analysis Summary", y);

  for (const ki of KANO_SUMMARY) {
    const kColorMap: Record<string, [number,number,number]> = {
      green: [22, 101, 52],
      blue: [37, 99, 235],
      purple: [124, 58, 237],
    };
    const [kr, kg, kb] = kColorMap[ki.colorKey];
    const kLines = doc.splitTextToSize(ki.text, CONTENT_W - 8);
    y = checkSpace(y, 12 + kLines.length * 10 + 6);

    doc.setFontSize(8);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(kr, kg, kb);
    doc.text(`${ki.label}:`, MARGIN, y);

    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(kLines, MARGIN + 8, y + 10);
    y += kLines.length * 10 + 12;
  }

  // ─── PAGE 6: Action Plan ────────────────────────────────────────────────
  doc.addPage();
  pageNum = 6;
  addHeader(doc, 6);
  addFooter(doc);
  y = CONTENT_TOP;

  y = drawSectionHeader(doc, "90-Day Action Plan", y);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  const apIntroLines = doc.splitTextToSize(ACTION_PLAN_INTRO, CONTENT_W);
  doc.text(apIntroLines, MARGIN, y);
  y += apIntroLines.length * 11 + 10;

  for (const action of ACTION_PLAN) {
    const descLines = doc.splitTextToSize(action.description, CONTENT_W - 44);
    const cardH = descLines.length * 10 + 30;
    y = checkSpace(y, cardH + 12);

    doc.setFillColor(239, 246, 255);
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(0.5);
    doc.rect(MARGIN, y, CONTENT_W, cardH, "FD");

    doc.setFillColor(37, 99, 235);
    doc.rect(MARGIN, y, 30, cardH, "F");
    doc.setFontSize(14);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(String(action.number), MARGIN + 15, y + cardH / 2 + 5, { align: "center" });

    doc.setFontSize(9.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    doc.text(action.title, MARGIN + 38, y + 14);

    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(51, 65, 85);
    doc.text(descLines, MARGIN + 38, y + 26);

    doc.setFontSize(7);
    doc.setFont("helvetica", "italic");
    doc.setTextColor(100, 116, 139);
    doc.text(`Sources: [${action.sources.join(", ")}]`, MARGIN + 38, y + cardH - 8);

    y += cardH + 12;
  }

  y += 6;
  y = checkSpace(y, 30);
  y = drawSectionHeader(doc, "Sales Battlecard \u2014 Trap-Setting Questions", y);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  const bcLines = doc.splitTextToSize(BATTLECARD_INTRO, CONTENT_W);
  doc.text(bcLines, MARGIN, y);
  y += bcLines.length * 11 + 10;

  for (let qi = 0; qi < TRAP_QUESTIONS.length; qi++) {
    const qLines = doc.splitTextToSize(`${qi + 1}. ${TRAP_QUESTIONS[qi]}`, CONTENT_W - 20);
    const qh = qLines.length * 11 + 12;
    y = checkSpace(y, qh + 6);

    doc.setFillColor(qi % 2 === 0 ? 239 : 248, qi % 2 === 0 ? 246 : 250, qi % 2 === 0 ? 255 : 252);
    doc.setDrawColor(37, 99, 235);
    doc.setLineWidth(qi % 2 === 0 ? 1.5 : 0.3);
    doc.rect(MARGIN, y, CONTENT_W, qh, "FD");
    doc.setLineWidth(2);
    doc.line(MARGIN, y, MARGIN, y + qh);

    doc.setFontSize(8.5);
    doc.setFont("helvetica", qi % 2 === 0 ? "bold" : "normal");
    doc.setTextColor(15, 23, 42);
    doc.text(qLines, MARGIN + 10, y + 10);
    y += qh + 6;
  }

  // ─── PAGE 7: Sources ─────────────────────────────────────────────────────
  doc.addPage();
  pageNum = 7;
  addHeader(doc, 7);
  addFooter(doc);
  y = CONTENT_TOP;

  y = drawSectionHeader(doc, "Sources & Citations", y);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  const srcIntroLines = doc.splitTextToSize(SOURCES_INTRO, CONTENT_W);
  doc.text(srcIntroLines, MARGIN, y);
  y += srcIntroLines.length * 11 + 16;

  for (const src of SOURCES) {
    y = checkSpace(y, 38);
    doc.setFillColor(src.number % 2 === 0 ? 248 : 255, src.number % 2 === 0 ? 250 : 255, src.number % 2 === 0 ? 252 : 255);
    doc.rect(MARGIN, y, CONTENT_W, 32, "F");
    doc.setDrawColor(210, 220, 230);
    doc.setLineWidth(0.3);
    doc.rect(MARGIN, y, CONTENT_W, 32, "D");

    doc.setFillColor(37, 99, 235);
    doc.circle(MARGIN + 14, y + 16, 9, "F");
    doc.setFontSize(8.5);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(255, 255, 255);
    doc.text(String(src.number), MARGIN + 14, y + 19, { align: "center" });

    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(15, 23, 42);
    doc.text(src.label, MARGIN + 28, y + 13);

    doc.setFontSize(8);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(37, 99, 235);
    const urlLines = doc.splitTextToSize(src.url, CONTENT_W - 32);
    doc.text(urlLines, MARGIN + 28, y + 24);

    y += 38;
  }

  y += 16;
  y = checkSpace(y, 60);
  doc.setFillColor(248, 250, 252);
  doc.setDrawColor(210, 220, 230);
  doc.setLineWidth(0.5);
  doc.rect(MARGIN, y, CONTENT_W, 56, "FD");
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(37, 99, 235);
  doc.text("InfiniteRankers.io", MARGIN + 10, y + 16);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.setFontSize(8.5);
  const closingLines = doc.splitTextToSize(
    "This report was prepared for strategic sales and positioning use. The data represents publicly available information as of March 2026. For questions or a custom competitive analysis, contact InfiniteRankers.io.",
    CONTENT_W - 20
  );
  doc.text(closingLines, MARGIN + 10, y + 28);

  doc.save("InfiniteRankers-vs-Podium-Competitive-Analysis-2026.pdf");
}
