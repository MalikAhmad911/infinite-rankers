const BASE = "https://infiniterankers.io";
const BRAND = "Infinite Rankers";

interface SEOMeta {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
}

const SERVICES = [
  { slug: "ai-calling-agent", title: "AI Calling Agent", desc: "Automated outbound and inbound calls that qualify leads and book appointments around the clock." },
  { slug: "ai-receptionist", title: "AI Receptionist", desc: "Never miss a call again. AI answers, qualifies, and routes every inquiry instantly." },
  { slug: "ai-lead-qualification", title: "AI Lead Qualification Bot", desc: "Automatically score and qualify leads so your sales team only talks to buyers." },
  { slug: "ai-appointment-booking", title: "AI Appointment Booking System", desc: "Let AI fill your calendar with qualified prospects while you focus on closing." },
  { slug: "ai-follow-up", title: "AI Follow-Up Automation", desc: "Never lose a lead to poor follow-up. AI nurtures every prospect automatically." },
  { slug: "ai-sales-assistant", title: "AI Sales Assistant", desc: "AI-powered sales support that helps your team close more deals faster." },
  { slug: "ai-chatbot", title: "AI Chatbot", desc: "Website, WhatsApp, and Messenger chatbot that engages visitors 24/7." },
  { slug: "ai-email-automation", title: "AI Email Automation", desc: "Smart email sequences that adapt to prospect behavior and maximize replies." },
  { slug: "ai-sms-automation", title: "AI SMS Automation", desc: "High-response SMS campaigns powered by AI for instant engagement." },
  { slug: "crm-automation", title: "CRM Automation", desc: "Automate your entire CRM workflow from lead entry to deal closure." },
  { slug: "workflow-automation", title: "Workflow Automation", desc: "Connect and automate every tool in your sales and marketing stack." },
  { slug: "google-ads", title: "Google Ads Revenue Engine", desc: "Data-driven Google Ads campaigns that maximize ROI and revenue." },
  { slug: "meta-ads", title: "Meta Ads Growth Engine", desc: "Facebook and Instagram advertising that generates qualified leads at scale." },
  { slug: "seo-authority", title: "SEO Authority Growth System", desc: "Dominate search rankings and build organic traffic that converts." },
  { slug: "local-seo", title: "Local SEO & Google Business", desc: "Own your local market with optimized Google Business and local search presence." },
  { slug: "conversion-funnels", title: "Conversion Funnel Building", desc: "Multi-step funnels designed to turn cold traffic into paying customers." },
  { slug: "landing-page-optimization", title: "Landing Page Optimization", desc: "High-converting landing pages that turn visitors into leads and revenue." },
  { slug: "conversion-rate-optimization", title: "Conversion Rate Optimization", desc: "Data-backed testing and optimization to maximize every visitor's value." },
  { slug: "social-media-marketing", title: "Social Media Marketing", desc: "Strategic social presence across platforms to build brand authority." },
  { slug: "instagram-growth", title: "Instagram Growth & Posting", desc: "Consistent, engaging Instagram content that grows your audience organically." },
  { slug: "facebook-growth", title: "Facebook Growth & Posting", desc: "Facebook content strategy that builds community and drives leads." },
  { slug: "content-writing", title: "Content Writing & Strategy", desc: "Authority-building content that positions you as the industry leader." },
  { slug: "branding-design", title: "Branding & Creative Design", desc: "Premium brand identity that commands trust and recognition." },
  { slug: "video-marketing", title: "Short Form Video Marketing", desc: "Scroll-stopping video content optimized for engagement and reach." },
  { slug: "website-development", title: "Website Development", desc: "High-performance websites designed for conversion and growth." },
  { slug: "landing-page-development", title: "Landing Page Development", desc: "Fast, responsive landing pages built to convert traffic into leads." },
  { slug: "crm-setup", title: "CRM Setup & Integration", desc: "Professional CRM implementation customized for your sales process." },
  { slug: "saas-integrations", title: "SaaS Integrations", desc: "Seamless integration between your tools for unified data flow." },
  { slug: "marketing-automation-setup", title: "Marketing Automation Setup", desc: "End-to-end marketing automation configured for maximum impact." },
  { slug: "analytics-dashboard", title: "Dashboard & Analytics Setup", desc: "Real-time dashboards and analytics to track every metric that matters." },
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
  "/terms": { title: `Terms of Service - ${BRAND}`, description: "Terms of Service for Infinite Rankers AI Revenue Growth Agency. Read our terms governing use of infiniterankers.io and infiniterankers.com.", canonical: `${BASE}/terms` },
  "/privacy": { title: `Privacy Policy - ${BRAND}`, description: "Privacy Policy for Infinite Rankers. Learn how we collect, use, and protect your data across infiniterankers.io and infiniterankers.com.", canonical: `${BASE}/privacy` },
};

