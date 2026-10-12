"use client";

// Interactive shell for the cheat-notes reader (/qualifier/notes/<sheet>). The notes themselves
// are server-rendered by components/cheat-sheet.tsx; this file only adds the view switch, contents,
// "revised" ticks, text size and reading progress. The view switch hides blocks through CSS
// (see `.cheat-reader` in globals.css), so switching never re-renders the notes.

import { createContext, use, useCallback, useEffect, useRef, useState, type CSSProperties, type MouseEvent, type ReactNode } from "react";
import { Check, FileText, Flame, Keyboard, ListTree, Printer, Rocket, Target, TriangleAlert, Type, X, Zap } from "lucide-react";
import type { CheatView } from "@/lib/data/cheat-notes";
import type { CheatSection } from "@/lib/types";
import { cn } from "@/lib/utils";
import { buttonClass } from "./ui";

/** A contents entry. Entries with a `week` or `meta` line are sections the reader can tick off as revised. */
export type TocItem = { id: string; title: string; week?: number; hits?: CheatSection["hits"]; views?: string; meta?: string };

const tracked = (items: TocItem[]) => items.filter((i) => i.week !== undefined || i.meta !== undefined);

/** Text sizes for the notes, smallest first. The middle one is the default. */
const FONT_SIZES = ["15px", "16.5px", "18px"];
const REVISED_KEY = "btechi:cheat-revised";
const PREFS_KEY = "btechi:cheat-prefs";

function readJSON<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

function writeJSON(key: string, value: unknown) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {
    // Private mode or blocked storage: ticks and prefs just won't persist.
  }
}

type Reader = {
  view: CheatView;
  setView: (v: CheatView) => void;
  revised: string[];
  toggleRevised: (id: string) => void;
  font: number;
  setFont: (n: number) => void;
  solutions: boolean;
  setSolutions: (open: boolean) => void;
};

const ReaderContext = createContext<Reader | null>(null);

function useReader() {
  const r = use(ReaderContext);
  if (!r) throw new Error("Cheat-notes controls must be rendered inside <CheatReader>.");
  return r;
}

/** Scroll to a section below the sticky navbar and toolbar, and keep its hash in the URL for sharing. */
function goTo(id: string) {
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
  window.history.replaceState(null, "", `${window.location.pathname}${window.location.search}#${id}`);
}

