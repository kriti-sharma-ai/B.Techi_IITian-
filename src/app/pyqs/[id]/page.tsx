import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PenLine, Timer } from "lucide-react";
import { PdfViewer } from "@/components/pdf-viewer";
import { BookmarkButton, DownloadButton, ReportButton } from "@/components/resource-actions";
import { Badge, Breadcrumbs, buttonClass } from "@/components/ui";
import { getLevel, getProgram, getPyq, getSubject, pyqs, pyqTitle, questionsFor, topicTitle } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () => pyqs.map((p) => ({ id: p.id }));

export async function generateMetadata({ params }: PageProps<"/pyqs/[id]">): Promise<Metadata> {
  const p = getPyq((await params).id);
  if (!p) return {};
  return {
    title: `${pyqTitle(p)} Question Paper`,
    description: `${pyqTitle(p)} previous year paper (${p.marks} marks). View, download, or practise with explanations.`,
    alternates: { canonical: `/pyqs/${p.id}` },
  };
}

export default async function PyqPage({ params }: PageProps<"/pyqs/[id]">) {
  const pyq = getPyq((await params).id);
  if (!pyq) notFound();
  const subject = getSubject(pyq.subjectSlug)!;
  const program = getProgram(subject.programSlug)!;
  const qs = questionsFor({ ids: pyq.questionIds });
  const title = pyqTitle(pyq);

  return (
    <div className="container-page py-8">
      <Breadcrumbs
        items={[
          { label: "PYQs", href: "/pyqs" },
          { label: subject.name, href: `/pyqs?subject=${subject.slug}` },
          { label: `${pyq.exam} ${pyq.year}` },
        ]}
      />
      <div className="flex flex-wrap items-start justify-between gap-6">
        <div>
          <div className="flex gap-2">
            <Badge tone={pyq.exam === "End Term" ? "purple" : "blue"}>{pyq.exam}</Badge>
            <Badge>
              {[subject.code, getLevel(subject.programSlug, subject.level)?.short].filter(Boolean).join(" · ")}
            </Badge>
          </div>
          <h1 className="mt-2 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h1>
          <p className="mt-1 text-muted">
            {pyq.marks} marks · {pyq.durationMin / 60} hours · {qs.length} questions available for practice
          </p>
        </div>
        <div className="flex flex-wrap gap-2">
          <Link href={`/practice/session?pyq=${pyq.id}`} className={buttonClass("primary", "md")}>
            <PenLine className="size-4" aria-hidden /> Practice this paper
          </Link>
          <Link href={`/practice/session?pyq=${pyq.id}&mode=exam`} className={buttonClass("secondary", "md")}>
            <Timer className="size-4" aria-hidden /> Timed mock
          </Link>
          <DownloadButton noteId={pyq.id} title={title} fileUrl={pyq.fileUrl} size="md" />
          <BookmarkButton withLabel item={{ kind: "pyq", id: pyq.id, title, href: `/pyqs/${pyq.id}`, subtitle: `${pyq.marks} marks` }} />
          <ReportButton kind="pyq" resourceId={pyq.id} title={title} />
        </div>
      </div>

      <section className="mt-8">
        <h2 className="mb-3 text-sm font-semibold">Topics examined</h2>
        <ul className="flex flex-wrap gap-2">
          {pyq.topics.map((t) => (
            <li key={t}>
              <Link
                href={`/subjects/${subject.slug}/${t}`}
                className="inline-block rounded-lg border border-border bg-surface px-3 py-1.5 text-sm font-medium hover:border-fg/30"
              >
                {topicTitle(subject.slug, t)}
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {pyq.fileUrl && (
        <section className="mt-8">
          <h2 className="mb-3 text-sm font-semibold">Original paper</h2>
          <PdfViewer url={pyq.fileUrl} title={title} />
        </section>
      )}

      {qs.length > 0 && (
        <section className="mt-10">
          <h2 className="mb-3 text-lg font-bold">Questions from this paper</h2>
          <ol className="space-y-3">
            {qs.map((q, i) => (
              <li key={q.id} className="card p-5">
                <p className="font-medium">
                  <span className="mr-2 text-muted tabular-nums">Q{i + 1}.</span>
                  {q.prompt}
                </p>
                <p className="mt-2 text-xs text-muted">
                  {topicTitle(q.subjectSlug, q.topicSlug)} · {q.difficulty}
                </p>
              </li>
            ))}
          </ol>
          <Link href={`/practice/session?pyq=${pyq.id}`} className={buttonClass("dark", "lg", "mt-6")}>
            Practise with explanations →
          </Link>
        </section>
      )}
    </div>
  );
}
