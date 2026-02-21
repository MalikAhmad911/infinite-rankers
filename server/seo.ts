const BASE = "https://infiniterankers.io";
const BRAND = "Infinite Rankers";

interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const SERVICES = [
  { slug: "ai-calling-agent", title: "AI Calling Agent", desc: "Automated outbound and inbound calls that qualify leads and book appointments around the clock.", faqs: [{ q: "Does the AI calling agent sound robotic?", a: "No. Our AI uses advanced natural language processing to deliver human-like conversations with natural pauses, tone variation, and contextual responses." }, { q: "How many calls can the AI agent handle simultaneously?", a: "There is no practical limit. The AI agent can handle hundreds of concurrent calls, ensuring you never miss an opportunity." }, { q: "Does it integrate with my existing phone system?", a: "Yes. We integrate with all major VoIP providers, phone systems, and can provision dedicated numbers." }] },
  { slug: "ai-receptionist", title: "AI Receptionist", desc: "Never miss a call again. AI answers, qualifies, and routes every inquiry instantly.", faqs: [{ q: "Can the AI receptionist handle after-hours calls?", a: "Yes. It operates 24/7, ensuring every call is answered professionally regardless of time." }, { q: "How does it route calls to the right department?", a: "It uses intelligent routing logic based on caller intent, keywords, and your custom rules." }, { q: "Can it schedule appointments directly?", a: "Yes. It integrates with your calendar system to book appointments in real-time." }] },
  { slug: "ai-lead-qualification", title: "AI Lead Qualification Bot", desc: "Automatically score and qualify leads so your sales team only talks to buyers.", faqs: [{ q: "How does the AI qualify leads?", a: "It asks pre-configured qualifying questions, scores responses, and only passes leads that meet your criteria." }, { q: "Can I customize the qualification criteria?", a: "Yes. You define the exact criteria, questions, and scoring thresholds for your business." }, { q: "Does it integrate with my CRM?", a: "Yes. Qualified leads are automatically pushed to your CRM with full qualification data." }] },
  { slug: "ai-appointment-booking", title: "AI Appointment Booking System", desc: "Let AI fill your calendar with qualified prospects while you focus on closing.", faqs: [{ q: "Does it sync with my existing calendar?", a: "Yes. It syncs with Google Calendar, Outlook, Calendly, and all major scheduling platforms." }, { q: "Can it handle rescheduling and cancellations?", a: "Yes. The AI manages the full booking lifecycle including confirmations, reminders, and rescheduling." }, { q: "Does it send appointment reminders?", a: "Yes. Automated reminders via SMS, email, and voice to minimize no-shows." }] },
  { slug: "ai-follow-up", title: "AI Follow-Up Automation", desc: "Never lose a lead to poor follow-up. AI nurtures every prospect automatically.", faqs: [{ q: "How quickly does the AI follow up with leads?", a: "Instantly. Leads receive their first follow-up within seconds of inquiry." }, { q: "What channels does it use for follow-up?", a: "Email, SMS, voice calls, and messaging apps — all coordinated in intelligent sequences." }, { q: "Can I customize the follow-up sequences?", a: "Yes. You control the messaging, timing, and escalation rules." }] },
  { slug: "ai-sales-assistant", title: "AI Sales Assistant", desc: "AI-powered sales support that helps your team close more deals faster.", faqs: [{ q: "Does the AI replace my sales team?", a: "No. It augments your team by handling research, follow-ups, and data entry so they focus on closing." }, { q: "Can it generate proposals and quotes?", a: "Yes. It can draft proposals, quotes, and follow-up emails based on conversation context." }, { q: "How does it learn my sales process?", a: "We train it on your sales playbook, objection handling, and winning patterns." }] },
  { slug: "ai-chatbot", title: "AI Chatbot", desc: "Website, WhatsApp, and Messenger chatbot that engages visitors 24/7.", faqs: [{ q: "Which platforms does the chatbot support?", a: "Website, WhatsApp, Facebook Messenger, Instagram DMs, and SMS." }, { q: "Can the chatbot handle complex conversations?", a: "Yes. It uses advanced NLP to understand context and handle multi-turn conversations." }, { q: "How long does setup take?", a: "Most chatbots are live within 5-7 business days including training and testing." }] },
  { slug: "ai-email-automation", title: "AI Email Automation", desc: "Smart email sequences that adapt to prospect behavior and maximize replies.", faqs: [{ q: "How does AI improve email campaigns?", a: "AI optimizes subject lines, send times, content, and follow-up triggers based on recipient behavior." }, { q: "Can it personalize emails at scale?", a: "Yes. Each email is dynamically personalized using prospect data and behavioral signals." }, { q: "What email platforms do you integrate with?", a: "We integrate with all major ESPs including Mailchimp, ActiveCampaign, HubSpot, and more." }] },
  { slug: "ai-sms-automation", title: "AI SMS Automation", desc: "High-response SMS campaigns powered by AI for instant engagement.", faqs: [{ q: "Is SMS marketing still effective?", a: "Yes. SMS has 98% open rates and 45% response rates — far higher than email." }, { q: "Is it compliant with regulations?", a: "Yes. We ensure full TCPA compliance with opt-in/opt-out management." }, { q: "Can it handle two-way conversations?", a: "Yes. The AI manages intelligent two-way SMS conversations." }] },
  { slug: "crm-automation", title: "CRM Automation", desc: "Automate your entire CRM workflow from lead entry to deal closure.", faqs: [{ q: "Which CRMs do you support?", a: "We work with Salesforce, HubSpot, Zoho, Pipedrive, GoHighLevel, and most major CRMs." }, { q: "Will automation break my existing workflows?", a: "No. We build around your existing processes and enhance them without disruption." }, { q: "How much time does CRM automation save?", a: "Most teams save 15-20 hours per week on manual data entry and follow-up tasks." }] },
  { slug: "workflow-automation", title: "Workflow Automation", desc: "Connect and automate every tool in your sales and marketing stack.", faqs: [{ q: "How many tools can you connect?", a: "We integrate with 5,000+ apps through native integrations and automation platforms." }, { q: "Do I need technical knowledge?", a: "No. We handle all the technical setup, testing, and maintenance." }, { q: "What ROI can I expect?", a: "Most clients see 3-5x ROI within the first 90 days through time savings and increased efficiency." }] },
  { slug: "google-ads", title: "Google Ads Revenue Engine", desc: "Data-driven Google Ads campaigns that maximize ROI and revenue.", faqs: [{ q: "What ROAS can I expect from Google Ads?", a: "Our clients typically achieve 4-6x ROAS within the first 90 days of optimization." }, { q: "How much should I budget for Google Ads?", a: "We recommend a minimum of $2,000/month in ad spend for meaningful results." }, { q: "How quickly will I see results?", a: "Most campaigns show significant improvement within 30-60 days." }] },
  { slug: "meta-ads", title: "Meta Ads Growth Engine", desc: "Facebook and Instagram advertising that generates qualified leads at scale.", faqs: [{ q: "Are Facebook ads still effective?", a: "Yes. Meta platforms have 3.7 billion users and remain the most cost-effective lead generation channels." }, { q: "What types of businesses benefit most?", a: "Local services, e-commerce, SaaS, healthcare, real estate, and B2C businesses see the best results." }, { q: "Do you handle creative and copy?", a: "Yes. We create all ad creatives, copy, and landing pages as part of our service." }] },
  { slug: "seo-authority", title: "SEO Authority Growth System", desc: "Dominate search rankings and build organic traffic that converts.", faqs: [{ q: "How long does SEO take to show results?", a: "Most clients see meaningful ranking improvements within 3-6 months." }, { q: "Do you guarantee first-page rankings?", a: "We don't guarantee specific positions, but our track record shows 90%+ of clients achieve page-one rankings for target keywords." }, { q: "What's included in your SEO service?", a: "Technical SEO, on-page optimization, content strategy, link building, and monthly reporting." }] },
  { slug: "local-seo", title: "Local SEO & Google Business", desc: "Own your local market with optimized Google Business and local search presence.", faqs: [{ q: "How important is Google Business Profile?", a: "Critical. 46% of all Google searches are looking for local information, and GBP is the primary driver." }, { q: "Can you help with review management?", a: "Yes. We implement review generation systems and manage your online reputation." }, { q: "Do you optimize for map pack results?", a: "Yes. Map pack optimization is a core part of our local SEO strategy." }] },
  { slug: "conversion-funnels", title: "Conversion Funnel Building", desc: "Multi-step funnels designed to turn cold traffic into paying customers.", faqs: [{ q: "What conversion rates can I expect?", a: "Our funnels typically achieve 15-35% opt-in rates and 3-8% purchase conversion rates." }, { q: "How many funnel stages do you build?", a: "We build complete funnels from awareness to purchase, typically 4-7 stages." }, { q: "Do you A/B test the funnels?", a: "Yes. Continuous testing and optimization is built into every funnel." }] },
  { slug: "landing-page-optimization", title: "Landing Page Optimization", desc: "High-converting landing pages that turn visitors into leads and revenue.", faqs: [{ q: "What makes a high-converting landing page?", a: "Clear value proposition, strong CTA, social proof, fast load times, and mobile optimization." }, { q: "How much can conversion rates improve?", a: "We typically achieve 50-200% improvement in conversion rates through optimization." }, { q: "Do you provide ongoing optimization?", a: "Yes. We continuously test and improve landing pages based on data." }] },
  { slug: "conversion-rate-optimization", title: "Conversion Rate Optimization", desc: "Data-backed testing and optimization to maximize every visitor's value.", faqs: [{ q: "How do you test changes?", a: "We use A/B testing, multivariate testing, and user behavior analysis to validate improvements." }, { q: "What tools do you use for CRO?", a: "Google Optimize, Hotjar, Crazy Egg, and proprietary AI analysis tools." }, { q: "How long does a CRO program take?", a: "CRO is ongoing, but most clients see significant improvements within 60-90 days." }] },
  { slug: "social-media-marketing", title: "Social Media Marketing", desc: "Strategic social presence across platforms to build brand authority.", faqs: [{ q: "Which platforms do you manage?", a: "Instagram, Facebook, LinkedIn, TikTok, Twitter/X, and YouTube." }, { q: "How often do you post?", a: "We typically create 12-20 posts per month across platforms, customized to your strategy." }, { q: "Do you handle community management?", a: "Yes. We manage comments, DMs, and community engagement as part of our service." }] },
  { slug: "instagram-growth", title: "Instagram Growth & Posting", desc: "Consistent, engaging Instagram content that grows your audience organically.", faqs: [{ q: "How fast can I grow my Instagram?", a: "Most clients see 500-2,000 new targeted followers per month through organic strategies." }, { q: "Do you create all the content?", a: "Yes. We handle content creation, scheduling, hashtag strategy, and engagement." }, { q: "Do you use bots or fake followers?", a: "Never. We only use organic growth strategies that build real, engaged audiences." }] },
  { slug: "facebook-growth", title: "Facebook Growth & Posting", desc: "Facebook content strategy that builds community and drives leads.", faqs: [{ q: "Is Facebook still relevant for business?", a: "Yes. Facebook has 3 billion users and remains the largest social platform for business." }, { q: "Do you manage Facebook Groups?", a: "Yes. We can create and manage branded Facebook Groups to build community." }, { q: "How do you measure Facebook ROI?", a: "We track engagement, reach, lead generation, and revenue attribution from Facebook." }] },
  { slug: "content-writing", title: "Content Writing & Strategy", desc: "Authority-building content that positions you as the industry leader.", faqs: [{ q: "What types of content do you create?", a: "Blog posts, articles, whitepapers, case studies, email copy, and social media content." }, { q: "How do you ensure content quality?", a: "Every piece goes through research, writing, editing, and SEO optimization before publishing." }, { q: "Can you write for technical industries?", a: "Yes. Our writers specialize in various industries including tech, healthcare, legal, and finance." }] },
  { slug: "branding-design", title: "Branding & Creative Design", desc: "Premium brand identity that commands trust and recognition.", faqs: [{ q: "What's included in a branding package?", a: "Logo design, color palette, typography, brand guidelines, and collateral templates." }, { q: "How long does a branding project take?", a: "Typically 2-4 weeks from discovery to final deliverables." }, { q: "Can you rebrand an existing business?", a: "Yes. We handle both new brand creation and strategic rebranding." }] },
  { slug: "video-marketing", title: "Short Form Video Marketing", desc: "Scroll-stopping video content optimized for engagement and reach.", faqs: [{ q: "What platforms do you create videos for?", a: "TikTok, Instagram Reels, YouTube Shorts, and Facebook Stories." }, { q: "How many videos do you produce monthly?", a: "Typically 8-20 short-form videos per month depending on your plan." }, { q: "Do you handle filming and editing?", a: "Yes. We manage the complete production process from concept to final edit." }] },
  { slug: "website-development", title: "Website Development", desc: "High-performance websites designed for conversion and growth.", faqs: [{ q: "What platforms do you build on?", a: "We build custom solutions using React, Next.js, WordPress, and Shopify depending on your needs." }, { q: "How long does a website take to build?", a: "Typically 4-8 weeks from design approval to launch." }, { q: "Do you provide hosting and maintenance?", a: "Yes. We offer managed hosting, security updates, and ongoing maintenance." }] },
  { slug: "landing-page-development", title: "Landing Page Development", desc: "Fast, responsive landing pages built to convert traffic into leads.", faqs: [{ q: "How fast can you build a landing page?", a: "We can deliver high-converting landing pages in 3-5 business days." }, { q: "Are landing pages mobile-optimized?", a: "Yes. Every landing page is fully responsive and optimized for mobile devices." }, { q: "Do you include A/B testing?", a: "Yes. We set up A/B testing to continuously optimize conversion rates." }] },
  { slug: "crm-setup", title: "CRM Setup & Integration", desc: "Professional CRM implementation customized for your sales process.", faqs: [{ q: "Which CRM is best for my business?", a: "We evaluate your needs and recommend the best CRM — whether HubSpot, Salesforce, GoHighLevel, or others." }, { q: "Can you migrate data from my current system?", a: "Yes. We handle complete data migration with zero data loss." }, { q: "Do you provide CRM training?", a: "Yes. We provide comprehensive training for your team on the new system." }] },
  { slug: "saas-integrations", title: "SaaS Integrations", desc: "Seamless integration between your tools for unified data flow.", faqs: [{ q: "How many tools can you integrate?", a: "We connect 5,000+ apps including payment systems, CRMs, email platforms, and more." }, { q: "Will integrations slow down my systems?", a: "No. We build efficient integrations that actually speed up your workflows." }, { q: "Do you provide ongoing support?", a: "Yes. We monitor integrations and provide ongoing maintenance and support." }] },
  { slug: "marketing-automation-setup", title: "Marketing Automation Setup", desc: "End-to-end marketing automation configured for maximum impact.", faqs: [{ q: "What does marketing automation include?", a: "Email sequences, lead scoring, segmentation, triggered campaigns, and reporting." }, { q: "How long does setup take?", a: "Typically 2-4 weeks for complete marketing automation implementation." }, { q: "Can I manage it myself after setup?", a: "Yes. We train your team and provide documentation for self-management." }] },
  { slug: "analytics-dashboard", title: "Dashboard & Analytics Setup", desc: "Real-time dashboards and analytics to track every metric that matters.", faqs: [{ q: "What metrics do you track?", a: "Revenue, leads, conversion rates, ad spend, ROI, traffic, and custom KPIs specific to your business." }, { q: "Which analytics tools do you use?", a: "Google Analytics, Looker Studio, custom dashboards, and your existing tools." }, { q: "Can I access dashboards on mobile?", a: "Yes. All dashboards are fully responsive and accessible from any device." }] },
];

