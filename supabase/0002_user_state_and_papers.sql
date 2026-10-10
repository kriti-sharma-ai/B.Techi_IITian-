-- Run after schema.sql, in the Supabase SQL editor.

-- ───────────── Student progress ─────────────
-- One row per student holding the personal slices of src/lib/store.ts
-- (bookmarks, completed topics, attempts, test reports...). Synced by
-- src/lib/supabase/sync.ts; guests keep the same data in localStorage.
create table user_state (
  user_id    uuid primary key default auth.uid() references auth.users on delete cascade,
  data       jsonb not null default '{}'::jsonb check (pg_column_size(data) < 2000000),
  updated_at timestamptz not null default now()
);

alter table user_state enable row level security;
create policy "user_state own" on user_state for all using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "user_state admin read" on user_state for select using (has_role('admin'));

-- ───────────── Papers ─────────────
-- Qualifier mocks, qualifier PYQs and End Term PYQs, each stored whole in the
-- shape of QualifierMock (src/lib/types.ts): sections → questions with options,
-- answer and explanation. Filled by `npm run seed:papers`.
create table papers (
  slug         text primary key,
  kind         text not null check (kind in ('mock', 'qualifier_pyq', 'end_term')),
  subject_slug text,           -- null for multi-course mocks
  title        text not null,
  position     int not null,   -- order within its kind
  data         jsonb not null,
  updated_at   timestamptz not null default now()
);
create index on papers (kind, subject_slug, position);

alter table papers enable row level security;
create policy "papers read" on papers for select using (true);
create policy "papers write" on papers for all using (has_role('moderator')) with check (has_role('moderator'));

-- One row per question, for browsing and checking answers in the Table Editor.
create view paper_questions with (security_invoker = true) as
  select p.slug                        as paper_slug,
         p.kind,
         s.section->>'subjectSlug'     as subject_slug,
         q.n                           as question_no,
         q.question->>'id'             as question_id,
         q.question->>'type'           as type,
         (q.question->>'marks')::numeric as marks,
         q.question->>'prompt'         as prompt,
         q.question->'options'         as options,
         q.question->'answer'          as answer,
         q.question->>'explanation'    as explanation
  from papers p
  cross join lateral jsonb_array_elements(p.data->'sections') s(section)
  cross join lateral jsonb_array_elements(s.section->'questions') with ordinality q(question, n);
