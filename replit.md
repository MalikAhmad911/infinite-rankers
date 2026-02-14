# Infinite Rankers - AI Revenue Growth Agency Website

## Overview
Premium multi-page business website for Infinite Rankers, an AI Revenue Growth Agency. Built with React + Tailwind CSS + Framer Motion animations.

## Tech Stack
- **Frontend**: React, Wouter (routing), TanStack React Query, Framer Motion, Tailwind CSS, shadcn/ui components
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **Styling**: Tailwind CSS with custom blue/purple accent theme, glassmorphism cards

## Project Structure
```
client/src/
  components/       # Shared components (navbar, footer, glass-card, chatbot, seo-head, etc.)
  pages/            # All page components (home, about, services, portfolio, pricing, contact, blog, book-demo)
  lib/              # Utilities and constants (constants.ts has all service data, case studies, pricing, etc.)
  hooks/            # Custom hooks

server/
  routes.ts         # API endpoints for contacts and demo bookings
  storage.ts        # Database storage interface
  db.ts             # Database connection

shared/
  schema.ts         # Drizzle schema (contacts, demoBookings tables)
```

## Pages
1. Homepage - Hero, achievements, AI systems, how it works, services grid, portfolio preview, pricing preview, testimonials, CTA
2. About - Mission, vision, differentiators, AI philosophy
3. Services Overview - 4 categories with all services listed
4. Service Detail (dynamic) - Per-service landing pages at /services/:slug
5. Portfolio - 7 sample case studies with results metrics
6. Pricing - 3-tier SaaS pricing + ROI calculator
7. Contact - Contact form, Google Maps, business info
8. Blog - 6 blog post previews
9. Book Demo - Calendar date picker, time slots, qualification form

## Features
- Dark/light mode toggle
- Sticky navigation with mobile responsive menu
- Framer Motion animations throughout
- SEO metadata per page
- AI chatbot placeholder UI
- Interactive ROI calculator
- Contact form and demo booking with database persistence
- Glassmorphism card design system
- Scroll-to-top on route change

## Database Tables
- `contacts` - name, email, phone, company, message
- `demo_bookings` - name, email, phone, company, website, revenue, service, date, time, message

## User Preferences
- Premium SaaS design style
- Blue/purple gradient accents
- Revenue and automation focused copy
- Inter font family
