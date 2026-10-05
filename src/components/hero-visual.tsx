import { BookOpen, Check, FileText, PenLine, PlayCircle, ScrollText } from "lucide-react";

/** Static product mockup for the hero. Decorative: real UI, not a stock photo (PRD §7). */
export function HeroVisual() {
  const topics = [
    { t: "Basic Probability", done: true },
    { t: "Conditional Probability", done: true },
    { t: "Bayes' Theorem", done: false, active: true },
  ];
  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[520px] select-none">
      <div className="card overflow-hidden shadow-[0_24px_60px_-28px_rgb(0_0_0/0.35)]">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-surface-2 px-2 text-[10px] leading-5 text-muted">btechi.in/subjects/statistics</span>
        </div>
        <div className="p-5 lg:pb-24">
          <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">Data Science · Semester 2</p>
          <div className="mt-1 flex items-end justify-between">
            <p className="text-xl font-bold">Statistics</p>
            <p className="text-sm font-bold tabular-nums">80%</p>
          </div>
          <div className="mt-2 h-2 rounded-full bg-surface-2">
            <div className="h-full w-4/5 rounded-full bg-brand" />
          </div>

          <div className="mt-5 rounded-xl border border-border">
            <div className="flex items-center justify-between border-b border-border px-3.5 py-2.5">
              <p className="text-sm font-semibold">Unit 2 · Probability</p>
              <p className="text-xs text-muted">3 topics</p>
            </div>
            <ul>
              {topics.map((x) => (
                <li key={x.t} className={`flex items-center gap-3 px-3.5 py-2.5 text-sm ${x.active ? "bg-surface-2/70" : ""}`}>
                  {x.done ? (
                    <span className="grid size-5 place-items-center rounded-full bg-green text-white">
                      <Check className="size-3" />
                    </span>
                  ) : (
                    <span className="size-5 rounded-full border-2 border-border" />
                  )}
                  <span className={x.active ? "font-semibold" : ""}>{x.t}</span>
                  {x.active && (
                    <span className="ml-auto flex gap-1 text-muted">
                      <FileText className="size-4 text-teal" />
                      <PlayCircle className="size-4 text-blue" />
                      <BookOpen className="size-4 text-amber" />
                      <PenLine className="size-4 text-purple" />
                      <ScrollText className="size-4 text-green" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            {[
              ["24", "Notes"],
              ["18", "Videos"],
              ["150", "Questions"],
            ].map(([n, l]) => (
              <div key={l} className="rounded-lg bg-surface-2 py-2">
                <p className="text-sm font-bold tabular-nums">{n}</p>
                <p className="text-[11px] text-muted">{l}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating question card */}
      <div className="card absolute -bottom-8 -left-6 hidden w-60 p-4 shadow-[0_20px_40px_-20px_rgb(0_0_0/0.35)] lg:block">
        <p className="text-[11px] font-semibold text-purple">PRACTICE · MEDIUM</p>
        <p className="mt-1 text-xs font-medium leading-snug">Fixed number of independent trials, two outcomes. Which distribution?</p>
        <div className="mt-2 space-y-1.5 text-xs">
          <p className="rounded-md border border-border px-2 py-1">A. Normal</p>
          <p className="flex items-center justify-between rounded-md border border-green bg-green/10 px-2 py-1 font-medium">
            B. Binomial <Check className="size-3.5 text-green" />
          </p>
        </div>
      </div>

      {/* Floating PYQ analysis card */}
      <div className="card absolute -right-6 -bottom-8 hidden w-52 p-4 shadow-[0_20px_40px_-20px_rgb(0_0_0/0.35)] lg:block">
        <p className="text-[11px] font-semibold text-muted">MOST REPEATED IN PYQs</p>
        {[
          ["Probability", 100],
          ["Regression", 60],
          ["Correlation", 60],
        ].map(([t, v]) => (
          <div key={t} className="mt-2">
            <div className="flex justify-between text-[11px]">
              <span>{t}</span>
              <span className="tabular-nums text-muted">{v}%</span>
            </div>
            <div className="mt-1 h-1.5 rounded-full bg-surface-2">
              <div className="h-full rounded-full bg-ink" style={{ width: `${v}%` }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
