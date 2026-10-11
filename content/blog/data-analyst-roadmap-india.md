---
title: "Data Analyst Roadmap for India (2026–27): Skills, Projects, Jobs"
description: "A month-by-month roadmap to become a data analyst in India: what to learn (Excel, SQL, Power BI, Python, statistics, AI), projects that get interviews, resumes, salaries and job search."
date: 2026-10-11
updated: 2026-10-11
category: careers
tags: [Data Analyst, Careers, SQL, Python, Power BI, Excel, Roadmap]
keyword: data analyst roadmap
cover: Analyst roadmap · 9 months
highlights: [Excel → SQL → BI → Python, 3 projects, Interview prep]
featured: false
---

**To become a data analyst in India, learn Excel and basic statistics first, then SQL to a strong level, then one BI tool (Power BI or Tableau), then Python with pandas, and build three portfolio projects that each end in a business recommendation.** At around 10 hours a week, that takes most people six to nine months from zero. Alongside the tools, practise using AI assistants and, crucially, verifying their output, because that's what employers now expect from freshers. Then spend two to three months on your resume, LinkedIn, mock interviews and applications.

This guide turns that summary into a plan you can follow: what to learn in which order and why, how deep to go, free resources, the projects that actually get callbacks, what the job market looks like in 2026, and the mistakes that slow people down. It's written for Indian students and career-switchers, including IIT Madras BS learners who want to turn their coursework into a job.

## What a data analyst actually does

Before the roadmap, a reality check, because the job title covers a lot of ground.

A data analyst's core job is to **help someone make a better decision using data**. In practice, a typical week involves:

- **Getting requests** from a manager or team: "Why did sales drop in the South?", "How is the new feature performing?", "Build a dashboard for weekly collections".
- **Finding and pulling data**, usually with SQL from a company database or data warehouse.
- **Cleaning and checking it**: missing values, duplicates, definitions that don't match.
- **Analysing it**: comparisons, trends, segments, sometimes statistical tests.
- **Presenting it**: a dashboard, a spreadsheet, a slide or a short written summary.
- **Recommending something**: "Focus on these two cities", "Change the onboarding email", "The drop is seasonal; don't panic".

### Related roles you'll see in job posts

| Title | What's different |
|---|---|
| **Data analyst** | The general role described above |
| **Business analyst** | Closer to business processes and requirements; often more stakeholder work, less coding |
| **MIS analyst / reporting analyst** | Regular reports and dashboards, heavy Excel; a common entry route |
| **Product analyst** | Analyses user behaviour in an app or website; A/B tests, funnels, retention |
| **BI developer / analyst** | Builds and maintains dashboards and data models in Power BI, Tableau or similar |
| **Marketing, financial, HR or operations analyst** | A data analyst inside a specific function, with domain knowledge to match |

The skills overlap heavily. The roadmap below prepares you for all of them; your projects and domain knowledge decide which ones you're strongest for.

## The skill stack, in order

![A pyramid: foundations at the bottom, then SQL, then BI and Python, then judgement and verification, then influence at the top.](/blog/data-analyst-roadmap-india/skill-stack.svg "Learn from the bottom up. Each layer depends on the ones below it.")

Order matters more than people think. Learning Python before you can think clearly about data, or building dashboards before you can write the SQL behind them, leads to shaky skills. Here's the order we recommend, and why.

### 1. Excel and spreadsheets (month 1)

**Why first:** almost every analyst job uses spreadsheets daily, and Excel teaches you to think in rows, columns, lookups and aggregations, which is the mental model behind SQL and pandas.

**What to learn:**

- Cell references (relative, absolute), named ranges
- `XLOOKUP` (and `INDEX/MATCH` for older versions)
- `IF`, `IFS`, `SUMIFS`, `COUNTIFS`, `AVERAGEIFS`
- Excel Tables (Ctrl + T) and structured references
- Pivot tables, slicers and pivot charts
- Dynamic arrays: `FILTER`, `UNIQUE`, `SORT`
- Basic charts done well

**How deep:** you should be able to take a raw export of 10,000 rows and answer "revenue by region by month, top 10 products, and share of total" in under 30 minutes.

