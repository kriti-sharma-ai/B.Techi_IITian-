import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { LevelExplorer } from "@/components/level-explorer";
import { PageHeader } from "@/components/ui";
import { getProgram, programs } from "@/lib/content";
import { accentStyles, cn } from "@/lib/utils";

export const dynamicParams = false;
export const generateStaticParams = () => programs.map((p) => ({ program: p.slug }));

export async function generateMetadata({ params }: PageProps<"/programs/[program]">): Promise<Metadata> {
  const p = getProgram((await params).program);
  if (!p) return {};
  return {
    title: `${p.university} ${p.degree}: All Courses by Level`,
    description: `${p.description} Course codes, credits and resources for every Foundation, Diploma and Degree course.`,
    alternates: { canonical: `/programs/${p.slug}` },
  };
}

export default async function ProgramPage({ params }: PageProps<"/programs/[program]">) {
  const program = getProgram((await params).program);
  if (!program) notFound();

  const facts: [string, string][] = [
    ["Total credits", String(program.totalCredits)],
    ["Levels", String(program.levels.length)],
    ["Complete within", `${program.maxYears} years`],
    ["Terms per year", "3 (Jan · May · Sep)"],
  ];

  return (
    <>
      <PageHeader
        crumbs={[{ label: program.name }]}
        eyebrow={program.university}
        title={program.degree}
        description={program.description}
      >
        <dl className="grid max-w-3xl grid-cols-2 gap-y-4 sm:grid-cols-4">
          {facts.map(([k, v]) => (
            <div key={k} className="flex flex-col-reverse">
              <dt className="text-sm text-muted">{k}</dt>
              <dd className="text-xl font-bold">{v}</dd>
            </div>
          ))}
        </dl>
      </PageHeader>

      <div className="container-page space-y-14 py-10">
        <section aria-labelledby="levels-h">
          <h2 id="levels-h" className="mb-1 text-lg font-bold">
            Courses by level
          </h2>
          <p className="mb-4 text-sm text-muted">Open Foundation, Diploma or Degree to see its courses.</p>
          <LevelExplorer programSlug={program.slug} />
        </section>

        <section aria-labelledby="path-h">
          <h2 id="path-h" className="mb-1 text-lg font-bold">
            How progression works
          </h2>
          <p className="mb-5 text-sm text-muted">Exit at any level with the award you&apos;ve earned, or continue to the next.</p>
          <ol className="relative grid gap-4 md:grid-cols-3">
            {program.levels.map((l, i) => {
              const a = accentStyles[l.accent];
              return (
                <li key={l.slug} className="card p-5">
                  <div className="flex items-center gap-2">
                    <span className={cn("grid size-7 place-items-center rounded-full text-xs font-bold", a.bar, l.accent === "yellow" ? "text-brand-ink" : "text-white")}>
                      {i + 1}
                    </span>
                    <p className="font-semibold">{l.short}</p>
                    <span className="ml-auto text-xs text-muted tabular-nums">{l.cumulativeCredits} credits total</span>
                  </div>
                  <dl className="mt-4 space-y-2.5 text-sm">
                    <div>
                      <dt className="text-xs text-muted">To enter</dt>
                      <dd>{l.entry}</dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted">Duration · effort</dt>
                      <dd>
                        {l.duration} · {l.effort}
                      </dd>
                    </div>
                    <div>
                      <dt className="text-xs text-muted">Exit award</dt>
                      <dd className="font-medium">{l.exit}</dd>
                    </div>
                  </dl>
                </li>
              );
            })}
          </ol>
        </section>

      </div>
    </>
  );
}
