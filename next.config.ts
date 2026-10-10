import type { NextConfig } from "next";

// Earlier paper URLs → /pyqs/<level>/<course>/<paper> (see src/lib/pyq-urls.ts).
// next.config can't import app modules, so the course paths are listed here:
// [paper-slug prefix, course PYQ page]. Keep in step with src/lib/data/end-term/subjects.ts.
const LEGACY_PYQ_COURSES: [prefix: string, coursePath: string][] = [
  ["maths-1", "/pyqs/foundation/mathematics-for-data-science-1"],
  ["stats-1", "/pyqs/foundation/statistics-for-data-science-1"],
  ["ct", "/pyqs/foundation/computational-thinking"],
  ["english-1", "/pyqs/foundation/english-1"],
  ["maths-2", "/pyqs/foundation/mathematics-for-data-science-2"],
  ["stats-2", "/pyqs/foundation/statistics-for-data-science-2"],
  ["python", "/pyqs/foundation/programming-in-python"],
  ["english-2", "/pyqs/foundation/english-2"],
  ["dbms", "/pyqs/diploma/database-management-systems"],
  ["pdsa", "/pyqs/diploma/programming-data-structures-and-algorithms"],
  ["mad-1", "/pyqs/diploma/modern-application-development-1"],
  ["java", "/pyqs/diploma/programming-concepts-using-java"],
  ["system-commands", "/pyqs/diploma/system-commands"],
  ["mad-2", "/pyqs/diploma/modern-application-development-2"],
  ["mlf", "/pyqs/diploma/machine-learning-foundations"],
  ["mlt", "/pyqs/diploma/machine-learning-techniques"],
  ["mlp", "/pyqs/diploma/machine-learning-practice"],
  ["bdm", "/pyqs/diploma/business-data-management"],
  ["ba", "/pyqs/diploma/business-analytics"],
  ["tds", "/pyqs/diploma/tools-in-data-science"],
  ["software-testing", "/pyqs/degree/software-testing"],
  ["deep-learning", "/pyqs/degree/deep-learning"],
  ["dlp", "/pyqs/degree/deep-learning-practice"],
  ["inlp", "/pyqs/degree/introduction-to-natural-language-processing"],
  ["spg", "/pyqs/degree/strategies-for-professional-growth"],
];
/** Courses whose qualifier PYQs used to live at /qualifier/<prefix>-<month>-<year>. */
const QUALIFIER_PYQ_PREFIXES = ["maths-1", "stats-1", "ct", "english-1"];

const legacyPyqRedirects = () => [
  { source: "/pyqs/end-term", destination: "/pyqs", permanent: true },
  ...LEGACY_PYQ_COURSES.flatMap(([prefix, course]) =>
    (["fn", "an"] as const).map((session) => ({
      source: `/pyqs/end-term/${prefix}-end-term-:month([a-z]{3})-:year(\\d{4})-${session}`,
      destination: `${course}/end-term-:month-:year-${session === "fn" ? "forenoon" : "afternoon"}`,
      permanent: true,
    })),
  ),
  ...LEGACY_PYQ_COURSES.filter(([prefix]) => QUALIFIER_PYQ_PREFIXES.includes(prefix)).flatMap(([prefix, course]) => [
    { source: `/qualifier/${prefix}-:month(january|may|september)-:year(\\d{4})`, destination: `${course}/qualifier-:month-:year`, permanent: true },
    // English I slugs abbreviated the month.
    { source: `/qualifier/${prefix}-jan-:year(\\d{4})`, destination: `${course}/qualifier-january-:year`, permanent: true },
    { source: `/qualifier/${prefix}-sep-:year(\\d{4})`, destination: `${course}/qualifier-september-:year`, permanent: true },
  ]),
];

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    // Exam prep merged into /practice as a tab; query (subject, level, exam) is carried over.
    // Previous-year papers moved to readable /pyqs/<level>/<course>/<paper> paths; see lib/pyq-urls.ts.
    return [{ source: "/exam-prep", destination: "/practice?tab=exam", permanent: true }, ...legacyPyqRedirects()];
  },
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "SAMEORIGIN" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
    ];
  },
};

export default nextConfig;
