"use client";

import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useMemo, useRef, useState } from "react";
import { ExternalLink, Plus } from "lucide-react";
import { deletePaper, savePaper } from "@/app/admin/actions";
import { PAPER_KIND_LABEL, paperProblems, type PaperKind, type PaperRow } from "@/lib/admin";
import { subjectName } from "@/lib/content";
import { paperHref } from "@/lib/pyq-urls";
import { supabase } from "@/lib/supabase/client";
import type { QualifierMock } from "@/lib/types";
import { cn } from "@/lib/utils";
import { Badge, Button, EmptyState, buttonClass } from "../ui";
import { Field, LoadError, SearchBox, inputClass, timeAgo } from "./form";
import { AdminHeader } from "./shell";
import { useAction, useAdminQuery } from "./staff";
import { Table, Td } from "./widgets";

/** /admin/papers: every paper in the exam portal, or the editor with ?edit=<slug> / ?new=1. */
export function PapersSection() {
  const params = useSearchParams();
  const slug = params.get("edit");
  if (slug || params.get("new")) return <PaperEditor key={slug ?? "new"} slug={slug} />;
  return <PaperList />;
}

function PaperList() {
  const [kind, setKind] = useState<PaperKind | "">("");
  const [query, setQuery] = useState("");
  const q = useAdminQuery(() => supabase.from("papers").select("slug, kind, subject_slug, title, position, updated_at").order("kind").order("position"), []);
  const all = (q.data ?? []) as PaperRow[];
  const rows = all.filter(
    (p) => (!kind || p.kind === kind) && (!query.trim() || `${p.title} ${p.slug} ${p.subject_slug ?? ""}`.toLowerCase().includes(query.trim().toLowerCase())),
  );

  return (
    <>
      <AdminHeader
        title="Papers"
        description="Qualifier mocks and previous-year papers in the exam portal. Each is stored whole, questions and answer key included."
        action={
          <Link href="/admin/papers?new=1" className={buttonClass("primary", "md")}>
            <Plus className="size-4" aria-hidden /> Add paper
          </Link>
        }
      />
      <div className="mb-4 grid gap-2 sm:grid-cols-[1fr_220px]">
        <SearchBox value={query} onChange={setQuery} placeholder="Search papers…" />
        <select className={inputClass} value={kind} onChange={(e) => setKind(e.target.value as PaperKind | "")} aria-label="Kind">
          <option value="">All kinds ({all.length})</option>
          {(Object.keys(PAPER_KIND_LABEL) as PaperKind[]).map((k) => (
            <option key={k} value={k}>
              {PAPER_KIND_LABEL[k]} ({all.filter((p) => p.kind === k).length})
            </option>
          ))}
        </select>
      </div>
      <LoadError error={q.error} />
      {!q.loading && !rows.length && !q.error ? (
        <EmptyState title="No papers match." />
      ) : (
        <div className={cn(q.loading && "opacity-60 transition-opacity")}>
          <Table head={["Paper", "Kind", "Course", "Order", "Updated"]}>
            {rows.map((p) => (
              <tr key={p.slug}>
                <Td>
                  <Link href={`/admin/papers?edit=${p.slug}`} className="font-medium hover:underline">
                    {p.title}
                  </Link>
                  <p className="font-mono text-xs text-muted">{p.slug}</p>
                </Td>
                <Td>
                  <Badge>{PAPER_KIND_LABEL[p.kind] ?? p.kind}</Badge>
                </Td>
                <Td className="text-muted">{p.subject_slug ? subjectName(p.subject_slug) : "Several courses"}</Td>
                <Td className="tabular-nums">{p.position}</Td>
                <Td className="text-xs whitespace-nowrap text-muted">{timeAgo(p.updated_at)}</Td>
              </tr>
            ))}
          </Table>
        </div>
      )}
    </>
  );
}

const TEMPLATE: QualifierMock = {
  slug: "maths-1-qualifier-january-2026",
  title: "Mathematics for Data Science I · Qualifier (January 2026)",
  description: "",
  difficulty: "Standard",
  durationMin: 60,
  sections: [
    {
      subjectSlug: "mathematics-for-data-science-1",
      title: "Mathematics for Data Science I",
      short: "Maths I",
      questions: [{ id: "q1", type: "mcq", prompt: "Which of these is a prime number?", options: ["4", "6", "7", "9"], answer: 2, marks: 2, explanation: "7 has no divisors other than 1 and itself." }],
    },
  ],
};

