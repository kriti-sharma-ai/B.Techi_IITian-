"use client";

import { useEffect } from "react";
import type { User as AuthUser } from "@supabase/supabase-js";
import { supabase } from "@/lib/supabase/client";
import { syncProgress } from "@/lib/supabase/sync";
import { actions, update, type Role, type User } from "@/lib/store";

function fromAuth(u: AuthUser): User {
  const meta = u.user_metadata ?? {};
  return {
    name: meta.name ?? meta.full_name ?? u.email?.split("@")[0] ?? "Student",
    email: u.email ?? "",
    university: meta.university,
    program: meta.program,
    level: meta.level,
    role: "student",
  };
}

/**
 * Mirrors the Supabase session into the local store, which the rest of the UI
 * reads. Covers email login, sign-up, Google redirects and sign-out in other tabs.
 */
export function AuthSync() {
  useEffect(() => {
    const { data } = supabase.auth.onAuthStateChange((_event, session) => {
      if (!session) {
        // Drop stale browser-only accounts from demo mode; the demo admin stays
        // so the CMS can still be previewed without a real admin account.
        update((s) => (s.user && s.user.role !== "admin" ? { ...s, user: null } : s));
        void syncProgress(null);
        return;
      }
      actions.signIn(fromAuth(session.user));
      // Supabase calls must not run inside this callback, so defer them.
      setTimeout(() => void syncProgress(session.user.id));
      setTimeout(async () => {
        const { data: profile } = await supabase.from("profiles").select("name, role").eq("id", session.user.id).single();
        if (profile) actions.updateProfile({ name: profile.name, role: profile.role as Role });
      });
    });
    return () => data.subscription.unsubscribe();
  }, []);

  return null;
}
