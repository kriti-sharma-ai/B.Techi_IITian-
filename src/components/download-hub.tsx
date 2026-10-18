"use client";

// The download hub (app/downloads): every PDF, by level and course, with search and type filters.
// "PDF" loads the sheet in a hidden same-site frame and opens "Save as PDF" for it, so the student
// never leaves the hub. iPhones can't print a frame, so there the sheet opens in a new tab at #save-pdf.

import Link from "next/link";
import { useMemo, useRef, useState } from "react";
import { ChevronDown, Download, LoaderCircle, Search } from "lucide-react";
import { normalize } from "@/lib/guide";
import { SAVE_PDF_HASH, printWithImages } from "@/lib/print";
import type { PyqLevel } from "@/lib/pyq-urls";
import { cn } from "@/lib/utils";

export type DownloadItem = { title: string; meta: string; href: string };
export type DownloadCourse = {
  slug: string;
  name: string;
  short: string;
  code?: string;
  level: PyqLevel;
  notes?: DownloadItem;
  repeated?: DownloadItem;
  topics: DownloadItem[];
  years: DownloadItem[];
  papers: DownloadItem[];
};

const KINDS = [
  { id: "notes", label: "Cheat notes" },
  { id: "repeated", label: "Most repeated" },
  { id: "topics", label: "Topic wise" },
  { id: "years", label: "Year wise" },
  { id: "papers", label: "Papers" },
] as const;
type Kind = (typeof KINDS)[number]["id"];

const itemsOf = (c: DownloadCourse, kind: Kind): DownloadItem[] =>
  kind === "notes" ? (c.notes ? [c.notes] : []) : kind === "repeated" ? (c.repeated ? [c.repeated] : []) : c[kind];

const words = (s: string) => normalize(s).trim().split(" ").filter(Boolean);

/** The frame of the last download; removed when the next one starts. */
let frame: HTMLIFrameElement | null = null;

/** Opens "Save as PDF" for a BTechi page without leaving this one. */
async function savePdf(href: string) {
  if (/iPad|iPhone|iPod/.test(navigator.userAgent)) {
    window.open(href + SAVE_PDF_HASH, "_blank", "noopener");
    return;
  }
  frame?.remove();
  const f = (frame = document.createElement("iframe"));
  f.setAttribute("aria-hidden", "true");
  f.tabIndex = -1;
  // Off screen, at a desktop size, so the page lays out (and loads its images) as it prints.
  f.style.cssText = "position:fixed;left:-10000px;top:0;width:1024px;height:768px;border:0";
  await new Promise<void>((resolve, reject) => {
    f.onload = () => resolve();
    f.onerror = () => reject(new Error("Page did not load"));
    setTimeout(() => reject(new Error("Page took too long")), 30_000);
    f.src = href;
    document.body.append(f);
  });
  await printWithImages(5000, f.contentWindow!);
}

