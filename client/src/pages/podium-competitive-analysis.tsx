import { generatePodiumPDF } from "@/lib/podium-pdf-generator";
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
} from "@/lib/podium-report-data";
import { useState } from "react";
import { Download, FileText } from "lucide-react";
import SEOHead from "@/components/seo-head";

const PAGE_W = 816;
const PAGE_H = 1056;
const MARGIN = 48;

function cellLabel(s: CellStatus): string {
  if (s === "win") return "✓";
  if (s === "partial") return "~";
  if (s === "lose") return "✗";
  return "–";
}

function cellClass(s: CellStatus, isIR: boolean): string {
  if (isIR && s === "win") return "bg-blue-100 text-blue-800 font-bold";
  if (isIR && s === "partial") return "bg-yellow-100 text-yellow-800 font-semibold";
  if (s === "win") return "bg-green-50 text-green-800 font-semibold";
  if (s === "partial") return "bg-yellow-50 text-yellow-700";
  if (s === "lose") return "bg-red-50 text-red-700";
  return "bg-gray-50 text-gray-400";
}

function PageShell({
  children,
  pageNum,
  totalPages,
}: {
  children: React.ReactNode;
  pageNum: number;
  totalPages: number;
}) {
  return (
    <div
      className="relative bg-white shadow-2xl border border-gray-200 flex-shrink-0 overflow-hidden"
      style={{ width: PAGE_W, height: PAGE_H }}
      data-testid={`report-page-${pageNum}`}
    >
      <div
        className="absolute top-0 left-0 right-0 bg-blue-600 flex items-center justify-between px-6"
        style={{ height: 36 }}
      >
        <div className="flex items-center gap-4">
          <span className="text-white text-xs font-bold tracking-wider">INFINITERANKERS.IO — CONFIDENTIAL</span>
          <span className="text-blue-200 text-xs">Competitive Analysis: InfiniteRankers vs. Podium</span>
        </div>
        <span className="text-blue-200 text-xs">Page {pageNum} of {totalPages}</span>
      </div>

      <div
        className="absolute bottom-0 left-0 right-0 border-t border-gray-200 flex items-center justify-between px-6"
        style={{ height: 28 }}
      >
        <span className="text-gray-400 text-xs">
          © 2026 InfiniteRankers.io · infiniterankers.io · All rights reserved · March 2026
        </span>
        <span className="text-gray-400 text-xs">For internal and sales use only</span>
      </div>

      <div
        className="absolute overflow-hidden"
        style={{ top: 46, left: MARGIN, right: MARGIN, bottom: 38 }}
      >
        {children}
      </div>
    </div>
  );
}

function SecHead({ title }: { title: string }) {
  return (
    <div className="bg-blue-600 px-3 py-2 mb-3">
      <span className="text-white text-xs font-bold tracking-widest uppercase">{title}</span>
    </div>
  );
}

