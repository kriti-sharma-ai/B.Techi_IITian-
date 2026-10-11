-- Run after 0002_user_state_and_papers.sql, in the Supabase SQL editor.
-- Connects the admin CMS (/admin) to the database:
--   · weeks, topics, notes, videos, books and practice questions are written by
--     staff and read by the site through published_content();
--   · courses defined in src/lib/data/curriculum.ts get a `subjects` row the first
--     time the CMS needs one (from_code = true); courses created in the CMS live
--     only here and start as drafts;
--   · uploaded files go to the private Storage bucket `resources` and are served
--     through short-lived signed URLs (src/app/api/files/[id]/route.ts);
--   · reports, downloads, analytics and role changes go through the policies and
--     functions below.
-- Safe to re-run. Finally, make yourself the first super admin (end of file).

-- ───────────── Curriculum ─────────────
alter table subjects add column if not exists from_code boolean not null default false;
alter table subjects add column if not exists created_at timestamptz not null default now();
create unique index if not exists topics_unit_slug_key on topics (unit_id, slug);

-- The program, its levels and groups, and every course in src/lib/data/curriculum.ts
-- (generated from that file). Courses added to the code later get their row from
-- the CMS the first time a moderator edits them.
insert into programs (slug, name, degree, tagline, description, accent, total_credits, max_years) values ('iitm-bs', 'IIT Madras BS', 'BS in Management and Data Science', 'Management & Data Science', 'Every course of the IIT Madras BS in Management and Data Science, organised level by level: Foundation, Diploma and BS Degree.', 'yellow', 142, 8)
on conflict (slug) do update set name = excluded.name, degree = excluded.degree, tagline = excluded.tagline, description = excluded.description, accent = excluded.accent, total_credits = excluded.total_credits, max_years = excluded.max_years;
insert into levels (program_id, slug, name, position, credits, exit_award) select id, 'foundation', 'Foundation Level', 1, 32, 'Foundation Certificate from IITM CODE' from programs where slug = 'iitm-bs'
on conflict (program_id, slug) do update set name = excluded.name, position = excluded.position, credits = excluded.credits, exit_award = excluded.exit_award;
insert into levels (program_id, slug, name, position, credits, exit_award) select id, 'diploma', 'Diploma Level', 2, 60, 'Diploma in Data Analytics for Business' from programs where slug = 'iitm-bs'
on conflict (program_id, slug) do update set name = excluded.name, position = excluded.position, credits = excluded.credits, exit_award = excluded.exit_award;
insert into course_groups (level_id, slug, name, credits) select l.id, 'data-analytics-for-business', 'Diploma in Data Analytics for Business', 36 from levels l join programs p on p.id = l.program_id where p.slug = 'iitm-bs' and l.slug = 'diploma'
on conflict (level_id, slug) do update set name = excluded.name, credits = excluded.credits;
insert into course_groups (level_id, slug, name, credits) select l.id, 'other-diploma-courses', 'Other Diploma Level courses', 24 from levels l join programs p on p.id = l.program_id where p.slug = 'iitm-bs' and l.slug = 'diploma'
on conflict (level_id, slug) do update set name = excluded.name, credits = excluded.credits;
insert into levels (program_id, slug, name, position, credits, exit_award) select id, 'degree', 'BS Degree Level', 3, 50, 'BS in Management and Data Science' from programs where slug = 'iitm-bs'
on conflict (program_id, slug) do update set name = excluded.name, position = excluded.position, credits = excluded.credits, exit_award = excluded.exit_award;
insert into course_groups (level_id, slug, name, credits) select l.id, 'core', 'Core courses', 24 from levels l join programs p on p.id = l.program_id where p.slug = 'iitm-bs' and l.slug = 'degree'
on conflict (level_id, slug) do update set name = excluded.name, credits = excluded.credits;
insert into course_groups (level_id, slug, name, credits) select l.id, 'electives', 'Elective courses', 26 from levels l join programs p on p.id = l.program_id where p.slug = 'iitm-bs' and l.slug = 'degree'
on conflict (level_id, slug) do update set name = excluded.name, credits = excluded.credits;
insert into subjects (program_id, level_id, group_id, slug, name, code, kind, credits, prerequisites, status, from_code)
select p.id, l.id, g.id, v.slug, v.name, v.code, v.kind, v.credits, v.prerequisites, 'published', true
from (values
  ('iitm-bs', 'foundation', null, 'mathematics-for-data-science-1', 'Mathematics for Data Science I', 'BSMA1001', 'course', 4, 'None'),
  ('iitm-bs', 'foundation', null, 'statistics-for-data-science-1', 'Statistics for Data Science I', 'BSMA1002', 'course', 4, 'None'),
  ('iitm-bs', 'foundation', null, 'computational-thinking', 'Computational Thinking', 'BSCS1001', 'course', 4, 'None'),
  ('iitm-bs', 'foundation', null, 'english-1', 'English I', 'BSHS1001', 'course', 4, 'None'),
  ('iitm-bs', 'foundation', null, 'principles-of-economics', 'Principles of Economics', 'BSMS1201', 'course', 4, 'None'),
  ('iitm-bs', 'foundation', null, 'financial-accounting', 'Financial Accounting', 'BSMS1202', 'course', 4, 'None'),
  ('iitm-bs', 'foundation', null, 'business-statistics', 'Business Statistics', 'BSMS1203', 'course', 4, 'None'),
  ('iitm-bs', 'foundation', null, 'management-thought-and-practice', 'Management Thought and Practice', 'BSMS1204', 'course', 4, 'None'),
  ('iitm-bs', 'diploma', 'data-analytics-for-business', 'python-for-data-analytics', 'Python for Data Analytics', 'BSMS2201', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'data-analytics-for-business', 'data-management', 'Data Management', 'BSMS2202', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'data-analytics-for-business', 'analysis-of-economic-data', 'Analysis of Economic Data', 'BSMS2203', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'data-analytics-for-business', 'marketing-analytics', 'Marketing Analytics', 'BSMS3201', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'data-analytics-for-business', 'hr-analytics', 'HR Analytics', 'BSMS3202', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'data-analytics-for-business', 'financial-analytics', 'Financial Analytics', 'BSMS3203', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'data-analytics-for-business', 'operations-management', 'Operations Management', 'BSMS2204', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'data-analytics-for-business', 'supply-chain-analytics', 'Supply Chain Analytics', 'BSMS3204', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'data-analytics-for-business', 'business-management-project', 'Business Management Project', 'BSMS3901', 'project', 2, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'data-analytics-for-business', 'business-analytics-project', 'Business Analytics Project', 'BSMS3902', 'project', 2, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'other-diploma-courses', 'corporate-finance', 'Corporate Finance', 'BSMS2205', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'other-diploma-courses', 'organizational-behaviour', 'Organizational Behaviour', 'BSMS2206', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'other-diploma-courses', 'money-banking-and-financial-markets', 'Money, Banking and Financial Markets', 'BSMS3205', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'other-diploma-courses', 'marketing-management', 'Marketing Management', 'BSMS2207', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'other-diploma-courses', 'macroeconomics', 'Macroeconomics', 'BSMS2208', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'diploma', 'other-diploma-courses', 'managerial-economics', 'Managerial Economics', 'BSMS3206', 'course', 4, 'Foundation Level'),
  ('iitm-bs', 'degree', 'core', 'strategies-for-professional-growth', 'Strategies for Professional Growth', 'BSGN3001', 'course', 4, 'Diploma Level'),
  ('iitm-bs', 'degree', 'core', 'genai-for-business', 'GenAI for Business', 'BSMS3207', 'course', 4, 'Diploma Level'),
  ('iitm-bs', 'degree', 'core', 'digital-business', 'Digital Business', 'BSMS3208', 'course', 4, 'Diploma Level'),
  ('iitm-bs', 'degree', 'core', 'logistics-and-supply-chain-management', 'Logistics and Supply Chain Management', 'BSMS3209', 'course', 4, 'Diploma Level'),
  ('iitm-bs', 'degree', 'core', 'applied-time-series-analysis', 'Applied Time Series Analysis', 'BSMS4201', 'course', 4, 'Diploma Level'),
  ('iitm-bs', 'degree', 'core', 'market-intelligence', 'Market Intelligence', 'BSMS4202', 'course', 4, 'Diploma Level'),
  ('iitm-bs', 'degree', 'electives', 'introduction-to-game-theory', 'Introduction to Game Theory', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'public-finance', 'Public Finance', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'economics-of-ai', 'Economics of AI', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'industrial-organisation', 'Industrial Organisation', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'research-design-for-social-data-science', 'Research Design for Social Data Science', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'project-finance', 'Project Finance', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'corporate-valuation', 'Corporate Valuation', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'financial-forensics', 'Financial Forensics', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'alm-and-risk', 'ALM and Risk', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'capital-markets-and-derivatives', 'Capital Markets and Derivatives', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'digital-marketing', 'Digital Marketing', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'brand-management', 'Brand Management', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'consumer-behavior', 'Consumer Behavior', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'design-thinking', 'Design Thinking', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'computational-optimization', 'Computational Optimization', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'business-research-methods', 'Business Research Methods', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'sustainable-business-models', 'Sustainable Business Models', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'digital-business-strategy-and-models', 'Digital Business Strategy and Models', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'family-business', 'Family Business', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'social-media-computing', 'Social Media Computing', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'performance-management', 'Performance Management', null, 'course', 4, 'Core courses'),
  ('iitm-bs', 'degree', 'electives', 'responsible-ai', 'Responsible AI', null, 'course', 4, 'Core courses')
) as v (program, level, grp, slug, name, code, kind, credits, prerequisites)
join programs p on p.slug = v.program
join levels l on l.program_id = p.id and l.slug = v.level
left join course_groups g on g.level_id = l.id and g.slug = v.grp
on conflict (slug) do update set program_id = excluded.program_id, level_id = excluded.level_id, group_id = excluded.group_id, name = excluded.name,
  code = excluded.code, kind = excluded.kind, credits = excluded.credits, prerequisites = excluded.prerequisites, from_code = true;

