import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Slider } from "@/components/ui/slider";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { PRICING_TIERS, SERVICE_PRICING } from "@/lib/constants";
import {
  ArrowRight, CheckCircle2, Shield, Clock, DollarSign,
  ChevronDown, ChevronUp,
} from "lucide-react";

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
    <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="roi-calculator">
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
                    <span className="text-sm font-semibold text-blue-600">{monthlyLeads[0]}</span>
                  </div>
                  <Slider value={monthlyLeads} onValueChange={setMonthlyLeads} min={10} max={1000} step={10} data-testid="slider-leads" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Label className="text-sm font-medium">Average Deal Value ($)</Label>
                    <span className="text-sm font-semibold text-blue-600">${avgDealValue[0]}</span>
                  </div>
                  <Slider value={avgDealValue} onValueChange={setAvgDealValue} min={100} max={10000} step={100} data-testid="slider-deal-value" />
                </div>
                <div>
                  <div className="flex items-center justify-between gap-2 mb-3">
                    <Label className="text-sm font-medium">Current Close Rate (%)</Label>
                    <span className="text-sm font-semibold text-blue-600">{closeRate[0]}%</span>
                  </div>
                  <Slider value={closeRate} onValueChange={setCloseRate} min={1} max={50} step={1} data-testid="slider-close-rate" />
                </div>
              </div>

              <div className="space-y-4">
                <div className="p-4 rounded-md bg-muted/50">
                  <div className="text-xs text-muted-foreground mb-1">Current Monthly Revenue</div>
                  <div className="text-2xl font-bold text-foreground">${currentRevenue.toLocaleString()}</div>
                </div>
                <div className="p-4 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50">
                  <div className="text-xs text-muted-foreground mb-1">Projected Monthly Revenue with AI</div>
                  <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    ${Math.round(projectedRevenue).toLocaleString()}
                  </div>
                </div>
                <div className="p-4 rounded-md bg-emerald-50 border border-emerald-200/60">
                  <div className="text-xs text-muted-foreground mb-1">Potential Revenue Increase</div>
                  <div className="text-2xl font-bold text-emerald-600">
                    +${Math.round(revenueIncrease).toLocaleString()}/mo
                  </div>
                </div>
                <Link href="/book-demo">
                  <Button className="w-full mt-2" data-testid="button-roi-cta">
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

const SERVICE_CATEGORIES_PRICING = [
  {
    title: "AI & Automation Systems",
    slugs: ["ai-calling-agent", "ai-receptionist", "ai-lead-qualification", "ai-appointment-booking", "ai-follow-up", "ai-sales-assistant", "ai-chatbot", "ai-email-automation", "ai-sms-automation", "crm-automation", "workflow-automation"],
  },
  {
    title: "Lead Generation Systems",
    slugs: ["google-ads", "meta-ads", "seo-authority", "local-seo", "conversion-funnels", "landing-page-optimization", "conversion-rate-optimization"],
  },
  {
    title: "Social Media & Content",
    slugs: ["social-media-marketing", "content-writing"],
  },
  {
    title: "Development & Technology",
    slugs: ["website-development", "landing-page-development", "saas-integrations", "crm-setup", "analytics-dashboard", "marketing-automation-setup"],
  },
];

