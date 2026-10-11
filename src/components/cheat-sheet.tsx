// Server-rendered cheat notes: the inline math markup and every block type.
// Interactive bits (view switch, revised ticks) come from components/cheat-reader.tsx.

import type { ReactNode } from "react";
import { AlertTriangle, ChevronDown, Flame, Lightbulb, Repeat } from "lucide-react";
import { blockViews } from "@/lib/data/cheat-notes";
import type { CheatBlock, CheatSection } from "@/lib/types";
import { cn } from "@/lib/utils";
import { RevisedToggle } from "./cheat-reader";
import { Badge } from "./ui";

/* ───────────── Inline markup ───────────── */

/** Index of the `}` matching the `{` at `open`, or −1. */
function closingBrace(s: string, open: number) {
  let depth = 0;
  for (let i = open; i < s.length; i++) {
    if (s[i] === "{") depth++;
    else if (s[i] === "}" && --depth === 0) return i;
  }
  return -1;
}

/** Index of the `]]` matching the `[[` at `open` (fractions nest), or −1. */
function closingFraction(s: string, open: number) {
  let depth = 0;
  for (let i = open; i < s.length - 1; i++) {
    if (s.startsWith("[[", i)) {
      depth++;
      i++;
    } else if (s.startsWith("]]", i)) {
      if (--depth === 0) return i;
      i++;
    }
  }
  return -1;
}

/** Split a fraction body "num // den" at its top-level separator. */
function splitFraction(body: string): [string, string] {
  let depth = 0;
  for (let i = 0; i < body.length - 1; i++) {
    if (body.startsWith("[[", i)) {
      depth++;
      i++;
    } else if (body.startsWith("]]", i)) {
      depth--;
      i++;
    } else if (depth === 0 && body.startsWith("//", i)) return [body.slice(0, i).trim(), body.slice(i + 2).trim()];
  }
  return [body, ""];
}

/** Markup: **bold**, ==highlight==, `code`, ^{sup}, _{sub}, √{x}, ‾{x} (overline) and [[num // den]]. */
function parse(s: string, prefix: string): ReactNode[] {
  const out: ReactNode[] = [];
  let text = "";
  let n = 0;
  const emit = (make: (key: string) => ReactNode) => {
    if (text) out.push(text);
    text = "";
    out.push(make(`${prefix}.${n++}`));
  };

  for (let i = 0; i < s.length; ) {
    const c = s[i];
    const pair = s.slice(i, i + 2);

    if (pair === "**" || pair === "==") {
      const end = s.indexOf(pair, i + 2);
      if (end > i + 2) {
        const inner = s.slice(i + 2, end);
        emit((key) =>
          pair === "**" ? (
            <strong key={key} className="font-semibold text-fg">
              {parse(inner, key)}
            </strong>
          ) : (
            <mark key={key} className="rounded bg-brand/35 px-0.5 text-fg">
              {parse(inner, key)}
            </mark>
          ),
        );
        i = end + 2;
        continue;
      }
    } else if (c === "`") {
      const end = s.indexOf("`", i + 1);
      if (end > i) {
        const code = s.slice(i + 1, end);
        emit((key) => (
          <code key={key} className="rounded-md bg-surface-2 px-1.5 py-0.5 font-mono text-[0.86em] [overflow-wrap:anywhere]">
            {code}
          </code>
        ));
        i = end + 1;
        continue;
      }
    } else if ((c === "^" || c === "_" || c === "√" || c === "‾") && s[i + 1] === "{") {
      const end = closingBrace(s, i + 1);
      if (end > 0) {
        const inner = s.slice(i + 2, end);
        emit((key) => {
          const body = parse(inner, key);
          if (c === "^") return <sup key={key}>{body}</sup>;
          if (c === "_") return <sub key={key}>{body}</sub>;
          if (c === "‾") return <span key={key} className="overline decoration-1">{body}</span>;
          return (
            <span key={key} className="whitespace-nowrap">
              √<span className="inline-block border-t border-current pl-0.5 pt-px leading-tight">{body}</span>
            </span>
          );
        });
        i = end + 1;
        continue;
      }
    } else if (pair === "[[") {
      const end = closingFraction(s, i);
      if (end > 0) {
        const [num, den] = splitFraction(s.slice(i + 2, end));
        emit((key) => (
          <span key={key} className="mx-0.5 inline-flex flex-col items-center text-center align-middle text-[0.88em] leading-tight" role="math" aria-label={`${num} over ${den}`}>
            <span className="border-b border-current px-1 pb-px">{parse(num, `${key}n`)}</span>
            <span className="px-1 pt-px">{parse(den, `${key}d`)}</span>
          </span>
        ));
        i = end + 2;
        continue;
      }
    }
    text += c;
    i++;
  }
  if (text) out.push(text);
  return out;
}

