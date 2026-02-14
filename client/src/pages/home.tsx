import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { Badge } from "@/components/ui/badge";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import {
  Bot, Zap, Target, TrendingUp, ArrowRight, CheckCircle2, Star,
  Globe, Phone, BarChart3, CalendarCheck, DollarSign, Users,
  Sparkles, Shield, Clock, ChevronRight, Activity,
} from "lucide-react";
import {
  SERVICE_CATEGORIES, ACHIEVEMENTS, HOW_IT_WORKS_STEPS,
  TESTIMONIALS, PRICING_TIERS, CASE_STUDIES, COMPANY,
} from "@/lib/constants";

const iconMap: Record<string, any> = {
  Bot, Globe, ArrowRight, CalendarCheck, DollarSign, Target, Zap,
};

function AnimatedCounter({ value, suffix = "" }: { value: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });
  const numericValue = parseInt(value.replace(/[^0-9]/g, ""));

  useEffect(() => {
    if (inView && numericValue) {
      let start = 0;
      const duration = 2000;
      const increment = numericValue / (duration / 16);
      const timer = setInterval(() => {
        start += increment;
        if (start >= numericValue) {
          setCount(numericValue);
          clearInterval(timer);
        } else {
          setCount(Math.floor(start));
        }
      }, 16);
      return () => clearInterval(timer);
    }
  }, [inView, numericValue]);

  const prefix = value.match(/^[^0-9]*/)?.[0] || "";
  const suffixStr = value.match(/[^0-9]*$/)?.[0] || "";

  return (
    <span ref={ref}>
      {prefix}{inView ? count.toLocaleString() : "0"}{suffixStr}
    </span>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" data-testid="hero-section">
      <div className="absolute inset-0 bg-[#060B1A]" />
      <div className="absolute inset-0 bg-gradient-to-br from-blue-950/40 via-[#060B1A] to-purple-950/30" />

      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(59,130,246,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(59,130,246,0.3) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(139,92,246,0.4) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="absolute top-20 right-[10%] w-[500px] h-[500px] bg-blue-500/8 rounded-full blur-[120px] animate-float" />
      <div className="absolute bottom-10 left-[5%] w-[600px] h-[600px] bg-purple-500/8 rounded-full blur-[150px] animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-[40%] left-[30%] w-[300px] h-[300px] bg-cyan-500/5 rounded-full blur-[100px] animate-float" style={{ animationDelay: "-1.5s" }} />

      <div className="absolute top-[30%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent animate-glow-pulse" />
      <div className="absolute top-[70%] left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/15 to-transparent animate-glow-pulse" style={{ animationDelay: "-1.5s" }} />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-6" data-testid="badge-hero-agency">
              <Sparkles className="w-3 h-3 mr-1" /> AI Revenue Growth Agency
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-foreground leading-[1.1] mb-6">
              Turn Your Business Into an{" "}
              <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-purple-500 bg-clip-text text-transparent">
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
                <div key={item.text} className="flex items-center gap-2 text-sm text-muted-foreground" data-testid={`trust-${item.text.toLowerCase().replace(/\s/g, "-")}`}>
                  <item.icon className="w-4 h-4 text-blue-400" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full max-w-lg mx-auto">
              <div className="absolute -inset-4 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-cyan-500/10 rounded-md blur-2xl animate-glow-pulse" />
              <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-md border border-white/[0.08] p-8 shadow-[0_0_60px_rgba(59,130,246,0.08)]">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                    <Activity className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm font-semibold text-foreground">AI Revenue Pipeline</div>
                  <div className="ml-auto flex gap-1">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-glow-pulse" />
                    <span className="text-xs text-green-400">Live</span>
                  </div>
                </div>
                <div className="space-y-3">
                  {HOW_IT_WORKS_STEPS.map((step, i) => (
                    <motion.div
                      key={step.step}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.6 + i * 0.15, duration: 0.5 }}
                      className="flex items-center gap-3 p-3 rounded-md bg-white/[0.04] border border-white/[0.06] transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06]"
                      data-testid={`pipeline-step-${step.step}`}
                    >
                      <div className="w-8 h-8 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                        <span className="text-white text-xs font-bold">{step.step}</span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium text-foreground">{step.title}</div>
                      </div>
                      {i < HOW_IT_WORKS_STEPS.length - 1 && (
                        <ChevronRight className="w-4 h-4 text-blue-400/50 flex-shrink-0" />
                      )}
                      {i === HOW_IT_WORKS_STEPS.length - 1 && (
                        <CheckCircle2 className="w-4 h-4 text-green-400 flex-shrink-0" />
                      )}
                    </motion.div>
                  ))}
                </div>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 1.6 }}
                  className="mt-4 p-3 rounded-md bg-gradient-to-r from-blue-500/10 to-purple-500/10 border border-blue-500/20"
                >
                  <div className="flex items-center justify-between gap-2 flex-wrap">
                    <span className="text-xs text-muted-foreground">Projected Monthly Revenue</span>
                    <span className="text-sm font-bold text-green-400">+$48,000</span>
                  </div>
                </motion.div>
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
    <section className="py-16 bg-gradient-to-r from-blue-600 to-purple-600 relative overflow-hidden" data-testid="achievements-section">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
              data-testid={`achievement-${i}`}
            >
              <div className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-2">
                <AnimatedCounter value={a.value} />
              </div>
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
    { icon: Bot, title: "AI Lead Engine", desc: "Capture and qualify leads 24/7 with intelligent AI agents that never sleep." },
    { icon: Phone, title: "AI Calling System", desc: "Automated outbound and inbound calls that convert prospects into customers." },
    { icon: Target, title: "Smart Advertising", desc: "AI-optimized ad campaigns across Google and Meta for maximum ROAS." },
    { icon: BarChart3, title: "Analytics & CRM", desc: "Real-time dashboards and automated CRM workflows for full visibility." },
    { icon: Zap, title: "Workflow Automation", desc: "Connect every tool in your sales and marketing stack seamlessly." },
    { icon: Globe, title: "Multi-Channel Reach", desc: "Email, SMS, chat, and social media — all automated and unified." },
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
            <GlassCard key={s.title} delay={i * 0.08} glow={true}>
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 border border-blue-500/10">
                <s.icon className="w-6 h-6 text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`system-title-${i}`}>{s.title}</h3>
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
    <section className="py-20 lg:py-28 bg-[#0A1628]" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="How It Works"
          title="From Traffic to Revenue in 5 Steps"
          description="Our AI systems create a seamless pipeline that turns strangers into paying customers automatically."
        />
        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-500/0 via-blue-500/30 to-purple-500/0" />
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
            {HOW_IT_WORKS_STEPS.map((step, i) => {
              const Icon = iconMap[step.icon] || Zap;
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12, duration: 0.5 }}
                  className="text-center relative"
                  data-testid={`how-it-works-step-${step.step}`}
                >
                  <div className="relative inline-flex">
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-500/20 to-purple-600/20 rounded-full blur-xl" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-4 shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-foreground mb-2">{step.title}</h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function ServicesCarouselSection() {
  const allServices = SERVICE_CATEGORIES.flatMap(cat =>
    cat.services.map(s => ({ ...s, categoryId: cat.id }))
  );
  const duplicated = [...allServices, ...allServices];
  const catIcons: Record<string, any> = {
    Phone, Bot, Target, Globe, Zap, BarChart3, CalendarCheck, DollarSign,
  };

  return (
    <section className="py-20 lg:py-28" data-testid="services-carousel-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Our Services"
          title="Revenue-Generating Systems Built for Growth"
          description="From AI automation to lead generation, we provide end-to-end solutions that drive measurable business results."
        />
      </div>
      <div className="relative overflow-hidden">
        <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-[#060B1A] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-[#060B1A] to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 animate-slide-left" style={{ width: "max-content" }}>
          {duplicated.map((service, i) => (
            <Link key={`${service.slug}-${i}`} href={`/services/${service.slug}`}>
              <div
                className="w-64 flex-shrink-0 p-5 rounded-md bg-white/[0.03] backdrop-blur-xl border border-white/[0.06] transition-all duration-300 hover:border-blue-500/30 hover:bg-white/[0.06] cursor-pointer"
                data-testid={`service-card-${service.slug}-${i}`}
              >
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500/15 to-purple-500/15 flex items-center justify-center mb-3">
                  <Zap className="w-5 h-5 text-blue-400" />
                </div>
                <h4 className="text-sm font-semibold text-foreground mb-1">{service.title}</h4>
                <p className="text-xs text-muted-foreground line-clamp-2">{service.shortDesc}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function PortfolioPreviewSection() {
  return (
    <section className="py-20 lg:py-28 bg-[#0A1628]" data-testid="portfolio-preview-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Results"
          title="Real Results for Real Businesses"
          description="See how our AI-powered systems have transformed businesses across industries."
        />
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.slice(0, 3).map((cs, i) => (
            <GlassCard key={cs.id} delay={i * 0.12} glow={true}>
              <Badge variant="secondary" className="mb-3 text-xs" data-testid={`case-study-label-${cs.id}`}>{cs.label}</Badge>
              <h3 className="text-lg font-semibold text-foreground mb-2" data-testid={`case-study-title-${cs.id}`}>{cs.title}</h3>
              <p className="text-sm text-muted-foreground mb-4">{cs.business}</p>
              <div className="grid grid-cols-2 gap-3">
                <div className="text-center p-3 rounded-md bg-blue-500/10 border border-blue-500/10">
                  <div className="text-lg font-bold text-blue-400" data-testid={`case-study-metric1-${cs.id}`}>{cs.results.metric1}</div>
                  <div className="text-xs text-muted-foreground">{cs.results.label1}</div>
                </div>
                <div className="text-center p-3 rounded-md bg-purple-500/10 border border-purple-500/10">
                  <div className="text-lg font-bold text-purple-400" data-testid={`case-study-metric2-${cs.id}`}>{cs.results.metric2}</div>
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
              className={tier.popular ? "border-blue-500/40 relative shadow-[0_0_40px_rgba(59,130,246,0.12)]" : ""}
              glow={tier.popular}
            >
              {tier.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0 no-default-hover-elevate no-default-active-elevate" data-testid="badge-popular">
                    Most Popular
                  </Badge>
                </div>
              )}
              <div className="text-center mb-6">
                <h3 className="text-lg font-semibold text-foreground mb-1" data-testid={`pricing-name-${i}`}>{tier.name}</h3>
                <div className="flex items-baseline justify-center gap-1">
                  <span className="text-3xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{tier.price}</span>
                  <span className="text-muted-foreground text-sm">{tier.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{tier.description}</p>
              </div>
              <ul className="space-y-2 mb-6">
                {tier.features.slice(0, 5).map((f) => (
                  <li key={f} className="flex items-start gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 flex-shrink-0 mt-0.5" />
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

function TestimonialsSlider() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 lg:py-28 bg-[#0A1628]" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          label="Testimonials"
          title="Trusted by Revenue-Focused Businesses"
          description="Hear from business owners who transformed their growth with our AI automation systems."
        />
        <div className="max-w-3xl mx-auto">
          <div className="relative min-h-[220px]">
            {TESTIMONIALS.map((t, i) => (
              <motion.div
                key={t.name}
                initial={false}
                animate={{
                  opacity: i === activeIndex ? 1 : 0,
                  scale: i === activeIndex ? 1 : 0.95,
                  y: i === activeIndex ? 0 : 10,
                }}
                transition={{ duration: 0.5 }}
                className="absolute inset-0"
                style={{ pointerEvents: i === activeIndex ? "auto" : "none" }}
              >
                <div className="bg-white/[0.03] backdrop-blur-xl rounded-md border border-white/[0.06] p-8 text-center">
                  <div className="flex justify-center gap-0.5 mb-4">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                    ))}
                  </div>
                  <p className="text-base text-muted-foreground mb-6 leading-relaxed italic max-w-2xl mx-auto" data-testid={`testimonial-text-${i}`}>
                    &ldquo;{t.text}&rdquo;
                  </p>
                  <div>
                    <div className="text-sm font-semibold text-foreground" data-testid={`testimonial-name-${i}`}>{t.name}</div>
                    <div className="text-xs text-muted-foreground">{t.role}</div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-6">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === activeIndex
                    ? "bg-blue-500 w-6"
                    : "bg-white/20 hover:bg-white/40"
                }`}
                data-testid={`testimonial-dot-${i}`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 lg:py-28 relative overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
      <div className="absolute top-[-50px] right-[-50px] w-[400px] h-[400px] bg-white/5 rounded-full blur-3xl animate-glow-pulse" />
      <div className="absolute bottom-[-80px] left-[-40px] w-[350px] h-[350px] bg-cyan-400/5 rounded-full blur-3xl animate-glow-pulse" style={{ animationDelay: "-1.5s" }} />
      <div className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-white/3 rounded-full blur-[200px]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your AI Revenue Machine?
          </h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">
            Join 500+ businesses already using AI automation to generate more customers and revenue. Book a free strategy session today.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link href="/book-demo">
              <Button className="bg-white text-blue-700 border-0" data-testid="button-cta-book-demo">
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
      <ServicesCarouselSection />
      <PortfolioPreviewSection />
      <PricingPreviewSection />
      <TestimonialsSlider />
      <CTASection />
    </div>
  );
}
