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
    entries.push({ loc: `${BASE}/services/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.7" });
  }

  for (let i = 1; i <= 21; i++) {
    entries.push({ loc: `${BASE}/portfolio/${i}`, lastmod: TODAY, changefreq: "monthly", priority: "0.6" });
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
    entries.push({ loc: `${BASE}/blog/${slug}`, lastmod: TODAY, changefreq: "monthly", priority: "0.6" });
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

export function registerSitemapRoutes(app: Express) {
  app.get("/sitemap.xml", (_req, res) => {
    const xml = buildSitemapXML();
    res.set("Content-Type", "application/xml; charset=utf-8");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(xml);
  });

  app.get("/robots.txt", (_req, res) => {
    res.set("Content-Type", "text/plain");
    res.send(`User-agent: *\nAllow: /\n\nSitemap: ${BASE}/sitemap.xml\n`);
  });
}
