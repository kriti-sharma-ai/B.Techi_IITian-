// Every course with End Term or quiz papers: the End Term courses, then courses
// that only have quiz papers. Small and client-safe, so URL helpers and course
// lists can use it without loading any paper.

import { END_TERM_SUBJECTS, type EndTermSubject } from "./end-term/subjects";
import { QUIZ_SUBJECTS } from "./quiz/subjects";

export const PAPER_SUBJECTS: EndTermSubject[] = [
  ...END_TERM_SUBJECTS,
  ...QUIZ_SUBJECTS.filter((q) => !END_TERM_SUBJECTS.some((e) => e.slug === q.slug)),
];
