import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, Clock, FileText, PenLine, PlayCircle, ScrollText } from "lucide-react";
import { BookCard, NoteCard } from "@/components/cards";
import { MarkCompleteButton, VisitTracker } from "@/components/progress";
import { BookmarkButton, ReportButton } from "@/components/resource-actions";
import { Quiz } from "@/components/quiz";
import { Badge, Breadcrumbs, buttonClass } from "@/components/ui";
import { VideoCard } from "@/components/video-card";
import {
  allTopics,
  booksForSubject,
  findTopic,
  forTopic,
  subjectPlacement,
  getSubject,
  notes,
  pyqsForTopic,
  pyqTitle,
  questions,
  subjects,
  videos,
} from "@/lib/content";
import { cn } from "@/lib/utils";

export const dynamicParams = false;
export const generateStaticParams = () =>
  subjects.flatMap((s) => allTopics(s).map(({ topic }) => ({ subject: s.slug, topic: topic.slug })));

async function load(params: PageProps<"/subjects/[subject]/[topic]">["params"]) {
  const { subject: ss, topic: ts } = await params;
  const subject = getSubject(ss);
  const found = subject && findTopic(subject, ts);
  if (!subject || !found) return null;
  return { subject, ...found };
}

export async function generateMetadata({ params }: PageProps<"/subjects/[subject]/[topic]">): Promise<Metadata> {
  const r = await load(params);
  if (!r) return {};
  return {
    title: `${r.topic.title}: ${r.subject.name} Notes, Video & Practice`,
    description: `${r.topic.summary} Notes, video, book chapters, practice questions and PYQs for ${r.topic.title} (${r.subject.name}, Week ${r.unit.number}).`,
    alternates: { canonical: `/subjects/${r.subject.slug}/${r.topic.slug}` },
  };
}

