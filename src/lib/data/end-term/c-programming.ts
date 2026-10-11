import type { QualifierMock } from "../../types";

// Programming in C: IIT Madras BS End Term papers (2 papers, 48 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const cProgrammingEndTermPapers: QualifierMock[] = [
  {
    slug: "c-programming-end-term-aug-2025-fn",
    title: "C Programming End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "programming-in-c",
        title: "Programming in C",
        short: "C Programming",
        questions: [
          {
            id: "c-programming-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q1-1.webp#575x47)",
            options: [
              "Pre-increment changes the value after the expression is evaluated, while post- increment changes it before the expression is evaluated.",
              "Pre-increment changes the value before the expression is evaluated, while post-increment changes it after the expression is evaluated.",
              "Pre-increment is used with integers, while post-increment is used with floating-point numbers.",
              "Pre- and Post-increment are identical in operation. They are two ways of writing the same statement."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q2-1.webp#575x45)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q2-opt1-1.webp#238x24)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q2-opt2-1.webp#550x26)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q2-opt3-1.webp#575x49)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q2-opt4-1.webp#331x21)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 4,
            prompt: "When a recursive function is called, how does the call stack (or program stack) manage the function calls?",
            options: [
              "Each new recursive call overwrites the previous function call on the stack.",
              "Each new recursive call adds a new stack frame to the top of the stack for its local variables and parameters.",
              "The call stack is not used for recursive functions; a separate data structure is used.",
              "The recursive calls are stored in a queue, waiting to be processed in order."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q4-1.webp#575x68)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q4-opt1-1.webp#575x24)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q4-opt2-1.webp#575x24)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q4-opt3-1.webp#575x47)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q4-opt4-1.webp#575x31)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q5-1.webp#575x26)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q5-opt1-1.webp#375x25)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q5-opt2-1.webp#474x27)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q5-opt3-1.webp#307x28)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q5-opt4-1.webp#357x23)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q6-1.webp#293x273)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q6-opt1-1.webp#27x19)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q6-opt2-1.webp#32x18)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q6-opt3-1.webp#98x26)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q6-opt4-1.webp#114x20)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q7",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q7-1.webp#575x48)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q7-opt1-1.webp#464x28)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q7-opt2-1.webp#463x28)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q7-opt3-1.webp#462x25)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q7-opt4-1.webp#456x24)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q8",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q8-1.webp#335x161)",
            options: [
              "10",
              "20",
              "30",
              "40"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q9",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q9-1.webp#575x138)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q9-opt1-1.webp#263x28)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q9-opt2-1.webp#265x26)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q9-opt3-1.webp#246x26)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q9-opt4-1.webp#263x22)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q10",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q10-1.webp#575x225)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q10-opt1-1.webp#302x22)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q10-opt2-1.webp#202x24)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q10-opt3-1.webp#411x23)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q10-opt4-1.webp#357x22)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q11",
            type: "mcq",
            marks: 4,
            prompt: "A special data type is declared where multiple members share the same memory location. The size of an instance of this type is equal to the size of its largest member. What kind of data type is this?",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q11-opt1-1.webp#65x23)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q11-opt2-1.webp#55x19)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q11-opt3-1.webp#44x20)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q11-opt4-1.webp#70x21)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q12",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q12-1.webp#575x74)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q12-opt1-1.webp#113x28)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q12-opt2-1.webp#104x26)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q12-opt3-1.webp#115x24)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q12-opt4-1.webp#121x22)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q13",
            type: "mcq",
            marks: 4,
            prompt: "In C programming, which memory region is primarily used for storing local variables of functions and function call information?",
            options: [
              "Heap memory",
              "Stack memory",
              "Static memory",
              "Code segment"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q14",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q14-1.webp#575x270)",
            options: [
              "\"New Content\" is appended to the end, resulting in \"Hello WorldNew Content\".",
              "The file is cleared, and only \"New Content\" is written.",
              "The code will fail to open the file because it already exists.",
              "\"New Content\" is inserted at the beginning, pushing \"Hello World\" to the end."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q15",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q15-1.webp#575x26)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q15-opt1-1.webp#575x23)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q15-opt2-1.webp#575x48)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q15-opt3-1.webp#575x46)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q15-opt4-1.webp#505x34)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q16",
            type: "mcq",
            marks: 4,
            prompt: "What is the primary purpose of the C preprocessor?",
            options: [
              "To execute the program's logic before the main function.",
              "To convert the source code into machine language.",
              "To process directives and modify the source code before compilation.",
              "To manage dynamic memory allocation during runtime."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q17",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q17-1.webp#410x333)",
            options: [
              "25",
              "23",
              "17",
              "15"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q18",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q18-1.webp#575x149)",
            options: [
              "7",
              "104",
              "4",
              "5"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q19",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q19-1.webp#387x261)",
            options: [
              "2 4 6 8",
              "2 4 6 8 10",
              "Infinite loop",
              "2 4 6 8 10 12"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q20",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q20-1.webp#338x399)",
            options: [
              "0501",
              "150",
              "501",
              "1050"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q21",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q21-1.webp#389x376)",
            answer: 4,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q22",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q22-1.webp#474x508)",
            answer: 20,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q23",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q23-1.webp#479x390)",
            answer: 26,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-fn-q24",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-fn/q24-1.webp#570x270)",
            answer: 7,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "c-programming-end-term-aug-2025-an",
    title: "C Programming End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "programming-in-c",
        title: "Programming in C",
        short: "C Programming",
        questions: [
          {
            id: "c-programming-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q1-1.webp#575x90)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q1-opt1-1.webp#575x45)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q1-opt2-1.webp#575x25)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q1-opt3-1.webp#575x42)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q1-opt4-1.webp#575x50)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q2-1.webp#575x49)",
            options: [
              "To exit the loop entirely and continue with the program statement immediately following the loop.",
              "To restart the loop from the beginning.",
              "To immediately proceed to the next iteration of the loop, skipping any remaining statements in the current iteration.",
              "To execute a block of code only a fixed number of times."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 4,
            prompt: "What is a potential risk of a recursive function that is not properly terminated with a base case?",
            options: [
              "It will cause a compile-time error.",
              "It will always return an incorrect value.",
              "It can lead to a stack overflow, as the function calls consume all available stack memory.",
              "The program will terminate gracefully with a success message."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 4,
            prompt: "What is the fundamental conceptual difference between \"pass-by-value\" and \"pass-by-reference\" for function parameters in C?",
            options: [
              "Pass-by-value is used for primitive types, while pass-by-reference is used for composite types.",
              "In pass-by-value, a function works with a copy of the argument, whereas in pass-by-reference, it works with the original variable via its memory address.",
              "Pass-by-value allows a function to modify the original variable, while pass-by- reference protects the original variable from modification.",
              "The choice between pass-by-value and pass-by-reference is made automatically by the compiler based on the variable's type."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q5-1.webp#575x362)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q5-opt1-1.webp#196x27)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q5-opt2-1.webp#184x25)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q5-opt3-1.webp#178x27)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q5-opt4-1.webp#196x30)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q6",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q6-1.webp#380x280)",
            options: [
              "10 10",
              "5 10",
              "5 5",
              "10 5"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q7",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q7-1.webp#575x50)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q7-opt1-1.webp#48x21)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q7-opt2-1.webp#45x26)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q7-opt3-1.webp#49x26)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q7-opt4-1.webp#52x25)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q8",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q8-1.webp#314x138)",
            options: [
              "1",
              "2",
              "3",
              "4"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q9",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q9-1.webp#575x52)",
            options: [
              "11 bytes.",
              "12 bytes.",
              "13 bytes.",
              "14 bytes."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q10",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q10-1.webp#488x198)",
            options: [
              "{0, 0, 100, 0, 0, 0}",
              "{100, 100, 100, 100, 100, 100}",
              "{100, 0, 0, 0, 0, 0}",
              "{0, 100, 0, 0, 0, 0}"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q11",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q11-1.webp#393x344)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q11-opt1-1.webp#338x22)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q11-opt2-1.webp#114x24)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q11-opt3-1.webp#331x24)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q11-opt4-1.webp#364x29)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q12",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q12-1.webp#575x86)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q12-opt1-1.webp#47x22)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q12-opt2-1.webp#46x27)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q12-opt3-1.webp#44x18)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q12-opt4-1.webp#71x31)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q13",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q13-1.webp#559x80)",
            options: [
              "RED = 0, GREEN = 3, BLUE = 1",
              "RED = 1, GREEN = 3, BLUE = 4",
              "RED = 0, GREEN = 3, BLUE = 4",
              "RED = 1, GREEN = 3, BLUE = 2"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q14",
            type: "mcq",
            marks: 4,
            prompt: "In C programming, which memory region is typically used for dynamic memory allocation?",
            options: [
              "Heap memory",
              "Stack memory",
              "Static memory",
              "Code segment"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q15",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q15-1.webp#575x354)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q15-opt1-1.webp#436x22)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q15-opt2-1.webp#414x25)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q15-opt3-1.webp#497x22)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q15-opt4-1.webp#502x22)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q16",
            type: "mcq",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q16-1.webp#575x53)",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q16-opt1-1.webp#575x26)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q16-opt2-1.webp#575x47)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q16-opt3-1.webp#575x23)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q16-opt4-1.webp#570x25)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q17",
            type: "mcq",
            marks: 4,
            prompt: "When a macro is used in a C program, at what stage is its definition replaced into the code?",
            options: [
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q17-opt1-1.webp#188x18)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q17-opt2-1.webp#331x25)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q17-opt3-1.webp#392x22)",
              "![Figure](/pyq/c-programming-end-term-aug-2025-an/q17-opt4-1.webp#287x24)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q18",
            type: "mcq",
            marks: 4,
            prompt: "Consider the below C program:\n\n![Figure](/pyq/c-programming-end-term-aug-2025-an/q18-1.webp#344x228)\n\nWhat will be the output of the given C program?",
            options: [
              "16",
              "10",
              "7",
              "12"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q19",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q19-1.webp#562x345)",
            options: [
              "(0,0), (0,2), (1,1), (1,3), (2,2), (2,3)",
              "(0,0), (0,2), (0,3), (1,1), (2,2)",
              "(0,0), (0,2), (1,1), (1,3), (2,2)",
              "(0,1), (0,3), (1,1), (1,3), (2,2), (2,3)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q20",
            type: "mcq",
            marks: 5,
            prompt: "Consider the following C code:\n\n![Figure](/pyq/c-programming-end-term-aug-2025-an/q20-1.webp#384x286)\n\nWhat is the output of the program?",
            options: [
              "5",
              "101",
              "10",
              "111"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q21",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q21-1.webp#408x348)",
            answer: 19,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q22",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q22-1.webp#548x274)",
            answer: 2,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q23",
            type: "numerical",
            marks: 5,
            prompt: "Consider the following C code:\n\n![Figure](/pyq/c-programming-end-term-aug-2025-an/q23-1.webp#361x340)\n\nWhat will be the output of the given program?",
            answer: 9,
            explanation: ""
          },
          {
            id: "c-programming-end-term-aug-2025-an-q24",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/c-programming-end-term-aug-2025-an/q24-1.webp#448x491)",
            answer: 60,
            explanation: ""
          }
        ]
      }
    ]
  }
];
