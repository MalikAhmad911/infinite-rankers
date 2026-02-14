import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import SEOHead from "@/components/seo-head";
import { Badge } from "@/components/ui/badge";
import {
  Bot, Zap, Target, TrendingUp, ArrowRight, CheckCircle2, Star,
  Globe, Phone, BarChart3, CalendarCheck, DollarSign, Users,
  Sparkles, Shield, Clock, ChevronRight, Activity, Cpu, Database,
  MessageSquare, Mail, LineChart, Layers, ArrowUpRight, Play,
  Network, Workflow, Brain, Rocket, Award, Building2,
} from "lucide-react";
import {
  SERVICE_CATEGORIES, ACHIEVEMENTS, HOW_IT_WORKS_STEPS,
  TESTIMONIALS, CASE_STUDIES, COMPANY,
} from "@/lib/constants";

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

function GradientMeshBackground() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationId: number;
    let time = 0;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    const orbs = [
      { x: 0.2, y: 0.3, r: 300, color: "rgba(99, 102, 241, 0.12)", speed: 0.0003, phase: 0 },
      { x: 0.7, y: 0.2, r: 350, color: "rgba(139, 92, 246, 0.10)", speed: 0.0004, phase: 1 },
      { x: 0.5, y: 0.7, r: 280, color: "rgba(6, 182, 212, 0.08)", speed: 0.0005, phase: 2 },
      { x: 0.8, y: 0.6, r: 320, color: "rgba(59, 130, 246, 0.09)", speed: 0.0003, phase: 3 },
      { x: 0.3, y: 0.8, r: 260, color: "rgba(168, 85, 247, 0.07)", speed: 0.0004, phase: 4 },
    ];

    const animate = () => {
      time += 1;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      orbs.forEach((orb) => {
        const x = canvas.width * (orb.x + Math.sin(time * orb.speed + orb.phase) * 0.08);
        const y = canvas.height * (orb.y + Math.cos(time * orb.speed * 0.7 + orb.phase) * 0.06);
        const gradient = ctx.createRadialGradient(x, y, 0, x, y, orb.r * (canvas.width / 1400));
        gradient.addColorStop(0, orb.color);
        gradient.addColorStop(1, "rgba(0,0,0,0)");
        ctx.fillStyle = gradient;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
      });

      animationId = requestAnimationFrame(animate);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 w-full h-full" style={{ willChange: "transform" }} />;
}

function FloatingGridLines() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "linear-gradient(rgba(99,102,241,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(99,102,241,0.5) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute h-px bg-gradient-to-r from-transparent via-blue-400/20 to-transparent"
          style={{ top: `${20 + i * 15}%`, width: "100%" }}
          animate={{ opacity: [0.1, 0.3, 0.1], x: ["-5%", "5%", "-5%"] }}
          transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: i * 0.5 }}
        />
      ))}
    </div>
  );
}

