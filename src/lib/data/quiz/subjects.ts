// Courses with quiz papers. Kept apart from the question data so URL helpers
// (lib/pyq-urls.ts) can use it without loading the papers.

import type { EndTermSubject } from "../end-term/subjects";

/** `prefix` starts every paper slug of the course, e.g. stats-1-quiz-1-oct-2025-an. */
export type QuizSubject = EndTermSubject;

/** Courses with quiz papers, in curriculum order. */
export const QUIZ_SUBJECTS: QuizSubject[] = [
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
  { slug: "business-data-management", prefix: "bdm", name: "Business Data Management", short: "BDM", level: "diploma-data-science" },
  { slug: "business-analytics", prefix: "ba", name: "Business Analytics", short: "BA", level: "diploma-data-science" },
  { slug: "introduction-to-deep-learning-and-generative-ai", prefix: "dl-genai", name: "Introduction to Deep Learning and Generative AI", short: "DL & GenAI", level: "diploma-data-science" },
  { slug: "software-testing", prefix: "software-testing", name: "Software Testing", short: "Software Testing", level: "degree" },
  { slug: "deep-learning", prefix: "deep-learning", name: "Deep Learning", short: "Deep Learning", level: "degree" },
  { slug: "deep-learning-practice", prefix: "dlp", name: "Deep Learning Practice", short: "DLP", level: "degree" },
  { slug: "deep-learning-for-computer-vision", prefix: "dl-cv", name: "Deep Learning for Computer Vision", short: "DL for CV", level: "degree" },
  { slug: "large-language-models", prefix: "llm", name: "Large Language Models", short: "LLM", level: "degree" },
  { slug: "mathematical-foundations-of-generative-ai", prefix: "mfgai", name: "Mathematical Foundations of Generative AI", short: "Maths for GenAI", level: "degree" },
  { slug: "reinforcement-learning", prefix: "rl", name: "Reinforcement Learning", short: "RL", level: "degree" },
  { slug: "ai-search-methods-for-problem-solving", prefix: "ai-search", name: "AI: Search Methods for Problem Solving", short: "AI Search", level: "degree" },
  { slug: "programming-in-c", prefix: "c-programming", name: "Programming in C", short: "C Programming", level: "degree" },
  { slug: "operating-systems", prefix: "os", name: "Operating Systems", short: "OS", level: "degree" },
  { slug: "computer-networks", prefix: "computer-networks", name: "Computer Networks", short: "Networks", level: "degree" },
  { slug: "computer-system-design", prefix: "csd", name: "Computer System Design", short: "CSD", level: "degree" },
  { slug: "industry-4-0", prefix: "industry-4", name: "Industry 4.0", short: "Industry 4.0", level: "degree" },
  { slug: "game-theory-and-strategy", prefix: "game-theory", name: "Game Theory and Strategy", short: "Game Theory", level: "degree" },
  { slug: "corporate-finance", prefix: "corporate-finance", name: "Corporate Finance", short: "Corporate Finance", level: "degree" },
  { slug: "financial-forensics", prefix: "financial-forensics", name: "Financial Forensics", short: "Financial Forensics", level: "degree" },
  { slug: "strategies-for-professional-growth", prefix: "spg", name: "Strategies for Professional Growth", short: "SPG", level: "degree" },
  { slug: "software-engineering", prefix: "software-engineering", name: "Software Engineering", short: "Software Engineering", level: "degree" },
  { slug: "algorithms-for-data-science", prefix: "ads", name: "Algorithms for Data Science", short: "ADS", level: "degree" },
  { slug: "algorithmic-thinking-in-bioinformatics", prefix: "atb", name: "Algorithmic Thinking in Bioinformatics", short: "ATB", level: "degree" },
  { slug: "advanced-algorithms", prefix: "advanced-algorithms", name: "Advanced Algorithms", short: "Advanced Algorithms", level: "degree" },
  { slug: "market-research", prefix: "market-research", name: "Market Research", short: "Market Research", level: "degree" },
  { slug: "design-thinking-for-data-driven-app-development", prefix: "design-thinking", name: "Design Thinking for Data-Driven App Development", short: "Design Thinking", level: "degree" },
  { slug: "managerial-economics", prefix: "managerial-economics", name: "Managerial Economics", short: "Managerial Economics", level: "degree" },
];
