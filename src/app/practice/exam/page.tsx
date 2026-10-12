import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import { QualifierExam } from "@/components/qualifier-exam";
import { QualifierResult } from "@/components/qualifier-result";
import { param } from "@/lib/filters";
import { examFromParam, getPyqPractice } from "@/lib/pyq-practice";
import { examHref } from "@/lib/pyq-urls";

export const metadata: Metadata = {
  title: "Exam",
  robots: { index: false },
};

/** One timed exam over the one to four courses picked on the practice page (components/exam-launcher.tsx). */
export default async function PracticeExamPage({ searchParams }: PageProps<"/practice/exam">) {
  const sp = await searchParams;
  const exam = examFromParam(param(sp, "exam")) ?? "end-term";
  const courses = (param(sp, "courses") ?? "").split(".").filter(Boolean);
  if (courses.length === 0) redirect("/exam");

  const year = param(sp, "year");

  // The seed pins the paper, so a refresh resumes it and the result page rebuilds it. Draw one when the link has none.
  const seedParam = param(sp, "seed");
  const seed = Number(seedParam);
  if (!seedParam || !Number.isSafeInteger(seed) || seed < 0) redirect(examHref(courses, exam, Math.floor(Math.random() * 2 ** 31), year));

  const { buildExamMock } = await getPyqPractice();
  const mock = buildExamMock(courses, exam, seed, year);
  if (!mock) notFound();

  const attempt = param(sp, "attempt");
  return attempt ? <QualifierResult mock={mock} attemptId={attempt} /> : <QualifierExam mock={mock} />;
}
