import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  Briefcase,
  Eye,
  FileText,
  GraduationCap,
  Landmark,
  PenLine,
  type LucideIcon,
} from "lucide-react";
import type { Book, Note, Program, Pyq, Question, Subject } from "@/lib/types";
import { pyqTitle, subjectContext, subjectName, subjectStats, subjectsForProgram, unitLabel } from "@/lib/content";
import { accentStyles, cn, formatNumber, formatSize } from "@/lib/utils";
import { Badge, QualityBadge, buttonClass } from "./ui";
import { BookmarkButton, DownloadButton } from "./resource-actions";
import { SubjectProgressBar } from "./progress";

export const programIcons: Record<string, LucideIcon> = {
  "iit-mandi": GraduationCap,
  ba: Landmark,
  management: Briefcase,
  "data-science": BarChart3,
};

/* ───────────── Program ───────────── */

export function ProgramCard({ program }: { program: Program }) {
  const a = accentStyles[program.accent];
  const Icon = programIcons[program.slug] ?? GraduationCap;
  const count = subjectsForProgram(program.slug).length;
  return (
    <Link href={`/programs/${program.slug}`} className="card card-hover group relative flex flex-col overflow-hidden p-5">
      <span className={cn("absolute inset-x-0 top-0 h-1", a.bar)} aria-hidden />
      <span className={cn("mb-6 grid size-11 place-items-center rounded-xl", a.soft, a.text)}>
        <Icon className="size-5" aria-hidden />
      </span>
      <h3 className="text-lg font-bold tracking-tight">{program.name}</h3>
      <p className="text-sm text-muted">{program.tagline}</p>
      <div className="mt-5 flex flex-wrap items-center justify-between gap-x-3 gap-y-2 text-sm">
        <span className="text-muted">
          {program.semesters} semesters · {count} subjects
        </span>
        <span className="inline-flex items-center gap-1 font-semibold">
          Explore <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
        </span>
      </div>
    </Link>
  );
}

/* ───────────── Subject ───────────── */

export function SubjectCard({ subject, showProgram = true }: { subject: Subject; showProgram?: boolean }) {
  const s = subjectStats(subject);
  return (
    <Link href={`/subjects/${subject.slug}`} className="card card-hover group flex flex-col p-5">
      <div className="mb-3 flex items-center gap-2">
        <Badge>Sem {subject.semester}</Badge>
        {showProgram && <span className="text-xs text-muted">{subjectContext(subject.slug).split(" · ")[1]}</span>}
        <span className="ml-auto text-xs text-muted">{subject.credits} credits</span>
      </div>
      <h3 className="font-bold tracking-tight">{subject.name}</h3>
      <p className="mt-1 line-clamp-2 text-sm text-muted">{subject.description}</p>
      <dl className="mt-4 flex gap-4 text-xs text-muted">
        <div>
          <dt className="sr-only">Units</dt>
          <dd>
            <span className="font-semibold text-fg">{s.units}</span> units
          </dd>
        </div>
        <div>
          <dt className="sr-only">Topics</dt>
          <dd>
            <span className="font-semibold text-fg">{s.topics}</span> topics
          </dd>
        </div>
        <div>
          <dt className="sr-only">Notes</dt>
          <dd>
            <span className="font-semibold text-fg">{s.notes}</span> notes
          </dd>
        </div>
        <div>
          <dt className="sr-only">Questions</dt>
          <dd>
            <span className="font-semibold text-fg">{s.questions}</span> Qs
          </dd>
        </div>
      </dl>
      <SubjectProgressBar subject={subject} className="mt-4" />
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
        <p className="text-3xl font-extrabold tracking-tight tabular-nums">{pyq.year}</p>
        <Badge tone={pyq.exam === "End-sem" ? "purple" : "blue"}>{pyq.exam}</Badge>
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
