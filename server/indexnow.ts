import type { Express } from "express";
import { getAllURLs } from "./sitemap";

const INDEXNOW_KEY = "b4d7f2e1a3c5689074e1f2a3b4c5d6e7";
const BASE = "https://infiniterankers.io";

function adminAuth(req: any, res: any, next: any) {
  const key = req.headers["x-admin-key"] || req.query.key;
  const adminKey = process.env.ADMIN_API_KEY;
  if (!adminKey || key !== adminKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

async function submitToIndexNow(urls: string[]): Promise<{engine: string; status: number; ok: boolean}[]> {
  const engines = [
    "https://api.indexnow.org/indexnow",
    "https://www.bing.com/indexnow",
    "https://yandex.com/indexnow",
  ];

  const results: {engine: string; status: number; ok: boolean}[] = [];

  for (const engine of engines) {
    try {
      const response = await fetch(engine, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          host: "infiniterankers.io",
          key: INDEXNOW_KEY,
          keyLocation: `${BASE}/indexnow-key.txt`,
          urlList: urls,
        }),
      });
      results.push({ engine, status: response.status, ok: response.ok || response.status === 202 });
    } catch (err: any) {
      results.push({ engine, status: 0, ok: false });
    }
  }

  return results;
}

async function pingSearchEngines(): Promise<{service: string; status: number; ok: boolean}[]> {
  const sitemapUrl = encodeURIComponent(`${BASE}/sitemap.xml`);
  const rssUrl = encodeURIComponent(`${BASE}/rss.xml`);

  const pingUrls = [
    { service: "Google Sitemap Ping", url: `https://www.google.com/ping?sitemap=${sitemapUrl}` },
    { service: "Google Blog Ping", url: `https://www.google.com/ping?sitemap=${rssUrl}` },
    { service: "Bing Sitemap Ping", url: `https://www.bing.com/ping?sitemap=${sitemapUrl}` },
    { service: "IndexNow Ping", url: `https://api.indexnow.org/indexnow?url=${encodeURIComponent(BASE)}&key=${INDEXNOW_KEY}` },
  ];

  const results: {service: string; status: number; ok: boolean}[] = [];

  for (const ping of pingUrls) {
    try {
      const response = await fetch(ping.url, { method: "GET", signal: AbortSignal.timeout(10000) });
      results.push({ service: ping.service, status: response.status, ok: response.ok });
    } catch {
      results.push({ service: ping.service, status: 0, ok: false });
    }
  }

  return results;
}

export function registerIndexNowRoutes(app: Express) {
  app.get("/indexnow-key.txt", (_req, res) => {
    res.set("Content-Type", "text/plain");
    res.send(INDEXNOW_KEY);
  });

  app.get("/.well-known/indexnow-key.txt", (_req, res) => {
    res.set("Content-Type", "text/plain");
    res.send(INDEXNOW_KEY);
  });

  app.post("/api/admin/indexnow-submit", adminAuth, async (_req, res) => {
    const urls = getAllURLs();

    const indexNowResults = await submitToIndexNow(urls);
    const pingResults = await pingSearchEngines();

    res.json({
      success: true,
      totalUrls: urls.length,
      indexNow: indexNowResults,
      pings: pingResults,
      message: `Submitted ${urls.length} URLs to ${indexNowResults.length} IndexNow engines and pinged ${pingResults.length} search services`,
    });
  });

  app.post("/api/admin/ping-engines", adminAuth, async (_req, res) => {
    const pingResults = await pingSearchEngines();
    res.json({
      success: true,
      pings: pingResults,
      message: `Pinged ${pingResults.length} search engine services`,
    });
  });
}
