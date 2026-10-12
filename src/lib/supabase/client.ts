// Browser-side Supabase client. The anon key is safe to expose: Row Level
// Security in supabase/schema.sql decides what each user can read or write.
import { createClient } from "@supabase/supabase-js";
import { SUPABASE_ANON_KEY, SUPABASE_URL } from "./env";

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
