import type { Metadata } from "next";
import { Suspense } from "react";
import { BookDashed } from "lucide-react";
import { SubjectCard } from "@/components/cards";
import { FilterBar } from "@/components/filter-bar";
import { EmptyState, PageHeader } from "@/components/ui";
import { programs, subjects } from "@/lib/content";
import { academicFilters, matchesAcademic } from "@/lib/filters";

export const metadata: Metadata = {
  title: "All courses",
  description: "Every IIT Madras BS Management and Data Science course, from Foundation to Degree, with course codes and credits.",
  alternates: { canonical: "/subjects" },
};

export default async function SubjectsPage({ searchParams }: PageProps<"/subjects">) {
  const sp = await searchParams;
  const list = subjects.filter((s) => matchesAcademic(s.slug, sp));
  const filters = academicFilters(sp, { units: false, subject: false });

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Courses" }]}
        title="All courses"
        description={`${subjects.length} courses across Foundation, Diploma and Degree levels.`}
      >
        <Suspense>
          <FilterBar filters={filters} />
        </Suspense>
      </PageHeader>
      <div className="container-page space-y-12 py-10">
        {list.length === 0 && (
          <EmptyState icon={<BookDashed className="size-6" />} title="No courses match these filters." description="Try another level or clear the filters." />
        )}
        {programs.flatMap((p) =>
          p.levels.map((l) => {
            const subs = list.filter((s) => s.programSlug === p.slug && s.level === l.slug);
            if (!subs.length) return null;
            return (
              <section key={p.slug + l.slug}>
                <div className="mb-4 flex flex-wrap items-baseline gap-x-3">
                  <h2 className="text-lg font-bold">{l.name}</h2>
                  <span className="text-sm text-muted">
                    {l.credits} credits · {subs.length} courses
                  </span>
                </div>
                <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {subs.map((s) => (
                    <SubjectCard key={s.slug} subject={s} showLevel={false} />
                  ))}
                </div>
              </section>
            );
          }),
        )}
      </div>
    </>
  );
}
