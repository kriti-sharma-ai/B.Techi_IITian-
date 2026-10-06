import type { QualifierMock, QualifierQuestion } from "../types";

// Qualifier pack: full-length mocks covering the four Foundation courses
// examined in the IITM BS qualifier (weeks 1–4 of each). Every question is
// original, written in the qualifier's style; none are copied from IITM papers.

/** Subjects bundled in the pack, in exam order. */
export const QUALIFIER_SUBJECTS = [
  "mathematics-for-data-science-1",
  "statistics-for-data-science-1",
  "computational-thinking",
  "english-1",
] as const;

/** General-category cutoff: minimum per course and minimum average across the four. */
export const QUALIFIER_CUTOFF = { perSubject: 40, average: 50 };

/** Weeks 1–4 syllabus examined per course. */
export const QUALIFIER_SYLLABUS: Record<(typeof QUALIFIER_SUBJECTS)[number], string[]> = {
  "mathematics-for-data-science-1": ["Sets, relations and functions", "Coordinate geometry and straight lines", "Quadratic functions", "Polynomials"],
  "statistics-for-data-science-1": ["Types of data", "Describing categorical data", "Describing numerical data", "Association between two variables"],
  "computational-thinking": ["Variables, iteration and filtering", "Datasets as cards and tables", "Flowcharts and pseudocode", "Procedures and multiple filters"],
  "english-1": ["Sounds and pronunciation", "Parts of speech and grammar", "Vocabulary and usage", "Reading comprehension"],
};

const mcq = (id: string, marks: number, prompt: string, options: string[], answer: number, explanation: string, extra?: Partial<QualifierQuestion>): QualifierQuestion => ({
  id, type: "mcq", marks, prompt, options, answer, explanation, ...extra,
});
const msq = (id: string, marks: number, prompt: string, options: string[], answer: number[], explanation: string, extra?: Partial<QualifierQuestion>): QualifierQuestion => ({
  id, type: "multi", marks, prompt, options, answer, explanation, ...extra,
});
const nat = (id: string, marks: number, prompt: string, answer: number, explanation: string, extra?: Partial<QualifierQuestion>): QualifierQuestion => ({
  id, type: "numerical", marks, prompt, answer, explanation, ...extra,
});

const DATA_TYPES = ["Numerical, discrete", "Numerical, continuous", "Categorical, nominal", "Categorical, ordinal"];

const STUDENTS_5 = `Name    Gender  Maths
Asha    F       78
Bala    M       92
Chitra  F       85
Dev     M       64
Esha    F       91`;

const STUDENTS_6 = `Name    City     Maths  Physics
Asha    Chennai  78     70
Bala    Delhi    92     88
Chitra  Chennai  85     91
Dev     Mumbai   64     72
Esha    Delhi    91     60
Farhan  Chennai  70     85`;

const PASSAGE_1 =
  "Remote learning has expanded access to higher education for students in small towns. Yet access alone does not guarantee success: learners who plan their week, join peer study groups and attempt assignments early tend to complete their courses at far higher rates than those who study only before exams. The flexibility that makes online degrees attractive can also become a trap when there is no fixed timetable.";

const PASSAGE_2 =
  "The first draft of any essay is rarely the best. Experienced writers treat it as raw material: they cut repetition, reorder paragraphs so that each idea leads naturally to the next, and replace vague words with precise ones. Revision, in other words, is not a sign of weak writing but the very process by which strong writing is made.";

