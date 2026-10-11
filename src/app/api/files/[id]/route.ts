import type { NextRequest } from "next/server";
import { bearer, supabaseAs } from "@/lib/supabase/server";
import { slugify } from "@/lib/utils";

// Opens a file uploaded in the CMS through a short-lived signed URL. Who may
// open which file is decided by the storage policy in supabase/0003_cms.sql:
// published files for everyone (signed-in students only, for "signed-in only"
// resources), drafts for staff. Send `Authorization: Bearer <token>` to open
// files as a signed-in user.
//
//   ?download=1   log the download and ask the browser to save the file
//   ?format=json  answer { url } instead of redirecting (for fetch callers)

// Long enough for the PDF viewer to finish fetching a large file; downloads start at once.
const VIEW_SECONDS = 60 * 60;
const DOWNLOAD_SECONDS = 5 * 60;
const UUID = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;

const fail = (status: number, error: string) => Response.json({ error }, { status, headers: { "Cache-Control": "no-store" } });

export async function GET(req: NextRequest, ctx: RouteContext<"/api/files/[id]">) {
  const { id } = await ctx.params;
  if (!UUID.test(id)) return fail(404, "File not found.");
  const token = bearer(req);
  const db = supabaseAs(token);

  const { data: resource } = await db.from("resources").select("id, title, status, file_path").eq("id", id).maybeSingle();
  if (!resource?.file_path) return fail(token ? 404 : 401, token ? "File not found." : "File not found. If it is for signed-in students, log in first.");

  const download = req.nextUrl.searchParams.has("download");
  const ext = resource.file_path.split(".").pop();
  const { data, error } = await db.storage
    .from("resources")
    .createSignedUrl(resource.file_path, download ? DOWNLOAD_SECONDS : VIEW_SECONDS, download ? { download: `${slugify(resource.title) || "file"}.${ext}` } : undefined);
  if (error || !data) return fail(token ? 403 : 401, token ? "You can't open this file." : "Log in to open this file.");

  // Only real downloads of published files count; staff previews don't.
  if (download && resource.status === "published") {
    const { error: logError } = await db.from("downloads").insert({ resource_id: resource.id });
    if (logError) console.error("Logging a download failed:", logError.message);
  }

  if (req.nextUrl.searchParams.get("format") === "json") return Response.json({ url: data.signedUrl }, { headers: { "Cache-Control": "no-store" } });
  return new Response(null, { status: 302, headers: { Location: data.signedUrl, "Cache-Control": "private, no-store" } });
}
