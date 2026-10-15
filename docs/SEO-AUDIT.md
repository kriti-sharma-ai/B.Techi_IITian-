# BTechi SEO, AEO and GEO audit

| | |
|---|---|
| Site | https://www.btechi.in |
| Date | 16 Oct 2026 |
| Scope | Google Search, Bing, ChatGPT Search, Perplexity, Gemini, Claude and other AI search |
| Method | Read the code in this repo, crawled all 857 sitemap URLs on the live site, tested crawler user agents, researched keywords, competitors and communities |

No ranking or AI recommendation is promised. The goal is: make the site easy to find, read, check and trust.

---

## 1. Summary

The technical base is already strong. Every sitemap URL returns 200, every page has a unique title, a canonical URL and a meta description, AI crawlers are allowed, and `/llms.txt` exists. The page content is in the server HTML, so crawlers that do not run JavaScript (OAI-SearchBot, PerplexityBot, ClaudeBot) can read it.

The biggest gaps are **not technical**:

1. **No measurement.** There is no analytics, and no Search Console or Bing verification tag on the live site. You cannot see what works today.
2. **Weak trust signals.** No named people, no editorial process (fixed in this session), no social profiles besides YouTube.
3. **Low brand visibility.** A web search for "btechi.in IITM BS" did not return the site. Competitors (Quiz Space, Prasnya) rank for the same "qualifier PYQ" and "mock test" queries.
4. **Content gaps** that students search for and nobody covers well: OPPE, the grade/CGPA formula, End Term PYQ PDFs per course, Management and Data Science courses.

---

## 2. Verified findings

"Verified" means I checked it on the live site or in the code on 16 Oct 2026.

| URC | Area | Finding | Status |
|---|---|---|---|
| URC-V01 | Crawling | All 857 sitemap URLs return 200. | Good |
| URC-V02 | AI crawlers | OAI-SearchBot, GPTBot, Googlebot, Bingbot, PerplexityBot and ClaudeBot all get 200 on `/pyqs` (tested by user agent). | Good |
| URC-V03 | robots.txt | Allows all public pages. Blocks only private areas (`/admin`, `/dashboard`, `/profile`, `/saved`, exam sessions, `/search`, two APIs). AI bots are named and allowed. | Good |
| URC-V04 | Sitemap | 857 URLs: 819 PYQ pages, 21 blog URLs, qualifier, info pages. Switched-off sections are left out. Blog posts have `lastModified`. | Good |
| URC-V05 | Canonical | Every page has a canonical. `btechi.in` redirects to `www.btechi.in` (308). | Good |
| URC-V06 | Redirect chain | `http://btechi.in` → `https://btechi.in` → `https://www.btechi.in` is 2 hops. | Minor |
| URC-V07 | Titles / descriptions | All present, no duplicate titles. 748 of 857 titles are over 60 characters (they include " · BTechi"). 749 descriptions are over 160 characters. | Minor |
| URC-V08 | Course titles | Course PYQ titles were up to 105 characters, e.g. "... PYQs: End Term & Quiz 2 & Quiz 1 & Qualifier Papers". | **Fixed** |
| URC-V09 | Structured data | `WebApplication` with `aggregateRating` and 3 `Review` items was on **every** page (layout), but reviews are only visible on `/` and `/reviews`. Google requires review markup to match visible content on that page. | **Fixed** |
| URC-V10 | H1 | Question sheet pages had 2 `<h1>` in the final page (page header + paper header). | **Fixed** |
| URC-V11 | H1 (streaming) | `/practice` and `/pyqs/<level>` show 2 `<h1>` in raw HTML because the loading skeleton has one too. After the page loads there is 1. | Low, not fixed |
| URC-V12 | About page | Listed notes, videos, books and "courses week by week", which are switched off. Button went to `/programs` → a noindex "not found" page. | **Fixed** |
| URC-V13 | Switched-off sections | `/notes`, `/videos`, `/books`, `/skills`, `/subjects` return 200 with `noindex` (soft 404). Not in sitemap. | Low |
| URC-V14 | Images | 0 `<img>` without alt text across all pages. | Good |
| URC-V15 | JavaScript | Main content is server-rendered. Non-JS crawlers get the text. | Good |
| URC-V16 | llms.txt | `/llms.txt` and `/llms-full.txt` (657 KB) are live and accurate. | Good |
| URC-V17 | Measurement | No analytics script. No `google-site-verification` or `msvalidate.01` meta tag on the live home page (the code supports them via env vars). | **Gap** |
| URC-V18 | Page weight | Median page HTML is 194 KB. English I/II question sheets are 0.9–1.7 MB of HTML. | Medium |
| URC-V19 | Blog | 15 posts with `BlogPosting` JSON-LD, RSS feed, categories. Author is "BTechi" as an Organization. | OK, can improve |
| URC-V20 | Organization | `EducationalOrganization` + `WebSite` JSON-LD on every page. `sameAs` has only YouTube. No founder or people. | Can improve |
| URC-V21 | Security headers | HSTS, nosniff, Referrer-Policy, X-Frame-Options, Permissions-Policy present. | Good |

