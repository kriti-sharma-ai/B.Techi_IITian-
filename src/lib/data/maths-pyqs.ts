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
            explanation: ""
          },
          {
            id: "maths-1-may-2024-q2",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/maths-1-may-2024/q1-passage-1.jpg#583x152)",
            prompt: "What is the cardinality of R₁?",
            answer: 9,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "maths-1-may-2024-q6",
            type: "numerical",
            marks: 4,
            prompt: "A company opened recruitment for the post of data analyst. 500 candidates have applied for the post. 285 candidates are proficient in Python programming, 195 candidates are proficient in C programming, 115 candidates are proficient in Java programming, 45 candidates are proficient in Python and Java, 70 candidates are proficient in C and Python, 50 candidates are proficient in C and Java and 50 candidates don’t know any of the programming languages. Find the number of candidates who are proficient in exactly one of the three programming languages.",
            answer: 325,
            explanation: ""
          },
          {
            id: "maths-1-may-2024-q7",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/maths-1-may-2024/q7-1.jpg#721x219)",
            answer: 23,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "maths-1-january-2024-q4",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-january-2024/q4-passage-1.jpg#658x45)",
            prompt: "What is the area of the triangle ABC?",
            answer: 2,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "maths-1-january-2024-q8",
            type: "numerical",
            marks: 2,
            passage: "In a grocery store, 60 customers made a purchase on a specific day. 28 people bought bread, 37 people bought milk and 30 people bought fruits. All the customers bought at least one of the three items. 16 of them bought bread and fruits, 17 of them bought bread and milk and 9 of them bought all the three items.",
            prompt: "Find the number of customers who bought milk and fruits.",
            answer: 11,
            explanation: ""
          },
          {
            id: "maths-1-january-2024-q9",
            type: "numerical",
            marks: 2,
            passage: "In a grocery store, 60 customers made a purchase on a specific day. 28 people bought bread, 37 people bought milk and 30 people bought fruits. All the customers bought at least one of the three items. 16 of them bought bread and fruits, 17 of them bought bread and milk and 9 of them bought all the three items.",
            prompt: "Find the number of customers who bought milk and fruits but not bread.",
            answer: 2,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "maths-1-january-2024-q12",
            type: "numerical",
            marks: 2.5,
            passage: "![Figure](/pyq/maths-1-january-2024/q12-passage-1.jpg#580x57)",
            prompt: "Calculate the value of A",
            answer: 2,
            explanation: ""
          },
          {
            id: "maths-1-january-2024-q13",
            type: "numerical",
            marks: 2.5,
            passage: "![Figure](/pyq/maths-1-january-2024/q12-passage-1.jpg#580x57)",
            prompt: "Calculate the value of B",
            answer: 4,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "maths-1-september-2023-q2",
            type: "numerical",
            marks: 2,
            passage: "In a survey among 140 people, it was found that 75% of these 140 people like playing cricket and 50% of all the 140 people like playing football. Note that, some people may not like both games that could be 0 also.\nUse this information to answer the given subquestions",
            prompt: "If there are 10 people who don’t like both games, then what is the number of people who like only cricket?",
            answer: 60,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "maths-1-september-2023-q6",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/maths-1-september-2023/q6-1.jpg#744x185)",
            answer: 165,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "maths-1-september-2023-q12",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-september-2023/q11-passage-1.jpg#502x234)",
            prompt: "![Figure](/pyq/maths-1-september-2023/q12-1.jpg#297x31)",
            answer: 10,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "maths-1-may-2023-q2",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-may-2023/q1-passage-1.jpg#593x407)",
            prompt: "R₂ is ____________ . (Enter all correct options. Enter only the serial numbers of those options in increasing order without adding any comma or space in between them i.e., if your answer is 3 and 4, then you should enter 34)",
            answer: 12367,
            explanation: ""
          },
          {
            id: "maths-1-may-2023-q3",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/maths-1-may-2023/q1-passage-1.jpg#593x407)",
            prompt: "Find the cardinality of the set (S × S) \\ R₂.",
            answer: 20,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "maths-1-may-2023-q7",
            type: "numerical",
            marks: 5,
            prompt: "A company opened recruitment for the post of data analyst. 500 candidates have applied for the post. 285 candidates are proficient in Python programming, 195 candidates are proficient in C programming, 115 candidates are proficient in Java programming, 45 candidates are proficient in Python and Java, 70 candidates are proficient in C and Python, 50 candidates are proficient in C and Java and 50 candidates don’t know any of the programming languages. Find the number of candidates who are proficient in exactly one of the three programming languages.",
            answer: 325,
            explanation: ""
          },
          {
            id: "maths-1-may-2023-q8",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-may-2023/q8-1.jpg#741x76)",
            answer: 3,
            explanation: ""
          },
          {
            id: "maths-1-may-2023-q9",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-may-2023/q9-1.jpg#652x197)",
            answer: -12,
            explanation: ""
          },
          {
            id: "maths-1-may-2023-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/maths-1-may-2023/q10-1.jpg#715x197)",
            answer: 17,
            explanation: ""
          },
          {
            id: "maths-1-may-2023-q11",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/maths-1-may-2023/q11-passage-1.jpg#594x116)",
            prompt: "Find the quantity of the raw material such that the company has the maximum profit.",
            answer: 2,
            explanation: ""
          },
          {
            id: "maths-1-may-2023-q12",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/maths-1-may-2023/q11-passage-1.jpg#594x116)",
            prompt: "Find the quantity of the raw material (x > 1) such that the company has no profit.",
            answer: 3,
            explanation: ""
          },
          {
            id: "maths-1-may-2023-q13",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/maths-1-may-2023/q13-passage-1.jpg#454x226)",
            prompt: "If m is the number of distinct roots and n is the number of turning points of the polynomial p(x), then find the value of m + n",
            answer: 13,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          },
          {
            id: "maths-1-january-2023-q2",
            type: "numerical",
            marks: 5,
            prompt: "In a survey among 250 students in Nilgiri house of IITM BSc degree, the following data were found:\n• 100 students have a Hotstar subscription\n• 110 students have Netflix subscription\n• 120 students have Amazon Prime membership.\n• 30 students have both Hotstar and Netflix subscriptions whereas 30 students have both Hotstar and Amazon Prime and 40 students subscribe to both Netflix and Amazon Prime.\nAssuming that all students have at least one OTT subscription, determine how many students have memberships to all 3 OTT: Hotstar, Netflix and Amazon Prime?",
            answer: 20,
            explanation: ""
          },
          {
            id: "maths-1-january-2023-q3",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-january-2023/q3-1.jpg#703x533)",
            answer: 6,
            explanation: ""
          },
          {
            id: "maths-1-january-2023-q4",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/maths-1-january-2023/q4-1.jpg#712x250)",
            answer: 26,
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
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
            explanation: ""
          }
        ],
      },
    ],
  },
];
