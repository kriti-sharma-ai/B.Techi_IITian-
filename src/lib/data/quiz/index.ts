import type { QualifierMock } from "../../types";
import { maths1QuizPapers } from "./maths-1";
import { stats1QuizPapers } from "./stats-1";
import { ctQuizPapers } from "./ct";
import { english1QuizPapers } from "./english-1";
import { maths2QuizPapers } from "./maths-2";
import { stats2QuizPapers } from "./stats-2";
import { pythonQuizPapers } from "./python";
import { english2QuizPapers } from "./english-2";
import { dbmsQuizPapers } from "./dbms";
import { pdsaQuizPapers } from "./pdsa";
import { mad1QuizPapers } from "./mad-1";
import { javaQuizPapers } from "./java";
import { systemCommandsQuizPapers } from "./system-commands";
import { mad2QuizPapers } from "./mad-2";
import { mlfQuizPapers } from "./mlf";
import { mltQuizPapers } from "./mlt";
import { bdmQuizPapers } from "./bdm";
import { baQuizPapers } from "./ba";
import { dlGenaiQuizPapers } from "./dl-genai";
import { softwareTestingQuizPapers } from "./software-testing";
import { deepLearningQuizPapers } from "./deep-learning";
import { dlpQuizPapers } from "./dlp";
import { dlCvQuizPapers } from "./dl-cv";
import { llmQuizPapers } from "./llm";
import { mfgaiQuizPapers } from "./mfgai";
import { rlQuizPapers } from "./rl";
import { aiSearchQuizPapers } from "./ai-search";
import { cProgrammingQuizPapers } from "./c-programming";
import { osQuizPapers } from "./os";
import { computerNetworksQuizPapers } from "./computer-networks";
import { csdQuizPapers } from "./csd";
import { industry4QuizPapers } from "./industry-4";
import { gameTheoryQuizPapers } from "./game-theory";
import { corporateFinanceQuizPapers } from "./corporate-finance";
import { financialForensicsQuizPapers } from "./financial-forensics";
import { spgQuizPapers } from "./spg";
import { softwareEngineeringQuizPapers } from "./software-engineering";
import { adsQuizPapers } from "./ads";
import { atbQuizPapers } from "./atb";
import { advancedAlgorithmsQuizPapers } from "./advanced-algorithms";
import { marketResearchQuizPapers } from "./market-research";
import { designThinkingQuizPapers } from "./design-thinking";
import { managerialEconomicsQuizPapers } from "./managerial-economics";

// IIT Madras BS Quiz 1 and Quiz 2 previous-year papers, one single-course paper per subject per sitting.
// Server-only: the site reads papers from Supabase (lib/papers.ts); scripts/seed-papers.mts uploads these.

export { QUIZ_SUBJECTS, type QuizSubject } from "./subjects";

export const quizPapers: QualifierMock[] = [
  ...maths1QuizPapers,
  ...stats1QuizPapers,
  ...ctQuizPapers,
  ...english1QuizPapers,
  ...maths2QuizPapers,
  ...stats2QuizPapers,
  ...pythonQuizPapers,
  ...english2QuizPapers,
  ...dbmsQuizPapers,
  ...pdsaQuizPapers,
  ...mad1QuizPapers,
  ...javaQuizPapers,
  ...systemCommandsQuizPapers,
  ...mad2QuizPapers,
  ...mlfQuizPapers,
  ...mltQuizPapers,
  ...bdmQuizPapers,
  ...baQuizPapers,
  ...dlGenaiQuizPapers,
  ...softwareTestingQuizPapers,
  ...deepLearningQuizPapers,
  ...dlpQuizPapers,
  ...dlCvQuizPapers,
  ...llmQuizPapers,
  ...mfgaiQuizPapers,
  ...rlQuizPapers,
  ...aiSearchQuizPapers,
  ...cProgrammingQuizPapers,
  ...osQuizPapers,
  ...computerNetworksQuizPapers,
  ...csdQuizPapers,
  ...industry4QuizPapers,
  ...gameTheoryQuizPapers,
  ...corporateFinanceQuizPapers,
  ...financialForensicsQuizPapers,
  ...spgQuizPapers,
  ...softwareEngineeringQuizPapers,
  ...adsQuizPapers,
  ...atbQuizPapers,
  ...advancedAlgorithmsQuizPapers,
  ...marketResearchQuizPapers,
  ...designThinkingQuizPapers,
  ...managerialEconomicsQuizPapers,
];
