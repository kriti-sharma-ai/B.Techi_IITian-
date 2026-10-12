# BTechi

A structured study companion for the **IIT Madras BS in Management and Data Science**: **Level → Course → Week → Topic → Resources**.
Students find curriculum, notes, videos, books, practice questions and PYQs in 3–4 clicks; admins manage it all from a CMS.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and pdf.js.

## Run it

```bash
npm install        # also copies the pdf.js worker into /public
npm run dev        # http://localhost:3000
npm run build && npm start
```

Optional: set `NEXT_PUBLIC_SITE_URL` (used for canonical URLs, sitemap and JSON-LD).

By default the site ships with only the Qualifier Pack, Practice, PYQs, cheat sheets, Blog, accounts and admin. Programs, Skills, Courses, Notes, Videos, Books and Search are switched off (404 and hidden from navigation; see `src/lib/site.ts`). Turn them back on with `NEXT_PUBLIC_SECTIONS`, e.g. `NEXT_PUBLIC_SECTIONS=notes,videos`, or `NEXT_PUBLIC_SECTIONS=all` for the full site.

## What's in Phase 1

| Area | Route |
|---|---|
| Homepage (hero, search, programs, continue learning, notes, practice, videos, PYQs) | `/` |
| Program → levels (Foundation, Diploma, Degree) → courses | `/programs/iitm-bs`, `/programs/iitm-bs/[level]` |
| Course page (code, credits, prerequisites; tabs for curriculum, notes, videos, books, PYQs, practice, assignments) | `/subjects/[course]?tab=…` |
| Topic learning page (video + notes + quiz + books + PYQs, prev/next) | `/subjects/[subject]/[topic]` |
| Notes library with filters + pdf.js viewer (zoom, pages, in-document search, fullscreen, download, share) | `/notes`, `/notes/[id]` |
| Videos (lazy YouTube embed), Books (legal links only) | `/videos`, `/books`, `/books/[slug]` |
| PYQs with most-repeated-topic analysis; practise any paper | `/pyqs`, `/pyqs/[id]` |
| Practice: 6 modes, question-bank builder, 6 question types, "Why?" explanations, timed tests, weak-topic summary | `/practice`, `/practice/session` |
| Exam prep (level → course → Quiz 1 / Quiz 2 / End Term) | `/exam-prep` |
| Categorised global search | `/search` |
| Login / signup, student dashboard, saved resources | `/login`, `/signup`, `/dashboard`, `/saved` |
| Admin CMS: dashboard, analytics, curriculum builder, upload, review queue, reports, users, content tables | `/admin/*` |

Also: dark mode, mobile bottom navigation, breadcrumbs with BreadcrumbList JSON-LD, Course JSON-LD, sitemap/robots, empty and error states, report-a-resource, verified/outdated flags.

## Project layout

```
src/lib/types.ts        domain types (mirror supabase/schema.sql)
src/lib/data/*          seed content — replace via the CMS/database
src/lib/content.ts      read-only query layer; the only file pages read data through
src/lib/store.ts        per-student state (progress, bookmarks, attempts…), synced to the account by lib/supabase/sync.ts
src/lib/search.ts       search index + ranking
src/components/         design system + feature components
supabase/schema.sql     production schema with row-level security
```

## Content status

The full official course list (50 courses: 8 Foundation, 10 Diploma in Data Analytics for Business incl. 2 projects, 6 other Diploma, 6 Degree core, 22 electives) is in `src/lib/data/curriculum.ts`. **No course content is published yet**: weeks, topics, notes, videos, PYQs and questions are empty, and every course shows a "coming soon" page. Add content via the CMS or the seed files.

## Supabase setup

1. In the Supabase SQL editor, run `supabase/schema.sql`, then `supabase/0002_user_state_and_papers.sql`, then `supabase/0003_cms.sql` (and any later numbered files) in order. 0003 is safe to re-run. It also creates the private Storage bucket `resources` and copies the official course list into `subjects`.
2. Copy the project URL and anon key into `.env.local` (`NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_ANON_KEY`). `SUPABASE_SERVICE_ROLE_KEY` is only needed by `npm run seed:papers`; the app itself never uses it.
3. Sign up on the site, then make yourself the first super admin in the SQL editor:
   `update profiles set role = 'super_admin' where id = (select id from auth.users where email = 'you@example.com');`
   After that, give other people roles in `/admin/users`.

## Deploying to Vercel

1. Import the GitHub repo in Vercel (framework preset: Next.js; the default build and output settings are right).
2. Under Project → Settings → Environment Variables, add `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` for Production and Preview. The build reads papers and CMS content from Supabase, so it fails without them. `.env.example` lists the optional variables. Don't add `SUPABASE_SERVICE_ROLE_KEY`.
3. Redeploy after changing a variable: `NEXT_PUBLIC_` values are baked in at build time.
4. In Supabase → Authentication → URL Configuration, set the Site URL to the production domain and add it to the redirect URLs.

## Admin CMS (`/admin`)

| Role | Can |
|---|---|
| Contributor | Upload notes, videos and books; write questions; submit them for review; edit or delete their own unpublished items |
| Moderator | Everything above, plus publish, request changes, unpublish, set quality flags, edit the curriculum and papers, resolve reports, analytics |
| Admin | Everything above, plus users and roles (up to moderator), downloads, settings |
| Super admin | Everything, including granting and removing admin rights |

- **Access** is decided in the database: roles live in `profiles.role` (users can't change their own), every read runs under Row Level Security, and every write goes through a server action in `src/app/admin/actions.ts` that runs as the signed-in user. The `/admin` gate in the browser only decides what to show.
- **Curriculum**: official courses come from `src/lib/data/curriculum.ts`. Weeks and topics for any course, and new courses (draft → published), are stored in `subjects`, `units` and `topics`.
- **Resources and questions** move Draft → Pending review → Published. A moderator can also request changes (with a note) or unpublish. Files go straight to Storage under the uploader's folder. The server checks each file's real type from its first bytes and enforces the 25 MB limit.
- **The site** reads everything published through `published_content()` (`src/lib/cms.ts`), merged with the seed in `src/lib/content.ts`. Publishing refreshes the site immediately; otherwise pages revalidate every 5 minutes.
- **Files** are served by `/api/files/[id]` through signed URLs (1 hour to read, 5 minutes to download). Downloads are logged in `downloads` and counted on the resource.
- **Reports** from the flag button (guests included) go to `reports` and appear in `/admin/reports`.
- **Papers** (qualifier mocks and PYQs) can be edited as JSON in `/admin/papers`. `npm run seed:papers` copies the papers in the code back over those edits.

Not done yet: per-user download rate limits, and Postgres full-text search for `/search` (it still searches in memory).

## Design rules

Yellow `#FFD21C` is an accent only: logo, primary CTA, active nav, progress, selection. Pages stay ~85% neutral. Contextual colours: teal = notes/resources, blue = video/info, purple = practice, green = success/PYQs. Tokens live in `src/app/globals.css`.