function PaperEditor({ slug }: { slug: string | null }) {
  const router = useRouter();
  const run = useAction();
  const q = useAdminQuery(
    () => (slug ? supabase.from("papers").select("slug, kind, title, position, data").eq("slug", slug).maybeSingle() : Promise.resolve({ data: null, error: null })),
    [slug],
  );
  const row = q.data as (PaperRow & { data: QualifierMock }) | undefined;
  const [kind, setKind] = useState<PaperKind>("qualifier_pyq");
  const [position, setPosition] = useState("0");
  const [json, setJson] = useState(slug ? "" : JSON.stringify(TEMPLATE, null, 2));
  const [busy, setBusy] = useState(false);
  const filled = useRef(false);

  useEffect(() => {
    if (row && !filled.current) {
      filled.current = true;
      setKind(row.kind);
      setPosition(String(row.position));
      setJson(JSON.stringify(row.data, null, 2));
    }
  }, [row]);

  const check = useMemo(() => {
    try {
      const data = JSON.parse(json) as QualifierMock;
      const problems = paperProblems(data);
      return { data: problems.length ? null : data, problems };
    } catch (e) {
      return { data: null, problems: [`JSON: ${(e as Error).message}`] };
    }
  }, [json]);
  const questions = check.data?.sections.reduce((n, s) => n + s.questions.length, 0) ?? 0;
  const marks = check.data?.sections.reduce((n, s) => n + s.questions.reduce((m, x) => m + x.marks, 0), 0) ?? 0;

  if (slug && q.loading && !row) return <div className="skeleton h-96" />;
  if (slug && !q.loading && !row) return <LoadError error={q.error ?? "That paper doesn't exist."} />;

  const save = async () => {
    setBusy(true);
    const done = await run((t) => savePaper(t, { slug: slug ?? undefined, kind, position: Number(position), json }), slug ? "Paper saved. The site updates now." : "Paper added");
    setBusy(false);
    if (done && !slug) router.replace(`/admin/papers?edit=${done.slug}`);
  };

  return (
    <>
      <AdminHeader
        title={row ? row.title : "Add paper"}
        description={row ? row.slug : "Paste the paper as JSON, in the same shape as the files in src/lib/data."}
        action={
          <div className="flex gap-2">
            {row && check.data && (
              <a href={paperHref(check.data)} target="_blank" rel="noopener noreferrer" className={buttonClass("secondary", "md")}>
                View on site <ExternalLink className="size-4" aria-hidden />
              </a>
            )}
            <Link href="/admin/papers" className={buttonClass("secondary", "md")}>
              All papers
            </Link>
          </div>
        }
      />
      <div className="grid gap-6 xl:grid-cols-[1fr_320px]">
        <Field label="Paper JSON" hint={check.data ? `${check.data.sections.length} section(s) · ${questions} questions · ${marks} marks` : undefined}>
          <textarea
            className={inputClass + " h-[65vh] py-2 font-mono text-xs leading-relaxed"}
            spellCheck={false}
            value={json}
            onChange={(e) => setJson(e.target.value)}
            aria-invalid={!check.data}
          />
        </Field>
        <div className="space-y-4">
          <div className="card space-y-3 p-5">
            <Field label="Kind">
              <select className={inputClass} value={kind} onChange={(e) => setKind(e.target.value as PaperKind)}>
                {(Object.keys(PAPER_KIND_LABEL) as PaperKind[]).map((k) => (
                  <option key={k} value={k}>
                    {PAPER_KIND_LABEL[k]}
                  </option>
                ))}
              </select>
            </Field>
            <Field label="Order" hint="Lower comes first">
              <input className={inputClass} type="number" min={0} value={position} onChange={(e) => setPosition(e.target.value)} />
            </Field>
          </div>
          {check.problems.length > 0 ? (
            <div role="alert" className="rounded-xl border border-red/30 bg-red/5 p-4 text-sm text-red">
              <p className="mb-1 font-semibold">Fix before saving:</p>
              <ul className="list-disc space-y-1 pl-4">
                {check.problems.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ) : (
            <p className="rounded-xl border border-green/30 bg-green/5 p-4 text-sm text-green">The paper is valid.</p>
          )}
          <Button variant="primary" size="lg" className="w-full" disabled={busy || !check.data} onClick={() => void save()}>
            {slug ? "Save paper" : "Add paper"}
          </Button>
          {slug && (
            <Button
              variant="ghost"
              className="w-full text-red"
              disabled={busy}
              onClick={async () => {
                if (!confirm(`Delete "${row?.title}" from the exam portal? Students' past attempts stay, but the paper can't be opened.`)) return;
                if (await run((t) => deletePaper(t, slug), "Paper deleted")) router.push("/admin/papers");
              }}
            >
              Delete paper
            </Button>
          )}
          <p className="text-xs text-muted">
            Edits here are overwritten if someone runs <code>npm run seed:papers</code>, which copies the papers in the code back into the database.
          </p>
        </div>
      </div>
    </>
  );
}
