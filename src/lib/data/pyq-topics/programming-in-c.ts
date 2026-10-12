import type { PyqTopicTags } from "../../types";

// 65 past-paper questions in 8 topics, 23 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const programmingInCTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "computer-basics-number-systems",
      "title": "Computer basics & number systems",
      "summary": "Memory hierarchy, ALU, binary/hex, 2's complement, endianness and tracing register-level pseudocode",
      "ids": [
        "c-programming-end-term-aug-2025-an-q7",
        "c-programming-end-term-aug-2025-fn-q7",
        "c-programming-quiz-1-oct-2025-an-q1",
        "c-programming-quiz-1-oct-2025-an-q2",
        "c-programming-quiz-1-oct-2025-an-q4",
        "c-programming-quiz-1-oct-2025-an-q5",
        "c-programming-quiz-1-oct-2025-an-q9",
        "c-programming-quiz-1-oct-2025-an-q11",
        "c-programming-quiz-1-oct-2025-an-q15",
        "c-programming-quiz-1-oct-2025-an-q16"
      ]
    },
    {
      "slug": "operators-expressions",
      "title": "Operators & expressions",
      "summary": "Logical, bitwise, increment, compound-assignment and ternary operators and how C evaluates them",
      "ids": [
        "c-programming-end-term-aug-2025-an-q1",
        "c-programming-end-term-aug-2025-an-q22",
        "c-programming-end-term-aug-2025-fn-q1",
        "c-programming-end-term-aug-2025-fn-q24",
        "c-programming-quiz-1-oct-2025-an-q3",
        "c-programming-quiz-1-oct-2025-an-q6",
        "c-programming-quiz-1-oct-2025-an-q7",
        "c-programming-quiz-1-oct-2025-an-q8",
        "c-programming-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "slug": "control-flow-loops",
      "title": "Conditions & loops",
      "summary": "if/else, switch, for/while loops, break and continue: predict output or count iterations",
      "ids": [
        "c-programming-end-term-aug-2025-an-q2",
        "c-programming-end-term-aug-2025-an-q19",
        "c-programming-end-term-aug-2025-an-q23",
        "c-programming-end-term-aug-2025-fn-q2",
        "c-programming-end-term-aug-2025-fn-q19",
        "c-programming-end-term-aug-2025-fn-q21",
        "c-programming-quiz-1-oct-2025-an-q10",
        "c-programming-quiz-1-oct-2025-an-q13",
        "c-programming-quiz-1-oct-2025-an-q14",
        "c-programming-quiz-1-oct-2025-an-q17"
      ]
    },
    {
      "slug": "functions-recursion",
      "title": "Functions & recursion",
      "summary": "Pass-by-value vs reference, recursion base case, call stack and tracing recursive functions",
      "ids": [
        "c-programming-end-term-aug-2025-an-q3",
        "c-programming-end-term-aug-2025-an-q4",
        "c-programming-end-term-aug-2025-an-q20",
        "c-programming-end-term-aug-2025-fn-q3",
        "c-programming-end-term-aug-2025-fn-q4",
        "c-programming-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "slug": "pointers-memory",
      "title": "Pointers & dynamic memory",
      "summary": "Address-of and dereference, double pointers, pointer arithmetic, malloc and stack vs heap",
      "ids": [
        "c-programming-end-term-aug-2025-an-q5",
        "c-programming-end-term-aug-2025-an-q6",
        "c-programming-end-term-aug-2025-an-q8",
        "c-programming-end-term-aug-2025-an-q14",
        "c-programming-end-term-aug-2025-an-q24",
        "c-programming-end-term-aug-2025-fn-q5",
        "c-programming-end-term-aug-2025-fn-q6",
        "c-programming-end-term-aug-2025-fn-q8",
        "c-programming-end-term-aug-2025-fn-q13",
        "c-programming-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "slug": "arrays-strings",
      "title": "Arrays & strings",
      "summary": "Array initialisation, 2D array indexing, string storage size and modifiable char arrays",
      "ids": [
        "c-programming-end-term-aug-2025-an-q9",
        "c-programming-end-term-aug-2025-an-q10",
        "c-programming-end-term-aug-2025-an-q21",
        "c-programming-end-term-aug-2025-fn-q9",
        "c-programming-end-term-aug-2025-fn-q10",
        "c-programming-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "slug": "structs-unions-enums",
      "title": "Structs, unions & enums",
      "summary": "Accessing struct members, union size and enum constant values",
      "ids": [
        "c-programming-end-term-aug-2025-an-q11",
        "c-programming-end-term-aug-2025-an-q12",
        "c-programming-end-term-aug-2025-an-q13",
        "c-programming-end-term-aug-2025-fn-q11",
        "c-programming-end-term-aug-2025-fn-q12",
        "c-programming-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "slug": "files-preprocessor",
      "title": "File I/O & the preprocessor",
      "summary": "fopen modes, file read/write functions, macros and what the preprocessor does",
      "ids": [
        "c-programming-end-term-aug-2025-an-q15",
        "c-programming-end-term-aug-2025-an-q16",
        "c-programming-end-term-aug-2025-an-q17",
        "c-programming-end-term-aug-2025-an-q18",
        "c-programming-end-term-aug-2025-fn-q14",
        "c-programming-end-term-aug-2025-fn-q15",
        "c-programming-end-term-aug-2025-fn-q16",
        "c-programming-end-term-aug-2025-fn-q17"
      ]
    }
  ],
  "repeats": [
    {
      "title": "How && and || short-circuit evaluation works",
      "ids": [
        "c-programming-end-term-aug-2025-an-q1",
        "c-programming-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "title": "Store a hex value in memory on a big/little-endian system",
      "ids": [
        "c-programming-end-term-aug-2025-an-q7",
        "c-programming-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Evaluate bitwise AND / OR of two small integers",
      "ids": [
        "c-programming-end-term-aug-2025-an-q22",
        "c-programming-end-term-aug-2025-fn-q24"
      ]
    },
    {
      "title": "Pre-increment vs post-increment behaviour",
      "ids": [
        "c-programming-end-term-aug-2025-fn-q1",
        "c-programming-quiz-1-oct-2025-an-q6"
      ]
    },
    {
      "title": "Trace a nested loop that checks (i + j) % 2 == 0",
      "ids": [
        "c-programming-end-term-aug-2025-an-q19",
        "c-programming-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Trace a loop that uses continue and break",
      "ids": [
        "c-programming-end-term-aug-2025-an-q23",
        "c-programming-quiz-1-oct-2025-an-q10",
        "c-programming-quiz-1-oct-2025-an-q17"
      ]
    },
    {
      "title": "What happens to the call stack in recursion",
      "ids": [
        "c-programming-end-term-aug-2025-an-q3",
        "c-programming-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Pass-by-value vs pass-by-reference (pointers) to modify arguments",
      "ids": [
        "c-programming-end-term-aug-2025-an-q4",
        "c-programming-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Trace a recursive function using n % k and n / k",
      "ids": [
        "c-programming-end-term-aug-2025-an-q20",
        "c-programming-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Use & and * to reach a variable through a pointer",
      "ids": [
        "c-programming-end-term-aug-2025-an-q5",
        "c-programming-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "Change a variable through a pointer or double pointer",
      "ids": [
        "c-programming-end-term-aug-2025-an-q6",
        "c-programming-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "title": "Dereference a pointer after pointer arithmetic on an array",
      "ids": [
        "c-programming-end-term-aug-2025-an-q8",
        "c-programming-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Trace a malloc'd array filled by a recurrence",
      "ids": [
        "c-programming-end-term-aug-2025-an-q24",
        "c-programming-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "title": "Which memory region (stack/heap) stores what",
      "ids": [
        "c-programming-end-term-aug-2025-an-q14",
        "c-programming-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "What an array holds after partial initialisation",
      "ids": [
        "c-programming-end-term-aug-2025-an-q10",
        "c-programming-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Sum elements of a 2D array by index",
      "ids": [
        "c-programming-end-term-aug-2025-an-q21",
        "c-programming-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "title": "Size and meaning of a union",
      "ids": [
        "c-programming-end-term-aug-2025-an-q11",
        "c-programming-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Access a struct member with . or ->",
      "ids": [
        "c-programming-end-term-aug-2025-an-q12",
        "c-programming-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "Find integer values of enum constants",
      "ids": [
        "c-programming-end-term-aug-2025-an-q13",
        "c-programming-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "What fopen does in a given mode (r / w)",
      "ids": [
        "c-programming-end-term-aug-2025-an-q15",
        "c-programming-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Compare two file I/O functions (fprintf/fputs, fscanf/fgets)",
      "ids": [
        "c-programming-end-term-aug-2025-an-q16",
        "c-programming-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "When and how the preprocessor replaces macros",
      "ids": [
        "c-programming-end-term-aug-2025-an-q17",
        "c-programming-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Expand a macro without parentheses and find the result",
      "ids": [
        "c-programming-end-term-aug-2025-an-q18",
        "c-programming-end-term-aug-2025-fn-q17"
      ]
    }
  ]
};
