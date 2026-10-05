"use client";

import Link from "next/link";
import { useState, type FormEvent } from "react";
import { ChevronRight, Plus, Trash2 } from "lucide-react";
import { programs, subjects } from "@/lib/content";
import { actions, useStore } from "@/lib/store";
import { Badge, Button, buttonClass } from "../ui";
import { useToast } from "../toast";
import { cn } from "@/lib/utils";

const input = "h-10 w-full rounded-lg border border-border bg-bg px-3 text-sm outline-none focus:border-fg/40";
const slugify = (s: string) =>
  s
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");

/** Program → Semester → Subject → Unit → Topic, editable without a developer (PRD §30). */
export function CurriculumBuilder() {
  const toast = useToast();
  const customSubjects = useStore((s) => s.customSubjects);
  const customUnits = useStore((s) => s.customUnits);
  const [open, setOpen] = useState<string | null>("data-science");

  const [sub, setSub] = useState({ name: "", programSlug: "data-science", semester: "2", credits: "4", description: "" });
  const [unit, setUnit] = useState({ subjectSlug: "statistics", title: "", topics: "" });
  const [err, setErr] = useState("");

  const allSubjects = [
    ...subjects.map((s) => ({ ...s, draft: false })),
    ...customSubjects.map((s) => ({ ...s, units: [], draft: true })),
  ];

  const addSubject = (e: FormEvent) => {
    e.preventDefault();
    const name = sub.name.trim();
    const slug = slugify(name);
    if (name.length < 3) return setErr("Subject name must be at least 3 characters.");
    if (allSubjects.some((s) => s.slug === slug)) return setErr("A subject with this name already exists.");
    setErr("");
    actions.addCustomSubject({
      slug,
      name,
      programSlug: sub.programSlug,
      semester: Number(sub.semester),
      credits: Number(sub.credits) || 0,
      description: sub.description.trim().slice(0, 500),
    });
    setSub((s) => ({ ...s, name: "", description: "" }));
    setOpen(sub.programSlug);
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
    toast("Unit added as a draft");
  };

  return (
    <div className="grid gap-6 xl:grid-cols-[1fr_380px]">
      {/* Tree */}
      <section className="card p-2" aria-label="Curriculum tree">
        {programs.map((p) => {
          const subs = allSubjects.filter((s) => s.programSlug === p.slug);
          const isOpen = open === p.slug;
          const sems = [...new Set(subs.map((s) => s.semester))].sort((a, b) => a - b);
          return (
            <div key={p.slug}>
              <button
                type="button"
                onClick={() => setOpen(isOpen ? null : p.slug)}
                aria-expanded={isOpen}
                className="flex w-full items-center gap-2 rounded-lg px-3 py-2.5 text-left font-semibold hover:bg-surface-2"
              >
                <ChevronRight className={cn("size-4 transition-transform", isOpen && "rotate-90")} aria-hidden />
                {p.name}
                <span className="ml-auto text-xs font-normal text-muted">{subs.length} subjects</span>
              </button>
              {isOpen && (
                <div className="mb-2 ml-5 border-l border-border pl-3">
                  {sems.map((sem) => (
                    <div key={sem} className="py-1">
                      <p className="eyebrow px-2 py-1">Semester {sem}</p>
                      {subs
                        .filter((s) => s.semester === sem)
                        .map((s) => {
                          const extra = customUnits.filter((u) => u.subjectSlug === s.slug);
                          return (
                            <details key={s.slug} className="group rounded-lg">
                              <summary className="flex cursor-pointer list-none items-center gap-2 rounded-lg px-2 py-1.5 text-sm hover:bg-surface-2">
                                <ChevronRight className="size-3.5 transition-transform group-open:rotate-90" aria-hidden />
                                <span className="font-medium">{s.name}</span>
                                {s.draft && <Badge tone="amber">Draft</Badge>}
                                <span className="ml-auto text-xs text-muted">{s.units.length + extra.length} units</span>
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
                                {s.units.map((u) => (
                                  <li key={u.id}>
                                    <span className="text-muted">Unit {u.number}:</span> {u.title}
                                    <span className="block text-xs text-muted">{u.topics.map((t) => t.title).join(" · ")}</span>
                                  </li>
                                ))}
                                {extra.map((u, i) => (
                                  <li key={u.id} className="flex items-start gap-2">
                                    <span className="flex-1">
                                      <span className="text-muted">Unit {s.units.length + i + 1}:</span> {u.title} <Badge tone="amber">Draft</Badge>
                                      <span className="block text-xs text-muted">{u.topics.join(" · ")}</span>
                                    </span>
                                    <button
                                      type="button"
                                      onClick={() => actions.removeCustomUnit(u.id)}
                                      className="grid size-6 place-items-center rounded text-muted hover:text-red"
                                      aria-label={`Delete draft unit ${u.title}`}
                                    >
                                      <Trash2 className="size-3.5" />
                                    </button>
                                  </li>
                                ))}
                                {!s.draft && (
                                  <li>
                                    <Link href={`/subjects/${s.slug}?tab=curriculum`} className="text-xs font-medium text-blue hover:underline">
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
              )}
            </div>
          );
        })}
      </section>

      {/* Forms */}
      <div className="space-y-6">
        <form onSubmit={addSubject} className="card space-y-3 p-5" noValidate>
          <h2 className="font-semibold">Add subject</h2>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Subject name</span>
            <input className={input} value={sub.name} onChange={(e) => setSub({ ...sub, name: e.target.value })} placeholder="e.g. Statistics" maxLength={80} />
          </label>
          <div className="grid grid-cols-[1fr_80px_80px] gap-2">
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Program</span>
              <select className={input} value={sub.programSlug} onChange={(e) => setSub({ ...sub, programSlug: e.target.value })}>
                {programs.map((p) => (
                  <option key={p.slug} value={p.slug}>
                    {p.name}
                  </option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Sem</span>
              <select className={input} value={sub.semester} onChange={(e) => setSub({ ...sub, semester: e.target.value })}>
                {Array.from({ length: programs.find((p) => p.slug === sub.programSlug)?.semesters ?? 8 }, (_, i) => (
                  <option key={i}>{i + 1}</option>
                ))}
              </select>
            </label>
            <label className="block text-sm">
              <span className="mb-1 block font-medium">Credits</span>
              <input className={input} type="number" min={0} max={12} value={sub.credits} onChange={(e) => setSub({ ...sub, credits: e.target.value })} />
            </label>
          </div>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Description</span>
            <textarea
              className={input + " h-20 py-2"}
              value={sub.description}
              maxLength={500}
              onChange={(e) => setSub({ ...sub, description: e.target.value })}
            />
          </label>
          {err && (
            <p role="alert" className="text-sm text-red">
              {err}
            </p>
          )}
          <button type="submit" className={buttonClass("dark", "md", "w-full")}>
            <Plus className="size-4" aria-hidden /> Create subject
          </button>
        </form>

        <form onSubmit={addUnit} className="card space-y-3 p-5">
          <h2 className="font-semibold">Add unit &amp; topics</h2>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Subject</span>
            <select className={input} value={unit.subjectSlug} onChange={(e) => setUnit({ ...unit, subjectSlug: e.target.value })}>
              {allSubjects.map((s) => (
                <option key={s.slug} value={s.slug}>
                  {s.name}
                  {s.draft ? " (draft)" : ""}
                </option>
              ))}
            </select>
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Unit title</span>
            <input className={input} value={unit.title} onChange={(e) => setUnit({ ...unit, title: e.target.value })} placeholder="e.g. Time Series" required />
          </label>
          <label className="block text-sm">
            <span className="mb-1 block font-medium">Topics (one per line)</span>
            <textarea
              className={input + " h-28 py-2"}
              value={unit.topics}
              onChange={(e) => setUnit({ ...unit, topics: e.target.value })}
              placeholder={"Trend\nSeasonality\nMoving averages"}
              required
            />
          </label>
          <Button type="submit" variant="secondary" className="w-full">
            <Plus className="size-4" aria-hidden /> Add unit
          </Button>
        </form>
      </div>
    </div>
  );
}
