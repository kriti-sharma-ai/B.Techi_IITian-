import type { SkillNotes } from "../../types";

// Text lessons for "Crack the Data Analyst Interview".

export const analystInterviewNotes: SkillNotes = {
  skill: "analyst-interview-prep",
  quickLabel: "Patterns",
  lessons: [
    {
      lecture: "What recruiters scan for",
      blocks: [
        {
          kind: "points",
          items: [
            "A recruiter's first pass on a resume is quick, often well under a minute. They check: does this person have the **tools** in the job post, **evidence** they've used them, and anything that makes them **stand out**?",
            "Many companies filter with an applicant tracking system (ATS) first. It mostly matches keywords from the job description and needs a parseable, simple layout.",
            "For entry-level analyst roles in India, the most common asks are **SQL, Excel, Python, a BI tool (Power BI or Tableau), statistics basics and communication**. AI tool fluency is increasingly expected.",
          ],
        },
        {
          kind: "table",
          title: "Signals, strongest first",
          head: ["Signal", "Example"],
          rows: [
            ["Real impact with a number", "\"Cut weekly report time from 6 hours to 40 minutes with a Power BI refresh\""],
            ["Relevant project with a link", "GitHub or portfolio link to an analysis with a clear business question"],
            ["Internship or work experience", "Even 2 months, described by outcomes"],
            ["Recognised credential", "IITM BS diploma or degree level, relevant certifications"],
            ["Tool list", "Needed, but weakest on its own"],
          ],
        },
        {
          kind: "tip",
          text: "Mirror the job description's exact words where they're true for you. If the post says \"Power BI\" and \"stakeholder management\", your resume should too.",
        },
      ],
    },
    {
      lecture: "Resume teardown",
      blocks: [
        {
          kind: "table",
          title: "Before → after",
          head: ["Weak", "Strong"],
          rows: [
            ["Responsible for making dashboards", "Built a Power BI sales dashboard used by 12 regional managers; replaced 4 manual Excel reports"],
            ["Worked on Python data analysis project", "Analysed 1.2 lakh e-commerce orders in pandas; found 18% of revenue came from repeat customers in 3 cities"],
            ["Good knowledge of SQL", "Wrote SQL (joins, CTEs, window functions) to build a monthly cohort-retention table in PostgreSQL"],
            ["Team player with good communication", "Presented churn findings to the ops team; two recommendations adopted"],
          ],
        },
        {
          kind: "points",
          items: [
            "Formula for bullets: **Action verb + what you did + tool + measurable result**.",
            "One page for under 5 years of experience. Single column, standard headings (Education, Experience, Projects, Skills), no tables or text boxes that break ATS parsing.",
            "Put **Projects** above Education if your projects are your strongest evidence.",
            "Export as PDF with a sensible file name: `Firstname-Lastname-Data-Analyst.pdf`.",
          ],
        },
        {
          kind: "traps",
          items: [
            "Skill bars (\"Python ●●●●○\") mean nothing to a reader and confuse ATS. List skills plainly.",
            "Don't list tools you can't discuss for 5 minutes. Interviewers pick from your resume.",
          ],
        },
      ],
    },
    {
      lecture: "Portfolio projects that stand out",
      blocks: [
        {
          kind: "points",
          items: [
            "Two or three **finished** projects beat ten half-done tutorials. Finished means a question, an answer, and a recommendation.",
            "Avoid the most overused datasets (Titanic, Iris) as your main project. Use Indian public data (data.gov.in, RBI, NSE, state open-data portals), a scraped dataset you built yourself, or a realistic business dataset with your own question.",
            "Each project's README should start with: the question, the answer in two sentences, one chart, and how to reproduce it.",
          ],
        },
        {
          kind: "table",
          title: "Three projects that cover the stack",
          head: ["Project", "Shows", "Example"],
          rows: [
            ["SQL + BI", "Data modelling, SQL, dashboard design", "Cohort retention dashboard for an e-commerce dataset"],
            ["Python analysis", "Cleaning, EDA, statistics, storytelling", "What drives late deliveries? A/B-style comparison by courier"],
            ["Business case", "Problem framing, recommendation", "Pricing recommendation for a subscription app, with scenarios in Excel"],
          ],
        },
        {
          kind: "tip",
          text: "Write a short LinkedIn post for each project with the key chart. It's discoverable, and it shows you can communicate, which is half the job.",
        },
      ],
    },
    {
      lecture: "SQL round patterns",
      blocks: [
        {
          kind: "table",
          title: "Questions you'll see, and the pattern behind each",
          head: ["Question", "Pattern"],
          rows: [
            ["Top N per group", "`ROW_NUMBER()` / `DENSE_RANK()` over a partition, filter in a CTE"],
            ["Second highest / Nth highest", "`DENSE_RANK()` = N"],
            ["Month-over-month change", "Aggregate by month, then `LAG()`"],
            ["Running total", "`SUM() OVER (ORDER BY …)`"],
            ["Customers who never / always did X", "Anti-join with `NOT EXISTS`, or `HAVING` with conditional counts"],
            ["Duplicates", "`GROUP BY key HAVING COUNT(*) > 1`"],
            ["Retention / cohorts", "First-order month per customer (CTE), join back, count by months since first"],
            ["Consecutive streaks", "Date minus `ROW_NUMBER()` (gaps and islands)"],
            ["Percent of total", "`x / SUM(x) OVER ()`"],
          ],
        },
        {
          kind: "points",
          items: [
            "Before typing: restate the question, ask about edge cases (ties? NULLs? time zone?), and state the output grain.",
            "Talk while you write. Silence for five minutes followed by a perfect query scores lower than a clear thought process with a small bug you fix.",
          ],
        },
        {
          kind: "tip",
          text: "Practise on real platforms (LeetCode's SQL set, HackerRank, StrataScratch, DataLemur) in a timed way: 15 minutes per medium question.",
        },
      ],
    },
    {
      lecture: "Python round patterns",
      blocks: [
        {
          kind: "table",
          head: ["Task", "pandas idiom"],
          rows: [
            ["Top 3 per group", "`df.sort_values('x', ascending=False).groupby('g').head(3)`"],
            ["Group summary", "`df.groupby('g').agg(n=('id','count'), total=('x','sum'))`"],
            ["Pivot", "`df.pivot_table(index='a', columns='b', values='x', aggfunc='sum')`"],
            ["Add group stat to rows", "`df.groupby('g').x.transform('mean')`"],
            ["Previous row value", "`df.groupby('g').x.shift(1)`"],
            ["Join", "`a.merge(b, on='id', how='left', validate='m:1')`"],
            ["Dates", "`pd.to_datetime(df.d, format='%d-%m-%Y')`, then `.dt.to_period('M')`"],
            ["Missing", "`df.isna().sum()`, `fillna`, `dropna(subset=[…])`"],
          ],
        },
        {
          kind: "points",
          items: [
            "Plain-Python questions still appear: string manipulation, dictionaries for counting (`collections.Counter`), list comprehensions, writing a small function with edge cases.",
            "Explain complexity in simple terms: \"this loops over the list once, so it scales linearly\".",
          ],
        },
        {
          kind: "example",
          q: "Given a list of words, return the 3 most common with their counts.",
          steps: ["`from collections import Counter`", "`Counter(words).most_common(3)`"],
          answer: "`Counter(words).most_common(3)`",
        },
      ],
    },
    {
      lecture: "Mock technical round",
      blocks: [
        {
          kind: "example",
          title: "Q1 · SQL",
          q: "Table `payments(user_id, paid_at, amount)`. For each user, show the first payment date and the total amount paid in their first 30 days.",
          steps: [
            "`WITH f AS (SELECT user_id, MIN(paid_at) AS first_paid FROM payments GROUP BY user_id)`",
            "`SELECT f.user_id, f.first_paid, SUM(p.amount) AS first_30d FROM f JOIN payments p ON p.user_id = f.user_id AND p.paid_at < f.first_paid + INTERVAL '30 days' GROUP BY f.user_id, f.first_paid;`",
          ],
          answer: "First-date CTE, then join back with a date window",
        },
        {
          kind: "example",
          title: "Q2 · Statistics",
          q: "Average session time rose from 6.1 to 6.4 minutes after a redesign. Is that a real improvement?",
          steps: [
            "Ask: sample sizes, variance, whether it was a randomised A/B test, seasonality, and whether the metric definition changed.",
            "If A/B: run a two-sample t-test (or a non-parametric test, as time is skewed) and look at the confidence interval of the difference.",
          ],
          answer: "It depends on the test design and variability; ask before concluding",
        },
        {
          kind: "example",
          title: "Q3 · Excel",
          q: "How would you find customers in sheet A that are missing from sheet B?",
          steps: ["`=IF(ISNA(XLOOKUP(A2, B!A:A, B!A:A)), \"Missing\", \"\")`, or `=FILTER(A2:A500, ISNA(XMATCH(A2:A500, B!A:A)))` for the whole list at once."],
          answer: "Lookup and test for #N/A, or FILTER with XMATCH",
        },
        {
          kind: "example",
          title: "Q4 · Metrics",
          q: "Daily active users dropped 15% yesterday. Walk me through your investigation.",
          steps: [
            "Is it real? Check tracking, data pipeline delays and definitions first.",
            "Is it external? Holiday, outage, app-store issue, competitor launch.",
            "Segment: platform (Android/iOS/web), app version, region, new vs returning users, acquisition channel.",
            "Find where the drop concentrates, form a hypothesis, confirm with a second data source.",
          ],
          answer: "Validate data → external causes → segment → hypothesis → confirm",
        },
      ],
    },
    {
      lecture: "Guesstimates framework",
      blocks: [
        {
          kind: "table",
          head: ["Step", "Do"],
          rows: [
            ["1. Clarify", "Define the thing exactly: which city, which year, units or value?"],
            ["2. Choose an approach", "Top-down (population → segments) or bottom-up (one store × number of stores)"],
            ["3. Segment", "Split into 2–4 groups that behave differently"],
            ["4. Assume out loud", "Round numbers, each with a one-line reason"],
            ["5. Calculate", "Keep the arithmetic simple and visible"],
            ["6. Sanity check", "Compare with something you know; adjust"],
          ],
        },
        {
          kind: "example",
          q: "How many cups of tea are sold at roadside stalls in Bengaluru per day? (Every number below is an assumption, stated out loud.)",
          steps: [
            "Population ≈ 1.4 crore. Adults who drink tea outside at least sometimes ≈ 40% → 56 lakh.",
            "On a given day, ≈ 50% of them buy at a stall → 28 lakh people.",
            "Average 1.5 cups each → about 42 lakh cups.",
            "Sanity check: if a stall sells ~400 cups a day, that's ~10,000 stalls, roughly one per 1,400 people. Plausible for a dense city.",
          ],
          answer: "Roughly 40 lakh cups a day (the structure matters more than the number)",
        },
        {
          kind: "traps",
          items: ["Don't freeze hunting for the \"right\" number. Interviewers grade structure, stated assumptions and the sanity check."],
        },
      ],
    },
    {
      lecture: "Business case studies",
      blocks: [
        {
          kind: "table",
          title: "Common analyst cases and a starting structure",
          head: ["Case", "Break it down into"],
          rows: [
            ["Revenue fell", "Revenue = Customers × Orders per customer × Average order value; then by segment, channel, region"],
            ["Profit fell", "Revenue side vs cost side (fixed vs variable); one-offs"],
            ["Should we launch X?", "Market size, customer need, competition, cost to build, expected return, risks"],
            ["Which metric for a new feature?", "Goal → primary metric → guardrail metrics → how to measure (A/B test)"],
            ["Pricing change", "Volume response (elasticity), margin, competitor reaction, customer segments"],
          ],
        },
        {
          kind: "points",
          items: [
            "Structure first, then data: say \"I'd split this into three parts\" before diving in.",
            "Ask for data you'd actually need; interviewers often have numbers ready if you ask.",
            "End with a recommendation and the next analysis you'd run. A case without a conclusion feels unfinished.",
          ],
        },
        {
          kind: "example",
          q: "A food-delivery app's orders are flat but revenue fell 8%. Where do you look?",
          steps: [
            "Revenue = orders × average order value (or commission per order). Orders are flat, so AOV or take rate fell.",
            "Check: basket size, mix shift to cheaper restaurants or cities, discounts and coupon spend, commission changes, delivery-fee waivers.",
            "Segment by city, new vs repeat users, and restaurant category.",
          ],
          answer: "Decompose revenue; with orders flat, focus on AOV, discounts and take rate",
        },
      ],
    },
    {
      lecture: "STAR answers",
      blocks: [
        {
          kind: "table",
          head: ["Part", "Share of the answer", "Content"],
          rows: [
            ["Situation", "~15%", "Context in one or two sentences"],
            ["Task", "~10%", "What you specifically had to achieve"],
            ["Action", "~55%", "What **you** did, step by step (\"I\", not \"we\")"],
            ["Result", "~20%", "Outcome with a number, plus what you learned"],
          ],
        },
        {
          kind: "points",
          title: "Prepare one story for each",
          items: [
            "A time you found an insight that changed a decision.",
            "A time your analysis was wrong, or data was bad, and what you did.",
            "A conflict or disagreement with a teammate or stakeholder.",
            "Explaining something technical to a non-technical person.",
            "Working under a tight deadline.",
            "Learning a new tool quickly.",
          ],
        },
        {
          kind: "tip",
          text: "Coursework and IITM BS projects count. \"In my Business Analytics project, I…\" is a perfectly good story if the action and result are concrete.",
        },
      ],
    },
    {
      lecture: "Full mock interview",
      blocks: [
        {
          kind: "points",
          title: "How to run it",
          items: [
            "Pair with a friend from your cohort and swap roles. 45 minutes: 5 intro, 15 SQL, 10 case, 10 behavioural, 5 your questions.",
            "Record it (with consent). Watch for filler words, long silences, and answers that never reach a result.",
            "Do at least three full mocks before your first real interview, each with a different partner.",
          ],
        },
        {
          kind: "table",
          title: "Score sheet",
          head: ["Area", "1–5 rating on"],
          rows: [
            ["Technical accuracy", "Correct query/logic, edge cases considered"],
            ["Communication", "Restated questions, thought aloud, clear structure"],
            ["Business sense", "Connected analysis to decisions and money"],
            ["Stories", "STAR complete, with numbers and personal actions"],
            ["Questions asked", "Specific, curious questions about the team's data and decisions"],
          ],
        },
        {
          kind: "tip",
          text: "Questions to ask them: \"What does a great first 90 days look like?\", \"Which decisions does this team's analysis feed?\", \"What's the hardest data problem you have right now?\"",
        },
      ],
    },
  ],
  recap: [
    "Write resume bullets as action + tool + measurable result, mirroring the job post's words.",
    "Two or three finished portfolio projects with a clear question and recommendation beat many tutorials.",
    "Most SQL rounds are a handful of patterns: top-N per group, LAG, running totals, anti-joins, cohorts.",
    "For cases and guesstimates, structure out loud before calculating, and end with a recommendation.",
    "Prepare six STAR stories and run at least three recorded mock interviews.",
  ],
};
