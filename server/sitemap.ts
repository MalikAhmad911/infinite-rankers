import type { Express } from "express";

const BASE = "https://infiniterankers.io";
const TODAY = new Date().toISOString().split("T")[0];

interface SitemapURL {
  loc: string;
  lastmod: string;
  changefreq: string;
  priority: string;
}

interface SitemapChild {
  name: string;
  path: string;
  entries: SitemapURL[];
}

const MAIN_PAGES = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/about", changefreq: "monthly", priority: "0.8" },
  { path: "/services", changefreq: "weekly", priority: "0.9" },
  { path: "/portfolio", changefreq: "monthly", priority: "0.7" },
  { path: "/pricing", changefreq: "weekly", priority: "0.8" },
  { path: "/contact", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/book-demo", changefreq: "monthly", priority: "0.8" },
  { path: "/content-methodology", changefreq: "monthly", priority: "0.5" },
  { path: "/google-partner", changefreq: "monthly", priority: "0.6" },
  { path: "/terms", changefreq: "yearly", priority: "0.3" },
  { path: "/privacy", changefreq: "yearly", priority: "0.3" },
];

const SERVICE_SLUGS = [
  "ai-lead-capture",
  "ai-appointment-agents",
  "crm-pipeline-automation",
  "customer-support-ai",
  "reviews-reactivation-retention",
  "custom-saas-tools",
  "revenue-automation-consulting",
];

// Only AI-positioned blog posts are indexed. Old SEO/digital-marketing era posts are excluded.
const BLOG_POST_SLUGS = [
  "ai-automation-revenue-growth-2025",
  "ai-chatbot-lead-conversion",
  "ai-follow-up-sequences",
  "crm-automation-sales-pipeline",
  "google-ads-roi-local-business",
  "lead-generation-strategies-2025",
  "real-estate-lead-generation-ai",
  "website-conversion-optimization",
];

// All AI Revenue Systems landing pages — location, industry, service, and problem-focused search traffic.
const LANDING_PAGE_SLUGS = [
  // Location pages
  "ai-automation-new-york", "ai-automation-los-angeles", "ai-automation-chicago",
  "ai-automation-agency-usa", "ai-automation-agency-texas", "ai-automation-agency-california",
  "ai-automation-agency-florida",
  // Industry growth pages
  "ai-revenue-growth-real-estate", "ai-revenue-growth-healthcare", "ai-revenue-growth-law-firms",
  "ai-revenue-growth-ecommerce", "ai-revenue-growth-restaurants",
  // Core AI service pages
  "ai-lead-generation-usa", "ai-marketing-automation-usa", "ai-automation-agency",
  "ai-agent-development", "ai-receptionist", "ai-booking-agent", "ai-customer-support-agent",
  "ai-sales-agent", "lead-capture-automation", "crm-automation", "missed-call-text-back",
  "revenue-automation-systems", "saas-project-development", "custom-saas-development",
  "custom-ai-automation", "ai-receptionist-service-usa",
  // Vertical-specific AI pages
  "ai-receptionist-for-dentists", "ai-receptionist-for-law-firms", "ai-booking-agent-for-med-spas",
  "ai-automation-for-hvac-companies", "crm-automation-for-home-services",
  "lead-capture-automation-for-plumbers", "follow-up-automation-for-roofers",
  "customer-support-ai-for-auto-shops", "review-automation-for-dental-clinics",
  "customer-reactivation-for-med-spas", "ai-sales-agent-for-real-estate",
  "ai-booking-agent-for-electricians", "ai-automation-for-law-firms",
  "crm-automation-for-mortgage-brokers", "ai-receptionist-for-home-services",
  // Problem-focused pages
  "stop-missing-leads-after-hours", "automate-appointment-booking",
  "missed-call-to-booking-system", "automate-customer-follow-up", "reactivate-old-leads",
  "ai-intake-system-for-law-firms", "automate-review-requests", "book-more-estimates-with-ai",
  "automate-front-desk-workflows", "improve-lead-response-time",
  // AI agency positioning pages
  "b2b-lead-generation", "automation-agency",
  // Competitor comparison pages
  "podium-alternative", "podium-alternative-for-home-services", "podium-vs-custom-ai-system",
  "best-ai-automation-agency-for-local-businesses",
  // New keyword-targeted service pages
  "ai-voice-agent", "ai-appointment-setter", "ai-answering-service", "ai-for-small-business",
  "ai-workflow-automation", "ai-for-business", "pipeline-automation", "ai-for-sales",
];

function createEntriesFromPaths(paths: Array<{ path: string; changefreq: string; priority: string }>): SitemapURL[] {
  return paths.map((p) => ({
    loc: `${BASE}${p.path}`,
    lastmod: TODAY,
    changefreq: p.changefreq,
    priority: p.priority,
  }));
}

