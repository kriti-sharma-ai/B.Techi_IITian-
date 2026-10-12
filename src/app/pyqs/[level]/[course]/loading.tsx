import { Bone, HeaderBone, SkeletonRoot } from "@/components/page-skeleton";

// Also covers the course's sheets page, which shares this header.
export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone eyebrow>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          <div className="flex gap-8">
            {Array.from({ length: 3 }, (_, i) => (
              <div key={i}>
                <Bone className="h-8 w-14" />
                <Bone className="mt-1.5 h-4 w-16" />
              </div>
            ))}
          </div>
          <div className="flex flex-wrap gap-2">
            <Bone className="h-10 w-40 rounded-xl" />
            <Bone className="h-10 w-40 rounded-xl" />
          </div>
        </div>
      </HeaderBone>
      <div className="container-page space-y-10 py-10">
        <Bone className="h-24 rounded-2xl" />
        {Array.from({ length: 2 }, (_, s) => (
          <section key={s}>
            <Bone className="h-6 w-32" />
            <Bone className="mt-1.5 h-4 w-80 max-w-full" />
            <div className="card mt-4 divide-y divide-border px-5 py-1">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i} className="flex items-center justify-between gap-4 py-4">
                  <Bone className="h-5 w-56 max-w-full" />
                  <Bone className="h-9 w-24 rounded-xl" />
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SkeletonRoot>
  );
}
