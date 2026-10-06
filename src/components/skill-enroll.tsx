"use client";

import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { actions, isBookmarked, useHydrated, useStore } from "@/lib/store";
import type { SkillCourse } from "@/lib/types";
import { useToast } from "./toast";
import { buttonClass } from "./ui";
import { cn } from "@/lib/utils";

/**
 * Enrolling saves the course to the learner's library. With Supabase this
 * becomes an `enrollments` row; the bookmark keeps it working offline today.
 */
export function SkillEnrollButton({ course, className }: { course: SkillCourse; className?: string }) {
  const hydrated = useHydrated();
  const enrolled = useStore((s) => isBookmarked(s, "skill", course.slug));
  const toast = useToast();

  if (hydrated && enrolled)
    return (
      <Link href="/saved" className={buttonClass("dark", "lg", cn("w-full", className))}>
        <Check className="size-4" aria-hidden /> Enrolled · Go to library
      </Link>
    );

  return (
    <button
      type="button"
      onClick={() => {
        actions.toggleBookmark({ kind: "skill", id: course.slug, title: course.title, href: `/skills/${course.slug}`, subtitle: "Skill course" });
        toast("Enrolled! Find it in your library.");
      }}
      className={buttonClass("primary", "lg", cn("w-full", className))}
    >
      Enroll for free <ArrowRight className="size-4" aria-hidden />
    </button>
  );
}
