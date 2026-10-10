"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, History, Play, RotateCcw } from "lucide-react";
import { useHydrated, useStore } from "@/lib/store";
import { getQualifierMock, isSingleSubject, scoreMock } from "@/lib/qualifier";
import { readLive } from "./qualifier-exam";
import { Badge, buttonClass } from "./ui";

/** Start / Resume / Retake button for a mock, with the best average so far. */
export function MockAction({ slug }: { slug: string }) {
  const hydrated = useHydrated();
  const attempts = useStore((s) => s.qualifierAttempts.filter((a) => a.mockSlug === slug));
  const [inProgress, setInProgress] = useState(false);
  useEffect(() => setInProgress(!!readLive(slug)), [slug]);

  const mock = getQualifierMock(slug)!;
  const best = hydrated && attempts.length ? Math.max(...attempts.map((a) => scoreMock(mock, a.responses).average)) : null;
  const label = inProgress ? "Resume exam" : attempts.length ? "Retake" : "Start exam";
  const Icon = inProgress ? Play : attempts.length ? RotateCcw : Play;

  return (
    <div className="flex flex-wrap items-center gap-3">
      <Link href={`/qualifier/${slug}`} className={buttonClass(inProgress ? "dark" : "primary")}>
        <Icon className="size-4" aria-hidden /> {label}
      </Link>
      {best !== null && (
        <span className="text-sm text-muted">
          Best {isSingleSubject(mock) ? "score" : "average"} <b className="text-fg tabular-nums">{best}%</b> · {attempts.length} {attempts.length === 1 ? "attempt" : "attempts"}
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
