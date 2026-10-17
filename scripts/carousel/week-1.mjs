// Week 1 of the 30-day Qualifier plan (marketing/linkedin/content-plan.md): 2 carousels a day.
// AM = teach one topic. PM = one question to solve, answer on the next slide.
// Facts and PYQs come from the cheat sheets in src/lib/data/cheat-notes/. Keep them in sync.
//
// Google search: each post's first line starts with the search phrase (LinkedIn builds the post URL
// and Google's title from it), and the one link goes to the btechi.in page that should rank for it.

const SITE = "https://www.btechi.in";
const utm = (p, post) => `${SITE}${p}?utm_source=linkedin&utm_medium=social&utm_campaign=qualifier30&utm_content=${post}`;
const TAGS = "#IITMadras #IITMBS #IITMadrasQualifier #IITMQualifier #DataScience";
const cta = { type: "cta" };

// Pages on btechi.in that each post sends people to, with the line that goes before the link.
const PAGES = {
  guide: ["/blog/iitm-bs-qualifier-exam-guide", "Full Qualifier guide (syllabus, cutoffs, prep plan)"],
  maths: ["/blog/iitm-qualifier-maths-important-questions", "Maths I important questions and PYQs, with answers"],
  stats: ["/blog/iitm-qualifier-stats-important-questions", "Stats I important questions and PYQs, with answers"],
  ct: ["/blog/iitm-qualifier-computational-thinking-pyq", "Computational Thinking PYQs, with answers"],
  english: ["/blog/iitm-qualifier-english-important-questions", "English I important questions and PYQs, with answers"],
  mock: ["/qualifier", "Free full Qualifier mock with a pass/fail check"],
  notes: ["/qualifier/notes", "Free Qualifier notes and formula sheets"],
};

/**
 * SEO for each post. `first` is the caption's first line (search phrase first). `replace` swaps it in for
 * the body's first line; otherwise it goes above the body. `pdf` is the document title typed in LinkedIn
 * and stored in the PDF.
 */
