// Every paper that can be sat in the exam portal (qualifier mocks, qualifier
// PYQs and End Term PYQs), read from the Supabase `papers` table. Server-side
// only: client components get one paper as a prop. The table is filled from
// src/lib/data by `npm run seed:papers`; after that, edits made in Supabase
// show up on the site within REFRESH_SECONDS.

import { createClient } from "@supabase/supabase-js";
import { QUALIFIER_SUBJECTS } from "./data/qualifier-meta";
import { paperHref } from "./pyq-urls";
import { isSingleSubject } from "./qualifier";
import type { QualifierMock } from "./types";

/** How long a server process reuses the papers. Pages that list papers revalidate on the same schedule (keep their `revalidate` in step). */
export const REFRESH_SECONDS = 300;

// Rows per request: keeps each response well under Next's 2 MB fetch-cache limit (the largest paper is ~120 KB).
const PAGE_SIZE = 10;

const db = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!, {
  auth: { persistSession: false, autoRefreshToken: false },
});

type Row = { kind: "mock" | "qualifier_pyq" | "end_term"; data: QualifierMock };

async function fetchRows() {
  const rows: Row[] = [];
  for (let from = 0; ; from += PAGE_SIZE) {
    const { data, error } = await db
      .from("papers")
      .select("kind, data")
      .order("kind")
      .order("position")
      .range(from, from + PAGE_SIZE - 1);
    if (error) throw new Error(`Loading papers from Supabase failed: ${error.message}`);
    rows.push(...(data as Row[]));
    if (data.length < PAGE_SIZE) return rows;
  }
}

function catalog(rows: Row[]) {
  const ofKind = (kind: Row["kind"]) => rows.filter((r) => r.kind === kind).map((r) => r.data);
  const qualifierMocks = ofKind("mock");
  const endTermPapers = ofKind("end_term");
  /** Every qualifier paper: full mocks and single-subject PYQs. */
  const allQualifierPapers = [...qualifierMocks, ...ofKind("qualifier_pyq")];

  const getQualifierMock = (slug: string) => allQualifierPapers.find((m) => m.slug === slug);

  /** The paper to suggest after this one: mock after mock, same-course PYQ after PYQ. */
  function nextQualifierPaper(mock: QualifierMock) {
    const group = isSingleSubject(mock)
      ? allQualifierPapers.filter((m) => isSingleSubject(m) && m.sections[0].subjectSlug === mock.sections[0].subjectSlug)
      : qualifierMocks;
    const next = group[(group.findIndex((m) => m.slug === mock.slug) + 1) % group.length];
    return next && next.slug !== mock.slug ? { title: next.title, href: paperHref(next) } : undefined;
  }

  /** Qualifier previous-year papers grouped by course, in exam order. Courses without papers are left out. */
  const pyqGroups = QUALIFIER_SUBJECTS.map((subjectSlug) => ({
    subjectSlug,
    papers: allQualifierPapers.filter((m) => isSingleSubject(m) && m.sections[0].subjectSlug === subjectSlug),
  })).filter((g) => g.papers.length > 0);

  const getEndTermPaper = (slug: string) => endTermPapers.find((p) => p.slug === slug);

  const endTermPapersFor = (subjectSlug: string) => endTermPapers.filter((p) => p.sections[0].subjectSlug === subjectSlug);

  /** The next paper of the same course, for the "take another paper" button on the result page. */
  function nextEndTermPaper(mock: QualifierMock) {
    const same = endTermPapersFor(mock.sections[0].subjectSlug);
    const next = same[(same.findIndex((p) => p.slug === mock.slug) + 1) % same.length];
    return next && next.slug !== mock.slug ? { title: next.title, href: paperHref(next) } : undefined;
  }

  return {
    qualifierMocks,
    allQualifierPapers,
    getQualifierMock,
    nextQualifierPaper,
    pyqGroups,
    endTermPapers,
    getEndTermPaper,
    endTermPapersFor,
    nextEndTermPaper,
  };
}

export type Papers = ReturnType<typeof catalog>;

let cached: { at: number; papers: Promise<Papers> } | undefined;

/** All papers, loaded once per server process and refreshed every REFRESH_SECONDS. */
export function getPapers(): Promise<Papers> {
  if (!cached || Date.now() - cached.at > REFRESH_SECONDS * 1000) {
    const papers = fetchRows().then(catalog);
    const entry = { at: Date.now(), papers };
    cached = entry;
    // Don't keep a failed load: the next request tries again.
    papers.catch(() => {
      if (cached === entry) cached = undefined;
    });
  }
  return cached.papers;
}