**Free resource:** our [Excel for Business notes](/skills/excel-for-business/notes) take you from formulas to a three-statement financial model.

### 2. Statistics basics (alongside month 1)

**Why:** without statistics, you'll report noise as signal. You don't need a statistics degree, but you do need to know when a difference is real.

**What to learn:**

- Mean, median, mode and when each misleads
- Spread: standard deviation, percentiles, IQR, outliers
- Distributions and the shape of data (skew)
- Correlation vs causation
- Sampling, confidence intervals and the idea of a hypothesis test
- A/B testing basics

**Free resource:** our [Practical Statistics notes](/skills/statistics-for-data-science/notes), including a worked A/B test.

### 3. SQL, properly (months 2–3)

**Why:** SQL is the most requested skill in analyst job posts, and it's where most of your data will come from. It's also where AI-generated code most often goes subtly wrong, so you need to be fluent enough to check it.

**What to learn, in order:**

1. `SELECT`, `WHERE`, `ORDER BY`, `LIMIT`
2. Aggregations: `GROUP BY`, `HAVING`, `COUNT(DISTINCT …)`
3. Joins: `INNER`, `LEFT`, self joins, anti-joins (`NOT EXISTS`)
4. `CASE WHEN` and conditional aggregation
5. Subqueries and CTEs (`WITH`)
6. Window functions: `ROW_NUMBER`, `RANK`, `LAG`, running totals, moving averages
7. Dates: truncating to month, differences, time zones
8. NULL handling everywhere

**How deep:** you should be able to solve a medium-level SQL interview problem (top-N per group, month-over-month growth, retention cohorts) in 15 minutes, and explain the grain of every intermediate result.

**Free resource:** our [SQL for Analysts notes](/skills/sql-for-analysts/notes), which end with the interview patterns that come up most.

> [!TIP]
> Practise SQL on real-looking schemas, not toy tables. Set up a free PostgreSQL database locally or in the browser, load a public dataset, and write twenty questions about it yourself. Then answer them.

### 4. A BI tool: Power BI or Tableau (month 4)

**Why:** most companies want dashboards that people can explore themselves. Power BI is very common in Indian corporates (especially those on Microsoft 365); Tableau is common in some analytics-heavy firms. Learn one well; the concepts transfer.

**What to learn (Power BI):**

- Power Query for cleaning and reshaping
- Star-schema data models (facts and dimensions)
- DAX measures: `CALCULATE`, `DIVIDE`, time intelligence (YTD, YoY)
- Dashboard design: layout, colour, one question per page
- Publishing and sharing basics

**Free resource:** our [Power BI Dashboards notes](/skills/power-bi-dashboards/notes).

### 5. Python with pandas (months 5–6)

**Why:** Python lets you handle bigger data, automate repetitive work, and do analysis that's awkward in Excel or SQL. Not every analyst job requires it, but it significantly widens your options, and it's increasingly expected.

**What to learn:**

- Python basics: variables, lists, dictionaries, loops, functions
- pandas: loading, filtering, `groupby`, merging, reshaping, dates
- Missing data and data cleaning
- Visualisation with Matplotlib or Seaborn
- Notebooks (Jupyter or Google Colab)
- Optional later: basic scikit-learn for simple predictive models

**Free resource:** our [Python for Data Analysis notes](/skills/python-for-data-analysis/notes), which end with a ten-question business capstone.

### 6. Communication (throughout)

**Why:** the analysis isn't finished until someone understands it and acts on it. This is the skill that most separates analysts who get promoted from those who don't.

**What to practise:**

- Writing one-paragraph executive summaries: answer first, evidence second, ask last
- Chart titles that state the takeaway
- Presenting a five-minute story with three charts

**Free resource:** our [Data Storytelling notes](/skills/data-storytelling/notes).

### 7. AI fluency and verification (throughout)

**Why:** AI assistants now draft SQL, formulas, pandas code and summaries. Employers expect you to use them, and to catch their mistakes.

**What to practise:**

- Giving AI the schema, definitions and business rules it needs
- Asking for code you can read, not just answers
- Checking row counts, totals and edge cases after every AI-assisted step
- Knowing what data you're allowed to paste into which tool