const SEO = {
  "day-01-am-30-day-plan": { page: "guide", replace: true, keyword: "iitm qualifier study plan", pdf: "IITM Qualifier 30-day study plan PDF",
    first: "IITM Qualifier study plan: how to clear the IIT Madras BS Qualifier in 30 days." },
  "day-01-pm-cutoff-rule": { page: "guide", keyword: "iitm qualifier cutoff", pdf: "IITM Qualifier cutoff explained: the 40/50 rule",
    first: "IITM Qualifier cutoff explained: the 40/50 pass rule." },
  "day-02-am-maths-sets-formulas": { page: "maths", replace: true, keyword: "iitm qualifier maths important questions", pdf: "IITM Qualifier Maths formulas PDF: sets and Venn diagrams",
    first: "IITM Qualifier Maths important questions: 8 set formulas that keep coming back." },
  "day-02-pm-maths-venn-pyq": { page: "maths", keyword: "iitm qualifier maths pyq", pdf: "IITM Qualifier Maths PYQ: Venn diagram (Jan 2024 pattern)",
    first: "IITM Qualifier Maths PYQ: a Venn diagram question to solve in 2 minutes." },
  "day-03-am-stats-data-types": { page: "stats", replace: true, keyword: "iitm qualifier stats important questions", pdf: "IITM Qualifier Stats PDF: 5 data-type traps",
    first: "IITM Qualifier Stats important questions: 5 data-type traps that cost easy marks." },
  "day-03-pm-stats-mean-pyq": { page: "stats", keyword: "iitm qualifier stats pyq", pdf: "IITM Qualifier Stats PYQ: mean (Sep 2023 pattern)",
    first: "IITM Qualifier Stats PYQ: most students pick the wrong answer here." },
  "day-04-am-ct-checklist": { page: "ct", replace: true, keyword: "iitm qualifier computational thinking", pdf: "IITM Qualifier Computational Thinking PDF: pseudocode checklist",
    first: "IITM Qualifier Computational Thinking: a 5-step checklist for any pseudocode question." },
  "day-04-pm-ct-or-filter": { page: "ct", keyword: "iitm qualifier computational thinking pyq", pdf: "IITM Qualifier CT PYQ: filtering with 'or'",
    first: "IITM Qualifier Computational Thinking PYQ: how many cards pass this filter?" },
  "day-05-am-english-vowels": { page: "english", replace: true, keyword: "iitm qualifier english important questions", pdf: "IITM Qualifier English PDF: vowel sounds and PYQ answers",
    first: "IITM Qualifier English important questions: the vowel sounds IITM asks about." },
  "day-05-pm-english-odd-sound": { page: "english", keyword: "iitm qualifier english pyq", pdf: "IITM Qualifier English PYQ: odd one out by sound (May 2024)",
    first: "IITM Qualifier English PYQ: find the odd one out by sound." },
  "day-06-am-maths-relations": { page: "maths", replace: true, keyword: "iitm qualifier maths relations", pdf: "IITM Qualifier Maths PDF: relations and their traps",
    first: "IITM Qualifier Maths: relations explained in one post." },
  "day-06-pm-stats-iqr-pyq": { page: "stats", keyword: "iitm qualifier stats iqr", pdf: "IITM Qualifier Stats PYQ: IQR and outliers (Sep 2023)",
    first: "IITM Qualifier Stats PYQ: find the IQR and the outlier." },
  "day-07-am-first-mock": { page: "mock", replace: true, keyword: "iitm qualifier mock test", pdf: "IITM Qualifier mock test: how to take your first one",
    first: "IITM Qualifier mock test: take your first full mock today." },
  "day-07-pm-week-1-traps": { page: "notes", replace: true, keyword: "iitm qualifier notes pdf", pdf: "IITM Qualifier notes PDF: 8 traps from week 1",
    first: "IITM Qualifier notes: 8 traps from week 1 of the 30-day plan." },
};

function caption(slug, body) {
  const seo = SEO[slug];
  const [path, label] = PAGES[seo.page];
  let lines = body.trim().split("\n");
  if (seo.replace) lines = lines.slice(1);
  return `${seo.first}\n\n${lines.join("\n").trim()}\n\n${label}: ${utm(path, slug)}\n\n${TAGS}`;
}