-- ───────────── Resources & questions ─────────────
alter table resources add column if not exists download_count int not null default 0;
alter table resources add column if not exists review_note text check (length(review_note) <= 1000);
alter table resources add column if not exists published_at timestamptz;

alter table questions add column if not exists review_note text check (length(review_note) <= 1000);
alter table questions add column if not exists source text check (length(source) <= 200);
alter table questions add column if not exists created_at timestamptz not null default now();
alter table questions add column if not exists updated_at timestamptz not null default now();

-- True when the current user may change this resource: moderators always,
-- contributors only their own rows that are not published yet.
create or replace function can_edit_resource(rid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select has_role('moderator') or exists (
    select 1 from resources where id = rid and created_by = auth.uid() and status in ('draft', 'pending', 'rejected')
  )
$$;

create or replace function can_edit_question(qid uuid) returns boolean
language sql stable security definer set search_path = public as $$
  select has_role('moderator') or exists (
    select 1 from questions where id = qid and created_by = auth.uid() and status in ('draft', 'pending', 'rejected')
  )
$$;

-- Contributors: keep ownership when editing, and may delete their unpublished rows.
drop policy if exists "resources edit own draft" on resources;
create policy "resources edit own draft" on resources for update
  using (created_by = auth.uid() and status in ('draft', 'pending', 'rejected'))
  with check (created_by = auth.uid() and status in ('draft', 'pending'));
drop policy if exists "resources delete own draft" on resources;
create policy "resources delete own draft" on resources for delete
  using (created_by = auth.uid() and status in ('draft', 'pending', 'rejected'));

drop policy if exists "questions edit own draft" on questions;
create policy "questions edit own draft" on questions for update
  using (created_by = auth.uid() and status in ('draft', 'pending', 'rejected'))
  with check (created_by = auth.uid() and status in ('draft', 'pending'));
drop policy if exists "questions delete own draft" on questions;
create policy "questions delete own draft" on questions for delete
  using (created_by = auth.uid() and status in ('draft', 'pending', 'rejected'));

-- Detail rows follow their parent (schema.sql let any contributor write any of them).
do $$ declare t text; begin
  foreach t in array array['notes', 'videos', 'books'] loop
    execute format('drop policy if exists "%1$s write" on %1$I', t);
    execute format('create policy "%1$s write" on %1$I for all using (can_edit_resource(resource_id)) with check (can_edit_resource(resource_id))', t);
  end loop;
end $$;
drop policy if exists "options write" on question_options;
create policy "options write" on question_options for all using (can_edit_question(question_id)) with check (can_edit_question(question_id));

-- Staff can see each other's names (review queue, "uploaded by").
drop policy if exists "staff read staff" on profiles;
create policy "staff read staff" on profiles for select using (role >= 'contributor' and has_role('contributor'));

-- ───────────── Reports ─────────────
-- Reports point at anything with a page: notes (uuid), papers (slug), topics, skills…
alter type resource_kind add value if not exists 'paper';
alter type resource_kind add value if not exists 'skill';
alter table reports alter column target_id type text;
alter table reports add column if not exists title text not null default '' check (length(title) <= 300);
alter table reports add column if not exists href text check (length(href) <= 500);
alter table reports add column if not exists resolved_by uuid references profiles on delete set null;
alter table reports add column if not exists resolved_at timestamptz;
create index if not exists reports_status_idx on reports (status, created_at desc);

-- Guests may report too (user_id null); signed-in users only as themselves.
alter table reports alter column user_id set default auth.uid();
drop policy if exists "file report" on reports;
create policy "file report" on reports for insert with check (user_id is not distinct from auth.uid() and status = 'open');

-- ───────────── Downloads ─────────────
-- Logged by the file route for anyone who may open the file; the count shown
-- on the site is kept on the resource so it is public without exposing the log.
alter table downloads alter column user_id set default auth.uid();
drop policy if exists "log own download" on downloads;
drop policy if exists "log download" on downloads;
create policy "log download" on downloads for insert with check (
  user_id is not distinct from auth.uid()
  and exists (select 1 from resources r where r.id = resource_id and r.status = 'published')
);
create index if not exists downloads_created_idx on downloads (created_at desc);

create or replace function count_download() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  update resources set download_count = download_count + 1 where id = new.resource_id;
  return new;
end $$;
drop trigger if exists downloads_count on downloads;
create trigger downloads_count after insert on downloads for each row execute function count_download();

-- ───────────── Storage ─────────────
insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'resources', 'resources', false, 26214400,
  array['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/png', 'image/jpeg', 'image/webp']
)
on conflict (id) do update set public = false, file_size_limit = excluded.file_size_limit, allowed_mime_types = excluded.allowed_mime_types;

