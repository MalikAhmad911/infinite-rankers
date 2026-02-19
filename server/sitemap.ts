import type { Express } from "express";

const BASE = "https://infiniterankers.io";
const TODAY = new Date().toISOString().split("T")[0];

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

export function getAllURLs(): string[] {
  return getAllSitemapEntries().map(e => e.loc);
}

function getAllSitemapEntries(): SitemapURL[] {
  const entries: SitemapURL[] = [];

  const mainPages = [
    { path: "/", changefreq: "weekly", priority: "1.0" },
    { path: "/about", changefreq: "monthly", priority: "0.8" },
    { path: "/services", changefreq: "weekly", priority: "0.9" },
    { path: "/portfolio", changefreq: "monthly", priority: "0.7" },
    { path: "/pricing", changefreq: "weekly", priority: "0.8" },
    { path: "/contact", changefreq: "monthly", priority: "0.7" },
    { path: "/blog", changefreq: "weekly", priority: "0.8" },
    { path: "/book-demo", changefreq: "monthly", priority: "0.8" },
    { path: "/sitemap", changefreq: "monthly", priority: "0.4" },
    { path: "/terms", changefreq: "yearly", priority: "0.3" },
    { path: "/privacy", changefreq: "yearly", priority: "0.3" },
  ];

  for (const p of mainPages) {
    entries.push({ loc: `${BASE}${p.path}`, lastmod: TODAY, changefreq: p.changefreq, priority: p.priority });
  }

  const services = [
    "ai-calling-agent", "ai-receptionist", "ai-lead-qualification", "ai-appointment-booking",
    "ai-follow-up", "ai-sales-assistant", "ai-chatbot", "ai-email-automation", "ai-sms-automation",
    "crm-automation", "workflow-automation", "google-ads", "meta-ads", "seo-authority", "local-seo",
    "conversion-funnels", "landing-page-optimization", "conversion-rate-optimization",
    "social-media-marketing", "instagram-growth", "facebook-growth", "content-writing",
    "branding-design", "video-marketing", "website-development", "landing-page-development",
    "crm-setup", "saas-integrations", "marketing-automation-setup", "analytics-dashboard",
  ];
  for (const slug of services) {
    entries.push({ loc: `${BASE}/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.7" });
  }

  for (let i = 1; i <= 21; i++) {
    entries.push({ loc: `${BASE}/${i}`, lastmod: TODAY, changefreq: "monthly", priority: "0.6" });
  }

  const landingPages = [
    "ai-automation-new-york", "ai-automation-los-angeles", "ai-automation-chicago",
    "ai-revenue-growth-real-estate", "ai-revenue-growth-healthcare", "ai-revenue-growth-law-firms",
    "ai-revenue-growth-ecommerce", "ai-revenue-growth-restaurants",
    "ai-lead-generation-usa", "ai-marketing-automation-usa",
  ];
  for (const slug of landingPages) {
    entries.push({ loc: `${BASE}/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" });
  }

  const partnerPages = [
    "infinite-rankers-agency", "infinite-rankers-seo-services",
    "infinite-rankers-paid-advertising", "infinite-rankers-ai-automation",
  ];
  for (const slug of partnerPages) {
    entries.push({ loc: `${BASE}/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.8" });
  }

  const blogPosts = [
    "ai-automation-revenue-growth-2025", "ai-chatbot-lead-conversion", "ai-follow-up-sequences",
    "brand-identity-business-growth", "content-marketing-seo-guide", "crm-automation-sales-pipeline",
    "ecommerce-growth-strategies", "google-ads-roi-local-business", "healthcare-marketing-patient-acquisition",
    "lead-generation-strategies-2025", "local-business-digital-marketing", "real-estate-lead-generation-ai",
    "seo-vs-paid-ads-strategy", "social-media-marketing-strategy-2025", "website-conversion-optimization",
  ];
  for (const slug of blogPosts) {
    entries.push({ loc: `${BASE}/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.6" });
  }

  return entries;
}

function buildSitemapXML(): string {
  const entries = getAllSitemapEntries();
  const urls = entries.map(e =>
    `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

const BLOG_RSS_ITEMS = [
  { slug: "ai-automation-revenue-growth-2025", title: "How AI Automation Is Driving 10x Revenue Growth in 2025", desc: "Discover how forward-thinking businesses are leveraging AI automation systems to generate customers and revenue on autopilot." },
  { slug: "google-ads-roi-local-business", title: "Google Ads for Local Businesses: A Data-Driven ROI Framework", desc: "Learn the exact framework we use to generate 4-6x ROAS for local businesses using AI-optimized Google Ads campaigns." },
  { slug: "ai-chatbot-lead-conversion", title: "AI Chatbots: Converting 78% More Website Visitors Into Leads", desc: "How intelligent chatbots are revolutionizing lead capture and qualification for businesses across every industry." },
  { slug: "crm-automation-sales-pipeline", title: "The Ultimate CRM Automation Playbook for Sales Teams", desc: "Stop losing deals to manual processes. Here is how to automate your entire sales pipeline from lead to close." },
  { slug: "seo-vs-paid-ads-strategy", title: "SEO vs Paid Ads: Building a Unified Revenue Strategy", desc: "Why the best growth strategies combine organic search dominance with paid advertising for maximum market capture." },
  { slug: "ai-follow-up-sequences", title: "AI Follow-Up Sequences That Close 3x More Deals", desc: "The science behind AI-powered follow-up automation and how it is helping sales teams dramatically increase close rates." },
  { slug: "social-media-marketing-strategy-2025", title: "Social Media Marketing Strategy: The 2025 Playbook", desc: "Build a social media strategy that actually drives revenue." },
  { slug: "local-business-digital-marketing", title: "Digital Marketing for Local Businesses: The Complete Guide", desc: "Everything a local business needs to dominate their market online." },
  { slug: "lead-generation-strategies-2025", title: "15 Lead Generation Strategies That Actually Work in 2025", desc: "Proven lead generation tactics backed by data from campaigns generating over 100,000 leads." },
  { slug: "website-conversion-optimization", title: "Website Conversion Optimization Guide", desc: "Data-backed strategies to increase your website conversion rate by 200% or more." },
  { slug: "content-marketing-seo-guide", title: "Content Marketing for SEO", desc: "The complete guide to creating SEO-optimized content that ranks and converts." },
  { slug: "ecommerce-growth-strategies", title: "E-Commerce Growth: 10 AI-Powered Strategies", desc: "How AI and automation are helping e-commerce brands achieve 200-500% growth." },
  { slug: "brand-identity-business-growth", title: "How Strong Brand Identity Drives Revenue Growth", desc: "Why branding is not just about logos and how it directly impacts revenue." },
  { slug: "healthcare-marketing-patient-acquisition", title: "Healthcare Marketing: Acquire More Patients with AI", desc: "HIPAA-compliant digital marketing strategies for medical practices." },
  { slug: "real-estate-lead-generation-ai", title: "Real Estate Lead Generation with AI", desc: "AI-powered strategies for real estate agents and brokerages." },
];

function buildRSSFeed(): string {
  const items = BLOG_RSS_ITEMS.map(post => `    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${BASE}/${post.slug}</link>
      <guid>${BASE}/${post.slug}</guid>
      <description><![CDATA[${post.desc}]]></description>
      <pubDate>${new Date("2025-01-15").toUTCString()}</pubDate>
      <author>contact@infiniterankers.io (Infinite Rankers)</author>
    </item>`).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Infinite Rankers Blog - AI Marketing &amp; Automation Insights</title>
    <link>${BASE}/blog</link>
    <description>Expert insights on AI automation, lead generation, digital marketing strategy, and revenue growth for businesses.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${BASE}/rss.xml" rel="self" type="application/rss+xml" />
    <image>
      <url>${BASE}/images/logo-full.png</url>
      <title>Infinite Rankers</title>
      <link>${BASE}</link>
    </image>
${items}
  </channel>
</rss>`;
}

export function registerSitemapRoutes(app: Express) {
  app.get("/sitemap.xml", (_req, res) => {
    const xml = buildSitemapXML();
    res.set("Content-Type", "application/xml; charset=utf-8");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(xml);
  });

  app.get("/rss.xml", (_req, res) => {
    res.set("Content-Type", "application/rss+xml; charset=utf-8");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(buildRSSFeed());
  });

  app.get("/feed.xml", (_req, res) => {
    res.redirect(301, "/rss.xml");
  });

  app.get("/feed", (_req, res) => {
    res.redirect(301, "/rss.xml");
  });

  app.get("/robots.txt", (_req, res) => {
    res.set("Content-Type", "text/plain");
    res.set("Cache-Control", "public, max-age=86400");
    res.send([
      "User-agent: *",
      "Allow: /",
      "Disallow: /api/",
      "Disallow: /admin/",
      "",
      "User-agent: Googlebot",
      "Allow: /",
      "Disallow: /api/",
      "",
      "User-agent: Googlebot-Image",
      "Allow: /",
      "",
      "User-agent: Bingbot",
      "Allow: /",
      "Disallow: /api/",
      "",
      "User-agent: GPTBot",
      "Allow: /",
      "",
      "User-agent: ChatGPT-User",
      "Allow: /",
      "",
      "User-agent: Google-Extended",
      "Allow: /",
      "",
      "User-agent: PerplexityBot",
      "Allow: /",
      "",
      "User-agent: ClaudeBot",
      "Allow: /",
      "",
      "User-agent: Applebot-Extended",
      "Allow: /",
      "",
      "User-agent: Slurp",
      "Allow: /",
      "",
      "User-agent: DuckDuckBot",
      "Allow: /",
      "",
      "User-agent: Baiduspider",
      "Allow: /",
      "",
      "User-agent: YandexBot",
      "Allow: /",
      "",
      `Host: ${BASE}`,
      "",
      `Sitemap: ${BASE}/sitemap.xml`,
      "",
    ].join("\n"));
  });
}
