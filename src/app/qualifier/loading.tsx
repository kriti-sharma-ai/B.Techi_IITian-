import { Bone, HeaderBone, SkeletonRoot } from "@/components/page-skeleton";

function SectionTitle() {
  return (
    <div className="border-b border-border pb-3">
      <Bone className="h-6 w-32" />
    </div>
  );
}

export default function Loading() {
  return (
    <SkeletonRoot>
      <HeaderBone />
      <div className="container-page py-8">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,5fr)_minmax(0,7fr)] lg:gap-10">
          {[4, 5].map((rows, k) => (
            <section key={k} className="space-y-5">
              <SectionTitle />
              <div className="divide-y divide-border overflow-hidden rounded-xl border border-border">
                {Array.from({ length: rows }, (_, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 px-5 py-4">
                    <div>
                      <Bone className="h-5 w-40" />
                      <Bone className="mt-1.5 h-3 w-24" />
                    </div>
                    <Bone className="h-8 w-24 rounded-lg" />
                  </div>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </SkeletonRoot>
  );
}
