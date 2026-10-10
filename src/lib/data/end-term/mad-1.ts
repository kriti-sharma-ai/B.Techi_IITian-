import type { QualifierMock } from "../../types";

// Modern Application Development I: IIT Madras BS End Term papers (4 papers, 128 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const mad1EndTermPapers: QualifierMock[] = [
  {
    slug: "mad-1-end-term-aug-2025-fn",
    title: "MAD I End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "modern-application-development-1",
        title: "Modern Application Development I",
        short: "MAD I",
        questions: [
          {
            id: "mad-1-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "You're designing an API to update a user's profile picture but your database has 4 records in a row, profile picture is one of them. Which HTTP method is most appropriate?",
            options: [
              "POST",
              "PATCH",
              "PUT",
              "DELETE"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 2,
            prompt: "What is the correct sequence of operations when receiving a form in Flask?",
            options: [
              "Validate → Render → Access → Store",
              "Access → Store → Validate → Render",
              "Access → Validate → Store → Redirect",
              "POST → GET → Redirect → Validate"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 2,
            prompt: "Consider the following statements and choose the correct option\nStatement 1: It is mandatory to implement server-side validations and client-side validations. Statement 2: Server-side validations can be implemented using HTML5.",
            options: [
              "Statement 1 is false, while statement 2 is true",
              "Statement 1 is true, while statement 2 is false",
              "Both statements are false",
              "Both statements are true"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q4-1.webp#575x288)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q4-opt1-1.webp#120x22)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q4-opt2-1.webp#137x20)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q4-opt3-1.webp#136x21)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q4-opt4-1.webp#335x23)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q5-1.webp#575x218)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q5-opt1-1.webp#78x17)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q5-opt2-1.webp#154x21)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q5-opt3-1.webp#156x21)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q5-opt4-1.webp#153x24)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q6-1.webp#575x283)",
            options: [
              "There is no return statement inside the function",
              "The form is missing CSRF protection",
              "The Flask route does not allow POST method",
              "The route should have a trailing slash"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q7",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q7-1.webp#422x386)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q7-opt1-1.webp#218x23)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q7-opt2-1.webp#366x23)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q7-opt3-1.webp#212x21)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q7-opt4-1.webp#244x28)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q8",
            type: "mcq",
            marks: 3,
            prompt: "A user downloads a 10 MB file from a server with 5 Mbps speed. How long does it approximately take?",
            options: [
              "2 seconds",
              "10 seconds",
              "16 seconds",
              "1.6 seconds"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q9",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q9-1.webp#575x335)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q9-opt1-1.webp#485x23)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q9-opt2-1.webp#345x22)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q9-opt3-1.webp#358x19)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q9-opt4-1.webp#354x21)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q10",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q10-1.webp#575x379)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q10-opt1-1.webp#575x50)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q10-opt2-1.webp#575x54)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q10-opt3-1.webp#575x50)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q10-opt4-1.webp#575x28)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q11",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q11-1.webp#575x726)",
            options: [
              "Color: green, Font-size: 20px",
              "Color: orange, Font-size: 14px",
              "Color: purple, Font-size: 20px",
              "Color: purple, Font-size: 14px"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q12",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q12-1.webp#452x275)",
            options: [
              "1-c, 2-a, 3-d, 4-b",
              "1-d, 2-c, 3-a, 4-b",
              "1-c, 2-d, 3-b, 4-a",
              "1-c, 2-d, 3-a, 4-b"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q13",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q13-1.webp#575x417)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q13-opt1-1.webp#367x67)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q13-opt2-1.webp#373x69)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q13-opt3-1.webp#238x69)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q13-opt4-1.webp#228x71)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q14",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q14-1.webp#575x369)",
            options: [
              "Blue",
              "Red",
              "Green",
              "Black"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q15",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q15-1.webp#575x291)",
            options: [
              "1-a, 2- c, 3-b, 4-d, 5-e",
              "1-b, 2- c, 3-a, 4-e, 5-d",
              "1-e, 2- d, 3-b, 4-a, 5-c",
              "1-e, 2- d, 3-c, 4-a, 5-b"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q16",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q16-1.webp#575x320)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q16-opt1-1.webp#575x27)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q16-opt2-1.webp#575x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q16-opt3-1.webp#482x20)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q16-opt4-1.webp#575x25)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q17",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q17-1.webp#575x842)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q17-opt1-1.webp#382x165)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q17-opt2-1.webp#329x166)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q17-opt3-1.webp#343x161)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q17-opt4-1.webp#335x165)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q18",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q18-1.webp#575x842)",
            options: [
              "All routes will work correctly as Flask will automatically search in both templates/ and custom_templates/ folders",
              "The / and /dashboard routes will fail with TemplateNotFound error, while /admin and /profile routes will work correctly",
              "Only the /admin and /profile routes will work correctly, while / and /dashboard routes will fail with TemplateNotFound error",
              "All routes will fail because Flask requires the template folder to be named exactly templates"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q19",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q19-1.webp#575x829)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q19-opt1-1.webp#575x98)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q19-opt2-1.webp#575x96)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q19-opt3-1.webp#575x92)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q19-opt4-1.webp#575x48)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q20",
            type: "multi",
            marks: 2,
            prompt: "Which statements about REST API design are correct?",
            options: [
              "PUT requests should be idempotent",
              "GET requests can have request bodies for complex queries",
              "PATCH is used for partial updates",
              "DELETE must return the deleted resource"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q21",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q21-1.webp#540x29)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q21-opt1-1.webp#416x25)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q21-opt2-1.webp#258x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q21-opt3-1.webp#338x21)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q21-opt4-1.webp#337x20)"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q22",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q22-1.webp#575x207)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q22-opt1-1.webp#536x81)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q22-opt2-1.webp#527x79)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q22-opt3-1.webp#551x73)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q22-opt4-1.webp#383x73)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q22-opt5-1.webp#435x75)"
            ],
            answer: [
              0,
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q23",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q23-1.webp#575x626)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q23-opt1-1.webp#460x25)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q23-opt2-1.webp#444x23)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q23-opt3-1.webp#440x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q23-opt4-1.webp#434x18)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q23-opt5-1.webp#411x21)"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q24",
            type: "multi",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q24-1.webp#575x795)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q24-opt1-1.webp#290x21)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q24-opt2-1.webp#465x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q24-opt3-1.webp#356x19)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q24-opt4-1.webp#345x19)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q24-opt5-1.webp#116x20)"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q25",
            type: "multi",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q25-1.webp#575x587)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q25-opt1-1.webp#447x104)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q25-opt2-1.webp#575x74)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q25-opt3-1.webp#444x94)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q25-opt4-1.webp#492x69)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q26",
            type: "mcq",
            marks: 4.5,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q26-passage-1.webp#575x815)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q26-1.webp#398x130)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q26-opt1-1.webp#430x30)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q26-opt2-1.webp#426x21)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q26-opt3-1.webp#433x26)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q26-opt4-1.webp#430x22)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q27",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q26-passage-1.webp#575x815)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q27-1.webp#386x128)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q27-opt1-1.webp#425x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q27-opt2-1.webp#424x20)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q27-opt3-1.webp#251x25)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q27-opt4-1.webp#433x23)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q28",
            type: "mcq",
            marks: 4.5,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q28-passage-1.webp#575x694)\n\n![Figure](/pyq/mad-1-end-term-aug-2025-fn/q28-passage-2.webp#575x652)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following statements about the database schema and model relationships is correct?",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q28-opt1-1.webp#367x84)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q28-opt2-1.webp#345x123)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q28-opt3-1.webp#358x117)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q28-opt4-1.webp#306x84)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q29",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q28-passage-1.webp#575x694)\n\n![Figure](/pyq/mad-1-end-term-aug-2025-fn/q28-passage-2.webp#575x652)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q29-1.webp#295x116)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q29-opt1-1.webp#232x86)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q29-opt2-1.webp#223x110)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q29-opt3-1.webp#232x82)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q29-opt4-1.webp#229x112)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q30",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q30-passage-1.webp#575x618)",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q30-1.webp#534x79)",
            options: [
              "Alex scored 0 and received grade F",
              "Invalid marks for Alex",
              "Alex scored eighty and received grade F",
              "Error 500: Internal Server Error"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q31",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q30-passage-1.webp#575x618)",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q31-1.webp#391x75)",
            options: [
              "Guest scored 88 and received grade A",
              "Guest scored 88 and received grade B",
              "Guest scored 0 and received grade F",
              "Invalid marks for Guest"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-fn-q32",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q30-passage-1.webp#575x618)",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-fn/q32-1.webp#519x74)",
            options: [
              "Anya scored 59.5 and received grade F",
              "Anya scored 0 and received grade F",
              "Invalid marks for Anya",
              "Anya scored 59 and received grade F"
            ],
            answer: 2,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "mad-1-end-term-aug-2025-an",
    title: "MAD I End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "modern-application-development-1",
        title: "Modern Application Development I",
        short: "MAD I",
        questions: [
          {
            id: "mad-1-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q1-1.webp#464x186)",
            options: [
              "Riya",
              "Name stored in database",
              "None",
              "Error"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 2,
            prompt: "What does SQLAlchemy's lazy='dynamic' do?",
            options: [
              "Loads extra content of all the tables",
              "Returns a query object that can be filtered",
              "Loads all related records immediately",
              "Forces join queries at once"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 2,
            prompt: "Why is using the GET method for sensitive data discouraged?",
            options: [
              "GET encrypts the URL",
              "Data becomes part of browser history and URL",
              "It uses a separate request header",
              "Flask doesn’t support GET by default"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q4-1.webp#526x261)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q4-opt1-1.webp#244x25)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q4-opt2-1.webp#273x22)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q4-opt3-1.webp#263x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q4-opt4-1.webp#253x23)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 2,
            prompt: "A login form doesn't show any message when users enter wrong credentials. Which Nielsen heuristic is violated?",
            options: [
              "Aesthetic and minimalist design",
              "Visibility of system status",
              "Error prevention",
              "Recognition rather than recall"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q6",
            type: "multi",
            marks: 2,
            prompt: "Which of the following are handled by the browser and not the Flask server?",
            options: [
              "Parsing HTML",
              "Auto-filling saved form data",
              "URL routing",
              "JavaScript execution"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q7",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q7-1.webp#575x228)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q7-opt1-1.webp#201x81)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q7-opt2-1.webp#219x80)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q7-opt3-1.webp#190x84)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q7-opt4-1.webp#196x84)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q8",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q8-1.webp#575x457)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q8-opt1-1.webp#318x151)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q8-opt2-1.webp#376x158)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q8-opt3-1.webp#318x160)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q8-opt4-1.webp#315x156)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q9",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q9-1.webp#575x193)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q9-opt1-1.webp#277x31)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q9-opt2-1.webp#246x26)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q9-opt3-1.webp#239x23)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q9-opt4-1.webp#242x27)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q10",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q10-1.webp#575x487)",
            options: [
              "Result: 20",
              "Result: 1",
              "Result: 5",
              "Result: 4"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q11",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q11-1.webp#575x411)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q11-opt1-1.webp#575x119)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q11-opt2-1.webp#575x143)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q11-opt3-1.webp#575x142)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q11-opt4-1.webp#575x173)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q12",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q12-1.webp#418x384)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q12-opt1-1.webp#220x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q12-opt2-1.webp#218x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q12-opt3-1.webp#247x23)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q12-opt4-1.webp#368x28)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q13",
            type: "mcq",
            marks: 3,
            prompt: "A user downloads a 10 MB file from a server with 5 Mbps speed. How long does it approximately take?",
            options: [
              "2 seconds",
              "10 seconds",
              "16 seconds",
              "1.6 seconds"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q14",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q14-1.webp#575x338)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q14-opt1-1.webp#488x27)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q14-opt2-1.webp#366x21)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q14-opt3-1.webp#352x26)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q14-opt4-1.webp#356x22)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q15",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q15-1.webp#575x389)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q15-opt1-1.webp#575x58)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q15-opt2-1.webp#575x51)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q15-opt3-1.webp#575x31)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q15-opt4-1.webp#575x54)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q16",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q16-1.webp#575x432)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q16-opt1-1.webp#343x54)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q16-opt2-1.webp#233x72)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q16-opt3-1.webp#342x59)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q16-opt4-1.webp#230x79)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q17",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q17-1.webp#575x280)",
            options: [
              "1-a, 2- c, 3-b, 4-d, 5-e",
              "1-b, 2- c, 3-a, 4-e, 5-d",
              "1-e, 2- d, 3-c, 4-a, 5-b",
              "1-e, 2- d, 3-b, 4-a, 5-c"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q18",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q18-1.webp#575x315)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q18-opt1-1.webp#575x27)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q18-opt2-1.webp#575x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q18-opt3-1.webp#575x27)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q18-opt4-1.webp#488x26)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q19",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q19-1.webp#575x842)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q19-opt1-1.webp#575x54)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q19-opt2-1.webp#575x59)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q19-opt3-1.webp#575x54)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q19-opt4-1.webp#575x54)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q20",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q20-1.webp#575x837)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q20-opt1-1.webp#575x93)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q20-opt2-1.webp#575x95)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q20-opt3-1.webp#575x48)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q20-opt4-1.webp#575x94)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q21",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q21-1.webp#575x633)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q21-opt1-1.webp#575x60)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q21-opt2-1.webp#575x27)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q21-opt3-1.webp#575x31)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q21-opt4-1.webp#575x22)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q22",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q22-1.webp#575x478)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q22-opt1-1.webp#388x25)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q22-opt2-1.webp#408x23)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q22-opt3-1.webp#359x25)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q22-opt4-1.webp#355x26)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q23",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q23-1.webp#537x29)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q23-opt1-1.webp#264x29)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q23-opt2-1.webp#419x26)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q23-opt3-1.webp#343x29)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q23-opt4-1.webp#343x29)"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q24",
            type: "multi",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q24-1.webp#575x829)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q24-opt1-1.webp#297x35)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q24-opt2-1.webp#363x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q24-opt3-1.webp#353x20)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q24-opt4-1.webp#475x24)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q24-opt5-1.webp#114x22)"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q25",
            type: "multi",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q25-1.webp#575x584)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q25-opt1-1.webp#452x101)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q25-opt2-1.webp#480x81)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q25-opt3-1.webp#458x104)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q25-opt4-1.webp#575x75)"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q26",
            type: "multi",
            marks: 4.5,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q26-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q26-1.webp#325x97)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q26-opt1-1.webp#485x63)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q26-opt2-1.webp#390x61)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q26-opt3-1.webp#575x64)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q26-opt4-1.webp#555x69)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q26-opt5-1.webp#575x66)"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q27",
            type: "multi",
            marks: 3,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q26-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Analyze the following URLs and their expected behaviors. Which statement is CORRECT?",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q27-opt1-1.webp#380x69)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q27-opt2-1.webp#575x64)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q27-opt3-1.webp#552x64)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q27-opt4-1.webp#485x63)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q27-opt5-1.webp#575x62)"
            ],
            answer: [
              2,
              3,
              4
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q28",
            type: "mcq",
            marks: 4.5,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q28-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q28-1.webp#334x120)",
            options: [
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q28-opt1-1.webp#517x30)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q28-opt2-1.webp#516x59)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q28-opt3-1.webp#535x33)",
              "![Figure](/pyq/mad-1-end-term-aug-2025-an/q28-opt4-1.webp#501x32)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q29",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q28-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q29-1.webp#575x246)",
            options: [
              "Request 1: 400, Request 2: 201, Request 3: 204",
              "Request 1: 201, Request 2: 201, Request 3: 204",
              "Request 1: 400, Request 2: 405, Request 3: 204",
              "Request 1: 201, Request 2: 405, Request 3: 200"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q30",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q30-passage-1.webp#575x614)",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q30-1.webp#539x80)",
            options: [
              "Alex scored 0 and received grade F.",
              "Alex scored eighty and received grade F",
              "Error 500: Internal Server Error",
              "Invalid marks for Alex"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q31",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q30-passage-1.webp#575x614)",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q31-1.webp#391x82)",
            options: [
              "Guest scored 88 and received grade A",
              "Guest scored 0 and received grade F",
              "Guest scored 88 and received grade B",
              "Invalid marks for Guest"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-aug-2025-an-q32",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q30-passage-1.webp#575x614)",
            prompt: "![Figure](/pyq/mad-1-end-term-aug-2025-an/q32-1.webp#516x84)",
            options: [
              "Anya scored 59.5 and received grade F",
              "Invalid marks for Anya",
              "Anya scored 0 and received grade F",
              "Anya scored 59 and received grade F"
            ],
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "mad-1-end-term-apr-2025-fn",
    title: "MAD I End Term · 13 Apr 2025 (FN)",
    description: "End Term paper from the January 2025 term, forenoon session on 13 Apr 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-04-13",
      session: "FN",
      term: "January 2025"
    },
    sections: [
      {
        subjectSlug: "modern-application-development-1",
        title: "Modern Application Development I",
        short: "MAD I",
        questions: [
          {
            id: "mad-1-end-term-apr-2025-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q1-1.webp#575x128)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q1-opt1-1.webp#509x31)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q1-opt2-1.webp#575x52)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q1-opt3-1.webp#575x53)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q1-opt4-1.webp#575x52)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q2-1.webp#575x428)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q2-opt1-1.webp#136x45)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q2-opt2-1.webp#152x49)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q2-opt3-1.webp#251x43)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q2-opt4-1.webp#226x41)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q3",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q3-1.webp#575x202)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q3-opt1-1.webp#237x87)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q3-opt2-1.webp#247x91)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q3-opt3-1.webp#220x94)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q3-opt4-1.webp#214x85)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q4",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q4-1.webp#452x281)",
            options: [
              "1-c, 2-a, 3-d, 4-b",
              "1-d, 2-c, 3-a, 4-b",
              "1-c, 2-d, 3-b, 4-a",
              "1-c, 2-d, 3-a, 4-b"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q5-1.webp#575x373)",
            options: [
              "Perceivable",
              "Operable",
              "Understandable",
              "Robust"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q6-1.webp#575x705)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q6-opt1-1.webp#332x61)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q6-opt2-1.webp#322x64)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q6-opt3-1.webp#322x65)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q6-opt4-1.webp#322x69)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q7",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q7-1.webp#466x842)",
            options: [
              "1- b, 2 - a, 3- d, 4 - c",
              "1- c, 2 - d, 3- d, 4 - b",
              "1- c, 2 - a, 3- d, 4 - b",
              "1- a, 2 - c, 3- b, 4 - d"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q8",
            type: "mcq",
            marks: 3,
            prompt: "A Server S needs to retrieve data from two datacenters D1 and D2 located at 1500 kilometres and 3000 kilometres respectively. Server S and D1 are connected via medium M1 through which information can be transferred with the speed of 1.5×10^8 m/sec, and server S and D2 are connected via medium M2. If the server received data from both the data centres at the same time, what must be the speed of information transfer in medium M2(overheads should be ignored)?\n(Concept: Performance parameters of a network)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q8-opt1-1.webp#131x28)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q8-opt2-1.webp#117x26)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q8-opt3-1.webp#135x24)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q8-opt4-1.webp#119x23)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q9",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q9-1.webp#575x160)",
            options: [
              "3000",
              "6000",
              "9000",
              "12000"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q10",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q10-1.webp#575x141)",
            options: [
              "64.8",
              "18",
              "5.4",
              "22.5"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q11",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q11-1.webp#575x447)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q11-opt1-1.webp#575x64)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q11-opt2-1.webp#575x91)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q11-opt3-1.webp#575x59)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q11-opt4-1.webp#575x83)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q12",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q12-1.webp#575x724)",
            options: [
              "Only 3",
              "Only 3 and 4",
              "Only 5 and 6",
              "Only 3, 4, 5 and 6"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q13",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q13-1.webp#575x467)",
            options: [
              "GET",
              "POST",
              "PUT",
              "DELETE"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q14",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q14-1.webp#575x508)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q14-opt1-1.webp#452x26)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q14-opt2-1.webp#314x26)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q14-opt3-1.webp#438x25)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q14-opt4-1.webp#419x19)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q15",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q15-1.webp#575x502)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q15-opt1-1.webp#387x62)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q15-opt2-1.webp#394x67)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q15-opt3-1.webp#344x86)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q15-opt4-1.webp#316x78)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q16",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q16-1.webp#575x441)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q16-opt1-1.webp#575x124)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q16-opt2-1.webp#575x147)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q16-opt3-1.webp#575x148)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q16-opt4-1.webp#575x167)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q17",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q17-1.webp#575x594)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q17-opt1-1.webp#424x139)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q17-opt2-1.webp#575x59)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q17-opt3-1.webp#575x64)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q17-opt4-1.webp#419x135)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q18",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q18-1.webp#575x842)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q18-opt1-1.webp#393x36)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q18-opt2-1.webp#391x32)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q18-opt3-1.webp#487x33)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q18-opt4-1.webp#390x32)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q19",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q19-1.webp#575x228)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q19-opt1-1.webp#62x21)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q19-opt2-1.webp#71x21)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q19-opt3-1.webp#71x21)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q19-opt4-1.webp#69x24)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q20",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q20-1.webp#575x780)",
            options: [
              "1-c, 2-b, 3-a, 4-d",
              "1-c, 2-d, 3-a, 4-b",
              "1-b, 2-a, 3-b, 4-d",
              "1-b, 2-b, 3-a, 4-a"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q21",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q21-1.webp#575x842)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q21-opt1-1.webp#545x157)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q21-opt2-1.webp#523x150)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q21-opt3-1.webp#448x153)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q21-opt4-1.webp#425x155)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q22",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statements about networking concepts (TCP, UDP, Proxy, Peer-to-Peer, Broadcast, Unicast, Multicast) are correct?",
            options: [
              "TCP is a connection-oriented protocol that ensures reliable data delivery.",
              "UDP is a connectionless protocol that is faster but less reliable than TCP.",
              "Proxy servers facilitate direct peer-to-peer connections between devices.",
              "Broadcast sends a message to all devices in the network.",
              "Unicast is a one-to-many communication model."
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q23",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q23-1.webp#575x522)",
            options: [
              "The signup page is dynamically generated.",
              "The signup page uses server-side rendering.",
              "The signup page uses frontend validation.",
              "The signup page uses backend validation."
            ],
            answer: [
              0,
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q24",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q24-1.webp#575x600)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q24-opt1-1.webp#468x110)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q24-opt2-1.webp#575x80)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q24-opt3-1.webp#467x103)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q24-opt4-1.webp#549x90)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q25",
            type: "multi",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q25-1.webp#575x842)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q25-opt1-1.webp#575x57)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q25-opt2-1.webp#575x55)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q25-opt3-1.webp#575x261)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q25-opt4-1.webp#575x62)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q26",
            type: "multi",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q26-1.webp#575x601)",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q26-opt1-1.webp#468x32)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q26-opt2-1.webp#476x26)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q26-opt3-1.webp#458x29)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q26-opt4-1.webp#443x24)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q26-opt5-1.webp#436x28)"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q27",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q27-passage-1.webp#575x690)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q27-1.webp#352x110)",
            options: [
              "Students Score: 120",
              "students Score : 120",
              "Team not found",
              "Score: students"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q28",
            type: "mcq",
            marks: 4.5,
            passage: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q27-passage-1.webp#575x690)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q28-1.webp#492x107)",
            options: [
              "Dr.Prashant (Instructors) Scored: 40",
              "Dr.Prashant (Instructors) Scored: Player not found",
              "Player not found",
              "Internal Server Error"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q29",
            type: "mcq",
            marks: 2,
            passage: "A college counseling system is designed to store and retrieve student records efficiently. The system uses different types of storage based on latency, throughput, and density. During peak counseling sessions, thousands of students access their academic records, appointment schedules, and previous counseling notes. The system needs to optimize storage selection for different types of data:\n1. Frequently accessed small data (e.g., currently active student records)\n2. Large archives of past counseling records (rarely accessed but need long-term storage) 3. Temporary session data that needs to be quickly read and updated during counseling sessions Based on the above data, answer the given subquestions.",
            prompt: "Which of the following storage types should be used for storing frequently accessed small student records that need low latency and high-speed access?",
            options: [
              "Hard Disk Drive (HDD)",
              "Solid State Drive (SSD)",
              "Static RAM (SRAM)",
              "Registers"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q30",
            type: "mcq",
            marks: 2,
            passage: "A college counseling system is designed to store and retrieve student records efficiently. The system uses different types of storage based on latency, throughput, and density. During peak counseling sessions, thousands of students access their academic records, appointment schedules, and previous counseling notes. The system needs to optimize storage selection for different types of data:\n1. Frequently accessed small data (e.g., currently active student records)\n2. Large archives of past counseling records (rarely accessed but need long-term storage) 3. Temporary session data that needs to be quickly read and updated during counseling sessions Based on the above data, answer the given subquestions.",
            prompt: "The college wants to store archived counseling records from past students for future reference. These records are rarely accessed, but cost efficiency and storage density are important. Which storage type is best suited?",
            options: [
              "Registers",
              "SRAM",
              "DRAM",
              "Hard Disk Drive (HDD)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q31",
            type: "multi",
            marks: 3,
            passage: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q31-passage-1.webp#575x359)",
            prompt: "Which of the following statements is/are True?",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q31-opt1-1.webp#332x77)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q31-opt2-1.webp#301x78)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q31-opt3-1.webp#324x96)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q31-opt4-1.webp#351x55)"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-apr-2025-fn-q32",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q31-passage-1.webp#575x359)",
            prompt: "Which of the following is the correct way of adding records into the ‘student’ and the ‘test_marks’ tables?",
            options: [
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q32-opt1-1.webp#575x150)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q32-opt2-1.webp#575x155)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q32-opt3-1.webp#575x153)",
              "![Figure](/pyq/mad-1-end-term-apr-2025-fn/q32-opt4-1.webp#575x126)"
            ],
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "mad-1-end-term-dec-2024-fn",
    title: "MAD I End Term · 22 Dec 2024 (FN)",
    description: "End Term paper from the September 2024 term, forenoon session on 22 Dec 2024, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2024-12-22",
      session: "FN",
      term: "September 2024"
    },
    sections: [
      {
        subjectSlug: "modern-application-development-1",
        title: "Modern Application Development I",
        short: "MAD I",
        questions: [
          {
            id: "mad-1-end-term-dec-2024-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q1-1.webp#575x301)",
            options: [
              "Many-to-Many",
              "One-to-Many",
              "One-to-One",
              "The tables are not at all related"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q2-1.webp#575x780)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q2-opt1-1.webp#249x31)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q2-opt2-1.webp#254x83)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q2-opt3-1.webp#252x71)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q2-opt4-1.webp#45x26)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q3",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q3-1.webp#575x313)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q3-opt1-1.webp#293x41)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q3-opt2-1.webp#440x36)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q3-opt3-1.webp#575x44)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q3-opt4-1.webp#92x26)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q4",
            type: "mcq",
            marks: 2,
            prompt: "Which of the following is a time series database?",
            options: [
              "MongoDB",
              "InfluxDB",
              "MySQL",
              "PostgreSQL"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q5",
            type: "mcq",
            marks: 2,
            prompt: "Match the platforms given in column A with their correct features in column B.\n\n![Figure](/pyq/mad-1-end-term-dec-2024-fn/q5-1.webp#559x188)",
            options: [
              "1 - A, 2 - B, 3 - C, 4 - D",
              "1 - D, 2 - A, 3 - B, 4 - C",
              "1 - B, 2 - D, 3 - A, 4 - C",
              "1 - A, 2 - C, 3 - D, 4 - B"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q6-1.webp#575x459)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q6-opt1-1.webp#434x21)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q6-opt2-1.webp#303x25)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q6-opt3-1.webp#520x24)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q6-opt4-1.webp#382x25)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q7",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q7-1.webp#575x125)",
            options: [
              "1.35",
              "2.7",
              "3.15",
              "5.4"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q8",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q8-1.webp#575x524)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q8-opt1-1.webp#575x30)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q8-opt2-1.webp#575x28)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q8-opt3-1.webp#575x33)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q8-opt4-1.webp#515x25)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q9",
            type: "mcq",
            marks: 3,
            prompt: "Consider the following HTML document.\n\n![Figure](/pyq/mad-1-end-term-dec-2024-fn/q9-1.webp#575x476)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q9-opt1-1.webp#395x52)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q9-opt2-1.webp#379x48)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q9-opt3-1.webp#286x47)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q9-opt4-1.webp#324x52)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q10",
            type: "mcq",
            marks: 3,
            prompt: "Match the following terms with their correct descriptions:\n\n![Figure](/pyq/mad-1-end-term-dec-2024-fn/q10-1.webp#575x317)",
            options: [
              "A → 2, B → 4, C → 1, D → 3, E → 5",
              "A → 3, B → 4, C → 1, D → 2, E → 5",
              "A → 2, B → 4, C → 5, D → 3, E → 1",
              "A → 3, B → 4, C → 5, D → 2, E → 1"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q11",
            type: "mcq",
            marks: 3,
            prompt: "Which of the following is an example of an application using Attribute-Based Access Control (ABAC)?",
            options: [
              "A system where users are granted access based on their job roles within an organization.",
              "A cloud service that grants or restricts access to files based on attributes such as user department, job title, or current location.",
              "A file-sharing system where the file owner decides who can access their documents.",
              "A system that enforces access based on security classifications and clearance levels."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q12",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q12-1.webp#575x818)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q12-opt1-1.webp#149x64)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q12-opt2-1.webp#254x109)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q12-opt3-1.webp#95x103)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q12-opt4-1.webp#206x148)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q13",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q13-1.webp#561x437)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q13-opt1-1.webp#44x17)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q13-opt2-1.webp#38x20)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q13-opt3-1.webp#257x23)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q13-opt4-1.webp#110x18)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q14",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q14-1.webp#575x616)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q14-opt1-1.webp#505x37)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q14-opt2-1.webp#533x37)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q14-opt3-1.webp#553x33)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q14-opt4-1.webp#510x38)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q15",
            type: "mcq",
            marks: 4.5,
            prompt: "Consider the following HTML document.\n\n![Figure](/pyq/mad-1-end-term-dec-2024-fn/q15-1.webp#390x712)\n\nHow will the browser render above HTML file?",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q15-opt1-1.webp#83x114)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q15-opt2-1.webp#83x121)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q15-opt3-1.webp#350x45)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q15-opt4-1.webp#335x40)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q16",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q16-1.webp#575x842)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q16-opt1-1.webp#382x22)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q16-opt2-1.webp#388x19)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q16-opt3-1.webp#476x17)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q16-opt4-1.webp#396x18)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q17",
            type: "mcq",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q17-1.webp#575x288)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q17-opt1-1.webp#575x30)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q17-opt2-1.webp#575x36)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q17-opt3-1.webp#575x43)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q17-opt4-1.webp#575x40)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q18",
            type: "multi",
            marks: 4.5,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q18-1.webp#575x384)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q18-opt1-1.webp#394x99)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q18-opt2-1.webp#388x102)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q18-opt3-1.webp#575x101)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q18-opt4-1.webp#575x98)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q19",
            type: "multi",
            marks: 3,
            prompt: "Consider the following code snippet.\n\n![Figure](/pyq/mad-1-end-term-dec-2024-fn/q19-1.webp#575x445)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q19-opt1-1.webp#575x26)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q19-opt2-1.webp#575x24)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q19-opt3-1.webp#575x23)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q19-opt4-1.webp#575x25)"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q20",
            type: "multi",
            marks: 3,
            prompt: "Consider the following flask application running on the base URL and is accessed through a browser. Select the correct option(s).\n\n![Figure](/pyq/mad-1-end-term-dec-2024-fn/q20-1.webp#575x575)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q20-opt1-1.webp#537x47)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q20-opt2-1.webp#575x52)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q20-opt3-1.webp#575x51)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q20-opt4-1.webp#575x48)"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q21",
            type: "multi",
            marks: 3,
            prompt: "Consider the following Python code snippet.\n\n![Figure](/pyq/mad-1-end-term-dec-2024-fn/q21-1.webp#575x442)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q21-opt1-1.webp#257x51)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q21-opt2-1.webp#258x61)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q21-opt3-1.webp#258x49)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q21-opt4-1.webp#243x56)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q21-opt5-1.webp#261x54)"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q22",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statements about the Constraint Validation API is/are true?",
            options: [
              "The Constraint Validation API ensures that form input meets client-side validation rules before submission.",
              "The Constraint Validation API is sufficient to prevent server-side attacks like SQL injection.",
              "It is possible to bypass the Constraint Validation API by directly sending requests to the server.",
              "The Constraint Validation API automatically validates all data on the server side."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q23",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statements is invalid in the context of the primary key?",
            options: [
              "The primary key can be null",
              "The primary key can be auto-incremented",
              "The primary key allows duplicate values",
              "The primary key can be referenced by foreign keys in other tables."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q24",
            type: "multi",
            marks: 2,
            prompt: "Consider the following HTML document.\n\n![Figure](/pyq/mad-1-end-term-dec-2024-fn/q24-1.webp#575x636)\n\nWhich of the following statements is/are correct about the above code snippet?",
            options: [
              "List Items, Foundations and Diploma are numbered 1 and 2",
              "List Items, Foundations and Diploma are bulleted",
              "List Items, PDSA, MAD-I and MAD-II are numbered 1, 2 and 3",
              "List Items, PDSA, MAD-I and MAD-II are bulleted"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q25",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q25-1.webp#575x101)",
            answer: 1000,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q26",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q26-1.webp#575x124)",
            answer: 150000,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q27",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q27-passage-1.webp#575x542)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q27-1.webp#372x58)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q27-opt1-1.webp#208x19)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q27-opt2-1.webp#207x17)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q27-opt3-1.webp#221x18)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q27-opt4-1.webp#265x21)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q28",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q27-passage-1.webp#575x542)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q28-1.webp#402x46)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q28-opt1-1.webp#46x23)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q28-opt2-1.webp#206x21)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q28-opt3-1.webp#221x23)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q28-opt4-1.webp#110x25)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q29",
            type: "mcq",
            marks: 4.5,
            passage: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q29-passage-1.webp#575x842)",
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q29-1.webp#444x60)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q29-opt1-1.webp#194x87)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q29-opt2-1.webp#301x28)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q29-opt3-1.webp#457x23)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q29-opt4-1.webp#189x94)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q30",
            type: "mcq",
            marks: 4.5,
            passage: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q29-passage-1.webp#575x842)",
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q30-1.webp#318x63)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q30-opt1-1.webp#491x58)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q30-opt2-1.webp#462x63)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q30-opt3-1.webp#450x51)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q30-opt4-1.webp#480x56)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q31",
            type: "mcq",
            marks: 4.5,
            passage: "Use the Python code given below for answering the subquestions:\n\n![Figure](/pyq/mad-1-end-term-dec-2024-fn/q31-passage-1.webp#575x804)",
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q31-1.webp#312x185)",
            options: [
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q31-opt1-1.webp#310x108)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q31-opt2-1.webp#342x104)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q31-opt3-1.webp#344x113)",
              "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q31-opt4-1.webp#283x107)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "mad-1-end-term-dec-2024-fn-q32",
            type: "mcq",
            marks: 3,
            passage: "Use the Python code given below for answering the subquestions:\n\n![Figure](/pyq/mad-1-end-term-dec-2024-fn/q31-passage-1.webp#575x804)",
            prompt: "![Figure](/pyq/mad-1-end-term-dec-2024-fn/q32-1.webp#443x80)",
            options: [
              "201",
              "404",
              "500",
              "None of these"
            ],
            answer: 3,
            explanation: ""
          }
        ]
      }
    ]
  }
];
