// Qualifier pack facts shared by the pages and the exam (client-safe: no question data).

/** Subjects bundled in the pack, in exam order. */
export const QUALIFIER_SUBJECTS = [
  "mathematics-for-data-science-1",
  "statistics-for-data-science-1",
  "computational-thinking",
  "english-1",
] as const;

/** General-category cutoff: minimum per course and minimum average across the four. */
export const QUALIFIER_CUTOFF = { perSubject: 40, average: 50 };

/** Weeks 1–4 syllabus examined per course. */
export const QUALIFIER_SYLLABUS: Record<(typeof QUALIFIER_SUBJECTS)[number], string[]> = {
  "mathematics-for-data-science-1": ["Sets, relations and functions", "Coordinate geometry and straight lines", "Quadratic functions", "Polynomials"],
  "statistics-for-data-science-1": ["Types of data", "Describing categorical data", "Describing numerical data", "Association between two variables"],
  "computational-thinking": ["Variables, iteration and filtering", "Datasets as cards and tables", "Flowcharts and pseudocode", "Procedures and multiple filters"],
  "english-1": ["Sounds and pronunciation", "Parts of speech and grammar", "Vocabulary and usage", "Reading comprehension"],
};

