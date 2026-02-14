# Infinite Rankers - AI Revenue Growth Agency

Premium multi-page business website for Infinite Rankers, an AI Revenue Growth Agency. Features 30+ service pages, 10 high-converting landing pages, 15 SEO-optimized blog posts, AI chatbot, and comprehensive pricing system.

## Tech Stack

- **Frontend**: React, Wouter (routing), TanStack React Query, Framer Motion, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js
- **Database**: PostgreSQL with Drizzle ORM
- **AI**: OpenAI integration for intelligent chatbot
- **Email**: SMTP integration for form notifications

## Project Structure

```
client/src/
  components/       # Shared UI components (navbar, footer, chatbot, etc.)
  pages/            # All page components (home, about, services, portfolio, pricing, contact, blog, etc.)
  lib/              # Utilities, constants, blog data, landing page data
  hooks/            # Custom React hooks

server/
  routes.ts         # API endpoints
  storage.ts        # Database storage interface
  db.ts             # Database connection

shared/
  schema.ts         # Drizzle ORM schema
```

## Features

- 30+ individual service pages with SEO metadata
- 10 high-converting landing pages (location & industry specific)
- 15 full SEO-optimized blog posts with individual detail pages
- AI chatbot powered by OpenAI with lead capture
- 3-tier pricing system ($1,599 / $2,999 / $5,999)
- Individual service pricing for all 30+ services
- Contact form and demo booking with database persistence
- Email notifications via SMTP
- Google Partner badge trust indicators
- Portfolio with category filtering
- Interactive ROI calculator
- Mega menu navigation
- Mobile-first responsive design
- Framer Motion animations throughout

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```
NODE_ENV=production
DATABASE_URL=your_postgresql_connection_string
SMTP_HOST=your_smtp_host
SMTP_PORT=your_smtp_port
SMTP_USER=your_smtp_user
SMTP_PASS=your_smtp_password
```

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/MalikAhmad911/infinite-rankers.git
   cd infinite-rankers
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables (see above)

4. Push database schema:
   ```bash
   npm run db:push
   ```

5. Build for production:
   ```bash
   npm run build
   ```

6. Start production server:
   ```bash
   npm start
   ```

The application will be available at `http://localhost:5000`

## Deployment

For VPS deployment (Hostinger, DigitalOcean, etc.):
- Use PM2 for process management: `pm2 start dist/index.cjs --name "infinite-rankers"`
- Set up Nginx as reverse proxy pointing to port 5000
- Use Let's Encrypt for SSL certificates

## Brand Ecosystem

- **infiniterankers.io** - AI Infrastructure & Automation SaaS platform (this site)
- **infiniterankers.com** - Marketing Authority & Content platform (WordPress)

## License

All rights reserved. Infinite Rankers.
