import type { Program, Subject } from "../types";

export const programs: Program[] = [
  {
    slug: "iit-mandi",
    name: "IIT Mandi",
    tagline: "Programs & Subjects",
    description:
      "Core engineering mathematics, programming and computer science courses for the B.Tech programme.",
    university: "IIT Mandi",
    degree: "B.Tech",
    accent: "yellow",
    semesters: 8,
  },
  {
    slug: "ba",
    name: "B.A.",
    tagline: "Arts & Humanities",
    description: "Sociology, economics and political science, from foundation courses onwards.",
    university: "BTechi Open Curriculum",
    degree: "B.A.",
    accent: "green",
    semesters: 6,
  },
  {
    slug: "management",
    name: "Management",
    tagline: "Business & Management",
    description: "Principles of management, marketing and accounting for BBA students.",
    university: "BTechi Open Curriculum",
    degree: "BBA",
    accent: "blue",
    semesters: 6,
  },
  {
    slug: "data-science",
    name: "Data Science",
    tagline: "Data & Analytics",
    description: "Statistics, Python and machine learning, organised unit by unit.",
    university: "BTechi Open Curriculum",
    degree: "B.Sc. Data Science",
    accent: "purple",
    semesters: 6,
  },
];

const t = (slug: string, title: string, summary: string, minutes = 25) => ({
  slug,
  title,
  summary,
  minutes,
});

