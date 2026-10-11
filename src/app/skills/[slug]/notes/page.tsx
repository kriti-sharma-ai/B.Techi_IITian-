import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, BookOpen, Clock, Code, ListChecks, Repeat } from "lucide-react";
import { CheatReader, PrintButton, ReaderToc, ReaderToolbar, type TocItem } from "@/components/cheat-reader";
import { NoteCard, Rich, blocksViews } from "@/components/cheat-sheet";
import { BookmarkButton, ShareButton } from "@/components/resource-actions";
import { SkillEnrollButton } from "@/components/skill-enroll";
import { Badge, Breadcrumbs } from "@/components/ui";
import { getSkill, getSkillCategory, getSubject } from "@/lib/content";
import { getSkillNotes, skillModules, skillNotes, skillNotesHref, skillNotesStats } from "@/lib/data/skill-notes";
import type { SkillLecture } from "@/lib/types";
import { SITE_URL } from "@/lib/utils";

export const dynamicParams = false;
export const generateStaticParams = () => skillNotes.map((n) => ({ slug: n.skill }));

const KIND: Record<SkillLecture["kind"], string> = { video: "Lesson", reading: "Reading", quiz: "Practice", project: "Project" };

export async function generateMetadata({ params }: PageProps<"/skills/[slug]/notes">): Promise<Metadata> {
  const { slug } = await params;
  const course = getSkill(slug);
  if (!course || !getSkillNotes(slug)) return {};
  const name = course.title.split(":")[0];
  return {
    title: `${name} Notes: Free Text Lessons with Examples`,
    description: `Free ${name} notes from BTechi: ${course.subtitle} Every lesson as readable text, with worked examples, practice questions and a project.`,
    alternates: { canonical: skillNotesHref(slug) },
  };
}

