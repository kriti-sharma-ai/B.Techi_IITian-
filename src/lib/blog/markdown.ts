// A small Markdown parser for blog posts. It covers what the posts use and nothing more:
// ## headings, paragraphs, lists (one level of nesting), > quotes, > [!TIP] callouts,
// fenced code, GFM tables, standalone images with captions and --- rules.
// Inline markup (**bold**, *italic*, `code`, [links](url)) is parsed at render time
// by components/blog/markdown.tsx.

export type CalloutTone = "note" | "tip" | "important" | "warning" | "caution";

export type ListItem = { text: string; children?: MdBlock };

export type MdBlock =
  | { type: "heading"; level: 2 | 3 | 4; text: string; id: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; start: number; items: ListItem[] }
  | { type: "code"; lang: string; code: string }
  | { type: "quote"; blocks: MdBlock[] }
  | { type: "callout"; tone: CalloutTone; blocks: MdBlock[] }
  | { type: "table"; head: string[]; align: ("left" | "center" | "right" | null)[]; rows: string[][] }
  | { type: "image"; alt: string; src: string; caption?: string }
  | { type: "hr" };

/** Plain text of inline markup: drops **, *, ` and link targets. */
export const stripInline = (s: string) =>
  s
    .replace(/!\[([^\]]*)\]\([^)]*\)/g, "$1")
    .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
    .replace(/[*`]/g, "")
    .replace(/\\(.)/g, "$1");

export const slugify = (s: string) =>
  stripInline(s)
    .toLowerCase()
    .replace(/&/g, " and ")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "")
    .slice(0, 80);

const FENCE = /^(`{3,}|~{3,})\s*([\w+-]*)\s*$/;
const HEADING = /^(#{1,4})\s+(.+?)\s*#*\s*$/;
const HR = /^(?:-{3,}|\*{3,}|_{3,})\s*$/;
const LIST_ITEM = /^(\s*)([-*+]|\d+[.)])\s+(.*)$/;
const IMAGE = /^!\[([^\]]*)\]\((\S+?)(?:\s+"([^"]*)")?\)\s*$/;
const TABLE_SEP = /^\s*\|?\s*:?-{2,}:?\s*(\|\s*:?-{2,}:?\s*)*\|?\s*$/;
const CALLOUT = /^\[!(NOTE|TIP|IMPORTANT|WARNING|CAUTION)\]\s*$/i;

const indentOf = (line: string) => line.match(/^\s*/)![0].replace(/\t/g, "    ").length;

function splitRow(line: string) {
  let s = line.trim();
  if (s.startsWith("|")) s = s.slice(1);
  if (s.endsWith("|") && !s.endsWith("\\|")) s = s.slice(0, -1);
  // Split on pipes that aren't escaped or inside `code`.
  const cells: string[] = [];
  let cur = "";
  let code = false;
  for (let i = 0; i < s.length; i++) {
    const c = s[i];
    if (c === "\\" && s[i + 1] === "|") {
      cur += "|";
      i++;
    } else if (c === "`") {
      code = !code;
      cur += c;
    } else if (c === "|" && !code) {
      cells.push(cur.trim());
      cur = "";
    } else cur += c;
  }
  cells.push(cur.trim());
  return cells;
}

const startsBlock = (line: string, next?: string) =>
  FENCE.test(line) ||
  HEADING.test(line) ||
  HR.test(line) ||
  /^\s*>/.test(line) ||
  LIST_ITEM.test(line) ||
  IMAGE.test(line.trim()) ||
  (line.trim().startsWith("|") && next !== undefined && TABLE_SEP.test(next));

