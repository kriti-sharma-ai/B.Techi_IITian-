import Link from "next/link";
import { pyqTopicFrequency, forSubject, pyqs } from "@/lib/content";

/** "Most repeated topics" bars (PRD §22), computed from tagged past papers. */
export function PyqAnalysis({ subjectSlug, limit = 8 }: { subjectSlug: string; limit?: number }) {
  const rows = pyqTopicFrequency(subjectSlug).slice(0, limit);
  const papers = forSubject(pyqs, subjectSlug).length;
  if (rows.length === 0) return null;
  return (
    <div className="card p-5">
      <div className="mb-4 flex items-baseline justify-between gap-3">
        <h3 className="font-semibold">Most repeated topics</h3>
        <p className="text-xs text-muted">
          Across {papers} past paper{papers > 1 ? "s" : ""}
        </p>
      </div>
      <ul className="space-y-3">
        {rows.map((r, i) => (
          <li key={r.slug}>
            <Link href={`/subjects/${subjectSlug}/${r.slug}`} className="group grid grid-cols-[minmax(0,9rem)_1fr_3rem] items-center gap-3 text-sm sm:grid-cols-[12rem_1fr_3rem]">
              <span className="truncate group-hover:underline">{r.title}</span>
              <span className="h-2.5 rounded-full bg-surface-2">
                <span
                  className={`block h-full rounded-full ${i < 2 ? "bg-brand" : "bg-ink/70"}`}
                  style={{ width: `${r.percent}%` }}
                />
              </span>
              <span className="text-right font-semibold tabular-nums">{r.percent}%</span>
            </Link>
          </li>
        ))}
      </ul>
      <p className="mt-4 text-xs text-muted">Percentage of papers in which the topic appeared. Focus on the yellow bars first.</p>
    </div>
  );
}
