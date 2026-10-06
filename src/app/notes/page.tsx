import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { FileText } from "lucide-react";
import { NoteCard } from "@/components/cards";
import { FilterBar } from "@/components/filter-bar";
import { Pagination, paginate } from "@/components/pagination";
import { EmptyState, PageHeader, buttonClass } from "@/components/ui";
import { getSubject, notes, subjectContext } from "@/lib/content";
import { academicFilters, matchesAcademic, param } from "@/lib/filters";
import type { NoteKind } from "@/lib/types";

export const metadata: Metadata = {
  title: "Notes",
  description: "Lecture notes, cheat sheets, formula sheets and revision notes by program, semester, subject and unit. Preview free, download when you need.",
  alternates: { canonical: "/notes" },
};

const KINDS: NoteKind[] = ["Lecture notes", "Cheat sheet", "Formula sheet", "Revision", "Lab manual"];
const PAGE_SIZE = 8;

export default async function NotesPage({ searchParams }: PageProps<"/notes">) {
  const sp = await searchParams;
  const unit = param(sp, "unit");
  const kind = param(sp, "type");

  const filtered = notes
    .filter((n) => matchesAcademic(n.subjectSlug, sp) && (!unit || n.unitId === unit) && (!kind || n.kind === kind))
    .sort((a, b) => a.subjectSlug.localeCompare(b.subjectSlug) || a.unitId.localeCompare(b.unitId));

  const { items, page, pages } = paginate(filtered, Number(param(sp, "page") ?? 1), PAGE_SIZE);

  // Group the current page by subject so the list reads like a library, not a file dump.
  const groups = new Map<string, typeof items>();
  for (const n of items) groups.set(n.subjectSlug, [...(groups.get(n.subjectSlug) ?? []), n]);

  const filters = [...academicFilters(sp), { name: "type", label: "Type", options: KINDS.map((k) => ({ value: k, label: k })) }];

  return (
    <>
      <PageHeader crumbs={[{ label: "Notes" }]} title="Notes" description="Preview → read → download. Every note is mapped to its unit and topic.">
        <Suspense>
          <FilterBar filters={filters} />
        </Suspense>
      </PageHeader>
      <div className="container-page py-8">
        <p className="mb-6 text-sm text-muted">
          {filtered.length} note{filtered.length === 1 ? "" : "s"}
        </p>
        {filtered.length === 0 ? (
          <EmptyState
            icon={<FileText className="size-6" />}
            title="No notes available yet."
            description="We don't have notes for this selection yet. Request them and we'll prioritise it."
            action={
              <Link href="/contribute" className={buttonClass("secondary")}>
                Request this resource →
              </Link>
            }
          />
        ) : (
          <div className="space-y-10">
            {[...groups.entries()].map(([slug, list]) => (
              <section key={slug} aria-labelledby={`g-${slug}`}>
                <div className="mb-3 flex items-baseline justify-between gap-4 border-b border-border pb-2">
                  <h2 id={`g-${slug}`} className="font-bold">
                    {getSubject(slug)?.name} notes
                  </h2>
                  <span className="text-xs text-muted">{subjectContext(slug)}</span>
                </div>
                <div className="space-y-3">
                  {list.map((n) => (
                    <NoteCard key={n.id} note={n} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        )}
        <Pagination page={page} pages={pages} basePath="/notes" params={sp} />
      </div>
    </>
  );
}