export function parseMarkdown(src: string, ids = new Map<string, number>()): MdBlock[] {
  const lines = src.replace(/\r\n?/g, "\n").split("\n");
  const blocks: MdBlock[] = [];
  let i = 0;

  const uniqueId = (text: string) => {
    const base = slugify(text) || "section";
    const n = ids.get(base) ?? 0;
    ids.set(base, n + 1);
    return n ? `${base}-${n + 1}` : base;
  };

  while (i < lines.length) {
    const line = lines[i];
    if (!line.trim()) {
      i++;
      continue;
    }

    // Fenced code
    const fence = line.match(FENCE);
    if (fence) {
      const close = fence[1];
      const body: string[] = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith(close)) body.push(lines[i++]);
      i++;
      blocks.push({ type: "code", lang: fence[2] || "", code: body.join("\n") });
      continue;
    }

    // Headings: a stray # is demoted to ##, since the page title is the only h1.
    const heading = line.match(HEADING);
    if (heading) {
      const level = Math.max(2, heading[1].length) as 2 | 3 | 4;
      blocks.push({ type: "heading", level, text: heading[2], id: uniqueId(heading[2]) });
      i++;
      continue;
    }

    if (HR.test(line)) {
      blocks.push({ type: "hr" });
      i++;
      continue;
    }

    // Quotes and callouts
    if (/^\s*>/.test(line)) {
      const body: string[] = [];
      while (i < lines.length && /^\s*>/.test(lines[i])) body.push(lines[i++].replace(/^\s*>\s?/, ""));
      const callout = body[0]?.trim().match(CALLOUT);
      if (callout) blocks.push({ type: "callout", tone: callout[1].toLowerCase() as CalloutTone, blocks: parseMarkdown(body.slice(1).join("\n"), ids) });
      else blocks.push({ type: "quote", blocks: parseMarkdown(body.join("\n"), ids) });
      continue;
    }

    // Standalone image
    const image = line.trim().match(IMAGE);
    if (image) {
      blocks.push({ type: "image", alt: image[1], src: image[2], caption: image[3] });
      i++;
      continue;
    }

    // Table
    if (line.trim().startsWith("|") && lines[i + 1] !== undefined && TABLE_SEP.test(lines[i + 1])) {
      const head = splitRow(line);
      const align = splitRow(lines[i + 1]).map((c) =>
        c.startsWith(":") && c.endsWith(":") ? "center" : c.endsWith(":") ? "right" : c.startsWith(":") ? "left" : null,
      );
      const rows: string[][] = [];
      i += 2;
      while (i < lines.length && lines[i].trim().startsWith("|")) rows.push(splitRow(lines[i++]));
      blocks.push({ type: "table", head, align, rows });
      continue;
    }

    // Lists
    const item = line.match(LIST_ITEM);
    if (item) {
      const base = indentOf(line);
      const ordered = /\d/.test(item[2]);
      const items: ListItem[] = [];
      let nested: string[] = [];
      const flush = () => {
        if (nested.length && items.length) {
          const minIndent = Math.min(...nested.filter((l) => l.trim()).map(indentOf));
          const parsed = parseMarkdown(nested.map((l) => l.slice(minIndent)).join("\n"), ids);
          if (parsed[0]) items[items.length - 1].children = parsed[0];
        }
        nested = [];
      };
      while (i < lines.length) {
        const l = lines[i];
        const m = l.match(LIST_ITEM);
        if (m && indentOf(l) === base && /\d/.test(m[2]) === ordered) {
          flush();
          items.push({ text: m[3] });
          i++;
        } else if (l.trim() && indentOf(l) > base) {
          // Nested list line, or a wrapped continuation of the current item.
          if (LIST_ITEM.test(l) || nested.length) nested.push(l);
          else items[items.length - 1].text += " " + l.trim();
          i++;
        } else if (!l.trim() && lines[i + 1] && (LIST_ITEM.test(lines[i + 1]) || indentOf(lines[i + 1]) > base) && indentOf(lines[i + 1]) >= base) {
          i++; // blank line inside a loose list
        } else break;
      }
      flush();
      blocks.push({ type: "list", ordered, start: ordered ? parseInt(item[2], 10) : 1, items });
      continue;
    }

    // Paragraph: runs until a blank line or the start of another block.
    const para: string[] = [line.trim()];
    i++;
    while (i < lines.length && lines[i].trim() && !startsBlock(lines[i], lines[i + 1])) para.push(lines[i++].trim());
    blocks.push({ type: "paragraph", text: para.join(" ") });
  }
  return blocks;
}

/** Word count of the rendered text, for reading time. */
export function countWords(blocks: MdBlock[]): number {
  const words = (s: string) => stripInline(s).split(/\s+/).filter(Boolean).length;
  return blocks.reduce((n, b) => {
    switch (b.type) {
      case "heading":
      case "paragraph":
        return n + words(b.text);
      case "list":
        return n + b.items.reduce((m, it) => m + words(it.text) + (it.children ? countWords([it.children]) : 0), 0);
      case "quote":
      case "callout":
        return n + countWords(b.blocks);
      case "table":
        return n + [...b.head, ...b.rows.flat()].reduce((m, c) => m + words(c), 0);
      case "code":
        return n + b.code.split(/\s+/).filter(Boolean).length;
      case "image":
        return n + words(b.caption ?? "");
      case "hr":
        return n;
    }
  }, 0);
}
