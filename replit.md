# Infinite Rankers - AI Revenue Growth Agency Website

## Overview
Premium multi-page business website for Infinite Rankers, an AI Revenue Growth Agency. Built with React + Tailwind CSS + Framer Motion animations. Features a dark luxury AI SaaS theme with deep navy/black gradients, electric blue/neon purple/cyan accents, and glassmorphism design.

## Tech Stack
- **Frontend**: React, Wouter (routing), TanStack React Query, Framer Motion, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with dark luxury theme (deep navy backgrounds, blue/purple accents), glassmorphism cards, custom CSS animations

## Project Structure
```
client/src/
  components/       # Shared components (navbar, footer, glass-card, chatbot, seo-head, section-header, theme-provider)
  pages/            # All page components (home, about, services, portfolio, pricing, contact, blog, book-demo, service-detail)
  lib/              # Utilities and constants (constants.ts has SERVICE_CATEGORIES, SERVICE_CONTENT, CASE_STUDIES, PRICING_TIERS, etc.)
  hooks/            # Custom hooks

server/
  routes.ts         # API endpoints for contacts and demo bookings
  storage.ts        # Database storage interface
  db.ts             # Database connection

shared/
  schema.ts         # Drizzle schema (contacts, demoBookings tables)
```

## Design System
- **Theme**: Dark mode default, with working light mode toggle
- **Colors**: :root has light palette, .dark has dark luxury palette (bg #060B1A to #0D1B2A)
- **Accents**: Blue (#3B82F6), Purple (#8B5CF6), Cyan (#06B6D4) gradients
- **Cards**: GlassCard component with optional glow effect (bg-white/[0.03] border-white/[0.06])
- **Sections**: Alternating bg-[#0A1628] and default background for visual rhythm
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

## Navigation
- **Desktop**: Mega menu dropdown on hover over "Services" with 4-category columns (30+ services)
- **Mobile**: Hamburger menu with expandable accordion for service categories
- All service links point to /services/{slug} for SEO internal linking

## Data Architecture (constants.ts)
- **SERVICE_CATEGORIES**: 4 categories (AI & Automation, Lead Generation, Social & Content, Development) with 7-8 services each
- **SERVICE_CONTENT**: Per-service unique content (longDesc, problems, solutions, features, workflowSteps, industries, faqs, relatedServices)
- **CASE_STUDIES**: 7 case studies with tags for filtering
- **PRICING_TIERS**: 3-tier pricing (Growth, Scale, Enterprise)

## Features
- Dark/light mode toggle (dark default, class-based switching)
- Mega menu navigation with 30+ service links
- Framer Motion animations throughout (staggered reveals, floating elements, auto-sliding carousels)
- SEO metadata per page (OG tags, Twitter cards, canonical URLs, keywords)
- AI chatbot placeholder UI
- Interactive ROI calculator
- Contact form and demo booking with database persistence
- Portfolio filtering by category tags
- Glassmorphism card design system with glow effects
- Scroll-to-top on route change
- Footer with direct service links for internal linking SEO

## Database Tables
- `contacts` - name, email, phone, company, message
- `demo_bookings` - name, email, phone, company, website, revenue, service, date, time, message

## User Preferences
- Premium dark luxury AI SaaS design style
- Blue/purple gradient accents with neon glow effects
- Revenue and automation focused copy
- Inter font family
- Advanced animations (floating, sliding, counting)
- Futuristic glassmorphism aesthetic
