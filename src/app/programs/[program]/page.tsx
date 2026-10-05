import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, GraduationCap } from "lucide-react";
import { programIcons } from "@/components/cards";
import { PageHeader } from "@/components/ui";
import { getProgram, programs, subjectsForSemester } from "@/lib/content";
import { accentStyles, cn } from "@/lib/utils";

export const dynamicParams = false;
export const generateStaticParams = () => programs.map((p) => ({ program: p.slug }));

export async function generateMetadata({ params }: PageProps<"/programs/[program]">): Promise<Metadata> {
  const p = getProgram((await params).program);
  if (!p) return {};
  return {
    title: `${p.name}: ${p.tagline}`,
    description: `${p.description} Notes, videos, PYQs and practice for every semester.`,
    alternates: { canonical: `/programs/${p.slug}` },
  };
}

export default async function ProgramPage({ params }: PageProps<"/programs/[program]">) {
  const program = getProgram((await params).program);
  if (!program) notFound();
  const a = accentStyles[program.accent];
  const Icon = programIcons[program.slug] ?? GraduationCap;

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Programs", href: "/programs" }, { label: program.name }]}
        eyebrow={
          <span className="inline-flex items-center gap-2">
            <span className={cn("grid size-6 place-items-center rounded-md", a.soft, a.text)}>
              <Icon className="size-3.5" aria-hidden />
            </span>
            {program.degree} · {program.university}
          </span>
        }
        title={program.name}
        description={program.description}
      />
      <div className="container-page py-10">
        <h2 className="mb-4 text-lg font-bold">Choose a semester</h2>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {Array.from({ length: program.semesters }, (_, i) => i + 1).map((sem) => {
            const subs = subjectsForSemester(program.slug, sem);
            const ready = subs.length > 0;
            return (
              <Link
                key={sem}
                href={`/programs/${program.slug}/semester-${sem}`}
                className={cn("card group flex flex-col p-5", ready ? "card-hover" : "opacity-70 hover:opacity-100")}
              >
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-muted">Semester</p>
                  {ready ? (
                    <span className={cn("h-1.5 w-8 rounded-full", a.bar)} aria-hidden />
                  ) : (
                    <span className="text-xs text-muted">Coming soon</span>
                  )}
                </div>
                <p className="text-4xl font-extrabold tracking-tight tabular-nums">{sem}</p>
                {ready ? (
                  <ul className="mt-3 space-y-1 text-sm text-muted">
                    {subs.map((s) => (
                      <li key={s.slug} className="truncate">
                        {s.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-3 text-sm text-muted">We&apos;re building this semester.</p>
                )}
                <span className="mt-auto inline-flex items-center gap-1 pt-4 text-sm font-semibold">
                  {ready ? `${subs.length} subject${subs.length > 1 ? "s" : ""}` : "Request content"}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
                </span>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
