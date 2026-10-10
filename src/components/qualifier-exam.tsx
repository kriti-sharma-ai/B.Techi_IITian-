"use client";

// Full-screen exam portal modelled on the IITM BS qualifier / TCS iON
// interface: instructions + declaration, a server-style countdown, section
// tabs, a question palette with the five standard statuses, and answers that
// only count once saved with "Save & Next" or "Mark for Review & Next".

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { AlertTriangle, Calculator as CalcIcon, Check, Clock, Delete, Info, LayoutGrid, Maximize, User, X } from "lucide-react";
import { actions, useHydrated, useStore } from "@/lib/store";
import { formatClock, hasResponse, mockMarks, mockQuestions, paperHref, scoreMock, type QualifierResponse } from "@/lib/qualifier";
import type { QualifierMock, QualifierQuestion } from "@/lib/types";
import { cn } from "@/lib/utils";
import { QuestionPassage, QuestionPrompt, RichText } from "./qualifier-text";

/** nv: not visited · na: not answered · a: answered · m: marked · am: answered & marked */
type Status = "nv" | "na" | "a" | "m" | "am";

type Live = {
  startedAt: number;
  responses: Record<string, QualifierResponse>;
  status: Record<string, Status>;
  current: number;
  tabSwitches: number;
};

const liveKey = (slug: string) => `btechi:qualifier-live:${slug}`;

export function readLive(slug: string): Live | null {
  try {
    const raw = window.localStorage.getItem(liveKey(slug));
    return raw ? (JSON.parse(raw) as Live) : null;
  } catch {
    return null;
  }
}

function writeLive(slug: string, live: Live | null) {
  try {
    if (live) window.localStorage.setItem(liveKey(slug), JSON.stringify(live));
    else window.localStorage.removeItem(liveKey(slug));
  } catch {
    // Storage blocked — the exam still runs, it just can't resume after a refresh.
  }
}

const TYPE_LABEL: Record<QualifierQuestion["type"], string> = {
  mcq: "Multiple Choice (single correct)",
  multi: "Multiple Select (one or more correct)",
  numerical: "Numerical Answer Type",
  text: "Short Answer (type the exact answer)",
};

const STATUS_META: Record<Status, { label: string; chip: string }> = {
  nv: { label: "Not Visited", chip: "border border-border bg-surface-2 text-fg rounded-md" },
  na: { label: "Not Answered", chip: "bg-red text-bg rounded-b-xl rounded-t-md" },
  a: { label: "Answered", chip: "bg-green text-bg rounded-t-xl rounded-b-md" },
  m: { label: "Marked for Review", chip: "bg-purple text-bg rounded-full" },
  am: { label: "Answered & Marked for Review (will be evaluated)", chip: "bg-purple text-bg rounded-full" },
};

function StatusChip({ status, children, className }: { status: Status; children: React.ReactNode; className?: string }) {
  return (
    <span className={cn("relative grid size-9 shrink-0 place-items-center text-sm font-semibold tabular-nums", STATUS_META[status].chip, className)}>
      {children}
      {status === "am" && (
        <span className="absolute -bottom-0.5 -right-0.5 grid size-3.5 place-items-center rounded-full bg-green text-bg ring-2 ring-surface">
          <Check className="size-2.5" strokeWidth={4} aria-hidden />
        </span>
      )}
    </span>
  );
}

/* ───────────── Entry ───────────── */

export function QualifierExam({ mock }: { mock: QualifierMock }) {
  const hydrated = useHydrated();
  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, []);
  return (
    <div className="fixed inset-0 z-[70] flex flex-col bg-bg text-fg">
      {hydrated ? <ExamFlow mock={mock} /> : <div className="m-auto size-8 animate-spin rounded-full border-2 border-border border-t-fg" />}
    </div>
  );
}

function ExamFlow({ mock }: { mock: QualifierMock }) {
  const [live, setLive] = useState<Live | null>(() => readLive(mock.slug));
  const name = useStore((s) => s.user?.name) || "Candidate";

  if (!live)
    return (
      <Instructions
        mock={mock}
        name={name}
        onBegin={() => {
          const first = mock.sections[0].questions[0].id;
          const fresh: Live = { startedAt: Date.now(), responses: {}, status: { [first]: "na" }, current: 0, tabSwitches: 0 };
          writeLive(mock.slug, fresh);
          document.documentElement.requestFullscreen?.().catch(() => {});
          setLive(fresh);
        }}
      />
    );
  return <ExamRoom mock={mock} name={name} initial={live} />;
}

