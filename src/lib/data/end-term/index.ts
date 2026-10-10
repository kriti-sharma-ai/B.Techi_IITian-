import type { QualifierMock } from "../../types";
import { maths1EndTermPapers } from "./maths-1";
import { stats1EndTermPapers } from "./stats-1";
import { ctEndTermPapers } from "./ct";
import { english1EndTermPapers } from "./english-1";
import { maths2EndTermPapers } from "./maths-2";
import { stats2EndTermPapers } from "./stats-2";
import { pythonEndTermPapers } from "./python";
import { english2EndTermPapers } from "./english-2";
import { dbmsEndTermPapers } from "./dbms";
import { pdsaEndTermPapers } from "./pdsa";
import { mad1EndTermPapers } from "./mad-1";
import { javaEndTermPapers } from "./java";
import { systemCommandsEndTermPapers } from "./system-commands";
import { mad2EndTermPapers } from "./mad-2";
import { mlfEndTermPapers } from "./mlf";
import { mltEndTermPapers } from "./mlt";
import { mlpEndTermPapers } from "./mlp";
import { bdmEndTermPapers } from "./bdm";
import { baEndTermPapers } from "./ba";
import { tdsEndTermPapers } from "./tds";
import { softwareTestingEndTermPapers } from "./software-testing";
import { deepLearningEndTermPapers } from "./deep-learning";
import { dlpEndTermPapers } from "./dlp";
import { inlpEndTermPapers } from "./inlp";
import { spgEndTermPapers } from "./spg";

// IIT Madras BS End Term previous-year papers, one single-course paper per subject per sitting.
// Server-only: import through lib/end-term.ts so the question data stays out of client bundles.

export type EndTermLevel = "foundation" | "diploma-programming" | "diploma-data-science" | "degree";

export type EndTermSubject = { slug: string; name: string; short: string; level: EndTermLevel };

/** Courses with End Term papers, in curriculum order. */
export const END_TERM_SUBJECTS: EndTermSubject[] = [
  { slug: "mathematics-for-data-science-1", name: "Mathematics for Data Science I", short: "Maths I", level: "foundation" },
  { slug: "statistics-for-data-science-1", name: "Statistics for Data Science I", short: "Stats I", level: "foundation" },
  { slug: "computational-thinking", name: "Computational Thinking", short: "CT", level: "foundation" },
  { slug: "english-1", name: "English I", short: "English I", level: "foundation" },
  { slug: "mathematics-for-data-science-2", name: "Mathematics for Data Science II", short: "Maths II", level: "foundation" },
  { slug: "statistics-for-data-science-2", name: "Statistics for Data Science II", short: "Stats II", level: "foundation" },
  { slug: "programming-in-python", name: "Programming in Python", short: "Python", level: "foundation" },
  { slug: "english-2", name: "English II", short: "English II", level: "foundation" },
  { slug: "database-management-systems", name: "Database Management Systems", short: "DBMS", level: "diploma-programming" },
  { slug: "programming-data-structures-and-algorithms", name: "Programming, Data Structures and Algorithms using Python", short: "PDSA", level: "diploma-programming" },
  { slug: "modern-application-development-1", name: "Modern Application Development I", short: "MAD I", level: "diploma-programming" },
  { slug: "programming-concepts-using-java", name: "Programming Concepts using Java", short: "Java", level: "diploma-programming" },
  { slug: "system-commands", name: "System Commands", short: "System Commands", level: "diploma-programming" },
  { slug: "modern-application-development-2", name: "Modern Application Development II", short: "MAD II", level: "diploma-programming" },
  { slug: "machine-learning-foundations", name: "Machine Learning Foundations", short: "MLF", level: "diploma-data-science" },
  { slug: "machine-learning-techniques", name: "Machine Learning Techniques", short: "MLT", level: "diploma-data-science" },
  { slug: "machine-learning-practice", name: "Machine Learning Practice", short: "MLP", level: "diploma-data-science" },
  { slug: "business-data-management", name: "Business Data Management", short: "BDM", level: "diploma-data-science" },
  { slug: "business-analytics", name: "Business Analytics", short: "BA", level: "diploma-data-science" },
  { slug: "tools-in-data-science", name: "Tools in Data Science", short: "TDS", level: "diploma-data-science" },
  { slug: "software-testing", name: "Software Testing", short: "Software Testing", level: "degree" },
  { slug: "deep-learning", name: "Deep Learning", short: "Deep Learning", level: "degree" },
  { slug: "deep-learning-practice", name: "Deep Learning Practice", short: "DLP", level: "degree" },
  { slug: "introduction-to-natural-language-processing", name: "Introduction to Natural Language Processing", short: "i-NLP", level: "degree" },
  { slug: "strategies-for-professional-growth", name: "Strategies for Professional Growth", short: "SPG", level: "degree" },
];

export const endTermPapers: QualifierMock[] = [
  ...maths1EndTermPapers,
  ...stats1EndTermPapers,
  ...ctEndTermPapers,
  ...english1EndTermPapers,
  ...maths2EndTermPapers,
  ...stats2EndTermPapers,
  ...pythonEndTermPapers,
  ...english2EndTermPapers,
  ...dbmsEndTermPapers,
  ...pdsaEndTermPapers,
  ...mad1EndTermPapers,
  ...javaEndTermPapers,
  ...systemCommandsEndTermPapers,
  ...mad2EndTermPapers,
  ...mlfEndTermPapers,
  ...mltEndTermPapers,
  ...mlpEndTermPapers,
  ...bdmEndTermPapers,
  ...baEndTermPapers,
  ...tdsEndTermPapers,
  ...softwareTestingEndTermPapers,
  ...deepLearningEndTermPapers,
  ...dlpEndTermPapers,
  ...inlpEndTermPapers,
  ...spgEndTermPapers,
];
