import type { Metadata } from "next";
import { ExamPortalStudio, type PortalCourse } from "@/components/exam-portal-studio";
import { PageHeader } from "@/components/ui";
import { END_TERM_SUBJECTS } from "@/lib/data/end-term/subjects";
import { getPyqIndex } from "@/lib/pyq-index";
import type { PyqExam } from "@/lib/pyq-urls";
import { getStudyScope } from "@/lib/study-scope";
import { loadContent } from "@/lib/cms";

export const metadata: Metadata = {
  title: "Exam Portal · Real IIT Madras BS PYQs",
  description:
    "Sit official IIT Madras BS End Term and Quiz papers on a timed exam screen with a calculator. Take 1 to 4 subjects together.",
  alternates: { canonical: "/exam" },
};

// The Qualifier has its own page with full 4-hour papers and the cutoff check.
const EXAM_KEYS: PyqExam[] = ["end-term", "quiz-1", "quiz-2"];

export default async function ExamPortalPage({
  searchParams,
}: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  await loadContent();
  const sp = await searchParams;
  const [index, scope] = await Promise.all([
    getPyqIndex(),
    getStudyScope(sp),
  ]);

  const endTermLevelMap = new Map(END_TERM_SUBJECTS.map((s) => [s.slug, s.level]));

  const portalCourses: PortalCourse[] = index.pyqCourses
    .filter((c) => c.papers.length > 0)
    .map((c) => {
      const minutes: Partial<Record<PyqExam, number>> = {};
      const paperCounts: Partial<Record<PyqExam, number>> = {};
      const yearsPerExam: Partial<Record<PyqExam, string[]>> = {};

      for (const exam of EXAM_KEYS) {
        const examPapers = c.papers.filter((p) => p.exam === exam);
        if (examPapers.length > 0) {
          paperCounts[exam] = examPapers.length;
          const sorted = examPapers.map((p) => p.durationMin).sort((a, b) => a - b);
          minutes[exam] = sorted[Math.floor(sorted.length / 2)] || 60;
          yearsPerExam[exam] = Array.from(
            new Set(examPapers.map((p) => p.sortKey.slice(0, 4)).filter((y) => y.startsWith("20")))
          ).sort((a, b) => b.localeCompare(a));
        }
      }

      const etLevel = endTermLevelMap.get(c.slug);
      let group = "Foundation";
      if (etLevel === "diploma-programming") group = "Diploma in Programming";
      else if (etLevel === "diploma-data-science") group = "Diploma in Data Science";
      else if (etLevel === "degree" || c.level === "degree") group = "BS Degree";

      const courseYears = Array.from(
        new Set(c.papers.map((p) => p.sortKey.slice(0, 4)).filter((y) => y.startsWith("20")))
      ).sort((a, b) => b.localeCompare(a));

      return {
        slug: c.slug,
        name: c.name,
        short: c.short,
        code: c.code,
        level: c.level,
        group,
        minutes,
        paperCounts,
        years: courseYears,
        yearsPerExam,
      };
    });

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Exam Portal" }]}
        title="Exam Portal"
        description="Timed End Term and Quiz papers. Take 1 to 4 subjects together."
      />
      <div className="container-page py-8">
        <ExamPortalStudio courses={portalCourses} initialPlanned={scope.courses} />
      </div>
    </>
  );
}
