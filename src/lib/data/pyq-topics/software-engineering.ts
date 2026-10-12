import type { PyqTopicTags } from "../../types";

// 51 past-paper questions in 8 topics, 10 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const softwareEngineeringTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "process-models-agile",
      "title": "Process models, Agile & Scrum",
      "summary": "Waterfall vs Agile, Agile principles, Scrum events, velocity and SMART user stories",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q5",
        "software-engineering-quiz-2-aug-2025-an-q7",
        "software-engineering-quiz-2-aug-2025-an-q9",
        "software-engineering-quiz-2-aug-2025-an-q16",
        "software-engineering-end-term-aug-2025-fn-q6",
        "software-engineering-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "slug": "requirements",
      "title": "Requirements gathering & analysis",
      "summary": "Clients and stakeholders, requirement issues and gathering techniques like documentation and observation",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q1",
        "software-engineering-quiz-2-aug-2025-an-q2",
        "software-engineering-quiz-2-aug-2025-an-q3",
        "software-engineering-quiz-2-aug-2025-an-q4",
        "software-engineering-quiz-2-aug-2025-an-q6",
        "software-engineering-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "slug": "usability-and-prototyping",
      "title": "Usability, heuristics & prototypes",
      "summary": "Prototype types, usability factors like learnability and efficiency, and UI heuristics",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q8",
        "software-engineering-quiz-2-aug-2025-an-q19",
        "software-engineering-end-term-aug-2025-fn-q7",
        "software-engineering-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "slug": "software-design",
      "title": "Software design: coupling & cohesion",
      "summary": "Design qualities, coupling and cohesion types, interfaces and class relationships",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q10",
        "software-engineering-quiz-2-aug-2025-an-q17",
        "software-engineering-quiz-2-aug-2025-an-q18",
        "software-engineering-quiz-2-aug-2025-an-q20",
        "software-engineering-end-term-aug-2025-fn-q4",
        "software-engineering-end-term-aug-2025-fn-q16",
        "software-engineering-end-term-aug-2025-fn-q17",
        "software-engineering-end-term-aug-2025-fn-q25"
      ]
    },
    {
      "slug": "principles-patterns-architecture",
      "title": "SOLID, design patterns & architecture",
      "summary": "SOLID principles, Facade/Builder patterns and architectural styles such as peer-to-peer",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q13",
        "software-engineering-quiz-2-aug-2025-an-q14",
        "software-engineering-quiz-2-aug-2025-an-q15",
        "software-engineering-end-term-aug-2025-fn-q12",
        "software-engineering-end-term-aug-2025-fn-q13",
        "software-engineering-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "slug": "estimation-and-risk",
      "title": "Estimation & risk management",
      "summary": "COCOMO effort with cost drivers, expert judgement, and classifying and mitigating risks",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q21",
        "software-engineering-quiz-2-aug-2025-an-q22",
        "software-engineering-quiz-2-aug-2025-an-q23",
        "software-engineering-quiz-2-aug-2025-an-q24",
        "software-engineering-end-term-aug-2025-fn-q5",
        "software-engineering-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "slug": "testing-and-debugging",
      "title": "Testing & debugging",
      "summary": "Cyclomatic complexity, equivalence classes, coverage criteria, integration and smoke testing, debugging",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q11",
        "software-engineering-quiz-2-aug-2025-an-q12",
        "software-engineering-end-term-aug-2025-fn-q9",
        "software-engineering-end-term-aug-2025-fn-q10",
        "software-engineering-end-term-aug-2025-fn-q11",
        "software-engineering-end-term-aug-2025-fn-q15",
        "software-engineering-end-term-aug-2025-fn-q26",
        "software-engineering-end-term-aug-2025-fn-q27"
      ]
    },
    {
      "slug": "deployment-and-tools",
      "title": "Deployment, hosting & dev tools",
      "summary": "Hosting options, frameworks, staging and versioned deployment, task queues and team roles",
      "ids": [
        "software-engineering-end-term-aug-2025-fn-q1",
        "software-engineering-end-term-aug-2025-fn-q2",
        "software-engineering-end-term-aug-2025-fn-q3",
        "software-engineering-end-term-aug-2025-fn-q14",
        "software-engineering-end-term-aug-2025-fn-q22",
        "software-engineering-end-term-aug-2025-fn-q23",
        "software-engineering-end-term-aug-2025-fn-q24"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Classify the risk from a faulty third-party module",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q21",
        "software-engineering-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "Which SMART criterion a user story lacks or gains",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q7",
        "software-engineering-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Identify the peer-to-peer architecture from a description",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q13",
        "software-engineering-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "Identify control coupling when a flag decides another module's behaviour",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q17",
        "software-engineering-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Identify class relationships (association, inheritance, realization) in a scenario",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q18",
        "software-engineering-end-term-aug-2025-fn-q25"
      ]
    },
    {
      "title": "Choose the debugging technique for a scenario",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q11",
        "software-engineering-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "Identify the design pattern (Facade, Builder) that fits a scenario",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q15",
        "software-engineering-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "Identify or apply a SOLID principle (ISP, LSP) in a class design",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q14",
        "software-engineering-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "Identify the usability factor a feature improves",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q19",
        "software-engineering-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Identify the requirement gathering technique used",
      "ids": [
        "software-engineering-quiz-2-aug-2025-an-q6",
        "software-engineering-end-term-aug-2025-fn-q8"
      ]
    }
  ]
};
