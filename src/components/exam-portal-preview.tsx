import { Clock } from "lucide-react";
import { cn } from "@/lib/utils";

/** Decorative still of the exam portal: section tabs, a question and the colour-coded palette. */
export function ExamPortalPreview({ className }: { className?: string }) {
  return (
    <div aria-hidden className={cn("overflow-hidden rounded-2xl border border-border bg-bg shadow-xl", className)}>
      <div className="flex items-center gap-2 bg-ink px-4 py-2.5 text-bg">
        <span className="grid size-6 place-items-center rounded-md bg-brand text-xs font-black text-brand-ink">B</span>
        <span className="flex-1 text-xs font-bold">Qualifier Mock 1</span>
        <span className="flex items-center gap-1.5 rounded-md bg-bg/10 px-2 py-1 font-mono text-xs font-bold">
          <Clock className="size-3" /> 01:42:17
        </span>
      </div>
      <div className="flex gap-4 border-b border-border bg-surface px-4 text-xs font-medium">
        {["Maths I", "Stats I", "CT", "English I"].map((s, i) => (
          <span key={s} className={i === 2 ? "border-b-2 border-brand py-2" : "py-2 text-muted"}>
            {s}
          </span>
        ))}
      </div>
      <div className="grid grid-cols-[1fr_130px]">
        <div className="space-y-2 p-4">
          <p className="text-xs font-bold">Question 8</p>
          <div className="rounded-lg bg-ink p-2.5 font-mono text-[10px] leading-relaxed text-bg">
            while (b != 0) {"{"}
            <br />
            &nbsp;&nbsp;t = b; b = a mod b; a = t
            <br />
            {"}"}
          </div>
          {["6", "12", "36", "252"].map((o, i) => (
            <div key={o} className={`rounded-lg border-2 px-2.5 py-1.5 text-[11px] ${i === 1 ? "border-fg" : "border-border"}`}>
              {String.fromCharCode(65 + i)}. {o}
            </div>
          ))}
        </div>
        <div className="border-l border-border bg-surface p-3">
          <div className="grid grid-cols-3 gap-1.5">
            {["a", "a", "na", "am", "a", "m", "a", "c", "nv", "nv"].map((s, i) => (
              <span
                key={i}
                className={`grid size-7 place-items-center text-[10px] font-bold ${
                  s === "a"
                    ? "rounded-t-lg rounded-b bg-green text-bg"
                    : s === "na"
                      ? "rounded-b-lg rounded-t bg-red text-bg"
                      : s === "m" || s === "am"
                        ? "rounded-full bg-purple text-bg"
                        : s === "c"
                          ? "rounded bg-surface-2 ring-2 ring-fg"
                          : "rounded border border-border bg-surface-2"
                }`}
              >
                {i + 1}
              </span>
            ))}
          </div>
          <div className="mt-3 h-7 rounded-lg bg-ink" />
        </div>
      </div>
    </div>
  );
}