export function CheatReader({ sheet, children }: { sheet: string; children: ReactNode }) {
  const [view, setViewState] = useState<CheatView>("notes");
  const [revised, setRevisedState] = useState<string[]>([]);
  const [font, setFontState] = useState(1);
  const [solutions, setSolutionsState] = useState(false);

  // Restore the view from ?view= and the reader's saved ticks and preferences.
  useEffect(() => {
    const v = new URLSearchParams(window.location.search).get("view");
    if (v === "quick" || v === "traps") setViewState(v);
    setRevisedState(readJSON<Record<string, string[]>>(REVISED_KEY, {})[sheet] ?? []);
    const prefs = readJSON<{ font?: number; solutions?: boolean }>(PREFS_KEY, {});
    if (typeof prefs.font === "number") setFontState(Math.min(FONT_SIZES.length - 1, Math.max(0, prefs.font)));
    if (prefs.solutions) setSolutionsState(true);
  }, [sheet]);

  const setView = useCallback((v: CheatView) => {
    setViewState(v);
    const url = new URL(window.location.href);
    if (v === "notes") url.searchParams.delete("view");
    else url.searchParams.set("view", v);
    url.hash = "";
    window.history.replaceState(null, "", url);
    // The content above the reader's position changes height, so restart from the top of the notes.
    const content = document.getElementById("cheat-content");
    if (content && content.getBoundingClientRect().top < 0) content.scrollIntoView({ block: "start" });
  }, []);

  const toggleRevised = useCallback(
    (id: string) => {
      const next = revised.includes(id) ? revised.filter((x) => x !== id) : [...revised, id];
      setRevisedState(next);
      writeJSON(REVISED_KEY, { ...readJSON<Record<string, string[]>>(REVISED_KEY, {}), [sheet]: next });
    },
    [revised, sheet],
  );

  const savePrefs = (patch: { font?: number; solutions?: boolean }) =>
    writeJSON(PREFS_KEY, { ...readJSON<object>(PREFS_KEY, {}), ...patch });

  const setFont = useCallback((n: number) => {
    setFontState(n);
    savePrefs({ font: n });
  }, []);

  const setSolutions = useCallback((open: boolean) => {
    setSolutionsState(open);
    savePrefs({ solutions: open });
  }, []);

  // Worked solutions are <details>; open or close them all, and always print them open.
  useEffect(() => {
    document.querySelectorAll<HTMLDetailsElement>("[data-cheat-solution]").forEach((d) => (d.open = solutions));
  }, [solutions]);
  useEffect(() => {
    const openAll = () => document.querySelectorAll<HTMLDetailsElement>("[data-cheat-solution]").forEach((d) => (d.open = true));
    window.addEventListener("beforeprint", openAll);
    return () => window.removeEventListener("beforeprint", openAll);
  }, []);

  // Keyboard power-user shortcuts: J/K navigate topics, S toggles solutions, P prints
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      const target = e.target as HTMLElement | null;
      if (target && (target.tagName === "INPUT" || target.tagName === "TEXTAREA" || target.isContentEditable)) {
        return;
      }
      if (e.metaKey || e.ctrlKey || e.altKey) return;

      if (e.key === "s" || e.key === "S") {
        e.preventDefault();
        setSolutions(!solutions);
      } else if (e.key === "p" || e.key === "P") {
        e.preventDefault();
        window.print();
      } else if (e.key === "j" || e.key === "J") {
        e.preventDefault();
        const targets = Array.from(document.querySelectorAll<HTMLElement>("#cheat-content section, #cheat-content [id]"));
        const currentY = window.scrollY + 140;
        const next = targets.find((t) => t.offsetTop > currentY);
        if (next) next.scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (e.key === "k" || e.key === "K") {
        e.preventDefault();
        const targets = Array.from(document.querySelectorAll<HTMLElement>("#cheat-content section, #cheat-content [id]"));
        const currentY = window.scrollY + 60;
        const prev = [...targets].reverse().find((t) => t.offsetTop < currentY);
        if (prev) prev.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [solutions, setSolutions]);

  return (
    <ReaderContext value={{ view, setView, revised, toggleRevised, font, setFont, solutions, setSolutions }}>
      <div className="cheat-reader" data-view={view} style={{ "--cheat-fs": FONT_SIZES[font] } as CSSProperties}>
        {children}
      </div>
    </ReaderContext>
  );
}

/* ───────────── Toolbar ───────────── */

function useReadingProgress(view: CheatView) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = document.getElementById("cheat-content");
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const offset = 120; // navbar + toolbar
      const range = rect.height - (window.innerHeight - offset);
      setProgress(range <= 0 ? 100 : Math.max(0, Math.min(100, ((offset - rect.top) / range) * 100)));
    };
    const schedule = () => {
      if (!frame) frame = requestAnimationFrame(update);
    };
    update();
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    return () => {
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      cancelAnimationFrame(frame);
    };
  }, [view]);
  return progress;
}

