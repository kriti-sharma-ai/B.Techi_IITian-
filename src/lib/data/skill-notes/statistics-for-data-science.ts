import type { SkillNotes } from "../../types";

// Text lessons for "Practical Statistics for Data Science". Notation follows the IITM BS
// Statistics courses: population parameters in Greek (μ, σ), sample statistics in Latin (‾{x}, s).

export const statisticsNotes: SkillNotes = {
  skill: "statistics-for-data-science",
  quickLabel: "Formulas",
  lessons: [
    {
      lecture: "Centre and spread",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Mean", f: "‾{x} = [[Σx // n]]", note: "Pulled by outliers. One billionaire moves the average income of a village." },
            { label: "Median", f: "middle value of the sorted data (average of the two middle values if n is even)", note: "Robust to outliers: prefer it for income, house prices, delivery times." },
            { label: "Mode", f: "most frequent value", note: "The only centre for nominal data." },
            { label: "Range", f: "max − min" },
            { label: "Variance (sample)", f: "s^{2} = [[Σ(x − ‾{x})^{2} // n − 1]]" },
            { label: "Standard deviation", f: "s = √{s^{2}}", note: "Same unit as the data. \"Typical distance from the mean.\"" },
            { label: "IQR", f: "Q_{3} − Q_{1}", note: "Spread of the middle 50%." },
            { label: "Outlier rule", f: "below Q_{1} − 1.5·IQR or above Q_{3} + 1.5·IQR" },
            { label: "Coefficient of variation", f: "CV = [[s // ‾{x}]] × 100%", note: "Compare variability across different scales." },
          ],
        },
        {
          kind: "example",
          q: "Delivery times (minutes): 22, 25, 25, 28, 30, 31, 95. Which is the better summary, mean or median?",
          steps: ["Mean = 256 / 7 ≈ 36.6 min.", "Median = 28 min (4th value).", "The 95-minute delivery drags the mean above six of the seven values."],
          answer: "Median (28 min), and report the 95-minute outlier separately",
        },
        {
          kind: "traps",
          items: [
            "Sample variance divides by **n − 1**, population variance by **N**. Spreadsheets: `VAR.S` vs `VAR.P`; pandas `.var()` uses n − 1 by default, NumPy `np.var()` uses n.",
            "Adding a constant to every value shifts the mean but not the SD. Multiplying by a constant scales both.",
          ],
        },
      ],
    },
    {
      lecture: "Visualising distributions",
      blocks: [
        {
          kind: "table",
          head: ["Chart", "Shows", "Watch for"],
          rows: [
            ["Histogram", "Shape of one numeric variable", "Bin width changes the story; try a few"],
            ["Box plot", "Median, IQR, whiskers, outliers", "Hides bimodality (two peaks)"],
            ["Density / KDE", "Smoothed shape, good for comparing groups", "Can suggest values that can't exist (negative prices)"],
            ["ECDF", "Share of values ≤ x", "Best for reading percentiles directly"],
          ],
        },
        {
          kind: "table",
          title: "Shape and what it does to the centre",
          head: ["Shape", "Order", "Example"],
          rows: [
            ["Symmetric", "mean ≈ median ≈ mode", "Heights, exam scores in a large class"],
            ["Right (positive) skew", "mean > median", "Income, order value, time on site"],
            ["Left (negative) skew", "mean < median", "Age at retirement, scores on an easy test"],
          ],
        },
        {
          kind: "code",
          code: `import seaborn as sns
sns.histplot(df, x="order_value", bins=40)
sns.boxplot(df, x="city", y="order_value")
sns.ecdfplot(df, x="delivery_minutes")`,
        },
        {
          kind: "tip",
          text: "Right-skewed money data often looks symmetric after a log transform. Plot `np.log10(order_value)` to see the real structure.",
        },
      ],
    },
    {
      lecture: "Rules of probability",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Range", f: "0 ≤ P(A) ≤ 1" },
            { label: "Complement", f: "P(not A) = 1 − P(A)" },
            { label: "Addition (any events)", f: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)" },
            { label: "Mutually exclusive", f: "P(A ∩ B) = 0, so P(A ∪ B) = P(A) + P(B)" },
            { label: "Independent", f: "P(A ∩ B) = P(A) · P(B)" },
            { label: "At least one", f: "P(at least one) = 1 − P(none)" },
            { label: "Equally likely outcomes", f: "P(A) = [[favourable // total]]" },
          ],
        },
        {
          kind: "example",
          q: "A website's checkout fails 2% of the time, independently per attempt. What's the chance a customer who tries 3 times fails at least once?",
          steps: ["P(no failure in one try) = 0.98.", "P(no failure in 3) = 0.98^{3} ≈ 0.941.", "P(at least one) = 1 − 0.941."],
          answer: "≈ 5.9%",
        },
        {
          kind: "traps",
          items: [
            "**Mutually exclusive** and **independent** are different. If A and B can't happen together and both have positive probability, knowing A happened tells you B didn't, so they're dependent.",
            "Gambler's fallacy: after five heads, the next fair toss is still 50/50.",
          ],
        },
      ],
    },
    {
      lecture: "Conditional probability and Bayes",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Conditional", f: "P(A | B) = [[P(A ∩ B) // P(B)]]" },
            { label: "Multiplication", f: "P(A ∩ B) = P(A | B) · P(B)" },
            { label: "Total probability", f: "P(B) = P(B | A)·P(A) + P(B | not A)·P(not A)" },
            { label: "Bayes' theorem", f: "P(A | B) = [[P(B | A) · P(A) // P(B)]]" },
          ],
        },
        {
          kind: "example",
          title: "The fraud-alert problem",
          q: "1% of transactions are fraudulent. The model flags 95% of frauds and wrongly flags 4% of genuine ones. If a transaction is flagged, what's the chance it's actually fraud?",
          steps: [
            "Think in 10,000 transactions: 100 fraud, 9,900 genuine.",
            "Flagged frauds: 95. Flagged genuine: 4% × 9,900 = 396.",
            "P(fraud | flagged) = 95 / (95 + 396) = 95 / 491.",
          ],
          answer: "≈ 19%: four in five alerts are false alarms",
        },
        {
          kind: "tip",
          text: "For Bayes problems, convert to counts out of 10,000 and draw a two-branch tree. It's faster than the formula and much harder to get wrong.",
        },
        {
          kind: "traps",
          items: ["P(A | B) ≠ P(B | A). \"Most frauds are flagged\" is not \"most flags are fraud\". Mixing them up is called the base-rate fallacy."],
        },
      ],
    },
    {
      lecture: "Probability quiz",
      blocks: [
        {
          kind: "example",
          title: "Question 1",
          q: "Two dice are rolled. What's the probability the sum is 8?",
          steps: ["Favourable pairs: (2,6), (3,5), (4,4), (5,3), (6,2) = 5.", "Total = 36."],
          answer: "5/36 ≈ 0.139",
        },
        {
          kind: "example",
          title: "Question 2",
          q: "60% of customers use the app, 30% use the website, 10% use both. What fraction uses neither?",
          steps: ["P(app ∪ web) = 0.6 + 0.3 − 0.1 = 0.8.", "Neither = 1 − 0.8."],
          answer: "0.2 (20%)",
        },
        {
          kind: "example",
          title: "Question 3",
          q: "Of a class, 40% study maths; of those, 25% also study economics. What % study both?",
          steps: ["P(M ∩ E) = P(E | M) · P(M) = 0.25 × 0.4."],
          answer: "10%",
        },
        {
          kind: "example",
          title: "Question 4",
          q: "Machine A makes 70% of parts with a 2% defect rate; machine B makes 30% with a 5% defect rate. A part is defective. Probability it came from B?",
          steps: ["P(defect) = 0.7 × 0.02 + 0.3 × 0.05 = 0.014 + 0.015 = 0.029.", "P(B | defect) = 0.015 / 0.029."],
          answer: "≈ 0.517",
        },
      ],
    },
    {
      lecture: "Sampling distributions",
      blocks: [
        {
          kind: "points",
          items: [
            "Take many samples of size n and compute each sample's mean. The distribution of those means is the **sampling distribution of the mean**.",
            "**Central Limit Theorem:** for large enough n (rule of thumb 30+), that distribution is approximately normal, **whatever the shape** of the original data.",
            "Its spread is the **standard error**, which shrinks with √{n}: quadrupling the sample halves the error.",
          ],
        },
        {
          kind: "formulas",
          items: [
            { label: "Standard error of the mean", f: "SE = [[σ // √{n}]]  (use s when σ is unknown)" },
            { label: "Standard error of a proportion", f: "SE = √{[[p(1 − p) // n]]}" },
            { label: "z-score", f: "z = [[x − μ // σ]]" },
            { label: "Normal 68–95–99.7", f: "≈68% within 1σ, 95% within 2σ, 99.7% within 3σ" },
          ],
        },
        {
          kind: "example",
          q: "Average order value is ₹800 with SD ₹400. For random samples of 100 orders, what's the standard error of the sample mean?",
          steps: ["SE = 400 / √{100} = 400 / 10."],
          answer: "₹40: most sample means fall between ₹720 and ₹880",
        },
        {
          kind: "traps",
          items: ["The CLT is about the **mean**, not the data. Skewed data stays skewed however large the sample."],
        },
      ],
    },
    {
      lecture: "Confidence intervals",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Mean (large n)", f: "‾{x} ± z^{*} · [[s // √{n}]]" },
            { label: "Mean (small n)", f: "‾{x} ± t^{*}_{n−1} · [[s // √{n}]]" },
            { label: "Proportion", f: "p̂ ± z^{*} · √{[[p̂(1 − p̂) // n]]}" },
            { label: "Critical values", f: "90% → 1.645 · 95% → 1.96 · 99% → 2.576" },
            { label: "Sample size for a proportion", f: "n = [[z^{2} · p(1 − p) // E^{2}]]", note: "With p = 0.5 and E = 3%, n ≈ 1,068." },
          ],
        },
        {
          kind: "example",
          q: "In a survey of 400 users, 120 say they'd pay for a premium plan. Give a 95% confidence interval.",
          steps: ["p̂ = 0.30.", "SE = √{0.3 × 0.7 / 400} = √{0.000525} ≈ 0.0229.", "Margin = 1.96 × 0.0229 ≈ 0.045."],
          answer: "30% ± 4.5%, i.e. 25.5% to 34.5%",
        },
        {
          kind: "points",
          items: [
            "Meaning: if we repeated the survey many times, about 95% of intervals built this way would contain the true value.",
            "Wider interval = more confidence or less data. Narrower = more data or less confidence.",
          ],
        },
        {
          kind: "traps",
          items: ["\"There's a 95% chance the true value is in this interval\" is the common but technically wrong reading. The true value is fixed; the interval is what varies."],
        },
      ],
    },
    {
      lecture: "Hypothesis testing",
      blocks: [
        {
          kind: "table",
          title: "The steps",
          head: ["Step", "Example: did the new checkout raise conversion?"],
          rows: [
            ["1. Null H_{0}", "No difference: p_{new} = p_{old}"],
            ["2. Alternative H_{1}", "p_{new} > p_{old} (one-sided) or ≠ (two-sided)"],
            ["3. Significance α", "Usually 0.05, chosen **before** looking at data"],
            ["4. Test statistic", "Two-proportion z-test"],
            ["5. p-value", "Probability of a result at least this extreme **if H_{0} were true**"],
            ["6. Decide", "p < α → reject H_{0}; otherwise \"not enough evidence\""],
          ],
        },
        {
          kind: "table",
          title: "Which test?",
          head: ["Question", "Test"],
          rows: [
            ["One mean vs a target", "One-sample t-test"],
            ["Two group means (independent)", "Two-sample (Welch) t-test"],
            ["Before/after on the same units", "Paired t-test"],
            ["Three or more group means", "One-way ANOVA"],
            ["Two proportions (conversion rates)", "Two-proportion z-test or chi-square"],
            ["Two categorical variables related?", "Chi-square test of independence"],
          ],
        },
        {
          kind: "code",
          code: `from scipy import stats
stats.ttest_ind(group_a, group_b, equal_var=False)   # Welch t-test
stats.ttest_rel(before, after)                       # paired
stats.f_oneway(g1, g2, g3)                           # ANOVA
stats.chi2_contingency(pd.crosstab(df.city, df.plan))`,
        },
        {
          kind: "traps",
          items: [
            "Not rejecting H_{0} doesn't prove there's no effect; the test may just lack data.",
            "Statistically significant ≠ important. With a million users, a 0.01% lift is \"significant\" and worthless.",
            "Testing 20 metrics at α = 0.05 will make about one look significant by chance.",
          ],
        },
      ],
    },
    {
      lecture: "Simple linear regression",
      blocks: [
        {
          kind: "formulas",
          items: [
            { label: "Model", f: "ŷ = b_{0} + b_{1}x" },
            { label: "Slope", f: "b_{1} = r · [[s_{y} // s_{x}]]" },
            { label: "Intercept", f: "b_{0} = ‾{y} − b_{1}‾{x}", note: "The line always passes through (‾{x}, ‾{y})." },
            { label: "Residual", f: "e = y − ŷ" },
            { label: "R²", f: "R^{2} = 1 − [[SS_{res} // SS_{tot}]]", note: "Share of the variation in y explained by x. In simple regression, R² = r²." },
          ],
        },
        {
          kind: "code",
          code: `import statsmodels.formula.api as smf
model = smf.ols("sales ~ ad_spend", data=df).fit()
print(model.summary())          # coefficients, p-values, R²
model.predict(pd.DataFrame({"ad_spend": [50]}))`,
        },
        {
          kind: "points",
          items: [
            "Least squares picks the line that minimises the sum of squared residuals.",
            "Always plot residuals against fitted values. A curve or a funnel shape means the straight-line model is missing something.",
          ],
        },
        {
          kind: "traps",
          items: ["Don't predict far outside the range of x you fitted on (extrapolation). The relationship may not hold there."],
        },
      ],
    },
    {
      lecture: "Interpreting coefficients",
      blocks: [
        {
          kind: "table",
          head: ["Model", "How to read b_{1}"],
          rows: [
            ["y = b_{0} + b_{1}x", "+1 unit of x → b_{1} units of y"],
            ["log(y) = b_{0} + b_{1}x", "+1 unit of x → about 100·b_{1}% change in y"],
            ["y = b_{0} + b_{1}log(x)", "+1% in x → about b_{1}/100 units of y"],
            ["log(y) = b_{0} + b_{1}log(x)", "+1% in x → b_{1}% in y (elasticity)"],
            ["Dummy (0/1) variable", "Difference between the group and the baseline, holding the others fixed"],
          ],
        },
        {
          kind: "example",
          q: "`sales = 120 + 3.2 × ad_spend` (sales in units, ad spend in ₹ thousands). Interpret 3.2 and 120.",
          steps: [
            "Slope: each extra ₹1,000 of ad spend is associated with 3.2 more units sold, on average.",
            "Intercept: predicted sales with zero ad spend. Meaningful only if zero spend is within the data.",
          ],
          answer: "+₹1,000 ads ↔ +3.2 units; baseline 120 units",
        },
        {
          kind: "points",
          items: [
            "In multiple regression, each coefficient is the effect **holding the other variables constant**.",
            "The p-value on a coefficient tests whether it differs from zero; the confidence interval tells you the plausible size, which matters more.",
          ],
        },
        {
          kind: "traps",
          items: [
            "Regression shows association. \"Ad spend causes sales\" needs an experiment or a careful causal design.",
            "Strongly correlated predictors (multicollinearity) make individual coefficients unstable even when predictions are fine.",
          ],
        },
      ],
    },
    {
      lecture: "A/B test case study",
      blocks: [
        {
          kind: "points",
          items: [
            "An e-commerce team tests a new product page. Control: 10,000 visitors, 420 purchases (4.2%). Variant: 10,000 visitors, 480 purchases (4.8%).",
            "Decide before the test: primary metric (conversion), α = 0.05, two-sided, and the minimum lift worth shipping (say +0.5 points).",
          ],
        },
        {
          kind: "example",
          q: "Is the lift from 4.2% to 4.8% statistically significant?",
          steps: [
            "Pooled p = (420 + 480) / 20,000 = 0.045.",
            "SE = √{0.045 × 0.955 × (1/10,000 + 1/10,000)} ≈ 0.00293.",
            "z = (0.048 − 0.042) / 0.00293 ≈ 2.05.",
            "Two-sided p ≈ 0.04 < 0.05.",
          ],
          answer: "Yes: significant at 5%, and the 0.6-point lift clears the 0.5-point bar",
        },
        {
          kind: "code",
          code: `from statsmodels.stats.proportion import proportions_ztest
z, p = proportions_ztest(count=[480, 420], nobs=[10_000, 10_000])`,
        },
        {
          kind: "traps",
          items: [
            "**Peeking:** checking daily and stopping when p dips below 0.05 inflates false positives. Fix the sample size in advance.",
            "Check guardrail metrics (returns, page speed, revenue per visitor), not just the one that moved.",
            "Novelty effects fade. Run at least one full weekly cycle.",
          ],
        },
      ],
    },
  ],
  recap: [
    "Report the median for skewed data and say what the outliers are.",
    "For conditional probability, convert to counts out of 10,000; it makes Bayes problems easy.",
    "Standard error shrinks with √n: to halve the error you need four times the data.",
    "A confidence interval tells you the plausible size of an effect, which matters more than a p-value.",
    "Fix α, the metric and the sample size before running a test; never stop early because p looks good.",
    "Regression coefficients are associations, read \"holding other variables constant\".",
  ],
};
