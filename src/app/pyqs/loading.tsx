import { Bone, HeaderBone, ScopeBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone eyebrow stats={3} />
      <div className="container-page space-y-14 py-10 md:py-14">
        <Bone className="h-12 rounded-2xl" />
        <ScopeBone className="mb-8 md:mb-6" />
        {Array.from({ length: 2 }, (_, l) => (
          <section key={l}>
            <div className="mb-5 flex flex-wrap items-end justify-between gap-3">
              <div>
                <Bone className="h-7 w-48" />
                <Bone className="mt-2 h-4 w-64 max-w-full" />
              </div>
              <Bone className="h-5 w-36" />
            </div>
            <Bone className="mb-2.5 h-4 w-24" />
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-4">
              {Array.from({ length: 4 }, (_, i) => (
                <Bone key={i} className="h-28 rounded-2xl" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SkeletonRoot>
  );
}