export const qualifierMocks: QualifierMock[] = [
  {
    slug: "mock-1",
    title: "Qualifier Mock 1",
    description: "A balanced full-length paper across all four courses. Start here.",
    difficulty: "Standard",
    durationMin: 120,
    sections: [
      {
        subjectSlug: "mathematics-for-data-science-1",
        title: "Mathematics for Data Science I",
        short: "Maths I",
        questions: [
          nat("m1-1", 2, "Let A = {x ∈ ℕ : x ≤ 6} and B = {x ∈ ℕ : x is even and x ≤ 10}. What is |A ∩ B|?", 3,
            "A = {1, 2, 3, 4, 5, 6} and B = {2, 4, 6, 8, 10}, so A ∩ B = {2, 4, 6} with 3 elements."),
          mcq("m1-2", 2, "R = {(1,1), (2,2), (3,3), (1,2), (2,1)} is a relation on {1, 2, 3}. Which statement is true?",
            ["R is reflexive and symmetric but not transitive", "R is an equivalence relation", "R is reflexive but not symmetric", "R is symmetric but not reflexive"], 1,
            "All (a,a) pairs are present (reflexive), (1,2) and (2,1) are both present (symmetric), and chaining them only gives (1,1) and (2,2), which are present (transitive). So R is an equivalence relation."),
          mcq("m1-3", 2, "What is the slope of the line passing through (2, 3) and (6, 11)?", ["1/2", "2", "4", "−2"], 1,
            "Slope = (11 − 3) / (6 − 2) = 8 / 4 = 2."),
          nat("m1-4", 3, "A line passes through the origin and is perpendicular to 2x + 3y = 6. What is its slope?", 1.5,
            "2x + 3y = 6 has slope −2/3. A perpendicular line has slope −1 / (−2/3) = 3/2 = 1.5.", { tolerance: 0.01 }),
          mcq("m1-5", 2, "What is the vertex of the parabola f(x) = x² − 6x + 5?", ["(3, −4)", "(−3, 32)", "(6, 5)", "(3, 4)"], 0,
            "x = −b/2a = 6/2 = 3, and f(3) = 9 − 18 + 5 = −4. Vertex: (3, −4)."),
          msq("m1-6", 3, "Which of the following functions from ℝ to ℝ are one-to-one (injective)?",
            ["f(x) = 2x + 1", "g(x) = x²", "h(x) = x³", "k(x) = |x|"], [0, 2],
            "2x + 1 and x³ are strictly increasing, so injective. x² and |x| map both 1 and −1 to 1, so they are not."),
          nat("m1-7", 3, "What is the sum of the roots of 2x² − 7x + 3 = 0?", 3.5,
            "Sum of roots = −b/a = 7/2 = 3.5. (The roots are 3 and 1/2.)", { tolerance: 0.01 }),
          mcq("m1-8", 3, "What is the domain of f(x) = √(x − 2) / (x − 5)?", ["[2, ∞)", "[2, 5) ∪ (5, ∞)", "(2, ∞)", "(5, ∞)"], 1,
            "The square root needs x ≥ 2, and the denominator must be non-zero, so x ≠ 5."),
          nat("m1-9", 3, "(x − 1) is a factor of p(x) = x³ − 2x² + kx + 6. What is the value of k?", -5,
            "By the factor theorem p(1) = 0: 1 − 2 + k + 6 = 0, so k = −5."),
          msq("m1-10", 2, "Which statements about the line y = −3x + 4 are true?",
            ["Its slope is −3", "Its y-intercept is 4", "It passes through (1, 1)", "It is parallel to y = 3x"], [0, 1, 2],
            "Slope −3, intercept 4, and at x = 1, y = −3 + 4 = 1. It is not parallel to y = 3x because the slopes differ."),
        ],
      },
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          mcq("s1-1", 2, "The PIN code of a student's home address is recorded in a survey. What type of data is it?", DATA_TYPES, 2,
            "PIN codes are labels. Arithmetic on them is meaningless and they have no natural order, so they are categorical (nominal)."),
          nat("s1-2", 2, "Find the mean of 4, 8, 6, 10, 12.", 8, "Sum = 40, n = 5, mean = 40 / 5 = 8."),
          nat("s1-3", 3, "Find the median of 7, 3, 9, 1, 5, 11.", 6, "Sorted: 1, 3, 5, 7, 9, 11. With 6 values the median is (5 + 7) / 2 = 6.", { tolerance: 0.01 }),
          mcq("s1-4", 2, "The grades of 7 students are A, B, B, C, A, B, D. What is the mode?", ["A", "B", "C", "D"], 1, "B appears 3 times, more than any other grade."),
          nat("s1-5", 3, "Find the population variance of 2, 4, 4, 4, 5, 5, 7, 9.", 4,
            "Mean = 40 / 8 = 5. Squared deviations: 9, 1, 1, 1, 0, 0, 4, 16, which sum to 32. Population variance = 32 / 8 = 4.", { tolerance: 0.01 }),
          mcq("s1-6", 3, "A dataset has standard deviation σ. Every value is multiplied by 3 and then 5 is added. What is the new standard deviation?", ["3σ + 5", "3σ", "9σ", "σ + 5"], 1,
            "Adding a constant shifts the data without changing spread. Multiplying by 3 scales the SD by |3|. New SD = 3σ."),
          mcq("s1-7", 2, "The correlation coefficient between two variables is r = −0.92. This indicates:",
            ["A weak positive linear association", "No association", "A strong negative linear association", "That one variable causes the other to decrease"], 2,
            "|r| close to 1 means strong, and the negative sign means one variable tends to fall as the other rises. Correlation alone never shows causation."),
          nat("s1-8", 3, "For a dataset, Q1 = 18 and Q3 = 42. Values above Q3 + 1.5 × IQR are outliers. What is this upper fence?", 78,
            "IQR = 42 − 18 = 24. Upper fence = 42 + 1.5 × 24 = 42 + 36 = 78."),
          msq("s1-9", 3, "Which of the following are measures of dispersion?", ["Range", "Median", "Standard deviation", "Interquartile range"], [0, 2, 3],
            "Range, SD and IQR measure spread. The median measures centre."),
          nat("s1-10", 2, "Of 200 students, 120 like tea. Of those 120, 80 live in the hostel. What percentage of tea-likers live in the hostel? (Answer to 2 decimal places.)", 66.67,
            "80 / 120 × 100 = 66.67%.", { tolerance: 0.05 }),
        ],
      },
      {
        subjectSlug: "computational-thinking",
        title: "Computational Thinking",
        short: "CT",
        questions: [
          nat("c1-1", 2, "What is the value of B when the pseudocode finishes?", 8,
            "(A, B) goes (0,1) → (1,1) → (1,2) → (2,3) → (3,5) → (5,8). These are Fibonacci numbers.",
            { code: "A = 0\nB = 1\nrepeat 5 times {\n    C = A + B\n    A = B\n    B = C\n}" }),
          nat("c1-2", 3, "What does doSomething(4096) return?", 19,
            "The loop adds the last digit and then drops it: 6 + 9 + 0 + 4 = 19. It returns the digit sum.",
            { code: "Procedure doSomething(n)\n    s = 0\n    while (n > 0) {\n        s = s + (n mod 10)\n        n = floor(n / 10)\n    }\n    return s\nEnd doSomething" }),
          mcq("c1-3", 3, "Using the table above, what is the value of count at the end?", ["1", "2", "3", "4"], 1,
            "Female students with Maths > 80: Chitra (85) and Esha (91). Asha has 78, so count = 2.",
            { context: STUDENTS_5, code: "count = 0\nforeach X in Table {\n    if (X.Gender == \"F\" and X.Maths > 80) {\n        count = count + 1\n    }\n}" }),
          mcq("c1-4", 2, "Using the same table, what does max hold at the end?", ["91", "92", "85", "78"], 1,
            "The loop keeps the largest Maths mark seen so far. That is Bala's 92.",
            { context: STUDENTS_5, code: "max = 0\nforeach X in Table {\n    if (X.Maths > max) {\n        max = X.Maths\n    }\n}" }),
          msq("c1-5", 3, "Let x = 7 and y = 3. Which expressions evaluate to True?",
            ["x mod y == 1", "x > y and y > 5", "not (x < y)", "x + y == 10"], [0, 2, 3],
            "7 mod 3 = 1 ✓. y > 5 is false, so the 'and' is false. x < y is false, so 'not' makes it true ✓. 7 + 3 = 10 ✓."),
          nat("c1-6", 3, "What is the value of total at the end?", 13,
            "Odd elements of L are 3, 1 and 9, and 3 + 1 + 9 = 13.",
            { code: "L = [3, 8, 1, 9, 4]\ntotal = 0\nforeach x in L {\n    if (x mod 2 == 1) {\n        total = total + x\n    }\n}" }),
          mcq("c1-7", 2, "Using the table above, what is the value of count at the end?", ["2", "3", "4", "5"], 2,
            "Asha, Chitra and Esha are F. Dev is M but has 64 < 70. Each card is counted once, so count = 4.",
            { context: STUDENTS_5, code: "count = 0\nforeach X in Table {\n    if (X.Gender == \"F\" or X.Maths < 70) {\n        count = count + 1\n    }\n}" }),
          mcq("c1-8", 3, "What does mystery(84, 36) return?", ["6", "12", "36", "252"], 1,
            "This is Euclid's algorithm: (84, 36) → (36, 12) → (12, 0). It returns gcd(84, 36) = 12.",
            { code: "Procedure mystery(a, b)\n    while (b != 0) {\n        t = b\n        b = a mod b\n        a = t\n    }\n    return a\nEnd mystery" }),
          nat("c1-9", 2, "What is the value of j at the end?", 5,
            "i takes the values 1, 2, 4, 8 and 16 inside the loop (5 iterations), then 32 ends the loop. j = 5.",
            { code: "i = 1\nj = 0\nwhile (i <= 20) {\n    j = j + 1\n    i = i * 2\n}" }),
          msq("c1-10", 2, "Which statements are true after the pseudocode runs?", ["x = 4", "y = 10", "x + y = 14", "x > y"], [0, 1, 2],
            "x = 14, then y = 14 − 4 = 10, then x = 14 − 10 = 4. The values were swapped.",
            { code: "x = 10\ny = 4\nx = x + y\ny = x - y\nx = x - y" }),
        ],
      },
      {
        subjectSlug: "english-1",
        title: "English I",
        short: "English I",
        questions: [
          mcq("e1-1", 2, "Choose the correct article: \"She is ___ honest officer.\"", ["a", "an", "the", "no article"], 1,
            "\"Honest\" begins with a vowel sound (the h is silent), so it takes \"an\"."),
          mcq("e1-2", 2, "Choose the word closest in meaning to \"meticulous\".", ["careless", "careful and precise", "quick", "generous"], 1,
            "Meticulous means showing great attention to detail."),
          mcq("e1-3", 2, "In \"She sings beautifully\", what part of speech is \"beautifully\"?", ["Adjective", "Adverb", "Noun", "Verb"], 1,
            "It describes how she sings, so it modifies the verb. That makes it an adverb."),
          mcq("e1-4", 3, "Fill in the blank: \"Neither the manager nor the employees ___ aware of the change.\"", ["was", "were", "is being", "has been"], 1,
            "With neither…nor, the verb agrees with the nearer subject. \"Employees\" is plural, so the verb is \"were\"."),
          msq("e1-5", 3, "Which sentences are grammatically correct?",
            ["He has been working here since 2019.", "I am knowing the answer.", "Each of the students has a laptop.", "She don't like coffee."], [0, 2],
            "\"Know\" is a stative verb and is not used in the progressive. \"Each\" takes a singular verb. \"She\" needs \"doesn't\"."),
          mcq("e1-6", 2, "Choose the antonym of \"scarce\".", ["rare", "abundant", "limited", "meagre"], 1, "Scarce means in short supply. Its opposite is abundant."),
          mcq("e1-7", 3, "In which word does the primary stress fall on the second syllable?", ["photograph", "photography", "window", "garden"], 1,
            "pho-TOG-ra-phy. The other words are stressed on the first syllable: PHO-to-graph, WIN-dow, GAR-den."),
          mcq("e1-8", 2, "Fill in the blank: \"She is good ___ mathematics.\"", ["in", "at", "on", "with"], 1, "The fixed collocation is \"good at\" a subject or skill."),
          mcq("e1-9", 3, "Which statement best captures the main idea of the passage?",
            ["Online degrees are less valuable than campus degrees.", "Online learning widens access, but success depends on disciplined study habits.", "Students in small towns do not want higher education.", "Exams are the best way to measure learning."], 1,
            "The passage credits remote learning with widening access, then argues that planning and consistent habits decide who completes.",
            { context: PASSAGE_1 }),
          msq("e1-10", 3, "According to the passage, which habits are linked to higher completion rates?",
            ["Planning the week", "Studying only before exams", "Joining peer study groups", "Attempting assignments early"], [0, 2, 3],
            "The passage names planning, peer groups and early attempts. Studying only before exams is the contrast case.",
            { context: PASSAGE_1 }),
        ],
      },
    ],
  },
  {
    slug: "mock-2",
    title: "Qualifier Mock 2",
    description: "More computation and multi-step reasoning. Take it after Mock 1.",
    difficulty: "Challenging",
    durationMin: 120,
    sections: [
      {
        subjectSlug: "mathematics-for-data-science-1",
        title: "Mathematics for Data Science I",
        short: "Maths I",
        questions: [
          nat("m2-1", 2, "|A| = 5, |B| = 7 and |A ∩ B| = 3. What is |A ∪ B|?", 9, "|A ∪ B| = |A| + |B| − |A ∩ B| = 5 + 7 − 3 = 9."),
          mcq("m2-2", 2, "How many subsets does a set with 4 elements have?", ["8", "16", "4", "24"], 1, "A set with n elements has 2ⁿ subsets. 2⁴ = 16."),
          mcq("m2-3", 3, "Let f(x) = 2x + 3 and g(x) = x². What is (f ∘ g)(2)?", ["11", "49", "14", "7"], 0,
            "(f ∘ g)(2) = f(g(2)) = f(4) = 2·4 + 3 = 11. (49 is (g ∘ f)(2).)"),
          nat("m2-4", 3, "What is the distance between the points (1, 2) and (4, 6)?", 5, "√((4 − 1)² + (6 − 2)²) = √(9 + 16) = √25 = 5.", { tolerance: 0.01 }),
          mcq("m2-5", 2, "Where does the line 3x − 4y = 12 cut the x-axis?", ["(4, 0)", "(0, −3)", "(−4, 0)", "(3, 0)"], 0, "On the x-axis y = 0, so 3x = 12 and x = 4."),
          msq("m2-6", 3, "Which statements about f(x) = −x² + 4x + 1 are true?",
            ["The parabola opens downward", "The maximum value of f is 5", "The axis of symmetry is x = −2", "The y-intercept is 1"], [0, 1, 3],
            "a = −1 < 0, so it opens downward. Vertex at x = −4 / (2·−1) = 2, f(2) = −4 + 8 + 1 = 5. Axis x = 2, not −2. f(0) = 1."),
          nat("m2-7", 3, "For what positive value of k does x² − kx + 9 = 0 have equal roots?", 6, "Equal roots need discriminant 0: k² − 36 = 0, so k = 6 (positive)."),
          mcq("m2-8", 2, "What is the midpoint of the segment joining (−2, 5) and (6, −1)?", ["(2, 2)", "(4, 4)", "(2, 3)", "(−4, 3)"], 0, "((−2 + 6)/2, (5 − 1)/2) = (2, 2)."),
          nat("m2-9", 3, "What is the remainder when x³ + 2x² − x + 4 is divided by (x − 2)?", 18, "Remainder theorem: p(2) = 8 + 8 − 2 + 4 = 18."),
          mcq("m2-10", 2, "What is the degree of (x² + 1)(x³ − x)?", ["5", "6", "3", "2"], 0, "Degrees add when multiplying: 2 + 3 = 5."),
        ],
      },
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          mcq("s2-1", 2, "A movie is rated Poor, Average, Good or Excellent. What type of data is the rating?", DATA_TYPES, 3,
            "The categories have a natural order but no fixed numeric gaps, so the data is categorical (ordinal)."),
          nat("s2-2", 2, "The mean of 5 numbers is 12. If the number 20 is removed, what is the mean of the remaining numbers?", 10,
            "Total = 5 × 12 = 60. After removal: 40 / 4 = 10.", { tolerance: 0.01 }),
          nat("s2-3", 3, "Find the range of 14, 7, 22, 9, 31, 18.", 24, "Range = max − min = 31 − 7 = 24."),
          mcq("s2-4", 2, "Which chart is best for showing each category's share of a whole?", ["Histogram", "Scatter plot", "Pie chart", "Box plot"], 2,
            "A pie chart shows parts of a whole for categorical data."),
          nat("s2-5", 3, "3 students scored 70, 5 scored 80 and 2 scored 90. What is the mean score?", 79,
            "(3·70 + 5·80 + 2·90) / 10 = (210 + 400 + 180) / 10 = 79.", { tolerance: 0.01 }),
          mcq("s2-6", 3, "10 is added to every observation in a dataset. Which statement is true?",
            ["Mean and SD both increase by 10", "Mean increases by 10, SD is unchanged", "Mean is unchanged, SD increases by 10", "Both are unchanged"], 1,
            "A shift moves the centre by the same amount but leaves spread unchanged."),
          nat("s2-7", 3, "x = (1, 2, 3) and y = (2, 4, 6). Find the sample covariance of x and y (divide by n − 1).", 2,
            "Means: x̄ = 2, ȳ = 4. Deviation products: (−1)(−2) + 0·0 + (1)(2) = 4. Sample covariance = 4 / 2 = 2.", { tolerance: 0.01 }),
          mcq("s2-8", 2, "The correlation between X and Y is 0. What can you conclude?",
            ["X and Y are independent", "There is no linear association between X and Y", "Y is constant", "X causes Y"], 1,
            "r measures linear association only. A strong non-linear relationship (e.g. y = x² on symmetric x) can still give r = 0."),
          msq("s2-9", 3, "Which statistics are resistant (robust) to extreme outliers?", ["Median", "Mean", "Interquartile range", "Standard deviation"], [0, 2],
            "Median and IQR depend only on the middle ordered values. Mean and SD use every value, so outliers pull them."),
          nat("s2-10", 2, "Scores have mean 60 and standard deviation 8. What is the z-score of a score of 76?", 2,
            "z = (76 − 60) / 8 = 2.", { tolerance: 0.01 }),
        ],
      },
      {
        subjectSlug: "computational-thinking",
        title: "Computational Thinking",
        short: "CT",
        questions: [
          nat("c2-1", 2, "What is the value of x at the end?", 81, "x is multiplied by 3 four times: 3⁴ = 81.", { code: "x = 1\nrepeat 4 times {\n    x = x * 3\n}" }),
          nat("c2-2", 3, "What does countVowels(\"education\") return?", 5, "e, u, a, i, o are the 5 vowels in \"education\".",
            { code: "Procedure countVowels(W)\n    c = 0\n    foreach letter in W {\n        if (letter is one of a, e, i, o, u) {\n            c = c + 1\n        }\n    }\n    return c\nEnd countVowels" }),
          mcq("c2-3", 3, "Using the table above, what is the value of count at the end?", ["1", "2", "3", "0"], 1,
            "From Chennai: Asha (70 < 78, no), Chitra (91 > 85, yes), Farhan (85 > 70, yes). count = 2.",
            { context: STUDENTS_6, code: "count = 0\nforeach X in Table {\n    if (X.City == \"Chennai\" and X.Physics > X.Maths) {\n        count = count + 1\n    }\n}" }),
          nat("c2-4", 3, "Using the same table, what is the value of S at the end?", 183, "Delhi students: Bala 92 + Esha 91 = 183.",
            { context: STUDENTS_6, code: "S = 0\nforeach X in Table {\n    if (X.City == \"Delhi\") {\n        S = S + X.Maths\n    }\n}" }),
          mcq("c2-5", 2, "Using the same table, what is the value of best at the end?", ["Bala", "Chitra", "Farhan", "Esha"], 1,
            "The loop keeps the name with the highest Physics mark: Chitra with 91.",
            { context: STUDENTS_6, code: "best = \"None\"\ntop = 0\nforeach X in Table {\n    if (X.Physics > top) {\n        top = X.Physics\n        best = X.Name\n    }\n}" }),
          msq("c2-6", 3, "Which loops run their body exactly 5 times?",
            ["i = 0; while (i < 5) { i = i + 1 }", "i = 1; while (i <= 5) { i = i + 1 }", "i = 0; while (i <= 5) { i = i + 1 }", "i = 10; while (i > 5) { i = i - 1 }"], [0, 1, 3],
            "Option 3 runs for i = 0…5, which is 6 times. The others run for 0–4, 1–5 and 10–6 respectively: 5 times each."),
          nat("c2-7", 2, "What is the value of s at the end?", 6, "It counts pairs (i, j) with i < j from {1, 2, 3, 4}: C(4, 2) = 6.",
            { code: "s = 0\nforeach i in [1, 2, 3, 4] {\n    foreach j in [1, 2, 3, 4] {\n        if (i < j) {\n            s = s + 1\n        }\n    }\n}" }),
          mcq("c2-8", 3, "For which input does check(n) return False?", ["13", "29", "51", "97"], 2,
            "check is a primality test. 51 = 3 × 17 is composite. 13, 29 and 97 are prime.",
            { code: "Procedure check(n)\n    d = 2\n    while (d * d <= n) {\n        if (n mod d == 0) {\n            return False\n        }\n        d = d + 1\n    }\n    return True\nEnd check" }),
          nat("c2-9", 2, "What is the value of pos at the end? (Positions start at 0.)", 2,
            "The loop tracks the position of the smallest element. The minimum is 1, at position 2.",
            { code: "L = [4, 7, 1, 8, 3]\nm = 4\npos = 0\ni = 0\nforeach x in L {\n    if (x < m) {\n        m = x\n        pos = i\n    }\n    i = i + 1\n}" }),
          mcq("c2-10", 2, "What does (True and not False) or False evaluate to?", ["True", "False"], 0,
            "not False = True. True and True = True. True or False = True."),
        ],
      },
      {
        subjectSlug: "english-1",
        title: "English I",
        short: "English I",
        questions: [
          mcq("e2-1", 2, "Choose the correctly spelt word.", ["acommodate", "accomodate", "accommodate", "acomodate"], 2, "Accommodate has a double c and a double m."),
          mcq("e2-2", 2, "Fill in the blank: \"By next June, she ___ her degree.\"", ["completes", "will have completed", "has completed", "completed"], 1,
            "\"By\" + a future time signals an action finished before then. That takes the future perfect."),
          mcq("e2-3", 2, "Choose the one word for \"a person who speaks many languages\".", ["polyglot", "philatelist", "bibliophile", "optimist"], 0,
            "A philatelist collects stamps and a bibliophile loves books."),
          mcq("e2-4", 3, "Choose the passive form of \"The committee approved the proposal.\"",
            ["The proposal is approved by the committee.", "The proposal was approved by the committee.", "The proposal has been approved by the committee.", "The committee was approved by the proposal."], 1,
            "Simple past active (approved) becomes simple past passive (was approved). The object becomes the subject."),
          msq("e2-5", 3, "Which words are nouns in \"The quick decision of the team surprised everyone\"?", ["decision", "quick", "team", "surprised"], [0, 2],
            "\"Quick\" is an adjective and \"surprised\" is the verb. (\"Everyone\" is a pronoun.)"),
          mcq("e2-6", 2, "What does the idiom \"to break the ice\" mean?",
            ["To damage something fragile", "To ease the initial tension in a social situation", "To end a friendship", "To start a quarrel"], 1,
            "It means saying or doing something to help people feel relaxed when they first meet."),
          mcq("e2-7", 3, "Which word begins with the same consonant sound as \"ship\" (/ʃ/)?", ["chip", "sugar", "skip", "zip"], 1,
            "\"Sugar\" is pronounced /ˈʃʊɡə/. \"Chip\" begins with /tʃ/, \"skip\" with /s/ and \"zip\" with /z/."),
          mcq("e2-8", 2, "Choose the correct reported speech: He said, \"I am tired.\"",
            ["He said that I am tired.", "He said that he was tired.", "He said that he is being tired.", "He told that he was tired."], 1,
            "The pronoun shifts (I → he) and the tense backshifts (am → was). \"Told\" needs an object."),
          mcq("e2-9", 3, "How does the author view revision?",
            ["As a sign of weak writing", "As an essential part of producing good writing", "As useful only for beginners", "As less important than the first draft"], 1,
            "The last sentence says revision is \"the very process by which strong writing is made\".",
            { context: PASSAGE_2 }),
          msq("e2-10", 3, "Which actions does the passage say experienced writers take?",
            ["Cut repetition", "Add more examples", "Reorder paragraphs", "Replace vague words with precise ones"], [0, 2, 3],
            "The passage lists cutting repetition, reordering paragraphs and replacing vague words. Adding examples is not mentioned.",
            { context: PASSAGE_2 }),
        ],
      },
    ],
  },
];
