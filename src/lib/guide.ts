// The site guide: the chat bubble that sends students to the right page.
// It runs fully in the browser on a small map of the site (built on the server
// in components/guide.tsx), so it answers instantly and needs no AI key.
// It understands course nicknames ("stats 1", "pdsa"), exam names ("quiz 2"),
// levels, small typos, and what the student wants to do (sit a paper, read
// notes, download a PDF, check the cutoff …), then answers with links.

import type { PyqExam, PyqLevel } from "./pyq-urls";

/* ───────────── Data handed over by the server ───────────── */

export type GuideCourse = {
  slug: string;
  name: string;
  short: string;
  level: PyqLevel;
  /** /pyqs/<level>/<course> */
  href: string;
  sheetsHref: string;
  practiceHref: string;
  /** Paper count per exam, only exams that have papers. */
  exams: Partial<Record<PyqExam, number>>;
  /** Newest paper of each exam, to sit straight away. */
  latest: Partial<Record<PyqExam, { label: string; href: string }>>;
  /** Qualifier cheat notes for this course, when there are some. */
  notesHref?: string;
};

export type GuidePost = { title: string; href: string; keyword: string; tags: string[] };

/** Each course's question sheets by topic, by year and most repeated (lib/guide-data.ts, getGuideCatalog). */
export type GuideCatalog = Record<
  string,
  {
    topics: { title: string; href: string; questions: number }[];
    years: { year: string; href: string; questions: number }[];
    repeated?: { href: string; types: number; top: { title: string; count: number; href: string }[] };
  }
>;

export type GuideData = {
  courses: GuideCourse[];
  posts: GuidePost[];
  qualifier: {
    cutoff: { perSubject: number; average: number };
    syllabus: { course: string; topics: string[] }[];
  };
  /** Optional sections that are switched on (search, notes, videos …). */
  sections: string[];
  /** True when the server has an AI model to ask about questions the rules can't place. */
  ai: boolean;
  /** Topic, year and most-repeated sheets; the bubble loads it when it opens (app/api/guide/catalog). */
  catalog?: GuideCatalog;
};

/* ───────────── What the guide answers with ───────────── */

export type GuideLink = { label: string; href: string; note?: string };
/** A follow-up button: sends `query` as if the student typed it. */
export type GuideChip = { label: string; query: string };
export type GuideReply = {
  text: string;
  links?: GuideLink[];
  chips?: GuideChip[];
  /** The rules didn't understand the question: worth asking the AI model (app/api/guide). */
  fallback?: boolean;
  /** Written by the AI model. */
  ai?: boolean;
};

/** What the guide knows about the student, read from the local store. */
export type GuideContext = {
  pathname: string;
  signedIn: boolean;
  planLevel?: PyqLevel;
  planCourses: string[];
  lastAttempt?: { title: string; href: string };
  /** Course named in one of the last messages, for follow-ups like "what about quiz 2". */
  lastCourse?: string;
};

/* ───────────── Words ───────────── */

export const normalize = (s: string) =>
  ` ${s
    .toLowerCase()
    .replace(/[’']/g, "")
    .replace(/\bii\b/g, "2") // "maths ii" → "maths 2"
    // "maths i" → "maths 1", but leave the pronoun alone ("i need stats").
    .replace(/\b(maths?|mathematics|stats?|statistics|science|english|eng|development|mad)\s+i\b/g, "$1 1")
    .replace(/([a-z])(\d)/g, "$1 $2") // "stats1" → "stats 1"
    .replace(/[^a-z0-9]+/g, " ")
    .trim()} `;

/** Edit distance up to 2, for small typos ("statistcs", "qualifer"). */
function close(a: string, b: string) {
  if (a === b) return true;
  // Short words must match exactly: "test" is not "text".
  if (Math.abs(a.length - b.length) > 1 || a.length < 5 || b.length < 5) return false;
  const max = a.length >= 10 ? 2 : 1;
  let prev = Array.from({ length: b.length + 1 }, (_, i) => i);
  for (let i = 1; i <= a.length; i++) {
    const cur = [i];
    for (let j = 1; j <= b.length; j++)
      cur[j] = Math.min(prev[j] + 1, cur[j - 1] + 1, prev[j - 1] + (a[i - 1] === b[j - 1] ? 0 : 1));
    prev = cur;
  }
  return prev[b.length] <= max;
}

/** True when the phrase is in the text, as whole words, allowing small typos in long words. */
function has(text: string, phrase: string) {
  if (text.includes(` ${phrase} `)) return true;
  const want = phrase.split(" ");
  const words = text.trim().split(" ");
  outer: for (let i = 0; i + want.length <= words.length; i++) {
    for (let j = 0; j < want.length; j++) if (!close(words[i + j], want[j])) continue outer;
    return true;
  }
  return false;
}

const any = (text: string, phrases: string[]) => phrases.some((p) => has(text, p));

/** Whole words, no typo matching: for small talk and guardrails, where "there" must not read as "theme". */
const exact = (text: string, phrases: string[]) => phrases.some((p) => text.includes(` ${p} `));

/* ───────────── Entities ───────────── */

/** Extra names students use, by course slug. The course's own name and short name always count. */
const COURSE_ALIASES: Record<string, string[]> = {
  "mathematics-for-data-science-1": ["maths 1", "math 1", "mathematics 1", "m 1", "ma 1", "maths"],
  "statistics-for-data-science-1": ["stats 1", "stat 1", "statistics 1", "s 1", "stats", "statistics"],
  "computational-thinking": ["ct", "computational thinking", "comp thinking"],
  "english-1": ["english 1", "eng 1", "english"],
  "mathematics-for-data-science-2": ["maths 2", "math 2", "mathematics 2", "m 2"],
  "statistics-for-data-science-2": ["stats 2", "stat 2", "statistics 2", "s 2"],
  "programming-in-python": ["python", "pip", "programming in python"],
  "english-2": ["english 2", "eng 2"],
  "database-management-systems": ["dbms", "database", "sql"],
  "programming-data-structures-and-algorithms": ["pdsa", "dsa", "data structures", "algorithms"],
  "modern-application-development-1": ["mad 1", "app dev 1", "mad"],
  "modern-application-development-2": ["mad 2", "app dev 2"],
  "programming-concepts-using-java": ["java"],
  "system-commands": ["system commands", "linux", "sc"],
  "machine-learning-foundations": ["mlf", "ml foundations"],
  "machine-learning-techniques": ["mlt", "ml techniques"],
  "machine-learning-practice": ["mlp", "ml practice"],
  "business-data-management": ["bdm"],
  "business-analytics": ["ba", "business analytics"],
  "tools-in-data-science": ["tds", "tools in data science"],
};

/** Longest alias first, so "maths 2" wins over "maths". */
function findCourses(text: string, courses: GuideCourse[]) {
  const hits: { course: GuideCourse; len: number }[] = [];
  for (const c of courses) {
    const names = [...(COURSE_ALIASES[c.slug] ?? []), normalize(c.short).trim(), normalize(c.name).trim()];
    const best = names.filter((n) => n && has(text, n)).sort((a, b) => b.length - a.length)[0];
    if (best) hits.push({ course: c, len: best.length });
  }
  hits.sort((a, b) => b.len - a.len);
  // "maths 2" also matches the bare "maths" alias of Maths I: keep only the longer reading.
  return hits
    .filter((h, i) => !hits.slice(0, i).some((o) => sameFamily(o.course, h.course) && o.len > h.len))
    .map((h) => h.course);
}

