import { Bone, CrumbsBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot className="container-page py-8">
      <CrumbsBone />
      <div className="mx-auto mb-6 max-w-3xl">
        <Bone className="h-3 w-40" />
        <Bone className="mt-2 h-8 w-80 max-w-full" />
        <Bone className="mt-2 h-4 w-56" />
      </div>
      <div className="card mx-auto max-w-3xl p-5 md:p-6">
        <div className="flex justify-between">
          <Bone className="h-4 w-24" />
          <Bone className="h-4 w-16" />
        </div>
        <Bone className="mt-5 h-5 w-full" />
        <Bone className="mt-2 h-5 w-4/5" />
        <div className="mt-6 grid gap-2.5">
          {Array.from({ length: 4 }, (_, i) => (
            <Bone key={i} className="h-13 rounded-xl" />
          ))}
        </div>
        <div className="mt-6 flex justify-between">
          <Bone className="h-10 w-24 rounded-xl" />
          <Bone className="h-10 w-32 rounded-xl" />
        </div>
      </div>
    </SkeletonRoot>
  );
}
