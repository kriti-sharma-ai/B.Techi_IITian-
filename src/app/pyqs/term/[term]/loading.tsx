import { Bone, HeaderBone, SkeletonRoot } from "@/components/page-skeleton";

// Same frame as page.tsx: header, term tabs, then a list of paper rows per level.
export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone />
      <div className="border-b border-border">
        <div className="container-page flex gap-4 py-3">
          {Array.from({ length: 6 }, (_, i) => (
            <Bone key={i} className="h-6 w-24" />
          ))}
        </div>
      </div>
      <div className="container-page space-y-10 py-10">
        {Array.from({ length: 2 }, (_, g) => (
          <section key={g}>
            <Bone className="mb-3 h-4 w-24" />
            <Bone className="h-80 rounded-2xl" />
          </section>
        ))}
      </div>
    </SkeletonRoot>
  );
}
