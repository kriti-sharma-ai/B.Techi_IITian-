import type { QualifierMock } from "../../types";

// Machine Learning Practice: IIT Madras BS End Term papers (2 papers, 64 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const mlpEndTermPapers: QualifierMock[] = [
  {
    slug: "mlp-end-term-aug-2025-fn",
    title: "MLP End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "machine-learning-practice",
        title: "Machine Learning Practice",
        short: "MLP",
        questions: [
          {
            id: "mlp-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q1-1.webp#575x223)",
            options: [
              "1000",
              "100",
              "99",
              "999"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q2-1.webp#575x104)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q2-opt1-1.webp#98x31)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q2-opt2-1.webp#51x27)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q2-opt3-1.webp#60x28)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q2-opt4-1.webp#101x27)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q3-1.webp#575x76)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q3-opt1-1.webp#575x112)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q3-opt2-1.webp#575x82)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q3-opt3-1.webp#575x116)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q3-opt4-1.webp#575x126)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q3-opt5-1.webp#575x121)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 2,
            prompt: "What is the primary function of the pandas.resample() method for a time series?",
            options: [
              "To convert a DataFrame to a series or vice versa.",
              "To fill in missing values in the time series using various interpolation methods.",
              "To change the frequency of the time series, such as converting daily data to monthly or monthly data to daily.",
              "To perform statistical tests to check for stationarity in the time series."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q5-1.webp#575x185)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q5-opt1-1.webp#71x26)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q5-opt2-1.webp#72x27)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q5-opt3-1.webp#77x25)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q5-opt4-1.webp#374x28)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q6-1.webp#575x262)",
            options: [
              "(i) – resize, (ii) – augment, (iii) – flatten, (iv) – grayscale",
              "(i) – grayscale, (ii) – flatten, (iii) – resize, (iv) – augment",
              "(i) – grayscale, (ii) – augment, (iii) – resize, (iv) – flatten",
              "(i) – grayscale, (ii) – resize, (iii) – flatten, (iv) – augment"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q7",
            type: "mcq",
            marks: 3,
            prompt: "A time series with a clear upward trend and increasing variance over time is identified as non- stationary. Which two preprocessing steps are most likely required?",
            options: [
              "Min-Max scaling and seasonal decomposition",
              "Imputing missing values and differencing",
              "Log transformation and differencing",
              "Standardization and moving average smoothing"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q8",
            type: "mcq",
            marks: 1,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q8-1.webp#527x31)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q8-opt1-1.webp#309x27)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q8-opt2-1.webp#116x26)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q8-opt3-1.webp#105x27)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q8-opt4-1.webp#169x26)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q8-opt5-1.webp#124x26)"
            ],
            answer: 4,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q9",
            type: "mcq",
            marks: 1,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q9-1.webp#575x75)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q9-opt1-1.webp#494x61)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q9-opt2-1.webp#575x62)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q9-opt3-1.webp#575x63)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q9-opt4-1.webp#575x42)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q9-opt5-1.webp#575x42)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q10",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q10-1.webp#575x72)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q10-opt1-1.webp#498x155)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q10-opt2-1.webp#575x115)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q10-opt3-1.webp#575x154)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q10-opt4-1.webp#575x100)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q10-opt5-1.webp#117x26)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q11",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q11-1.webp#575x79)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q11-opt1-1.webp#575x51)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q11-opt2-1.webp#575x47)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q11-opt3-1.webp#575x50)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q11-opt4-1.webp#575x45)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q11-opt5-1.webp#555x30)"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q12",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q12-1.webp#575x146)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q12-opt1-1.webp#575x28)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q12-opt2-1.webp#575x25)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q12-opt3-1.webp#575x25)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q12-opt4-1.webp#575x54)"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q13",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q13-1.webp#575x92)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q13-opt1-1.webp#555x31)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q13-opt2-1.webp#442x27)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q13-opt3-1.webp#530x26)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q13-opt4-1.webp#575x29)"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q14",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q14-1.webp#575x51)",
            options: [
              "It helps determine the optimal number of clusters by plotting the number of clusters vs. inertia (within-cluster sum of squares).",
              "The ”elbow point” is where adding more clusters yields a significantly larger reduction in inertia.",
              "The ”elbow point” is where adding more clusters yields diminishing returns in reducing inertia.",
              "It always produces a clear and unambiguous elbow point.",
              "It can be visualized using a plot of number of clusters vs. distortion score."
            ],
            answer: [
              0,
              2,
              4
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q15",
            type: "multi",
            marks: 1,
            prompt: "How to disable early stopping in SGDRegressor?",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q15-opt1-1.webp#336x31)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q15-opt2-1.webp#309x23)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q15-opt3-1.webp#214x21)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q15-opt4-1.webp#300x22)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q16",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q16-1.webp#575x114)",
            answer: 0.5,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q17",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q17-1.webp#575x277)",
            answer: 11,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q18",
            type: "multi",
            marks: 1,
            passage: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q18-passage-1.webp#575x203)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q18-1.webp#213x108)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q18-opt1-1.webp#375x25)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q18-opt2-1.webp#401x23)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q18-opt3-1.webp#385x28)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q18-opt4-1.webp#333x20)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q19",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q18-passage-1.webp#575x203)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q19-1.webp#256x54)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q19-opt1-1.webp#262x24)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q19-opt2-1.webp#196x24)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q19-opt3-1.webp#237x23)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q19-opt4-1.webp#168x53)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q20",
            type: "multi",
            marks: 2,
            passage: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q18-passage-1.webp#575x203)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q20-1.webp#272x136)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q20-opt1-1.webp#311x55)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q20-opt2-1.webp#251x55)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q20-opt3-1.webp#239x55)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q20-opt4-1.webp#266x83)"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q21",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q21-passage-1.webp#575x256)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q21-1.webp#262x109)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q21-opt1-1.webp#156x28)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q21-opt2-1.webp#169x24)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q21-opt3-1.webp#249x25)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q21-opt4-1.webp#322x27)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q22",
            type: "multi",
            marks: 2,
            passage: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q21-passage-1.webp#575x256)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q22-1.webp#260x104)",
            options: [
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q22-opt1-1.webp#94x24)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q22-opt2-1.webp#42x22)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q22-opt3-1.webp#134x27)",
              "![Figure](/pyq/mlp-end-term-aug-2025-fn/q22-opt4-1.webp#243x27)"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q23",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q21-passage-1.webp#575x256)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q23-1.webp#288x126)",
            answer: 90,
            explanation: ""
          },
          {
            id: "mlp-end-term-aug-2025-fn-q24",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q24-passage-1.webp#575x544)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q24-1.webp#253x82)",
            answer: 0.98,
            tolerance: 0.01,
            explanation: "Official answer key accepts any value from 0.97 to 0.99."
          },
          {
            id: "mlp-end-term-aug-2025-fn-q25",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q24-passage-1.webp#575x544)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q25-1.webp#262x81)",
            answer: 0.78,
            tolerance: 0.01,
            explanation: "Official answer key accepts any value from 0.77 to 0.79."
          },
          {
            id: "mlp-end-term-aug-2025-fn-q26",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q24-passage-1.webp#575x544)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mlp-end-term-aug-2025-fn/q26-1.webp#258x174)",
            answer: 3.95,
            tolerance: 0.15,
            explanation: "Official answer key accepts any value from 3.8 to 4.1."
          }
        ]
      }
    ]
  },
  {
    slug: "mlp-end-term-dec-2024-an",
    title: "MLP End Term · 22 Dec 2024 (AN)",
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
        subjectSlug: "machine-learning-practice",
        title: "Machine Learning Practice",
        short: "MLP",
        questions: [
          {
            id: "mlp-end-term-dec-2024-an-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q1-1.webp#575x184)",
            options: [
              "4",
              "5",
              "3",
              "6"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q2-1.webp#575x165)",
            options: [
              "[5, 6]",
              "[4, 5]",
              "[8, 6]",
              "[2, 3]"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q3",
            type: "mcq",
            marks: 2,
            prompt: "You have loaded a dataset with 1000 samples and 20 features into a Pandas DataFrame. Some samples have missing values for a few features. If you want to remove rows with fewer than 15 non-null values, what method would you use?",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q3-opt1-1.webp#167x23)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q3-opt2-1.webp#166x26)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q3-opt3-1.webp#157x28)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q3-opt4-1.webp#176x24)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q3-opt5-1.webp#167x25)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q4",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q4-1.webp#483x149)",
            options: [
              "1.25",
              "2.56",
              "4.25",
              "1.12",
              "Given code will return an error."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q5",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q5-1.webp#575x231)",
            options: [
              "It adjusts the learning rate based on the number of iterations.",
              "It defines the initial value for the learning rate and keeps it constant throughout training.",
              "It determines the maximum step size allowed during training.",
              "It specifies the fraction of the dataset used for each step in the stochastic gradient descent."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q6",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q6-1.webp#547x52)",
            options: [
              "It determines the number of features to select for each base model.",
              "It controls the number of base learners (models) to train in the ensemble.",
              "It decides the maximum number of samples to use in each base model.",
              "It ensures randomness in the sample selection for each base model."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q7",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q7-1.webp#556x256)",
            options: [
              "The percentage of training samples used to train each base estimator.",
              "The number of base estimators trained on subsets of the training data.",
              "The maximum number of features used by each base estimator during training.",
              "The total number of samples used to train all base estimators combined."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q8",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q8-1.webp#557x52)",
            options: [
              "It increases the variance among individual trees.",
              "It decreases the variance among individual trees.",
              "It reduces the number of samples used for training each tree.",
              "It reduces overfitting by restricting tree depth."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q9",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q9-1.webp#575x416)",
            options: [
              "The total amount spent by each customer.",
              "The cluster assignments indicating which group each customer belongs to.",
              "The number of items purchased by each customer.",
              "The centroid coordinates of the clusters formed."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q10",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q10-1.webp#575x419)",
            options: [
              "It increases the model’s capacity to fit the training data closely, potentially causing overfitting.",
              "It adds a stronger regularization term to the loss function, reducing the model’s complexity and helping prevent overfitting.",
              "It makes the model more prone to overfitting by increasing its sensitivity to noise in the training data.",
              "It directly affects the learning rate, controlling how fast the model converges during training."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q11",
            type: "mcq",
            marks: 2,
            prompt: "Consider the following two statements and select the correct answer:\n1. Statement 1: The multinomial Naive Bayes classifier is suitable for classification with discrete features\n2. Statement 2: Two dependent features do not impact GaussianNB performance because internally it calculates the conditional probability independently for each feature.",
            options: [
              "Both statements are True",
              "Only statement 1 is True",
              "Only statement 2 is True",
              "Both statements are False"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q12",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q12-1.webp#575x366)",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q12-opt1-1.webp#342x26)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q12-opt2-1.webp#575x44)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q12-opt3-1.webp#333x30)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q12-opt4-1.webp#321x33)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q13",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q13-1.webp#575x49)",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q13-opt1-1.webp#74x23)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q13-opt2-1.webp#31x21)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q13-opt3-1.webp#186x25)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q13-opt4-1.webp#177x22)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q14",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q14-1.webp#575x301)",
            options: [
              "s1 = s2",
              "s1 < s2",
              "s1 > s2"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q15",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q15-1.webp#530x232)",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q15-opt1-1.webp#95x98)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q15-opt2-1.webp#116x76)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q15-opt3-1.webp#61x98)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q15-opt4-1.webp#121x98)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q15-opt5-1.webp#83x98)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q16",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q16-1.webp#575x226)",
            options: [
              "[0]",
              "[1]",
              "[0.5]",
              "[2]"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q17",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q17-1.webp#575x399)",
            options: [
              "Output score is likely to increase.",
              "Output score is likely to decrease.",
              "Output score may increase or decrease depending on other factors.",
              "Output score will remain the same."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q18",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q18-1.webp#474x249)",
            options: [
              "Outputs the number of iterations and the final silhouette score of the clusters.",
              "Outputs the cluster labels for each data point and the maximum distance between clusters.",
              "Outputs the coordinates of the cluster centroids and the number of points in each cluster.",
              "Outputs the coordinates of the cluster centroids and the sum of squared distances of samples to their closest cluster center."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q19",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q19-1.webp#425x138)",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q19-opt1-1.webp#387x33)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q19-opt2-1.webp#325x32)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q19-opt3-1.webp#575x25)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q19-opt4-1.webp#541x36)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q20",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q20-1.webp#575x226)",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q20-opt1-1.webp#575x46)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q20-opt2-1.webp#497x31)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q20-opt3-1.webp#575x49)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q20-opt4-1.webp#517x29)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q21",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q21-1.webp#575x163)",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q21-opt1-1.webp#533x51)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q21-opt2-1.webp#346x71)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q21-opt3-1.webp#550x92)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q21-opt4-1.webp#501x88)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q22",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q22-1.webp#575x258)",
            options: [
              "8",
              "16",
              "32",
              "64"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q23",
            type: "multi",
            marks: 2,
            prompt: "Which of the following are techniques for dimensionality reduction?",
            options: [
              "PCA (Principal Component Analysis)",
              "StandardScaler",
              "Lasso Regression",
              "t-SNE (t-distributed Stochastic Neighbor Embedding)"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q24",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q24-1.webp#546x46)",
            options: [
              "When data is streaming or generated incrementally.",
              "When the dataset is small.",
              "When the dataset cannot fit in memory.",
              "When the training labels are noisy."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q25",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q25-1.webp#575x367)",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q25-opt1-1.webp#575x50)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q25-opt2-1.webp#532x28)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q25-opt3-1.webp#575x46)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q25-opt4-1.webp#575x29)"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q26",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q26-1.webp#575x274)",
            options: [
              "[1, 2, 3, 6, 7]",
              "[1, 2, 3, 4, 5, 7]",
              "[2, 4, 6, 8]",
              "[1, 2, 3, 6, 8, 9]",
              "[2, 5, 8]",
              "[4, 5, 6, 7, 8, 9]"
            ],
            answer: [
              1,
              3,
              5
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q27",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q27-1.webp#575x123)",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q27-opt1-1.webp#441x31)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q27-opt2-1.webp#392x28)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q27-opt3-1.webp#462x34)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q27-opt4-1.webp#546x28)"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q28",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q28-1.webp#575x139)",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q28-opt1-1.webp#495x29)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q28-opt2-1.webp#557x29)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q28-opt3-1.webp#520x29)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q28-opt4-1.webp#575x46)"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q29",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q29-1.webp#550x56)",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q29-opt1-1.webp#305x32)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q29-opt2-1.webp#274x30)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q29-opt3-1.webp#387x33)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q29-opt4-1.webp#148x27)"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q30",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q30-1.webp#575x133)",
            options: [
              "The neural network contains 3 hidden layers with 5 neurons in each hidden layer",
              "The neural network contains 5 hidden layers with 3 neurons in each hidden layer",
              "The neural network contains 2 hidden layers with 3 neurons in the second hidden layer",
              "The neural network contains 2 hidden layers with 5 neurons in the first hidden layer",
              "None of the given options are correct"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q31",
            type: "multi",
            marks: 4,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q31-1.webp#575x314)",
            options: [
              "The number of samples at node N is 15. If split, the left child will have 10 samples, and the right child will have 5 samples.",
              "The number of samples at node N is 8. If split, the left child will have 4 samples, and the right child will have 4 samples.",
              "The number of samples at node N is 9. If split, the left child will have 2 samples, and the right child will have 7 samples.",
              "The number of samples at node N is 14. If split, the left child will have 4 samples, and the right child will have 10 samples.",
              "The number of samples at node N is 6. If split, the left child will have 3 samples, and the right child will have 3 samples."
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q32",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q32-1.webp#575x392)",
            answer: 4,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q33",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q33-1.webp#575x530)",
            answer: 0.6,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q34",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q34-1.webp#535x229)",
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q35",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mlp-end-term-dec-2024-an/q35-passage-1.webp#575x235)\n\nBased on the above data, answer the given subquestions",
            prompt: "Which of the following commands will return the total sales across all regions?",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q35-opt1-1.webp#164x25)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q35-opt2-1.webp#176x29)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q35-opt3-1.webp#248x31)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q35-opt4-1.webp#196x25)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q36",
            type: "multi",
            marks: 2,
            passage: "![Figure](/pyq/mlp-end-term-dec-2024-an/q35-passage-1.webp#575x235)\n\nBased on the above data, answer the given subquestions",
            prompt: "Which of the following commands will return the names of employees in the ”North” region?",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q36-opt1-1.webp#333x25)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q36-opt2-1.webp#373x25)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q36-opt3-1.webp#352x25)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q36-opt4-1.webp#335x27)"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q37",
            type: "multi",
            marks: 3,
            passage: "![Figure](/pyq/mlp-end-term-dec-2024-an/q35-passage-1.webp#575x235)\n\nBased on the above data, answer the given subquestions",
            prompt: "Which of the following methods can be used to find the employee(s) with the highest sales?",
            options: [
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q37-opt1-1.webp#343x26)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q37-opt2-1.webp#296x25)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q37-opt3-1.webp#268x24)",
              "![Figure](/pyq/mlp-end-term-dec-2024-an/q37-opt4-1.webp#222x26)"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mlp-end-term-dec-2024-an-q38",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mlp-end-term-dec-2024-an/q35-passage-1.webp#575x235)\n\nBased on the above data, answer the given subquestions",
            prompt: "![Figure](/pyq/mlp-end-term-dec-2024-an/q38-1.webp#419x58)",
            options: [
              "The total sales for each region.",
              "The average sales for each month.",
              "The average sales for each region.",
              "None of these."
            ],
            answer: 2,
            explanation: ""
          }
        ]
      }
    ]
  }
];
