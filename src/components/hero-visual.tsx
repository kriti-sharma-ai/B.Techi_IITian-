import { Check, FileText, PenLine, PlayCircle, ScrollText } from "lucide-react";
import { PROGRAM_SLUG, getProgram, subjectsForLevel } from "@/lib/content";

/** Decorative product mockup for the hero, built from the real IITM BS structure. */
export function HeroVisual() {
  const program = getProgram(PROGRAM_SLUG)!;
  const foundation = subjectsForLevel(PROGRAM_SLUG, "foundation").slice(0, 4);
  const levelBar: Record<string, string> = { foundation: "bg-brand", diploma: "bg-blue", degree: "bg-purple" };

  return (
    <div aria-hidden className="relative mx-auto w-full max-w-[520px] select-none">
      <div className="card overflow-hidden shadow-[0_24px_60px_-28px_rgb(0_0_0/0.35)]">
        <div className="flex items-center gap-1.5 border-b border-border px-4 py-3">
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="size-2.5 rounded-full bg-border" />
          <span className="ml-3 h-5 flex-1 rounded-md bg-surface-2 px-2 text-[10px] leading-5 text-muted">btechi.in/programs/iitm-bs</span>
        </div>
        <div className="p-5 lg:pb-24">
          <p className="text-[11px] font-semibold tracking-wide text-muted uppercase">{program.university} · BS Degree</p>
          <p className="mt-1 text-xl font-bold">Management &amp; Data Science</p>

          {/* Credits split across the three levels */}
          <div className="mt-4 flex h-2.5 gap-1 overflow-hidden rounded-full">
            {program.levels.map((l) => (
              <span key={l.slug} className={`${levelBar[l.slug]} rounded-full`} style={{ flexGrow: l.credits }} />
            ))}
          </div>
          <div className="mt-2 flex justify-between text-[11px] text-muted">
            {program.levels.map((l) => (
              <span key={l.slug}>
                <span className="font-semibold text-fg">{l.short}</span> · {l.credits} cr
              </span>
            ))}
          </div>

          <div className="mt-5 rounded-xl border border-border">
            <div className="flex items-center justify-between border-b border-border px-3.5 py-2.5">
              <p className="text-sm font-semibold">Foundation Level</p>
              <p className="text-xs text-muted">8 courses</p>
            </div>
            <ul>
              {foundation.map((s, i) => (
                <li key={s.slug} className={`flex items-center gap-3 px-3.5 py-2.5 text-sm ${i === 2 ? "bg-surface-2/70" : ""}`}>
                  {i < 2 ? (
                    <span className="grid size-5 shrink-0 place-items-center rounded-full bg-green text-white">
                      <Check className="size-3" />
                    </span>
                  ) : (
                    <span className="size-5 shrink-0 rounded-full border-2 border-border" />
                  )}
                  <span className="w-[4.5rem] shrink-0 font-mono text-[11px] text-muted">{s.code}</span>
                  <span className={`truncate ${i === 2 ? "font-semibold" : ""}`}>{s.name}</span>
                  {i === 2 && (
                    <span className="ml-auto flex shrink-0 gap-1">
                      <FileText className="size-4 text-teal" />
                      <PlayCircle className="size-4 text-blue" />
                      <PenLine className="size-4 text-purple" />
                      <ScrollText className="size-4 text-green" />
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Floating exam card */}
      <div className="card absolute -bottom-8 -left-6 hidden w-56 p-4 shadow-[0_20px_40px_-20px_rgb(0_0_0/0.35)] lg:block">
        <p className="text-[11px] font-semibold text-purple">EXAM PREP</p>
        <p className="mt-1 text-sm font-semibold">Quiz 1 · Quiz 2 · End Term</p>
        <p className="mt-1 text-xs text-muted">Previous papers, important questions and timed mocks for every course.</p>
      </div>

      {/* Floating progress card */}
      <div className="card absolute -right-6 -bottom-8 hidden w-52 p-4 shadow-[0_20px_40px_-20px_rgb(0_0_0/0.35)] lg:block">
        <p className="text-[11px] font-semibold text-muted">YOUR PATH</p>
        <p className="mt-1 text-2xl font-extrabold tabular-nums">
          8<span className="text-sm font-semibold text-muted"> / 142 credits</span>
        </p>
        <div className="mt-2 h-1.5 rounded-full bg-surface-2">
          <div className="h-full w-[6%] rounded-full bg-brand" />
        </div>
      </div>
    </div>
  );
}