const family = (slug: string) => slug.replace(/-\d$/, "");
const sameFamily = (a: GuideCourse, b: GuideCourse) => a.slug !== b.slug && family(a.slug) === family(b.slug);

const LEVELS: { slug: PyqLevel; name: string; words: string[] }[] = [
  { slug: "foundation", name: "Foundation", words: ["foundation"] },
  { slug: "diploma", name: "Diploma", words: ["diploma", "programming diploma", "data science diploma"] },
  // Plain "degree" means the whole programme ("can I do this degree while working"), not the level.
  { slug: "degree", name: "Degree", words: ["degree level", "degree courses", "degree course", "degree subjects", "degree papers"] },
];

const EXAMS: { slug: PyqExam; name: string; words: string[] }[] = [
  { slug: "end-term", name: "End Term", words: ["end term", "endterm", "end sem", "final", "finals", "et"] },
  { slug: "quiz-2", name: "Quiz 2", words: ["quiz 2", "q 2", "oppe 2"] },
  { slug: "quiz-1", name: "Quiz 1", words: ["quiz 1", "q 1"] },
  { slug: "qualifier", name: "Qualifier", words: ["qualifier", "qualifying", "qualify", "entrance"] },
];

const levelName = (l: PyqLevel) => LEVELS.find((x) => x.slug === l)!.name;
const examName = (e: PyqExam) => EXAMS.find((x) => x.slug === e)!.name;

/* ───────────── Intents ───────────── */

type Intent =
  | "greet"
  | "thanks"
  | "help"
  | "papers"
  | "mock"
  | "practice"
  | "sheets"
  | "notes"
  | "cutoff"
  | "syllabus"
  | "calculator"
  | "blog"
  | "admission"
  | "progress"
  | "saved"
  | "profile"
  | "login"
  | "signup"
  | "password"
  | "reviews"
  | "contact"
  | "about"
  | "contribute"
  | "legal"
  | "search"
  | "videos"
  | "books";

/** Phrases per intent. Order matters only for ties: earlier wins. */
const INTENTS: [Intent, string[]][] = [
  ["password", ["forgot password", "reset password", "change password", "password"]],
  ["signup", ["sign up", "signup", "register", "create account", "new account", "join"]],
  ["login", ["log in", "login", "sign in", "signin", "logout", "log out", "sign out", "signout", "account"]],
  ["cutoff", ["cutoff", "cut off", "pass", "passing", "pass mark", "minimum marks", "marks needed", "how much marks", "eligibility", "score needed"]],
  ["syllabus", ["syllabus", "what comes", "what is asked", "portion"]],
  ["calculator", ["calculator", "calc"]],
  ["sheets", ["pdf", "print", "download", "question sheet", "sheets", "worksheet", "offline", "on paper", "repeated", "most asked", "important questions"]],
  ["mock", ["mock", "mock test", "test", "exam portal", "portal", "timed", "attempt", "sit", "simulate", "real exam", "exam"]],
  ["practice", ["practice", "practise", "drill", "solve", "questions", "mcq", "quiz me"]],
  ["papers", ["pyq", "pyqs", "previous year", "past paper", "past papers", "old paper", "question paper", "papers", "paper", "answer key"]],
  ["notes", ["notes", "cheat sheet", "cheatsheet", "formula", "formulas", "revision", "revise", "summary", "short notes", "traps"]],
  ["admission", ["admission", "apply", "application", "fees", "fee", "how to join", "january 2027", "management vs", "which program", "data science vs"]],
  ["progress", ["dashboard", "progress", "my score", "my result", "results", "history", "my attempts", "stats page", "performance"]],
  ["saved", ["saved", "bookmark", "bookmarks", "favourite", "favorites"]],
  ["profile", ["profile", "my courses", "study plan", "change level", "change courses", "set courses"]],
  ["reviews", ["review", "reviews", "rating", "feedback", "testimonial"]],
  ["contribute", ["contribute", "upload paper", "share paper", "help build", "volunteer"]],
  ["contact", ["contact", "email", "support", "report", "bug", "mistake", "wrong answer", "error in", "reach you"]],
  ["about", ["about", "what is btechi", "official", "affiliated"]],
  ["legal", ["privacy", "terms", "copyright", "disclaimer", "policy"]],
  ["blog", ["blog", "guide", "article", "strategy", "tips", "how to prepare", "roadmap", "career", "careers", "plan"]],
  ["videos", ["video", "videos", "youtube", "lecture", "lectures"]],
  ["books", ["book", "books", "textbook"]],
  ["search", ["search", "find"]],
  ["thanks", ["thanks", "thank you", "thx", "ty", "great", "nice", "ok thanks", "cool"]],
  ["help", ["help", "what can you do", "menu", "options", "start", "lost", "confused", "where"]],
  ["greet", ["hi", "hello", "hey", "hii", "namaste", "good morning", "good evening", "yo"]],
];

function findIntents(text: string) {
  const found = INTENTS.filter(([, words]) => any(text, words)).map(([i]) => i);
  // "cheat sheet" and "formula sheet" are notes, not question sheets.
  if (any(text, ["cheat", "cheat sheet", "formula", "formulas", "formula sheet"])) return found.filter((i) => i !== "sheets");
  return found;
}

/* ───────────── Static pages ───────────── */

const PAGES = {
  home: { label: "Home", href: "/" },
  pyqs: { label: "All past papers", href: "/pyqs", note: "Every PYQ by level and course" },
  sheets: { label: "Question sheets (PDF)", href: "/pyqs/sheets", note: "Print or save papers as PDF" },
  exam: { label: "Exam portal", href: "/exam", note: "Timed End Term and quiz papers, 1 to 4 courses" },
  qualifier: { label: "Qualifier pack", href: "/qualifier", note: "Full 4-hour mocks with the cutoff check" },
  qualifierNotes: { label: "Qualifier cheat notes", href: "/qualifier/notes", note: "Formulas, quick notes and traps" },
  practice: { label: "Practice", href: "/practice", note: "Real past questions, one course at a time" },
  blog: { label: "Blog", href: "/blog", note: "Guides on the IITM BS, exams and careers" },
  dashboard: { label: "Dashboard", href: "/dashboard", note: "Your scores and recent attempts" },
  saved: { label: "Saved", href: "/saved", note: "Things you bookmarked" },
  profile: { label: "Study profile", href: "/profile", note: "Pick your level and courses" },
  login: { label: "Log in", href: "/login" },
  signup: { label: "Create a free account", href: "/signup" },
  reset: { label: "Reset password", href: "/reset-password" },
  reviews: { label: "Reviews", href: "/reviews" },
  contact: { label: "Contact", href: "/contact" },
  about: { label: "About BTechi", href: "/about" },
  contribute: { label: "Contribute", href: "/contribute" },
  privacy: { label: "Privacy policy", href: "/privacy" },
  terms: { label: "Terms of use", href: "/terms" },
  copyright: { label: "Copyright policy", href: "/copyright" },
  disclaimer: { label: "Disclaimer", href: "/disclaimer" },
  search: { label: "Search", href: "/search" },
  videos: { label: "Videos", href: "/videos" },
  books: { label: "Books", href: "/books" },
  notes: { label: "Notes", href: "/notes" },
} satisfies Record<string, GuideLink>;

