"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, History, Play, RotateCcw } from "lucide-react";
import { useHydrated, useStore } from "@/lib/store";
import { isSingleSubject, scoreMock } from "@/lib/qualifier";
import type { QualifierMock } from "@/lib/types";
import type { QualifierAttempt } from "@/lib/store";
import { readLive } from "./qualifier-exam";
import { Badge, buttonClass } from "./ui";
import { cn } from "@/lib/utils";

/** Score of an attempt: saved at submission, or worked out from the answer key for older attempts. */
const attemptPercent = (a: QualifierAttempt, key?: QualifierMock) => {
  if (a.percent !== undefined) return a.percent;
  return key ? scoreMock(key, a.responses).average : null;
};

const ACTION_LABELS = ["Start exam", "Resume", "Retake"] as const;

/**
 * Start / Resume / Retake button for a paper, with the best score so far.
 */
export function MockAction({
  slug,
  href,
  single,
  answerKey,
  compact,
  buttonVariant = "primary",
}: {
  slug: string;
  href?: string;
  single?: boolean;
  answerKey?: QualifierMock;
  compact?: boolean;
  buttonVariant?: "primary" | "secondary" | "dark";
}) {
  const hydrated = useHydrated();
  const attempts = useStore((s) => s.qualifierAttempts.filter((a) => a.mockSlug === slug));
  const [inProgress, setInProgress] = useState(false);
  useEffect(() => setInProgress(!!readLive(slug)), [slug]);

  const mock = answerKey;
  const scores = attempts.map((a) => attemptPercent(a, mock)).filter((p): p is number => p !== null);
  const best = hydrated && scores.length ? Math.max(...scores) : null;
  const singleSubject = single ?? (mock ? isSingleSubject(mock) : true);
  const label = inProgress ? "Resume" : attempts.length ? "Retake" : "Start exam";
  const Icon = inProgress ? Play : attempts.length ? RotateCcw : Play;

  return (
    <div className={cn("flex flex-wrap items-center", compact ? "gap-2" : "gap-3")}>
      <Link
        href={href ?? `/qualifier/${slug}`}
        className={buttonClass(inProgress ? "dark" : buttonVariant, compact ? "sm" : "md", compact ? "h-8 px-3 text-xs font-semibold" : "")}
      >
        <Icon className={compact ? "size-3.5" : "size-4"} aria-hidden />{" "}
        {/* Every label sits in the same grid cell, so the button keeps the longest one's width and nothing beside it moves. */}
        <span className="grid">
          {ACTION_LABELS.map((l) => (
            <span key={l} className={cn("col-start-1 row-start-1", l !== label && "invisible")}>
              {l}
            </span>
          ))}
        </span>
      </Link>
      {best !== null && (
        <span className={cn("text-muted tabular-nums", compact ? "text-[11px]" : "text-sm")}>
          Best <b className="text-fg">{best}%</b>
        </span>
      )}
    </div>
  );
}

/** Attempts at qualifier papers. `answerKeys` are the qualifier papers stripped by answerKey(), enough to score each attempt. */
export function QualifierHistory({ answerKeys, className }: { answerKeys: QualifierMock[]; className?: string }) {
  const hydrated = useHydrated();
  const attempts = useStore((s) => s.qualifierAttempts);
  if (!hydrated || attempts.length === 0) return null;
  const getQualifierMock = (slug: string) => answerKeys.find((m) => m.slug === slug);
  return (
    <section className={cn("space-y-5", className)}>
      <h2 className="border-b border-border pb-3 text-base font-bold tracking-tight text-fg">Your attempts</h2>
      <ul className="divide-y divide-border overflow-hidden rounded-xl border border-border bg-surface">
        {attempts.map((a) => {
          const mock = getQualifierMock(a.mockSlug);
          if (!mock) return null;
          const r = scoreMock(mock, a.responses);
          return (
            <li key={a.id}>
              <Link href={`/qualifier/${mock.slug}?attempt=${a.id}`} className="flex flex-wrap items-center justify-between gap-2 px-5 py-4 text-sm transition-colors hover:bg-surface-2/40">
                <span className="font-semibold text-fg">{mock.title}</span>
                <span className="text-[11px] text-muted">
                  {new Date(a.at).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}
                </span>
                <span className="flex items-center gap-2">
                  <span className="hidden gap-1.5 text-[11px] text-muted tabular-nums sm:flex">
                    {r.sections.map((s) => (
                      <span key={s.subjectSlug} className={s.passed ? "" : "text-red"}>
                        {s.short} {s.percent}%
                      </span>
                    ))}
                  </span>
                  <Badge tone={r.qualified ? "green" : "amber"}>{r.qualified ? (isSingleSubject(mock) ? "Cleared" : "Qualified") : "Not yet"} · {r.average}%</Badge>
                  <ArrowRight className="size-3 text-muted" aria-hidden />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** Recent previous-year paper attempts for the PYQ pages, from what was saved at submission (the papers aren't in the client bundle). */
export function PyqHistory() {
  const hydrated = useHydrated();
  const attempts = useStore((s) => s.qualifierAttempts.filter((a) => a.href?.startsWith("/pyqs/")));
  if (!hydrated || attempts.length === 0) return null;
  return (
    <section className="container-page pb-14 md:pb-20">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight md:text-2xl">
        <History className="size-5 text-muted" aria-hidden /> Your attempts
      </h2>
      <ul className="card divide-y divide-border">
        {attempts.map((a) => (
          <li key={a.id}>
            <Link href={`${a.href}?attempt=${a.id}`} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3.5 transition-colors hover:bg-surface-2">
              <span className="font-semibold">{a.title}</span>
              <span className="text-sm text-muted">
                {new Date(a.at).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}
              </span>
              <span className="ml-auto flex items-center gap-3">
                {a.percent !== undefined && <Badge tone={a.percent >= 40 ? "green" : "amber"}>{a.percent}%</Badge>}
                <ArrowRight className="size-4 text-muted" aria-hidden />
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