-- Staff upload into a folder named after their user id. Reading (which is what
-- signing a URL needs) follows the resource: published files for whoever may
-- see them, everything for moderators, own uploads for their uploader.
drop policy if exists "resource files upload" on storage.objects;
create policy "resource files upload" on storage.objects for insert to authenticated with check (
  bucket_id = 'resources' and public.has_role('contributor') and (storage.foldername(name))[1] = auth.uid()::text
);
drop policy if exists "resource files read" on storage.objects;
create policy "resource files read" on storage.objects for select using (
  bucket_id = 'resources' and (
    public.has_role('moderator')
    or (storage.foldername(name))[1] = auth.uid()::text
    or exists (
      select 1 from public.resources r
      where r.file_path = objects.name and r.status = 'published'
        and (r.visibility = 'public' or (r.visibility = 'registered' and auth.uid() is not null))
    )
  )
);
drop policy if exists "resource files delete" on storage.objects;
create policy "resource files delete" on storage.objects for delete to authenticated using (
  bucket_id = 'resources' and (public.has_role('moderator') or (storage.foldername(name))[1] = auth.uid()::text)
);

-- ───────────── What the site shows ─────────────
-- Everything published, in one call (src/lib/cms.ts). Security definer so
-- "signed-in only" resources are still listed for guests; their files stay
-- behind the storage policy above. File paths are never exposed.
create or replace function published_content() returns jsonb
language sql stable security definer set search_path = public as $$
  select jsonb_build_object(
    'courses', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'slug', s.slug, 'name', s.name, 'code', s.code, 'program', p.slug, 'level', l.slug, 'group', g.slug,
        'kind', s.kind, 'credits', s.credits, 'prerequisites', coalesce(s.prerequisites, ''), 'description', s.description
      ) order by l.position, s.name), '[]'::jsonb)
      from subjects s
      join programs p on p.id = s.program_id
      join levels l on l.id = s.level_id
      left join course_groups g on g.id = s.group_id
      where s.status = 'published' and not s.from_code
    ),
    'units', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'id', u.id, 'subject', s.slug, 'number', u.number, 'title', u.title,
        'topics', (
          select coalesce(jsonb_agg(jsonb_build_object(
            'slug', t.slug, 'title', t.title, 'summary', coalesce(t.summary, ''), 'minutes', coalesce(t.minutes, 30)
          ) order by t.position), '[]'::jsonb)
          from topics t where t.unit_id = u.id
        )
      ) order by s.slug, u.number), '[]'::jsonb)
      from units u join subjects s on s.id = u.subject_id
      where s.status = 'published'
    ),
    'resources', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'id', r.id, 'kind', r.kind, 'title', r.title, 'description', coalesce(r.description, ''),
        'subject', s.slug, 'unit', r.unit_id, 'topic', t.slug, 'author', r.author, 'tags', r.tags,
        'visibility', r.visibility, 'quality', r.quality, 'hasFile', r.file_path is not null,
        'fileSize', r.file_size, 'fileType', r.file_type, 'url', r.external_url,
        'downloads', r.download_count, 'updatedAt', r.updated_at,
        'note', (select to_jsonb(n) - 'resource_id' from notes n where n.resource_id = r.id),
        'video', (select to_jsonb(v) - 'resource_id' from videos v where v.resource_id = r.id),
        'book', (select to_jsonb(b) - 'resource_id' from books b where b.resource_id = r.id)
      ) order by r.published_at nulls last, r.created_at), '[]'::jsonb)
      from resources r
      join subjects s on s.id = r.subject_id
      left join topics t on t.id = r.topic_id
      where r.status = 'published' and r.visibility <> 'private' and s.status = 'published'
        and r.kind in ('note', 'video', 'book')
    ),
    'questions', (
      select coalesce(jsonb_agg(jsonb_build_object(
        'id', q.id, 'subject', s.slug, 'unit', q.unit_id, 'topic', t.slug, 'type', q.type,
        'difficulty', q.difficulty, 'prompt', q.prompt, 'context', q.context, 'answer', q.answer,
        'tolerance', q.tolerance, 'explanation', q.explanation, 'source', q.source,
        'options', (select coalesce(jsonb_agg(o.body order by o.position), '[]'::jsonb) from question_options o where o.question_id = q.id)
      ) order by q.created_at), '[]'::jsonb)
      from questions q
      join subjects s on s.id = q.subject_id
      left join topics t on t.id = q.topic_id
      where q.status = 'published' and s.status = 'published'
    )
  )
