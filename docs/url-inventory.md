# URL Inventory — Infinite Rankers (Task #3)

Complete decision record for every URL class served at infiniterankers.io.
Decision values: **KEEP** (canonical, indexed, in sitemap) | **301** (permanent redirect) | **NOINDEX** (served but suppressed)

---

## 1. Core / Static Pages — KEEP

| URL | Notes |
|-----|-------|
| `/` | Homepage — canonical root |
| `/about` | About page |
| `/services` | Cluster hub for all services (anchor deep-links per cluster) |
| `/portfolio` | Case study index |
| `/pricing` | Pricing tiers |
| `/contact` | Contact form |
| `/blog` | Blog index |
| `/book-demo` | Booking funnel |
| `/google-partner` | Google Partner credential page |
| `/content-methodology` | Editorial standards |
| `/terms` | Terms of Service |
| `/privacy` | Privacy Policy |
| `/sitemap` | HTML sitemap page |

---

## 2. Service Detail Pages — KEEP (30 pages)

All 30 service pages are canonical. They are registered in `SERVICE_SLUGS` and appear in `sitemap-services.xml`.

| Cluster | Services (slugs) |
|---------|-----------------|
| AI & Automation | `ai-calling-agent`, `ai-receptionist`, `ai-lead-qualification`, `ai-appointment-booking`, `ai-follow-up`, `ai-sales-assistant`, `ai-chatbot`, `ai-email-automation`, `ai-sms-automation`, `crm-automation`, `workflow-automation` |
| Lead Generation | `google-ads`, `meta-ads`, `seo-authority`, `local-seo`, `conversion-funnels`, `landing-page-optimization`, `conversion-rate-optimization` |
| Social & Content | `social-media-marketing`, `instagram-growth`, `facebook-growth`, `content-writing`, `branding-design`, `video-marketing` |
| Development | `website-development`, `landing-page-development`, `crm-setup`, `saas-integrations`, `marketing-automation-setup`, `analytics-dashboard` |

Additional service-like static pages that appear in STATIC_PAGES:
`/workflow-automation`, `/saas-integrations`, `/video-marketing`, `/facebook-growth`, `/local-seo`, `/seo-authority`, `/conversion-funnels`, `/analytics-dashboard`, `/branding-design`

---

## 3. Blog Posts — KEEP (15 pages)

All 15 blog posts are canonical and appear in `sitemap-blog.xml`. These were previously duplicated in `STATIC_PAGES` — those duplicates have been removed so SEO lookup flows correctly through the `BLOG_POSTS` array.

| Slug |
|------|
| `ai-automation-revenue-growth-2025` |
| `ai-chatbot-lead-conversion` |
| `ai-follow-up-sequences` |
| `brand-identity-business-growth` |
| `content-marketing-seo-guide` |
| `crm-automation-sales-pipeline` |
| `ecommerce-growth-strategies` |
| `google-ads-roi-local-business` |
| `healthcare-marketing-patient-acquisition` |
| `lead-generation-strategies-2025` |
| `local-business-digital-marketing` |
| `real-estate-lead-generation-ai` |
| `seo-vs-paid-ads-strategy` |
| `social-media-marketing-strategy-2025` |
| `website-conversion-optimization` |

---

## 4. Case Study Pages — KEEP (21 pages)

All 21 case studies are canonical and appear in `sitemap-cases.xml`.

| Slug |
|------|
| `case-study-dental-practice-revenue-transformation` |
| `case-study-ecommerce-cart-recovery-scaling` |
| `case-study-real-estate-ai-lead-generation` |
| `case-study-saas-growth-acceleration` |
| `case-study-law-firm-client-intake-automation` |
| `case-study-fitness-studio-membership-growth` |
| `case-study-restaurant-chain-local-seo-transformation` |
| `case-study-medical-clinic-patient-acquisition` |
| `case-study-wealth-management-digital-lead-generation` |
| `case-study-home-services-plumbing-hvac-lead-machine` |
| `case-study-auto-dealership-ai-sales-acceleration` |
| `case-study-online-coaching-enrollment-automation` |
| `case-study-boutique-hotel-direct-booking-engine` |
| `case-study-insurance-agency-renewal-automation` |
| `case-study-commercial-contractor-brand-lead-growth` |
| `case-study-cpa-firm-onboarding-automation` |
| `case-study-luxury-salon-ai-booking-instagram-growth` |
| `case-study-immigration-law-multilingual-lead-generation` |
| `case-study-freight-brokerage-workflow-automation` |
| `case-study-cnc-manufacturer-digital-lead-generation` |
| `case-study-veterinary-clinic-ai-appointment-growth` |

