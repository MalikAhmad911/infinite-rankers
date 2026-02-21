import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { SERVICE_CATEGORIES } from "@/lib/constants";
import {
  ArrowRight, Bot, Target, Globe, Zap, Phone, Headphones, UserCheck,
  CalendarCheck, MailCheck, TrendingUp, MessageSquare, Mail, Smartphone,
  Database, Workflow, Search, Megaphone, BarChart3, MapPin, Filter,
  MousePointer, Percent, Camera, ThumbsUp, FileText, Palette, Video,
  Monitor, Layout, Settings, Plug, PieChart, Code, Share2,
} from "lucide-react";

const iconMap: Record<string, any> = {
  Bot, Target, Globe, Zap, Phone, Headphones, UserCheck, CalendarCheck,
  MailCheck, TrendingUp, MessageSquare, Mail, Smartphone, Database,
  Workflow, Search, Megaphone, BarChart3, MapPin, Filter, MousePointer,
  Percent, Camera, ThumbsUp, FileText, Palette, Video, Monitor, Layout,
  Settings, Plug, PieChart, Code, Share2,
};

const catIcons: Record<string, any> = {
  "ai-automation": Bot,
  "lead-generation": Target,
  "social-content": Share2,
  "development": Code,
};

export default function Services() {
  return (
    <div className="overflow-x-hidden">
      <SEOHead
        title="Services - Infinite Rankers | AI Automation & Revenue Growth"
        description="Explore our complete suite of AI automation, lead generation, social media, and development services designed to grow your revenue."
      />
      <section className="relative pt-32 pb-16 sm:pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
        <div className="absolute top-20 left-10 w-72 h-72 bg-indigo-100/40 rounded-full blur-3xl" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="max-w-3xl mx-auto text-center">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
              Our Services
            </span>
            <h1 className="font-bold text-foreground mb-6 leading-tight" style={{ fontSize: "clamp(1.75rem, 5vw, 3rem)" }}>
              Complete AI Revenue{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Growth Systems</span>
            </h1>
            <p className="text-muted-foreground leading-relaxed" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              From AI automation to lead generation, social media to custom development — every system is designed to generate customers and grow your revenue.
            </p>
          </motion.div>
        </div>
      </section>

      {SERVICE_CATEGORIES.map((cat, catIndex) => {
        const CatIcon = catIcons[cat.id] || Zap;
        return (
          <section
            key={cat.id}
            className={`py-16 sm:py-20 lg:py-24 overflow-hidden ${catIndex % 2 === 1 ? "bg-gradient-to-b from-gray-50/60 to-white" : ""}`}
            data-testid={`section-${cat.id}`}
          >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 mb-10"
              >
                <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                  <CatIcon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h2 className="font-bold text-foreground" style={{ fontSize: "clamp(1.25rem, 3vw, 1.875rem)" }}>{cat.title}</h2>
                  <p className="text-sm sm:text-base text-muted-foreground">{cat.description}</p>
                </div>
              </motion.div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {cat.services.map((service, i) => {
                  const Icon = iconMap[service.icon] || Zap;
                  return (
                    <Link key={service.slug} href={`/${service.slug}`}>
                      <GlassCard delay={i * 0.05} className="cursor-pointer h-full flex flex-col hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                        <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                          <Icon className="w-5 h-5 text-blue-600" />
                        </div>
                        <h3 className="text-base sm:text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">{service.shortDesc}</p>
                        <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 mt-auto">
                          Explore Service <ArrowRight className="w-3 h-3" />
                        </span>
                      </GlassCard>
                    </Link>
                  );
                })}
              </div>
            </div>
          </section>
        );
      })}

      <section className="py-16 sm:py-20 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-purple-700" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-bold text-white mb-6" style={{ fontSize: "clamp(1.5rem, 4vw, 2.25rem)" }}>
              Not Sure Which System You Need?
            </h2>
            <p className="text-white/80 mb-8 max-w-2xl mx-auto" style={{ fontSize: "clamp(0.938rem, 2vw, 1.125rem)" }}>
              Book a free strategy session and we'll build a custom AI revenue plan for your business.
            </p>
            <Link href="/book-demo">
              <Button variant="secondary" className="w-full sm:w-auto" data-testid="button-services-cta">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
