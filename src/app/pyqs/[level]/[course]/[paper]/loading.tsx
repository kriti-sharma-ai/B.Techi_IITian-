import { Bone, CrumbsBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot className="container-page py-8">
      <CrumbsBone />
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="flex gap-2">
            <Bone className="h-6 w-20 rounded-full" />
            <Bone className="h-6 w-28 rounded-full" />
          </div>
          <Bone className="mt-3 h-9 w-80 max-w-full md:h-10" />
          <Bone className="mt-2 h-5 w-56" />
        </div>
        <div className="flex flex-wrap gap-2">
          <Bone className="h-10 w-44 rounded-xl" />
          <Bone className="h-10 w-32 rounded-xl" />
          <Bone className="h-10 w-28 rounded-xl" />
        </div>
      </div>
      <section className="mt-8">
        <Bone className="mb-3 h-4 w-32" />
        <div className="flex flex-wrap gap-2">
          {Array.from({ length: 5 }, (_, i) => (
            <Bone key={i} className="h-8 w-28 rounded-lg" />
          ))}
        </div>
      </section>
      <section className="mt-8">
        <Bone className="mb-3 h-4 w-28" />
        <Bone className="h-[60vh] rounded-2xl" />
      </section>
    </SkeletonRoot>
  );
}
