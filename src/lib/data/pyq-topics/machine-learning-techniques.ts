import type { PyqTopicTags } from "../../types";

// 142 past-paper questions in 14 topics, 40 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const machineLearningTechniquesTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "pca-and-kernels",
      "title": "PCA, kernel PCA & kernels",
      "summary": "Variance along PCs, reconstruction error, covariance eigenvalues, kernel PCA and valid kernel maps",
      "ids": [
        "mlt-end-term-dec-2024-an-q1",
        "mlt-end-term-dec-2024-fn-q1",
        "mlt-end-term-dec-2024-an-q2",
        "mlt-end-term-dec-2024-fn-q2",
        "mlt-end-term-apr-2025-an-q5",
        "mlt-end-term-apr-2025-fn-q5",
        "mlt-end-term-aug-2025-an-q10",
        "mlt-end-term-aug-2025-fn-q1",
        "mlt-quiz-1-oct-2025-an-q2",
        "mlt-quiz-1-oct-2025-an-q6",
        "mlt-quiz-1-oct-2025-an-q7",
        "mlt-quiz-1-oct-2025-an-q8",
        "mlt-quiz-1-oct-2025-an-q9",
        "mlt-quiz-1-oct-2025-an-q10",
        "mlt-end-term-aug-2025-an-q2",
        "mlt-end-term-aug-2025-fn-q2",
        "mlt-quiz-1-oct-2025-an-q5"
      ]
    },
    {
      "slug": "k-means-clustering",
      "title": "K-means clustering",
      "summary": "Run Lloyd's algorithm, k-means++ and greedy init, convergence and objective properties",
      "ids": [
        "mlt-end-term-dec-2024-an-q5",
        "mlt-end-term-dec-2024-fn-q6",
        "mlt-end-term-apr-2025-an-q4",
        "mlt-end-term-apr-2025-fn-q10",
        "mlt-end-term-aug-2025-an-q4",
        "mlt-end-term-aug-2025-fn-q8",
        "mlt-quiz-1-oct-2025-an-q1",
        "mlt-quiz-1-oct-2025-an-q3",
        "mlt-quiz-1-oct-2025-an-q13",
        "mlt-quiz-1-oct-2025-an-q14"
      ]
    },
    {
      "slug": "mle-map-estimation",
      "title": "MLE, MAP & Bayesian estimation",
      "summary": "MLE and MAP estimates for uniform/exponential data and Beta-prior posterior means",
      "ids": [
        "mlt-end-term-dec-2024-an-q3",
        "mlt-end-term-dec-2024-fn-q3",
        "mlt-end-term-apr-2025-fn-q11",
        "mlt-end-term-aug-2025-an-q13",
        "mlt-end-term-apr-2025-an-q11",
        "mlt-quiz-1-oct-2025-an-q4",
        "mlt-quiz-2-aug-2025-an-q1"
      ]
    },
    {
      "slug": "gmm-and-em",
      "title": "Gaussian mixtures & EM",
      "summary": "GMM likelihood, E-step responsibilities and M-step mean updates",
      "ids": [
        "mlt-end-term-aug-2025-fn-q3",
        "mlt-quiz-1-oct-2025-an-q11",
        "mlt-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "slug": "linear-regression",
      "title": "Linear regression",
      "summary": "Normal equation, gradient descent steps, kernel regression and the probabilistic view of least squares",
      "ids": [
        "mlt-end-term-dec-2024-an-q7",
        "mlt-end-term-dec-2024-fn-q8",
        "mlt-end-term-apr-2025-fn-q3",
        "mlt-end-term-apr-2025-an-q10",
        "mlt-quiz-2-aug-2025-an-q4",
        "mlt-quiz-2-aug-2025-an-q5",
        "mlt-quiz-2-aug-2025-an-q6",
        "mlt-quiz-2-aug-2025-an-q7"
      ]
    },
    {
      "slug": "ridge-and-lasso",
      "title": "Ridge & lasso regularization",
      "summary": "Effect of lambda on weights, matching weights to penalties, computing ridge vs ML solutions",
      "ids": [
        "mlt-end-term-apr-2025-an-q1",
        "mlt-end-term-apr-2025-fn-q8",
        "mlt-end-term-apr-2025-an-q3",
        "mlt-end-term-apr-2025-fn-q2",
        "mlt-quiz-2-aug-2025-an-q2",
        "mlt-end-term-aug-2025-an-q14",
        "mlt-end-term-aug-2025-an-q15",
        "mlt-end-term-aug-2025-fn-q12",
        "mlt-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "slug": "bias-variance-and-validation",
      "title": "Bias-variance, overfitting & validation",
      "summary": "Train vs validation loss, model complexity, LOOCV error and choosing hyperparameters",
      "ids": [
        "mlt-end-term-dec-2024-an-q6",
        "mlt-end-term-dec-2024-fn-q13",
        "mlt-end-term-dec-2024-an-q14",
        "mlt-end-term-dec-2024-fn-q14",
        "mlt-end-term-dec-2024-an-q17",
        "mlt-end-term-dec-2024-fn-q12",
        "mlt-end-term-apr-2025-an-q7",
        "mlt-quiz-2-aug-2025-an-q3",
        "mlt-end-term-dec-2024-an-q12",
        "mlt-end-term-dec-2024-fn-q5"
      ]
    },
    {
      "slug": "knn-and-decision-trees",
      "title": "k-NN & decision trees",
      "summary": "k-NN prediction and LOOCV, entropy, information gain, purity and tree decision boundaries",
      "ids": [
        "mlt-end-term-apr-2025-an-q2",
        "mlt-end-term-apr-2025-fn-q1",
        "mlt-end-term-apr-2025-fn-q9",
        "mlt-quiz-2-aug-2025-an-q9",
        "mlt-quiz-2-aug-2025-an-q10",
        "mlt-quiz-2-aug-2025-an-q11",
        "mlt-quiz-2-aug-2025-an-q14",
        "mlt-quiz-2-aug-2025-an-q15",
        "mlt-end-term-aug-2025-an-q6",
        "mlt-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "slug": "naive-bayes-generative",
      "title": "Naive Bayes & generative models",
      "summary": "Estimate naive Bayes parameters, Laplace smoothing, class probabilities and generative vs discriminative",
      "ids": [
        "mlt-end-term-dec-2024-an-q9",
        "mlt-end-term-dec-2024-an-q10",
        "mlt-end-term-dec-2024-an-q11",
        "mlt-end-term-dec-2024-fn-q15",
        "mlt-end-term-dec-2024-fn-q16",
        "mlt-end-term-dec-2024-fn-q17",
        "mlt-end-term-apr-2025-an-q13",
        "mlt-end-term-apr-2025-fn-q12",
        "mlt-quiz-2-aug-2025-an-q8",
        "mlt-quiz-2-aug-2025-an-q12",
        "mlt-quiz-2-aug-2025-an-q13",
        "mlt-end-term-aug-2025-an-q16",
        "mlt-end-term-aug-2025-an-q17",
        "mlt-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "slug": "logistic-regression",
      "title": "Logistic regression",
      "summary": "Sigmoid probabilities, thresholds, predicted labels and solving for a feature value",
      "ids": [
        "mlt-end-term-dec-2024-an-q4",
        "mlt-end-term-dec-2024-fn-q4",
        "mlt-end-term-apr-2025-an-q14",
        "mlt-end-term-aug-2025-an-q11",
        "mlt-end-term-aug-2025-fn-q14",
        "mlt-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "slug": "perceptron",
      "title": "Perceptron algorithm",
      "summary": "Perceptron weight updates, convergence on a dataset and the mistake bound",
      "ids": [
        "mlt-end-term-dec-2024-an-q8",
        "mlt-end-term-dec-2024-fn-q9",
        "mlt-end-term-apr-2025-an-q9",
        "mlt-end-term-apr-2025-fn-q13",
        "mlt-end-term-apr-2025-fn-q14",
        "mlt-end-term-aug-2025-an-q1",
        "mlt-end-term-aug-2025-an-q8",
        "mlt-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "slug": "support-vector-machines",
      "title": "Support vector machines",
      "summary": "Hard/soft-margin SVM, Lagrangian and dual, slack values, support vectors and margin width",
      "ids": [
        "mlt-end-term-dec-2024-an-q13",
        "mlt-end-term-dec-2024-fn-q7",
        "mlt-end-term-dec-2024-an-q15",
        "mlt-end-term-dec-2024-fn-q10",
        "mlt-end-term-dec-2024-an-q18",
        "mlt-end-term-dec-2024-an-q19",
        "mlt-end-term-dec-2024-an-q20",
        "mlt-end-term-dec-2024-an-q21",
        "mlt-end-term-dec-2024-an-q22",
        "mlt-end-term-dec-2024-fn-q18",
        "mlt-end-term-dec-2024-fn-q19",
        "mlt-end-term-dec-2024-fn-q20",
        "mlt-end-term-dec-2024-fn-q21",
        "mlt-end-term-dec-2024-fn-q22",
        "mlt-end-term-apr-2025-an-q8",
        "mlt-end-term-apr-2025-an-q15",
        "mlt-end-term-apr-2025-fn-q6",
        "mlt-end-term-apr-2025-fn-q15",
        "mlt-end-term-apr-2025-fn-q16",
        "mlt-end-term-aug-2025-an-q3",
        "mlt-end-term-aug-2025-an-q7",
        "mlt-end-term-aug-2025-an-q9",
        "mlt-end-term-aug-2025-fn-q4",
        "mlt-end-term-aug-2025-fn-q7",
        "mlt-end-term-aug-2025-fn-q16",
        "mlt-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "slug": "ensemble-methods",
      "title": "Bagging, boosting & random forests",
      "summary": "AdaBoost weight updates and stump choice, bagging variance and random forest voting",
      "ids": [
        "mlt-end-term-dec-2024-an-q16",
        "mlt-end-term-dec-2024-fn-q11",
        "mlt-end-term-apr-2025-an-q6",
        "mlt-end-term-apr-2025-an-q16",
        "mlt-end-term-apr-2025-an-q17",
        "mlt-end-term-apr-2025-fn-q4",
        "mlt-end-term-apr-2025-fn-q7",
        "mlt-end-term-aug-2025-an-q12",
        "mlt-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "slug": "neural-networks",
      "title": "Neural networks",
      "summary": "Forward pass with ReLU/sigmoid layers, output probability, label and cross-entropy loss",
      "ids": [
        "mlt-end-term-apr-2025-an-q12",
        "mlt-end-term-apr-2025-fn-q17",
        "mlt-end-term-apr-2025-fn-q18",
        "mlt-end-term-aug-2025-an-q5",
        "mlt-end-term-aug-2025-fn-q11"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Variance along the first PC for the dataset {-2u, -u, u, 2u}",
      "ids": [
        "mlt-end-term-dec-2024-an-q1",
        "mlt-end-term-dec-2024-fn-q1"
      ]
    },
    {
      "title": "PCA reconstruction error when keeping the top two components",
      "ids": [
        "mlt-end-term-dec-2024-an-q2",
        "mlt-end-term-dec-2024-fn-q2"
      ]
    },
    {
      "title": "Find the MAP estimate of a parameter with a uniform prior",
      "ids": [
        "mlt-end-term-dec-2024-an-q3",
        "mlt-end-term-dec-2024-fn-q3",
        "mlt-end-term-aug-2025-an-q13"
      ]
    },
    {
      "title": "Posterior mean of a probability with a Beta prior",
      "ids": [
        "mlt-end-term-apr-2025-an-q11",
        "mlt-quiz-1-oct-2025-an-q4"
      ]
    },
    {
      "title": "Logistic regression spam detector: threshold and error trade-off",
      "ids": [
        "mlt-end-term-dec-2024-an-q4",
        "mlt-end-term-dec-2024-fn-q4"
      ]
    },
    {
      "title": "Statements on k-means / Lloyd's algorithm: init, outliers, convergence",
      "ids": [
        "mlt-end-term-dec-2024-an-q5",
        "mlt-end-term-aug-2025-fn-q8",
        "mlt-quiz-1-oct-2025-an-q1"
      ]
    },
    {
      "title": "Run Lloyd's (k-means) algorithm from given initial clusters or centres",
      "ids": [
        "mlt-end-term-apr-2025-an-q4",
        "mlt-end-term-apr-2025-fn-q10",
        "mlt-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "title": "Identify training vs validation loss curves",
      "ids": [
        "mlt-end-term-dec-2024-an-q6",
        "mlt-end-term-dec-2024-fn-q13"
      ]
    },
    {
      "title": "One gradient descent step for linear regression",
      "ids": [
        "mlt-end-term-dec-2024-an-q7",
        "mlt-end-term-dec-2024-fn-q8"
      ]
    },
    {
      "title": "Perceptron: weights after the next two update points",
      "ids": [
        "mlt-end-term-dec-2024-an-q8",
        "mlt-end-term-dec-2024-fn-q9"
      ]
    },
    {
      "title": "Run the perceptron on a small dataset cycling left to right",
      "ids": [
        "mlt-end-term-apr-2025-an-q9",
        "mlt-end-term-apr-2025-fn-q13",
        "mlt-end-term-aug-2025-an-q1"
      ]
    },
    {
      "title": "Naive Bayes passage: find a + b from estimated parameters",
      "ids": [
        "mlt-end-term-dec-2024-an-q9",
        "mlt-end-term-dec-2024-fn-q15"
      ]
    },
    {
      "title": "Naive Bayes passage: find b + d + f from estimated parameters",
      "ids": [
        "mlt-end-term-dec-2024-an-q10",
        "mlt-end-term-dec-2024-fn-q16"
      ]
    },
    {
      "title": "Naive Bayes passage: predict the label for test point [1,0,1]",
      "ids": [
        "mlt-end-term-dec-2024-an-q11",
        "mlt-end-term-dec-2024-fn-q17"
      ]
    },
    {
      "title": "LOOCV error for the model f = beta x on three points",
      "ids": [
        "mlt-end-term-dec-2024-an-q12",
        "mlt-end-term-dec-2024-fn-q5"
      ]
    },
    {
      "title": "Evaluate max over lambda of the Lagrangian at a given point",
      "ids": [
        "mlt-end-term-dec-2024-an-q13",
        "mlt-end-term-dec-2024-fn-q7"
      ]
    },
    {
      "title": "Bias, variance, weak learners and bagging statements",
      "ids": [
        "mlt-end-term-dec-2024-an-q14",
        "mlt-end-term-dec-2024-fn-q14"
      ]
    },
    {
      "title": "Effect of removing non-support vectors on an SVM",
      "ids": [
        "mlt-end-term-dec-2024-an-q15",
        "mlt-end-term-dec-2024-fn-q10"
      ]
    },
    {
      "title": "When does AdaBoost decrease a training point's weight",
      "ids": [
        "mlt-end-term-dec-2024-an-q16",
        "mlt-end-term-dec-2024-fn-q11"
      ]
    },
    {
      "title": "Does more model complexity always raise test error",
      "ids": [
        "mlt-end-term-dec-2024-an-q17",
        "mlt-end-term-dec-2024-fn-q12"
      ]
    },
    {
      "title": "Soft-margin SVM slack value xi_4",
      "ids": [
        "mlt-end-term-dec-2024-an-q18",
        "mlt-end-term-dec-2024-fn-q18"
      ]
    },
    {
      "title": "Soft-margin SVM slack value xi_1",
      "ids": [
        "mlt-end-term-dec-2024-an-q19",
        "mlt-end-term-dec-2024-fn-q19"
      ]
    },
    {
      "title": "Soft-margin SVM slack value xi_2",
      "ids": [
        "mlt-end-term-dec-2024-an-q20",
        "mlt-end-term-dec-2024-fn-q20"
      ]
    },
    {
      "title": "Soft-margin SVM slack value xi_6",
      "ids": [
        "mlt-end-term-dec-2024-an-q21",
        "mlt-end-term-dec-2024-fn-q21"
      ]
    },
    {
      "title": "Soft-margin SVM: range of xi_5 and xi_7",
      "ids": [
        "mlt-end-term-dec-2024-an-q22",
        "mlt-end-term-dec-2024-fn-q22"
      ]
    },
    {
      "title": "Effect of the regularization term / lambda in ridge and lasso",
      "ids": [
        "mlt-end-term-apr-2025-an-q1",
        "mlt-end-term-apr-2025-fn-q8"
      ]
    },
    {
      "title": "Match weight vectors to regularization strength",
      "ids": [
        "mlt-end-term-apr-2025-an-q3",
        "mlt-end-term-apr-2025-fn-q2"
      ]
    },
    {
      "title": "Compute the ML and ridge weight estimates for a given lambda",
      "ids": [
        "mlt-end-term-aug-2025-an-q14",
        "mlt-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "How ridge coefficients change as lambda changes",
      "ids": [
        "mlt-end-term-aug-2025-an-q15",
        "mlt-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "Soft-margin SVM: statements about optimal primal and dual solutions",
      "ids": [
        "mlt-end-term-apr-2025-an-q8",
        "mlt-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Soft-margin SVM formulation: which statements are correct",
      "ids": [
        "mlt-end-term-apr-2025-fn-q6",
        "mlt-end-term-aug-2025-an-q7"
      ]
    },
    {
      "title": "Use the SVM dual solution alpha* to get w, then predict or find margin",
      "ids": [
        "mlt-end-term-apr-2025-an-q15",
        "mlt-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Identify which points are (not) support vectors",
      "ids": [
        "mlt-end-term-apr-2025-fn-q16",
        "mlt-end-term-aug-2025-an-q3"
      ]
    },
    {
      "title": "Run one round of AdaBoost: pick the stump and update weights",
      "ids": [
        "mlt-end-term-apr-2025-an-q17",
        "mlt-end-term-apr-2025-fn-q4",
        "mlt-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Neural network forward pass with ReLU/sigmoid for a given input",
      "ids": [
        "mlt-end-term-apr-2025-an-q12",
        "mlt-end-term-apr-2025-fn-q17",
        "mlt-end-term-aug-2025-an-q5",
        "mlt-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Count the parameters a naive Bayes model must estimate",
      "ids": [
        "mlt-end-term-apr-2025-fn-q12",
        "mlt-end-term-aug-2025-an-q16"
      ]
    },
    {
      "title": "Naive Bayes class-conditional probability with Laplace smoothing",
      "ids": [
        "mlt-end-term-aug-2025-an-q17",
        "mlt-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Logistic regression: predicted probability or label for a point",
      "ids": [
        "mlt-end-term-apr-2025-an-q14",
        "mlt-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Logistic regression: feature value giving a target probability",
      "ids": [
        "mlt-end-term-aug-2025-an-q11",
        "mlt-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "Find the feature map phi for a given polynomial kernel",
      "ids": [
        "mlt-end-term-aug-2025-an-q2",
        "mlt-end-term-aug-2025-fn-q2"
      ]
    }
  ]
};
