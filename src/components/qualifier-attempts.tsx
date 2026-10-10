"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, History, Play, RotateCcw } from "lucide-react";
import { useHydrated, useStore } from "@/lib/store";
import { getQualifierMock, isSingleSubject, scoreMock } from "@/lib/qualifier";
import type { QualifierAttempt } from "@/lib/store";
import { readLive } from "./qualifier-exam";
import { Badge, buttonClass } from "./ui";

/** Score of an attempt: saved at submission, or worked out from the paper for older attempts. */
const attemptPercent = (a: QualifierAttempt) => {
  if (a.percent !== undefined) return a.percent;
  const mock = getQualifierMock(a.mockSlug);
  return mock ? scoreMock(mock, a.responses).average : null;
};

/**
 * Start / Resume / Retake button for a paper, with the best score so far.
 * End Term papers aren't in the client bundle, so they pass `href` and `single` instead of being looked up.
 */
export function MockAction({ slug, href, single }: { slug: string; href?: string; single?: boolean }) {
  const hydrated = useHydrated();
  const attempts = useStore((s) => s.qualifierAttempts.filter((a) => a.mockSlug === slug));
  const [inProgress, setInProgress] = useState(false);
  useEffect(() => setInProgress(!!readLive(slug)), [slug]);

  const mock = getQualifierMock(slug);
  const scores = attempts.map(attemptPercent).filter((p): p is number => p !== null);
  const best = hydrated && scores.length ? Math.max(...scores) : null;
  const singleSubject = single ?? (mock ? isSingleSubject(mock) : true);
  const label = inProgress ? "Resume exam" : attempts.length ? "Retake" : "Start exam";
  const Icon = inProgress ? Play : attempts.length ? RotateCcw : Play;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link href={href ?? `/qualifier/${slug}`} className={buttonClass(inProgress ? "dark" : "primary")}>
        <Icon className="size-4" aria-hidden /> {label}
      </Link>
      {best !== null && (
        <span className="text-sm text-muted">
          Best {singleSubject ? "score" : "average"} <b className="text-fg tabular-nums">{best}%</b> · {attempts.length} {attempts.length === 1 ? "attempt" : "attempts"}
        </span>
      )}
    </div>
  );
}

export function QualifierHistory() {
  const hydrated = useHydrated();
  const attempts = useStore((s) => s.qualifierAttempts);
  if (!hydrated || attempts.length === 0) return null;
  return (
    <section className="container-page pb-14 md:pb-20">
      <h2 className="mb-4 flex items-center gap-2 text-xl font-bold tracking-tight md:text-2xl">
        <History className="size-5 text-muted" aria-hidden /> Your attempts
      </h2>
      <ul className="card divide-y divide-border">
        {attempts.map((a) => {
          const mock = getQualifierMock(a.mockSlug);
          if (!mock) return null;
          const r = scoreMock(mock, a.responses);
          return (
            <li key={a.id}>
              <Link href={`/qualifier/${mock.slug}?attempt=${a.id}`} className="flex flex-wrap items-center gap-x-4 gap-y-1 px-5 py-3.5 transition-colors hover:bg-surface-2">
                <span className="font-semibold">{mock.title}</span>
                <span className="text-sm text-muted">
                  {new Date(a.at).toLocaleString("en-IN", { day: "numeric", month: "short", hour: "numeric", minute: "2-digit" })}
                </span>
                <span className="ml-auto flex items-center gap-3">
                  <span className="hidden gap-1.5 text-xs text-muted tabular-nums sm:flex">
                    {r.sections.map((s) => (
                      <span key={s.subjectSlug} className={s.passed ? "" : "text-red"}>
                        {s.short} {s.percent}%
                      </span>
                    ))}
                  </span>
                  <Badge tone={r.qualified ? "green" : "amber"}>{r.qualified ? (isSingleSubject(mock) ? "Cleared" : "Qualified") : "Not yet"} · {r.average}%</Badge>
                  <ArrowRight className="size-4 text-muted" aria-hidden />
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

/** Recent End Term PYQ attempts, from what was saved at submission (the papers aren't in the client bundle). */
export function EndTermHistory() {
  const hydrated = useHydrated();
  const attempts = useStore((s) => s.qualifierAttempts.filter((a) => a.href?.startsWith("/pyqs/end-term/")));
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