$$;
grant execute on function published_content() to anon, authenticated;

-- ───────────── Admin: users & roles ─────────────
create or replace function admin_list_users(q text default null, lim int default 50, off int default 0)
returns table (
  id uuid, name text, email text, role user_role, university text, level text,
  created_at timestamptz, last_sign_in_at timestamptz, total bigint
)
language plpgsql stable security definer set search_path = public as $$
begin
  if not has_role('admin') then
    raise exception 'Only admins can list users' using errcode = '42501';
  end if;
  return query
    select p.id, p.name, u.email::text, p.role, p.university, p.level, p.created_at, u.last_sign_in_at, count(*) over ()
    from profiles p
    join auth.users u on u.id = p.id
    where coalesce(q, '') = '' or p.name ilike '%' || q || '%' or u.email ilike '%' || q || '%'
    order by p.created_at desc
    limit least(greatest(lim, 1), 200) offset greatest(off, 0);
end $$;

-- Admins manage students, contributors and moderators; only super admins
-- grant or remove admin rights. Nobody changes their own role (no lock-outs).
create or replace function admin_set_role(target uuid, new_role user_role) returns void
language plpgsql security definer set search_path = public as $$
declare old_role user_role;
begin
  if not has_role('admin') then
    raise exception 'Only admins can change roles' using errcode = '42501';
  end if;
  if target = auth.uid() then
    raise exception 'You cannot change your own role' using errcode = '42501';
  end if;
  select p.role into old_role from profiles p where p.id = target for update;
  if not found then
    raise exception 'User not found' using errcode = 'P0002';
  end if;
  if (new_role >= 'admin' or old_role >= 'admin') and not has_role('super_admin') then
    raise exception 'Only super admins can grant or remove admin rights' using errcode = '42501';
  end if;
  update profiles set role = new_role where id = target;
