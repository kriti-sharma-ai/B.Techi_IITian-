import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, ClipboardList, FileText, PenLine, PlayCircle, ScrollText, Shuffle, Target, Timer } from "lucide-react";
import { BookCard, NoteCard, PyqCard } from "@/components/cards";
import { Curriculum } from "@/components/curriculum";
import { PyqAnalysis } from "@/components/pyq-analysis";
import { SubjectProgressPanel, VisitTracker } from "@/components/progress";
import { BookmarkButton } from "@/components/resource-actions";
import { Breadcrumbs, ButtonLink, EmptyState, LinkTabs, buttonClass } from "@/components/ui";
import { VideoCard } from "@/components/video-card";
import {
  allTopics,
  assignments,
  booksForSubject,
  forSubject,
  getProgram,
  getSubject,
  notes,
  pyqs,
  questions,
  subjectStats,
  videos,
} from "@/lib/content";
import { param } from "@/lib/filters";
import { formatDate, SITE_URL } from "@/lib/utils";

const TABS = ["overview", "curriculum", "notes", "videos", "books", "pyqs", "practice", "assignments"] as const;
type Tab = (typeof TABS)[number];

export async function generateMetadata({ params }: PageProps<"/subjects/[subject]">): Promise<Metadata> {
  const s = getSubject((await params).subject);
  if (!s) notFound();
  const program = getProgram(s.programSlug);
  return {
    title: `${s.name}: Notes, PYQs & Practice (${program?.name} Sem ${s.semester})`,
    description: `${s.description} Unit-wise curriculum, notes, videos, books, previous year questions and practice for ${s.name}.`,
    alternates: { canonical: `/subjects/${s.slug}` },
  };
}