export function getSEOForRoute(url: string): SEOMeta | null {
  const path = url.split("?")[0].split("#")[0];

  if (STATIC_PAGES[path]) {
    return STATIC_PAGES[path];
  }

  const serviceMatch = path.match(/^\/services\/(.+)$/);
  if (serviceMatch) {
    const svc = SERVICES.find(s => s.slug === serviceMatch[1]);
    if (svc) {
      return {
        title: `${svc.title} - ${BRAND}`,
        description: svc.desc,
        canonical: `${BASE}/services/${svc.slug}`,
      };
    }
  }

  const blogMatch = path.match(/^\/blog\/(.+)$/);
  if (blogMatch) {
    const post = BLOG_POSTS.find(b => b.slug === blogMatch[1]);
    if (post) {
      return {
        title: `${post.title} | ${BRAND}`,
        description: post.desc,
        canonical: `${BASE}/blog/${post.slug}`,
      };
    }
  }

  const caseMatch = path.match(/^\/portfolio\/(.+)$/);
  if (caseMatch) {
    const cs = CASE_STUDIES[caseMatch[1]];
    if (cs) {
      return {
        title: `${cs.title} - Case Study | ${BRAND}`,
        description: cs.desc,
        canonical: `${BASE}/portfolio/${caseMatch[1]}`,
      };
    }
  }

  if (PARTNER_PAGES[path.replace("/", "")]) {
    const pp = PARTNER_PAGES[path.replace("/", "")];
    return {
      title: pp.title,
      description: pp.desc,
      canonical: `${BASE}${path}`,
    };
  }

  const lpSlug = path.replace("/", "");
  if (LANDING_PAGES[lpSlug]) {
    const lp = LANDING_PAGES[lpSlug];
    return {
      title: lp.title,
      description: lp.desc,
      canonical: `${BASE}/${lpSlug}`,
    };
  }

  return null;
}

function getStructuredData(url: string, seo: SEOMeta): string {
  const path = url.split("?")[0].split("#")[0];
  const BASE_URL = "https://infiniterankers.io";
  const ORG_SCHEMA = {
    "@type": "Organization",
    "name": "Infinite Rankers",
    "url": BASE_URL,
    "logo": `${BASE_URL}/logo.png`,
    "sameAs": ["https://infiniterankers.com"],
    "contactPoint": { "@type": "ContactPoint", "contactType": "sales", "availableLanguage": "English" }
  };

  if (path === "/") {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "name": "Infinite Rankers",
      "url": BASE_URL,
      "description": seo.description,
      "publisher": ORG_SCHEMA,
      "potentialAction": { "@type": "SearchAction", "target": `${BASE_URL}/services/{search_term_string}`, "query-input": "required name=search_term_string" }
    });
  }

  if (path.startsWith("/services/")) {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": seo.title.replace(" - Infinite Rankers", ""),
      "description": seo.description,
      "url": seo.canonical,
      "provider": ORG_SCHEMA,
      "areaServed": { "@type": "Country", "name": "United States" },
      "serviceType": "AI Marketing & Automation"
    });
  }

  if (path.startsWith("/blog/")) {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Article",
      "headline": seo.title.replace(" | Infinite Rankers", ""),
      "description": seo.description,
      "url": seo.canonical,
      "publisher": ORG_SCHEMA,
      "author": { "@type": "Organization", "name": "Infinite Rankers" },
      "datePublished": "2025-01-15",
      "dateModified": new Date().toISOString().split("T")[0]
    });
  }

  if (path.startsWith("/portfolio/")) {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      "name": seo.title.replace(" - Case Study | Infinite Rankers", ""),
      "description": seo.description,
      "url": seo.canonical,
      "author": ORG_SCHEMA
    });
  }

  if (path === "/about") {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "AboutPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "mainEntity": ORG_SCHEMA
    });
  }

  if (path === "/contact") {
    return JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ContactPage",
      "name": seo.title,
      "description": seo.description,
      "url": seo.canonical,
      "mainEntity": ORG_SCHEMA
    });
  }

  if (path === "/pricing") {
    return JSON.stringify({
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
    });
  }

  return JSON.stringify({
    "@context": "https://schema.org",
    "@type": "WebPage",
    "name": seo.title,
    "description": seo.description,
    "url": seo.canonical,
    "publisher": ORG_SCHEMA
  });
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
