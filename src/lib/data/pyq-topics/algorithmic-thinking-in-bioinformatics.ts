import type { PyqTopicTags } from "../../types";

// 34 past-paper questions in 5 topics, 2 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const algorithmicThinkingInBioinformaticsTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "assembly-alignment-rearrangements",
      "title": "Assembly, alignment & rearrangements",
      "summary": "De Bruijn graph genomes, spectral convolution, global alignment DP and breakpoint-graph reversals",
      "ids": [
        "atb-end-term-aug-2025-fn-q6",
        "atb-end-term-aug-2025-fn-q7",
        "atb-end-term-aug-2025-fn-q2",
        "atb-end-term-aug-2025-fn-q3",
        "atb-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "slug": "motif-finding",
      "title": "Motif finding",
      "summary": "Greedy, randomized and Gibbs motif search, profile consensus, score, entropy and PWM binding",
      "ids": [
        "atb-quiz-2-aug-2025-an-q1",
        "atb-quiz-2-aug-2025-an-q12",
        "atb-quiz-2-aug-2025-an-q13",
        "atb-quiz-2-aug-2025-an-q14",
        "atb-end-term-aug-2025-fn-q1",
        "atb-end-term-aug-2025-fn-q13",
        "atb-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "slug": "phylogeny",
      "title": "Phylogenetic trees",
      "summary": "Additive matrices, additive phylogeny, neighbor joining, UPGMA and small parsimony scores",
      "ids": [
        "atb-quiz-2-aug-2025-an-q6",
        "atb-quiz-2-aug-2025-an-q8",
        "atb-quiz-2-aug-2025-an-q15",
        "atb-quiz-2-aug-2025-an-q16",
        "atb-end-term-aug-2025-fn-q10",
        "atb-end-term-aug-2025-fn-q11",
        "atb-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "slug": "clustering-and-em",
      "title": "Clustering, mixture models & EM",
      "summary": "Soft k-means, Gaussian mixture responsibilities, parameter counts, MLE and EM updates",
      "ids": [
        "atb-quiz-2-aug-2025-an-q2",
        "atb-quiz-2-aug-2025-an-q3",
        "atb-quiz-2-aug-2025-an-q4",
        "atb-quiz-2-aug-2025-an-q5",
        "atb-end-term-aug-2025-fn-q8",
        "atb-end-term-aug-2025-fn-q9",
        "atb-end-term-aug-2025-fn-q15",
        "atb-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "slug": "suffix-trees-and-bwt",
      "title": "Suffix trees, suffix arrays & BWT",
      "summary": "Suffix trie/tree structure, suffix arrays, and reconstructing text from the Burrows-Wheeler transform",
      "ids": [
        "atb-quiz-2-aug-2025-an-q7",
        "atb-quiz-2-aug-2025-an-q9",
        "atb-quiz-2-aug-2025-an-q10",
        "atb-quiz-2-aug-2025-an-q11",
        "atb-quiz-2-aug-2025-an-q17",
        "atb-quiz-2-aug-2025-an-q18",
        "atb-end-term-aug-2025-fn-q4"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Posterior responsibility of a mixture component for a data point",
      "ids": [
        "atb-quiz-2-aug-2025-an-q3",
        "atb-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "M-step: update a parameter as a responsibility-weighted average",
      "ids": [
        "atb-quiz-2-aug-2025-an-q4",
        "atb-end-term-aug-2025-fn-q16"
      ]
    }
  ]
};
