import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { Badge } from "@/components/ui/badge";
import {
  Bot, Zap, Target, TrendingUp, ArrowRight, CheckCircle2, Star,
  Globe, Phone, BarChart3, CalendarCheck, DollarSign, Users,
  Sparkles, Shield, Clock, ChevronRight, Activity, Cpu, Database,
  MessageSquare, Mail, LineChart, Layers, ArrowUpRight,
  Network, Workflow, Brain, Rocket, Award, Building2,
} from "lucide-react";
import {
  SERVICE_CATEGORIES, ACHIEVEMENTS, HOW_IT_WORKS_STEPS,
  TESTIMONIALS, CASE_STUDIES, COMPANY,
} from "@/lib/constants";

function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < 768);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);
  return isMobile;
}

function AnimatedCounter({ value }: { value: string }) {
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

function StripeMeshGradient() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, isMobile ? 1 : 2);
      canvas.width = window.innerWidth * dpr;
      canvas.height = window.innerHeight * dpr;
      canvas.style.width = window.innerWidth + "px";
      canvas.style.height = window.innerHeight + "px";
      ctx.scale(dpr, dpr);
    };
    resize();
    window.addEventListener("resize", resize);

    const w = () => window.innerWidth;
    const h = () => window.innerHeight;

    const blobs = isMobile
      ? [
          { cx: 0.6, cy: 0.15, rx: 180, ry: 220, color: [255, 100, 80], speed: 0.0006, phase: 0, opacity: 0.7 },
          { cx: 0.75, cy: 0.35, rx: 160, ry: 200, color: [255, 60, 140], speed: 0.0005, phase: 1.5, opacity: 0.6 },
          { cx: 0.5, cy: 0.5, rx: 200, ry: 180, color: [120, 80, 255], speed: 0.0004, phase: 3, opacity: 0.5 },
          { cx: 0.8, cy: 0.25, rx: 140, ry: 180, color: [255, 170, 50], speed: 0.0007, phase: 4.5, opacity: 0.55 },
        ]
      : [
          { cx: 0.65, cy: 0.2, rx: 350, ry: 400, color: [255, 100, 80], speed: 0.0004, phase: 0, opacity: 0.75 },
          { cx: 0.80, cy: 0.5, rx: 320, ry: 380, color: [255, 50, 130], speed: 0.0005, phase: 1.2, opacity: 0.70 },
          { cx: 0.55, cy: 0.7, rx: 380, ry: 320, color: [130, 80, 255], speed: 0.0003, phase: 2.4, opacity: 0.55 },
          { cx: 0.90, cy: 0.3, rx: 280, ry: 350, color: [255, 180, 50], speed: 0.0006, phase: 3.6, opacity: 0.60 },
          { cx: 0.70, cy: 0.8, rx: 300, ry: 280, color: [50, 120, 255], speed: 0.0004, phase: 4.8, opacity: 0.45 },
          { cx: 0.85, cy: 0.65, rx: 260, ry: 300, color: [255, 130, 200], speed: 0.0005, phase: 0.8, opacity: 0.50 },
        ];

    const animate = () => {
      time += 1;
      const cw = w();
      const ch = h();
      ctx.clearRect(0, 0, cw, ch);

      blobs.forEach((blob) => {
        const x = cw * (blob.cx + Math.sin(time * blob.speed + blob.phase) * 0.06);
        const y = ch * (blob.cy + Math.cos(time * blob.speed * 0.8 + blob.phase) * 0.05);
        const scaleX = blob.rx + Math.sin(time * blob.speed * 1.3 + blob.phase) * 30;
        const scaleY = blob.ry + Math.cos(time * blob.speed * 0.9 + blob.phase * 0.7) * 25;

        const gradient = ctx.createRadialGradient(x, y, 0, x, y, Math.max(scaleX, scaleY));
        const [r, g, b] = blob.color;
        gradient.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${blob.opacity})`);
        gradient.addColorStop(0.4, `rgba(${r}, ${g}, ${b}, ${blob.opacity * 0.6})`);
        gradient.addColorStop(0.7, `rgba(${r}, ${g}, ${b}, ${blob.opacity * 0.2})`);
        gradient.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`);

        ctx.save();
        ctx.beginPath();
        ctx.ellipse(x, y, scaleX, scaleY, Math.sin(time * blob.speed * 0.5) * 0.3, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fillStyle = gradient;
        ctx.globalCompositeOperation = "screen";
        ctx.fill();
        ctx.restore();
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, [isMobile]);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full pointer-events-none"
      style={{ willChange: "transform" }}
    />
  );
}

