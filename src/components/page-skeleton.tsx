// Loading skeletons. Each route's loading.tsx composes these so its placeholder has the same frame as
// the page that replaces it (same container, header band, columns and card shapes), and nothing jumps
// when the real content arrives. Keep them in step with the pages they stand in for.

import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

/** One shimmering placeholder block. */
export function Bone({ className }: { className?: string }) {
  return <div aria-hidden className={cn("skeleton", className)} />;
}

/** Root of every skeleton: marks the region busy for screen readers. */
export function SkeletonRoot({ children, className }: { children: ReactNode; className?: string }) {
  return (
    <div aria-busy="true" aria-live="polite" className={className}>
      <span className="sr-only">Loading</span>
      {children}
    </div>
  );
}

const repeat = (n: number) => Array.from({ length: n }, (_, i) => i);

/** Breadcrumbs row. */
export function CrumbsBone({ className = "mb-4" }: { className?: string }) {
  return <Bone className={cn("h-4 w-48", className)} />;
}

/** The ScopeSwitch row ("Your courses / All courses · Edit study profile"). */
export function ScopeBone({ className }: { className?: string }) {
  return <Bone className={cn("h-5 w-64 max-w-full", className)} />;
}

/** Mirrors PageHeader in ui.tsx: a compact title row (crumbs only below the top level) and an optional slot. */
export function HeaderBone({
  crumbs = false,
  eyebrow = false,
  description = true,
  filters = false,
  stats = 0,
  children,
}: {
  crumbs?: boolean;
  eyebrow?: boolean;
  description?: boolean;
  filters?: boolean;
  stats?: number;
  children?: ReactNode;
}) {
  return (
    <header className="border-b border-border">
      <div className="container-page py-3">
        {crumbs && <CrumbsBone className="mb-1 h-3" />}
        {eyebrow && <Bone className="mb-0.5 h-3 w-40" />}
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <Bone className="h-6 w-36 md:h-7" />
          {description && <Bone className="h-4 w-80 max-w-full" />}
        </div>
        {filters && (
          <div className="mt-3 flex flex-wrap gap-2">
            {repeat(4).map((i) => (
              <Bone key={i} className="h-9 w-32 rounded-lg" />
            ))}
          </div>
        )}
        {stats > 0 && (
          <div className="mt-3 grid grid-cols-3 gap-6 sm:max-w-xl">
            {repeat(stats).map((i) => (
              <div key={i}>
                <Bone className="h-8 w-16" />
                <Bone className="mt-1.5 h-4 w-20" />
              </div>
            ))}
          </div>
        )}
        {children && <div className="mt-3">{children}</div>}
      </div>
    </header>
  );
}

/** A grid of plain card placeholders. */
export function CardGridBone({ count = 6, className, card = "h-40" }: { count?: number; className?: string; card?: string }) {
  return (
    <div className={cn("grid gap-4 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {repeat(count).map((i) => (
        <Bone key={i} className={cn("rounded-2xl", card)} />
      ))}
    </div>
  );
}

/** Title + subtitle above a group of cards. */
export function SectionHeadBone({ className = "mb-4" }: { className?: string }) {
  return (
    <div className={className}>
      <Bone className="h-6 w-48" />
      <Bone className="mt-2 h-4 w-72 max-w-full" />
    </div>
  );
}

/** Fallback for routes without their own skeleton: a PageHeader band and a card grid. */
export function PageSkeleton() {
  return (
    <SkeletonRoot>
      <HeaderBone />
      <div className="container-page py-8">
        <CardGridBone />
      </div>
    </SkeletonRoot>
  );
}

/** The full-screen exam room (QualifierExam): same light overlay and spinner it shows while it hydrates. */
export function ExamRoomSkeleton() {
  return (
    <div aria-busy="true" className="light fixed inset-0 z-[70] flex flex-col bg-bg text-fg">
      <span className="sr-only">Loading exam</span>
      <div className="m-auto size-8 animate-spin rounded-full border-2 border-border border-t-fg" />
    </div>
  );
}

/** The slim header band of the cheat-sheet and question-sheet readers, then stacked sections. */
export function SheetReaderSkeleton() {
  return (
    <SkeletonRoot>
      <div className="border-b border-border bg-surface">
        <div className="mx-auto flex max-w-[1380px] flex-wrap items-end justify-between gap-3 px-4 py-4 sm:px-6 lg:px-8">
          <div>
            <CrumbsBone className="mb-2" />
            <Bone className="h-7 w-64 max-w-full" />
            <Bone className="mt-1.5 h-3 w-40" />
          </div>
          <div className="flex gap-2">
            <Bone className="h-8 w-28 rounded-lg" />
            <Bone className="h-8 w-20 rounded-lg" />
          </div>
        </div>
      </div>
      <div className="mx-auto max-w-[1380px] space-y-5 px-4 py-6 sm:px-6 lg:px-8">
        {repeat(3).map((i) => (
          <div key={i} className="card overflow-hidden">
            <div className="border-b border-border px-4 py-4 sm:px-6">
              <Bone className="h-3 w-20" />
              <Bone className="mt-2 h-6 w-72 max-w-full" />
            </div>
            <div className="space-y-2.5 px-4 py-5 sm:px-6">
              <Bone className="h-4 w-full" />
              <Bone className="h-4 w-11/12" />
              <Bone className="h-4 w-4/5" />
              <Bone className="mt-4 h-24 w-full rounded-xl" />
            </div>
          </div>
        ))}
      </div>
    </SkeletonRoot>
  );
}
