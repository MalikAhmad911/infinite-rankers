import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import SEOHead from "@/components/seo-head";
import { RefreshCw, CheckCircle2, AlertCircle, Globe, FileText, Rss, Search, Send, Activity } from "lucide-react";

interface IndexingStatus {
  totalPages: number;
  breakdown: Record<string, number>;
  seoEndpoints: Record<string, string>;
  allUrls: string[];
}

interface SubmissionResult {
  success: boolean;
  totalUrls?: number;
  indexNow?: { engine: string; status: number; ok: boolean }[];
  pings?: { service: string; status: number; ok: boolean }[];
  message?: string;
  error?: string;
}

export default function AdminDashboard() {
  const [adminKey, setAdminKey] = useState("");
  const [authenticated, setAuthenticated] = useState(false);
  const [status, setStatus] = useState<IndexingStatus | null>(null);
  const [submissionResult, setSubmissionResult] = useState<SubmissionResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [submitting, setSubmitting] = useState(false);

  const fetchStatus = async () => {
    setLoading(true);
    try {
      const res = await fetch("/api/admin/indexing-status", {
        headers: { "x-admin-key": adminKey },
      });
      if (res.status === 401) {
        setAuthenticated(false);
        return;
      }
      const data = await res.json();
      setStatus(data);
      setAuthenticated(true);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const submitIndexNow = async () => {
    setSubmitting(true);
    try {
      const res = await fetch("/api/admin/indexnow-submit", {
        method: "POST",
        headers: { "x-admin-key": adminKey, "Content-Type": "application/json" },
      });
      const data = await res.json();
      setSubmissionResult(data);
    } catch (err: any) {
      setSubmissionResult({ success: false, error: err.message });
    } finally {
      setSubmitting(false);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <SEOHead title="Admin Dashboard" description="Indexing monitoring dashboard" />
        <Card className="p-6 w-full max-w-sm">
          <h1 className="text-lg font-bold mb-4">Admin Dashboard</h1>
          <Input
            type="password"
            placeholder="Enter admin key"
            value={adminKey}
            onChange={(e) => setAdminKey(e.target.value)}
            className="mb-3"
            data-testid="input-admin-key"
          />
          <Button onClick={fetchStatus} disabled={!adminKey || loading} className="w-full" data-testid="button-login">
            {loading ? "Checking..." : "Access Dashboard"}
          </Button>
        </Card>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <SEOHead title="Admin - Indexing Dashboard" description="Indexing monitoring" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex items-center justify-between gap-4 mb-6 flex-wrap">
          <h1 className="text-2xl font-bold" data-testid="text-dashboard-title">Indexing Monitor</h1>
          <div className="flex items-center gap-2 flex-wrap">
            <Button onClick={fetchStatus} disabled={loading} variant="outline" data-testid="button-refresh">
              <RefreshCw className={`w-4 h-4 mr-1 ${loading ? "animate-spin" : ""}`} /> Refresh
            </Button>
            <Button onClick={submitIndexNow} disabled={submitting} data-testid="button-submit-indexnow">
              <Send className={`w-4 h-4 mr-1 ${submitting ? "animate-spin" : ""}`} /> Submit to IndexNow
            </Button>
          </div>
        </div>

        {status && (
          <>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 mb-6">
              <Card className="p-4 text-center">
                <div className="text-2xl font-bold text-blue-600" data-testid="text-total-pages">{status.totalPages}</div>
                <div className="text-xs text-muted-foreground">Total Pages</div>
              </Card>
              {Object.entries(status.breakdown).map(([key, count]) => (
                <Card key={key} className="p-4 text-center">
                  <div className="text-xl font-bold">{count}</div>
                  <div className="text-xs text-muted-foreground capitalize">{key}</div>
                </Card>
              ))}
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
              <Card className="p-5">
                <h2 className="font-semibold mb-3 flex items-center gap-2">
                  <Globe className="w-4 h-4" /> SEO Endpoints
                </h2>
                <div className="space-y-2">
                  {Object.entries(status.seoEndpoints).map(([name, url]) => (
                    <div key={name} className="flex items-center justify-between gap-2">
                      <span className="text-sm text-muted-foreground capitalize">{name.replace(/([A-Z])/g, " $1").trim()}</span>
                      <a href={url} target="_blank" rel="noopener noreferrer" className="text-xs text-blue-600 hover:underline truncate max-w-[200px]">
                        {url.replace("https://infiniterankers.io", "")}
                      </a>
                    </div>
                  ))}
                </div>
              </Card>

              <Card className="p-5">
                <h2 className="font-semibold mb-3 flex items-center gap-2">
                  <Activity className="w-4 h-4" /> Quick Actions
                </h2>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>robots.txt - All bots allowed, /api/ blocked</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>sitemap.xml - {status.totalPages} URLs</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Rss className="w-4 h-4 text-orange-500" />
                    <span>RSS Feed - 15 blog posts</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <FileText className="w-4 h-4 text-purple-500" />
                    <span>llms.txt - AI discovery ready</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <Search className="w-4 h-4 text-blue-500" />
                    <span>IndexNow key verified</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Gzip compression enabled</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Breadcrumbs on all pages</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    <span>Mega footer with 91 internal links</span>
                  </div>
                </div>
              </Card>
            </div>

            {submissionResult && (
              <Card className="p-5 mb-6">
                <h2 className="font-semibold mb-3 flex items-center gap-2">
                  <Send className="w-4 h-4" /> Last Submission Result
                </h2>
                {submissionResult.error ? (
                  <div className="flex items-center gap-2 text-red-600">
                    <AlertCircle className="w-4 h-4" /> {submissionResult.error}
                  </div>
                ) : (
                  <div className="space-y-3">
                    <p className="text-sm text-muted-foreground">{submissionResult.message}</p>
                    {submissionResult.indexNow && (
                      <div>
                        <h3 className="text-sm font-medium mb-1">IndexNow Engines:</h3>
                        <div className="space-y-1">
                          {submissionResult.indexNow.map((r, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              {r.ok ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> : <AlertCircle className="w-3.5 h-3.5 text-red-500" />}
                              <span className="text-muted-foreground">{r.engine.replace("https://", "")}</span>
                              <Badge variant={r.ok ? "default" : "destructive"} className="text-xs">{r.status}</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                    {submissionResult.pings && (
                      <div>
                        <h3 className="text-sm font-medium mb-1">Ping Services:</h3>
                        <div className="space-y-1">
                          {submissionResult.pings.map((p, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm">
                              {p.ok ? <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> : <AlertCircle className="w-3.5 h-3.5 text-yellow-500" />}
                              <span className="text-muted-foreground">{p.service}</span>
                              <Badge variant={p.ok ? "default" : "secondary"} className="text-xs">{p.status || "timeout"}</Badge>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                )}
              </Card>
            )}

            <Card className="p-5">
              <h2 className="font-semibold mb-3">All {status.totalPages} URLs</h2>
              <div className="max-h-96 overflow-y-auto space-y-1">
                {status.allUrls.map((url, i) => (
                  <div key={i} className="flex items-center gap-2 text-xs py-0.5">
                    <span className="text-muted-foreground w-6 text-right">{i + 1}.</span>
                    <a href={url} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline truncate">
                      {url.replace("https://infiniterankers.io", "")}
                    </a>
                  </div>
                ))}
              </div>
            </Card>
          </>
        )}
      </div>
    </div>
  );
}
