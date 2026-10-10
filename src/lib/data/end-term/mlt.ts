import type { QualifierMock } from "../../types";

// Machine Learning Techniques: IIT Madras BS End Term papers (6 papers, 113 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const mltEndTermPapers: QualifierMock[] = [
  {
    slug: "mlt-end-term-aug-2025-fn",
    title: "MLT End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "machine-learning-techniques",
        title: "Machine Learning Techniques",
        short: "MLT",
        questions: [
          {
            id: "mlt-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q1-1.webp#575x80)",
            options: [
              "PCA has reduced the dimensionality of the dataset because the combinations of features are de-correlated.",
              "PCA has not reduced the dimensionality of the dataset because all principal components are retained.",
              "PCA always reduces the dimensionality of the dataset regardless of the number of components retained.",
              "PCA can never be used for dimensionality reduction."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q2-1.webp#575x167)",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q2-opt1-1.webp#282x35)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q2-opt2-1.webp#293x34)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q2-opt3-1.webp#358x35)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q2-opt4-1.webp#355x43)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q3-1.webp#575x238)",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q3-opt1-1.webp#170x31)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q3-opt2-1.webp#167x27)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q3-opt3-1.webp#172x31)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q3-opt4-1.webp#168x31)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q4-1.webp#575x127)",
            options: [
              "40",
              "60",
              "100",
              "1"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q5",
            type: "multi",
            marks: 3,
            prompt: "Which among the following is TRUE for k-NN algorithm? Select all that apply.",
            options: [
              "1-nearest neighbour is sensitive to outliers.",
              "k-NN can only be applied to a classification problem.",
              "As k increases, the model is more likely to overfit.",
              "The bias increases with the increase in the value of k.",
              "The variance increases with the increase in the value of k."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q6",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q6-1.webp#575x122)",
            options: [
              "30",
              "120",
              "50",
              "160"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q7",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q7-1.webp#575x52)",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q7-opt1-1.webp#405x33)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q7-opt2-1.webp#402x33)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q7-opt3-1.webp#402x33)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q7-opt4-1.webp#328x32)"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q8",
            type: "multi",
            marks: 2,
            prompt: "With respect to the Lloyd’s algorithm, choose the correct statements:",
            options: [
              "The partition configurations cannot repeat themselves.",
              "After doing the reassignments (consider at least one point reassigned to the new cluster), we might get the same means for all clusters.",
              "Objective function after making the re-assignments strictly reduces.",
              "Objective function after making the re-assignments strictly increases."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q9",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q9-1.webp#575x429)",
            answer: 0.12,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.1 to 0.14."
          },
          {
            id: "mlt-end-term-aug-2025-fn-q10",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q10-1.webp#575x325)",
            answer: 0.5,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q11",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q11-1.webp#575x417)",
            answer: 0.693,
            tolerance: 0.003,
            explanation: "Official answer key accepts any value from 0.69 to 0.696."
          },
          {
            id: "mlt-end-term-aug-2025-fn-q12",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q12-passage-1.webp#575x159)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q12-1.webp#294x69)",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q12-opt1-1.webp#302x59)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q12-opt2-1.webp#313x56)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q12-opt3-1.webp#297x59)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q12-opt4-1.webp#311x55)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q13",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q12-passage-1.webp#575x159)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q13-1.webp#315x79)",
            options: [
              "The coefficients shrinks towards zero.",
              "The coefficients increases in magnitude.",
              "The coefficients remain unchanged."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q14",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q14-passage-1.webp#575x153)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the probability that a 60-year-old patient with a cholesterol level of 200 mg/dL has the disease? Enter the answer correct to two decimal places.",
            answer: 0.73,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.71 to 0.75."
          },
          {
            id: "mlt-end-term-aug-2025-fn-q15",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q14-passage-1.webp#575x153)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How high should the cholesterol level be for the patient mentioned in the previous question to have a 50% chance of being diagnosed with the disease?",
            answer: 150,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q16",
            type: "mcq",
            marks: 2,
            passage: "Consider the datapoints (−2,−2) with label +1 and (2, 2) with label −1. A hard margin SVM is applied on this dataset. Answer the given subquestions:",
            prompt: "Which of the following is the decision boundary for the given dataset?",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q16-opt1-1.webp#98x31)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q16-opt2-1.webp#115x29)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q16-opt3-1.webp#99x26)",
              "![Figure](/pyq/mlt-end-term-aug-2025-fn/q16-opt4-1.webp#105x29)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-fn-q17",
            type: "numerical",
            marks: 2,
            passage: "Consider the datapoints (−2,−2) with label +1 and (2, 2) with label −1. A hard margin SVM is applied on this dataset. Answer the given subquestions:",
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-fn/q17-1.webp#392x223)",
            answer: 5.66,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 5.64 to 5.68."
          }
        ]
      }
    ]
  },
  {
    slug: "mlt-end-term-aug-2025-an",
    title: "MLT End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "machine-learning-techniques",
        title: "Machine Learning Techniques",
        short: "MLT",
        questions: [
          {
            id: "mlt-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q1-1.webp#575x191)",
            options: [
              "Yes",
              "No"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q2-1.webp#575x157)",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q2-opt1-1.webp#269x34)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q2-opt2-1.webp#294x29)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q2-opt3-1.webp#351x33)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q2-opt4-1.webp#351x34)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q3-1.webp#575x114)",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q3-opt1-1.webp#184x28)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q3-opt2-1.webp#180x24)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q3-opt3-1.webp#183x25)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q3-opt4-1.webp#185x25)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q4-1.webp#575x294)",
            options: [
              "Greedy initialization always achieves F = F_(optimal) by maximizing the distance between initial centers.",
              "Greedy initialization may achieve F = F_(optimal) or a larger value depending on the dataset and the initial choice.",
              "Greedy initialization does not ensure convergence for K-means clustering.",
              "Greedy initialization ensures convergence to a unique solution for any dataset."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q5-1.webp#575x393)",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q5-opt1-1.webp#332x28)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q5-opt2-1.webp#333x25)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q5-opt3-1.webp#330x25)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q5-opt4-1.webp#337x25)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q6",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statements are true about the decision tree algorithm?",
            options: [
              "Decision trees are prone to overfitting if the maximum depth is set too shallow.",
              "Decision trees are not affected by the order of features in the dataset.",
              "Decision trees are sensitive to small perturbations in the dataset and can result in different tree structures.",
              "Decision trees can handle both numerical and categorical features."
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q7",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q7-1.webp#575x323)",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q7-opt1-1.webp#372x30)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q7-opt2-1.webp#367x26)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q7-opt3-1.webp#378x24)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q7-opt4-1.webp#375x29)"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q8",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q8-1.webp#575x130)",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q8-opt1-1.webp#374x32)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q8-opt2-1.webp#575x27)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q8-opt3-1.webp#508x28)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q9",
            type: "multi",
            marks: 4,
            prompt: "Given a two-dimensional data set where points from class 1 are: {(−2, 3), (−1, 1)} and points from class 0 are: {(1, 3), (1, 4)}. Which of the following statements are true?",
            options: [
              "The given data points from classes 1 and 0 can be linearly separated using a hard-margin SVM.",
              "A perceptron model and a hard-margin SVM can give different decision boundary for this dataset.",
              "A soft-margin SVM would be a more robust choice than a hard-margin SVM for this dataset as the dataset is not linearly separable.",
              "The width of the separation between the two supporting hyperplanes is 4."
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q10-1.webp#575x196)",
            answer: 6,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q11",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q11-1.webp#575x223)",
            answer: 1.12,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 1.1 to 1.14."
          },
          {
            id: "mlt-end-term-aug-2025-an-q12",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q12-1.webp#575x245)",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q13",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q13-1.webp#575x290)",
            answer: 0.31,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.28 to 0.34."
          },
          {
            id: "mlt-end-term-aug-2025-an-q14",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/mlt-end-term-aug-2025-an/q14-passage-1.webp#575x182)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q14-1.webp#233x82)",
            options: [
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q14-opt1-1.webp#279x55)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q14-opt2-1.webp#281x56)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q14-opt3-1.webp#276x52)",
              "![Figure](/pyq/mlt-end-term-aug-2025-an/q14-opt4-1.webp#277x53)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q15",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-aug-2025-an/q14-passage-1.webp#575x182)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q15-1.webp#347x89)",
            options: [
              "The coefficients shrinks towards zero.",
              "The coefficients increases in magnitude.",
              "The coefficients remain unchanged."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q16",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/mlt-end-term-aug-2025-an/q16-passage-1.webp#575x306)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q16-1.webp#312x107)",
            answer: 7,
            explanation: ""
          },
          {
            id: "mlt-end-term-aug-2025-an-q17",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/mlt-end-term-aug-2025-an/q16-passage-1.webp#575x306)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-aug-2025-an/q17-1.webp#375x267)",
            answer: 0.0625,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "mlt-end-term-apr-2025-fn",
    title: "MLT End Term · 13 Apr 2025 (FN)",
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
        subjectSlug: "machine-learning-techniques",
        title: "Machine Learning Techniques",
        short: "MLT",
        questions: [
          {
            id: "mlt-end-term-apr-2025-fn-q1",
            type: "mcq",
            marks: 3,
            prompt: "For a given dataset, a 1-Nearest Neighbor (1-NN) and a 3-Nearest Neighbor (3-NN) classifier are applied. Which classifier is likely to exhibit a higher Leave-One-Out Cross Validation (LOOCV) error? In case of tie-breaker, assign a positive class (+) to the data point.\n\n![Figure](/pyq/mlt-end-term-apr-2025-fn/q1-1.webp#352x348)",
            options: [
              "1-NN",
              "3-NN",
              "Both have the same error."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q2-1.webp#575x202)",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q2-opt1-1.webp#469x22)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q2-opt2-1.webp#462x28)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q2-opt3-1.webp#456x29)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q3",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q3-1.webp#575x288)",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q3-opt1-1.webp#110x28)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q3-opt2-1.webp#150x22)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q3-opt3-1.webp#161x25)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q3-opt4-1.webp#113x24)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q4",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q4-1.webp#575x225)",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q4-opt1-1.webp#213x73)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q4-opt2-1.webp#222x67)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q4-opt3-1.webp#235x71)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q4-opt4-1.webp#212x68)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q5",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statements correctly differentiates PCA and Kernel PCA?",
            options: [
              "PCA maximizes variance in the original feature space, while Kernel PCA maximizes variance in a higher-dimensional transformed space.",
              "PCA finds principal components using linear transformations in the original space, while Kernel PCA uses non-linear transformations to find principal components in a higher- dimensional space.",
              "Kernel PCA can capture non-linear patterns in data, making it useful when PCA fails to represent complex structures in a linear space.",
              "PCA and Kernel PCA always yield identical results regardless of the dataset structure."
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q6",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q6-1.webp#476x214)",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q6-opt1-1.webp#506x28)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q6-opt2-1.webp#486x25)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q6-opt3-1.webp#575x45)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q6-opt4-1.webp#575x51)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q6-opt5-1.webp#374x25)"
            ],
            answer: [
              1,
              3,
              4
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q7",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statements are true for bagging?",
            options: [
              "The final model has lesser variance than the individual learners.",
              "The final model has a higher variance than the individual learners.",
              "Estimators in bagging can be trained parallely.",
              "If the number of data points is large, typically two-third of the data points remain unselected in bags."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q8",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q8-1.webp#575x31)",
            options: [
              "It penalizes large coefficients to reduce overfitting.",
              "It shrinks the coefficients but does not set them to zero.",
              "It forces more coefficients to be exactly zero, performing feature selection.",
              "It has no effect on the regression model."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q9",
            type: "numerical",
            marks: 2,
            prompt: "For a decision tree, each node has exactly two child nodes (balanced tree). If the tree has a depth of 3, how many leaf nodes are there?",
            answer: 8,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q10",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q10-1.webp#575x148)",
            answer: 24,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q11",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q11-1.webp#575x203)",
            answer: 20,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q12",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q12-1.webp#575x161)",
            answer: 11,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q13",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q13-passage-1.webp#456x92)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q13-1.webp#362x214)",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q14",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q13-passage-1.webp#456x92)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Will the algorithm converge after this update?",
            options: [
              "YES",
              "NO"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q15",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q15-passage-1.webp#575x159)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q15-1.webp#356x55)",
            options: [
              "It is a circle.",
              "It is a straight line.",
              "It is an ellipse.",
              "It is a parabola."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q16",
            type: "multi",
            marks: 3,
            passage: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q15-passage-1.webp#575x159)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following training data points are certainly not support vectors?",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q16-opt1-1.webp#66x31)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q16-opt2-1.webp#92x30)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q16-opt3-1.webp#77x35)",
              "![Figure](/pyq/mlt-end-term-apr-2025-fn/q16-opt4-1.webp#93x32)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-fn-q17",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q17-passage-1.webp#575x293)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q17-1.webp#370x213)",
            answer: 0.66,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.64 to 0.68."
          },
          {
            id: "mlt-end-term-apr-2025-fn-q18",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q17-passage-1.webp#575x293)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-fn/q18-1.webp#327x83)",
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "mlt-end-term-apr-2025-an",
    title: "MLT End Term · 13 Apr 2025 (AN)",
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
        subjectSlug: "machine-learning-techniques",
        title: "Machine Learning Techniques",
        short: "MLT",
        questions: [
          {
            id: "mlt-end-term-apr-2025-an-q1",
            type: "multi",
            marks: 2,
            prompt: "What is the role of the regularization term in ridge regression?",
            options: [
              "It ensures that the dataset is normally distributed.",
              "It penalizes large coefficients to reduce overfitting.",
              "It forces more coefficients to be exactly zero, performing feature selection.",
              "It increases the variance of the model."
            ],
            answer: [
              1
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q2",
            type: "multi",
            marks: 2,
            prompt: "Which of the following conditions must be satisfied for a decision tree to be pure at a given node?",
            options: [
              "The entropy of the node is maximum.",
              "The information gain at the node is negative.",
              "All samples at a node belong to the same class.",
              "The entropy of the node is 0."
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q3",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q3-1.webp#575x229)",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q3-opt1-1.webp#560x29)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q3-opt2-1.webp#556x26)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q3-opt3-1.webp#555x24)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q3-opt4-1.webp#558x25)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q4",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q4-1.webp#575x229)",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q4-opt1-1.webp#26x31)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q4-opt2-1.webp#26x27)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q4-opt3-1.webp#28x23)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q5",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q5-1.webp#575x174)",
            options: [
              "Kernel PCA with a polynomial kernel of degree 2.",
              "Kernel PCA with a polynomial kernel of degree 3.",
              "Kernel PCA with a polynomial kernel of degree 4.",
              "Standard PCA"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q6",
            type: "mcq",
            marks: 1,
            prompt: "Weak learners used in the ensemble method typically perform slightly better than random guessing.",
            options: [
              "TRUE",
              "FALSE"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q7",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q7-1.webp#575x181)",
            options: [
              "Model 1 will have a higher bias than Model 2.",
              "Model 2 will have a lower variance than Model 1.",
              "Model 1 is more likely to underfit.",
              "Model 1 is more likely to overfit."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q8",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q8-1.webp#575x55)",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q8-opt1-1.webp#428x28)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q8-opt2-1.webp#408x26)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q8-opt3-1.webp#575x30)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q8-opt4-1.webp#575x50)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q8-opt5-1.webp#575x55)"
            ],
            answer: [
              1,
              3,
              4
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q9",
            type: "multi",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q9-1.webp#575x182)",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q9-opt1-1.webp#372x30)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q9-opt2-1.webp#372x34)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q9-opt3-1.webp#379x32)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q9-opt4-1.webp#372x37)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q9-opt5-1.webp#575x34)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q9-opt6-1.webp#575x38)"
            ],
            answer: [
              1,
              4
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q10",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q10-1.webp#575x308)",
            answer: 262.5,
            tolerance: 0.3,
            explanation: "Official answer key accepts any value from 262.2 to 262.8."
          },
          {
            id: "mlt-end-term-apr-2025-an-q11",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q11-1.webp#575x237)",
            answer: 0.151,
            tolerance: 0.003,
            explanation: "Official answer key accepts any value from 0.148 to 0.154."
          },
          {
            id: "mlt-end-term-apr-2025-an-q12",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q12-1.webp#575x269)",
            answer: 4,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q13",
            type: "numerical",
            marks: 4,
            prompt: "The following dataset represents different weather conditions and the corresponding decision on whether a person chooses to play tennis:\n\n![Figure](/pyq/mlt-end-term-apr-2025-an/q13-1.webp#575x483)",
            answer: 0.64,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.61 to 0.67."
          },
          {
            id: "mlt-end-term-apr-2025-an-q14",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q14-1.webp#575x127)",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q15",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q15-1.webp#575x373)",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q16",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-apr-2025-an/q16-passage-1.webp#575x262)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which classifier has the lower training error?",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q16-opt1-1.webp#22x23)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q16-opt2-1.webp#22x23)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-apr-2025-an-q17",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/mlt-end-term-apr-2025-an/q16-passage-1.webp#575x262)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlt-end-term-apr-2025-an/q17-1.webp#312x140)",
            options: [
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q17-opt1-1.webp#196x31)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q17-opt2-1.webp#196x25)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q17-opt3-1.webp#198x25)",
              "![Figure](/pyq/mlt-end-term-apr-2025-an/q17-opt4-1.webp#200x27)"
            ],
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "mlt-end-term-dec-2024-fn",
    title: "MLT End Term · 22 Dec 2024 (FN)",
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
        subjectSlug: "machine-learning-techniques",
        title: "Machine Learning Techniques",
        short: "MLT",
        questions: [
          {
            id: "mlt-end-term-dec-2024-fn-q1",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q1-1.webp#575x134)\n\nNOTE: Enter the answer correct to one decimal place",
            answer: 2.5,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q2",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q2-1.webp#575x309)",
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q3",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q3-1.webp#575x204)",
            answer: 55,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q4",
            type: "numerical",
            marks: 3,
            prompt: "Consider a logistic regression model trained to detect spam emails. Emails containing harmful phishing links are labeled as spam (1), while regular emails are labeled as not spam (0). A good spam detector should correctly identify almost all emails with phishing links. Even a single phishing email incorrectly classified as not spam could expose users to significant risks. However, the detector may classify some regular emails as spam. This trade-off is acceptable to ensure safety.\nTo ensure user safety, if the threshold is set to a low value to prioritize the detection of phishing emails, type 1. If the threshold is set to a high value to minimize false positives (misclassifying regular emails as spam), type 0.",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q5",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q5-1.webp#575x277)",
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q6-1.webp#541x187)",
            options: [
              "3, 5, 1, 4, 2",
              "5, 3, 1, 2, 4",
              "3, 5, 2, 4, 1",
              "5, 3, 1, 4, 2",
              "None of these"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q7",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q7-1.webp#575x238)",
            options: [
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q7-opt1-1.webp#109x41)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q7-opt2-1.webp#32x23)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q7-opt3-1.webp#43x19)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q7-opt4-1.webp#23x27)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q7-opt5-1.webp#112x26)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q8",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q8-1.webp#575x210)",
            options: [
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q8-opt1-1.webp#138x28)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q8-opt2-1.webp#139x28)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q8-opt3-1.webp#123x26)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q8-opt4-1.webp#152x28)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q9",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q9-1.webp#575x215)",
            options: [
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q9-opt1-1.webp#270x78)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q9-opt2-1.webp#254x86)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q9-opt3-1.webp#261x82)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q9-opt4-1.webp#261x82)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q10",
            type: "mcq",
            marks: 2,
            prompt: "If we remove all the non-support vectors from the dataset, what will be the impact on the model using SVM algorithm?",
            options: [
              "Model will overfit.",
              "The model will not be changed.",
              "Model will underfit.",
              "Accuracy of the model will increase."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q11",
            type: "mcq",
            marks: 2,
            prompt: "In each round of AdaBoost, the weight for a particular training observation is decreased from round t to round t + 1 if the observation was:",
            options: [
              "classified incorrectly by the weak learner trained in the round.",
              "classified correctly by the weak learner trained in the round.",
              "classified incorrectly by a majority of the weak learners trained up to the round.",
              "classified correctly by a majority of the weak learners trained up to the round."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q12",
            type: "mcq",
            marks: 1,
            prompt: "Is the following statement true or false?\nFor a fixed size of the training and the test set, increasing the complexity of the model always leads to an increment in the test error.",
            options: [
              "TRUE",
              "FALSE"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q13",
            type: "multi",
            marks: 3,
            prompt: "Consider a supervised ML problem where a model is trained using a training dataset, and its performance is evaluated on both the training and validation datasets. During training, the model’s loss is plotted over time for both the datasets. Assume that the loss L(t) is decreasing as the model learns.\nThe following graph shows two curves, Curve (A) and Curve (B), representing the loss for the training and validation datasets, respectively:\n\n![Figure](/pyq/mlt-end-term-dec-2024-fn/q13-1.webp#575x342)",
            options: [
              "Curve (A) represents the training loss.",
              "Curve (B) represents the training loss.",
              "Curve (A) represents the validation loss.",
              "Curve (B) represents the validation loss."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q14",
            type: "multi",
            marks: 3,
            prompt: "Which of the following options are correct? Select all that apply.",
            options: [
              "Underfitted models generally have less bias and high variance.",
              "A decision tree with the maximum possible length may lead to overfitting.",
              "Weak learners are those whose performance is slightly better than the random classifier.",
              "All the estimators in bagging can be trained parallelly."
            ],
            answer: [
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q15",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q15-passage-1.webp#575x475)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q15-1.webp#346x28)",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q16",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q15-passage-1.webp#575x475)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q16-1.webp#345x30)",
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q17",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q15-passage-1.webp#575x475)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q17-1.webp#274x127)",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q18",
            type: "numerical",
            marks: 0.5,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q18-passage-1.webp#575x646)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q18-1.webp#339x34)",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q19",
            type: "numerical",
            marks: 0.5,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q18-passage-1.webp#575x646)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q19-1.webp#340x28)",
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q20",
            type: "numerical",
            marks: 0.5,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q18-passage-1.webp#575x646)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q20-1.webp#340x29)",
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q21",
            type: "numerical",
            marks: 0.5,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q18-passage-1.webp#575x646)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q21-1.webp#343x30)",
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-fn-q22",
            type: "multi",
            marks: 1,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-fn/q18-passage-1.webp#575x646)",
            prompt: "Which of the following is correct ?",
            options: [
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q22-opt1-1.webp#71x25)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q22-opt2-1.webp#106x26)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q22-opt3-1.webp#61x27)",
              "![Figure](/pyq/mlt-end-term-dec-2024-fn/q22-opt4-1.webp#102x29)"
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
  },
  {
    slug: "mlt-end-term-dec-2024-an",
    title: "MLT End Term · 22 Dec 2024 (AN)",
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
        subjectSlug: "machine-learning-techniques",
        title: "Machine Learning Techniques",
        short: "MLT",
        questions: [
          {
            id: "mlt-end-term-dec-2024-an-q1",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q1-1.webp#575x123)\n\nNOTE: Enter the answer correct to one decimal place",
            answer: 2.5,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q2",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q2-1.webp#575x279)",
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q3",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q3-1.webp#575x199)",
            answer: 52,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q4",
            type: "numerical",
            marks: 3,
            prompt: "Consider a logistic regression model trained to detect spam emails. Emails containing harmful phishing links are labeled as spam (1), while regular emails are labeled as not spam (0). A good spam detector should correctly identify almost all emails with phishing links. Even a single phishing email incorrectly classified as not spam could expose users to significant risks. However, the detector may classify some regular emails as spam. This trade-off is acceptable to ensure safety.\nTo ensure user safety, if the threshold is set to a low value to prioritize the detection of phishing emails, type 1. If the threshold is set to a high value to minimize false positives (misclassifying regular emails as spam), type 0.",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q5",
            type: "multi",
            marks: 3,
            prompt: "Select the correct statements from the following for k-means algorithm:",
            options: [
              "In k-means algorithm, all cluster initializations lead to the same result.",
              "k-means algorithm is sensitive to outliers.",
              "One initialization may converge while another may not.",
              "The initialization of cluster centres may affect the number of iterations k- means takes to converge."
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q6",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q6-1.webp#575x412)",
            options: [
              "Curve (A) represents the training loss.",
              "Curve (B) represents the training loss.",
              "Curve (A) represents the validation loss.",
              "Curve (B) represents the validation loss."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q7",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q7-1.webp#575x223)",
            options: [
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q7-opt1-1.webp#138x32)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q7-opt2-1.webp#157x31)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q7-opt3-1.webp#146x30)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q7-opt4-1.webp#155x30)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q8",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q8-1.webp#575x195)",
            options: [
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q8-opt1-1.webp#259x77)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q8-opt2-1.webp#248x79)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q8-opt3-1.webp#252x77)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q8-opt4-1.webp#240x76)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q9",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-an/q9-passage-1.webp#575x388)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q9-1.webp#319x29)",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q10",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-an/q9-passage-1.webp#575x388)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q10-1.webp#347x29)",
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q11",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-an/q9-passage-1.webp#575x388)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q11-1.webp#506x78)",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q12",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q12-1.webp#575x307)",
            answer: 0.35,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 0.3 to 0.4."
          },
          {
            id: "mlt-end-term-dec-2024-an-q13",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q13-1.webp#575x211)",
            options: [
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q13-opt1-1.webp#113x34)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q13-opt2-1.webp#33x22)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q13-opt3-1.webp#53x22)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q13-opt4-1.webp#35x30)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q13-opt5-1.webp#119x34)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q14",
            type: "mcq",
            marks: 3,
            prompt: "Which of the following options are not correct? Select all that apply.",
            options: [
              "Underfitted models generally have less bias and high variance.",
              "A decision tree with the maximum possible length may lead to overfitting.",
              "Weak learners are those whose performance is slightly better than the random classifier.",
              "All the estimators in bagging can be trained parallelly."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q15",
            type: "mcq",
            marks: 2,
            prompt: "If we remove all the non-support vectors from the dataset, what will be the impact on the model using SVM algorithm?",
            options: [
              "Model will overfit.",
              "The model will not be changed.",
              "Model will underfit.",
              "Accuracy of the model will increase."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q16",
            type: "mcq",
            marks: 2,
            prompt: "In each round of AdaBoost, the weight for a particular training observation is decreased from round t to round t + 1 if the observation was:",
            options: [
              "classified incorrectly by the weak learner trained in the round.",
              "classified correctly by the weak learner trained in the round.",
              "classified incorrectly by a majority of the weak learners trained up to the round.",
              "classified correctly by a majority of the weak learners trained up to the round."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q17",
            type: "mcq",
            marks: 1,
            prompt: "Is the following statement true or false?\nFor a fixed size of the training and the test set, increasing the complexity of the model always leads to an increment in the test error.",
            options: [
              "True",
              "False"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q18",
            type: "numerical",
            marks: 0.5,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-an/q18-passage-1.webp#575x531)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q18-1.webp#316x37)",
            answer: 1,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q19",
            type: "numerical",
            marks: 0.5,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-an/q18-passage-1.webp#575x531)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q19-1.webp#314x32)",
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q20",
            type: "numerical",
            marks: 0.5,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-an/q18-passage-1.webp#575x531)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q20-1.webp#320x30)",
            answer: 0,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q21",
            type: "numerical",
            marks: 0.5,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-an/q18-passage-1.webp#575x531)",
            prompt: "![Figure](/pyq/mlt-end-term-dec-2024-an/q21-1.webp#316x29)",
            answer: 2,
            explanation: ""
          },
          {
            id: "mlt-end-term-dec-2024-an-q22",
            type: "multi",
            marks: 1,
            passage: "![Figure](/pyq/mlt-end-term-dec-2024-an/q18-passage-1.webp#575x531)",
            prompt: "Which of the following is correct ?",
            options: [
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q22-opt1-1.webp#68x31)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q22-opt2-1.webp#101x27)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q22-opt3-1.webp#61x32)",
              "![Figure](/pyq/mlt-end-term-dec-2024-an/q22-opt4-1.webp#102x27)"
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