const BLOG_POSTS = [
  { slug: "ai-automation-revenue-growth-2025", title: "How AI Automation Is Driving 10x Revenue Growth in 2025", desc: "Discover how forward-thinking businesses are leveraging AI automation systems to generate customers and revenue on autopilot." },
  { slug: "google-ads-roi-local-business", title: "Google Ads for Local Businesses: A Data-Driven ROI Framework", desc: "Learn the exact framework we use to generate 4-6x ROAS for local businesses using AI-optimized Google Ads campaigns." },
  { slug: "ai-chatbot-lead-conversion", title: "AI Chatbots: Converting 78% More Website Visitors Into Leads", desc: "How intelligent chatbots are revolutionizing lead capture and qualification for businesses across every industry." },
  { slug: "crm-automation-sales-pipeline", title: "The Ultimate CRM Automation Playbook for Sales Teams", desc: "Stop losing deals to manual processes. Here is how to automate your entire sales pipeline from lead to close." },
  { slug: "seo-vs-paid-ads-strategy", title: "SEO vs Paid Ads: Building a Unified Revenue Strategy", desc: "Why the best growth strategies combine organic search dominance with paid advertising for maximum market capture." },
  { slug: "ai-follow-up-sequences", title: "AI Follow-Up Sequences That Close 3x More Deals", desc: "The science behind AI-powered follow-up automation and how it is helping sales teams dramatically increase close rates." },
  { slug: "social-media-marketing-strategy-2025", title: "Social Media Marketing Strategy: The 2025 Playbook for Business Growth", desc: "Build a social media strategy that actually drives revenue. Platform-specific tactics for Instagram, Facebook, LinkedIn, and TikTok." },
  { slug: "local-business-digital-marketing", title: "Digital Marketing for Local Businesses: The Complete 2025 Guide", desc: "Everything a local business needs to dominate their market online — from Google Business Profile to local SEO to targeted advertising." },
  { slug: "lead-generation-strategies-2025", title: "15 Lead Generation Strategies That Actually Work in 2025", desc: "Proven lead generation tactics backed by data from campaigns generating over 100,000 leads for businesses across the USA." },
  { slug: "website-conversion-optimization", title: "Website Conversion Optimization: Turn More Visitors Into Paying Customers", desc: "Data-backed strategies to increase your website conversion rate by 200% or more without increasing traffic." },
  { slug: "content-marketing-seo-guide", title: "Content Marketing for SEO: How to Create Content That Ranks and Converts", desc: "The complete guide to creating SEO-optimized content that ranks on Google page one and turns organic traffic into revenue." },
  { slug: "ecommerce-growth-strategies", title: "E-Commerce Growth: 10 AI-Powered Strategies to Scale Your Online Store", desc: "How AI and automation are helping e-commerce brands achieve 200-500% growth through personalization and intelligent marketing." },
  { slug: "brand-identity-business-growth", title: "How Strong Brand Identity Drives Revenue Growth: A Strategic Guide", desc: "Why branding is not just about logos — how strategic brand identity directly impacts customer acquisition, retention, and revenue." },
  { slug: "healthcare-marketing-patient-acquisition", title: "Healthcare Marketing: How to Acquire More Patients with AI and Digital Strategy", desc: "HIPAA-compliant digital marketing strategies that help medical practices attract and retain patients." },
  { slug: "real-estate-lead-generation-ai", title: "Real Estate Lead Generation: How AI Is Transforming Agent Success", desc: "AI-powered strategies that help real estate agents and brokerages generate, qualify, and convert more leads." },
];

