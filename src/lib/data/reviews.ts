// Real student reviews, shared by the home page reviews section and the rating in the site JSON-LD.

export interface ReviewItem {
  id: string;
  name: string;
  role: string;
  courseTag: string;
  metric?: string;
  rating: number;
  featured?: boolean;
  category: "qualifier";
  content: string;
  date: string;
  avatarBg: string;
  avatarColor: string;
  tilt?: string;
  width?: string;
}

/**
 * 3 authentic reviews from students preparing for the IIT Madras BS Qualifier exam:
 * 1. Bonny Mondal (preparing for qualifier, helping a lot)
 * 2. Satya Sharma (student preparing for qualifier)
 * 3. Yeasmin Khatun (preparing for qualifier)
 */
export const REVIEWS: ReviewItem[] = [
  {
    id: "rev-bonny",
    name: "Bonny Mondal",
    role: "Preparing for Qualifier",
    courseTag: "Maths 1 & CT",
    metric: "Helping a lot",
    rating: 5,
    featured: true,
    category: "qualifier",
    content:
      "Preparing for qualifier, helping a lot! The TCS iON mock test replica, scientific calculator, and chapter-wise PYQs gave me so much clarity and confidence for the exam.",
    date: "Qualifier Prep",
    avatarBg: "bg-amber-500/10 dark:bg-amber-500/15",
    avatarColor: "text-amber-600 dark:text-amber-400 border-amber-500/25",
  },
  {
    id: "rev-satya",
    name: "Satya Sharma",
    role: "Student · Preparing for Qualifier",
    courseTag: "Stats 1 & English 1",
    metric: "Qualifier Aspirant",
    rating: 5,
    featured: true,
    category: "qualifier",
    content:
      "As a student preparing for the Qualifier, finding accurate past papers with official keys was tough until I found BTechi. The chapter-wise practice and exam simulation are spot on.",
    date: "Qualifier Prep",
    avatarBg: "bg-blue-500/10 dark:bg-blue-500/15",
    avatarColor: "text-blue-600 dark:text-blue-400 border-blue-500/25",
  },
  {
    id: "rev-yeasmin",
    name: "Yeasmin Khatun",
    role: "Preparing for Qualifier",
    courseTag: "4 Foundation Subjects",
    metric: "Qualifier Aspirant",
    rating: 5,
    featured: true,
    category: "qualifier",
    content:
      "Preparing for the Qualifier became so much easier with BTechi. The instant scoring, negative marking alerts, and question palette make revision seamless and effective.",
    date: "Qualifier Prep",
    avatarBg: "bg-emerald-500/10 dark:bg-emerald-500/15",
    avatarColor: "text-emerald-600 dark:text-emerald-400 border-emerald-500/25",
  },
];

/** Average star rating and count, computed from REVIEWS so the badge and schema never drift from the reviews shown. */
export const REVIEW_SUMMARY = {
  count: REVIEWS.length,
  average: Math.round((REVIEWS.reduce((n, r) => n + r.rating, 0) / REVIEWS.length) * 10) / 10,
};
