// Supabase clients for route handlers and server actions. They use the anon
// key; a call made for a signed-in user carries that user's access token, so
// Row Level Security applies exactly as it does in the browser.
import { createClient } from "@supabase/supabase-js";

export function supabaseAs(token?: string | null) {
  return createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
    auth: { persistSession: false, autoRefreshToken: false },
    global: token ? { headers: { Authorization: `Bearer ${token}` } } : undefined,
  });
}

/** The access token from an `Authorization: Bearer …` header, if any. */
export const bearer = (req: Request) => req.headers.get("authorization")?.match(/^Bearer\s+(\S+)$/i)?.[1] ?? null;