const CASE_STUDIES: Record<string, { title: string; desc: string }> = {
  "1": { title: "Local Dental Practice Revenue Transformation", desc: "How Premier Dental Care achieved 340% increase in new patients using AI Calling Agent and Google Ads." },
  "2": { title: "E-Commerce Brand Scaling System", desc: "How LuxeHome Essentials achieved 62% cart recovery rate and 5.8x ROAS with AI Email Automation." },
  "3": { title: "Real Estate Lead Machine", desc: "How Metro Realty Group generated 200+ qualified buyer leads per month with AI Lead Qualification." },
  "4": { title: "B2B SaaS Growth Engine", desc: "How CloudFlow Solutions achieved 280% increase in qualified demos with AI Sales Assistant." },
  "5": { title: "Restaurant Chain Digital Transformation", desc: "How Sakura Dining Group boosted online orders by 425% with integrated AI marketing systems." },
  "6": { title: "Healthcare Practice Scaling", desc: "How Advanced Wellness Centers grew patient acquisition by 210% with HIPAA-compliant AI automation." },
  "7": { title: "Law Firm Client Acquisition System", desc: "How Sterling Legal Partners increased qualified consultations by 175% with AI intake automation." },
  "8": { title: "Insurance Agency Growth System", desc: "How SecureLife Insurance grew policy sales by 245% with AI-powered lead nurturing and follow-up." },
  "9": { title: "Home Services Lead Generation", desc: "How ProElite Contractors achieved 312% increase in booked estimates with AI scheduling and follow-up." },
  "10": { title: "Financial Advisory Client Acquisition", desc: "How Pinnacle Financial Advisors generated 89 qualified high-net-worth leads monthly with AI systems." },
  "11": { title: "Fitness Studio Membership Growth", desc: "How Elite Performance Studios increased membership signups by 267% with AI lead capture and nurturing." },
  "12": { title: "Auto Dealership Lead System", desc: "How Premier Auto Group boosted qualified test drive appointments by 198% with AI calling and SMS." },
  "13": { title: "Property Management Growth Engine", desc: "How Urban Living Properties increased tenant applications by 340% with automated marketing systems." },
  "14": { title: "Veterinary Practice Patient Acquisition", desc: "How PawCare Veterinary grew new patient appointments by 285% with AI receptionist and follow-up." },
  "15": { title: "Accounting Firm Client Growth", desc: "How Summit Accounting Partners increased qualified consultations by 195% with AI intake systems." },
  "16": { title: "Spa & Wellness Booking System", desc: "How Serenity Wellness Spa boosted appointment bookings by 310% with AI chatbot and SMS automation." },
  "17": { title: "Education Center Enrollment Growth", desc: "How BrightMinds Learning increased student enrollments by 225% with AI-powered parent engagement." },
  "18": { title: "Roofing Company Lead Engine", desc: "How StormShield Roofing generated 156 qualified estimates monthly with AI calling and Google Ads." },
  "19": { title: "Wedding Venue Booking System", desc: "How GrandView Estates increased venue tour bookings by 275% with AI follow-up and social media." },
  "20": { title: "Pest Control Service Growth", desc: "How SafeGuard Pest Control grew service appointments by 290% with AI scheduling and local SEO." },
  "21": { title: "Mortgage Broker Lead System", desc: "How Premier Mortgage Solutions increased qualified applications by 210% with AI pre-qualification." },
};

