import type { MetadataRoute } from "next";
import { SITE_URL } from "@/lib/utils";

const disallow = ["/admin", "/dashboard", "/profile", "/saved", "/practice/session", "/practice/exam", "/search"];

// AI crawlers and assistants, named so it's explicit they may read the site (and /llms.txt).
// A bot with its own group ignores the "*" group, so each gets the same disallow list.
const AI_AGENTS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User",
  "ClaudeBot", "Claude-SearchBot", "Claude-User",
  "PerplexityBot", "Perplexity-User",
  "Google-Extended", "Applebot-Extended", "Bingbot", "CCBot",
  "Meta-ExternalAgent", "DuckAssistBot", "MistralAI-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/", disallow },
      { userAgent: AI_AGENTS, allow: "/", disallow },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
