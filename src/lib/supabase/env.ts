// Supabase project URL and anon key, checked once so a missing variable fails
// with a message that says what to set (instead of "supabaseUrl is required").
// Locally they come from .env.local; on Vercel, from Project → Settings →
// Environment Variables. Each is read by its full name so Next inlines it in
// browser bundles.

function required(name: string, value: string | undefined) {
  if (!value) {
    throw new Error(
      `${name} is not set. Add it to .env.local, or on Vercel under Project → Settings → Environment Variables, then rebuild.`,
    );
  }
  return value;
}

export const SUPABASE_URL = required("NEXT_PUBLIC_SUPABASE_URL", process.env.NEXT_PUBLIC_SUPABASE_URL);
export const SUPABASE_ANON_KEY = required("NEXT_PUBLIC_SUPABASE_ANON_KEY", process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);
