import type { Accent } from "../types";

// Blog categories. Client-safe: no file system access here.

export type BlogCategory = {
  slug: string;
  name: string;
  /** One line for the category page and cards. */
  description: string;
  accent: Accent;
};

export const blogCategories: BlogCategory[] = [
  {
    slug: "iitm-bs",
    name: "IITM BS Degree",
    description: "Admissions, the qualifier, fees, course choices and life as an IIT Madras BS learner.",
    accent: "yellow",
  },
  {
    slug: "exam-prep",
    name: "Exam Prep",
    description: "Quiz and end-term strategy, course-by-course study guides and revision plans.",
    accent: "purple",
  },
  {
    slug: "data-skills",
    name: "Data Skills",
    description: "Python, SQL, Excel, Power BI and statistics, taught the way you'll use them at work.",
    accent: "blue",
  },
  {
    slug: "ai",
    name: "AI & Tech Trends",
    description: "What's changing in AI and tech this year, and what it means for students and analysts.",
    accent: "green",
  },
  {
    slug: "careers",
    name: "Careers",
    description: "Roadmaps, interviews, resumes, internships and salaries for data and business roles in India.",
    accent: "teal",
  },
];

export const getBlogCategory = (slug: string) => blogCategories.find((c) => c.slug === slug);

export const blogCategoryHref = (slug: string) => `/blog/category/${slug}`;