export function DownloadHub({ courses, levels }: { courses: DownloadCourse[]; levels: { slug: PyqLevel; name: string }[] }) {
  const [query, setQuery] = useState("");
  const [kind, setKind] = useState<Kind | "all">("all");
  const [open, setOpen] = useState<Set<string>>(new Set());
  /** The PDF being prepared; one at a time. */
  const [busy, setBusy] = useState<string>();
  const [failed, setFailed] = useState<string>();
  const searchRef = useRef<HTMLInputElement>(null);

  // A course stays when its name matches every word; otherwise only its PDFs whose titles do.
  const shown = useMemo(() => {
    const want = words(query);
    const kinds = KINDS.filter((k) => kind === "all" || k.id === kind);
    return courses
      .map((c) => {
        const hay = normalize(`${c.name} ${c.short} ${c.code ?? ""}`);
        const sections = kinds
          .map((k) => ({ ...k, items: itemsOf(c, k.id).filter((i) => want.every((w) => `${hay} ${normalize(`${k.label} ${i.title}`)}`.includes(` ${w}`))) }))
          .filter((s) => s.items.length > 0);
        return { course: c, sections, count: sections.reduce((n, s) => n + s.items.length, 0) };
      })
      .filter((c) => c.count > 0);
  }, [courses, query, kind]);

  const filtering = query.trim() !== "" || kind !== "all";

  const download = async (href: string) => {
    if (busy) return;
    setBusy(href);
    setFailed(undefined);
    try {
      await savePdf(href);
    } catch {
      setFailed(href);
    } finally {
      setBusy(undefined);
    }
  };

  const toggle = (slug: string) =>
    setOpen((o) => {
      const next = new Set(o);
      if (next.has(slug)) next.delete(slug);
      else next.add(slug);
      return next;
    });

  return (
    <div className="max-w-4xl space-y-8">
      <div className="space-y-3">
        <label className="flex h-11 max-w-xl items-center gap-2.5 rounded-xl border border-border bg-surface px-3.5 transition-colors focus-within:border-fg/30">
          <Search className="size-4 shrink-0 text-muted" aria-hidden />
          <input
            ref={searchRef}
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Find a course or topic, e.g. stats 1, probability"
            aria-label="Find a course or topic"
            className="h-full min-w-0 flex-1 bg-transparent text-sm outline-none placeholder:text-muted"
          />
        </label>
        <div className="-mx-4 flex gap-1.5 overflow-x-auto px-4 pb-1 [scrollbar-width:none] md:mx-0 md:flex-wrap md:px-0" role="group" aria-label="Type of PDF">
          {[{ id: "all" as const, label: "All" }, ...KINDS].map((k) => (
            <button
              key={k.id}
              type="button"
              onClick={() => setKind(k.id)}
              aria-pressed={kind === k.id}
              className={cn(
                "shrink-0 rounded-full border px-3.5 py-1.5 text-sm font-medium transition-colors",
                kind === k.id ? "border-fg bg-fg text-bg" : "border-border bg-surface text-muted hover:border-fg/30 hover:text-fg",
              )}
            >
              {k.label}
            </button>
          ))}
        </div>
      </div>

      {shown.length === 0 && (
        <div className="rounded-xl border border-dashed border-border p-8 text-center">
          <p className="text-sm text-muted">No PDFs match that.</p>
          <button
            type="button"
            onClick={() => {
              setQuery("");
              setKind("all");
              searchRef.current?.focus();
            }}
            className="mt-2 text-sm font-medium text-fg underline-offset-2 hover:underline"
          >
            Show everything
          </button>
        </div>
      )}

      {levels.map((level) => {
        const list = shown.filter((c) => c.course.level === level.slug);
        if (!list.length) return null;
        return (
          <section key={level.slug} aria-labelledby={`dl-${level.slug}`}>
            <h2 id={`dl-${level.slug}`} className="mb-3 text-lg font-bold tracking-tight">
              {level.name}
            </h2>
            <ul className="space-y-2.5">
              {list.map(({ course: c, sections, count }) => {
                // Searching or filtering opens every course that still has matches.
                const expanded = filtering || open.has(c.slug);
                return (
                  <li key={c.slug} id={c.slug} className="scroll-mt-24 overflow-hidden rounded-xl border border-border bg-surface">
                    <h3>
                      <button
                        type="button"
                        onClick={() => toggle(c.slug)}
                        aria-expanded={expanded}
                        aria-controls={`${c.slug}-pdfs`}
                        disabled={filtering}
                        className="flex w-full items-center gap-3 px-4 py-3.5 text-left transition-colors enabled:hover:bg-surface-2"
                      >
                        <span className="min-w-0 flex-1">
                          <span className="block text-xs font-semibold text-muted">
                            {c.code && <span className="font-mono">{c.code} · </span>}
                            {c.short}
                          </span>
                          <span className="block truncate font-semibold">{c.name}</span>
                        </span>
                        <span className="shrink-0 text-xs text-muted tabular-nums">
                          {count} {count === 1 ? "PDF" : "PDFs"}
                        </span>
                        {!filtering && <ChevronDown className={cn("size-4 shrink-0 text-muted transition-transform", expanded && "rotate-180")} aria-hidden />}
                      </button>
                    </h3>
                    {/* Always in the page, only hidden when folded: search engines read every PDF link. */}
                    <div id={`${c.slug}-pdfs`} hidden={!expanded} className="space-y-5 border-t border-border px-4 py-4">
                      {sections.map((s) => (
                        <div key={s.id}>
                          <h4 className="mb-2 text-xs font-semibold tracking-wide text-muted uppercase">
                            {c.short} {s.label}
                          </h4>
                          <ul className="overflow-hidden rounded-lg border border-border">
                            {s.items.map((i) => (
                              <Row key={i.href} item={i} icons={expanded} busy={busy === i.href} failed={failed === i.href} locked={!!busy} onDownload={download} />
                            ))}
                          </ul>
                        </div>
                      ))}
                    </div>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </div>
  );
}

function Row({
  item,
  icons,
  busy,
  failed,
  locked,
  onDownload,
}: {
  item: DownloadItem;
  /** Folded courses skip the icon: 700+ rows of SVG made the page heavy for phones. */
  icons: boolean;
  busy: boolean;
  failed: boolean;
  locked: boolean;
  onDownload: (href: string) => void;
}) {
  return (
    <li className="flex items-center gap-3 border-b border-border bg-bg/40 px-3 py-2.5 last:border-b-0">
      <span className="min-w-0 flex-1">
        <Link href={item.href} className="line-clamp-2 text-sm font-medium underline-offset-2 hover:underline">
          {item.title}
        </Link>
        <span className={cn("block truncate text-xs", failed ? "text-red" : "text-muted")}>{failed ? "Could not prepare the PDF. Try again." : item.meta}</span>
      </span>
      <button
        type="button"
        onClick={() => onDownload(item.href)}
        disabled={locked && !busy}
        aria-label={`Download ${item.title} as PDF`}
        className="flex h-8 shrink-0 items-center gap-1.5 rounded-md border border-border bg-surface px-2.5 text-xs font-semibold transition-colors hover:border-fg/30 disabled:opacity-50"
      >
        {busy ? <LoaderCircle className="size-3.5 animate-spin" aria-hidden /> : icons && <Download className="size-3.5" aria-hidden />}
        {busy ? "Preparing" : "PDF"}
      </button>
    </li>
  );
}
