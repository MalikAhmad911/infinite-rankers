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

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
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
