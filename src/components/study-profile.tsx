"use client";

import Link from "next/link";
import { useEffect, useRef, useMemo, useState, type FormEvent, type ReactNode } from "react";
import { Check, X } from "lucide-react";
import { PROGRAM_SLUG, programs } from "@/lib/data/curriculum";
import { QUALIFIER_SUBJECTS } from "@/lib/data/qualifier-meta";
import { isPyqLevel, type PyqLevel } from "@/lib/pyq-urls";
import { actions, useHydrated, useStore } from "@/lib/store";
import { getStudyCourse, sortCourses, studyCourses, type StudyCourse } from "@/lib/study-courses";
import { supabase } from "@/lib/supabase/client";
import { cn } from "@/lib/utils";
import { Button, buttonClass } from "./ui";
import { useToast } from "./toast";

type TabId = "qualifier" | "foundation" | "diploma" | "degree";

type Draft = { level: PyqLevel; subjects: string[] };

/**
 * Copies the level onto the account's profile row, which Admin → People reads. Email sign-ups
 * set it on the sign-up form; Google, GitHub and LinkedIn sign-ups only ever set it here.
 */
async function saveProfileLevel(level: PyqLevel) {
  const { data } = await supabase.auth.getSession();
  if (!data.session) return; // Guests keep their plan in this browser only.
  const university = programs.find((p) => p.slug === PROGRAM_SLUG)?.university;
  await supabase.from("profiles").update({ level, university }).eq("id", data.session.user.id);
}

const TABS: { id: TabId; label: string; sub: string }[] = [
  { id: "qualifier", label: "Qualifier", sub: "Term 1" },
  { id: "foundation", label: "Foundation", sub: "Term 2 & Core" },
  { id: "diploma", label: "Diploma", sub: "Prog & DS" },
  { id: "degree", label: "Degree", sub: "BS Level" },
];

function getCoursesForTab(tab: TabId): StudyCourse[] {
  if (tab === "qualifier") {
    return studyCourses.filter((c) => (QUALIFIER_SUBJECTS as readonly string[]).includes(c.slug));
  }
  if (tab === "foundation") {
    return studyCourses.filter(
      (c) => c.level === "foundation" && !(QUALIFIER_SUBJECTS as readonly string[]).includes(c.slug),
    );
  }
  if (tab === "diploma") {
    return studyCourses.filter((c) => c.level === "diploma");
  }
  if (tab === "degree") {
    return studyCourses.filter((c) => c.level === "degree");
  }
  return [];
}

