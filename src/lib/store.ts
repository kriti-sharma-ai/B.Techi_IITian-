"use client";

// Per-student state (bookmarks, progress, attempts, downloads, reports).
// Phase 1 keeps it in localStorage so the product works end-to-end without
// a backend; each slice maps 1:1 to a table in supabase/schema.sql.

import { useSyncExternalStore } from "react";
import type { ResourceKind } from "./types";

export type Role = "student" | "contributor" | "moderator" | "admin" | "super_admin";

export type User = {
  name: string;
  email: string;
  university?: string;
  program?: string;
  /** Current level slug, e.g. foundation. */
  level?: string;
  role: Role;
};

export type Bookmark = { kind: ResourceKind; id: string; title: string; href: string; subtitle?: string; savedAt: string };
export type Attempt = { questionId: string; subjectSlug: string; topicSlug: string; correct: boolean | null; at: string };
export type Download = { noteId: string; title: string; at: string };
export type Report = {
  id: string;
  kind: ResourceKind;
  resourceId: string;
  title: string;
  reason: string;
  details: string;
  at: string;
  status: "open" | "resolved";
};
export type Visit = { subjectSlug: string; topicSlug?: string; at: string };
export type Upload = {
  id: string;
  title: string;
  type: string;
  subjectSlug: string;
  unitId?: string;
  topicSlug?: string;
  url?: string;
  fileName?: string;
  sizeKB?: number;
  status: "draft" | "pending" | "published";
  at: string;
};
export type CustomUnit = { id: string; subjectSlug: string; title: string; topics: string[] };
export type CustomSubject = {
  slug: string;
  name: string;
  programSlug: string;
  level: string;
  group?: string;
  code?: string;
  credits: number;
  description: string;
  at: string;
};

export type State = {
  user: User | null;
  bookmarks: Bookmark[];
  completed: string[];
  attempts: Attempt[];
  downloads: Download[];
  watched: string[];
  reports: Report[];
  visits: Visit[];
  uploads: Upload[];
  customUnits: CustomUnit[];
  customSubjects: CustomSubject[];
};

const KEY = "btechi:v2";

const EMPTY: State = {
  user: null,
  bookmarks: [],
  completed: [],
  attempts: [],
  downloads: [],
  watched: [],
  reports: [],
  visits: [],
  uploads: [],
  customUnits: [],
  customSubjects: [],
};

let state: State = EMPTY;
let loaded = false;
const listeners = new Set<() => void>();

function load() {
  if (loaded || typeof window === "undefined") return;
  loaded = true;
  try {
    const raw = window.localStorage.getItem(KEY);
    if (raw) state = { ...EMPTY, ...JSON.parse(raw) };
  } catch {
    state = EMPTY;
  }
}

function persist() {
  try {
    window.localStorage.setItem(KEY, JSON.stringify(state));
  } catch {
    // Storage full or blocked (private mode) — keep working in memory.
  }
}

function subscribe(cb: () => void) {
  listeners.add(cb);
  const onStorage = (e: StorageEvent) => {
    if (e.key !== KEY) return;
    loaded = false;
    load();
    cb();
  };
  window.addEventListener("storage", onStorage);
  return () => {
    listeners.delete(cb);
    window.removeEventListener("storage", onStorage);
  };
}

function getSnapshot() {
  load();
  return state;
}

const getServerSnapshot = () => EMPTY;

export function update(fn: (s: State) => State) {
  load();
  state = fn(state);
  persist();
  listeners.forEach((l) => l());
}

/** Returns false until the browser store has been read — use to avoid flashing empty states. */
export function useHydrated() {
  return useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
}

export function useStore<T>(select: (s: State) => T): T {
  const s = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  return select(s);
}

const now = () => new Date().toISOString();
const MAX_LOG = 500;

