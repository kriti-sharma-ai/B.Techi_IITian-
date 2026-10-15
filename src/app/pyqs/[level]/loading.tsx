import { Bone, ScopeBone, SectionHeadBone, SkeletonRoot } from "@/components/page-skeleton";
import { PyqLevelLoadingTop } from "@/components/pyq-level-loading";
import { PYQ_LEVELS } from "@/lib/pyq-index";
import { pyqLevelHref } from "@/lib/pyq-urls";

const LEVELS = PYQ_LEVELS.map((l) => ({ slug: l.slug, label: l.short, name: l.name, href: pyqLevelHref(l.slug) }));

export default function Loading() {
  return (
    <SkeletonRoot>
      <PyqLevelLoadingTop levels={LEVELS} />
      <div className="container-page space-y-10 py-10">
        <ScopeBone />
        {Array.from({ length: 2 }, (_, g) => (
          <section key={g}>
            <SectionHeadBone className="mb-3" />
            <Bone className="h-72 rounded-2xl" />
          </section>
        ))}
      </div>
    </SkeletonRoot>
  );
}
