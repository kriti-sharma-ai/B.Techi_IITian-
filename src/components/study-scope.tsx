import Link from "next/link";
import { Settings2, UserRound } from "lucide-react";
import type { ScopedList } from "@/lib/study-scope";
import { cn } from "@/lib/utils";

const segment = (on: boolean) =>
  cn(
    "inline-flex items-center justify-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium whitespace-nowrap transition-colors",
    on ? "bg-ink text-bg" : "text-muted hover:text-fg",
  );

const count = (n: number | undefined, on: boolean) =>
  n !== undefined && <span className={cn("tabular-nums", on ? "opacity-70" : "text-muted")}>{n}</span>;

/** Two-way "Your courses / All courses" control; each side is a link, so the choice lives in the URL. */
export function ScopeToggle({
  narrowed,
  links,
  counts,
  className,
}: {
  narrowed: boolean;
  links: { mine: string; all: string };
  counts?: { mine: number; all: number };
  className?: string;
}) {
  return (
    <nav aria-label="Courses shown" className={cn("inline-flex rounded-xl border border-border bg-surface p-1", className)}>
      <Link href={links.mine} scroll={false} aria-current={narrowed ? "true" : undefined} className={segment(narrowed)}>
        <UserRound className="size-3.5" aria-hidden /> Your courses {count(counts?.mine, narrowed)}
      </Link>
      <Link href={links.all} scroll={false} aria-current={narrowed ? undefined : "true"} className={segment(!narrowed)}>
        All courses {count(counts?.all, !narrowed)}
      </Link>
    </nav>
  );
}

/** The toggle above a list narrowed by the study profile. Only shown when the list holds some of the visitor's courses. */
export function ScopeSwitch({ list, links, className }: { list: ScopedList<unknown>; links: { mine: string; all: string }; className?: string }) {
  if (!list.mine) return null;
  return (
    <div className={cn("flex flex-wrap items-center gap-x-4 gap-y-2", className)}>
      <ScopeToggle narrowed={list.narrowed} links={links} counts={list} />
      <Link href="/profile" className="inline-flex items-center gap-1.5 text-sm font-medium text-muted hover:text-fg">
        <Settings2 className="size-4" aria-hidden /> Edit study profile
      </Link>
    </div>
  );
}
