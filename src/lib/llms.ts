// /llms.txt and /llms-full.txt (https://llmstxt.org): a plain Markdown map of the site for AI
// assistants such as ChatGPT, Claude and Perplexity, so they can describe BTechi accurately and
// link to the right page. Built from the same data as the pages, so counts and links stay current.
// Ordered by what matters most: the exam portal, then topic-wise and most-repeated PYQs, then
// cheat sheets; the blog is last.

import { cheatSheetHref, cheatSheets } from "./data/cheat-notes";
import { QUALIFIER_CUTOFF, QUALIFIER_SUBJECTS, QUALIFIER_SYLLABUS } from "./data/qualifier-meta";
import { blogPostHref, getAllPosts } from "./blog";
import { blogCategories } from "./blog/categories";
import { loadContent } from "./cms";
import { subjectName } from "./content";
import { PYQ_EXAMS, PYQ_LEVELS, getPyqIndex } from "./pyq-index";
import { getQuestionSheets, type CourseSheets } from "./pyq-sheets";
import { PYQ_SHEETS_HREF } from "./pyq-urls";
import { hrefEnabled } from "./site";
import type { CheatBlock, CheatSheet } from "./types";
import { CONTACT_EMAIL, SITE_URL, YOUTUBE_URL } from "./utils";
import { REVIEW_SUMMARY } from "./data/reviews";
import { HOME_FAQ, IITM_ALIASES } from "./seo";

const abs = (path: string) => `${SITE_URL}${path}`;
const link = (title: string, path: string, note?: string) => `- [${title}](${abs(path)})${note ? `: ${note}` : ""}`;
const n = (x: number) => x.toLocaleString("en-IN");
const plural = (x: number, word: string) => `${n(x)} ${word}${x === 1 ? "" : "s"}`;

/** Most-repeated question types listed per course in llms.txt; llms-full.txt lists all of them. */
const TOP_REPEATS = 5;

/** A course's topic-wise and most-repeated sheets. `full` links every topic instead of naming them. */
function courseSheetLines(cs: CourseSheets, full: boolean): string[] {
  const { course, topics, repeated } = cs;
  const lines = [`#### ${course.name}${course.code ? ` (${course.code})` : ""}`, ""];
  if (repeated) {
    lines.push(
      link(`${course.name}: most repeated questions`, repeated.href, `${plural(repeated.types, "question type")} asked again and again across papers (${plural(repeated.questions, "question")})`),
      ...repeated.top.slice(0, full ? undefined : TOP_REPEATS).map((t) => `  - ${t.title}: asked ${plural(t.count, "time")}`),
    );
  }
  if (topics.length) {
    if (full) lines.push(...topics.map((t) => link(`${course.name}: ${t.title}`, t.href, `${t.summary} (${plural(t.questions, "question")} from ${plural(t.papers, "paper")})`)));
    else lines.push(link(`${course.name}: topic-wise questions`, cs.href, `${plural(topics.length, "topic")}: ${topics.map((t) => t.title).join("; ")}`));
  }
  return [...lines, ""];
}

