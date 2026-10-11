"use client";

import { useRouter } from "next/navigation";
import { useEffect } from "react";
import { onStateChange, readState } from "@/lib/store";
import { PLAN_COOKIE, encodePlan } from "@/lib/study-plan";

const MAX_AGE = 60 * 60 * 24 * 365;

function readCookie() {
  const hit = document.cookie.split("; ").find((c) => c.startsWith(`${PLAN_COOKIE}=`));
  return hit ? hit.slice(PLAN_COOKIE.length + 1) : "";
}

function writeCookie(value: string) {
  const secure = location.protocol === "https:" ? "; secure" : "";
  document.cookie = `${PLAN_COOKIE}=${value}; path=/; max-age=${value ? MAX_AGE : 0}; samesite=lax${secure}`;
}

/**
 * Keeps the study-plan cookie in step with the profile in the store (saved on
 * /profile, loaded on sign-in, cleared on sign-out) and re-renders the page,
 * so server-rendered lists show the student's own courses.
 */
export function StudyPlanSync() {
  const router = useRouter();

  useEffect(() => {
    const apply = () => {
      const plan = readState().plan;
      const value = plan ? encodePlan(plan) : "";
      if (readCookie() === value) return;
      writeCookie(value);
      router.refresh();
    };
    apply();
    return onStateChange(apply);
  }, [router]);

  return null;
}
