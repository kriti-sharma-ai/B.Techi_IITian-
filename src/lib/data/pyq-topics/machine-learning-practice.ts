import type { PyqTopicTags } from "../../types";

// 90 past-paper questions in 11 topics, 18 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const machineLearningPracticeTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "pandas-data-handling",
      "title": "Pandas data loading & cleaning",
      "summary": "Select rows and columns, drop missing values, group by and add columns in a DataFrame",
      "ids": [
        "mlp-end-term-dec-2024-an-q3",
        "mlp-end-term-dec-2024-an-q35",
        "mlp-end-term-dec-2024-an-q36",
        "mlp-end-term-dec-2024-an-q37",
        "mlp-end-term-dec-2024-an-q38",
        "mlp-end-term-aug-2025-an-q18",
        "mlp-end-term-aug-2025-an-q19",
        "mlp-end-term-aug-2025-an-q20",
        "mlp-end-term-aug-2025-fn-q18",
        "mlp-end-term-aug-2025-fn-q19",
        "mlp-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "slug": "preprocessing-pipelines",
      "title": "Preprocessing, features & pipelines",
      "summary": "Encoders, scalers, polynomial features, feature selection and sklearn pipelines with caching",
      "ids": [
        "mlp-end-term-dec-2024-an-q1",
        "mlp-end-term-dec-2024-an-q2",
        "mlp-end-term-dec-2024-an-q12",
        "mlp-end-term-dec-2024-an-q15",
        "mlp-end-term-dec-2024-an-q23",
        "mlp-end-term-dec-2024-an-q32",
        "mlp-end-term-aug-2025-an-q11",
        "mlp-end-term-aug-2025-an-q12",
        "mlp-end-term-aug-2025-fn-q10",
        "mlp-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "slug": "evaluation-metrics",
      "title": "Model evaluation metrics",
      "summary": "Compute MAE, R2, accuracy, confusion matrix, recall and choose metrics for imbalanced data",
      "ids": [
        "mlp-end-term-dec-2024-an-q4",
        "mlp-end-term-dec-2024-an-q13",
        "mlp-end-term-dec-2024-an-q33",
        "mlp-end-term-aug-2025-an-q3",
        "mlp-end-term-aug-2025-an-q14",
        "mlp-end-term-aug-2025-an-q16",
        "mlp-end-term-aug-2025-fn-q5",
        "mlp-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "slug": "cross-validation-tuning",
      "title": "Cross-validation & hyperparameter search",
      "summary": "KFold, LOOCV, StratifiedKFold, GridSearchCV and RandomizedSearchCV: models fit and valid params",
      "ids": [
        "mlp-end-term-dec-2024-an-q21",
        "mlp-end-term-dec-2024-an-q25",
        "mlp-end-term-dec-2024-an-q26",
        "mlp-end-term-dec-2024-an-q28",
        "mlp-end-term-aug-2025-an-q1",
        "mlp-end-term-aug-2025-an-q21",
        "mlp-end-term-aug-2025-an-q22",
        "mlp-end-term-aug-2025-an-q23",
        "mlp-end-term-aug-2025-fn-q1",
        "mlp-end-term-aug-2025-fn-q21",
        "mlp-end-term-aug-2025-fn-q22",
        "mlp-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "slug": "linear-regression-sgd",
      "title": "Linear regression & SGD",
      "summary": "LinearRegression scores, SGDRegressor learning rate, loss, early stopping and partial_fit",
      "ids": [
        "mlp-end-term-dec-2024-an-q5",
        "mlp-end-term-dec-2024-an-q14",
        "mlp-end-term-dec-2024-an-q24",
        "mlp-end-term-aug-2025-an-q7",
        "mlp-end-term-aug-2025-an-q13",
        "mlp-end-term-aug-2025-fn-q12",
        "mlp-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "slug": "linear-classifiers",
      "title": "Classifiers: logistic, NB, KNN & more",
      "summary": "Perceptron, logistic regression solvers, SGDClassifier, Naive Bayes, KNN and class weights",
      "ids": [
        "mlp-end-term-dec-2024-an-q11",
        "mlp-end-term-dec-2024-an-q27",
        "mlp-end-term-dec-2024-an-q34",
        "mlp-end-term-aug-2025-an-q2",
        "mlp-end-term-aug-2025-an-q8",
        "mlp-end-term-aug-2025-fn-q2",
        "mlp-end-term-aug-2025-fn-q8",
        "mlp-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "slug": "trees-ensembles",
      "title": "Decision trees & ensembles",
      "summary": "Decision tree depth, leaves and splits, bagging, random forest and boosting parameters",
      "ids": [
        "mlp-end-term-dec-2024-an-q6",
        "mlp-end-term-dec-2024-an-q7",
        "mlp-end-term-dec-2024-an-q8",
        "mlp-end-term-dec-2024-an-q16",
        "mlp-end-term-dec-2024-an-q17",
        "mlp-end-term-dec-2024-an-q20",
        "mlp-end-term-dec-2024-an-q22",
        "mlp-end-term-dec-2024-an-q31"
      ]
    },
    {
      "slug": "kmeans-clustering",
      "title": "K-means clustering",
      "summary": "KMeans code, labels, centroids, inertia, errors, tuning and the elbow method",
      "ids": [
        "mlp-end-term-dec-2024-an-q9",
        "mlp-end-term-dec-2024-an-q18",
        "mlp-end-term-dec-2024-an-q19",
        "mlp-end-term-dec-2024-an-q29",
        "mlp-end-term-aug-2025-an-q9",
        "mlp-end-term-aug-2025-an-q15",
        "mlp-end-term-aug-2025-fn-q9",
        "mlp-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "slug": "neural-networks",
      "title": "Neural networks (MLP)",
      "summary": "MLPClassifier and MLPRegressor setup, hidden layers and the alpha regularization",
      "ids": [
        "mlp-end-term-dec-2024-an-q10",
        "mlp-end-term-dec-2024-an-q30",
        "mlp-end-term-aug-2025-an-q5",
        "mlp-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "slug": "text-image-time-series",
      "title": "Text, image & time-series data",
      "summary": "Count/TF-IDF vectorizers, image preprocessing and time-series stationarity, decomposition",
      "ids": [
        "mlp-end-term-aug-2025-an-q4",
        "mlp-end-term-aug-2025-an-q6",
        "mlp-end-term-aug-2025-an-q10",
        "mlp-end-term-aug-2025-an-q17",
        "mlp-end-term-aug-2025-fn-q4",
        "mlp-end-term-aug-2025-fn-q6",
        "mlp-end-term-aug-2025-fn-q7",
        "mlp-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "slug": "recommender-systems",
      "title": "Recommender systems",
      "summary": "Compute similarity values and predict ratings with user-user collaborative filtering",
      "ids": [
        "mlp-end-term-aug-2025-an-q24",
        "mlp-end-term-aug-2025-an-q25",
        "mlp-end-term-aug-2025-an-q26",
        "mlp-end-term-aug-2025-fn-q24",
        "mlp-end-term-aug-2025-fn-q25",
        "mlp-end-term-aug-2025-fn-q26"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Compute the mean absolute error for given y_true and y_pred",
      "ids": [
        "mlp-end-term-dec-2024-an-q4",
        "mlp-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Count how many models cross_val_score trains for a given CV splitter",
      "ids": [
        "mlp-end-term-aug-2025-an-q1",
        "mlp-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "Pick the correct MLPClassifier code for given hyperparameters",
      "ids": [
        "mlp-end-term-aug-2025-an-q5",
        "mlp-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Pick the correct KMeans code for given clusters, init and n_init",
      "ids": [
        "mlp-end-term-aug-2025-an-q9",
        "mlp-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Pick the correct pipeline: SimpleImputer followed by a scaler",
      "ids": [
        "mlp-end-term-aug-2025-an-q11",
        "mlp-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Benefits of caching with the memory parameter in a Pipeline",
      "ids": [
        "mlp-end-term-aug-2025-an-q12",
        "mlp-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Explain how the learning_rate setting behaves in SGDRegressor",
      "ids": [
        "mlp-end-term-dec-2024-an-q5",
        "mlp-end-term-aug-2025-an-q13",
        "mlp-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "True statements about the elbow method in KMeans",
      "ids": [
        "mlp-end-term-aug-2025-an-q15",
        "mlp-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Build the document-term matrix from a text vectorizer and count its values",
      "ids": [
        "mlp-end-term-aug-2025-an-q17",
        "mlp-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Pandas: select rows by a condition on columns",
      "ids": [
        "mlp-end-term-aug-2025-an-q18",
        "mlp-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "Pandas: drop rows with missing values in given columns",
      "ids": [
        "mlp-end-term-dec-2024-an-q3",
        "mlp-end-term-aug-2025-an-q19",
        "mlp-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "title": "Pandas: create a new column from two columns with missing values",
      "ids": [
        "mlp-end-term-aug-2025-an-q20",
        "mlp-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Grid search: choose valid loss/criterion values so all fits run",
      "ids": [
        "mlp-end-term-aug-2025-an-q21",
        "mlp-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Choose valid scoring metric strings for cross-validation or grid search",
      "ids": [
        "mlp-end-term-dec-2024-an-q13",
        "mlp-end-term-aug-2025-an-q22",
        "mlp-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "title": "Count how many models GridSearchCV fits",
      "ids": [
        "mlp-end-term-aug-2025-an-q23",
        "mlp-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "title": "Compute the values X and Y in the recommender data table",
      "ids": [
        "mlp-end-term-aug-2025-an-q24",
        "mlp-end-term-aug-2025-an-q25",
        "mlp-end-term-aug-2025-fn-q24",
        "mlp-end-term-aug-2025-fn-q25"
      ]
    },
    {
      "title": "Predict a missing rating with user-user collaborative filtering",
      "ids": [
        "mlp-end-term-aug-2025-an-q26",
        "mlp-end-term-aug-2025-fn-q26"
      ]
    },
    {
      "title": "Pick the right LogisticRegression solver for the setting",
      "ids": [
        "mlp-end-term-aug-2025-an-q8",
        "mlp-end-term-aug-2025-fn-q2"
      ]
    }
  ]
};
