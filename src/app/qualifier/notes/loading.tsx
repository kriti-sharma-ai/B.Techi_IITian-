import { Bone, HeaderBone, ScopeBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone crumbs />
      <div className="container-page space-y-6 py-8">
        <ScopeBone />
        <div className="grid gap-3 sm:grid-cols-2">
          {Array.from({ length: 4 }, (_, i) => (
            <div key={i} className="flex flex-col gap-4 rounded-xl border border-border bg-surface p-4">
              <div className="flex items-center gap-3">
                <Bone className="size-10 shrink-0 rounded-lg" />
                <div className="min-w-0 flex-1">
                  <Bone className="h-4 w-40" />
                  <Bone className="mt-1.5 h-3 w-28" />
                </div>
              </div>
              <div className="flex gap-2">
                {Array.from({ length: 3 }, (_, j) => (
                  <Bone key={j} className="h-8 flex-1 rounded-lg" />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </SkeletonRoot>
  );
}