async function overview(full = false) {
  await loadContent();
  const { pyqCourses, pyqTotals } = await getPyqIndex();
  const { sheetCourses } = await getQuestionSheets();
  const posts = getAllPosts();

  const pyqLines = PYQ_LEVELS.flatMap((level) => {
    const courses = pyqCourses.filter((c) => c.level === level.slug && c.papers.length > 0);
    if (!courses.length) return [];
    return [
      `### ${level.name}`,
      "",
      ...courses.map((c) => {
        const exams = PYQ_EXAMS.filter((e) => c.papers.some((p) => p.exam === e.slug)).map((e) => e.label);
        return link(`${c.name}${c.code ? ` (${c.code})` : ""} previous-year papers`, c.href, `${plural(c.papers.length, "paper")} (${exams.join(", ")}) to sit in the exam portal`);
      }),
      "",
    ];
  });

  const tagged = sheetCourses().filter((cs) => cs.topics.length > 0 || cs.repeated);
  const topicLines = PYQ_LEVELS.flatMap((level) => {
    const courses = tagged.filter((cs) => cs.course.level === level.slug);
    return courses.length ? [`### ${level.name}`, "", ...courses.flatMap((cs) => courseSheetLines(cs, full))] : [];
  });

  const sections: string[] = [
    "# BTechi",
    "",
    "> BTechi is a free online exam portal for IIT Madras BS students (BS in Data Science and Applications and BS in Management and Data Science). Students sit real previous-year Qualifier, Quiz 1, Quiz 2 and End Term papers in a portal that recreates the exam-centre experience: same layout, countdown timer, question palette, mark for review and on-screen scientific calculator, graded against the official answer keys. It also has topic-wise PYQs, the most repeated questions for every course, and cheat sheets with formulas and notes.",
    "",
    "Key facts:",
    "",
    `- Website: ${SITE_URL}. Tagline: "Sit the real exam before exam day."`,
    "- Main product: the Exam Portal, an online mock test that feels like sitting the IITM BS exam at the exam centre.",
    `- ${n(pyqTotals.papers)} real previous-year papers and ${n(pyqTotals.questions)} questions across ${pyqTotals.courses} courses, from Foundation to Degree level, graded against official answer keys.`,
    `- Topic-wise PYQs and the most repeated questions for ${plural(tagged.length, "course")}: every past question is tagged by topic, and repeated question types are ranked by how often they were asked.`,
    `- Qualifier mocks for the four qualifier courses (${QUALIFIER_SUBJECTS.map(subjectName).join(", ")}) with a pass/fail verdict against the General-category cutoff (at least ${QUALIFIER_CUTOFF.perSubject}% in every course and at least ${QUALIFIER_CUTOFF.average}% average).`,
    "- Cheat sheets built from recent PYQs: notes, formula sheets and common traps for each qualifier course, printable.",
    "- 100% free. No account is needed to take a mock exam or practise; signing up only saves progress across devices.",
    `- Also searched for as: ${IITM_ALIASES.join(", ")}.`,
    `- Rated ${REVIEW_SUMMARY.average}/5 by students preparing for the IIT Madras BS qualifier (${REVIEW_SUMMARY.count} reviews on the home page).`,
    `- Made by the team behind the BTechi IITian YouTube channel: ${YOUTUBE_URL}`,
    "- BTechi is not affiliated with, endorsed by or run by IIT Madras. Official deadlines, fees and rules are on the IIT Madras BS website.",
    `- Contact: ${CONTACT_EMAIL}`,
    "",
    "## Exam Portal (main product)",
    "",
    "The real exam-centre experience, online. Pick an exam, a year (or a random mock) and 1 to 4 subjects, then sit it exactly as you would on exam day:",
    "",
    "- Same screen layout as the IITM BS exam, with a live countdown timer that auto-submits at zero",
    "- Question palette showing answered, not answered, marked for review and not visited",
    "- On-screen scientific calculator, as provided in the exam centre",
    "- All IITM question types: single choice, multiple select, numerical answer and short text, including passage-based groups",
    "- Instant result graded against the official answer key, with the score for each subject",
    "",
    link("Exam Portal", "/exam", "sit a real End Term, Quiz 1, Quiz 2 or Qualifier paper, or a random mock, for 1-4 subjects together"),
    link("Qualifier mock tests", "/qualifier", "full 4-subject qualifier mocks with a pass/fail check against the cutoff"),
    link("Home", "/", "a live demo of the exam portal"),
    "",
    "## Topic-wise questions and most repeated questions",
    "",
    "Every past question is tagged by topic. For each course, BTechi has one sheet per topic (all past questions on that topic, across every paper) and a most-repeated sheet ranking the question types IITM asks again and again, with an answer key at the end.",
    "",
    link("Practice by topic", "/practice", "build a practice set by course, week, topic, difficulty and question type, with an explanation for every answer"),
    link("All topic-wise and most-repeated sheets", PYQ_SHEETS_HREF),
    "",
    ...topicLines,
    "## Previous-year papers (PYQs)",
    "",
    link("All PYQs", "/pyqs", "every paper by level and course; open any paper in the exam portal"),
    "",
    ...pyqLines,
    "## Cheat sheets, formulas and notes",
    "",
    "Built from recent qualifier PYQs. Each sheet has three views: full notes, a one-page formula (or rules) sheet, and common traps. All are printable.",
    "",
    link("All cheat sheets", "/qualifier/notes"),
    ...cheatSheets.flatMap((s) => [
      link(`${subjectName(s.subjectSlug)} notes`, cheatSheetHref(s), s.description),
      link(`${subjectName(s.subjectSlug)} ${s.quickLabel.toLowerCase()} sheet`, cheatSheetHref(s, "quick")),
      link(`${subjectName(s.subjectSlug)} common traps`, cheatSheetHref(s, "traps")),
    ]),
    "",
    "### Qualifier syllabus (weeks 1-4)",
    "",
    ...QUALIFIER_SUBJECTS.map((s) => `- ${subjectName(s)}: ${QUALIFIER_SYLLABUS[s].join("; ")}`),
    "",
    "## Frequently asked questions",
    "",
    ...HOME_FAQ.flatMap(({ q, a }) => [`### ${q}`, "", a, ""]),
    "## About",
    "",
    link("About BTechi", "/about"),
    link("Contact", "/contact"),
    link("Contribute", "/contribute", "how students can share notes and questions"),
    link("Disclaimer", "/disclaimer", "BTechi is an independent student resource, not an official IIT Madras website"),
    "",
    "## Optional",
    "",
    link("Full text", "/llms-full.txt", "this file with every topic and repeated question type, plus the complete cheat sheets and blog guides"),
    link("Blog", "/blog", `guides on the IITM BS, exams, data skills, AI and careers (${blogCategories.map((c) => c.name).join(", ")})`),
    ...posts.map((p) => link(p.title, blogPostHref(p.slug), p.description)),
    link("Sitemap", "/sitemap.xml"),
    link("Blog RSS feed", "/blog/rss.xml"),
    link("Privacy policy", "/privacy"),
    link("Terms of use", "/terms"),
    link("Copyright", "/copyright"),
    "",
  ];

  // Leave out links into sections this deployment has switched off.
  return sections.filter((line) => {
    const m = line.match(/\]\((https?:\/\/[^)]+)\)/);
    return !m || !m[1].startsWith(SITE_URL) || hrefEnabled(m[1].slice(SITE_URL.length) || "/");
  });
}