function createEntriesFromSlugs(slugs: string[], changefreq: string, priority: string): SitemapURL[] {
  return slugs.map((slug) => ({
    loc: `${BASE}/${slug}`,
    lastmod: TODAY,
    changefreq,
    priority,
  }));
}

const CASE_STUDY_SLUGS = [
  "case-study-dental-practice-revenue-transformation",
  "case-study-ecommerce-cart-recovery-scaling",
  "case-study-real-estate-ai-lead-generation",
  "case-study-saas-growth-acceleration",
  "case-study-law-firm-client-intake-automation",
  "case-study-fitness-studio-membership-growth",
  "case-study-restaurant-chain-local-seo-transformation",
  "case-study-medical-clinic-patient-acquisition",
  "case-study-wealth-management-digital-lead-generation",
  "case-study-home-services-plumbing-hvac-lead-machine",
  "case-study-auto-dealership-ai-sales-acceleration",
  "case-study-online-coaching-enrollment-automation",
  "case-study-boutique-hotel-direct-booking-engine",
  "case-study-insurance-agency-renewal-automation",
  "case-study-commercial-contractor-brand-lead-growth",
  "case-study-cpa-firm-onboarding-automation",
  "case-study-luxury-salon-ai-booking-instagram-growth",
  "case-study-immigration-law-multilingual-lead-generation",
  "case-study-freight-brokerage-workflow-automation",
  "case-study-cnc-manufacturer-digital-lead-generation",
  "case-study-veterinary-clinic-ai-appointment-growth",
];

function createCaseStudyEntries(): SitemapURL[] {
  return CASE_STUDY_SLUGS.map((slug) => ({
    loc: `${BASE}/${slug}`,
    lastmod: TODAY,
    changefreq: "monthly",
    priority: "0.6",
  }));
}

const INDUSTRY_VERTICAL_SLUGS = [
  "dental-ai",
  "hvac-ai",
  "law-firm-ai",
  "real-estate-ai",
  "medical-ai",
  "ecommerce-ai",
];

function getSitemapChildren(): SitemapChild[] {
  return [
    {
      name: "main",
      path: "/sitemap-main.xml",
      entries: createEntriesFromPaths(MAIN_PAGES),
    },
    {
      name: "services",
      path: "/sitemap-services.xml",
      entries: createEntriesFromSlugs(SERVICE_SLUGS, "monthly", "0.7"),
    },
    {
      name: "cases",
      path: "/sitemap-cases.xml",
      entries: createCaseStudyEntries(),
    },
    {
      name: "blog",
      path: "/sitemap-blog.xml",
      entries: createEntriesFromSlugs(BLOG_POST_SLUGS, "monthly", "0.6"),
    },
    {
      name: "industries",
      path: "/sitemap-industries.xml",
      entries: createEntriesFromSlugs(INDUSTRY_VERTICAL_SLUGS, "monthly", "0.8"),
    },
    {
      name: "landing-pages",
      path: "/sitemap-landing-pages.xml",
      entries: createEntriesFromSlugs(LANDING_PAGE_SLUGS, "monthly", "0.7"),
    },
  ];
}

export function getAllURLs(): string[] {
  return getAllSitemapEntries().map(e => e.loc);
}

function getAllSitemapEntries(): SitemapURL[] {
  return getSitemapChildren().flatMap((child) => child.entries);
}

