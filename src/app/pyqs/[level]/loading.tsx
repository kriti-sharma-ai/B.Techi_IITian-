import { Bone, HeaderBone, ScopeBone, SectionHeadBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone />
      <div className="border-b border-border">
        <div className="container-page flex flex-wrap items-center justify-between gap-x-6 gap-y-2 py-2.5">
          <div className="flex gap-4">
            {Array.from({ length: 4 }, (_, i) => (
              <Bone key={i} className="h-6 w-20" />
            ))}
          </div>
          <div className="flex gap-1.5">
            {Array.from({ length: 4 }, (_, i) => (
              <Bone key={i} className="h-8 w-20 rounded-lg" />
            ))}
          </div>
        </div>
      </div>
      <div className="container-page space-y-10 py-10">
        <ScopeBone />
        {Array.from({ length: 2 }, (_, g) => (
          <section key={g}>
            <SectionHeadBone className="mb-3" />
            <Bone className="h-72 rounded-2xl" />
          </section>
        ))}
      </div>
    </SkeletonRoot>
  );
}
