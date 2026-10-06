"use client";

import Link from "next/link";
import { useState } from "react";
import { Award, Bookmark, BookOpen, FileText, ListTree, PenLine, PlayCircle, ScrollText, Trash2 } from "lucide-react";
import { actions, useHydrated, useStore } from "@/lib/store";
import type { ResourceKind } from "@/lib/types";
import { EmptyState, buttonClass } from "./ui";
import { cn } from "@/lib/utils";

const meta: Record<ResourceKind, { label: string; icon: typeof FileText; tone: string }> = {
  note: { label: "Notes", icon: FileText, tone: "bg-teal/10 text-teal" },
  video: { label: "Videos", icon: PlayCircle, tone: "bg-blue/10 text-blue" },
  book: { label: "Books", icon: BookOpen, tone: "bg-amber/10 text-amber" },
  question: { label: "Questions", icon: PenLine, tone: "bg-purple/10 text-purple" },
  topic: { label: "Topics", icon: ListTree, tone: "bg-surface-2 text-fg" },
  pyq: { label: "PYQs", icon: ScrollText, tone: "bg-green/10 text-green" },
  skill: { label: "Skills", icon: Award, tone: "bg-brand/20 text-fg" },
};

export function SavedList() {
  const hydrated = useHydrated();
  const bookmarks = useStore((s) => s.bookmarks);
  const [kind, setKind] = useState<ResourceKind | "all">("all");

  if (!hydrated) return <div className="skeleton h-64" />;

  if (!bookmarks.length)
    return (
      <EmptyState
        icon={<Bookmark className="size-6" />}
        title="Nothing saved yet."
        description="Tap the bookmark icon on any note, video, book, question, topic or PYQ to keep it here."
        action={
          <Link href="/programs" className={buttonClass("secondary")}>
            Start exploring
          </Link>
        }
      />
    );

  const kinds = (Object.keys(meta) as ResourceKind[]).filter((k) => bookmarks.some((b) => b.kind === k));
  const shown = kind === "all" ? bookmarks : bookmarks.filter((b) => b.kind === kind);

  return (
    <div>
      <div role="tablist" aria-label="Filter saved resources" className="mb-5 flex flex-wrap gap-2">
        {(["all", ...kinds] as const).map((k) => (
          <button
            key={k}
            role="tab"
            aria-selected={kind === k}
            onClick={() => setKind(k)}
            className={cn(
              "rounded-lg border px-3 py-1.5 text-sm font-medium",
              kind === k ? "border-fg bg-ink text-bg" : "border-border bg-surface hover:border-fg/30",
            )}
          >
            {k === "all" ? "All" : meta[k].label}{" "}
            <span className="opacity-60 tabular-nums">{k === "all" ? bookmarks.length : bookmarks.filter((b) => b.kind === k).length}</span>
          </button>
        ))}
      </div>
      <ul className="card divide-y divide-border">
        {shown.map((b) => {
          const m = meta[b.kind];
          return (
            <li key={b.kind + b.id} className="flex items-center gap-3 px-4 py-3">
              <span className={cn("grid size-9 shrink-0 place-items-center rounded-lg", m.tone)}>
                <m.icon className="size-4" aria-hidden />
              </span>
              <Link href={b.href} className="min-w-0 flex-1">
                <span className="block truncate font-medium hover:underline">{b.title}</span>
                {b.subtitle && <span className="block truncate text-sm text-muted">{b.subtitle}</span>}
              </Link>
              <button
                type="button"
                onClick={() => actions.toggleBookmark(b)}
                className="grid size-8 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-red"
                aria-label={`Remove ${b.title}`}
              >
                <Trash2 className="size-4" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
