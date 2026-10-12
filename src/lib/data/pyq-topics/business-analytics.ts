import type { PyqTopicTags } from "../../types";

// 159 past-paper questions in 9 topics, 36 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const businessAnalyticsTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "probability-and-distributions",
      "title": "Probability, Bayes & distributions",
      "summary": "Conditional probability, Bayes' theorem, total probability and properties of common distributions",
      "ids": [
        "ba-end-term-dec-2024-an-q1",
        "ba-end-term-apr-2025-fn-q1",
        "ba-end-term-apr-2025-fn-q2",
        "ba-end-term-apr-2025-fn-q27",
        "ba-end-term-apr-2025-fn-q28",
        "ba-end-term-aug-2025-fn-q11",
        "ba-quiz-1-oct-2025-an-q2",
        "ba-quiz-1-oct-2025-an-q3",
        "ba-quiz-1-oct-2025-an-q4",
        "ba-quiz-1-oct-2025-an-q5"
      ]
    },
    {
      "slug": "chi-square-goodness-of-fit",
      "title": "Chi-square goodness-of-fit tests",
      "summary": "Fit normal, Poisson or uniform data: bins, expected frequencies, test statistic, df and conclusion",
      "ids": [
        "ba-end-term-dec-2024-an-q9",
        "ba-end-term-dec-2024-an-q10",
        "ba-end-term-apr-2025-fn-q3",
        "ba-end-term-apr-2025-fn-q19",
        "ba-end-term-apr-2025-fn-q20",
        "ba-end-term-apr-2025-fn-q21",
        "ba-end-term-aug-2025-an-q6",
        "ba-end-term-aug-2025-an-q7",
        "ba-end-term-aug-2025-an-q8",
        "ba-end-term-aug-2025-an-q9",
        "ba-end-term-aug-2025-fn-q9",
        "ba-end-term-aug-2025-fn-q12",
        "ba-end-term-aug-2025-fn-q13",
        "ba-end-term-aug-2025-fn-q14",
        "ba-end-term-aug-2025-fn-q15",
        "ba-end-term-aug-2025-fn-q16",
        "ba-quiz-1-oct-2025-an-q9",
        "ba-quiz-1-oct-2025-an-q10",
        "ba-quiz-1-oct-2025-an-q11",
        "ba-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "slug": "chi-square-independence",
      "title": "Chi-square test of independence",
      "summary": "Expected counts, test statistic and degrees of freedom for contingency tables",
      "ids": [
        "ba-end-term-dec-2024-an-q6",
        "ba-end-term-dec-2024-an-q7",
        "ba-end-term-dec-2024-an-q8",
        "ba-quiz-1-oct-2025-an-q13",
        "ba-quiz-1-oct-2025-an-q14",
        "ba-quiz-1-oct-2025-an-q15"
      ]
    },
    {
      "slug": "linear-regression",
      "title": "Linear regression (SLR & MLR)",
      "summary": "R-square, adjusted R-square, ANOVA table, F-statistic, prediction, VIF and multicollinearity",
      "ids": [
        "ba-end-term-dec-2024-an-q11",
        "ba-end-term-dec-2024-an-q12",
        "ba-end-term-apr-2025-fn-q14",
        "ba-end-term-apr-2025-fn-q15",
        "ba-end-term-apr-2025-fn-q16",
        "ba-quiz-2-aug-2025-an-q1",
        "ba-quiz-2-aug-2025-an-q2",
        "ba-quiz-2-aug-2025-an-q3",
        "ba-quiz-2-aug-2025-an-q4",
        "ba-quiz-2-aug-2025-an-q5",
        "ba-quiz-2-aug-2025-an-q6",
        "ba-quiz-2-aug-2025-an-q7",
        "ba-quiz-2-aug-2025-an-q8",
        "ba-quiz-2-aug-2025-an-q9",
        "ba-end-term-aug-2025-an-q1",
        "ba-end-term-aug-2025-an-q10",
        "ba-end-term-aug-2025-an-q11",
        "ba-end-term-aug-2025-an-q12",
        "ba-end-term-aug-2025-fn-q6",
        "ba-end-term-aug-2025-fn-q7",
        "ba-end-term-aug-2025-fn-q8",
        "ba-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "slug": "logistic-regression-classification",
      "title": "Logistic regression & classification",
      "summary": "Confusion matrix counts, accuracy, precision, recall, specificity and logistic coefficient meaning",
      "ids": [
        "ba-end-term-dec-2024-an-q13",
        "ba-end-term-dec-2024-an-q14",
        "ba-end-term-dec-2024-an-q23",
        "ba-end-term-dec-2024-an-q24",
        "ba-end-term-dec-2024-an-q25",
        "ba-end-term-dec-2024-an-q26",
        "ba-end-term-dec-2024-an-q27",
        "ba-end-term-apr-2025-fn-q29",
        "ba-end-term-apr-2025-fn-q30",
        "ba-end-term-apr-2025-fn-q31",
        "ba-end-term-apr-2025-fn-q32",
        "ba-end-term-apr-2025-fn-q33",
        "ba-quiz-2-aug-2025-an-q10",
        "ba-quiz-2-aug-2025-an-q11",
        "ba-quiz-2-aug-2025-an-q12",
        "ba-quiz-2-aug-2025-an-q13",
        "ba-quiz-2-aug-2025-an-q14",
        "ba-quiz-2-aug-2025-an-q15",
        "ba-quiz-2-aug-2025-an-q16",
        "ba-end-term-aug-2025-an-q2",
        "ba-end-term-aug-2025-an-q3",
        "ba-end-term-aug-2025-an-q4",
        "ba-end-term-aug-2025-an-q5",
        "ba-end-term-aug-2025-an-q18",
        "ba-end-term-aug-2025-an-q19",
        "ba-end-term-aug-2025-an-q20",
        "ba-end-term-aug-2025-an-q21",
        "ba-end-term-aug-2025-fn-q17",
        "ba-end-term-aug-2025-fn-q18",
        "ba-end-term-aug-2025-fn-q19",
        "ba-end-term-aug-2025-fn-q20",
        "ba-end-term-aug-2025-fn-q21",
        "ba-end-term-aug-2025-fn-q22",
        "ba-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "slug": "demand-response-pricing",
      "title": "Demand response curves & pricing",
      "summary": "Linear and constant-elasticity demand curves, elasticity, market size, satiating and optimal price",
      "ids": [
        "ba-end-term-apr-2025-fn-q9",
        "ba-end-term-apr-2025-fn-q10",
        "ba-end-term-apr-2025-fn-q11",
        "ba-end-term-apr-2025-fn-q12",
        "ba-end-term-apr-2025-fn-q13",
        "ba-end-term-apr-2025-fn-q22",
        "ba-end-term-apr-2025-fn-q23",
        "ba-quiz-2-aug-2025-an-q17",
        "ba-quiz-2-aug-2025-an-q18",
        "ba-quiz-1-oct-2025-an-q1",
        "ba-quiz-1-oct-2025-an-q6",
        "ba-quiz-1-oct-2025-an-q7",
        "ba-quiz-1-oct-2025-an-q8"
      ]
    },
    {
      "slug": "linear-programming-duality",
      "title": "Linear programming & duality",
      "summary": "Standard form, count of primal/dual variables, objective value, zero dual values and slack capacity",
      "ids": [
        "ba-end-term-dec-2024-an-q2",
        "ba-end-term-dec-2024-an-q3",
        "ba-end-term-dec-2024-an-q4",
        "ba-end-term-dec-2024-an-q5",
        "ba-end-term-aug-2025-an-q13",
        "ba-end-term-aug-2025-an-q14",
        "ba-end-term-aug-2025-an-q15",
        "ba-end-term-aug-2025-an-q16",
        "ba-end-term-aug-2025-an-q17",
        "ba-end-term-aug-2025-fn-q1",
        "ba-end-term-aug-2025-fn-q2",
        "ba-end-term-aug-2025-fn-q3",
        "ba-end-term-aug-2025-fn-q4",
        "ba-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "slug": "data-envelopment-analysis",
      "title": "Data envelopment analysis (DEA)",
      "summary": "DEA LP formulation, efficient frontier, reference units and output targets from dual values",
      "ids": [
        "ba-end-term-dec-2024-an-q15",
        "ba-end-term-dec-2024-an-q16",
        "ba-end-term-dec-2024-an-q17",
        "ba-end-term-dec-2024-an-q18",
        "ba-end-term-dec-2024-an-q19",
        "ba-end-term-dec-2024-an-q20",
        "ba-end-term-dec-2024-an-q21",
        "ba-end-term-dec-2024-an-q22",
        "ba-end-term-apr-2025-fn-q7",
        "ba-end-term-apr-2025-fn-q8",
        "ba-end-term-apr-2025-fn-q17",
        "ba-end-term-apr-2025-fn-q18",
        "ba-end-term-apr-2025-fn-q24",
        "ba-end-term-apr-2025-fn-q25",
        "ba-end-term-apr-2025-fn-q26",
        "ba-end-term-aug-2025-an-q22",
        "ba-end-term-aug-2025-an-q23",
        "ba-end-term-aug-2025-an-q24",
        "ba-end-term-aug-2025-an-q25",
        "ba-end-term-aug-2025-an-q26",
        "ba-end-term-aug-2025-fn-q24",
        "ba-end-term-aug-2025-fn-q25",
        "ba-end-term-aug-2025-fn-q26",
        "ba-end-term-aug-2025-fn-q27",
        "ba-end-term-aug-2025-fn-q28"
      ]
    },
    {
      "slug": "conjoint-analysis",
      "title": "Conjoint analysis",
      "summary": "Part worths, attribute importance weights, pairwise preferences and choice of approach",
      "ids": [
        "ba-end-term-dec-2024-an-q28",
        "ba-end-term-dec-2024-an-q29",
        "ba-end-term-dec-2024-an-q30",
        "ba-end-term-dec-2024-an-q31",
        "ba-end-term-apr-2025-fn-q4",
        "ba-end-term-apr-2025-fn-q5",
        "ba-end-term-apr-2025-fn-q6",
        "ba-end-term-aug-2025-an-q27",
        "ba-end-term-aug-2025-an-q28",
        "ba-end-term-aug-2025-an-q29",
        "ba-end-term-aug-2025-an-q30",
        "ba-end-term-aug-2025-fn-q29",
        "ba-end-term-aug-2025-fn-q30",
        "ba-end-term-aug-2025-fn-q31",
        "ba-end-term-aug-2025-fn-q32"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Find total probability of an accident for a new policyholder",
      "ids": [
        "ba-end-term-apr-2025-fn-q27",
        "ba-quiz-1-oct-2025-an-q3"
      ]
    },
    {
      "title": "Use Bayes' theorem to find the posterior probability of a class",
      "ids": [
        "ba-end-term-apr-2025-fn-q28",
        "ba-end-term-aug-2025-fn-q11",
        "ba-quiz-1-oct-2025-an-q4"
      ]
    },
    {
      "title": "Pick which distributions are (not) symmetric",
      "ids": [
        "ba-end-term-apr-2025-fn-q1",
        "ba-quiz-1-oct-2025-an-q2"
      ]
    },
    {
      "title": "Find the mean from a frequency table for a goodness-of-fit test",
      "ids": [
        "ba-end-term-aug-2025-an-q6",
        "ba-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "Compute the chi-square goodness-of-fit test statistic",
      "ids": [
        "ba-end-term-dec-2024-an-q9",
        "ba-end-term-apr-2025-fn-q20",
        "ba-end-term-aug-2025-fn-q15",
        "ba-quiz-1-oct-2025-an-q11"
      ]
    },
    {
      "title": "Find degrees of freedom for a chi-square goodness-of-fit test",
      "ids": [
        "ba-end-term-dec-2024-an-q10",
        "ba-end-term-apr-2025-fn-q21",
        "ba-end-term-aug-2025-an-q7",
        "ba-end-term-aug-2025-fn-q14",
        "ba-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "title": "Find the expected frequency in a bin for a goodness-of-fit test",
      "ids": [
        "ba-end-term-aug-2025-an-q8",
        "ba-quiz-1-oct-2025-an-q10"
      ]
    },
    {
      "title": "Decide reject / do not reject H0 from chi-square table or p-value",
      "ids": [
        "ba-end-term-apr-2025-fn-q3",
        "ba-end-term-aug-2025-an-q9",
        "ba-end-term-aug-2025-fn-q9",
        "ba-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Find expected frequency in a cell for a chi-square independence test",
      "ids": [
        "ba-end-term-dec-2024-an-q6",
        "ba-end-term-dec-2024-an-q7",
        "ba-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "title": "Compute the chi-square test statistic for independence",
      "ids": [
        "ba-end-term-dec-2024-an-q8",
        "ba-quiz-1-oct-2025-an-q14"
      ]
    },
    {
      "title": "Find R-square of a simple regression from the correlation",
      "ids": [
        "ba-end-term-dec-2024-an-q11",
        "ba-end-term-apr-2025-fn-q14"
      ]
    },
    {
      "title": "Find adjusted R-square of a simple regression from the correlation",
      "ids": [
        "ba-end-term-apr-2025-fn-q15",
        "ba-end-term-aug-2025-an-q11"
      ]
    },
    {
      "title": "Find VIF or % increase in standard error from predictor correlation",
      "ids": [
        "ba-end-term-dec-2024-an-q12",
        "ba-end-term-apr-2025-fn-q16",
        "ba-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Find total variability (SST) in the dependent variable",
      "ids": [
        "ba-end-term-aug-2025-an-q10",
        "ba-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "title": "Count TP, TN, FP or FN from predictions or a confusion matrix",
      "ids": [
        "ba-quiz-2-aug-2025-an-q10",
        "ba-quiz-2-aug-2025-an-q11",
        "ba-quiz-2-aug-2025-an-q12",
        "ba-quiz-2-aug-2025-an-q13",
        "ba-end-term-aug-2025-an-q2"
      ]
    },
    {
      "title": "Compute accuracy of a classifier from a confusion matrix",
      "ids": [
        "ba-end-term-dec-2024-an-q13",
        "ba-end-term-dec-2024-an-q23",
        "ba-quiz-2-aug-2025-an-q14",
        "ba-end-term-aug-2025-an-q5",
        "ba-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Compute precision of a class from a confusion matrix",
      "ids": [
        "ba-end-term-dec-2024-an-q14",
        "ba-end-term-dec-2024-an-q24",
        "ba-end-term-dec-2024-an-q26",
        "ba-end-term-apr-2025-fn-q29",
        "ba-quiz-2-aug-2025-an-q15",
        "ba-end-term-aug-2025-an-q3",
        "ba-end-term-aug-2025-fn-q18",
        "ba-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Compute recall, sensitivity or specificity from a confusion matrix",
      "ids": [
        "ba-end-term-dec-2024-an-q25",
        "ba-end-term-dec-2024-an-q27",
        "ba-end-term-apr-2025-fn-q30",
        "ba-end-term-apr-2025-fn-q31",
        "ba-quiz-2-aug-2025-an-q16",
        "ba-end-term-aug-2025-an-q4",
        "ba-end-term-aug-2025-fn-q19",
        "ba-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Interpret a logistic regression coefficient (log-odds and odds)",
      "ids": [
        "ba-end-term-apr-2025-fn-q32",
        "ba-end-term-apr-2025-fn-q33",
        "ba-end-term-aug-2025-an-q18",
        "ba-end-term-aug-2025-an-q19",
        "ba-end-term-aug-2025-fn-q22",
        "ba-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "title": "Find elasticity of a linear demand curve at a given price",
      "ids": [
        "ba-end-term-apr-2025-fn-q9",
        "ba-quiz-1-oct-2025-an-q8"
      ]
    },
    {
      "title": "Find market size of a linear demand curve",
      "ids": [
        "ba-end-term-apr-2025-fn-q10",
        "ba-quiz-1-oct-2025-an-q7"
      ]
    },
    {
      "title": "Find satiating price of a linear demand curve",
      "ids": [
        "ba-end-term-apr-2025-fn-q11",
        "ba-quiz-1-oct-2025-an-q6"
      ]
    },
    {
      "title": "Count decision variables in the standard form of the primal LP",
      "ids": [
        "ba-end-term-dec-2024-an-q2",
        "ba-end-term-aug-2025-an-q13",
        "ba-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "Count decision variables in the dual LP",
      "ids": [
        "ba-end-term-aug-2025-an-q14",
        "ba-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Find objective value of the primal LP for a given production plan",
      "ids": [
        "ba-end-term-dec-2024-an-q4",
        "ba-end-term-aug-2025-an-q16",
        "ba-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Count dual variables that are zero for a given production plan",
      "ids": [
        "ba-end-term-dec-2024-an-q5",
        "ba-end-term-aug-2025-an-q15",
        "ba-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Decide excess or deficit capacity for a given production plan",
      "ids": [
        "ba-end-term-aug-2025-an-q17",
        "ba-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "Choose the objective function of the DEA LP for a sales office",
      "ids": [
        "ba-end-term-dec-2024-an-q15",
        "ba-end-term-aug-2025-an-q24",
        "ba-end-term-aug-2025-fn-q26"
      ]
    },
    {
      "title": "Choose the normalising (type) constraint of the DEA LP",
      "ids": [
        "ba-end-term-dec-2024-an-q16",
        "ba-end-term-aug-2025-an-q25",
        "ba-end-term-aug-2025-fn-q27"
      ]
    },
    {
      "title": "Find which option is not a constraint of the DEA LP",
      "ids": [
        "ba-end-term-dec-2024-an-q17",
        "ba-end-term-aug-2025-an-q26",
        "ba-end-term-aug-2025-fn-q28"
      ]
    },
    {
      "title": "Find output targets for an inefficient unit from DEA dual values",
      "ids": [
        "ba-end-term-dec-2024-an-q18",
        "ba-end-term-dec-2024-an-q19",
        "ba-end-term-apr-2025-fn-q17",
        "ba-end-term-apr-2025-fn-q18",
        "ba-end-term-aug-2025-an-q22",
        "ba-end-term-aug-2025-an-q23",
        "ba-end-term-aug-2025-fn-q24",
        "ba-end-term-aug-2025-fn-q25"
      ]
    },
    {
      "title": "Find DMUs on the efficient frontier from a DEA graph",
      "ids": [
        "ba-end-term-dec-2024-an-q20",
        "ba-end-term-apr-2025-fn-q24"
      ]
    },
    {
      "title": "Find reference units for an inefficient DMU from a DEA graph",
      "ids": [
        "ba-end-term-dec-2024-an-q21",
        "ba-end-term-dec-2024-an-q22",
        "ba-end-term-apr-2025-fn-q25",
        "ba-end-term-apr-2025-fn-q26"
      ]
    },
    {
      "title": "Choose conjoint approach for continuous attributes with pairwise data",
      "ids": [
        "ba-end-term-dec-2024-an-q30",
        "ba-end-term-apr-2025-fn-q4"
      ]
    },
    {
      "title": "Find the part worth of upgrading one attribute level",
      "ids": [
        "ba-end-term-aug-2025-an-q27",
        "ba-end-term-aug-2025-fn-q29"
      ]
    },
    {
      "title": "Find importance weight of an attribute in conjoint analysis",
      "ids": [
        "ba-end-term-aug-2025-an-q28",
        "ba-end-term-aug-2025-an-q29",
        "ba-end-term-aug-2025-an-q30",
        "ba-end-term-aug-2025-fn-q30",
        "ba-end-term-aug-2025-fn-q31",
        "ba-end-term-aug-2025-fn-q32"
      ]
    }
  ]
};
