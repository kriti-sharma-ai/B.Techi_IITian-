import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SubjectCard } from "@/components/cards";
import { PageHeader } from "@/components/ui";
import { getLevel, getProgram, programs, subjectsForLevel } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () =>
  programs.flatMap((p) => p.levels.map((l) => ({ program: p.slug, level: l.slug })));

function load(programSlug: string, levelSlug: string) {
  const program = getProgram(programSlug);
  const level = getLevel(programSlug, levelSlug);
  return program && level ? { program, level } : null;
}

export async function generateMetadata({ params }: PageProps<"/programs/[program]/[level]">): Promise<Metadata> {
  const { program, level } = await params;
  const r = load(program, level);
  if (!r) return {};
  return {
    title: `${r.program.university} BS ${r.level.name}: Courses, Notes & PYQs`,
    description: `All ${r.level.name} courses of the ${r.program.university} ${r.program.degree} with course codes, credits, notes, PYQs and practice.`,
    alternates: { canonical: `/programs/${r.program.slug}/${r.level.slug}` },
  };
}

export default async function LevelPage({ params }: PageProps<"/programs/[program]/[level]">) {
  const { program: ps, level: ls } = await params;
  const r = load(ps, ls);
  if (!r) notFound();
  const { program, level } = r;
  const subs = subjectsForLevel(program.slug, level.slug);
  const groups = level.groups ?? [{ slug: "", name: "Courses", credits: level.credits, summary: "" }];

  const facts: [string, string][] = [
    ["Credits", `${level.credits}`],
    ["Courses", level.courses],
    ["Duration", level.duration],
    ["Effort", level.effort],
  ];

  return (
    <>
      <PageHeader
        crumbs={[{ label: program.name, href: `/programs/${program.slug}` }, { label: level.name }]}
        eyebrow={`${program.university} · ${program.degree}`}
        title={level.name}
      >
        <dl className="grid max-w-3xl grid-cols-2 gap-y-4 sm:grid-cols-4">
          {facts.map(([k, v]) => (
            <div key={k} className="flex flex-col-reverse">
              <dt className="text-sm text-muted">{k}</dt>
              <dd className="font-bold">{v}</dd>
            </div>
          ))}
        </dl>
        <div className="mt-5 grid max-w-3xl gap-2 text-sm sm:grid-cols-2">
          <p className="rounded-lg bg-surface-2 px-3 py-2">
            <span className="text-muted">To enter: </span>
            {level.entry}
          </p>
          <p className="rounded-lg bg-surface-2 px-3 py-2">
            <span className="text-muted">Exit with: </span>
            <span className="font-medium">{level.exit}</span>
          </p>
        </div>
      </PageHeader>

      <div className="container-page space-y-12 py-10">
        {groups.map((g) => {
          const list = g.slug ? subs.filter((s) => s.group === g.slug) : subs;
          return (
            <section key={g.slug || "all"} aria-labelledby={`g-${g.slug || "all"}`}>
              {level.groups && (
                <div className="mb-4">
                  <div className="flex flex-wrap items-baseline gap-x-3">
                    <h2 id={`g-${g.slug}`} className="text-lg font-bold">
                      {g.name}
                    </h2>
                    <span className="text-sm text-muted">{g.credits} credits</span>
                  </div>
                  <p className="mt-0.5 text-sm text-muted">{g.summary}</p>
                </div>
              )}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {list.map((s) => (
                  <SubjectCard key={s.slug} subject={s} showLevel={false} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </>
  );
}
