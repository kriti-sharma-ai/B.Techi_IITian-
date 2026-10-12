import type { CheatSheet } from "../../types";

// Statistics I, weeks 1–4 (qualifier syllabus). Percentiles use the IITM method, which the
// official answer keys in data/stats-pyqs.ts follow. Examples marked "PYQ" were checked against them.

export const stats1: CheatSheet = {
  slug: "stats-1",
  subjectSlug: "statistics-for-data-science-1",
  short: "Stats I",
  description: "Data types and scales, charts, mean/median/mode, variance, IITM's percentile method, outliers, contingency tables, covariance, correlation and point bi-serial.",
  quickLabel: "Formulas",
  sections: [
    {
      id: "data-basics",
      week: 1,
      title: "Data, population & sample",
      hits: "every",
      blocks: [
        {
          kind: "table",
          head: ["Term", "Meaning"],
          rows: [
            ["Population", "The entire group you want to study (all voters in India)"],
            ["Sample", "The subset you actually collect data from"],
            ["Parameter", "A number describing the population (μ, σ)"],
            ["Statistic", "A number computed from a sample (‾{x}, s)"],
            ["Descriptive statistics", "Organising and summarising data: tables, charts, mean, SD"],
            ["Inferential statistics", "Using a sample to draw conclusions about the population"],
            ["Cross-sectional data", "Many units at **one** point in time (marks of 500 students in one exam)"],
            ["Time-series data", "One unit tracked **over time** (a company's yearly profit, 2015–2024)"],
            ["Case / observation", "A row of the data table (one unit)"],
            ["Variable", "A column: a characteristic recorded for every case"],
          ],
        },
        {
          kind: "diagram",
          diagram: "population-sample",
          title: "Population, sample and inference",
        },
        {
          kind: "points",
          items: [
            "For inference to be valid, the sample must be **representative** of the population: randomly chosen and unbiased.",
            "A claim about every organisation in a city based on one organisation's data is an over-generalisation: the sample doesn't represent the population.",
          ],
        },
        {
          kind: "diagram",
          diagram: "cross-vs-time",
          title: "Cross-sectional vs time series",
        },
        {
          kind: "traps",
          items: [
            "Data from many villages or students collected at one time is cross-sectional, even if the table has a 'year' column.",
            "Survey 100 students to learn about all IITM students: population = all IITM students, sample = the 100.",
          ],
        },
      ],
    },
    {
      id: "scales",
      week: 1,
      title: "Variable types & scales of measurement",
      hits: "every",
      blocks: [
        {
          kind: "table",
          title: "Categorical vs numerical",
          head: ["Type", "What it is", "Examples"],
          rows: [
            ["Categorical (qualitative)", "Labels or groups", "Gender, city, blood group, T-shirt size, PIN code, roll number"],
            ["Numerical, discrete", "Countable values with gaps", "Children in a family, cars sold, goals scored"],
            ["Numerical, continuous", "Any value in a range (measured)", "Height, weight, time, temperature"],
          ],
        },
        {
          kind: "table",
          title: "Scales: N-O-I-R, each adds one property",
          head: ["Scale", "Adds", "Allowed", "Examples", "Centre"],
          rows: [
            ["Nominal", "Names only, no order", "= ≠", "Gender, religion, election symbol, city, jersey number", "Mode"],
            ["Ordinal", "Order (gaps unequal)", "< >", "Ratings, ranks, grades, sizes S/M/L/XL, education level", "Mode, median"],
            ["Interval", "Equal gaps, **no true zero**", "+ −", "Temperature in °C/°F, calendar year, time of day", "Mode, median, mean"],
            ["Ratio", "True zero (0 = none)", "+ − × ÷", "Height, weight, income, age, sales, number of votes", "All"],
          ],
        },
        {
          kind: "tip",
          text: "Ask in order: Is it just a label? → nominal. Can I put it in order? → ordinal. Does 0 mean 'none of it'? → ratio; if not → interval.",
        },
        {
          kind: "diagram",
          diagram: "scales-tree",
          title: "Which scale? Ask in order",
        },
        {
          kind: "traps",
          items: [
            "Numbers used as labels (PIN code, roll number, phone number, jersey number) are **categorical, nominal**.",
            "°C is interval: 0 °C isn't 'no temperature', and 20 °C isn't twice as hot as 10 °C.",
            "Counts (votes, children, cars) are numerical, discrete, ratio scale.",
            "PYQ (May 2024): election symbol is categorical with a nominal scale.",
          ],
        },
      ],
    },
    {
      id: "categorical-data",
      week: 2,
      title: "Describing categorical data",
      hits: "every",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Relative frequency", f: "[[f // n]]", note: "All relative frequencies add to 1." },
            { label: "Percentage", f: "[[f // n]] × 100" },
            { label: "Pie-chart angle", f: "[[f // n]] × 360°" },
            { label: "Count from a slice", f: "n × [[angle // 360°]]  or  n × percentage" },
            { label: "Mode", f: "the category with the highest frequency" },
            { label: "Median (ordinal only)", f: "the middle category after ordering" },
          ],
        },
        {
          kind: "table",
          title: "Charts",
          head: ["Chart", "Rule"],
          rows: [
            ["Bar chart", "One bar per category, gaps between bars, height = frequency"],
            ["Pie chart", "Parts of a whole; slices add to 100% (360°)"],
            ["Pareto chart", "Bars in **descending** order plus a cumulative-percentage line"],
            ["Stacked / side-by-side bars", "Two categorical variables together (week 4)"],
          ],
        },
        {
          kind: "diagram",
          diagram: "pie-pareto",
          title: "Pie and Pareto charts of 500 fruits",
        },
        {
          kind: "example",
          title: "PYQ pattern (Sep 2023)",
          q: "A pie chart of 500 fruits sold shows mangoes as a 72° slice. How many mangoes were sold?",
          steps: ["[[72 // 360]] × 500"],
          answer: "100",
        },
        {
          kind: "example",
          title: "PYQ pattern (Sep 2023)",
          q: "Sunidhi buys T-shirts of sizes M, L, S, XL, S, then one more M. What happens to the mode and the median?",
          steps: [
            "Before: S, S, M, L, XL → mode S, median (3rd) M.",
            "After: S, S, M, M, L, XL → S and M both appear twice: bimodal.",
            "Median = 3rd and 4th = M and M → M.",
          ],
          answer: "Mode becomes S and M; median stays M",
        },
        {
          kind: "traps",
          items: [
            "Mean makes no sense for categorical data, even when categories are coded as numbers.",
            "Median needs order: fine for ordinal, meaningless for nominal.",
            "Data can have more than one mode.",
            "Misleading graphs: y-axis not starting at 0, 3-D pies, bars of unequal width.",
          ],
        },
      ],
    },
    {
      id: "numerical-displays",
      week: 3,
      title: "Numerical data: tables & charts",
      hits: "often",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Class width", f: "upper limit − lower limit" },
            { label: "Class mark (midpoint)", f: "[[lower + upper // 2]]" },
            { label: "Mean of grouped data", f: "[[Σ f_{i}x_{i} // Σ f_{i}]]", note: "x_{i} = class midpoint" },
          ],
        },
        {
          kind: "points",
          items: [
            "Class [10, 20) includes 10 and excludes 20; a value of exactly 20 goes in the next class.",
            "Histogram: bars touch (no gaps); bar area ∝ frequency. Bar charts are for categories, histograms for numbers.",
            "Stem-and-leaf: stem 2 | leaf 3 means 23. Number of leaves = n. You keep every actual value, so counts, median and mean can be read straight off.",
            "Shape: symmetric (mean ≈ median); right-skewed, long tail to the right (mean > median); left-skewed (mean < median).",
          ],
        },
        {
          kind: "diagram",
          diagram: "skew-shapes",
          title: "Shape tells you where the mean sits",
          caption: "The mean is dragged towards the long tail; the median stays with the bulk of the data.",
        },
        {
          kind: "example",
          title: "PYQ pattern (May 2024)",
          q: "Ages in a stem-and-leaf plot: 1 | 8 9 · 2 | 0 2 3 5 7 · 3 | 1 4. How many are above 23? What is the median?",
          steps: ["Values: 18, 19, 20, 22, 23, 25, 27, 31, 34 (n = 9).", "Above 23: 25, 27, 31, 34.", "Median = 5th value."],
          answer: "4 people above 23; median 23",
        },
        { kind: "traps", items: ["'Above 23' excludes 23; 'at least 23' includes it."] },
      ],
    },
    {
      id: "central-tendency",
      week: 3,
      title: "Mean, median & mode",
      hits: "every",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Mean", f: "‾{x} = [[Σ x_{i} // n]]" },
            { label: "Median (sorted data)", f: "n odd: value at position [[n + 1 // 2]] · n even: average of positions [[n // 2]] and [[n // 2]] + 1" },
            { label: "Mode", f: "most frequent value (there may be none, or several)" },
            { label: "Combined mean", f: "[[n_{1}‾{x}_{1} + n_{2}‾{x}_{2} // n_{1} + n_{2}]]" },
            { label: "Add one value x", f: "new mean = [[n‾{x} + x // n + 1]]" },
            { label: "Fix a wrong value", f: "new mean = ‾{x} + [[correct − wrong // n]]" },
            { label: "y = ax + b", f: "‾{y} = a‾{x} + b", note: "Median, mode, quartiles and percentiles transform the same way." },
          ],
        },
        {
          kind: "diagram",
          diagram: "mean-outlier",
          title: "One outlier moves the mean, not the median",
        },
        {
          kind: "example",
          title: "PYQ pattern (Sep 2023)",
          q: "The average annual package is ₹8 lakh. Each value has 5 subtracted from it and is then doubled. What is the new average?",
          steps: ["y = 2(x − 5) ⇒ ‾{y} = 2(‾{x} − 5) = 2 × 3."],
          answer: "₹6 lakh",
        },
        {
          kind: "traps",
          items: [
            "Sort before finding the median.",
            "Outliers pull the mean; the median barely moves. Skewed data ⇒ the median is the better centre.",
            "Order matters: 2(‾{x} − 5) ≠ 2‾{x} − 5.",
          ],
        },
      ],
    },
    {
      id: "dispersion",
      week: 3,
      title: "Range, variance & standard deviation",
      hits: "every",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Range", f: "max − min" },
            { label: "Population variance", f: "σ² = [[Σ(x_{i} − μ)² // n]] = [[Σ x_{i}² // n]] − μ²" },
            { label: "Sample variance", f: "s² = [[Σ(x_{i} − ‾{x})² // n − 1]] = [[Σ x_{i}² − n‾{x}² // n − 1]]" },
            { label: "Standard deviation", f: "√{variance}", note: "Same units as the data." },
            { label: "Sample ↔ population", f: "s² = [[n // n − 1]] σ²" },
            { label: "y = ax + b", f: "Var(y) = a² Var(x),  SD(y) = |a| SD(x)" },
            { label: "Recover Σx²", f: "sample: (n − 1)s² + n‾{x}² · population: n(σ² + μ²)" },
          ],
        },
        {
          kind: "diagram",
          diagram: "shift-stretch",
          title: "Adding vs multiplying",
          caption: "Dashed: the original data.",
        },
        {
          kind: "table",
          title: "What changes under y = ax + b",
          head: ["Measure", "Adding b", "Multiplying by a"],
          rows: [
            ["Mean, median, mode, quartiles", "+ b", "× a"],
            ["Range, IQR", "no change", "× |a|"],
            ["Variance", "no change", "× a²"],
            ["Standard deviation", "no change", "× |a|"],
          ],
        },
        {
          kind: "example",
          title: "PYQ (May 2023)",
          q: "10 observations have mean 22 and sample variance 81. One value, 20, was recorded as 15. Find the correct sample standard deviation.",
          steps: [
            "Σx = 10 × 22 = 220 → 220 − 15 + 20 = 225, so the mean is 22.5.",
            "Σx² = 9 × 81 + 10 × 22² = 729 + 4840 = 5569 → 5569 − 15² + 20² = 5744.",
            "s² = [[5744 − 10 × 22.5² // 9]] = [[681.5 // 9]] = 75.72.",
            "s = √{75.72}.",
          ],
          answer: "≈ 8.70 (the official key accepts 8.68–8.71)",
        },
        {
          kind: "example",
          q: "Marks have mean 40 and sample variance 25. Each mark has 5 subtracted and is then doubled. New mean, variance and SD?",
          steps: ["Mean: 2(40 − 5) = 70.", "Variance: 2² × 25 = 100 (subtracting 5 changes nothing).", "SD: √{100}."],
          answer: "Mean 70, variance 100, SD 10",
        },
        {
          kind: "traps",
          items: [
            "Sample ⇒ divide by n − 1. Population ⇒ divide by n. Read 'sample' or 'population' in the question.",
            "Adding or subtracting a constant never changes variance, SD, range or IQR.",
            "Multiplying by −2: variance × 4, SD × 2 (SD is never negative).",
            "Round only at the very end; carry at least 4 decimals in between.",
          ],
        },
      ],
    },
    {
      id: "percentiles",
      week: 3,
      title: "Percentiles, quartiles, IQR & outliers",
      hits: "every",
      blocks: [
        {
          kind: "formulas",
          title: "IITM's percentile method (the answer keys use it)",
          items: [
            { label: "Step 1", f: "sort the data in ascending order" },
            { label: "Step 2: index", f: "i = [[P // 100]] × n" },
            { label: "Step 3", f: "i not whole ⇒ round **up**, take that value · i whole ⇒ average the values at positions i and i + 1" },
            { label: "Quartiles", f: "Q_{1} = P_{25},  Q_{2} = P_{50} = median,  Q_{3} = P_{75}" },
            { label: "IQR", f: "Q_{3} − Q_{1}" },
            { label: "Five-number summary", f: "min, Q_{1}, median, Q_{3}, max", note: "This is what a box plot draws." },
            { label: "Outliers", f: "below Q_{1} − 1.5 × IQR  or  above Q_{3} + 1.5 × IQR" },
          ],
        },
        {
          kind: "diagram",
          diagram: "box-plot",
          title: "Box plot with the 1.5 × IQR fence",
        },
        {
          kind: "example",
          title: "PYQ (Sep 2023)",
          q: "Find the IQR of 14, 20, 40, 23, 18. Are there outliers?",
          steps: [
            "Sorted: 14, 18, 20, 23, 40 (n = 5).",
            "Q_{1}: i = 0.25 × 5 = 1.25 → round up to 2 → 18.",
            "Q_{3}: i = 0.75 × 5 = 3.75 → round up to 4 → 23.",
            "IQR = 5. Fences: 18 − 7.5 = 10.5 and 23 + 7.5 = 30.5.",
          ],
          answer: "IQR = 5, and 40 is an outlier",
        },
        {
          kind: "example",
          title: "PYQ (May 2023)",
          q: "T-shirt prices: 150, 550, 700, 240, 300, 750, 200, 180, 320, 420. Find the price below which 25% fall, Q_{3}, and the median.",
          steps: [
            "Sorted: 150, 180, 200, 240, 300, 320, 420, 550, 700, 750 (n = 10).",
            "Q_{1}: i = 2.5 → 3rd value = 200.",
            "Q_{3}: i = 7.5 → 8th value = 550.",
            "Median: i = 5 is whole → average of 5th and 6th = (300 + 320)/2 = 310.",
          ],
          answer: "Q₁ = ₹200, Q₃ = ₹550, median ₹310",
        },
        {
          kind: "example",
          title: "PYQ (Jan 2023)",
          q: "Cars sold in five months: 12, 8, 9, 20, 40. Which values are outliers?",
          steps: ["Sorted: 8, 9, 12, 20, 40. Q_{1} = 2nd = 9, Q_{3} = 4th = 20, IQR = 11.", "Upper fence = 20 + 16.5 = 36.5; lower fence = 9 − 16.5 < 0."],
          answer: "40",
        },
        {
          kind: "traps",
          items: [
            "Round **up** even when the decimal is small: 1.25 → 2, not 1.",
            "Calculators and Excel use different quartile methods. Use the IITM steps above.",
            "Q_{3} separates the top 25% from the bottom 75%.",
            "Box-plot whiskers end at the most extreme values that aren't outliers; outliers are drawn as dots.",
          ],
        },
      ],
    },
    {
      id: "two-categorical",
      week: 4,
      title: "Two categorical variables",
      hits: "every",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Joint relative frequency", f: "[[cell // grand total]]" },
            { label: "Row relative frequency", f: "[[cell // row total]]" },
            { label: "Column relative frequency", f: "[[cell // column total]]" },
            { label: "Marginal totals", f: "row totals and column totals; each set adds to the grand total" },
          ],
        },
        {
          kind: "points",
          items: [
            "Contingency (two-way) table: one variable on the rows, the other on the columns, counts in the cells, totals in the margins.",
            "Association: compare row percentages across the rows. If they are (nearly) the same in every row, there is no association.",
            "A stacked (or 100% stacked) bar chart shows those row percentages visually.",
          ],
        },
        {
          kind: "example",
          title: "PYQ pattern (May 2024)",
          q: "200 people: 120 male, 80 female. 150 own a smartphone. 30 females don't own one. How many males own a smartphone?",
          steps: ["Females who own = 80 − 30 = 50.", "Males who own = 150 − 50 = 100 (so 20 males don't)."],
          answer: "100",
        },
        {
          kind: "diagram",
          diagram: "contingency",
          title: "The smartphone PYQ as a two-way table",
        },
        { kind: "tip", text: "Draw the empty table with its totals row and column first, write in every number given, then fill the blanks so each row and column adds up." },
      ],
    },
    {
      id: "covariance",
      week: 4,
      title: "Scatter plots & covariance",
      hits: "every",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Sample covariance", f: "[[Σ(x_{i} − ‾{x})(y_{i} − ‾{y}) // n − 1]] = [[Σ x_{i}y_{i} − n‾{x}‾{y} // n − 1]]" },
            { label: "Population covariance", f: "[[Σ(x_{i} − μ_{x})(y_{i} − μ_{y}) // n]]" },
            { label: "Scaling", f: "cov(ax + b, cy + d) = ac · cov(x, y)" },
            { label: "With itself", f: "cov(x, x) = Var(x)" },
          ],
        },
        {
          kind: "diagram",
          diagram: "covariance-quadrants",
          title: "Why the sign of covariance works",
          caption: "Each point adds (x − x̄)(y − ȳ). Points in the green quadrants push covariance up, points in the red ones pull it down.",
        },
        {
          kind: "points",
          items: [
            "Sign gives direction: positive (rise together), negative (one rises as the other falls), near 0 (no linear relation).",
            "Size depends on the units, so covariance can't measure strength. That's what correlation is for.",
            "Reading a scatter plot: direction, form (straight or curved), strength (how tightly points hug a line), outliers.",
          ],
        },
        {
          kind: "example",
          q: "x: 1, 2, 3 and y: 2, 4, 9. Find the population and sample covariance.",
          steps: ["‾{x} = 2, ‾{y} = 5.", "Products of deviations: (−1)(−3) = 3, (0)(−1) = 0, (1)(4) = 4 → sum 7.", "Population: 7 ÷ 3. Sample: 7 ÷ 2."],
          answer: "Population ≈ 2.33, sample = 3.5",
        },
        { kind: "traps", items: ["PYQs ask both kinds: 'population covariance' ⇒ ÷ n, 'sample covariance' ⇒ ÷ (n − 1)."] },
      ],
    },
    {
      id: "correlation",
      week: 4,
      title: "Correlation coefficient (r)",
      hits: "every",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Pearson r", f: "r = [[cov(x, y) // s_{x} s_{y}]]", note: "Use sample values throughout, or population values throughout. Never mix." },
            { label: "Computational form", f: "r = [[nΣxy − ΣxΣy // √{[nΣx² − (Σx)²][nΣy² − (Σy)²]}]]" },
            { label: "Range", f: "−1 ≤ r ≤ 1" },
            { label: "Change of origin and scale", f: "r(ax + b, cy + d) = r(x, y) if ac > 0,  −r(x, y) if ac < 0" },
          ],
        },
        {
          kind: "diagram",
          diagram: "correlation-panels",
          title: "What r looks like",
          caption: "r measures how tightly points hug a straight line. The U-shape has r = 0 even though y depends on x.",
        },
        {
          kind: "table",
          title: "Reading r",
          head: ["r", "Meaning"],
          rows: [
            ["+1 or −1", "Perfect straight line, rising or falling"],
            ["Close to ±1", "Strong linear association"],
            ["Close to 0", "Weak or no **linear** association (could still be curved)"],
            ["Sign", "Direction only: + rising, − falling"],
          ],
        },
        {
          kind: "example",
          title: "PYQ pattern (Jan 2023)",
          q: "Deepak scores exactly twice Mayur's marks in every subject (Y = 2X). What follows?",
          steps: ["Y is a positive multiple of X, so the points lie on a rising straight line."],
          answer: "r = 1, cov(X, Y) = 2 Var(X), Var(Y) = 4 Var(X), SD(Y) = 2 SD(X), mean Y = 2 × mean X",
        },
        {
          kind: "traps",
          items: [
            "r measures how tightly the points hug a line, **not** how steep it is. A steep loose cloud has a smaller |r| than a shallow tight one.",
            "Ordering scatter plots by r: strong negative < weak negative < none < weak positive < strong positive.",
            "r = 0 doesn't mean no relationship: a U-shape can have r ≈ 0.",
            "r has no units, so changing units (cm → m, ₹ → $) never changes it.",
            "Correlation is not causation.",
          ],
        },
      ],
    },
    {
      id: "point-biserial",
      week: 4,
      title: "Point bi-serial correlation",
      hits: "often",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "When", f: "one variable is dichotomous (0/1: pass/fail, male/female), the other numerical" },
            { label: "With sample SD", f: "r_{pb} = [[‾{Y}_{1} − ‾{Y}_{0} // s_{Y}]] × √{[[n_{1}n_{0} // n(n − 1)]]}" },
            { label: "With population SD", f: "r_{pb} = [[‾{Y}_{1} − ‾{Y}_{0} // σ_{Y}]] × √{[[n_{1}n_{0} // n²]]}", note: "Same answer as the sample version." },
            { label: "Symbols", f: "‾{Y}_{1}, ‾{Y}_{0}: group means · n_{1}, n_{0}: group sizes · n = n_{1} + n_{0} · s_{Y}, σ_{Y}: SD of **all** Y values" },
          ],
        },
        {
          kind: "diagram",
          diagram: "point-biserial",
          title: "Hours studied, split by pass and fail",
          caption: "The bigger the gap between the two group means (relative to the SD), the larger r_{pb}.",
        },
        {
          kind: "example",
          q: "Hours studied: passed (coded 1): 6, 8, 7; failed (coded 0): 3, 4. Find r_{pb}.",
          steps: [
            "‾{Y}_{1} = 7, ‾{Y}_{0} = 3.5, n_{1} = 3, n_{0} = 2, n = 5.",
            "All Y: mean 5.6, Σ(y − ‾{y})² = 17.2, so s_{Y} = √{17.2 ÷ 4} = 2.074.",
            "r_{pb} = [[3.5 // 2.074]] × √{[[6 // 20]]} = 1.688 × 0.548.",
          ],
          answer: "≈ 0.925: strong positive association between hours studied and passing",
        },
        {
          kind: "traps",
          items: [
            "Pair the SD with the right root: sample SD ↔ n(n − 1); population SD ↔ n². Mixing them gives a wrong value.",
            "Swapping which group is coded 1 flips the sign, which is why PYQs ask for the absolute value.",
          ],
        },
      ],
    },
  ],
  lastMinute: [
    "N-O-I-R: nominal → ordinal (order) → interval (equal gaps) → ratio (true zero).",
    "Numbers used as labels (PIN code, roll number) are categorical.",
    "Cross-sectional: many units, one time. Time-series: one unit, many times.",
    "Pie angle = f/n × 360°.",
    "Sample variance ÷ (n − 1), population ÷ n.",
    "y = ax + b: mean → a‾{x} + b, variance → a² × var, SD → |a| × SD.",
    "Percentile: i = P × n / 100. Fraction → round up. Whole → average positions i and i + 1.",
    "Outliers lie beyond Q₁ − 1.5 × IQR or Q₃ + 1.5 × IQR.",
    "Wrong-value fixes: Σx² = (n − 1)s² + n‾{x}², then swap the value in both sums.",
    "r is unit-free, between −1 and 1, unchanged by positive scaling.",
    "r_{pb} = (‾{Y}_{1} − ‾{Y}_{0}) / s × √{n_{1}n_{0} / n(n − 1)}.",
  ],
};