export const week1 = [
  // ---------------- Day 1 ----------------
  {
    slug: "day-01-am-30-day-plan",
    slides: [
      { type: "cover", kicker: "Qualifier in 30 days", title: "The 30-day plan to clear the IIT Madras BS Qualifier", sub: "One focus each week. One full mock each week. Save this." },
      { type: "stats", kicker: "First, know the target", title: "What you must score", stats: [["4", "subjects in the exam"], ["Wk 1–4", "syllabus of each subject"], ["40%", "minimum in every subject"], ["50%", "minimum average of all 4"]], note: "Cutoff for the General category. Check the official IITM BS website for your category." },
      { type: "list", kicker: "The plan", title: "Week by week", items: [
        { num: "1", title: "Know the exam", desc: "Read the syllabus. Take one full mock cold. Note your weak topics." },
        { num: "2", title: "Maths I + Stats I", desc: "Sets, relations, functions, lines, quadratics. Data types, mean, SD, IQR." },
        { num: "3", title: "CT + English I", desc: "Pseudocode patterns, sounds, grammar and reading comprehension." },
        { num: "4", title: "Mocks and revision", desc: "Timed full mocks, your mistake notebook, then rest before exam day." },
      ] },
      { type: "list", kicker: "Every day", title: "A simple 2-hour routine", items: [
        { icon: "book", title: "45 min: learn one topic", desc: "From the course videos or notes." },
        { icon: "pencil", title: "45 min: solve PYQs on it", desc: "On a timer, not from a PDF." },
        { icon: "x", title: "20 min: fix your mistakes", desc: "Write each one in a mistake notebook." },
        { icon: "repeat", title: "10 min: revise yesterday", desc: "Read yesterday's mistakes again." },
      ] },
      { type: "bullets", kicker: "3 rules", title: "Do not break these", tone: "check", items: [
        "Practise on a timer. The real exam is timed.",
        "Every mistake goes in your notebook, with the reason.",
        "Never skip the weekly full mock. It shows what to fix next.",
      ] },
      cta,
    ],
    caption: `
30 days to the IIT Madras BS Qualifier? Here is a simple plan.

Week 1: Know the exam. Take one full mock and find your weak topics.
Week 2: Maths I and Stats I.
Week 3: Computational Thinking and English I.
Week 4: Timed mocks and revision.

The target: at least 40% in every subject and at least 50% average (General category).

2 hours a day is enough to start. Save this post and follow along. We post 2 short lessons every day this month.`,
  },
  {
    slug: "day-01-pm-cutoff-rule",
    slides: [
      { type: "cover", kicker: "Qualifier cutoff", title: "Pass or fail? The 40/50 rule", sub: "Most students know the average rule. Many forget the other one." },
      { type: "bullets", kicker: "The rule (General category)", title: "You need both", tone: "check", items: [
        "At least 40% in every one of the 4 subjects.",
        "At least 50% average across the 4 subjects.",
        "Miss either one and you do not qualify.",
      ] },
      { type: "scorecard", kicker: "Student A", title: "Great average. Still a fail.", scores: [["Maths I", 80], ["Stats I", 70], ["Computational Thinking", 35], ["English I", 75]] },
      { type: "scorecard", kicker: "Student B", title: "Every subject above 40%. Still a fail.", scores: [["Maths I", 45], ["Stats I", 48], ["Computational Thinking", 52], ["English I", 50]] },
      { type: "scorecard", kicker: "Student C", title: "Balanced scores. Pass.", scores: [["Maths I", 42], ["Stats I", 55], ["Computational Thinking", 60], ["English I", 50]] },
      { type: "statement", kicker: "The lesson", text: "Fix your weakest subject first.", sub: "One weak subject can fail you, even with a great average." },
      cta,
    ],
    caption: `
The IIT Madras BS Qualifier has two rules, not one (General category):

1. At least 40% in every subject.
2. At least 50% average across the 4 subjects.

Student A: 80, 70, 35, 75. Average 65%. Fail, because CT is below 40%.
Student B: 45, 48, 52, 50. Every subject above 40%. Fail, because the average is 48.75%.
Student C: 42, 55, 60, 50. Pass.

So fix your weakest subject first. Which subject is yours? Tell us in the comments.`,
  },

  // ---------------- Day 2 ----------------
  {
    slug: "day-02-am-maths-sets-formulas",
    slides: [
      { type: "cover", kicker: "Maths I · Week 1", title: "8 set formulas that keep coming back", sub: "Sets and Venn diagrams show up in almost every Qualifier paper." },
      { type: "formulas", kicker: "Sets", title: "Counting subsets (|A| = n)", rows: [
        ["Power set", "|P(A)| = 2ⁿ"],
        ["Proper subsets", "2ⁿ − 1"],
        ["Subsets of size k", "C(n, k) = n! / (k! (n − k)!)"],
        ["Cartesian product", "|A × B| = |A| · |B|"],
      ] },
      { type: "formulas", kicker: "Venn diagrams", title: "Counting people in groups", rows: [
        ["Two sets", "|A ∪ B| = |A| + |B| − |A ∩ B|"],
        ["Three sets", "|A ∪ B ∪ C| = |A| + |B| + |C| − |A ∩ B| − |B ∩ C| − |A ∩ C| + |A ∩ B ∩ C|"],
        ["Neither / none", "Total − |A ∪ B ∪ C|"],
        ["Smallest overlap", "max(0, |A| + |B| − Total)"],
      ] },
      { type: "list", kicker: "Method", title: "Fill a Venn diagram from the centre out", items: [
        { num: "1", title: "All three", desc: "Put the triple overlap in the middle first." },
        { num: "2", title: "Exactly two", desc: "Take the middle away from each pair." },
        { num: "3", title: "Only one", desc: "Then fill each 'only' region." },
        { num: "4", title: "None", desc: "Total minus the union goes outside." },
      ] },
      { type: "bullets", kicker: "Traps", title: "Where marks are lost", tone: "alert", items: [
        "{∅} is not empty. It has one element.",
        "{1, 2, 2} = {2, 1}. Repeats and order do not matter.",
        "'Both A and B' includes people also in C. 'Only A and B' does not.",
        "If the total is not given, never assume 'none' is 0.",
      ] },
      cta,
    ],
    caption: `
Maths I: 8 set formulas that keep coming back in the IIT Madras BS Qualifier.

Power set: 2^n
Proper subsets: 2^n − 1
Two sets: |A ∪ B| = |A| + |B| − |A ∩ B|
None: Total − union

Plus the method for Venn questions: fill the diagram from the centre out.

Save this for your revision. Tonight: a real Venn question to solve.`,
  },
  {
    slug: "day-02-pm-maths-venn-pyq",
    slides: [
      { type: "cover", kicker: "PYQ pattern · Maths I · Jan 2024", title: "Can you solve this in 2 minutes?", sub: "A Venn question from the Qualifier. Answer on slide 3." },
      { type: "question", kicker: "Maths I · Sets", q: "Of 100 customers, 50 bought milk, 40 bread and 30 fruits. 20 bought milk and bread, 15 milk and fruits, 10 bread and fruits, and 5 bought all three.\n\n(a) How many bought milk and fruits, but not bread?\n(b) How many bought none?", hint: "start from the centre: 5 bought all three." },
      { type: "answer", answer: "(a) 10 · (b) 20", steps: [
        "Milk and fruits, not bread = 15 − 5 = 10.",
        "Union = 50 + 40 + 30 − 20 − 15 − 10 + 5 = 80.",
        "None = 100 − 80 = 20.",
      ], trap: "'Milk and fruits' (15) includes the 5 who bought all three. Take them out first." },
      cta,
    ],
    caption: `
Maths I question (Jan 2024 Qualifier pattern):

Of 100 customers, 50 bought milk, 40 bread and 30 fruits. 20 bought milk and bread, 15 milk and fruits, 10 bread and fruits, and 5 bought all three.

(a) How many bought milk and fruits, but not bread?
(b) How many bought none?

Comment your answer first. Then swipe for the solution.`,
  },

  // ---------------- Day 3 ----------------
  {
    slug: "day-03-am-stats-data-types",
    slides: [
      { type: "cover", kicker: "Stats I · Week 1", title: "5 data-type traps that cost easy marks", sub: "Categorical or numerical? Nominal or ordinal? These are free marks if you know the traps." },
      { type: "list", kicker: "Traps 1 to 3", title: "Read the data, not the digits", items: [
        { icon: "tag", title: "Numbers used as labels are categorical", desc: "PIN code, roll number, phone number, jersey number: categorical, nominal." },
        { icon: "alert", title: "°C is interval, not ratio", desc: "0 °C is not 'no temperature'. 20 °C is not twice as hot as 10 °C." },
        { icon: "sigma", title: "Counts are numerical", desc: "Votes, children, cars: numerical, discrete, ratio scale." },
      ] },
      { type: "list", kicker: "Traps 4 and 5", title: "Two more to remember", items: [
        { icon: "calendar", title: "A 'year' column is not time series", desc: "Data from many villages collected at one time is cross-sectional." },
        { icon: "chart", title: "Mean needs numbers. Median needs order.", desc: "No mean for categorical data, even when coded as numbers. No median for nominal data." },
      ] },
      { type: "question", kicker: "Quick check · PYQ May 2024", q: "An election symbol. What type of data is it, and on what scale?", options: ["Numerical, ratio", "Categorical, ordinal", "Categorical, nominal", "Numerical, interval"] },
      { type: "answer", answer: "C. Categorical, nominal", steps: ["A symbol is a name for a group. It has no number value.", "Symbols have no natural order, so it is nominal, not ordinal."] },
      cta,
    ],
    caption: `
Stats I: 5 data-type traps in the IIT Madras BS Qualifier.

1. PIN codes and roll numbers are categorical, not numerical.
2. °C is interval, not ratio.
3. Counts (votes, cars) are numerical, discrete, ratio.
4. A 'year' column does not make data time series.
5. No mean for categorical data. No median for nominal data.

Quick check inside: an election symbol is which type of data?`,
  },
  {
    slug: "day-03-pm-stats-mean-pyq",
    slides: [
      { type: "cover", kicker: "PYQ pattern · Stats I · Sep 2023", title: "Most students pick the wrong answer here", sub: "One line. One trap. Answer on slide 3." },
      { type: "question", kicker: "Stats I · Mean", q: "The average annual package is ₹8 lakh. From each value, 5 is subtracted, and then the result is doubled. What is the new average?", options: ["₹11 lakh", "₹6 lakh", "₹3 lakh", "₹16 lakh"] },
      { type: "answer", answer: "B. ₹6 lakh", steps: [
        "Subtract 5 from every value: the mean also drops by 5. 8 − 5 = 3.",
        "Double every value: the mean also doubles. 2 × 3 = 6.",
      ], trap: "Order matters: 2(x̄ − 5) is not 2x̄ − 5. The wrong order gives ₹11 lakh." },
      { type: "bullets", kicker: "Bonus", title: "What happens to the spread?", tone: "dot", items: [
        "Adding or subtracting a number never changes the SD, variance, range or IQR.",
        "Multiplying by 2 doubles the SD and multiplies the variance by 4.",
      ] },
      cta,
    ],
    caption: `
Stats I question (Sep 2023 Qualifier pattern):

The average annual package is ₹8 lakh. From each value, 5 is subtracted, and then the result is doubled. What is the new average?

A. ₹11 lakh
B. ₹6 lakh
C. ₹3 lakh
D. ₹16 lakh

Comment A, B, C or D. Then swipe for the answer and the trap.`,
  },

  // ---------------- Day 4 ----------------
  {
    slug: "day-04-am-ct-checklist",
    slides: [
      { type: "cover", kicker: "Computational Thinking · Week 1", title: "A 5-step checklist for any pseudocode question", sub: "Use it on every CT question. It finds the bug fast." },
      { type: "list", kicker: "The checklist", title: "Steps 1 to 3", items: [
        { num: "1", title: "Start value", desc: "0 for a count or sum. A large value for min. True/False for a flag." },
        { num: "2", title: "Update", desc: "+ 1 counts. + X.field adds. = X.field keeps max, min or last seen." },
        { num: "3", title: "Filter", desc: "List every condition. Check and/or, and > vs ≥." },
      ] },
      { type: "list", kicker: "The checklist", title: "Steps 4 and 5", items: [
        { num: "4", title: "Scope", desc: "Reset inside the outer loop? Then it holds only one card's value." },
        { num: "5", title: "Dry-run", desc: "Run 3–4 cards in a table, one column per variable." },
      ] },
      { type: "statement", kicker: "Exam tip", text: "Options often differ by one thing only.", sub: "Check these three first: > vs ≥, 'and' vs 'or', first vs last." },
      { type: "bullets", kicker: "Traps", title: "Bugs the options love", tone: "alert", items: [
        "min = 0 bug: no mark is below 0, so min never changes. Start min large (100 for marks).",
        "> keeps the first maximum. ≥ keeps the last.",
        "Initialise before the loop, not inside it.",
        "No 'Move X to Table 2' means the loop never ends.",
      ] },
      cta,
    ],
    caption: `
Computational Thinking: a 5-step checklist for any pseudocode question.

1. Start value
2. Update
3. Filter
4. Scope
5. Dry-run

Exam tip: options often differ by one thing only. > vs ≥, and vs or, first vs last. Check those first.

Save it. Tonight: a CT question to try.`,
  },
  {
    slug: "day-04-pm-ct-or-filter",
    slides: [
      { type: "cover", kicker: "PYQ pattern · Computational Thinking", title: "How many cards pass this filter?", sub: "A favourite Qualifier pattern. Answer on slide 3." },
      { type: "question", kicker: "CT · Filtering", q: "In the Scores dataset, 14 students are female, 12 are from Chennai, and 5 are female and from Chennai. How many cards pass:\nX.Gender == \"F\" or X.CityTown == \"Chennai\"", options: ["26", "21", "31", "5"] },
      { type: "answer", answer: "B. 21", steps: [
        "'or' means at least one condition is true.",
        "count(A or B) = count(A) + count(B) − count(A and B).",
        "14 + 12 − 5 = 21.",
      ], trap: "26 counts the 5 female students from Chennai twice. 5 is the answer for 'and', not 'or'." },
      cta,
    ],
    caption: `
Computational Thinking question (Qualifier pattern):

In Scores, 14 students are female, 12 are from Chennai, and 5 are female and from Chennai.

How many cards pass: X.Gender == "F" or X.CityTown == "Chennai"?

A. 26  B. 21  C. 31  D. 5

Comment your answer, then swipe.`,
  },

  // ---------------- Day 5 ----------------
  {
    slug: "day-05-am-english-vowels",
    slides: [
      { type: "cover", kicker: "English I · Week 1", title: "The vowel sounds IITM asks about", sub: "Sounds are a big part of English I. Learn the course's way of writing them." },
      { type: "formulas", kicker: "Long vowels", title: "Written as double letters", rows: [
        ["ii", "seat, meet, wheat"],
        ["aa", "car, hard"],
        ["oo", "law, court, board"],
        ["uu", "food, root, loot"],
        ["əə", "bird"],
      ], note: "Short u is the vowel in foot." },
      { type: "bullets", kicker: "Traps", title: "Spelling lies", tone: "alert", items: [
        "'oo' in foot is short u. In food and root it is long uu.",
        "The course's oo is the vowel in law and court, not the one in food.",
        "a/an go by sound, not letter: an hour, an MBA, a university.",
      ] },
      { type: "formulas", kicker: "PYQ answers (2023–24)", title: "Pick the word", rows: [
        ["Has the 'u' sound: Root / Foot / Court", "Foot"],
        ["Has the 'oo' sound: Court / Loot / Cat / Feat", "Court"],
        ["Has the 'aa' sound: Hoard / Board / Hard / Teeth", "Hard"],
        ["Has no 'ii' sound: Meet / Lead / Wet / Wheat", "Wet"],
      ] },
      cta,
    ],
    caption: `
English I: the vowel sounds IITM asks about.

ii as in seat
aa as in car
oo as in law and court
uu as in food
u as in foot

The trap: spelling lies. 'oo' in foot is short u, but in food it is long uu.

4 real PYQ answers inside. Save this for revision.`,
  },
  {
    slug: "day-05-pm-english-odd-sound",
    slides: [
      { type: "cover", kicker: "PYQ · English I · May 2024", title: "Find the odd one out by sound", sub: "Say the words out loud. Answer on slide 3." },
      { type: "question", kicker: "English I · Sounds", q: "Which word starts with a different kind of sound?", options: ["near", "dear", "tear", "gear"] },
      { type: "answer", answer: "D. gear", steps: [
        "n, d and t are made with the tongue behind the top teeth (alveolar).",
        "g is made at the back of the mouth (velar).",
      ], trap: "Compare first sounds, not letters. knit starts with /n/, city with /s/, chemistry with /k/, phone with /f/." },
      { type: "question", kicker: "Try one more · PYQ Jan 2024", q: "Odd one out by first sound: noun, down, town, gown", footer: "Comment your answer below." },
      cta,
    ],
    caption: `
English I question (May 2024 Qualifier):

Which word starts with a different kind of sound?
near, dear, tear, gear

Say them out loud. Comment your answer, then swipe.

One more inside for you to try: noun, down, town, gown.`,
  },

  // ---------------- Day 6 ----------------
  {
    slug: "day-06-am-maths-relations",
    slides: [
      { type: "cover", kicker: "Maths I · Week 1", title: "Relations: the 4 properties and their traps", sub: "Reflexive, symmetric, antisymmetric, transitive. Asked in almost every paper." },
      { type: "formulas", kicker: "Definitions", title: "R is a relation on A", rows: [
        ["Reflexive", "(a, a) ∈ R for every a in A"],
        ["Symmetric", "(a, b) ∈ R ⇒ (b, a) ∈ R"],
        ["Antisymmetric", "(a, b) and (b, a) in R ⇒ a = b"],
        ["Transitive", "(a, b) and (b, c) in R ⇒ (a, c) ∈ R"],
        ["Equivalence", "reflexive + symmetric + transitive"],
      ] },
      { type: "bullets", kicker: "Traps", title: "Where marks are lost", tone: "alert", items: [
        "If (1, 2) and (2, 1) are in R, transitive needs (1, 1) and (2, 2) too.",
        "Reflexive needs (a, a) for every element, even ones that never appear in R.",
        "Symmetric and antisymmetric are not opposites. A relation can be both, or neither.",
        "Tip: write R as a list of pairs first. Then test each property.",
      ] },
      { type: "question", kicker: "PYQ · May 2023", q: "A × A has 9 elements. Two of them are (2, 0) and (0, 8). What is the sum of all the elements of A?" },
      { type: "answer", answer: "10", steps: [
        "|A × A| = |A|² = 9, so A has 3 elements.",
        "(2, 0) and (0, 8) put 2, 0 and 8 in A. So A = {0, 2, 8}.",
        "Sum = 0 + 2 + 8 = 10.",
      ] },
      cta,
    ],
    caption: `
Maths I: relations in 1 post.

Reflexive: (a, a) for every a.
Symmetric: (a, b) means (b, a).
Transitive: (a, b) and (b, c) mean (a, c).
Equivalence: all three.

The biggest trap: if (1, 2) and (2, 1) are in R, transitive needs (1, 1) and (2, 2) too.

Plus a real May 2023 PYQ to solve inside.`,
  },
  {
    slug: "day-06-pm-stats-iqr-pyq",
    slides: [
      { type: "cover", kicker: "PYQ · Stats I · Sep 2023", title: "Find the IQR. Is there an outlier?", sub: "Use the IITM method, not your calculator. Answer on slide 3." },
      { type: "question", kicker: "Stats I · Quartiles", q: "Find the IQR of 14, 20, 40, 23, 18. Are there any outliers?" },
      { type: "answer", answer: "IQR = 5, and 40 is an outlier", steps: [
        "Sort: 14, 18, 20, 23, 40 (n = 5).",
        "Q1: 0.25 × 5 = 1.25, round up to 2. The 2nd value is 18.",
        "Q3: 0.75 × 5 = 3.75, round up to 4. The 4th value is 23.",
        "IQR = 23 − 18 = 5. Fences: 18 − 7.5 = 10.5 and 23 + 7.5 = 30.5.",
        "40 is above 30.5, so it is an outlier.",
      ] },
      { type: "bullets", kicker: "Traps", title: "Quartile mistakes", tone: "alert", items: [
        "Round up even when the decimal is small: 1.25 becomes 2, not 1.",
        "Calculators and Excel use different methods. Use the IITM steps.",
        "Always sort the data first.",
      ] },
      cta,
    ],
    caption: `
Stats I question (Sep 2023 Qualifier):

Find the IQR of 14, 20, 40, 23, 18. Are there any outliers?

Try it with the IITM method before you swipe. The full steps are inside, plus 3 quartile traps.`,
  },

  // ---------------- Day 7 ----------------
  {
    slug: "day-07-am-first-mock",
    slides: [
      { type: "cover", kicker: "End of week 1", title: "Take your first full mock today", sub: "Not to get a high score. To find out what to study next." },
      { type: "list", kicker: "How to take it", title: "Make it feel like exam day", items: [
        { icon: "timer", title: "All 4 subjects, on a timer", desc: "One sitting. No pausing." },
        { icon: "book", title: "No notes, no searching", desc: "Only the on-screen calculator." },
        { icon: "target", title: "Check the 40/50 rule", desc: "Every subject 40%+. Average 50%+." },
        { icon: "pencil", title: "List every wrong answer", desc: "Group them by topic." },
      ] },
      { type: "scorecard", kicker: "Example first mock", title: "Average is fine. One subject is not.", scores: [["Maths I", 38], ["Stats I", 62], ["Computational Thinking", 55], ["English I", 71]], note: "Example result. Next week's focus for this student: Maths I." },
      { type: "bullets", kicker: "After the mock", title: "Plan week 2 from your result", tone: "check", items: [
        "Pick your 3 weakest topics. They are next week's plan.",
        "Write every mistake in your notebook, with the reason.",
        "Do not retake the same paper soon. Use a new one next week.",
      ] },
      cta,
    ],
    caption: `
Week 1 is done. Take your first full Qualifier mock today.

Not to get a high score. To find out what to study next.

How:
1. All 4 subjects in one sitting, on a timer.
2. No notes. Only the on-screen calculator.
3. Check the 40/50 rule.
4. List every wrong answer by topic.

Your 3 weakest topics are your plan for week 2.

BTechi has free full Qualifier mocks with a pass/fail check.`,
  },
  {
    slug: "day-07-pm-week-1-traps",
    slides: [
      { type: "cover", kicker: "Week 1 recap", title: "8 traps from this week. Save this.", sub: "Two from each subject. Read them before every mock." },
      { type: "bullets", kicker: "Maths I and Stats I", title: "Traps 1 to 4", tone: "alert", items: [
        "{∅} is not empty. It has one element.",
        "Transitive: (1, 2) and (2, 1) in R means (1, 1) and (2, 2) must be in R too.",
        "PIN codes and roll numbers are categorical, not numerical.",
        "2(x̄ − 5) is not 2x̄ − 5. Do the steps in order.",
      ] },
      { type: "bullets", kicker: "CT and English I", title: "Traps 5 to 8", tone: "alert", items: [
        "min starts large (100 for marks), never 0.",
        "count(A or B) = count(A) + count(B) − count(A and B).",
        "foot has short u. food has long uu.",
        "Compare first sounds, not letters: knit starts with /n/.",
      ] },
      { type: "statement", kicker: "Next week", text: "Week 2: Maths I and Stats I, in depth.", sub: "Functions, lines, quadratics. Mean, SD, quartiles. Two posts every day." },
      cta,
    ],
    caption: `
Week 1 recap: 8 traps from the IIT Madras BS Qualifier.

1. {∅} is not empty.
2. Transitive needs (1, 1) and (2, 2) if (1, 2) and (2, 1) are in R.
3. PIN codes are categorical.
4. 2(x̄ − 5) is not 2x̄ − 5.
5. min starts large, never 0.
6. count(A or B) = A + B − both.
7. foot is short u, food is long uu.
8. Compare first sounds, not letters.

Save this and read it before every mock. Week 2 starts tomorrow: Maths I and Stats I.`,
  },
].map((p) => ({ ...p, seo: SEO[p.slug], caption: caption(p.slug, p.caption) }));
