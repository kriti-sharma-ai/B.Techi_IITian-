"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ArrowDown, ArrowUp, ChevronRight, Eye, EyeOff, Pencil, Plus, Trash2 } from "lucide-react";
import { deleteCourse, deleteWeek, saveCourse, saveWeek, setCourseStatus } from "@/app/admin/actions";
import { COURSE_CODE, WEEKS, type CourseInput, type DbWeek, type TopicInput } from "@/lib/admin";
import { programs } from "@/lib/content";
import { Badge, Button, buttonClass } from "../ui";
import { Field, LoadError, StatusBadge, inputClass, textareaClass, useCourses, type AdminCourse } from "./form";
import { useAction } from "./staff";

const program = programs[0];

const blankCourse: CourseInput = { name: "", code: "", level: "foundation", group: "", kind: "course", credits: 4, prerequisites: "", description: "" };
type WeekDraft = { id?: string; subjectSlug: string; number: number; title: string; topics: TopicInput[] };
const blankTopic = (): TopicInput => ({ title: "", summary: "", minutes: 30 });

/** Program → Level → Group → Course → Week → Topic, stored in Supabase (PRD §30). */
export function CurriculumBuilder() {
  const run = useAction();
  const { courses, error, loading } = useCourses();
  const [course, setCourse] = useState<CourseInput>(blankCourse);
  const [editingCourse, setEditingCourse] = useState<string | null>(null);
  const [courseError, setCourseError] = useState("");
  const [week, setWeek] = useState<WeekDraft | null>(null);
  const [weekError, setWeekError] = useState("");
  const [busy, setBusy] = useState(false);

  const levelGroups = program.levels.find((l) => l.slug === course.level)?.groups ?? [];

  const editCourse = (c: AdminCourse) => {
    const r = c.row!;
    setEditingCourse(c.slug);
    setCourseError("");
    setCourse({
      name: r.name,
      code: r.code ?? "",
      level: r.level?.slug ?? "foundation",
      group: r.group?.slug ?? "",
      kind: r.kind,
      credits: r.credits,
      prerequisites: r.prerequisites ?? "",
      description: r.description ?? "",
    });
  };

  const submitCourse = async (e: FormEvent) => {
    e.preventDefault();
    if (course.name.trim().length < 3) return setCourseError("Course name must be at least 3 characters.");
    if (course.code.trim() && !COURSE_CODE.test(course.code.trim().toUpperCase())) return setCourseError("Course code should look like BSMS1201.");
    setCourseError("");
    setBusy(true);
    const input = { ...course, group: course.group || levelGroups[0]?.slug || "" };
    const done = await run((t) => saveCourse(t, input, editingCourse ?? undefined), editingCourse ? "Course saved" : `Created ${course.name.trim()} as a draft`);
    setBusy(false);
    if (done) {
      setCourse(blankCourse);
      setEditingCourse(null);
    }
  };

  const openWeek = (c: AdminCourse, w?: DbWeek) => {
    setWeekError("");
    if (w) setWeek({ id: w.id, subjectSlug: c.slug, number: w.number, title: w.title, topics: w.topics.map((t) => ({ id: t.id, title: t.title, summary: t.summary ?? "", minutes: t.minutes ?? 30 })) });
    else {
      const used = new Set(c.weeks.map((x) => x.number));
      const next = Array.from({ length: WEEKS }, (_, i) => i + 1).find((n) => !used.has(n)) ?? 1;
      setWeek({ subjectSlug: c.slug, number: next, title: "", topics: [blankTopic()] });
    }
    document.getElementById("week-editor")?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const submitWeek = async (e: FormEvent) => {
    e.preventDefault();
    if (!week) return;
    if (!week.subjectSlug) return setWeekError("Choose a course.");
    if (week.title.trim().length < 2) return setWeekError("Give the week a title.");
    if (!week.topics.some((t) => t.title.trim())) return setWeekError("Add at least one topic.");
    setWeekError("");
    setBusy(true);
    const done = await run((t) => saveWeek(t, week), week.id ? `Week ${week.number} saved` : `Week ${week.number} added`);
    setBusy(false);
    if (done) setWeek(null);
  };

  const moveTopic = (i: number, d: -1 | 1) =>
    setWeek((w) => {
      if (!w) return w;
      const topics = [...w.topics];
      [topics[i], topics[i + d]] = [topics[i + d], topics[i]];
      return { ...w, topics };
    });

  const selected = courses.find((c) => c.slug === week?.subjectSlug);
  const takenWeeks = new Set(selected?.weeks.filter((w) => w.id !== week?.id).map((w) => w.number));

  return (
    <>
      <LoadError error={error} />
      <div className="grid gap-6 xl:grid-cols-[1fr_400px]">
        <section className="card p-2" aria-label="Curriculum tree" aria-busy={loading}>
          <p className="px-3 pt-2 pb-1 text-sm font-semibold">{program.degree}</p>
          {program.levels.map((l) => {
            const subs = courses.filter((s) => s.level === l.slug);
            const groups = l.groups ?? [{ slug: "", name: "Courses", credits: l.credits, summary: "" }];
            return (
              <details key={l.slug} open={l.slug === "foundation"} className="group/level">
                <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg px-3 py-2.5 font-semibold hover:bg-surface-2">
                  <ChevronRight className="size-4 transition-transform group-open/level:rotate-90" aria-hidden />
                  {l.name}
                  <span className="ml-auto text-xs font-normal text-muted">
                    {subs.length} courses · {l.credits} credits
                  </span>
                </summary>
                <div className="mb-2 ml-5 border-l border-border pl-3">
                  {groups.map((g) => (
                    <div key={g.slug || "all"} className="py-1">
                      {l.groups && <p className="eyebrow px-2 py-1">{g.name}</p>}
                      {subs
                        .filter((s) => !g.slug || s.group === g.slug)
                        .map((s) => (
                          <details key={s.slug} className="group rounded-lg">
                            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-surface-2">
                              <ChevronRight className="size-3.5 transition-transform group-open:rotate-90" aria-hidden />
                              <span className="w-[4.5rem] shrink-0 font-mono text-xs text-muted">{s.code ?? "—"}</span>
                              <span className="font-medium">{s.name}</span>
                              {!s.fromCode && <StatusBadge status={s.status} />}
                              <span className="ml-auto shrink-0 text-xs text-muted">{s.weeks.length} weeks</span>
                            </summary>
                            <div className="mb-2 ml-6 border-l border-border py-1 pl-3 text-sm">
                              {!s.fromCode && s.row && (
                                <div className="mb-2 flex flex-wrap gap-1">
                                  <Button size="sm" variant="ghost" onClick={() => editCourse(s)}>
                                    <Pencil className="size-3.5" aria-hidden /> Edit course
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    onClick={() =>
                                      void run(
                                        (t) => setCourseStatus(t, s.slug, s.status === "published" ? "draft" : "published"),
                                        s.status === "published" ? "Course hidden from the site" : "Course published",
                                      )
                                    }
                                  >
                                    {s.status === "published" ? <EyeOff className="size-3.5" aria-hidden /> : <Eye className="size-3.5" aria-hidden />}
                                    {s.status === "published" ? "Unpublish" : "Publish"}
                                  </Button>
                                  <Button
                                    size="sm"
                                    variant="ghost"
                                    className="text-red"
                                    onClick={() => {
                                      if (confirm(`Delete ${s.name} with all its weeks, topics, resources and questions? This can't be undone.`))
                                        void run((t) => deleteCourse(t, s.slug), "Course deleted");
                                    }}
                                  >
                                    <Trash2 className="size-3.5" aria-hidden /> Delete
                                  </Button>
                                </div>
                              )}
                              <ul className="space-y-1.5">
                                {s.weeks.length === 0 && <li className="text-xs text-muted">No weeks yet.</li>}
                                {s.weeks.map((w) => (
                                  <li key={w.id} className="group/week flex items-start gap-2">
                                    <span className="flex-1">
                                      <span className="text-muted">Week {w.number}:</span> {w.title}
                                      <span className="block text-xs text-muted">{w.topics.map((t) => t.title).join(" · ")}</span>
                                    </span>
                                    <button type="button" onClick={() => openWeek(s, w)} className="grid size-6 place-items-center rounded text-muted hover:text-fg" aria-label={`Edit week ${w.number}`}>
                                      <Pencil className="size-3.5" />
                                    </button>
                                    <button
                                      type="button"
                                      onClick={() => {
                                        if (confirm(`Delete week ${w.number} and its topics? Resources stay, unlinked from the week.`))
                                          void run((t) => deleteWeek(t, w.id), `Week ${w.number} deleted`);
                                      }}
                                      className="grid size-6 place-items-center rounded text-muted hover:text-red"
                                      aria-label={`Delete week ${w.number}`}
                                    >
                                      <Trash2 className="size-3.5" />
                                    </button>
                                  </li>
                                ))}
                              </ul>
                              <div className="mt-2 flex flex-wrap items-center gap-3">
                                {s.weeks.length < WEEKS && (
                                  <button type="button" onClick={() => openWeek(s)} className="inline-flex items-center gap-1 text-xs font-medium text-blue hover:underline">
                                    <Plus className="size-3.5" aria-hidden /> Add week
                                  </button>
                                )}
                                {s.status === "published" && (
                                  <Link href={`/subjects/${s.slug}`} className="text-xs font-medium text-muted hover:text-fg hover:underline">
                                    View live page →
                                  </Link>
                                )}
                              </div>
                            </div>
                          </details>
                        ))}
                    </div>
                  ))}
                </div>
              </details>
            );
          })}
        </section>

        <div className="space-y-6">
          {week && (
            <form id="week-editor" onSubmit={submitWeek} className="card space-y-3 p-5" noValidate>
              <div className="flex items-center justify-between">
                <h2 className="font-semibold">{week.id ? `Edit week ${week.number}` : "Add week"}</h2>
                <Button size="sm" variant="ghost" onClick={() => setWeek(null)}>
                  Cancel
                </Button>
              </div>
              <p className="text-sm text-muted">{selected?.name}</p>
              <div className="grid grid-cols-[90px_1fr] gap-2">
                <Field label="Week">
                  <select className={inputClass} value={week.number} onChange={(e) => setWeek({ ...week, number: Number(e.target.value) })}>
                    {Array.from({ length: WEEKS }, (_, i) => i + 1).map((n) => (
                      <option key={n} value={n} disabled={takenWeeks.has(n)}>
                        {n}
                      </option>
                    ))}
                  </select>
                </Field>
                <Field label="Title">
                  <input className={inputClass} value={week.title} maxLength={120} onChange={(e) => setWeek({ ...week, title: e.target.value })} placeholder="Sets and functions" />
                </Field>
              </div>
              <fieldset>
                <legend className="mb-1 text-sm font-medium">Topics</legend>
                <ol className="space-y-3">
                  {week.topics.map((t, i) => {
                    const patch = (p: Partial<TopicInput>) => setWeek({ ...week, topics: week.topics.map((x, j) => (j === i ? { ...x, ...p } : x)) });
                    return (
                      <li key={t.id ?? `new-${i}`} className="rounded-lg border border-border p-2.5">
                        <div className="flex gap-1">
                          <input className={inputClass} value={t.title} maxLength={120} onChange={(e) => patch({ title: e.target.value })} placeholder={`Topic ${i + 1}`} aria-label={`Topic ${i + 1} title`} />
                          <button type="button" disabled={i === 0} onClick={() => moveTopic(i, -1)} className="grid size-10 shrink-0 place-items-center rounded-lg text-muted hover:bg-surface-2 disabled:opacity-30" aria-label="Move up">
                            <ArrowUp className="size-4" />
                          </button>
                          <button type="button" disabled={i === week.topics.length - 1} onClick={() => moveTopic(i, 1)} className="grid size-10 shrink-0 place-items-center rounded-lg text-muted hover:bg-surface-2 disabled:opacity-30" aria-label="Move down">
                            <ArrowDown className="size-4" />
                          </button>
                          <button
                            type="button"
                            disabled={week.topics.length === 1}
                            onClick={() => setWeek({ ...week, topics: week.topics.filter((_, j) => j !== i) })}
                            className="grid size-10 shrink-0 place-items-center rounded-lg text-muted hover:text-red disabled:opacity-30"
                            aria-label={`Remove topic ${i + 1}`}
                          >
                            <Trash2 className="size-4" />
                          </button>
                        </div>
                        <div className="mt-2 grid grid-cols-[1fr_80px] gap-2">
                          <input className={inputClass} value={t.summary} maxLength={500} onChange={(e) => patch({ summary: e.target.value })} placeholder="One-line summary" aria-label={`Topic ${i + 1} summary`} />
                          <input className={inputClass} type="number" min={1} max={600} value={t.minutes} onChange={(e) => patch({ minutes: Number(e.target.value) })} aria-label={`Topic ${i + 1} minutes`} title="Minutes" />
                        </div>
                      </li>
                    );
                  })}
                </ol>
                <Button size="sm" variant="ghost" className="mt-2" onClick={() => setWeek({ ...week, topics: [...week.topics, blankTopic()] })}>
                  <Plus className="size-4" aria-hidden /> Add topic
                </Button>
              </fieldset>
              {week.id && <p className="text-xs text-muted">Removing a topic unlinks its resources and questions from it.</p>}
              {weekError && (
                <p role="alert" className="text-sm text-red">
                  {weekError}
                </p>
              )}
              <button type="submit" disabled={busy} className={buttonClass("dark", "md", "w-full")}>
                {week.id ? "Save week" : "Add week"}
              </button>
            </form>
          )}

          <form onSubmit={submitCourse} className="card space-y-3 p-5" noValidate>
            <div className="flex items-center justify-between">
              <h2 className="font-semibold">{editingCourse ? "Edit course" : "Add course"}</h2>
              {editingCourse && (
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={() => {
                    setEditingCourse(null);
                    setCourse(blankCourse);
                  }}
                >
                  Cancel
                </Button>
              )}
            </div>
            {!editingCourse && <p className="text-sm text-muted">New courses start as drafts. Courses from the official list are fixed; add weeks to them from the tree.</p>}
            <Field label="Course name">
              <input className={inputClass} value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value })} placeholder="e.g. Marketing Analytics" maxLength={100} />
            </Field>
            <div className="grid grid-cols-[1fr_90px] gap-2">
              <Field label="Course code">
                <input className={inputClass + " font-mono uppercase"} value={course.code} onChange={(e) => setCourse({ ...course, code: e.target.value })} placeholder="BSMS1201" maxLength={12} />
              </Field>
              <Field label="Credits">
                <input className={inputClass} type="number" min={0} max={24} value={course.credits} onChange={(e) => setCourse({ ...course, credits: Number(e.target.value) })} />
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Field label="Level">
                <select className={inputClass} value={course.level} onChange={(e) => setCourse({ ...course, level: e.target.value, group: "" })}>
                  {program.levels.map((l) => (
                    <option key={l.slug} value={l.slug}>
                      {l.short}
                    </option>
                  ))}
                </select>
              </Field>
              <Field label="Group">
                <select className={inputClass} value={course.group || levelGroups[0]?.slug || ""} disabled={!levelGroups.length} onChange={(e) => setCourse({ ...course, group: e.target.value })}>
                  {levelGroups.length === 0 && <option value="">—</option>}
                  {levelGroups.map((g) => (
                    <option key={g.slug} value={g.slug}>
                      {g.name}
                    </option>
                  ))}
                </select>
              </Field>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <Field label="Kind">
                <select className={inputClass} value={course.kind} onChange={(e) => setCourse({ ...course, kind: e.target.value as CourseInput["kind"] })}>
                  <option value="course">Course</option>
                  <option value="project">Project</option>
                </select>
              </Field>
              <Field label="Prerequisites">
                <input className={inputClass} value={course.prerequisites} onChange={(e) => setCourse({ ...course, prerequisites: e.target.value })} placeholder="None" />
              </Field>
            </div>
            <Field label="Description">
              <textarea className={textareaClass} value={course.description} maxLength={1000} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
            </Field>
            {courseError && (
              <p role="alert" className="text-sm text-red">
                {courseError}
              </p>
            )}
            <button type="submit" disabled={busy} className={buttonClass("dark", "md", "w-full")}>
              <Plus className="size-4" aria-hidden /> {editingCourse ? "Save course" : "Create course"}
            </button>
          </form>
          <p className="text-xs text-muted">
            <Badge>Tip</Badge> Weeks of published courses appear on the site as soon as they are saved.
          </p>
        </div>
      </div>
    </>
  );
}