const LANDING_PAGES: Record<string, { title: string; desc: string }> = {
  "ai-automation-new-york": { title: "AI Automation Services in New York | Infinite Rankers", desc: "Transform your New York business with AI automation systems that generate leads, book appointments, and grow revenue 24/7. Trusted by 500+ NYC businesses." },
  "ai-automation-los-angeles": { title: "AI Automation Services in Los Angeles | Infinite Rankers", desc: "Grow your Los Angeles business with AI automation that generates leads, books appointments, and increases revenue 24/7. Serving 400+ LA businesses." },
  "ai-automation-chicago": { title: "AI Automation Services in Chicago | Infinite Rankers", desc: "Chicago businesses trust Infinite Rankers for AI automation that drives leads, books appointments, and grows revenue. Serving 350+ Chicagoland businesses." },
  "ai-revenue-growth-real-estate": { title: "AI Revenue Growth for Real Estate | Infinite Rankers", desc: "AI-powered lead generation and revenue growth for real estate agents, brokers, and agencies. Automate lead qualification, follow-ups, and appointment booking." },
  "ai-revenue-growth-healthcare": { title: "AI Revenue Growth for Healthcare | Infinite Rankers", desc: "HIPAA-compliant AI automation for healthcare practices. Automate patient intake, appointment booking, follow-ups, and revenue growth for medical offices." },
  "ai-revenue-growth-law-firms": { title: "AI Revenue Growth for Law Firms | Infinite Rankers", desc: "AI-powered client acquisition and revenue growth for law firms. Automate intake, lead qualification, follow-ups, and case management to grow your practice." },
  "ai-revenue-growth-ecommerce": { title: "AI Revenue Growth for E-Commerce | Infinite Rankers", desc: "AI-powered revenue growth for e-commerce brands. Automate cart recovery, personalized marketing, customer retention, and conversion optimization at scale." },
  "ai-revenue-growth-restaurants": { title: "AI Revenue Growth for Restaurants | Infinite Rankers", desc: "AI-powered marketing and automation for restaurants. Increase reservations, online orders, and customer loyalty with intelligent restaurant marketing systems." },
  "ai-lead-generation-usa": { title: "AI Lead Generation for Small Business USA | Infinite Rankers", desc: "AI-powered lead generation systems for small businesses across the USA. Capture, qualify, and convert more leads with intelligent automation that works 24/7." },
  "ai-marketing-automation-usa": { title: "AI Marketing Automation Systems USA | Infinite Rankers", desc: "Complete AI marketing automation for US businesses. Automate email campaigns, social media, ad management, and customer journeys with intelligent AI systems." },
};

