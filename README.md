# Infinite Rankers - AI Revenue Growth Agency

Premium multi-page business website for Infinite Rankers, an AI Revenue Growth Agency. Features 30+ service pages with individual pricing, 10 high-converting landing pages, 15 SEO-optimized blog posts, 21 detailed case studies, AI chatbot with lead capture, comprehensive pricing system, and advanced SEO infrastructure.

## Tech Stack

- **Frontend**: React, Wouter (routing), TanStack React Query, Framer Motion, Tailwind CSS, shadcn/ui
- **Backend**: Express.js, Node.js with TypeScript
- **Database**: PostgreSQL with Drizzle ORM
- **AI**: OpenAI integration for intelligent chatbot with streaming responses
- **Email**: SMTP integration (Nodemailer) for form notifications
- **SEO**: Dynamic meta injection, sitemap generation, RSS feeds, Google Indexing API, IndexNow protocol

## Project Structure

```
client/src/
  components/       # 13 reusable UI components (navbar, footer, chatbot, google-partner-badge, etc.)
  pages/            # 19 page components (home, about, services, portfolio, pricing, contact, blog, admin dashboard, etc.)
  lib/              # Utilities, constants, blog data, landing page data (700KB+ of content)
  hooks/            # Custom React hooks

server/
  index.ts          # Express app setup, middleware, and error handling
  routes.ts         # API endpoint registration
  storage.ts        # Database storage interface
  db.ts             # PostgreSQL connection with Drizzle ORM
  static.ts         # Static file serving and SSR rendering
  vite.ts           # Vite dev server middleware
  seo.ts            # Dynamic SEO meta tag injection (69KB)
  chatbot.ts        # OpenAI-powered chatbot with lead capture
  email.ts          # SMTP email notifications
  google-indexing.ts # Google Indexing API integration
  ai-discovery.ts   # AI discovery endpoints (llms.txt, OpenAI plugin manifest)
  indexnow.ts       # IndexNow protocol for search engines (Bing, Yandex)
  sitemap.ts        # XML sitemap and RSS feed generation (100+ URLs)

shared/
  schema.ts         # Drizzle ORM schema (contacts, demoBookings tables)
  models/           # TypeScript type definitions

script/
  build.ts          # Production build script (Vite + esbuild)
```

## Features

### Core Pages & Content
- **100+ individual pages** with dynamic routing and SEO optimization
- 30+ individual service pages with detailed pricing, FAQs, and case studies
- 10 high-converting landing pages (location & industry specific)
- 15 full SEO-optimized blog posts with individual detail pages
- 21 comprehensive case studies with category filtering
- 4 partner ecosystem pages (infiniterankers.com integration)
- Admin dashboard for managing contacts and demo bookings

### AI & Automation
- AI chatbot powered by OpenAI with streaming responses
- Lead capture from chatbot conversations
- 30+ AI & automation services across 4 categories:
  - **AI & Automation**: AI Calling Agent, AI Receptionist, AI Lead Qualification, AI Appointment Booking, AI Follow-Up, AI Sales Assistant, AI Chatbot, AI Email/SMS Automation, CRM Automation, Workflow Automation
  - **Lead Generation**: Google Ads Engine, Meta Ads Growth, SEO Authority Growth, Local SEO, Conversion Funnels, Landing Page Optimization, CRO
  - **Social Media & Content**: Social Media Marketing, Instagram/Facebook Growth, Content Writing, Branding, Short Form Video Marketing
  - **Development & Technology**: Website Development, Landing Pages, CRM Setup, SaaS Integrations, Marketing Automation, Analytics Dashboards

### Pricing System
- 3-tier package pricing ($1,599 / $2,999 / $5,999 per month)
- Individual service pricing for all 30+ services ($199-$2,999/month)
- Interactive ROI calculator
- Custom demo booking system with service selection

### SEO Infrastructure
- **XML Sitemap** (`/sitemap.xml`) - Auto-generated with 100+ URLs
- **RSS Feed** (`/rss.xml`) - Blog feed for content distribution
- **llms.txt** (`/llms.txt`, `/llms-full.txt`) - AI discovery protocol
- **OpenAI Plugin Manifest** (`/.well-known/ai-plugin.json`)
- **Google Indexing API** - Automatic URL submission to Google
- **IndexNow Protocol** - Real-time indexing with Bing, Yandex, Seznam
- **Robots.txt** - Search engine directives
- **HTML Sitemap** (`/sitemap`) - User-friendly navigation
- Dynamic SEO meta tags injection for all pages
- Server-side rendering (SSR) for optimal SEO

