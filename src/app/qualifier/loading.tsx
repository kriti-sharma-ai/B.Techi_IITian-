import { Bone, SkeletonRoot } from "@/components/page-skeleton";

function StepTitle() {
  return (
    <div className="flex items-center gap-3 border-b border-border pb-3">
      <Bone className="size-6 rounded-full" />
      <div>
        <Bone className="h-5 w-40" />
        <Bone className="mt-1 h-3 w-56" />
      </div>
    </div>
  );
}

export default function Loading() {
  return (
    <SkeletonRoot className="container-page max-w-5xl space-y-10 py-6 sm:py-8">
      <header className="space-y-4">
        <div>
          <Bone className="h-8 w-64 sm:h-9" />
          <Bone className="mt-2 h-4 w-80 max-w-full" />
        </div>
        <Bone className="h-[62px] rounded-xl" />
      </header>
      <section className="space-y-4">
        <StepTitle />
        <div className="grid gap-3 sm:grid-cols-2">
          {Array.from({ length: 4 }, (_, i) => (
            <Bone key={i} className="h-[116px] rounded-xl" />
          ))}
        </div>
      </section>
      <section className="space-y-4">
        <StepTitle />
        <div className="space-y-2">
          {Array.from({ length: 3 }, (_, i) => (
            <Bone key={i} className="h-20 rounded-xl" />
          ))}
        </div>
      </section>
    </SkeletonRoot>
  );
}
