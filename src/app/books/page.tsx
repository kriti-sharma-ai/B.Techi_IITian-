import type { Metadata } from "next";
import { Suspense } from "react";
import { BookOpen } from "lucide-react";
import { BookCard } from "@/components/cards";
import { FilterBar } from "@/components/filter-bar";
import { ScopeSwitch } from "@/components/study-scope";
import { EmptyState, PageHeader } from "@/components/ui";
import { books } from "@/lib/content";
import { academicFilters, matchesAcademic, param } from "@/lib/filters";
import { getStudyScope, narrow, scopeLinks } from "@/lib/study-scope";
import { loadContent } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Recommended books",
  description: "Curated textbooks for every subject with recommended chapters and free, legal editions where available.",
  alternates: { canonical: "/books" },
};

export default async function BooksPage({ searchParams }: PageProps<"/books">) {
  await loadContent();
  const sp = await searchParams;
  const free = param(sp, "access") === "free";
  const scoped = narrow(
    await getStudyScope(sp),
    books.filter((b) => b.subjectSlugs.some((s) => matchesAcademic(s, sp)) && (!free || b.free)),
    (b) => b.subjectSlugs,
  );
  const list = scoped.items;
  const filters = [
    ...academicFilters(sp, { units: false }),
    { name: "access", label: "Access", options: [{ value: "free", label: "Free & legal" }] },
  ];

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Books" }]}
        title="Recommended books"
        description="We link to publishers and author-hosted free editions. We never host copyrighted books."
      >
        <Suspense>
          <FilterBar filters={filters} />
        </Suspense>
      </PageHeader>
      <div className="container-page py-8">
        <ScopeSwitch list={scoped} links={scopeLinks("/books", sp)} className="mb-6" />
        {list.length ? (
          <div className="grid gap-4 md:grid-cols-2">
            {list.map((b) => (
              <BookCard key={b.slug} book={b} />
            ))}
          </div>
        ) : (
          <EmptyState icon={<BookOpen className="size-6" />} title="No book recommendations yet." description="Try another subject." />
        )}
      </div>
    </>
  );
}
