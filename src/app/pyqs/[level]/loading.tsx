import { Bone, HeaderBone, ScopeBone, SectionHeadBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone eyebrow />
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
      <div className="container-page space-y-12 py-10">
        <ScopeBone className="-mb-4" />
        {Array.from({ length: 2 }, (_, g) => (
          <section key={g}>
            <SectionHeadBone />
            <div className="grid gap-5 lg:grid-cols-2">
              {Array.from({ length: 2 }, (_, i) => (
                <Bone key={i} className="h-60 rounded-2xl" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SkeletonRoot>
  );
}