const PARTNER_PAGES: Record<string, { title: string; desc: string }> = {
  "infinite-rankers-agency": { title: "Infinite Rankers - Full Service AI Marketing Agency", desc: "Infinite Rankers is a full-service AI marketing agency providing automation, lead generation, and revenue growth systems for businesses across the USA." },
  "infinite-rankers-seo-services": { title: "Infinite Rankers SEO Services - Dominate Search Rankings", desc: "Professional SEO services by Infinite Rankers. We help businesses dominate Google search rankings with data-driven SEO strategies and AI-powered optimization." },
  "infinite-rankers-paid-advertising": { title: "Infinite Rankers Paid Advertising - Google & Meta Ads", desc: "Expert paid advertising management by Infinite Rankers. Google Ads, Meta Ads, and multi-channel campaigns that maximize ROI and revenue growth." },
  "infinite-rankers-ai-automation": { title: "Infinite Rankers AI Automation - Intelligent Business Systems", desc: "AI automation solutions by Infinite Rankers. Chatbots, calling agents, email automation, CRM systems, and workflow automation that scale your business." },
};

const STATIC_PAGES: Record<string, SEOMeta> = {
  "/": { title: `${BRAND} - AI Revenue Growth Agency`, description: "Turn your business into an AI-powered revenue machine. We build automated systems that generate customers and revenue for businesses worldwide.", canonical: `${BASE}/` },
  "/about": { title: `About ${BRAND} - AI Revenue Growth Agency`, description: "Learn about Infinite Rankers, the AI revenue growth agency helping businesses automate lead generation, sales, and marketing for maximum growth.", canonical: `${BASE}/about` },
  "/services": { title: `AI Marketing Services - ${BRAND}`, description: "Explore 30+ AI-powered marketing and automation services designed to generate leads, automate sales, and grow revenue for your business.", canonical: `${BASE}/services` },
  "/portfolio": { title: `Case Studies & Portfolio - ${BRAND}`, description: "See real results from businesses using Infinite Rankers AI systems. 21 detailed case studies showing ROI, revenue growth, and lead generation results.", canonical: `${BASE}/portfolio` },
  "/pricing": { title: `Pricing Plans - ${BRAND}`, description: "Transparent pricing for AI marketing and automation services. Choose from Growth, Scale, or Enterprise plans starting at $1,599/month.", canonical: `${BASE}/pricing` },
  "/contact": { title: `Contact Us - ${BRAND}`, description: "Get in touch with Infinite Rankers. Contact our AI revenue growth team for a free consultation on automating your lead generation and sales.", canonical: `${BASE}/contact` },
  "/blog": { title: `Blog - AI Marketing & Automation Insights | ${BRAND}`, description: "Expert insights on AI automation, lead generation, digital marketing strategy, and revenue growth for businesses. Read our latest articles.", canonical: `${BASE}/blog` },
  "/book-demo": { title: `Book a Demo - ${BRAND}`, description: "Schedule a free demo to see how Infinite Rankers AI systems can automate your lead generation, appointment booking, and revenue growth.", canonical: `${BASE}/book-demo` },
  "/sitemap": { title: `Sitemap - ${BRAND}`, description: "Browse all 90+ pages on infiniterankers.io. Complete directory of our AI marketing services, blog posts, case studies, and landing pages.", canonical: `${BASE}/sitemap` },
  "/terms": { title: `Terms of Service - ${BRAND}`, description: "Terms of Service for Infinite Rankers AI Revenue Growth Agency. Read our terms governing use of infiniterankers.io and infiniterankers.com.", canonical: `${BASE}/terms` },
  "/privacy": { title: `Privacy Policy - ${BRAND}`, description: "Privacy Policy for Infinite Rankers. Learn how we collect, use, and protect your data across infiniterankers.io and infiniterankers.com.", canonical: `${BASE}/privacy` },
};

