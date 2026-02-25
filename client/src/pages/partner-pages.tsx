import { motion } from "framer-motion";
import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import SEOHead from "@/components/seo-head";
import SectionHeader from "@/components/section-header";
import GlassCard from "@/components/glass-card";
import { GooglePartnerBadge } from "@/components/google-partner-badge";
import {
  ArrowRight, CheckCircle2, Star, ExternalLink,
  Globe, Zap, Target, Shield, Users, Award,
  Brain, Rocket, TrendingUp, BarChart3, Search,
  Cpu, Layers, LineChart, Mail, Phone, MapPin,
  MessageSquare, DollarSign, Clock, Lightbulb,
  PenTool, Share2, Video, Code, Settings, Plug,
  ChevronRight, Building2, Megaphone,
} from "lucide-react";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
};

function HeroSection({ label, title, highlight, description, ctaText, ctaHref }: {
  label: string; title: string; highlight: string; description: string; ctaText: string; ctaHref: string;
}) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50/80 via-blue-50/30 to-white" />
      <div className="absolute top-10 right-10 w-72 h-72 bg-blue-100/40 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-60 h-60 bg-purple-100/30 rounded-full blur-3xl" />
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div {...fadeIn} className="max-w-3xl mx-auto text-center">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mb-3">
            {label}
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-foreground mb-6 leading-tight">
            {title}{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{highlight}</span>
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">{description}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={ctaHref} target="_blank" rel="noopener noreferrer">
              <Button data-testid="button-hero-cta">
                {ctaText} <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <Link href="/book-demo">
              <Button variant="outline" data-testid="button-hero-demo">
                Book Free Strategy Session <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function StatsBanner({ stats }: { stats: { value: string; label: string }[] }) {
  return (
    <section className="py-14 bg-gradient-to-r from-blue-600 to-purple-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((s, i) => (
            <motion.div key={s.label} {...fadeIn} transition={{ delay: i * 0.1 }} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-white mb-1">{s.value}</div>
              <div className="text-sm text-white/80">{s.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection({ title, subtitle, buttonText, href }: { title: string; subtitle: string; buttonText: string; href: string }) {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0B1120] via-[#0F172A] to-[#1E1B4B]" />
      <div className="absolute top-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-blue-600/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-indigo-600/10 rounded-full blur-[120px]" />
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div {...fadeIn}>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-6">{title}</h2>
          <p className="text-lg text-white/80 mb-8 max-w-2xl mx-auto">{subtitle}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href={href} target="_blank" rel="noopener noreferrer">
              <Button variant="secondary" data-testid="button-cta-visit">
                {buttonText} <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </a>
            <Link href="/book-demo">
              <Button variant="outline" className="backdrop-blur bg-white/90 text-gray-900 border-white" data-testid="button-cta-demo">
                Book Free Demo <ArrowRight className="w-4 h-4 ml-1" />
              </Button>
            </Link>
          </div>
          <div className="flex flex-col items-center mt-8">
            <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6 text-white/60 text-xs sm:text-sm">
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Free Strategy Session</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Flexible Plans Available</span>
              <span className="flex items-center gap-1.5"><CheckCircle2 className="w-4 h-4" /> Results in 30 Days</span>
            </div>
            <div className="mt-4">
              <GooglePartnerBadge variant="compact" />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function InfiniteRankersAgency() {
  const services = [
    { icon: Brain, title: "AI Automation & Chatbots", desc: "Custom AI agents, chatbots, and automation workflows that engage leads 24/7 and convert them into paying customers automatically.", link: "https://infiniterankers.com/services" },
    { icon: Target, title: "Google & Meta Ads Management", desc: "Data-driven PPC campaigns across Google and Meta platforms, optimized by AI for maximum ROAS and lead quality.", link: "https://infiniterankers.com/services" },
    { icon: Search, title: "SEO & Content Marketing", desc: "Authority-building SEO strategies, keyword-optimized content, and technical SEO to dominate organic search rankings.", link: "https://infiniterankers.com/blog" },
    { icon: Globe, title: "Website & Funnel Development", desc: "High-converting websites, landing pages, and sales funnels engineered for maximum conversion rates.", link: "https://infiniterankers.com/services" },
    { icon: Share2, title: "Social Media Marketing", desc: "Strategic social media management across Instagram, Facebook, LinkedIn, and TikTok to build brand authority and engagement.", link: "https://infiniterankers.com/services" },
    { icon: Mail, title: "Email & SMS Automation", desc: "AI-powered drip campaigns, nurture sequences, and automated follow-ups that keep leads warm and drive conversions.", link: "https://infiniterankers.com/services" },
  ];

  const reasons = [
    { icon: Cpu, title: "AI-First Approach", desc: "Every solution is built with artificial intelligence at its core, delivering faster results and smarter optimization than traditional agencies." },
    { icon: TrendingUp, title: "Revenue-Focused Results", desc: "We measure success by one metric: your revenue growth. Everything we build directly impacts your bottom line." },
    { icon: Shield, title: "Flexible Plans Available", desc: "Monthly, quarterly, or annual partnerships designed to fit your business goals. Choose the plan that matches your growth ambitions." },
    { icon: Rocket, title: "Results in 30 Days", desc: "Most clients see measurable improvements within the first month. Our proven frameworks are battle-tested across 200+ businesses." },
    { icon: Users, title: "Dedicated Growth Team", desc: "Your own team of AI strategists, marketers, designers, and developers working together to scale your revenue." },
    { icon: Clock, title: "24/7 AI Systems", desc: "Our automation systems work around the clock — nights, weekends, holidays — so you never miss a lead or opportunity." },
  ];

  return (
    <div>
      <SEOHead
        title="Infinite Rankers - AI Revenue Growth Agency | Full-Service Digital Marketing"
        description="Infinite Rankers is a full-service AI revenue growth agency helping 200+ businesses worldwide generate more leads, customers, and revenue with AI-powered marketing automation."
        keywords="Infinite Rankers, AI marketing agency, revenue growth agency, digital marketing, AI automation, lead generation, SEO, PPC, social media marketing"
      />

      <HeroSection
        label="About Infinite Rankers"
        title="Meet Infinite Rankers — The"
        highlight="AI Revenue Growth Agency"
        description="Infinite Rankers is a full-service digital marketing agency that combines artificial intelligence with proven marketing strategies to help businesses generate more leads, customers, and revenue. Serving 200+ businesses across the USA, UK, and worldwide."
        ctaText="Visit infiniterankers.com"
        ctaHref="https://infiniterankers.com"
      />

      <StatsBanner stats={[
        { value: "200+", label: "Clients Worldwide" },
        { value: "$4.8M+", label: "Revenue Generated" },
        { value: "94%", label: "Client Retention" },
        { value: "24/7", label: "AI Systems Active" },
      ]} />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Who We Are"
            title="A Revenue Growth Engine, Not Just an Agency"
            description="Infinite Rankers was founded on a simple belief: businesses shouldn't have to choose between growing revenue and managing complex technology. We combine AI automation with proven marketing systems to create predictable, scalable growth."
          />
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <GlassCard>
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-muted-foreground leading-relaxed">
                To empower every business with AI-driven automation systems that eliminate manual inefficiency and create predictable revenue growth. We believe no business should lose customers because of slow response times, missed follow-ups, or outdated marketing approaches.
              </p>
              <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 mt-4" data-testid="link-mission-com">
                Learn more at infiniterankers.com <ExternalLink className="w-3 h-3" />
              </a>
            </GlassCard>
            <GlassCard delay={0.1}>
              <div className="w-12 h-12 rounded-md bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Our Vision</h3>
              <p className="text-muted-foreground leading-relaxed">
                To become the world's leading AI revenue growth agency, where every business — from local shops to global enterprises — has access to enterprise-grade AI automation that levels the playing field and drives exponential growth.
              </p>
              <a href="https://infiniterankers.com/about" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 mt-4" data-testid="link-vision-com">
                About our team <ExternalLink className="w-3 h-3" />
              </a>
            </GlassCard>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Services"
            title="What Infinite Rankers Provides"
            description="From AI chatbots to paid advertising, SEO to social media — Infinite Rankers offers a complete suite of digital marketing and automation services."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.08}>
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{s.desc}</p>
                <a href={s.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-blue-600" data-testid={`link-service-${i}`}>
                  Explore on infiniterankers.com <ExternalLink className="w-3 h-3" />
                </a>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Why Choose Us"
            title="Why Businesses Trust Infinite Rankers"
            description="We're not just another marketing agency. Here's what makes Infinite Rankers the growth partner of choice for 200+ businesses."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((r, i) => (
              <motion.div key={r.title} {...fadeIn} transition={{ delay: i * 0.08 }}>
                <Card className="p-6 h-full" data-testid={`reason-card-${i}`}>
                  <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center mb-4">
                    <r.icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">{r.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{r.desc}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Our Ecosystem"
            title="Two Platforms, One Unified Agency"
            description="Infinite Rankers operates through two interconnected platforms to deliver maximum value."
          />
          <div className="grid md:grid-cols-2 gap-8">
            <GlassCard glow>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center">
                  <Cpu className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">infiniterankers.io</h3>
                  <p className="text-xs text-muted-foreground">AI Infrastructure & Automation SaaS</p>
                </div>
              </div>
              <ul className="space-y-3">
                {["AI Chatbot & Voice Agent Platform", "CRM Automation & Workflow Builder", "Lead Scoring & Qualification Engine", "Appointment Booking Automation", "Analytics & Performance Dashboards"].map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-blue-500 flex-shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
              <Link href="/services">
                <span className="inline-flex items-center gap-1 text-sm font-medium text-blue-600 mt-4 cursor-pointer">
                  Explore AI Services <ArrowRight className="w-3 h-3" />
                </span>
              </Link>
            </GlassCard>
            <GlassCard glow>
              <div className="flex items-center gap-3 mb-5">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-purple-500 to-pink-600 flex items-center justify-center">
                  <Globe className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">infiniterankers.com</h3>
                  <p className="text-xs text-muted-foreground">Marketing Authority & Content Hub</p>
                </div>
              </div>
              <ul className="space-y-3">
                {["SEO & Content Marketing Strategy", "Google & Meta Ads Management", "Social Media Marketing", "Branding & Creative Design", "Marketing Blog & Resources"].map((f, i) => (
                  <li key={i} className="flex gap-2 text-sm text-muted-foreground"><CheckCircle2 className="w-4 h-4 text-purple-500 flex-shrink-0 mt-0.5" />{f}</li>
                ))}
              </ul>
              <a href="https://infiniterankers.com" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-purple-600 mt-4" data-testid="link-ecosystem-com">
                Visit infiniterankers.com <ExternalLink className="w-3 h-3" />
              </a>
            </GlassCard>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Grow Your Revenue with AI?"
        subtitle="Join 200+ businesses already using Infinite Rankers to generate more leads, customers, and revenue on autopilot."
        buttonText="Visit infiniterankers.com"
        href="https://infiniterankers.com"
      />
    </div>
  );
}

export function InfiniteRankersSEO() {
  const seoServices = [
    { icon: Search, title: "Technical SEO Audits", desc: "Comprehensive site audits covering crawlability, indexation, site speed, Core Web Vitals, schema markup, and technical infrastructure to ensure search engines can discover and rank every page." },
    { icon: PenTool, title: "Content Strategy & Creation", desc: "Keyword-researched, SEO-optimized blog posts, landing pages, and pillar content designed to capture high-intent search traffic and establish topical authority in your industry." },
    { icon: MapPin, title: "Local SEO & Google Business", desc: "Google Business Profile optimization, local citation building, review management, and geo-targeted content to dominate local search results and Google Maps rankings." },
    { icon: Layers, title: "Link Building & Authority", desc: "White-hat link acquisition through digital PR, guest posting, resource page outreach, and content partnerships to build domain authority and improve rankings." },
    { icon: BarChart3, title: "SEO Analytics & Reporting", desc: "Real-time dashboards tracking keyword rankings, organic traffic, conversions, and ROI. Monthly reports with actionable insights and strategic recommendations." },
    { icon: Globe, title: "International & Multi-Location SEO", desc: "Hreflang implementation, international keyword research, and multi-location optimization for businesses targeting audiences across different regions and languages." },
  ];

  const results = [
    { metric: "Organic Traffic", before: "2,500/mo", after: "8,200/mo", increase: "+228%" },
    { metric: "Keyword Rankings", before: "12 on Page 1", after: "42 on Page 1", increase: "+250%" },
    { metric: "Lead Generation", before: "30 leads/mo", after: "95 leads/mo", increase: "+217%" },
    { metric: "Revenue from SEO", before: "$8K/mo", after: "$28K/mo", increase: "+250%" },
  ];

  return (
    <div>
      <SEOHead
        title="Infinite Rankers SEO Services | AI-Powered Search Engine Optimization"
        description="Infinite Rankers provides AI-powered SEO services including technical audits, content strategy, local SEO, and link building. Dominate search rankings with data-driven optimization."
        keywords="Infinite Rankers SEO, SEO services, search engine optimization, local SEO, content marketing, link building, technical SEO, AI SEO"
      />

      <HeroSection
        label="SEO Services"
        title="Dominate Search Rankings with"
        highlight="AI-Powered SEO"
        description="Infinite Rankers combines artificial intelligence with proven SEO methodologies to deliver sustainable organic growth. Our data-driven approach has helped businesses achieve 10x organic traffic increases and dominate their competitive landscapes."
        ctaText="SEO Services at infiniterankers.com"
        ctaHref="https://infiniterankers.com/services"
      />

      <StatsBanner stats={[
        { value: "10x", label: "Avg Traffic Increase" },
        { value: "42+", label: "Page 1 Rankings" },
        { value: "91%", label: "Client ROI Positive" },
        { value: "30 Days", label: "First Results" },
      ]} />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="SEO Solutions"
            title="Complete SEO Services from Infinite Rankers"
            description="Our SEO team uses AI-driven tools and strategies to optimize every aspect of your search presence. Explore the full range of SEO services available at infiniterankers.com."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {seoServices.map((s, i) => (
              <GlassCard key={s.title} delay={i * 0.08}>
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                  <s.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{s.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
              </GlassCard>
            ))}
          </div>
          <motion.div {...fadeIn} className="mt-10 text-center">
            <a href="https://infiniterankers.com/services" target="_blank" rel="noopener noreferrer">
              <Button data-testid="button-seo-explore">
                View All SEO Services at infiniterankers.com <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </motion.div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Proven Results" title="Real SEO Results from Infinite Rankers" description="Data-driven results from businesses that partnered with Infinite Rankers for organic growth." />
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {results.map((r, i) => (
              <motion.div key={r.metric} {...fadeIn} transition={{ delay: i * 0.1 }}>
                <Card className="p-6 text-center" data-testid={`seo-result-${i}`}>
                  <div className="text-sm text-muted-foreground mb-3">{r.metric}</div>
                  <div className="flex items-center justify-center gap-2 mb-3">
                    <span className="text-sm text-red-500 line-through">{r.before}</span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground" />
                    <span className="text-sm font-bold text-emerald-600">{r.after}</span>
                  </div>
                  <Badge variant="secondary" className="text-xs">{r.increase}</Badge>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Process" title="How Infinite Rankers Does SEO" description="A proven 5-step process that delivers consistent organic growth for every client." />
          <div className="max-w-3xl mx-auto space-y-6">
            {[
              { step: "1", title: "Deep Audit & Research", desc: "We analyze your website, competitors, and market to identify the highest-impact SEO opportunities and build a custom strategy." },
              { step: "2", title: "Technical Optimization", desc: "Fix crawl errors, improve site speed, implement schema markup, and ensure your site meets Google's technical standards." },
              { step: "3", title: "Content Strategy & Creation", desc: "AI-assisted keyword research and content creation targeting high-intent search queries your ideal customers are searching for." },
              { step: "4", title: "Authority Building", desc: "Strategic link acquisition and digital PR to build domain authority and establish your brand as an industry leader." },
              { step: "5", title: "Monitor, Optimize, Scale", desc: "Continuous monitoring, A/B testing, and optimization to compound growth and maintain rankings long-term." },
            ].map((s, i) => (
              <motion.div key={s.step} {...fadeIn} transition={{ delay: i * 0.1 }} className="flex gap-4" data-testid={`seo-step-${i}`}>
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                  <span className="text-white font-bold text-sm">{s.step}</span>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">{s.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://infiniterankers.com/blog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600" data-testid="link-seo-blog">
              Read SEO guides on the Infinite Rankers blog <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Dominate Organic Search?"
        subtitle="Get a free SEO audit and custom growth strategy from Infinite Rankers. See exactly how much organic traffic and revenue you're leaving on the table."
        buttonText="Get Free SEO Audit"
        href="https://infiniterankers.com/contact"
      />
    </div>
  );
}

export function InfiniteRankersAds() {
  const platforms = [
    { icon: Search, title: "Google Search Ads", desc: "Capture high-intent buyers actively searching for your products and services. AI-optimized bidding, ad copy, and targeting for maximum Quality Score and lowest CPC.", link: "https://infiniterankers.com/services" },
    { icon: Globe, title: "Google Display & YouTube", desc: "Reach your audience across 3 million+ websites and YouTube with visually compelling display ads and video campaigns optimized for awareness and retargeting.", link: "https://infiniterankers.com/services" },
    { icon: Share2, title: "Meta Ads (Facebook & Instagram)", desc: "Precision-targeted campaigns leveraging Meta's advanced audience tools, AI-generated creatives, and lookalike audiences to drive leads and sales at scale.", link: "https://infiniterankers.com/services" },
    { icon: MapPin, title: "Google Local Service Ads", desc: "Appear at the very top of local search results with Google Guaranteed badges. Perfect for service businesses, contractors, lawyers, and healthcare providers.", link: "https://infiniterankers.com/services" },
    { icon: LineChart, title: "Performance Max Campaigns", desc: "Leverage Google's AI-powered Performance Max to reach customers across Search, Display, YouTube, Gmail, and Maps from a single campaign.", link: "https://infiniterankers.com/services" },
    { icon: Target, title: "Retargeting & Remarketing", desc: "Re-engage website visitors and past customers with personalized ads across Google and Meta. Recover abandoned carts and nurture cold leads into conversions.", link: "https://infiniterankers.com/services" },
  ];

  const metrics = [
    { label: "Average ROAS", value: "15x", desc: "Return on ad spend" },
    { label: "Cost Per Lead", value: "-62%", desc: "Reduction in CPL" },
    { label: "Conversion Rate", value: "+340%", desc: "Increase in CVR" },
    { label: "Revenue Growth", value: "+580%", desc: "Average increase" },
  ];

  return (
    <div>
      <SEOHead
        title="Infinite Rankers Paid Advertising | Google Ads & Meta Ads Management"
        description="Infinite Rankers manages high-performance Google Ads and Meta Ads campaigns using AI optimization. Average 15x ROAS with data-driven PPC management."
        keywords="Infinite Rankers ads, Google Ads management, Meta Ads, Facebook Ads, PPC agency, paid advertising, ad management, ROAS optimization"
      />

      <HeroSection
        label="Paid Advertising"
        title="Maximize Ad ROI with"
        highlight="AI-Optimized Campaigns"
        description="Infinite Rankers manages Google Ads and Meta Ads campaigns that deliver an average 15x return on ad spend. Our AI optimization technology continuously improves targeting, bidding, and creatives to maximize every dollar of your ad budget."
        ctaText="Ad Services at infiniterankers.com"
        ctaHref="https://infiniterankers.com/services"
      />

      <StatsBanner stats={metrics.map(m => ({ value: m.value, label: m.label }))} />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Ad Platforms"
            title="Paid Advertising Platforms We Manage"
            description="Infinite Rankers manages campaigns across all major advertising platforms, optimizing each for maximum performance and ROI."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {platforms.map((p, i) => (
              <GlassCard key={p.title} delay={i * 0.08}>
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                  <p.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{p.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{p.desc}</p>
                <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-blue-600" data-testid={`link-ad-${i}`}>
                  Learn more at infiniterankers.com <ExternalLink className="w-3 h-3" />
                </a>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Our Advantage" title="Why Infinite Rankers Ads Outperform" description="Our AI-powered approach to paid advertising delivers consistently higher results than traditional agencies." />
          <div className="grid md:grid-cols-2 gap-8">
            <div className="space-y-4">
              {[
                "AI bid optimization that adjusts 1000x faster than manual management",
                "Dynamic ad creative testing with AI-generated copy and visuals",
                "Real-time budget allocation across campaigns based on performance",
                "Advanced audience modeling using first-party data and lookalikes",
                "Automated negative keyword management to eliminate wasted spend",
                "Cross-platform attribution tracking for accurate ROI measurement",
                "Google Partner certified team with access to beta features",
              ].map((item, i) => (
                <motion.div key={i} {...fadeIn} transition={{ delay: i * 0.05 }} className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-muted-foreground">{item}</p>
                </motion.div>
              ))}
            </div>
            <div className="space-y-6">
              {metrics.map((m, i) => (
                <motion.div key={m.label} {...fadeIn} transition={{ delay: i * 0.1 }}>
                  <Card className="p-5" data-testid={`metric-card-${i}`}>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-muted-foreground">{m.label}</div>
                        <div className="text-xs text-muted-foreground">{m.desc}</div>
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">{m.value}</div>
                    </div>
                  </Card>
                </motion.div>
              ))}
              <div className="text-center">
                <GooglePartnerBadge variant="inline" />
              </div>
            </div>
          </div>
          <div className="text-center mt-10">
            <a href="https://infiniterankers.com/services" target="_blank" rel="noopener noreferrer">
              <Button data-testid="button-ads-explore">
                Explore Ad Management at infiniterankers.com <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Maximize Your Ad ROI?"
        subtitle="Get a free ad account audit and see exactly how much revenue you're leaving on the table. Our AI optimization can typically reduce cost-per-lead by 40-60%."
        buttonText="Free Ad Audit"
        href="https://infiniterankers.com/contact"
      />
    </div>
  );
}

export function InfiniteRankersAutomation() {
  const automations = [
    { icon: Brain, title: "AI Chatbots & Voice Agents", desc: "Custom-trained AI chatbots and voice agents that engage website visitors, qualify leads, answer questions, and book appointments 24/7 without human intervention.", link: "https://infiniterankers.com/services" },
    { icon: Phone, title: "AI Calling & Receptionist", desc: "AI-powered phone systems that answer calls, route inquiries, schedule appointments, and follow up with leads automatically — never miss a call again.", link: "https://infiniterankers.com/services" },
    { icon: Mail, title: "Email & SMS Drip Campaigns", desc: "AI-personalized email and SMS sequences that nurture leads through the buying journey with perfectly timed, relevant messages that drive conversions.", link: "https://infiniterankers.com/services" },
    { icon: Settings, title: "CRM & Workflow Automation", desc: "End-to-end CRM automation including lead scoring, pipeline management, task assignment, and deal tracking — all running on autopilot.", link: "https://infiniterankers.com/services" },
    { icon: MessageSquare, title: "Lead Qualification & Scoring", desc: "AI algorithms that instantly score and qualify every lead based on behavior, demographics, and engagement — so your sales team only talks to hot prospects.", link: "https://infiniterankers.com/services" },
    { icon: Plug, title: "SaaS & API Integrations", desc: "Seamless integration with 5,000+ tools including Salesforce, HubSpot, Zapier, Slack, Calendly, and more to create unified automation ecosystems.", link: "https://infiniterankers.com/services" },
  ];

  const workflow = [
    { title: "Visitor Lands on Your Website", desc: "AI chatbot immediately engages the visitor with personalized conversation." },
    { title: "Lead is Qualified Automatically", desc: "AI scores the lead based on responses, behavior, and intent signals." },
    { title: "Appointment is Booked Instantly", desc: "Qualified leads are booked directly into your calendar without human intervention." },
    { title: "Follow-Up Sequences Activate", desc: "AI sends personalized email and SMS follow-ups to nurture and convert." },
    { title: "CRM Updates Automatically", desc: "All data syncs to your CRM with full conversation history and lead scores." },
    { title: "Revenue Grows on Autopilot", desc: "The system runs 24/7, continuously generating and converting leads." },
  ];

  return (
    <div>
      <SEOHead
        title="Infinite Rankers AI Automation | Chatbots, CRM & Marketing Automation"
        description="Infinite Rankers builds AI-powered automation systems including chatbots, CRM automation, email sequences, and workflow automation. Automate your entire revenue pipeline."
        keywords="Infinite Rankers automation, AI chatbot, CRM automation, marketing automation, workflow automation, lead qualification, AI voice agent, email automation"
      />

      <HeroSection
        label="AI Automation"
        title="Automate Your Entire Revenue Pipeline with"
        highlight="AI-Powered Systems"
        description="Infinite Rankers builds custom AI automation systems that handle lead generation, qualification, follow-up, and conversion — all on autopilot. Our systems work 24/7 so you can focus on running your business while revenue grows automatically."
        ctaText="Automation at infiniterankers.com"
        ctaHref="https://infiniterankers.com/services"
      />

      <StatsBanner stats={[
        { value: "200+", label: "Automations Built" },
        { value: "5,000+", label: "Tool Integrations" },
        { value: "24/7", label: "Always Running" },
        { value: "< 5 sec", label: "Lead Response Time" },
      ]} />

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            label="Automation Solutions"
            title="AI Automation Services from Infinite Rankers"
            description="From chatbots to CRM automation, email sequences to voice agents — Infinite Rankers provides end-to-end automation that eliminates manual work and scales your revenue."
          />
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {automations.map((a, i) => (
              <GlassCard key={a.title} delay={i * 0.08}>
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-blue-50 to-indigo-50 flex items-center justify-center mb-4">
                  <a.icon className="w-5 h-5 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{a.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-3">{a.desc}</p>
                <a href={a.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-xs font-medium text-blue-600" data-testid={`link-auto-${i}`}>
                  Explore at infiniterankers.com <ExternalLink className="w-3 h-3" />
                </a>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28 bg-gradient-to-b from-gray-50/60 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="How It Works" title="The Infinite Rankers Automation Workflow" description="See how our AI systems create a seamless pipeline from first contact to closed deal — all running automatically." />
          <div className="max-w-3xl mx-auto">
            {workflow.map((w, i) => (
              <motion.div key={w.title} {...fadeIn} transition={{ delay: i * 0.08 }} className="flex gap-4 mb-8 last:mb-0" data-testid={`workflow-step-${i}`}>
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">{i + 1}</span>
                  </div>
                  {i < workflow.length - 1 && <div className="w-0.5 flex-1 bg-gradient-to-b from-blue-300 to-transparent mt-2" />}
                </div>
                <div className="pb-4">
                  <h3 className="font-semibold text-foreground mb-1">{w.title}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{w.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-10">
            <a href="https://infiniterankers.com/services" target="_blank" rel="noopener noreferrer">
              <Button data-testid="button-auto-explore">
                Build Your Automation at infiniterankers.com <ExternalLink className="w-4 h-4 ml-1" />
              </Button>
            </a>
          </div>
        </div>
      </section>

      <section className="py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader label="Industries" title="Industries We Automate" description="Infinite Rankers has built custom automation systems for businesses across dozens of industries." />
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {[
              { icon: Building2, name: "Real Estate" },
              { icon: Megaphone, name: "Marketing Agencies" },
              { icon: Code, name: "SaaS & Tech" },
              { icon: Users, name: "Professional Services" },
              { icon: DollarSign, name: "E-Commerce" },
              { icon: Award, name: "Law Firms" },
              { icon: Globe, name: "Healthcare" },
              { icon: Rocket, name: "Startups" },
            ].map((ind, i) => (
              <motion.div key={ind.name} {...fadeIn} transition={{ delay: i * 0.05 }}>
                <Card className="p-4 text-center" data-testid={`industry-${i}`}>
                  <ind.icon className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <div className="text-sm font-medium text-foreground">{ind.name}</div>
                </Card>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-8">
            <a href="https://infiniterankers.com/blog" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm font-medium text-blue-600" data-testid="link-auto-blog">
              Read automation case studies on the Infinite Rankers blog <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to Automate Your Revenue Growth?"
        subtitle="Book a free strategy session and see how Infinite Rankers can build custom AI automation systems for your business. Most clients see results within 30 days."
        buttonText="Start Automating at infiniterankers.com"
        href="https://infiniterankers.com/contact"
      />
    </div>
  );
}