We explain why this matters so much now in [Will AI replace data analysts?](/blog/ai-and-data-analyst-jobs-2026), and how AI agents work in [AI agents, explained](/blog/ai-agents-explained). Our [Generative AI for Business notes](/skills/genai-for-business/notes) cover the practical workflows.

## The month-by-month plan

![Nine months: Excel and statistics, SQL, a BI tool, Python with projects, then job search, with AI fluency and communication throughout.](/blog/data-analyst-roadmap-india/roadmap.svg "A realistic plan at about 10 hours a week, starting from zero.")

Here's the plan in detail, at about 10 hours a week. If you can give 20 hours, you can roughly halve the timeline. If you already have a quantitative degree, you can move faster through months 1–4.

| Month | Focus | Weekly rhythm | Milestone |
|---|---|---|---|
| 1 | Excel + statistics | 6 hrs Excel, 4 hrs statistics | Answer 10 business questions from a raw sales export using pivots and formulas |
| 2 | SQL basics → joins | 8 hrs SQL, 2 hrs review | Write 30 queries on a real dataset, including multi-table joins |
| 3 | Advanced SQL | 8 hrs SQL problems, 2 hrs explaining your solutions aloud | Solve medium interview problems in 15 minutes |
| 4 | Power BI | 7 hrs building, 3 hrs design | A two-page dashboard with a proper data model and 5+ DAX measures |
| 5 | Python basics + pandas | 8 hrs coding, 2 hrs notes | Recreate your month-1 Excel analysis in pandas |
| 6 | Projects | 10 hrs projects | Three finished portfolio projects (see below) |
| 7 | Resume, LinkedIn, portfolio | 4 hrs materials, 6 hrs interview practice | Resume reviewed by two people; portfolio live |
| 8–9 | Applications + interviews | 3 hrs applications, 5 hrs practice, 2 hrs networking | Interviews, offers |

> [!WARNING]
> The most common way this plan fails is **tutorial loops**: watching course after course without building anything. Set a rule: for every hour of watching or reading, spend at least one hour building or solving problems.

## Portfolio projects that get interviews

Recruiters see the same projects again and again: Titanic survival, Iris flowers, a generic "sales dashboard". They don't hurt, but they don't help much either. What helps is a project that shows you can **take a messy, realistic situation to a recommendation**.

### What makes a project stand out

- **A real question with a decision attached.** "Should this retailer open a store in Pune or Nagpur?" beats "Exploratory analysis of retail data".
- **Data you had to work for.** Combining two public datasets, cleaning a messy government file, or collecting your own data shows initiative.
- **Visible verification.** A short section on how you checked your numbers.
- **A clear recommendation** with the two or three numbers that support it.
- **A readable README**: question, answer in two sentences, one key chart, how to reproduce it.

### Three projects that cover the stack

| Project | Tools | Shows |
|---|---|---|
| **Customer retention analysis** for an e-commerce dataset: cohort retention by signup month, repeat-purchase drivers, a recommendation for the CRM team | SQL + Power BI | Data modelling, window functions, dashboard design, business framing |
| **Delivery-delay investigation**: which factors (courier, city, distance, weekday) drive late deliveries, with a statistical comparison and an estimated cost | Python (pandas, Seaborn) | Cleaning, EDA, statistics, storytelling |
| **Pricing or budgeting model** for a subscription business or a small company, with scenarios | Excel | Business logic, scenario analysis, financial thinking |

### Indian data sources worth using

