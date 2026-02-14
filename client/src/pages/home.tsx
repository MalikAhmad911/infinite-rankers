import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import {
  Bot, Zap, Target, TrendingUp, ArrowRight, CheckCircle2, Star,
  Globe, Phone, BarChart3, CalendarCheck, DollarSign, Users,
  Sparkles, Shield, Clock, ChevronRight,
} from "lucide-react";
import {
  SERVICE_CATEGORIES, ACHIEVEMENTS, HOW_IT_WORKS_STEPS,
  TESTIMONIALS, PRICING_TIERS, CASE_STUDIES, COMPANY,
} from "@/lib/constants";

const iconMap: Record<string, any> = {
  Bot, Globe, ArrowRight, CalendarCheck, DollarSign, Target, Zap,
};

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50/50 to-white dark:from-blue-950/30 dark:via-purple-950/20 dark:to-background" />
      <div className="absolute top-20 right-10 w-72 h-72 bg-blue-400/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
          >
            <Badge variant="secondary" className="mb-6">
              <Sparkles className="w-3 h-3 mr-1" /> AI Revenue Growth Agency
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground leading-tight mb-6">
              Turn Your Business Into an{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Revenue Machine
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-muted-foreground mb-8 leading-relaxed max-w-xl">
              We build automated systems that generate customers and revenue. Stop chasing leads manually — let AI do the heavy lifting.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-demo">
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0" data-testid="button-hero-book-demo">
                  Book Demo <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" data-testid="button-hero-services">
                  Explore Services
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-6 mt-10">
              {[
                { icon: Shield, text: "No Long-Term Contracts" },
                { icon: Clock, text: "Results in 30 Days" },
                { icon: Users, text: "500+ Clients" },
              ].map((item) => (
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <item.icon className="w-4 h-4 text-blue-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square max-w-md mx-auto">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 rounded-full blur-3xl" />
              <div className="relative bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-md border border-white/30 dark:border-white/10 p-8 space-y-4">
                <div className="text-sm font-semibold text-foreground mb-6">AI Revenue Pipeline</div>
                {HOW_IT_WORKS_STEPS.map((step, i) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5 + i * 0.15 }}
                    className="flex items-center gap-3 p-3 rounded-md bg-white/50 dark:bg-white/5 border border-border/50"
                  >
                    <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <span className="text-white text-xs font-bold">{step.step}</span>
                    </div>
                    <div>
                      <div className="text-sm font-medium text-foreground">{step.title}</div>
                    </div>
                    {i < HOW_IT_WORKS_STEPS.length - 1 && (
                      <ChevronRight className="w-4 h-4 text-muted-foreground ml-auto flex-shrink-0" />
                    )}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600" data-testid="achievements-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{a.value}</div>
              <div className="text-sm text-white/80">{a.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AISystemsSection() {
  const systems = [
    { icon: Bot, title: "AI Lead Engine", desc: "Capture and qualify leads 24/7 with intelligent AI agents" },
    { icon: Phone, title: "AI Calling System", desc: "Automated outbound and inbound calls that convert" },
    { icon: Target, title: "Smart Advertising", desc: "AI-optimized ad campaigns across Google and Meta" },
    { icon: BarChart3, title: "Analytics & CRM", desc: "Real-time dashboards and automated CRM workflows" },
    { icon: Zap, title: "Workflow Automation", desc: "Connect every tool in your sales and marketing stack" },
    { icon: Globe, title: "Multi-Channel Reach", desc: "Email, SMS, chat, and social — all automated" },
  ];

  return (
    <section className="py-20 lg:py-28" data-testid="ai-systems-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="AI Revenue Systems"
          title="Your Complete AI Growth Infrastructure"
          description="Every tool and system you need to automate customer acquisition and revenue growth — all working together seamlessly."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {systems.map((s, i) => (
            <GlassCard key={s.title} delay={i * 0.08}>
              <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500/10 to-purple-500/10 flex items-center justify-center mb-4">
                <s.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-20 lg:py-28 bg-card dark:bg-card" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="From Traffic to Revenue in 5 Steps"
          description="Our AI systems create a seamless pipeline that turns strangers into paying customers automatically."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {HOW_IT_WORKS_STEPS.map((step, i) => {
            const Icon = iconMap[step.icon] || Zap;
            return (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center relative"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4">
                  <span className="text-white font-bold">{step.step}</span>
                </div>
                <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
                <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function ServicesCategoriesSection() {
  const catIcons: Record<string, any> = { Bot, Target, Globe, Zap };
  const iconNames: Record<string, any> = {
    "ai-automation": Bot,
    "lead-generation": Target,
    "social-content": Globe,
    "development": Zap,
  };

  return (
    <section className="py-20 lg:py-28" data-testid="services-categories-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Revenue-Generating Systems Built for Growth"
          description="From AI automation to lead generation, we provide end-to-end solutions that drive measurable business results."
        />
        <div className="grid sm:grid-cols-2 gap-6">
          {SERVICE_CATEGORIES.map((cat, i) => {
            const Icon = iconNames[cat.id] || Zap;
            return (
              <GlassCard key={cat.id} delay={i * 0.1}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-lg font-semibold text-foreground mb-2">{cat.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4 leading-relaxed">{cat.description}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {cat.services.slice(0, 4).map((s) => (
                        <Badge key={s.slug} variant="secondary" className="text-xs">
                          {s.title}
                        </Badge>
                      ))}
                      {cat.services.length > 4 && (
                        <Badge variant="secondary" className="text-xs">
                          +{cat.services.length - 4} more
                        </Badge>
                      )}
                    </div>
                  </div>
                </div>
                <Link href="/services">
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 mt-4 cursor-pointer">
                    View All <ArrowRight className="w-3 h-3" />
                  </span>
                </Link>
              </GlassCard>
            );
          })}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-card dark:bg-card" data-testid="portfolio-preview-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Results"
          title="Real Results for Real Businesses"
          description="See how our AI-powered systems have transformed businesses across industries."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.slice(0, 3).map((cs, i) => (
            <GlassCard key={cs.id} delay={i * 0.1}>
              <Badge variant="secondary" className="mb-3 text-xs">{cs.label}</Badge>
              <h3 className="text-lg font-semibold text-foreground mb-2">{cs.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cs.business}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-md bg-blue-50 dark:bg-blue-500/10">
                  <div className="text-lg font-bold text-blue-600 dark:text-blue-400">{cs.results.metric1}</div>
                  <div className="text-xs text-muted-foreground">{cs.results.label1}</div>
                </div>
                <div className="text-center p-3 rounded-md bg-purple-50 dark:bg-purple-500/10">
                  <div className="text-lg font-bold text-purple-600 dark:text-purple-400">{cs.results.metric2}</div>
                  <div className="text-xs text-muted-foreground">{cs.results.label2}</div>
                </div>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="text-center mt-10">
          <Link href="/portfolio">
            <Button variant="outline" data-testid="button-view-portfolio">
              View All Case Studies <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PricingPreviewSection() {
  return (
    <section className="py-20 lg:py-28" data-testid="pricing-preview-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Pricing"
          title="Transparent, Results-Driven Pricing"
          description="Choose the system that matches your growth stage. Scale up as your revenue grows."
        />
        <div className="grid md:grid-cols-3 gap-6">
          {PRICING_TIERS.map((tier, i) => (
            <GlassCard
              key={tier.name}
              delay={i * 0.1}
              className={tier.popular ? "border-blue-500/50 relative" : ""}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1">{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold text-foreground">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </div>
              <ul className="space-y-2 mb-6">
                {tier.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 dark:text-blue-400 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/pricing">
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
  );
}

function TestimonialsSection() {
  return (
    <section className="py-20 lg:py-28 bg-card dark:bg-card" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="Trusted by Revenue-Focused Businesses"
          description="Hear from business owners who transformed their growth with our AI automation systems."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 3).map((t, i) => (
            <GlassCard key={t.name} delay={i * 0.1}>
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-yellow-500 fill-yellow-500" />
                ))}
              </div>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed italic">"{t.text}"</p>
              <div>
                <div className="text-sm font-semibold text-foreground">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.role}</div>
              </div>
            </GlassCard>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your AI Revenue Machine?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join 500+ businesses already using AI automation to generate more customers and revenue. Book a free strategy session today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/book-demo">
              <Button className="bg-white text-blue-700 hover:bg-white/90 border-0" data-testid="button-cta-book-demo">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-white border-white/30 bg-white/10 backdrop-blur-sm" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div>
      <SEOHead
        title="Infinite Rankers - AI Revenue Growth Agency"
        description="Turn your business into an AI-powered revenue machine. We build automated systems that generate customers and revenue."
      />
      <HeroSection />
      <AchievementsSection />
      <AISystemsSection />
      <HowItWorksSection />
      <ServicesCategoriesSection />
      <PortfolioPreviewSection />
      <PricingPreviewSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}
