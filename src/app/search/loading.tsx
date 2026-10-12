import { Bone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot className="container-page py-8 md:py-12">
      <Bone className="mx-auto h-12 max-w-2xl rounded-xl" />
      <div className="mx-auto mt-6 flex max-w-4xl gap-4 border-b border-border pb-2.5">
        {Array.from({ length: 5 }, (_, i) => (
          <Bone key={i} className="h-5 w-20" />
        ))}
      </div>
      <ul className="mx-auto mt-6 grid max-w-4xl gap-1 md:grid-cols-2">
        {Array.from({ length: 8 }, (_, i) => (
          <li key={i} className="flex items-start gap-3 px-3 py-3">
            <Bone className="size-9 shrink-0 rounded-lg" />
            <div className="min-w-0 flex-1">
              <Bone className="h-4 w-3/4" />
              <Bone className="mt-1.5 h-3.5 w-1/2" />
            </div>
          </li>
        ))}
      </ul>
    </SkeletonRoot>
  );
}
