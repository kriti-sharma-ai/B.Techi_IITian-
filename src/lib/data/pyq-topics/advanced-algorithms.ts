import type { PyqTopicTags } from "../../types";

// 68 past-paper questions in 8 topics, 18 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const advancedAlgorithmsTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "greedy-algorithms",
      "title": "Greedy algorithms & their pitfalls",
      "summary": "Whether greedy rules (max-degree vertex cover, tree perfect matching) are correct or approximate",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q1",
        "advanced-algorithms-end-term-aug-2025-fn-q1",
        "advanced-algorithms-end-term-aug-2025-an-q17",
        "advanced-algorithms-end-term-aug-2025-fn-q17",
        "advanced-algorithms-end-term-aug-2025-fn-q18",
        "advanced-algorithms-end-term-aug-2025-fn-q19",
        "advanced-algorithms-end-term-aug-2025-an-q18",
        "advanced-algorithms-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "slug": "matroids",
      "title": "Matroids",
      "summary": "Checking matroid axioms on set systems and whether deleting an element keeps a matroid",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q8",
        "advanced-algorithms-end-term-aug-2025-an-q9",
        "advanced-algorithms-end-term-aug-2025-fn-q8",
        "advanced-algorithms-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "slug": "dynamic-programming-set-cover",
      "title": "Dynamic programming for set cover",
      "summary": "Filling and reading the subset DP table Pi(X, j) for minimum set cover",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q10",
        "advanced-algorithms-end-term-aug-2025-an-q11",
        "advanced-algorithms-end-term-aug-2025-an-q12",
        "advanced-algorithms-end-term-aug-2025-fn-q10",
        "advanced-algorithms-end-term-aug-2025-fn-q11",
        "advanced-algorithms-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "slug": "inclusion-exclusion",
      "title": "Inclusion-exclusion counting",
      "summary": "Counting ternary sequences that use every symbol via inclusion-exclusion on bad sets",
      "ids": [
        "advanced-algorithms-quiz-2-aug-2025-an-q22",
        "advanced-algorithms-quiz-2-aug-2025-an-q23",
        "advanced-algorithms-quiz-2-aug-2025-an-q24",
        "advanced-algorithms-quiz-2-aug-2025-an-q25",
        "advanced-algorithms-quiz-2-aug-2025-an-q26",
        "advanced-algorithms-end-term-aug-2025-an-q2",
        "advanced-algorithms-end-term-aug-2025-an-q3",
        "advanced-algorithms-end-term-aug-2025-an-q4",
        "advanced-algorithms-end-term-aug-2025-an-q5",
        "advanced-algorithms-end-term-aug-2025-an-q6",
        "advanced-algorithms-end-term-aug-2025-fn-q2",
        "advanced-algorithms-end-term-aug-2025-fn-q3",
        "advanced-algorithms-end-term-aug-2025-fn-q4",
        "advanced-algorithms-end-term-aug-2025-fn-q5",
        "advanced-algorithms-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "slug": "randomized-algorithms",
      "title": "Randomized algorithms",
      "summary": "Expected vs worst-case running time and adversaries for randomized quicksort",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q14",
        "advanced-algorithms-end-term-aug-2025-an-q15",
        "advanced-algorithms-end-term-aug-2025-fn-q14",
        "advanced-algorithms-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "slug": "linear-programming-approximation",
      "title": "Linear programming & LP rounding",
      "summary": "LP optimal solutions and rounding thresholds in the weighted vertex cover approximation",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q16",
        "advanced-algorithms-end-term-aug-2025-fn-q16",
        "advanced-algorithms-quiz-2-aug-2025-an-q13",
        "advanced-algorithms-quiz-2-aug-2025-an-q14",
        "advanced-algorithms-end-term-aug-2025-an-q19",
        "advanced-algorithms-end-term-aug-2025-an-q20"
      ]
    },
    {
      "slug": "hardness-and-branching",
      "title": "NP-hardness & branching algorithms",
      "summary": "Complexity class of the SWISH game and branching algorithms for MIN-2-SAT",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q7",
        "advanced-algorithms-end-term-aug-2025-fn-q7",
        "advanced-algorithms-end-term-aug-2025-an-q13",
        "advanced-algorithms-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "slug": "iterative-compression",
      "title": "Iterative compression & FPT",
      "summary": "Cluster vertex deletion, disjoint FVS reduction rules and hitting set via iterative compression",
      "ids": [
        "advanced-algorithms-quiz-2-aug-2025-an-q1",
        "advanced-algorithms-quiz-2-aug-2025-an-q2",
        "advanced-algorithms-quiz-2-aug-2025-an-q3",
        "advanced-algorithms-quiz-2-aug-2025-an-q4",
        "advanced-algorithms-quiz-2-aug-2025-an-q5",
        "advanced-algorithms-quiz-2-aug-2025-an-q6",
        "advanced-algorithms-quiz-2-aug-2025-an-q7",
        "advanced-algorithms-quiz-2-aug-2025-an-q8",
        "advanced-algorithms-quiz-2-aug-2025-an-q9",
        "advanced-algorithms-quiz-2-aug-2025-an-q10",
        "advanced-algorithms-quiz-2-aug-2025-an-q11",
        "advanced-algorithms-quiz-2-aug-2025-an-q12",
        "advanced-algorithms-quiz-2-aug-2025-an-q15",
        "advanced-algorithms-quiz-2-aug-2025-an-q16",
        "advanced-algorithms-quiz-2-aug-2025-an-q17",
        "advanced-algorithms-quiz-2-aug-2025-an-q18",
        "advanced-algorithms-quiz-2-aug-2025-an-q19",
        "advanced-algorithms-quiz-2-aug-2025-an-q20",
        "advanced-algorithms-quiz-2-aug-2025-an-q21",
        "advanced-algorithms-end-term-aug-2025-an-q21",
        "advanced-algorithms-end-term-aug-2025-fn-q21"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Decide which greedy algorithm correctly tests if a tree has a perfect matching",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q1",
        "advanced-algorithms-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "Inclusion-exclusion: size of each A_i (sequences missing digit i)",
      "ids": [
        "advanced-algorithms-quiz-2-aug-2025-an-q22",
        "advanced-algorithms-end-term-aug-2025-an-q2",
        "advanced-algorithms-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Inclusion-exclusion: size of each pairwise intersection A_i ∩ A_j",
      "ids": [
        "advanced-algorithms-quiz-2-aug-2025-an-q23",
        "advanced-algorithms-end-term-aug-2025-an-q3",
        "advanced-algorithms-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Inclusion-exclusion: size of the triple intersection A_0 ∩ A_1 ∩ A_2",
      "ids": [
        "advanced-algorithms-quiz-2-aug-2025-an-q24",
        "advanced-algorithms-end-term-aug-2025-an-q4",
        "advanced-algorithms-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Count length-n sequences over {0,1,2} in which every digit appears",
      "ids": [
        "advanced-algorithms-quiz-2-aug-2025-an-q25",
        "advanced-algorithms-quiz-2-aug-2025-an-q26",
        "advanced-algorithms-end-term-aug-2025-an-q5",
        "advanced-algorithms-end-term-aug-2025-an-q6",
        "advanced-algorithms-end-term-aug-2025-fn-q5",
        "advanced-algorithms-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "title": "Identify the complexity class (P/NP/NP-hard) of the generalized SWISH game",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q7",
        "advanced-algorithms-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Is a matroid with one element deleted still a matroid?",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q8",
        "advanced-algorithms-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Check which given set systems (E, I) are matroids",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q9",
        "advanced-algorithms-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Find the missing entry in a set cover DP table",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q10",
        "advanced-algorithms-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Read values from the set cover DP table Pi(X, j)",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q11",
        "advanced-algorithms-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Which DP table entries are looked up to compute Pi(X, j) for set cover",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q12",
        "advanced-algorithms-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "True/false: worst-case and expected running time of randomized algorithms",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q14",
        "advanced-algorithms-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Can an adversary force randomized quicksort beyond n log n time?",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q15",
        "advanced-algorithms-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "True/false: every linear program has a unique optimal solution",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q16",
        "advanced-algorithms-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Does the max-degree greedy algorithm always output a vertex cover?",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q17",
        "advanced-algorithms-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Can the minimum vertex cover be exactly twice the maximum matching?",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q18",
        "advanced-algorithms-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Effect of changing the LP rounding threshold in weighted vertex cover",
      "ids": [
        "advanced-algorithms-quiz-2-aug-2025-an-q13",
        "advanced-algorithms-quiz-2-aug-2025-an-q14",
        "advanced-algorithms-end-term-aug-2025-an-q19",
        "advanced-algorithms-end-term-aug-2025-an-q20"
      ]
    },
    {
      "title": "Running time of d-hitting set via iterative compression",
      "ids": [
        "advanced-algorithms-end-term-aug-2025-an-q21",
        "advanced-algorithms-end-term-aug-2025-fn-q21"
      ]
    }
  ]
};
