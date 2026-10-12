import { Bone, CrumbsBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot className="container-page py-8">
      <CrumbsBone />
      <div className="grid gap-10 md:grid-cols-[220px_1fr]">
        <Bone className="aspect-[3/4] w-40 rounded-lg md:w-full" />
        <div>
          <div className="flex gap-2">
            <Bone className="h-6 w-32 rounded-full" />
            <Bone className="h-6 w-24 rounded-full" />
          </div>
          <Bone className="mt-3 h-9 w-96 max-w-full md:h-10" />
          <Bone className="mt-2 h-6 w-56" />
          <Bone className="mt-6 h-24 rounded-xl" />
          <div className="mt-6 flex gap-2">
            <Bone className="h-10 w-40 rounded-xl" />
            <Bone className="h-10 w-28 rounded-xl" />
          </div>
        </div>
      </div>
    </SkeletonRoot>
  );
}
