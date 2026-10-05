# BTechi

A structured academic platform: **Program → Semester → Subject → Unit → Topic → Resources**.
Students find curriculum, notes, videos, books, practice questions and PYQs in 3–4 clicks; admins manage it all from a CMS.

Built with Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4 and pdf.js.

## Run it

```bash
npm install        # also copies the pdf.js worker into /public
npm run dev        # http://localhost:3000
npm run build && npm start
```

Optional: set `NEXT_PUBLIC_SITE_URL` (used for canonical URLs, sitemap and JSON-LD).

## What's in Phase 1

| Area | Route |
|---|---|
| Homepage (hero, search, programs, continue learning, notes, practice, videos, PYQs) | `/` |
| Programs → semesters → subjects | `/programs`, `/programs/[program]`, `/programs/[program]/semester-N` |
| Subject (overview, curriculum, notes, videos, books, PYQs, practice, assignments) | `/subjects/[subject]?tab=…` |
| Topic learning page (video + notes + quiz + books + PYQs, prev/next) | `/subjects/[subject]/[topic]` |
| Notes library with filters + pdf.js viewer (zoom, pages, in-document search, fullscreen, download, share) | `/notes`, `/notes/[id]` |
| Videos (lazy YouTube embed), Books (legal links only) | `/videos`, `/books`, `/books/[slug]` |
| PYQs with most-repeated-topic analysis; practise any paper | `/pyqs`, `/pyqs/[id]` |
| Practice: 6 modes, question-bank builder, 6 question types, "Why?" explanations, timed tests, weak-topic summary | `/practice`, `/practice/session` |
| Exam prep (program → semester → subject → exam) | `/exam-prep` |
| Categorised global search | `/search` |
| Login / signup, student dashboard, saved resources | `/login`, `/signup`, `/dashboard`, `/saved` |
| Admin CMS: dashboard, analytics, curriculum builder, upload, review queue, reports, users, content tables | `/admin/*` |

Also: dark mode, mobile bottom navigation, breadcrumbs with BreadcrumbList JSON-LD, Course JSON-LD, sitemap/robots, empty and error states, report-a-resource, verified/outdated flags.

## Project layout

```
src/lib/types.ts        domain types (mirror supabase/schema.sql)
src/lib/data/*          seed content — replace via the CMS/database
src/lib/content.ts      read-only query layer; the only file pages read data through
src/lib/store.ts        per-student state (progress, bookmarks, attempts…) — localStorage for now
src/lib/search.ts       search index + ranking
src/components/         design system + feature components
supabase/schema.sql     production schema with row-level security
```

## Demo mode: what's not real yet

- **Auth** is simulated in the browser (`/login` → "Sign in as demo admin" opens the CMS). The admin gate is UI-only.
- **Student data and CMS edits** are saved to `localStorage`, not a server.
- **Download counts** in admin come from the seed data.
- **Videos**: only one entry has a real YouTube ID. The rest show "Coming soon" until linked to BTechi IITian uploads in `src/lib/data/resources.ts`.
- **PDFs**: two generated sample files in `public/files`. Notes without a `fileUrl` show the "temporarily unavailable" state.

## Going to production (Supabase)

1. Create a Supabase project and run `supabase/schema.sql`. Create a private Storage bucket `resources`.
2. Add `@supabase/ssr`, enable Google + email auth, and replace `actions.signIn` in `src/components/auth-forms.tsx`.
3. Re-implement `src/lib/content.ts` with database queries (same function signatures), and the `actions` in `src/lib/store.ts` with inserts into `progress`, `bookmarks`, `question_attempts`, `downloads`, `reports`.
4. **Security** (PRD §50): enforce roles server-side by checking the session in `src/proxy.ts` for `/admin/*` *and* in every server action (RLS is the final guard). Serve files through a route handler that checks visibility, logs the download, rate-limits, and redirects to a short-lived signed URL. Re-validate uploads on the server (MIME sniffing, 25 MB limit).
5. Swap `search()` for Postgres full-text search on `resources.search`.

## Design rules

Yellow `#FFD21C` is an accent only: logo, primary CTA, active nav, progress, selection. Pages stay ~85% neutral. Contextual colours: teal = notes/resources, blue = video/info, purple = practice, green = success/PYQs. Tokens live in `src/app/globals.css`.