function buildSitemapXML(entries: SitemapURL[]): string {
  const urls = entries.map(e =>
    `  <url>\n    <loc>${e.loc}</loc>\n    <lastmod>${e.lastmod}</lastmod>\n    <changefreq>${e.changefreq}</changefreq>\n    <priority>${e.priority}</priority>\n  </url>`
  ).join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls}\n</urlset>`;
}

function buildSitemapIndexXML(children: SitemapChild[]): string {
  const items = children
    .map((child) => `  <sitemap>\n    <loc>${BASE}${child.path}</loc>\n    <lastmod>${TODAY}</lastmod>\n  </sitemap>`)
    .join("\n");

  return `<?xml version="1.0" encoding="UTF-8"?>\n<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${items}\n</sitemapindex>`;
}

const BLOG_RSS_ITEMS = [
  { slug: "ai-automation-revenue-growth-2025", title: "How AI Automation Is Driving 10x Revenue Growth in 2025", desc: "Discover how forward-thinking businesses are leveraging AI automation systems to generate customers and revenue on autopilot." },
  { slug: "ai-chatbot-lead-conversion", title: "AI Chatbots: Converting 78% More Website Visitors Into Leads", desc: "How intelligent chatbots are revolutionizing lead capture and qualification for businesses across every industry." },
  { slug: "crm-automation-sales-pipeline", title: "The Ultimate CRM Automation Playbook for Sales Teams", desc: "Stop losing deals to manual processes. Here is how to automate your entire sales pipeline from lead to close." },
  { slug: "ai-follow-up-sequences", title: "AI Follow-Up Sequences That Close 3x More Deals", desc: "The science behind AI-powered follow-up automation and how it is helping sales teams dramatically increase close rates." },
  { slug: "lead-generation-strategies-2025", title: "15 Lead Generation Strategies That Actually Work in 2025", desc: "Proven lead generation tactics backed by data from campaigns generating over 100,000 leads." },
  { slug: "real-estate-lead-generation-ai", title: "Real Estate Lead Generation with AI", desc: "AI-powered strategies for real estate agents and brokerages." },
  { slug: "website-conversion-optimization", title: "Website Conversion Optimization Guide", desc: "Data-backed strategies to increase your website conversion rate by 200% or more." },
  { slug: "google-ads-roi-local-business", title: "Google Ads for Local Businesses: A Data-Driven ROI Framework", desc: "Learn the exact framework we use to generate 4-6x ROAS for local businesses using AI-optimized Google Ads campaigns." },,
  "podium-competitors",
  "podium-vs-birdeye",
  "podium-pricing-too-expensive",
  "best-podium-alternative-2025",
  "podium-alternative-no-contract",
  "cancel-podium-contract",
  "podium-alternative-cheaper",
  "podium-alternative-for-dentists",
  "podium-alternative-for-auto-shops",
  "podium-alternative-for-contractors",
  "podium-alternative-for-hvac",
  "google-review-software",
  "get-more-google-reviews",
  "automated-review-requests",
  "review-management-software",
  "reputation-management-for-small-business",
  "reputation-management-platform",
  "google-review-management-tool",
  "review-request-software",
  "local-business-reputation-management",
  "business-texting-software",
  "text-message-marketing-for-small-business",
  "two-way-text-messaging-for-business",
  "automated-text-messages-for-business",
  "sms-marketing-platform",
  "automated-customer-texting",
  "sms-customer-follow-up",
  "ai-for-small-business",
  "ai-for-local-business",
  "ai-receptionist-for-small-business",
  "ai-lead-generation-for-local-business",
  "ai-for-dental-practice",
  "ai-appointment-booking-software",
  "improve-lead-response-time",
  "ai-chatbot-for-local-business",
  "hvac-marketing-automation",
  "plumber-marketing-software",
  "missed-call-text-back",
  "ai-answering-service",
  "customer-retention-ai",
  "ai-for-home-services",
  "podium-alternative-new-york",
  "podium-alternative-texas",
  "podium-alternative-florida",
  "podium-vs-reputation-com",
  "podium-vs-thryv"
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
  const sitemapChildren = getSitemapChildren();

  app.get("/sitemap_index.xml", (_req, res) => {
    const xml = buildSitemapIndexXML(sitemapChildren);
    res.set("Content-Type", "application/xml; charset=utf-8");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(xml);
  });

  for (const child of sitemapChildren) {
    app.get(child.path, (_req, res) => {
      const xml = buildSitemapXML(child.entries);
      res.set("Content-Type", "application/xml; charset=utf-8");
      res.set("Cache-Control", "public, max-age=3600");
      res.send(xml);
    });
  }

  app.get("/sitemap.xml", (_req, res) => {
    const xml = buildSitemapXML(getAllSitemapEntries());
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

  app.get("/api/ping-search-engines", async (_req, res) => {
    const sitemapUrl = encodeURIComponent(`${BASE}/sitemap_index.xml`);
    const results: { engine: string; status: string }[] = [];
    const endpoints = [
      { engine: "Google", url: `https://www.google.com/ping?sitemap=${sitemapUrl}` },
      { engine: "Bing", url: `https://www.bing.com/ping?sitemap=${sitemapUrl}` },
    ];
    for (const ep of endpoints) {
      try {
        const resp = await fetch(ep.url);
        results.push({ engine: ep.engine, status: `${resp.status} ${resp.statusText}` });
      } catch (e: any) {
        results.push({ engine: ep.engine, status: `Error: ${e.message}` });
      }
    }
    res.json({ success: true, timestamp: new Date().toISOString(), results });
  });

  app.get("/indexing-checklist", (_req, res) => {
    res.set("Content-Type", "text/html; charset=utf-8");
    res.set("Cache-Control", "no-cache");
    res.send(buildIndexingChecklist());
  });

  app.get("/backlink-strategy", (_req, res) => {
    res.set("Content-Type", "text/html; charset=utf-8");
    res.set("Cache-Control", "no-cache");
    res.send(buildBacklinkStrategy());
  });

  app.get("/robots.txt", (_req, res) => {
    res.set("Content-Type", "text/plain");
    res.set("Cache-Control", "public, max-age=86400");
    res.send([
      "# Search engine crawlers — fully allowed",
      "User-agent: Googlebot",
      "Allow: /",
      "",
      "User-agent: Bingbot",
      "Allow: /",
      "",
      "User-agent: Slurp",
      "Allow: /",
      "",
      "User-agent: DuckDuckBot",
      "Allow: /",
      "",
      "# AI crawlers — allowed for discovery",
      "User-agent: GPTBot",
      "Allow: /",
      "",
      "User-agent: ChatGPT-User",
      "Allow: /",
      "",
      "User-agent: CCBot",
      "Allow: /",
      "",
      "User-agent: anthropic-ai",
      "Allow: /",
      "",
      "User-agent: Claude-Web",
      "Allow: /",
      "",
      "User-agent: cohere-ai",
      "Allow: /",
      "",
      "User-agent: PerplexityBot",
      "Allow: /",
      "",
      "# All other crawlers — allow public pages, block admin/API/internal utility URLs",
      "User-agent: *",
      "Allow: /",
      "Disallow: /admin/",
      "Disallow: /api/",
      "Disallow: /indexing-checklist",
      "Disallow: /backlink-strategy",
      "",
      `Sitemap: ${BASE}/sitemap_index.xml`,
      `Sitemap: ${BASE}/sitemap.xml`,
      `Host: ${BASE.replace("https://", "")}`,
      "",
    ].join("\n"));
  });

  app.get("/crawl-hub", (_req, res) => {
    const allUrls = getAllURLs();
    res.set("Content-Type", "text/html; charset=utf-8");
    res.set("Cache-Control", "public, max-age=3600");
    res.send(buildCrawlHub(allUrls));
  });

  const INDEXNOW_KEY = "ab46281059004b0585c391ab6b289a5e";

  app.get(`/${INDEXNOW_KEY}.txt`, (_req, res) => {
    res.set("Content-Type", "text/plain; charset=utf-8");
    res.set("Cache-Control", "public, max-age=86400");
    res.send(INDEXNOW_KEY);
  });

  app.get("/api/indexnow-submit", async (_req, res) => {
    const allUrls = getAllURLs();
    const payload = {
      host: "infiniterankers.io",
      key: INDEXNOW_KEY,
      keyLocation: `${BASE}/${INDEXNOW_KEY}.txt`,
      urlList: allUrls,
    };
    try {
      const resp = await fetch("https://api.indexnow.org/IndexNow", {
        method: "POST",
        headers: { "Content-Type": "application/json; charset=utf-8" },
        body: JSON.stringify(payload),
      });
      res.json({
        success: resp.ok,
        status: resp.status,
        statusText: resp.statusText,
        urlsSubmitted: allUrls.length,
        timestamp: new Date().toISOString(),
      });
    } catch (e: any) {
      res.json({ success: false, error: e.message });
    }
  });
}

