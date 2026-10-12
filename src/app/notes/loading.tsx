import { Bone, HeaderBone, ScopeBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone filters />
      <div className="container-page py-8">
        <Bone className="mb-6 h-[78px] rounded-2xl" />
        <ScopeBone className="mb-6" />
        <div className="space-y-10">
          {Array.from({ length: 2 }, (_, g) => (
            <section key={g}>
              <div className="mb-3 flex items-baseline justify-between gap-4 border-b border-border pb-2">
                <Bone className="h-5 w-48" />
                <Bone className="h-3 w-24" />
              </div>
              <div className="space-y-3">
                {Array.from({ length: 3 }, (_, i) => (
                  <div key={i} className="card flex items-center gap-3 p-4">
                    <Bone className="size-10 shrink-0 rounded-lg" />
                    <div className="min-w-0 flex-1">
                      <Bone className="h-5 w-2/3" />
                      <Bone className="mt-1.5 h-4 w-1/3" />
                    </div>
                    <Bone className="hidden h-9 w-28 rounded-xl sm:block" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </SkeletonRoot>
  );
}
