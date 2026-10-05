import Link from "next/link";
import { ArrowRight, ArrowUpRight, Award, Eye, FileText, GraduationCap, Layers, PenLine, type LucideIcon } from "lucide-react";
import type { Book, Level, Note, Program, Pyq, Question, Subject } from "@/lib/types";
import { hasContent, pyqTitle, subjectContext, subjectName, subjectPlacement, subjectStats, subjectsForLevel, unitLabel } from "@/lib/content";
import { accentStyles, cn, formatNumber, formatSize } from "@/lib/utils";
import { Badge, QualityBadge, buttonClass } from "./ui";
import { BookmarkButton, DownloadButton } from "./resource-actions";
import { SubjectProgressBar } from "./progress";

/* ───────────── Level ───────────── */

const levelIcons: Record<string, LucideIcon> = { foundation: Layers, diploma: Award, degree: GraduationCap };

/** Foundation / Diploma / BS Degree card with credits and the exit award. */
export function LevelCard({ programSlug, level, step }: { programSlug: string; level: Level; step: number }) {
  const a = accentStyles[level.accent];
  const Icon = levelIcons[level.slug] ?? GraduationCap;
  const count = subjectsForLevel(programSlug, level.slug).length;
  return (
    <Link href={`/programs/${programSlug}/${level.slug}`} className="card card-hover group relative flex flex-col overflow-hidden p-5">
      <span className={cn("absolute inset-x-0 top-0 h-1", a.bar)} aria-hidden />
      <div className="mb-5 flex items-center justify-between">
        <span className={cn("grid size-11 place-items-center rounded-xl", a.soft, a.text)}>
          <Icon className="size-5" aria-hidden />
        </span>
        <span className="text-xs font-semibold text-muted">Level {step}</span>
      </div>
      <h3 className="text-lg font-bold tracking-tight">{level.name}</h3>
      <p className="text-sm text-muted">
        {level.courses} · {level.credits} credits
      </p>
      <p className="mt-4 rounded-lg bg-surface-2 px-3 py-2 text-xs">
        <span className="text-muted">Exit with </span>
        <span className="font-semibold">{level.exit}</span>
      </p>
      <div className="mt-auto flex items-center justify-between pt-5 text-sm">
        <span className="text-muted">{count} courses listed</span>
        <span className="inline-flex items-center gap-1 font-semibold">
          Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

/* ───────────── Program ───────────── */

export function ProgramCard({ program }: { program: Program }) {
  const a = accentStyles[program.accent];
  return (
    <Link href={`/programs/${program.slug}`} className="card card-hover group relative flex flex-col overflow-hidden p-5">
      <span className={cn("absolute inset-x-0 top-0 h-1", a.bar)} aria-hidden />
      <span className={cn("mb-6 grid size-11 place-items-center rounded-xl", a.soft, a.text)}>
        <GraduationCap className="size-5" aria-hidden />
      </span>
      <h3 className="text-lg font-bold tracking-tight">{program.name}</h3>
      <p className="text-sm text-muted">{program.degree}</p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-sm">
        <span className="text-muted">
          {program.levels.length} levels · {program.totalCredits} credits
        </span>
        <span className="inline-flex items-center gap-1 font-semibold">
          Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

/* ───────────── Subject (course) ───────────── */

export function SubjectCard({ subject, showLevel = true }: { subject: Subject; showLevel?: boolean }) {
  const s = subjectStats(subject);
  const { level } = subjectPlacement(subject);
  const ready = hasContent(subject);
  return (
    <Link href={`/subjects/${subject.slug}`} className="card card-hover group flex flex-col p-5">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        {subject.code ? <Badge className="font-mono tracking-tight">{subject.code}</Badge> : <Badge>Elective</Badge>}
        {subject.kind === "project" && <Badge tone="teal">Project</Badge>}
        {showLevel && <span className="text-xs text-muted">{level.short}</span>}
        <span className="ml-auto text-xs text-muted">{subject.credits} credits</span>
      </div>
      <h3 className="font-bold tracking-tight">{subject.name}</h3>
      {subject.description && <p className="mt-1 line-clamp-2 text-sm text-muted">{subject.description}</p>}
      <div className="mt-auto pt-4">
        {ready ? (
          <p className="text-xs text-muted">
            <span className="font-semibold text-fg">{s.units}</span> weeks · <span className="font-semibold text-fg">{s.notes}</span> notes ·{" "}
            <span className="font-semibold text-fg">{s.questions}</span> Qs
          </p>
        ) : (
          <p className="inline-flex items-center gap-1.5 text-xs text-muted">
            <span className="size-1.5 rounded-full bg-brand" aria-hidden /> Content coming soon
          </p>
        )}
        <SubjectProgressBar subject={subject} className="mt-3" />
      </div>
    </Link>
  );
}

/* ───────────── Note (list row) ───────────── */

export function NoteCard({ note, showSubject = false }: { note: Note; showSubject?: boolean }) {
  return (
    <article className="card flex flex-col gap-4 p-4 sm:flex-row sm:items-center">
      <div className="flex min-w-0 flex-1 items-start gap-3">
        <span className="grid size-10 shrink-0 place-items-center rounded-lg bg-teal/10 text-teal">
          <FileText className="size-5" aria-hidden />
        </span>
        <div className="min-w-0">
          <div className="flex flex-wrap items-center gap-2">
            <h3 className="font-semibold">
              <Link href={`/notes/${note.id}`} className="hover:underline">
                {note.title}
              </Link>
            </h3>
            <QualityBadge quality={note.quality} />
          </div>
          <p className="mt-0.5 text-sm text-muted">
            {showSubject && <>{subjectName(note.subjectSlug)} · </>}
            {unitLabel(note.subjectSlug, note.unitId)} · {note.kind} · PDF · {note.pages} pages · {formatSize(note.sizeKB)}
          </p>
        </div>
      </div>
      <div className="flex items-center gap-2 sm:shrink-0">
        <Link href={`/notes/${note.id}`} className={buttonClass("secondary", "sm")}>
          <Eye className="size-4" aria-hidden /> View
        </Link>
        <DownloadButton noteId={note.id} title={note.title} fileUrl={note.fileUrl} />
        <BookmarkButton
          item={{ kind: "note", id: note.id, title: note.title, href: `/notes/${note.id}`, subtitle: subjectName(note.subjectSlug) }}
          className="ml-auto sm:ml-0"
        />
      </div>
    </article>
  );
}

/* ───────────── Book ───────────── */

const coverTints = ["bg-[#111827]", "bg-[#1e3a8a]", "bg-[#3b0764]", "bg-[#064e3b]", "bg-[#7c2d12]", "bg-[#0f172a]"];

export function BookCover({ book, className }: { book: Book; className?: string }) {
  const tint = coverTints[book.title.length % coverTints.length];
  return (
    <div
      className={cn("relative flex aspect-[3/4] flex-col justify-between overflow-hidden rounded-lg p-3 text-white shadow-sm", tint, className)}
      aria-hidden
    >
      <span className="absolute inset-y-0 left-0 w-2 bg-black/25" />
      <span className="h-1 w-8 rounded-full bg-brand" />
      <div>
        <p className="line-clamp-3 text-sm font-bold leading-tight">{book.title}</p>
        <p className="mt-1 line-clamp-1 text-[10px] opacity-70">{book.authors[0]}</p>
      </div>
    </div>
  );
}

export function BookCard({ book }: { book: Book }) {
  return (
    <article className="card card-hover flex gap-4 p-4">
      <BookCover book={book} className="w-24 shrink-0" />
      <div className="flex min-w-0 flex-col">
        <div className="flex items-start gap-2">
          <h3 className="font-semibold leading-snug">
            <Link href={`/books/${book.slug}`} className="hover:underline">
              {book.title}
            </Link>
          </h3>
          <BookmarkButton
            item={{ kind: "book", id: book.slug, title: book.title, href: `/books/${book.slug}`, subtitle: book.authors.join(", ") }}
            className="-mr-1 -mt-1 ml-auto shrink-0"
          />
        </div>
        <p className="text-sm text-muted">{book.authors.join(", ")}</p>
        <p className="mt-2 line-clamp-2 text-sm">{book.why}</p>
        <div className="mt-auto flex flex-wrap items-center gap-2 pt-3">
          <Badge tone="blue">{book.recommendedFor}</Badge>
          {book.free && <Badge tone="green">Free &amp; legal</Badge>}
          <Link href={`/books/${book.slug}`} className="ml-auto text-sm font-medium hover:underline">
            View details
          </Link>
        </div>
      </div>
    </article>
  );
}

/* ───────────── PYQ ───────────── */

export function PyqCard({ pyq }: { pyq: Pyq }) {
  return (
    <article className="card flex flex-col p-5">
      <div className="flex items-start justify-between">
        <p className="text-3xl font-extrabold tracking-tight tabular-nums">
          {pyq.year} <span className="text-sm font-semibold text-muted">{pyq.term}</span>
        </p>
        <Badge tone={pyq.exam === "End Term" ? "purple" : "blue"}>{pyq.exam}</Badge>
      </div>
      <h3 className="mt-2 font-semibold">{subjectName(pyq.subjectSlug)}</h3>
      <p className="text-sm text-muted">
        {subjectContext(pyq.subjectSlug)} · {pyq.marks} marks · {pyq.durationMin / 60} h
      </p>
      <div className="mt-5 flex flex-wrap gap-2">
        <Link href={`/pyqs/${pyq.id}`} className={buttonClass("secondary", "sm")}>
          <Eye className="size-4" aria-hidden /> View paper
        </Link>
        <DownloadButton noteId={pyq.id} title={pyqTitle(pyq)} fileUrl={pyq.fileUrl} />
        <Link href={`/practice/session?pyq=${pyq.id}`} className={buttonClass("ghost", "sm", "text-purple")}>
          <PenLine className="size-4" aria-hidden /> Practice
        </Link>
      </div>
    </article>
  );
}

/* ───────────── Question preview ───────────── */

export const difficultyTone = { Easy: "green", Medium: "amber", Hard: "red" } as const;

export function QuestionPreviewCard({ question }: { question: Question }) {
  return (
    <Link
      href={`/practice/session?subject=${question.subjectSlug}&topic=${question.topicSlug}`}
      className="card card-hover group flex flex-col p-5"
    >
      <div className="mb-3 flex items-center gap-2">
        <Badge tone="purple">{subjectName(question.subjectSlug)}</Badge>
        <Badge tone={difficultyTone[question.difficulty]}>{question.difficulty}</Badge>
      </div>
      <p className="line-clamp-3 font-medium">{question.prompt}</p>
      <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold text-purple">
        Try it <ArrowUpRight className="size-4" aria-hidden />
      </span>
    </Link>
  );
}

export function DownloadCount({ n }: { n: number }) {
  return <span className="tabular-nums">{formatNumber(n)}</span>;
}
