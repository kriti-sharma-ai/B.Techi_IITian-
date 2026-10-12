import type { PyqTopicTags } from "../../types";

// 34 past-paper questions in 6 topics, 2 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const algorithmsForDataScienceTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "probability-randomized-response",
      "title": "Probability tools & randomized response",
      "summary": "Markov bounds, Gaussian random vectors, linear maps of normals and randomized-response privacy",
      "ids": [
        "ads-quiz-2-aug-2025-an-q1",
        "ads-quiz-2-aug-2025-an-q3",
        "ads-quiz-2-aug-2025-an-q5",
        "ads-end-term-aug-2025-fn-q16",
        "ads-end-term-aug-2025-fn-q17",
        "ads-end-term-aug-2025-fn-q21",
        "ads-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "slug": "random-projections-svd",
      "title": "JL lemma, random matrices & SVD",
      "summary": "JL target dimensions and distance bounds, random matrix spectra and best rank-k approximation",
      "ids": [
        "ads-quiz-2-aug-2025-an-q2",
        "ads-quiz-2-aug-2025-an-q4",
        "ads-quiz-2-aug-2025-an-q8",
        "ads-quiz-2-aug-2025-an-q9",
        "ads-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "slug": "graph-laplacians",
      "title": "Graph cuts, Laplacians & sparsifiers",
      "summary": "Minimum cuts, building the Laplacian, zero eigenvalues and spectral sparsification",
      "ids": [
        "ads-quiz-2-aug-2025-an-q10",
        "ads-quiz-2-aug-2025-an-q11",
        "ads-quiz-2-aug-2025-an-q12",
        "ads-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "slug": "locality-sensitive-hashing",
      "title": "Locality-sensitive hashing",
      "summary": "Datar-style hash partitions, effect of L and k, TPR and FPR of LSH tables",
      "ids": [
        "ads-quiz-2-aug-2025-an-q6",
        "ads-quiz-2-aug-2025-an-q7",
        "ads-end-term-aug-2025-fn-q18",
        "ads-end-term-aug-2025-fn-q19",
        "ads-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "slug": "vc-dimension",
      "title": "VC dimension & shattering",
      "summary": "VC dimension of interval/circle/finite classes and bounds on labellings",
      "ids": [
        "ads-end-term-aug-2025-fn-q2",
        "ads-end-term-aug-2025-fn-q3",
        "ads-end-term-aug-2025-fn-q5",
        "ads-end-term-aug-2025-fn-q14",
        "ads-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "slug": "bayes-erm-errors",
      "title": "Bayes classifier, ERM & error terms",
      "summary": "Approximation/estimation/generalisation errors, Bayes classifier and error, ERM train error",
      "ids": [
        "ads-end-term-aug-2025-fn-q6",
        "ads-end-term-aug-2025-fn-q7",
        "ads-end-term-aug-2025-fn-q8",
        "ads-end-term-aug-2025-fn-q9",
        "ads-end-term-aug-2025-fn-q10",
        "ads-end-term-aug-2025-fn-q11",
        "ads-end-term-aug-2025-fn-q12",
        "ads-end-term-aug-2025-fn-q13"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Find the covariance/variance of a linear map of a standard normal vector",
      "ids": [
        "ads-quiz-2-aug-2025-an-q5",
        "ads-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Use the SVD to get the best low-rank approximation and its error",
      "ids": [
        "ads-quiz-2-aug-2025-an-q9",
        "ads-end-term-aug-2025-fn-q4"
      ]
    }
  ]
};
