import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getProgram } from "@/lib/content";
import { accentStyles, cn } from "@/lib/utils";

/**
 * Foundation / Diploma / Degree as three step cards. Each card opens the
 * level's own page, where its courses are listed.
 */
export function LevelExplorer({ programSlug }: { programSlug: string }) {
  const program = getProgram(programSlug)!;

  return (
    <ol className="grid gap-4 md:grid-cols-3">
      {program.levels.map((l, i) => {
        const a = accentStyles[l.accent];
        return (
          <li key={l.slug}>
            <Link
              href={`/programs/${programSlug}/${l.slug}`}
              className="card group relative flex h-full flex-col overflow-hidden p-6 transition-[border-color,box-shadow,transform] hover:-translate-y-0.5 hover:border-fg/30 hover:shadow-[0_12px_32px_-16px_rgb(0_0_0/0.35)]"
            >
              <span className={cn("absolute inset-x-0 top-0 h-1", a.bar)} aria-hidden />

              <span className="font-mono text-4xl font-bold text-muted/40 tabular-nums">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-3 text-xl font-bold">{l.name}</h3>
              <p className="mt-1 text-sm text-muted">{l.exit}</p>

              <p className="mt-5 text-sm">
                <span className="font-semibold">{l.courses}</span>
                <span className="text-muted"> · {l.credits} credits</span>
              </p>

              <span className="mt-6 inline-flex items-center gap-1.5 pt-1 text-sm font-semibold">
                View courses
                <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" aria-hidden />
              </span>
            </Link>
          </li>
        );
      })}
    </ol>
  );
}
