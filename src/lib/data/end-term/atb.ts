import type { QualifierMock } from "../../types";

// Algorithmic Thinking in Bioinformatics: IIT Madras BS End Term papers (1 papers, 16 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const atbEndTermPapers: QualifierMock[] = [
  {
    slug: "atb-end-term-aug-2025-fn",
    title: "ATB End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "algorithmic-thinking-in-bioinformatics",
        title: "Algorithmic Thinking in Bioinformatics",
        short: "ATB",
        questions: [
          {
            id: "atb-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/atb-end-term-aug-2025-fn/q1-1.webp#575x393)",
            options: [
              "TACC, ATGT, CGGC, ACTA",
              "ACCT, TGTC, GGCG, CTAA",
              "TACC, TGTC, GGCG, CTAA",
              "ACCT, ATGT, CGGC, ACTA"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/atb-end-term-aug-2025-fn/q2-1.webp#575x451)",
            options: [
              "14",
              "41",
              "57",
              "128"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q3",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/atb-end-term-aug-2025-fn/q3-1.webp#575x513)",
            answer: 4,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q4",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/atb-end-term-aug-2025-fn/q4-1.webp#575x75)",
            answer: 11,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q5",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/atb-end-term-aug-2025-fn/q5-1.webp#575x343)",
            answer: 4,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q6",
            type: "numerical",
            marks: 2,
            passage: "The de Bruijn graph of some linear (i.e., non-circular) genome Dna comprises of 2 nodes (N_1 and N_2) and 3 edges – two of these edges are directed from N_1 to N_2 and the remaining edge is directed from N_2 to N_1. To reconstruct Dna, you are allowed to start only from the node N_1. Answer the given subquestions with respect to the same.",
            prompt: "If the k-mers represented by both N_1 and N_2 are fixed, then how many unique genome sequences can be constructed from this de Bruijn graph? Enter the answer as a single integer.",
            answer: 1,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q7",
            type: "multi",
            marks: 3,
            passage: "The de Bruijn graph of some linear (i.e., non-circular) genome Dna comprises of 2 nodes (N_1 and N_2) and 3 edges – two of these edges are directed from N_1 to N_2 and the remaining edge is directed from N_2 to N_1. To reconstruct Dna, you are allowed to start only from the node N_1. Answer the given subquestions with respect to the same.",
            prompt: "Suppose you don’t know the 2-mers representing N_1 and N_2. Then which of the following is/are possible choices for Dna?",
            options: [
              "TATAT",
              "CACAC",
              "ATATA",
              "AGAGG",
              "TGTGG"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q8",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/atb-end-term-aug-2025-fn/q8-passage-1.webp#575x126)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the value of the probability density function at x = 45 under this model? Round the answer to three decimal digits.",
            answer: 0.065,
            tolerance: 0.005,
            explanation: "Official answer key accepts any value from 0.06 to 0.07."
          },
          {
            id: "atb-end-term-aug-2025-fn-q9",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/atb-end-term-aug-2025-fn/q8-passage-1.webp#575x126)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the probability that this data point was generated by the first cluster? Round the answer to three decimal digits.",
            answer: 0.37,
            tolerance: 0.01,
            explanation: "Official answer key accepts any value from 0.36 to 0.38."
          },
          {
            id: "atb-end-term-aug-2025-fn-q10",
            type: "numerical",
            marks: 2,
            passage: "You are asked to construct a phylogeny on the distance matrix D using the Additive Phylogeny algorithm. At the end of the 5th iteration, you notice the D^(bald) matrix consumes 81 units of memory space. Assume every entry in a matrix requires 1 unit of space. Also assume the count of the iterations starts from 1. Answer the given subquestions with respect to the same.",
            prompt: "How many units of space is required to the corresponding D^(trimmed) matrix? Enter the answer as a single integer.",
            answer: 64,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q11",
            type: "numerical",
            marks: 2,
            passage: "You are asked to construct a phylogeny on the distance matrix D using the Additive Phylogeny algorithm. At the end of the 5th iteration, you notice the D^(bald) matrix consumes 81 units of memory space. Assume every entry in a matrix requires 1 unit of space. Also assume the count of the iterations starts from 1. Answer the given subquestions with respect to the same.",
            prompt: "How many leaves will be there in the final phylogeny constructed at the end of the algorithm? Enter the answer as a single integer.",
            answer: 13,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q12",
            type: "numerical",
            marks: 1,
            passage: "You are asked to construct a phylogeny on the distance matrix D using the Additive Phylogeny algorithm. At the end of the 5th iteration, you notice the D^(bald) matrix consumes 81 units of memory space. Assume every entry in a matrix requires 1 unit of space. Also assume the count of the iterations starts from 1. Answer the given subquestions with respect to the same.",
            prompt: "![Figure](/pyq/atb-end-term-aug-2025-fn/q12-1.webp#575x532)\n\nRead the pseudocode carefully and calculate the number of iterations required by the UPGMA algorithm to construct the Ultrametric tree on D? Enter the answer as a single integer.",
            answer: 12,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q13",
            type: "numerical",
            marks: 4,
            passage: "![Figure](/pyq/atb-end-term-aug-2025-fn/q13-passage-1.webp#575x190)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How many 6-mers in the sequence ‘ATTCCGGCCAACAG’ have a nonzero probability of binding to the TF according to the PWM given in the table? Enter the answer as a single integer.",
            answer: 3,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q14",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/atb-end-term-aug-2025-fn/q13-passage-1.webp#575x190)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following substrings is most likely to be bound by the TF?",
            options: [
              "TTCCGG",
              "CCGGCC",
              "ATTCCG",
              "CCAACA"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q15",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/atb-end-term-aug-2025-fn/q15-passage-1.webp#575x260)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/atb-end-term-aug-2025-fn/q15-1.webp#301x89)",
            options: [
              "![Figure](/pyq/atb-end-term-aug-2025-fn/q15-opt1-1.webp#178x26)",
              "![Figure](/pyq/atb-end-term-aug-2025-fn/q15-opt2-1.webp#174x23)",
              "![Figure](/pyq/atb-end-term-aug-2025-fn/q15-opt3-1.webp#176x25)",
              "![Figure](/pyq/atb-end-term-aug-2025-fn/q15-opt4-1.webp#177x23)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "atb-end-term-aug-2025-fn-q16",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/atb-end-term-aug-2025-fn/q15-passage-1.webp#575x260)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/atb-end-term-aug-2025-fn/q16-1.webp#396x796)",
            options: [
              "![Figure](/pyq/atb-end-term-aug-2025-fn/q16-opt1-1.webp#49x22)",
              "![Figure](/pyq/atb-end-term-aug-2025-fn/q16-opt2-1.webp#49x22)",
              "![Figure](/pyq/atb-end-term-aug-2025-fn/q16-opt3-1.webp#46x23)",
              "![Figure](/pyq/atb-end-term-aug-2025-fn/q16-opt4-1.webp#47x20)"
            ],
            answer: 2,
            explanation: ""
          }
        ]
      }
    ]
  }
];
