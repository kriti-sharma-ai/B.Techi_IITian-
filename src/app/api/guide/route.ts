import { hardGuard, normalize, softGuard, type GuideReply } from "@/lib/guide";
import { askAI, type Turn } from "@/lib/guide-ai";
import { getGuideCatalog, getGuideData } from "@/lib/guide-data";
import { SITE_URL } from "@/lib/utils";

// The guide bubble asks here only when its own rules (lib/guide.ts) don't understand
// a question. The AI itself lives in lib/guide-ai.ts; this route keeps it cheap and safe.
//
// Cost guards, cheapest first: same-site callers only, the same guardrails as the
// bubble (no AI call for homework, abuse, off-topic or gibberish), an answer cache,
// a per-visitor limit and a daily cap.

const MAX_QUESTION = 200;
/** AI calls per server instance per day; past it the bubble uses its own answer. */
const DAILY_CAP = Number(process.env.GUIDE_AI_DAILY_LIMIT ?? 2000);

/* ───────────── Limits ───────────── */

const WINDOW_MS = 10 * 60 * 1000;
const PER_WINDOW = 15;
const hits = new Map<string, number[]>();

function limited(ip: string) {
  const now = Date.now();
  const recent = (hits.get(ip) ?? []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= PER_WINDOW) return true;
  recent.push(now);
  hits.set(ip, recent);
  if (hits.size > 5000) hits.clear();
  return false;
}

let day = { date: "", calls: 0 };
function overDailyCap() {
  const today = new Date().toISOString().slice(0, 10);
  if (day.date !== today) day = { date: today, calls: 0 };
  return day.calls >= DAILY_CAP;
}

/* ───────────── Answer cache ───────────── */

const CACHE_MS = 24 * 60 * 60 * 1000;
const cache = new Map<string, { at: number; reply: GuideReply }>();

function cached(key: string) {
  const hit = cache.get(key);
  if (hit && Date.now() - hit.at < CACHE_MS) return hit.reply;
  cache.delete(key);
  return undefined;
}

function remember(key: string, reply: GuideReply) {
  if (cache.size >= 1000) cache.delete(cache.keys().next().value!);
  cache.set(key, { at: Date.now(), reply });
}

/* ───────────── Input ───────────── */

const str = (v: unknown, max: number) => (typeof v === "string" ? v.trim().slice(0, max) : "");

/** Earlier turns, refused ones left out. Older clients sent plain strings. */
function turns(v: unknown): Turn[] {
  if (!Array.isArray(v)) return [];
  return v
    .map((t): Turn => (typeof t === "string" ? { q: str(t, MAX_QUESTION) } : { q: str(t?.q, MAX_QUESTION), a: str(t?.a, 300) || undefined }))
    .filter((t) => t.q && !hardGuard(normalize(t.q)))
    .slice(-2);
}

const fail = (error: string, status: number) => Response.json({ error }, { status, headers: { "X-Robots-Tag": "noindex" } });
const ok = (reply: GuideReply) => Response.json(reply, { headers: { "X-Robots-Tag": "noindex" } });

/* ───────────── Handler ───────────── */

export async function POST(req: Request) {
  // Only the site's own pages may call this, so no one can use it as a free AI.
  if (req.headers.get("sec-fetch-site") === "cross-site") return fail("Forbidden", 403);
  const origin = req.headers.get("origin");
  if (origin && origin !== new URL(req.url).origin && origin !== SITE_URL) return fail("Forbidden", 403);

  const body = (await req.json().catch(() => null)) as Record<string, unknown> | null;
  const q = str(body?.q, MAX_QUESTION);
  if (!q) return fail("Empty question", 400);

  // Same guardrails as the bubble: refused questions never reach the model.
  const text = normalize(q);
  const guarded = hardGuard(text) ?? softGuard(text, q);
  if (guarded) return ok(guarded);

  const path = typeof body?.path === "string" && /^\/[\w\-/]*$/.test(body.path) ? body.path.slice(0, 120) : "/";
  const history = turns(body?.history);
  const signedIn = body?.signedIn === true;
  const plan = Array.isArray(body?.plan) ? body.plan.filter((s): s is string => typeof s === "string" && /^[a-z0-9-]{2,80}$/.test(s)).slice(0, 12) : [];

  // Same question, no earlier context: answer from the cache for free. Logged-in students get their own answers.
  const cacheKey = history.length || plan.length ? "" : `${signedIn ? "in" : "out"}:${text.trim()}`;
  const hit = cacheKey && cached(cacheKey);
  if (hit) return ok(hit);

  const key = process.env.OPENROUTER_API_KEY;
  if (!key) return fail("AI is not set up", 503);

  const ip = req.headers.get("x-forwarded-for")?.split(",")[0].trim() || "local";
  if (limited(ip)) return fail("Too many questions. Try again in a few minutes.", 429);
  if (overDailyCap()) return fail("AI is resting for today", 503);

  const [data, catalog] = await Promise.all([getGuideData(), getGuideCatalog()]);
  day.calls++;
  let reply: GuideReply | null;
  try {
    reply = await askAI({ q, path, history, signedIn, plan }, data, catalog, { key, referer: SITE_URL });
  } catch (err) {
    console.error("Guide AI: request failed", err);
    return fail("AI did not answer", 502);
  }
  if (!reply) return fail("AI gave no answer", 502);
  if (cacheKey) remember(cacheKey, reply);
  return ok(reply);
}