/* ───────────── Answers ───────────── */

const START_CHIPS: GuideChip[] = [
  { label: "Past papers (PYQs)", query: "past papers" },
  { label: "Take a mock test", query: "mock test" },
  { label: "Qualifier help", query: "qualifier" },
  { label: "Topic-wise PYQs", query: "topic wise" },
  { label: "Most repeated", query: "most repeated" },
  { label: "Download PDF sheets", query: "pdf sheets" },
  { label: "Cheat notes", query: "cheat notes" },
  { label: "My progress", query: "dashboard" },
];

export function welcome(ctx: GuideContext, data: GuideData): GuideReply {
  const chips = [...START_CHIPS];
  const mine = ctx.planCourses
    .map((s) => data.courses.find((c) => c.slug === s))
    .filter((c): c is GuideCourse => !!c)
    .slice(0, 3);
  for (const c of mine.reverse()) chips.unshift({ label: c.short, query: c.short });
  const links: GuideLink[] = [];
  if (ctx.lastAttempt) links.push({ label: `Continue: ${ctx.lastAttempt.title}`, href: ctx.lastAttempt.href, note: "Your last paper" });
  links.push(...pageTips(ctx.pathname, data));
  return {
    text: "Hi! I am the BTechi guide. Tell me what you need, like \"stats 1 quiz 2 papers\" or \"qualifier cutoff\". Or tap a button.",
    links: links.length ? links : undefined,
    chips,
  };
}

/** Next steps that fit the page the student is on. */
function pageTips(pathname: string, data: GuideData): GuideLink[] {
  const course = data.courses.find((c) => pathname.startsWith(c.href));
  if (course)
    return [
      { label: `Practice ${course.short}`, href: course.practiceHref, note: "Real past questions" },
      { label: `${course.short} question sheets`, href: course.sheetsHref, note: "Save as PDF" },
    ];
  if (pathname.startsWith("/qualifier/notes")) return [PAGES.qualifier];
  if (pathname.startsWith("/qualifier")) return [PAGES.qualifierNotes];
  if (pathname.startsWith("/blog")) return [PAGES.pyqs, PAGES.exam];
  return [];
}

function courseReply(c: GuideCourse, intents: Intent[], exam?: PyqExam): GuideReply {
  const examsHave = (Object.keys(c.exams) as PyqExam[]).sort(
    (a, b) => EXAMS.findIndex((e) => e.slug === a) - EXAMS.findIndex((e) => e.slug === b),
  );
  const links: GuideLink[] = [];
  const wantsSheet = intents.includes("sheets");
  const wantsMock = intents.includes("mock");
  const wantsPractice = intents.includes("practice");
  const wantsNotes = intents.includes("notes");

  if (exam && !c.exams[exam]) {
    const other = examsHave.map(examName).join(", ");
    return {
      text: `I have no ${examName(exam)} papers for ${c.short} yet.${other ? ` I do have ${other} papers.` : ""}`,
      links: [{ label: `${c.short} past papers`, href: c.href }],
      chips: examsHave.slice(0, 3).map((e) => ({ label: `${c.short} ${examName(e)}`, query: `${c.short} ${examName(e)}` })),
    };
  }

  if (exam) {
    const latest = c.latest[exam];
    if (latest) links.push({ label: `Sit ${latest.label}`, href: latest.href, note: "Newest paper, timed" });
    links.push({ label: `All ${c.short} ${examName(exam)} papers`, href: `${c.href}#${exam}`, note: `${c.exams[exam]} papers` });
  } else {
    links.push({ label: `${c.short} past papers`, href: c.href, note: examsHave.map((e) => `${c.exams[e]} ${examName(e)}`).join(" · ") });
  }
  const practice = { label: `Practice ${c.short} questions`, href: exam ? `${c.practiceHref}${exam === "end-term" ? "" : `&exam=${exam}`}` : c.practiceHref, note: "With answer keys" };
  const sheets = { label: `${c.short} question sheets (PDF)`, href: c.sheetsHref, note: "By paper, year, topic and most repeated" };
  const notes = c.notesHref ? { label: `${c.short} cheat notes`, href: c.notesHref, note: "Formulas and traps" } : undefined;

  // Put what they asked for first.
  if (wantsSheet) links.unshift(sheets);
  else links.push(sheets);
  if (wantsPractice) links.unshift(practice);
  else links.push(practice);
  if (notes && wantsNotes) links.unshift(notes);
  else if (notes) links.push(notes);
  if (wantsMock && !exam) links.unshift({ label: "Exam portal", href: c.level === "foundation" && c.exams.qualifier && !c.exams["end-term"] ? "/qualifier" : "/exam", note: "Timed papers with a calculator" });

  const text =
    wantsNotes && !notes
      ? `I have no cheat notes for ${c.short} yet. Here is what I have for it:`
      : exam
        ? `${c.name}, ${examName(exam)}. Here you go:`
        : wantsSheet || wantsPractice || wantsNotes || wantsMock
          ? `${c.name}. Here you go:`
          : `${c.name} (${levelName(c.level)} level). What do you want to do?`;
  return {
    text,
    links: dedupe(links),
    chips: exam ? undefined : examsHave.slice(0, 3).map((e) => ({ label: `${examName(e)} papers`, query: `${c.short} ${examName(e)}` })),
  };
}

function levelReply(level: PyqLevel, data: GuideData, intents: Intent[], mode?: SheetMode): GuideReply {
  const list = data.courses.filter((c) => c.level === level);
  const then = mode ? MODE_WORDS[mode] : intents.includes("sheets") ? "pdf" : intents.includes("practice") ? "practice" : "";
  return {
    text: `${levelName(level)} level has ${list.length} courses with past papers. Pick one:`,
    links: [{ label: `${levelName(level)} past papers`, href: `/pyqs/${level}` }],
    chips: list.map((c) => ({ label: c.short, query: `${c.short} ${then}`.trim() })),
  };
}

const askLevel = (text: string, then: string): GuideReply => ({
  text,
  chips: LEVELS.map((l) => ({ label: l.name, query: `${l.name} ${then}` })),
});

function examReply(exam: PyqExam, data: GuideData, intents: Intent[]): GuideReply {
  if (exam === "qualifier") return qualifierReply(data, intents);
  const courses = data.courses.filter((c) => c.exams[exam]);
  return {
    text: `${examName(exam)} papers. Which course?`,
    links: [PAGES.exam, PAGES.pyqs],
    chips: courses.slice(0, 12).map((c) => ({ label: c.short, query: `${c.short} ${examName(exam)}` })),
  };
}

