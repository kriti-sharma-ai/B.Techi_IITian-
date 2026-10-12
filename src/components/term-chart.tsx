import Link from "next/link";
import { cn } from "@/lib/utils";

export type TermBar = { year: number; month: "January" | "May" | "September"; papers: number; href: string };

const SHORT = { January: "Jan", May: "May", September: "Sep" } as const;

/*
 * One bar per IITM term, oldest to newest (the caller decides what the value is, e.g. a running total).
 * Single series, so no legend; the latest term is the one yellow bar. Every bar is labelled with its count
 * and opens that term's papers (the hit area is the full column, not the bar).
 */
export function TermChart({ bars }: { bars: TermBar[] }) {
  const max = Math.max(...bars.map((b) => b.papers), 1);
  const last = bars.length - 1;

  return (
    <figure>
      <div className="relative flex h-48 items-end gap-1.5 border-b border-border sm:gap-3 md:h-60">
        {bars.map((b, i) => {
          return (
            <Link
              key={`${b.year}-${b.month}`}
              href={b.href}
              aria-label={`${b.month} ${b.year} term papers`}
              className="group relative flex h-full flex-1 flex-col justify-end rounded-t-md"
            >
              <span
                aria-hidden
                className={cn(
                  "mb-1.5 text-center text-[11px] font-semibold tabular-nums transition-colors sm:text-xs",
                  i === last ? "text-fg" : "text-muted group-hover:text-fg",
                )}
              >
                {b.papers}
              </span>
              <div
                className={cn(
                  "mx-auto w-3/5 rounded-t-[4px] transition-colors",
                  i === last ? "bg-brand" : "bg-fg/20 group-hover:bg-fg/35",
                )}
                style={{ height: `${(b.papers / max) * 85}%`, minHeight: 6 }}
              />
            </Link>
          );
        })}
      </div>
      <div aria-hidden className="mt-2 flex gap-1.5 sm:gap-3">
        {bars.map((b, i) => (
          <div key={`${b.year}-${b.month}`} className="flex-1 text-center text-[11px] leading-tight text-muted">
            {SHORT[b.month]}
            <span className={cn("block", b.month !== "January" && i !== 0 && "invisible")}>{b.year}</span>
          </div>
        ))}
      </div>

      {/* The same numbers as a table, for screen readers. */}
      <table className="sr-only">
        <caption>Past papers by IITM term</caption>
        <thead>
          <tr>
            <th scope="col">Term</th>
            <th scope="col">Papers</th>
          </tr>
        </thead>
        <tbody>
          {bars.map((b) => (
            <tr key={`${b.year}-${b.month}`}>
              <th scope="row">
                {b.month} {b.year}
              </th>
              <td>{b.papers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </figure>
  );
}
