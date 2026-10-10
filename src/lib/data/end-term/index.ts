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

export { END_TERM_SUBJECTS, type EndTermLevel, type EndTermSubject } from "./subjects";

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