## 3. Assumptions (not verified)

| URC | Assumption | How to check |
|---|---|---|
| URC-A01 | **Confirmed 16 Oct 2026:** Search Console is verified by a DNS TXT record on `btechi.in`. | Submit the sitemap; check Pages and Queries after 2–4 weeks. |
| URC-A02 | Vercel Firewall does not block AI bots by IP. My test only changed the user agent, not the IP. | Vercel → Project → Firewall → Bot Management: make sure "AI Bots" is not set to Deny. Check Firewall logs for OAI-SearchBot / PerplexityBot. |
| URC-A03 | Core Web Vitals are OK. PageSpeed API quota was used up, so no lab score. | Run PageSpeed Insights on `/`, a course page and an English sheet page. |
| URC-A04 | Search volumes. No keyword tool was used, so no volume numbers are given. | Use Search Console queries after 4 weeks, plus Google Keyword Planner. |

---

## 4. Changes made in this session

All changes keep existing features. `npm run typecheck` passes. Checked on the local dev server.

| URC | File | Change | Why |
|---|---|---|---|
| URC-C01 | `src/app/layout.tsx` | Removed `WebApplication` + `aggregateRating` + `review` from the site-wide JSON-LD. Kept `EducationalOrganization` and `WebSite`. | Review markup must be on the page where the reviews are visible. Site-wide rating markup can lead to a manual action or rich results being ignored. |
| URC-C02 | `src/app/reviews/page.tsx` | Added the `WebApplication` JSON-LD here, built from **all live reviews** on the page (database + original 3). | Rating now always equals what users see. |
| URC-C03 | `src/lib/seo.ts` | Site description shortened from 269 to 165 characters and the "rated 5/5" claim removed. | Full text now shows in results. A 5/5 claim from 3 reviews on every page reads as overstated to users and AI systems. The rating is still shown on `/reviews` and in `/llms.txt` with the review count. |
| URC-C04 | `src/app/pyqs/[level]/[course]/page.tsx` | Title is now "Mathematics for Data Science I PYQs (BSMA1001): Qualifier, Quiz 1, Quiz 2 & End Term Papers". Exams listed in term order, with commas. Same fix in the description. | Course name + "PYQs" first, because results cut at ~60 characters. Reads naturally. |
| URC-C05 | `src/components/question-sheet.tsx` | Paper title `<h1>` → `<h2>` (same look). | One H1 per page. |
| URC-C06 | `src/app/(info)/[page]/content.tsx` | About page rewritten: what BTechi is (one clear paragraph), only live features with links, where questions and answers come from, how mistakes are fixed, free, not official. Button → `/exam`. | AI systems quote About pages. It must describe only what exists. Adds trust signals that are true today. |

Nothing is committed or deployed yet.

---

## 5. Prioritized backlog

Impact and effort: H = high, M = medium, L = low.

