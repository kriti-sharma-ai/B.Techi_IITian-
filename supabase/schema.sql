-- BTechi — Supabase / Postgres schema (Phase 1 + Phase 2 tables).
-- Mirrors src/lib/types.ts. Run in the Supabase SQL editor, then replace the
-- seed reads in src/lib/content.ts and the localStorage slices in
-- src/lib/store.ts with queries against these tables.
-- Then run 0002_user_state_and_papers.sql.

create extension if not exists pg_trgm;

-- ───────────── Enums ─────────────
create type user_role      as enum ('student', 'contributor', 'moderator', 'admin', 'super_admin');
create type content_status as enum ('draft', 'pending', 'approved', 'published', 'rejected', 'archived');
create type quality_flag   as enum ('verified', 'needs_review', 'outdated');
create type question_type  as enum ('mcq', 'multi', 'truefalse', 'fill', 'numerical', 'short', 'case_study', 'descriptive');
create type difficulty     as enum ('Easy', 'Medium', 'Hard');
create type resource_kind  as enum ('note', 'video', 'book', 'question', 'pyq', 'topic');

-- ───────────── Users ─────────────
create table profiles (
  id          uuid primary key references auth.users on delete cascade,
  name        text not null,
  university  text,
  program_id  uuid,
  level       text,  -- foundation | diploma | degree
  interests   text[] default '{}',
  role        user_role not null default 'student',
  created_at  timestamptz not null default now()
);

-- Helper used by every policy below.
create or replace function has_role(min user_role) returns boolean
language sql stable security definer set search_path = public as $$
  select coalesce((select role >= min from profiles where id = auth.uid()), false)
$$;

-- ───────────── Academic hierarchy ─────────────
create table universities (
  id   uuid primary key default gen_random_uuid(),
  slug text unique not null,
  name text not null
);

create table programs (
  id            uuid primary key default gen_random_uuid(),
  university_id uuid references universities on delete set null,
  slug          text unique not null,
  name          text not null,
  degree        text not null,
  tagline       text,
  description   text,
  accent        text not null default 'yellow',
  total_credits int,
  max_years     int
);

-- IITM BS is organised by level (Foundation, Diploma, Degree) and course groups.
create table levels (
  id         uuid primary key default gen_random_uuid(),
  program_id uuid not null references programs on delete cascade,
  slug       text not null,
  name       text not null,
  position   int not null,
  credits    int not null,
  exit_award text,
  unique (program_id, slug)
);

create table course_groups (
  id       uuid primary key default gen_random_uuid(),
  level_id uuid not null references levels on delete cascade,
  slug     text not null,
  name     text not null,
  credits  int,
  unique (level_id, slug)
);

alter table profiles add constraint profiles_program_fk foreign key (program_id) references programs on delete set null;

create table subjects (
  id          uuid primary key default gen_random_uuid(),
  program_id  uuid not null references programs on delete cascade,
  level_id    uuid not null references levels on delete restrict,
  group_id    uuid references course_groups on delete set null,
  code        text unique,          -- e.g. BSMA1001; null for some electives
  kind        text not null default 'course' check (kind in ('course', 'project')),
  prerequisites text,
  slug        text unique not null,
  name        text not null,
  credits     int not null default 0,
  description text,
  status      content_status not null default 'published'
);
create index on subjects (program_id, level_id);

create table units (
  id         uuid primary key default gen_random_uuid(),
  subject_id uuid not null references subjects on delete cascade,
  number     int not null,
  title      text not null,
  unique (subject_id, number)
);

create table topics (
  id       uuid primary key default gen_random_uuid(),
  unit_id  uuid not null references units on delete cascade,
  position int not null,
  slug     text not null,
  title    text not null,
  summary  text,
  minutes  int default 30
);
create index on topics (unit_id, position);

-- ───────────── Resources ─────────────
-- One row per resource; type-specific details live in the child tables.
-- Large files go to Storage — only the path/size/type is stored here.

-- array_to_string is only STABLE, which generated columns reject; this wrapper
-- is safe to mark IMMUTABLE because the separator is fixed.
create or replace function tags_to_text(tags text[]) returns text
language sql immutable set search_path = '' as $$ select array_to_string(tags, ' ') $$;

create table resources (
  id           uuid primary key default gen_random_uuid(),
  kind         resource_kind not null,
  title        text not null,
  description  text,
  subject_id   uuid not null references subjects on delete cascade,
  unit_id      uuid references units on delete set null,
  topic_id     uuid references topics on delete set null,
  author       text,
  tags         text[] default '{}',
  visibility   text not null default 'public' check (visibility in ('public', 'registered', 'private')),
  status       content_status not null default 'draft',
  quality      quality_flag not null default 'needs_review',
  file_path    text,            -- storage object path (bucket: resources)
  file_size    bigint check (file_size <= 26214400),  -- 25 MB
  file_type    text,
  external_url text,
  created_by   uuid references profiles on delete set null,
  reviewed_by  uuid references profiles on delete set null,
  created_at   timestamptz not null default now(),
  updated_at   timestamptz not null default now(),
  search       tsvector generated always as (
    to_tsvector('english', coalesce(title, '') || ' ' || coalesce(description, '') || ' ' || coalesce(tags_to_text(tags), ''))
  ) stored
);
create index on resources using gin (search);
create index on resources (subject_id, kind, status);

