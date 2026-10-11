import type { QualifierMock } from "../../types";

// Computer System Design: IIT Madras BS End Term papers (2 papers, 40 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const csdEndTermPapers: QualifierMock[] = [
  {
    slug: "csd-end-term-aug-2025-fn",
    title: "CSD End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "computer-system-design",
        title: "Computer System Design",
        short: "CSD",
        questions: [
          {
            id: "csd-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 1,
            prompt: "In a 4-bit system, the one’s complement of the binary number 1100 is 0011.",
            options: [
              "True",
              "False"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 1,
            prompt: "A synchronous counter triggers all flipflops using a common clock signal, while an asynchronous counter triggers each flipflop using the output of the previous flipflop.",
            options: [
              "True",
              "False"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 1,
            prompt: "In a system with 64 unique states, 6 flipflops are sufficient to represent all the states.",
            options: [
              "True",
              "False"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 1,
            prompt: "In a decoder, at any point, exactly one of the outputs is 1 and all the rest are 0s.",
            options: [
              "True",
              "False"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 1,
            prompt: "According to Moore’s law, if a computer system has 2 million transistors today, then it will have approximately 32 million transistors in 8 years.",
            options: [
              "True",
              "False"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q6-1.webp#571x412)",
            options: [
              "![Figure](/pyq/csd-end-term-aug-2025-fn/q6-opt1-1.webp#102x26)",
              "![Figure](/pyq/csd-end-term-aug-2025-fn/q6-opt2-1.webp#106x23)",
              "![Figure](/pyq/csd-end-term-aug-2025-fn/q6-opt3-1.webp#108x25)",
              "![Figure](/pyq/csd-end-term-aug-2025-fn/q6-opt4-1.webp#104x24)",
              "![Figure](/pyq/csd-end-term-aug-2025-fn/q6-opt5-1.webp#119x23)"
            ],
            answer: 4,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q7",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q7-1.webp#575x56)",
            answer: 3,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q8",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q8-1.webp#575x368)",
            answer: 5,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q9",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q9-1.webp#575x70)",
            answer: 5,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q10-1.webp#575x47)",
            answer: 2,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q11",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q11-1.webp#575x80)",
            answer: 6,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q12",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q12-1.webp#575x311)",
            answer: 3,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q13",
            type: "numerical",
            marks: 3,
            prompt: "Consider a mod-12 up counter with an initial state of 0011. What will be the state of the counter after 25 clock pulses?",
            answer: 100,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q14",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q14-1.webp#575x243)",
            answer: 0,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q15",
            type: "numerical",
            marks: 3,
            prompt: "Consider a 9-bit Johnson counter. What is the total number of unique states it can cycle through?",
            answer: 18,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q16",
            type: "text",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q16-1.webp#575x232)",
            answer: [
              "0x06"
            ],
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q17",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q17-1.webp#575x115)",
            answer: 24,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q18",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q18-1.webp#575x153)",
            answer: 4,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q19",
            type: "text",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q19-1.webp#575x352)",
            answer: [
              "0x2D4D"
            ],
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-fn-q20",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-fn/q20-1.webp#575x48)",
            answer: 11101010,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "csd-end-term-aug-2025-an",
    title: "CSD End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "computer-system-design",
        title: "Computer System Design",
        short: "CSD",
        questions: [
          {
            id: "csd-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 1,
            prompt: "In a 4-bit system, the one’s complement of the binary number 1100 is 0111.",
            options: [
              "TRUE",
              "FALSE"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 1,
            prompt: "A synchronous counter triggers all flipflops using a common clock signal, while an asynchronous counter triggers each flipflop using the output of the previous flipflop.",
            options: [
              "TRUE",
              "FALSE"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 1,
            prompt: "In a system with 64 unique states, 4 flipflops are sufficient to represent all the states.",
            options: [
              "TRUE",
              "FALSE"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 1,
            prompt: "In a decoder, at any point, exactly one of the outputs is 1 and all the rest are 0s.",
            options: [
              "TRUE",
              "FALSE"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 1,
            prompt: "According to Moore’s law, if a computer system has 2 million transistors today, then it will have approximately 32 million transistors in 7 years.",
            options: [
              "TRUE",
              "FALSE"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q6-1.webp#575x483)",
            options: [
              "![Figure](/pyq/csd-end-term-aug-2025-an/q6-opt1-1.webp#108x25)",
              "![Figure](/pyq/csd-end-term-aug-2025-an/q6-opt2-1.webp#107x25)",
              "![Figure](/pyq/csd-end-term-aug-2025-an/q6-opt3-1.webp#106x28)",
              "![Figure](/pyq/csd-end-term-aug-2025-an/q6-opt4-1.webp#108x26)",
              "![Figure](/pyq/csd-end-term-aug-2025-an/q6-opt5-1.webp#120x24)"
            ],
            answer: 4,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q7",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q7-1.webp#575x52)",
            answer: 1,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q8",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q8-1.webp#575x368)",
            answer: 5,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q9",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q9-1.webp#575x73)",
            answer: 4,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q10-1.webp#575x48)",
            answer: 2,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q11",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q11-1.webp#575x78)",
            answer: 6,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q12",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q12-1.webp#575x406)",
            answer: 3,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q13",
            type: "numerical",
            marks: 3,
            prompt: "Consider a mod-12 up counter with an initial state of 0111. What will be the state of the counter after 25 clock pulses?",
            answer: 1000,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q14",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q14-1.webp#575x279)",
            answer: 0,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q15",
            type: "numerical",
            marks: 3,
            prompt: "Consider a 10-bit Johnson counter. What is the total number of unique states it can cycle through?",
            answer: 20,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q16",
            type: "text",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q16-1.webp#575x234)",
            answer: [
              "0x09"
            ],
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q17",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q17-1.webp#575x114)",
            answer: 18,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q18",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q18-1.webp#575x155)",
            answer: 8,
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q19",
            type: "text",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q19-1.webp#575x363)",
            answer: [
              "0x2D4D"
            ],
            explanation: ""
          },
          {
            id: "csd-end-term-aug-2025-an-q20",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/csd-end-term-aug-2025-an/q20-1.webp#575x44)",
            answer: 11101100,
            explanation: ""
          }
        ]
      }
    ]
  }
];