function qualifierReply(data: GuideData, intents: Intent[]): GuideReply {
  const { cutoff } = data.qualifier;
  const qual = data.courses.filter((c) => c.exams.qualifier);
  if (intents.includes("cutoff")) return cutoffReply(data);
  if (intents.includes("syllabus")) return syllabusReply(data);
  const links: GuideLink[] = [];
  if (intents.includes("notes")) links.push(PAGES.qualifierNotes, PAGES.qualifier);
  else if (intents.includes("sheets")) links.push(...qual.map((c) => ({ label: `${c.short} qualifier sheets`, href: c.sheetsHref })), PAGES.qualifier);
  else links.push(PAGES.qualifier, PAGES.qualifierNotes);
  const guide = data.posts.find((p) => /qualifier-exam-guide/.test(p.href));
  if (guide) links.push({ label: guide.title, href: guide.href, note: "Full guide" });
  return {
    text: `The qualifier tests weeks 1 to 4 of Maths 1, Stats 1, CT and English 1. To pass you need ${cutoff.perSubject}% in each course and ${cutoff.average}% average (general category).`,
    links: dedupe(links),
    chips: [
      { label: "Syllabus", query: "qualifier syllabus" },
      { label: "Cheat notes", query: "qualifier notes" },
      ...qual.map((c) => ({ label: `${c.short} qualifier`, query: `${c.short} qualifier` })),
    ],
  };
}

function cutoffReply(data: GuideData): GuideReply {
  const { cutoff } = data.qualifier;
  return {
    text: `Qualifier cutoff (general category): at least ${cutoff.perSubject}% in every course, and at least ${cutoff.average}% average across all four. The qualifier pack checks this for you after each mock. Always confirm on the official IITM site.`,
    links: [PAGES.qualifier],
    chips: [{ label: "Qualifier syllabus", query: "qualifier syllabus" }],
  };
}

function syllabusReply(data: GuideData, only?: GuideCourse): GuideReply {
  const rows = data.qualifier.syllabus.filter((s) => !only || s.course === only.name || s.course === only.short);
  const text = rows.map((s) => `${s.course}: ${s.topics.join(", ")}.`).join("\n");
  return {
    text: `Qualifier syllabus, weeks 1 to 4:\n${text}`,
    links: [PAGES.qualifierNotes, PAGES.qualifier],
  };
}

