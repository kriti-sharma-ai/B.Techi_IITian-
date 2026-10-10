"use client";

// Keeps a signed-in student's progress in table user_state (one jsonb row per
// user). Guests keep everything in localStorage only; when they sign up or log
// in, that guest progress is merged into the account so nothing is lost.

import {
  EMPTY_PERSONAL,
  onStateChange,
  personalSlices,
  readState,
  update,
  type PersonalState,
  type State,
} from "@/lib/store";
import { supabase } from "./client";

const PUSH_DELAY_MS = 1000;

// Same caps the store applies when logging.
const CAP = { attempts: 500, downloads: 500, visits: 50, qualifierAttempts: 50 };

const newestFirst = <T extends { at: string }>(a: T, b: T) => b.at.localeCompare(a.at);

function unionBy<T>(a: T[], b: T[], key: (x: T) => string) {
  const seen = new Map<string, T>();
  for (const x of [...a, ...b]) if (!seen.has(key(x))) seen.set(key(x), x);
  return [...seen.values()];
}

/** Union of two copies of a student's progress; used when guest progress joins an account. */
export function mergePersonal(a: PersonalState, b: PersonalState): PersonalState {
  return {
    bookmarks: unionBy(a.bookmarks, b.bookmarks, (x) => `${x.kind}:${x.id}`).sort((x, y) => y.savedAt.localeCompare(x.savedAt)),
    completed: [...new Set([...a.completed, ...b.completed])],
    watched: [...new Set([...a.watched, ...b.watched])],
    attempts: unionBy(a.attempts, b.attempts, (x) => `${x.questionId}@${x.at}`).sort(newestFirst).slice(0, CAP.attempts),
    downloads: unionBy(a.downloads, b.downloads, (x) => `${x.noteId}@${x.at}`).sort(newestFirst).slice(0, CAP.downloads),
    // One entry per subject/topic, keeping the latest visit.
    visits: unionBy([...a.visits, ...b.visits].sort(newestFirst), [], (x) => `${x.subjectSlug}/${x.topicSlug ?? ""}`).slice(0, CAP.visits),
    qualifierAttempts: unionBy(a.qualifierAttempts, b.qualifierAttempts, (x) => x.id).sort(newestFirst).slice(0, CAP.qualifierAttempts),
  };
}

const withPersonal = (s: State, p: PersonalState, syncedUserId: string | undefined): State => ({ ...s, ...p, syncedUserId });

let activeUserId: string | null = null;
let lastPushed = "";
let timer: ReturnType<typeof setTimeout> | undefined;

async function push() {
  timer = undefined;
  const s = readState();
  if (!activeUserId || s.syncedUserId !== activeUserId) return;
  const data = personalSlices(s);
  const json = JSON.stringify(data);
  if (json === lastPushed) return;
  const { error } = await supabase.from("user_state").upsert({ user_id: activeUserId, data, updated_at: new Date().toISOString() });
  if (error) console.error("Saving progress failed:", error.message);
  else lastPushed = json;
}

function schedulePush() {
  if (!activeUserId) return;
  clearTimeout(timer);
  timer = setTimeout(push, PUSH_DELAY_MS);
}

/** Save pending changes straight away, e.g. before signing out. */
export async function flushProgress() {
  if (!timer) return;
  clearTimeout(timer);
  await push();
}

/**
 * Called whenever the auth session changes. Loads the account's progress,
 * merges in guest progress the first time, and starts saving changes.
 */
export async function syncProgress(userId: string | null) {
  if (!userId) {
    activeUserId = null;
    clearTimeout(timer);
    // Signed out: the progress is safe in the account, so clear this browser's copy.
    if (readState().syncedUserId) update((s) => withPersonal(s, EMPTY_PERSONAL, undefined));
    return;
  }
  if (activeUserId === userId) return;
  activeUserId = userId;

  const { data: row, error } = await supabase.from("user_state").select("data").eq("user_id", userId).maybeSingle();
  if (error) {
    // Leave local progress untouched; it will be merged on the next successful load.
    activeUserId = null;
    console.error("Loading progress failed:", error.message);
    return;
  }
  if (activeUserId !== userId) return; // signed out or switched account meanwhile

  const remote: PersonalState = { ...EMPTY_PERSONAL, ...(row?.data as Partial<PersonalState> | undefined) };
  const local = readState();
  const next =
    local.syncedUserId === userId
      ? remote // this browser already mirrors the account; the account copy is newest
      : local.syncedUserId
        ? remote // another account's leftovers: drop them
        : mergePersonal(local, remote); // guest progress joins the account

  lastPushed = JSON.stringify(remote);
  update((s) => withPersonal(s, next, userId));
  schedulePush(); // saves the merged guest progress, if any
}

if (typeof window !== "undefined") onStateChange(schedulePush);