export default async function SubjectPage({ params, searchParams }: PageProps<"/subjects/[subject]">) {
  const subject = getSubject((await params).subject);
  if (!subject) notFound();
  const sp = await searchParams;
  const tabParam = param(sp, "tab") as Tab | undefined;
  const tab: Tab = tabParam && TABS.includes(tabParam) ? tabParam : "overview";

  const program = getProgram(subject.programSlug)!;
  const stats = subjectStats(subject);
  const subjectNotes = forSubject(notes, subject.slug);
  const subjectVideos = forSubject(videos, subject.slug);
  const subjectBooks = booksForSubject(subject.slug);
  const subjectPyqs = forSubject(pyqs, subject.slug).sort((a, b) => b.year - a.year);
  const subjectAssignments = forSubject(assignments, subject.slug);
  const firstTopic = allTopics(subject)[0];
  const base = `/subjects/${subject.slug}`;

  const tabs = [
    { id: "overview", label: "Overview", href: base },
    { id: "curriculum", label: "Curriculum", href: `${base}?tab=curriculum`, count: stats.topics },
    { id: "notes", label: "Notes", href: `${base}?tab=notes`, count: stats.notes },
    { id: "videos", label: "Videos", href: `${base}?tab=videos`, count: stats.videos },
    { id: "books", label: "Books", href: `${base}?tab=books`, count: stats.books },
    { id: "pyqs", label: "PYQs", href: `${base}?tab=pyqs`, count: stats.pyqs },
    { id: "practice", label: "Practice", href: `${base}?tab=practice`, count: stats.questions },
    { id: "assignments", label: "Assignments", href: `${base}?tab=assignments`, count: subjectAssignments.length },
  ];

  const courseLd = {
    "@context": "https://schema.org",
    "@type": "Course",
    name: subject.name,
    description: subject.description,
    url: `${SITE_URL}${base}`,
    provider: { "@type": "Organization", name: "BTechi", sameAs: SITE_URL },
    educationalLevel: `${program.degree} Semester ${subject.semester}`,
    numberOfCredits: subject.credits,
    hasCourseInstance: { "@type": "CourseInstance", courseMode: "online", courseWorkload: `${stats.topics} topics` },
    offers: { "@type": "Offer", price: 0, priceCurrency: "INR", category: "Free" },
  };

  return (
    <>
      <VisitTracker subjectSlug={subject.slug} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(courseLd) }} />

      <header className="border-b border-border bg-surface">
        <div className="container-page pt-8">
          <Breadcrumbs
            items={[
              { label: program.name, href: `/programs/${program.slug}` },
              { label: `Semester ${subject.semester}`, href: `/programs/${program.slug}/semester-${subject.semester}` },
              { label: subject.name },
            ]}
          />
          <div className="grid gap-8 pb-8 lg:grid-cols-[1fr_300px]">
            <div>
              <p className="eyebrow">
                Semester {subject.semester} · {program.name} · {subject.credits} credits
              </p>
              <h1 className="mt-1 text-3xl font-extrabold tracking-tight md:text-5xl">{subject.name}</h1>
              <p className="mt-3 max-w-2xl text-muted">{subject.description}</p>
              <div className="mt-6 flex flex-wrap gap-2">
                {firstTopic && (
                  <ButtonLink href={`${base}/${firstTopic.topic.slug}`}>
                    Start learning <ArrowRight className="size-4" aria-hidden />
                  </ButtonLink>
                )}
                <ButtonLink href={`/practice/session?subject=${subject.slug}`} variant="secondary">
                  <PenLine className="size-4" aria-hidden /> Practice
                </ButtonLink>
                <BookmarkButton
                  withLabel
                  item={{ kind: "topic", id: `subject:${subject.slug}`, title: subject.name, href: base, subtitle: `Semester ${subject.semester} · ${program.name}` }}
                />
              </div>
              <dl className="mt-8 grid grid-cols-3 gap-y-4 sm:grid-cols-5">
                {[
                  ["Units", stats.units],
                  ["Topics", stats.topics],
                  ["Videos", stats.videos],
                  ["Notes", stats.notes],
                  ["Questions", stats.questions],
                ].map(([l, v]) => (
                  <div key={l} className="flex flex-col-reverse">
                    <dt className="text-sm text-muted">{l}</dt>
                    <dd className="text-2xl font-bold tabular-nums">{v}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <div className="self-end">
              <SubjectProgressPanel subject={subject} />
            </div>
          </div>
          <LinkTabs tabs={tabs} active={tab} />
        </div>
      </header>

      <div className="container-page py-8">
        {tab === "overview" && (
          <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
            <div>
              <div className="mb-4 flex items-center justify-between">
                <h2 className="text-lg font-bold">Curriculum</h2>
                <Link href={`${base}?tab=curriculum`} className="text-sm font-medium text-muted hover:text-fg">
                  Full view →
                </Link>
              </div>
              <Curriculum subject={subject} collapsed />
            </div>
            <aside className="space-y-4">
              <PyqAnalysis subjectSlug={subject.slug} limit={5} />
              {subjectBooks[0] && (
                <div>
                  <h2 className="mb-3 text-sm font-semibold">Recommended book</h2>
                  <BookCard book={subjectBooks[0]} />
                </div>
              )}
              {subjectNotes.length > 0 && (
                <div className="card p-5">
                  <h2 className="mb-3 text-sm font-semibold">Quick links</h2>
                  <ul className="space-y-2 text-sm">
                    {subjectNotes.slice(0, 4).map((n) => (
                      <li key={n.id}>
                        <Link href={`/notes/${n.id}`} className="flex items-center gap-2 hover:underline">
                          <FileText className="size-4 text-teal" aria-hidden /> {n.title}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </aside>
          </div>
        )}

        {tab === "curriculum" && <Curriculum subject={subject} />}

        {tab === "notes" &&
          (subjectNotes.length ? (
            <div className="space-y-8">
              {subject.units.map((u) => {
                const list = subjectNotes.filter((n) => n.unitId === u.id);
                if (!list.length) return null;
                return (
                  <section key={u.id}>
                    <h2 className="mb-3 text-sm font-semibold">
                      <span className="text-muted">Unit {u.number} ·</span> {u.title}
                    </h2>
                    <div className="space-y-3">
                      {list.map((n) => (
                        <NoteCard key={n.id} note={n} />
                      ))}
                    </div>
                  </section>
                );
              })}
            </div>
          ) : (
            <Empty icon={<FileText className="size-6" />} what="notes" subject={subject.name} />
          ))}

        {tab === "videos" &&
          (subjectVideos.length ? (
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {subjectVideos.map((v) => (
                <VideoCard key={v.id} video={v} />
              ))}
            </div>
          ) : (
            <Empty icon={<PlayCircle className="size-6" />} what="videos" subject={subject.name} />
          ))}

        {tab === "books" &&
          (subjectBooks.length ? (
            <div className="grid gap-4 md:grid-cols-2">
              {subjectBooks.map((b) => (
                <BookCard key={b.slug} book={b} />
              ))}
            </div>
          ) : (
            <Empty icon={<BookOpen className="size-6" />} what="book recommendations" subject={subject.name} />
          ))}

        {tab === "pyqs" &&
          (subjectPyqs.length ? (
            <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
              <div className="grid gap-4 sm:grid-cols-2">
                {subjectPyqs.map((p) => (
                  <PyqCard key={p.id} pyq={p} />
                ))}
              </div>
              <PyqAnalysis subjectSlug={subject.slug} />
            </div>
          ) : (
            <Empty icon={<ScrollText className="size-6" />} what="previous year papers" subject={subject.name} />
          ))}

        {tab === "practice" && <PracticeTab subjectSlug={subject.slug} units={subject.units} />}

        {tab === "assignments" &&
          (subjectAssignments.length ? (
            <ul className="space-y-3">
              {subjectAssignments.map((a) => {
                const unit = subject.units.find((u) => u.id === a.unitId);
                return (
                  <li key={a.id} className="card flex flex-col gap-3 p-5 sm:flex-row sm:items-center">
                    <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-blue/10 text-blue">
                      <ClipboardList className="size-5" aria-hidden />
                    </span>
                    <div className="flex-1">
                      <p className="font-semibold">{a.title}</p>
                      <p className="text-sm text-muted">
                        Unit {unit?.number} · {a.description}
                      </p>
                    </div>
                    {a.due && <p className="text-sm font-medium">Due {formatDate(a.due)}</p>}
                  </li>
                );
              })}
            </ul>
          ) : (
            <Empty icon={<ClipboardList className="size-6" />} what="assignments" subject={subject.name} />
          ))}
      </div>
    </>
  );
}

function Empty({ icon, what, subject }: { icon: React.ReactNode; what: string; subject: string }) {
  return (
    <EmptyState
      icon={icon}
      title={`No ${what} available yet.`}
      description={`We're working on ${what} for ${subject}. Request them and we'll prioritise this subject.`}
      action={
        <Link href="/contribute" className={buttonClass("secondary")}>
          Request this resource →
        </Link>
      }
    />
  );
}

function PracticeTab({ subjectSlug, units }: { subjectSlug: string; units: { id: string; number: number; title: string }[] }) {
  const count = questions.filter((q) => q.subjectSlug === subjectSlug).length;
  if (!count) return <Empty icon={<PenLine className="size-6" />} what="practice questions" subject="this subject" />;
  const modes = [
    { icon: Shuffle, t: "Quick practice", d: "10 random questions with instant explanations.", href: `/practice/session?subject=${subjectSlug}&count=10` },
    { icon: Timer, t: "Full test", d: "All questions, timed, graded at the end.", href: `/practice/session?subject=${subjectSlug}&mode=exam` },
    { icon: Target, t: "Hard questions only", d: "Push yourself with the toughest set.", href: `/practice/session?subject=${subjectSlug}&difficulty=Hard` },
  ];
  return (
    <div className="space-y-8">
      <div className="grid gap-4 md:grid-cols-3">
        {modes.map((m) => (
          <Link key={m.t} href={m.href} className="card card-hover p-5">
            <m.icon className="size-5 text-purple" aria-hidden />
            <p className="mt-3 font-semibold">{m.t}</p>
            <p className="mt-1 text-sm text-muted">{m.d}</p>
          </Link>
        ))}
      </div>
      <div>
        <h2 className="mb-3 text-sm font-semibold">Unit practice</h2>
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {units.map((u) => {
            const n = questions.filter((q) => q.unitId === u.id).length;
            return (
              <Link
                key={u.id}
                href={n ? `/practice/session?subject=${subjectSlug}&unit=${u.id}` : "#"}
                aria-disabled={!n}
                className={`card flex items-center justify-between p-4 ${n ? "card-hover" : "pointer-events-none opacity-50"}`}
              >
                <span>
                  <span className="text-sm text-muted">Unit {u.number}</span>
                  <span className="block font-medium">{u.title}</span>
                </span>
                <span className="text-sm font-semibold tabular-nums text-purple">{n} Qs</span>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}