create table notes  (resource_id uuid primary key references resources on delete cascade, note_kind text, pages int);
create table videos (resource_id uuid primary key references resources on delete cascade, youtube_id text, duration text, level text, channel text);
create table books  (
  resource_id     uuid primary key references resources on delete cascade,
  authors         text[] not null,
  edition         text,
  publisher       text,
  year            int,
  isbn            text,
  recommended_for text,
  why             text,
  chapters        text[] default '{}',
  free            boolean not null default false
);
create table pyqs (
  resource_id  uuid primary key references resources on delete cascade,
  year         int not null,
  term         text not null check (term in ('January', 'May', 'September')),
  exam         text not null check (exam in ('Quiz 1', 'Quiz 2', 'End Term')),
  marks        int,
  duration_min int
);
-- Topic tags per paper — powers "most repeated topics".
create table pyq_topics (pyq_id uuid references pyqs on delete cascade, topic_id uuid references topics on delete cascade, primary key (pyq_id, topic_id));

create table assignments (
  id         uuid primary key default gen_random_uuid(),
  subject_id uuid not null references subjects on delete cascade,
  unit_id    uuid references units on delete set null,
  title      text not null,
  description text,
  due        date
);

-- ───────────── Questions ─────────────
create table questions (
  id          uuid primary key default gen_random_uuid(),
  subject_id  uuid not null references subjects on delete cascade,
  unit_id     uuid references units on delete set null,
  topic_id    uuid references topics on delete set null,
  pyq_id      uuid references pyqs on delete set null,
  type        question_type not null,
  difficulty  difficulty not null default 'Medium',
  prompt      text not null,
  context     text,
  answer      jsonb not null,      -- index | indices | accepted strings | number
  tolerance   numeric,
  explanation text not null check (length(explanation) > 0),  -- every answer needs a "Why?"
  status      content_status not null default 'draft',
  created_by  uuid references profiles on delete set null,
  ai_generated boolean not null default false  -- Phase 3: must pass review before publishing
);
create table question_options (
  question_id uuid references questions on delete cascade,
  position    int not null,
  body        text not null,
  primary key (question_id, position)
);

-- ───────────── Student activity ─────────────
create table question_attempts (
  id          bigint generated always as identity primary key,
  user_id     uuid not null references profiles on delete cascade,
  question_id uuid not null references questions on delete cascade,
  response    jsonb,
  correct     boolean,
  created_at  timestamptz not null default now()
);
create index on question_attempts (user_id, created_at desc);

create table progress (
  user_id      uuid references profiles on delete cascade,
  topic_id     uuid references topics on delete cascade,
  completed_at timestamptz not null default now(),
  primary key (user_id, topic_id)
);

create table bookmarks (
  user_id    uuid references profiles on delete cascade,
  kind       resource_kind not null,
  target_id  uuid not null,
  created_at timestamptz not null default now(),
  primary key (user_id, kind, target_id)
);

create table downloads (
  id          bigint generated always as identity primary key,
  user_id     uuid references profiles on delete set null,
  resource_id uuid not null references resources on delete cascade,
  created_at  timestamptz not null default now()
);
create index on downloads (resource_id);

create table reports (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid references profiles on delete set null,
  kind        resource_kind not null,
  target_id   uuid not null,
  reason      text not null check (reason in ('Wrong syllabus','Incorrect answer','Broken download','Poor quality','Duplicate','Outdated','Copyright issue','Other')),
  details     text check (length(details) <= 1000),
  status      text not null default 'open' check (status in ('open', 'resolved')),
  created_at  timestamptz not null default now()
);

create table notifications (
  id         bigint generated always as identity primary key,
  user_id    uuid not null references profiles on delete cascade,
  body       text not null,
  href       text,
  read_at    timestamptz,
  created_at timestamptz not null default now()
);

-- ───────────── Row-level security ─────────────
alter table profiles          enable row level security;
alter table universities      enable row level security;
alter table programs          enable row level security;
alter table levels            enable row level security;
alter table course_groups     enable row level security;
alter table subjects          enable row level security;
alter table units             enable row level security;
alter table topics            enable row level security;
alter table resources         enable row level security;
alter table notes             enable row level security;
alter table videos            enable row level security;
alter table books             enable row level security;
alter table pyqs              enable row level security;
alter table pyq_topics        enable row level security;
alter table assignments       enable row level security;
alter table questions         enable row level security;
alter table question_options  enable row level security;
alter table question_attempts enable row level security;
alter table progress          enable row level security;
alter table bookmarks         enable row level security;
alter table downloads         enable row level security;
alter table reports           enable row level security;
alter table notifications     enable row level security;

