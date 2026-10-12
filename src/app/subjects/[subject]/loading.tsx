import { Bone, CrumbsBone, SkeletonRoot } from "@/components/page-skeleton";

// Only the content column: the course sidebar comes from layout.tsx and stays on screen.
export default function Loading() {
  return (
    <SkeletonRoot className="px-4 py-6 md:px-8 lg:py-8">
      <CrumbsBone />
      <div className="mb-6 flex items-start gap-3 border-b border-border pb-4">
        <Bone className="mt-1 size-6 shrink-0 rounded-md" />
        <div>
          <Bone className="h-7 w-64 max-w-full md:h-8" />
          <Bone className="mt-1.5 h-4 w-32" />
        </div>
      </div>
      <div className="max-w-5xl space-y-8">
        <section>
          <Bone className="h-8 w-80 max-w-full" />
          <Bone className="mt-3 h-4 w-full max-w-2xl" />
          <Bone className="mt-2 h-4 w-4/5 max-w-xl" />
          <div className="mt-5 space-y-2.5 pl-6">
            {Array.from({ length: 4 }, (_, i) => (
              <Bone key={i} className="h-4 w-64 max-w-full" />
            ))}
          </div>
          <div className="mt-6 flex gap-2">
            <Bone className="h-10 w-40 rounded-xl" />
            <Bone className="h-10 w-28 rounded-xl" />
          </div>
        </section>
        <Bone className="h-28 max-w-sm rounded-2xl" />
        <section>
          <Bone className="h-6 w-40" />
          <div className="mt-3 space-y-2.5 pl-6">
            {Array.from({ length: 4 }, (_, i) => (
              <Bone key={i} className="h-4 w-48" />
            ))}
          </div>
        </section>
      </div>
    </SkeletonRoot>
  );
}
