import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { PaperRows } from "@/components/pyq-papers";
import { LinkTabs, PageHeader } from "@/components/ui";
import { PYQ_EXAMS, PYQ_LEVELS, getPyqIndex } from "@/lib/pyq-index";
import { pyqTermHref, pyqTerms } from "@/lib/pyq-terms";
import { pageMetadata } from "@/lib/seo";

export const dynamicParams = false;
// Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;
export async function generateStaticParams() {
  const { pyqCourses } = await getPyqIndex();
  return pyqTerms(pyqCourses).map((t) => ({ term: t.slug }));
}

async function getTerm(slug: string) {
  const { pyqCourses } = await getPyqIndex();
  const terms = pyqTerms(pyqCourses);
  return { term: terms.find((t) => t.slug === slug), terms };
}

export async function generateMetadata({ params }: PageProps<"/pyqs/term/[term]">): Promise<Metadata> {
  const { term } = await getTerm((await params).term);
  if (!term) return {};
  return pageMetadata({
    title: `IIT Madras BS ${term.name} PYQs: Every Paper from the Term`,
    description: `All ${term.papers.length} IIT Madras BS previous year papers from the ${term.name} term, across Foundation, Diploma and Degree, with the official answer key.`,
    path: pyqTermHref(term.slug),
  });
}

export default async function PyqTermPage({ params }: PageProps<"/pyqs/term/[term]">) {
  const { term, terms } = await getTerm((await params).term);
  if (!term) notFound();

  const exams = PYQ_EXAMS.filter((e) => term.papers.some((p) => p.exam === e.slug)).map((e) => e.label);
  const levels = PYQ_LEVELS.map((l) => ({ ...l, papers: term.papers.filter((p) => p.course.level === l.slug) })).filter((l) => l.papers.length > 0);
  const tabs = [...terms].reverse().map((t) => ({ id: t.slug, label: t.name, href: pyqTermHref(t.slug), count: t.papers.length }));

  return (
    <>
      <PageHeader
        crumbs={[{ label: "PYQs", href: "/pyqs" }, { label: `${term.name} term` }]}
        title={`${term.name} papers`}
        description={`${term.papers.length} papers · ${exams.join(", ")}`}
      />

      <div className="sticky top-16 z-20 border-b border-border bg-bg/90 backdrop-blur">
        <div className="container-page">
          <LinkTabs tabs={tabs} active={term.slug} />
        </div>
      </div>

      <div className="container-page space-y-10 py-10">
        {levels.map((l) => (
          <section key={l.slug} aria-labelledby={`level-${l.slug}`}>
            <h2 id={`level-${l.slug}`} className="mb-3 text-sm font-semibold text-muted">
              {l.short}
            </h2>
            <div className="card px-5 py-1">
              <PaperRows papers={l.papers} />
            </div>
          </section>
        ))}
      </div>
    </>
  );
}
