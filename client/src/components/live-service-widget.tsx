import { motion } from "framer-motion";
import { CheckCircle2, Activity } from "lucide-react";
import { useState, useEffect } from "react";

type WidgetMetric = { label: string; base: number; inc: number; prefix?: string; suffix?: string; color: string };
type WidgetActivity = { event: string; outcome: string };
export type ServiceWidgetData = { title: string; metrics: WidgetMetric[]; activities: WidgetActivity[]; accentColor: string; bottomLabel: string; bottomValue: string };

export const SERVICE_WIDGET_DATA: Record<string, ServiceWidgetData> = {
  "ai-lead-capture": {
    title: "AI Lead Capture — Live",
    metrics: [
      { label: "Leads Captured", base: 247, inc: 1, color: "text-blue-600" },
      { label: "Response Time", base: 28, inc: 0, suffix: "s avg", color: "text-indigo-600" },
      { label: "Capture Rate", base: 94, inc: 0, suffix: "%", color: "text-purple-600" },
    ],
    activities: [
      { event: "Website visitor", outcome: "AI chat engaged instantly" },
      { event: "Missed call (11:42 PM)", outcome: "Text-back sent in 28s" },
      { event: "Form submitted", outcome: "Lead qualified & routed" },
      { event: "After-hours inquiry", outcome: "Booked consultation" },
    ],
    accentColor: "rgb(59,130,246)", bottomLabel: "Leads Recovered This Month", bottomValue: "+127 leads",
  },
  "ai-appointment-agents": {
    title: "Appointment Agent — Live",
    metrics: [
      { label: "Appts Booked", base: 183, inc: 1, color: "text-blue-600" },
      { label: "Show Rate", base: 91, inc: 0, suffix: "%", color: "text-indigo-600" },
      { label: "Follow-ups Sent", base: 1402, inc: 3, color: "text-purple-600" },
    ],
    activities: [
      { event: "New lead (web form)", outcome: "Contacted in 45s → Booked" },
      { event: "No-show detected", outcome: "Auto-reschedule sent" },
      { event: "Follow-up #3 sent", outcome: "Appointment confirmed" },
      { event: "Cancellation received", outcome: "Slot refilled instantly" },
    ],
    accentColor: "rgb(99,102,241)", bottomLabel: "Calendar Fill Rate", bottomValue: "94% booked",
  },
  "crm-pipeline-automation": {
    title: "Pipeline Automation — Live",
    metrics: [
      { label: "Pipeline Value", base: 284000, inc: 800, prefix: "$", color: "text-blue-600" },
      { label: "Deals Closed", base: 37, inc: 0, color: "text-indigo-600" },
      { label: "Lead Score Accuracy", base: 96, inc: 0, suffix: "%", color: "text-purple-600" },
    ],
    activities: [
      { event: "Lead entered CRM", outcome: "Auto-tagged & scored" },
      { event: "Stage 2 inactivity", outcome: "Follow-up triggered" },
      { event: "Deal won — $6,200", outcome: "Revenue logged to report" },
      { event: "Pipeline report", outcome: "Auto-sent to leadership" },
    ],
    accentColor: "rgb(16,185,129)", bottomLabel: "Revenue Tracked Automatically", bottomValue: "$284K pipeline",
  },
  "customer-support-ai": {
    title: "Support AI — Live",
    metrics: [
      { label: "Tickets Resolved", base: 1847, inc: 2, color: "text-blue-600" },
      { label: "Avg Response", base: 0, inc: 0, prefix: "<", suffix: "1 min", color: "text-indigo-600" },
      { label: "Human Escalations", base: 12, inc: 0, suffix: "%", color: "text-purple-600" },
    ],
    activities: [
      { event: "Support ticket received", outcome: "Resolved by AI in 48s" },
      { event: "Billing question", outcome: "FAQ matched & answered" },
      { event: "Complex issue", outcome: "Escalated to human agent" },
      { event: "After-hours inquiry", outcome: "Handled without staff" },
    ],
    accentColor: "rgb(239,68,68)", bottomLabel: "Staff Hours Freed Per Month", bottomValue: "140+ hours",
  },
  "reviews-reactivation-retention": {
    title: "Retention Engine — Live",
    metrics: [
      { label: "Reviews Generated", base: 312, inc: 1, color: "text-blue-600" },
      { label: "Avg Rating", base: 0, inc: 0, prefix: "4.", suffix: "8★", color: "text-indigo-600" },
      { label: "Customers Reactivated", base: 89, inc: 0, color: "text-purple-600" },
    ],
    activities: [
      { event: "Job completed", outcome: "Review request sent at 6 PM" },
      { event: "5-star review posted", outcome: "Google ranking improved" },
      { event: "Dormant customer (90d)", outcome: "Reactivation offer sent" },
      { event: "Lapsed client responded", outcome: "Rebooked — $1,800" },
    ],
    accentColor: "rgb(234,179,8)", bottomLabel: "Revenue From Reactivations", bottomValue: "+$32,400 / mo",
  },
  "custom-saas-tools": {
    title: "Custom Automation — Live",
    metrics: [
      { label: "Tasks Automated", base: 8420, inc: 5, color: "text-blue-600" },
      { label: "Time Saved / mo", base: 0, inc: 0, prefix: "210", suffix: "hrs", color: "text-indigo-600" },
      { label: "Workflows Running", base: 14, inc: 0, color: "text-purple-600" },
    ],
    activities: [
      { event: "Monthly report due", outcome: "Auto-generated & emailed" },
      { event: "New client onboarded", outcome: "Workflow triggered instantly" },
      { event: "Invoice created", outcome: "Sent & payment tracked" },
      { event: "Data sync triggered", outcome: "CRM + spreadsheet updated" },
    ],
    accentColor: "rgb(139,92,246)", bottomLabel: "Manual Work Eliminated", bottomValue: "210 hrs/mo",
  },
  "revenue-automation-consulting": {
    title: "Revenue Audit — Live",
    metrics: [
      { label: "Gaps Found", base: 7, inc: 0, color: "text-blue-600" },
      { label: "ROI Projected", base: 0, inc: 0, prefix: "3.", suffix: "2x", color: "text-indigo-600" },
      { label: "Systems Mapped", base: 12, inc: 0, color: "text-purple-600" },
    ],
    activities: [
      { event: "Audit completed", outcome: "4 revenue leaks identified" },
      { event: "Lead capture gap", outcome: "34% of leads uncaptured" },
      { event: "90-day roadmap built", outcome: "Prioritized by ROI impact" },
      { event: "Pilot system launched", outcome: "+$8,400 in 3 weeks" },
    ],
    accentColor: "rgb(20,184,166)", bottomLabel: "Avg Revenue Unlocked (90 Days)", bottomValue: "+$24,800",
  },
};