export function Rich({ text }: { text: string }) {
  return <>{parse(text, "r")}</>;
}

/* ───────────── Blocks ───────────── */

/** Table cell: a leading ✓ or ✗ is coloured so yes/no grids scan at a glance. */
function Cell({ text }: { text: string }) {
  const tone = text.startsWith("✓") ? "text-green" : text.startsWith("✗") ? "text-red" : null;
  if (!tone) return <Rich text={text} />;
  return (
    <>
      <span className={cn("font-bold", tone)}>{text[0]}</span>
      <Rich text={text.slice(1)} />
    </>
  );
}

const views = (b: CheatBlock) => blockViews(b).join(" ");

function BlockTitle({ children, className }: { children: ReactNode; className?: string }) {
  return <h3 className={cn("mb-2.5 text-[0.8em] font-bold uppercase tracking-wide text-muted", className)}>{children}</h3>;
}

function Formulas({ block }: { block: Extract<CheatBlock, { kind: "formulas" }> }) {
  return (
    <div className="cheat-block" data-views={views(block)}>
      {block.title && <BlockTitle>{block.title}</BlockTitle>}
      <dl className="divide-y divide-border overflow-hidden rounded-xl border border-border">
        {block.items.map((item, i) => (
          <div key={i} className="grid gap-x-5 gap-y-1 bg-surface px-3.5 py-3 odd:bg-surface-2/40 sm:grid-cols-[minmax(0,11rem)_1fr] sm:px-4">
            <dt className="text-[0.78em] font-semibold uppercase leading-snug tracking-wide text-muted sm:pt-[0.3em] sm:text-[0.82em] sm:normal-case sm:tracking-normal">
              {item.label}
            </dt>
            <dd className="min-w-0">
              <div className="cheat-math text-[1.08em] leading-relaxed">
                <Rich text={item.f} />
              </div>
              {item.note && (
                <p className="mt-1 text-[0.85em] leading-snug text-muted">
                  <Rich text={item.note} />
                </p>
              )}
            </dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

function Table({ block }: { block: Extract<CheatBlock, { kind: "table" }> }) {
  // Two-column tables read fine on a phone. Wider ones turn into one card per row below `sm`.
  const stack = block.head.length > 2;
  return (
    <div className="cheat-block" data-views={views(block)}>
      {block.title && <BlockTitle>{block.title}</BlockTitle>}
      <div className={cn("overflow-hidden rounded-xl border border-border", stack && "hidden sm:block")}>
        <table className="w-full border-collapse text-left text-[0.92em]">
          {block.head.some(Boolean) && (
            <thead className="bg-surface-2 text-[0.85em] text-muted">
              <tr>
                {block.head.map((h, i) => (
                  <th key={i} scope="col" className="px-3.5 py-2.5 font-semibold">
                    <Rich text={h} />
                  </th>
                ))}
              </tr>
            </thead>
          )}
          <tbody className="divide-y divide-border">
            {block.rows.map((row, r) => (
              <tr key={r} className="align-top">
                {row.map((cell, c) =>
                  c === 0 ? (
                    <th key={c} scope="row" className="px-3.5 py-2.5 font-semibold">
                      <Rich text={cell} />
                    </th>
                  ) : (
                    <td key={c} className="px-3.5 py-2.5">
                      <Cell text={cell} />
                    </td>
                  ),
                )}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {stack && (
        <ul className="space-y-2 sm:hidden">
          {block.rows.map((row, r) => (
            <li key={r} className="rounded-xl border border-border bg-surface px-3.5 py-3">
              <p className="font-semibold">
                <Rich text={row[0]} />
              </p>
              <dl className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 text-[0.92em]">
                {row.slice(1).map((cell, c) => (
                  <div key={c} className="min-w-0 max-w-full">
                    <dt className="inline text-muted">{block.head[c + 1] ? <Rich text={`${block.head[c + 1]}: `} /> : null}</dt>
                    <dd className="inline">
                      <Cell text={cell} />
                    </dd>
                  </div>
                ))}
              </dl>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

function Bullets({ items }: { items: string[] }) {
  return (
    <ul className="space-y-2">
      {items.map((item, i) => (
        <li key={i} className="flex gap-2.5">
          <span className="mt-[0.62em] size-1.5 shrink-0 rounded-full bg-current opacity-45" aria-hidden />
          <span className="min-w-0">
            <Rich text={item} />
          </span>
        </li>
      ))}
    </ul>
  );
}

function Code({ block }: { block: Extract<CheatBlock, { kind: "code" }> }) {
  return (
    <figure className="cheat-block" data-views={views(block)}>
      {block.title && <BlockTitle>{block.title}</BlockTitle>}
      <pre className="overflow-x-auto rounded-xl bg-[#0f1115] p-4 font-mono text-[0.8em] leading-relaxed text-[#e8eaed] ring-1 ring-border [scrollbar-width:thin] print:bg-transparent print:text-black">
        <code>{block.code}</code>
      </pre>
      {block.note && (
        <figcaption className="mt-2 text-[0.88em] text-muted">
          <Rich text={block.note} />
        </figcaption>
      )}
    </figure>
  );
}

function Example({ block }: { block: Extract<CheatBlock, { kind: "example" }> }) {
  const pyq = block.title?.startsWith("PYQ");
  return (
    <div className="cheat-block rounded-xl border border-blue/25 bg-blue/[0.04] p-4" data-views={views(block)}>
      <p className="flex items-center gap-1.5 text-[0.78em] font-bold uppercase tracking-wide text-blue">
        {pyq && <Repeat className="size-3.5" aria-hidden />}
        {block.title ?? "Worked example"}
      </p>
      <p className="mt-2 font-medium leading-relaxed">
        <Rich text={block.q} />
      </p>
      <details className="group mt-3" data-cheat-solution>
        <summary className="inline-flex h-9 cursor-pointer list-none items-center gap-1.5 rounded-lg border border-border bg-surface px-3 text-[0.85em] font-semibold select-none hover:border-fg/30 print:hidden [&::-webkit-details-marker]:hidden">
          <ChevronDown className="size-4 transition-transform group-open:rotate-180" aria-hidden />
          <span className="group-open:hidden">Show solution</span>
          <span className="hidden group-open:inline">Hide solution</span>
        </summary>
        <ol className="mt-3 space-y-1.5 border-l-2 border-blue/30 pl-3.5">
          {block.steps.map((step, i) => (
            <li key={i} className="leading-relaxed">
              <Rich text={step} />
            </li>
          ))}
        </ol>
        <p className="mt-3 rounded-lg bg-green/10 px-3 py-2 font-semibold text-fg">
          <span className="text-green">Answer: </span>
          <Rich text={block.answer} />
        </p>
      </details>
    </div>
  );
}

function Traps({ block }: { block: Extract<CheatBlock, { kind: "traps" }> }) {
  return (
    <div className="cheat-block rounded-xl border border-red/25 bg-red/[0.04] p-4" data-views={views(block)}>
      <p className="mb-2.5 flex items-center gap-1.5 text-[0.78em] font-bold uppercase tracking-wide text-red">
        <AlertTriangle className="size-3.5" aria-hidden /> Traps to avoid
      </p>
      <Bullets items={block.items} />
    </div>
  );
}

function Tip({ block }: { block: Extract<CheatBlock, { kind: "tip" }> }) {
  return (
    <div className="cheat-block flex gap-3 rounded-xl bg-brand/15 p-4 ring-1 ring-brand/50" data-views={views(block)}>
      <Lightbulb className="mt-0.5 size-5 shrink-0" aria-hidden />
      <p className="leading-relaxed">
        <span className="font-bold">Shortcut: </span>
        <Rich text={block.text} />
      </p>
    </div>
  );
}

function Block({ block }: { block: CheatBlock }) {
  switch (block.kind) {
    case "formulas":
      return <Formulas block={block} />;
    case "table":
      return <Table block={block} />;
    case "points":
      return (
        <div className="cheat-block" data-views={views(block)}>
          {block.title && <BlockTitle>{block.title}</BlockTitle>}
          <Bullets items={block.items} />
        </div>
      );
    case "code":
      return <Code block={block} />;
    case "example":
      return <Example block={block} />;
    case "traps":
      return <Traps block={block} />;
    case "tip":
      return <Tip block={block} />;
  }
}

/* ───────────── Sections ───────────── */

const HITS: Record<CheatSection["hits"], { label: string; tone: "red" | "amber" | "neutral" }> = {
  every: { label: "Every paper", tone: "red" },
  often: { label: "Most papers", tone: "amber" },
  sometimes: { label: "Some papers", tone: "neutral" },
};

export function HitsBadge({ hits }: { hits: CheatSection["hits"] }) {
  const h = HITS[hits];
  return (
    <Badge tone={h.tone}>
      {hits === "every" && <Flame className="size-3" aria-hidden />}
      {h.label}
    </Badge>
  );
}

/** Views a set of blocks has content for, so empty cards disappear in the condensed and Traps views. */
export const blocksViews = (blocks: CheatBlock[]) => [...new Set(blocks.flatMap(blockViews))].join(" ");

/** Views this section has content for, so empty sections disappear in the Formulas and Traps views. */
export const sectionViews = (section: CheatSection) => blocksViews(section.blocks);

/** A titled card of note blocks with a "revised" tick: a cheat-sheet section or a skill lesson. */
export function NoteCard({
  id,
  title,
  eyebrow,
  blocks,
  heading: Heading = "h2",
}: {
  id: string;
  title: string;
  eyebrow: ReactNode;
  blocks: CheatBlock[];
  heading?: "h2" | "h3";
}) {
  return (
    <section id={id} data-views={blocksViews(blocks)} aria-labelledby={`${id}-title`} className="card scroll-mt-36 overflow-hidden">
      <header className="flex items-start gap-3 border-b border-border px-4 py-3.5 sm:px-6 sm:py-4">
        <div className="min-w-0 flex-1">
          <div className="mb-1.5 flex flex-wrap items-center gap-2">{eyebrow}</div>
          <Heading id={`${id}-title`} className="text-[1.25em] font-bold leading-snug tracking-tight">
            {title}
          </Heading>
        </div>
        <RevisedToggle id={id} title={title} />
      </header>
      <div className="space-y-5 px-4 py-5 sm:px-6">
        {blocks.map((block, i) => (
          <Block key={i} block={block} />
        ))}
      </div>
    </section>
  );
}

export function CheatSectionCard({ section }: { section: CheatSection }) {
  return (
    <NoteCard
      id={section.id}
      title={section.title}
      blocks={section.blocks}
      eyebrow={
        <>
          <span className="text-[0.75em] font-bold uppercase tracking-wider text-muted">Week {section.week}</span>
          <HitsBadge hits={section.hits} />
        </>
      }
    />
  );
}
