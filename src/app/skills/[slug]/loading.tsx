import { Bone, CrumbsBone, SkeletonRoot } from "@/components/page-skeleton";

// Also covers the course's notes page, which opens with the same surface header band.
export default function Loading() {
  return (
    <SkeletonRoot>
      <header className="border-b border-border bg-surface">
        <div className="container-page py-8 md:py-12 lg:grid lg:grid-cols-[1fr_340px] lg:gap-10">
          <div>
            <CrumbsBone />
            <Bone className="h-9 w-full max-w-2xl md:h-10" />
            <Bone className="mt-3 h-6 w-full max-w-xl" />
            <div className="mt-4 flex flex-wrap gap-3">
              <Bone className="h-6 w-24 rounded-full" />
              <Bone className="h-6 w-28" />
              <Bone className="h-6 w-20" />
            </div>
          </div>
          <Bone className="hidden h-64 rounded-2xl lg:block" />
        </div>
      </header>
      <div className="container-page space-y-4 py-10">
        <Bone className="h-6 w-48" />
        {Array.from({ length: 4 }, (_, i) => (
          <Bone key={i} className="h-16 rounded-xl" />
        ))}
      </div>
    </SkeletonRoot>
  );
}
