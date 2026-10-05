"use client";

import Link from "next/link";
import { useEffect } from "react";
import { ArrowRight, CheckCircle2, Circle } from "lucide-react";
import { actions, useHydrated, useStore } from "@/lib/store";
import { allTopics, findTopic, getSubject, subjects, topicKey } from "@/lib/content";
import type { Subject } from "@/lib/types";
import { ProgressBar, buttonClass } from "./ui";
import { useToast } from "./toast";
import { cn } from "@/lib/utils";

export function useSubjectProgress(subject: Subject) {
  const completed = useStore((s) => s.completed);
  const topics = allTopics(subject);
  const done = topics.filter(({ topic }) => completed.includes(topicKey(subject.slug, topic.slug))).length;
  return { done, total: topics.length, percent: topics.length ? (done / topics.length) * 100 : 0 };
}

export function SubjectProgressBar({ subject, className }: { subject: Subject; className?: string }) {
  const { percent } = useSubjectProgress(subject);
  if (percent === 0) return null;
  return (
    <div className={cn("flex items-center gap-3", className)}>
      <ProgressBar value={percent} label={`${subject.name} progress`} />
      <span className="text-xs font-semibold tabular-nums">{Math.round(percent)}%</span>
    </div>
  );
}

export function SubjectProgressPanel({ subject }: { subject: Subject }) {
  const { done, total, percent } = useSubjectProgress(subject);
  return (
    <div className="card p-5">
      <div className="mb-3 flex items-baseline justify-between">
        <p className="text-sm font-semibold">Your progress</p>
        <p className="text-2xl font-bold tabular-nums">{Math.round(percent)}%</p>
      </div>
      <ProgressBar value={percent} label={`${subject.name} progress`} />
      <p className="mt-2 text-xs text-muted">
        {done} of {total} topics completed
      </p>
    </div>
  );
}

export function TopicStatus({ subjectSlug, topicSlug }: { subjectSlug: string; topicSlug: string }) {
  const done = useStore((s) => s.completed.includes(topicKey(subjectSlug, topicSlug)));
  return done ? (
    <CheckCircle2 className="size-5 shrink-0 text-green" aria-label="Completed" />
  ) : (
    <Circle className="size-5 shrink-0 text-border" aria-label="Not started" />
  );
}

export function MarkCompleteButton({ subjectSlug, topicSlug }: { subjectSlug: string; topicSlug: string }) {
  const key = topicKey(subjectSlug, topicSlug);
  const done = useStore((s) => s.completed.includes(key));
  const toast = useToast();
  return (
    <button
      type="button"
      onClick={() => {
        actions.toggleComplete(key);
        toast(done ? "Marked as not started" : "Topic completed. Nice work!");
      }}
      aria-pressed={done}
      className={buttonClass(done ? "secondary" : "primary", "md")}
    >
      {done ? <CheckCircle2 className="size-4 text-green" aria-hidden /> : <Circle className="size-4" aria-hidden />}
      {done ? "Completed" : "Mark as complete"}
    </button>
  );
}

/** Records that the student opened a subject/topic, for "Continue learning". */
export function VisitTracker({ subjectSlug, topicSlug }: { subjectSlug: string; topicSlug?: string }) {
  useEffect(() => {
    actions.recordVisit(subjectSlug, topicSlug);
  }, [subjectSlug, topicSlug]);
  return null;
}

function ContinueRow({ subject, topicSlug }: { subject: Subject; topicSlug?: string }) {
  const { percent } = useSubjectProgress(subject);
  const found = topicSlug ? findTopic(subject, topicSlug) : undefined;
  const href = found ? `/subjects/${subject.slug}/${topicSlug}` : `/subjects/${subject.slug}`;
  return (
    <Link href={href} className="card card-hover group flex items-center gap-4 p-4">
      <div className="min-w-0 flex-1">
        <p className="font-semibold">{subject.name}</p>
        <p className="truncate text-sm text-muted">{found ? `Week ${found.unit.number} · ${found.topic.title}` : "Overview"}</p>
        <div className="mt-3 flex items-center gap-3">
          <ProgressBar value={percent} label={`${subject.name} progress`} />
          <span className="w-9 text-right text-xs font-semibold tabular-nums">{Math.round(percent)}%</span>
        </div>
      </div>
      <ArrowRight className="size-5 shrink-0 text-muted transition-transform group-hover:translate-x-0.5" aria-hidden />
    </Link>
  );
}

/** Homepage + dashboard "Continue learning" (PRD §24). */
export function ContinueLearning({ limit = 3 }: { limit?: number }) {
  const hydrated = useHydrated();
  const visits = useStore((s) => s.visits);
  const seen = new Set<string>();
  const recent = visits.filter((v) => (seen.has(v.subjectSlug) ? false : (seen.add(v.subjectSlug), true))).slice(0, limit);

  if (!hydrated)
    return (
      <div className="grid gap-3 md:grid-cols-3">
        {Array.from({ length: limit }).map((_, i) => (
          <div key={i} className="skeleton h-[98px]" />
        ))}
      </div>
    );

  if (recent.length === 0) {
    const starters = subjects.filter((s) => s.level === "foundation").slice(0, limit);
    return (
      <div>
        <p className="mb-3 text-sm text-muted">Nothing started yet. Begin with the Foundation Level:</p>
        <div className="grid gap-3 md:grid-cols-3">
          {starters.map((s) => (
            <ContinueRow key={s.slug} subject={s} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="grid gap-3 md:grid-cols-3">
      {recent.map((v) => {
        const s = getSubject(v.subjectSlug);
        return s ? <ContinueRow key={v.subjectSlug} subject={s} topicSlug={v.topicSlug} /> : null;
      })}
    </div>
  );
}

