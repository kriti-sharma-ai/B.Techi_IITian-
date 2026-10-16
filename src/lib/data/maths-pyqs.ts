import type { QualifierMock } from "../types";

// Mathematics I previous-year papers (IIT Madras BS, Foundation, weeks 1–4).
// Questions, options and answer keys are reproduced as they appear in the official
// question papers. Formulae, graphs and tables are images in public/pyq/<slug>/, embedded
// inline as ![Figure](src#WxH) and rendered by components/qualifier-text.tsx.
// Generated from the paper PDFs; edit with care.

export const mathsPyqPapers: QualifierMock[] = [
  {
    slug: "maths-1-may-2024",
    title: "Maths I · May 2024",
    description: "The May 2024 Mathematics I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 60,
    sections: [
      {
        subjectSlug: "mathematics-for-data-science-1",
        title: "Mathematics for Data Science I",
        short: "Maths I",
        questions: [
          {
            id: "maths-1-may-2024-q1",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-may-2024/q1-passage-1.jpg#583x152)",
            prompt: "![Figure](/pyq/maths-1-may-2024/q1-1.jpg#287x20)",
            answer: 1,
            explanation: "A = {2, 4, …, 20} and B = {6, 12, 18}. R₂ needs a + b to end in 0, so R₂ = {(4,6), (14,6), (8,12), (18,12), (2,18), (12,18)}. Of these, only (2,18) has a as a factor of b. So R₁ ∩ R₂ = {(2,18)} and its cardinality is 1."
          },
          {
            id: "maths-1-may-2024-q2",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/maths-1-may-2024/q1-passage-1.jpg#583x152)",
            prompt: "What is the cardinality of R₁?",
            answer: 9,
            explanation: "B = {6, 12, 18}. For b = 6, a can be 2 or 6. For b = 12, a can be 2, 4, 6 or 12. For b = 18, a can be 2, 6 or 18. So |R₁| = 2 + 4 + 3 = 9."
          },
          {
            id: "maths-1-may-2024-q3",
            type: "multi",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-may-2024/q1-passage-1.jpg#583x152)",
            prompt: "Which of the following statements are correct?",
            options: [
              "R₁ is transitive.",
              "R₂ is transitive.",
              "R₂ is not symmetric.",
              "(2,18) is an element in R₂."
            ],
            answer: [0, 2, 3],
            explanation: "Being a factor is transitive (a divides b and b divides c means a divides c), so R₁ is transitive. R₂ = {(4,6), (14,6), (8,12), (18,12), (2,18), (12,18)}. (2,18) and (18,12) are in R₂ but (2,12) is not, so R₂ is not transitive. (4,6) is in R₂ but (6,4) is not, so R₂ is not symmetric. 2 + 18 = 20, so (2,18) ∈ R₂."
          },
          {
            id: "maths-1-may-2024-q4",
            type: "mcq",
            marks: 4,
            passage: "Suppose that P₁ and P₂ are two different points in a Cartesian coordinate system, with P₁ located at (3,−2) and P₂ at (−1, 5). Let L₁ and L₂ be lines passing through P₁ and P₂ respectively.",
            prompt: "![Figure](/pyq/maths-1-may-2024/q4-1.jpg#365x126)",
            options: [
              "![Figure](/pyq/maths-1-may-2024/q4-opt1-1.jpg#46x29)",
              "![Figure](/pyq/maths-1-may-2024/q4-opt2-1.jpg#52x24)",
              "![Figure](/pyq/maths-1-may-2024/q4-opt3-1.jpg#58x23)",
              "![Figure](/pyq/maths-1-may-2024/q4-opt4-1.jpg#56x27)"
            ],
            answer: 3,
            explanation: "L₁ passes through (3,−2) and (1,0), so its slope is −1 and L₁ is y = −x + 1. L₂ is perpendicular, so it has slope 1 through (−1,5): y = x + 6. Solve −x + 1 = x + 6 to get x = −5/2 and y = 7/2. The point is (−5/2, 7/2)."
          },
          {
            id: "maths-1-may-2024-q5",
            type: "mcq",
            marks: 4,
            passage: "Suppose that P₁ and P₂ are two different points in a Cartesian coordinate system, with P₁ located at (3,−2) and P₂ at (−1, 5). Let L₁ and L₂ be lines passing through P₁ and P₂ respectively.",
            prompt: "If the x−intercept of the line L₁ is 1 and y− intercept of the line L₂ is -1 and If θ is the angle between L₁ and L₂, then tan θ is equal to",
            options: [
              "![Figure](/pyq/maths-1-may-2024/q5-opt1-1.jpg#32x35)",
              "![Figure](/pyq/maths-1-may-2024/q5-opt2-1.jpg#27x36)",
              "![Figure](/pyq/maths-1-may-2024/q5-opt3-1.jpg#19x39)",
              "![Figure](/pyq/maths-1-may-2024/q5-opt4-1.jpg#20x34)"
            ],
            answer: 1,
            explanation: "L₁ through (3,−2) and (1,0) has slope m₁ = −1. L₂ through (−1,5) and (0,−1) has slope m₂ = −6. tan θ = |(m₁ − m₂)/(1 + m₁m₂)| = |(−1 + 6)/(1 + 6)| = 5/7."
          },
          {
            id: "maths-1-may-2024-q6",
            type: "numerical",
            marks: 4,
            prompt: "A company opened recruitment for the post of data analyst. 500 candidates have applied for the post. 285 candidates are proficient in Python programming, 195 candidates are proficient in C programming, 115 candidates are proficient in Java programming, 45 candidates are proficient in Python and Java, 70 candidates are proficient in C and Python, 50 candidates are proficient in C and Java and 50 candidates don’t know any of the programming languages. Find the number of candidates who are proficient in exactly one of the three programming languages.",
            answer: 325,
            explanation: "450 people know at least one language (500 − 50). 450 = 285 + 195 + 115 − 45 − 70 − 50 + x gives x = 20 who know all three. Exactly one = (sum of singles) − 2 × (sum of pairs) + 3x = 595 − 330 + 60 = 325."
          },
          {
            id: "maths-1-may-2024-q7",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/maths-1-may-2024/q7-1.jpg#721x219)",
            answer: 23,
            explanation: "Predicted y = 4x + 15 gives 35, 43, 51, 47, 55, 63 for x = 5, 7, 9, 8, 10, 12. The actual values give errors 2, 1, 2, 3, 2, 1. SSE = 4 + 1 + 4 + 9 + 4 + 1 = 23."
          },
          {
            id: "maths-1-may-2024-q8",
            type: "multi",
            marks: 4,
            prompt: "Consider the following polynomial p(x) whose graph is given below:-\n\n![Figure](/pyq/maths-1-may-2024/q8-1.jpg#608x420)\n\nWhich of the following options is/are correct?",
            options: [
              "![Figure](/pyq/maths-1-may-2024/q8-opt1-1.jpg#346x32)",
              "![Figure](/pyq/maths-1-may-2024/q8-opt2-1.jpg#409x30)",
              "![Figure](/pyq/maths-1-may-2024/q8-opt3-1.jpg#342x25)",
              "![Figure](/pyq/maths-1-may-2024/q8-opt4-1.jpg#284x28)"
            ],
            answer: [1, 2],
            explanation: "The graph crosses at −1, 1 and 2 with a flat shape, so these roots have odd multiplicity (3 or more), but they need not be equal. After x = 2 the graph goes up forever, so p(x) is increasing on (2, ∞) and p(x) → ∞ as x → ∞. There are only 4 turning points, not 5."
          },
          {
            id: "maths-1-may-2024-q9",
            type: "multi",
            marks: 4,
            prompt: "Consider the parabola y = x² + 4x + 12. Which of the following option(s) are true?",
            options: [
              "The co-ordinates of vertex is (−8, 2).",
              "The given equation attains it minima at x = −2.",
              "y-intercept of parabola is 12.",
              "The minimum value for the given equation is 8"
            ],
            answer: [1, 2, 3],
            explanation: "y = x² + 4x + 12 = (x + 2)² + 8. So the vertex is (−2, 8), the minimum is at x = −2 and the minimum value is 8. At x = 0, y = 12, so the y-intercept is 12. The vertex is not (−8, 2)."
          },
          {
            id: "maths-1-may-2024-q10",
            type: "multi",
            marks: 4,
            prompt: "![Figure](/pyq/maths-1-may-2024/q10-1.jpg#695x72)",
            options: [
              "q(x) is a cubic polynomial.",
              "q(x) is a quadratic polynomial.",
              "q(x) has two distinct zeros.",
              "q(x) does not have any real zeros."
            ],
            answer: [1, 2],
            explanation: "The zeros 1/2 and 5 come from (2x − 1)(x − 5). The other zeros 2 and 3/5 must come from q(x). So q(x) = k(x − 2)(5x − 3), which is a quadratic with two distinct real zeros."
          },
          {
            id: "maths-1-may-2024-q11",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/maths-1-may-2024/q11-1.jpg#691x55)",
            options: [
              "If b² − 4ac > 0 and a perfect square then there exists a rational root of the quadratic equation.",
              "If b² − 4ac > 0 and not a perfect square then there exists a rational root of the quadratic equation.",
              "If b² − 4ac < 0 and a perfect square then there exists a rational root of the quadratic equation.",
              "If b² − 4ac < 0 and not a perfect square then there exists a rational root of the quadratic equation."
            ],
            answer: 0,
            explanation: "The roots are (−b ± √D)/2a with D = b² − 4ac. If D > 0 and D is a perfect square, √D is an integer, so both roots are rational. If D < 0 there are no real roots at all, so options C and D are false."
          }
        ],
      },
    ],
  },
  {
    slug: "maths-1-january-2024",
    title: "Maths I · January 2024",
    description: "The January 2024 Mathematics I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 60,
    sections: [
      {
        subjectSlug: "mathematics-for-data-science-1",
        title: "Mathematics for Data Science I",
        short: "Maths I",
        questions: [
          {
            id: "maths-1-january-2024-q1",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-january-2024/q1-1.jpg#465x125)",
            options: [
              "![Figure](/pyq/maths-1-january-2024/q1-opt1-1.jpg#225x24)",
              "![Figure](/pyq/maths-1-january-2024/q1-opt2-1.jpg#263x26)",
              "![Figure](/pyq/maths-1-january-2024/q1-opt3-1.jpg#501x24)",
              "![Figure](/pyq/maths-1-january-2024/q1-opt4-1.jpg#507x22)"
            ],
            answer: [0, 3],
            explanation: "R₁ is reflexive (|x − x| = 0) and symmetric (|x − y| = |y − x|). It is not transitive: (0,3) and (3,6) are in R₁ but |0 − 6| = 6 > 3. R₂ means x and y leave the same remainder on division by 3, which is reflexive, symmetric and transitive. So R₂ is an equivalence relation and R₁ is not."
          },
          {
            id: "maths-1-january-2024-q2",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-january-2024/q2-1.jpg#546x22)",
            options: [
              "![Figure](/pyq/maths-1-january-2024/q2-opt1-1.jpg#196x20)",
              "![Figure](/pyq/maths-1-january-2024/q2-opt2-1.jpg#96x18)",
              "![Figure](/pyq/maths-1-january-2024/q2-opt3-1.jpg#199x25)",
              "![Figure](/pyq/maths-1-january-2024/q2-opt4-1.jpg#228x20)"
            ],
            answer: [0, 2],
            explanation: "|x² − 4| is defined for every real x, so f is defined on all of ℝ. f(2) = f(−2) = −1, so f is not one-one. |x² − 4| takes every value from 0 upward, so the range of f is [−1, ∞) and the minimum value is −1, not 0."
          },
          {
            id: "maths-1-january-2024-q3",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-january-2024/q3-1.jpg#692x48)",
            options: [
              "![Figure](/pyq/maths-1-january-2024/q3-opt1-1.jpg#194x26)",
              "![Figure](/pyq/maths-1-january-2024/q3-opt2-1.jpg#207x26)",
              "![Figure](/pyq/maths-1-january-2024/q3-opt3-1.jpg#273x23)",
              "![Figure](/pyq/maths-1-january-2024/q3-opt4-1.jpg#509x25)"
            ],
            answer: [1, 2, 3],
            explanation: "Both p and q have degree 5 with leading coefficient −1. So p(x) → −∞ and q(x) → −∞ as x → ∞. A degree 5 polynomial has at most 4 turning points. Since the degrees and leading terms match, q(x) ÷ p(x) gives the constant quotient 1."
          },
          {
            id: "maths-1-january-2024-q4",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-january-2024/q4-passage-1.jpg#658x45)",
            prompt: "What is the area of the triangle ABC?",
            answer: 2,
            explanation: "A(4,3) and C(8,3) both lie on y = 3, so base AC = 4. B(2,2) is 1 unit below that line, so the height is 1. Area of ABC = 1/2 × 4 × 1 = 2."
          },
          {
            id: "maths-1-january-2024-q5",
            type: "multi",
            marks: 5,
            passage: "![Figure](/pyq/maths-1-january-2024/q4-passage-1.jpg#658x45)",
            prompt: "Choose all the possible options for P.",
            options: [
              "(0, 0)",
              "(2, 4)",
              "(−2, 4)",
              "(−1, 1)",
              "(1, 1)"
            ],
            answer: [3, 4],
            explanation: "Area of PAB must be 2/4 = 1/2. Area = 1/2 |4(2 − t²) + 2(t² − 3) + t(3 − 2)| = 1/2 |−2t² + t + 2|. So |−2t² + t + 2| = 1, which gives t = 1, −1/2, 3/2 or −1. With P = (t, t²), the options that work are (1, 1) and (−1, 1)."
          },
          {
            id: "maths-1-january-2024-q6",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-january-2024/q6-passage-1.jpg#533x74)",
            prompt: "Choose the point where L₁ and L₂ intersect.",
            options: [
              "(10, 18)",
              "(5, 8)",
              "(−10,−18)",
              "(6, 6)"
            ],
            answer: 2,
            explanation: "Intercept form: L₁ is x/2 − y/3 = 1, or 3x − 2y = 6. L₂ is −x + y/2 = 1, or y = 2x + 2. Put this y in L₁: 3x − 4x − 4 = 6, so x = −10 and y = −18. The point is (−10, −18)."
          },
          {
            id: "maths-1-january-2024-q7",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-january-2024/q6-passage-1.jpg#533x74)",
            prompt: "If θ is the angle between L₁ and L₂, then tan θ is equal to",
            options: [
              "![Figure](/pyq/maths-1-january-2024/q7-opt1-1.jpg#16x42)",
              "![Figure](/pyq/maths-1-january-2024/q7-opt2-1.jpg#15x36)",
              "![Figure](/pyq/maths-1-january-2024/q7-opt3-1.jpg#17x39)",
              "![Figure](/pyq/maths-1-january-2024/q7-opt4-1.jpg#16x41)"
            ],
            answer: 0,
            explanation: "From the intercepts, slope of L₁ = 3/2 (x-intercept 2, y-intercept −3) and slope of L₂ = 2 (x-intercept −1, y-intercept 2). tan θ = |(2 − 3/2)/(1 + 2 × 3/2)| = (1/2)/4 = 1/8."
          },
          {
            id: "maths-1-january-2024-q8",
            type: "numerical",
            marks: 2,
            passage: "In a grocery store, 60 customers made a purchase on a specific day. 28 people bought bread, 37 people bought milk and 30 people bought fruits. All the customers bought at least one of the three items. 16 of them bought bread and fruits, 17 of them bought bread and milk and 9 of them bought all the three items.",
            prompt: "Find the number of customers who bought milk and fruits.",
            answer: 11,
            explanation: "Every customer bought something, so 60 = 28 + 37 + 30 − 16 − 17 − x + 9, where x is the number who bought milk and fruits. This gives 60 = 71 − x, so x = 11."
          },
          {
            id: "maths-1-january-2024-q9",
            type: "numerical",
            marks: 2,
            passage: "In a grocery store, 60 customers made a purchase on a specific day. 28 people bought bread, 37 people bought milk and 30 people bought fruits. All the customers bought at least one of the three items. 16 of them bought bread and fruits, 17 of them bought bread and milk and 9 of them bought all the three items.",
            prompt: "Find the number of customers who bought milk and fruits but not bread.",
            answer: 2,
            explanation: "First, milk and fruits = 11 (from 60 = 28 + 37 + 30 − 16 − 17 − x + 9). Remove the 9 people who bought all three items: 11 − 9 = 2 bought milk and fruits but not bread."
          },
          {
            id: "maths-1-january-2024-q10",
            type: "multi",
            marks: 4,
            prompt: "Consider the following polynomial p(x) whose graph is given below:-\n\n![Figure](/pyq/maths-1-january-2024/q10-1.jpg#615x422)\n\nWhich of the following options is/are correct.",
            options: [
              "Multiplicity of -1 and 1 must be same.",
              "p(x) is increasing in the interval (3,∞).",
              "The total number of local minima is 3.",
              "The number of turning points is 5."
            ],
            answer: [1, 2],
            explanation: "The roots are −2, −1, 0, 1, 2 and 3, and the graph rises after x = 3, so p is increasing on (3, ∞). The local minima are near −0.6, 0.6 and 2.7, so there are 3. There are 6 turning points, not 5. The roots −1 and 1 only need odd multiplicity, so they need not be the same."
          },
          {
            id: "maths-1-january-2024-q11",
            type: "multi",
            marks: 4,
            prompt: "Which of the following options is/are true?",
            options: [
              "![Figure](/pyq/maths-1-january-2024/q11-opt1-1.jpg#600x26)",
              "![Figure](/pyq/maths-1-january-2024/q11-opt2-1.jpg#642x27)",
              "![Figure](/pyq/maths-1-january-2024/q11-opt3-1.jpg#530x49)",
              "![Figure](/pyq/maths-1-january-2024/q11-opt4-1.jpg#524x49)"
            ],
            answer: [2, 3],
            explanation: "For y = x² + 2x − 5, slope = 2x + 2 = 10 gives x = 4 and y = 16 + 8 − 5 = 19, so the point is (4, 19), not (4, 17). The axis of x² + 4x + 5 is x = −2, not 2. Two different equations can share discriminant and roots, e.g. x² − 3x + 2 = 0 and −x² + 3x − 2 = 0 (both D = 1, roots 1 and 2)."
          },
          {
            id: "maths-1-january-2024-q12",
            type: "numerical",
            marks: 2.5,
            passage: "![Figure](/pyq/maths-1-january-2024/q12-passage-1.jpg#580x57)",
            prompt: "Calculate the value of A",
            answer: 2,
            explanation: "The slope of y = Ax² + Bx + C at x is 2Ax + B. At x = 3: 6A + B = 16. At x = 2: 4A + B = 12. Subtract the two equations: 2A = 4, so A = 2."
          },
          {
            id: "maths-1-january-2024-q13",
            type: "numerical",
            marks: 2.5,
            passage: "![Figure](/pyq/maths-1-january-2024/q12-passage-1.jpg#580x57)",
            prompt: "Calculate the value of B",
            answer: 4,
            explanation: "The slope of y = Ax² + Bx + C at x is 2Ax + B. From 6A + B = 16 and 4A + B = 12 we get A = 2. Then B = 12 − 4A = 12 − 8 = 4."
          },
          {
            id: "maths-1-january-2024-q14",
            type: "mcq",
            marks: 4,
            prompt: "Ram and Shyam want to solve a quadratic equation. Ram made a mistake in writing down the constant term and ended up in getting roots as 3 and 4. Shyam made a mistake in writing down the coefficient of x and got the roots as 2 and 3. Consider the leading coefficient to be 1 in all cases. The correct roots of the quadratic equation are:",
            options: [
              "1 and 5",
              "2 and 6",
              "1 and 6",
              "2 and 5"
            ],
            answer: 2,
            explanation: "Ram has the wrong constant but the right x coefficient, so the sum of roots = 3 + 4 = 7. Shyam has the wrong x coefficient but the right constant, so the product of roots = 2 × 3 = 6. The equation is x² − 7x + 6 = 0, with roots 1 and 6."
          }
        ],
      },
    ],
  },
  {
    slug: "maths-1-september-2023",
    title: "Maths I · September 2023",
    description: "The September 2023 Mathematics I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 60,
    sections: [
      {
        subjectSlug: "mathematics-for-data-science-1",
        title: "Mathematics for Data Science I",
        short: "Maths I",
        questions: [
          {
            id: "maths-1-september-2023-q1",
            type: "numerical",
            marks: 4,
            passage: "In a survey among 140 people, it was found that 75% of these 140 people like playing cricket and 50% of all the 140 people like playing football. Note that, some people may not like both games that could be 0 also.\nUse this information to answer the given subquestions",
            prompt: "What is the minimum number of people who like both games?",
            answer: 35,
            explanation: "Cricket = 75% of 140 = 105. Football = 50% of 140 = 70. Both = 105 + 70 − (number who like at least one), and that number is at most 140. So the minimum for both is 105 + 70 − 140 = 35."
          },
          {
            id: "maths-1-september-2023-q2",
            type: "numerical",
            marks: 2,
            passage: "In a survey among 140 people, it was found that 75% of these 140 people like playing cricket and 50% of all the 140 people like playing football. Note that, some people may not like both games that could be 0 also.\nUse this information to answer the given subquestions",
            prompt: "If there are 10 people who don’t like both games, then what is the number of people who like only cricket?",
            answer: 60,
            explanation: "People who like at least one game = 140 − 10 = 130. Both = 105 + 70 − 130 = 45. Only cricket = cricket − both = 105 − 45 = 60."
          },
          {
            id: "maths-1-september-2023-q3",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/maths-1-september-2023/q3-1.jpg#602x25)",
            options: [
              "![Figure](/pyq/maths-1-september-2023/q3-opt1-1.jpg#180x29)",
              "![Figure](/pyq/maths-1-september-2023/q3-opt2-1.jpg#227x26)",
              "![Figure](/pyq/maths-1-september-2023/q3-opt3-1.jpg#165x28)",
              "![Figure](/pyq/maths-1-september-2023/q3-opt4-1.jpg#252x27)"
            ],
            answer: 1,
            explanation: "|x| ≥ 0 and x² ≥ 0, so f(x) ≥ 2, and f(0) = 2. So the minimum value is 2. f is defined for every real x, f(1) = f(−1) = 4 so it is not one-one, and the range is [2, ∞), not (0, ∞)."
          },
          {
            id: "maths-1-september-2023-q4",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/maths-1-september-2023/q4-1.jpg#665x72)",
            options: [
              "![Figure](/pyq/maths-1-september-2023/q4-opt1-1.jpg#49x21)",
              "![Figure](/pyq/maths-1-september-2023/q4-opt2-1.jpg#50x20)",
              "![Figure](/pyq/maths-1-september-2023/q4-opt3-1.jpg#182x25)",
              "![Figure](/pyq/maths-1-september-2023/q4-opt4-1.jpg#292x27)"
            ],
            answer: 0,
            explanation: "The slope of q(x) = ax² + 20x + 15 is 2ax + 20. At x = 2 it is 4a + 20, which must equal 40 (the slope of y = 40x + 5). So 4a = 20 and a = 5. Then q(x) = 5x² + 20x + 15 has D = 100 > 0 (two roots) and its minimum is at x = −2."
          },
          {
            id: "maths-1-september-2023-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/maths-1-september-2023/q5-1.jpg#337x160)",
            options: [
              "![Figure](/pyq/maths-1-september-2023/q5-opt1-1.jpg#171x29)",
              "![Figure](/pyq/maths-1-september-2023/q5-opt2-1.jpg#169x28)",
              "![Figure](/pyq/maths-1-september-2023/q5-opt3-1.jpg#216x22)",
              "![Figure](/pyq/maths-1-september-2023/q5-opt4-1.jpg#305x32)"
            ],
            answer: 1,
            explanation: "Slopes: ℓ₁ = −2/3, ℓ₂ = −1/3, ℓ₃ = −3/9 = −1/3. So ℓ₂ and ℓ₃ are parallel (equal slopes, different lines). ℓ₁ is not parallel to ℓ₂, and (−2/3)(−1/3) ≠ −1, so ℓ₁ and ℓ₃ are not perpendicular."
          },
          {
            id: "maths-1-september-2023-q6",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/maths-1-september-2023/q6-1.jpg#744x185)",
            answer: 165,
            explanation: "For x > 150, price per item = 1800 − 10(x − 150) = 3300 − 10x. Amount paid = x(3300 − 10x) = −10x² + 3300x. This is a downward parabola, so the maximum is at x = 3300/20 = 165."
          },
          {
            id: "maths-1-september-2023-q7",
            type: "multi",
            marks: 4,
            prompt: "![Figure](/pyq/maths-1-september-2023/q7-1.jpg#508x408)",
            options: [
              "![Figure](/pyq/maths-1-september-2023/q7-opt1-1.jpg#327x25)",
              "![Figure](/pyq/maths-1-september-2023/q7-opt2-1.jpg#259x30)",
              "![Figure](/pyq/maths-1-september-2023/q7-opt3-1.jpg#261x29)",
              "![Figure](/pyq/maths-1-september-2023/q7-opt4-1.jpg#326x23)"
            ],
            answer: [0, 3],
            explanation: "The graph crosses the axis at 0 and 3 and touches it at 1, so root 1 has even multiplicity. Minimum degree = 1 + 2 + 1 = 4, and root 3 can have multiplicity 1. The graph crosses at x = 0, so there is no turning point there. There are 3 turning points, not 4."
          },
          {
            id: "maths-1-september-2023-q8",
            type: "multi",
            marks: 4,
            prompt: "Which of the following options is/are true?",
            options: [
              "![Figure](/pyq/maths-1-september-2023/q8-opt1-1.jpg#476x26)",
              "![Figure](/pyq/maths-1-september-2023/q8-opt2-1.jpg#369x28)",
              "![Figure](/pyq/maths-1-september-2023/q8-opt3-1.jpg#582x46)",
              "![Figure](/pyq/maths-1-september-2023/q8-opt4-1.jpg#348x26)"
            ],
            answer: [1, 2],
            explanation: "|S × S| = 4 × 4 = 16, not 4. y − 1 = (x − 2)² is y = (x − 2)² + 1, so the vertex is (2, 1). Any subset of S × S is a relation on S by definition. A line parallel to the y-axis is vertical, so its slope is undefined, not 0."
          },
          {
            id: "maths-1-september-2023-q9",
            type: "multi",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-september-2023/q9-passage-1.jpg#471x187)",
            prompt: "Which of the following options is/are true?",
            options: [
              "![Figure](/pyq/maths-1-september-2023/q9-opt1-1.jpg#236x25)",
              "![Figure](/pyq/maths-1-september-2023/q9-opt2-1.jpg#216x24)",
              "![Figure](/pyq/maths-1-september-2023/q9-opt3-1.jpg#303x62)",
              "![Figure](/pyq/maths-1-september-2023/q9-opt4-1.jpg#301x58)"
            ],
            answer: [1, 2],
            explanation: "p(x) + q(x) = x² − 4x − 5 has degree 2. p(x)r(x) has degree 2 + 3 = 5. Dividing r(x) = 2x³ − 4x² − 6x by p(x) = x² − 5x − 6 gives quotient 2x + 6 and remainder 36x + 36, which is linear."
          },
          {
            id: "maths-1-september-2023-q10",
            type: "multi",
            marks: 4,
            passage: "![Figure](/pyq/maths-1-september-2023/q9-passage-1.jpg#471x187)",
            prompt: "Which of the following options is/are true?",
            options: [
              "![Figure](/pyq/maths-1-september-2023/q10-opt1-1.jpg#258x27)",
              "![Figure](/pyq/maths-1-september-2023/q10-opt2-1.jpg#266x21)",
              "![Figure](/pyq/maths-1-september-2023/q10-opt3-1.jpg#287x28)",
              "![Figure](/pyq/maths-1-september-2023/q10-opt4-1.jpg#281x26)"
            ],
            answer: [1, 3],
            explanation: "p(x) = (x − 6)(x + 1), q(x) = x + 1, r(x) = 2x(x − 3)(x + 1). So s(x) = 2x(x + 1)³(x − 3)(x − 6). The distinct roots are −1, 0, 3, 6 (four), root 3 has multiplicity 1, and 1 is not a root. There is one turning point in each gap (−1,0), (0,3), (3,6), so 3 turning points."
          },
          {
            id: "maths-1-september-2023-q11",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-september-2023/q11-passage-1.jpg#502x234)",
            prompt: "Which of the following options is true?",
            options: [
              "![Figure](/pyq/maths-1-september-2023/q11-opt1-1.jpg#191x19)",
              "![Figure](/pyq/maths-1-september-2023/q11-opt2-1.jpg#285x26)",
              "![Figure](/pyq/maths-1-september-2023/q11-opt3-1.jpg#275x23)",
              "![Figure](/pyq/maths-1-september-2023/q11-opt4-1.jpg#317x57)"
            ],
            answer: 0,
            explanation: "Solve 2x + y = 1 and x − y = 2: 3x = 3, so P = (1, −1). The y-intercept of p(x) is (0, 1). Slope of ℓ = (1 − (−1))/(0 − 1) = −2. So ℓ is y = −2x + 1, i.e. 2x + y = 1."
          },
          {
            id: "maths-1-september-2023-q12",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-september-2023/q11-passage-1.jpg#502x234)",
            prompt: "![Figure](/pyq/maths-1-september-2023/q12-1.jpg#297x31)",
            answer: 10,
            explanation: "Line ℓ is y = −2x + 1. For x = 1, 2, −1, 0 it predicts −1, −3, 3, 1. The actual y values are −2, −1, 2, 3, so the errors are 1, 2, 1, 2. SSE = 1 + 4 + 1 + 4 = 10."
          },
          {
            id: "maths-1-september-2023-q13",
            type: "multi",
            marks: 4,
            passage: "![Figure](/pyq/maths-1-september-2023/q13-passage-1.jpg#580x265)",
            prompt: "Which of the following options is/are true?",
            options: [
              "R₁ is a reflexive relation.",
              "R₂ is a symmetric relation.",
              "R₁ is not a transitive relation.",
              "R₂ is a transitive relation."
            ],
            answer: [0, 1],
            explanation: "R₁ means same axis of symmetry, which works like equality, so R₁ is reflexive, symmetric and transitive. R₂ swaps b and c, and swapping again gives the first function back, so R₂ is symmetric. R₂ is not transitive: f R₂ g and g R₂ f, but f R₂ f only when b = c."
          },
          {
            id: "maths-1-september-2023-q14",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/maths-1-september-2023/q13-passage-1.jpg#580x265)",
            prompt: "Which of the following options is true?",
            options: [
              "R₁ is a function.",
              "R₂ is a function.",
              "R₂ is not a one-one function.",
              "R₂ is not an onto function."
            ],
            answer: 1,
            explanation: "R₂ sends each ax² + bx + c to exactly one function, ax² + cx + b, so R₂ is a function. It is one-one and onto, because swapping b and c again undoes it. R₁ is not a function: one quadratic has the same axis as many others."
          }
        ],
      },
    ],
  },
  {
    slug: "maths-1-may-2023",
    title: "Maths I · May 2023",
    description: "The May 2023 Mathematics I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 60,
    sections: [
      {
        subjectSlug: "mathematics-for-data-science-1",
        title: "Mathematics for Data Science I",
        short: "Maths I",
        questions: [
          {
            id: "maths-1-may-2023-q1",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-may-2023/q1-passage-1.jpg#593x407)",
            prompt: "R₁ is _____________ . (Enter all correct options. Enter only the serial numbers of those options in increasing order without adding any comma or space in between them i.e., if your answer is 6 and 7, then you should enter 67]",
            answer: 245,
            explanation: "R₁ is not reflexive (Jan is missing). It is symmetric. It is not transitive: (April, March) and (March, April) are in R₁ but (April, April) is not, so it is not an equivalence relation. It is not a function, since March has two images and Jan has none. Options 2, 4, 5, so enter 245."
          },
          {
            id: "maths-1-may-2023-q2",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-may-2023/q1-passage-1.jpg#593x407)",
            prompt: "R₂ is ____________ . (Enter all correct options. Enter only the serial numbers of those options in increasing order without adding any comma or space in between them i.e., if your answer is 3 and 4, then you should enter 34)",
            answer: 12367,
            explanation: "R₂ is the identity relation on S. It is reflexive, symmetric and transitive, so it is an equivalence relation. Each month maps to itself, so it is a function that is both one-one and onto. Options 1, 2, 3, 6, 7, so enter 12367."
          },
          {
            id: "maths-1-may-2023-q3",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/maths-1-may-2023/q1-passage-1.jpg#593x407)",
            prompt: "Find the cardinality of the set (S × S) \\ R₂.",
            answer: 20,
            explanation: "|S × S| = 5 × 5 = 25. R₂ is the identity relation with 5 pairs, all inside S × S. So the set (S × S) minus R₂ has 25 − 5 = 20 elements."
          },
          {
            id: "maths-1-may-2023-q4",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-may-2023/q4-1.jpg#483x75)",
            options: [
              "![Figure](/pyq/maths-1-may-2023/q4-opt1-1.jpg#327x303)",
              "![Figure](/pyq/maths-1-may-2023/q4-opt2-1.jpg#343x295)",
              "![Figure](/pyq/maths-1-may-2023/q4-opt3-1.jpg#338x304)",
              "![Figure](/pyq/maths-1-may-2023/q4-opt4-1.jpg#339x290)"
            ],
            answer: 2,
            explanation: "p(x) = 0.3x³(x − 1)(x + 1)(x − 2)²(x − 3) has degree 3 + 1 + 1 + 2 + 1 = 8 with a positive leading term. So both ends go up to +∞. Only Figure 3 has both ends up, and it also touches the axis at x = 2 (even multiplicity)."
          },
          {
            id: "maths-1-may-2023-q5",
            type: "multi",
            marks: 3,
            prompt: "Which of the following options is/are true?",
            options: [
              "![Figure](/pyq/maths-1-may-2023/q5-opt1-1.jpg#785x31)",
              "![Figure](/pyq/maths-1-may-2023/q5-opt2-1.jpg#679x30)",
              "![Figure](/pyq/maths-1-may-2023/q5-opt3-1.jpg#587x31)",
              "![Figure](/pyq/maths-1-may-2023/q5-opt4-1.jpg#581x30)"
            ],
            answer: [2, 3],
            explanation: "2x + 3y = 6 and 3x − 2y = 6 have slopes −2/3 and 3/2, whose product is −1, so they are perpendicular. 4x + 6y = 12 is the same line as 2x + 3y = 6, so the distance is 0. Option A is false: m = 3 and n = 2, so m + n = 5."
          },
          {
            id: "maths-1-may-2023-q6",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-may-2023/q6-1.jpg#718x656)",
            options: [
              "![Figure](/pyq/maths-1-may-2023/q6-opt1-1.jpg#165x25)",
              "![Figure](/pyq/maths-1-may-2023/q6-opt2-1.jpg#170x27)",
              "![Figure](/pyq/maths-1-may-2023/q6-opt3-1.jpg#169x28)",
              "![Figure](/pyq/maths-1-may-2023/q6-opt4-1.jpg#343x27)"
            ],
            answer: [1, 3],
            explanation: "q(x) = x³ + 4x² + 3x. Dividing p(x) by q(x) gives quotient x − 1 and remainder r(x) = x² − 6x + 8. Its y-intercept is (0, 8) and its minimum point is (3, −1), so l has slope (−1 − 8)/3 = −3 and l is y = −3x + 8. q(x) = x(x + 1)(x + 3) has 3 distinct roots, so 2 turning points."
          },
          {
            id: "maths-1-may-2023-q7",
            type: "numerical",
            marks: 5,
            prompt: "A company opened recruitment for the post of data analyst. 500 candidates have applied for the post. 285 candidates are proficient in Python programming, 195 candidates are proficient in C programming, 115 candidates are proficient in Java programming, 45 candidates are proficient in Python and Java, 70 candidates are proficient in C and Python, 50 candidates are proficient in C and Java and 50 candidates don’t know any of the programming languages. Find the number of candidates who are proficient in exactly one of the three programming languages.",
            answer: 325,
            explanation: "450 people know at least one language (500 − 50). 450 = 285 + 195 + 115 − 45 − 70 − 50 + x gives x = 20 who know all three. Exactly one = (sum of singles) − 2 × (sum of pairs) + 3x = 595 − 330 + 60 = 325."
          },
          {
            id: "maths-1-may-2023-q8",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-may-2023/q8-1.jpg#741x76)",
            answer: 3,
            explanation: "B divides AC in ratio k : 1, so B = (4k/(k + 1), 3). Area of DEB = 1/2 |1(1 − 3) + 3(3 − 0) + x(0 − 1)| = 1/2 |7 − x| = 2, so x = 3 or 11. B lies inside AC, so x = 3. Then 4k/(k + 1) = 3 gives k = 3."
          },
          {
            id: "maths-1-may-2023-q9",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-may-2023/q9-1.jpg#652x197)",
            answer: -12,
            explanation: "With the slope fixed at 2, SSE = Σ(y − 2x − k)² is smallest when k is the mean of y − 2x. The values of y − 2x are 0, −1, −1, −1, so k = −3/4. Then 16k = −12."
          },
          {
            id: "maths-1-may-2023-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/maths-1-may-2023/q10-1.jpg#715x197)",
            answer: 17,
            explanation: "The vertex is at x = −1, so −b/2a = −1 and b = 2a. Slope at x = 1 is 2a + b = 4a = 8, so a = 2 and b = 4. Discriminant 16 − 8c = 8 gives c = 1. So q(2) = 8 + 8 + 1 = 17. (Note: with a = 2 the vertex is really a minimum, not a maximum.)"
          },
          {
            id: "maths-1-may-2023-q11",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/maths-1-may-2023/q11-passage-1.jpg#594x116)",
            prompt: "Find the quantity of the raw material such that the company has the maximum profit.",
            answer: 2,
            explanation: "P(x) = −2x² + 8x − 6 is a downward parabola. Its maximum is at x = −b/2a = −8/(−4) = 2. So the profit is largest when 2 units of raw material are used, and P(2) = 2."
          },
          {
            id: "maths-1-may-2023-q12",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/maths-1-may-2023/q11-passage-1.jpg#594x116)",
            prompt: "Find the quantity of the raw material (x > 1) such that the company has no profit.",
            answer: 3,
            explanation: "No profit means P(x) = 0: −2x² + 8x − 6 = 0, or x² − 4x + 3 = 0. So (x − 1)(x − 3) = 0 and x = 1 or 3. Since x > 1, the answer is x = 3."
          },
          {
            id: "maths-1-may-2023-q13",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-may-2023/q13-passage-1.jpg#454x226)",
            prompt: "If m is the number of distinct roots and n is the number of turning points of the polynomial p(x), then find the value of m + n",
            answer: 13,
            explanation: "x³ − 4x² + 4x = x(x − 2)² and x³ − 10x² + 33x − 36 = (x − 3)²(x − 4). So p(x) = x(x − 1)(x + 1)(x − 2)²(x − 3)²(x − 4). Distinct roots: −1, 0, 1, 2, 3, 4, so m = 6. There is one turning point in each of the 5 gaps between roots, plus one at each touching root 2 and 3, so n = 7. m + n = 13."
          },
          {
            id: "maths-1-may-2023-q14",
            type: "multi",
            marks: 4,
            passage: "![Figure](/pyq/maths-1-may-2023/q13-passage-1.jpg#454x226)",
            prompt: "Which of the following options is/are true?",
            options: [
              "![Figure](/pyq/maths-1-may-2023/q14-opt1-1.jpg#376x26)",
              "![Figure](/pyq/maths-1-may-2023/q14-opt2-1.jpg#279x27)",
              "![Figure](/pyq/maths-1-may-2023/q14-opt3-1.jpg#320x29)",
              "![Figure](/pyq/maths-1-may-2023/q14-opt4-1.jpg#318x26)"
            ],
            answer: [0, 2, 3],
            explanation: "p(x) = x(x − 1)(x + 1)(x − 2)²(x − 3)²(x − 4) has degree 8 (even) with a positive leading term, so p(x) → +∞ at both ends. z(x) = x(x + 1)(x − 1)(x − 3)²(x − 4), so q(x) = p(x)/z(x) = (x − 2)², whose minimum value is 0."
          }
        ],
      },
    ],
  },
  {
    slug: "maths-1-january-2023",
    title: "Maths I · January 2023",
    description: "The January 2023 Mathematics I paper with the official answer key.",
    difficulty: "Standard",
    durationMin: 60,
    sections: [
      {
        subjectSlug: "mathematics-for-data-science-1",
        title: "Mathematics for Data Science I",
        short: "Maths I",
        questions: [
          {
            id: "maths-1-january-2023-q1",
            type: "numerical",
            marks: 4,
            prompt: "The Cartesian product A × A has 9 elements. Two of the elements of the Cartesian product are (2, 0) and (0, 8). Find the sum of all the elements in set A.",
            answer: 10,
            explanation: "A × A has 9 = 3 × 3 elements, so A has 3 elements. The pairs (2, 0) and (0, 8) show that 0, 2 and 8 are in A. So A = {0, 2, 8} and the sum of its elements is 10."
          },
          {
            id: "maths-1-january-2023-q2",
            type: "numerical",
            marks: 5,
            prompt: "In a survey among 250 students in Nilgiri house of IITM BSc degree, the following data were found:\n• 100 students have a Hotstar subscription\n• 110 students have Netflix subscription\n• 120 students have Amazon Prime membership.\n• 30 students have both Hotstar and Netflix subscriptions whereas 30 students have both Hotstar and Amazon Prime and 40 students subscribe to both Netflix and Amazon Prime.\nAssuming that all students have at least one OTT subscription, determine how many students have memberships to all 3 OTT: Hotstar, Netflix and Amazon Prime?",
            answer: 20,
            explanation: "All 250 students have at least one OTT. 250 = 100 + 110 + 120 − 30 − 30 − 40 + x, where x is the number with all three. So 250 = 230 + x and x = 20."
          },
          {
            id: "maths-1-january-2023-q3",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-january-2023/q3-1.jpg#703x533)",
            answer: 6,
            explanation: "h(0) = 4, so c = 4. The ball is at 4 m at t = 0 and at t = 2, so by symmetry the top is at t = 1 and h(1) = 6. But h(1) = a + b + c, so a + b + c = 6 (here a = −2, b = 4)."
          },
          {
            id: "maths-1-january-2023-q4",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-january-2023/q4-1.jpg#712x250)",
            answer: 26,
            explanation: "Predicted y = 5x − 22 gives 78, 53, 58, 103, 48 for x = 20, 15, 16, 25, 14. The actual y values are 80, 50, 60, 100, 48, so the errors are 2, −3, 2, −3, 0. SSE = 4 + 9 + 4 + 9 + 0 = 26."
          },
          {
            id: "maths-1-january-2023-q5",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-january-2023/q5-1.jpg#719x215)",
            options: [
              "R₂,R₃, and R₄ are functions",
              "R₂ and R₄ are functions",
              "R₂ is an injective function",
              "R₄ is a bijective function"
            ],
            answer: [1, 3],
            explanation: "R₁ is not a function (b has no image). R₃ is not a function (b has two images, r and s). R₂ is a function but not injective, since a and b both go to s. R₄ sends a, b, c, d to r, p, q, s, all different and covering B, so it is a bijection."
          },
          {
            id: "maths-1-january-2023-q6",
            type: "multi",
            marks: 5,
            prompt: "Which of the following functions may represent the graph given in Figure 2?\n\n![Figure](/pyq/maths-1-january-2023/q6-1.jpg#390x341)",
            options: [
              "f(x) = x² − 8x + 12",
              "f(x) = x² + 10x − 21",
              "f(x) = 2x² + 8x + 4",
              "f(x) = x² − 6x + 4"
            ],
            answer: [0, 3],
            explanation: "The graph opens up, has a positive y-intercept and two positive roots. x² − 8x + 12 = (x − 2)(x − 6) and x² − 6x + 4 (roots 3 ± √5) both fit. x² + 10x − 21 has y-intercept −21, and 2x² + 8x + 4 has its vertex at x = −2, so they do not fit."
          },
          {
            id: "maths-1-january-2023-q7",
            type: "multi",
            marks: 5,
            prompt: "Ankit is located at (3, 3). He called Ajay to ask his location. Ajay describes the path he had taken from home (located at the origin) as: “ I walked three units towards East and then nine units towards North. And I repeated the same pattern thrice.” Now Ankit wants a direct path to reach Ajay, then choose the correct options. (Note that North represents the direction along the positive y-axis.)",
            options: [
              "![Figure](/pyq/maths-1-january-2023/q7-opt1-1.jpg#289x27)",
              "![Figure](/pyq/maths-1-january-2023/q7-opt2-1.jpg#390x26)",
              "![Figure](/pyq/maths-1-january-2023/q7-opt3-1.jpg#436x26)",
              "![Figure](/pyq/maths-1-january-2023/q7-opt4-1.jpg#455x25)"
            ],
            answer: [0, 1, 2],
            explanation: "Ajay repeats (3 East, 9 North) three times, so he is at (9, 27) and walked 3 × 12 = 36 units. Line from (3, 3) to (9, 27): slope 24/6 = 4, so y = 4x − 9, i.e. 4x − y − 9 = 0. Ankit walks √(6² + 24²) = √612 = 6√17. 9√10 is Ajay's straight distance from home, not the distance he walked."
          },
          {
            id: "maths-1-january-2023-q8",
            type: "multi",
            marks: 5,
            prompt: "Rubika launches her new company in the year 2010, which makes a yearly profit in lakhs as the polynomial function p(x) = 0.1x² (x − 1) (x − 2) (x − 3)² (x − 4) (x − 9) for the first 12 years since the launch, where x is the number of years since 2010 (i.e., x = 0 denotes the year 2010, x = 1 denotes the year 2011, and so on). Let the loss be represented as −ve of profit. Which of the following options are correct?",
            options: [
              "Including the year in which the company was launched, it neither made a profit nor a loss six times in 12 years.",
              "The company made profit in years x ∈ {7, 8, 10, 11}.",
              "The company made loss (−ve profit) in years x ∈ {5, 6, 7, 8}.",
              "In the year 2022 (i.e., x = 12) the company made profit."
            ],
            answer: [0, 2, 3],
            explanation: "p(x) = 0 at x = 0, 1, 2, 3, 4, 9, so six years with no profit or loss. x² and (x − 3)² are never negative, so the sign comes from (x − 1)(x − 2)(x − 4)(x − 9). For x = 5 to 8 this is negative (loss), so option B is false. For x = 12 all factors are positive, so there is profit."
          },
          {
            id: "maths-1-january-2023-q9",
            type: "multi",
            marks: 5,
            prompt: "Figure 2 shows the graph of a polynomial p(x). Choose the set of correct option(s).\n\n![Figure](/pyq/maths-1-january-2023/q9-1.jpg#341x321)",
            options: [
              "The degree of p(x) is at least 10.",
              "p(x) represent an even degree polynomial.",
              "Total number of turning point of p(x) are 8.",
              "Multiplicities of zero and one of the negative roots could be the same."
            ],
            answer: [0, 1, 3],
            explanation: "Reading the graph from left to right there are 9 turning points, not 8, so the degree is at least 10. Both ends go up, so the degree is even. The root at 0 and the negative root where the graph touches the axis both have even multiplicity, so they can be equal."
          },
          {
            id: "maths-1-january-2023-q10",
            type: "multi",
            marks: 6,
            prompt: "![Figure](/pyq/maths-1-january-2023/q10-1.jpg#700x368)",
            options: [
              "![Figure](/pyq/maths-1-january-2023/q10-opt1-1.jpg#180x28)",
              "![Figure](/pyq/maths-1-january-2023/q10-opt2-1.jpg#275x27)",
              "![Figure](/pyq/maths-1-january-2023/q10-opt3-1.jpg#177x27)",
              "![Figure](/pyq/maths-1-january-2023/q10-opt4-1.jpg#229x26)"
            ],
            answer: [2, 3],
            explanation: "f(x) − g(x) = ax(x − 2)(x − 5)(x − 10) is zero at x = 0, 2, 5, 10, so f = g there. h has degree 2 and b < 0, so it opens downward. In the figure h has one root just left of 0, one positive root and its vertex at positive x. b(x² − 6x − 7) = b(x + 1)(x − 7) fits; b(x² + 8x − 7) has its vertex at x = −4."
          }
        ],
      },
    ],
  },
];