/* ───────────── Instructions ───────────── */

function Legend({ counts }: { counts?: Record<Status, number> }) {
  return (
    <ul className="grid grid-cols-2 gap-x-3 gap-y-2.5 text-xs">
      {(Object.keys(STATUS_META) as Status[]).map((s) => (
        <li key={s} className={cn("flex items-center gap-2", s === "am" && "col-span-2")}>
          <StatusChip status={s} className="size-7 text-xs">
            {counts ? counts[s] : ""}
          </StatusChip>
          <span className="text-muted">{STATUS_META[s].label}</span>
        </li>
      ))}
    </ul>
  );
}

function Instructions({ mock, name, onBegin }: { mock: QualifierMock; name: string; onBegin: () => void }) {
  const [agreed, setAgreed] = useState(false);
  const total = mockQuestions(mock).length;
  return (
    <>
      <PortalHeader mock={mock} />
      <div className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-4xl px-4 py-8 md:py-10">
          <p className="eyebrow mb-2">General instructions · Read carefully</p>
          <h1 className="text-2xl font-bold tracking-tight md:text-3xl">{mock.title}</h1>
          <p className="mt-1 text-muted">
            {mock.sections.map((s) => s.title).join(" · ")}
            {mock.sections.length > 1 && " in one sitting"}
          </p>

          <div className="card mt-6 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="border-b border-border bg-surface-2 text-left text-xs uppercase tracking-wide text-muted">
                <tr>
                  <th className="px-4 py-2.5 font-semibold">Section</th>
                  <th className="px-4 py-2.5 text-right font-semibold">Questions</th>
                  <th className="px-4 py-2.5 text-right font-semibold">Marks</th>
                </tr>
              </thead>
              <tbody>
                {mock.sections.map((s) => (
                  <tr key={s.subjectSlug} className="border-b border-border last:border-0">
                    <td className="px-4 py-2.5 font-medium">{s.title}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums">{s.questions.length}</td>
                    <td className="px-4 py-2.5 text-right tabular-nums">{s.questions.reduce((n, q) => n + q.marks, 0)}</td>
                  </tr>
                ))}
                <tr className="bg-surface-2 font-semibold">
                  <td className="px-4 py-2.5">Total · {mock.durationMin} minutes</td>
                  <td className="px-4 py-2.5 text-right tabular-nums">{total}</td>
                  <td className="px-4 py-2.5 text-right tabular-nums">{mockMarks(mock)}</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="mt-8 grid gap-8 md:grid-cols-[1fr_260px]">
            <ol className="list-decimal space-y-3 pl-5 text-sm leading-relaxed marker:font-semibold marker:text-muted">
              <li>
                The countdown timer at the top right shows the time left. It keeps running even if you refresh or close the page. <b>When it reaches zero the exam ends
                and is submitted automatically.</b> You do not need to submit it yourself.
              </li>
              <li>The palette on the right shows the status of every question in the current section, using the symbols on the right.</li>
              <li>
                <b>Your answer is saved only when you click &ldquo;Save &amp; Next&rdquo; or &ldquo;Mark for Review &amp; Next&rdquo;.</b> If you move to
                another question from the palette without saving, your selection is discarded.
              </li>
              <li>Questions you have answered and marked for review will be evaluated. Questions marked for review with no answer will not.</li>
              {mock.sections.length > 1 && (
                <li>Use the section tabs at the top to move between Maths I, Stats I, CT and English I. You can switch sections at any time.</li>
              )}
              <li>
                Question types: <b>MCQ</b> (one correct option), <b>MSQ</b> (one or more correct options, all must be selected) and{" "}
                <b>NAT</b> (type a number with the on-screen keypad or your keyboard)
                {mockQuestions(mock).some((q) => q.type === "text") && (
                  <>
                    , plus <b>SA</b> (type the exact word or phrase)
                  </>
                )}
                .
              </li>
              <li>There is <b>no negative marking</b>. Use the on-screen calculator from the top bar for working.</li>
              {mock.sections.length > 1 ? (
                <li>
                  To qualify you need <b>at least 40% in each course</b> and <b>at least 50% on average</b> across the four (general category; relaxed
                  for reserved categories).
                </li>
              ) : mock.endTerm ? (
                <li>
                  This is a previous-year End Term paper with the official answer key. Figures, code and formulas appear exactly as in the paper.
                </li>
              ) : (
                <li>
                  This is a previous-year paper with the official answer key. Aim for <b>at least 40%</b>, the per-course cutoff in the qualifier.
                </li>
              )}
              <li>The exam runs in full screen. Leaving the exam tab is recorded and shown on your result.</li>
            </ol>
            <div className="card h-fit p-4">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-muted">Palette symbols</p>
              <Legend />
            </div>
          </div>

          <div className="card mt-8 p-5">
            <label className="flex cursor-pointer items-start gap-3 text-sm leading-relaxed">
              <input
                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
                className="mt-0.5 size-4 shrink-0 accent-[var(--fg)]"
              />
              <span>
                I, <b>{name}</b>, have read and understood the instructions. I will not use any unfair means, and I am ready to take this exam under
                timed conditions.
              </span>
            </label>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                disabled={!agreed}
                onClick={onBegin}
                className="inline-flex h-12 items-center gap-2 rounded-xl bg-brand px-6 font-semibold text-brand-ink transition-[filter] hover:brightness-95 disabled:pointer-events-none disabled:opacity-40"
              >
                I am ready to begin
              </button>
              <Link href={mock.endTerm ? "/pyqs/end-term" : "/qualifier"} className="text-sm font-medium text-muted hover:text-fg">
                Not now, back to {mock.endTerm ? "End Term PYQs" : "Qualifier Pack"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

function PortalHeader({ mock, children }: { mock: QualifierMock; children?: React.ReactNode }) {
  return (
    <header className="flex h-14 shrink-0 items-center gap-3 bg-ink px-3 text-bg md:px-5">
      <span className="grid size-8 place-items-center rounded-lg bg-brand text-sm font-black text-brand-ink">B</span>
      <div className="min-w-0 flex-1 leading-tight">
        <p className="truncate text-sm font-bold">{mock.title}</p>
        <p className="truncate text-[11px] opacity-70">BTechi Exam Portal · IITM BS {mock.endTerm ? "End Term" : "Qualifier"} format</p>
      </div>
      {children}
    </header>
  );
}

/* ───────────── Exam room ───────────── */

function ExamRoom({ mock, name, initial }: { mock: QualifierMock; name: string; initial: Live }) {
  const router = useRouter();
  const flat = useMemo(() => mock.sections.flatMap((s, si) => s.questions.map((q, qi) => ({ q, si, qi }))), [mock]);
  const [live, setLive] = useState<Live>(initial);
  const [draft, setDraft] = useState<QualifierResponse | undefined>(initial.responses[flat[initial.current].q.id]);
  const [now, setNow] = useState(() => Date.now());
  const [panel, setPanel] = useState<"none" | "palette" | "calc" | "info" | "submit">("none");
  const [tabWarning, setTabWarning] = useState(false);
  const submitted = useRef(false);

  const { q, si, qi } = flat[live.current];
  const section = mock.sections[si];
  const remaining = mock.durationMin * 60 - (now - live.startedAt) / 1000;

  useEffect(() => {
    if (!submitted.current) writeLive(mock.slug, live);
  }, [mock.slug, live]);

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  useEffect(() => {
    const onVis = () => {
      if (document.visibilityState === "hidden") {
        setLive((l) => ({ ...l, tabSwitches: l.tabSwitches + 1 }));
        setTabWarning(true);
      }
    };
    const onUnload = (e: BeforeUnloadEvent) => {
      if (!submitted.current) e.preventDefault();
    };
    document.addEventListener("visibilitychange", onVis);
    window.addEventListener("beforeunload", onUnload);
    return () => {
      document.removeEventListener("visibilitychange", onVis);
      window.removeEventListener("beforeunload", onUnload);
    };
  }, []);

  const submit = useCallback(
    (auto: boolean) => {
      if (submitted.current) return;
      submitted.current = true;
      const elapsed = Math.round((Date.now() - live.startedAt) / 1000);
      const id = actions.recordQualifierAttempt({
        mockSlug: mock.slug,
        responses: live.responses,
        timeTakenSec: Math.min(elapsed, mock.durationMin * 60),
        tabSwitches: live.tabSwitches,
        autoSubmitted: auto,
        percent: scoreMock(mock, live.responses).average,
        title: mock.title,
        href: paperHref(mock),
      });
      writeLive(mock.slug, null);
      if (document.fullscreenElement) document.exitFullscreen().catch(() => {});
      router.replace(`${paperHref(mock)}?attempt=${id}`);
    },
    [live, mock, router],
  );

  useEffect(() => {
    if (remaining <= 0) submit(true);
  }, [remaining, submit]);

  /** Move to a question; a first visit turns "not visited" into "not answered". */
  const go = (index: number, base: Live = live) => {
    const target = flat[index].q.id;
    const next: Live = {
      ...base,
      current: index,
      status: { ...base.status, [target]: base.status[target] && base.status[target] !== "nv" ? base.status[target] : "na" },
    };
    setLive(next);
    setDraft(next.responses[target]);
    setPanel((p) => (p === "palette" ? "none" : p));
  };

  const save = (mark: boolean) => {
    const answered = hasResponse(draft);
    const responses = { ...live.responses };
    if (answered) responses[q.id] = draft;
    else delete responses[q.id];
    const status: Status = mark ? (answered ? "am" : "m") : answered ? "a" : "na";
    go((live.current + 1) % flat.length, { ...live, responses, status: { ...live.status, [q.id]: status } });
  };

  const clear = () => {
    const responses = { ...live.responses };
    delete responses[q.id];
    setDraft(undefined);
    setLive({ ...live, responses, status: { ...live.status, [q.id]: "na" } });
  };

  const countsFor = (sIndex: number) => {
    const c: Record<Status, number> = { nv: 0, na: 0, a: 0, m: 0, am: 0 };
    for (const x of mock.sections[sIndex].questions) c[live.status[x.id] ?? "nv"]++;
    return c;
  };

  const sectionStart = (sIndex: number) => flat.findIndex((f) => f.si === sIndex);
  const low = remaining <= 5 * 60;

  return (
    <>
      <PortalHeader mock={mock}>
        <button type="button" onClick={() => setPanel(panel === "calc" ? "none" : "calc")} className="hidden h-9 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium hover:bg-bg/10 sm:inline-flex">
          <CalcIcon className="size-4" aria-hidden /> Calculator
        </button>
        <button type="button" onClick={() => setPanel("info")} className="hidden h-9 items-center gap-1.5 rounded-lg px-2.5 text-sm font-medium hover:bg-bg/10 sm:inline-flex">
          <Info className="size-4" aria-hidden /> Instructions
        </button>
        <button
          type="button"
          onClick={() => document.documentElement.requestFullscreen?.().catch(() => {})}
          className="hidden size-9 place-items-center rounded-lg hover:bg-bg/10 md:grid"
          aria-label="Enter full screen"
        >
          <Maximize className="size-4" aria-hidden />
        </button>
        <div
          role="timer"
          aria-label="Time left"
          className={cn("flex items-center gap-2 rounded-lg px-3 py-1.5 font-mono text-sm font-bold tabular-nums", low ? "animate-pulse bg-red text-bg" : "bg-bg/10")}
        >
          <Clock className="size-4" aria-hidden />
          <span className="hidden text-[11px] font-sans font-medium opacity-80 sm:inline">Time Left</span>
          {formatClock(remaining)}
        </div>
      </PortalHeader>

      {/* Section tabs */}
      <nav aria-label="Sections" className="flex shrink-0 items-center gap-1 overflow-x-auto border-b border-border bg-surface px-2 [scrollbar-width:none] md:px-4">
        {mock.sections.map((s, i) => {
          const c = countsFor(i);
          const on = i === si;
          return (
            <button
              key={s.subjectSlug}
              type="button"
              onClick={() => go(sectionStart(i))}
              aria-current={on ? "true" : undefined}
              className={cn("relative flex shrink-0 items-center gap-2 px-3 py-3 text-sm font-medium", on ? "text-fg" : "text-muted hover:text-fg")}
            >
              {s.short}
              <span className={cn("rounded-md px-1.5 py-0.5 text-[11px] tabular-nums", on ? "bg-ink text-bg" : "bg-surface-2")}>
                {c.a + c.am}/{s.questions.length}
              </span>
              {on && <span className="absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-brand" />}
            </button>
          );
        })}
      </nav>

      {tabWarning && (
        <div role="alert" className="flex shrink-0 items-center gap-2 bg-amber/15 px-4 py-2 text-sm text-amber">
          <AlertTriangle className="size-4 shrink-0" aria-hidden />
          <span className="flex-1">
            You left the exam window ({live.tabSwitches} {live.tabSwitches === 1 ? "time" : "times"}). In the real exam this is flagged by the invigilator.
          </span>
          <button type="button" onClick={() => setTabWarning(false)} aria-label="Dismiss" className="rounded p-1 hover:bg-amber/10">
            <X className="size-4" />
          </button>
        </div>
      )}

      <div className="flex min-h-0 flex-1">
        {/* Question pane */}
        <section className="flex min-w-0 flex-1 flex-col">
          <div className="flex shrink-0 flex-wrap items-center justify-between gap-2 border-b border-border px-4 py-3 md:px-6">
            <div className="flex items-center gap-3">
              <h2 className="text-base font-bold">Question {qi + 1}</h2>
              <span className="text-xs text-muted">{TYPE_LABEL[q.type]}</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="rounded-md bg-green/10 px-1.5 py-0.5 font-semibold text-green">+{q.marks}</span>
              <span className="rounded-md bg-surface-2 px-1.5 py-0.5 font-semibold text-muted">−0</span>
              <button type="button" onClick={() => setPanel("palette")} className="ml-1 inline-flex h-8 items-center gap-1.5 rounded-lg border border-border px-2.5 font-medium lg:hidden">
                <LayoutGrid className="size-3.5" aria-hidden /> Palette
              </button>
            </div>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-4 py-5 md:px-6">
            {section.reference && (
              <details className="mx-auto mb-4 max-w-3xl rounded-xl border border-border bg-surface text-[15px] leading-relaxed">
                <summary className="cursor-pointer px-4 py-2.5 text-sm font-semibold">Useful data</summary>
                <QuestionPassage text={section.reference} className="max-h-[45vh] overflow-y-auto border-t border-border px-4 py-3" />
              </details>
            )}
            <div key={q.id} className="animate-fade-up mx-auto max-w-3xl">
              {q.passage && (
                <div className="mb-4 max-h-[45vh] overflow-y-auto rounded-xl border border-border bg-surface p-4 text-[15px] leading-relaxed">
                  <QuestionPassage text={q.passage} />
                </div>
              )}
              {q.context &&
                (q.context.includes("\n") ? (
                  <pre className="mb-4 overflow-x-auto rounded-xl border border-border bg-surface p-4 font-mono text-[13px] leading-relaxed">{q.context}</pre>
                ) : (
                  <div className="mb-4 rounded-xl border border-border bg-surface p-4 text-[15px] leading-relaxed">
                    <p className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-muted">Read the passage</p>
                    {q.context}
                  </div>
                ))}
              {q.code && (
                <pre className="mb-4 overflow-x-auto rounded-xl bg-ink p-4 font-mono text-[13px] leading-relaxed text-bg">{q.code}</pre>
              )}
              <QuestionPrompt q={q} className="text-[15px] font-medium leading-relaxed md:text-base" />
              <Answer q={q} value={draft} onChange={setDraft} />
              {hasResponse(draft) && JSON.stringify(draft) !== JSON.stringify(live.responses[q.id]) && (
                <p className="mt-4 text-xs text-muted">Not saved yet. Click Save &amp; Next to record this answer.</p>
              )}
            </div>
          </div>

          {/* Action bar */}
          <div className="flex shrink-0 flex-wrap items-center gap-2 border-t border-border bg-surface px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] md:px-6">
            <button type="button" onClick={() => save(true)} className="h-10 rounded-xl border border-purple/40 bg-purple/10 px-3 text-sm font-semibold text-purple hover:bg-purple/15">
              Mark for Review &amp; Next
            </button>
            <button type="button" onClick={clear} className="h-10 rounded-xl border border-border px-3 text-sm font-medium hover:border-fg/30">
              Clear Response
            </button>
            <div className="ml-auto flex gap-2">
              <button
                type="button"
                disabled={live.current === 0}
                onClick={() => go(live.current - 1)}
                className="hidden h-10 rounded-xl border border-border px-3 text-sm font-medium hover:border-fg/30 disabled:opacity-40 sm:block"
              >
                Previous
              </button>
              <button type="button" onClick={() => save(false)} className="h-10 rounded-xl bg-green px-4 text-sm font-semibold text-bg hover:brightness-110">
                Save &amp; Next
              </button>
            </div>
          </div>
        </section>

        {/* Palette */}
        {panel === "palette" && <div className="fixed inset-0 z-10 bg-ink/40 lg:hidden" onClick={() => setPanel("none")} aria-hidden />}
        <aside
          className={cn(
            "flex w-80 shrink-0 flex-col border-l border-border bg-surface",
            panel === "palette" ? "fixed inset-y-0 right-0 z-20 shadow-2xl" : "hidden lg:flex",
          )}
        >
          <div className="flex items-center gap-3 border-b border-border p-4">
            <span className="grid size-11 place-items-center rounded-full bg-surface-2 text-muted">
              <User className="size-5" aria-hidden />
            </span>
            <div className="min-w-0 flex-1">
              <p className="truncate font-semibold">{name}</p>
              <p className="text-xs text-muted">Candidate</p>
            </div>
            {panel === "palette" && (
              <button type="button" onClick={() => setPanel("none")} aria-label="Close palette" className="rounded-lg p-1.5 hover:bg-surface-2">
                <X className="size-5" />
              </button>
            )}
          </div>
          <div className="border-b border-border p-4">
            <Legend counts={countsFor(si)} />
          </div>
          <div className="min-h-0 flex-1 overflow-y-auto p-4">
            <p className="mb-3 rounded-lg bg-surface-2 px-3 py-2 text-sm font-semibold">{section.title}</p>
            <p className="mb-3 text-xs text-muted">Choose a question</p>
            <div className="grid grid-cols-5 gap-2.5">
              {section.questions.map((x, i) => {
                const index = sectionStart(si) + i;
                return (
                  <button
                    key={x.id}
                    type="button"
                    onClick={() => go(index)}
                    aria-label={`Question ${i + 1}, ${STATUS_META[live.status[x.id] ?? "nv"].label}`}
                    aria-current={index === live.current ? "true" : undefined}
                    className={cn("rounded-xl", index === live.current && "ring-2 ring-fg ring-offset-2 ring-offset-surface")}
                  >
                    <StatusChip status={live.status[x.id] ?? "nv"}>{i + 1}</StatusChip>
                  </button>
                );
              })}
            </div>
          </div>
          <div className="border-t border-border p-4">
            <button type="button" onClick={() => setPanel("submit")} className="h-11 w-full rounded-xl bg-ink text-sm font-semibold text-bg hover:opacity-90">
              Submit exam
            </button>
          </div>
        </aside>
      </div>

      {panel === "calc" && <Calculator onClose={() => setPanel("none")} />}
      {panel === "info" && (
        <Modal title="Instructions" onClose={() => setPanel("none")}>
          <div className="space-y-4 text-sm leading-relaxed">
            <p>Answers count only after <b>Save &amp; Next</b> or <b>Mark for Review &amp; Next</b>. No negative marking.</p>
            <p>Qualifying rule: at least 40% in each course and at least 50% on average.</p>
            <Legend />
          </div>
        </Modal>
      )}
      {panel === "submit" && (
        <Modal title="Exam summary" onClose={() => setPanel("none")}>
          <div className="-mx-1 overflow-x-auto">
            <table className="w-full text-sm">
              <thead className="text-left text-xs text-muted">
                <tr>
                  <th className="px-1 py-2 font-semibold">Section</th>
                  <th className="px-1 py-2 text-right font-semibold">Answered</th>
                  <th className="px-1 py-2 text-right font-semibold">Not ans.</th>
                  <th className="px-1 py-2 text-right font-semibold">Marked</th>
                  <th className="px-1 py-2 text-right font-semibold">Ans. &amp; marked</th>
                  <th className="px-1 py-2 text-right font-semibold">Not visited</th>
                </tr>
              </thead>
              <tbody className="tabular-nums">
                {mock.sections.map((s, i) => {
                  const c = countsFor(i);
                  return (
                    <tr key={s.subjectSlug} className="border-t border-border">
                      <td className="px-1 py-2 font-medium">{s.short}</td>
                      <td className="px-1 py-2 text-right text-green">{c.a}</td>
                      <td className="px-1 py-2 text-right text-red">{c.na}</td>
                      <td className="px-1 py-2 text-right text-purple">{c.m}</td>
                      <td className="px-1 py-2 text-right text-purple">{c.am}</td>
                      <td className="px-1 py-2 text-right text-muted">{c.nv}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p className="mt-4 text-sm text-muted">
            Time left: <b className="font-mono text-fg">{formatClock(remaining)}</b>. Once submitted you cannot change your answers.
          </p>
          <div className="mt-5 flex justify-end gap-2">
            <button type="button" onClick={() => setPanel("none")} className="h-10 rounded-xl border border-border px-4 text-sm font-medium">
              Back to exam
            </button>
            <button type="button" onClick={() => submit(false)} className="h-10 rounded-xl bg-ink px-4 text-sm font-semibold text-bg hover:opacity-90">
              Yes, submit
            </button>
          </div>
        </Modal>
      )}
    </>
  );
}

/* ───────────── Answer inputs ───────────── */

const NAT_PATTERN = /^-?\d*\.?\d*$/;

function Answer({ q, value, onChange }: { q: QualifierQuestion; value: QualifierResponse | undefined; onChange: (v: QualifierResponse | undefined) => void }) {
  if (q.type === "text") {
    return (
      <div className="mt-6 max-w-sm">
        <label htmlFor={`sa-${q.id}`} className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
          Your answer{q.caseSensitive && " (case-sensitive)"}
        </label>
        <input
          id={`sa-${q.id}`}
          value={typeof value === "string" ? value : ""}
          onChange={(e) => onChange(e.target.value === "" ? undefined : e.target.value)}
          autoComplete="off"
          autoCapitalize="off"
          spellCheck={false}
          className="h-12 w-full rounded-xl border-2 border-border bg-surface px-4 font-mono text-lg outline-none focus:border-fg"
        />
      </div>
    );
  }
  if (q.type === "numerical") {
    const text = typeof value === "string" ? value : "";
    const set = (v: string) => NAT_PATTERN.test(v) && onChange(v === "" ? undefined : v);
    const key = (k: string) => {
      if (k === "⌫") set(text.slice(0, -1));
      else if (k === "−") set(text.startsWith("-") ? text.slice(1) : "-" + text);
      else set(text + k);
    };
    return (
      <div className="mt-6 max-w-xs">
        <label htmlFor={`nat-${q.id}`} className="mb-2 block text-xs font-semibold uppercase tracking-wide text-muted">
          Your answer
        </label>
        <input
          id={`nat-${q.id}`}
          value={text}
          onChange={(e) => set(e.target.value.trim())}
          inputMode="decimal"
          autoComplete="off"
          className="h-12 w-full rounded-xl border-2 border-border bg-surface px-4 font-mono text-lg tabular-nums outline-none focus:border-fg"
        />
        <div className="mt-3 grid grid-cols-4 gap-1.5">
          {["7", "8", "9", "⌫", "4", "5", "6", "−", "1", "2", "3", ".", "0"].map((k) => (
            <button
              key={k}
              type="button"
              onClick={() => key(k)}
              className={cn("h-10 rounded-lg border border-border bg-surface font-mono text-sm font-semibold hover:bg-surface-2", k === "0" && "col-span-2")}
              aria-label={k === "⌫" ? "Backspace" : k === "−" ? "Toggle minus sign" : k}
            >
              {k === "⌫" ? <Delete className="mx-auto size-4" aria-hidden /> : k}
            </button>
          ))}
          <button type="button" onClick={() => onChange(undefined)} className="col-span-2 h-10 rounded-lg border border-border bg-surface text-sm font-medium hover:bg-surface-2">
            Clear all
          </button>
        </div>
      </div>
    );
  }

  const multi = q.type === "multi";
  const selected = multi ? ((value as number[] | undefined) ?? []) : value === undefined ? [] : [value as number];
  const toggle = (i: number) => {
    if (!multi) return onChange(i);
    const next = selected.includes(i) ? selected.filter((x) => x !== i) : [...selected, i];
    onChange(next.length ? next : undefined);
  };
  return (
    <fieldset className="mt-6">
      <legend className="sr-only">{multi ? "Select all that apply" : "Select one option"}</legend>
      <div className="grid gap-2.5">
        {q.options!.map((opt, i) => {
          const on = selected.includes(i);
          return (
            <label
              key={i}
              className={cn(
                "flex cursor-pointer items-start gap-3 rounded-xl border-2 bg-surface p-3.5 transition-colors",
                on ? "border-fg" : "border-border hover:border-fg/30",
              )}
            >
              <input
                type={multi ? "checkbox" : "radio"}
                name={q.id}
                checked={on}
                onChange={() => toggle(i)}
                className="mt-0.5 size-4 shrink-0 accent-[var(--fg)]"
              />
              <span className="w-5 shrink-0 font-semibold text-muted">{String.fromCharCode(65 + i)}.</span>
              <span className="min-w-0 flex-1 text-[15px] [overflow-wrap:anywhere]">
                <RichText text={opt} />
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/* ───────────── Modal + calculator ───────────── */

function Modal({ title, onClose, children }: { title: string; onClose: () => void; children: React.ReactNode }) {
  return (
    <div className="fixed inset-0 z-30 grid place-items-center bg-ink/50 p-4" onClick={onClose}>
      <div role="dialog" aria-modal="true" aria-label={title} className="animate-fade-up w-full max-w-lg rounded-2xl bg-surface p-5 shadow-2xl" onClick={(e) => e.stopPropagation()}>
        <div className="mb-4 flex items-center justify-between">
          <h2 className="text-lg font-bold">{title}</h2>
          <button type="button" onClick={onClose} aria-label="Close" className="rounded-lg p-1.5 hover:bg-surface-2">
            <X className="size-5" />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

type Op = "+" | "−" | "×" | "÷";
const apply = (a: number, b: number, op: Op) => (op === "+" ? a + b : op === "−" ? a - b : op === "×" ? a * b : a / b);
const show = (n: number) => (Number.isFinite(n) ? String(Number(n.toPrecision(12))) : "Error");

function Calculator({ onClose }: { onClose: () => void }) {
  const [display, setDisplay] = useState("0");
  const [acc, setAcc] = useState<number | null>(null);
  const [op, setOp] = useState<Op | null>(null);
  const [fresh, setFresh] = useState(true);

  const digit = (d: string) => {
    if (display === "Error" || fresh) setDisplay(d === "." ? "0." : d);
    else if (d === "." && display.includes(".")) return;
    else setDisplay(display === "0" && d !== "." ? d : display + d);
    setFresh(false);
  };
  const operator = (o: Op) => {
    const cur = Number(display);
    if (acc !== null && op && !fresh) {
      const r = apply(acc, cur, op);
      setAcc(r);
      setDisplay(show(r));
    } else setAcc(cur);
    setOp(o);
    setFresh(true);
  };
  const equals = () => {
    if (acc === null || !op) return;
    setDisplay(show(apply(acc, Number(display), op)));
    setAcc(null);
    setOp(null);
    setFresh(true);
  };
  const unary = (f: (n: number) => number) => {
    setDisplay(show(f(Number(display))));
    setFresh(true);
  };
  const reset = () => {
    setDisplay("0");
    setAcc(null);
    setOp(null);
    setFresh(true);
  };

  const keys: [string, () => void, string?][] = [
    ["C", reset, "text-red"],
    ["±", () => unary((n) => -n)],
    ["√", () => unary(Math.sqrt)],
    ["÷", () => operator("÷"), "bg-surface-2"],
    ["7", () => digit("7")],
    ["8", () => digit("8")],
    ["9", () => digit("9")],
    ["×", () => operator("×"), "bg-surface-2"],
    ["4", () => digit("4")],
    ["5", () => digit("5")],
    ["6", () => digit("6")],
    ["−", () => operator("−"), "bg-surface-2"],
    ["1", () => digit("1")],
    ["2", () => digit("2")],
    ["3", () => digit("3")],
    ["+", () => operator("+"), "bg-surface-2"],
    ["x²", () => unary((n) => n * n)],
    ["0", () => digit("0")],
    [".", () => digit(".")],
    ["=", equals, "bg-ink text-bg"],
  ];

  return (
    <div role="dialog" aria-label="Calculator" className="animate-fade-up fixed right-3 top-16 z-30 w-64 rounded-2xl border border-border bg-surface p-3 shadow-2xl md:right-[21rem]">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-muted">Calculator</p>
        <button type="button" onClick={onClose} aria-label="Close calculator" className="rounded-md p-1 hover:bg-surface-2">
          <X className="size-4" />
        </button>
      </div>
      <div className="mb-2 rounded-lg bg-surface-2 px-3 py-2 text-right">
        <p className="h-4 font-mono text-[11px] text-muted">{acc !== null && op ? `${show(acc)} ${op}` : ""}</p>
        <p className="truncate font-mono text-2xl font-semibold tabular-nums" aria-live="polite">
          {display}
        </p>
      </div>
      <div className="grid grid-cols-4 gap-1.5">
        {keys.map(([label, fn, cls]) => (
          <button key={label} type="button" onClick={fn} className={cn("h-10 rounded-lg border border-border font-mono text-sm font-semibold hover:brightness-95", cls ?? "bg-surface")}>
            {label}
          </button>
        ))}
      </div>
    </div>
  );
}
