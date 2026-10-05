import type { Program, Subject } from "../types";

// IIT Madras BS in Management and Data Science — official structure.
// Source: study.iitm.ac.in academics page (course list, codes, credits).
// Course content (weeks, topics, resources) is intentionally empty for now.

export const PROGRAM_SLUG = "iitm-bs";

export const programs: Program[] = [
  {
    slug: PROGRAM_SLUG,
    name: "IIT Madras BS",
    degree: "BS in Management and Data Science",
    tagline: "Management & Data Science",
    description:
      "Every course of the IIT Madras BS in Management and Data Science, organised level by level: Foundation, Diploma and BS Degree.",
    university: "IIT Madras",
    accent: "yellow",
    totalCredits: 142,
    maxYears: 8,
    levels: [
      {
        slug: "foundation",
        name: "Foundation Level",
        short: "Foundation",
        accent: "yellow",
        credits: 32,
        cumulativeCredits: 32,
        courses: "8 courses",
        duration: "1–3 years",
        effort: "10 hrs/course/week",
        entry: "Clear the Qualifier Process",
        exit: "Foundation Certificate from IITM CODE",
      },
      {
        slug: "diploma",
        name: "Diploma Level",
        short: "Diploma",
        accent: "blue",
        credits: 60,
        cumulativeCredits: 92,
        courses: "14 courses + 2 projects",
        duration: "1.5–3 years",
        effort: "15 hrs/course/week",
        entry: "All 8 Foundation courses completed",
        exit: "Diploma in Data Analytics for Business",
        groups: [
          {
            slug: "data-analytics-for-business",
            name: "Diploma in Data Analytics for Business",
            credits: 36,
            summary: "8 courses + 2 projects: databases, analytics and core management applied to business problems.",
          },
          {
            slug: "other-diploma-courses",
            name: "Other Diploma Level courses",
            credits: 24,
            summary: "6 courses in economics, finance and management required to complete the Diploma Level.",
          },
        ],
      },
      {
        slug: "degree",
        name: "BS Degree Level",
        short: "Degree",
        accent: "purple",
        credits: 50,
        cumulativeCredits: 142,
        courses: "Core + electives",
        duration: "1–4 years",
        effort: "15 hrs/course/week",
        entry: "All Diploma courses and projects completed (CGPA ≥ 6.0, projects ≥ 7.0)",
        exit: "BS in Management and Data Science",
        groups: [
          { slug: "core", name: "Core courses", credits: 24, summary: "6 core courses taken by every Degree Level learner." },
          { slug: "electives", name: "Elective courses", credits: 26, summary: "Choose electives to complete the 50 Degree Level credits." },
        ],
      },
    ],
  },
];

type Row = [name: string, slug: string, code: string | undefined, credits?: number];

const make =
  (level: string, prerequisites: string, group?: string, kind: Subject["kind"] = "course") =>
  ([name, slug, code, credits = 4]: Row): Subject => ({
    slug,
    name,
    code,
    programSlug: PROGRAM_SLUG,
    level,
    group,
    kind,
    credits,
    prerequisites,
    units: [],
  });

const foundation: Row[] = [
  ["Mathematics for Data Science I", "mathematics-for-data-science-1", "BSMA1001"],
  ["Statistics for Data Science I", "statistics-for-data-science-1", "BSMA1002"],
  ["Computational Thinking", "computational-thinking", "BSCS1001"],
  ["English I", "english-1", "BSHS1001"],
  ["Principles of Economics", "principles-of-economics", "BSMS1201"],
  ["Financial Accounting", "financial-accounting", "BSMS1202"],
  ["Business Statistics", "business-statistics", "BSMS1203"],
  ["Management Thought and Practice", "management-thought-and-practice", "BSMS1204"],
];

const dab: Row[] = [
  ["Python for Data Analytics", "python-for-data-analytics", "BSMS2201"],
  ["Data Management", "data-management", "BSMS2202"],
  ["Analysis of Economic Data", "analysis-of-economic-data", "BSMS2203"],
  ["Marketing Analytics", "marketing-analytics", "BSMS3201"],
  ["HR Analytics", "hr-analytics", "BSMS3202"],
  ["Financial Analytics", "financial-analytics", "BSMS3203"],
  ["Operations Management", "operations-management", "BSMS2204"],
  ["Supply Chain Analytics", "supply-chain-analytics", "BSMS3204"],
];

const dabProjects: Row[] = [
  ["Business Management Project", "business-management-project", "BSMS3901", 2],
  ["Business Analytics Project", "business-analytics-project", "BSMS3902", 2],
];

const otherDiploma: Row[] = [
  ["Corporate Finance", "corporate-finance", "BSMS2205"],
  ["Organizational Behaviour", "organizational-behaviour", "BSMS2206"],
  ["Money, Banking and Financial Markets", "money-banking-and-financial-markets", "BSMS3205"],
  ["Marketing Management", "marketing-management", "BSMS2207"],
  ["Macroeconomics", "macroeconomics", "BSMS2208"],
  ["Managerial Economics", "managerial-economics", "BSMS3206"],
];

const core: Row[] = [
  ["Strategies for Professional Growth", "strategies-for-professional-growth", "BSGN3001"],
  ["GenAI for Business", "genai-for-business", "BSMS3207"],
  ["Digital Business", "digital-business", "BSMS3208"],
  ["Logistics and Supply Chain Management", "logistics-and-supply-chain-management", "BSMS3209"],
  ["Applied Time Series Analysis", "applied-time-series-analysis", "BSMS4201"],
  ["Market Intelligence", "market-intelligence", "BSMS4202"],
];

const electives: Row[] = [
  ["Introduction to Game Theory", "introduction-to-game-theory", undefined],
  ["Public Finance", "public-finance", undefined],
  ["Economics of AI", "economics-of-ai", undefined],
  ["Industrial Organisation", "industrial-organisation", undefined],
  ["Research Design for Social Data Science", "research-design-for-social-data-science", undefined],
  ["Project Finance", "project-finance", undefined],
  ["Corporate Valuation", "corporate-valuation", undefined],
  ["Financial Forensics", "financial-forensics", undefined],
  ["ALM and Risk", "alm-and-risk", undefined],
  ["Capital Markets and Derivatives", "capital-markets-and-derivatives", undefined],
  ["Digital Marketing", "digital-marketing", undefined],
  ["Brand Management", "brand-management", undefined],
  ["Consumer Behavior", "consumer-behavior", undefined],
  ["Design Thinking", "design-thinking", undefined],
  ["Computational Optimization", "computational-optimization", undefined],
  ["Business Research Methods", "business-research-methods", undefined],
  ["Sustainable Business Models", "sustainable-business-models", undefined],
  ["Digital Business Strategy and Models", "digital-business-strategy-and-models", undefined],
  ["Family Business", "family-business", undefined],
  ["Social Media Computing", "social-media-computing", undefined],
  ["Performance Management", "performance-management", undefined],
  ["Responsible AI", "responsible-ai", undefined],
];

export const subjects: Subject[] = [
  ...foundation.map(make("foundation", "None")),
  ...dab.map(make("diploma", "Foundation Level", "data-analytics-for-business")),
  ...dabProjects.map(make("diploma", "Foundation Level", "data-analytics-for-business", "project")),
  ...otherDiploma.map(make("diploma", "Foundation Level", "other-diploma-courses")),
  ...core.map(make("degree", "Diploma Level", "core")),
  ...electives.map(make("degree", "Core courses", "electives")),
];
