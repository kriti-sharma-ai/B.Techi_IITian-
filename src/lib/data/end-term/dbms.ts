import type { QualifierMock } from "../../types";

// Database Management Systems: IIT Madras BS End Term papers (5 papers, 100 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const dbmsEndTermPapers: QualifierMock[] = [
  {
    slug: "dbms-end-term-aug-2025-fn",
    title: "DBMS End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "database-management-systems",
        title: "Database Management Systems",
        short: "DBMS",
        questions: [
          {
            id: "dbms-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q1-1.webp#575x421)",
            options: [
              "Names of all the mentors with ‘GOOD’ rating from at least one of their mentees.",
              "Names of all the mentors with ’GOOD’ rating from all their mentees.",
              "Names of all the mentors with ‘BAD’ rating from at most one of their mentees.",
              "Names of all the mentors with ’BAD’ rating from all their mentees."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 2,
            prompt: "Consider a non-empty B+-tree of order 17. What are the maximum and minimum number of keys that can be placed in the root node?",
            options: [
              "max. number of keys = 16, min. number of keys = 1.",
              "max. number of keys = 17, min. number of keys = 1.",
              "max. number of keys = 16, min. number of keys = 8.",
              "max. number of keys = 17, min. number of keys = 8."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q3-1.webp#575x196)",
            options: [
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q3-opt1-1.webp#416x156)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q3-opt2-1.webp#416x154)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q3-opt3-1.webp#320x156)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q3-opt4-1.webp#416x156)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q4-1.webp#575x138)",
            options: [
              "2",
              "0",
              "1",
              "5"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q5-1.webp#575x680)",
            options: [
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q5-opt1-1.webp#142x610)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q5-opt2-1.webp#141x605)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q5-opt3-1.webp#142x596)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q5-opt4-1.webp#142x602)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q6",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q6-1.webp#575x160)",
            options: [
              "Schedule S can not be two-phase lockable.",
              "Schedule S can be two-phase lockable.",
              "Schedule S can be strict two-phase lockable.",
              "Schedule S is conflict serializable."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q7",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q7-1.webp#575x494)",
            options: [
              "T0 and T1 can be ignored.",
              "T0,T1, T2 and T3 can be ignored.",
              "T4 need to be undone.",
              "T0 and T3 need to be redone."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q8",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q8-1.webp#575x120)",
            options: [
              "(0,1,2,7,8)",
              "(0,5,2,3,4)",
              "(0,5,6,3,8)",
              "(0,5,2,7,4)"
            ],
            answer: [
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q9",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q9-1.webp#575x150)",
            options: [
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q9-opt1-1.webp#535x25)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q9-opt2-1.webp#410x22)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q9-opt3-1.webp#213x22)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q9-opt4-1.webp#229x23)"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q10",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q10-1.webp#575x481)",
            options: [
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q10-opt1-1.webp#575x42)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q10-opt2-1.webp#575x24)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q10-opt3-1.webp#575x47)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q10-opt4-1.webp#575x43)"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q11",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q11-1.webp#575x162)",
            options: [
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q11-opt1-1.webp#575x52)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q11-opt2-1.webp#575x49)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q11-opt3-1.webp#575x50)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q11-opt4-1.webp#575x49)"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q12",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q12-1.webp#575x435)",
            options: [
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q12-opt1-1.webp#562x109)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q12-opt2-1.webp#559x151)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q12-opt3-1.webp#564x153)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q12-opt4-1.webp#563x158)"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q13",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q13-1.webp#575x200)",
            options: [
              "Number of block transfers require=300600",
              "Number of block transfers require=300500",
              "Number of seeks require=1200",
              "Number of seeks require=1400"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q14",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q14-1.webp#575x333)",
            options: [
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q14-opt1-1.webp#359x26)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q14-opt2-1.webp#334x25)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q14-opt3-1.webp#344x26)",
              "![Figure](/pyq/dbms-end-term-aug-2025-fn/q14-opt4-1.webp#335x25)"
            ],
            answer: [
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q15",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q15-1.webp#506x776)",
            answer: 3,
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q16",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q16-1.webp#575x159)",
            answer: 5,
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q17",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q17-1.webp#575x188)",
            answer: 4,
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q18",
            type: "numerical",
            marks: 3,
            prompt: "Consider a magnetic disk with 16 platters, 2 surfaces per platter, 1024 tracks per surface, 2048 sectors per track and 512 bytes per sector. The disk rotates at 6000 rpm. What is the disk capacity (in GB)?",
            answer: 32,
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q19",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q19-1.webp#575x134)",
            answer: 6,
            explanation: ""
          },
          {
            id: "dbms-end-term-aug-2025-fn-q20",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-aug-2025-fn/q20-1.webp#575x183)",
            answer: 8,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "dbms-end-term-apr-2025-fn",
    title: "DBMS End Term · 13 Apr 2025 (FN)",
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
        subjectSlug: "database-management-systems",
        title: "Database Management Systems",
        short: "DBMS",
        questions: [
          {
            id: "dbms-end-term-apr-2025-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q1-1.webp#575x192)",
            options: [
              "19",
              "20",
              "21",
              "22"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q2-1.webp#575x273)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q2-opt1-1.webp#567x28)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q2-opt2-1.webp#575x56)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q2-opt3-1.webp#575x57)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q2-opt4-1.webp#572x22)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q3",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q3-1.webp#575x341)",
            options: [
              "4",
              "5",
              "6",
              "7"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q4",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q4-1.webp#575x137)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q4-opt1-1.webp#517x120)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q4-opt2-1.webp#494x114)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q4-opt3-1.webp#483x116)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q4-opt4-1.webp#488x114)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q5-1.webp#575x182)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q5-opt1-1.webp#45x33)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q5-opt2-1.webp#48x28)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q5-opt3-1.webp#48x24)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q5-opt4-1.webp#53x27)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q6-1.webp#575x546)",
            options: [
              "1-a, 2-c, 3-f",
              "1-b, 2-c, 3-e",
              "1-a, 2-d, 3-e",
              "1-b, 2-d, 3-f"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q7",
            type: "multi",
            marks: 1,
            prompt: "Choose the correct statement(s).",
            options: [
              "In static hashing, the size of the hash table remains fixed, which may lead to overflow or underutilization of space.",
              "In dynamic hashing, the hash table grows and shrinks dynamically as data is inserted or deleted.",
              "Static hashing is more efficient for applications where the number of records is expected to change frequently.",
              "Dynamic hashing does not handle collisions effectively compared to static hashing."
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q8",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q8-1.webp#575x275)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q8-opt1-1.webp#287x30)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q8-opt2-1.webp#310x29)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q8-opt3-1.webp#277x26)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q8-opt4-1.webp#311x31)"
            ],
            answer: [
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q9",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q9-1.webp#575x280)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q9-opt1-1.webp#376x33)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q9-opt2-1.webp#369x27)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q9-opt3-1.webp#375x34)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q9-opt4-1.webp#390x36)"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q10",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q10-1.webp#575x187)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q10-opt1-1.webp#575x33)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q10-opt2-1.webp#575x72)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q10-opt3-1.webp#575x26)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q10-opt4-1.webp#575x55)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q11",
            type: "multi",
            marks: 2,
            prompt: "Consider the following Entity Relationship Diagram:\n\n![Figure](/pyq/dbms-end-term-apr-2025-fn/q11-1.webp#575x657)\n\nChoose the correct statements.",
            options: [
              "A bank can provide more than one ATM machine",
              "An ATM card is used by only one customer",
              "A customer can use only one ATM card",
              "An ATM card can be inserted in many ATM machines"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q12",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q12-1.webp#448x99)",
            options: [
              "Schedule S is conflict serializable.",
              "Schedule S can be two-phase lockable.",
              "Two phase lockable schedule are always serializable schedule.",
              "Schedule S is not View Serializable"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q13",
            type: "numerical",
            marks: 3,
            prompt: "Consider you have a file in your hard disk of size 1000 KB. Seek time of your hard disk read head is 3ms and rotational speed in 30,000 rpm. The disk has 200 sectors per track and 512 bytes per sector. Considering the fact that the file data is stored in non consecutive sectors. How much time will be required to read the whole file after a read request is made? (in ms)",
            answer: 24,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q14",
            type: "numerical",
            marks: 3,
            prompt: "Consider a system using the Least Recently Used (LRU) page replacement policy. The system has a main memory buffer with 4 slots, and the page reference sequence is as follows:\n3, 4, 1, 4, 2, 3, 1, 4, 2, 3\nCalculate the total number of page misses (page faults) during this sequence.",
            answer: 4,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q15",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q15-1.webp#575x426)",
            answer: 500,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q16",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q16-1.webp#575x91)",
            answer: 24,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q17",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q17-1.webp#575x156)",
            answer: 5,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q18",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q18-1.webp#575x214)",
            answer: 41,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q19",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q19-passage-1.webp#575x634)",
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q19-1.webp#425x177)",
            answer: 4,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-fn-q20",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q19-passage-1.webp#575x634)",
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-fn/q20-1.webp#575x340)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q20-opt1-1.webp#480x106)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q20-opt2-1.webp#477x131)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q20-opt3-1.webp#474x172)",
              "![Figure](/pyq/dbms-end-term-apr-2025-fn/q20-opt4-1.webp#482x172)"
            ],
            answer: 2,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "dbms-end-term-apr-2025-an",
    title: "DBMS End Term · 13 Apr 2025 (AN)",
    description: "End Term paper from the January 2025 term, afternoon session on 13 Apr 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-04-13",
      session: "AN",
      term: "January 2025"
    },
    sections: [
      {
        subjectSlug: "database-management-systems",
        title: "Database Management Systems",
        short: "DBMS",
        questions: [
          {
            id: "dbms-end-term-apr-2025-an-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q1-1.webp#575x250)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q1-opt1-1.webp#575x27)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q1-opt2-1.webp#575x24)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q1-opt3-1.webp#575x24)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q1-opt4-1.webp#575x27)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q2-1.webp#575x146)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q2-opt1-1.webp#483x112)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q2-opt2-1.webp#482x112)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q2-opt3-1.webp#483x109)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q2-opt4-1.webp#484x109)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q3",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q3-1.webp#575x363)",
            options: [
              "4",
              "5",
              "6",
              "3"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q4",
            type: "mcq",
            marks: 3,
            prompt: "Consider the following schedule S.\nS:W1(A), W3(A), W3(C), R2(A), W2(A), W1(B), W3(B)\nConsider the following statements.\nStatement 1: The given schedule S is Conflict serializable.\nStatement 2: All Conflict serializable schedules are 2-P lockable.\nStatement 3: The given schedule is 2-P lockable.\nWhich of the following options is correct?",
            options: [
              "Statement 1 is true and statement 3 is false",
              "Statement 2 is true and statement 3 is false",
              "Statements 1 and 2 are true",
              "All these statements are true."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q5-1.webp#575x209)",
            options: [
              "19",
              "20",
              "21",
              "22"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q6",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q6-1.webp#575x531)",
            options: [
              "1-a, 2-d, 3-f",
              "1-b, 2-d, 3-e",
              "1-a, 2-c, 3-e",
              "1-b, 2-c, 3-f"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q7",
            type: "mcq",
            marks: 1,
            prompt: "Consider the following statements and select the correct option.\n1. RAID 1 employs mirroring, maintaining two identical copies of the data on two different disks 2. RAID 3 has a single check disk with parity information.",
            options: [
              "Both the statements are correct.",
              "Both the statements are wrong.",
              "Statement 1 is correct and statement 2 is wrong.",
              "Statement 1 is wrong and statement 2 is correct."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q8",
            type: "multi",
            marks: 1,
            prompt: "Choose the correct statement(s).",
            options: [
              "In static hashing, overflow is commonly handled using overflow buckets or chaining.",
              "Dynamic hashing is suitable for applications where the number of records is unpredictable.",
              "Static hashing is ideal when the dataset size is expected to grow significantly.",
              "Dynamic hashing ensures that hash table utilization remains balanced as data changes."
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q9",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q9-1.webp#575x198)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q9-opt1-1.webp#58x35)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q9-opt2-1.webp#44x26)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q9-opt3-1.webp#45x25)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q9-opt4-1.webp#45x25)"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q10",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q10-1.webp#575x168)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q10-opt1-1.webp#529x26)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q10-opt2-1.webp#575x50)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q10-opt3-1.webp#443x30)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q10-opt4-1.webp#575x46)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q11",
            type: "multi",
            marks: 2,
            prompt: "Consider the following Entity Relationship Diagram:\n\n![Figure](/pyq/dbms-end-term-apr-2025-an/q11-1.webp#575x646)\n\nChoose the correct statements.",
            options: [
              "A bank can provide exactly one ATM machine",
              "An ATM card can be used by multiple customers",
              "A customer can use multiple ATM cards",
              "An ATM card can be inserted in many ATM machines"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q12",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q12-1.webp#575x307)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q12-opt1-1.webp#353x30)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q12-opt2-1.webp#346x28)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q12-opt3-1.webp#350x25)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q12-opt4-1.webp#368x30)"
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q13",
            type: "numerical",
            marks: 3,
            prompt: "Consider you have a file in your hard disk of size 1024 KB. The seek time of your hard disk read head is 4 ms, and the rotational speed is 30,000 rpm. The disk has 256 sectors per track, and each sector stores 512 bytes. Considering that the file data is stored in non-consecutive sectors, how much time will be required to read the whole file after a read request is made (in ms)?",
            answer: 21,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q14",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q14-1.webp#575x203)",
            answer: 39,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q15",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q15-1.webp#575x176)",
            answer: 4,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q16",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q16-1.webp#575x95)",
            answer: 24,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q17",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q17-1.webp#575x161)",
            answer: 4,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q18",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q18-1.webp#575x418)",
            answer: 2200,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q19",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/dbms-end-term-apr-2025-an/q19-passage-1.webp#575x690)",
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q19-1.webp#426x194)",
            answer: 6,
            explanation: ""
          },
          {
            id: "dbms-end-term-apr-2025-an-q20",
            type: "mcq",
            marks: 3,
            passage: "![Figure](/pyq/dbms-end-term-apr-2025-an/q19-passage-1.webp#575x690)",
            prompt: "![Figure](/pyq/dbms-end-term-apr-2025-an/q20-1.webp#575x310)",
            options: [
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q20-opt1-1.webp#400x81)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q20-opt2-1.webp#400x139)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q20-opt3-1.webp#399x120)",
              "![Figure](/pyq/dbms-end-term-apr-2025-an/q20-opt4-1.webp#403x139)"
            ],
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "dbms-end-term-dec-2024-fn",
    title: "DBMS End Term · 22 Dec 2024 (FN)",
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
        subjectSlug: "database-management-systems",
        title: "Database Management Systems",
        short: "DBMS",
        questions: [
          {
            id: "dbms-end-term-dec-2024-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q1-1.webp#548x613)",
            options: [
              "team",
              "rating",
              "age",
              "type"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q2-1.webp#575x100)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q2-opt1-1.webp#274x32)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q2-opt2-1.webp#265x30)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q2-opt3-1.webp#260x28)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q2-opt4-1.webp#253x27)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q3",
            type: "mcq",
            marks: 2,
            prompt: "Consider seek time of your hard disk read head is 2ms, rotational speed is 60,000 RPM. The disk has 300 sectors/track and sector size is 256 bytes. What will be the transfer rate (KB/ms)?",
            options: [
              "75 KB/ms",
              "25 KB/ms",
              "50 KB/ms",
              "100 KB/ms"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q4",
            type: "mcq",
            marks: 2,
            prompt: "Consider a non-empty B+-tree of order 13. What are the maximum and minimum number of keys that can be placed in the root node?",
            options: [
              "max. number of keys = 13, min. number of keys = 6.",
              "max. number of keys = 12, min. number of keys = 1.",
              "max. number of keys = 14, min. number of keys = 1.",
              "max. number of keys = 14, min. number of keys = 7."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q5",
            type: "mcq",
            marks: 2,
            prompt: "Consider a multilevel index with five levels as L1, L2, L3, L4 and L5. Let L1 be the innermost and L5 be the outermost levels. Let the index blocking factor or the maximum number of entries held by a block be 50. If the number of blocks in level L1 is 62,50,000, then how many blocks are required at L2, L3, L4 and L5?",
            options: [
              "Number of blocks at L2 is 125000,\nNumber of blocks at L3 is 2500,\nNumber of blocks at L4 is 50,\nNumber of blocks at L5 is 1",
              "Number of blocks at L2 is 125000,\nNumber of blocks at L3 is 2000,\nNumber of blocks at L4 is 50,\nNumber of blocks at L5 is 1",
              "Number of blocks at L2 is 120000,\nNumber of blocks at L3 is 2400,\nNumber of blocks at L4 is 40,\nNumber of blocks at L5 is 1",
              "Number of blocks at L2 is 120000,\nNumber of blocks at L3 is 3000,\nNumber of blocks at L4 is 60,\nNumber of blocks at L5 is 1"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q6",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q6-1.webp#575x343)",
            options: [
              "5",
              "4",
              "3",
              "6"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q7",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q7-1.webp#575x96)",
            options: [
              "5",
              "4",
              "6",
              "3"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q8",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q8-1.webp#575x436)",
            options: [
              "A = 1000, B = 750, C = 1700, D = 710",
              "A = 1000, B = 750, C = 1700, D = 690",
              "A = 1000, B = 350, C = 1700, D = 710",
              "A = 1000, B = 350, C = 1700, D = 690"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q9",
            type: "mcq",
            marks: 1,
            prompt: "Consider the following statements:\n1. Hot backup refers to keeping a database up and running while the backup is being performed concurrently.\n2. Cold backup is mainly used for Transaction Log Backup.\n3. Transactional Logging is used in circumstances where a possibly inconsistent backup is taken. Choose the correct option.",
            options: [
              "Statements 1 and 2 are correct",
              "Statements 1 and 3 are correct",
              "All the statements are correct",
              "Only Statement 1 is correct"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q10",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q10-1.webp#575x354)",
            options: [
              "T2 can be ignored and T3 needs to be redone.",
              "T4 needs to be undone and T5 needs to be redone.",
              "T1 needs to be redone and T4 can be undone.",
              "T3 needs to be undone and T4 needs to be redone."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q11",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q11-1.webp#571x339)",
            options: [
              "A precedence graph of the schedule is acyclic",
              "The given schedule is not view serializable",
              "The given schedule is view serializable but not conflict serializable",
              "The given schedule is view serializable and conflict serializable"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q12",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q12-1.webp#575x232)",
            options: [
              "S1 and S2 are conflict equivalent.",
              "S1 and S2 are not conflict equivalent.",
              "S1 and S2 are view equivalent.",
              "S1 and S2 are not view equivalent."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q13",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q13-1.webp#575x166)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q13-opt1-1.webp#543x71)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q13-opt2-1.webp#558x74)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q13-opt3-1.webp#558x68)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q13-opt4-1.webp#382x132)"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q14",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q14-1.webp#575x378)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q14-opt1-1.webp#575x38)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q14-opt2-1.webp#575x29)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q14-opt3-1.webp#575x30)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q14-opt4-1.webp#575x28)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q15",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q15-1.webp#575x169)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q15-opt1-1.webp#575x53)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q15-opt2-1.webp#575x56)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q15-opt3-1.webp#575x55)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q15-opt4-1.webp#575x56)"
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q16",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q16-1.webp#575x98)",
            options: [
              "The decomposition of R into R1 and R2 is dependency preserving.",
              "The decomposition of R into R1 and R2 is lossless.",
              "The schema R1 is in 3NF.",
              "The schema R2 is in 2NF."
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q17",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q17-1.webp#575x842)",
            options: [
              "A bank offers more than one loan",
              "An account is managed by more than one bank",
              "Every loan must be availed by at least one customer",
              "Every customer must be holding at least one account"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q18",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q18-1.webp#575x157)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q18-opt1-1.webp#575x39)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q18-opt2-1.webp#575x41)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q18-opt3-1.webp#575x41)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q18-opt4-1.webp#575x36)"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q19",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-fn/q19-1.webp#575x282)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q19-opt1-1.webp#142x29)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q19-opt2-1.webp#131x25)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q19-opt3-1.webp#174x27)",
              "![Figure](/pyq/dbms-end-term-dec-2024-fn/q19-opt4-1.webp#209x32)"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-fn-q20",
            type: "numerical",
            marks: 3,
            prompt: "Consider a Block nested loop join for the two relations, instructor and department. Assuming the worst-case memory availability and instructor as the outer relation, the provided details are as follows:\n• Total number of block transfers: 25000\n• Total number of seeks required: 500\n• Number of block in the outer relation: 250\nWhat is the number of blocks in the inner relation?",
            answer: 100,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "dbms-end-term-dec-2024-an",
    title: "DBMS End Term · 22 Dec 2024 (AN)",
    description: "End Term paper from the September 2024 term, afternoon session on 22 Dec 2024, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2024-12-22",
      session: "AN",
      term: "September 2024"
    },
    sections: [
      {
        subjectSlug: "database-management-systems",
        title: "Database Management Systems",
        short: "DBMS",
        questions: [
          {
            id: "dbms-end-term-dec-2024-an-q1",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q1-1.webp#575x122)",
            options: [
              "A precedence graph of the schedule is cyclic",
              "The given schedule is not view serializable",
              "The given schedule is view serializable but not conflict serializable",
              "The given schedule is view serializable and conflict serializable"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q2",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q2-1.webp#575x368)",
            options: [
              "Statements 1 and 4 are correct.",
              "Statements 1 and 3 are correct.",
              "Statements 2 and 3 are correct.",
              "Statements 2 and 4 are correct."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q3",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q3-1.webp#575x90)",
            options: [
              "5",
              "4",
              "6",
              "3"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q4",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q4-1.webp#575x405)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q4-opt1-1.webp#282x22)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q4-opt2-1.webp#285x23)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q4-opt3-1.webp#282x24)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q4-opt4-1.webp#278x21)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q5",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q5-1.webp#575x90)",
            options: [
              "The decomposition of R into R1 and R2 is dependency preserving.",
              "The decomposition of R into R1 and R2 is lossless.",
              "The schema R1 is in 3NF.",
              "The schema R2 is in 2NF."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q6",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q6-1.webp#542x489)",
            options: [
              "team",
              "rating",
              "age",
              "type"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q7",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q7-1.webp#575x100)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q7-opt1-1.webp#247x20)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q7-opt2-1.webp#255x19)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q7-opt3-1.webp#234x20)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q7-opt4-1.webp#250x24)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q8",
            type: "mcq",
            marks: 2,
            prompt: "Consider seek time of your hard disk read head is 2ms, rotational speed is 30,000 RPM. The disk has 400 sectors/track and sector size is 128 bytes. What will be the transfer rate (KB/ms)?",
            options: [
              "75 KB/ms",
              "25 KB/ms",
              "50 KB/ms",
              "100 KB/ms"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q9",
            type: "mcq",
            marks: 2,
            prompt: "Consider a non-empty B+-tree of order 16. What are the maximum and minimum number of keys that can be placed in the root node?",
            options: [
              "max. number of keys = 15, min. number of keys = 8.",
              "max. number of keys = 15, min. number of keys = 1.",
              "max. number of keys = 16, min. number of keys = 1.",
              "max. number of keys = 16, min. number of keys = 8."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q10",
            type: "mcq",
            marks: 2,
            prompt: "Consider a multilevel index with five levels as L1, L2, L3, L4 and L5. Let L1 be the innermost and L5 be the outermost levels. Let the index blocking factor or the maximum number of entries held by a block be 25. If the number of blocks in level L1 is 12,50,000, then how many blocks are required at L2, L3, L4 and L5?",
            options: [
              "Number of blocks at L2 is 50000,\nNumber of blocks at L3 is 2000,\nNumber of blocks at L4 is 80,\nNumber of blocks at L5 is 4",
              "Number of blocks at L2 is 125000,\nNumber of blocks at L3 is 2000,\nNumber of blocks at L4 is 80,\nNumber of blocks at L5 is 1",
              "Number of blocks at L2 is 50000,\nNumber of blocks at L3 is 2000,\nNumber of blocks at L4 is 80,\nNumber of blocks at L5 is 1",
              "Number of blocks at L2 is 125000,\nNumber of blocks at L3 is 2500,\nNumber of blocks at L4 is 80,\nNumber of blocks at L5 is 4"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q11",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q11-1.webp#575x349)",
            options: [
              "5",
              "4",
              "3",
              "2"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q12",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q12-1.webp#409x261)",
            options: [
              "ID and name of students who have not taken any course from Biology department",
              "ID and name of students who have taken courses from Biology department",
              "ID and name of students who have taken all the courses from Biology department",
              "ID and name of students who have not taken courses from other than Biology department"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q13",
            type: "mcq",
            marks: 1,
            prompt: "Consider the following statements:\n1. Any transactions committed before the last checkpoint should be ignored.\n2. Any transaction that was running at the time of failure needs to be redone.\n3. It scans backwards from the end of the log to find the most recent < checkpointL > record. Choose the correct option.",
            options: [
              "Statements 1 and 2 are correct",
              "Statements 1 and 3 are correct",
              "All the statements are correct",
              "Only Statement 1 is correct"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q14",
            type: "multi",
            marks: 3,
            prompt: "Consider the ER Diagram as shown below:\n\n![Figure](/pyq/dbms-end-term-dec-2024-an/q14-1.webp#575x635)\n\nIdentify the correct relational schema for the relationship set Bank, Account and Manages Note: The primary key is underlined.",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q14-opt1-1.webp#371x67)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q14-opt2-1.webp#345x69)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q14-opt3-1.webp#295x48)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q14-opt4-1.webp#372x65)"
            ],
            answer: [
              0
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q15",
            type: "multi",
            marks: 3,
            prompt: "Consider a state of transactions as shown in Figure 3.\n\n![Figure](/pyq/dbms-end-term-dec-2024-an/q15-1.webp#575x350)\n\nWhich of the following statement(s) is/are correct according to the given figure?",
            options: [
              "T1 can be ignored and T3 needs to be redone.",
              "T4 and T5 need to be undone.",
              "T1 needs to be redone and T4 can be undone.",
              "T2 needs to be undone and T4 needs to be redone."
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q16",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q16-1.webp#575x155)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q16-opt1-1.webp#575x34)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q16-opt2-1.webp#575x32)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q16-opt3-1.webp#575x32)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q16-opt4-1.webp#575x32)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q17",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q17-1.webp#575x328)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q17-opt1-1.webp#575x27)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q17-opt2-1.webp#575x29)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q17-opt3-1.webp#575x29)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q17-opt4-1.webp#513x26)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q18",
            type: "multi",
            marks: 3,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q18-1.webp#575x155)",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q18-opt1-1.webp#575x50)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q18-opt2-1.webp#575x51)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q18-opt3-1.webp#575x50)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q18-opt4-1.webp#575x74)"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q19",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/dbms-end-term-dec-2024-an/q19-1.webp#464x264)\n\nWhich of the following functional dependencies hold in the Students table?",
            options: [
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q19-opt1-1.webp#220x26)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q19-opt2-1.webp#235x24)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q19-opt3-1.webp#120x22)",
              "![Figure](/pyq/dbms-end-term-dec-2024-an/q19-opt4-1.webp#189x22)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "dbms-end-term-dec-2024-an-q20",
            type: "numerical",
            marks: 3,
            prompt: "Consider a Block nested loop join for the two relations, instructor and department. Assuming the worst-case memory availability and instructor as the outer relation, the provided details are as follows:\n\n![Figure](/pyq/dbms-end-term-dec-2024-an/q20-1.webp#340x83)\n\nWhat is the number of blocks in the inner relations?",
            answer: 59,
            explanation: ""
          }
        ]
      }
    ]
  }
];
