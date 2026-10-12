import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import Link from "next/link";
import { redirect } from "next/navigation";
import { ArrowRight, ArrowUp } from "lucide-react";
import { ExamTag } from "@/components/exam-tag";
import { PageHeader } from "@/components/ui";
import { PracticeUnifiedSidebar } from "@/components/practice-unified-sidebar";
import { PracticeFormatStudio } from "@/components/practice-format-studio";
import { PracticeStats } from "@/components/practice-stats";
import { param } from "@/lib/filters";
import { getSubject } from "@/lib/content";
import { PYQ_LEVELS, getPyqIndex, type CoursePyqs, type PyqExam, type PyqIndex } from "@/lib/pyq-index";
import { getQuestionSheets, type QuestionSheets } from "@/lib/pyq-sheets";
import {
  PRACTICE_EXAMS,
  courseExams,
  examFromParam,
  practiceHref,
  getPyqPractice,
  quiz1Fallback,
  type PracticePlan,
  type PyqPractice,
} from "@/lib/pyq-practice";
import { isPyqLevel, type PyqLevel } from "@/lib/pyq-urls";
import { getStudyScope, type StudyScope } from "@/lib/study-scope";
import { loadContent } from "@/lib/cms";

export const metadata: Metadata = pageMetadata({
  title: "IITM BS PYQ Practice: Quiz 1, Quiz 2 & End Term Questions",
  description:
    "Practise real IITM BS previous-year questions by level, course and exam, with the official answer keys: quick sets, drills, full tests and timed mock exams.",
  path: "/practice",
});

export default async function PracticePage({ searchParams }: PageProps<"/practice">) {
  await loadContent();
  const sp = await searchParams;
  const [index, practice, scope, sheets] = await Promise.all([
    getPyqIndex(),
    getPyqPractice(),
    getStudyScope(sp),
    getQuestionSheets(),
  ]);

  // The Exam prep tab is hidden until its revision content (notes, videos, topic data) is published.
  // Its old links (?tab=exam&subject=…&exam=Quiz 1) open the same course and exam here.
  if (param(sp, "tab") === "exam") {
    const subject = param(sp, "subject") ?? param(sp, "course");
    const level = param(sp, "level") ?? (subject ? getSubject(subject)?.level : undefined);
    if (!subject && !level) redirect("/practice");
    const { course, exam } = resolveSelection(index, level, subject, param(sp, "exam"));
    redirect(subject ? practiceHref(course.slug, exam) : `/practice?level=${course.level}`);
  }

  return (
    <PracticeModes
      index={index}
      practice={practice}
      scope={scope}
      sheets={sheets}
      level={param(sp, "level")}
      course={param(sp, "course")}
      exam={param(sp, "exam")}
      format={param(sp, "format")}
      tab={param(sp, "view") ?? param(sp, "tab")}
    />
  );
}



/**
 * ?course= wins; ?level= opens that level's first course. Otherwise the student's
 * own courses (`prefer`, from their study profile) come first. End Term unless
 * the course has the asked-for exam; Quiz 1 falls back to the qualifier papers.
 */
function resolveSelection(
  { getPyqCourse, pyqCoursesForLevel, pyqCourses }: PyqIndex,
  levelParam?: string,
  courseParam?: string,
  examParam?: string,
  prefer: { courses: CoursePyqs[]; level?: PyqLevel } = { courses: [] },
) {
  const level = levelParam && isPyqLevel(levelParam) ? levelParam : undefined;
  const course =
    getPyqCourse(courseParam ?? "") ??
    prefer.courses.find((c) => !level || c.level === level) ??
    pyqCoursesForLevel(level ?? prefer.level ?? "foundation")[0] ??
    pyqCourses[0];
  const exams = courseExams(course);
  const asked = examFromParam(examParam);
  const wanted = asked === "quiz-1" ? quiz1Fallback(exams) : asked;
  const exam: PyqExam = wanted && exams.includes(wanted) ? wanted : exams.includes("end-term") ? "end-term" : exams[0];
  return { course, exam };
}

/** A course's exams in term order. The Qualifier is listed only for the courses it examines; the others show "No papers yet" when empty. */
const EXAM_CHOICES: { label: string; exam: PyqExam; onlyWithPapers?: boolean }[] = [
  { label: "Qualifier", exam: "qualifier", onlyWithPapers: true },
  { label: "Quiz 1", exam: "quiz-1" },
  { label: "Quiz 2", exam: "quiz-2" },
  { label: "End Term", exam: "end-term" },
];