function resolveDefaultTab(subjects: string[], defaultLevel?: string): TabId {
  if (subjects.length > 0) {
    if (subjects.some((s) => getStudyCourse(s)?.level === "degree")) return "degree";
    if (subjects.some((s) => getStudyCourse(s)?.level === "diploma")) return "diploma";
    if (subjects.some((s) => !(QUALIFIER_SUBJECTS as readonly string[]).includes(s))) return "foundation";
    return "qualifier";
  }
  if (defaultLevel === "diploma") return "diploma";
  if (defaultLevel === "degree") return "degree";
  return "qualifier";
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

/** Clean, minimal study setup form. */
function StudyProfileForm({
  inDialog = false,
  submitLabel,
  secondary,
  onSaved,
}: {
  inDialog?: boolean;
  submitLabel: string;
  secondary?: ReactNode;
  onSaved?: (courses: number) => void;
}) {
  const plan = useStore((s) => s.plan);
  const signupLevel = useStore((s) => s.user?.level);
  const [draft, setDraft] = useState<Draft | null>(null);
  const [error, setError] = useState("");

  const value: Draft = draft ?? plan ?? {
    level: signupLevel && isPyqLevel(signupLevel) ? signupLevel : "foundation",
    subjects: [],
  };

  const [activeTab, setActiveTab] = useState<TabId>(() =>
    resolveDefaultTab(value.subjects, value.level),
  );

  const picked = useMemo(() => new Set(value.subjects), [value.subjects]);

  const edit = (next: Partial<Draft>) => {
    setError("");
    setDraft({ ...value, ...next });
  };

  const choose = (slugs: string[], on: boolean) => {
    edit({
      subjects: on
        ? [...new Set([...value.subjects, ...slugs])]
        : value.subjects.filter((s) => !slugs.includes(s)),
    });
  };

  const tabCourses = useMemo(() => getCoursesForTab(activeTab), [activeTab]);
  const allTabSelected = tabCourses.length > 0 && tabCourses.every((c) => picked.has(c.slug));

  const toggleAllInTab = () => {
    choose(
      tabCourses.map((c) => c.slug),
      !allTabSelected,
    );
  };

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subjects = sortCourses(value.subjects);
    if (!subjects.length) return setError("Please select at least one course.");

    // Infer primary level from selected subjects or active tab
    let level: PyqLevel = "foundation";
    if (subjects.some((s) => getStudyCourse(s)?.level === "degree")) level = "degree";
    else if (subjects.some((s) => getStudyCourse(s)?.level === "diploma")) level = "diploma";
    else if (activeTab === "diploma") level = "diploma";
    else if (activeTab === "degree") level = "degree";

    actions.setPlan({ level, subjects });
    void saveProfileLevel(level);
    setDraft(null);
    onSaved?.(subjects.length);
  };

  return (
    <form onSubmit={submit} noValidate className={cn(inDialog ? "flex min-h-0 flex-1 flex-col" : "space-y-5")}>
      <div className={cn("space-y-4", inDialog && "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-4 sm:px-6")}>
        {/* Simple 4-Tab Stage Switcher */}
        <div className="grid grid-cols-4 gap-1.5 rounded-xl border border-border bg-surface-2/60 p-1">
          {TABS.map((t) => {
            const active = activeTab === t.id;
            const countInTab = getCoursesForTab(t.id).filter((c) => picked.has(c.slug)).length;
            return (
              <button
                key={t.id}
                type="button"
                onClick={() => setActiveTab(t.id)}
                className={cn(
                  "flex flex-col items-center justify-center rounded-lg py-2 px-1 text-center transition-all cursor-pointer select-none",
                  active
                    ? "bg-bg text-fg font-semibold shadow-xs"
                    : "text-muted hover:text-fg hover:bg-surface/50",
                )}
              >
                <span className="flex items-center gap-1 text-xs sm:text-sm">
                  <span>{t.label}</span>
                  {countInTab > 0 && (
                    <span className="rounded-full bg-fg text-bg px-1.5 py-0.2 text-[10px] font-bold">
                      {countInTab}
                    </span>
                  )}
                </span>
                <span className="text-[10px] text-muted hidden sm:inline">{t.sub}</span>
              </button>
            );
          })}
        </div>

        {/* Courses Section for Active Tab */}
        <div className="space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-muted">
              {activeTab === "qualifier" && "Qualifier Exam Courses (Term 1)"}
              {activeTab === "foundation" && "Post-Qualifier Foundation (Term 2 & Core)"}
              {activeTab === "diploma" && "Diploma Level (Programming & Data Science)"}
              {activeTab === "degree" && "BS Degree Level (Advanced CS & Electives)"}
            </span>
            <button
              type="button"
              onClick={toggleAllInTab}
              className="font-medium text-muted hover:text-fg underline cursor-pointer"
            >
              {allTabSelected ? "Clear all in tab" : `Select all (${tabCourses.length})`}
            </button>
          </div>

          <div className="grid gap-2 sm:grid-cols-2">
            {tabCourses.map((c) => {
              const on = picked.has(c.slug);
              return (
                <label
                  key={c.slug}
                  className={cn(
                    "flex cursor-pointer items-start gap-3 rounded-xl border p-3 transition-colors select-none",
                    on
                      ? "border-fg bg-surface-2"
                      : "border-border bg-bg hover:border-fg/40 hover:bg-surface-2/40",
                  )}
                >
                  <input
                    type="checkbox"
                    checked={on}
                    onChange={() => choose([c.slug], !on)}
                    className="sr-only"
                  />
                  <span
                    aria-hidden
                    className={cn(
                      "mt-0.5 grid size-[18px] shrink-0 place-items-center rounded border transition-colors",
                      on ? "border-fg bg-fg text-bg" : "border-border bg-surface",
                    )}
                  >
                    {on && <Check className="size-3 stroke-[3]" />}
                  </span>
                  <div className="min-w-0 flex-1">
                    <span className="text-sm font-medium leading-snug text-fg block">{c.name}</span>
                    {c.code && (
                      <span className="mt-0.5 text-xs text-muted font-mono block">{c.code}</span>
                    )}
                  </div>
                </label>
              );
            })}
          </div>
        </div>
      </div>

      {/* Simple Footer */}
      <div
        className={cn(
          "flex items-center justify-between gap-3",
          inDialog ? "border-t border-border bg-surface px-5 py-3.5 sm:px-6" : "mt-6 border-t border-border pt-4",
        )}
      >
        <div className="flex items-center gap-2">
          <p role={error ? "alert" : undefined} className={cn("text-xs sm:text-sm font-medium", error ? "text-red" : "text-fg")}>
            {error || (
              value.subjects.length > 0 ? (
                <>
                  <span className="font-bold">{plural(value.subjects.length, "course")}</span> selected
                </>
              ) : (
                <span className="text-muted">No courses selected</span>
              )
            )}
          </p>
          {value.subjects.length > 0 && (
            <button
              type="button"
              onClick={() => edit({ subjects: [] })}
              className="text-xs text-muted hover:text-fg underline ml-1 cursor-pointer"
            >
              Clear
            </button>
          )}
        </div>
        <div className="flex items-center gap-2">
          {secondary}
          <button type="submit" className={buttonClass("primary")}>
            {submitLabel}
          </button>
        </div>
      </div>
    </form>
  );
}