export default async function SkillNotesPage({ params }: PageProps<"/skills/[slug]/notes">) {
  const { slug } = await params;
  const course = getSkill(slug);
  const notes = getSkillNotes(slug);
  if (!course || !notes) notFound();

  const modules = skillModules(course, notes);
  const stats = skillNotesStats(notes);
  const category = getSkillCategory(course.category);
  const name = course.title.split(":")[0];
  const href = skillNotesHref(slug);

  const toc: TocItem[] = [
    ...modules.flatMap((m) =>
      m.lessons
        .filter((l) => l.blocks.length)
        .map((l) => ({ id: l.id, title: l.lecture.title, meta: `Module ${m.number} · ${KIND[l.lecture.kind]}`, views: blocksViews(l.blocks) })),
    ),
    { id: "recap", title: "Key takeaways" },
  ];
  const facts = [
    { icon: ListChecks, value: stats.lessons, label: "text lessons" },
    { icon: Code, value: stats.code, label: `${notes.quickLabel.toLowerCase()} blocks` },
    { icon: Repeat, value: stats.examples, label: "worked examples" },
    { icon: Clock, value: stats.minutes, label: "min read" },
  ];

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LearningResource",
    name: `${name} notes`,
    description: course.subtitle,
    url: `${SITE_URL}${href}`,
    learningResourceType: "Lesson notes",
    educationalLevel: course.level,
    inLanguage: "en",
    isAccessibleForFree: true,
    timeRequired: `PT${stats.minutes}M`,
    isPartOf: { "@type": "Course", name: course.title, url: `${SITE_URL}/skills/${course.slug}` },
    provider: { "@type": "Organization", name: "BTechi", sameAs: SITE_URL },
  };

  return (
    <CheatReader sheet={`skill-${slug}`}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd).replace(/</g, "\\u003c") }} />
      <div className="border-b border-border bg-surface">
        <div className="container-page py-7 md:py-10">
          <Breadcrumbs
            items={[
              { label: "Skills", href: "/skills" },
              ...(category ? [{ label: category.name, href: `/skills?category=${category.slug}` }] : []),
              { label: name, href: `/skills/${slug}` },
              { label: "Notes" },
            ]}
          />
          <div className="flex flex-wrap items-center gap-2">
            <Badge tone="brand">Text course · Free</Badge>
            <Badge>{course.level}</Badge>
          </div>
          <h1 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            {name} <span className="text-muted">notes</span>
          </h1>
          <p className="mt-2 max-w-2xl text-muted">
            {course.subtitle} Every lesson is written out here, so you can learn at reading speed, search the page, and come back to any
            example later.
          </p>
          <ul className="mt-6 grid grid-cols-2 gap-x-4 gap-y-3 sm:flex sm:flex-wrap sm:gap-x-8">
            {facts.map((f) => (
              <li key={f.label} className="flex items-center gap-2.5">
                <span className="grid size-9 shrink-0 place-items-center rounded-lg bg-surface-2">
                  <f.icon className="size-4" aria-hidden />
                </span>
                <span className="leading-tight">
                  <span className="block font-bold tabular-nums">{f.value}</span>
                  <span className="text-xs text-muted">{f.label}</span>
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-6 flex flex-wrap gap-2 print:hidden">
            <BookmarkButton
              withLabel
              item={{ kind: "note", id: `skill-notes-${slug}`, title: `${name} notes`, href, subtitle: "Skill notes" }}
            />
            <ShareButton title={`${name} notes`} path={href} />
            <PrintButton />
          </div>
        </div>
      </div>

      <ReaderToolbar quickLabel={notes.quickLabel} items={toc} />

      <div className="container-page grid gap-8 py-5 md:py-8 lg:grid-cols-[250px_minmax(0,1fr)] print:block">
        <ReaderToc items={toc} />
        <div id="cheat-content" className="cheat-content mx-auto w-full min-w-0 max-w-3xl space-y-8 lg:mx-0">
          {modules.map((m) => {
            const lessons = m.lessons.filter((l) => l.blocks.length);
            if (!lessons.length) return null;
            return (
              <div key={m.number} data-views={blocksViews(lessons.flatMap((l) => l.blocks))} className="space-y-4 sm:space-y-5">
                <h2 className="flex items-baseline gap-3 border-b border-border pb-2 text-[1.05em] font-bold tracking-tight">
                  <span className="font-mono text-[0.8em] text-muted">Module {m.number}</span>
                  {m.title}
                </h2>
                {lessons.map((l) => (
                  <NoteCard
                    key={l.id}
                    id={l.id}
                    title={l.lecture.title}
                    blocks={l.blocks}
                    heading="h3"
                    eyebrow={
                      <>
                        <span className="text-[0.75em] font-bold uppercase tracking-wider text-muted">{KIND[l.lecture.kind]}</span>
                        <span className="text-[0.75em] text-muted">· about {l.lecture.minutes} min</span>
                      </>
                    }
                  />
                ))}
              </div>
            );
          })}

          <section id="recap" aria-labelledby="recap-title" className="card scroll-mt-36 overflow-hidden">
            <header className="border-b border-border bg-brand/15 px-4 py-4 sm:px-6">
              <p className="text-[0.75em] font-bold uppercase tracking-wider">Before you move on</p>
              <h2 id="recap-title" className="text-[1.25em] font-bold tracking-tight">
                Key takeaways
              </h2>
            </header>
            <ol className="divide-y divide-border">
              {notes.recap.map((item, i) => (
                <li key={i} className="flex gap-3.5 px-4 py-3 sm:px-6">
                  <span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-[0.8em] font-bold text-bg tabular-nums">{i + 1}</span>
                  <span className="min-w-0 pt-0.5 leading-relaxed">
                    <Rich text={item} />
                  </span>
                </li>
              ))}
            </ol>
          </section>

          <div className="card p-4 sm:p-6 print:hidden">
            <p className="eyebrow">Keep going</p>
            <h2 className="mt-1 text-[1.15em] font-bold tracking-tight">Save this course to your library</h2>
            <p className="mt-1 text-[0.9em] text-muted">Enrolling keeps the course in your library so you can pick up where you stopped.</p>
            <div className="mt-4 max-w-xs">
              <SkillEnrollButton course={course} />
            </div>
            {course.relatedSubjects.length > 0 && (
              <>
                <p className="mt-6 text-sm font-semibold">These notes also help with</p>
                <div className="mt-2 flex flex-wrap gap-2">
                  {course.relatedSubjects.map(getSubject).map((s) =>
                    s ? (
                      <Link key={s.slug} href={`/subjects/${s.slug}`} className="rounded-lg border border-border px-2.5 py-1.5 text-sm hover:border-fg/30">
                        <BookOpen className="mr-1.5 inline size-3.5 text-muted" aria-hidden />
                        {s.name}
                      </Link>
                    ) : null,
                  )}
                </div>
              </>
            )}
          </div>

          <NotesNav slug={slug} />
          <p className="text-[0.8em] text-muted">
            Written by the BTechi team. Spot a mistake? Use the report button on the course page and we&apos;ll fix it. BTechi is not affiliated
            with IIT Madras.
          </p>
        </div>
      </div>
    </CheatReader>
  );
}

function NotesNav({ slug }: { slug: string }) {
  const i = skillNotes.findIndex((n) => n.skill === slug);
  const [prev, next] = [skillNotes[i - 1], skillNotes[i + 1]].map((n) => (n ? getSkill(n.skill) : undefined));
  return (
    <nav aria-label="Other skill notes" className="grid grid-cols-2 gap-2 print:hidden">
      {prev ? (
        <Link href={skillNotesHref(prev.slug)} className="card card-hover flex items-center gap-2 p-4 text-sm">
          <ArrowLeft className="size-4 shrink-0 text-muted" aria-hidden />
          <span className="min-w-0">
            <span className="block text-xs text-muted">Previous</span>
            <span className="font-semibold">{prev.title.split(":")[0]}</span>
          </span>
        </Link>
      ) : (
        <span />
      )}
      <Link
        href={next ? skillNotesHref(next.slug) : "/skills"}
        className="card card-hover flex items-center justify-end gap-2 p-4 text-right text-sm"
      >
        <span className="min-w-0">
          <span className="block text-xs text-muted">{next ? "Next" : "Back to"}</span>
          <span className="font-semibold">{next ? next.title.split(":")[0] : "All skills"}</span>
        </span>
        <ArrowRight className="size-4 shrink-0 text-muted" aria-hidden />
      </Link>
    </nav>
  );
}
