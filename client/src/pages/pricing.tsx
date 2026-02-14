import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { PRICING_TIERS } from "@/lib/constants";
import { ArrowRight, CheckCircle2, Calculator } from "lucide-react";

function ROICalculator() {
  const [monthlyLeads, setMonthlyLeads] = useState([100]);
  const [avgDealValue, setAvgDealValue] = useState([500]);
  const [closeRate, setCloseRate] = useState([10]);

  const currentRevenue = monthlyLeads[0] * avgDealValue[0] * (closeRate[0] / 100);
  const projectedLeads = monthlyLeads[0] * 2.5;
  const projectedCloseRate = Math.min(closeRate[0] * 1.8, 60);
  const projectedRevenue = projectedLeads * avgDealValue[0] * (projectedCloseRate / 100);
  const revenueIncrease = projectedRevenue - currentRevenue;

  return (
    <section className="py-20 lg:py-28 bg-card dark:bg-card" data-testid="roi-calculator">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="ROI Calculator"
          title="Calculate Your Revenue Growth Potential"
          description="See how AI automation can impact your bottom line based on your current numbers."
        />
        <div className="max-w-4xl mx-auto">
          <GlassCard>
            <div className="grid md:grid-cols-2 gap-10">
              <div className="space-y-8">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Label className="text-sm font-medium">Monthly Leads</Label>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{monthlyLeads[0]}</span>
                  </div>
                  <Slider
                    value={monthlyLeads}
                    onValueChange={setMonthlyLeads}
                    min={10}
                    max={1000}
                    step={10}
                    data-testid="slider-leads"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Label className="text-sm font-medium">Average Deal Value ($)</Label>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">${avgDealValue[0]}</span>
                  </div>
                  <Slider
                    value={avgDealValue}
                    onValueChange={setAvgDealValue}
                    min={100}
                    max={10000}
                    step={100}
                    data-testid="slider-deal-value"
                  />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Label className="text-sm font-medium">Current Close Rate (%)</Label>
                    <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">{closeRate[0]}%</span>
                  </div>
                  <Slider
                    value={closeRate}
                    onValueChange={setCloseRate}
                    min={1}
                    max={50}
                    step={1}
                    data-testid="slider-close-rate"
                  />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-md bg-muted/50">
                  <div className="text-xs text-muted-foreground mb-1">Current Monthly Revenue</div>
                  <div className="text-2xl font-bold text-foreground">${currentRevenue.toLocaleString()}</div>
                </div>
                <div className="p-4 rounded-md bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-500/10 dark:to-purple-500/10">
                  <div className="text-xs text-muted-foreground mb-1">Projected Monthly Revenue with AI</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${Math.round(projectedRevenue).toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-md bg-green-50 dark:bg-green-500/10 border border-green-200/50 dark:border-green-500/10">
                  <div className="text-xs text-muted-foreground mb-1">Potential Revenue Increase</div>
                  <div className="text-2xl font-bold text-green-600 dark:text-green-400">
                    +${Math.round(revenueIncrease).toLocaleString()}/mo
                  </div>
                </div>
                <Link href="/book-demo">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 mt-2" data-testid="button-roi-cta">
                    Get Your Custom Growth Plan <ArrowRight className="w-4 h-4 ml-1" />
                  </Button>
                </Link>
              </div>
            </div>
          </GlassCard>
        </div>
      </div>
    </section>
  );
}

export default function Pricing() {
  return (
    <div>
      <SEOHead
        title="Pricing - Infinite Rankers | AI Revenue Growth Plans"
        description="Transparent, results-driven pricing for AI automation and revenue growth systems. Choose the plan that matches your growth stage."
      />
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-white dark:from-blue-950/30 dark:via-purple-950/20 dark:to-background" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Pricing
            </span>
            <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
              Transparent, Results-Driven{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Choose the AI revenue system that matches your growth stage. No hidden fees, no long-term contracts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {PRICING_TIERS.map((tier, i) => (
              <GlassCard
                key={tier.name}
                delay={i * 0.1}
                className={tier.popular ? "border-blue-500/50 relative" : ""}
              >
                {tier.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">Most Popular</Badge>
                  </div>
                )}
                <div className="text-center mb-8">
                  <h3 className="text-xl font-semibold text-foreground mb-2">{tier.name}</h3>
                  <div className="flex items-baseline justify-center gap-1 mb-2">
                    <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                    <span className="text-muted-foreground">{tier.period}</span>
                  </div>
                  <p className="text-sm text-muted-foreground">{tier.description}</p>
                </div>
                <ul className="space-y-3 mb-8">
                  {tier.features.map((f) => (
                    <li key={f} className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">{f}</span>
                    </li>
                  ))}
                </ul>
                <Link href="/book-demo">
                  <Button
                    className={`w-full ${tier.popular ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0" : ""}`}
                    variant={tier.popular ? "default" : "outline"}
                    data-testid={`button-pricing-${tier.name.toLowerCase().replace(/\s/g, "-")}`}
                  >
                    {tier.cta}
                  </Button>
                </Link>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <ROICalculator />

      <section className="py-20 lg:py-28 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Need a Custom Solution?</h2>
            <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
              Every business is unique. Book a strategy session and we'll build a custom AI revenue system tailored to your specific needs and budget.
            </p>
            <Link href="/book-demo">
              <Button className="bg-white text-blue-700 hover:bg-white/90 border-0" data-testid="button-pricing-cta">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
