import { type InsertContact, type Contact, type InsertDemoBooking, type DemoBooking, contacts, demoBookings } from "@shared/schema";
import { db } from "./db";
import { eq } from "drizzle-orm";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getContacts(): Promise<Contact[]>;
  createDemoBooking(booking: InsertDemoBooking): Promise<DemoBooking>;
  getDemoBookings(): Promise<DemoBooking[]>;
}

export class DatabaseStorage implements IStorage {
  async createContact(contact: InsertContact): Promise<Contact> {
    const [result] = await db.insert(contacts).values(contact).returning();
    return result;
  }

  async getContacts(): Promise<Contact[]> {
    return db.select().from(contacts);
  }

  async createDemoBooking(booking: InsertDemoBooking): Promise<DemoBooking> {
    const [result] = await db.insert(demoBookings).values(booking).returning();
    return result;
  }

  async getDemoBookings(): Promise<DemoBooking[]> {
    return db.select().from(demoBookings);
  }
}

export const storage = new DatabaseStorage();
