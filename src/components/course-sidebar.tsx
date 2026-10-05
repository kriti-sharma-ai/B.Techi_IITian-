"use client";

import Link from "next/link";
import { usePathname, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import {
  ChevronDown,
  ChevronsLeft,
  ChevronsRight,
  ClipboardCheck,
  FileText,
  ListTree,
  Minus,
  PenLine,
  PlayCircle,
  Plus,
} from "lucide-react";
import type { OutlineKind, OutlineSection } from "@/lib/course";
import { cn } from "@/lib/utils";

const KIND: Record<OutlineKind, { icon: typeof FileText; label: string }> = {
  page: { icon: FileText, label: "Page" },
  lesson: { icon: FileText, label: "Lesson" },
  video: { icon: PlayCircle, label: "Video" },
  practice: { icon: PenLine, label: "Practice" },
  graded: { icon: ClipboardCheck, label: "Graded" },
};

type Props = { title: string; base: string; sections: OutlineSection[] };

/** Reads the active item from the URL. Needs a Suspense boundary (useSearchParams). */
export function CourseSidebar(props: Props) {
  const pathname = usePathname();
  const item = useSearchParams().get("item");
  const ids = props.sections.flatMap((s) => s.items.map((i) => i.id));
  const active = pathname === props.base ? (item && ids.includes(item) ? item : "about") : pathname.split("/").pop();
  return <CourseSidebarView {...props} active={active} />;
}

export function CourseSidebarView({ title, sections, active }: Props & { active?: string }) {
  const sectionOf = (id?: string) => sections.find((s) => s.items.some((i) => i.id === id))?.id;
  const [open, setOpen] = useState<Set<string>>(() => new Set(["intro", sectionOf(active) ?? ""]));
  const [collapsed, setCollapsed] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Reveal the section holding the current item and close the mobile drawer on navigation.
  useEffect(() => {
    const s = sectionOf(active);
    if (s) setOpen((prev) => (prev.has(s) ? prev : new Set(prev).add(s)));
    setMobileOpen(false);
  }, [active]); // eslint-disable-line react-hooks/exhaustive-deps

  const toggle = (id: string) =>
    setOpen((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });

  if (collapsed)
    return (
      <aside className="hidden border-r border-border bg-surface lg:sticky lg:top-16 lg:flex lg:h-[calc(100dvh-4rem)] lg:w-14 lg:flex-col lg:items-center lg:py-4">
        <button
          type="button"
          onClick={() => setCollapsed(false)}
          className="grid size-9 place-items-center rounded-lg text-brand hover:bg-surface-2"
          aria-label="Expand course contents"
        >
          <ChevronsRight className="size-5" aria-hidden />
        </button>
        <span className="mt-4 text-sm font-semibold text-muted [writing-mode:vertical-rl]">{title}</span>
      </aside>
    );

  return (
    <aside className="border-b border-border bg-surface lg:sticky lg:top-16 lg:flex lg:h-[calc(100dvh-4rem)] lg:w-80 lg:flex-col lg:border-r lg:border-b-0 xl:w-96">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3 lg:py-4">
        <h2 className="min-w-0 flex-1 truncate text-lg font-bold" title={title}>
          {title}
        </h2>
        <button
          type="button"
          onClick={() => setMobileOpen((v) => !v)}
          aria-expanded={mobileOpen}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border px-2.5 py-1.5 text-sm font-medium lg:hidden"
        >
          <ListTree className="size-4" aria-hidden /> Contents
          <ChevronDown className={cn("size-4 transition-transform", mobileOpen && "rotate-180")} aria-hidden />
        </button>
        <button
          type="button"
          onClick={() => setCollapsed(true)}
          className="hidden size-9 place-items-center rounded-lg text-brand hover:bg-surface-2 lg:grid"
          aria-label="Collapse course contents"
        >
          <ChevronsLeft className="size-5" aria-hidden />
        </button>
      </div>

      <nav
        aria-label={`${title} contents`}
        className={cn("max-h-[60dvh] overflow-y-auto lg:block lg:max-h-none lg:flex-1", mobileOpen ? "block" : "hidden")}
      >
        {sections.map((s) => {
          const isOpen = open.has(s.id);
          return (
            <section key={s.id} className="border-b border-border">
              <button
                type="button"
                onClick={() => toggle(s.id)}
                aria-expanded={isOpen}
                aria-controls={`sec-${s.id}`}
                className="flex w-full items-center gap-3 px-4 py-4 text-left hover:bg-surface-2/60"
              >
                <span className="min-w-0 flex-1">
                  <span className="block font-bold">{s.title}</span>
                  {s.subtitle && <span className="block truncate text-xs text-muted">{s.subtitle}</span>}
                </span>
                {isOpen ? <Minus className="size-5 shrink-0" aria-hidden /> : <Plus className="size-5 shrink-0" aria-hidden />}
              </button>
              {isOpen && (
                <ul id={`sec-${s.id}`} className="pb-2">
                  {s.items.map((it) => {
                    const on = it.id === active;
                    const k = KIND[it.kind];
                    return (
                      <li key={it.id}>
                        <Link
                          href={it.href}
                          scroll={false}
                          aria-current={on ? "page" : undefined}
                          className={cn(
                            "flex items-start gap-3 py-2.5 pr-4 pl-6 transition-colors",
                            on ? "bg-surface-2 shadow-[inset_3px_0_0_var(--brand)]" : "hover:bg-surface-2/60",
                          )}
                        >
                          <k.icon className={cn("mt-0.5 size-5 shrink-0", on ? "text-fg" : "text-muted")} aria-hidden />
                          <span className="min-w-0">
                            <span className={cn("block", on ? "font-semibold" : "text-fg/85")}>{it.label}</span>
                            <span className="block text-sm text-muted">
                              {k.label}
                              {it.empty && " · Coming soon"}
                            </span>
                          </span>
                        </Link>
                      </li>
                    );
                  })}
                </ul>
              )}
            </section>
          );
        })}
      </nav>
    </aside>
  );
}