| URC | # | Task | Impact | Effort | Business value |
|---|---|---|---|---|---|
| URC-P01 | 1 | Deploy the fixes in section 4 | M | L | Clean structured data, better titles |
| URC-P02 | 2 | ~~Verify Search Console~~ (done, DNS) + Bing Webmaster, submit sitemap | H | L | Shows queries, clicks, index errors |
| URC-P03 | 3 | Add privacy-friendly analytics + AI referral tracking + sign-up/mock events (section 6) | H | L | Measure everything else |
| URC-P04 | 4 | Check Vercel Firewall does not block AI bots (URC-A02) | H | L | AI search can read the site |
| URC-P05 | 5 | Add real people to About + blog author pages (name, role, IITM BS link if true) | H | M | E-E-A-T trust; AI systems prefer named sources |
| URC-P06 | 6 | Add more `sameAs` profiles (LinkedIn page, Instagram, GitHub) that really exist | M | L | Entity matching across the web |
| URC-P07 | 7 | Build grade/CGPA calculator + formula explainer page | H | M | Strong tool query, competitors have it |
| URC-P08 | 8 | OPPE hub: what it is, pattern, practice | H | M | Gap: only videos and GitHub cover it |
| URC-P09 | 9 | Add a short visible FAQ (3–5 Q&A) + "Updated" date to each course PYQ page | M | M | Answers "how many papers / which topics repeat" directly |
| URC-P10 | 10 | Reduce HTML weight of big English sheets (paginate by year or lazy-load passages) | M | M | Faster mobile load |
| URC-P11 | 11 | Community + backlink plan (section 9) | H | M (ongoing) | Brand mentions, referral traffic |
| URC-P12 | 12 | Trim long titles: shorter "Question Paper PDF with Answer Key" pattern on sheet pages | L | L | Cleaner results |
| URC-P13 | 13 | Make loading skeletons use a non-heading element for the title | L | L | One H1 in raw HTML |
| URC-P14 | 14 | Real 404 for switched-off sections (instead of 200 + noindex) | L | M | Cleaner crawl |
| URC-P15 | 15 | Point `http://btechi.in` straight to `https://www.btechi.in` (one hop) in Vercel Domains | L | L | Small crawl saving |

---

## 6. Measurement setup (implementation-ready)

### 6.1 Search Console and Bing

The code already reads these env vars (`src/app/layout.tsx`):

```bash
# Vercel → Project → Settings → Environment Variables (Production)
GOOGLE_SITE_VERIFICATION=<token from Search Console "HTML tag" method>
BING_SITE_VERIFICATION=<token from Bing Webmaster "meta tag" method>
```

Then:

1. Redeploy.
2. Search Console: add a **Domain** property for `btechi.in` (DNS) or URL-prefix `https://www.btechi.in/`. Submit `https://www.btechi.in/sitemap.xml`.
3. Bing Webmaster: import from Search Console. Bing powers ChatGPT Search results in part, so this matters for AI search.
4. After each deploy with new pages: `npm run indexnow`.

### 6.2 Analytics with AI referral tracking

Recommended: **Vercel Web Analytics** (no cookies, runs on your existing host). This is a decision for you because the Privacy Policy today says "we don't use third-party analytics". Update that line at the same time.

```bash
npm i @vercel/analytics
```

```tsx
// src/app/layout.tsx  (inside <body>, after <Providers>…</Providers>)
import { Analytics } from "@vercel/analytics/next";
// ...
<Analytics />
```

Track conversions (client components only):

```tsx
import { track } from "@vercel/analytics";

track("signup_completed");                         // after Supabase sign-up succeeds
track("mock_started", { exam: "qualifier" });      // when a mock begins
track("mock_submitted", { exam, subjects: n });    // on submit
track("sheet_pdf_saved", { course });              // Save PDF button
```

AI referral traffic: in Vercel Analytics → Referrers, watch these hosts:
`chatgpt.com`, `chat.openai.com`, `perplexity.ai`, `gemini.google.com`, `copilot.microsoft.com`, `claude.ai`, `you.com`.
ChatGPT adds `utm_source=chatgpt.com` to links, so also filter on UTM source.

Privacy Policy line to replace (in `content.tsx`, privacy section):

```text
We use Vercel Web Analytics to count page views and a few events (such as starting a mock).
It does not use cookies and does not identify you. We don't show ads and never sell your data.
```

### 6.3 KPIs

