import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, FileWarning, User } from "lucide-react";
import { PdfViewer } from "@/components/pdf-viewer";
import { BookmarkButton, DownloadButton, ReportButton, ShareButton } from "@/components/resource-actions";
import { Breadcrumbs, EmptyState, QualityBadge, buttonClass } from "@/components/ui";
import { getNote, getProgram, getSubject, notes, topicTitle, unitLabel } from "@/lib/content";
import { formatDate, formatNumber, formatSize } from "@/lib/utils";

export const dynamicParams = false;
export const generateStaticParams = () => notes.map((n) => ({ id: n.id }));

export async function generateMetadata({ params }: PageProps<"/notes/[id]">): Promise<Metadata> {
  const n = getNote((await params).id);
  if (!n) return {};
  const s = getSubject(n.subjectSlug);
  return {
    title: `${n.title}: ${s?.name} Notes (PDF)`,
    description: `${n.description} ${n.pages}-page PDF for ${s?.name}, ${unitLabel(n.subjectSlug, n.unitId)}. Read online or download.`,
    alternates: { canonical: `/notes/${n.id}` },
  };
}

export default async function NotePage({ params }: PageProps<"/notes/[id]">) {
  const note = getNote((await params).id);
  if (!note) notFound();
  const subject = getSubject(note.subjectSlug)!;
  const program = getProgram(subject.programSlug)!;
  const related = notes.filter((n) => n.subjectSlug === note.subjectSlug && n.id !== note.id).slice(0, 4);

  return (
    <div className="container-page py-8">
      <Breadcrumbs
        items={[
          { label: program.name, href: `/programs/${program.slug}` },
          { label: subject.name, href: `/subjects/${subject.slug}` },
          { label: "Notes", href: `/subjects/${subject.slug}?item=notes` },
          { label: note.title },
        ]}
      />
      <div className="grid gap-8 lg:grid-cols-[1fr_300px]">
        <div className="min-w-0">
          <div className="mb-5 flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="mb-2 flex flex-wrap items-center gap-2">
                <QualityBadge quality={note.quality} />
                <span className="text-sm text-muted">
                  {note.kind} · PDF · {note.pages} pages · {formatSize(note.sizeKB)}
                </span>
              </div>
              <h1 className="text-2xl font-extrabold tracking-tight md:text-3xl">{note.title}</h1>
              <p className="mt-1 text-muted">{note.description}</p>
            </div>
          </div>
          {note.quality === "outdated" && (
            <p className="mb-4 rounded-xl border border-amber/40 bg-amber/10 px-4 py-3 text-sm">
              <strong>Heads up:</strong> these notes may not match the current syllabus. We&apos;re reviewing them.
            </p>
          )}
          <div className="mb-4 flex flex-wrap gap-2">
            <DownloadButton noteId={note.id} title={note.title} fileUrl={note.fileUrl} size="md" variant="primary" />
            <ShareButton title={note.title} path={`/notes/${note.id}`} />
            <BookmarkButton withLabel item={{ kind: "note", id: note.id, title: note.title, href: `/notes/${note.id}`, subtitle: subject.name }} />
            <ReportButton kind="note" resourceId={note.id} title={note.title} />
          </div>
          {note.fileUrl ? (
            <PdfViewer url={note.fileUrl} title={note.title} />
          ) : (
            <EmptyState
              icon={<FileWarning className="size-6" />}
              title="This resource is temporarily unavailable."
              description="The file is being reviewed or re-uploaded. Check back soon, or request it to bump its priority."
              action={
                <Link href="/contribute" className={buttonClass("secondary")}>
                  Request this resource →
                </Link>
              }
            />
          )}
        </div>

        <aside className="space-y-4">
          <div className="card p-5 text-sm">
            <h2 className="mb-3 font-semibold">About these notes</h2>
            <dl className="space-y-2.5">
              <Row label="Subject">
                <Link href={`/subjects/${subject.slug}`} className="font-medium hover:underline">
                  {subject.name}
                </Link>
              </Row>
              <Row label="Week">{unitLabel(note.subjectSlug, note.unitId)}</Row>
              {note.topicSlug && (
                <Row label="Topic">
                  <Link href={`/subjects/${subject.slug}/${note.topicSlug}`} className="font-medium hover:underline">
                    {topicTitle(subject.slug, note.topicSlug)}
                  </Link>
                </Row>
              )}
              <Row label="Downloads">{formatNumber(note.downloads)}</Row>
              <Row label="Updated">
                <span className="inline-flex items-center gap-1">
                  <CalendarDays className="size-3.5" aria-hidden />
                  {formatDate(note.updatedAt)}
                </span>
              </Row>
              <Row label="Author">
                <span className="inline-flex items-center gap-1">
                  <User className="size-3.5" aria-hidden />
                  {note.author}
                </span>
              </Row>
            </dl>
            {note.topicSlug && (
              <Link href={`/subjects/${subject.slug}/${note.topicSlug}#practice`} className={buttonClass("dark", "md", "mt-5 w-full")}>
                Practise this topic
              </Link>
            )}
          </div>
          {related.length > 0 && (
            <div className="card p-5">
              <h2 className="mb-3 text-sm font-semibold">More {subject.name} notes</h2>
              <ul className="space-y-2.5 text-sm">
                {related.map((n) => (
                  <li key={n.id}>
                    <Link href={`/notes/${n.id}`} className="block hover:underline">
                      {n.title}
                      <span className="block text-xs text-muted">
                        {unitLabel(n.subjectSlug, n.unitId)} · {n.pages} pages
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </aside>
      </div>
    </div>
  );
}

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex justify-between gap-4">
      <dt className="text-muted">{label}</dt>
      <dd className="text-right">{children}</dd>
    </div>
  );
}
