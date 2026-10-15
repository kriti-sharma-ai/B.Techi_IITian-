-- Run after 0004_quiz_papers.sql, in the Supabase SQL editor.

-- Student reviews shown on the home page (components/review-actions.tsx).
-- Anyone can read them; a signed-in student can write, edit or delete one review of their own.
create table if not exists reviews (
  id          uuid primary key default gen_random_uuid(),
  user_id     uuid not null unique references auth.users on delete cascade,
  name        text not null default '',
  course_tag  text check (char_length(course_tag) <= 60),
  rating      smallint not null check (rating between 1 and 5),
  content     text not null check (char_length(content) between 20 and 600),
  created_at  timestamptz not null default now(),
  updated_at  timestamptz not null default now()
);

create index if not exists reviews_created_at on reviews (created_at desc);

-- The shown name always comes from the author's profile, so nobody can post as someone else.
create or replace function reviews_set_author() returns trigger
language plpgsql security definer set search_path = public as $$
begin
  new.name := coalesce((select name from profiles where id = new.user_id), 'Student');
  new.updated_at := now();
  return new;
end $$;

drop trigger if exists reviews_set_author on reviews;
create trigger reviews_set_author before insert or update on reviews
  for each row execute function reviews_set_author();

alter table reviews enable row level security;

drop policy if exists "reviews read" on reviews;
drop policy if exists "reviews write own" on reviews;
drop policy if exists "reviews update own" on reviews;
drop policy if exists "reviews delete own or moderate" on reviews;

create policy "reviews read" on reviews for select using (true);
create policy "reviews write own" on reviews for insert with check (user_id = auth.uid());
create policy "reviews update own" on reviews for update using (user_id = auth.uid()) with check (user_id = auth.uid());
create policy "reviews delete own or moderate" on reviews for delete using (user_id = auth.uid() or has_role('moderator'));