| URC | KPI | Source | Baseline | Target (90 days) |
|---|---|---|---|---|
| URC-K01 | Indexed pages / submitted | Search Console → Pages | Unknown (set up first) | ≥ 90% of sitemap |
| URC-K02 | Organic clicks per week | Search Console | Measure week 1 | Growth week over week |
| URC-K03 | Queries with impressions containing "btechi" | Search Console | Measure | Rising (brand awareness) |
| URC-K04 | Average position for "iitm bs qualifier pyq", "iitm bs mock test", "<course> pyq" | Search Console | Measure | Improve |
| URC-K05 | Sessions from AI referrers (chatgpt, perplexity, gemini, copilot, claude) | Analytics | 0 tracked today | Tracked, rising |
| URC-K06 | Mocks started / submitted | Analytics events | Not tracked | Tracked |
| URC-K07 | Sign-ups | Analytics + Supabase auth count | From Supabase | Rising |
| URC-K08 | Referring domains | Search Console → Links | Measure | +10 real, relevant |
| URC-K09 | Core Web Vitals "Good" URLs (mobile) | Search Console → CWV | Measure | ≥ 90% |
| URC-K10 | Honest reviews on `/reviews` | Site | 3 | More real reviews (ask after a mock, never invent) |

No targets are set as fixed numbers, because there is no baseline yet. Set numbers after 4 weeks of data.

---

## 7. Keyword and question map

From research on 16 Oct 2026. [E] = seen in real page/thread titles. [I] = inference. No search volumes.

| URC | Intent | Query / question | Best page on BTechi | Status |
|---|---|---|---|---|
| URC-Q01 | Tool | iitm bs qualifier mock test free [E] | `/qualifier` | Exists |
| URC-Q02 | Nav | iitm bs qualifier pyq / with solutions [E] | `/qualifier`, course PYQ pages | Exists |
| URC-Q03 | Nav | maths 1 / stats 1 / ct qualifier pyq [E] | `/pyqs/foundation/<course>` | Exists |
| URC-Q04 | Nav | <course> quiz 1 / quiz 2 / end term pyq [E] | course PYQ pages + sheets | Exists |
| URC-Q05 | Nav | iitm bs end term pyq pdf [I, gap seen] | sheet pages (Save PDF) | Exists; promote "PDF" wording |
| URC-Q06 | Info | iitm bs qualifier cutoff / passing marks [E] | blog: qualifier guide, home FAQ | Exists |
| URC-Q07 | Info | can I reattempt the qualifier [E] | qualifier guide | Add a short section |
| URC-Q08 | Info | how many courses after qualifier (score bands) [E] | qualifier guide | Add if not present |
| URC-Q09 | Tool | iitm bs grade calculator / cgpa calculator [E] | — | **New: calculator page** |
| URC-Q10 | Info | iitm bs grading formula quiz/end term weightage [I] | — | **New: per-course formula page** |
| URC-Q11 | Info | what is OPPE / python OPPE pyq [E] | — | **New: OPPE hub** |
| URC-Q12 | Info | is iit madras bs worth it / placements [E] | complete guide | Exists; add sourced facts only |
| URC-Q13 | Info | iitm bs vs bsc / exit options [E] | complete guide | Add a section |
| URC-Q14 | Info | is iitm bs valid for UPSC / govt jobs / masters abroad [E] | — | New post; cite official sources only |
| URC-Q15 | Info | eligibility: class 12 maths, NIOS, other college [E] | admission post | Add a section |
| URC-Q16 | Info | management and data science vs data science [E] | blog post | Exists |
| URC-Q17 | Info | TDS project help [E] | — | Guide on how to approach (no answers to live work) |
| URC-Q18 | Nav | btechi / btechi iitian [I] | home | Exists; needs brand mentions |

## 8. Content roadmap (12 weeks)

Rules for every piece: original, correct, cite the official IITM BS page for any rule/fee/date, show "Updated" date, one clear answer in the first 2 sentences (this is what AI answer engines quote), no invented numbers.

