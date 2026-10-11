import type { QualifierMock } from "../../types";

// Software Testing: IIT Madras BS End Term papers (2 papers, 42 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const softwareTestingEndTermPapers: QualifierMock[] = [
  {
    slug: "software-testing-end-term-aug-2025-fn",
    title: "Software Testing End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "software-testing",
        title: "Software Testing",
        short: "Software Testing",
        questions: [
          {
            id: "software-testing-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 5,
            prompt: "Consider that some modules are modified or added in an existing software program. Which of the following types of testing is done to ensure that all existing and new modules are working correctly?",
            options: [
              "Functional Testing",
              "Performance Testing",
              "Regression Testing",
              "Usability Testing"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 5,
            prompt: "Consider that for testing a web application, the number of concurrent users was suddenly increased by a very large amount, and the performance of the application was measured. Which of the following types of testing does this scenario represent?",
            options: [
              "Stress Testing",
              "Spike Testing",
              "Soak Testing",
              "Load Testing"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q3-1.webp#575x185)",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q3-opt1-1.webp#138x27)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q3-opt2-1.webp#152x26)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q3-opt3-1.webp#139x27)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q3-opt4-1.webp#155x26)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 5,
            prompt: "Defect Removal Effectiveness (DRE) belongs to which of the following categories of software metrics?",
            options: [
              "Product Quality Metrics",
              "Object-Oriented Software Metrics",
              "Maintenance Quality Metrics",
              "In-Process Quality Metrics"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 5,
            prompt: "Which type of client-side testing executes test cases that break the normal execution sequence of a web application?",
            options: [
              "Parameter level bypass testing",
              "Control flow level bypass testing",
              "Value level bypass testing",
              "User-session data based testing"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q6-1.webp#575x210)",
            options: [
              "1 - A, 2 - C, 3 - B",
              "1 - A, 2 - B, 3 - C",
              "1 - B, 2 - C, 3 - A",
              "1 - B, 2 - A, 3 - C"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q7",
            type: "mcq",
            marks: 5,
            prompt: "Consider that a user fills a form in a web application, but instead of submitting the form, she clicks on the refresh button in the browser. Which type of transition would take place in the Application Transition Graph (ATG) in this scenario?",
            options: [
              "Operational Transition",
              "Form Link Transition",
              "Redirect Transition",
              "Simple Link Transition"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q8",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q8-1.webp#575x450)",
            options: [
              "Hiding Variable Insertion (HVI)",
              "Super Keyword Deletion (SKD)",
              "Parent Constructor Deletion (PCD)",
              "Overriding Method Deletion (OMD)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q9",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q9-1.webp#575x45)",
            options: [
              "12",
              "24",
              "48",
              "64"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q10",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q10-1.webp#575x655)",
            options: [
              "State Definition Anomaly (SDA)",
              "State Definition Inconsistency Anomaly (SDIA)",
              "Inconsistent Type Use (ITU)",
              "State Visibility Anomaly (SVA)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q11",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q11-1.webp#575x511)",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q11-opt1-1.webp#249x23)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q11-opt2-1.webp#251x24)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q11-opt3-1.webp#252x25)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q11-opt4-1.webp#252x23)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q12",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q12-1.webp#575x349)",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q12-opt1-1.webp#262x26)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q12-opt2-1.webp#261x25)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q12-opt3-1.webp#260x23)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q12-opt4-1.webp#258x23)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q13",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q13-1.webp#575x175)",
            options: [
              "Scalar variable replacement",
              "Arithmetic operator replacement",
              "Absolute value insertion",
              "Assignment operator replacement"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q14",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q14-1.webp#575x842)",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q14-opt1-1.webp#255x29)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q14-opt2-1.webp#252x23)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q14-opt3-1.webp#254x25)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q14-opt4-1.webp#252x23)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q15",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q15-1.webp#575x297)",
            options: [
              "All-Defs Coverage only",
              "All-Uses Coverage only",
              "All-DU-Paths Coverage",
              "None of these"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q16",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q16-1.webp#522x275)",
            options: [
              "A string of only zeros",
              "A string starting with one, followed by zeros, and ending with a one",
              "A string starting with a one and ending with zeros",
              "A string starting with a one, followed by zeros, and ending with a zero"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q17",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q17-1.webp#575x374)",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q17-opt1-1.webp#563x180)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q17-opt2-1.webp#561x255)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q17-opt3-1.webp#560x257)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q17-opt4-1.webp#559x259)"
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q18",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q18-passage-1.webp#565x308)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following is the set of RACC pairs for clause a?",
            options: [
              "{(1, 5), (2, 6), (3, 7)}",
              "{(2, 6)}",
              "{(1, 5), (3, 7), (4, 8)}",
              "{(1, 6)}"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q19",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q18-passage-1.webp#565x308)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following is the set of RICC pairs for clause a?",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q19-opt1-1.webp#266x54)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q19-opt2-1.webp#319x23)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q19-opt3-1.webp#289x53)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q19-opt4-1.webp#289x56)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q20",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q20-passage-1.webp#545x131)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the cyclomatic complexity of G?",
            options: [
              "6",
              "5",
              "4",
              "3"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-fn-q21",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/software-testing-end-term-aug-2025-fn/q20-passage-1.webp#545x131)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How many test requirements are there for edge-pair coverage on G?",
            options: [
              "6",
              "7",
              "8",
              "9"
            ],
            answer: 2,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "software-testing-end-term-aug-2025-an",
    title: "Software Testing End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "software-testing",
        title: "Software Testing",
        short: "Software Testing",
        questions: [
          {
            id: "software-testing-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 5,
            prompt: "Consider that an organization is building a large-scale software application. Which of the following types of testing is done to ensure the speed and response time of the system are conforming to the specifications?",
            options: [
              "Performance Testing",
              "Usability Testing",
              "Functional Testing",
              "Regression Testing"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 5,
            prompt: "Which of the following tests is performed to monitor the system parameters, such as memory utilization, to detect memory leaks or other performance issues under the continuous expected load?",
            options: [
              "Load Testing",
              "Stress Testing",
              "Spike Testing",
              "Soak Testing"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q3-1.webp#575x200)",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q3-opt1-1.webp#139x30)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q3-opt2-1.webp#158x24)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q3-opt3-1.webp#134x28)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q3-opt4-1.webp#155x27)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 5,
            prompt: "Backlog Management Index (BMI) belongs to which of the following categories of software metrics?",
            options: [
              "In-Process Quality Metrics",
              "Product Quality Metrics",
              "Object-Oriented Software Metrics",
              "Maintainance Quality Metrics"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 5,
            prompt: "Which type of client-side testing verifies if a web application adequately evaluates invalid inputs?",
            options: [
              "Control flow level bypass testing",
              "Value level bypass testing",
              "Parameter level bypass testing",
              "User-session data based testing"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q6",
            type: "mcq",
            marks: 5,
            prompt: "The following table lists the layers of a web application.\n\n![Figure](/pyq/software-testing-end-term-aug-2025-an/q6-1.webp#531x153)\n\nMatch each type of layer in Column A with its correct purpose in Column B.",
            options: [
              "1 - C, 2 - D, 3 - A, 4 - B",
              "1 - D, 2 - C, 3 - B, 4 - A",
              "1 - D, 2 - C, 3 - A, 4 - B",
              "1 - B, 2 - A, 3 - C, 4 - D"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q7",
            type: "mcq",
            marks: 5,
            prompt: "Consider that a user clicks on a hyperlink in a web page, and the browser navigates to a different page. Which type of transition would take place in the Application Transition Graph (ATG) in this scenario?",
            options: [
              "Operational Transition",
              "Form Link Transition",
              "Redirect Transition",
              "Simple Link Transition"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q8",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q8-1.webp#575x476)",
            options: [
              "Parent Constructor Deletion (PCD)",
              "Super Keyword Deletion (SKD)",
              "Overriding Method Deletion (OMD)",
              "Hiding Variable Insertion (HVI)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q9",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q9-1.webp#575x50)",
            options: [
              "4",
              "12",
              "6",
              "8"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q10",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q10-1.webp#575x680)",
            options: [
              "State Definition Anomaly (SDA)",
              "State Definition Inconsistency Anomaly (SDIA)",
              "Inconsistent Type Use (ITU)",
              "State Visibility Anomaly (SVA)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q11",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q11-1.webp#575x548)",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q11-opt1-1.webp#268x27)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q11-opt2-1.webp#265x25)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q11-opt3-1.webp#264x24)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q11-opt4-1.webp#263x26)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q12",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q12-1.webp#575x373)",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q12-opt1-1.webp#274x28)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q12-opt2-1.webp#277x24)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q12-opt3-1.webp#276x24)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q12-opt4-1.webp#278x34)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q13",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q13-1.webp#575x190)",
            options: [
              "Assignment operator replacement",
              "Absolute value insertion",
              "Scalar variable replacement",
              "Arithmetic operator replacement"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q14",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q14-1.webp#575x842)",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q14-opt1-1.webp#268x25)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q14-opt2-1.webp#268x27)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q14-opt3-1.webp#267x25)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q14-opt4-1.webp#271x26)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q15",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q15-1.webp#575x292)",
            options: [
              "All-Defs Coverage only",
              "All-Uses Coverage only",
              "All-DU-Paths Coverage",
              "None of these"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q16",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q16-1.webp#549x275)",
            options: [
              "A string of only ones",
              "A string starting with one, followed by zeros, and ending with a one",
              "A string starting with zero, followed by ones, and ending with a zero",
              "A string starting with a zero and ending with ones"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q17",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q17-1.webp#575x364)\n\nWhich of the following are the appropriate implementations of the user story?",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q17-opt1-1.webp#575x278)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q17-opt2-1.webp#575x271)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q17-opt3-1.webp#575x274)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q17-opt4-1.webp#575x187)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q18",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q18-passage-1.webp#575x330)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following is the set of CACC pairs for clause b?",
            options: [
              "{(1, 5), (3, 7), (4, 8)}",
              "{(1, 8)}",
              "{(6, 8)}",
              "{(1, 5), (6, 8), (3, 7)}"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q19",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q18-passage-1.webp#575x330)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following is the set of RICC pairs for clause b?",
            options: [
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q19-opt1-1.webp#250x63)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q19-opt2-1.webp#254x57)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q19-opt3-1.webp#235x63)",
              "![Figure](/pyq/software-testing-end-term-aug-2025-an/q19-opt4-1.webp#236x63)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q20",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q20-passage-1.webp#575x137)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the cyclomatic complexity of G?",
            options: [
              "3",
              "4",
              "5",
              "6"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "software-testing-end-term-aug-2025-an-q21",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/software-testing-end-term-aug-2025-an/q20-passage-1.webp#575x137)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How many test requirements are there for edge-pair coverage on G?",
            options: [
              "7",
              "9",
              "8",
              "6"
            ],
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  }
];
