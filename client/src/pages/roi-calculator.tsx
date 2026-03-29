import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import SEOHead from "@/components/seo-head";
import {
  ArrowRight, DollarSign, TrendingUp, CalendarCheck, Users, Zap,
  CheckCircle2, Star, BarChart3,
} from "lucide-react";

const PRESETS = [
  { label: "HVAC / Home Services", leads: 80, missedPct: 35, avgValue: 1200, bookingRate: 55, closeRate: 60 },
  { label: "Dental / Medical", leads: 120, missedPct: 28, avgValue: 900, bookingRate: 70, closeRate: 75 },
  { label: "Law Firm", leads: 50, missedPct: 30, avgValue: 4000, bookingRate: 60, closeRate: 50 },
  { label: "Real Estate", leads: 200, missedPct: 40, avgValue: 8000, bookingRate: 25, closeRate: 30 },
  { label: "E-Commerce", leads: 500, missedPct: 65, avgValue: 250, bookingRate: 100, closeRate: 4 },
];

export default function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState([100]);
  const [missedPct, setMissedPct] = useState([35]);
  const [avgValue, setAvgValue] = useState([1500]);
  const [bookingRate, setBookingRate] = useState([55]);
  const [closeRate, setCloseRate] = useState([50]);
  const [activePreset, setActivePreset] = useState<string | null>(null);

  function applyPreset(preset: typeof PRESETS[0]) {
    setMonthlyLeads([preset.leads]);
    setMissedPct([preset.missedPct]);
    setAvgValue([preset.avgValue]);
    setBookingRate([preset.bookingRate]);
    setCloseRate([preset.closeRate]);
    setActivePreset(preset.label);
  }

  const leadsReached = Math.round(monthlyLeads[0] * (1 - missedPct[0] / 100));
  const leadsMissed = monthlyLeads[0] - leadsReached;
  const currentBookings = Math.round(leadsReached * (bookingRate[0] / 100));
  const currentRevenue = Math.round(currentBookings * (closeRate[0] / 100) * avgValue[0]);

  const aiLeadsReached = monthlyLeads[0];
  const aiBookings = Math.round(aiLeadsReached * (bookingRate[0] / 100));
  const aiRevenue = Math.round(aiBookings * (closeRate[0] / 100) * avgValue[0]);
  const additionalRevenue = aiRevenue - currentRevenue;
  const additionalBookings = aiBookings - currentBookings;
  const annualUplift = additionalRevenue * 12;

  const roiMultiple = additionalRevenue > 0 ? (additionalRevenue / 997).toFixed(1) : "0";

  return (
    <div>
      <SEOHead
        title="AI Revenue ROI Calculator — Estimate Your Revenue Uplift | Infinite Rankers"
        description="Calculate exactly how much revenue you're losing to missed leads and slow follow-up — and how much AI automation can recover. Free, instant estimate."
        keywords="AI ROI calculator, revenue uplift calculator, lead recovery calculator, AI automation ROI"
        canonical="https://infiniterankers.io/roi-calculator"
      />

      <section className="relative pt-28 sm:pt-32 pb-10 sm:pb-14 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <Badge variant="secondary" className="mb-4" data-testid="badge-roi-hero">
              <Zap className="w-3 h-3 mr-1" /> Free Revenue Estimator
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-5 leading-tight" data-testid="text-roi-headline">
              How Much Revenue Are You Losing to{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Missed Leads?
              </span>
            </h1>
            <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-2xl mx-auto">
              Enter your current numbers below. We'll calculate how much revenue you're losing to missed calls and slow follow-up — and how much AI automation could recover.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="pb-16 sm:pb-20" data-testid="roi-calculator-main">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="mb-6">
            <p className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-3">Quick-fill by industry:</p>
            <div className="flex flex-wrap gap-2">
              {PRESETS.map((preset) => (
                <button
                  key={preset.label}
                  type="button"
                  onClick={() => applyPreset(preset)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors font-medium ${activePreset === preset.label ? "bg-blue-600 text-white border-blue-600" : "bg-white text-gray-700 border-gray-200 hover:border-blue-300"}`}
                  data-testid={`preset-${preset.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                >
                  {preset.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-6">
            <Card className="p-6 sm:p-8" data-testid="roi-inputs-card">
              <h2 className="text-lg font-semibold text-gray-900 mb-6">Your Current Numbers</h2>
              <div className="space-y-7">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-medium text-gray-700">Monthly leads received</Label>
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md" data-testid="value-monthly-leads">{monthlyLeads[0]}</span>
                  </div>
                  <Slider value={monthlyLeads} onValueChange={setMonthlyLeads} min={10} max={1000} step={5} data-testid="slider-monthly-leads" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1.5"><span>10</span><span>1,000</span></div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-medium text-gray-700">Leads you miss or don't reach in time</Label>
                    <span className="text-sm font-bold text-red-600 bg-red-50 px-2.5 py-1 rounded-md" data-testid="value-missed-pct">{missedPct[0]}%</span>
                  </div>
                  <Slider value={missedPct} onValueChange={setMissedPct} min={5} max={80} step={1} data-testid="slider-missed-pct" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1.5"><span>5%</span><span>80%</span></div>
                  <p className="text-xs text-gray-400 mt-1.5">Industry average: 30–45% of leads go unanswered or get a response too slow to convert.</p>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-medium text-gray-700">Average deal / job value</Label>
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md" data-testid="value-avg-value">${avgValue[0].toLocaleString()}</span>
                  </div>
                  <Slider value={avgValue} onValueChange={setAvgValue} min={100} max={25000} step={100} data-testid="slider-avg-value" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1.5"><span>$100</span><span>$25,000</span></div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-medium text-gray-700">Booking rate (reached leads that book)</Label>
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md" data-testid="value-booking-rate">{bookingRate[0]}%</span>
                  </div>
                  <Slider value={bookingRate} onValueChange={setBookingRate} min={5} max={100} step={1} data-testid="slider-booking-rate" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1.5"><span>5%</span><span>100%</span></div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-3">
                    <Label className="text-sm font-medium text-gray-700">Close rate (booked leads that pay)</Label>
                    <span className="text-sm font-bold text-blue-600 bg-blue-50 px-2.5 py-1 rounded-md" data-testid="value-close-rate">{closeRate[0]}%</span>
                  </div>
                  <Slider value={closeRate} onValueChange={setCloseRate} min={5} max={100} step={1} data-testid="slider-close-rate" />
                  <div className="flex justify-between text-xs text-gray-400 mt-1.5"><span>5%</span><span>100%</span></div>
                </div>
              </div>
            </Card>

            <div className="space-y-4">
              <Card className="p-6 sm:p-7 bg-gray-50 border-gray-200" data-testid="roi-current-card">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-gray-500 mb-4">Without AI — Current State</h3>
                <div className="grid grid-cols-2 gap-3">
                  <div className="p-4 rounded-xl bg-white border border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">Leads reached</div>
                    <div className="text-2xl font-bold text-gray-900" data-testid="calc-leads-reached">{leadsReached}</div>
                    <div className="text-xs text-red-500 mt-0.5">{leadsMissed} missed</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white border border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">Appointments booked</div>
                    <div className="text-2xl font-bold text-gray-900" data-testid="calc-current-bookings">{currentBookings}</div>
                    <div className="text-xs text-gray-400 mt-0.5">per month</div>
                  </div>
                  <div className="col-span-2 p-4 rounded-xl bg-white border border-gray-200">
                    <div className="text-xs text-gray-500 mb-1">Monthly revenue</div>
                    <div className="text-3xl font-extrabold text-gray-700" data-testid="calc-current-revenue">${currentRevenue.toLocaleString()}</div>
                  </div>
                </div>
              </Card>

              <Card className="p-6 sm:p-7 bg-gradient-to-br from-blue-600 to-indigo-700 border-0" data-testid="roi-ai-card">
                <h3 className="text-xs font-semibold uppercase tracking-wide text-blue-200 mb-4">With AI — All Leads Captured</h3>
                <div className="grid grid-cols-2 gap-3 mb-4">
                  <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                    <div className="text-xs text-blue-200 mb-1">Leads reached</div>
                    <div className="text-2xl font-bold text-white" data-testid="calc-ai-leads">{aiLeadsReached}</div>
                    <div className="text-xs text-emerald-300 mt-0.5">100% captured</div>
                  </div>
                  <div className="p-4 rounded-xl bg-white/10 border border-white/10">
                    <div className="text-xs text-blue-200 mb-1">Appointments booked</div>
                    <div className="text-2xl font-bold text-white" data-testid="calc-ai-bookings">{aiBookings}</div>
                    <div className="text-xs text-emerald-300 mt-0.5">+{additionalBookings} more/mo</div>
                  </div>
                  <div className="col-span-2 p-4 rounded-xl bg-white/15 border border-white/10">
                    <div className="text-xs text-blue-200 mb-1">Monthly revenue</div>
                    <div className="text-3xl font-extrabold text-white" data-testid="calc-ai-revenue">${aiRevenue.toLocaleString()}</div>
                  </div>
                </div>
                <div className="p-4 rounded-xl bg-emerald-500/20 border border-emerald-400/30">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-xs text-emerald-200 mb-0.5">Additional monthly revenue</div>
                      <div className="text-2xl font-extrabold text-emerald-300" data-testid="calc-additional-revenue">+${additionalRevenue.toLocaleString()}/mo</div>
                    </div>
                    <TrendingUp className="w-8 h-8 text-emerald-300 opacity-70" />
                  </div>
                </div>
              </Card>

              <Card className="p-5 sm:p-6" data-testid="roi-summary-card">
                <div className="grid grid-cols-3 gap-3 mb-4">
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">Annual uplift</div>
                    <div className="text-lg font-extrabold text-gray-900" data-testid="calc-annual-uplift">+${(annualUplift).toLocaleString()}</div>
                  </div>
                  <div className="text-center border-x border-gray-100">
                    <div className="text-xs text-gray-500 mb-1">Extra bookings/mo</div>
                    <div className="text-lg font-extrabold text-gray-900" data-testid="calc-extra-bookings">+{additionalBookings}</div>
                  </div>
                  <div className="text-center">
                    <div className="text-xs text-gray-500 mb-1">ROI vs Starter plan</div>
                    <div className="text-lg font-extrabold text-emerald-600" data-testid="calc-roi-multiple">{roiMultiple}x</div>
                  </div>
                </div>
                <p className="text-xs text-gray-400 mb-4 text-center">Directional estimate. Actual results vary by industry, offer, and existing close rate. Based on capturing 100% of leads with AI vs. {missedPct[0]}% currently missed.</p>
                <Link href="/book-demo">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white" data-testid="button-roi-book-demo">
                    Book a Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <section className="py-12 sm:py-16 bg-gray-50 border-t border-gray-100" data-testid="roi-proof-section">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900 text-center mb-8">What Clients Recovered with AI Systems</h2>
          <div className="grid sm:grid-cols-3 gap-4 sm:gap-6 mb-8">
            {[
              { metric: "148%", label: "More new patients", business: "Premier Dental Care", icon: CalendarCheck },
              { metric: "$65K", label: "Recovered in 90 days", business: "LuxeHome Essentials", icon: DollarSign },
              { metric: "3x", label: "More case intakes", business: "Sterling & Associates", icon: Users },
            ].map((result, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}>
                <Card className="p-5 text-center" data-testid={`proof-result-${i}`}>
                  <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center mx-auto mb-3">
                    <result.icon className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-3xl font-extrabold text-blue-700 mb-1">{result.metric}</div>
                  <div className="text-sm font-semibold text-gray-900 mb-1">{result.label}</div>
                  <div className="text-xs text-gray-400">{result.business}</div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="flex flex-wrap gap-4 justify-center">
            {[
              { icon: BarChart3, text: "Personalized implementation roadmap" },
              { icon: CheckCircle2, text: "No commitment required" },
              { icon: Star, text: "Free 30-min strategy call" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2 text-sm text-gray-600" data-testid={`proof-trust-${i}`}>
                <item.icon className="w-4 h-4 text-blue-500" />
                <span>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 sm:py-20 relative overflow-hidden" data-testid="roi-cta-section">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-700" />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
              Ready to Recover That Revenue?
            </h2>
            <p className="text-white/80 mb-8 text-base">
              Book a free strategy call. We'll review your numbers, identify your highest-ROI AI systems, and give you an implementation plan — before you spend a dollar.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link href="/book-demo">
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 font-semibold" data-testid="button-roi-final-cta">
                  Book Free Strategy Call <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10" data-testid="button-roi-explore">
                  Explore AI Systems
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
