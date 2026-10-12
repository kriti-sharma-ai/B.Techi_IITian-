import { Bone, HeaderBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone />
      <div className="container-page py-8">
        <div className="space-y-5">
          <div className="flex flex-col gap-3 border-b border-border pb-3.5 sm:flex-row sm:justify-between">
            <div className="flex gap-1.5">
              {Array.from({ length: 4 }, (_, i) => (
                <Bone key={i} className="h-8 w-20 rounded-lg" />
              ))}
            </div>
            <div className="flex gap-1.5">
              {Array.from({ length: 3 }, (_, i) => (
                <Bone key={i} className="h-8 w-24 rounded-lg" />
              ))}
            </div>
          </div>
          <Bone className="h-11 rounded-xl" />
          <div className="flex flex-col gap-2.5 sm:flex-row sm:items-center sm:justify-between">
            <Bone className="h-6 w-60" />
            <Bone className="h-7 w-full rounded-md sm:w-56" />
          </div>
          <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-3">
            {Array.from({ length: 9 }, (_, i) => (
              <Bone key={i} className="h-20 rounded-xl" />
            ))}
          </div>
        </div>
      </div>
    </SkeletonRoot>
  );
}
