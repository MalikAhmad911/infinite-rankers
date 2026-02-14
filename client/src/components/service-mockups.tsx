import { motion } from "framer-motion";

interface ServiceHeroMockupProps {
  type: string;
  accentFrom: string;
  accentTo: string;
}

const glass = "bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] rounded-md";
const glassInner = "bg-white/[0.05] border border-white/[0.08] rounded-md";

function AnalyticsDashboard({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  const barHeights = [45, 65, 35, 80, 55, 70, 90, 60];
  const kpis = [
    { label: "Visitors", value: "12.4K", change: "+18%" },
    { label: "Conversion", value: "+34%", change: "+8.2%" },
    { label: "Revenue", value: "$48K", change: "+22%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${glass} p-4 w-full max-w-[480px]`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-sm font-medium">Marketing Analytics</span>
        <span className="text-white/40 text-xs">Live Dashboard</span>
      </div>

      <div className="grid grid-cols-3 gap-2 mb-4">
        {kpis.map((kpi, i) => (
          <motion.div
            key={kpi.label}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.1, duration: 0.4 }}
            className={`${glassInner} p-2.5`}
          >
            <div className="text-white/40 text-[10px] mb-1">{kpi.label}</div>
            <div className="text-white text-base font-semibold">{kpi.value}</div>
            <div className={`text-[10px] bg-gradient-to-r ${accentFrom} ${accentTo} bg-clip-text text-transparent`}>
              {kpi.change}
            </div>
          </motion.div>
        ))}
      </div>

      <div className={`${glassInner} p-3 mb-3`}>
        <div className="text-white/40 text-[10px] mb-2">Traffic Overview</div>
        <div className="flex items-end gap-1.5 h-20">
          {barHeights.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 + i * 0.08, duration: 0.6, ease: "easeOut" }}
              className={`flex-1 rounded-sm bg-gradient-to-t ${accentFrom} ${accentTo} opacity-80`}
            />
          ))}
        </div>
      </div>

      <div className="flex gap-2">
        <div className={`${glassInner} p-3 flex-1`}>
          <div className="text-white/40 text-[10px] mb-2">Trend</div>
          <svg viewBox="0 0 120 40" className="w-full h-8">
            <motion.path
              d="M0,35 Q15,30 25,25 T50,20 T75,12 T100,18 T120,5"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="2"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 1.2, ease: "easeInOut" }}
            />
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className={`${glassInner} p-3 w-20 flex items-center justify-center`}>
          <svg viewBox="0 0 36 36" className="w-10 h-10">
            <motion.circle
              cx="18" cy="18" r="14"
              fill="none"
              stroke="rgba(255,255,255,0.1)"
              strokeWidth="4"
            />
            <motion.circle
              cx="18" cy="18" r="14"
              fill="none"
              stroke="url(#donutGrad)"
              strokeWidth="4"
              strokeDasharray="88"
              strokeLinecap="round"
              transform="rotate(-90 18 18)"
              initial={{ strokeDashoffset: 88 }}
              whileInView={{ strokeDashoffset: 25 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 1, ease: "easeOut" }}
            />
            <defs>
              <linearGradient id="donutGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
            <text x="18" y="20" textAnchor="middle" fill="white" fontSize="8" fontWeight="600">72%</text>
          </svg>
        </div>
      </div>
    </motion.div>
  );
}

