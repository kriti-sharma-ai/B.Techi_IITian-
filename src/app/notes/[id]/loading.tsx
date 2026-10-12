import { Bone, CrumbsBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot className="container-page py-8">
      <CrumbsBone />
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex gap-2">
                <Bone className="h-6 w-24 rounded-full" />
                <Bone className="h-5 w-32" />
              </div>
              <Bone className="h-8 w-80 max-w-full md:h-9" />
            </div>
            <div className="flex gap-2">
              <Bone className="h-10 w-32 rounded-xl" />
              <Bone className="h-10 w-10 rounded-xl" />
            </div>
          </div>
          <Bone className="h-[70vh] rounded-2xl" />
        </div>
        <aside className="space-y-4">
          <Bone className="h-48 rounded-2xl" />
          <Bone className="h-32 rounded-2xl" />
        </aside>
      </div>
    </SkeletonRoot>
  );
}