- **data.gov.in**, the Open Government Data Platform: agriculture, health, transport, education and much more.
- **Reserve Bank of India** data (the RBI's Database on Indian Economy): banking, inflation, credit.
- **State open-data portals** and municipal datasets.
- **NSE/BSE** company filings and annual reports, for financial projects.
- **Kaggle** datasets set in India (e-commerce, food delivery, real estate), as long as you bring your own question.

Our [interview prep notes](/skills/analyst-interview-prep/notes#portfolio-projects-that-stand-out) have more on structuring a portfolio.

## Degrees and certifications: what matters

### Do you need a degree?

Most analyst job posts in India ask for a graduate degree, often in a quantitative field, but many accept any discipline if your skills are demonstrable. A relevant degree helps most at the screening stage; your portfolio and interviews matter more after that.

If you're choosing a degree, programmes that combine data skills with business knowledge are especially well suited to analyst roles. The IIT Madras BS in Management and Data Science, for example, includes Python for Data Analytics, Data Management (databases and SQL), Business Statistics and function-specific analytics courses, plus two applied projects. The BS in Data Science and Applications goes deeper into programming and machine learning. Our [comparison of the two](/blog/iitm-bs-management-vs-data-science) explains which fits which goals, and our [complete IITM BS guide](/blog/iit-madras-bs-degree-complete-guide) covers admission and fees.

### Are certifications worth it?

Some certifications help as **signals of a specific skill**, particularly when you don't have work experience. Vendor certifications like Microsoft's Power BI Data Analyst certification are recognised by employers using that tool. General online certificates are fine for structure and motivation, but they're weak signals on their own.

Our rule of thumb: a certificate plus a project built with that skill beats either alone. A certificate with no project behind it rarely moves a recruiter.

## The 2026 job market in India

### Demand

Demand for data and AI skills is healthy. LinkedIn's *Skills on the Rise 2026* report for India lists **data & analytics** and **AI & automation** among five fast-growing skill clusters, and reports that 74% of Indian recruiters have difficulty finding qualified talent ([LinkedIn News](https://news.linkedin.com/2026/Skills-on-the-rise-2026)).

At the same time, the **entry bar is higher** than it was a few years ago. AI tools now handle many routine tasks freshers used to do, so employers look for candidates who can frame problems, verify results and communicate, not just write queries. We cover this shift in detail in [Will AI replace data analysts?](/blog/ai-and-data-analyst-jobs-2026)

### Who hires

Analyst roles in India are spread across many kinds of employers:

- **IT services and consulting firms**, often for client analytics projects.
- **Global capability centres (GCCs)**: in-house analytics and technology hubs of multinational companies, concentrated in Bengaluru, Hyderabad, Pune, Chennai and NCR.
- **Banks, insurers, NBFCs and fintechs**: risk, collections, customer analytics.
- **E-commerce, quick commerce and consumer apps**: product, growth, supply chain analytics.
- **FMCG, retail and manufacturing**: sales, supply chain and pricing analytics.
- **Startups**: broad roles where one analyst does everything, great for learning.

### Salaries

Pay varies widely by city, company type and skills, so treat any single number with caution. Salary guides published in 2026 commonly put **fresher** data analyst pay in India in a range of roughly ₹3.5–6 lakh a year, with **2–4 years of experience** in roughly the ₹6–12 lakh range, and higher at product companies, GCCs and in Bengaluru ([one example guide](https://www.masaischool.com/blog/data-analyst-salary-in-india-2026-the-complete-city-and-skill-breakdown/)). Check current postings and salary-reporting sites for your city and target companies before negotiating.

What reliably raises your number: strong SQL, a BI tool, Python, domain knowledge in a high-value function (finance, product, risk), and evidence that you can communicate with stakeholders.

## Getting the job

### Resume

- **One page**, single column, standard headings. ATS software needs to read it.
- **Projects above education** if your projects are your strongest evidence.
- **Bullets as action + tool + result**: "Built a Power BI dashboard tracking weekly collections across 40 branches; flagged three branches whose overdue rate doubled in Q2."
- **Mirror the job post's words** where they're true for you.
- **No skill bars or ratings.** List skills plainly.

### LinkedIn and visibility

- A headline that says what you do: "Aspiring Data Analyst · SQL · Power BI · Python · IIT Madras BS learner".
- A post for each project, with one chart and three sentences on what you found.
- Thoughtful comments on posts by analysts and hiring managers in your target industry.

### Where to apply

- Company career pages and LinkedIn Jobs, filtered by "Entry level" and "Internship".
- Naukri and other job portals, with alerts for "data analyst", "MIS analyst", "business analyst" and "reporting analyst".
- Referrals: the single most effective channel. Ask people whose work you've engaged with, specifically and politely.
- Internships, including part-time and remote ones, which often convert to full-time roles.

### Interviews

Most analyst interview processes in India combine some of: an online test (SQL, Excel, aptitude), a technical interview (SQL live, sometimes Python), a case or guesstimate round, and an HR or managerial round.

Prepare for each:

| Round | Prepare |
|---|---|
| SQL | Top-N per group, LAG/LEAD, running totals, anti-joins, retention cohorts, NULL handling |
| Excel | Lookups, pivots, conditional aggregation, a quick model |
| Python (if asked) | pandas groupby, merge, pivot, date handling |
| Case / guesstimate | Structure aloud: clarify, segment, assume, calculate, sanity-check, recommend |
| Statistics | When is a difference significant? What would you check in an A/B test? |
| AI judgement | "AI wrote this query. What would you check?" |
| Behavioural | Six STAR stories: an insight that changed a decision, a mistake, a conflict, explaining to a non-technical person, a deadline, learning a tool fast |

Our [Crack the Data Analyst Interview notes](/skills/analyst-interview-prep/notes) cover every round with worked examples and a mock-interview plan.

## Mistakes that slow people down

1. **Learning tools in the wrong order.** Python before SQL, dashboards before data modelling. Follow the stack.
2. **Endless courses, no projects.** Employers hire evidence, not certificates.
3. **Shallow SQL.** Most technical rejections are SQL rejections. Go deep.
4. **Projects without a question.** "EDA of dataset X" tells a recruiter nothing.
5. **Ignoring communication.** If you can't explain your project in two minutes, it doesn't exist in an interview.
6. **Using AI without verifying.** Submitting AI-written analysis with a silent error is worse than submitting nothing.
7. **Applying only through job portals.** Referrals and direct outreach convert far better.
8. **Waiting until you feel ready.** Start applying for internships by month 6; interviews are the best practice there is.

## If you're an IITM BS learner

You have advantages: a structured curriculum, an IIT Madras credential at each level, and courses that map directly onto analyst skills. To turn that into a job:

- **Map courses to the roadmap.** Business Statistics and Stats I/II cover the statistics layer; Data Management covers SQL; Python for Data Analytics covers Python; the analytics courses give you domain projects.
- **Turn each analytics course into a portfolio project.** The Business Analytics Project in particular should be interview-ready.
- **Add the gaps yourself.** Coursework rarely drills a BI tool or interview-style SQL; spend an extra two hours a week on those.
- **Start internships early.** By the time you're halfway through the Diploma, you have enough to be useful to a small company.

Our [complete IITM BS guide](/blog/iit-madras-bs-degree-complete-guide) has a table mapping courses to target roles.

## Frequently asked questions

### How long does it take to become a data analyst in India?

From zero, about six to nine months at 10 hours a week, plus two to three months of job search. With a quantitative degree or more time per week, it can be faster.

### Can I become a data analyst without a technical degree?

Yes. Many analysts come from commerce, economics, arts and other backgrounds. You'll need to demonstrate the skills through projects, and a structured programme or recognised certification can help at screening.

### Should I learn Python or SQL first?

SQL first. It's more frequently required, it's where your data comes from, and it builds the mental model that makes pandas easier later.

### Power BI or Tableau?

Learn one well. Power BI is very widely used in Indian corporates, especially those on Microsoft 365; check job posts in your target sector and city, and pick the one that appears more often.

### Is data analytics a good career with AI around?

Yes, for people who can frame problems, verify results and communicate. AI is automating routine tasks, which raises the entry bar but also makes good analysts more productive. See [Will AI replace data analysts?](/blog/ai-and-data-analyst-jobs-2026)

### What salary can a fresher data analyst expect in India?

Salary guides commonly put fresher pay at roughly ₹3.5–6 lakh a year, varying widely by city, company and skills. Check current postings and salary sites for your target roles.

### Do I need to know machine learning to be a data analyst?

No. Most analyst roles focus on SQL, spreadsheets, BI and statistics. Basic machine-learning knowledge is a bonus, and essential only if you're aiming at data scientist roles.

### How many projects do I need?

Two or three finished projects with clear questions and recommendations are enough for most entry-level applications. Quality beats quantity.

### Is the IIT Madras BS useful for becoming a data analyst?

Yes. Both data programmes cover statistics, programming and data management, and the Management and Data Science programme adds business analytics courses and applied projects. Pair the coursework with portfolio projects and interview practice.
