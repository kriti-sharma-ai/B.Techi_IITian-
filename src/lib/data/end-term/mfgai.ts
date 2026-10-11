import type { QualifierMock } from "../../types";

// Mathematical Foundations of Generative AI: IIT Madras BS End Term papers (2 papers, 44 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const mfgaiEndTermPapers: QualifierMock[] = [
  {
    slug: "mfgai-end-term-aug-2025-fn",
    title: "Maths for GenAI End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "mathematical-foundations-of-generative-ai",
        title: "Mathematical Foundations of Generative AI",
        short: "Maths for GenAI",
        questions: [
          {
            id: "mfgai-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q1-1.webp#575x104)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q1-opt1-1.webp#148x34)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q1-opt2-1.webp#125x28)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q1-opt3-1.webp#156x29)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q1-opt4-1.webp#190x32)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q2-1.webp#562x133)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q2-opt1-1.webp#239x32)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q2-opt2-1.webp#206x53)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q2-opt3-1.webp#148x50)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q2-opt4-1.webp#98x33)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 4,
            prompt: "Starting from 4×4 spatial size, apply four ConvTranspose2d blocks each with kernel 4, stride 2, padding 1. Final spatial size is:",
            options: [
              "16 × 16",
              "32 × 32",
              "64 × 64",
              "128 × 128"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q4-1.webp#575x34)",
            options: [
              "Increase capacity and reduce bias",
              "Reduce capacity, causing underfitting and gradient pathology",
              "Enforce exact 1-Lipschitzness without bias",
              "Make T convex"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q5-1.webp#575x44)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q5-opt1-1.webp#415x29)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q5-opt2-1.webp#182x28)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q5-opt3-1.webp#179x28)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q5-opt4-1.webp#138x29)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q6-1.webp#514x112)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q6-opt1-1.webp#329x34)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q6-opt2-1.webp#267x31)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q6-opt3-1.webp#284x28)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q6-opt4-1.webp#268x34)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q7",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q7-1.webp#575x53)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q7-opt1-1.webp#575x29)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q7-opt2-1.webp#575x26)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q7-opt3-1.webp#420x25)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q7-opt4-1.webp#231x29)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q8",
            type: "mcq",
            marks: 5,
            prompt: "In the Sampling pipeline in VAE, Unconditional generation uses",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q8-opt1-1.webp#282x27)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q8-opt2-1.webp#237x24)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q8-opt3-1.webp#210x30)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q8-opt4-1.webp#78x30)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q9",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q9-1.webp#575x52)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q9-opt1-1.webp#575x98)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q9-opt2-1.webp#510x27)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q9-opt3-1.webp#493x28)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q9-opt4-1.webp#330x26)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q10",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q10-1.webp#575x79)",
            options: [
              "1.797",
              "1.910",
              "2.000",
              "1.620"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q11",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q11-1.webp#575x52)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q11-opt1-1.webp#498x53)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q11-opt2-1.webp#511x26)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q11-opt3-1.webp#192x25)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q11-opt4-1.webp#234x23)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q12",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q12-1.webp#453x116)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q12-opt1-1.webp#116x60)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q12-opt2-1.webp#31x17)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q12-opt3-1.webp#101x56)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q12-opt4-1.webp#79x54)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q13",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q13-1.webp#575x100)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q13-opt1-1.webp#194x27)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q13-opt2-1.webp#194x22)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q13-opt3-1.webp#196x28)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q13-opt4-1.webp#116x26)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q14",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q14-1.webp#324x109)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q14-opt1-1.webp#536x28)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q14-opt2-1.webp#205x26)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q14-opt3-1.webp#217x29)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q14-opt4-1.webp#59x26)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q15",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q15-1.webp#575x26)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q15-opt1-1.webp#444x31)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q15-opt2-1.webp#195x23)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q15-opt3-1.webp#219x29)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q15-opt4-1.webp#197x24)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q16",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q16-1.webp#575x53)",
            options: [
              "0.6",
              "0.5",
              "0.67",
              "0.75"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q17",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q17-1.webp#575x56)",
            options: [
              "≈ 1.670",
              "1.500",
              "2.000",
              "≈ 1.333"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q18",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q18-1.webp#575x32)",
            options: [
              "768 × 768 = 589,824",
              "768 × 64 = 49,152",
              "64 × 64 = 4,096",
              "12 × 64 = 768"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q19",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q19-1.webp#575x51)",
            options: [
              "(3,−1)",
              "(2, 0)",
              "(1,−1)",
              "(0, 0)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q20",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q20-1.webp#575x31)",
            options: [
              "2.62",
              "2.00",
              "2.81",
              "1.90"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q21",
            type: "mcq",
            marks: 5,
            prompt: "An AR-LM can be viewed as an MDP by",
            options: [
              "State = token prefix, action = next token",
              "State = next token, action = prefix",
              "State = vocabulary, action = logits",
              "Impossible"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-fn-q22",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-fn/q22-1.webp#575x160)",
            options: [
              "0.600",
              "0.750",
              "0.500",
              "0.300"
            ],
            answer: 0,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "mfgai-end-term-aug-2025-an",
    title: "Maths for GenAI End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "mathematical-foundations-of-generative-ai",
        title: "Mathematical Foundations of Generative AI",
        short: "Maths for GenAI",
        questions: [
          {
            id: "mfgai-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q1-1.webp#480x28)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q1-opt1-1.webp#88x50)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q1-opt2-1.webp#87x48)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q1-opt3-1.webp#28x45)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q1-opt4-1.webp#52x43)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q2-1.webp#575x48)",
            options: [
              "Zero a.e.",
              "Nonzero and large",
              "Undefined",
              "Equal to the score of p_g"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q3-1.webp#348x26)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q3-opt1-1.webp#13x18)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q3-opt2-1.webp#39x23)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q3-opt3-1.webp#22x14)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q3-opt4-1.webp#56x21)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q4-1.webp#575x48)",
            options: [
              "31",
              "32",
              "33",
              "34"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q5-1.webp#575x48)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q5-opt1-1.webp#575x70)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q5-opt2-1.webp#575x26)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q5-opt3-1.webp#575x31)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q5-opt4-1.webp#350x22)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q6",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q6-1.webp#575x28)",
            options: [
              "(1.205,−3.210)",
              "(1.205,−1.895)",
              "(0.500,−3.210)",
              "(0.705,−2.000)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q7",
            type: "mcq",
            marks: 4,
            prompt: "Given d_z=20, if the first decoder layer is a fully connected layer that outputs 3 x 64 x 64 units and includes a bias term, how many trainable parameters does this\nlayer have?",
            options: [
              "245,760",
              "258,048",
              "122,880",
              "262,144"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q8",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q8-1.webp#575x72)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q8-opt1-1.webp#304x55)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q8-opt2-1.webp#183x30)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q8-opt3-1.webp#66x21)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q8-opt4-1.webp#259x30)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q9",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q9-1.webp#575x93)",
            options: [
              "1",
              "2",
              "3",
              "4"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q10",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q10-1.webp#575x74)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q10-opt1-1.webp#453x91)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q10-opt2-1.webp#371x23)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q10-opt3-1.webp#466x22)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q10-opt4-1.webp#379x25)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q11",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q11-1.webp#575x75)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q11-opt1-1.webp#169x28)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q11-opt2-1.webp#125x24)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q11-opt3-1.webp#74x25)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q11-opt4-1.webp#124x27)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q12",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q12-1.webp#575x146)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q12-opt1-1.webp#475x42)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q12-opt2-1.webp#490x21)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q12-opt3-1.webp#184x20)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q12-opt4-1.webp#221x18)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q13",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q13-1.webp#575x82)",
            options: [
              "0.28",
              "0.32",
              "0.20",
              "0.18"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q14",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q14-1.webp#575x27)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q14-opt1-1.webp#93x33)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q14-opt2-1.webp#84x29)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q14-opt3-1.webp#128x30)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q14-opt4-1.webp#69x28)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q15",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q15-1.webp#575x91)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q15-opt1-1.webp#575x108)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q15-opt2-1.webp#159x21)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q15-opt3-1.webp#346x18)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q15-opt4-1.webp#177x20)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q16",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q16-1.webp#575x92)",
            options: [
              "Size = 4, prob ≈ 0.105",
              "Size = 3, prob = 0",
              "Size = 5, prob = 0.1",
              "Size = 4, prob = 0.1"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q17",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q17-1.webp#575x135)",
            options: [
              "1,048,576 params",
              "786,432 params",
              "524,288 params",
              "262,144 params"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q18",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q18-1.webp#575x153)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q18-opt1-1.webp#129x36)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q18-opt2-1.webp#98x24)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q18-opt3-1.webp#81x30)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q18-opt4-1.webp#143x24)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q19",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q19-1.webp#451x231)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q19-opt1-1.webp#153x30)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q19-opt2-1.webp#87x29)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q19-opt3-1.webp#64x30)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q19-opt4-1.webp#155x26)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q20",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q20-1.webp#502x29)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q20-opt1-1.webp#394x36)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q20-opt2-1.webp#179x27)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q20-opt3-1.webp#162x30)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q20-opt4-1.webp#70x22)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q21",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q21-1.webp#575x89)",
            options: [
              "−0.85",
              "−0.80",
              "−0.20",
              "−1.00"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mfgai-end-term-aug-2025-an-q22",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/mfgai-end-term-aug-2025-an/q22-1.webp#575x47)",
            options: [
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q22-opt1-1.webp#352x23)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q22-opt2-1.webp#254x22)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q22-opt3-1.webp#357x24)",
              "![Figure](/pyq/mfgai-end-term-aug-2025-an/q22-opt4-1.webp#252x22)"
            ],
            answer: 0,
            explanation: ""
          }
        ]
      }
    ]
  }
];