export function getSEOForRoute(url: string): SEOMeta | null {
  const path = url.split("?")[0].split("#")[0];

  if (STATIC_PAGES[path]) {
    return STATIC_PAGES[path];
  }

  const slug = path.replace(/^\//, "");

  const svc = SERVICES.find(s => s.slug === slug);
  if (svc) {
    return {
      title: `${svc.title} - ${BRAND}`,
      description: svc.desc,
      canonical: `${BASE}/${svc.slug}`,
    };
  }

  const post = BLOG_POSTS.find(b => b.slug === slug);
  if (post) {
    return {
      title: `${post.title} | ${BRAND}`,
      description: post.desc,
      canonical: `${BASE}/${post.slug}`,
    };
  }

  const cs = CASE_STUDIES[slug];
  if (cs) {
    return {
      title: `${cs.title} - Case Study | ${BRAND}`,
      description: cs.desc,
      canonical: `${BASE}/${slug}`,
    };
  }

  if (PARTNER_PAGES[slug]) {
    const pp = PARTNER_PAGES[slug];
    return {
      title: pp.title,
      description: pp.desc,
      canonical: `${BASE}/${slug}`,
    };
  }

  if (LANDING_PAGES[slug]) {
    const lp = LANDING_PAGES[slug];
    return {
      title: lp.title,
      description: lp.desc,
      canonical: `${BASE}/${slug}`,
    };
  }

  return null;
}

function getBreadcrumbs(path: string, seo: SEOMeta): object {
  const BASE_URL = "https://infiniterankers.io";
  const items: { name: string; url: string }[] = [{ name: "Home", url: BASE_URL }];

  const slug = path.replace(/^\//, "");
  const isService = SERVICES.some(s => s.slug === slug);
  const isBlog = BLOG_POSTS.some(b => b.slug === slug);
  const isCase = !!CASE_STUDIES[slug];

  if (isService) {
    items.push({ name: "Services", url: `${BASE_URL}/services` });
    items.push({ name: seo.title.replace(" - Infinite Rankers", ""), url: seo.canonical });
  } else if (isBlog) {
    items.push({ name: "Blog", url: `${BASE_URL}/blog` });
    items.push({ name: seo.title.replace(" | Infinite Rankers", ""), url: seo.canonical });
  } else if (isCase) {
    items.push({ name: "Portfolio", url: `${BASE_URL}/portfolio` });
    items.push({ name: seo.title.replace(" - Case Study | Infinite Rankers", ""), url: seo.canonical });
  } else if (path !== "/") {
    const name = seo.title.replace(/ [-|] Infinite Rankers$/, "").replace(/ \| Infinite Rankers$/, "");
    items.push({ name, url: seo.canonical });
  }

  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, i) => ({
      "@type": "ListItem",
      "position": i + 1,
      "name": item.name,
      "item": item.url,
    })),
  };
}

