import type { Express } from "express";
import { getAllURLs } from "./sitemap";

interface IndexingResult {
  url: string;
  status: "success" | "error";
  message: string;
}

async function submitUrlToGoogle(url: string, accessToken: string): Promise<IndexingResult> {
  try {
    const response = await fetch("https://indexing.googleapis.com/v3/urlNotifications:publish", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${accessToken}`,
      },
      body: JSON.stringify({
        url: url,
        type: "URL_UPDATED",
      }),
    });

    if (response.ok) {
      const data = await response.json();
      return { url, status: "success", message: `Submitted: ${JSON.stringify(data)}` };
    } else {
      const error = await response.text();
      return { url, status: "error", message: `HTTP ${response.status}: ${error}` };
    }
  } catch (err: any) {
    return { url, status: "error", message: err.message || "Unknown error" };
  }
}

async function getAccessToken(serviceAccountKey: any): Promise<string> {
  const header = Buffer.from(JSON.stringify({ alg: "RS256", typ: "JWT" })).toString("base64url");
  const now = Math.floor(Date.now() / 1000);
  const claimSet = {
    iss: serviceAccountKey.client_email,
    scope: "https://www.googleapis.com/auth/indexing",
    aud: "https://oauth2.googleapis.com/token",
    exp: now + 3600,
    iat: now,
  };
  const claim = Buffer.from(JSON.stringify(claimSet)).toString("base64url");

  const crypto = await import("crypto");
  const signer = crypto.createSign("RSA-SHA256");
  signer.update(`${header}.${claim}`);
  const signature = signer.sign(serviceAccountKey.private_key, "base64url");

  const jwt = `${header}.${claim}.${signature}`;

  const tokenResponse = await fetch("https://oauth2.googleapis.com/token", {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: `grant_type=urn:ietf:params:oauth:grant-type:jwt-bearer&assertion=${jwt}`,
  });

  if (!tokenResponse.ok) {
    throw new Error(`Token error: ${await tokenResponse.text()}`);
  }

  const tokenData = await tokenResponse.json();
  return tokenData.access_token;
}

function adminAuth(req: any, res: any, next: any) {
  const key = req.headers["x-admin-key"] || req.query.key;
  const adminKey = process.env.ADMIN_API_KEY;
  if (!adminKey || key !== adminKey) {
    return res.status(401).json({ error: "Unauthorized" });
  }
  next();
}

export function registerIndexingRoutes(app: Express) {
  app.get("/api/admin/urls", adminAuth, (_req, res) => {
    const urls = getAllURLs();
    res.json({ total: urls.length, urls });
  });

  app.post("/api/admin/index-all", adminAuth, async (req, res) => {
    const serviceKeyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!serviceKeyJson) {
      return res.status(400).json({
        error: "GOOGLE_SERVICE_ACCOUNT_KEY environment variable not set. Please add your Google service account JSON key.",
      });
    }

    let serviceKey: any;
    try {
      serviceKey = JSON.parse(serviceKeyJson);
    } catch {
      return res.status(400).json({ error: "Invalid JSON in GOOGLE_SERVICE_ACCOUNT_KEY" });
    }

    let accessToken: string;
    try {
      accessToken = await getAccessToken(serviceKey);
    } catch (err: any) {
      return res.status(500).json({ error: `Failed to get access token: ${err.message}` });
    }

    const urls = getAllURLs();
    const results: IndexingResult[] = [];
    let successCount = 0;
    let errorCount = 0;

    for (const url of urls) {
      const result = await submitUrlToGoogle(url, accessToken);
      results.push(result);
      if (result.status === "success") successCount++;
      else errorCount++;
      await new Promise(r => setTimeout(r, 100));
    }

    res.json({
      total: urls.length,
      success: successCount,
      errors: errorCount,
      results,
    });
  });

  app.post("/api/admin/index-url", adminAuth, async (req, res) => {
    const { url } = req.body;
    if (!url) return res.status(400).json({ error: "url required" });

    const serviceKeyJson = process.env.GOOGLE_SERVICE_ACCOUNT_KEY;
    if (!serviceKeyJson) {
      return res.status(400).json({ error: "GOOGLE_SERVICE_ACCOUNT_KEY not set" });
    }

    let serviceKey: any;
    try {
      serviceKey = JSON.parse(serviceKeyJson);
    } catch {
      return res.status(400).json({ error: "Invalid JSON in GOOGLE_SERVICE_ACCOUNT_KEY" });
    }

    let accessToken: string;
    try {
      accessToken = await getAccessToken(serviceKey);
    } catch (err: any) {
      return res.status(500).json({ error: `Token error: ${err.message}` });
    }

    const result = await submitUrlToGoogle(url, accessToken);
    res.json(result);
  });
}
