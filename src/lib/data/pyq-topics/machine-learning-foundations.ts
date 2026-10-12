import type { PyqTopicTags } from "../../types";

// 101 past-paper questions in 12 topics, 23 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const machineLearningFoundationsTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "intro-to-ml-and-loss",
      "title": "Intro to ML, models & loss",
      "summary": "ML task types, least squares fits, squared loss and encoder-decoder reconstruction loss",
      "ids": [
        "mlf-quiz-1-oct-2025-an-q1",
        "mlf-quiz-1-oct-2025-an-q2",
        "mlf-quiz-1-oct-2025-an-q4",
        "mlf-quiz-1-oct-2025-an-q7",
        "mlf-quiz-1-oct-2025-an-q8"
      ]
    },
    {
      "slug": "linear-approximation-and-contours",
      "title": "Linear approximations & contours",
      "summary": "Tangent plane L(x,y)[f] of a function, plane equation and reading contour plots",
      "ids": [
        "mlf-quiz-1-oct-2025-an-q16",
        "mlf-quiz-1-oct-2025-an-q17",
        "mlf-quiz-1-oct-2025-an-q18"
      ]
    },
    {
      "slug": "vector-spaces-and-rank",
      "title": "Vector spaces, rank & projections",
      "summary": "Span, basis of row space, rank, nullity, orthogonality and projection onto a subspace",
      "ids": [
        "mlf-end-term-dec-2024-an-q3",
        "mlf-end-term-dec-2024-fn-q7",
        "mlf-end-term-aug-2025-an-q3",
        "mlf-end-term-aug-2025-fn-q3",
        "mlf-quiz-1-oct-2025-an-q3",
        "mlf-quiz-1-oct-2025-an-q9",
        "mlf-quiz-1-oct-2025-an-q10"
      ]
    },
    {
      "slug": "eigenvalues-and-diagonalization",
      "title": "Eigenvalues & diagonalization",
      "summary": "Eigenvalues of matrix polynomials, determinant from eigenvalues and diagonalizability facts",
      "ids": [
        "mlf-end-term-aug-2025-an-q12",
        "mlf-end-term-aug-2025-fn-q8",
        "mlf-quiz-1-oct-2025-an-q5",
        "mlf-quiz-1-oct-2025-an-q6",
        "mlf-quiz-1-oct-2025-an-q11",
        "mlf-quiz-1-oct-2025-an-q12",
        "mlf-quiz-1-oct-2025-an-q13",
        "mlf-quiz-1-oct-2025-an-q14",
        "mlf-quiz-1-oct-2025-an-q15"
      ]
    },
    {
      "slug": "complex-hermitian-unitary",
      "title": "Complex, Hermitian & unitary matrices",
      "summary": "Checking if a complex matrix is Hermitian or unitary, and what that says about eigenvalues",
      "ids": [
        "mlf-end-term-dec-2024-an-q2",
        "mlf-end-term-dec-2024-fn-q6",
        "mlf-quiz-2-aug-2025-an-q7",
        "mlf-quiz-2-aug-2025-an-q8",
        "mlf-end-term-aug-2025-an-q13",
        "mlf-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "slug": "quadratic-forms-definiteness",
      "title": "Quadratic forms & definiteness",
      "summary": "Writing the matrix of a quadratic form and testing positive or negative definiteness",
      "ids": [
        "mlf-end-term-dec-2024-an-q1",
        "mlf-end-term-dec-2024-fn-q5",
        "mlf-quiz-2-aug-2025-an-q2",
        "mlf-quiz-2-aug-2025-an-q3"
      ]
    },
    {
      "slug": "svd-and-pca",
      "title": "SVD & PCA",
      "summary": "SVD factors, covariance matrix, eigenvalues and first principal component of a dataset",
      "ids": [
        "mlf-end-term-apr-2025-fn-q2",
        "mlf-end-term-apr-2025-fn-q3",
        "mlf-quiz-2-aug-2025-an-q4",
        "mlf-quiz-2-aug-2025-an-q5",
        "mlf-quiz-2-aug-2025-an-q10",
        "mlf-quiz-2-aug-2025-an-q11",
        "mlf-quiz-2-aug-2025-an-q12",
        "mlf-quiz-2-aug-2025-an-q13",
        "mlf-quiz-2-aug-2025-an-q14",
        "mlf-quiz-2-aug-2025-an-q15"
      ]
    },
    {
      "slug": "unconstrained-optimization",
      "title": "Unconstrained optimization & GD",
      "summary": "Critical points, Hessian test and one or two steps of gradient descent",
      "ids": [
        "mlf-end-term-dec-2024-an-q14",
        "mlf-end-term-dec-2024-fn-q11",
        "mlf-end-term-apr-2025-fn-q4",
        "mlf-end-term-apr-2025-fn-q11",
        "mlf-quiz-2-aug-2025-an-q1",
        "mlf-quiz-2-aug-2025-an-q6"
      ]
    },
    {
      "slug": "convex-sets-and-functions",
      "title": "Convex sets & convex functions",
      "summary": "Points in a convex set and checking if given functions or compositions are convex",
      "ids": [
        "mlf-end-term-dec-2024-an-q4",
        "mlf-end-term-dec-2024-an-q8",
        "mlf-end-term-dec-2024-fn-q8",
        "mlf-end-term-dec-2024-fn-q9",
        "mlf-end-term-apr-2025-fn-q5",
        "mlf-end-term-apr-2025-fn-q6",
        "mlf-end-term-aug-2025-an-q2",
        "mlf-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "slug": "constrained-optimization-kkt",
      "title": "Lagrange multipliers & KKT",
      "summary": "Optimizing with constraints: Lagrangian, stationary conditions, KKT rules and closest-point problems",
      "ids": [
        "mlf-end-term-dec-2024-an-q5",
        "mlf-end-term-dec-2024-an-q6",
        "mlf-end-term-dec-2024-an-q7",
        "mlf-end-term-dec-2024-an-q9",
        "mlf-end-term-dec-2024-fn-q10",
        "mlf-end-term-dec-2024-fn-q12",
        "mlf-end-term-dec-2024-fn-q13",
        "mlf-end-term-dec-2024-fn-q14",
        "mlf-end-term-apr-2025-fn-q7",
        "mlf-end-term-apr-2025-fn-q12",
        "mlf-end-term-apr-2025-fn-q13",
        "mlf-end-term-apr-2025-fn-q14",
        "mlf-quiz-2-aug-2025-an-q9",
        "mlf-end-term-aug-2025-an-q4",
        "mlf-end-term-aug-2025-an-q8",
        "mlf-end-term-aug-2025-an-q9",
        "mlf-end-term-aug-2025-an-q10",
        "mlf-end-term-aug-2025-an-q11",
        "mlf-end-term-aug-2025-fn-q7",
        "mlf-end-term-aug-2025-fn-q10",
        "mlf-end-term-aug-2025-fn-q11",
        "mlf-end-term-aug-2025-fn-q12",
        "mlf-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "slug": "probability-and-expectation",
      "title": "Probability, expectation & bounds",
      "summary": "Conditional probability, CDF, expectation and variance from a joint pdf, Markov and Chebyshev bounds",
      "ids": [
        "mlf-end-term-apr-2025-fn-q8",
        "mlf-end-term-apr-2025-fn-q9",
        "mlf-end-term-apr-2025-fn-q10",
        "mlf-end-term-aug-2025-an-q1",
        "mlf-end-term-aug-2025-an-q5",
        "mlf-end-term-aug-2025-an-q6",
        "mlf-end-term-aug-2025-fn-q4",
        "mlf-end-term-aug-2025-fn-q5",
        "mlf-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "slug": "transformations-and-gaussians",
      "title": "Functions of RVs & Gaussians",
      "summary": "Joint pdf after a change of variables, min of uniforms and linear combinations of normals",
      "ids": [
        "mlf-end-term-dec-2024-an-q10",
        "mlf-end-term-dec-2024-an-q11",
        "mlf-end-term-dec-2024-an-q12",
        "mlf-end-term-dec-2024-an-q13",
        "mlf-end-term-dec-2024-fn-q1",
        "mlf-end-term-dec-2024-fn-q2",
        "mlf-end-term-dec-2024-fn-q3",
        "mlf-end-term-dec-2024-fn-q4",
        "mlf-end-term-apr-2025-fn-q1",
        "mlf-end-term-aug-2025-an-q7",
        "mlf-end-term-aug-2025-fn-q1"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Find the matrix of a quadratic form and test its definiteness",
      "ids": [
        "mlf-end-term-dec-2024-an-q1",
        "mlf-end-term-dec-2024-fn-q5",
        "mlf-quiz-2-aug-2025-an-q2",
        "mlf-quiz-2-aug-2025-an-q3"
      ]
    },
    {
      "title": "Check if a complex matrix is Hermitian or unitary and its eigen facts",
      "ids": [
        "mlf-end-term-dec-2024-an-q2",
        "mlf-end-term-dec-2024-fn-q6",
        "mlf-quiz-2-aug-2025-an-q7",
        "mlf-end-term-aug-2025-an-q13",
        "mlf-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "True/false on det, zero eigenvalue, nullity and rank of a matrix",
      "ids": [
        "mlf-end-term-dec-2024-an-q3",
        "mlf-end-term-dec-2024-fn-q7"
      ]
    },
    {
      "title": "Which combinations of two points must lie in a convex set",
      "ids": [
        "mlf-end-term-dec-2024-an-q4",
        "mlf-end-term-dec-2024-fn-q8"
      ]
    },
    {
      "title": "Decide which given functions or compositions are convex",
      "ids": [
        "mlf-end-term-dec-2024-an-q8",
        "mlf-end-term-dec-2024-fn-q9",
        "mlf-end-term-apr-2025-fn-q6",
        "mlf-end-term-aug-2025-an-q2",
        "mlf-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Optimize profit or cost under a linear constraint with Lagrange",
      "ids": [
        "mlf-end-term-dec-2024-an-q9",
        "mlf-end-term-dec-2024-fn-q10",
        "mlf-end-term-apr-2025-fn-q7",
        "mlf-end-term-aug-2025-an-q4",
        "mlf-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Find the necessary KKT condition for an optimal point",
      "ids": [
        "mlf-end-term-dec-2024-an-q5",
        "mlf-end-term-dec-2024-fn-q12"
      ]
    },
    {
      "title": "Find which KKT condition holds when the optimum is on the boundary",
      "ids": [
        "mlf-end-term-dec-2024-an-q6",
        "mlf-end-term-dec-2024-fn-q13"
      ]
    },
    {
      "title": "Find the minimum value of f on the boundary x1 + x2 = 1",
      "ids": [
        "mlf-end-term-dec-2024-an-q7",
        "mlf-end-term-dec-2024-fn-q14"
      ]
    },
    {
      "title": "Find the CDF of Z = min(X, Y) for independent Uniform(0,1)",
      "ids": [
        "mlf-end-term-dec-2024-an-q10",
        "mlf-end-term-dec-2024-fn-q2"
      ]
    },
    {
      "title": "Find the joint pdf of new variables like U = X+Y, V = X-Y (Jacobian)",
      "ids": [
        "mlf-end-term-dec-2024-an-q11",
        "mlf-end-term-dec-2024-fn-q3",
        "mlf-end-term-apr-2025-fn-q1",
        "mlf-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "Find the distribution of Y = aX for a multivariate normal X",
      "ids": [
        "mlf-end-term-dec-2024-an-q12",
        "mlf-end-term-dec-2024-fn-q4"
      ]
    },
    {
      "title": "Find the distribution of a linear combination of independent normals",
      "ids": [
        "mlf-end-term-dec-2024-an-q13",
        "mlf-end-term-dec-2024-fn-q1",
        "mlf-end-term-aug-2025-an-q7"
      ]
    },
    {
      "title": "Run one or two steps of gradient descent from a start point",
      "ids": [
        "mlf-end-term-dec-2024-an-q14",
        "mlf-end-term-dec-2024-fn-q11",
        "mlf-end-term-apr-2025-fn-q11",
        "mlf-quiz-2-aug-2025-an-q6"
      ]
    },
    {
      "title": "Use Markov or Chebyshev to bound a tail probability",
      "ids": [
        "mlf-end-term-apr-2025-fn-q9",
        "mlf-end-term-aug-2025-an-q1",
        "mlf-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Find projection or span facts for vectors v1, v2, v3 with S = span(v1)",
      "ids": [
        "mlf-end-term-aug-2025-an-q3",
        "mlf-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Conditional probability of two people sitting together in a row",
      "ids": [
        "mlf-end-term-aug-2025-an-q5",
        "mlf-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "title": "Find Var(X) or Var(Y) from the joint pdf 24xy on a triangle",
      "ids": [
        "mlf-end-term-aug-2025-an-q6",
        "mlf-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "Find eigenvalue sum or product of 2A^2 - 3I",
      "ids": [
        "mlf-end-term-aug-2025-an-q12",
        "mlf-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Write the primal problem for the closest point of set S to origin",
      "ids": [
        "mlf-end-term-aug-2025-an-q8",
        "mlf-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Pick the correct Lagrangian and stationary conditions",
      "ids": [
        "mlf-end-term-aug-2025-an-q9",
        "mlf-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Find the closest point of set S to the origin and compute a value",
      "ids": [
        "mlf-end-term-aug-2025-an-q10",
        "mlf-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "Judge convexity of set S and of the primal objective function",
      "ids": [
        "mlf-end-term-aug-2025-an-q11",
        "mlf-end-term-aug-2025-fn-q12"
      ]
    }
  ]
};
