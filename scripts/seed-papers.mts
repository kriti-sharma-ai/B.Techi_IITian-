// Copies every paper in src/lib/data into the Supabase `papers` table.
// Run: npm run seed:papers (needs SUPABASE_SERVICE_ROLE_KEY in .env.local).
// Safe to re-run: rows are upserted by slug, and rows whose paper no longer
// exists in the code are removed. Edits made in Supabase are overwritten.

import { createClient } from "@supabase/supabase-js";
import { qualifierMocks } from "../src/lib/data/qualifier";
import { mathsPyqPapers } from "../src/lib/data/maths-pyqs";
import { statsPyqPapers } from "../src/lib/data/stats-pyqs";
import { ctPyqPapers } from "../src/lib/data/ct-pyqs";
import { englishPyqPapers } from "../src/lib/data/english-pyqs";
import { endTermPapers } from "../src/lib/data/end-term";
import type { QualifierMock } from "../src/lib/types";

const url = process.env.NEXT_PUBLIC_SUPABASE_URL;
const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
if (!url || !serviceKey) {
  console.error("Set NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in .env.local first.");
  process.exit(1);
}

// The service role bypasses RLS, so this key must never reach the browser.
const db = createClient(url, serviceKey, { auth: { persistSession: false } });

type Kind = "mock" | "qualifier_pyq" | "end_term";
const groups: [Kind, QualifierMock[]][] = [
  ["mock", qualifierMocks],
  ["qualifier_pyq", [...mathsPyqPapers, ...statsPyqPapers, ...ctPyqPapers, ...englishPyqPapers]],
  ["end_term", endTermPapers],
];

const rows = groups.flatMap(([kind, papers]) =>
  papers.map((p, position) => ({
    slug: p.slug,
    kind,
    subject_slug: p.sections.length === 1 ? p.sections[0].subjectSlug : null,
    title: p.title,
    position,
    data: p,
    updated_at: new Date().toISOString(),
  })),
);

const dupes = rows.map((r) => r.slug).filter((s, i, all) => all.indexOf(s) !== i);
if (dupes.length) {
  console.error("Duplicate paper slugs:", [...new Set(dupes)].join(", "));
  process.exit(1);
}

// Postgres text and jsonb reject NUL, which PDF extraction sometimes leaves for unmapped symbols.
const nul = rows.flatMap((r) =>
  r.data.sections.flatMap((s) => s.questions.filter((q) => JSON.stringify(q).includes("\\u0000")).map((q) => q.id)),
);
if (nul.length) {
  console.error("NUL characters (\\u0000) in questions:", nul.join(", "));
  process.exit(1);
}

const BATCH = 25;
for (let i = 0; i < rows.length; i += BATCH) {
  const { error } = await db.from("papers").upsert(rows.slice(i, i + BATCH));
  if (error) {
    console.error(`Upload failed at paper ${i + 1}:`, error.message);
    process.exit(1);
  }
  console.log(`Uploaded ${Math.min(i + BATCH, rows.length)}/${rows.length}`);
}

const { data: existing, error: listError } = await db.from("papers").select("slug");
if (listError) throw listError;
const keep = new Set(rows.map((r) => r.slug));
const stale = existing.map((r) => r.slug).filter((s) => !keep.has(s));
if (stale.length) {
  const { error } = await db.from("papers").delete().in("slug", stale);
  if (error) throw error;
  console.log(`Removed ${stale.length} papers no longer in the code.`);
}

const questions = rows.reduce((n, r) => n + r.data.sections.reduce((m, s) => m + s.questions.length, 0), 0);
for (const [kind] of groups) console.log(`${kind}: ${rows.filter((r) => r.kind === kind).length} papers`);
console.log(`Done: ${rows.length} papers, ${questions} questions.`);
