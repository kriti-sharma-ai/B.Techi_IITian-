import type { Metadata } from "next";
import { CheckCircle2 } from "lucide-react";
import { ExamPortalStudio, type PortalCourse } from "@/components/exam-portal-studio";
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
    <div className="container-page py-6 lg:py-8 max-w-6xl">
      {/* Compact Clean Header */}
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-border pb-4">
        <div>
          <div className="flex items-center gap-2">
            <h1 className="text-xl font-bold tracking-tight text-fg sm:text-2xl">
              Exam Portal
            </h1>
            <span className="inline-flex items-center gap-1 rounded-full bg-brand/20 px-2 py-0.5 text-[11px] font-semibold text-fg">
              <CheckCircle2 className="size-3 text-brand" aria-hidden /> Real IITM BS PYQs
            </span>
          </div>
          <p className="mt-0.5 text-xs text-muted">
            Sit a timed End Term or Quiz paper. Pick 1 to 4 subjects to take them together.
          </p>
        </div>
      </div>

      {/* Streamlined Studio */}
      <ExamPortalStudio
        courses={portalCourses}
        initialPlanned={scope.courses}
      />
    </div>
  );
}
