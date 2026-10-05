import type { Metadata } from "next";
import { Suspense } from "react";
import { BookDashed } from "lucide-react";
import { SubjectCard } from "@/components/cards";
import { FilterBar } from "@/components/filter-bar";
import { EmptyState, PageHeader } from "@/components/ui";
import { programs, subjects } from "@/lib/content";
import { academicFilters, matchesAcademic } from "@/lib/filters";

export const metadata: Metadata = {
  title: "All subjects",
  description: "Every subject on BTechi with unit-wise curriculum, notes, videos, PYQs and practice questions.",
  alternates: { canonical: "/subjects" },
};

export default async function SubjectsPage({ searchParams }: PageProps<"/subjects">) {
  const sp = await searchParams;
  const list = subjects.filter((s) => matchesAcademic(s.slug, sp));
  const filters = academicFilters(sp, { units: false }).filter((f) => f.name !== "subject");

  return (
    <>
      <PageHeader crumbs={[{ label: "Subjects" }]} title="Subjects" description="Pick a subject to see its curriculum, topic by topic.">
        <Suspense>
          <FilterBar filters={filters} />
        </Suspense>
      </PageHeader>
      <div className="container-page space-y-12 py-10">
        {list.length === 0 && (
          <EmptyState icon={<BookDashed className="size-6" />} title="No subjects match these filters." description="Try another semester or clear the filters." />
        )}
        {programs.map((p) => {
          const subs = list.filter((s) => s.programSlug === p.slug).sort((a, b) => a.semester - b.semester);
          if (!subs.length) return null;
          return (
            <section key={p.slug}>
              <h2 className="mb-4 text-lg font-bold">{p.name}</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {subs.map((s) => (
                  <SubjectCard key={s.slug} subject={s} showProgram={false} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
