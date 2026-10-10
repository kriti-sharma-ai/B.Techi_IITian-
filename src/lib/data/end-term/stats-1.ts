import type { QualifierMock } from "../../types";

// Statistics for Data Science I: IIT Madras BS End Term papers (6 papers, 99 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const stats1EndTermPapers: QualifierMock[] = [
  {
    slug: "stats-1-end-term-aug-2025-fn",
    title: "Stats I End Term · 31 Aug 2025 (FN)",
    description: "End Term paper from the May 2025 term, forenoon session on 31 Aug 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-08-31",
      session: "FN",
      term: "May 2025"
    },
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 3,
            prompt: "Consider the dataset 10, 27, 32, 15 and 22. A new dataset is obtained by subtracting 3 from every observation.\nCompute the value of (70th percentile of new dataset) - (30th percentile of the old dataset).",
            options: [
              "-3",
              "9",
              "3",
              "-9"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q2",
            type: "multi",
            marks: 1,
            prompt: "Which of the following statements is/are true?",
            options: [
              "Median can be measured for a categorical variable only if the variable is nominal.",
              "Mode can not be defined for categorical data.",
              "There can be more than one mode for a data.",
              "The sum of relative frequencies of all the observations in a given data set is always equal to 1."
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q3",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q3-1.webp#575x76)",
            options: [
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q3-opt1-1.webp#120x29)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q3-opt2-1.webp#107x31)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q3-opt3-1.webp#92x50)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q3-opt4-1.webp#151x24)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q3-opt5-1.webp#86x27)"
            ],
            answer: [
              0,
              4
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q4",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q4-1.webp#575x56)",
            options: [
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q4-opt1-1.webp#323x25)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q4-opt2-1.webp#139x49)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q4-opt3-1.webp#546x30)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q4-opt4-1.webp#575x32)"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q5",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q5-1.webp#575x76)",
            answer: 10,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q6",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q6-1.webp#575x97)",
            answer: 0.6,
            tolerance: 0.1,
            explanation: "Official answer key accepts any value from 0.5 to 0.7."
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q7",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q7-1.webp#575x203)",
            answer: 60,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q8",
            type: "numerical",
            marks: 3,
            prompt: "If two fair dice are thrown, what is the probability that the sum is either 4 or 9? Enter the answer correct to two decimal places.",
            answer: 0.19,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.17 to 0.21."
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q9",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q9-1.webp#575x272)",
            answer: 0.76,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.73 to 0.79."
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q10",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q10-passage-1.webp#575x132)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the value of c such that X has a valid pmf. Enter the answer correct to one decimal place.",
            answer: 0.2,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q11",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q10-passage-1.webp#575x132)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the value of Var(X). Enter the answer correct to two decimal places.",
            answer: 0.76,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.73 to 0.79."
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q12",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q12-passage-1.webp#556x85)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q12-1.webp#248x74)",
            options: [
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q12-opt1-1.webp#30x40)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q12-opt2-1.webp#31x48)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q12-opt3-1.webp#24x47)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q12-opt4-1.webp#22x46)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q13",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q12-passage-1.webp#556x85)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q13-1.webp#337x61)",
            answer: 2,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q14",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q14-passage-1.webp#575x222)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the probability that a randomly selected box contains at most 1 defective item? Enter the answer correct to one decimal place.",
            answer: 0.3,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-fn-q15",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q14-passage-1.webp#575x222)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-fn/q15-1.webp#252x25)",
            answer: 22,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "stats-1-end-term-aug-2025-an",
    title: "Stats I End Term · 31 Aug 2025 (AN)",
    description: "End Term paper from the May 2025 term, afternoon session on 31 Aug 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-08-31",
      session: "AN",
      term: "May 2025"
    },
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 2,
            prompt: "Find the number of rearrangements of the letters in the word COMMITTEE.",
            options: [
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q1-opt1-1.webp#19x26)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q1-opt2-1.webp#58x48)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q1-opt3-1.webp#31x48)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q1-opt4-1.webp#95x50)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-an/q2-1.webp#575x219)",
            options: [
              "0.6",
              "0.8",
              "0.2",
              "1"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q3",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-an/q3-1.webp#575x31)",
            options: [
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q3-opt1-1.webp#137x35)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q3-opt2-1.webp#110x47)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q3-opt3-1.webp#510x26)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q3-opt4-1.webp#243x32)"
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q4",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statement(s) is/are incorrect?",
            options: [
              "The annual income of 1000 individuals surveyed for year 2024 is an example of time-series data.",
              "The brand of a smartphone used by students is a categorical variable.",
              "Educational qualifications such as elementary, secondary, and higher secondary has an ordinal scale of measurement.",
              "Making predictions about population behavior based on sample data is a part of Descriptive Statistics."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q5",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-an/q5-1.webp#575x87)",
            answer: 7,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q6",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-an/q6-1.webp#575x83)",
            answer: 1.67,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 1.65 to 1.69."
          },
          {
            id: "stats-1-end-term-aug-2025-an-q7",
            type: "numerical",
            marks: 3,
            prompt: "The number of vehicles passing through a highway toll booth in a minute follows a Poisson distribution with mean λ = 4. Find the probability that at most two vehicle pass through highway toll booth in a minute. Enter the answer correct to two decimal places. (Use : e^4 = 54.60, e^(1/4) = 1.28, e^(-4) = 0.02, e^(-1/4) = 0.78)",
            answer: 0.26,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q8",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-an/q8-1.webp#575x103)",
            answer: 0.7,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q9",
            type: "numerical",
            marks: 3,
            prompt: "Consider the dataset 10, 27, 32, 15 and 22. If we subtract 3 from all observations, find the difference between IQR of the new dataset and the old dataset.",
            answer: 0,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q10",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/stats-1-end-term-aug-2025-an/q10-passage-1.webp#575x284)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the range of X.",
            options: [
              "{20, 10, 30, 40}",
              "{−20, 10, 30, 40}",
              "{−20, 0, 10, 30, 40}",
              "{0, 10, 20, 30, 40}"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q11",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/stats-1-end-term-aug-2025-an/q10-passage-1.webp#575x284)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the PMF of X.",
            options: [
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q11-opt1-1.webp#321x111)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q11-opt2-1.webp#325x111)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q11-opt3-1.webp#324x109)",
              "![Figure](/pyq/stats-1-end-term-aug-2025-an/q11-opt4-1.webp#326x110)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q12",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-end-term-aug-2025-an/q12-passage-1.webp#540x96)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the value of a.",
            answer: 6,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q13",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-aug-2025-an/q12-passage-1.webp#540x96)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-aug-2025-an/q13-1.webp#285x84)",
            answer: 0.75,
            explanation: ""
          },
          {
            id: "stats-1-end-term-aug-2025-an-q14",
            type: "numerical",
            marks: 3,
            passage: "A box contains 4 red balls and 5 blue balls. Three balls are drawn at random without replacement. Based on the above data, answer the given subquestions.",
            prompt: "What is the probability that all three balls drawn are of the same colour? Enter the answer correct to two decimal places.",
            answer: 0.17,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.14 to 0.2."
          },
          {
            id: "stats-1-end-term-aug-2025-an-q15",
            type: "numerical",
            marks: 4,
            passage: "A box contains 4 red balls and 5 blue balls. Three balls are drawn at random without replacement. Based on the above data, answer the given subquestions.",
            prompt: "Let X denote the number of red balls selected. Find the value of P(X = 3 | X ≥ 1) Enter the answer correct to two decimal places.",
            answer: 0.05,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.02 to 0.08."
          }
        ]
      }
    ]
  },
  {
    slug: "stats-1-end-term-apr-2025-fn",
    title: "Stats I End Term · 13 Apr 2025 (FN)",
    description: "End Term paper from the January 2025 term, forenoon session on 13 Apr 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-04-13",
      session: "FN",
      term: "January 2025"
    },
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-end-term-apr-2025-fn-q1",
            type: "mcq",
            marks: 1,
            prompt: "A box contains 10 marbles, 6 of which are red and 4 are blue. A sample of 4 marbles is randomly selected without replacement. Let the random variable X represent the number of red marbles in the selected sample. Identify the distribution of X.",
            options: [
              "Hypergeometric",
              "Poisson",
              "Binomial",
              "Uniform"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q2-1.webp#575x78)",
            options: [
              "64",
              "18",
              "16",
              "32"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q3",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q3-1.webp#575x134)",
            options: [
              "318240",
              "78000",
              "18720",
              "39000"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q4",
            type: "mcq",
            marks: 3,
            prompt: "A group of 7 people (A, B, C, D, E, F, G) is to be seated in a row for a photograph. Find the number of possible arrangements such that D and E cannot sit next to each other.",
            options: [
              "3600",
              "4320",
              "5040",
              "720"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q5",
            type: "multi",
            marks: 2,
            prompt: "Which of the following option(s) is/are correct for a variable with an ordinal scale of measurement?",
            options: [
              "The data can be arranged in a meaningful order.",
              "Arithmetic operations like addition and subtraction are valid.",
              "The intervals between values are equal and meaningful.",
              "The mode and median can be determined, but not the mean."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q6",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q6-1.webp#575x71)",
            answer: 3.67,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 3.64 to 3.7."
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q7",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q7-1.webp#575x240)",
            answer: 0.54,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.51 to 0.57."
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q8",
            type: "numerical",
            marks: 3,
            prompt: "A call center receives customer calls and the number of calls received per hour follows a Poisson distribution with a mean rate of 6 calls per hour. What is the probability that at most 2 calls are received in 30 minutes? Enter the answer correct to two decimal places.",
            answer: 0.42,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.39 to 0.45."
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q9",
            type: "numerical",
            marks: 2,
            passage: "Consider a dataset such as 8, 12, 16, 24, and 20. Suppose we multiply all observations by 3. Based on the given information answer the subquestions.",
            prompt: "What will be the 25th percentile of the new dataset?",
            answer: 36,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q10",
            type: "numerical",
            marks: 2,
            passage: "Consider a dataset such as 8, 12, 16, 24, and 20. Suppose we multiply all observations by 3. Based on the given information answer the subquestions.",
            prompt: "Find IQR of the new dataset.",
            answer: 24,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q11",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q11-passage-1.webp#452x31)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q11-1.webp#261x29)",
            options: [
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q11-opt1-1.webp#115x31)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q11-opt2-1.webp#124x27)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q11-opt3-1.webp#121x24)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q11-opt4-1.webp#120x23)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q12",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q11-passage-1.webp#452x31)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q12-1.webp#255x26)",
            options: [
              "0.023",
              "0.230",
              "0.346",
              "0.035"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q13",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q13-passage-1.webp#575x212)\n\nBased on the above data, answer the given subquestions.",
            prompt: "If the probability that the vendor sells exactly 2 items in a day is 0.30, then find the value of a. Enter the answer correct to two decimal places.",
            answer: 0.45,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.43 to 0.47."
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q14",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q13-passage-1.webp#575x212)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the probability that the vendor sells at least 2 items in a day? Enter the answer correct to two decimal places.",
            answer: 0.55,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.53 to 0.57."
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q15",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q15-passage-1.webp#575x166)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q15-1.webp#246x32)",
            answer: 34,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q16",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q15-passage-1.webp#575x166)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q16-1.webp#320x30)",
            options: [
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q16-opt1-1.webp#23x22)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q16-opt2-1.webp#31x28)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q16-opt3-1.webp#15x17)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q16-opt4-1.webp#19x21)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q17",
            type: "numerical",
            marks: 2,
            passage: "The time taken by a coffee machine to brew a cup of coffee is uniformly distributed between 2 and b minutes. Based on this information, answer the given subquestions:",
            prompt: "If the expected time for the coffee machine to brew a cup of coffee is 8.5 minutes, then find the value of b.",
            answer: 15,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-fn-q18",
            type: "mcq",
            marks: 3,
            passage: "The time taken by a coffee machine to brew a cup of coffee is uniformly distributed between 2 and b minutes. Based on this information, answer the given subquestions:",
            prompt: "If the coffee machine has been brewing for more than 6 minutes, what is the probability that it will finish brewing between 6 and 10 minutes?",
            options: [
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q18-opt1-1.webp#24x47)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q18-opt2-1.webp#36x46)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q18-opt3-1.webp#30x49)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-fn/q18-opt4-1.webp#21x48)"
            ],
            answer: 0,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "stats-1-end-term-apr-2025-an",
    title: "Stats I End Term · 13 Apr 2025 (AN)",
    description: "End Term paper from the January 2025 term, afternoon session on 13 Apr 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-04-13",
      session: "AN",
      term: "January 2025"
    },
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-end-term-apr-2025-an-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-an/q1-1.webp#575x44)",
            options: [
              "21.5",
              "20",
              "5.38",
              "5"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-an/q2-1.webp#575x281)",
            options: [
              "0.15",
              "0.25",
              "0.75",
              "0.10"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q3",
            type: "multi",
            marks: 2,
            prompt: "Consider the following statements related to permutation and combination. Which of the following is/are true?",
            options: [
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q3-opt1-1.webp#575x75)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q3-opt2-1.webp#575x66)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q3-opt3-1.webp#575x45)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q3-opt4-1.webp#571x21)"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q4",
            type: "multi",
            marks: 2,
            prompt: "A surveyor collects data on the electricity bills of 100 randomly selected households in a particular month. Which of the following statements about this data is/are correct?",
            options: [
              "The electricity bill in rupees is a continuous variable.",
              "The data collected represents cross-sectional data.",
              "The electricity bill in rupees is a categorical variable.",
              "The data collected represents time-series data."
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q5",
            type: "multi",
            marks: 3,
            prompt: "A customer support center tracks the time agents take to resolve customer queries. Let X (in minutes) represent the resolution time, which follows an exponential distribution with an average resolution time of 2 minutes. Which of the following option(s) is/are true?",
            options: [
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q5-opt1-1.webp#554x26)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q5-opt2-1.webp#459x20)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q5-opt3-1.webp#575x28)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q5-opt4-1.webp#575x27)"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q6",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-an/q6-1.webp#575x84)",
            answer: 35,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q7",
            type: "numerical",
            marks: 3,
            prompt: "A group of 7 people (A, B, C, D, E, F, G) is to be seated in a row for a photograph.\nThe following conditions must be satisfied:\n• A and B must always sit next to each other.\n• D and E cannot sit next to each other.\nWhat is the total number of valid arrangements under these conditions?",
            answer: 960,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q8",
            type: "numerical",
            marks: 3,
            prompt: "At a university, 60% of the students are enrolled in science programs, while 40% are enrolled in arts programs. Among science students, 25% participate in research projects, whereas 15% of arts students participate in research project. If a student is chosen at random, what is the probability that he/she participates in a research project? Enter the answer correct to two decimal places.",
            answer: 0.21,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.18 to 0.24."
          },
          {
            id: "stats-1-end-term-apr-2025-an-q9",
            type: "numerical",
            marks: 3,
            prompt: "The total number of observations in a dataset is 8. If the mean of first 4 observations is 12 and the mean of all 8 observations is 18, then find the mean of last 4 observations.",
            answer: 24,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q10",
            type: "numerical",
            marks: 2,
            passage: "A shopping mall conducted a survey among 150 customers to study the relationship between age group and preferred payment method (Cash or Digital). The collected data is shown in the table Q.1:\n\n![Figure](/pyq/stats-1-end-term-apr-2025-an/q10-passage-1.webp#564x132)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What proportion of the total customers prefer digital payments? Enter the answer correct to two decimal places.",
            answer: 0.57,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.54 to 0.6."
          },
          {
            id: "stats-1-end-term-apr-2025-an-q11",
            type: "numerical",
            marks: 1,
            passage: "A shopping mall conducted a survey among 150 customers to study the relationship between age group and preferred payment method (Cash or Digital). The collected data is shown in the table Q.1:\n\n![Figure](/pyq/stats-1-end-term-apr-2025-an/q10-passage-1.webp#564x132)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How many customers of age between 18 to 45 prefer cash payment?",
            answer: 45,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q12",
            type: "mcq",
            marks: 2,
            passage: "The probability mass function of a discrete random variable X is given by,\n\n![Figure](/pyq/stats-1-end-term-apr-2025-an/q12-passage-1.webp#232x116)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the value of E(6X − 2).",
            options: [
              "1",
              "4",
              "6",
              "8"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q13",
            type: "numerical",
            marks: 2,
            passage: "The probability mass function of a discrete random variable X is given by,\n\n![Figure](/pyq/stats-1-end-term-apr-2025-an/q12-passage-1.webp#232x116)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the value of V (3X − 4).",
            answer: 18,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q14",
            type: "numerical",
            marks: 2,
            passage: "Let X represent the time a student takes to complete a test, which follows a uniform distribution between 45 and 75 minutes. Using this information, answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-apr-2025-an/q14-1.webp#298x59)",
            answer: 50,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q15",
            type: "mcq",
            marks: 3,
            passage: "Let X represent the time a student takes to complete a test, which follows a uniform distribution between 45 and 75 minutes. Using this information, answer the given subquestions.",
            prompt: "Given that a student has already spent 60 minutes on the test, what is the probability that they will take more than 65 minutes to complete it?",
            options: [
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q15-opt1-1.webp#24x47)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q15-opt2-1.webp#23x44)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q15-opt3-1.webp#18x43)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q15-opt4-1.webp#22x43)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q16",
            type: "mcq",
            marks: 3,
            passage: "A small game involves spinning a wheel that has an equal chance of landing on one of four colors: Red, Blue, Green, or Yellow. Let the random variable X represent the number of times the wheel lands on Red in three independent spins.\nBased on the above data, answer the given subquestions.",
            prompt: "Find probability that the wheel lands on red exactly 2 times out of the three spins.",
            options: [
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q16-opt1-1.webp#32x46)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q16-opt2-1.webp#22x47)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q16-opt3-1.webp#21x44)",
              "![Figure](/pyq/stats-1-end-term-apr-2025-an/q16-opt4-1.webp#26x40)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "stats-1-end-term-apr-2025-an-q17",
            type: "numerical",
            marks: 2,
            passage: "A small game involves spinning a wheel that has an equal chance of landing on one of four colors: Red, Blue, Green, or Yellow. Let the random variable X represent the number of times the wheel lands on Red in three independent spins.\nBased on the above data, answer the given subquestions.",
            prompt: "Find the value of E(X). Enter the answer correct to two decimal places.",
            answer: 0.75,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.73 to 0.77."
          }
        ]
      }
    ]
  },
  {
    slug: "stats-1-end-term-dec-2024-fn",
    title: "Stats I End Term · 22 Dec 2024 (FN)",
    description: "End Term paper from the September 2024 term, forenoon session on 22 Dec 2024, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2024-12-22",
      session: "FN",
      term: "September 2024"
    },
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-end-term-dec-2024-fn-q1",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q1-passage-1.webp#575x356)\n\nBased on the above data answer the given subquestions.",
            prompt: "What is the difference between the expenditure on Rent and Groceries?",
            options: [
              "₹2000",
              "₹2500",
              "₹1500",
              "₹2700"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q2",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q1-passage-1.webp#575x356)\n\nBased on the above data answer the given subquestions.",
            prompt: "How much money does the family spend on Utilities and Entertainment combined?",
            options: [
              "₹12,000",
              "₹12,500",
              "₹15,000",
              "₹15,200"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q3",
            type: "multi",
            marks: 2,
            prompt: "Which of the following options is/are incorrect for a variable having ratio scale of measurement?",
            options: [
              "Difference between the values of a variable can not be evaluated.",
              "Order of the data is meaningful.",
              "Multiplication and division of values of a variable is possible.",
              "It does not have an absolute zero."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q4",
            type: "numerical",
            marks: 4,
            prompt: "The average of 15 observations is 48. If the average of the first 8 observations is 42 and the average of the last 8 observations is 54, what is the value of the 8th observation?",
            answer: 48,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q5",
            type: "numerical",
            marks: 4,
            prompt: "A certain type of electronic device has a lifetime that follows an exponential distribution with a mean of 500 hours. If the device has already worked for 300 hours without failing, what is the probability that it will continue to function for at least another 200 hours? (Enter the answer correct to 2 decimal accuracy.)",
            answer: 0.67,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.64 to 0.7."
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q6",
            type: "numerical",
            marks: 2,
            passage: "A university needs to form a research team of 4 students out of total 8 students.\nBased on the above data answer the given subquestions.",
            prompt: "In how many ways can the team be formed if two particular students must be included?",
            answer: 15,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q7",
            type: "numerical",
            marks: 2,
            passage: "A university needs to form a research team of 4 students out of total 8 students.\nBased on the above data answer the given subquestions.",
            prompt: "In how many ways can the team be formed if two particular students must not be included?",
            answer: 15,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q8",
            type: "numerical",
            marks: 3,
            prompt: "In how many different ways can the letters of the word “LEADING” be arranged such that the vowels always come together?",
            answer: 720,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q9",
            type: "numerical",
            marks: 2,
            prompt: "In a survey of 100 people, 60 like tea, 40 like coffee, and 20 like both tea and coffee. What is the probability that a person chosen at random likes either tea or coffee? [Enter the correct answer up to 1 decimal place]",
            answer: 0.8,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q10",
            type: "multi",
            marks: 3,
            prompt: "A jar contains 5 red balls and 7 blue balls. Two balls are drawn without replacement. Let event A be the event that the first ball drawn is red, and event B be the event that the second ball drawn is blue. Which of the following statement(s) is(are) true?",
            options: [
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q10-opt1-1.webp#113x60)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q10-opt2-1.webp#110x57)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q10-opt3-1.webp#154x54)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q10-opt4-1.webp#268x37)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q11",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q11-1.webp#575x36)",
            options: [
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q11-opt1-1.webp#153x37)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q11-opt2-1.webp#370x31)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q11-opt3-1.webp#365x33)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q11-opt4-1.webp#377x32)"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q12",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q12-passage-1.webp#575x120)\n\nBased on the above data answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q12-1.webp#260x32)",
            options: [
              "15",
              "10",
              "20",
              "12"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q13",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q12-passage-1.webp#575x120)\n\nBased on the above data answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q13-1.webp#312x82)",
            answer: 1.04,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 1.01 to 1.07."
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q14",
            type: "mcq",
            marks: 3,
            prompt: "If the Indian cricket team has a 60% chance of winning a match, and they play a 5-match series with each match being independent of the others, what is the probability that the team will win at least 4 matches?",
            options: [
              "0.26",
              "0.078",
              "0.34",
              "0.68"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q15",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q15-1.webp#575x109)",
            options: [
              "{0,1,2,3,4}",
              "{0,1,2,3}",
              "{0,1,2}",
              "{0,1,2,3,4,5}"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q16",
            type: "mcq",
            marks: 4,
            prompt: "The number of customers entering in a store follows a Poisson distribution with an average rate of 12 customers per hour. What is the probability that exactly 5 customers will enter the store in a 15- minute period?",
            options: [
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q16-opt1-1.webp#88x51)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q16-opt2-1.webp#118x53)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q16-opt3-1.webp#113x52)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q16-opt4-1.webp#75x58)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-fn-q17",
            type: "mcq",
            marks: 4,
            prompt: "Metros on a certain station arrives uniformly after every 5 minutes. If a person arrives at the metro station at random, then what is the probability that he has to wait at least 3 minutes?",
            options: [
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q17-opt1-1.webp#33x44)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q17-opt2-1.webp#21x48)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q17-opt3-1.webp#22x24)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-fn/q17-opt4-1.webp#35x52)"
            ],
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "stats-1-end-term-dec-2024-an",
    title: "Stats I End Term · 22 Dec 2024 (AN)",
    description: "End Term paper from the September 2024 term, afternoon session on 22 Dec 2024, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2024-12-22",
      session: "AN",
      term: "September 2024"
    },
    sections: [
      {
        subjectSlug: "statistics-for-data-science-1",
        title: "Statistics for Data Science I",
        short: "Stats I",
        questions: [
          {
            id: "stats-1-end-term-dec-2024-an-q1",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/stats-1-end-term-dec-2024-an/q1-passage-1.webp#575x360)\n\nBased on the above data answer the given subquestions.",
            prompt: "What is the difference between the expenditure on Groceries and Utilities?",
            options: [
              "₹20000",
              "₹12500",
              "₹15000",
              "₹27000"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q2",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-dec-2024-an/q1-passage-1.webp#575x360)\n\nBased on the above data answer the given subquestions.",
            prompt: "How much money does the family spend on Rent and Utilities combined?",
            options: [
              "₹25,000",
              "₹27,500",
              "₹27,000",
              "₹28,000"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q3",
            type: "multi",
            marks: 2,
            prompt: "Which of the following options is/are incorrect for a variable having ratio scale of measurement?",
            options: [
              "Difference between the values of a variable can not be evaluated.",
              "Order of the data is meaningful.",
              "Multiplication and division of values of a variable is possible.",
              "It does not have an absolute zero."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q4",
            type: "numerical",
            marks: 4,
            prompt: "The average of 15 observations is 45. If the average of the first 8 observations is 41 and the average of the last 8 observations is 53, what is the value of the 8th observation?",
            answer: 77,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q5",
            type: "numerical",
            marks: 4,
            prompt: "A certain type of electronic device has a lifetime that follows an exponential distribution with a mean of 500 hours. If the device has already worked for 400 hours without failing, what is the probability that it will continue to function for at least another 100 hours? (Enter the answer correct to 2 decimal accuracy.)",
            answer: 0.82,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.79 to 0.85."
          },
          {
            id: "stats-1-end-term-dec-2024-an-q6",
            type: "numerical",
            marks: 2,
            passage: "A university needs to form a research team of 4 students out of total 9 students.\nBased on the above data answer the given subquestions.",
            prompt: "In how many ways can the team be formed if two particular students must be included?",
            answer: 21,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q7",
            type: "numerical",
            marks: 2,
            passage: "A university needs to form a research team of 4 students out of total 9 students.\nBased on the above data answer the given subquestions.",
            prompt: "In how many ways can the team be formed if two particular students must not be included?",
            answer: 35,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q8",
            type: "numerical",
            marks: 3,
            prompt: "In how many different ways can the letters of the word “READING” be arranged such that the vowels always come together?",
            answer: 720,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q9",
            type: "numerical",
            marks: 2,
            prompt: "In a survey of 120 people, 70 like tea, 50 like coffee, and 30 like both tea and coffee. What is the probability that a person chosen at random likes either tea or coffee? [Enter the correct answer up to 1 decimal place]",
            answer: 0.75,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.72 to 0.78."
          },
          {
            id: "stats-1-end-term-dec-2024-an-q10",
            type: "multi",
            marks: 3,
            prompt: "A jar contains 6 red balls and 8 blue balls. Two balls are drawn without replacement. Let event A be the event that the first ball drawn is red, and event B be the event that the second ball drawn is blue. Which of the following statement(s) is(are) true?",
            options: [
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q10-opt1-1.webp#96x61)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q10-opt2-1.webp#109x60)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q10-opt3-1.webp#140x53)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q10-opt4-1.webp#274x30)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q11",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-dec-2024-an/q11-1.webp#575x37)",
            options: [
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q11-opt1-1.webp#145x31)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q11-opt2-1.webp#364x27)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q11-opt3-1.webp#361x27)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q11-opt4-1.webp#364x30)"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q12",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/stats-1-end-term-dec-2024-an/q12-passage-1.webp#575x124)\n\nBased on the above data answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-dec-2024-an/q12-1.webp#250x29)",
            options: [
              "15",
              "10",
              "20",
              "12"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q13",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/stats-1-end-term-dec-2024-an/q12-passage-1.webp#575x124)\n\nBased on the above data answer the given subquestions.",
            prompt: "![Figure](/pyq/stats-1-end-term-dec-2024-an/q13-1.webp#306x83)",
            answer: 1.04,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 1.01 to 1.07."
          },
          {
            id: "stats-1-end-term-dec-2024-an-q14",
            type: "mcq",
            marks: 3,
            prompt: "If the Indian cricket team has a 65% chance of winning a match, and they play a 5-match series with each match being independent of the others, what is the probability that the team will win at least 4 matches?",
            options: [
              "0.31",
              "0.12",
              "0.43",
              "0.57"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q15",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/stats-1-end-term-dec-2024-an/q15-1.webp#575x119)",
            options: [
              "{0,1,2,3,4}",
              "{0,1,2,3}",
              "{0,1,2}",
              "{0,1,2,3,4,5}"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q16",
            type: "mcq",
            marks: 4,
            prompt: "The number of customers entering in a store follows a Poisson distribution with an average rate of 8 customers per hour. What is the probability that exactly 5 customers will enter the store in a 15- minute period?",
            options: [
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q16-opt1-1.webp#88x56)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q16-opt2-1.webp#126x50)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q16-opt3-1.webp#65x54)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q16-opt4-1.webp#71x55)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "stats-1-end-term-dec-2024-an-q17",
            type: "mcq",
            marks: 4,
            prompt: "Metros on a certain station arrives uniformly after every 10 minutes. If a person arrives at the metro station at random, then what is the probability that he has to wait at least 4 minutes?",
            options: [
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q17-opt1-1.webp#33x51)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q17-opt2-1.webp#33x44)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q17-opt3-1.webp#23x26)",
              "![Figure](/pyq/stats-1-end-term-dec-2024-an/q17-opt4-1.webp#29x48)"
            ],
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  }
];
