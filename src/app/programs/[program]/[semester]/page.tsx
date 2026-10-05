import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BookDashed } from "lucide-react";
import { SubjectCard } from "@/components/cards";
import { ButtonLink, EmptyState, PageHeader } from "@/components/ui";
import { getProgram, programs, subjectsForSemester } from "@/lib/content";

export const dynamicParams = false;
export const generateStaticParams = () =>
  programs.flatMap((p) =>
    Array.from({ length: p.semesters }, (_, i) => ({ program: p.slug, semester: `semester-${i + 1}` })),
  );

function parse(program: string, semester: string) {
  const p = getProgram(program);
  const n = Number(semester.replace("semester-", ""));
  if (!p || !Number.isInteger(n) || n < 1 || n > p.semesters) return null;
  return { program: p, sem: n };
}

export async function generateMetadata({ params }: PageProps<"/programs/[program]/[semester]">): Promise<Metadata> {
  const { program, semester } = await params;
  const r = parse(program, semester);
  if (!r) return {};
  return {
    title: `${r.program.name} Semester ${r.sem}: Subjects, Notes & PYQs`,
    description: `All ${r.program.name} semester ${r.sem} subjects with curriculum, notes, videos, previous year questions and practice.`,
    alternates: { canonical: `/programs/${r.program.slug}/semester-${r.sem}` },
  };
}

export default async function SemesterPage({ params }: PageProps<"/programs/[program]/[semester]">) {
  const { program: ps, semester } = await params;
  const r = parse(ps, semester);
  if (!r) notFound();
  const { program, sem } = r;
  const subs = subjectsForSemester(program.slug, sem);

  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Programs", href: "/programs" },
          { label: program.name, href: `/programs/${program.slug}` },
          { label: `Semester ${sem}` },
        ]}
        eyebrow={program.name}
        title={`Semester ${sem}`}
        description={subs.length ? `${subs.length} subjects. Pick one to see its full curriculum.` : undefined}
      />
      <div className="container-page py-10">
        {subs.length ? (
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {subs.map((s) => (
              <SubjectCard key={s.slug} subject={s} showProgram={false} />
            ))}
          </div>
        ) : (
          <EmptyState
            icon={<BookDashed className="size-6" />}
            title="We're working on this semester."
            description="Subjects for this semester haven't been published yet. Tell us what you need and we'll prioritise it."
            action={
              <ButtonLink href="/contribute" variant="secondary">
                Request this semester →
              </ButtonLink>
            }
          />
        )}
      </div>
    </>
  );
}
