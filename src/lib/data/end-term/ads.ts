import type { QualifierMock } from "../../types";

// Algorithms for Data Science: IIT Madras BS End Term papers (1 papers, 22 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const adsEndTermPapers: QualifierMock[] = [
  {
    slug: "ads-end-term-aug-2025-fn",
    title: "ADS End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "algorithms-for-data-science",
        title: "Algorithms for Data Science",
        short: "ADS",
        questions: [
          {
            id: "ads-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q1-1.webp#575x74)",
            options: [
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q1-opt1-1.webp#477x39)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q1-opt2-1.webp#480x28)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q1-opt3-1.webp#477x34)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q1-opt4-1.webp#480x32)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q2",
            type: "numerical",
            marks: 2,
            prompt: "Consider a sample of 5 data-points for a classification problem with 3 classes. We can have at most k different labellings of these 5 points. What is the tightest upper bound for k?",
            answer: 243,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q3",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q3-1.webp#575x286)",
            answer: 6,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q4",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q4-1.webp#575x197)",
            answer: 3,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q5",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q5-1.webp#575x297)",
            answer: 1,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q6-passage-1.webp#575x437)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Choose the most appropriate matching.",
            options: [
              "(1) = approximation error, (2) = generalization error, (3) = estimation error",
              "(1) = generalization error , (2) = approximation error, (3) = estimation error",
              "(1) = estimation error, (2) = approximation error, (3) = generalization error",
              "(1) = approximation error, (2) = estimation error, (3) = generalization error"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q7",
            type: "multi",
            marks: 2,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q6-passage-1.webp#575x437)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Select all true statements.",
            options: [
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q7-opt1-1.webp#166x36)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q7-opt2-1.webp#203x32)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q7-opt3-1.webp#177x29)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q7-opt4-1.webp#210x38)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q8",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q6-passage-1.webp#575x437)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following is true? Select the most appropriate answer.",
            options: [
              "The Bayes error is non-negative.",
              "The Bayes error is zero.",
              "The Bayes error is positive.",
              "The Bayes error is negative."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q9",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q9-passage-1.webp#575x383)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q9-1.webp#256x65)",
            options: [
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q9-opt1-1.webp#225x75)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q9-opt2-1.webp#243x65)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q9-opt3-1.webp#194x30)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q9-opt4-1.webp#193x30)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q10",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q9-passage-1.webp#575x383)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q10-1.webp#381x134)",
            answer: 0.125,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q11",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q11-passage-1.webp#575x405)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q11-1.webp#498x339)",
            answer: 1,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q12",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q11-passage-1.webp#575x405)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q12-1.webp#324x68)",
            answer: 0,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q13",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q11-passage-1.webp#575x405)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q13-1.webp#254x67)",
            answer: 0.125,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q14",
            type: "numerical",
            marks: 2,
            passage: "Answer the given subquestions .",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q14-1.webp#347x86)",
            answer: 6,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q15",
            type: "multi",
            marks: 3,
            passage: "Answer the given subquestions .",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q15-1.webp#345x64)",
            options: [
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q15-opt1-1.webp#265x34)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q15-opt2-1.webp#271x35)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q15-opt3-1.webp#397x37)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q15-opt4-1.webp#402x36)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q16",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q16-passage-1.webp#575x62)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q16-1.webp#193x27)",
            answer: 0,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q17",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q16-passage-1.webp#575x62)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q17-1.webp#205x31)",
            answer: 4,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q18",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q18-passage-1.webp#575x116)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following is the TPR?",
            options: [
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q18-opt1-1.webp#127x30)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q18-opt2-1.webp#123x34)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q18-opt3-1.webp#87x34)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q18-opt4-1.webp#96x35)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q19",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q18-passage-1.webp#575x116)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following is the FPR?",
            options: [
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q19-opt1-1.webp#124x35)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q19-opt2-1.webp#122x37)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q19-opt3-1.webp#94x32)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q19-opt4-1.webp#103x45)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q20",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q18-passage-1.webp#575x116)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q20-1.webp#318x157)",
            options: [
              "Yes",
              "No"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ads-end-term-aug-2025-fn-q21",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q21-passage-1.webp#575x92)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the probability of generating the intermediate bit pattern (1, 1, 1, 1, 1)? That is, compute P(Y = (1, 1, 1, 1, 1) | X = (1, 0, 1, 1, 0)).",
            answer: 0.0325,
            tolerance: 0.0025,
            explanation: "Official answer key accepts any value from 0.03 to 0.035."
          },
          {
            id: "ads-end-term-aug-2025-fn-q22",
            type: "multi",
            marks: 2,
            passage: "![Figure](/pyq/ads-end-term-aug-2025-fn/q21-passage-1.webp#575x92)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ads-end-term-aug-2025-fn/q22-1.webp#442x33)",
            options: [
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q22-opt1-1.webp#113x38)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q22-opt2-1.webp#297x56)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q22-opt3-1.webp#104x39)",
              "![Figure](/pyq/ads-end-term-aug-2025-fn/q22-opt4-1.webp#282x60)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          }
        ]
      }
    ]
  }
];