### Forms & Lead Management
- Contact form with database persistence and email notifications
- Demo booking system with calendar integration
- Email notifications via SMTP (contact form, demo bookings)
- Admin dashboard for viewing/managing all leads
- Chatbot lead capture

### Additional Features
- Google Partner badge trust indicators
- Portfolio with category filtering (21 case studies)
- Mega menu navigation with service categories
- Mobile-first responsive design
- Framer Motion animations throughout
- Breadcrumb navigation
- Scroll to top functionality
- 404 page with helpful links

## Environment Variables

Create a `.env` file in the root directory with the following variables:

```env
# Application
NODE_ENV=production
PORT=5000

# Database
DATABASE_URL=postgresql://user:password@host:5432/database?sslmode=require

# SMTP Email Configuration
SMTP_HOST=smtp.hostinger.com
SMTP_PORT=465
SMTP_USER=contact@infiniterankers.io
SMTP_PASS=your_smtp_password_here

# OpenAI (for chatbot)
OPENAI_API_KEY=sk-proj-your_openai_api_key_here
# Alternative OpenAI configuration (optional)
AI_INTEGRATIONS_OPENAI_API_KEY=your_openai_api_key_here
AI_INTEGRATIONS_OPENAI_BASE_URL=https://api.openai.com/v1

# Admin API Key (for Google Indexing and IndexNow endpoints)
ADMIN_API_KEY=your_secure_admin_api_key_here

# Google Indexing API (optional - for automatic search engine submission)
GOOGLE_SERVICE_ACCOUNT_KEY={"type":"service_account","project_id":"..."}

# Replit-Specific (only needed on Replit platform)
REPLIT_CONNECTORS_HOSTNAME=your_repl_hostname
REPL_IDENTITY=your_repl_identity_token
WEB_REPL_RENEWAL=your_renewal_token
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

3. Set up environment variables:
   - Copy `.env.example` to `.env`
   - Update all required variables (see Environment Variables section above)

4. Push database schema to PostgreSQL:
   ```bash
   npm run db:push
   ```

5. For development:
   ```bash
   npm run dev
   ```
   The application will be available at `http://localhost:5000`

6. For production:
   ```bash
   npm run build
   npm start
   ```

## API Endpoints

### Public Endpoints
- `POST /api/contacts` - Submit contact form
- `POST /api/demo-bookings` - Submit demo booking request
- `POST /api/chatbot` - Stream-based OpenAI chat completions
- `POST /api/chatbot/lead` - Capture lead from chatbot conversation

### Admin Endpoints (Require `x-admin-api-key` header)
- `GET /api/contacts` - Retrieve all contact submissions
- `GET /api/demo-bookings` - Retrieve all demo bookings
- `GET /api/admin/urls` - List all site URLs for indexing
- `POST /api/admin/index-all` - Submit all URLs to Google Indexing API
- `POST /api/admin/index-url` - Submit single URL to Google Indexing API
- `GET /api/admin/indexing-status` - Check Google Indexing API status
- `POST /api/admin/indexnow-submit` - Submit URLs to IndexNow (Bing, Yandex, Seznam)
- `POST /api/admin/ping-engines` - Ping search engines with sitemap

### SEO & Discovery Endpoints
- `GET /sitemap.xml` - XML sitemap (100+ URLs)
- `GET /rss.xml` - Blog RSS feed
- `GET /robots.txt` - Robots exclusion protocol
- `GET /llms.txt` - LLMs.txt for AI discovery
- `GET /llms-full.txt` - Extended LLMs.txt with full content
- `GET /.well-known/ai-plugin.json` - OpenAI plugin manifest
- `GET /indexnow-key.txt` - IndexNow verification key
- `GET /.well-known/indexnow-key.txt` - Alternative IndexNow key location

## NPM Scripts

```bash
npm run dev        # Start development server with hot reload (port 5000)
npm run build      # Build client (Vite), SSR bundle, and server (esbuild)
npm run start      # Run production server from built bundle
npm run check      # Type-check entire TypeScript project
npm run db:push    # Push Drizzle schema changes to database
```

## Build Process

The build script (`npm run build`) performs the following:

1. **Client Build** - Vite builds React app to `dist/public/`
2. **SSR Build** - Vite builds server-side rendering bundle to `dist/ssr/`
3. **Server Build** - esbuild bundles server to `dist/index.cjs` (minified)
   - Externals: All dependencies except 30 whitelisted modules
   - Format: CommonJS for Node.js compatibility