/** Blog posts whose title, keyword or tags share words with the question. */
function matchPosts(text: string, posts: GuidePost[], n = 3) {
  const STOP = new Set(["the", "a", "an", "to", "for", "of", "in", "and", "is", "how", "what", "i", "me", "my", "do", "can", "bs", "iitm", "iit", "madras", "with", "on", "where", "want", "need", "show", "give"]);
  const words = text.trim().split(" ").filter((w) => w.length > 2 && !STOP.has(w));
  if (!words.length) return [];
  return posts
    .map((p) => {
      const hay = normalize(`${p.title} ${p.keyword} ${p.tags.join(" ")}`);
      return { p, score: words.filter((w) => has(hay, w)).length };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map(({ p }) => ({ label: p.title, href: p.href }));
}

function dedupe(links: GuideLink[]) {
  const seen = new Set<string>();
  return links.filter((l) => !seen.has(l.href) && seen.add(l.href));
}

/* ───────────── Topic-wise, year-wise, most repeated, week-wise ───────────── */

type SheetMode = "topics" | "years" | "repeated" | "weeks";

/** What a mode is called in a follow-up chip, e.g. "Maths I topic wise". */
const MODE_WORDS: Record<SheetMode, string> = { topics: "topic wise", years: "year wise", repeated: "most repeated", weeks: "week wise" };

const MODE_PHRASES: [SheetMode, string[]][] = [
  ["repeated", ["most repeated", "repeated", "repeat", "repeating", "frequently asked", "most asked", "asked again", "important questions", "imp questions", "important", "imp", "common questions"]],
  ["weeks", ["week wise", "weekwise", "weekly", "week", "weeks"]],
  ["years", ["year wise", "yearwise", "by year", "yearly", "year", "years", "term wise", "termwise", "session wise"]],
  ["topics", ["topic wise", "topicwise", "by topic", "topic", "topics", "chapter wise", "chapterwise", "chapter", "chapters", "unit wise", "module wise", "concept wise", "concepts"]],
];

/** Which kind of sheet they ask for. A bare year ("stats 1 2024") counts only when a course is named. */
function sheetMode(text: string, withCourse: boolean): SheetMode | undefined {
  const found = MODE_PHRASES.find(([, words]) => exact(text, words))?.[0];
  if (found) return found;
  if (withCourse && /\b20[12]\d\b/.test(text)) return "years";
  return undefined;
}

/** Words that say nothing about a topic, left out when matching topic titles. */
const TOPIC_STOP = new Set(
  "the and for with from into what which where when how want need give show find get all any some more most from about over under past paper papers pyq pyqs question questions sheet sheets practice practise wise topic topics chapter chapters week weeks year years repeated important level foundation diploma degree course courses exam quiz term end qualifier maths math mathematics stats statistics english data science please only list cheat notes note formula formulas mock test tests download print latest newest online answer answers keys timed portal".split(" "),
);

/** Topics whose titles share real words with the question, best first. */
function matchTopics<T extends { title: string }>(text: string, topics: T[], n = 6): T[] {
  const words = text.trim().split(" ").filter((w) => w.length >= 4 && !TOPIC_STOP.has(w) && !/^\d+$/.test(w));
  if (!words.length) return [];
  return topics
    .map((t) => {
      const title = normalize(t.title);
      // "joins" finds "join cost", "hashing" finds "hash tables".
      const stem = (w: string) => (w.length > 5 ? w.replace(/(ing|es|s)$/, "") : w.replace(/s$/, ""));
      return { t, score: words.filter((w) => has(title, w) || title.includes(` ${stem(w)}`)).length };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .slice(0, n)
    .map((x) => x.t);
}

const MAX_LIST = 8;
const qs = (n: number) => `${n} ${n === 1 ? "question" : "questions"}`;

function modeReply(c: GuideCourse, mode: SheetMode, text: string, data: GuideData): GuideReply {
  const cat = data.catalog?.[c.slug];
  const tab = (view: string) => `${c.practiceHref}&view=${view}`;
  const allSheets = { label: `All ${c.short} question sheets`, href: c.sheetsHref, note: "By paper, year, topic and most repeated" };

  if (mode === "weeks") return weekReply(c, text);

  // The catalog is still loading or the course has no sheets yet: send them to the course's sheets.
  if (!cat) return { text: `${c.name}. Its sheets by topic, year and most repeated are here:`, links: [allSheets, { label: `Practice ${c.short}`, href: c.practiceHref }] };

  if (mode === "topics") {
    if (!cat.topics.length)
      return { text: `${c.short} has no topic-wise sheets yet. You can go year-wise or paper-wise:`, links: [allSheets], chips: [{ label: `${c.short} year wise`, query: `${c.short} year wise` }] };
    const hits = matchTopics(text, cat.topics);
    if (hits.length)
      return {
        text: `${c.short} topics that match:`,
        links: hits.map((t) => ({ label: t.title, href: t.href, note: qs(t.questions) })),
        chips: [{ label: `All ${c.short} topics`, query: `${c.short} topic wise` }],
      };
    const shown = cat.topics.slice(0, MAX_LIST);
    return {
      text: `${c.short} past questions in ${cat.topics.length} topics. Pick one:`,
      links: [
        ...shown.map((t) => ({ label: t.title, href: t.href, note: qs(t.questions) })),
        ...(cat.topics.length > shown.length ? [{ label: `See all ${cat.topics.length} topics`, href: tab("topics"), note: "On the practice page" }] : []),
      ],
      chips: [{ label: "Most repeated", query: `${c.short} most repeated` }, { label: "Year wise", query: `${c.short} year wise` }],
    };
  }

  if (mode === "years") {
    const year = text.match(/\b(20[12]\d)\b/)?.[1];
    const pick = year ? cat.years.filter((y) => y.year === year) : [];
    if (year && !pick.length)
      return {
        text: `I have no ${year} papers for ${c.short}. Years I have: ${cat.years.map((y) => y.year).join(", ") || "none yet"}.`,
        links: cat.years.slice(0, MAX_LIST).map((y) => ({ label: `${c.short} ${y.year} questions`, href: y.href, note: qs(y.questions) })),
      };
    const list = pick.length ? pick : cat.years;
    if (!list.length) return { text: `${c.short} has no year-wise sheets yet.`, links: [allSheets] };
    return {
      text: pick.length ? `Every ${c.short} question from ${year}:` : `${c.short} questions, year by year:`,
      links: [
        ...list.slice(0, MAX_LIST).map((y) => ({ label: `${c.short} ${y.year} questions`, href: y.href, note: qs(y.questions) })),
        { label: `${c.short} papers one by one`, href: tab("papers"), note: "Each paper as a sheet" },
      ],
      chips: [{ label: "Topic wise", query: `${c.short} topic wise` }, { label: "Most repeated", query: `${c.short} most repeated` }],
    };
  }

  // Most repeated.
  if (!cat.repeated)
    return cat.topics.length
      ? { text: `${c.short} has no most-repeated list yet. Topic-wise questions show what comes often:`, links: [{ label: `${c.short} topic wise`, href: tab("topics") }] }
      : { text: `${c.short} has no most-repeated list yet. You can go through its papers year by year:`, links: [allSheets], chips: [{ label: `${c.short} year wise`, query: `${c.short} year wise` }] };
  return {
    text: `${cat.repeated.types} ${c.short} question types came back in more than one paper. Most asked:`,
    links: [
      { label: `All ${c.short} most repeated questions`, href: cat.repeated.href, note: `${cat.repeated.types} types, most asked first` },
      ...cat.repeated.top.map((t) => ({ label: t.title, href: t.href, note: `Asked ${t.count} times` })),
    ],
    chips: [{ label: "Topic wise", query: `${c.short} topic wise` }, { label: "Year wise", query: `${c.short} year wise` }],
  };
}

/**
 * Papers carry no week tags, but each exam covers fixed weeks: the Qualifier and
 * Quiz 1 weeks 1–4, Quiz 2 weeks 5–8, the End Term the whole course.
 */
function weekReply(c: GuideCourse, text: string): GuideReply {
  const week = Number(text.match(/\bweeks? (\d{1,2})\b/)?.[1] ?? 0);
  const examFor = (w: number): PyqExam[] => (w <= 4 ? ["quiz-1", "qualifier"] : w <= 8 ? ["quiz-2"] : ["end-term"]);
  if (!week)
    return {
      text: `Past papers are set by weeks: Quiz 1 and the Qualifier cover weeks 1 to 4, Quiz 2 covers weeks 5 to 8, and the End Term covers all weeks. Which weeks?`,
      chips: [
        { label: "Weeks 1 to 4", query: `${c.short} week 1` },
        { label: "Weeks 5 to 8", query: `${c.short} week 5` },
        { label: "All weeks", query: `${c.short} week 12` },
      ],
      links: [{ label: `${c.short} topic wise`, href: `${c.practiceHref}&view=topics`, note: "Or pick a topic instead" }],
    };
  const exams = examFor(week).filter((e) => c.exams[e]);
  const range = week <= 4 ? "weeks 1 to 4" : week <= 8 ? "weeks 5 to 8" : "all weeks";
  if (!exams.length)
    return {
      text: `${c.short} has no papers for ${range} yet.`,
      links: [{ label: `${c.short} past papers`, href: c.href }],
    };
  const links: GuideLink[] = exams.flatMap((e) => [
    { label: `${c.short} ${examName(e)} papers`, href: `${c.href}#${e}`, note: `${c.exams[e]} papers, ${range}` },
    { label: `Practice ${c.short} ${examName(e)} questions`, href: `${c.practiceHref}${e === "end-term" ? "" : `&exam=${e}`}`, note: "With answer keys" },
  ]);
  if (c.notesHref && week <= 4) links.push({ label: `${c.short} cheat notes`, href: c.notesHref, note: "Week by week, weeks 1 to 4" });
  return { text: `Week ${week} is in ${exams.map(examName).join(" and the ")} (${range}).`, links: dedupe(links) };
}

/** Topic-wise without a course: search every course's topics, else ask which course. */
function modeWithoutCourse(mode: SheetMode, text: string, data: GuideData, ctx: GuideContext): GuideReply {
  if (mode === "topics" && data.catalog) {
    const all = data.courses.flatMap((c) => (data.catalog![c.slug]?.topics ?? []).map((t) => ({ ...t, course: c })));
    const hits = matchTopics(text, all);
    if (hits.length)
      return { text: "Topics that match, from all courses:", links: hits.map((t) => ({ label: `${t.course.short}: ${t.title}`, href: t.href, note: qs(t.questions) })) };
  }
  const mine = data.courses.filter((c) => ctx.planCourses.includes(c.slug));
  const ask = mode === "weeks" ? "Week-wise papers" : mode === "years" ? "Year-wise questions" : mode === "repeated" ? "Most repeated questions" : "Topic-wise questions";
  if (mine.length) return { text: `${ask}. Which course?`, chips: mine.map((c) => ({ label: c.short, query: `${c.short} ${MODE_WORDS[mode]}` })) };
  return { text: `${ask}. Which level is your course in?`, chips: LEVELS.map((l) => ({ label: l.name, query: `${l.name} ${MODE_WORDS[mode]}` })) };
}

/* ───────────── Guardrails ───────────── */

const PRACTICE_LINKS = [PAGES.practice, PAGES.qualifierNotes];

/** Questions refused at once, whatever else they mention. Shared with app/api/guide. */
export function hardGuard(text: string): GuideReply | null {
  // Someone trying to change the guide's instructions.
  if (exact(text, ["ignore previous", "ignore all", "ignore above", "ignore your", "forget your instructions", "system prompt", "your prompt", "your instructions", "you are now", "act as", "pretend to be", "pretend you", "roleplay", "jailbreak", "developer mode", "dan mode"]))
    return { text: "I can only help you find pages on BTechi. What are you studying?", chips: START_CHIPS.slice(0, 3) };
  // Cheating, leaks and accounts.
  if (exact(text, ["leak", "leaked", "leaks", "upcoming paper", "tomorrow paper", "todays paper", "today paper", "live exam answers", "cheat in exam", "cheating", "bypass proctor", "proctor bypass", "hack", "hacking", "crack account", "someone else account", "other person account"]))
    return {
      text: "I cannot help with that. BTechi only has past papers that are already public, for honest practice.",
      links: [PAGES.pyqs, PAGES.practice],
    };
  // Abuse.
  if (exact(text, ["fuck", "fucking", "shit", "bitch", "bastard", "idiot", "stupid bot", "chutiya", "madarchod", "bhenchod", "bc", "mc", "gandu"]))
    return { text: "Let us keep it friendly. Tell me what you need and I will find it.", chips: START_CHIPS.slice(0, 3) };
  // Personal details typed into the chat.
  if (/\d{10}/.test(text.replace(/ /g, "")) || /\S+@\S+\.\S+/.test(text))
    return { text: "Please do not share phone numbers or emails here. To reach us, use the contact page.", links: [PAGES.contact] };
  return null;
}

/** Questions that would only waste an AI call. Checked once the rules found nothing. */
export function softGuard(text: string, raw: string): GuideReply | null {
  if (isGibberish(text))
    return { text: "Sorry, I did not get that. Try a course and an exam, like \"maths 1 end term\", or tap a button.", chips: START_CHIPS };
  if (isHomework(text, raw)) return HOMEWORK;
  // Clearly off-topic.
  if (exact(text, ["weather", "news", "cricket", "ipl", "football", "movie", "movies", "song", "songs", "music", "joke", "recipe", "girlfriend", "boyfriend", "love", "dating", "politics", "election", "stock", "stocks", "crypto", "bitcoin", "game", "games", "instagram", "whatsapp"]))
    return { text: "I only help with BTechi and the IIT Madras BS. What are you studying?", chips: START_CHIPS.slice(0, 4) };
  return null;
}

const HOMEWORK: GuideReply = {
  text: "I do not solve questions. But you can practice real past questions with answer keys, or revise from cheat notes.",
  links: PRACTICE_LINKS,
};

/** A maths expression, or a request to solve, code or write something. */
function isHomework(text: string, raw: string) {
  return (
    /\d\s*[-+*/^=]\s*\d|\d[a-z]\s*[-+*/^=]|\b[xy]\s*\^|[∫√π∑]/i.test(raw) ||
    exact(text, ["solve", "calculate", "find the value", "prove that", "derive", "integrate", "differentiate", "evaluate", "simplify", "write a program", "write code", "write the code", "debug", "fix my code", "essay", "paragraph on", "translate", "meaning of", "explain the concept", "what is the answer", "answer this", "answer of"])
  );
}

/** Keyboard mash: no real words, a long run of consonants, or one letter repeated. */
function isGibberish(text: string) {
  const letters = text.replace(/[^a-z]/g, "");
  if (letters.length < 2) return true;
  if (/(.)\1{3,}/.test(letters)) return true;
  const words = text.trim().split(" ").filter((w) => /[a-z]/.test(w));
  const odd = words.filter((w) => /[bcdfghjklmnpqrstvwxz]{5,}/.test(w) || (w.length >= 4 && !/[aeiouy]/.test(w)));
  return words.length > 0 && odd.length / words.length >= 0.5;
}

/* ───────────── Small talk and FAQ ───────────── */

/** True when the whole message is about this short phrase, not a longer request that starts with it. */
const short = (text: string, max = 6) => text.trim().split(" ").length <= max;

const CHAT_INTENTS: Intent[] = ["greet", "thanks", "help"];

/** `wantsSomething`: the message also asks for a page ("hi, where are the notes"), so skip the chit-chat. */
function smallTalk(text: string, data: GuideData, ctx: GuideContext, wantsSomething: boolean): GuideReply | null {
  const papers = data.courses.reduce((n, c) => n + Object.values(c.exams).reduce((a, b) => a + (b ?? 0), 0), 0);
  const tiny = short(text);

  // Facts students ask a lot.
  if (exact(text, ["is it free", "is btechi free", "free or paid", "any fees", "cost", "price", "paid", "subscription", "premium", "charges"]))
    return { text: "Yes, BTechi is fully free. No payment, no premium plan.", chips: START_CHIPS.slice(0, 3) };
  if (exact(text, ["app", "android", "ios", "iphone", "play store", "apk", "mobile app"]) && !exact(text, ["application development", "app dev"]))
    return { text: "There is no app to install. BTechi works in your phone browser. You can use \"Add to Home screen\" to open it like an app." };
  if (exact(text, ["answer key correct", "answers correct", "answers wrong", "wrong answer", "accurate", "accuracy", "mistake in"]))
    return { text: "Answers come from the official IITM answer keys. If you find a mistake, please tell us and we will fix it.", links: [PAGES.contact] };
  if (exact(text, ["official", "affiliated", "from iit", "by iit", "run by", "owned by", "who made", "who built", "who created"]))
    return { text: "BTechi is an independent, free study site. It is not run by or linked to IIT Madras.", links: [PAGES.about] };
  if (exact(text, ["without login", "need login", "need to login", "must login", "need account", "without account", "without signing"]))
    return ctx.signedIn
      ? { text: "You are already logged in, so your scores are saved on all your devices. Login is never needed to sit papers or practice.", links: [PAGES.dashboard] }
      : { text: "No login needed. You can sit papers and practice as a guest. Log in only to keep your scores on all your devices.", links: [PAGES.signup, PAGES.login] };
  if (exact(text, ["hindi", "tamil", "telugu", "bengali", "kannada", "malayalam", "marathi", "other language", "my language"]))
    return { text: "The site is in English for now, the same as the IITM exams." };
  if (exact(text, ["dark mode", "light mode", "night mode", "theme"]))
    return { text: "Use the moon or sun button in the top bar to switch dark and light mode." };
  if (exact(text, ["how many papers", "how many pyqs", "how many questions", "total papers"]))
    return { text: `BTechi has ${papers} past papers across ${data.courses.length} courses.`, links: [PAGES.pyqs] };
  if (exact(text, ["how to use", "how does it work", "how it works", "how do i start", "where to start", "new here", "first time"]))
    return {
      text: "Three steps: 1. Set your courses in your study profile. 2. Sit a past paper in the exam portal. 3. Check your score and practice weak areas.",
      links: [PAGES.profile, PAGES.exam, PAGES.practice],
    };

  if (!tiny || wantsSomething) return null;

  // Chit-chat.
  if (exact(text, ["how are you", "how r u", "how are u", "whats up", "wassup", "sup"]))
    return { text: "I am good, thank you! What are you studying today?", chips: START_CHIPS.slice(0, 4) };
  if (exact(text, ["who are you", "what are you", "are you human", "are you a bot", "are you ai", "are you real", "your name", "chatgpt", "robot"]))
    return { text: "I am the BTechi guide, a small helper bot. I find the right page for you: papers, mocks, notes and more.", chips: START_CHIPS.slice(0, 4) };
  if (exact(text, ["bye", "goodbye", "good bye", "see you", "see ya", "good night", "gn", "tata", "cya"]))
    return { text: "Bye! All the best for your exam." };
  if (exact(text, ["sorry", "my bad"])) return { text: "No problem at all. What can I find for you?", chips: START_CHIPS.slice(0, 3) };
  if (exact(text, ["useless", "not working", "not helpful", "bad bot", "worst", "doesnt work", "dont understand", "you are wrong"]))
    return { text: "Sorry about that. Try a course and an exam, like \"stats 1 quiz 2\". If something on the site is broken, please tell us.", links: [PAGES.contact], chips: START_CHIPS.slice(0, 3) };
  if (exact(text, ["good bot", "awesome", "amazing", "love it", "love this", "great job", "well done", "superb", "helpful"]))
    return { text: "Thank you, that means a lot! Anything else I can find?", chips: START_CHIPS.slice(0, 3) };
  if (exact(text, ["thanks", "thank you", "thank u", "thx", "ty", "tysm", "dhanyavad", "shukriya"]))
    return { text: "Happy to help. All the best for your exam!", chips: START_CHIPS.slice(0, 3) };
  if (exact(text, ["welcome", "you are welcome", "youre welcome", "np", "no problem"]))
    return { text: "Thank you! Need anything else?", chips: START_CHIPS.slice(0, 3) };
  if (exact(text, ["lol", "haha", "hehe", "lmao"])) return { text: "Glad you are having fun. Need anything?", chips: START_CHIPS.slice(0, 3) };
  if (short(text, 2) && exact(text, ["ok", "okay", "k", "kk", "fine", "alright", "hmm", "hm", "yes", "yeah", "yep", "no", "nope", "nah", "cool", "nice", "great"]))
    return { text: "Okay. What else can I find for you?", chips: START_CHIPS };
  if (exact(text, ["good morning", "good afternoon", "good evening"])) {
    const part = exact(text, ["good morning"]) ? "Good morning" : exact(text, ["good afternoon"]) ? "Good afternoon" : "Good evening";
    return { ...welcome(ctx, data), text: `${part}! What do you need today? Tap a button or type, like "maths 1 end term".` };
  }
  if (exact(text, ["hi", "hello", "hey", "hii", "hiii", "helo", "namaste", "namaskar", "hola", "yo", "hey there"]))
    return { ...welcome(ctx, data), text: `Hi${ctx.signedIn ? " again" : ""}! What do you need today? Tap a button or type, like "maths 1 end term".` };
  if (exact(text, ["help", "what can you do", "menu", "options", "start", "lost", "confused"])) return welcome(ctx, data);
  return null;
}

/* ───────────── The brain ───────────── */

export function answer(raw: string, data: GuideData, ctx: GuideContext): GuideReply {
  const text = normalize(raw);
  const blocked = hardGuard(text);
  if (blocked) return blocked;
  const intents = findIntents(text);
  const courses = findCourses(text, data.courses);
  // A follow-up ("what about quiz 2", "topic wise", "and 2024?") keeps the course of the last message.
  const earlier = ctx.lastCourse && data.courses.find((c) => c.slug === ctx.lastCourse);
  if (earlier && !courses.length && isFollowUp(text)) courses.push(earlier);
  // Two levels named ("foundation vs diploma") is a comparison, not a pick: leave it to guides or the AI.
  const levels = LEVELS.filter((l) => any(text, l.words));
  const level = levels.length === 1 ? levels[0].slug : undefined;
  const exam = EXAMS.find((e) => any(text, e.words))?.slug;
  const on = (s: string) => data.sections.includes(s);
  const is = (i: Intent) => intents.includes(i);

  // Chit-chat and common questions: answered here, never sent to the AI.
  if (!courses.length && !level && !exam) {
    const chat = smallTalk(text, data, ctx, intents.some((i) => !CHAT_INTENTS.includes(i)));
    if (chat) return chat;
    // "solve 2x+3=7" is homework; "solve past papers" is not.
    if (isHomework(text, raw) && !is("papers") && !is("mock") && !is("sheets")) return HOMEWORK;
  }

  // "my courses" / "my papers": use the study plan.
  if (!courses.length && has(text, "my") && ctx.planCourses.length && (is("papers") || is("practice") || is("sheets") || is("mock"))) {
    const mine = data.courses.filter((c) => ctx.planCourses.includes(c.slug));
    if (mine.length) return { text: "Your courses:", chips: mine.map((c) => ({ label: c.short, query: `${c.short} ${raw}` })) };
  }

  // Course named: the strongest signal.
  const mode = sheetMode(text, courses.length > 0);
  if (courses.length === 1 || (courses.length > 1 && exam === "qualifier")) {
    const c = courses[0];
    if (mode) return modeReply(c, mode, text, data);
    // "maths 1 quadratic": the rest of the message names one of its topics.
    if (!exam && matchTopics(text, data.catalog?.[c.slug]?.topics ?? []).length) return modeReply(c, "topics", text, data);
    if (is("syllabus") && c.exams.qualifier) return syllabusReply(data, c);
    if (is("cutoff")) return cutoffReply(data);
    return courseReply(c, intents, exam);
  }
  if (courses.length > 1)
    return {
      text: "You named a few courses. Which one?",
      chips: courses.slice(0, 6).map((c) => ({ label: c.short, query: `${c.short} ${mode ? MODE_WORDS[mode] : exam ? examName(exam) : ""} ${!mode && is("sheets") ? "pdf" : ""}`.replace(/\s+/g, " ").trim() })),
      links: is("mock") ? [{ ...PAGES.exam, note: "You can sit up to 4 courses together" }] : undefined,
    };

  // Facts.
  if (is("cutoff")) return cutoffReply(data);
  if (is("syllabus") && (exam === "qualifier" || !exam)) return syllabusReply(data);
  if (exam === "qualifier") return qualifierReply(data, intents);

  // Account and site pages.
  // Account: never offer sign up or log in to someone already logged in.
  if (is("password"))
    return ctx.signedIn
      ? { text: "To change your password, use the reset page. You will get an email link.", links: [PAGES.reset] }
      : { text: "You can reset your password here:", links: [PAGES.reset, PAGES.login] };
  if (is("signup") || is("login")) {
    if (ctx.signedIn)
      return {
        text: exact(text, ["logout", "log out", "sign out", "signout"])
          ? "You are logged in. To log out, open your dashboard and tap Sign out."
          : "You are already logged in. Your scores and saved items are kept on all your devices.",
        links: exact(text, ["logout", "log out", "sign out", "signout"]) ? [PAGES.dashboard] : [PAGES.dashboard, PAGES.saved],
      };
    return is("signup")
      ? { text: "Accounts are free. They save your scores across devices.", links: [PAGES.signup, PAGES.login] }
      : { text: "Log in to keep your scores on all your devices. No account yet? It is free.", links: [PAGES.login, PAGES.signup] };
  }
  if (is("progress")) return { text: ctx.signedIn ? "Your scores and attempts are on your dashboard." : "Your dashboard shows scores and attempts. Log in to keep them safe across devices.", links: ctx.signedIn ? [PAGES.dashboard] : [PAGES.dashboard, PAGES.login] };
  if (is("saved")) return { text: "Things you bookmark show up here:", links: [PAGES.saved] };
  if (is("profile")) return { text: "Set your level and courses. Then I and the site show your courses first.", links: [PAGES.profile] };
  if (is("calculator")) return { text: "The exam portal has a scientific calculator, like the real exam. Open any paper and tap the calculator button.", links: [PAGES.exam, PAGES.qualifier] };

  // Level named, in a short or paper-related message ("diploma pyqs"). A longer question about a level goes to the AI.
  const aboutPapers = is("papers") || is("practice") || is("sheets") || is("mock") || is("notes");
  if (level && !exam && (mode || aboutPapers || short(text, 3))) return levelReply(level, data, intents, mode);

  // Topic-wise, year-wise, most repeated or week-wise, no course named.
  if (mode && !exam) return modeWithoutCourse(mode, text, data, ctx);

  // "quadratic questions": a topic from any course.
  if (!exam && data.catalog && (is("papers") || is("practice") || is("sheets") || short(text, 4)) && !is("blog") && !is("admission")) {
    const all = data.courses.flatMap((c) => (data.catalog![c.slug]?.topics ?? []).map((t) => ({ ...t, course: c })));
    const hits = matchTopics(text, all);
    if (hits.length) return { text: "Topics that match, from all courses:", links: hits.map((t) => ({ label: `${t.course.short}: ${t.title}`, href: t.href, note: qs(t.questions) })) };
  }

  // Exam named.
  if (exam) {
    if (level) {
      const list = data.courses.filter((c) => c.level === level && c.exams[exam]);
      return { text: `${levelName(level)} ${examName(exam)} papers. Which course?`, chips: list.map((c) => ({ label: c.short, query: `${c.short} ${examName(exam)}` })) };
    }
    return examReply(exam, data, intents);
  }

  // Broad wants.
  if (is("sheets")) return { ...askLevel("Question sheets can be printed or saved as PDF. Which level?", "pdf"), links: [PAGES.sheets] };
  if (is("mock")) return { text: "Two places to sit timed papers:", links: [PAGES.exam, PAGES.qualifier], chips: EXAMS.map((e) => ({ label: e.name, query: `${e.name} papers` })) };
  if (is("practice")) return { ...askLevel("Practice real past questions with answer keys. Which level?", "practice"), links: [PAGES.practice] };
  if (is("papers")) return { ...askLevel("Past papers, sorted by level and course. Which level?", "papers"), links: [PAGES.pyqs] };
  if (is("notes")) return { text: "Cheat notes cover the four qualifier courses: formulas, quick notes and common traps.", links: [PAGES.qualifierNotes, ...(on("notes") ? [PAGES.notes] : [])] };
  if (is("videos")) return on("videos") ? { text: "Topic-wise video lessons:", links: [PAGES.videos] } : { text: "Videos are on our YouTube channel, BTechi IITian. The link is in the top bar." };
  if (is("books") && on("books")) return { text: "Recommended books:", links: [PAGES.books] };

  const posts = matchPosts(text, data.posts);
  if (is("admission")) return { text: "These guides should help:", links: posts.length ? posts : [PAGES.blog] };
  if (is("reviews")) return { text: "See what students say, or leave your own review:", links: [PAGES.reviews] };
  if (is("contribute")) return { text: "Thank you! Here is how to share papers or fixes:", links: [PAGES.contribute, PAGES.contact] };
  if (is("contact")) return { text: "Found a mistake or need help? Write to us:", links: [PAGES.contact] };
  if (is("legal")) return { text: "Our policies:", links: [PAGES.privacy, PAGES.terms, PAGES.copyright, PAGES.disclaimer] };
  if (is("about")) return { text: "BTechi is a free, independent study site for the IIT Madras BS. We are not linked to IIT Madras.", links: [PAGES.about] };
  if (is("blog")) return { text: posts.length ? "These posts match:" : "Guides on the IITM BS, exams and careers:", links: posts.length ? [...posts, PAGES.blog] : [PAGES.blog] };
  if (is("search") && on("search")) return { text: "Search the whole site:", links: [{ ...PAGES.search, href: `/search?q=${encodeURIComponent(raw)}` }] };
  if (is("thanks")) return { text: "Happy to help. All the best for your exam!", chips: START_CHIPS.slice(0, 3) };
  if (is("greet") || is("help")) return welcome(ctx, data);

  // Questions the AI must not get: solving homework, off-topic chat, gibberish.
  const soft = softGuard(text, raw);
  if (soft) return soft;

  // Last try: blog titles, then site search.
  if (posts.length) return { text: "I found these guides:", links: posts, fallback: true };
  return {
    fallback: true,
    text: "Sorry, I did not get that. Try a course and an exam, like \"maths 1 end term\", or tap a button.",
    links: on("search") ? [{ label: `Search for "${raw.trim()}"`, href: `/search?q=${encodeURIComponent(raw.trim())}` }] : undefined,
    chips: START_CHIPS,
  };
}

/** Short and only about an exam, a kind of sheet or a year, or said as a follow-up. */
function isFollowUp(text: string) {
  if (LEVELS.some((l) => any(text, l.words))) return false;
  if (exact(text, ["what about", "how about", "and for", "same for", "also for", "now for", "for that", "that course", "this course", "same course"])) return true;
  return short(text, 5) && (EXAMS.some((e) => any(text, e.words)) || !!sheetMode(text, false) || /\b20[12]\d\b/.test(text));
}

/* ───────────── What the rules understood, for the AI model ───────────── */

/** The course, level, exam and kind of sheet the rules read in a message, so the AI starts from the same reading. */
export function understand(raw: string, data: GuideData) {
  const text = normalize(raw);
  const courses = findCourses(text, data.courses);
  const levels = LEVELS.filter((l) => any(text, l.words));
  const mode = sheetMode(text, courses.length > 0);
  return {
    courses,
    level: levels.length === 1 ? levels[0].name : undefined,
    exam: EXAMS.find((e) => any(text, e.words))?.name,
    wants: mode ? MODE_WORDS[mode] : undefined,
    intents: findIntents(text).filter((i) => !CHAT_INTENTS.includes(i)),
  };
}

/* ───────────── Links the AI model may use ───────────── */

/** Every page the guide can send a student to, so the AI model picks from real pages only. */
export function siteLinks(data: GuideData): GuideLink[] {
  const on = (s: string) => data.sections.includes(s);
  const optional = new Set<string>(["search", "videos", "books", "notes"]);
  const pages = Object.entries(PAGES)
    .filter(([key]) => !optional.has(key) || on(key))
    .map(([, l]) => l as GuideLink);
  const levels = LEVELS.map((l) => ({ label: `${l.name} level past papers`, href: `/pyqs/${l.slug}` }));
  const courses = data.courses.flatMap((c) => [
    { label: `${c.short} (${c.name}) past papers`, href: c.href },
    { label: `${c.short} question sheets PDF`, href: c.sheetsHref },
    { label: `${c.short} practice questions`, href: c.practiceHref },
    ...(c.notesHref ? [{ label: `${c.short} cheat notes`, href: c.notesHref }] : []),
  ]);
  const posts = data.posts.map((p) => ({ label: p.title, href: p.href }));
  const sheets = data.courses.flatMap((c) => {
    const cat = data.catalog?.[c.slug];
    if (!cat) return [];
    return [
      { label: `${c.short} topic-wise questions (all topics)`, href: `${c.practiceHref}&view=topics` },
      ...cat.topics.map((t) => ({ label: `${c.short} topic: ${t.title}`, href: t.href })),
      ...cat.years.map((y) => ({ label: `${c.short} ${y.year} questions (year-wise)`, href: y.href })),
      ...(cat.repeated ? [{ label: `${c.short} most repeated questions`, href: cat.repeated.href }] : []),
    ];
  });
  return dedupe([...pages, ...levels, ...courses, ...sheets, ...posts]);
}