/**
 * The chooser on the left (pinned on desktop); on the right, everything for the
 * chosen course and exam: what it covers, ways to practise, tests, and the real papers.
 */
function PracticeModes({
  index,
  practice,
  scope,
  sheets,
  ...props
}: {
  index: PyqIndex;
  practice: PyqPractice;
  scope: StudyScope;
  sheets: QuestionSheets;
  level?: string;
  course?: string;
  exam?: string;
  format?: string;
  tab?: string;
}) {
  // The student's courses that have papers to practise.
  const mine = scope.courses.map((slug) => index.getPyqCourse(slug)).filter((c): c is CoursePyqs => !!c && c.papers.length > 0);
  const { course, exam } = resolveSelection(index, props.level, props.course, props.exam, { courses: mine, level: scope.level });
  const plan = practice.practicePlan(course.slug, exam)!;
  const courseSheets = sheets.courseSheets(course.slug);

  const levelsWithCourses = PYQ_LEVELS.map((lvl) => ({
    levelSlug: lvl.slug,
    levelName: lvl.name,
    courses: index.pyqCoursesForLevel(lvl.slug).map((c) => ({
      slug: c.slug,
      name: c.name,
      code: c.code,
    })),
  })).filter((lvl) => lvl.courses.length > 0);

  const examOptions = EXAM_CHOICES.filter((c) => !c.onlyWithPapers || course.papers.some((p) => p.exam === c.exam)).map((choice) => {
    const papers = course.papers.filter((p) => p.exam === choice.exam).length;
    const info = papers ? PRACTICE_EXAMS[choice.exam] : undefined;
    return {
      exam: choice.exam,
      label: info?.label ?? choice.label,
      papers,
    };
  });

  return (
    <>
      <PageHeader
        crumbs={[{ label: "Practice" }]}
        title="Practice"
        description="Previous-year questions with official answer keys."
      />
      <div className="container-page py-8">
        <div className="grid gap-8 lg:grid-cols-[19rem_minmax(0,1fr)] lg:items-start xl:grid-cols-[21rem_minmax(0,1fr)]">
          {/* Scrolls on its own if it outgrows a short screen, so the unified sidebar stays reachable while pinned. */}
          <aside id="choose" className="scroll-mt-20 space-y-4 lg:sticky lg:top-20 lg:-m-1 lg:max-h-[calc(100dvh-6rem)] lg:overflow-y-auto lg:p-1">
            <PracticeUnifiedSidebar
              currentCourse={{ slug: course.slug, name: course.name, code: course.code }}
              currentExam={exam}
              levels={levelsWithCourses}
              exams={examOptions}
            />
            <PracticeStats />
          </aside>

          <div className="min-w-0 space-y-6">
            <PracticeFormatStudio
              plan={plan}
              courseSheets={courseSheets}
              initialFormat={props.format === "paper" ? "paper" : undefined}
              initialTab={props.tab}
              header={<CourseHeader plan={plan} />}
            />
          </div>
        </div>
      </div>
    </>
  );
}

/** Compact minimalist course & exam header */
function CourseHeader({ plan }: { plan: PracticePlan }) {
  const { course, exam, level, papers } = plan;
  return (
    <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border pb-3.5">
      <div>
        <p className="flex items-center gap-1.5 text-xs text-muted">
          <span>{level.name}</span>
          {course.code && <span className="font-mono">· {course.code}</span>}
        </p>
        <h2 className="mt-0.5 text-base font-bold tracking-tight text-fg">{course.name}</h2>
      </div>
      <div className="flex items-center gap-2">
        <ExamTag exam={exam} />
        <span className="rounded-lg bg-surface-2 px-2.5 py-1 text-xs font-semibold text-muted tabular-nums">
          {papers.length} {papers.length === 1 ? "paper" : "papers"} · {plan.questions} Qs
        </span>
        {/* Phones: the chooser sits above, so offer a jump back to it. */}
        <a href="#choose" className="inline-flex items-center gap-1 text-xs font-semibold text-muted hover:text-fg lg:hidden">
          <ArrowUp className="size-3.5" aria-hidden /> Change
        </a>
      </div>
    </div>
  );
}