## Deployment

### VPS Deployment (Hostinger, DigitalOcean, AWS EC2, etc.)

1. Set up PostgreSQL database (Neon, Supabase, or self-hosted)
2. Configure environment variables on your VPS
3. Build the application:
   ```bash
   npm run build
   ```
4. Use PM2 for process management:
   ```bash
   pm2 start dist/index.cjs --name "infinite-rankers"
   pm2 save
   pm2 startup
   ```
5. Set up Nginx as reverse proxy:
   ```nginx
   server {
       listen 80;
       server_name infiniterankers.io www.infiniterankers.io;

       location / {
           proxy_pass http://localhost:5000;
           proxy_http_version 1.1;
           proxy_set_header Upgrade $http_upgrade;
           proxy_set_header Connection 'upgrade';
           proxy_set_header Host $host;
           proxy_cache_bypass $http_upgrade;
       }
   }
   ```
6. Use Let's Encrypt for SSL certificates:
   ```bash
   sudo certbot --nginx -d infiniterankers.io -d www.infiniterankers.io
   ```

### Replit Deployment

The project is configured for Replit Autoscale deployment:

- Uses `.replit` configuration file
- Deployment target: `autoscale`
- Build command: `npm run build`
- Run command: `node ./dist/index.cjs`

### Docker Deployment (Optional)

Create a `Dockerfile` in the root directory:

```dockerfile
FROM node:20-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 5000
CMD ["npm", "start"]
```

## Database Schema

### Tables

**contacts**
- `id` - Serial primary key
- `name` - Text (required)
- `email` - Text (required)
- `phone` - Text (optional)
- `company` - Text (optional)
- `message` - Text (required)
- `createdAt` - Timestamp (auto)

**demoBookings**
- `id` - Serial primary key
- `name` - Text (required)
- `email` - Text (required)
- `phone` - Text (required)
- `company` - Text (required)
- `website` - Text (optional)
- `revenue` - Text (optional)
- `service` - Text (required)
- `date` - Text (required)
- `time` - Text (required)
- `message` - Text (optional)
- `createdAt` - Timestamp (auto)

## Brand Ecosystem

- **infiniterankers.io** - AI Infrastructure & Automation SaaS platform (this site)
- **infiniterankers.com** - Marketing Authority & Content platform (WordPress)
- 4 partner ecosystem pages linking to infiniterankers.com resources

## Tech Details

### Frontend Libraries
- **React 18.3** - UI library
- **Wouter 3.3** - Lightweight routing
- **TanStack React Query 5.60** - Data fetching and caching
- **Framer Motion 11.13** - Animations
- **Tailwind CSS 3.4** - Utility-first CSS
- **shadcn/ui** - Component library (20+ components)
- **Lucide React** - Icon library
- **React Hook Form** - Form management
- **Zod** - Schema validation

### Backend Libraries
- **Express.js 5.0** - Web framework
- **Drizzle ORM 0.39** - Database ORM
- **PostgreSQL (pg 8.16)** - Database driver
- **OpenAI 6.22** - AI integration
- **Nodemailer 8.0** - Email sending
- **tsx** - TypeScript execution
- **esbuild 0.25** - Fast bundler

### Build Tools
- **Vite 7.3** - Frontend build tool
- **TypeScript 5.6** - Type safety
- **PostCSS 8.4** - CSS processing
- **Tailwind CSS 3.4** - Styling

## Performance

- **SSR** - Server-side rendering for optimal SEO and initial load
- **Code Splitting** - Automatic route-based code splitting
- **Asset Optimization** - Vite's built-in asset optimization
- **Caching** - TanStack React Query for data caching
- **Compression** - Gzip compression middleware
- **Lazy Loading** - Dynamic imports for heavy components

## Security

- Environment variables for sensitive data
- CSRF protection via Express middleware
- SQL injection protection via Drizzle ORM parameterized queries
- XSS protection via React's built-in escaping
- API key authentication for admin endpoints
- HTTPS recommended for production (Let's Encrypt)

## SEO Features

- Dynamic meta tags for all 100+ pages
- Open Graph and Twitter Card support
- Canonical URLs
- Structured data (JSON-LD) for services and case studies
- XML sitemap with automatic updates
- RSS feed for blog content
- Robots.txt for crawler directives
- Google Indexing API integration
- IndexNow protocol support
- llms.txt for AI discovery
- Server-side rendering for search engines

## License

All rights reserved. Infinite Rankers.