function LiveDashboard() {
  const [revenue, setRevenue] = useState(47832);
  const [leads, setLeads] = useState(1247);
  const [conversion, setConversion] = useState(12.4);

  useEffect(() => {
    const interval = setInterval(() => {
      setRevenue(prev => prev + Math.floor(Math.random() * 50 + 10));
      setLeads(prev => prev + Math.floor(Math.random() * 3));
      setConversion(prev => Math.min(15, prev + (Math.random() * 0.1 - 0.03)));
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const sparklinePoints = useRef(
    Array.from({ length: 20 }, (_, i) => 30 + Math.sin(i * 0.5) * 15 + Math.random() * 10)
  ).current;

  return (
    <motion.div
      initial={{ opacity: 0, y: 30, rotateY: -5 }}
      animate={{ opacity: 1, y: 0, rotateY: 0 }}
      transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
      className="relative"
      style={{ perspective: "1200px" }}
    >
      <div className="absolute -inset-4 bg-gradient-to-br from-blue-200/30 via-indigo-200/20 to-purple-200/30 rounded-2xl blur-2xl" />
      <div className="relative bg-white/70 backdrop-blur-xl rounded-2xl border border-gray-200/80 shadow-2xl shadow-indigo-200/20 p-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-blue-100/50 to-transparent rounded-bl-full" />

        <div className="flex items-center gap-2 mb-5">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center">
            <Activity className="w-4 h-4 text-white" />
          </div>
          <div className="text-sm font-semibold text-gray-800">AI Revenue Pipeline</div>
          <div className="ml-auto flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span className="text-xs font-medium text-emerald-600">Live</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 mb-5">
          {[
            { label: "Revenue", value: `$${revenue.toLocaleString()}`, change: "+23%", color: "text-blue-600" },
            { label: "Leads", value: leads.toLocaleString(), change: "+18%", color: "text-indigo-600" },
            { label: "Conversion", value: `${conversion.toFixed(1)}%`, change: "+5.2%", color: "text-purple-600" },
          ].map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.8 + i * 0.1 }}
              className="bg-gray-50/80 rounded-lg p-3 border border-gray-100"
              data-testid={`metric-${metric.label.toLowerCase()}`}
            >
              <div className="text-xs text-gray-500 mb-1">{metric.label}</div>
              <div className={`text-lg font-bold ${metric.color} tabular-nums`}>{metric.value}</div>
              <div className="text-xs text-emerald-600 font-medium mt-0.5">{metric.change}</div>
            </motion.div>
          ))}
        </div>

        <div className="bg-gray-50/80 rounded-lg p-4 border border-gray-100 mb-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs font-medium text-gray-500">Revenue Growth</span>
            <span className="text-xs text-emerald-600 font-medium">+34% MoM</span>
          </div>
          <svg viewBox="0 0 200 60" className="w-full h-12">
            <defs>
              <linearGradient id="sparkGrad" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.3" />
                <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0.02" />
              </linearGradient>
            </defs>
            <path
              d={`M0,${60 - sparklinePoints[0]} ${sparklinePoints.map((p, i) => `L${(i / 19) * 200},${60 - p}`).join(" ")} L200,60 L0,60 Z`}
              fill="url(#sparkGrad)"
            />
            <path
              d={`M0,${60 - sparklinePoints[0]} ${sparklinePoints.map((p, i) => `L${(i / 19) * 200},${60 - p}`).join(" ")}`}
              fill="none"
              stroke="rgb(99, 102, 241)"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="space-y-2">
          {HOW_IT_WORKS_STEPS.slice(0, 4).map((step, i) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.0 + i * 0.12 }}
              className="flex items-center gap-3 p-2.5 rounded-lg bg-white/60 border border-gray-100 transition-all duration-300 hover:border-blue-200 hover:bg-blue-50/30 group"
              data-testid={`pipeline-step-${step.step}`}
            >
              <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0 shadow-sm">
                <span className="text-white text-xs font-bold">{step.step}</span>
              </div>
              <span className="text-sm font-medium text-gray-700 flex-1">{step.title}</span>
              {i < 3 ? (
                <ChevronRight className="w-3.5 h-3.5 text-gray-400 group-hover:text-blue-500 transition-colors" />
              ) : (
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
              )}
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
          className="mt-4 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100"
        >
          <div className="flex items-center justify-between gap-2 flex-wrap">
            <span className="text-xs text-gray-500">Projected Monthly Revenue</span>
            <span className="text-sm font-bold text-blue-700">+$48,000</span>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20" data-testid="hero-section">
      <div className="absolute inset-0 bg-gradient-to-b from-white via-blue-50/30 to-indigo-50/40" />
      <GradientMeshBackground />
      <FloatingGridLines />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <Badge variant="secondary" className="mb-6 bg-blue-50 text-blue-700 border-blue-200/60" data-testid="badge-hero-agency">
              <Sparkles className="w-3 h-3 mr-1" /> AI Revenue Growth Agency
            </Badge>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-gray-900 leading-[1.1] mb-6">
              Turn Your Business Into an{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                AI-Powered Revenue Machine
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-xl">
              We build automated systems that generate customers and revenue. Stop chasing leads manually — let AI do the heavy lifting.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="/book-demo">
                <Button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white border-0 shadow-lg shadow-blue-600/20" data-testid="button-hero-book-demo">
                  Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
                </Button>
              </Link>
              <Link href="/services">
                <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-hero-services">
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
                <div key={item.text} className="flex items-center gap-2 text-sm text-gray-500" data-testid={`trust-${item.text.toLowerCase().replace(/\s/g, "-")}`}>
                  <item.icon className="w-4 h-4 text-blue-600" />
                  <span>{item.text}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <div className="hidden lg:block">
            <LiveDashboard />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}

function AchievementsSection() {
  const icons = [Building2, DollarSign, Users, Shield];

  return (
    <section className="py-8 sm:py-10 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 relative overflow-hidden" data-testid="achievements-section">
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
      />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-6">
          {ACHIEVEMENTS.map((a, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={a.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ delay: i * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.03, y: -2 }}
                className="text-center p-3 sm:p-4 rounded-xl bg-white/[0.08] backdrop-blur-sm border border-white/[0.1] hover:bg-white/[0.14] transition-colors duration-300 cursor-default group"
                data-testid={`achievement-${i}`}
              >
                <div className="w-8 h-8 rounded-lg bg-white/[0.12] flex items-center justify-center mx-auto mb-2 group-hover:bg-white/[0.2] transition-colors duration-300">
                  <Icon className="w-4 h-4 text-white/90" />
                </div>
                <div className="text-xl sm:text-2xl lg:text-3xl font-bold text-white mb-0.5 tracking-tight">
                  <AnimatedCounter value={a.value} />
                </div>
                <div className="text-[10px] sm:text-xs text-white/70 font-medium">{a.label}</div>
              </motion.div>
            );
          })}
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
    <section className="py-24 bg-gradient-to-b from-white via-gray-50/50 to-white relative overflow-hidden" data-testid="pipeline-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            AI Growth Infrastructure
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Your Complete Revenue Automation System
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Every component of your growth engine, connected and optimized by AI — from first click to closed deal.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto mb-16">
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px bg-gradient-to-b from-blue-300 via-indigo-300 to-purple-300 -translate-x-1/2" />
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2 overflow-hidden">
            <motion.div
              className="w-full h-8 bg-gradient-to-b from-transparent via-blue-500 to-transparent"
              animate={{ y: ["-100%", "500%"] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            />
          </div>

          <div className="space-y-6 lg:space-y-0 lg:grid lg:grid-cols-1 lg:gap-4">
            {nodes.map((node, i) => (
              <motion.div
                key={node.label}
                initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className={`flex items-center gap-4 ${i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"}`}
                data-testid={`pipeline-node-${i}`}
              >
                <div className={`flex-1 ${i % 2 === 0 ? "lg:text-right" : "lg:text-left"}`}>
                  <div className="bg-white rounded-xl p-5 border border-gray-200/80 shadow-sm hover:shadow-md hover:border-blue-200/60 transition-all duration-300">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${node.color} flex items-center justify-center shadow-sm flex-shrink-0`}>
                        <node.icon className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">{node.label}</h3>
                        <p className="text-sm text-gray-500">{node.desc}</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex w-8 items-center justify-center relative z-10">
                  <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${node.color} ring-4 ring-white shadow-md`} />
                </div>
                <div className="flex-1 hidden lg:block" />
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {integrations.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white border border-gray-200/60 shadow-sm hover:shadow-md hover:border-blue-200/50 transition-all duration-300"
              data-testid={`integration-${item.label.toLowerCase().replace(/\s/g, "-")}`}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center border border-blue-100/50">
                <item.icon className="w-5 h-5 text-blue-600" />
              </div>
              <span className="text-xs font-medium text-gray-600 text-center">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ServicesSection() {
  const iconMap: Record<string, any> = {
    Bot, Globe, ArrowRight, CalendarCheck, DollarSign, Target, Zap,
    Phone, BarChart3, Mail, MessageSquare, Cpu, Database,
  };

  const featuredServices = SERVICE_CATEGORIES.flatMap(cat =>
    cat.services.slice(0, 2).map(s => ({
      ...s,
      category: cat.title,
      categoryColor: cat.id === "ai-automation" ? "blue" : cat.id === "lead-generation" ? "emerald" : cat.id === "social-content" ? "orange" : "violet"
    }))
  );

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/80 to-white" data-testid="services-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Revenue-Generating Systems Built for Growth
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            From AI automation to lead generation, end-to-end solutions that drive measurable results.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {featuredServices.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <Link href={`/services/${service.slug}`}>
                <div
                  className="group bg-white rounded-xl p-5 border border-gray-200/60 shadow-sm hover:shadow-lg hover:border-blue-200/60 transition-all duration-300 cursor-pointer h-full"
                  data-testid={`service-card-${service.slug}`}
                >
                  <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4 border border-blue-100/40">
                    <Zap className="w-5 h-5 text-blue-600" />
                  </div>
                  <div className="text-xs font-medium text-blue-600 mb-1.5">{service.category}</div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{service.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed mb-3 line-clamp-2">{service.shortDesc}</p>
                  <span className="inline-flex items-center text-xs font-medium text-blue-600 group-hover:gap-2 gap-1 transition-all">
                    Learn More <ArrowUpRight className="w-3 h-3" />
                  </span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/services">
            <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-view-all-services">
              View All 30+ Services <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function PortfolioSection() {
  return (
    <section className="py-24 bg-white" data-testid="portfolio-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Real Results for Real Businesses
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            See how our AI systems have transformed businesses across industries.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {CASE_STUDIES.slice(0, 3).map((cs, i) => (
            <motion.div
              key={cs.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl border border-gray-200/80 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden group"
              data-testid={`case-study-card-${cs.id}`}
            >
              <div className="h-2 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
              <div className="p-6">
                <Badge variant="secondary" className="mb-3 text-xs bg-blue-50 text-blue-700 border-blue-200/50" data-testid={`case-study-label-${cs.id}`}>{cs.label}</Badge>
                <h3 className="text-lg font-semibold text-gray-900 mb-2" data-testid={`case-study-title-${cs.id}`}>{cs.title}</h3>
                <p className="text-sm text-gray-500 mb-5">{cs.business}</p>

                <div className="bg-gray-50 rounded-lg p-4 mb-4">
                  <svg viewBox="0 0 200 50" className="w-full h-10 mb-2">
                    <defs>
                      <linearGradient id={`csGrad-${cs.id}`} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="rgb(99, 102, 241)" stopOpacity="0.2" />
                        <stop offset="100%" stopColor="rgb(99, 102, 241)" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d={`M0,45 C30,40 50,35 80,25 S130,10 160,8 S190,12 200,15 L200,50 L0,50 Z`}
                      fill={`url(#csGrad-${cs.id})`}
                    />
                    <path
                      d="M0,45 C30,40 50,35 80,25 S130,10 160,8 S190,12 200,15"
                      fill="none"
                      stroke="rgb(99, 102, 241)"
                      strokeWidth="2"
                      strokeLinecap="round"
                    />
                  </svg>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="text-center p-3 rounded-lg bg-blue-50/80 border border-blue-100/50">
                    <div className="text-lg font-bold text-blue-700" data-testid={`case-study-metric1-${cs.id}`}>{cs.results.metric1}</div>
                    <div className="text-xs text-gray-500">{cs.results.label1}</div>
                  </div>
                  <div className="text-center p-3 rounded-lg bg-indigo-50/80 border border-indigo-100/50">
                    <div className="text-lg font-bold text-indigo-700" data-testid={`case-study-metric2-${cs.id}`}>{cs.results.metric2}</div>
                    <div className="text-xs text-gray-500">{cs.results.label2}</div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link href="/portfolio">
            <Button variant="outline" className="border-gray-300 text-gray-700" data-testid="button-view-portfolio">
              View All Case Studies <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

function TrustSection() {
  const logos = [
    "TechFlow", "DataSync", "CloudVault", "ScaleUp", "GrowthAI",
    "NexGen", "AutoPilot", "RevStream", "PipelineX", "SmartScale",
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/60 to-white overflow-hidden" data-testid="trust-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="text-sm text-gray-500">Trusted by innovative companies worldwide</span>
        </motion.div>
      </div>

      <div className="relative mb-16">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-gray-50 to-transparent z-10 pointer-events-none" />
        <div className="flex gap-12 animate-slide-left" style={{ width: "max-content" }}>
          {[...logos, ...logos, ...logos].map((name, i) => (
            <div key={`${name}-${i}`} className="flex items-center gap-2 px-4 text-gray-400 select-none">
              <Building2 className="w-5 h-5" />
              <span className="text-lg font-semibold whitespace-nowrap">{name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { value: "4500+", label: "Clients Worldwide", icon: Users },
            { value: "$50M+", label: "Revenue Generated", icon: DollarSign },
            { value: "98%", label: "Client Retention", icon: Award },
            { value: "24/7", label: "AI Systems Active", icon: Cpu },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-white border border-gray-200/60 shadow-sm"
              data-testid={`trust-stat-${i}`}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mx-auto mb-3 border border-blue-100/40">
                <stat.icon className="w-5 h-5 text-blue-600" />
              </div>
              <div className="text-2xl font-bold text-gray-900 mb-1">
                <AnimatedCounter value={stat.value} />
              </div>
              <div className="text-sm text-gray-500">{stat.label}</div>
            </motion.div>
          ))}
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
    <section className="py-24 bg-white overflow-hidden" data-testid="testimonials-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Trusted by Revenue-Focused Businesses
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Hear from business owners who transformed their growth with our AI systems.
          </p>
        </motion.div>
      </div>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
        <div className="flex gap-6 animate-slide-left" style={{ width: "max-content", animationDuration: "40s" }}>
          {duplicated.map((t, i) => (
            <div
              key={`${t.name}-${i}`}
              className="w-[350px] flex-shrink-0 bg-white rounded-xl border border-gray-200/80 p-6 shadow-sm"
              data-testid={`testimonial-card-${i}`}
            >
              <div className="flex gap-0.5 mb-3">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <p className="text-sm text-gray-600 leading-relaxed mb-4 italic">
                &ldquo;{t.text}&rdquo;
              </p>
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white text-xs font-bold flex-shrink-0">
                  {t.name.split(" ").map(n => n[0]).join("")}
                </div>
                <div>
                  <div className="text-sm font-semibold text-gray-900">{t.name}</div>
                  <div className="text-xs text-gray-500">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TeamSection() {
  const experts = [
    { name: "AI Automation", desc: "Custom AI agents and chatbots that convert leads 24/7", icon: Brain, stat: "200+ Automations Built" },
    { name: "Revenue Strategy", desc: "Data-driven growth strategies tailored to your business", icon: LineChart, stat: "$2.4M+ Generated" },
    { name: "Ad Management", desc: "Google & Meta campaigns optimized by AI for maximum ROAS", icon: Target, stat: "15x Average ROAS" },
    { name: "Development", desc: "High-converting websites and landing pages that sell", icon: Layers, stat: "500+ Projects Delivered" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white via-blue-50/20 to-white" data-testid="team-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Expertise
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            World-Class AI & Marketing Expertise
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our team combines deep AI technology expertise with proven digital marketing strategies.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {experts.map((expert, i) => (
            <motion.div
              key={expert.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl p-6 border border-gray-200/60 shadow-sm hover:shadow-lg transition-all duration-300 text-center group"
              data-testid={`expert-card-${i}`}
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200/40 group-hover:scale-105 transition-transform">
                <expert.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">{expert.name}</h3>
              <p className="text-sm text-gray-500 mb-4 leading-relaxed">{expert.desc}</p>
              <div className="text-xs font-semibold text-blue-600 bg-blue-50 rounded-full py-1.5 px-3 inline-block">{expert.stat}</div>
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
    { title: "Local Service Business", before: "15 calls/week", after: "87 calls/week", increase: "+480%", metric: "Inbound Calls" },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-gray-50/60 to-white" data-testid="results-gallery-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            Proven Results
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Before & After: The AI Difference
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6">
          {results.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-white rounded-xl border border-gray-200/80 overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              data-testid={`result-card-${i}`}
            >
              <div className="p-6">
                <h3 className="font-semibold text-gray-900 mb-4">{r.title}</h3>
                <div className="flex items-center gap-3 mb-3">
                  <div className="flex-1 text-center p-3 rounded-lg bg-red-50/80 border border-red-100/50">
                    <div className="text-xs text-gray-500 mb-1">Before</div>
                    <div className="text-sm font-bold text-red-600">{r.before}</div>
                  </div>
                  <ArrowRight className="w-4 h-4 text-gray-400 flex-shrink-0" />
                  <div className="flex-1 text-center p-3 rounded-lg bg-emerald-50/80 border border-emerald-100/50">
                    <div className="text-xs text-gray-500 mb-1">After</div>
                    <div className="text-sm font-bold text-emerald-600">{r.after}</div>
                  </div>
                </div>
                <div className="text-center">
                  <span className="inline-block text-lg font-bold text-blue-700 bg-blue-50 rounded-full py-1 px-4">{r.increase}</span>
                  <div className="text-xs text-gray-500 mt-1">{r.metric}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const iconMap: Record<string, any> = {
    Bot, Globe, ArrowRight, CalendarCheck, DollarSign, Target, Zap,
  };

  return (
    <section className="py-24 bg-white" data-testid="how-it-works-section">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-3">
            How It Works
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            From Traffic to Revenue in 5 Steps
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Our AI systems create a seamless pipeline that turns strangers into paying customers automatically.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-7 left-[10%] right-[10%] h-[2px] bg-gradient-to-r from-blue-200/0 via-blue-300 to-purple-200/0" />
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
                    <div className="absolute -inset-2 bg-gradient-to-br from-blue-200/30 to-indigo-200/30 rounded-full blur-xl" />
                    <div className="relative w-14 h-14 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mx-auto mb-4 shadow-lg shadow-blue-200/40">
                      <span className="text-white font-bold text-lg">{step.step}</span>
                    </div>
                  </div>
                  <h3 className="text-sm font-semibold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

function MidCTASection() {
  return (
    <section className="py-16 relative overflow-hidden" data-testid="mid-cta-section">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600" />
      <div className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      />
      <motion.div
        className="absolute -top-20 -right-20 w-80 h-80 bg-white/5 rounded-full blur-3xl"
        animate={{ scale: [1, 1.1, 1], opacity: [0.3, 0.5, 0.3] }}
        transition={{ duration: 5, repeat: Infinity }}
      />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
            Ready to See What AI Can Do for Your Revenue?
          </h2>
          <p className="text-white/80 mb-6 max-w-xl mx-auto">
            Get a free strategy session and custom growth roadmap for your business.
          </p>
          <Link href="/book-demo">
            <Button className="bg-white text-blue-700 border-0 shadow-xl" data-testid="button-mid-cta">
              Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTASection() {
  return (
    <section className="py-28 relative overflow-hidden" data-testid="cta-section">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E1B4B]" />
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-purple-600/5 rounded-full blur-[200px]" />
      </div>
      <div className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,0.5) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-1.5 mb-8 border border-white/10">
            <Rocket className="w-4 h-4 text-blue-400" />
            <span className="text-sm text-blue-200">Limited spots available this month</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Your{" "}
            <span className="bg-gradient-to-r from-blue-400 via-indigo-400 to-purple-400 bg-clip-text text-transparent">
              AI Revenue Machine?
            </span>
          </h2>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            Join 500+ businesses already using AI automation to generate more customers and revenue. Book a free strategy session today.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/book-demo">
              <Button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white border-0 shadow-xl shadow-blue-900/30 px-8" data-testid="button-cta-book-demo">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="outline" className="text-white border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10" data-testid="button-cta-contact">
                Contact Us
              </Button>
            </Link>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-6 mt-10">
            {[
              { icon: Shield, text: "No Long-Term Contracts" },
              { icon: Clock, text: "Results in 30 Days" },
              { icon: CheckCircle2, text: "Money-Back Guarantee" },
            ].map((item) => (
              <div key={item.text} className="flex items-center gap-2 text-sm text-gray-400">
                <item.icon className="w-4 h-4 text-blue-400" />
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
      <AchievementsSection />
      <PipelineSection />
      <ServicesSection />
      <HowItWorksSection />
      <MidCTASection />
      <PortfolioSection />
      <TrustSection />
      <TestimonialsCarousel />
      <TeamSection />
      <ResultsGallery />
      <FinalCTASection />
    </div>
  );
}
