import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { Suspense } from "react";
import { ArrowRight, FileText, NotebookPen } from "lucide-react";
import { NoteCard } from "@/components/cards";
import { FilterBar } from "@/components/filter-bar";
import { ScopeSwitch } from "@/components/study-scope";
import { Pagination, paginate } from "@/components/pagination";
import { EmptyState, PageHeader, buttonClass } from "@/components/ui";
import { getSubject, notes, subjectContext } from "@/lib/content";
import { academicFilters, matchesAcademic, param } from "@/lib/filters";
import { getStudyScope, narrow, scopeLinks } from "@/lib/study-scope";
import type { NoteKind } from "@/lib/types";
import { loadContent } from "@/lib/cms";

export const metadata: Metadata = pageMetadata({
  title: "IIT Madras BS Notes: Lecture Notes, Cheat Sheets & Formula Sheets",
  description: "Free IIT Madras BS lecture notes, cheat sheets, formula sheets and revision notes for every course, by level, subject and week. Read online or download the PDF.",
  path: "/notes",
});

const KINDS: NoteKind[] = ["Lecture notes", "Cheat sheet", "Formula sheet", "Revision", "Lab manual"];
const PAGE_SIZE = 8;

export default async function NotesPage({ searchParams }: PageProps<"/notes">) {
  await loadContent();
  const sp = await searchParams;
  const unit = param(sp, "unit");
  const kind = param(sp, "type");

  const scoped = narrow(
    await getStudyScope(sp),
    notes
      .filter((n) => matchesAcademic(n.subjectSlug, sp) && (!unit || n.unitId === unit) && (!kind || n.kind === kind))
      .sort((a, b) => a.subjectSlug.localeCompare(b.subjectSlug) || a.unitId.localeCompare(b.unitId)),
    (n) => n.subjectSlug,
  );
  const filtered = scoped.items;

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
        <Link href="/qualifier/notes" className="card card-hover mb-6 flex items-center gap-4 p-4 sm:p-5">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand/20">
            <NotebookPen className="size-5" aria-hidden />
          </span>
          <span className="min-w-0 flex-1">
            <span className="block font-semibold">Qualifier cheat notes & formula sheets</span>
            <span className="block text-sm text-muted">Maths I, Stats I, CT and English I: formulas, traps and worked PYQs, readable right here.</span>
          </span>
          <ArrowRight className="size-5 shrink-0 text-muted" aria-hidden />
        </Link>
        <ScopeSwitch list={scoped} links={scopeLinks("/notes", sp)} className="mb-6" />
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
