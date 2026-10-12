import { Bone, HeaderBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone eyebrow stats={3} />
      <div className="container-page space-y-14 py-10 md:py-14">
        {Array.from({ length: 2 }, (_, l) => (
          <section key={l}>
            <Bone className="h-7 w-48" />
            <Bone className="mt-2 h-4 w-64 max-w-full" />
            <Bone className="mt-5 mb-2.5 h-4 w-24" />
            <div className="grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3">
              {Array.from({ length: 6 }, (_, i) => (
                <Bone key={i} className="h-28 rounded-2xl" />
              ))}
            </div>
          </section>
        ))}
      </div>
    </SkeletonRoot>
  );
}
