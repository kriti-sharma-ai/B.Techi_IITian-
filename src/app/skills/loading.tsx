import { Bone, CrumbsBone, SectionHeadBone, SkeletonRoot } from "@/components/page-skeleton";

export default function Loading() {
  return (
    <SkeletonRoot>
      <header className="border-b border-border bg-surface">
        <div className="container-page grid items-center gap-10 py-10 md:py-14 lg:grid-cols-[1.15fr_1fr]">
          <div>
            <CrumbsBone />
            <Bone className="mb-4 h-7 w-56 rounded-full" />
            <Bone className="h-10 w-full max-w-xl md:h-12" />
            <Bone className="mt-2 h-10 w-3/4 max-w-md md:h-12" />
            <Bone className="mt-4 h-6 w-full max-w-lg" />
            <Bone className="mt-7 h-13 w-full max-w-lg rounded-2xl" />
            <div className="mt-8 grid max-w-lg grid-cols-3 gap-4">
              {Array.from({ length: 3 }, (_, i) => (
                <div key={i}>
                  <Bone className="h-8 w-16" />
                  <Bone className="mt-1.5 h-3 w-20" />
                </div>
              ))}
            </div>
          </div>
          <Bone className="hidden aspect-[4/3] rounded-2xl lg:block" />
        </div>
      </header>
      <div className="container-page space-y-16 py-10 md:py-12">
        {Array.from({ length: 2 }, (_, s) => (
          <section key={s}>
            <SectionHeadBone className="mb-5" />
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {Array.from({ length: 4 }, (_, i) => (
                <div key={i} className="card overflow-hidden">
                  <Bone className="aspect-video rounded-none" />
                  <div className="p-4">
                    <Bone className="h-5 w-4/5" />
                    <Bone className="mt-2 h-4 w-full" />
                    <Bone className="mt-3 h-4 w-1/3" />
                  </div>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </SkeletonRoot>
  );
}