function ServicePricingBreakdown() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>("AI & Automation Systems");

  return (
    <section className="py-16 sm:py-20 lg:py-24" data-testid="service-pricing-breakdown">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Service Pricing"
          title="Individual Service Pricing"
          description="All services available month-to-month. Mix and match to build your perfect growth stack."
        />

        <div className="space-y-4">
          {SERVICE_CATEGORIES_PRICING.map((cat) => {
            const services = cat.slugs
              .map(slug => SERVICE_PRICING.find(sp => sp.slug === slug))
              .filter(Boolean);
            const isExpanded = expandedCategory === cat.title;

            return (
              <motion.div
                key={cat.title}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <Card className="overflow-hidden">
                  <button
                    onClick={() => setExpandedCategory(isExpanded ? null : cat.title)}
                    className="w-full flex items-center justify-between gap-4 p-4 sm:p-5 text-left"
                    data-testid={`toggle-category-${cat.title.toLowerCase().replace(/\s+/g, "-")}`}
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-1.5 h-6 bg-primary rounded-full shrink-0" />
                      <h3 className="font-semibold text-foreground text-sm sm:text-base">{cat.title}</h3>
                      <Badge variant="secondary" className="text-xs">{services.length} services</Badge>
                    </div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-muted-foreground shrink-0" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-muted-foreground shrink-0" />
                    )}
                  </button>

                  <div
                    className="transition-all duration-300"
                    style={{
                      maxHeight: isExpanded ? `${services.length * 200 + 100}px` : "0px",
                      opacity: isExpanded ? 1 : 0,
                      overflow: "hidden",
                    }}
                  >
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm" data-testid={`table-${cat.title.toLowerCase().replace(/\s+/g, "-")}`}>
                        <thead>
                          <tr className="border-t border-b bg-muted/30">
                            <th className="text-left p-3 sm:p-4 font-medium text-muted-foreground min-w-[200px]">Service</th>
                            <th className="text-center p-3 sm:p-4 font-medium text-muted-foreground min-w-[120px]">
                              <div>Growth</div>
                              <div className="text-xs font-normal">Starter</div>
                            </th>
                            <th className="text-center p-3 sm:p-4 font-medium text-muted-foreground min-w-[120px]">
                              <div>Scale</div>
                              <div className="text-xs font-normal">Most Popular</div>
                            </th>
                            <th className="text-center p-3 sm:p-4 font-medium text-muted-foreground min-w-[120px]">
                              <div>Enterprise</div>
                              <div className="text-xs font-normal">Full Power</div>
                            </th>
                            <th className="p-3 sm:p-4 min-w-[100px]"></th>
                          </tr>
                        </thead>
                        <tbody>
                          {services.map((service, si) => service && (
                            <tr key={service.slug} className={si < services.length - 1 ? "border-b border-border/50" : ""}>
                              <td className="p-3 sm:p-4">
                                <div className="font-medium text-foreground text-xs sm:text-sm">{service.title}</div>
                                {service.combinedNote && (
                                  <p className="text-xs text-muted-foreground mt-0.5 italic">{service.combinedNote}</p>
                                )}
                              </td>
                              {service.tiers.map((tier) => (
                                <td key={tier.name} className="text-center p-3 sm:p-4">
                                  <div className="font-semibold text-foreground text-sm sm:text-base">
                                    ${tier.price.toLocaleString()}
                                  </div>
                                  <div className="text-xs text-muted-foreground">{service.unit}</div>
                                </td>
                              ))}
                              <td className="p-3 sm:p-4 text-right">
                                <Link href={`/services/${service.slug}`}>
                                  <Button variant="ghost" size="sm" data-testid={`button-view-${service.slug}`}>
                                    Details <ArrowRight className="w-3 h-3 ml-1" />
                                  </Button>
                                </Link>
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 mt-10 text-xs sm:text-sm text-muted-foreground">
          <span className="flex items-center gap-1.5"><Shield className="w-4 h-4 text-primary" /> No Hidden Fees</span>
          <span className="flex items-center gap-1.5"><Clock className="w-4 h-4 text-primary" /> Month-to-Month</span>
          <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4 text-primary" /> Cancel Anytime</span>
          <span className="flex items-center gap-1.5"><DollarSign className="w-4 h-4 text-primary" /> No Setup Fees</span>
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
      <section className="relative pt-28 sm:pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <Badge variant="secondary" className="mb-4">
              <DollarSign className="w-3 h-3 mr-1" /> Transparent Pricing
            </Badge>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4 sm:mb-6 leading-tight">
              Transparent, Results-Driven{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Pricing</span>
            </h1>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              Choose the AI revenue system that matches your growth stage. No hidden fees, no long-term contracts.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
            {PRICING_TIERS.map((tier, i) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <Card className={`p-5 sm:p-6 h-full relative ${tier.popular ? "border-primary ring-1 ring-primary/20" : ""}`} data-testid={`pricing-card-${tier.name.toLowerCase()}`}>
                  {tier.discount && (
                    <div className="absolute -top-3 right-4">
                      <Badge data-testid={`badge-discount-${tier.name.toLowerCase()}`}>{tier.discount}</Badge>
                    </div>
                  )}
                  {tier.popular && (
                    <div className="absolute -top-3 left-4">
                      <Badge variant="secondary">Most Popular</Badge>
                    </div>
                  )}
                  <div className="text-center mb-6 sm:mb-8">
                    <h3 className="text-lg sm:text-xl font-semibold text-foreground mb-1">{tier.name}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{tier.description}</p>
                    <div className="flex items-baseline justify-center gap-1 mb-1">
                      <span className="text-3xl sm:text-4xl font-bold text-foreground">{tier.price}</span>
                      <span className="text-sm text-muted-foreground">{tier.period}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Month-to-month, cancel anytime</p>
                  </div>
                  <ul className="space-y-2.5 mb-6 sm:mb-8">
                    {tier.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{f}</span>
                      </li>
                    ))}
                  </ul>
                  <Link href="/book-demo">
                    <Button
                      className="w-full"
                      variant={tier.popular ? "default" : "outline"}
                      data-testid={`button-pricing-${tier.name.toLowerCase()}`}
                    >
                      {tier.cta} <ArrowRight className="w-4 h-4 ml-1" />
                    </Button>
                  </Link>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <ServicePricingBreakdown />
      <ROICalculator />

      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">Need a Custom Solution?</h2>
            <p className="text-base sm:text-lg text-white/80 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Every business is unique. Book a strategy session and we'll build a custom AI revenue system tailored to your specific needs and budget.
            </p>
            <Link href="/book-demo">
              <Button variant="secondary" data-testid="button-pricing-cta">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
