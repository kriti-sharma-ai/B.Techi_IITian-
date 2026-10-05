import type { Metadata } from "next";
import { Suspense } from "react";
import { BookOpen } from "lucide-react";
import { BookCard } from "@/components/cards";
import { FilterBar } from "@/components/filter-bar";
import { EmptyState, PageHeader } from "@/components/ui";
import { books } from "@/lib/content";
import { academicFilters, matchesAcademic, param } from "@/lib/filters";

export const metadata: Metadata = {
  title: "Recommended books",
  description: "Curated textbooks for every subject with recommended chapters and free, legal editions where available.",
  alternates: { canonical: "/books" },
};

export default async function BooksPage({ searchParams }: PageProps<"/books">) {
  const sp = await searchParams;
  const free = param(sp, "access") === "free";
  const list = books.filter((b) => b.subjectSlugs.some((s) => matchesAcademic(s, sp)) && (!free || b.free));
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
