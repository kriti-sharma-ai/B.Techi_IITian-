"use client";

// Blog "On this page" contents with scroll-spy: the section you're reading is highlighted,
// its parent section is emphasised, and the sidebar list scrolls to keep it in view.
// Also exports a thin reading-progress bar for the article.

import { useEffect, useRef, useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

export type TocEntry = { id: string; text: string; level: 2 | 3 };

/** Distance from the top of the viewport at which a heading counts as "current" (navbar + breathing room). */
const OFFSET = 120;

function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState<string | undefined>(undefined);
  const key = ids.join(" ");
  useEffect(() => {
    const headings = key
      .split(" ")
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => !!el);
    if (!headings.length) return;
    let frame = 0;
    const update = () => {
      frame = 0;
      // The current section is the last heading that has scrolled above the offset line.
      let current: string | undefined;
      for (const h of headings) {
        if (h.getBoundingClientRect().top - OFFSET <= 0) current = h.id;
        else break;
      }
      // At the very bottom of the page, the last heading wins even if it never reaches the line.
      if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) current = headings[headings.length - 1].id;
      setActive(current);
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
  }, [key]);
  return active;
}

export function BlogToc({ items, onNavigate }: { items: TocEntry[]; onNavigate?: () => void }) {
  const active = useActiveHeading(items.map((i) => i.id));
  const listRef = useRef<HTMLOListElement>(null);

  // The h2 that contains the active entry, so a parent section stays emphasised while you read its h3s.
  const activeIndex = items.findIndex((i) => i.id === active);
  let activeParent: string | undefined;
  for (let i = activeIndex; i >= 0; i--) {
    if (items[i].level === 2) {
      activeParent = items[i].id;
      break;
    }
  }

  // Keep the active entry visible inside the scrollable sidebar without moving the page.
  useEffect(() => {
    const list = listRef.current;
    const el = list?.querySelector<HTMLElement>('[aria-current="location"]');
    const box = list?.closest<HTMLElement>("[data-toc-scroll]");
    if (!el || !box) return;
    const top = el.offsetTop - box.offsetTop;
    if (top < box.scrollTop + 40 || top > box.scrollTop + box.clientHeight - 60) box.scrollTo({ top: top - box.clientHeight / 3, behavior: "smooth" });
  }, [active]);

  const click = (e: MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    onNavigate?.();
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    document.getElementById(id)?.scrollIntoView({ behavior: reduce ? "auto" : "smooth", block: "start" });
    window.history.replaceState(null, "", `#${id}`);
  };

  return (
    <ol ref={listRef} className="relative space-y-0.5 border-l border-border text-sm">
      {items.map((t) => {
        const on = t.id === active;
        const parent = t.id === activeParent && !on;
        return (
          <li key={t.id}>
            <a
              href={`#${t.id}`}
              onClick={(e) => click(e, t.id)}
              aria-current={on ? "location" : undefined}
              className={cn(
                "-ml-px block border-l-2 py-1.5 pr-2 leading-snug transition-colors",
                t.level === 3 ? "pl-6 text-[13px]" : "pl-3.5",
                on
                  ? "border-brand bg-brand/10 font-semibold text-fg"
                  : parent
                    ? "border-fg/30 font-medium text-fg"
                    : "border-transparent text-muted hover:border-fg/20 hover:text-fg",
              )}
            >
              {t.text}
            </a>
          </li>
        );
      })}
    </ol>
  );
}

/** A thin brand-coloured bar under the navbar showing how far through the article you are. */
export function ReadingProgress({ target }: { target: string }) {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    let frame = 0;
    const update = () => {
      frame = 0;
      const el = document.getElementById(target);
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const range = rect.height - window.innerHeight + OFFSET;
      setProgress(range <= 0 ? 100 : Math.max(0, Math.min(100, ((OFFSET - rect.top) / range) * 100)));
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
  }, [target]);
  return (
    <div className="pointer-events-none fixed inset-x-0 top-16 z-40 h-0.5 print:hidden" aria-hidden>
      <div className="h-full bg-brand transition-[width] duration-150 ease-out" style={{ width: `${progress}%` }} />
    </div>
  );
}
