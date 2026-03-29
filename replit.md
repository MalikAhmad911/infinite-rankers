# Infinite Rankers - AI Revenue Systems Agency Website

## Overview
Premium multi-page business website for Infinite Rankers LLC — an AI Revenue Systems Agency at infiniterankers.io. Built with React + Tailwind CSS + Framer Motion animations. Features a clean, modern Stripe-inspired light theme with blue/indigo/purple gradient accents.

## Tech Stack
- **Frontend**: React, Wouter (routing), TanStack React Query, Framer Motion, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM (Replit built-in)
- **Styling**: Tailwind CSS with permanent light mode (blue/purple gradient accents), glassmorphism cards, custom CSS animations

## Running the Project
- **Dev**: `npm run dev` (starts Express + Vite on port 5000)
- **Build**: `tsx script/build.ts` (builds 3 outputs: client bundle, SSR bundle, server bundle)
- **Production**: `NODE_ENV=production node dist/index.cjs` (runs built server from dist/index.cjs)
- **DB Push**: `npm run db:push` (push schema changes to database)

## Build Outputs (all required for Hostinger deployment)
- `dist/public/` — Client bundle (Vite)
- `dist/ssr/entry-server.cjs` — SSR bundle for server-side rendering
- `dist/index.cjs` — Express server bundle (esbuild)

## Project Structure
```
client/src/
  components/       # Shared components (navbar, footer, glass-card, ai-chatbot, seo-head, section-header, theme-provider, google-partner-badge)
  pages/            # All page components (home, about, services, portfolio, pricing, contact, blog, book-demo, service-detail)
  lib/              # Utilities and constants (constants.ts has SERVICE_PILLARS, ALL_SERVICES, SERVICE_CONTENT, SERVICE_VISUAL_THEMES, CASE_STUDIES, PRICING_TIERS, etc.)
  hooks/            # Custom hooks

server/
  index.ts          # Express app entry point (serves on port 5000)
  routes.ts         # API endpoints, 301 redirects (OLD_SERVICE_REDIRECT_MAP, URL_CONSOLIDATION_MAP)
  storage.ts        # Database storage interface
  db.ts             # Database connection
  vite.ts           # Vite dev server middleware
  static.ts         # Static file serving for production
  seo.ts            # SEO injection middleware
  sitemap.ts        # XML sitemap, RSS feed, LLM-facing text content
  google-indexing.ts # Google/Bing sitemap pinging

shared/
  schema.ts         # Drizzle schema (contacts, demoBookings tables)

script/
  build.ts          # Production build script (Vite + esbuild)
```

## Service Architecture (7 Pillar Model)
The site is positioned as an **AI Revenue Systems Agency** with 7 clean service pillars (replaced old 30+ service model):

| Slug | Title |
|------|-------|
| `ai-lead-capture` | AI Lead Capture Systems |
| `ai-appointment-agents` | AI Appointment & Sales Agents |
| `crm-pipeline-automation` | CRM & Pipeline Automation |
| `customer-support-ai` | Customer Support & Operations AI |
| `reviews-reactivation-retention` | Reviews, Reactivation & Retention |
| `custom-saas-tools` | Custom SaaS & Internal Tools |
| `revenue-automation-consulting` | Revenue Automation Consulting |

Key data structures in `client/src/lib/constants.ts`:
- `SERVICE_PILLARS` — 7 pillar objects (slug, title, tagline, description, highlights, icon)
- `ALL_SERVICES` — derived from SERVICE_PILLARS for routing/lookup
- `SERVICE_CONTENT` — rich per-pillar content (hero, problems, solutions, features, FAQs, workflow steps, etc.)
- `SERVICE_VISUAL_THEMES` — per-pillar visual theming (hero mockup type, gradient colors)

## Design System
- **Theme**: Permanent light mode (Stripe-inspired aesthetic, no dark mode toggle)
- **Colors**: Clean light palette with blue/purple gradient accents
- **Accents**: Blue (#3B82F6), Purple (#8B5CF6), Cyan (#06B6D4) gradients
- **Cards**: Card component (shadcn) for pricing/content, GlassCard for special sections (ROI calculator)
- **Interactions**: toggle-elevate + toggle-elevated pattern for selectable elements (date/time pickers)
- **Custom animations**: animate-glow-pulse, animate-float, animate-slide-left (defined in index.css)

## Pages
1. Homepage - Animated KPI counters, floating dashboard panels, auto-sliding service carousel, testimonial slider, glow effects
2. About - Mission, vision, differentiators, AI philosophy
3. Services Overview (`/services`) - 7 pillar cards with highlights and CTAs
4. Service Detail (dynamic) - Per-pillar pages at `/{slug}` with problems/solutions, workflow, features, FAQs, related services, case studies
5. Portfolio - Case studies with category filtering tabs
6. Pricing - 3-tier AI Revenue Systems pricing (Starter $997/mo, Growth $2,497/mo, Revenue OS $4,997/mo) with setup fees, pillar inclusions, add-ons, ROI calculator (23% conversion improvement model), pricing FAQ, and Custom Build option
7. Contact - Contact form, Google Maps, business info
8. Blog - 15 blog post articles
9. Book Demo - Calendar date picker, time slots, qualification form
10. Industry Vertical Pages (7 pages) — `/dental-ai`, `/hvac-ai`, `/law-firm-ai`, `/real-estate-ai`, `/medical-ai`, `/ecommerce-ai`, `/home-services-ai` — fully routed via SmartPage in App.tsx using INDUSTRY_VERTICALS from constants.ts; includes AI-positioned hero, outcomes, problem/solution, pillar highlights (4 service cards with industry-specific outcomes), case study, FAQs, CTA, and related industries sections; registered in the "Who We Serve" nav mega-menu automatically
11. Landing Pages (8 noindex pages) - City/industry pages (NYC, LA, Chicago; real-estate, healthcare, law firms, e-commerce, restaurants) — noindexed, not in sitemap
12. Terms of Service (`/terms`) - 14-section legal page
13. Privacy Policy (`/privacy`) - 14-section privacy page
14. Sitemap (`/sitemap`) - Visual sitemap page

## Database Tables
- `contacts` - name, email, phone, company, message
- `demo_bookings` - name, email, phone, company, website, revenue, service, date, time, message

## Deployment
- **Target**: Autoscale
- **Build**: `npm run build`
- **Run**: `npm run start`

## SEO Architecture
- **301 redirects for old slugs**: All 30+ old service slugs redirect to the appropriate new pillar slug via `OLD_SERVICE_REDIRECT_MAP` in `server/routes.ts`
- **URL consolidation**: Additional cannibal URL redirects via `URL_CONSOLIDATION_MAP` in `server/routes.ts`
- **Noindex pages**: City/industry landing pages noindexed via `noindexPaths` in `server/seo.ts`
- **Sitemap**: `server/sitemap.ts` — only the 7 new pillar slugs in `SERVICE_SLUGS`
- **Partner pages** (`/infinite-rankers-*`): redirect to primary service pages

## User Preferences
- Clean, modern AI SaaS design style (Stripe-inspired, light mode)
- Blue/purple gradient accents
- Revenue and automation focused copy
- Inter font family
- Advanced animations (floating, sliding, counting)
- Professional, trust-building aesthetic
