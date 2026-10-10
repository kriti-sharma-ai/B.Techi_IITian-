// Courses with End Term papers. Kept apart from the question data so URL helpers
// (lib/pyq-urls.ts) and next.config redirects can use it without loading the papers.

export type EndTermLevel = "foundation" | "diploma-programming" | "diploma-data-science" | "degree";

/** `prefix` starts every paper slug of the course, e.g. stats-1-end-term-dec-2024-fn. */
export type EndTermSubject = { slug: string; prefix: string; name: string; short: string; level: EndTermLevel };

/** Courses with End Term papers, in curriculum order. */
export const END_TERM_SUBJECTS: EndTermSubject[] = [
  { slug: "mathematics-for-data-science-1", prefix: "maths-1", name: "Mathematics for Data Science I", short: "Maths I", level: "foundation" },
  { slug: "statistics-for-data-science-1", prefix: "stats-1", name: "Statistics for Data Science I", short: "Stats I", level: "foundation" },
  { slug: "computational-thinking", prefix: "ct", name: "Computational Thinking", short: "CT", level: "foundation" },
  { slug: "english-1", prefix: "english-1", name: "English I", short: "English I", level: "foundation" },
  { slug: "mathematics-for-data-science-2", prefix: "maths-2", name: "Mathematics for Data Science II", short: "Maths II", level: "foundation" },
  { slug: "statistics-for-data-science-2", prefix: "stats-2", name: "Statistics for Data Science II", short: "Stats II", level: "foundation" },
  { slug: "programming-in-python", prefix: "python", name: "Programming in Python", short: "Python", level: "foundation" },
  { slug: "english-2", prefix: "english-2", name: "English II", short: "English II", level: "foundation" },
  { slug: "database-management-systems", prefix: "dbms", name: "Database Management Systems", short: "DBMS", level: "diploma-programming" },
  { slug: "programming-data-structures-and-algorithms", prefix: "pdsa", name: "Programming, Data Structures and Algorithms using Python", short: "PDSA", level: "diploma-programming" },
  { slug: "modern-application-development-1", prefix: "mad-1", name: "Modern Application Development I", short: "MAD I", level: "diploma-programming" },
  { slug: "programming-concepts-using-java", prefix: "java", name: "Programming Concepts using Java", short: "Java", level: "diploma-programming" },
  { slug: "system-commands", prefix: "system-commands", name: "System Commands", short: "System Commands", level: "diploma-programming" },
  { slug: "modern-application-development-2", prefix: "mad-2", name: "Modern Application Development II", short: "MAD II", level: "diploma-programming" },
  { slug: "machine-learning-foundations", prefix: "mlf", name: "Machine Learning Foundations", short: "MLF", level: "diploma-data-science" },
  { slug: "machine-learning-techniques", prefix: "mlt", name: "Machine Learning Techniques", short: "MLT", level: "diploma-data-science" },
  { slug: "machine-learning-practice", prefix: "mlp", name: "Machine Learning Practice", short: "MLP", level: "diploma-data-science" },
  { slug: "business-data-management", prefix: "bdm", name: "Business Data Management", short: "BDM", level: "diploma-data-science" },
  { slug: "business-analytics", prefix: "ba", name: "Business Analytics", short: "BA", level: "diploma-data-science" },
  { slug: "tools-in-data-science", prefix: "tds", name: "Tools in Data Science", short: "TDS", level: "diploma-data-science" },
  { slug: "software-testing", prefix: "software-testing", name: "Software Testing", short: "Software Testing", level: "degree" },
  { slug: "deep-learning", prefix: "deep-learning", name: "Deep Learning", short: "Deep Learning", level: "degree" },
  { slug: "deep-learning-practice", prefix: "dlp", name: "Deep Learning Practice", short: "DLP", level: "degree" },
  { slug: "introduction-to-natural-language-processing", prefix: "inlp", name: "Introduction to Natural Language Processing", short: "i-NLP", level: "degree" },
  { slug: "strategies-for-professional-growth", prefix: "spg", name: "Strategies for Professional Growth", short: "SPG", level: "degree" },
];