export const subjects: Subject[] = [
  // ───────────── Data Science ─────────────
  {
    slug: "statistics",
    name: "Statistics",
    programSlug: "data-science",
    semester: 2,
    credits: 4,
    description:
      "Descriptive statistics, probability, distributions, regression and inference: the base of every data science course after this one.",
    units: [
      {
        id: "stat-u1",
        number: 1,
        title: "Introduction to Statistics",
        topics: [
          t("introduction", "Introduction", "What statistics is, and why data science depends on it.", 15),
          t("population-and-sample", "Population & Sample", "Census vs sample, parameters vs statistics, sampling bias."),
          t("data-types", "Data Types", "Nominal, ordinal, interval and ratio scales with examples.", 20),
          t("descriptive-statistics", "Descriptive Statistics", "Mean, median, mode, variance, standard deviation and IQR.", 40),
        ],
      },
      {
        id: "stat-u2",
        number: 2,
        title: "Probability",
        topics: [
          t("basic-probability", "Basic Probability", "Sample spaces, events, axioms and counting.", 35),
          t("conditional-probability", "Conditional Probability", "P(A|B), independence and the multiplication rule.", 35),
          t("bayes-theorem", "Bayes' Theorem", "Updating beliefs with evidence; base-rate problems.", 40),
        ],
      },
      {
        id: "stat-u3",
        number: 3,
        title: "Random Variables & Distributions",
        topics: [
          t("random-variables", "Random Variables", "Discrete vs continuous, PMF, PDF, expectation and variance.", 35),
          t("binomial-distribution", "Binomial Distribution", "Fixed independent trials with constant success probability.", 30),
          t("poisson-distribution", "Poisson Distribution", "Counting rare events in a fixed interval.", 30),
          t("normal-distribution", "Normal Distribution", "The bell curve, z-scores and the 68–95–99.7 rule.", 40),
        ],
      },
      {
        id: "stat-u4",
        number: 4,
        title: "Correlation & Regression",
        topics: [
          t("correlation", "Correlation", "Pearson's r, scatter plots, correlation vs causation.", 30),
          t("linear-regression", "Simple Linear Regression", "Least squares line, slope, intercept and R².", 45),
        ],
      },
      {
        id: "stat-u5",
        number: 5,
        title: "Statistical Inference",
        topics: [
          t("sampling-distributions", "Sampling Distributions", "Standard error and the central limit theorem.", 35),
          t("confidence-intervals", "Confidence Intervals", "Estimating a parameter with a margin of error.", 35),
          t("hypothesis-testing", "Hypothesis Testing", "Null vs alternative, p-values, Type I and II errors.", 45),
        ],
      },
    ],
  },
  {
    slug: "python-for-data-science",
    name: "Python for Data Science",
    programSlug: "data-science",
    semester: 1,
    credits: 4,
    description: "Python fundamentals, then NumPy, pandas and plotting for real datasets.",
    units: [
      {
        id: "py-u1",
        number: 1,
        title: "Python Fundamentals",
        topics: [
          t("variables-and-types", "Variables & Types", "Numbers, strings, booleans and type conversion.", 20),
          t("control-flow", "Control Flow", "if/elif/else, for and while loops.", 25),
          t("functions", "Functions", "Parameters, return values, scope and lambdas.", 30),
        ],
      },
      {
        id: "py-u2",
        number: 2,
        title: "Data Structures",
        topics: [
          t("lists-and-tuples", "Lists & Tuples", "Indexing, slicing and comprehensions.", 25),
          t("dictionaries-and-sets", "Dictionaries & Sets", "Hashing, lookups and membership.", 25),
        ],
      },
      {
        id: "py-u3",
        number: 3,
        title: "NumPy & pandas",
        topics: [
          t("numpy-arrays", "NumPy Arrays", "Vectorised operations and broadcasting.", 35),
          t("pandas-dataframes", "pandas DataFrames", "Loading, filtering, grouping and joining data.", 45),
        ],
      },
    ],
  },
  {
    slug: "machine-learning",
    name: "Machine Learning",
    programSlug: "data-science",
    semester: 3,
    credits: 4,
    description: "Supervised and unsupervised learning, model evaluation and the bias–variance trade-off.",
    units: [
      {
        id: "ml-u1",
        number: 1,
        title: "Foundations",
        topics: [
          t("what-is-ml", "What is Machine Learning?", "Supervised, unsupervised and reinforcement learning.", 20),
          t("bias-variance", "Bias–Variance Trade-off", "Underfitting, overfitting and model complexity.", 30),
        ],
      },
      {
        id: "ml-u2",
        number: 2,
        title: "Supervised Learning",
        topics: [
          t("logistic-regression", "Logistic Regression", "Classification with the sigmoid function.", 35),
          t("decision-trees", "Decision Trees", "Splitting criteria, depth and pruning.", 35),
        ],
      },
    ],
  },

  // ───────────── IIT Mandi ─────────────
  {
    slug: "engineering-mathematics-1",
    name: "Engineering Mathematics I",
    programSlug: "iit-mandi",
    semester: 1,
    credits: 4,
    description: "Single-variable calculus, sequences and series, and an introduction to multivariable calculus.",
    units: [
      {
        id: "em1-u1",
        number: 1,
        title: "Differential Calculus",
        topics: [
          t("limits-and-continuity", "Limits & Continuity", "Epsilon–delta intuition and standard limits.", 30),
          t("derivatives", "Derivatives", "Rules of differentiation and applications.", 35),
          t("mean-value-theorems", "Mean Value Theorems", "Rolle's, Lagrange's and Cauchy's theorems.", 35),
        ],
      },
      {
        id: "em1-u2",
        number: 2,
        title: "Integral Calculus",
        topics: [
          t("definite-integrals", "Definite Integrals", "Riemann sums and the fundamental theorem.", 35),
          t("improper-integrals", "Improper Integrals", "Convergence tests and Beta/Gamma functions.", 35),
        ],
      },
    ],
  },
  {
    slug: "programming-with-python",
    name: "Programming with Python",
    programSlug: "iit-mandi",
    semester: 1,
    credits: 3,
    description: "Problem solving with Python: algorithms, recursion and basic data structures.",
    units: [
      {
        id: "pwp-u1",
        number: 1,
        title: "Problem Solving",
        topics: [
          t("algorithms-and-flowcharts", "Algorithms & Flowcharts", "Breaking problems into steps.", 20),
          t("recursion", "Recursion", "Base cases, call stacks and recursive thinking.", 35),
        ],
      },
    ],
  },
  {
    slug: "linear-algebra",
    name: "Linear Algebra",
    programSlug: "iit-mandi",
    semester: 2,
    credits: 4,
    description: "Vector spaces, linear maps, eigenvalues and diagonalisation.",
    units: [
      {
        id: "la-u1",
        number: 1,
        title: "Matrices & Systems",
        topics: [
          t("gaussian-elimination", "Gaussian Elimination", "Row reduction and echelon forms.", 30),
          t("rank-and-nullity", "Rank & Nullity", "The rank–nullity theorem.", 30),
        ],
      },
      {
        id: "la-u2",
        number: 2,
        title: "Eigenvalues",
        topics: [
          t("eigenvalues-and-eigenvectors", "Eigenvalues & Eigenvectors", "Characteristic polynomial and eigenspaces.", 40),
          t("diagonalisation", "Diagonalisation", "When and how a matrix can be diagonalised.", 35),
        ],
      },
    ],
  },
  {
    slug: "data-structures-and-algorithms",
    name: "Data Structures & Algorithms",
    programSlug: "iit-mandi",
    semester: 3,
    credits: 4,
    description: "Complexity analysis, linear structures, trees, graphs and sorting.",
    units: [
      {
        id: "dsa-u1",
        number: 1,
        title: "Complexity & Linear Structures",
        topics: [
          t("big-o", "Big-O Notation", "Asymptotic analysis of algorithms.", 25),
          t("stacks-and-queues", "Stacks & Queues", "LIFO and FIFO structures and their uses.", 30),
        ],
      },
    ],
  },

  // ───────────── Management ─────────────
  {
    slug: "principles-of-management",
    name: "Principles of Management",
    programSlug: "management",
    semester: 1,
    credits: 4,
    description: "Planning, organising, leading and controlling, from classical theory to modern practice.",
    units: [
      {
        id: "pom-u1",
        number: 1,
        title: "Evolution of Management",
        topics: [
          t("classical-theories", "Classical Theories", "Taylor's scientific management and Fayol's principles.", 30),
          t("functions-of-management", "Functions of Management", "Planning, organising, leading and controlling.", 25),
        ],
      },
      {
        id: "pom-u2",
        number: 2,
        title: "Planning & Decision Making",
        topics: [
          t("planning-process", "The Planning Process", "Objectives, premises and types of plans.", 25),
          t("decision-making", "Decision Making", "Rational and bounded-rational models.", 25),
        ],
      },
    ],
  },
  {
    slug: "financial-accounting",
    name: "Financial Accounting",
    programSlug: "management",
    semester: 1,
    credits: 4,
    description: "The accounting cycle, journals, ledgers and preparing final accounts.",
    units: [
      {
        id: "fa-u1",
        number: 1,
        title: "Accounting Basics",
        topics: [
          t("accounting-equation", "The Accounting Equation", "Assets = Liabilities + Equity.", 20),
          t("journal-and-ledger", "Journal & Ledger", "Double-entry recording and posting.", 35),
        ],
      },
    ],
  },
  {
    slug: "marketing-management",
    name: "Marketing Management",
    programSlug: "management",
    semester: 2,
    credits: 4,
    description: "Market segmentation, the marketing mix, consumer behaviour and branding.",
    units: [
      {
        id: "mm-u1",
        number: 1,
        title: "Marketing Fundamentals",
        topics: [
          t("marketing-concepts", "Marketing Concepts", "Needs, wants, demand and the marketing philosophies.", 25),
          t("marketing-mix", "The Marketing Mix (4Ps)", "Product, price, place and promotion.", 30),
        ],
      },
      {
        id: "mm-u2",
        number: 2,
        title: "Segmentation & Positioning",
        topics: [
          t("stp", "Segmentation, Targeting, Positioning", "The STP framework with examples.", 35),
        ],
      },
      {
        id: "mm-u3",
        number: 3,
        title: "Consumer Behaviour",
        topics: [
          t("buying-process", "Consumer Buying Process", "The five-stage model.", 30),
          t("brand-equity", "Brand Equity", "Awareness, associations and loyalty.", 30),
        ],
      },
    ],
  },

  // ───────────── B.A. ─────────────
  {
    slug: "introduction-to-sociology",
    name: "Introduction to Sociology",
    programSlug: "ba",
    semester: 1,
    credits: 4,
    description: "Society, culture, socialisation and the founding thinkers of sociology.",
    units: [
      {
        id: "soc-u1",
        number: 1,
        title: "Foundations",
        topics: [
          t("sociological-imagination", "The Sociological Imagination", "C. Wright Mills and seeing the social in the personal.", 25),
          t("founding-thinkers", "Founding Thinkers", "Durkheim, Marx and Weber.", 40),
        ],
      },
    ],
  },
  {
    slug: "principles-of-economics",
    name: "Principles of Economics",
    programSlug: "ba",
    semester: 1,
    credits: 4,
    description: "Demand and supply, elasticity, market structures and national income.",
    units: [
      {
        id: "eco-u1",
        number: 1,
        title: "Demand & Supply",
        topics: [
          t("law-of-demand", "Law of Demand", "Demand curves and their determinants.", 25),
          t("elasticity", "Elasticity", "Price, income and cross elasticity.", 30),
        ],
      },
    ],
  },
  {
    slug: "indian-political-thought",
    name: "Indian Political Thought",
    programSlug: "ba",
    semester: 2,
    credits: 4,
    description: "From Kautilya to Ambedkar: key ideas in Indian political philosophy.",
    units: [
      {
        id: "ipt-u1",
        number: 1,
        title: "Classical Thought",
        topics: [t("kautilya", "Kautilya's Arthashastra", "Statecraft and the saptanga theory.", 35)],
      },
    ],
  },
];