function useActiveSection(ids: string[]) {
  const [active, setActive] = useState<string>();
  const key = ids.join(" ");
  useEffect(() => {
    const els = key
      .split(" ")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    // A section is "current" once its top crosses the band just under the sticky toolbar.
    const observer = new IntersectionObserver(
      (entries) => {
        const hit = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)[0];
        if (hit) setActive(hit.target.id);
      },
      { rootMargin: "-130px 0px -55% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [key]);
  return active;
}

export function ReaderToolbar({ quickLabel, items }: { quickLabel: string; items: TocItem[] }) {
  const { view, setView, revised } = useReader();
  const progress = useReadingProgress(view);
  const [tocOpen, setTocOpen] = useState(false);
  const sections = tracked(items);
  const views: { id: CheatView; label: string }[] = [
    { id: "notes", label: "Notes" },
    { id: "quick", label: quickLabel },
    { id: "traps", label: "Traps" },
  ];

  return (
    <>
      <div className="sticky top-16 z-30 border-b border-border bg-surface/95 backdrop-blur-md print:hidden">
        <div className="mx-auto flex h-14 max-w-[1380px] items-center gap-3 px-4 sm:px-6 lg:px-8">
          <div role="group" aria-label="What to show" className="flex min-w-0 flex-1 gap-1 rounded-xl bg-surface-2 p-1 sm:flex-none">
            {views.map((v) => (
              <button
                key={v.id}
                type="button"
                aria-pressed={view === v.id}
                onClick={() => setView(v.id)}
                className={cn(
                  "h-9 min-w-0 flex-auto truncate rounded-lg px-2 text-sm font-semibold transition-colors sm:flex-none sm:px-4 cursor-pointer",
                  view === v.id ? "bg-surface text-fg shadow-xs" : "text-muted hover:text-fg",
                )}
              >
                {v.label}
              </button>
            ))}
          </div>
          <span className="hidden flex-1 sm:block" />
          <div className="hidden items-center gap-2 rounded-lg border border-border bg-surface px-3 py-1 text-xs text-muted tabular-nums md:flex">
            <span className="font-semibold text-fg">{revised.length}</span>
            <span>/</span>
            <span>{sections.length} revised</span>
          </div>
          <button
            type="button"
            onClick={() => setTocOpen(true)}
            aria-label="Contents"
            className="grid size-10 shrink-0 place-items-center rounded-xl border border-border bg-surface transition-colors hover:border-fg/30 lg:hidden cursor-pointer"
          >
            <ListTree className="size-[18px]" aria-hidden />
          </button>
          <ReaderSettings />
        </div>
        <div className="absolute inset-x-0 -bottom-px h-0.5" aria-hidden>
          <div className="h-full bg-brand transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
        </div>
      </div>
      {/* Outside the toolbar: its backdrop-filter would trap a fixed-position sheet inside it. */}
      {tocOpen && <ContentsSheet items={items} onClose={() => setTocOpen(false)} />}
    </>
  );
}

function ReaderSettings() {
  const { font, setFont, solutions, setSolutions } = useReader();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    const close = (e: Event) => {
      if (e instanceof KeyboardEvent ? e.key === "Escape" : !ref.current?.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener("pointerdown", close);
    document.addEventListener("keydown", close);
    return () => {
      document.removeEventListener("pointerdown", close);
      document.removeEventListener("keydown", close);
    };
  }, [open]);

  return (
    <div ref={ref} className="relative shrink-0">
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label="Reading settings"
        className="grid size-10 place-items-center rounded-xl border border-border bg-surface transition-colors hover:border-fg/30"
      >
        <Type className="size-[18px]" aria-hidden />
      </button>
      {open && (
        <div className="animate-mega-open absolute right-0 top-12 w-64 rounded-2xl border border-border bg-surface p-4 shadow-xl">
          <p className="eyebrow mb-2">Text size</p>
          <div className="flex gap-1 rounded-xl bg-surface-2 p-1">
            {FONT_SIZES.map((size, i) => (
              <button
                key={size}
                type="button"
                aria-pressed={font === i}
                aria-label={["Small", "Medium", "Large"][i] + " text"}
                onClick={() => setFont(i)}
                className={cn("h-9 flex-1 rounded-lg font-semibold transition-colors", font === i ? "bg-surface shadow-sm" : "text-muted hover:text-fg")}
                style={{ fontSize: `${13 + i * 2}px` }}
              >
                A
              </button>
            ))}
          </div>
          <label className="mt-4 flex cursor-pointer items-center justify-between gap-3 text-sm">
            <span>
              <span className="block font-semibold">Show all solutions</span>
              <span className="text-xs text-muted">Off: tap to reveal, for self-testing</span>
            </span>
            <input type="checkbox" checked={solutions} onChange={(e) => setSolutions(e.target.checked)} className="size-5 shrink-0 accent-[var(--fg)]" />
          </label>
          <button type="button" onClick={() => window.print()} className={buttonClass("secondary", "md", "mt-4 w-full")}>
            <Printer className="size-4" aria-hidden /> Print or save as PDF
          </button>
        </div>
      )}
    </div>
  );
}

/* ───────────── Contents ───────────── */

function ContentsList({ items, onNavigate }: { items: TocItem[]; onNavigate?: () => void }) {
  const { revised } = useReader();
  const active = useActiveSection(items.map((i) => i.id));
  const click = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate?.();
    // Wait a frame so a closing sheet releases the page scroll first.
    requestAnimationFrame(() => goTo(id));
  };
  return (
    <ol className="space-y-0.5">
      {items.map((it) => {
        const done = revised.includes(it.id);
        const on = active === it.id;
        return (
          <li key={it.id} data-views={it.views}>
            <a
              href={`#${it.id}`}
              onClick={(e) => click(e, it.id)}
              aria-current={on ? "location" : undefined}
              className={cn(
                "flex items-start gap-2.5 rounded-xl px-2.5 py-2.5 text-sm transition-colors lg:py-2",
                on ? "bg-surface-2 font-semibold text-fg" : "text-muted hover:bg-surface-2 hover:text-fg",
              )}
            >
              <span
                className={cn(
                  "mt-px grid size-[18px] shrink-0 place-items-center rounded-full border",
                  done ? "border-green bg-green text-bg" : "border-border",
                )}
              >
                {done && <Check className="size-3" strokeWidth={3} aria-label="Revised" />}
              </span>
              <span className="min-w-0 flex-1 leading-snug">
                {it.title}
                {it.meta !== undefined ? (
                  <span className="mt-0.5 block text-xs font-normal text-muted">{it.meta}</span>
                ) : it.week !== undefined && (
                  <span className="mt-0.5 flex items-center gap-1 text-xs font-normal text-muted">
                    Week {it.week}
                    {it.hits === "every" && (
                      <>
                        {" · "}
                        <Flame className="size-3 text-red" aria-hidden /> every paper
                      </>
                    )}
                  </span>
                )}
              </span>
            </a>
          </li>
        );
      })}
    </ol>
  );
}

function RevisedMeter({ total }: { total: number }) {
  const { revised } = useReader();
  const pct = total ? Math.round((revised.length / total) * 100) : 0;
  return (
    <div className="mb-3">
      <div className="mb-1.5 flex justify-between text-xs text-muted tabular-nums">
        <span>
          {revised.length} of {total} revised
        </span>
        <span>{pct}%</span>
      </div>
      <div className="h-1.5 overflow-hidden rounded-full bg-surface-2">
        <div className="h-full rounded-full bg-green transition-[width] duration-300" style={{ width: `${pct}%` }} />
      </div>
    </div>
  );
}

/** Desktop sidebar. Phones get the same list in a bottom sheet from the toolbar. */
export function ReaderToc({ items }: { items: TocItem[] }) {
  return (
    <nav aria-label="Contents" className="sticky top-36 hidden max-h-[calc(100dvh-10rem)] overflow-y-auto pb-6 [scrollbar-width:thin] lg:block print:hidden">
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-xs">
        <p className="eyebrow mb-3">Contents</p>
        <RevisedMeter total={tracked(items).length} />
        <ContentsList items={items} />
      </div>
    </nav>
  );
}

/** Right study companion rail for widescreen reading. */
export function StudyCompanion({
  quickLabel,
  items,
}: {
  quickLabel: string;
  items: TocItem[];
}) {
  const { view, setView, revised, font, setFont, solutions, setSolutions } = useReader();
  const sections = tracked(items);
  const pct = sections.length ? Math.round((revised.length / sections.length) * 100) : 0;

  return (
    <aside aria-label="Study Companion" className="sticky top-36 hidden xl:block space-y-4 print:hidden">
      {/* Revision Tracker Card */}
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-xs">
        <div className="flex items-center justify-between mb-2">
          <p className="eyebrow">Revision Tracker</p>
          <span className="font-mono text-xs font-bold text-fg tabular-nums">{pct}%</span>
        </div>
        <div className="h-2 w-full overflow-hidden rounded-full bg-surface-2 mb-2.5">
          <div className="h-full rounded-full bg-green transition-all duration-300" style={{ width: `${pct}%` }} />
        </div>
        <p className="text-xs text-muted">
          <strong className="text-fg">{revised.length}</strong> of {sections.length} topics checked off.
        </p>
      </div>

      {/* Quick View Switcher */}
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-xs">
        <p className="eyebrow mb-2.5">Reading View</p>
        <div className="flex flex-col gap-1 text-xs">
          <button
            type="button"
            onClick={() => setView("notes")}
            className={cn(
              "flex items-center justify-between rounded-xl px-3 py-2 font-medium transition-colors cursor-pointer text-left",
              view === "notes" ? "bg-surface-2 font-bold text-fg border border-border" : "text-muted hover:bg-surface-2/60 hover:text-fg",
            )}
          >
            <span className="flex items-center gap-2"><FileText className="size-3.5 shrink-0" aria-hidden /> Complete Notes</span>
            {view === "notes" && <span className="size-1.5 rounded-full bg-brand" />}
          </button>
          <button
            type="button"
            onClick={() => setView("quick")}
            className={cn(
              "flex items-center justify-between rounded-xl px-3 py-2 font-medium transition-colors cursor-pointer text-left",
              view === "quick" ? "bg-surface-2 font-bold text-fg border border-border" : "text-muted hover:bg-surface-2/60 hover:text-fg",
            )}
          >
            <span className="flex items-center gap-2"><Zap className="size-3.5 shrink-0" aria-hidden /> {quickLabel}</span>
            {view === "quick" && <span className="size-1.5 rounded-full bg-brand" />}
          </button>
          <button
            type="button"
            onClick={() => setView("traps")}
            className={cn(
              "flex items-center justify-between rounded-xl px-3 py-2 font-medium transition-colors cursor-pointer text-left",
              view === "traps" ? "bg-surface-2 font-bold text-fg border border-border" : "text-muted hover:bg-surface-2/60 hover:text-fg",
            )}
          >
            <span className="flex items-center gap-2"><TriangleAlert className="size-3.5 shrink-0" aria-hidden /> Traps & Common Errors</span>
            {view === "traps" && <span className="size-1.5 rounded-full bg-brand" />}
          </button>
        </div>
      </div>

      {/* Text Size & Print Options */}
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-xs">
        <p className="eyebrow mb-2">Reading Options</p>
        <div className="flex gap-1 rounded-xl bg-surface-2 p-1 mb-3">
          {FONT_SIZES.map((size, i) => (
            <button
              key={size}
              type="button"
              aria-pressed={font === i}
              aria-label={["Small", "Medium", "Large"][i] + " text"}
              onClick={() => setFont(i)}
              className={cn(
                "h-7 flex-1 rounded-lg text-xs font-bold transition-colors cursor-pointer",
                font === i ? "bg-surface text-fg shadow-2xs" : "text-muted hover:text-fg",
              )}
            >
              {["14", "16", "18"][i]}px
            </button>
          ))}
        </div>
        <label className="flex cursor-pointer items-center justify-between gap-2 text-xs">
          <span className="font-medium text-fg">Reveal all solutions</span>
          <input
            type="checkbox"
            checked={solutions}
            onChange={(e) => setSolutions(e.target.checked)}
            className="size-4 rounded accent-fg cursor-pointer"
          />
        </label>
        <button
          type="button"
          onClick={() => window.print()}
          className="mt-3 flex w-full items-center justify-center gap-1.5 rounded-xl border border-border bg-surface-2 py-2 text-xs font-semibold text-fg hover:bg-surface-3 transition-colors cursor-pointer"
        >
          <Printer className="size-3.5" aria-hidden /> Print / Save PDF
        </button>
      </div>

      {/* Quick Jump Shortcuts */}
      <div className="rounded-2xl border border-border bg-surface p-4 shadow-xs text-xs space-y-2">
        <p className="eyebrow mb-1">Quick Shortcuts</p>
        <a href="#last-minute" className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-muted hover:bg-surface-2 hover:text-fg transition-colors">
          <span className="flex items-center gap-2"><Target className="size-3.5 shrink-0" aria-hidden /> Last-minute checklist</span>
          <span>↓</span>
        </a>
        <a href="#test-yourself" className="flex items-center justify-between rounded-lg px-2.5 py-1.5 text-muted hover:bg-surface-2 hover:text-fg transition-colors">
          <span className="flex items-center gap-2"><Rocket className="size-3.5 shrink-0" aria-hidden /> Practice & Mocks</span>
          <span>↓</span>
        </a>
      </div>

      {/* Power-User Keyboard Shortcuts Pill */}
      <div className="rounded-2xl border border-border/80 bg-surface-2/40 p-3.5 shadow-2xs text-[11px] text-muted space-y-2">
        <div className="flex items-center gap-1.5 font-semibold text-fg">
          <Keyboard className="size-3.5 shrink-0" aria-hidden /> <span>Keyboard Shortcuts</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span>Next / Prev topic</span>
          <span className="font-mono bg-surface border border-border px-1.5 py-0.5 rounded text-fg font-semibold">J / K</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span>Toggle solutions</span>
          <span className="font-mono bg-surface border border-border px-1.5 py-0.5 rounded text-fg font-semibold">S</span>
        </div>
        <div className="flex items-center justify-between text-[11px]">
          <span>Print / Save PDF</span>
          <span className="font-mono bg-surface border border-border px-1.5 py-0.5 rounded text-fg font-semibold">P</span>
        </div>
      </div>
    </aside>
  );
}

function ContentsSheet({ items, onClose }: { items: TocItem[]; onClose: () => void }) {
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = prev;
      window.removeEventListener("keydown", onKey);
    };
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-[60] lg:hidden print:hidden" role="dialog" aria-modal="true" aria-label="Contents">
      <button type="button" aria-label="Close contents" onClick={onClose} className="absolute inset-0 bg-black/45 backdrop-blur-[2px]" />
      <div className="animate-fade-up absolute inset-x-0 bottom-0 flex max-h-[82dvh] flex-col rounded-t-3xl border-t border-border bg-surface pb-[env(safe-area-inset-bottom)] shadow-2xl">
        <div className="flex justify-center pb-2 pt-3" aria-hidden>
          <span className="h-1 w-10 rounded-full bg-border" />
        </div>
        <div className="flex items-center justify-between gap-3 px-5 pb-3">
          <p className="text-base font-bold">Contents</p>
          <button type="button" onClick={onClose} aria-label="Close" className="grid size-9 place-items-center rounded-full bg-surface-2">
            <X className="size-4" aria-hidden />
          </button>
        </div>
        <div className="px-5">
          <RevisedMeter total={tracked(items).length} />
        </div>
        <div className="overflow-y-auto overscroll-contain px-3 pb-5">
          <ContentsList items={items} onNavigate={onClose} />
        </div>
      </div>
    </div>
  );
}

/* ───────────── Per-section controls ───────────── */

export function RevisedToggle({ id, title }: { id: string; title: string }) {
  const { revised, toggleRevised } = useReader();
  const done = revised.includes(id);
  return (
    <button
      type="button"
      onClick={() => toggleRevised(id)}
      aria-pressed={done}
      aria-label={done ? `${title}: revised. Tap to undo` : `Mark ${title} as revised`}
      className={cn(
        "inline-flex h-9 shrink-0 items-center gap-1.5 rounded-full border px-3 text-xs font-semibold transition-colors print:hidden",
        done ? "border-green bg-green/10 text-green" : "border-border text-muted hover:border-fg/30 hover:text-fg",
      )}
    >
      <Check className="size-3.5" strokeWidth={done ? 3 : 2} aria-hidden />
      <span className="hidden min-[360px]:inline">{done ? "Revised" : "Mark revised"}</span>
    </button>
  );
}

export function PrintButton() {
  return (
    <button type="button" onClick={() => window.print()} className={buttonClass("secondary")}>
      <Printer className="size-4" aria-hidden /> Print / PDF
    </button>
  );
}