-- Curriculum: public read, moderators+ write.
do $$ declare t text; begin
  foreach t in array array['universities','programs','levels','course_groups','subjects','units','topics','assignments','pyq_topics'] loop
    execute format('create policy "%1$s read" on %1$I for select using (true)', t);
    execute format('create policy "%1$s write" on %1$I for all using (has_role(''moderator'')) with check (has_role(''moderator''))', t);
  end loop;
end $$;

-- Resources: published+public for everyone, +registered for signed-in users,
-- everything for moderators. Contributors may create drafts/pending only and
-- edit their own unpublished rows (the approval workflow).
create policy "resources read" on resources for select using (
  (status = 'published' and (visibility = 'public' or (visibility = 'registered' and auth.uid() is not null)))
  or has_role('moderator')
  or created_by = auth.uid()
);
create policy "resources contribute" on resources for insert
  with check (has_role('contributor') and created_by = auth.uid() and (status in ('draft', 'pending') or has_role('moderator')));
create policy "resources edit own draft" on resources for update
  using (created_by = auth.uid() and status in ('draft', 'pending', 'rejected'))
  with check (status in ('draft', 'pending'));
create policy "resources moderate" on resources for all using (has_role('moderator')) with check (has_role('moderator'));

do $$ declare t text; begin
  foreach t in array array['notes','videos','books','pyqs'] loop
    execute format('create policy "%1$s read" on %1$I for select using (exists (select 1 from resources r where r.id = resource_id))', t);
    execute format('create policy "%1$s write" on %1$I for all using (has_role(''contributor'')) with check (has_role(''contributor''))', t);
  end loop;
end $$;

create policy "questions read" on questions for select using (status = 'published' or has_role('moderator') or created_by = auth.uid());
create policy "questions contribute" on questions for insert with check (has_role('contributor') and created_by = auth.uid() and status in ('draft', 'pending'));
create policy "questions moderate" on questions for all using (has_role('moderator')) with check (has_role('moderator'));
create policy "options read" on question_options for select using (exists (select 1 from questions q where q.id = question_id));
create policy "options write" on question_options for all using (has_role('contributor')) with check (has_role('contributor'));

-- Personal data: owner only (admins can read for analytics).
create policy "own profile" on profiles for select using (id = auth.uid() or has_role('admin'));
create policy "update own profile" on profiles for update using (id = auth.uid()) with check (id = auth.uid());
-- Students cannot self-promote: the role column is only writable server-side
-- (service role) — expose role changes through an admin-only server action.
-- (A column-level revoke is not enough while a table-level grant exists.)
revoke update on profiles from authenticated, anon;
grant update (name, university, program_id, level, interests) on profiles to authenticated;

do $$ declare t text; begin
  foreach t in array array['question_attempts','progress','bookmarks','notifications'] loop
    execute format('create policy "%1$s own" on %1$I for all using (user_id = auth.uid()) with check (user_id = auth.uid())', t);
    execute format('create policy "%1$s admin read" on %1$I for select using (has_role(''admin''))', t);
  end loop;
end $$;

create policy "log own download" on downloads for insert with check (user_id = auth.uid());
create policy "read downloads" on downloads for select using (user_id = auth.uid() or has_role('admin'));
create policy "file report" on reports for insert with check (user_id = auth.uid());
create policy "read reports" on reports for select using (user_id = auth.uid() or has_role('moderator'));
create policy "resolve reports" on reports for update using (has_role('moderator'));

-- ───────────── Analytics views ─────────────
create view resource_download_counts with (security_invoker = true) as
  select r.id, r.title, r.subject_id, count(d.id) as downloads
  from resources r left join downloads d on d.resource_id = r.id
  group by r.id;

create view pyq_topic_frequency with (security_invoker = true) as
  select s.id as subject_id, t.id as topic_id, t.title,
         count(*)::numeric / nullif((select count(*) from pyqs p2 join resources r2 on r2.id = p2.resource_id where r2.subject_id = s.id), 0) as share
  from pyq_topics pt
  join topics t on t.id = pt.topic_id
  join units u on u.id = t.unit_id
  join subjects s on s.id = u.subject_id
  group by s.id, t.id;

-- Storage: create a private bucket "resources"; serve files via short-lived
-- signed URLs from a server route that also inserts into `downloads`.

-- ───────────── Auto-create a profile on sign-up ─────────────
-- Every user-owned table references profiles, so the row must exist before the
-- first saved attempt.
create or replace function handle_new_user() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  insert into profiles (id, name, university, level)
  values (
    new.id,
    coalesce(new.raw_user_meta_data->>'name', new.raw_user_meta_data->>'full_name', split_part(new.email, '@', 1)),
    new.raw_user_meta_data->>'university',
    new.raw_user_meta_data->>'level'
  );
  return new;
end $$;

create trigger on_auth_user_created
  after insert on auth.users
  for each row execute function handle_new_user();
