"use client";

// Who is using the admin, and the plumbing every admin screen shares: running
// server actions with the caller's access token, loading data as the caller
// (RLS decides what they see), and refreshing lists after a change.

import { createContext, useCallback, useContext, useEffect, useRef, useState, type ReactNode } from "react";
import { atLeast, type Result } from "@/lib/admin";
import type { Role } from "@/lib/store";
import { supabase } from "@/lib/supabase/client";
import { useToast } from "../toast";

export type Staff = { id: string; name: string; email: string; role: Role };

export type StaffState =
  | { status: "loading" }
  | { status: "signed-out" }
  | { status: "student"; name: string }
  | { status: "error"; message: string }
  | { status: "ok"; staff: Staff };

const StaffContext = createContext<Staff | null>(null);

/** The signed-in staff member. Only usable inside the admin (below <AdminShell>). */
export function useStaff() {
  const staff = useContext(StaffContext);
  if (!staff) throw new Error("useStaff() outside the admin");
  return staff;
}

export const StaffProvider = ({ staff, children }: { staff: Staff; children: ReactNode }) => (
  <StaffContext.Provider value={staff}>{children}</StaffContext.Provider>
);

/** Reads the role from `profiles` (never from the browser's cached copy) and follows sign-in changes. */
export function useStaffState(): StaffState {
  const [state, setState] = useState<StaffState>({ status: "loading" });
  useEffect(() => {
    let current = "";
    const check = async (userId: string | undefined, email: string) => {
      current = userId ?? "";
      if (!userId) return setState({ status: "signed-out" });
      const { data, error } = await supabase.from("profiles").select("name, role").eq("id", userId).maybeSingle();
      if (current !== userId) return; // signed out or switched meanwhile
      if (error || !data) return setState({ status: "error", message: error?.message ?? "Your profile is missing." });
      const role = data.role as Role;
      setState(atLeast(role, "contributor") ? { status: "ok", staff: { id: userId, name: data.name, email, role } } : { status: "student", name: data.name });
    };
    void supabase.auth.getSession().then(({ data }) => check(data.session?.user.id, data.session?.user.email ?? ""));
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "TOKEN_REFRESHED" || event === "INITIAL_SESSION") return;
      // Supabase calls must not run inside this callback.
      setTimeout(() => void check(session?.user.id, session?.user.email ?? ""));
    });
    return () => data.subscription.unsubscribe();
  }, []);
  return state;
}

/** The caller's access token, refreshed if it has expired. Server actions verify it. */
export async function accessToken() {
  const { data } = await supabase.auth.getSession();
  return data.session?.access_token ?? "";
}

/* ───────────── Change notifications ───────────── */

const listeners = new Set<() => void>();

/** Tell every open admin list to reload (after a write). */
export const adminChanged = () => listeners.forEach((l) => l());

function useOnAdminChange(cb: () => void) {
  const ref = useRef(cb);
  useEffect(() => {
    ref.current = cb;
  });
  useEffect(() => {
    const l = () => ref.current();
    listeners.add(l);
    return () => void listeners.delete(l);
  }, []);
}

/* ───────────── Actions ───────────── */

/**
 * Runs a server action with the caller's token. Shows `success` (or the error)
 * as a toast, refreshes admin lists, and resolves to the action's data, or
 * undefined when it failed.
 */
export function useAction() {
  const toast = useToast();
  return useCallback(
    async <T,>(action: (token: string) => Promise<Result<T>>, success?: string): Promise<T | undefined> => {
      let res: Result<T>;
      try {
        res = await action(await accessToken());
      } catch {
        res = { ok: false, error: "Couldn't reach the server. Check your connection and try again." };
      }
      if (!res.ok) {
        toast(res.error);
        return undefined;
      }
      if (success) toast(success);
      adminChanged();
      return res.data;
    },
    [toast],
  );
}

/* ───────────── Queries ───────────── */

type Query<T> = PromiseLike<{ data: T | null; error: { message: string } | null; count?: number | null }>;

/**
 * Loads data as the signed-in staff member and reloads it whenever `deps`
 * change or any admin write happens. `query` is a Supabase query (or anything
 * resolving to { data, error }).
 */
export function useAdminQuery<T>(query: () => Query<T>, deps: unknown[]) {
  const [state, setState] = useState<{ data?: T; count?: number; error?: string; loading: boolean; key?: string }>({ loading: true });
  // Loading from the first render after `deps` change, not only once the effect has run.
  const key = JSON.stringify(deps);
  const [tick, setTick] = useState(0);
  const run = useRef(query);
  useEffect(() => {
    run.current = query;
  });
  useOnAdminChange(() => setTick((t) => t + 1));
  useEffect(() => {
    let cancelled = false;
    setState((s) => ({ ...s, loading: true }));
    Promise.resolve(run.current()).then(
      ({ data, error, count }) => {
        if (cancelled) return;
        setState({ data: data ?? undefined, count: count ?? undefined, error: error?.message, loading: false, key });
      },
      (e: Error) => !cancelled && setState({ error: e.message, loading: false, key }),
    );
    return () => {
      cancelled = true;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps -- deps are the caller's
  }, [tick, ...deps]);
  return { ...state, loading: state.loading || state.key !== key, reload: () => setTick((t) => t + 1) };
}
