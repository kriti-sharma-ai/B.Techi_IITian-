import { CardGridBone, HeaderBone, ScopeBone, SectionHeadBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone filters />
      <div className="container-page space-y-12 py-10">
        <ScopeBone className="-mb-4" />
        {Array.from({ length: 2 }, (_, i) => (
          <section key={i}>
            <SectionHeadBone />
            <CardGridBone count={6} card="h-44" />
          </section>
        ))}
      </div>
    </SkeletonRoot>
  );
}