function ChatInterface({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  const messages = [
    { role: "user", text: "How can I improve my website conversion rate?" },
    { role: "ai", text: "Based on your analytics, I recommend optimizing your CTA placement and adding social proof. Your current rate is 2.3% — targeting 4.5% is achievable." },
    { role: "user", text: "Can you create an A/B test for the landing page?" },
    { role: "ai", text: "Absolutely! I've drafted two variants: one with a video hero and one with a testimonial carousel. Shall I deploy them?" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${glass} p-4 w-full max-w-[480px]`}
    >
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo}`}>
            <motion.div
              className="w-full h-full rounded-full bg-emerald-400"
              animate={{ scale: [1, 1.4, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          <span className="text-white text-sm font-medium">AI Assistant</span>
        </div>
        <span className="text-emerald-400/80 text-[10px]">AI is online</span>
      </div>

      <div className="space-y-3 max-h-[280px] overflow-hidden">
        {messages.map((msg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.25, duration: 0.4 }}
            className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[80%] p-2.5 rounded-md text-xs leading-relaxed ${
                msg.role === "user"
                  ? `bg-gradient-to-r ${accentFrom} ${accentTo} text-white`
                  : `${glassInner} text-white/80`
              }`}
            >
              {msg.text}
            </div>
          </motion.div>
        ))}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="flex justify-start"
        >
          <div className={`${glassInner} px-4 py-2.5 rounded-md`}>
            <div className="flex gap-1">
              {[0, 1, 2].map((dot) => (
                <motion.div
                  key={dot}
                  className="w-1.5 h-1.5 rounded-full bg-white/40"
                  animate={{ opacity: [0.3, 1, 0.3] }}
                  transition={{ duration: 1.2, repeat: Infinity, delay: dot * 0.2 }}
                />
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function PhoneUI({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  const waveBarCount = 20;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${glass} p-4 w-full max-w-[320px] mx-auto`}
    >
      <div className={`${glassInner} rounded-[16px] p-5 relative overflow-hidden`}>
        <div className="w-16 h-1 bg-white/20 rounded-full mx-auto mb-6" />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="text-center mb-5"
        >
          <div className={`w-14 h-14 rounded-full bg-gradient-to-br ${accentFrom} ${accentTo} mx-auto mb-3 flex items-center justify-center`}>
            <span className="text-white text-lg font-bold">JD</span>
          </div>
          <div className="text-white text-sm font-medium">John Davidson</div>
          <div className="text-white/40 text-xs mt-0.5">+1 (555) 234-8901</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center mb-5"
        >
          <motion.span
            className="text-white/60 text-xs font-mono"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            03:42
          </motion.span>
        </motion.div>

        <div className="flex items-center justify-center gap-[3px] h-10 mb-5">
          {Array.from({ length: waveBarCount }).map((_, i) => (
            <motion.div
              key={i}
              className={`w-[3px] rounded-full bg-gradient-to-t ${accentFrom} ${accentTo}`}
              animate={{
                height: [
                  `${8 + Math.random() * 6}px`,
                  `${14 + Math.random() * 22}px`,
                  `${6 + Math.random() * 10}px`,
                ],
              }}
              transition={{
                duration: 0.6 + Math.random() * 0.4,
                repeat: Infinity,
                repeatType: "reverse",
                delay: i * 0.05,
              }}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.7 }}
          className={`${glassInner} p-2 flex items-center justify-center gap-2 mb-5`}
        >
          <motion.div
            className="w-2 h-2 rounded-full bg-emerald-400"
            animate={{ scale: [1, 1.3, 1], opacity: [1, 0.6, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          <span className="text-emerald-400/90 text-[10px] font-medium">AI Handling Call</span>
        </motion.div>

        <div className="flex justify-center gap-6">
          <div className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/></svg>
          </div>
          <div className="w-10 h-10 rounded-full bg-red-500/80 flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72" /><line x1="1" y1="1" x2="23" y2="23"/></svg>
          </div>
          <div className="w-10 h-10 rounded-full bg-white/[0.08] flex items-center justify-center">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.5)" strokeWidth="2"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/></svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function AdPerformance({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  const campaigns = [
    { name: "Brand Awareness", spend: "$2,340", clicks: "8.2K", cpa: "$4.21", budget: 78, trend: [3, 5, 4, 7, 6, 8, 9] },
    { name: "Lead Gen - Search", spend: "$5,120", clicks: "12.1K", cpa: "$3.87", budget: 92, trend: [2, 4, 6, 5, 8, 7, 10] },
    { name: "Retargeting", spend: "$1,890", clicks: "6.4K", cpa: "$2.95", budget: 64, trend: [4, 3, 5, 7, 6, 9, 8] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${glass} p-4 w-full max-w-[480px]`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-sm font-medium">Campaign Performance</span>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className={`${glassInner} px-2 py-1 flex items-center gap-1.5`}
        >
          <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2.5"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/></svg>
          <span className="text-emerald-400 text-[10px] font-semibold">ROAS 4.2x</span>
        </motion.div>
      </div>

      <div className={`${glassInner} overflow-hidden`}>
        <div className="grid grid-cols-[1fr_60px_52px_52px_40px] gap-2 px-3 py-2 border-b border-white/[0.06]">
          <span className="text-white/40 text-[9px] uppercase tracking-wider">Campaign</span>
          <span className="text-white/40 text-[9px] uppercase tracking-wider">Spend</span>
          <span className="text-white/40 text-[9px] uppercase tracking-wider">Clicks</span>
          <span className="text-white/40 text-[9px] uppercase tracking-wider">CPA</span>
          <span className="text-white/40 text-[9px] uppercase tracking-wider">Trend</span>
        </div>

        {campaigns.map((c, i) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 + i * 0.15, duration: 0.4 }}
            className="grid grid-cols-[1fr_60px_52px_52px_40px] gap-2 px-3 py-2.5 border-b border-white/[0.04] items-center"
          >
            <div>
              <div className="text-white text-[11px] font-medium">{c.name}</div>
              <div className="mt-1 h-1 rounded-full bg-white/[0.08] overflow-hidden">
                <motion.div
                  className={`h-full rounded-full bg-gradient-to-r ${accentFrom} ${accentTo}`}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${c.budget}%` }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 + i * 0.15, duration: 0.8, ease: "easeOut" }}
                />
              </div>
            </div>
            <span className="text-white/80 text-[11px]">{c.spend}</span>
            <span className="text-white/80 text-[11px]">{c.clicks}</span>
            <span className="text-white/80 text-[11px]">{c.cpa}</span>
            <svg viewBox="0 0 28 12" className="w-7 h-3">
              <motion.polyline
                points={c.trend.map((v, j) => `${j * 4.5},${12 - v}`).join(" ")}
                fill="none"
                stroke="#22c55e"
                strokeWidth="1.5"
                strokeLinecap="round"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + i * 0.1, duration: 0.8 }}
              />
            </svg>
          </motion.div>
        ))}
      </div>

      <div className="flex gap-2 mt-3">
        <div className={`${glassInner} p-2.5 flex-1 text-center`}>
          <div className="text-white/40 text-[9px]">Total Spend</div>
          <div className="text-white text-sm font-semibold mt-0.5">$9,350</div>
        </div>
        <div className={`${glassInner} p-2.5 flex-1 text-center`}>
          <div className="text-white/40 text-[9px]">Total Clicks</div>
          <div className="text-white text-sm font-semibold mt-0.5">26.7K</div>
        </div>
        <div className={`${glassInner} p-2.5 flex-1 text-center`}>
          <div className="text-white/40 text-[9px]">Avg CPA</div>
          <div className="text-emerald-400 text-sm font-semibold mt-0.5">$3.68</div>
        </div>
      </div>
    </motion.div>
  );
}

