"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { ChevronDown, Play } from "lucide-react";
import { questions, subjects } from "@/lib/content";
import { buttonClass } from "./ui";
import { cn } from "@/lib/utils";

const TYPES = [
  ["mcq", "MCQ"],
  ["multi", "Multiple select"],
  ["truefalse", "True / False"],
  ["fill", "Fill in the blank"],
  ["numerical", "Numerical"],
  ["short", "Short answer"],
] as const;

function Select({
  label,
  value,
  onChange,
  options,
  disabled,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  options: { value: string; label: string }[];
  disabled?: boolean;
}) {
  return (
    <label className="block">
      <span className="mb-1.5 block text-sm font-medium">{label}</span>
      <span className="relative block">
        <select
          value={value}
          disabled={disabled}
          onChange={(e) => onChange(e.target.value)}
          className="h-11 w-full appearance-none rounded-xl border border-border bg-bg pr-9 pl-3 text-sm outline-none focus:border-fg/40 disabled:opacity-50"
        >
          <option value="">Any</option>
          {options.map((o) => (
            <option key={o.value} value={o.value}>
              {o.label}
            </option>
          ))}
        </select>
        <ChevronDown className="pointer-events-none absolute top-1/2 right-3 size-4 -translate-y-1/2 text-muted" aria-hidden />
      </span>
    </label>
  );
}

/** Question-bank filter (PRD §17): subject → unit → topic, difficulty, type. */
export function PracticeBuilder() {
  const [subject, setSubject] = useState(questions[0]?.subjectSlug ?? "");
  const [unit, setUnit] = useState("");
  const [topic, setTopic] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [type, setType] = useState("");
  const [exam, setExam] = useState(false);

  const subj = subjects.find((s) => s.slug === subject);
  const units = subj?.units ?? [];
  const topics = (unit ? units.filter((u) => u.id === unit) : units).flatMap((u) => u.topics);

  const matching = useMemo(
    () =>
      questions.filter(
        (q) =>
          (!subject || q.subjectSlug === subject) &&
          (!unit || q.unitId === unit) &&
          (!topic || q.topicSlug === topic) &&
          (!difficulty || q.difficulty === difficulty) &&
          (!type || q.type === type),
      ).length,
    [subject, unit, topic, difficulty, type],
  );

  const href = () => {
    const p = new URLSearchParams();
    if (subject) p.set("subject", subject);
    if (unit) p.set("unit", unit);
    if (topic) p.set("topic", topic);
    if (difficulty) p.set("difficulty", difficulty);
    if (type) p.set("type", type);
    if (exam) p.set("mode", "exam");
    return `/practice/session?${p}`;
  };

  return (
    <div className="card p-5 md:p-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        <Select
          label="Course"
          value={subject}
          onChange={(v) => {
            setSubject(v);
            setUnit("");
            setTopic("");
          }}
          options={subjects.filter((s) => questions.some((q) => q.subjectSlug === s.slug)).map((s) => ({ value: s.slug, label: s.name }))}
        />
        <Select
          label="Week"
          value={unit}
          disabled={!subject}
          onChange={(v) => {
            setUnit(v);
            setTopic("");
          }}
          options={units.map((u) => ({ value: u.id, label: `Week ${u.number}: ${u.title}` }))}
        />
        <Select label="Topic" value={topic} disabled={!subject} onChange={setTopic} options={topics.map((t) => ({ value: t.slug, label: t.title }))} />
        <Select label="Difficulty" value={difficulty} onChange={setDifficulty} options={["Easy", "Medium", "Hard"].map((d) => ({ value: d, label: d }))} />
        <Select label="Question type" value={type} onChange={setType} options={TYPES.map(([value, label]) => ({ value, label }))} />
      </div>
      <div className="mt-5 flex flex-wrap items-center gap-4 border-t border-border pt-5">
        <div role="radiogroup" aria-label="Mode" className="inline-flex rounded-xl bg-surface-2 p-1 text-sm font-medium">
          {[
            [false, "Practice: instant feedback"],
            [true, "Test: graded at the end"],
          ].map(([v, l]) => (
            <button
              key={String(v)}
              type="button"
              role="radio"
              aria-checked={exam === v}
              onClick={() => setExam(v as boolean)}
              className={cn("rounded-lg px-3 py-1.5", exam === v ? "bg-surface shadow-sm" : "text-muted")}
            >
              {l as string}
            </button>
          ))}
        </div>
        <p className="text-sm text-muted">
          <span className="font-semibold text-fg tabular-nums">{matching}</span> question{matching === 1 ? "" : "s"} match
        </p>
        <Link
          href={matching ? href() : "#"}
          aria-disabled={!matching}
          className={buttonClass("primary", "lg", cn("ml-auto", !matching && "pointer-events-none opacity-50"))}
        >
          <Play className="size-4 fill-current" aria-hidden /> Start
        </Link>
      </div>
    </div>
  );
}
