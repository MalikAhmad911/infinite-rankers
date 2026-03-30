import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertContactSchema, insertDemoBookingSchema } from "@shared/schema";
import { sendContactEmail, sendDemoBookingEmail } from "./email";
import { registerChatbotRoutes } from "./chatbot";
import { registerSitemapRoutes } from "./sitemap";
import { registerIndexingRoutes } from "./google-indexing";
import { registerAIDiscoveryRoutes } from "./ai-discovery";
import { registerIndexNowRoutes } from "./indexnow";

// Legacy service slugs with no dedicated landing page → redirect to closest pillar.
// Slugs that now have dedicated AI-positioned landing pages in client/src/lib/landing-pages.ts
// are intentionally NOT listed here so the landing page can render.
const OLD_SERVICE_REDIRECT_MAP: Record<string, string> = {
  "ai-calling-agent": "/ai-lead-capture",
  "ai-lead-qualification": "/ai-lead-capture",
  "ai-appointment-booking": "/ai-appointment-agents",
  "ai-follow-up": "/ai-appointment-agents",
  "ai-sales-assistant": "/ai-appointment-agents",
  "ai-chatbot": "/ai-lead-capture",
  "ai-email-automation": "/ai-appointment-agents",
  "ai-sms-automation": "/ai-lead-capture",
  "workflow-automation": "/crm-pipeline-automation",
  "google-ads": "/revenue-automation-consulting",
  "meta-ads": "/revenue-automation-consulting",
  "seo-authority": "/revenue-automation-consulting",
  "local-seo": "/revenue-automation-consulting",
  "conversion-funnels": "/ai-lead-capture",
  "landing-page-optimization": "/ai-lead-capture",
  "conversion-rate-optimization": "/ai-lead-capture",
  "social-media-marketing": "/revenue-automation-consulting",
  "instagram-growth": "/reviews-reactivation-retention",
  "facebook-growth": "/reviews-reactivation-retention",
  "content-writing": "/revenue-automation-consulting",
  "branding-design": "/custom-saas-tools",
  "video-marketing": "/revenue-automation-consulting",
  "website-development": "/custom-saas-tools",
  "landing-page-development": "/custom-saas-tools",
  "crm-setup": "/crm-pipeline-automation",
  "saas-integrations": "/custom-saas-tools",
  "marketing-automation-setup": "/crm-pipeline-automation",
  "analytics-dashboard": "/crm-pipeline-automation",
};

// Only branded partner vanity URLs are kept here — all comparison/cannibal slugs
// that now have dedicated landing pages in landing-pages.ts have been removed
// so the landing pages can render and serve AI-positioned content.
const URL_CONSOLIDATION_MAP: Record<string, string> = {
  "infinite-rankers-agency": "/services",
  "infinite-rankers-seo-services": "/revenue-automation-consulting",
  "infinite-rankers-paid-advertising": "/revenue-automation-consulting",
  "infinite-rankers-ai-automation": "/ai-lead-capture",
};

const CASE_STUDY_REDIRECT_MAP: Record<string, string> = {
  "1": "case-study-dental-practice-revenue-transformation",
  "2": "case-study-ecommerce-cart-recovery-scaling",
  "3": "case-study-real-estate-ai-lead-generation",
  "4": "case-study-saas-growth-acceleration",
  "5": "case-study-law-firm-client-intake-automation",
  "6": "case-study-fitness-studio-membership-growth",
  "7": "case-study-restaurant-chain-local-seo-transformation",
  "8": "case-study-medical-clinic-patient-acquisition",
  "9": "case-study-wealth-management-digital-lead-generation",
  "10": "case-study-home-services-plumbing-hvac-lead-machine",
  "11": "case-study-auto-dealership-ai-sales-acceleration",
  "12": "case-study-online-coaching-enrollment-automation",
  "13": "case-study-boutique-hotel-direct-booking-engine",
  "14": "case-study-insurance-agency-renewal-automation",
  "15": "case-study-commercial-contractor-brand-lead-growth",
  "16": "case-study-cpa-firm-onboarding-automation",
  "17": "case-study-luxury-salon-ai-booking-instagram-growth",
  "18": "case-study-immigration-law-multilingual-lead-generation",
  "19": "case-study-freight-brokerage-workflow-automation",
  "20": "case-study-cnc-manufacturer-digital-lead-generation",
  "21": "case-study-veterinary-clinic-ai-appointment-growth",
};

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  for (const [slug, target] of Object.entries(OLD_SERVICE_REDIRECT_MAP)) {
    app.get(`/${slug}`, (_req, res) => {
      res.redirect(301, target);
    });
  }

  for (const [slug, target] of Object.entries(URL_CONSOLIDATION_MAP)) {
    app.get(`/${slug}`, (_req, res) => {
      res.redirect(301, target);
    });
  }

  for (const [numId, slug] of Object.entries(CASE_STUDY_REDIRECT_MAP)) {
    app.get(`/${numId}`, (_req, res) => {
      res.redirect(301, `/${slug}`);
    });
  }

  registerChatbotRoutes(app);
  registerSitemapRoutes(app);
  registerIndexingRoutes(app);
  registerAIDiscoveryRoutes(app);
  registerIndexNowRoutes(app);

  app.post("/api/contacts", async (req, res) => {
    try {
      const parsed = insertContactSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.message });
      }
      const contact = await storage.createContact(parsed.data);
      try {
        await sendContactEmail(parsed.data);
      } catch (emailErr) {
        console.error("Failed to send contact email:", emailErr);
      }
      res.status(201).json(contact);
    } catch (error: any) {
      console.error("Contact save error:", error?.message || error);
      res.status(500).json({ error: "Failed to save contact" });
    }
  });

  app.get("/api/contacts", async (req, res) => {
    try {
      const contacts = await storage.getContacts();
      res.json(contacts);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch contacts" });
    }
  });

  app.post("/api/demo-bookings", async (req, res) => {
    try {
      const parsed = insertDemoBookingSchema.safeParse(req.body);
      if (!parsed.success) {
        return res.status(400).json({ error: parsed.error.message });
      }
      const booking = await storage.createDemoBooking(parsed.data);
      try {
        await sendDemoBookingEmail(parsed.data);
      } catch (emailErr) {
        console.error("Failed to send demo booking email:", emailErr);
      }
      res.status(201).json(booking);
    } catch (error: any) {
      console.error("Demo booking save error:", error?.message || error);
      res.status(500).json({ error: "Failed to save booking" });
    }
  });

  app.get("/api/demo-bookings", async (req, res) => {
    try {
      const bookings = await storage.getDemoBookings();
      res.json(bookings);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch bookings" });
    }
  });

  return httpServer;
}
