// Opening files uploaded in the CMS (src/app/api/files/[id]/route.ts) from the
// browser, as the signed-in user when there is one.

import { supabase } from "./supabase/client";

/** True for files served by the CMS file route, as opposed to plain links. */
export const isCmsFile = (url: string) => url.startsWith("/api/files/");

/** A short-lived URL for a CMS file. `download` also logs the download and makes the browser save it. */
export async function signedFileUrl(fileUrl: string, { download = false } = {}) {
  const { data } = await supabase.auth.getSession();
  const token = data.session?.access_token;
  const res = await fetch(`${fileUrl}?format=json${download ? "&download=1" : ""}`, {
    headers: token ? { Authorization: `Bearer ${token}` } : undefined,
    cache: "no-store",
  });
  const body = (await res.json().catch(() => ({}))) as { url?: string; error?: string };
  if (!res.ok || !body.url) throw new Error(body.error ?? "Couldn't open the file. Try again.");
  return body.url;
}
