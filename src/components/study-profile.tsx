"use client";

import Link from "next/link";
import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import { Check, ChevronDown, X } from "lucide-react";
import { PROGRAM_SLUG, getProgram } from "@/lib/content";
import { isPyqLevel, type PyqLevel } from "@/lib/pyq-urls";
import { actions, useHydrated, useStore } from "@/lib/store";
import { getStudyCourse, sortCourses, studyCourses, type StudyCourse } from "@/lib/study-courses";
import { accentStyles, cn } from "@/lib/utils";
import { Button, buttonClass } from "./ui";
import { useToast } from "./toast";

type Draft = { level: PyqLevel; subjects: string[] };

/** A level's courses under their headings, in curriculum order. */
function groupsOf(level: PyqLevel) {
  const groups = new Map<string, StudyCourse[]>();
  for (const c of studyCourses) if (c.level === level) groups.set(c.group, [...(groups.get(c.group) ?? []), c]);
  return [...groups].map(([name, courses]) => ({ name, courses }));
}

const plural = (n: number, word: string) => `${n} ${word}${n === 1 ? "" : "s"}`;

function CourseGroups({ level, picked, onChange }: { level: PyqLevel; picked: Set<string>; onChange: (slugs: string[], on: boolean) => void }) {
  return (
    <div className="space-y-5">
      {groupsOf(level).map((g) => {
        const all = g.courses.every((c) => picked.has(c.slug));
        return (
          <div key={g.name}>
            <div className="mb-2 flex items-baseline justify-between gap-3">
              <p className="text-sm font-medium text-muted">{g.name}</p>
              <button
                type="button"
                onClick={() => onChange(g.courses.map((c) => c.slug), !all)}
                className="shrink-0 text-xs font-semibold text-muted hover:text-fg"
              >
                {all ? "Clear" : "Select all"}
              </button>
            </div>
            {!g.courses[0].inCurriculum && <p className="-mt-1 mb-2 text-xs text-muted">Past papers only: BTechi has no course pages for these yet.</p>}
            <div className="grid gap-2 sm:grid-cols-2">
              {g.courses.map((c) => {
                const on = picked.has(c.slug);
                return (
                  <label
                    key={c.slug}
                    className={cn(
                      "flex cursor-pointer items-start gap-3 rounded-xl border px-3 py-2.5 transition-colors select-none has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-fg",
                      on ? "border-fg bg-surface-2" : "border-border bg-bg hover:border-fg/30",
                    )}
                  >
                    <input type="checkbox" checked={on} onChange={() => onChange([c.slug], !on)} className="sr-only" />
                    <span
                      aria-hidden
                      className={cn(
                        "mt-0.5 grid size-[18px] shrink-0 place-items-center rounded-md border transition-colors",
                        on ? "border-fg bg-ink text-bg" : "border-border",
                      )}
                    >
                      {on && <Check className="size-3" strokeWidth={3} />}
                    </span>
                    <span className="min-w-0">
                      <span className="block text-sm leading-snug font-medium">{c.name}</span>
                      <span className="mt-1 flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-muted">
                        {c.code && <span className="font-mono">{c.code}</span>}
                        {c.hasPapers && <span className="rounded bg-green/10 px-1.5 py-px text-[11px] font-semibold text-green">PYQs</span>}
                      </span>
                    </span>
                  </label>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}

/**
 * Level + courses picker. Until the student changes something it shows their
 * saved profile, or the level they signed up with, so a profile that arrives
 * from their account after the form opens still shows up.
 */
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
  const program = getProgram(PROGRAM_SLUG)!;
  const plan = useStore((s) => s.plan);
  const signupLevel = useStore((s) => s.user?.level);
  const [draft, setDraft] = useState<Draft | null>(null);
  // null: open "other levels" only when it holds a picked course; true/false once the student toggles it.
  const [showOthers, setShowOthers] = useState<boolean | null>(null);
  const [error, setError] = useState("");

  const value: Draft = draft ?? plan ?? { level: signupLevel && isPyqLevel(signupLevel) ? signupLevel : "foundation", subjects: [] };
  const picked = new Set(value.subjects);
  const elsewhere = value.subjects.filter((s) => getStudyCourse(s)?.level !== value.level).length;
  const othersOpen = showOthers ?? elsewhere > 0;

  const edit = (next: Partial<Draft>) => {
    setError("");
    setDraft({ ...value, ...next });
  };
  const choose = (slugs: string[], on: boolean) =>
    edit({ subjects: on ? [...new Set([...value.subjects, ...slugs])] : value.subjects.filter((s) => !slugs.includes(s)) });

  const submit = (e: FormEvent) => {
    e.preventDefault();
    const subjects = sortCourses(value.subjects);
    if (!subjects.length) return setError("Pick at least one course.");
    actions.setPlan({ level: value.level, subjects });
    setDraft(null);
    onSaved?.(subjects.length);
  };

  return (
    <form onSubmit={submit} noValidate className={cn(inDialog && "flex min-h-0 flex-1 flex-col")}>
      <div className={cn("space-y-8", inDialog && "min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6")}>
        <fieldset>
          <legend className="mb-2.5 text-sm font-semibold">Your level</legend>
          <div className="grid grid-cols-3 gap-2">
            {program.levels.map((l) => (
              <label
                key={l.slug}
                className="flex cursor-pointer flex-col items-center gap-0.5 rounded-xl border border-border bg-bg px-2 py-2.5 text-center transition-colors select-none hover:border-fg/30 has-checked:border-fg has-checked:bg-surface-2 has-focus-visible:outline-2 has-focus-visible:outline-offset-2 has-focus-visible:outline-fg"
              >
                <input
                  type="radio"
                  name="study-level"
                  value={l.slug}
                  checked={value.level === l.slug}
                  onChange={() => edit({ level: l.slug as PyqLevel })}
                  className="sr-only"
                />
                <span className="flex items-center gap-2 text-sm font-semibold">
                  <span className={cn("size-2 shrink-0 rounded-full", accentStyles[l.accent].bar)} aria-hidden />
                  {l.short}
                </span>
                <span className="text-xs text-muted">{l.courses}</span>
              </label>
            ))}
          </div>
        </fieldset>

        <div role="group" aria-labelledby="study-courses-label">
          <div className="mb-3">
            <p id="study-courses-label" className="text-sm font-semibold">
              Courses you&apos;re taking this term
            </p>
            <p className="text-xs text-muted">BTechi shows these courses, their past papers and practice first.</p>
          </div>
          <CourseGroups level={value.level} picked={picked} onChange={choose} />

          <div className="mt-6 rounded-xl border border-border">
            <button
              type="button"
              aria-expanded={othersOpen}
              aria-controls="study-other-levels"
              onClick={() => setShowOthers(!othersOpen)}
              className="flex w-full items-center gap-3 px-4 py-3 text-left text-sm font-medium"
            >
              <span className="flex-1">Taking a course from another level?</span>
              {elsewhere > 0 && <span className="text-xs text-muted">{elsewhere} picked</span>}
              <ChevronDown className={cn("size-4 shrink-0 text-muted transition-transform", othersOpen && "rotate-180")} aria-hidden />
            </button>
            {othersOpen && (
              <div id="study-other-levels" className="space-y-6 border-t border-border px-4 py-4">
                {program.levels
                  .filter((l) => l.slug !== value.level)
                  .map((l) => (
                    <div key={l.slug}>
                      <p className="mb-3 text-xs font-semibold tracking-wide text-muted uppercase">{l.name}</p>
                      <CourseGroups level={l.slug as PyqLevel} picked={picked} onChange={choose} />
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      <div
        className={cn(
          "flex flex-wrap items-center justify-between gap-3",
          inDialog ? "border-t border-border bg-surface px-5 py-4 sm:px-6" : "mt-8 border-t border-border pt-5",
        )}
      >
        <p role={error ? "alert" : undefined} className={cn("text-sm", error ? "text-red" : "text-muted")}>
          {error || (value.subjects.length ? `${plural(value.subjects.length, "course")} picked` : "No courses picked yet")}
        </p>
        <div className="flex flex-wrap gap-2">
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
        <p className="card mb-8 p-4 text-sm text-muted">
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
                toast("Profile removed. Showing every course again.");
              }}
            >
              Remove profile
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
  const name = useStore((s) => s.user?.name);
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
      className="m-auto max-h-[min(92dvh,760px)] w-[min(640px,calc(100vw-1.5rem))] flex-col overflow-hidden rounded-2xl border border-border bg-surface p-0 text-fg shadow-2xl backdrop:bg-black/50 open:flex"
    >
      <div className="flex items-start justify-between gap-4 border-b border-border px-5 py-4 sm:px-6">
        <div>
          <p className="eyebrow mb-1">Welcome{name ? `, ${name.split(" ")[0]}` : ""}</p>
          <h2 id="study-setup-title" className="text-xl font-extrabold tracking-tight">
            Set up your study environment
          </h2>
          <p id="study-setup-desc" className="mt-1 text-sm text-muted">
            Pick your level and this term&apos;s courses, and BTechi will show just those courses, their past papers and practice. You can change
            it any time.
          </p>
        </div>
        <button
          type="button"
          onClick={() => ref.current?.close()}
          className="grid size-8 shrink-0 place-items-center rounded-lg hover:bg-surface-2"
          aria-label="Close"
        >
          <X className="size-4" />
        </button>
      </div>
      <StudyProfileForm
        inDialog
        submitLabel="Save and continue"
        onSaved={(n) => {
          toast(`You're all set. BTechi now shows your ${plural(n, "course")}.`);
          ref.current?.close();
        }}
        secondary={
          <Button variant="ghost" onClick={() => ref.current?.close()}>
            Skip for now
          </Button>
        }
      />
    </dialog>
  );
}