export default async function TopicPage({ params }: PageProps<"/subjects/[subject]/[topic]">) {
  const r = await load(params);
  if (!r) notFound();
  const { subject, unit, topic } = r;
  const { program, level } = subjectPlacement(subject);

  const topicNotes = forTopic(notes, subject.slug, topic.slug);
  const topicVideos = forTopic(videos, subject.slug, topic.slug);
  const topicQuestions = questions.filter((q) => q.subjectSlug === subject.slug && q.topicSlug === topic.slug);
  const topicPyqs = pyqsForTopic(subject.slug, topic.slug);
  const books = booksForSubject(subject.slug);
  const unitNotes = topicNotes.length ? [] : notes.filter((n) => n.subjectSlug === subject.slug && n.unitId === unit.id);

  const flat = allTopics(subject);
  const idx = flat.findIndex((x) => x.topic.slug === topic.slug);
  const prev = flat[idx - 1];
  const next = flat[idx + 1];
  const base = `/subjects/${subject.slug}`;

  const jump = [
    { id: "video", label: "Video", icon: PlayCircle, n: topicVideos.length },
    { id: "notes", label: "Notes", icon: FileText, n: topicNotes.length || unitNotes.length },
    { id: "practice", label: "Practice", icon: PenLine, n: topicQuestions.length },
    { id: "books", label: "Books", icon: BookOpen, n: books.length },
    { id: "pyqs", label: "PYQs", icon: ScrollText, n: topicPyqs.length },
  ];

  return (
    <>
      <VisitTracker subjectSlug={subject.slug} topicSlug={topic.slug} />
      <div className="px-4 py-6 md:px-8 lg:py-8">
        <Breadcrumbs
          items={[
            { label: program.name, href: `/programs/${program.slug}` },
            { label: level.name, href: `/programs/${program.slug}/${level.slug}` },
            { label: subject.name, href: base },
            { label: topic.title },
          ]}
        />

        <article className="min-w-0 max-w-4xl">
            <header>
              <p className="eyebrow">
                {subject.name} · Week {unit.number}: {unit.title}
              </p>
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-4xl">{topic.title}</h1>
              <p className="mt-2 max-w-2xl text-muted">{topic.summary}</p>
              <div className="mt-4 flex flex-wrap items-center gap-2">
                <Badge>
                  <Clock className="size-3.5" aria-hidden /> ~{topic.minutes} min
                </Badge>
                <MarkCompleteButton subjectSlug={subject.slug} topicSlug={topic.slug} />
                <BookmarkButton
                  withLabel
                  item={{ kind: "topic", id: `${subject.slug}/${topic.slug}`, title: topic.title, href: `${base}/${topic.slug}`, subtitle: subject.name }}
                />
                <ReportButton kind="topic" resourceId={`${subject.slug}/${topic.slug}`} title={topic.title} />
              </div>
              <nav aria-label="On this page" className="mt-6 flex gap-2 overflow-x-auto border-y border-border py-2 [scrollbar-width:none]">
                {jump.map((j) => (
                  <a
                    key={j.id}
                    href={`#${j.id}`}
                    className={cn(
                      "inline-flex shrink-0 items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium hover:bg-surface-2",
                      j.n === 0 && "text-muted",
                    )}
                  >
                    <j.icon className="size-4" aria-hidden /> {j.label}
                    <span className="text-xs text-muted tabular-nums">{j.n}</span>
                  </a>
                ))}
              </nav>
            </header>

            <Section id="video" title="Watch">
              {topicVideos.length ? (
                <div className="grid gap-4 md:grid-cols-2">
                  {topicVideos.map((v) => (
                    <VideoCard key={v.id} video={v} />
                  ))}
                </div>
              ) : (
                <Muted>No video for this topic yet. We&apos;re recording one.</Muted>
              )}
            </Section>

            <Section id="notes" title="Read">
              {topicNotes.length ? (
                <div className="space-y-3">
                  {topicNotes.map((n) => (
                    <NoteCard key={n.id} note={n} />
                  ))}
                </div>
              ) : unitNotes.length ? (
                <div className="space-y-3">
                  <p className="text-sm text-muted">No topic-specific notes yet. These Week {unit.number} notes cover it:</p>
                  {unitNotes.map((n) => (
                    <NoteCard key={n.id} note={n} />
                  ))}
                </div>
              ) : (
                <Muted>
                  No notes yet.{" "}
                  <Link href="/contribute" className="font-medium text-fg underline">
                    Request this resource →
                  </Link>
                </Muted>
              )}
            </Section>

            <Section id="practice" title="Practice">
              {topicQuestions.length ? (
                <Quiz questions={topicQuestions} title={topic.title} />
              ) : (
                <Muted>
                  No questions for this topic yet.{" "}
                  <Link href={`/practice/session?subject=${subject.slug}&unit=${unit.id}`} className="font-medium text-fg underline">
                    Try Week {unit.number} practice →
                  </Link>
                </Muted>
              )}
            </Section>

            <Section id="books" title="Reference books">
              {books.length ? (
                <div className="grid gap-4 xl:grid-cols-2">
                  {books.map((b) => (
                    <BookCard key={b.slug} book={b} />
                  ))}
                </div>
              ) : (
                <Muted>No book recommendations yet.</Muted>
              )}
            </Section>

            <Section id="pyqs" title="Asked in previous papers">
              {topicPyqs.length ? (
                <ul className="flex flex-wrap gap-2">
                  {topicPyqs.map((p) => (
                    <li key={p.id}>
                      <Link
                        href={`/pyqs/${p.id}`}
                        className="inline-flex items-center gap-2 rounded-lg border border-border bg-surface px-3 py-2 text-sm font-medium hover:border-fg/30"
                      >
                        <ScrollText className="size-4 text-green" aria-hidden />
                        {pyqTitle(p)}
                      </Link>
                    </li>
                  ))}
                </ul>
              ) : (
                <Muted>This topic hasn&apos;t appeared in the papers we have so far.</Muted>
              )}
            </Section>

            <nav aria-label="Topic navigation" className="mt-12 grid gap-3 border-t border-border pt-6 sm:grid-cols-2">
              {prev ? (
                <Link href={`${base}/${prev.topic.slug}`} className="card card-hover p-4">
                  <span className="flex items-center gap-1 text-xs text-muted">
                    <ArrowLeft className="size-3.5" aria-hidden /> Previous
                  </span>
                  <span className="mt-1 block font-semibold">{prev.topic.title}</span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link href={`${base}/${next.topic.slug}`} className="card card-hover p-4 text-right">
                  <span className="flex items-center justify-end gap-1 text-xs text-muted">
                    Next <ArrowRight className="size-3.5" aria-hidden />
                  </span>
                  <span className="mt-1 block font-semibold">{next.topic.title}</span>
                </Link>
              ) : (
                <Link href={`/practice/session?subject=${subject.slug}&mode=exam`} className={buttonClass("primary", "lg", "justify-self-end")}>
                  Finished! Take the full test →
                </Link>
              )}
            </nav>
        </article>
      </div>
    </>
  );
}

function Section({ id, title, children }: { id: string; title: string; children: React.ReactNode }) {
  return (
    <section id={id} className="mt-10 scroll-mt-24" aria-labelledby={`${id}-h`}>
      <h2 id={`${id}-h`} className="mb-4 text-lg font-bold">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Muted({ children }: { children: React.ReactNode }) {
  return <p className="rounded-xl border border-dashed border-border px-4 py-5 text-sm text-muted">{children}</p>;
}
