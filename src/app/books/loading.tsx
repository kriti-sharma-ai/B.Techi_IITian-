import { Bone, HeaderBone, ScopeBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone filters />
      <div className="container-page py-8">
        <ScopeBone className="mb-6" />
        <div className="grid gap-4 md:grid-cols-2">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="card flex gap-4 p-4">
              <Bone className="aspect-[3/4] w-24 shrink-0 rounded-lg" />
              <div className="flex min-w-0 flex-1 flex-col">
                <Bone className="h-5 w-3/4" />
                <Bone className="mt-2 h-4 w-1/2" />
                <Bone className="mt-3 h-4 w-full" />
                <Bone className="mt-1.5 h-4 w-5/6" />
                <div className="mt-auto flex gap-2 pt-3">
                  <Bone className="h-6 w-20 rounded-full" />
                  <Bone className="ml-auto h-5 w-16" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SkeletonRoot>
  );
}
