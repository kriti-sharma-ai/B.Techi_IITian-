// All reviews for the /reviews page: students' own (table `reviews`, supabase/0005_reviews.sql),
// newest first, then the original three in lib/data/reviews.ts.
import { REVIEWS } from "./data/reviews";
import { supabaseAs } from "./supabase/server";

export type ReviewEntry = {
  key: string;
  name: string;
  courseTag: string | null;
  rating: number;
  content: string;
  /** Display date, e.g. "Oct 2026"; the original reviews carry a label instead. */
  date: string;
};

export async function getAllReviews(): Promise<ReviewEntry[]> {
  const { data } = await supabaseAs()
    .from("reviews")
    .select("id, name, course_tag, rating, content, created_at")
    .order("created_at", { ascending: false })
    .limit(500);
  // If the table is missing or the call fails, the page still shows the original reviews.
  const posted = (data ?? []).map((r) => ({
    key: r.id as string,
    name: r.name as string,
    courseTag: r.course_tag as string | null,
    rating: r.rating as number,
    content: r.content as string,
    date: new Date(r.created_at as string).toLocaleDateString("en-IN", { month: "short", year: "numeric" }),
  }));
  return [
    ...posted,
    ...REVIEWS.map((r) => ({ key: r.id, name: r.name, courseTag: r.courseTag, rating: r.rating, content: r.content, date: r.date })),
  ];
}
