import { getDemoExam } from "@/lib/demo-exam";

// The landing page's demo questions, fetched in the browser so they are not in the home page HTML:
// search engines and AI overviews should describe BTechi, not answer a sample question.
// Blocked in robots.ts. Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

export async function GET() {
  return Response.json(await getDemoExam(), { headers: { "X-Robots-Tag": "noindex" } });
}
