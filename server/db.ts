import { drizzle } from "drizzle-orm/node-postgres";
import pg from "pg";
import * as schema from "@shared/schema";

let dbUrl = process.env.DATABASE_URL || process.env.NEON_DATABASE_URL || "";
if (dbUrl.includes("channel_binding=require")) {
  dbUrl = dbUrl.replace(/[&?]channel_binding=require/g, "");
  console.log("Removed channel_binding=require from DATABASE_URL for compatibility");
}

const pool = new pg.Pool({
  connectionString: dbUrl,
  connectionTimeoutMillis: 10000,
  max: 5,
  ssl: dbUrl.includes("sslmode=require") ? { rejectUnauthorized: false } : undefined,
});

pool.on("error", (err) => {
  console.error("Database pool error:", err.message);
});

pool.on("connect", () => {
  console.log("Database connected successfully");
});

export const db = drizzle(pool, { schema });
