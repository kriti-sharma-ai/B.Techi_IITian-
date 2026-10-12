import { llmsFullTxt } from "@/lib/llms";

// /llms.txt plus the full text of every blog guide, for AI assistants that read one file.
export const revalidate = 300;

export async function GET() {
  return new Response(await llmsFullTxt(), { headers: { "Content-Type": "text/markdown; charset=utf-8" } });
}