function HeroSection() {
  const isMobile = useIsMobile();

  return (
    <section className="relative min-h-[100svh] flex items-center overflow-hidden" data-testid="hero-section">
      <div className="absolute inset-0 bg-[#f6f9fc]" />
      <StripeMeshGradient />
      <div className="absolute inset-0 bg-gradient-to-r from-[#f6f9fc] via-[#f6f9fc]/80 to-transparent md:via-[#f6f9fc]/60 md:to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-white to-transparent" />

      <div className="relative w-full max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-24 pb-16 md:pt-28 md:pb-24">
        <div className="max-w-xl lg:max-w-2xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <p className="text-sm font-medium text-gray-500 mb-4 md:mb-5 tracking-wide" data-testid="badge-hero-agency">
              AI Revenue Growth Agency
            </p>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-[1.15] mb-5 md:mb-6">
              Revenue infrastructure{" "}
              <span className="text-gray-400">to grow your business.</span>
            </h1>
            <p className="text-base sm:text-lg text-gray-500 mb-7 md:mb-8 leading-relaxed max-w-lg">
              Build AI-powered automation, generate qualified leads, and implement custom growth systems — from your first client to your thousandth.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link href="/book-demo">
                <Button
                  className="w-full sm:w-auto bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-lg shadow-blue-600/20 px-6"
                  data-testid="button-hero-book-demo"
                >
                  Get started <ArrowRight className="w-4 h-4 ml-1.5" />
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  variant="outline"
                  className="w-full sm:w-auto border-gray-300 text-gray-700 px-6"
                  data-testid="button-hero-services"
                >
                  Contact sales
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function LogoStripSection() {
  const logos = [
    "TechFlow", "DataSync", "CloudVault", "ScaleUp", "GrowthAI",
    "NexGen", "AutoPilot", "RevStream", "PipelineX", "SmartScale",
  ];

  return (
    <section className="py-8 md:py-10 bg-white border-b border-gray-100 overflow-hidden" data-testid="logo-strip-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-center items-center gap-x-8 gap-y-4 md:gap-x-12">
          {logos.slice(0, 7).map((name) => (
            <div key={name} className="flex items-center gap-1.5 text-gray-300 select-none">
              <Building2 className="w-4 h-4 md:w-5 md:h-5" />
              <span className="text-sm md:text-base font-semibold whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AchievementsSection() {
  return (
    <section className="py-12 md:py-16 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden" data-testid="achievements-section">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {ACHIEVEMENTS.map((a, i) => (
            <motion.div
              key={a.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="text-center"
              data-testid={`achievement-${i}`}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-1 md:mb-2">
                <AnimatedCounter value={a.value} />
              </div>
              <div className="text-xs sm:text-sm text-white/80">{a.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PipelineSection() {
  const nodes = [
    { icon: Brain, label: "AI Control Center", desc: "Centralized intelligence hub", color: "from-blue-500 to-blue-600" },
    { icon: Database, label: "Data Pipeline", desc: "Real-time data processing", color: "from-indigo-500 to-indigo-600" },
    { icon: Cpu, label: "Automation Engine", desc: "Multi-channel automation", color: "from-violet-500 to-violet-600" },
    { icon: Network, label: "Marketing Platforms", desc: "Google, Meta, LinkedIn", color: "from-purple-500 to-purple-600" },
    { icon: TrendingUp, label: "Revenue System", desc: "Predictable growth", color: "from-fuchsia-500 to-pink-500" },
  ];

  const integrations = [
    { icon: MessageSquare, label: "AI Chatbots" },
    { icon: Phone, label: "AI Calling" },
    { icon: Mail, label: "Email Automation" },
    { icon: BarChart3, label: "Analytics" },
    { icon: Target, label: "Ad Platforms" },
    { icon: Workflow, label: "CRM Systems" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden" data-testid="pipeline-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-3">
            AI Growth Infrastructure
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Your Complete Revenue Automation System
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Every component of your growth engine, connected and optimized by AI.
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-5 max-w-2xl mx-auto mb-10 md:mb-16">
          {nodes.map((node, i) => (
            <motion.div
              key={node.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="bg-white rounded-xl p-4 md:p-5 border border-gray-200/80 shadow-sm"
              data-testid={`pipeline-node-${i}`}
            >
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                  <node.icon className="w-5 h-5 text-white" />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-gray-900 text-sm md:text-base">{node.label}</h3>
                  <p className="text-xs md:text-sm text-gray-500">{node.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-300 flex-shrink-0 ml-auto" />
              </div>
            </motion.div>
          ))}
        </div>

        <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
          {integrations.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.05 }}
              className="flex flex-col items-center gap-2 p-3 md:p-4 rounded-xl bg-white border border-gray-200/60 shadow-sm"
              data-testid={`integration-${item.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100/50">
                <item.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <span className="text-[10px] md:text-xs font-medium text-gray-600 text-center leading-tight">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const featuredServices = SERVICE_CATEGORIES.flatMap(cat =>
    cat.services.slice(0, 2).map(s => ({
      ...s,
      category: cat.title,
    }))
  );

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/80 to-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-3">
            Our Services
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Revenue-Generating Systems Built for Growth
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            From AI automation to lead generation, end-to-end solutions that drive measurable results.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {featuredServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.04 }}
            >
              <Link href={`/services/${service.slug}`}>
                <div
                  className="group bg-white rounded-xl p-4 md:p-5 border border-gray-200/60 shadow-sm hover:shadow-lg hover:border-blue-200/60 transition-all duration-300 cursor-pointer h-full"
                  data-testid={`service-card-${service.slug}`}
                >
                  <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-3 md:mb-4 border border-blue-100/40">
                    <Zap className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
                  </div>
                  <div className="text-[10px] md:text-xs font-medium text-blue-600 mb-1 md:mb-1.5">{service.category}</div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-1.5 md:mb-2 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-2 md:mb-3 line-clamp-2">{service.shortDesc}</p>
                  <span className="inline-flex items-center text-xs font-medium text-blue-600 gap-1">
                    Learn More <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link href="/services">
            <Button variant="outline" className="border-gray-300 text-gray-700 w-full sm:w-auto" data-testid="button-view-all-services">
              View All 30+ Services <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section className="py-16 md:py-24 bg-white" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-3">
            How It Works
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            From Traffic to Revenue in 5 Steps
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            Our AI systems turn strangers into paying customers automatically.
          </p>
        </motion.div>

        <div className="space-y-4 md:space-y-0 md:grid md:grid-cols-5 md:gap-6">
          {HOW_IT_WORKS_STEPS.map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
              className="flex md:flex-col items-start md:items-center gap-4 md:gap-0 md:text-center"
              data-testid={`how-it-works-step-${step.step}`}
            >
              <div className="w-11 h-11 md:w-14 md:h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-lg shadow-blue-200/40 md:mb-4">
                <span className="text-white font-bold text-sm md:text-lg">{step.step}</span>
              </div>
              <div className="min-w-0">
                <h3 className="text-sm font-semibold text-gray-900 mb-1 md:mb-2">{step.title}</h3>
                <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MidCTASection() {
  return (
    <section className="py-12 md:py-16 relative overflow-hidden" data-testid="mid-cta-section">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
        >
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3 md:mb-4">
            Ready to See What AI Can Do for Your Revenue?
          </h2>
          <p className="text-white/80 mb-5 md:mb-6 text-sm md:text-base max-w-xl mx-auto">
            Get a free strategy session and custom growth roadmap for your business.
          </p>
          <Link href="/book-demo">
            <Button className="bg-white text-blue-700 border-0 shadow-xl w-full sm:w-auto" data-testid="button-mid-cta">
              Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="py-16 md:py-24 bg-white" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-3">
            Results
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-gray-600 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
            See how our AI systems have transformed businesses across industries.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {CASE_STUDIES.slice(0, 3).map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl border border-gray-200/80 shadow-sm overflow-hidden"
              data-testid={`case-study-card-${cs.id}`}
            >
              <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              <div className="p-5 md:p-6">
                <Badge variant="secondary" className="mb-2 md:mb-3 text-xs bg-blue-50 text-blue-700 border-blue-200/50" data-testid={`case-study-label-${cs.id}`}>{cs.label}</Badge>
                <h3 className="text-base md:text-lg font-semibold text-gray-900 mb-1.5 md:mb-2" data-testid={`case-study-title-${cs.id}`}>{cs.title}</h3>
                <p className="text-xs md:text-sm text-gray-500 mb-4 md:mb-5">{cs.business}</p>

                <div className="grid grid-cols-2 gap-2 md:gap-3">
                  <div className="text-center p-2.5 md:p-3 rounded-lg bg-blue-50/80 border border-blue-100/50">
                    <div className="text-base md:text-lg font-bold text-blue-700" data-testid={`case-study-metric1-${cs.id}`}>{cs.results.metric1}</div>
                    <div className="text-[10px] md:text-xs text-gray-500">{cs.results.label1}</div>
                  </div>
                  <div className="text-center p-2.5 md:p-3 rounded-lg bg-indigo-50/80 border border-indigo-100/50">
                    <div className="text-base md:text-lg font-bold text-indigo-700" data-testid={`case-study-metric2-${cs.id}`}>{cs.results.metric2}</div>
                    <div className="text-[10px] md:text-xs text-gray-500">{cs.results.label2}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 md:mt-10">
          <Link href="/portfolio">
            <Button variant="outline" className="border-gray-300 text-gray-700 w-full sm:w-auto" data-testid="button-view-portfolio">
              View All Case Studies <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TestimonialsCarousel() {
  const extendedTestimonials = [
    ...TESTIMONIALS,
    { name: "David Park", role: "CEO, TechVentures", text: "The ROI we've seen from their AI automation is incredible. Our lead response time went from hours to seconds.", rating: 5 },
    { name: "Lisa Chen", role: "VP Marketing, GrowthCo", text: "They transformed our entire marketing funnel. Revenue is up 3x in just 6 months.", rating: 5 },
  ];
  const duplicated = [...extendedTestimonials, ...extendedTestimonials];

  return (
    <section className="py-16 md:py-24 bg-gray-50/60 overflow-hidden" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 mb-8 md:mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-3">
            Testimonials
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Trusted by Revenue-Focused Businesses
          </h2>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-12 md:w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 md:w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-4 md:gap-6 animate-slide-left" style={{ width: "max-content", animationDuration: "40s" }}>
          {duplicated.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[280px] md:w-[350px] flex-shrink-0 bg-white rounded-xl border border-gray-200/80 p-4 md:p-6 shadow-sm"
              data-testid={`testimonial-card-${i}`}
            >
              <div className="flex gap-0.5 mb-2 md:mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-3.5 h-3.5 md:w-4 md:h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-xs md:text-sm text-gray-600 leading-relaxed mb-3 md:mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-2.5 md:gap-3">
                <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-[10px] md:text-xs font-bold flex-shrink-0">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-xs md:text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-[10px] md:text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TrustStatsSection() {
  const stats = [
    { value: "500+", label: "Clients Worldwide", icon: Users },
    { value: "$2.4M+", label: "Revenue Generated", icon: DollarSign },
    { value: "98%", label: "Client Retention", icon: Award },
    { value: "24/7", label: "AI Systems Active", icon: Cpu },
  ];

  return (
    <section className="py-16 md:py-20 bg-white" data-testid="trust-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08 }}
              className="text-center p-4 md:p-6 rounded-xl bg-white border border-gray-200/60 shadow-sm"
              data-testid={`trust-stat-${i}`}
            >
              <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mx-auto mb-2 md:mb-3 border border-blue-100/40">
                <stat.icon className="w-4 h-4 md:w-5 md:h-5 text-blue-600" />
              </div>
              <div className="text-xl md:text-2xl font-bold text-gray-900 mb-0.5 md:mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-[10px] md:text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const experts = [
    { name: "AI Automation", desc: "Custom AI agents and chatbots that convert leads 24/7", icon: Brain, stat: "200+ Built" },
    { name: "Revenue Strategy", desc: "Data-driven growth strategies for your business", icon: LineChart, stat: "$2.4M+ Generated" },
    { name: "Ad Management", desc: "Google & Meta campaigns optimized for maximum ROAS", icon: Target, stat: "15x Avg ROAS" },
    { name: "Development", desc: "High-converting websites and landing pages", icon: Layers, stat: "500+ Delivered" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-white via-blue-50/20 to-white" data-testid="team-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-3">
            Expertise
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            World-Class AI & Marketing Expertise
          </h2>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {experts.map((expert, i) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl p-4 md:p-6 border border-gray-200/60 shadow-sm text-center"
              data-testid={`expert-card-${i}`}
            >
              <div className="w-12 h-12 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-3 md:mb-4 shadow-lg shadow-blue-200/40">
                <expert.icon className="w-5 h-5 md:w-7 md:h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-1.5 md:mb-2">{expert.name}</h3>
              <p className="text-[10px] md:text-sm text-gray-500 mb-3 md:mb-4 leading-relaxed">{expert.desc}</p>
              <div className="text-[10px] md:text-xs font-semibold text-blue-600 bg-blue-50 rounded-full py-1 px-2.5 md:py-1.5 md:px-3 inline-block">{expert.stat}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ResultsGallery() {
  const results = [
    { title: "E-Commerce Revenue", before: "$12K/mo", after: "$89K/mo", increase: "+642%", metric: "Monthly Revenue" },
    { title: "SaaS Lead Generation", before: "50 leads/mo", after: "340 leads/mo", increase: "+580%", metric: "Qualified Leads" },
    { title: "Local Service Business", before: "15 calls/wk", after: "87 calls/wk", increase: "+480%", metric: "Inbound Calls" },
  ];

  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="results-gallery-section">
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className="text-center mb-10 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 md:mb-3">
            Proven Results
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 md:mb-4">
            Before & After: The AI Difference
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          {results.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ delay: i * 0.08 }}
              className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-sm"
              data-testid={`result-card-${i}`}
            >
              <div className="p-4 md:p-6">
                <h3 className="font-semibold text-gray-900 text-sm md:text-base mb-3 md:mb-4">{r.title}</h3>
                <div className="flex items-center gap-2 md:gap-3 mb-3">
                  <div className="flex-1 text-center p-2 md:p-3 rounded-lg bg-red-50/80 border border-red-100/50">
                    <div className="text-[10px] md:text-xs text-gray-500 mb-0.5">Before</div>
                    <div className="text-xs md:text-sm font-bold text-red-600">{r.before}</div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 md:w-4 md:h-4 text-gray-400 flex-shrink-0" />
                  <div className="flex-1 text-center p-2 md:p-3 rounded-lg bg-emerald-50/80 border border-emerald-100/50">
                    <div className="text-[10px] md:text-xs text-gray-500 mb-0.5">After</div>
                    <div className="text-xs md:text-sm font-bold text-emerald-600">{r.after}</div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block text-sm md:text-lg font-bold text-blue-700 bg-blue-50 rounded-full py-1 px-3 md:px-4">{r.increase}</span>
                  <div className="text-[10px] md:text-xs text-gray-500 mt-1">{r.metric}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E1B4B]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-60 h-60 md:w-96 md:h-96 bg-blue-600/10 rounded-full blur-[80px] md:blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-60 h-60 md:w-96 md:h-96 bg-indigo-600/10 rounded-full blur-[80px] md:blur-[120px]" />
      </div>
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-3 py-1 md:px-4 md:py-1.5 mb-6 md:mb-8 border border-white/10">
            <Rocket className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
            <span className="text-xs md:text-sm text-blue-200">Limited spots available this month</span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4 md:mb-6 leading-tight">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Revenue Machine?
            </span>
          </h2>
          <p className="text-sm md:text-lg text-gray-300 mb-6 md:mb-8 max-w-2xl mx-auto">
            Join 500+ businesses already using AI automation to generate more customers and revenue.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3 md:gap-4">
            <Link href="/book-demo">
              <Button className="w-full sm:w-auto bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-xl shadow-blue-900/30 px-6 md:px-8" data-testid="button-cta-book-demo">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="w-full sm:w-auto text-white border-white/20 bg-white/5 backdrop-blur-sm" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="flex flex-col sm:flex-row justify-center items-center gap-3 sm:gap-6 mt-8 md:mt-10">
            {[
              { icon: Shield, text: "No Long-Term Contracts" },
              { icon: Clock, text: "Results in 30 Days" },
              { icon: CheckCircle2, text: "Money-Back Guarantee" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-xs md:text-sm text-gray-400">
                <item.icon className="w-3.5 h-3.5 md:w-4 md:h-4 text-blue-400" />
                <span>{item.text}</span>
              </div>
            ))}
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
      <LogoStripSection />
      <AchievementsSection />
      <PipelineSection />
      <ServicesSection />
      <HowItWorksSection />
      <MidCTASection />
      <PortfolioSection />
      <TestimonialsCarousel />
      <TrustStatsSection />
      <TeamSection />
      <ResultsGallery />
      <FinalCTASection />
    </div>
  );
}
