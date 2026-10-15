import { Bone, SkeletonRoot } from "@/components/page-skeleton";
import { PyqLevelBar } from "@/components/pyq-level-links";
import { PageHeader } from "@/components/ui";
import { PYQ_LEVELS } from "@/lib/pyq-index";
import { pyqLevelHref } from "@/lib/pyq-urls";

export default function Loading() {
  return (
    <SkeletonRoot>
      {/* The real header and level bar, as on the page, so only the practice area loads in. */}
      <PageHeader title="Practice" description="Previous-year questions with official answer keys." />
      <PyqLevelBar levels={PYQ_LEVELS.map((l) => ({ slug: l.slug, label: l.short, href: pyqLevelHref(l.slug) }))} />
      <div className="container-page py-8">
        <div className="grid gap-8 lg:grid-cols-[19rem_minmax(0,1fr)] lg:items-start xl:grid-cols-[21rem_minmax(0,1fr)]">
          <aside className="space-y-4">
            <div className="space-y-4 rounded-2xl border border-border bg-surface p-4">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i}>
                  <Bone className="mb-2 h-3 w-20" />
                  <Bone className="h-10 rounded-xl" />
                </div>
              ))}
              <div className="flex flex-wrap gap-1.5">
                {Array.from({ length: 4 }, (_, i) => (
                  <Bone key={i} className="h-7 w-16 rounded-lg" />
                ))}
              </div>
            </div>
            <Bone className="hidden h-36 rounded-2xl lg:block" />
          </aside>
          <div className="min-w-0 space-y-6">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3.5">
              <div>
                <Bone className="h-3 w-32" />
                <Bone className="mt-1.5 h-7 w-72 max-w-full" />
              </div>
              <div className="flex gap-2">
                <Bone className="h-7 w-16 rounded-lg" />
                <Bone className="h-7 w-24 rounded-lg" />
              </div>
            </div>
            <div className="flex gap-2">
              {Array.from({ length: 3 }, (_, i) => (
                <Bone key={i} className="h-9 w-28 rounded-xl" />
              ))}
            </div>
            <div className="grid gap-3 sm:grid-cols-2">
              {Array.from({ length: 6 }, (_, i) => (
                <Bone key={i} className="h-28 rounded-2xl" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SkeletonRoot>
  );
}
