"use client";

import dynamic from "next/dynamic";
import { usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import { useHydrated, useStore } from "@/lib/store";

// Loaded only when the popup opens, so the course list stays out of every page's bundle.
const StudySetupDialog = dynamic(() => import("./study-profile").then((m) => m.StudySetupDialog), { ssr: false });

const OPEN_EVENT = "btechi:study-setup";
const SKIPPED_KEY = "btechi:study-setup-skipped";

/** Opens the "Set up your study environment" popup, e.g. from the dashboard. */
export const openStudySetup = () => window.dispatchEvent(new Event(OPEN_EVENT));

// Never interrupt signing in, the CMS, the profile page itself or an exam sitting.
const QUIET = /^\/(login|signup|profile|admin|practice\/session)(\/|$)|^\/qualifier\/[^/]+|^\/pyqs\/[^/]+\/[^/]+\/[^/]+/;

function skippedBy(accountId: string) {
  try {
    return localStorage.getItem(SKIPPED_KEY) === accountId;
  } catch {
    return false;
  }
}

/**
 * Asks a signed-in student to set up their study profile once their account
 * has loaded without one: right after signing up, or on their first login.
 * "Skip for now" is remembered in this browser; the dashboard keeps a prompt.
 */
export function StudySetup() {
  const hydrated = useHydrated();
  // Set once the account's saved progress (and profile, if any) has loaded; see lib/supabase/sync.ts.
  const accountId = useStore((s) => s.syncedUserId);
  const hasPlan = useStore((s) => s.plan !== null);
  const pathname = usePathname();
  const [asked, setAsked] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const ask = () => setAsked(true);
    window.addEventListener(OPEN_EVENT, ask);
    return () => window.removeEventListener(OPEN_EVENT, ask);
  }, []);

  const auto = hydrated && !!accountId && !hasPlan && !dismissed && !QUIET.test(pathname) && !skippedBy(accountId);

  const close = useCallback(() => {
    if (accountId) {
      try {
        localStorage.setItem(SKIPPED_KEY, accountId);
      } catch {
        // Private mode: it asks again next visit.
      }
    }
    setDismissed(true);
    setAsked(false);
  }, [accountId]);

  return asked || auto ? <StudySetupDialog onClose={close} /> : null;
}
