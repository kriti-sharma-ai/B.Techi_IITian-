-- Run after 0002_user_state_and_papers.sql (and 0003), in the Supabase SQL editor,
-- before `npm run seed:papers` uploads the quiz papers.

-- Quiz 1 / Quiz 2 previous-year papers (src/lib/data/quiz), stored like End Term
-- papers with a `quiz` object ({ number, date, session, term }) in place of `endTerm`.
alter table papers drop constraint papers_kind_check;
alter table papers add constraint papers_kind_check check (kind in ('mock', 'qualifier_pyq', 'end_term', 'quiz'));