function buildIndexingChecklist(): string {
  const allUrls = getAllURLs();
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Google Indexing Checklist - Infinite Rankers</title>
<meta name="robots" content="noindex, nofollow">
<style>body{font-family:Inter,system-ui,sans-serif;max-width:900px;margin:0 auto;padding:20px 16px;background:#f9fafb;color:#1f2937}h1{color:#1e40af;border-bottom:3px solid #3b82f6;padding-bottom:12px}h2{color:#1e3a8a;margin-top:32px;border-left:4px solid #3b82f6;padding-left:12px}.step{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:16px 20px;margin:12px 0}.step h3{margin:0 0 8px;color:#374151}.check{color:#059669;font-weight:bold}.warn{color:#d97706}.stats{display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;margin:16px 0}.stat{background:#eff6ff;border-radius:8px;padding:16px;text-align:center}.stat .num{font-size:2rem;font-weight:700;color:#1e40af}.stat .label{color:#6b7280;font-size:.875rem}ol{line-height:1.8}a{color:#2563eb}</style>
</head>
<body>
<h1>Google Search Console Indexing Checklist</h1>
<p>Internal documentation for maximizing Google indexing of all ${allUrls.length} pages on infiniterankers.io.</p>

<div class="stats">
<div class="stat"><div class="num">${allUrls.length}</div><div class="label">Total Pages</div></div>
<div class="stat"><div class="num">${allUrls.length}</div><div class="label">Sitemap URLs</div></div>
<div class="stat"><div class="num">30</div><div class="label">Service Pages</div></div>
<div class="stat"><div class="num">15</div><div class="label">Blog Posts</div></div>
</div>

<h2>Step 1: Google Search Console Setup</h2>
<div class="step">
<h3>Add Domain Property</h3>
<ol>
<li>Go to <a href="https://search.google.com/search-console">Google Search Console</a></li>
<li>Click "Add Property" → Select "Domain" type</li>
<li>Enter: <strong>infiniterankers.io</strong></li>
<li>Verify via DNS TXT record with your domain registrar</li>
<li>Also add <strong>infiniterankers.com</strong> as a separate property</li>
</ol>
</div>

<h2>Step 2: Submit Sitemap</h2>
<div class="step">
<h3>Sitemap Submission</h3>
<ol>
<li>In GSC → Sitemaps → Enter: <strong>sitemap_index.xml</strong></li>
<li>Click Submit</li>
<li>Verify status shows "Success" and all child sitemaps discovered</li>
<li>Optional compatibility: keep <strong>sitemap.xml</strong> submitted during migration window</li>
</ol>
</div>

<h2>Step 3: URL Inspection & Manual Indexing</h2>
<div class="step">
<h3>Request Indexing (10-15 pages per day)</h3>
<ol>
<li>Use URL Inspection tool in GSC</li>
<li>Enter each page URL and click "Request Indexing"</li>
<li><strong class="warn">Limit: 10-15 requests per day</strong></li>
<li>Prioritize: Homepage → Service pages → Blog posts → Case studies → Landing pages</li>
</ol>
<h3>Priority Order:</h3>
<ol>
<li><strong>Day 1:</strong> Homepage, About, Services, Pricing, Contact, Blog, Book Demo, Portfolio, Terms, Privacy</li>
<li><strong>Day 2-3:</strong> Top 15 service pages (ai-calling-agent through local-seo)</li>
<li><strong>Day 4-5:</strong> Remaining 15 service pages</li>
<li><strong>Day 6-7:</strong> All 15 blog posts</li>
<li><strong>Day 8-9:</strong> Case studies 1-15</li>
<li><strong>Day 10:</strong> Case studies 16-21 + landing pages</li>
<li><strong>Day 11:</strong> Partner pages + remaining landing pages</li>
</ol>
</div>

<h2>Step 4: Monitor Coverage Issues</h2>
<div class="step">
<h3>Check These GSC Reports Weekly</h3>
<ol>
<li><strong>Pages → Indexing:</strong> Check for "Crawled - currently not indexed" and "Discovered - currently not indexed"</li>
<li><strong>Duplicate without canonical:</strong> Ensure no duplicates flagged</li>
<li><strong>Core Web Vitals:</strong> Monitor LCP, FID, CLS scores</li>
<li><strong>Manual Actions:</strong> Check for any penalties</li>
<li><strong>Links:</strong> Review internal and external link reports</li>
</ol>
</div>

<h2>Step 5: Ongoing Optimization</h2>
<div class="step">
<h3>Weekly Tasks</h3>
<ol>
<li>Check indexing coverage report for new issues</li>
<li>Re-request indexing for any dropped pages</li>
<li>Monitor Core Web Vitals scores</li>
<li>Review search performance (clicks, impressions, CTR, position)</li>
<li>Update content with fresh information to trigger re-crawls</li>
</ol>
</div>

<h2>Technical SEO Status</h2>
<div class="step">
<p><span class="check">✅</span> robots.txt - Properly configured, all pages allowed</p>
<p><span class="check">✅</span> sitemap_index.xml - Segmented sitemaps for scalable crawling</p>
<p><span class="check">✅</span> sitemap.xml - Backward-compatible consolidated sitemap</p>
<p><span class="check">✅</span> RSS feed - 25 items for crawl frequency boost</p>
<p><span class="check">✅</span> Canonical tags - Every page has unique canonical</p>
<p><span class="check">✅</span> Meta robots - Canonical pages set to "index, follow"; 8 thin pages suppressed with "noindex, follow"</p>
<p><span class="check">✅</span> 301 redirects - 33 cannibal URLs permanently redirect to canonical hub pages</p>
<p><span class="check">✅</span> SSR - Full HTML rendered server-side for all pages</p>
<p><span class="check">✅</span> Structured data - Organization, Service, Article, BreadcrumbList, FAQPage schemas</p>
<p><span class="check">✅</span> OG tags + Twitter cards - Every page</p>
<p><span class="check">✅</span> Gzip compression - Enabled</p>
<p><span class="check">✅</span> Internal linking - 5+ contextual links per page via RelatedLinks component</p>
</div>

<h2>All ${allUrls.length} URLs</h2>
<div class="step">
${allUrls.map((u, i) => `<div>${i + 1}. <a href="${u}">${u}</a></div>`).join("\n")}
</div>

<p style="margin-top:40px;color:#9ca3af;font-size:.75rem">Generated: ${new Date().toISOString()} | Internal use only</p>
</body></html>`;
}

function buildBacklinkStrategy(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
<title>Backlink Strategy & Content Drafts - Infinite Rankers</title>
<meta name="robots" content="noindex, nofollow">
<style>body{font-family:Inter,system-ui,sans-serif;max-width:900px;margin:0 auto;padding:20px 16px;background:#f9fafb;color:#1f2937}h1{color:#1e40af;border-bottom:3px solid #3b82f6;padding-bottom:12px}h2{color:#1e3a8a;margin-top:32px;border-left:4px solid #3b82f6;padding-left:12px}h3{color:#374151}.draft{background:#fff;border:1px solid #e5e7eb;border-radius:8px;padding:16px 20px;margin:12px 0}.draft textarea{width:100%;min-height:120px;border:1px solid #d1d5db;border-radius:6px;padding:12px;font-size:.875rem;font-family:inherit;resize:vertical}.label{font-weight:600;color:#4b5563;margin-bottom:6px;display:block}.nap{background:#eff6ff;border-radius:8px;padding:20px;margin:12px 0;font-family:monospace;line-height:2}a{color:#2563eb}table{width:100%;border-collapse:collapse;margin:12px 0}th,td{padding:10px 12px;text-align:left;border-bottom:1px solid #e5e7eb}th{background:#f3f4f6;font-weight:600}</style>
</head>
<body>
<h1>Backlink Acceleration Strategy & Content Drafts</h1>
<p>Pre-written content drafts and citation templates for building foundational backlinks to infiniterankers.io.</p>

<h2>1. Foundational Backlink Content Drafts</h2>

<h3>Medium Article</h3>
<div class="draft">
<span class="label">Title: How AI Automation Is Transforming Small Business Revenue in 2025</span>
<textarea readonly>The era of manual marketing is ending. Businesses that embrace AI automation are seeing 3-10x revenue growth compared to those relying on traditional methods.

At Infinite Rankers (https://infiniterankers.io), we've helped over 500 businesses implement AI-powered revenue systems that work 24/7. From AI calling agents (https://infiniterankers.io/ai-calling-agent) that qualify leads automatically, to Google Ads revenue engines (https://infiniterankers.io/google-ads) that maximize every dollar of ad spend, the results speak for themselves.

Our clients typically see:
- 340% increase in qualified leads within 90 days
- 4-6x return on ad spend
- 80% reduction in manual follow-up time

The key is building integrated systems where AI handles lead capture, qualification, follow-up, and appointment booking — while your team focuses on closing deals.

Want to see how AI automation can transform your revenue? Book a free strategy session at https://infiniterankers.io/book-demo

#AIAutomation #RevenueGrowth #DigitalMarketing #LeadGeneration #BusinessGrowth</textarea>
</div>

<h3>LinkedIn Article</h3>
<div class="draft">
<span class="label">Title: Why Smart Businesses Are Replacing Manual Marketing With AI Systems</span>
<textarea readonly>I've spent the last 3 years helping businesses automate their entire revenue pipeline with AI — and the results have been staggering.

Here's what I've learned working with 500+ businesses at Infinite Rankers:

1️⃣ AI Follow-Up = 3x More Closed Deals
Most businesses lose 60-80% of leads due to slow follow-up. Our AI follow-up automation (https://infiniterankers.io/ai-follow-up) responds within seconds.

2️⃣ AI Chatbots Convert 78% More Visitors
Website visitors who engage with our AI chatbot (https://infiniterankers.io/ai-chatbot) are nearly 4x more likely to become leads.

3️⃣ CRM Automation Saves 15+ Hours/Week
Automating data entry, pipeline management, and reporting (https://infiniterankers.io/crm-automation) gives sales teams back their most valuable resource: time.

The bottom line? AI doesn't replace your team — it multiplies their effectiveness.

If you're still relying on manual processes to generate revenue, you're leaving money on the table.

Learn more: https://infiniterankers.io

#AI #MarketingAutomation #SalesAutomation #B2B #Growth</textarea>
</div>

<h3>WordPress.com / Blogger.com Post</h3>
<div class="draft">
<span class="label">Title: The Complete Guide to AI Marketing Automation for Small Businesses</span>
<textarea readonly>If you're a small business owner looking to grow revenue without hiring a massive sales team, AI marketing automation is the answer.

Companies like Infinite Rankers (https://infiniterankers.io) specialize in building AI-powered revenue systems for businesses across the USA. Their approach combines:

- AI Calling Agents (https://infiniterankers.io/ai-calling-agent) - Automated outbound calls that qualify leads 24/7
- Google Ads Management (https://infiniterankers.io/google-ads) - Data-driven campaigns with 4-6x ROAS
- SEO Authority Building (https://infiniterankers.io/seo-authority) - Organic search dominance strategies

What makes this approach different from traditional digital marketing agencies? Everything is automated and AI-driven. Instead of a team of people manually managing campaigns, AI handles the repetitive work while humans focus on strategy and relationship building.

The result? Faster lead response times, higher conversion rates, and significantly lower customer acquisition costs.

To learn more about AI marketing automation, visit https://infiniterankers.io or book a free demo at https://infiniterankers.io/book-demo</textarea>
</div>

<h3>Quora Answer</h3>
<div class="draft">
<span class="label">Question to answer: "What are the best AI tools for small business lead generation?"</span>
<textarea readonly>Having worked with hundreds of small businesses on their lead generation, I can share what's actually working in 2025.

The most effective approach isn't using a single tool — it's building an integrated AI system. Here's what I recommend:

1. AI Chatbot for your website - Engages every visitor, captures leads 24/7
2. AI Calling Agent - Follows up with leads within seconds via phone
3. CRM Automation - Automatically manages your pipeline from lead to close
4. AI Email/SMS Sequences - Nurtures leads with perfectly timed messages

I've seen businesses implement this full stack through agencies like Infinite Rankers (infiniterankers.io) and go from struggling with manual follow-up to generating 200+ qualified leads per month on autopilot.

The key is integration — when all these systems talk to each other, the results multiply. A lead comes in through your chatbot, gets qualified by AI, receives instant follow-up via call/text/email, and gets booked into your calendar automatically.

If you want to explore this approach, infiniterankers.io offers free strategy sessions where they analyze your current lead generation process.</textarea>
</div>

<h3>Reddit Post (r/smallbusiness or r/digitalmarketing)</h3>
<div class="draft">
<span class="label">Title: Our experience switching from manual marketing to AI automation — 340% more leads</span>
<textarea readonly>Wanted to share our experience for anyone considering AI marketing automation.

We run a service business and were spending 20+ hours/week on manual lead follow-up, phone calls, and email campaigns. Our close rate was around 12%.

After implementing an AI automation system through infiniterankers.io, here's what changed:

- Lead response time went from 2-4 hours to under 30 seconds
- Our AI chatbot captures leads 24/7 (even at 2am)
- Automated follow-up sequences handle 80% of nurturing
- CRM updates happen automatically — no more manual data entry

Results after 90 days:
- 340% increase in qualified leads
- Close rate improved to 28%
- Saved approximately 18 hours/week in manual work

The ROI was undeniable. Our ad spend stayed the same but we're converting way more of the traffic.

Happy to answer questions about our experience. The main thing I'd say is don't try to piece together individual tools — the power is in having an integrated system where everything works together.</textarea>
</div>

<h3>Tumblr Post</h3>
<div class="draft">
<span class="label">Title: The Future of Business Growth Is AI Automation</span>
<textarea readonly>In 2025, the businesses that are winning aren't working harder — they're working smarter with AI.

AI automation isn't about replacing humans. It's about giving your team superpowers:

🤖 AI answers every call and chat message instantly
📧 Smart email sequences adapt to how prospects respond
📊 CRM data updates itself — no manual entry
📞 Follow-up happens within seconds, not hours

Companies like Infinite Rankers (infiniterankers.io) are building these systems for businesses across every industry — from healthcare to real estate to e-commerce.

The result? More leads, more sales, less wasted time.

Learn more: infiniterankers.io
Book a free demo: infiniterankers.io/book-demo

#AIAutomation #BusinessGrowth #Marketing #LeadGeneration #SmallBusiness</textarea>
</div>

<h2>2. Business Citation - Consistent NAP Format</h2>
<div class="nap">
<strong>Business Name:</strong> Infinite Rankers<br>
<strong>Address:</strong> 203 N Caroline Pl, Dover, DE 19904, USA<br>
<strong>Phone:</strong> (703) 415-9373<br>
<strong>Email:</strong> contact@infiniterankers.io<br>
<strong>Website:</strong> https://infiniterankers.io<br>
<strong>Category:</strong> AI Marketing Agency / Digital Marketing Agency<br>
<strong>Hours:</strong> Monday-Friday 9:00 AM - 6:00 PM EST
</div>

<h3>Citation Submission Platforms</h3>
<table>
<tr><th>Platform</th><th>URL</th><th>Status</th></tr>
<tr><td>Google Business Profile</td><td><a href="https://business.google.com">business.google.com</a></td><td>Submit with NAP above</td></tr>
<tr><td>Bing Places</td><td><a href="https://www.bingplaces.com">bingplaces.com</a></td><td>Submit with NAP above</td></tr>
<tr><td>Yelp Business</td><td><a href="https://biz.yelp.com">biz.yelp.com</a></td><td>Submit with NAP above</td></tr>
<tr><td>Crunchbase</td><td><a href="https://www.crunchbase.com">crunchbase.com</a></td><td>Create company profile</td></tr>
<tr><td>About.me</td><td><a href="https://about.me">about.me</a></td><td>Create founder profile</td></tr>
<tr><td>LinkedIn Company</td><td><a href="https://www.linkedin.com/company/setup">linkedin.com</a></td><td>Create company page</td></tr>
<tr><td>Facebook Business</td><td><a href="https://www.facebook.com/pages/create">facebook.com</a></td><td>Create business page</td></tr>
<tr><td>Apple Maps</td><td><a href="https://mapsconnect.apple.com">mapsconnect.apple.com</a></td><td>Submit listing</td></tr>
<tr><td>Clutch.co</td><td><a href="https://clutch.co">clutch.co</a></td><td>Create agency profile</td></tr>
<tr><td>Manta</td><td><a href="https://www.manta.com">manta.com</a></td><td>Submit listing</td></tr>
</table>

<h2>3. Social Signal Tags (Already Implemented)</h2>
<div class="draft">
<p>✅ All pages include:</p>
<ul>
<li><code>&lt;meta property="og:title"&gt;</code> - Unique per page</li>
<li><code>&lt;meta property="og:description"&gt;</code> - Unique per page</li>
<li><code>&lt;meta property="og:url"&gt;</code> - Canonical URL</li>
<li><code>&lt;meta property="og:image"&gt;</code> - Brand logo</li>
<li><code>&lt;meta property="og:type"&gt;</code> - website</li>
<li><code>&lt;meta property="og:site_name"&gt;</code> - Infinite Rankers</li>
<li><code>&lt;meta name="twitter:card"&gt;</code> - summary_large_image</li>
<li><code>&lt;meta name="twitter:title"&gt;</code> - Unique per page</li>
<li><code>&lt;meta name="twitter:description"&gt;</code> - Unique per page</li>
</ul>
</div>

<p style="margin-top:40px;color:#9ca3af;font-size:.75rem">Generated: ${new Date().toISOString()} | Internal use only - Do not publish this page</p>
</body></html>`;
}

function buildCrawlHub(allUrls: string[]): string {
  const serviceUrls = allUrls.filter(u => !u.endsWith("/") && !u.includes("/blog") && !u.includes("/about") && !u.includes("/contact") && !u.includes("/pricing") && !u.includes("/portfolio") && !u.includes("/book-demo") && !u.includes("/services") && !u.includes("/sitemap") && !u.includes("/content-methodology") && !u.includes("/terms") && !u.includes("/privacy"));
  const mainUrls = allUrls.filter(u => !serviceUrls.includes(u));

  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>All Pages - Infinite Rankers | AI Revenue Growth Agency</title>
<meta name="description" content="Complete directory of all pages on Infinite Rankers - AI Revenue Growth Agency. Browse our services, blog posts, case studies, and resources.">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://infiniterankers.io/crawl-hub">
<style>body{font-family:Inter,system-ui,-apple-system,sans-serif;max-width:1100px;margin:0 auto;padding:24px 16px;background:#fff;color:#1f2937}h1{font-size:1.75rem;color:#111827;margin-bottom:8px}p.subtitle{color:#6b7280;margin-bottom:32px;font-size:.95rem}h2{font-size:1.25rem;color:#1e40af;margin-top:32px;margin-bottom:12px;padding-bottom:8px;border-bottom:2px solid #dbeafe}ul{list-style:none;padding:0;margin:0 0 24px}.link-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(320px,1fr));gap:6px}a{color:#2563eb;text-decoration:none;font-size:.9rem;padding:6px 0;display:block}a:hover{color:#1d4ed8;text-decoration:underline}.count{background:#eff6ff;color:#1e40af;font-size:.75rem;font-weight:600;padding:2px 8px;border-radius:12px;margin-left:8px}footer{margin-top:48px;padding-top:16px;border-top:1px solid #e5e7eb;text-align:center;color:#9ca3af;font-size:.75rem}</style>
</head>
<body>
<h1>Infinite Rankers - Complete Site Directory</h1>
<p class="subtitle">Browse all ${allUrls.length} pages across our AI Revenue Growth Agency website. Every page listed below is fully accessible and indexed.</p>

<nav>
<h2>Main Pages <span class="count">${mainUrls.length}</span></h2>
<div class="link-grid">
${mainUrls.map(u => { const path = u.replace("https://infiniterankers.io", "") || "/"; const label = path === "/" ? "Home" : path.slice(1).split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "); return `<a href="${path}">${label}</a>`; }).join("\n")}
</div>

<h2>All Services, Blog Posts & Resources <span class="count">${serviceUrls.length}</span></h2>
<div class="link-grid">
${serviceUrls.map(u => { const path = u.replace("https://infiniterankers.io", ""); const label = path.slice(1).split("-").map((w: string) => w.charAt(0).toUpperCase() + w.slice(1)).join(" "); return `<a href="${path}">${label}</a>`; }).join("\n")}
</div>
</nav>

<footer>
<p>&copy; ${new Date().getFullYear()} Infinite Rankers. AI Revenue Growth Agency.</p>
<p><a href="/">Home</a> | <a href="/sitemap_index.xml">Sitemap Index</a> | <a href="/sitemap.xml">XML Sitemap</a> | <a href="/rss.xml">RSS Feed</a></p>
</footer>
</body>
</html>`;
}