function getStructuredData(url: string, seo: SEOMeta): string {
  const path = url.split("?")[0].split("#")[0];
  const BASE_URL = "https://infiniterankers.io";
  const ORG_SCHEMA = {
    "@type": "Organization",
    "name": "Infinite Rankers",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "description": "AI Revenue Growth Agency providing 30+ AI-powered marketing and automation services for businesses across the USA and worldwide.",
    "sameAs": ["https://infiniterankers.com", "https://infiniterankers.com/blog", "https://infiniterankers.com/about"],
    "address": { "@type": "PostalAddress", "streetAddress": "203 N Caroline Pl", "addressLocality": "Dover", "addressRegion": "DE", "postalCode": "19904", "addressCountry": "US" },
    "contactPoint": { "@type": "ContactPoint", "telephone": "(703) 415-9373", "contactType": "sales", "email": "contact@infiniterankers.io", "availableLanguage": "English", "areaServed": "US" },
    "knowsAbout": ["AI Automation", "Lead Generation", "Google Ads", "SEO", "CRM Automation", "AI Chatbot", "Digital Marketing", "Social Media Marketing", "Website Development"]
  };

  const breadcrumb = getBreadcrumbs(path, seo);
  let mainSchema: object;

  if (path === "/") {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Infinite Rankers",
      "url": BASE_URL,
      "description": seo.description,
      "publisher": ORG_SCHEMA,
      "potentialAction": { "@type": "SearchAction", "target": `${BASE_URL}/{search_term_string}`, "query-input": "required name=search_term_string" }
    };
    return JSON.stringify(mainSchema);
  }

  const ssSlug = path.replace(/^\//, "");
  const isServicePage = SERVICES.some(s => s.slug === ssSlug);
  const isBlogPage = BLOG_POSTS.some(b => b.slug === ssSlug);
  const isCasePage = !!CASE_STUDIES[ssSlug];

  if (isServicePage) {
    const serviceName = seo.title.replace(" - Infinite Rankers", "");
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": serviceName,
      "description": seo.description,
      "url": seo.canonical,
      "provider": ORG_SCHEMA,
      "areaServed": { "@type": "Country", "name": "United States" },
      "serviceType": "AI Marketing & Automation",
      "offers": { "@type": "Offer", "availability": "https://schema.org/InStock", "priceCurrency": "USD", "url": `${BASE_URL}/pricing` }
    };
    const svc = SERVICES.find(s => s.slug === ssSlug);
    const faqSchema = svc?.faqs?.length ? {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": svc.faqs.map(f => ({
        "@type": "Question",
        "name": f.q,
        "acceptedAnswer": { "@type": "Answer", "text": f.a }
      }))
    } : null;
    const parts = [JSON.stringify(mainSchema), JSON.stringify(breadcrumb)];
    if (faqSchema) parts.push(JSON.stringify(faqSchema));
    return parts.join('</script><script type="application/ld+json">');
  }

  if (isBlogPage) {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": seo.title.replace(" | Infinite Rankers", ""),
      "description": seo.description,
      "url": seo.canonical,
      "image": `${BASE_URL}/images/logo-full.png`,
      "publisher": { ...ORG_SCHEMA, "@context": undefined },
      "author": { "@type": "Organization", "name": "Infinite Rankers", "url": BASE_URL },
      "datePublished": "2025-01-15",
      "dateModified": new Date().toISOString().split("T")[0],
      "mainEntityOfPage": { "@type": "WebPage", "@id": seo.canonical }
    };
    return `${JSON.stringify(mainSchema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}`;
  }

  if (isCasePage) {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": seo.title.replace(" - Case Study | Infinite Rankers", ""),
      "description": seo.description,
      "url": seo.canonical,
      "author": ORG_SCHEMA
    };
    return `${JSON.stringify(mainSchema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}`;
  }

  if (path === "/about") {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "mainEntity": ORG_SCHEMA
    };
    return `${JSON.stringify(mainSchema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}`;
  }

  if (path === "/contact") {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "mainEntity": ORG_SCHEMA
    };
    return `${JSON.stringify(mainSchema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}`;
  }

  if (path === "/pricing") {
    mainSchema = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "mainEntity": {
        "@type": "ItemList",
        "itemListElement": [
          { "@type": "Offer", "name": "Growth Plan", "price": "1599", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Scale Plan", "price": "2999", "priceCurrency": "USD" },
          { "@type": "Offer", "name": "Enterprise Plan", "price": "5999", "priceCurrency": "USD" }
        ]
      }
    };
    return `${JSON.stringify(mainSchema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}`;
  }

  mainSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seo.title,
    "description": seo.description,
    "url": seo.canonical,
    "publisher": ORG_SCHEMA
  };
  return `${JSON.stringify(mainSchema)}</script><script type="application/ld+json">${JSON.stringify(breadcrumb)}`;
}

