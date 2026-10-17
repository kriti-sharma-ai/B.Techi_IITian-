import { getGuideCatalog } from "@/lib/guide-data";

// Topic, year and most-repeated sheets per course, for the guide bubble (lib/guide.ts).
// Fetched when the bubble first opens. Papers come from Supabase; matches REFRESH_SECONDS in lib/papers.ts.
export const revalidate = 300;

export async function GET() {
  return Response.json(await getGuideCatalog(), { headers: { "X-Robots-Tag": "noindex" } });
}
