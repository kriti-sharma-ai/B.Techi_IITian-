// Blog posts live as Markdown files in content/blog/<slug>.md with a small front matter block.
// Read at build time by server components only (it uses the file system).

import { readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { cache } from "react";
import { getBlogCategory } from "./categories";
import { countWords, parseMarkdown, stripInline, type MdBlock } from "./markdown";

export type BlogPost = {
  slug: string;
  title: string;
  /** Meta description: under ~160 characters, says what the reader gets. */
  description: string;
  date: string;
  updated: string;
  category: string;
  tags: string[];
  /** The primary search query the post targets. */
  keyword: string;
  /** Short label drawn on the generated cover image. */
  cover: string;
  /** Optional real cover image path under public/, e.g. /blog/<slug>/cover.jpg. */
  image?: string;
  /** Cover art style for categories that have several (see components/blog/cover.tsx). */
  motif?: string;
  /** Two or three short facts drawn as chips on the cover. */
  highlights: string[];
  featured: boolean;
  author: string;
  blocks: MdBlock[];
  words: number;
  minutes: number;
  toc: { id: string; text: string; level: 2 | 3 }[];
};

const DIR = join(process.cwd(), "content", "blog");

/** Front matter: `key: value` lines; values may be quoted, `[a, b]` lists or true/false. */
function parseFrontMatter(raw: string, file: string): { data: Record<string, string | string[] | boolean>; body: string } {
  const m = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?/);
  if (!m) throw new Error(`content/blog/${file}: missing front matter`);
  const data: Record<string, string | string[] | boolean> = {};
  for (const line of m[1].split(/\r?\n/)) {
    const kv = line.match(/^(\w+):\s*(.*)$/);
    if (!kv) continue;
    const value = kv[2].trim();
    const unquote = (s: string) => s.trim().replace(/^(["'])(.*)\1$/, "$2");
    if (value.startsWith("[") && value.endsWith("]"))
      // Split on commas outside quotes, so "₹4,000 fee" stays one item.
      data[kv[1]] = (value.slice(1, -1).match(/"[^"]*"|'[^']*'|[^,]+/g) ?? []).map(unquote).filter(Boolean);
    else if (value === "true" || value === "false") data[kv[1]] = value === "true";
    else data[kv[1]] = unquote(value);
  }
  return { data, body: raw.slice(m[0].length) };
}

function readPost(file: string): BlogPost {
  const slug = file.replace(/\.md$/, "");
  const { data, body } = parseFrontMatter(readFileSync(join(DIR, file), "utf8"), file);
  const str = (key: string, fallback?: string) => {
    const v = data[key];
    if (typeof v === "string" && v) return v;
    if (fallback !== undefined) return fallback;
    throw new Error(`content/blog/${file}: front matter needs "${key}"`);
  };
  const category = str("category");
  if (!getBlogCategory(category)) throw new Error(`content/blog/${file}: unknown category "${category}"`);

  const blocks = parseMarkdown(body);
  const words = countWords(blocks);
  const date = str("date");
  return {
    slug,
    title: str("title"),
    description: str("description"),
    date,
    updated: str("updated", date),
    category,
    tags: Array.isArray(data.tags) ? data.tags : [],
    keyword: str("keyword", ""),
    cover: str("cover", ""),
    image: str("image", "") || undefined,
    motif: str("motif", "") || undefined,
    highlights: Array.isArray(data.highlights) ? data.highlights : [],
    featured: data.featured === true,
    author: str("author", "BTechi Team"),
    blocks,
    words,
    minutes: Math.max(1, Math.round(words / 230)),
    toc: blocks.flatMap((b) => (b.type === "heading" && b.level <= 3 ? [{ id: b.id, text: stripInline(b.text), level: b.level as 2 | 3 }] : [])),
  };
}

/** Every link target in a post's Markdown, for the broken-link check. */
const linksIn = (blocks: MdBlock[]): string[] =>
  blocks.flatMap((b) => {
    const text =
      b.type === "paragraph" || b.type === "heading"
        ? b.text
        : b.type === "list"
          ? b.items.map((i) => i.text).join(" ") + " " + linksIn(b.items.flatMap((i) => (i.children ? [i.children] : []))).join(" ")
          : b.type === "table"
            ? [...b.head, ...b.rows.flat()].join(" ")
            : "";
    const nested = b.type === "quote" || b.type === "callout" ? linksIn(b.blocks) : [];
    return [...[...text.matchAll(/\]\(([^)\s]+)\)/g)].map((m) => m[1]), ...nested];
  });

/**
 * Every published post, newest first. Files starting with "_" (drafts, plans) are skipped.
 * Throws if a post links to /blog/<slug> that doesn't exist, so the build catches broken internal links.
 */
export const getAllPosts = cache((): BlogPost[] => {
  const posts = readdirSync(DIR)
    .filter((f) => f.endsWith(".md") && !f.startsWith("_"))
    .map(readPost)
    .sort((a, b) => b.date.localeCompare(a.date) || a.title.localeCompare(b.title));
  const slugs = new Set(posts.map((p) => p.slug));
  for (const p of posts) {
    const broken = linksIn(p.blocks).filter((href) => {
      const m = href.match(/^\/blog\/([^/#?]+)/);
      return m && m[1] !== "category" && m[1] !== "rss.xml" && !slugs.has(m[1]);
    });
    if (broken.length) throw new Error(`content/blog/${p.slug}.md links to posts that don't exist: ${broken.join(", ")}`);
  }
  return posts;
});

export const getPost = (slug: string) => getAllPosts().find((p) => p.slug === slug);

export const postsInCategory = (category: string) => getAllPosts().filter((p) => p.category === category);

export const blogPostHref = (slug: string) => `/blog/${slug}`;

/** Posts sharing the most tags (then the same category), most recent first among equals. */
export function relatedPosts(post: BlogPost, n = 3) {
  const score = (p: BlogPost) => p.tags.filter((t) => post.tags.includes(t)).length * 2 + Number(p.category === post.category);
  return getAllPosts()
    .filter((p) => p.slug !== post.slug)
    .map((p) => ({ p, s: score(p) }))
    .sort((a, b) => b.s - a.s || b.p.date.localeCompare(a.p.date))
    .slice(0, n)
    .map((x) => x.p);
}
