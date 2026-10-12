// Server-rendered blog Markdown. Blocks come from lib/blog/markdown.ts; inline markup is parsed here.
// Local SVG figures (/blog/...svg in public/) are inlined so they pick up the site's light/dark
// colours through the .blog-figure classes in globals.css.

import { readFileSync } from "node:fs";
import { join } from "node:path";
import type { ReactNode } from "react";
import Link from "next/link";
import { AlertTriangle, BadgeAlert, Info, Lightbulb, OctagonAlert, type LucideIcon } from "lucide-react";
import type { CalloutTone, MdBlock } from "@/lib/blog/markdown";
import { hrefEnabled } from "@/lib/site";
import { cn } from "@/lib/utils";

/* ───────────── Inline ───────────── */

const INLINE = /(\\.)|(`[^`]+`)|(\*\*(?:[^*]|\*(?!\*))+\*\*)|(\*[^*\s](?:[^*]*[^*\s])?\*)|(\[[^\]]+\]\([^)\s]+\))/g;

export function Inline({ text }: { text: string }): ReactNode {
  const out: ReactNode[] = [];
  let last = 0;
  let k = 0;
  for (const m of text.matchAll(INLINE)) {
    if (m.index > last) out.push(text.slice(last, m.index));
    const [tok] = m;
    const key = k++;
    if (m[1]) out.push(tok[1]);
    else if (m[2])
      out.push(
        <code key={key} className="rounded-md bg-surface-2 px-1.5 py-0.5 font-mono text-[0.88em] [overflow-wrap:anywhere]">
          {tok.slice(1, -1)}
        </code>,
      );
    else if (m[3])
      out.push(
        <strong key={key} className="font-semibold text-fg">
          <Inline text={tok.slice(2, -2)} />
        </strong>,
      );
    else if (m[4])
      out.push(
        <em key={key}>
          <Inline text={tok.slice(1, -1)} />
        </em>,
      );
    else if (m[5]) {
      const [, label, href] = tok.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)!;
      const cls = "font-medium text-fg underline decoration-brand decoration-2 underline-offset-[3px] hover:decoration-fg";
      out.push(
        // A link into a section this deployment has switched off keeps its words but drops the link.
        href.startsWith("/") && !hrefEnabled(href) ? (
          <Inline key={key} text={label} />
        ) : href.startsWith("/") || href.startsWith("#") ? (
          <Link key={key} href={href} className={cls}>
            <Inline text={label} />
          </Link>
        ) : (
          <a key={key} href={href} className={cls} target="_blank" rel="noopener noreferrer">
            <Inline text={label} />
          </a>
        ),
      );
    }
    last = m.index + tok.length;
  }
  if (last < text.length) out.push(text.slice(last));
  return <>{out}</>;
}

/* ───────────── Blocks ───────────── */

const CALLOUTS: Record<CalloutTone, { label: string; icon: LucideIcon; className: string; tone: string }> = {
  note: { label: "Note", icon: Info, className: "border-blue/25 bg-blue/[0.05]", tone: "text-blue" },
  tip: { label: "Tip", icon: Lightbulb, className: "border-brand/60 bg-brand/15", tone: "text-fg" },
  important: { label: "Important", icon: BadgeAlert, className: "border-purple/25 bg-purple/[0.05]", tone: "text-purple" },
  warning: { label: "Watch out", icon: AlertTriangle, className: "border-amber/30 bg-amber/[0.06]", tone: "text-amber" },
  caution: { label: "Caution", icon: OctagonAlert, className: "border-red/25 bg-red/[0.05]", tone: "text-red" },
};

/** Inline a local SVG from public/, without the XML prolog. Returns null for anything else. */
function localSvg(src: string) {
  if (!src.startsWith("/") || !src.endsWith(".svg") || src.includes("..")) return null;
  try {
    return readFileSync(join(/* turbopackIgnore: true */ process.cwd(), "public", src), "utf8").replace(/<\?xml[^>]*>\s*/, "");
  } catch {
    throw new Error(`Blog image not found: public${src}`);
  }
}

function Figure({ block }: { block: Extract<MdBlock, { type: "image" }> }) {
  const svg = localSvg(block.src);
  return (
    <figure className="blog-figure my-8">
      {svg ? (
        <div role="img" aria-label={block.alt} className="overflow-hidden rounded-2xl border border-border bg-surface p-3 sm:p-5" dangerouslySetInnerHTML={{ __html: svg }} />
      ) : (
        // eslint-disable-next-line @next/next/no-img-element -- remote or raster images from posts; sizes are unknown
        <img src={block.src} alt={block.alt} loading="lazy" decoding="async" className="w-full rounded-2xl border border-border" />
      )}
      {block.caption && (
        <figcaption className="mt-2.5 text-center text-sm text-muted">
          <Inline text={block.caption} />
        </figcaption>
      )}
    </figure>
  );
}

function Block({ block }: { block: MdBlock }): ReactNode {
  switch (block.type) {
    case "heading": {
      const H = `h${block.level}` as "h2" | "h3" | "h4";
      return (
        <H id={block.id} className="group scroll-mt-24">
          <Inline text={block.text} />
          <a href={`#${block.id}`} className="ml-2 text-muted opacity-0 transition-opacity group-hover:opacity-100 print:hidden" aria-label="Link to this section">
            #
          </a>
        </H>
      );
    }
    case "paragraph":
      return (
        <p>
          <Inline text={block.text} />
        </p>
      );
    case "list": {
      const L = block.ordered ? "ol" : "ul";
      return (
        <L start={block.ordered && block.start !== 1 ? block.start : undefined}>
          {block.items.map((it, i) => (
            <li key={i}>
              <Inline text={it.text} />
              {it.children && <Block block={it.children} />}
            </li>
          ))}
        </L>
      );
    }
    case "code":
      return (
        <figure className="not-prose my-6">
          {block.lang && <figcaption className="mb-1.5 font-mono text-xs uppercase tracking-wide text-muted">{block.lang}</figcaption>}
          <pre className="overflow-x-auto rounded-xl bg-[#0f1115] p-4 font-mono text-[0.85em] leading-relaxed text-[#e8eaed] ring-1 ring-border [scrollbar-width:thin]">
            <code>{block.code}</code>
          </pre>
        </figure>
      );
    case "quote":
      return (
        <blockquote>
          <Blocks blocks={block.blocks} />
        </blockquote>
      );
    case "callout": {
      const c = CALLOUTS[block.tone];
      return (
        <aside className={cn("callout my-7 rounded-2xl border p-4 sm:p-5", c.className)}>
          <p className={cn("mb-1.5 flex items-center gap-1.5 text-sm font-bold uppercase tracking-wide", c.tone)}>
            <c.icon className="size-4" aria-hidden /> {c.label}
          </p>
          <Blocks blocks={block.blocks} />
        </aside>
      );
    }
    case "table":
      return (
        <div className="not-prose my-7 overflow-x-auto rounded-xl border border-border [scrollbar-width:thin]">
          <table className="w-full min-w-[32rem] border-collapse text-left text-[0.92em]">
            <thead className="bg-surface-2 text-[0.88em] text-muted">
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} scope="col" className="px-3.5 py-2.5 font-semibold" style={{ textAlign: block.align[i] ?? undefined }}>
                    <Inline text={h} />
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-border bg-surface">
              {block.rows.map((row, r) => (
                <tr key={r} className="align-top">
                  {row.map((cell, c) => (
                    <td key={c} className={cn("px-3.5 py-2.5 leading-relaxed", c === 0 && "font-medium")} style={{ textAlign: block.align[c] ?? undefined }}>
                      <Inline text={cell} />
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    case "image":
      return <Figure block={block} />;
    case "hr":
      return <hr />;
  }
}

export function Blocks({ blocks }: { blocks: MdBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => (
        <Block key={i} block={b} />
      ))}
    </>
  );
}

/** A post body with the blog's article typography (.blog-prose in globals.css). */
export function Markdown({ blocks, className }: { blocks: MdBlock[]; className?: string }) {
  return (
    <div className={cn("blog-prose", className)}>
      <Blocks blocks={blocks} />
    </div>
  );
}
