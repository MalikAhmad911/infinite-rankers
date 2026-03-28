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
