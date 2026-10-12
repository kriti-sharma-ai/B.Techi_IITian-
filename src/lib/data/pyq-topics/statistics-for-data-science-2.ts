import type { PyqTopicTags } from "../../types";

// 118 past-paper questions in 9 topics, 26 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const statisticsForDataScience2Topics: PyqTopicTags = {
  "topics": [
    {
      "slug": "joint-distributions",
      "title": "Joint, marginal & conditional",
      "summary": "From a joint PMF/PDF find marginals, conditionals, region probabilities and check independence",
      "ids": [
        "stats-2-end-term-dec-2024-an-q12",
        "stats-2-end-term-dec-2024-an-q13",
        "stats-2-end-term-dec-2024-fn-q12",
        "stats-2-end-term-dec-2024-fn-q13",
        "stats-2-end-term-apr-2025-an-q6",
        "stats-2-end-term-apr-2025-an-q7",
        "stats-2-quiz-2-aug-2025-an-q5",
        "stats-2-quiz-2-aug-2025-an-q6",
        "stats-2-quiz-2-aug-2025-an-q7",
        "stats-2-quiz-2-aug-2025-an-q8",
        "stats-2-quiz-2-aug-2025-an-q9",
        "stats-2-end-term-aug-2025-fn-q20",
        "stats-2-end-term-aug-2025-fn-q21",
        "stats-2-quiz-1-oct-2025-an-q13",
        "stats-2-quiz-1-oct-2025-an-q14",
        "stats-2-quiz-1-oct-2025-an-q5",
        "stats-2-quiz-1-oct-2025-an-q6",
        "stats-2-quiz-1-oct-2025-an-q7",
        "stats-2-quiz-1-oct-2025-an-q8",
        "stats-2-quiz-1-oct-2025-an-q9",
        "stats-2-quiz-1-oct-2025-an-q10"
      ]
    },
    {
      "slug": "functions-of-random-variables",
      "title": "Functions of random variables",
      "summary": "PMF/PDF and probabilities of Z = g(X, Y), sums, min, and transforms like X^2 or sqrt(X)",
      "ids": [
        "stats-2-end-term-dec-2024-an-q14",
        "stats-2-end-term-dec-2024-an-q15",
        "stats-2-end-term-dec-2024-fn-q2",
        "stats-2-end-term-dec-2024-fn-q14",
        "stats-2-end-term-dec-2024-fn-q15",
        "stats-2-end-term-apr-2025-an-q8",
        "stats-2-end-term-apr-2025-an-q9",
        "stats-2-end-term-apr-2025-fn-q1",
        "stats-2-quiz-2-aug-2025-an-q1",
        "stats-2-end-term-aug-2025-fn-q16",
        "stats-2-end-term-aug-2025-fn-q17",
        "stats-2-quiz-1-oct-2025-an-q3",
        "stats-2-quiz-1-oct-2025-an-q17",
        "stats-2-quiz-1-oct-2025-an-q18",
        "stats-2-quiz-1-oct-2025-an-q19",
        "stats-2-quiz-1-oct-2025-an-q20"
      ]
    },
    {
      "slug": "continuous-random-variables",
      "title": "Continuous random variables",
      "summary": "Valid PDFs (find k), CDF to PDF, and probabilities from a PDF or CDF",
      "ids": [
        "stats-2-end-term-apr-2025-an-q5",
        "stats-2-end-term-apr-2025-fn-q15",
        "stats-2-end-term-apr-2025-fn-q16",
        "stats-2-end-term-apr-2025-fn-q17",
        "stats-2-quiz-2-aug-2025-an-q14",
        "stats-2-quiz-2-aug-2025-an-q15",
        "stats-2-quiz-1-oct-2025-an-q1",
        "stats-2-quiz-1-oct-2025-an-q11",
        "stats-2-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "slug": "expectation-variance-covariance",
      "title": "Expectation, variance & covariance",
      "summary": "E[X], Var(X), covariance and rules for linear combinations of random variables",
      "ids": [
        "stats-2-end-term-apr-2025-fn-q13",
        "stats-2-end-term-apr-2025-fn-q14",
        "stats-2-quiz-2-aug-2025-an-q3",
        "stats-2-quiz-2-aug-2025-an-q4",
        "stats-2-end-term-aug-2025-fn-q10",
        "stats-2-end-term-aug-2025-fn-q11",
        "stats-2-quiz-1-oct-2025-an-q2",
        "stats-2-quiz-1-oct-2025-an-q4"
      ]
    },
    {
      "slug": "inequalities-mgf-clt",
      "title": "Inequalities, MGF & CLT",
      "summary": "Markov and Chebyshev bounds, moment generating functions, normal approximation by CLT",
      "ids": [
        "stats-2-quiz-2-aug-2025-an-q2",
        "stats-2-quiz-2-aug-2025-an-q10",
        "stats-2-quiz-2-aug-2025-an-q11",
        "stats-2-quiz-2-aug-2025-an-q12",
        "stats-2-quiz-2-aug-2025-an-q13",
        "stats-2-quiz-1-oct-2025-an-q15",
        "stats-2-quiz-1-oct-2025-an-q16"
      ]
    },
    {
      "slug": "estimator-properties",
      "title": "Estimators: bias & variance",
      "summary": "Compare estimators by bias, variance, risk and consistency",
      "ids": [
        "stats-2-end-term-dec-2024-an-q5",
        "stats-2-end-term-dec-2024-fn-q4",
        "stats-2-end-term-apr-2025-an-q4",
        "stats-2-end-term-apr-2025-fn-q3"
      ]
    },
    {
      "slug": "mom-mle",
      "title": "Method of moments & MLE",
      "summary": "Find parameter estimates from a sample by method of moments and maximum likelihood",
      "ids": [
        "stats-2-end-term-dec-2024-an-q1",
        "stats-2-end-term-dec-2024-an-q6",
        "stats-2-end-term-dec-2024-an-q7",
        "stats-2-end-term-dec-2024-fn-q1",
        "stats-2-end-term-dec-2024-fn-q6",
        "stats-2-end-term-dec-2024-fn-q7",
        "stats-2-end-term-apr-2025-an-q10",
        "stats-2-end-term-apr-2025-fn-q7",
        "stats-2-end-term-apr-2025-fn-q8",
        "stats-2-end-term-apr-2025-fn-q9",
        "stats-2-end-term-aug-2025-fn-q1",
        "stats-2-end-term-aug-2025-fn-q12",
        "stats-2-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "slug": "bayesian-estimation",
      "title": "Bayesian estimation",
      "summary": "Beta and Gamma priors, posterior distribution, posterior mean, choosing prior parameters",
      "ids": [
        "stats-2-end-term-dec-2024-an-q8",
        "stats-2-end-term-dec-2024-an-q9",
        "stats-2-end-term-dec-2024-fn-q8",
        "stats-2-end-term-dec-2024-fn-q9",
        "stats-2-end-term-apr-2025-an-q2",
        "stats-2-end-term-apr-2025-an-q11",
        "stats-2-end-term-apr-2025-an-q12",
        "stats-2-end-term-apr-2025-an-q13",
        "stats-2-end-term-apr-2025-fn-q5",
        "stats-2-end-term-apr-2025-fn-q6",
        "stats-2-end-term-apr-2025-fn-q10",
        "stats-2-end-term-aug-2025-fn-q2",
        "stats-2-end-term-aug-2025-fn-q18",
        "stats-2-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "slug": "hypothesis-testing",
      "title": "Hypothesis testing",
      "summary": "Set H0/HA, significance level, critical value, P-value, power and test decisions",
      "ids": [
        "stats-2-end-term-dec-2024-an-q2",
        "stats-2-end-term-dec-2024-an-q3",
        "stats-2-end-term-dec-2024-an-q4",
        "stats-2-end-term-dec-2024-an-q10",
        "stats-2-end-term-dec-2024-an-q11",
        "stats-2-end-term-dec-2024-fn-q3",
        "stats-2-end-term-dec-2024-fn-q5",
        "stats-2-end-term-dec-2024-fn-q10",
        "stats-2-end-term-dec-2024-fn-q11",
        "stats-2-end-term-apr-2025-an-q1",
        "stats-2-end-term-apr-2025-an-q3",
        "stats-2-end-term-apr-2025-an-q14",
        "stats-2-end-term-apr-2025-an-q15",
        "stats-2-end-term-apr-2025-fn-q2",
        "stats-2-end-term-apr-2025-fn-q4",
        "stats-2-end-term-apr-2025-fn-q11",
        "stats-2-end-term-apr-2025-fn-q12",
        "stats-2-end-term-aug-2025-fn-q3",
        "stats-2-end-term-aug-2025-fn-q14",
        "stats-2-end-term-aug-2025-fn-q15",
        "stats-2-end-term-aug-2025-fn-q4",
        "stats-2-end-term-aug-2025-fn-q5",
        "stats-2-end-term-aug-2025-fn-q6",
        "stats-2-end-term-aug-2025-fn-q7",
        "stats-2-end-term-aug-2025-fn-q8",
        "stats-2-end-term-aug-2025-fn-q9"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Find the marginal distribution from a joint PDF or PMF",
      "ids": [
        "stats-2-end-term-dec-2024-an-q12",
        "stats-2-end-term-dec-2024-fn-q12",
        "stats-2-end-term-apr-2025-an-q6",
        "stats-2-quiz-2-aug-2025-an-q6",
        "stats-2-quiz-2-aug-2025-an-q8"
      ]
    },
    {
      "title": "Find a conditional probability or density from a joint distribution",
      "ids": [
        "stats-2-end-term-apr-2025-an-q7",
        "stats-2-quiz-2-aug-2025-an-q5",
        "stats-2-quiz-2-aug-2025-an-q9",
        "stats-2-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Find a region probability like P(X + Y <= 1) from a joint PDF",
      "ids": [
        "stats-2-end-term-dec-2024-an-q13",
        "stats-2-quiz-2-aug-2025-an-q7"
      ]
    },
    {
      "title": "Find the PMF or possible values of Z = g(X, Y) from given PMFs",
      "ids": [
        "stats-2-end-term-dec-2024-an-q14",
        "stats-2-end-term-dec-2024-fn-q14",
        "stats-2-end-term-apr-2025-an-q8"
      ]
    },
    {
      "title": "Find E[Z] for Z = g(X, Y) from given PMFs",
      "ids": [
        "stats-2-end-term-dec-2024-an-q15",
        "stats-2-end-term-dec-2024-fn-q15",
        "stats-2-end-term-apr-2025-an-q9"
      ]
    },
    {
      "title": "Find P(X^2 < a) or P(X^2 > a) for a normal X using the standard normal",
      "ids": [
        "stats-2-end-term-dec-2024-fn-q2",
        "stats-2-quiz-2-aug-2025-an-q1"
      ]
    },
    {
      "title": "Find the constant k that makes a PDF or PMF valid",
      "ids": [
        "stats-2-end-term-apr-2025-fn-q15",
        "stats-2-quiz-2-aug-2025-an-q14",
        "stats-2-end-term-aug-2025-fn-q20",
        "stats-2-quiz-1-oct-2025-an-q11"
      ]
    },
    {
      "title": "Find P(a < X < b) from a given PDF",
      "ids": [
        "stats-2-end-term-apr-2025-fn-q17",
        "stats-2-quiz-2-aug-2025-an-q15"
      ]
    },
    {
      "title": "Find a conditional probability P(X in A | X > c) for continuous X",
      "ids": [
        "stats-2-end-term-apr-2025-an-q5",
        "stats-2-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "title": "Find an unknown PMF value when E[X] is given",
      "ids": [
        "stats-2-end-term-apr-2025-fn-q13",
        "stats-2-quiz-1-oct-2025-an-q4"
      ]
    },
    {
      "title": "Use expectation and variance rules for combinations of RVs",
      "ids": [
        "stats-2-quiz-2-aug-2025-an-q3",
        "stats-2-quiz-1-oct-2025-an-q2"
      ]
    },
    {
      "title": "Find a lower bound on a probability with Chebyshev's inequality",
      "ids": [
        "stats-2-quiz-2-aug-2025-an-q13",
        "stats-2-quiz-1-oct-2025-an-q16"
      ]
    },
    {
      "title": "Check bias, variance and consistency of given estimators",
      "ids": [
        "stats-2-end-term-dec-2024-an-q5",
        "stats-2-end-term-dec-2024-fn-q4",
        "stats-2-end-term-apr-2025-an-q4",
        "stats-2-end-term-apr-2025-fn-q3"
      ]
    },
    {
      "title": "Find the method of moments estimate of a parameter from a sample",
      "ids": [
        "stats-2-end-term-dec-2024-an-q6",
        "stats-2-end-term-dec-2024-fn-q1",
        "stats-2-end-term-dec-2024-fn-q6",
        "stats-2-end-term-apr-2025-fn-q7",
        "stats-2-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "Find the maximum likelihood estimate of theta from a sample",
      "ids": [
        "stats-2-end-term-dec-2024-an-q1",
        "stats-2-end-term-dec-2024-an-q7",
        "stats-2-end-term-dec-2024-fn-q7",
        "stats-2-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "Find the MLE of a Poisson rate lambda from a sample",
      "ids": [
        "stats-2-end-term-apr-2025-an-q10",
        "stats-2-end-term-apr-2025-fn-q9"
      ]
    },
    {
      "title": "Find the Beta posterior of a proportion p from survey data",
      "ids": [
        "stats-2-end-term-dec-2024-an-q8",
        "stats-2-end-term-dec-2024-fn-q8",
        "stats-2-end-term-apr-2025-fn-q6",
        "stats-2-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Find the posterior mean of p from a Beta posterior",
      "ids": [
        "stats-2-end-term-dec-2024-an-q9",
        "stats-2-end-term-dec-2024-fn-q9"
      ]
    },
    {
      "title": "Find the Gamma posterior of a Poisson rate lambda",
      "ids": [
        "stats-2-end-term-apr-2025-an-q2",
        "stats-2-end-term-apr-2025-an-q11",
        "stats-2-end-term-apr-2025-fn-q10"
      ]
    },
    {
      "title": "Choose a prior parameter that gives a stated prior mean",
      "ids": [
        "stats-2-end-term-apr-2025-an-q12",
        "stats-2-end-term-apr-2025-fn-q5"
      ]
    },
    {
      "title": "Given the posterior mean, find an unknown prior or data parameter",
      "ids": [
        "stats-2-end-term-apr-2025-an-q13",
        "stats-2-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "title": "True statements about power and Type I / Type II errors",
      "ids": [
        "stats-2-end-term-dec-2024-an-q4",
        "stats-2-end-term-dec-2024-fn-q3"
      ]
    },
    {
      "title": "State the null and alternative hypotheses for a claim about a mean",
      "ids": [
        "stats-2-end-term-dec-2024-an-q10",
        "stats-2-end-term-dec-2024-fn-q10",
        "stats-2-end-term-apr-2025-an-q14",
        "stats-2-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Decide to reject or accept H0 at given significance levels",
      "ids": [
        "stats-2-end-term-dec-2024-an-q11",
        "stats-2-end-term-dec-2024-fn-q11"
      ]
    },
    {
      "title": "Write the significance level of a test in terms of c",
      "ids": [
        "stats-2-end-term-apr-2025-an-q3",
        "stats-2-end-term-apr-2025-fn-q2"
      ]
    },
    {
      "title": "Find the critical value c or rejection probability for a z-test",
      "ids": [
        "stats-2-end-term-apr-2025-fn-q4",
        "stats-2-end-term-aug-2025-fn-q3",
        "stats-2-end-term-aug-2025-fn-q15"
      ]
    }
  ]
};
