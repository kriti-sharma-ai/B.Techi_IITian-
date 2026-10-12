# BTechi: Product Requirements Document

| | |
|---|---|
| Product | BTechi (web) |
| Audience | Students of the IIT Madras BS in Management and Data Science |
| Stack | Next.js 16 (App Router), React 19, TypeScript, Tailwind CSS v4, Supabase, pdf.js |
| Hosting | Vercel |
| Status | Launch build (exam-first). Content sections switch on as content is published. |
| Last updated | 12 Oct 2026 |

---

## 1. Problem

IITM BS students prepare from material scattered across WhatsApp groups, Telegram channels and random Drive links. Previous-year papers exist as PDFs with no way to sit them under exam conditions, no answer checking, and no sense of which topics repeat. Qualifier aspirants don't know if their mock score would clear the cutoff.

## 2. Vision

One structured place where a student goes **Level → Course → Week → Topic → Resources** in 3–4 clicks, and can **sit the real exam before exam day**: official PYQs in a portal that behaves like the real one, graded against official answer keys.

## 3. Goals and non-goals

### Goals
1. Let any student attempt real IITM BS PYQs (Qualifier, Quiz 1, Quiz 2, End Term) in an exam-like portal, free, without signing up.
2. Give qualifier aspirants a 4-course mock with a pass/fail verdict against the official cutoff.
3. Turn PYQs into targeted practice (by course, week, topic, difficulty, question type) with an explanation for every answer.
4. Keep progress for signed-in students across devices; let guests convert without losing work.
5. Let a small team publish and moderate content through a role-based CMS.

### Non-goals (for now)
- Hosting copyrighted textbooks (books link to legal sources only).
- Live classes, chat or community features.
- Native mobile apps (the web app is mobile-first and responsive).
- Paid tiers. The product is 100% free.

## 4. Users

| Persona | Need | Key surfaces |
|---|---|---|
| **Qualifier aspirant** | Know if they'll clear the qualifier; revise weeks 1–4 fast | Qualifier Pack, mocks, cheat sheets, result screen |
| **Foundation / Diploma / Degree student** | Practise PYQs for the next Quiz or End Term in their enrolled courses | Exam Portal, Practice, PYQs, Study profile |
| **Last-minute reviser** | Formulas, rules and common traps on one page | Cheat sheets, printable sheets |
| **Contributor** | Upload notes, videos, questions | `/admin/upload`, review queue |
| **Moderator / Admin** | Publish, fix, flag, manage users and papers | `/admin/*` |

## 5. Scope

### 5.1 Always-on sections (launch build)

| Feature | Route | Requirements |
|---|---|---|
| Home | `/` | Hero "Sit the real exam before exam day", live exam-screen demo, feature cards, proof bar (paper and question counts, 100% free), reviews. Primary CTA: Start a mock exam. Secondary: Practise PYQs. |
| Exam Portal | `/exam` | Choose exam (End Term, Quiz 1, Quiz 2, Qualifier), year or random mock, combine 1–4 subjects. Live timer, scientific calculator, question palette, mark-for-review, submit, score per section. |
| Qualifier Pack | `/qualifier`, `/qualifier/[mock]` | 4 courses (Maths 1, Stats 1, Computational Thinking, English 1), weeks 1–4 syllabus. Cutoff evaluator: min 40 per course and min 50 average (general category). Single-subject and full mocks. |
| Cheat sheets | `/qualifier/notes`, `/qualifier/notes/[sheet]` | Formulas, rules and traps per course; printable. |
| Practice | `/practice`, `/practice/session`, `/practice/exam` | Modes: Quick practice (10 Qs), Drill (15 Qs), Every question, Full test, Mock exam. Filters: course, week, topic, difficulty, question type. "Why?" explanation for every answer; weak-topic summary at the end. Passage-linked questions always drawn together. |
| PYQs | `/pyqs`, `/pyqs/[level]/[course]`, `/pyqs/sheets` | Papers by level and course, most-repeated-topic analysis, practise any paper, printable sheets. |
| Blog | `/blog`, `/blog/[slug]`, `/blog/category/*`, `rss.xml` | Guides on the IITM BS, exams, careers. |
| Accounts | `/login`, `/signup`, `/reset-password` | Email auth via Supabase. Guest progress merges into the new account. |
| Student area | `/dashboard`, `/saved`, `/profile` | Attempt history, scores, saved items, study profile (level + enrolled courses) that scopes lists across the site. |
| Info pages | `/(info)/[page]` | About, Contact, Contribute, Privacy, Terms, Copyright, Disclaimer. |
| Admin CMS | `/admin/*` | See 5.3. |

### 5.2 Switchable sections (off at launch)

Enabled with `NEXT_PUBLIC_SECTIONS` (e.g. `notes,videos` or `all`). When off they return 404 and are hidden from navigation (`src/lib/site.ts`).

