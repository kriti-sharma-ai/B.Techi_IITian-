// Browser-side Supabase client. The anon key is safe to expose: Row Level
// Security in supabase/schema.sql decides what each user can read or write.
import { createClient } from "@supabase/supabase-js";

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
);
