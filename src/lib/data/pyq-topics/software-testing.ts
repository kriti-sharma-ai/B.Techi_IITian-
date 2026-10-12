import type { PyqTopicTags } from "../../types";

// 81 past-paper questions in 11 topics, 22 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const softwareTestingTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "testing-fundamentals",
      "title": "Testing basics, JUnit & TDD",
      "summary": "Requirement types, test cases, process maturity, JUnit tests and test-driven development",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q3",
        "software-testing-end-term-aug-2025-an-q17",
        "software-testing-end-term-aug-2025-fn-q17",
        "software-testing-quiz-1-oct-2025-an-q1",
        "software-testing-quiz-1-oct-2025-an-q3",
        "software-testing-quiz-1-oct-2025-an-q4",
        "software-testing-quiz-1-oct-2025-an-q14"
      ]
    },
    {
      "slug": "graph-coverage",
      "title": "Graph coverage & FSMs",
      "summary": "Node, edge, edge-pair and prime path coverage, cyclomatic complexity and FSM behaviour",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q1",
        "software-testing-quiz-2-aug-2025-an-q14",
        "software-testing-quiz-2-aug-2025-an-q15",
        "software-testing-quiz-2-aug-2025-an-q16",
        "software-testing-end-term-aug-2025-an-q16",
        "software-testing-end-term-aug-2025-an-q20",
        "software-testing-end-term-aug-2025-an-q21",
        "software-testing-end-term-aug-2025-fn-q6",
        "software-testing-end-term-aug-2025-fn-q16",
        "software-testing-end-term-aug-2025-fn-q20",
        "software-testing-end-term-aug-2025-fn-q21",
        "software-testing-quiz-1-oct-2025-an-q2",
        "software-testing-quiz-1-oct-2025-an-q7",
        "software-testing-quiz-1-oct-2025-an-q9",
        "software-testing-quiz-1-oct-2025-an-q12",
        "software-testing-quiz-1-oct-2025-an-q15",
        "software-testing-quiz-1-oct-2025-an-q16",
        "software-testing-quiz-1-oct-2025-an-q17"
      ]
    },
    {
      "slug": "data-flow-coverage",
      "title": "Data flow coverage",
      "summary": "du-paths, All-Defs, All-Uses and All-DU-Paths coverage on data flow graphs",
      "ids": [
        "software-testing-end-term-aug-2025-an-q15",
        "software-testing-end-term-aug-2025-fn-q15",
        "software-testing-quiz-1-oct-2025-an-q10",
        "software-testing-quiz-1-oct-2025-an-q11",
        "software-testing-quiz-1-oct-2025-an-q18",
        "software-testing-quiz-1-oct-2025-an-q19",
        "software-testing-quiz-1-oct-2025-an-q20"
      ]
    },
    {
      "slug": "integration-testing",
      "title": "Integration testing",
      "summary": "Top-down, bottom-up and big-bang integration, stubs, drivers and module interfaces",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q6",
        "software-testing-quiz-1-oct-2025-an-q5",
        "software-testing-quiz-1-oct-2025-an-q6",
        "software-testing-quiz-1-oct-2025-an-q8"
      ]
    },
    {
      "slug": "logic-coverage",
      "title": "Logic coverage",
      "summary": "Predicates, determination, CNF/DNF and active/inactive clause coverage pairs (RACC, CACC, RICC)",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q2",
        "software-testing-quiz-2-aug-2025-an-q10",
        "software-testing-quiz-2-aug-2025-an-q11",
        "software-testing-quiz-2-aug-2025-an-q12",
        "software-testing-quiz-2-aug-2025-an-q13",
        "software-testing-end-term-aug-2025-an-q18",
        "software-testing-end-term-aug-2025-an-q19",
        "software-testing-end-term-aug-2025-fn-q18",
        "software-testing-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "slug": "input-space-partitioning",
      "title": "Input space partitioning",
      "summary": "Partition properties, boundary values and test counts for ECC, BCC and ACoC",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q4",
        "software-testing-quiz-2-aug-2025-an-q5",
        "software-testing-quiz-2-aug-2025-an-q7",
        "software-testing-quiz-2-aug-2025-an-q8",
        "software-testing-end-term-aug-2025-an-q9",
        "software-testing-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "slug": "symbolic-execution",
      "title": "Symbolic & concolic testing",
      "summary": "Path constraints, symbolic execution of loops and DART concolic inputs",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q9",
        "software-testing-quiz-2-aug-2025-an-q17",
        "software-testing-quiz-2-aug-2025-an-q18",
        "software-testing-quiz-2-aug-2025-an-q19",
        "software-testing-end-term-aug-2025-an-q12",
        "software-testing-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "slug": "syntax-mutation-testing",
      "title": "Grammars & mutation testing",
      "summary": "Language of a grammar and naming the mutation operator applied to code",
      "ids": [
        "software-testing-end-term-aug-2025-an-q3",
        "software-testing-end-term-aug-2025-an-q8",
        "software-testing-end-term-aug-2025-an-q13",
        "software-testing-end-term-aug-2025-fn-q3",
        "software-testing-end-term-aug-2025-fn-q8",
        "software-testing-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "slug": "object-oriented-testing",
      "title": "Object-oriented testing",
      "summary": "Inheritance anomalies and which methods get called through overriding",
      "ids": [
        "software-testing-end-term-aug-2025-an-q10",
        "software-testing-end-term-aug-2025-an-q11",
        "software-testing-end-term-aug-2025-fn-q10",
        "software-testing-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "slug": "web-testing",
      "title": "Web application testing",
      "summary": "Bypass testing, web layers, application transition graphs and atomic sections",
      "ids": [
        "software-testing-end-term-aug-2025-an-q5",
        "software-testing-end-term-aug-2025-an-q6",
        "software-testing-end-term-aug-2025-an-q7",
        "software-testing-end-term-aug-2025-an-q14",
        "software-testing-end-term-aug-2025-fn-q5",
        "software-testing-end-term-aug-2025-fn-q7",
        "software-testing-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "slug": "non-functional-testing-metrics",
      "title": "Non-functional testing & metrics",
      "summary": "Performance, load, stress, soak, spike and regression testing, and quality metric categories",
      "ids": [
        "software-testing-end-term-aug-2025-an-q1",
        "software-testing-end-term-aug-2025-an-q2",
        "software-testing-end-term-aug-2025-an-q4",
        "software-testing-end-term-aug-2025-fn-q1",
        "software-testing-end-term-aug-2025-fn-q2",
        "software-testing-end-term-aug-2025-fn-q4",
        "software-testing-quiz-1-oct-2025-an-q13"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Which graph coverage equals state coverage on an FSM",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q1",
        "software-testing-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "title": "Count test requirements for edge-pair coverage on a graph",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q15",
        "software-testing-end-term-aug-2025-an-q21",
        "software-testing-end-term-aug-2025-fn-q21",
        "software-testing-quiz-1-oct-2025-an-q15"
      ]
    },
    {
      "title": "Find cyclomatic complexity / linearly independent paths of a CFG",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q14",
        "software-testing-end-term-aug-2025-an-q20",
        "software-testing-end-term-aug-2025-fn-q20",
        "software-testing-quiz-1-oct-2025-an-q17"
      ]
    },
    {
      "title": "Find which strings an FSM accepts",
      "ids": [
        "software-testing-end-term-aug-2025-an-q16",
        "software-testing-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Which data flow coverage a set of test paths satisfies for a variable",
      "ids": [
        "software-testing-end-term-aug-2025-an-q15",
        "software-testing-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "Which integration approach needs test stubs or drivers",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q6",
        "software-testing-quiz-1-oct-2025-an-q5",
        "software-testing-quiz-1-oct-2025-an-q8"
      ]
    },
    {
      "title": "Find RACC pairs for a clause from a truth table",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q11",
        "software-testing-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "Find RICC pairs for a clause from a truth table",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q13",
        "software-testing-end-term-aug-2025-an-q19",
        "software-testing-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "title": "Count tests needed for an ISP criterion (ECC, BCC, ACoC)",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q7",
        "software-testing-end-term-aug-2025-an-q9",
        "software-testing-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Find the path constraint that reaches an abort() call",
      "ids": [
        "software-testing-quiz-2-aug-2025-an-q17",
        "software-testing-end-term-aug-2025-an-q12",
        "software-testing-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "Find the language generated by a context-free grammar",
      "ids": [
        "software-testing-end-term-aug-2025-an-q3",
        "software-testing-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Name the inheritance mutation operator (super / constructor change)",
      "ids": [
        "software-testing-end-term-aug-2025-an-q8",
        "software-testing-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Name the mutation operator used to get a mutant from a statement",
      "ids": [
        "software-testing-end-term-aug-2025-an-q13",
        "software-testing-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "Name the OO inheritance anomaly in a Java class hierarchy",
      "ids": [
        "software-testing-end-term-aug-2025-an-q10",
        "software-testing-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Find which methods are invoked through overriding",
      "ids": [
        "software-testing-end-term-aug-2025-an-q11",
        "software-testing-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Pick the correct implementation for a TDD user story's tests",
      "ids": [
        "software-testing-end-term-aug-2025-an-q17",
        "software-testing-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Pick the type of client-side bypass testing",
      "ids": [
        "software-testing-end-term-aug-2025-an-q5",
        "software-testing-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "Pick the ATG transition type for a user action",
      "ids": [
        "software-testing-end-term-aug-2025-an-q7",
        "software-testing-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Identify atomic sections in a Java servlet",
      "ids": [
        "software-testing-end-term-aug-2025-an-q14",
        "software-testing-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Pick performance, regression or functional testing for a scenario",
      "ids": [
        "software-testing-end-term-aug-2025-an-q1",
        "software-testing-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "Pick load, stress, spike or soak testing for a scenario",
      "ids": [
        "software-testing-end-term-aug-2025-an-q2",
        "software-testing-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Classify a software metric (BMI, DRE) into its category",
      "ids": [
        "software-testing-end-term-aug-2025-an-q4",
        "software-testing-end-term-aug-2025-fn-q4"
      ]
    }
  ]
};
