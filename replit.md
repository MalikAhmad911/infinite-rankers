# Infinite Rankers - AI Revenue Growth Agency Website

## Overview
Premium multi-page business website for Infinite Rankers, an AI Revenue Growth Agency. Built with React + Tailwind CSS + Framer Motion animations. Features a dark luxury AI SaaS theme with deep navy/black gradients, electric blue/neon purple/cyan accents, and glassmorphism design.

## Tech Stack
- **Frontend**: React, Wouter (routing), TanStack React Query, Framer Motion, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM (Replit built-in)
- **Styling**: Tailwind CSS with dark luxury theme (deep navy backgrounds, blue/purple accents), glassmorphism cards, custom CSS animations

## Running the Project
- **Dev**: `npm run dev` (starts Express + Vite on port 5000)
- **Build**: `npm run build` (builds client with Vite, bundles server with esbuild)
- **Production**: `npm run start` (runs built server from dist/index.cjs)
- **DB Push**: `npm run db:push` (push schema changes to database)

## Project Structure
```
client/src/
  components/       # Shared components (navbar, footer, glass-card, ai-chatbot, seo-head, section-header, theme-provider, google-partner-badge)
  pages/            # All page components (home, about, services, portfolio, pricing, contact, blog, book-demo, service-detail)
  lib/              # Utilities and constants (constants.ts has SERVICE_CATEGORIES, SERVICE_CONTENT, CASE_STUDIES, PRICING_TIERS, etc.)
  hooks/            # Custom hooks

server/
  index.ts          # Express app entry point (serves on port 5000)
  routes.ts         # API endpoints for contacts and demo bookings
  storage.ts        # Database storage interface
  db.ts             # Database connection
  vite.ts           # Vite dev server middleware
  static.ts         # Static file serving for production
  seo.ts            # SEO injection middleware

shared/
  schema.ts         # Drizzle schema (contacts, demoBookings tables)

script/
  build.ts          # Production build script (Vite + esbuild)
```

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
3. Services Overview - 4 category grid linking to individual services
4. Service Detail (dynamic) - Per-service pages at /services/:slug with problems/solutions, workflow, features, FAQs, related services, case studies
5. Portfolio - Case studies with category filtering tabs
6. Pricing - 3-tier SaaS pricing + ROI calculator
7. Contact - Contact form, Google Maps, business info
8. Blog - 6 blog post previews
9. Book Demo - Calendar date picker, time slots, qualification form
10. Landing Pages (19 pages) - High-converting funnel pages at /:slug with 10 sections each (10 location/industry + 9 keyword-targeted SEO pages)
11. Terms of Service (/terms) - 14-section legal page
12. Privacy Policy (/privacy) - 14-section privacy page

## Database Tables
- `contacts` - name, email, phone, company, message
- `demo_bookings` - name, email, phone, company, website, revenue, service, date, time, message

## Deployment
- **Target**: Autoscale
- **Build**: `npm run build`
- **Run**: `npm run start`

## User Preferences
- Premium dark luxury AI SaaS design style
- Blue/purple gradient accents with neon glow effects
- Revenue and automation focused copy
- Inter font family
- Advanced animations (floating, sliding, counting)
- Futuristic glassmorphism aesthetic