Numeric aliases `1`–`21` all 301-redirect to the slug versions (Task #1).

---

## 5. SEO Cannibal Pages — 301 Redirect

These pages created keyword cannibalization competing with `/seo-authority`. All now permanently redirect.

| Slug | Redirects To |
|------|-------------|
| `seo-agency` | `/seo-authority` |
| `seo-consultant` | `/seo-authority` |
| `seo-services` | `/seo-authority` |
| `google-seo` | `/seo-authority` |
| `seo-specialist` | `/seo-authority` |
| `best-seo-companies` | `/seo-authority` |
| `search-engine-marketing` | `/seo-authority` |
| `website-ranking` | `/seo-authority` |
| `seo-agency-near-me` | `/seo-authority` |
| `seo-keywords` | `/seo-authority` |
| `digital-marketing-seo` | `/seo-authority` |

---

## 6. PPC/Ads Cannibal Pages — 301 Redirect

These pages competed with `/google-ads`. All now permanently redirect.

| Slug | Redirects To |
|------|-------------|
| `ppc-agency` | `/google-ads` |
| `ppc-management-services` | `/google-ads` |
| `paid-media-agency` | `/google-ads` |

---

## 7. Social & Content Cannibal Pages — 301 Redirect

| Slug | Redirects To |
|------|-------------|
| `social-media-marketing-agency` | `/social-media-marketing` |
| `social-media-marketing-agency-near-me` | `/social-media-marketing` |
| `content-marketing-services` | `/content-writing` |
| `email-marketing-services` | `/ai-email-automation` |
| `branding-agency` | `/branding-design` |
| `automation-agency` | `/services` |

---

## 8. Generic Agency / Marketing Cannibal Pages — 301 Redirect

These competed with `/services` as the canonical agency hub.

| Slug | Redirects To |
|------|-------------|
| `digital-marketing-agency` | `/services` |
| `digital-marketing-company` | `/services` |
| `digital-marketing-services` | `/services` |
| `digital-marketing-firms` | `/services` |
| `online-marketing-company` | `/services` |
| `marketing-agency-near-me` | `/services` |
| `best-digital-marketing-agencies` | `/services` |

---

## 9. AI & Automation Cannibal Pages — 301 Redirect

| Slug | Redirects To |
|------|-------------|
| `ai-lead-generation-usa` | `/ai-calling-agent` |
| `ai-marketing-automation-usa` | `/workflow-automation` |
| `b2b-lead-generation` | `/ai-lead-qualification` |

---

## 10. Branded Partner Pages — 301 Redirect

These `/infinite-rankers-*` pages were created for whitelabel/partner traffic and now redirect to primary service pages. React routes are preserved for backward compatibility.

| Slug | Redirects To |
|------|-------------|
| `infinite-rankers-agency` | `/services` |
| `infinite-rankers-seo-services` | `/seo-authority` |
| `infinite-rankers-paid-advertising` | `/google-ads` |
| `infinite-rankers-ai-automation` | `/ai-calling-agent` |

---

## 11. City / Industry Landing Pages — NOINDEX

These pages exist in the React router and serve HTML but are suppressed from search engine indexing. They are NOT in the sitemap. They receive `<meta name="robots" content="noindex, follow">`. Industry vertical pages (Task #5) will eventually replace these.

| Slug | Industry/Geo Angle |
|------|-------------------|
| `ai-automation-new-york` | City — New York |
| `ai-automation-los-angeles` | City — Los Angeles |
| `ai-automation-chicago` | City — Chicago |
| `ai-revenue-growth-real-estate` | Vertical — Real Estate |
| `ai-revenue-growth-healthcare` | Vertical — Healthcare |
| `ai-revenue-growth-law-firms` | Vertical — Law Firms |
| `ai-revenue-growth-ecommerce` | Vertical — E-Commerce |
| `ai-revenue-growth-restaurants` | Vertical — Restaurants |

---

## 12. Admin / Internal Pages — NOINDEX (X-Robots-Tag header)

| URL | Notes |
|-----|-------|
| `/admin/indexing` | Admin dashboard — noindex via X-Robots-Tag |
| `/crawl-hub` | Internal crawl tool — noindex |
| `/api/*` | API routes — noindex via X-Robots-Tag |

---

## Sitemap Structure (post-cleanup)

| Child Sitemap | URL | Contents |
|---------------|-----|----------|
| Main | `/sitemap-main.xml` | 12 core pages |
| Services | `/sitemap-services.xml` | 30 service detail pages |
| Cases | `/sitemap-cases.xml` | 21 case study slugs |
| Blog | `/sitemap-blog.xml` | 15 blog post slugs |

**Removed sitemaps**: `sitemap-landing.xml` and `sitemap-partner.xml` (all those URLs are now 301 redirected or noindexed).

---

## Implementation Files

| Change | File |
|--------|------|
| 301 redirect map | `server/routes.ts` → `URL_CONSOLIDATION_MAP` |
| Noindex signal | `server/seo.ts` → `noindexPaths` array in `injectSEO()` |
| Sitemap cleanup | `server/sitemap.ts` → removed landing/partner children |
| STATIC_PAGES cleanup | `server/seo.ts` → removed duplicates/cannibal entries |
| Services cluster hub | `client/src/pages/services.tsx` → anchor IDs + popular badges |
