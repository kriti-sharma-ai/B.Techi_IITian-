import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { ExamPortalStudio, type PortalCourse } from "@/components/exam-portal-studio";
import { PageFaq } from "@/components/page-faq";
import { PageHeader } from "@/components/ui";
import { END_TERM_SUBJECTS } from "@/lib/data/end-term/subjects";
import { getPyqIndex } from "@/lib/pyq-index";
import type { PyqExam } from "@/lib/pyq-urls";
import { getStudyScope } from "@/lib/study-scope";
import { loadContent } from "@/lib/cms";

export const metadata: Metadata = pageMetadata({
  title: "IIT Madras BS Mock Test: Free Quiz & End Term Exam Portal",
  description:
    "Free IIT Madras BS mock tests: sit real End Term, Quiz 1 and Quiz 2 papers for Data Science and Management courses on a timed exam screen with a calculator. Take 1 to 4 subjects together.",
  path: "/exam",
});

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
        title="IIT Madras BS mock test portal"
        description="Timed End Term, Quiz 1 and Quiz 2 papers from past IITM BS exams. Take 1 to 4 subjects together."
      />
      <div className="container-page py-8">
        <ExamPortalStudio courses={portalCourses} initialPlanned={scope.courses} />
      </div>
      <PageFaq title="IIT Madras BS mock test: frequently asked questions" items={EXAM_FAQ} />
    </>
  );
}

const EXAM_FAQ = [
  {
    q: "Is there a free IIT Madras BS mock test for Quiz 1, Quiz 2 and End Term?",
    a: "Yes. The BTechi Exam Portal has real past End Term, Quiz 1 and Quiz 2 papers as timed mock tests. It is free and needs no account.",
  },
  {
    q: "Is the mock test like the real IITM BS exam?",
    a: "It uses real past papers, a timer and an on-screen calculator, and you can sit 1 to 4 subjects in one go, like an exam day. Your score is checked against the official answer key at the end.",
  },
  {
    q: "Which courses have mock tests?",
    a: "Courses at Foundation, Diploma and Degree level of the BS in Data Science and Applications and the BS in Management and Data Science, wherever past papers are available.",
  },
  {
    q: "Where is the qualifier mock test?",
    a: "The qualifier has its own page, the Qualifier Pack, with full 4-subject qualifier papers and a cutoff check.",
  },
];