export async function llmsTxt() {
  return (await overview()).join("\n");
}

/** A cheat-sheet block as Markdown. */
function blockMd(b: CheatBlock): string[] {
  const heading = "title" in b && b.title ? [`**${b.title}**`, ""] : [];
  switch (b.kind) {
    case "formulas":
      return [...heading, ...b.items.map((i) => `- ${i.label}: ${i.f}${i.note ? ` (${i.note})` : ""}`), ""];
    case "table":
      return [...heading, `| ${b.head.join(" | ")} |`, `|${b.head.map(() => " --- |").join("")}`, ...b.rows.map((r) => `| ${r.join(" | ")} |`), ""];
    case "points":
      return [...heading, ...b.items.map((i) => `- ${i}`), ""];
    case "traps":
      return ["**Common traps**", "", ...b.items.map((i) => `- ${i}`), ""];
    case "code":
      return [...heading, "```", b.code, "```", ...(b.note ? [b.note] : []), ""];
    case "example":
      return [...heading, `Example: ${b.q}`, "", ...b.steps.map((step, i) => `${i + 1}. ${step}`), "", `Answer: ${b.answer}`, ""];
    case "tip":
      return [`Tip: ${b.text}`, ""];
    case "diagram":
      // Drawn on the page; the text version carries only its title and caption.
      return b.title || b.caption ? [...heading, ...(b.caption ? [b.caption] : []), ""] : [];
  }
}

function cheatSheetMd(sheet: CheatSheet): string {
  return [
    "---",
    "",
    `# ${subjectName(sheet.subjectSlug)} cheat sheet (IITM BS qualifier, weeks 1-4)`,
    "",
    `URL: ${abs(cheatSheetHref(sheet))}`,
    "",
    `> ${sheet.description}`,
    "",
    ...sheet.sections.flatMap((sec) => [`## Week ${sec.week}: ${sec.title}`, "", ...sec.blocks.flatMap(blockMd)]),
    "## Last-minute checklist",
    "",
    ...sheet.lastMinute.map((i) => `- ${i}`),
    "",
  ].join("\n");
}

/** llms.txt with every topic and repeat, then the full cheat sheets, then every blog guide. */
export async function llmsFullTxt() {
  const sheets = hrefEnabled("/qualifier/notes") ? cheatSheets.map(cheatSheetMd) : [];
  const posts = getAllPosts().map((p) =>
    [
      "---",
      "",
      `# ${p.title}`,
      "",
      `URL: ${abs(blogPostHref(p.slug))}`,
      `Published: ${p.date}. Updated: ${p.updated}. Author: ${p.author}.`,
      "",
      `> ${p.description}`,
      "",
      // Site-relative links made absolute.
      p.markdown.replace(/\]\(\//g, `](${SITE_URL}/`),
      "",
    ].join("\n"),
  );
  return [...(await overview(true)), "", ...sheets, ...posts].join("\n");
}
