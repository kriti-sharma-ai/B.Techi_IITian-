import { Bone, HeaderBone, ScopeBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone filters />
      <div className="container-page py-8">
        <ScopeBone className="mb-6" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: 6 }, (_, i) => (
            <div key={i} className="card overflow-hidden">
              <Bone className="aspect-video rounded-none" />
              <div className="p-4">
                <Bone className="h-4 w-3/4" />
                <Bone className="mt-2 h-3 w-1/2" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </SkeletonRoot>
  );
}
