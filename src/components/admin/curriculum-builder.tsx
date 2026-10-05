"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ChevronRight, Plus, Trash2 } from "lucide-react";
import { programs, subjects } from "@/lib/content";
import { actions, useStore } from "@/lib/store";
import type { Subject } from "@/lib/types";
import { Badge, Button, buttonClass } from "../ui";
import { useToast } from "../toast";

const input = "h-10 w-full rounded-lg border border-border bg-bg px-3 text-sm outline-none focus:border-fg/40";
const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

type Row = Subject & { draft: boolean };

/** Program → Level → Group → Course → Week → Topic, editable without a developer (PRD §30). */
export function CurriculumBuilder() {
  const toast = useToast();
  const customSubjects = useStore((s) => s.customSubjects);
  const customUnits = useStore((s) => s.customUnits);

  const program = programs[0];
  const [course, setCourse] = useState({ name: "", code: "", level: "foundation", group: "", credits: "4", description: "" });
  const [unit, setUnit] = useState({ subjectSlug: subjects[0].slug, title: "", topics: "" });
  const [err, setErr] = useState("");

  const all: Row[] = [
    ...subjects.map((s) => ({ ...s, draft: false })),
    ...customSubjects.map((s) => ({
      slug: s.slug,
      name: s.name,
      code: s.code,
      programSlug: s.programSlug,
      level: s.level,
      group: s.group,
      kind: "course" as const,
      credits: s.credits,
      prerequisites: "",
      description: s.description,
      units: [],
      draft: true,
    })),
  ];
  const levelGroups = program.levels.find((l) => l.slug === course.level)?.groups ?? [];

  const addCourse = (e: FormEvent) => {
    e.preventDefault();
    const name = course.name.trim();
    const slug = slugify(name);
    const code = course.code.trim().toUpperCase();
    if (name.length < 3) return setErr("Course name must be at least 3 characters.");
    if (code && !/^[A-Z]{2,6}\d{3,5}$/.test(code)) return setErr("Course code should look like BSMS1201.");
    if (all.some((s) => s.slug === slug || (code && s.code === code))) return setErr("A course with this name or code already exists.");
    setErr("");
    actions.addCustomSubject({
      slug,
      name,
      code: code || undefined,
      programSlug: program.slug,
      level: course.level,
      group: course.group || levelGroups[0]?.slug,
      credits: Number(course.credits) || 0,
      description: course.description.trim().slice(0, 500),
    });
    setCourse((c) => ({ ...c, name: "", code: "", description: "" }));
    toast(`Created ${name} as a draft`);
  };

  const addUnit = (e: FormEvent) => {
    e.preventDefault();
    const topics = unit.topics
      .split("\n")
      .map((t) => t.trim())
      .filter(Boolean);
    if (!unit.title.trim() || topics.length === 0) return;
    actions.addCustomUnit({ subjectSlug: unit.subjectSlug, title: unit.title.trim(), topics });
    setUnit((u) => ({ ...u, title: "", topics: "" }));
    toast("Week added as a draft");
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      {/* Tree */}
      <section className="card p-2" aria-label="Curriculum tree">
        <p className="px-3 pt-2 pb-1 text-sm font-semibold">{program.degree}</p>
        {program.levels.map((l) => {
          const subs = all.filter((s) => s.level === l.slug);
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
                      .map((s) => {
                        const extra = customUnits.filter((u) => u.subjectSlug === s.slug);
                        return (
                          <details key={s.slug} className="group rounded-lg">
                            <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-surface-2">
                              <ChevronRight className="size-3.5 transition-transform group-open:rotate-90" aria-hidden />
                              <span className="w-[4.5rem] shrink-0 font-mono text-xs text-muted">{s.code ?? "—"}</span>
                              <span className="font-medium">{s.name}</span>
                              {s.draft && <Badge tone="amber">Draft</Badge>}
                              <span className="ml-auto shrink-0 text-xs text-muted">{s.units.length + extra.length} weeks</span>
                              {s.draft && (
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.preventDefault();
                                    actions.removeCustomSubject(s.slug);
                                  }}
                                  className="grid size-6 place-items-center rounded text-muted hover:text-red"
                                  aria-label={`Delete draft ${s.name}`}
                                >
                                  <Trash2 className="size-3.5" />
                                </button>
                              )}
                            </summary>
                            <ul className="mb-1 ml-6 space-y-1 border-l border-border py-1 pl-3 text-sm">
                              {s.units.length + extra.length === 0 && <li className="text-xs text-muted">No weeks yet. Add one with the form.</li>}
                              {s.units.map((u) => (
                                <li key={u.id}>
                                  <span className="text-muted">Week {u.number}:</span> {u.title}
                                  <span className="block text-xs text-muted">{u.topics.map((t) => t.title).join(" · ")}</span>
                                </li>
                              ))}
                              {extra.map((u, i) => (
                                <li key={u.id} className="flex items-start gap-2">
                                  <span className="flex-1">
                                    <span className="text-muted">Week {s.units.length + i + 1}:</span> {u.title} <Badge tone="amber">Draft</Badge>
                                    <span className="block text-xs text-muted">{u.topics.join(" · ")}</span>
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() => actions.removeCustomUnit(u.id)}
                                    className="grid size-6 place-items-center rounded text-muted hover:text-red"
                                    aria-label={`Delete draft week ${u.title}`}
                                  >
                                    <Trash2 className="size-3.5" />
                                  </button>
                                </li>
                              ))}
                              {!s.draft && (
                                <li>
                                  <Link href={`/subjects/${s.slug}`} className="text-xs font-medium text-blue hover:underline">
                                    View live page →
                                  </Link>
                                </li>
                              )}
                            </ul>
                          </details>
                        );
                      })}
                  </div>
                ))}
              </div>
            </details>
          );
        })}
      </section>

      {/* Forms */}
      <div className="space-y-6">
        <form onSubmit={addCourse} className="card space-y-3 p-5" noValidate>
          <h2 className="font-semibold">Add course</h2>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Course name</span>
            <input className={input} value={course.name} onChange={(e) => setCourse({ ...course, name: e.target.value })} placeholder="e.g. Statistics for Data Science II" maxLength={100} />
          </label>
          <div className="grid grid-cols-[1fr_90px] gap-2">
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Course code</span>
              <input className={input + " font-mono uppercase"} value={course.code} onChange={(e) => setCourse({ ...course, code: e.target.value })} placeholder="BSMS1201" maxLength={12} />
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Credits</span>
              <input className={input} type="number" min={0} max={12} value={course.credits} onChange={(e) => setCourse({ ...course, credits: e.target.value })} />
            </label>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Level</span>
              <select className={input} value={course.level} onChange={(e) => setCourse({ ...course, level: e.target.value, group: "" })}>
                {program.levels.map((l) => (
                  <option key={l.slug} value={l.slug}>
                    {l.short}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Group</span>
              <select className={input} value={course.group} disabled={!levelGroups.length} onChange={(e) => setCourse({ ...course, group: e.target.value })}>
                {levelGroups.length === 0 && <option value="">—</option>}
                {levelGroups.map((g) => (
                  <option key={g.slug} value={g.slug}>
                    {g.name}
                  </option>
                ))}
              </select>
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Description</span>
            <textarea className={input + " h-20 py-2"} value={course.description} maxLength={500} onChange={(e) => setCourse({ ...course, description: e.target.value })} />
          </label>
          {err && (
            <p role="alert" className="text-sm text-red">
              {err}
            </p>
          )}
          <button type="submit" className={buttonClass("dark", "md", "w-full")}>
            <Plus className="size-4" aria-hidden /> Create course
          </button>
        </form>

        <form onSubmit={addUnit} className="card space-y-3 p-5">
          <h2 className="font-semibold">Add week &amp; topics</h2>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Course</span>
            <select className={input} value={unit.subjectSlug} onChange={(e) => setUnit({ ...unit, subjectSlug: e.target.value })}>
              {all.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.code ? `${s.code} · ` : ""}
                  {s.name}
                  {s.draft ? " (draft)" : ""}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Week title</span>
            <input className={input} value={unit.title} onChange={(e) => setUnit({ ...unit, title: e.target.value })} placeholder="e.g. Week 1: Introduction" required />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Topics (one per line)</span>
            <textarea className={input + " h-28 py-2"} value={unit.topics} onChange={(e) => setUnit({ ...unit, topics: e.target.value })} required />
          </label>
          <Button type="submit" variant="secondary" className="w-full">
            <Plus className="size-4" aria-hidden /> Add week
          </Button>
        </form>
      </div>
    </div>
  );
}