export const actions = {
  signIn(user: User) {
    update((s) => ({ ...s, user }));
  },
  signOut() {
    update((s) => ({ ...s, user: null }));
  },
  updateProfile(patch: Partial<User>) {
    update((s) => (s.user ? { ...s, user: { ...s.user, ...patch } } : s));
  },
  toggleBookmark(b: Omit<Bookmark, "savedAt">) {
    update((s) => {
      const exists = s.bookmarks.some((x) => x.kind === b.kind && x.id === b.id);
      return {
        ...s,
        bookmarks: exists
          ? s.bookmarks.filter((x) => !(x.kind === b.kind && x.id === b.id))
          : [{ ...b, savedAt: now() }, ...s.bookmarks],
      };
    });
  },
  toggleComplete(topicKey: string) {
    update((s) => ({
      ...s,
      completed: s.completed.includes(topicKey)
        ? s.completed.filter((k) => k !== topicKey)
        : [...s.completed, topicKey],
    }));
  },
  recordAttempt(a: Omit<Attempt, "at">) {
    update((s) => ({ ...s, attempts: [{ ...a, at: now() }, ...s.attempts].slice(0, MAX_LOG) }));
  },
  recordDownload(noteId: string, title: string) {
    update((s) => ({ ...s, downloads: [{ noteId, title, at: now() }, ...s.downloads].slice(0, MAX_LOG) }));
  },
  markWatched(videoId: string) {
    update((s) => (s.watched.includes(videoId) ? s : { ...s, watched: [...s.watched, videoId] }));
  },
  recordVisit(subjectSlug: string, topicSlug?: string) {
    update((s) => ({
      ...s,
      visits: [
        { subjectSlug, topicSlug, at: now() },
        ...s.visits.filter((v) => !(v.subjectSlug === subjectSlug && v.topicSlug === topicSlug)),
      ].slice(0, 50),
    }));
  },
  report(r: Omit<Report, "id" | "at" | "status">) {
    update((s) => ({
      ...s,
      reports: [{ ...r, id: crypto.randomUUID(), at: now(), status: "open" }, ...s.reports],
    }));
  },
  resolveReport(id: string) {
    update((s) => ({ ...s, reports: s.reports.map((r) => (r.id === id ? { ...r, status: "resolved" } : r)) }));
  },
  addUpload(u: Omit<Upload, "id" | "at">) {
    update((s) => ({ ...s, uploads: [{ ...u, id: crypto.randomUUID(), at: now() }, ...s.uploads] }));
  },
  setUploadStatus(id: string, status: Upload["status"]) {
    update((s) => ({ ...s, uploads: s.uploads.map((u) => (u.id === id ? { ...u, status } : u)) }));
  },
  addCustomUnit(u: Omit<CustomUnit, "id">) {
    update((s) => ({ ...s, customUnits: [...s.customUnits, { ...u, id: crypto.randomUUID() }] }));
  },
  removeCustomUnit(id: string) {
    update((s) => ({ ...s, customUnits: s.customUnits.filter((u) => u.id !== id) }));
  },
  addCustomSubject(sub: Omit<CustomSubject, "at">) {
    update((s) => ({ ...s, customSubjects: [...s.customSubjects, { ...sub, at: now() }] }));
  },
  removeCustomSubject(slug: string) {
    update((s) => ({
      ...s,
      customSubjects: s.customSubjects.filter((x) => x.slug !== slug),
      customUnits: s.customUnits.filter((u) => u.subjectSlug !== slug),
    }));
  },
  resetAll() {
    update(() => EMPTY);
  },
};

export const isBookmarked = (s: State, kind: ResourceKind, id: string) =>
  s.bookmarks.some((b) => b.kind === kind && b.id === id);

/** Activity events per weekday for the last 7 days (attempts + downloads + completions). */
export function weeklyActivity(s: State) {
  const days: { label: string; date: string; count: number }[] = [];
  const today = new Date();
  for (let i = 6; i >= 0; i--) {
    const d = new Date(today);
    d.setDate(today.getDate() - i);
    days.push({ label: d.toLocaleDateString("en-IN", { weekday: "short" }), date: d.toDateString(), count: 0 });
  }
  const bump = (iso: string) => {
    const key = new Date(iso).toDateString();
    const day = days.find((d) => d.date === key);
    if (day) day.count++;
  };
  s.attempts.forEach((a) => bump(a.at));
  s.downloads.forEach((d) => bump(d.at));
  s.visits.forEach((v) => bump(v.at));
  return days;
}

/** Consecutive days (ending today or yesterday) with any activity. */
export function studyStreak(s: State) {
  const active = new Set([...s.attempts, ...s.downloads, ...s.visits].map((x) => new Date(x.at).toDateString()));
  let streak = 0;
  const d = new Date();
  if (!active.has(d.toDateString())) d.setDate(d.getDate() - 1);
  while (active.has(d.toDateString())) {
    streak++;
    d.setDate(d.getDate() - 1);
  }
  return streak;
}