export function injectSEO(html: string, url: string): string {
  const seo = getSEOForRoute(url);
  if (!seo) return html;

  const headEnd = html.indexOf("</head>");
  if (headEnd === -1) return html;

  let result = html;
  const extraTags: string[] = [];

  const titleTag = `<title>${escapeHtml(seo.title)}</title>`;
  const descTag = `<meta name="description" content="${escapeAttr(seo.description)}" />`;
  const ogTitleTag = `<meta property="og:title" content="${escapeAttr(seo.title)}" />`;
  const ogDescTag = `<meta property="og:description" content="${escapeAttr(seo.description)}" />`;
  const canonicalTag = `<link rel="canonical" href="${escapeAttr(seo.canonical)}" />`;
  const ogUrlTag = `<meta property="og:url" content="${escapeAttr(seo.canonical)}" />`;

  if (/<title>[^<]*<\/title>/.test(result)) {
    result = result.replace(/<title>[^<]*<\/title>/, titleTag);
  } else {
    extraTags.push(titleTag);
  }

  if (/<meta\s+name="description"/.test(result)) {
    result = result.replace(/<meta\s+name="description"\s+content="[^"]*"\s*\/?>/, descTag);
  } else {
    extraTags.push(descTag);
  }

  if (/property="og:title"/.test(result)) {
    result = result.replace(/<meta\s+property="og:title"\s+content="[^"]*"\s*\/?>/, ogTitleTag);
  } else {
    extraTags.push(ogTitleTag);
  }

  if (/property="og:description"/.test(result)) {
    result = result.replace(/<meta\s+property="og:description"\s+content="[^"]*"\s*\/?>/, ogDescTag);
  } else {
    extraTags.push(ogDescTag);
  }

  if (/<link\s+rel="canonical"/.test(result)) {
    result = result.replace(/<link\s+rel="canonical"\s+href="[^"]*"\s*\/?>/, canonicalTag);
  } else {
    extraTags.push(canonicalTag);
  }

  if (/property="og:url"/.test(result)) {
    result = result.replace(/<meta\s+property="og:url"\s+content="[^"]*"\s*\/?>/, ogUrlTag);
  } else {
    extraTags.push(ogUrlTag);
  }

  if (!result.includes('name="robots"')) {
    extraTags.push(`<meta name="robots" content="index, follow" />`);
  }
  extraTags.push(`<meta property="og:type" content="website" />`);
  extraTags.push(`<meta property="og:site_name" content="Infinite Rankers" />`);
  extraTags.push(`<meta property="og:image" content="${BASE}/images/logo-full.png" />`);
  extraTags.push(`<meta name="twitter:card" content="summary_large_image" />`);
  extraTags.push(`<meta name="twitter:title" content="${escapeAttr(seo.title)}" />`);
  extraTags.push(`<meta name="twitter:description" content="${escapeAttr(seo.description)}" />`);
  extraTags.push(`<link rel="alternate" type="application/rss+xml" title="Infinite Rankers Blog" href="${BASE}/rss.xml" />`);

  const jsonLd = getStructuredData(url, seo);
  extraTags.push(`<script type="application/ld+json">${jsonLd}</script>`);

  if (extraTags.length > 0) {
    const insertion = extraTags.map(t => `    ${t}`).join("\n");
    result = result.replace("</head>", `${insertion}\n  </head>`);
  }

  return result;
}

function escapeHtml(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeAttr(s: string): string {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