const FALLBACK_WIDGET: ServiceWidgetData = {
  title: "AI Revenue System — Live",
  metrics: [
    { label: "Leads Captured", base: 312, inc: 1, color: "text-blue-600" },
    { label: "Appts Booked", base: 94, inc: 0, color: "text-indigo-600" },
    { label: "Revenue Uplift", base: 0, inc: 0, prefix: "+$", suffix: "24K", color: "text-purple-600" },
  ],
  activities: [
    { event: "Missed call detected", outcome: "AI text-back sent in 30s" },
    { event: "New lead received", outcome: "Qualified & booked instantly" },
    { event: "Follow-up #4 sent", outcome: "Appointment confirmed" },
    { event: "Review request sent", outcome: "5-star review posted" },
  ],
  accentColor: "rgb(59,130,246)", bottomLabel: "Monthly Revenue Uplift (Avg Client)", bottomValue: "+$18,400",
};

export function LiveServiceWidget({
  slug,
  accentGradient = "bg-gradient-to-r from-blue-600 to-indigo-600",
  compact = false,
}: {
  slug: string;
  accentGradient?: string;
  compact?: boolean;
}) {
  const data = SERVICE_WIDGET_DATA[slug] ?? FALLBACK_WIDGET;
  const [metrics, setMetrics] = useState(data.metrics.map(m => m.base));
  const [activityIdx, setActivityIdx] = useState(0);

  useEffect(() => {
    const metricTimer = setInterval(() => {
      setMetrics(prev => prev.map((v, i) => {
        const inc = data.metrics[i].inc;
        return inc > 0 ? v + Math.floor(Math.random() * inc + 1) : v;
      }));
    }, 2200);
    const activityTimer = setInterval(() => {
      setActivityIdx(prev => (prev + 1) % data.activities.length);
    }, 2800);
    return () => { clearInterval(metricTimer); clearInterval(activityTimer); };
  }, [data]);

  const visibleCount = compact ? 3 : 4;
  const visibleActivities = Array.from({ length: visibleCount }, (_, offset) => {
    const idx = (activityIdx + offset) % data.activities.length;
    return { ...data.activities[idx], key: `${activityIdx}-${offset}` };
  });

  const sparkPts = [10, 14, 12, 18, 15, 22, 19, 26, 22, 28, 24, 30, 26, 31, 28, 33, 30, 34, 31, 36];
  const sparkPath = sparkPts.map((p, i) => `${i === 0 ? "M" : "L"}${(i / 19) * 200},${40 - p}`).join(" ");

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -4 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      <div className="absolute -inset-3 bg-gradient-to-br from-blue-200/25 via-indigo-200/15 to-purple-200/20 rounded-2xl blur-2xl" />
      <div className="relative bg-white/80 backdrop-blur-xl rounded-2xl border border-gray-200/80 shadow-2xl shadow-indigo-200/20 p-5 overflow-hidden">

        <div className="flex items-center gap-2 mb-4">
          <div className={`w-8 h-8 rounded-lg ${accentGradient} flex items-center justify-center shadow-sm`}>
            <Activity className="w-4 h-4 text-white" />
          </div>
          <span className="text-xs sm:text-sm font-semibold text-gray-800 truncate">{data.title}</span>
          <div className="ml-auto flex items-center gap-1.5 flex-shrink-0">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
            </span>
            <span className="text-[10px] font-semibold text-emerald-600">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-2 mb-4">
          {data.metrics.map((m, i) => (
            <div key={m.label} className="bg-gray-50/90 rounded-xl p-2.5 border border-gray-100/80" data-testid={`widget-metric-${i}`}>
              <div className="text-[10px] text-gray-400 mb-1 leading-tight">{m.label}</div>
              <div className={`text-sm sm:text-base font-bold tabular-nums ${m.color}`}>
                {m.prefix ?? ""}{m.base > 999 ? metrics[i].toLocaleString() : metrics[i]}{m.suffix ?? ""}
              </div>
            </div>
          ))}
        </div>

        {!compact && (
          <div className="bg-gray-50/80 rounded-xl p-3 border border-gray-100/80 mb-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-[10px] font-medium text-gray-400">Activity — last 30 days</span>
              <span className="text-[10px] font-semibold text-emerald-600">↑ +34% MoM</span>
            </div>
            <svg viewBox="0 0 200 40" className="w-full h-8">
              <defs>
                <linearGradient id={`sg-${slug}`} x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor={data.accentColor} stopOpacity="0.25" />
                  <stop offset="100%" stopColor={data.accentColor} stopOpacity="0.02" />
                </linearGradient>
              </defs>
              <path d={`${sparkPath} L200,40 L0,40 Z`} fill={`url(#sg-${slug})`} />
              <path d={sparkPath} fill="none" stroke={data.accentColor} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        )}

        <div className="space-y-1.5 mb-4">
          {visibleActivities.map((a, i) => (
            <motion.div
              key={a.key + i}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: i * 0.07, duration: 0.25 }}
              className="flex items-center gap-2 p-2 rounded-lg bg-white/70 border border-gray-100"
              data-testid={`widget-activity-${i}`}
            >
              <div className={`w-5 h-5 rounded-md ${accentGradient} flex items-center justify-center flex-shrink-0`}>
                <CheckCircle2 className="w-3 h-3 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-[10px] font-medium text-gray-600">{a.event}</span>
                <span className="text-[10px] text-gray-400 mx-1">→</span>
                <span className="text-[10px] text-gray-700 font-medium">{a.outcome}</span>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="p-2.5 rounded-xl bg-gradient-to-r from-blue-50/80 to-indigo-50/80 border border-blue-100/60 flex items-center justify-between gap-2">
          <span className="text-[10px] text-gray-500">{data.bottomLabel}</span>
          <span className="text-xs font-bold text-blue-700">{data.bottomValue}</span>
        </div>
      </div>
    </motion.div>
  );
}