/** The editor on /profile. */
export function StudyProfileEditor() {
  const hydrated = useHydrated();
  const user = useStore((s) => s.user);
  const hasPlan = useStore((s) => s.plan !== null);
  const toast = useToast();

  if (!hydrated)
    return (
      <div className="space-y-4" aria-busy="true" aria-label="Loading">
        <div className="skeleton h-20" />
        <div className="skeleton h-72" />
      </div>
    );

  return (
    <>
      {!user && (
        <p className="card mb-6 p-4 text-sm text-muted">
          Your profile is saved in this browser.{" "}
          <Link href="/signup" className="font-semibold text-fg hover:underline">
            Create a free account
          </Link>{" "}
          to keep it on every device.
        </p>
      )}
      <StudyProfileForm
        submitLabel={hasPlan ? "Save changes" : "Save profile"}
        onSaved={(n) => toast(`Saved. BTechi now shows your ${plural(n, "course")}.`)}
        secondary={
          hasPlan && (
            <Button
              variant="ghost"
              onClick={() => {
                actions.clearPlan();
                toast("Profile reset. Showing all courses.");
              }}
            >
              Reset profile
            </Button>
          )
        }
      />
    </>
  );
}

/** "Set up your study environment" popup. Opens as soon as it mounts; `onClose` runs however it closes. */
export function StudySetupDialog({ onClose }: { onClose: () => void }) {
  const ref = useRef<HTMLDialogElement>(null);
  const toast = useToast();

  useEffect(() => {
    const d = ref.current!;
    if (!d.open) d.showModal();
    d.addEventListener("close", onClose);
    return () => d.removeEventListener("close", onClose);
  }, [onClose]);

  return (
    <dialog
      ref={ref}
      aria-labelledby="study-setup-title"
      aria-describedby="study-setup-desc"
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
      className="m-auto max-h-[min(90dvh,640px)] w-[min(580px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/60 open:flex"
    >
      <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
        <div>
          <h2 id="study-setup-title" className="text-lg font-bold tracking-tight text-fg">
            Set up your study environment
          </h2>
          <p id="study-setup-desc" className="mt-0.5 text-xs text-muted">
            Choose what you&apos;re taking this term. BTechi will tailor your practice and portal.
          </p>
        </div>
        <button
          type="button"
          onClick={() => ref.current?.close()}
          className="grid size-8 shrink-0 place-items-center rounded-lg text-muted hover:bg-surface-2 hover:text-fg transition-colors cursor-pointer"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
      </div>
      <StudyProfileForm
        inDialog
        submitLabel="Save and continue"
        onSaved={(n) => {
          toast(`Saved. Personalized for your ${plural(n, "course")}.`);
          ref.current?.close();
        }}
        secondary={
          <Button variant="ghost" onClick={() => ref.current?.close()}>
            Skip
          </Button>
        }
      />
    </dialog>
  );
}