// ─── Page 1: Executive Summary ──────────────────────────────────────────────
function Page1() {
  const posText =
    `For ${POSITIONING_STATEMENT.for}, ${POSITIONING_STATEMENT.product} is a ` +
    `${POSITIONING_STATEMENT.category} that ${POSITIONING_STATEMENT.keyBenefit}. ` +
    `Unlike ${POSITIONING_STATEMENT.primaryAlternative}, InfiniteRankers ` +
    `${POSITIONING_STATEMENT.keyDifferentiator}.`;

  return (
    <PageShell pageNum={1} totalPages={7}>
      <div className="border-l-4 border-blue-600 bg-gray-50 pl-4 pr-3 py-3 mb-4">
        <h1 className="text-2xl font-bold text-slate-900">{REPORT_META.title}</h1>
        <p className="text-blue-600 font-semibold text-base mt-1">{REPORT_META.subtitle}</p>
        <p className="text-slate-400 text-xs mt-1">{REPORT_META.category} · {REPORT_META.date}</p>
      </div>

      <SecHead title="Positioning Statement (Dunford Format)" />
      <div className="bg-blue-50 border-l-4 border-blue-500 px-4 py-3 mb-4 italic text-slate-700 text-sm leading-relaxed">
        {posText}
      </div>

      <SecHead title="Top 3 Strategic Recommendations" />
      <div className="space-y-3">
        {TOP_RECOMMENDATIONS.map((rec) => (
          <div
            key={rec.number}
            className="flex gap-4 bg-gray-50 border border-gray-200 rounded p-3"
            data-testid={`rec-${rec.number}`}
          >
            <div className="flex-shrink-0 w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">{rec.number}</span>
            </div>
            <div className="flex-1">
              <h3 className="font-bold text-slate-900 text-sm">{rec.title}</h3>
              <p className="text-slate-500 text-xs mt-1 leading-relaxed">{rec.description}</p>
              <p className="text-slate-400 text-xs italic mt-1">Sources: [{rec.sources.join(", ")}]</p>
            </div>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

// ─── Page 2: Competitive Landscape ──────────────────────────────────────────
function Page2() {
  return (
    <PageShell pageNum={2} totalPages={7}>
      <SecHead title="Competitive Landscape Overview" />
      <p className="text-slate-500 text-xs mb-3 leading-relaxed">{COMPETITIVE_LANDSCAPE_INTRO}</p>

      <div className="overflow-hidden border border-gray-200 rounded mb-4">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-blue-600 text-white">
              {["Company", "Stage / Scale", "Entry Price", "Strength", "Weakness", "Real Cost"].map((h) => (
                <th key={h} className="text-left px-2 py-2 font-semibold">{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {COMPETITORS.map((comp, i) => (
              <tr
                key={comp.company}
                className={comp.company === "InfiniteRankers" ? "bg-blue-50" : i % 2 === 0 ? "bg-gray-50" : "bg-white"}
                data-testid={`comp-row-${comp.company.toLowerCase().replace(/\s/g, "-")}`}
              >
                <td className={`px-2 py-2 font-semibold ${comp.company === "InfiniteRankers" ? "text-blue-700" : "text-slate-900"}`}>
                  {comp.company}
                </td>
                <td className="px-2 py-2 text-slate-500 text-xs">{comp.stage}</td>
                <td className="px-2 py-2 text-slate-700 font-semibold">{comp.entryPrice}</td>
                <td className="px-2 py-2 text-green-800 text-xs leading-relaxed">{comp.strength}</td>
                <td className="px-2 py-2 text-red-800 text-xs leading-relaxed">{comp.weakness}</td>
                <td className="px-2 py-2 text-slate-600 text-xs">{comp.realPrice}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <SecHead title="Funding & Headcount Context" />
      <ul className="space-y-1">
        {FUNDING_CONTEXT.map((ctx, i) => (
          <li key={i} className="flex gap-2 text-xs text-slate-600">
            <span className="text-blue-500 flex-shrink-0">•</span>
            <span>{ctx}</span>
          </li>
        ))}
      </ul>
    </PageShell>
  );
}

// ─── Page 3: Feature Matrix ──────────────────────────────────────────────────
function Page3() {
  return (
    <PageShell pageNum={3} totalPages={7}>
      <SecHead title="Feature Comparison Matrix" />
      <div className="flex flex-wrap gap-3 mb-2 text-xs text-slate-500 items-center">
        <span>Weight 1–5 = buyer conversation frequency. ✓ full · ~ partial · ✗ loses · – N/A</span>
        <span className="flex gap-1">
          {[
            { label: "IR Win", cls: "bg-blue-100 text-blue-800" },
            { label: "Win", cls: "bg-green-50 text-green-800" },
            { label: "Partial", cls: "bg-yellow-50 text-yellow-700" },
            { label: "Lose", cls: "bg-red-50 text-red-700" },
            { label: "N/A", cls: "bg-gray-50 text-gray-400" },
          ].map((l) => (
            <span key={l.label} className={`px-2 py-0.5 rounded font-semibold text-xs ${l.cls}`}>{l.label}</span>
          ))}
        </span>
      </div>

      <div className="overflow-hidden border border-gray-200 rounded">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-blue-600 text-white">
              <th className="text-left px-2 py-1.5 font-semibold" style={{ width: 200 }}>Feature (Weight)</th>
              {FEATURE_MATRIX_COLUMNS.map((col) => (
                <th key={col} className="text-center px-1 py-1.5 font-semibold">
                  {col === "InfiniteRankers" ? "IR" : col === "GoHighLevel" ? "GHL" : col}
                </th>
              ))}
              <th className="text-center px-1 py-1.5 font-semibold text-blue-200">Src</th>
            </tr>
          </thead>
          <tbody>
            {FEATURE_MATRIX.map((row, ri) => (
              <tr key={row.feature} className={ri % 2 === 0 ? "bg-gray-50" : "bg-white"} data-testid={`matrix-row-${ri}`}>
                <td className="px-2 py-1.5 text-slate-800 font-medium leading-tight">
                  {row.feature}
                  <span className="ml-1 text-blue-500 font-bold">({row.weight})</span>
                </td>
                {row.cells.map((status, ci) => (
                  <td
                    key={ci}
                    className={`px-1 py-1.5 text-center font-bold ${cellClass(status, ci === 0)}`}
                    data-testid={`cell-${ri}-${ci}`}
                  >
                    {cellLabel(status)}
                  </td>
                ))}
                <td className="px-1 py-1.5 text-center text-slate-400 text-xs">[{row.sources.join(",")}]</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </PageShell>
  );
}

// ─── Page 4: Positioning Map ────────────────────────────────────────────────
function PositioningMapSVG() {
  const W = PAGE_W - MARGIN * 2;
  const H = 300;
  const PAD = 48;

  return (
    <svg width={W} height={H} className="bg-gray-50 border border-gray-200 rounded">
      <line x1={PAD} y1={H / 2} x2={W - PAD} y2={H / 2} stroke="#cbd5e1" strokeWidth={1} strokeDasharray="5,4" />
      <line x1={W / 2} y1={PAD} x2={W / 2} y2={H - PAD} stroke="#cbd5e1" strokeWidth={1} strokeDasharray="5,4" />

      <text x={PAD + 4} y={H / 2 - 8} fontSize={9} fill="#94a3b8" fontWeight="bold">LOW PRICE / TRANSPARENT</text>
      <text x={W - PAD - 4} y={H / 2 - 8} fontSize={9} fill="#94a3b8" fontWeight="bold" textAnchor="end">HIGH PRICE / OPAQUE</text>
      <text x={W / 2} y={H - PAD + 16} fontSize={9} fill="#94a3b8" fontWeight="bold" textAnchor="middle">GENERIC / SAAS AI</text>
      <text x={W / 2} y={PAD - 8} fontSize={9} fill="#94a3b8" fontWeight="bold" textAnchor="middle">CUSTOM / OWNED AI</text>

      {POSITIONING_MAP_DATA.map((pt) => {
        const px = PAD + pt.nx * (W - PAD * 2);
        const py = PAD + pt.ny * (H - PAD * 2);
        const r = pt.bold ? 10 : 7;
        const labelX = pt.nx > 0.65 ? px - r - 5 : px + r + 5;
        const anchor = pt.nx > 0.65 ? "end" : "start";
        return (
          <g key={pt.name}>
            <circle cx={px} cy={py} r={r} fill={pt.color} opacity={0.85} />
            <text x={labelX} y={py + 4} fontSize={pt.bold ? 10 : 9} fill={pt.color} fontWeight={pt.bold ? "bold" : "normal"} textAnchor={anchor}>
              {pt.name}
            </text>
          </g>
        );
      })}
    </svg>
  );
}

function Page4() {
  const quadColor: Record<string, string> = {
    blue: "text-blue-700 border-blue-200 bg-blue-50",
    red: "text-red-700 border-red-200 bg-red-50",
    green: "text-green-700 border-green-200 bg-green-50",
    amber: "text-amber-700 border-amber-200 bg-amber-50",
  };

  return (
    <PageShell pageNum={4} totalPages={7}>
      <SecHead title="Positioning Map — Price vs. AI Customization" />
      <p className="text-slate-500 text-xs mb-3 leading-relaxed">{MAP_INTRO}</p>

      <PositioningMapSVG />

      <div className="mt-3 mb-4">
        <p className="text-blue-700 font-bold text-xs mb-1">InfiniteRankers Positioning Insight:</p>
        <p className="text-slate-500 text-xs leading-relaxed">{MAP_INSIGHT}</p>
      </div>

      <SecHead title="Quadrant Analysis" />
      <div className="grid grid-cols-2 gap-2">
        {QUADRANT_ANALYSIS.map((q) => (
          <div key={q.title} className={`border rounded p-2 ${quadColor[q.colorKey]}`}>
            <p className="font-bold text-xs">{q.title}</p>
            <p className="font-semibold text-xs opacity-80">→ {q.who}</p>
            <p className="text-slate-500 text-xs mt-1 leading-relaxed">{q.note}</p>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

// ─── Page 5: White Space & Opportunities ────────────────────────────────────
function Page5() {
  const typeBorder: Record<string, string> = {
    "Primary Gap": "border-blue-500 bg-blue-50",
    "Differentiator Gap": "border-purple-500 bg-purple-50",
    "Category Gap": "border-green-500 bg-green-50",
    "Strategic Gap": "border-amber-500 bg-amber-50",
  };
  const typeText: Record<string, string> = {
    "Primary Gap": "text-blue-700",
    "Differentiator Gap": "text-purple-700",
    "Category Gap": "text-green-700",
    "Strategic Gap": "text-amber-700",
  };
  const typeBadge: Record<string, string> = {
    "Primary Gap": "bg-blue-600 text-white",
    "Differentiator Gap": "bg-purple-600 text-white",
    "Category Gap": "bg-green-600 text-white",
    "Strategic Gap": "bg-amber-600 text-white",
  };
  const kanoBadge: Record<string, string> = {
    Performance: "bg-blue-100 text-blue-700",
    Delighter: "bg-purple-100 text-purple-700",
    Basic: "bg-green-100 text-green-700",
  };
  const kanoColor: Record<string, string> = {
    green: "text-green-700",
    blue: "text-blue-700",
    purple: "text-purple-700",
  };

  return (
    <PageShell pageNum={5} totalPages={7}>
      <SecHead title="White Space & Strategic Opportunities" />
      <p className="text-slate-500 text-xs mb-3 leading-relaxed">{WHITE_SPACE_INTRO}</p>

      <div className="space-y-2 mb-4">
        {WHITE_SPACE.map((ws, i) => (
          <div key={i} className={`border-l-4 rounded p-3 ${typeBorder[ws.type]}`} data-testid={`whitespace-${i}`}>
            <div className="flex items-start justify-between gap-2 mb-1">
              <p className={`font-bold text-sm ${typeText[ws.type]}`}>{ws.title}</p>
              <div className="flex gap-1 flex-shrink-0">
                <span className={`px-1.5 py-0.5 rounded text-xs font-bold ${typeBadge[ws.type]}`}>{ws.type}</span>
                <span className={`px-1.5 py-0.5 rounded text-xs font-semibold ${kanoBadge[ws.kano]}`}>Kano: {ws.kano}</span>
              </div>
            </div>
            <p className="text-slate-600 text-xs leading-relaxed">{ws.description}</p>
            <p className="text-slate-400 text-xs italic mt-1">Evidence: {ws.evidence} [{ws.sources.join(",")}]</p>
          </div>
        ))}
      </div>

      <SecHead title="Kano Analysis Summary" />
      <div className="space-y-2">
        {KANO_SUMMARY.map((ki) => (
          <div key={ki.label} className="text-xs">
            <span className={`font-bold ${kanoColor[ki.colorKey]}`}>{ki.label}: </span>
            <span className="text-slate-500">{ki.text}</span>
          </div>
        ))}
      </div>
    </PageShell>
  );
}

// ─── Page 6: Action Plan ────────────────────────────────────────────────────
function Page6() {
  return (
    <PageShell pageNum={6} totalPages={7}>
      <SecHead title="90-Day Action Plan" />
      <p className="text-slate-500 text-xs mb-3 leading-relaxed">{ACTION_PLAN_INTRO}</p>

      <div className="space-y-3 mb-4">
        {ACTION_PLAN.map((action) => (
          <div key={action.number} className="flex overflow-hidden border border-blue-200 rounded" data-testid={`action-${action.number}`}>
            <div className="bg-blue-600 flex items-center justify-center px-4 flex-shrink-0">
              <span className="text-white font-bold text-2xl">{action.number}</span>
            </div>
            <div className="bg-blue-50 px-4 py-3">
              <h3 className="font-bold text-slate-900 text-sm mb-1">{action.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{action.description}</p>
              <p className="text-slate-400 text-xs italic mt-1">Sources: [{action.sources.join(", ")}]</p>
            </div>
          </div>
        ))}
      </div>

      <SecHead title="Sales Battlecard — Trap-Setting Questions" />
      <p className="text-slate-500 text-xs mb-3 leading-relaxed">{BATTLECARD_INTRO}</p>

      <div className="space-y-2">
        {TRAP_QUESTIONS.map((q, i) => (
          <div
            key={i}
            className={`border-l-4 border-blue-600 px-3 py-2 rounded-r text-xs font-medium text-slate-800 ${i % 2 === 0 ? "bg-blue-50" : "bg-gray-50"}`}
            data-testid={`trap-question-${i}`}
          >
            <span className="text-blue-600 font-bold mr-2">{i + 1}.</span>
            {q}
          </div>
        ))}
      </div>
    </PageShell>
  );
}

// ─── Page 7: Sources ────────────────────────────────────────────────────────
function Page7() {
  return (
    <PageShell pageNum={7} totalPages={7}>
      <SecHead title="Sources & Citations" />
      <p className="text-slate-500 text-xs mb-4 leading-relaxed">{SOURCES_INTRO}</p>

      <div className="space-y-2 mb-6">
        {SOURCES.map((src) => (
          <div
            key={src.number}
            className={`flex gap-4 items-start p-3 rounded border border-gray-200 ${src.number % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
            data-testid={`source-${src.number}`}
          >
            <div className="w-7 h-7 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0">
              <span className="text-white font-bold text-xs">{src.number}</span>
            </div>
            <div>
              <p className="font-semibold text-slate-900 text-sm">{src.label}</p>
              <a href={src.url} target="_blank" rel="noopener noreferrer" className="text-blue-600 text-xs hover:underline break-all">
                {src.url}
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-gray-50 border border-gray-200 rounded p-4">
        <p className="font-bold text-blue-600 text-sm mb-1">InfiniteRankers.io</p>
        <p className="text-slate-500 text-xs leading-relaxed">
          This report was prepared for strategic sales and positioning use. The data represents publicly available information as of March 2026. For questions or a custom competitive analysis, contact InfiniteRankers.io.
        </p>
      </div>
    </PageShell>
  );
}

// ─── Main Page ───────────────────────────────────────────────────────────────
export default function PodiumCompetitiveAnalysis() {
  const [downloading, setDownloading] = useState(false);

  function handleDownload() {
    setDownloading(true);
    try {
      generatePodiumPDF();
    } finally {
      setTimeout(() => setDownloading(false), 2000);
    }
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <SEOHead
        title="InfiniteRankers vs. Podium — Competitive Analysis 2026 | InfiniteRankers.io"
        description="Professional competitive analysis comparing InfiniteRankers.io against Podium.com for local service businesses. Download the PDF or view online."
      />

      <div className="bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-5xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <FileText className="w-5 h-5 text-blue-600" />
            <div>
              <p className="font-bold text-slate-900 text-sm">Competitive Analysis Report</p>
              <p className="text-slate-500 text-xs">InfiniteRankers.io vs. Podium.com · March 2026</p>
            </div>
          </div>
          <button
            onClick={handleDownload}
            disabled={downloading}
            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:opacity-60 text-white font-semibold text-sm px-4 py-2 rounded-lg transition-colors"
            data-testid="button-download-pdf"
          >
            <Download className="w-4 h-4" />
            {downloading ? "Generating PDF…" : "Download PDF"}
          </button>
        </div>
      </div>

      <div className="py-8">
        <div className="flex flex-col items-center gap-6">
          <Page1 />
          <Page2 />
          <Page3 />
          <Page4 />
          <Page5 />
          <Page6 />
          <Page7 />
        </div>
      </div>
    </div>
  );
}