function FunnelDiagram({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  const stages = [
    { label: "Website Visitors", count: "24,500", width: "100%", pct: null },
    { label: "Leads Captured", count: "4,200", width: "72%", pct: "17.1%" },
    { label: "Qualified Leads", count: "1,680", width: "48%", pct: "40.0%" },
    { label: "Proposals Sent", count: "840", width: "32%", pct: "50.0%" },
    { label: "Customers Won", count: "378", width: "20%", pct: "45.0%" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${glass} p-4 w-full max-w-[420px]`}
    >
      <div className="flex items-center justify-between mb-5">
        <span className="text-white text-sm font-medium">Conversion Funnel</span>
        <span className="text-white/40 text-xs">Last 30 days</span>
      </div>

      <div className="space-y-1.5">
        {stages.map((stage, i) => (
          <div key={stage.label} className="flex items-center gap-3">
            <motion.div
              initial={{ width: 0, opacity: 0 }}
              whileInView={{ width: stage.width, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + i * 0.15, duration: 0.7, ease: "easeOut" }}
              className={`h-10 bg-gradient-to-r ${accentFrom} ${accentTo} rounded-md flex items-center px-3 justify-between`}
              style={{ opacity: 1 - i * 0.15 }}
            >
              <span className="text-white text-[10px] font-medium truncate">{stage.label}</span>
              <motion.span
                className="text-white text-xs font-bold ml-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 + i * 0.15 }}
              >
                {stage.count}
              </motion.span>
            </motion.div>

            {stage.pct && (
              <motion.div
                initial={{ opacity: 0, x: -5 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + i * 0.15 }}
                className="flex items-center gap-1 min-w-[50px]"
              >
                <svg width="8" height="8" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.3)" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                <span className="text-white/40 text-[10px]">{stage.pct}</span>
              </motion.div>
            )}
          </div>
        ))}
      </div>

      <div className="relative mt-4 flex justify-center">
        {[0, 1, 2].map((dot) => (
          <motion.div
            key={dot}
            className={`absolute w-1.5 h-1.5 rounded-full bg-gradient-to-r ${accentFrom} ${accentTo}`}
            style={{ left: `${40 + dot * 10}%` }}
            animate={{
              y: [0, 80, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              delay: dot * 0.6,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </motion.div>
  );
}

function CodeEditor({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  const codeLines = [
    { num: 1, content: [{ text: "import", color: "text-purple-400" }, { text: " { motion }", color: "text-yellow-300" }, { text: " from", color: "text-purple-400" }, { text: " 'framer-motion'", color: "text-emerald-400" }] },
    { num: 2, content: [] },
    { num: 3, content: [{ text: "export default function", color: "text-purple-400" }, { text: " Hero", color: "text-yellow-300" }, { text: "() {", color: "text-white/60" }] },
    { num: 4, content: [{ text: "  return (", color: "text-white/60" }] },
    { num: 5, content: [{ text: "    <", color: "text-white/60" }, { text: "motion.div", color: "text-red-400" }] },
    { num: 6, content: [{ text: "      className", color: "text-yellow-300" }, { text: "=", color: "text-white/60" }, { text: '"hero-section"', color: "text-emerald-400" }] },
    { num: 7, content: [{ text: "      initial", color: "text-yellow-300" }, { text: "={{ ", color: "text-white/60" }, { text: "opacity: 0", color: "text-orange-300" }, { text: " }}", color: "text-white/60" }] },
    { num: 8, content: [{ text: "      animate", color: "text-yellow-300" }, { text: "={{ ", color: "text-white/60" }, { text: "opacity: 1", color: "text-orange-300" }, { text: " }}", color: "text-white/60" }] },
    { num: 9, content: [{ text: "    >", color: "text-white/60" }] },
    { num: 10, content: [{ text: "      <", color: "text-white/60" }, { text: "h1", color: "text-red-400" }, { text: ">", color: "text-white/60" }, { text: "Welcome", color: "text-white" }, { text: "</", color: "text-white/60" }, { text: "h1", color: "text-red-400" }, { text: ">", color: "text-white/60" }] },
    { num: 11, content: [{ text: "    </", color: "text-white/60" }, { text: "motion.div", color: "text-red-400" }, { text: ">", color: "text-white/60" }] },
    { num: 12, content: [{ text: "  )", color: "text-white/60" }] },
    { num: 13, content: [{ text: "}", color: "text-white/60" }] },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${glass} w-full max-w-[480px] overflow-hidden`}
    >
      <div className="flex items-center gap-2 px-4 py-2.5 border-b border-white/[0.06]">
        <div className="flex gap-1.5">
          <div className="w-2.5 h-2.5 rounded-full bg-red-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/70" />
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/70" />
        </div>
        <span className="text-white/40 text-[10px] ml-2">Hero.tsx</span>
        <span className="text-white/20 text-[10px] ml-auto">TypeScript React</span>
      </div>

      <div className="p-3 font-mono text-[11px] leading-5 bg-[#0d1117]/50">
        {codeLines.map((line, i) => (
          <motion.div
            key={line.num}
            initial={{ opacity: 0, x: -8 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15 + i * 0.05, duration: 0.3 }}
            className="flex"
          >
            <span className="w-7 text-right text-white/20 mr-4 select-none flex-shrink-0">{line.num}</span>
            <div className="flex-1 relative">
              {line.content.length === 0 ? (
                <span>&nbsp;</span>
              ) : (
                line.content.map((token, j) => (
                  <span key={j} className={token.color}>{token.text}</span>
                ))
              )}
              {line.num === 8 && (
                <motion.span
                  className={`inline-block w-[2px] h-3.5 bg-gradient-to-b ${accentFrom} ${accentTo} ml-0.5 align-middle`}
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              )}
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0 }}
        className="border-t border-white/[0.06] p-3 bg-[#0d1117]/30 font-mono text-[10px]"
      >
        <div className="text-white/30 mb-1">TERMINAL</div>
        <div className="text-white/50">$ npm run build</div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 1.4 }}
          className="text-emerald-400/80 mt-1"
        >
          Build successful in 2.3s — 0 errors, 0 warnings
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

function SocialFeed({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  const posts = [
    {
      avatar: "MK",
      name: "MarketingKing",
      handle: "@marketking",
      text: "Just launched our new AI campaign — results are incredible! 340% increase in qualified leads.",
      likes: 1247,
      comments: 89,
      shares: 234,
    },
    {
      avatar: "DS",
      name: "Digital Success",
      handle: "@digsuccess",
      text: "Our client's ROAS hit 5.8x this month with the new funnel strategy. Data-driven marketing works.",
      likes: 892,
      comments: 56,
      shares: 178,
    },
    {
      avatar: "GH",
      name: "Growth Hacker",
      handle: "@growthhack",
      text: "From 200 to 520 active members in 6 months. Social + AI booking = unstoppable combo.",
      likes: 2103,
      comments: 142,
      shares: 367,
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${glass} p-4 w-full max-w-[440px]`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-sm font-medium">Social Feed</span>
        <div className={`${glassInner} px-2 py-1`}>
          <span className="text-white/60 text-[10px]">+2.4K followers this week</span>
        </div>
      </div>

      <div className="space-y-2.5">
        {posts.map((post, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 12, rotateX: -5 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 + i * 0.2, duration: 0.5 }}
            className={`${glassInner} p-3`}
          >
            <div className="flex items-center gap-2 mb-2">
              <div className={`w-7 h-7 rounded-full bg-gradient-to-br ${accentFrom} ${accentTo} flex items-center justify-center flex-shrink-0`}>
                <span className="text-white text-[8px] font-bold">{post.avatar}</span>
              </div>
              <div>
                <div className="text-white text-[11px] font-medium">{post.name}</div>
                <div className="text-white/30 text-[9px]">{post.handle}</div>
              </div>
            </div>
            <p className="text-white/60 text-[10px] leading-relaxed mb-2">{post.text}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="#ef4444" stroke="none"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
                <motion.span
                  className="text-white/50 text-[9px]"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.8 + i * 0.2 }}
                >
                  {(post.likes + (i === 0 ? 3 : 0)).toLocaleString()}
                </motion.span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
                <span className="text-white/50 text-[9px]">{post.comments}</span>
              </div>
              <div className="flex items-center gap-1">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2"><polyline points="15 3 21 3 21 9"/><path d="M21 3l-7 7"/><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/></svg>
                <span className="text-white/50 text-[9px]">{post.shares}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 1.0 }}
        className={`${glassInner} p-2.5 mt-3`}
      >
        <div className="text-white/40 text-[9px] mb-1.5">Follower Growth</div>
        <svg viewBox="0 0 140 24" className="w-full h-5">
          <motion.polyline
            points="0,20 15,18 30,16 45,17 60,13 75,14 90,10 105,8 120,6 140,3"
            fill="none"
            stroke="url(#socialGrad)"
            strokeWidth="1.5"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 1.2, duration: 1.0 }}
          />
          <defs>
            <linearGradient id="socialGrad" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#8b5cf6" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>
    </motion.div>
  );
}

function CalendarUI({ accentFrom, accentTo }: { accentFrom: string; accentTo: string }) {
  const days = Array.from({ length: 35 }, (_, i) => {
    const day = i - 2;
    if (day < 1 || day > 31) return null;
    return day;
  });
  const highlightedDays = [5, 8, 12, 15, 19, 22, 26];
  const bookedDay = 15;

  const timeSlots = [
    { time: "9:00 AM", status: "booked" },
    { time: "10:30 AM", status: "available" },
    { time: "1:00 PM", status: "booking" },
    { time: "2:30 PM", status: "available" },
    { time: "4:00 PM", status: "available" },
  ];

  const appointments = [
    { name: "Strategy Call — John D.", time: "Today, 2:00 PM" },
    { name: "SEO Review — Sarah W.", time: "Tomorrow, 10:00 AM" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={`${glass} p-4 w-full max-w-[480px]`}
    >
      <div className="flex items-center justify-between mb-4">
        <span className="text-white text-sm font-medium">Appointment Booking</span>
        <span className="text-white/40 text-xs">February 2026</span>
      </div>

      <div className="flex gap-3">
        <div className={`${glassInner} p-2.5 flex-1`}>
          <div className="grid grid-cols-7 gap-0.5 mb-1.5">
            {["S", "M", "T", "W", "T", "F", "S"].map((d, i) => (
              <div key={i} className="text-white/30 text-[8px] text-center font-medium">{d}</div>
            ))}
          </div>
          <div className="grid grid-cols-7 gap-0.5">
            {days.map((day, i) => {
              if (day === null) return <div key={i} />;
              const isHighlighted = highlightedDays.includes(day);
              const isBooked = day === bookedDay;
              return (
                <motion.div
                  key={i}
                  initial={isBooked ? { scale: 1 } : {}}
                  whileInView={isBooked ? { scale: [1, 1.2, 1] } : {}}
                  viewport={{ once: true }}
                  transition={isBooked ? { delay: 1.0, duration: 0.5 } : {}}
                  className={`w-full aspect-square flex items-center justify-center rounded-sm text-[9px] ${
                    isBooked
                      ? `bg-gradient-to-br ${accentFrom} ${accentTo} text-white font-bold`
                      : isHighlighted
                        ? "bg-white/[0.08] text-white/80"
                        : "text-white/30"
                  }`}
                >
                  {day}
                </motion.div>
              );
            })}
          </div>
        </div>

        <div className="w-[130px] space-y-1">
          <div className="text-white/40 text-[9px] mb-1.5">Available Slots</div>
          {timeSlots.map((slot, i) => (
            <motion.div
              key={slot.time}
              initial={{ opacity: 0, x: 8 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.1, duration: 0.3 }}
              className="relative"
            >
              <div
                className={`${glassInner} px-2 py-1.5 text-[10px] flex items-center justify-between ${
                  slot.status === "booked" ? "opacity-50" : ""
                }`}
              >
                <span className="text-white/70">{slot.time}</span>
                {slot.status === "booked" && (
                  <span className="text-white/30 text-[8px]">Booked</span>
                )}
              </div>
              {slot.status === "booking" && (
                <motion.div
                  className={`absolute inset-0 rounded-md bg-gradient-to-r ${accentFrom} ${accentTo}`}
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 1.2, duration: 0.6, ease: "easeOut" }}
                  style={{ transformOrigin: "left", opacity: 0.3 }}
                />
              )}
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.9 }}
        className={`${glassInner} p-2.5 mt-3`}
      >
        <div className="text-white/40 text-[9px] mb-2">Upcoming Appointments</div>
        {appointments.map((apt, i) => (
          <div key={i} className="flex items-center gap-2 py-1">
            <div className={`w-1 h-6 rounded-full bg-gradient-to-b ${accentFrom} ${accentTo}`} />
            <div>
              <div className="text-white text-[10px] font-medium">{apt.name}</div>
              <div className="text-white/40 text-[9px]">{apt.time}</div>
            </div>
          </div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default function ServiceHeroMockup({ type, accentFrom, accentTo }: ServiceHeroMockupProps) {
  switch (type) {
    case "analytics-dashboard":
      return <AnalyticsDashboard accentFrom={accentFrom} accentTo={accentTo} />;
    case "chat-interface":
      return <ChatInterface accentFrom={accentFrom} accentTo={accentTo} />;
    case "phone-ui":
      return <PhoneUI accentFrom={accentFrom} accentTo={accentTo} />;
    case "ad-performance":
      return <AdPerformance accentFrom={accentFrom} accentTo={accentTo} />;
    case "funnel-diagram":
      return <FunnelDiagram accentFrom={accentFrom} accentTo={accentTo} />;
    case "code-editor":
      return <CodeEditor accentFrom={accentFrom} accentTo={accentTo} />;
    case "social-feed":
      return <SocialFeed accentFrom={accentFrom} accentTo={accentTo} />;
    case "calendar-ui":
      return <CalendarUI accentFrom={accentFrom} accentTo={accentTo} />;
    default:
      return <AnalyticsDashboard accentFrom={accentFrom} accentTo={accentTo} />;
  }
}