| Section | Route | Requirements |
|---|---|---|
| Programs | `/programs`, `/programs/iitm-bs/[level]` | Program → Foundation / Diploma / Degree → courses. |
| Courses | `/subjects/[course]`, `/subjects/[course]/[topic]` | Code, credits, prerequisites; tabs for curriculum, notes, videos, books, PYQs, practice; topic page with prev/next. |
| Notes | `/notes`, `/notes/[id]` | Filterable library; pdf.js viewer with zoom, pages, in-document search, fullscreen, download, share. |
| Videos | `/videos` | Topic-mapped, lazy YouTube embeds. |
| Books | `/books`, `/books/[slug]` | Recommended texts, legal links only. |
| Skills | `/skills`, `/skills/[slug]` | Short skill courses (e.g. GenAI for business). |
| Search | `/search` | Categorised global search (in memory today; Postgres FTS later). |

### 5.3 Admin CMS

| Role | Permissions |
|---|---|
| Contributor | Upload notes, videos, books; write questions; submit for review; edit/delete own unpublished items |
| Moderator | + publish, request changes, unpublish, quality flags, edit curriculum and papers, resolve reports, analytics |
| Admin | + users and roles (up to moderator), downloads, settings |
| Super admin | Everything, including granting/removing admin |

- Content lifecycle: **Draft → Pending review → Published** (or Changes requested / Unpublished).
- Access enforced in the database (Row Level Security); writes go through server actions as the signed-in user.
- Files in a private Storage bucket, served through signed URLs (1 h read, 5 min download). Real file type checked from the first bytes; 25 MB limit.
- Publishing revalidates the site immediately; otherwise pages revalidate every 5 minutes.
- Reports from the flag button (guests included) land in `/admin/reports`.

## 6. Functional requirements

| ID | Requirement | Priority |
|---|---|---|
| FR-1 | A guest can start and finish any mock or practice set without an account. | P0 |
| FR-2 | Exam portal shows a countdown timer, question palette (answered / not answered / marked / not visited), and auto-submits at zero. | P0 |
| FR-3 | Supported question types: single choice, multiple choice, numeric, fill-in, short answer, passage-based groups. | P0 |
| FR-4 | Grading uses official answer keys; result shows score per section and overall. | P0 |
| FR-5 | Qualifier result shows Pass / Not yet against the per-course and average cutoff. | P0 |
| FR-6 | Every practice answer has a "Why?" explanation. | P0 |
| FR-7 | After a test, guests see an optional "save your progress" prompt; signing up merges guest progress. | P1 |
| FR-8 | Study profile (level + courses) is stored in the account and mirrored to a cookie so server-rendered lists show only those courses. | P1 |
| FR-9 | Scientific calculator available inside the exam portal. | P1 |
| FR-10 | PYQ topic analysis ranks the most-repeated topics per course. | P1 |
| FR-11 | Any resource can be reported; reports reach moderators. | P1 |
| FR-12 | Printable cheat sheets and question sheets. | P2 |

## 7. Non-functional requirements

- **Performance:** navigation responds instantly (route-level loading skeletons); papers load in parallel and refresh in the background. Target LCP < 2.5 s on 4G mobile.
- **Accessibility:** WCAG 2.2 AA. Visible focus rings, `aria-current` on nav, contrast-safe colours (yellow never used as text on white).
- **Responsive:** mobile-first, mobile bottom navigation, works at 320 px.
- **Theming:** light and dark mode; the exam portal is pinned to light like the real exam.
- **SEO:** canonical URLs, sitemap, robots, BreadcrumbList and Course JSON-LD, OG tags.
- **Security:** RLS on every table; service-role key never shipped to the app.
- **No emojis in UI:** icons come from lucide-react.

## 8. Success metrics

| Metric | Target (first 3 months) |
|---|---|
| Mock / practice sessions started per week | Growth week over week |
| Session completion rate (started → submitted) | ≥ 60% |
| Guest → signed-up conversion after a test | ≥ 10% |
| Returning students within 7 days | ≥ 30% |
| Qualifier mock takers who also open a cheat sheet | ≥ 40% |
| Content reports resolved within 72 h | ≥ 90% |

## 9. Release plan

| Phase | Scope |
|---|---|
| **Launch (now)** | Home, Exam Portal, Qualifier Pack + cheat sheets, Practice, PYQs, Blog, accounts, dashboard, admin. |
| **Phase 2** | Turn on Programs, Courses, Notes, Videos, Books as content is published through the CMS. |
| **Phase 3** | Postgres full-text search, per-user download rate limits, richer analytics, Skills catalogue. |

## 10. Risks and open questions

- **Content volume:** course pages are "coming soon" until weeks, topics and resources are published. Mitigation: exam-first launch built on PYQs.
- **Answer-key accuracy:** official keys can be disputed. Mitigation: report button + moderator review.
- **Copyright:** only legal links for books; PYQs and notes follow the Copyright Policy page.
- **Open:** do we show category-specific qualifier cutoffs (OBC/SC/ST/PwD) beyond general?
