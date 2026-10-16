# LinkedIn plan: 30 days to the IIT Madras BS Qualifier

**Goal:** Students who are writing the Qualifier find BTechi, try a free mock, and share the posts with friends.

**Audience:** People who are writing the IITM BS Qualifier, their parents, and working people who are joining the BS degree.

## How we post

| | Morning post | Evening post |
|---|---|---|
| Time (IST) | 8:30 AM | 7:30 PM |
| Type | **Teach** carousel: one topic, its formulas and its traps | **Quiz** carousel: one question, answer on the next slide |
| Ask in the caption | "Save this for revision" | "Comment your answer, then swipe" |

- **Start date:** Day 1 is 30 days before the Qualifier. Post the launch carousel (`day-0-launch/`) the day before Day 1.
- **How to upload:** Start a post, choose **Add a document**, upload `carousel.pdf`, give it a short title, and paste `caption.txt`.
- **Profile:** Post from your own profile, then reshare it on the BTechi page. Personal posts usually reach more people.
- **First hour:** Reply to every comment. On quiz posts, reply with "Correct" or a short hint. Do not give the answer away.
- **Links:** Every caption has a link with UTM tags (`utm_campaign=qualifier30`), so website visits from each post show up in analytics. Try putting the link in the first comment on some posts. Then compare which way gets more reach.
- **Hashtags:** Use 5 at most. They are already in each caption.
- **Rules:** Use only real facts and real PYQs from the cheat sheets. No emojis. No fake reviews or fake results. Every example scorecard is marked "Example".

## What to check every Sunday

| Number | Where | What it tells you |
|---|---|---|
| Impressions | LinkedIn post analytics | Is the topic interesting? |
| Saves and reposts | LinkedIn post analytics | Is the content useful? This matters most. |
| Comments on quiz posts | LinkedIn | Are people taking part? |
| Site visits from `qualifier30` | Website analytics (UTM) | Do posts bring students to BTechi? |

Next week, do more of the post type that got the most saves. If a time slot does badly for a whole week, move it by 1 to 2 hours.

## Week 1: Know the exam (ready)

Every folder is in `week-1/` and has `carousel.pdf` and `caption.txt`.

| Day | Morning (teach) | Evening (quiz) |
|---|---|---|
| 1 | `day-01-am-30-day-plan`: the 30-day plan | `day-01-pm-cutoff-rule`: the 40/50 pass rule, 3 example students |
| 2 | `day-02-am-maths-sets-formulas`: 8 set formulas and Venn method | `day-02-pm-maths-venn-pyq`: Venn PYQ pattern (Jan 2024) |
| 3 | `day-03-am-stats-data-types`: 5 data-type traps | `day-03-pm-stats-mean-pyq`: mean after "subtract 5, then double" (Sep 2023) |
| 4 | `day-04-am-ct-checklist`: 5-step pseudocode checklist | `day-04-pm-ct-or-filter`: count with an "or" filter |
| 5 | `day-05-am-english-vowels`: vowel sounds and spelling traps | `day-05-pm-english-odd-sound`: odd one out by sound (May 2024) |
| 6 | `day-06-am-maths-relations`: 4 properties, traps, May 2023 PYQ | `day-06-pm-stats-iqr-pyq`: IQR and outliers (Sep 2023) |
| 7 | `day-07-am-first-mock`: take your first full mock | `day-07-pm-week-1-traps`: 8 traps recap |

## Week 2: Maths I and Stats I in depth (to build)

| Day | Morning (teach) | Evening (quiz) |
|---|---|---|
| 8 | Functions: one-one, onto, how to count them | Relation "a divides b" on {1, 2, 3, 4}: find the size of R (answer: 8) |
| 9 | Straight lines: slope, line forms, parallel and perpendicular | Distance, midpoint and section formula question |
| 10 | Quadratics: vertex, discriminant, roots | Quadratic PYQ |
| 11 | Polynomials: degree, roots, graph shape | Mini mock: 5 Maths I questions (link to the portal) |
| 12 | Mean, median, mode: when to use which | T-shirt sizes: what happens to the mode and median (Sep 2023) |
| 13 | Variance and SD: sample vs population, effect of + and × | Find the correct SD after a value was recorded wrong (May 2023) |
| 14 | Association: two-way tables and scatter plots | Weekly mock 2, plus 8 traps from week 2 |

## Week 3: CT and English I in depth (to build)

| Day | Morning (teach) | Evening (quiz) |
|---|---|---|
| 15 | Loops and filtering with cards | Spot the mistake: the min = 0 bug |
| 16 | Finding max, min and second highest | Loop count: `i = 1; while (i <= 20) { i = i * 2 }` runs 5 times |
| 17 | Procedures and `return` | Sum of digits of 4096 using a mod-10 loop (answer: 19) |
| 18 | Pairs and binning: n(n − 1)/2 | 30 cards in 3 equal bins: comparisons with and without binning (435 vs 135) |
| 19 | Diphthongs and consonant clusters | Which word has no diphthong? (Sport / Moot / Stew) |
| 20 | Parts of speech and articles | Fill in a / an / the (7 PYQ blanks) |
| 21 | Reading comprehension: a method that works | Weekly mock 3, plus 8 traps from week 3 |

## Week 4: Mocks and revision (to build)

| Day | Morning (teach) | Evening (quiz) |
|---|---|---|
| 22 | How to revise in the last week | Maths I one-page formula sheet |
| 23 | Full mock day: how to manage time across 4 subjects | Stats I one-page formula sheet |
| 24 | How to use your mistake notebook | CT one-page rules sheet |
| 25 | The question types that repeat most in the Qualifier | English I one-page rules sheet |
| 26 | Full mock 4: how to read your score | Mixed quiz: 1 question from each subject |
| 27 | The exam screen: timer, palette, calculator | Mixed quiz: 1 question from each subject |
| 28 | 10 traps to read the night before | Real student review (only with permission) |

## Last 2 days

| Day | Morning | Evening |
|---|---|---|
| 29 | Exam-day checklist (point people to the official hall ticket instructions) | A calm last-day plan: what to do and what not to do |
| 30 | All the best. What comes after the Qualifier (Foundation level) | Thank you, and when results usually come out (check the official site first) |

## How to make the next carousels

1. Copy `scripts/carousel/week-1.mjs` to `scripts/carousel/week-2.mjs`. Write the posts using the same slide types: `cover`, `list`, `bullets`, `formulas`, `question`, `answer`, `scorecard`, `stats`, `statement` and `cta`.
2. Take facts and PYQs only from `src/lib/data/cheat-notes/`.
3. Add the new week in `scripts/generate-carousel.mjs`, then run:

```bash
node scripts/generate-carousel.mjs            # all posts
node scripts/generate-carousel.mjs day-08     # only one day
```

4. To check the slides before posting, add `--preview <folder>`. It saves one contact-sheet image per post. If a slide has too much text, the script prints a warning.