end $$;

-- ───────────── Admin: analytics ─────────────
create or replace function admin_overview() returns jsonb
language plpgsql stable security definer set search_path = public as $$
begin
  if not has_role('moderator') then
    raise exception 'Staff only' using errcode = '42501';
  end if;
  return jsonb_build_object(
    'users', (select coalesce(jsonb_object_agg(x.role, x.n), '{}'::jsonb) from (select p.role, count(*) n from profiles p group by p.role) x),
    'signups', (
      select coalesce(jsonb_agg(jsonb_build_object('day', x.day, 'count', x.n) order by x.day), '[]'::jsonb)
      from (select p.created_at::date as day, count(*) n from profiles p where p.created_at >= current_date - 29 group by 1) x
    ),
    'active7', (select count(*) from user_state where updated_at >= now() - interval '7 days'),
    'active30', (select count(*) from user_state where updated_at >= now() - interval '30 days'),
    'practiceAttempts', (
      select coalesce(sum(case when jsonb_typeof(data->'attempts') = 'array' then jsonb_array_length(data->'attempts') else 0 end), 0)
      from user_state
    ),
    'paperAttempts', (
      select coalesce(jsonb_agg(jsonb_build_object('slug', x.slug, 'title', coalesce(pp.title, x.title, x.slug), 'attempts', x.n, 'avgPercent', x.avg_pct) order by x.n desc), '[]'::jsonb)
      from (
        select a->>'mockSlug' as slug, max(a->>'title') as title, count(*) n, round(avg((a->>'percent')::numeric), 1) as avg_pct
        from user_state us
        cross join lateral jsonb_array_elements(case when jsonb_typeof(us.data->'qualifierAttempts') = 'array' then us.data->'qualifierAttempts' else '[]'::jsonb end) a
        group by 1 order by 3 desc limit 10
      ) x
      left join papers pp on pp.slug = x.slug
    ),
    'paperAttemptsTotal', (
      select coalesce(sum(case when jsonb_typeof(data->'qualifierAttempts') = 'array' then jsonb_array_length(data->'qualifierAttempts') else 0 end), 0)
      from user_state
    ),
    'downloads', (select count(*) from downloads),
    'downloads30', (select count(*) from downloads where created_at >= now() - interval '30 days'),
    'topDownloads', (
      select coalesce(jsonb_agg(jsonb_build_object('id', x.id, 'title', x.title, 'kind', x.kind, 'downloads', x.download_count) order by x.download_count desc), '[]'::jsonb)
      from (select r.id, r.title, r.kind, r.download_count from resources r where r.download_count > 0 order by r.download_count desc limit 10) x
    ),
    'resources', (select coalesce(jsonb_object_agg(x.k, x.n), '{}'::jsonb) from (select r.kind || ':' || r.status as k, count(*) n from resources r group by 1) x),
    'questions', (select coalesce(jsonb_object_agg(x.status, x.n), '{}'::jsonb) from (select q.status, count(*) n from questions q group by 1) x),
    'openReports', (select count(*) from reports where status = 'open'),
    'papers', (select coalesce(jsonb_object_agg(x.kind, x.n), '{}'::jsonb) from (select p.kind, count(*) n from papers p group by 1) x)
  );
end $$;

revoke execute on function admin_list_users(text, int, int) from public, anon;
revoke execute on function admin_set_role(uuid, user_role) from public, anon;
revoke execute on function admin_overview() from public, anon;
grant execute on function admin_list_users(text, int, int) to authenticated;
grant execute on function admin_set_role(uuid, user_role) to authenticated;
grant execute on function admin_overview() to authenticated;

-- ───────────── First super admin ─────────────
-- Sign up on the site first, then put your email below, uncomment and run this
-- line once. After that, manage roles in /admin/users.
-- update profiles set role = 'super_admin' where id = (select id from auth.users where email = 'you@example.com');