| URC | Week | Piece | Type | Target query group |
|---|---|---|---|---|
| URC-R01 | 1–2 | Grade calculator for each Foundation course + "How IITM BS grades are calculated" | Tool + guide | Q09, Q10 |
| URC-R02 | 2–3 | OPPE guide: what it is, which courses, pattern, how to prepare + link to practice | Guide | Q11 |
| URC-R03 | 3 | Add "Reattempt rules" and "Courses you can take after the qualifier" to the qualifier guide | Update | Q07, Q08 |
| URC-R04 | 4 | Per-course FAQ block on the 8 Foundation PYQ pages (visible text + FAQ JSON-LD only if visible) | Page update | Q03, Q04 |
| URC-R05 | 5 | "IITM BS End Term PYQ PDF" hub linking every course's printable sheets | Hub page | Q05 |
| URC-R06 | 6 | "Is the IIT Madras BS valid for jobs, UPSC and higher studies?" with official citations | Guide | Q14 |
| URC-R07 | 7 | Eligibility questions: Class 12 maths, NIOS, studying in another college | Guide | Q15 |
| URC-R08 | 8–9 | Diploma PYQ topic guides: MLF, MLT, PDSA, DBMS, MAD, TDS (one each) | Guides | Q04 |
| URC-R09 | 10 | Management and Data Science course PYQ guides (few competitors cover these) | Guides | Q04 |
| URC-R10 | 11 | BS vs BSc vs Diploma exit options | Guide | Q13 |
| URC-R11 | 12 | Refresh: update dates/cutoffs for the next batch, check every official link | Maintenance | all |

YouTube: one short video per new guide, linking back to the page. This links the channel and the site as one brand.

## 9. Backlinks and mentions (legitimate only)

Always say BTechi is free and **not affiliated with IIT Madras**. Read each community's rules first. Never post the same message in many places. No paid links, no link swaps, no fake accounts.

| URC | Place | Verified? | What to do |
|---|---|---|---|
| URC-B01 | GitHub `iitmbsc-student-projects/the-companion` | Yes, accepts PRs | Open a PR adding the course PYQ page link on each course page. |
| URC-B02 | GitHub topic `iitm-bs` (39 repos) | Yes | Publish a small open repo (e.g. grade calculator logic) with the topic. |
| URC-B03 | AskIITM forum, Online Programs | Yes | Answer real questions in full. Link a guide only when it answers the question. |
| URC-B04 | Quora "IITM online BS" questions | Yes (titles) | Long honest answers; link where it helps. |
| URC-B05 | Discord "IITM BS Students" (~13.5k) | Yes | Help with doubts; ask mods before sharing links. |
| URC-B06 | r/iitmadras, r/IITMadras_datascience | Partly (rules not seen) | Read rules; share a resource only if allowed. |
| URC-B07 | IITM BS houses (*.iitmbs.org) and societies (study.iitm.ac.in/ds/student_life.html) | Yes | Email academic societies; offer free mock sessions or PYQ sheets for their resource lists. |
| URC-B08 | Community admins (WhatsApp/LinkedIn/Telegram/Medium groups) | Yes | Ask to be listed as a free resource. |
| URC-B09 | Do NOT promote in official course Discourse forums | — | These are official course spaces. |

## 10. Competitors to learn from

| URC | Site | Lesson |
|---|---|---|
| URC-X01 | quizspace.unknowniitians.com | One page per subject + exam, visible "Updated" date, FAQ, grade calculator. |
| URC-X02 | prasnya.com | Every question tagged by week/topic with a worked solution. |
| URC-X03 | bsstudentshelper.vercel.app | Grade calculator from handbook rules; OPPE practice. |
| URC-X04 | piyushai.com | Long qualifier guide with plan and FAQs. |
| URC-X05 | Careers360 | Wins "worth it / placements / eligibility" queries. Answer these with official sources. |

## 11. Information needed from the owner

These cannot be written without real facts (never invented):

1. Names and short real bios of the people who run BTechi and who write/check content (for About and blog authors).
2. Other real social profiles (LinkedIn page, Instagram, GitHub) to add to `sameAs`.
3. Decision: OK to add Vercel Web Analytics and update the Privacy Policy?
4. Access to Search Console / Bing / Vercel Firewall to check URC-A01 and URC-A02.
