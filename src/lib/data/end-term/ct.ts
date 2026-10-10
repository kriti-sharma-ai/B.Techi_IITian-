import type { QualifierMock } from "../../types";

// Computational Thinking: IIT Madras BS End Term papers (5 papers, 100 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const ctEndTermPapers: QualifierMock[] = [
  {
    slug: "ct-end-term-aug-2025-fn",
    title: "CT End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "computational-thinking",
        title: "Computational Thinking",
        short: "CT",
        questions: [
          {
            id: "ct-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q1-1.webp#575x543)",
            options: [
              "Dictionary with words as keys mapped to the number of sentences in which the word is present.",
              "Dictionary with words as keys mapped to the frequency count of the word in the dataset.",
              "Dictionary with words as keys mapped to the maximum frequency of the word in a sentence.",
              "Dictionary with words as keys mapped to the number of sentences in which the word is present more than one time."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q2-1.webp#575x585)",
            options: [
              "A = Number of cities where students have scored the highest marks in Mathematics\nB = The highest marks in Mathematics",
              "A = Number of cities where students have scored the lowest marks in Mathematics\nB = The highest marks in Mathematics",
              "A = Cities where students have scored the lowest marks in Mathematics B = The lowest marks in Mathematics",
              "A = Number of cities with the highest Mathematics scores\nB = The lowest marks in Mathematics"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q3-1.webp#575x603)",
            options: [
              "Number of students from the cities with the average total marks of the city more than the average total marks of the dataset.",
              "Number of students from the cities with the average total marks of the city less than the average total marks of the dataset.",
              "Number of cities with the average total marks less than the average total marks of the dataset.",
              "Number of cities with the average total marks more than the average total marks of the dataset"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q4-1.webp#575x365)",
            options: [
              "Dictionary with authors as keys mapped to the year of publication of their latest book",
              "Dictionary with authors as keys mapped to the year of publication of their first book",
              "Dictionary with authors as keys mapped to the year of publication of their second book",
              "Dictionary with authors as keys mapped to the year of publication of their second latest book"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q5-1.webp#575x350)",
            options: [
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q5-opt1-1.webp#575x196)",
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q5-opt2-1.webp#575x195)",
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q5-opt3-1.webp#575x239)",
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q5-opt4-1.webp#575x216)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q6",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q6-1.webp#440x406)",
            options: [
              "There are 4 cliques of size three present in the graph.",
              "The nodes 0, 1, 2 and 4 form a clique of size four.",
              "The maximum size of clique that appears in the graph is 4.",
              "The nodes 0 and 1 form a clique of size two."
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q7",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q7-1.webp#575x384)",
            options: [
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q7-opt1-1.webp#405x24)",
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q7-opt2-1.webp#405x22)",
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q7-opt3-1.webp#575x194)",
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q7-opt4-1.webp#575x191)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q8",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q8-1.webp#575x293)",
            options: [
              "The first element of both the lists, cumuList and aList, will be same.",
              "Number of elements in cumuList will be one lesser than that of aList.",
              "cumuList is a list of numbers in increasing order.",
              "Number of elements in both lists, cumuList and aList, will be different."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q9",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q9-1.webp#575x589)",
            options: [
              "N represents maximum number of bills issued to a single customer.",
              "count represents number of customers.",
              "A represents maximum number of bills issued to a single customer.",
              "N represents maximum number of bills issued to a single customer from the same shop."
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q10",
            type: "multi",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q10-1.webp#575x255)",
            options: [
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q10-opt1-1.webp#575x45)",
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q10-opt2-1.webp#575x42)",
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q10-opt3-1.webp#575x46)",
              "![Figure](/pyq/ct-end-term-aug-2025-fn/q10-opt4-1.webp#575x45)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q11",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q11-1.webp#575x341)",
            answer: 22,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q12",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q12-1.webp#575x479)",
            answer: 4,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q13",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q13-1.webp#575x714)",
            answer: 2,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q14",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q14-1.webp#575x269)",
            answer: 16,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q15",
            type: "mcq",
            marks: 5,
            passage: "![Figure](/pyq/ct-end-term-aug-2025-fn/q15-passage-1.webp#575x496)\n\n![Figure](/pyq/ct-end-term-aug-2025-fn/q15-passage-2.webp#387x559)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What does the value length(keys(A[i] [j])) represent?",
            options: [
              "It is the number of trains that go from station i to j that stop at least one intermediate station.",
              "It is the number of trains that go from station i to j without stopping at any intermediate station.",
              "It is the number of trains that go from station j to i without stopping at any intermediate station.",
              "It is the number of trains that go from station i to j that stop at most one intermediate station."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q16",
            type: "multi",
            marks: 6,
            passage: "![Figure](/pyq/ct-end-term-aug-2025-fn/q15-passage-1.webp#575x496)\n\n![Figure](/pyq/ct-end-term-aug-2025-fn/q15-passage-2.webp#387x559)\n\nBased on the above data, answer the given subquestions.",
            prompt: "ijMin is a procedure that accepts a pair of stations (i, j), and the matrix A as input. It returns a train which goes from i to j by covering the least distance, without stopping at any intermediate station. If there is no train connecting these two stations, the procedure returns -1. The pseudocode may have mistakes. Identify all of them (if any). It is a Multiple Select Question (MSQ).\n\n![Figure](/pyq/ct-end-term-aug-2025-fn/q16-1.webp#359x346)",
            options: [
              "Error in line 3",
              "Error in line 5",
              "Error in line 6",
              "Error in line 7"
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q17",
            type: "multi",
            marks: 5,
            passage: "![Figure](/pyq/ct-end-term-aug-2025-fn/q17-passage-1.webp#575x427)",
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q17-1.webp#468x522)",
            options: [
              "newMatrix [0] [2] = 1",
              "newMatrix [0] [0] = 1",
              "newMatrix [0] [1] = 0",
              "newMatrix [1] [3] = 0"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q18",
            type: "mcq",
            marks: 5,
            passage: "![Figure](/pyq/ct-end-term-aug-2025-fn/q17-passage-1.webp#575x427)",
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-fn/q18-1.webp#472x467)",
            options: [
              "1",
              "2",
              "3",
              "4"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q19",
            type: "mcq",
            marks: 5,
            passage: "![Figure](/pyq/ct-end-term-aug-2025-fn/q19-passage-1.webp#575x584)",
            prompt: "What is the value of D[10] ?",
            options: [
              "7",
              "10",
              "30",
              "20"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-fn-q20",
            type: "numerical",
            marks: 4,
            passage: "![Figure](/pyq/ct-end-term-aug-2025-fn/q19-passage-1.webp#575x584)",
            prompt: "What is the value of length(keys(D)) ?",
            answer: 8,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "ct-end-term-aug-2025-an",
    title: "CT End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "computational-thinking",
        title: "Computational Thinking",
        short: "CT",
        questions: [
          {
            id: "ct-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q1-1.webp#575x344)",
            options: [
              "![Figure](/pyq/ct-end-term-aug-2025-an/q1-opt1-1.webp#433x265)",
              "![Figure](/pyq/ct-end-term-aug-2025-an/q1-opt2-1.webp#430x288)",
              "![Figure](/pyq/ct-end-term-aug-2025-an/q1-opt3-1.webp#404x242)",
              "![Figure](/pyq/ct-end-term-aug-2025-an/q1-opt4-1.webp#428x285)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q2-1.webp#575x594)",
            options: [
              "![Figure](/pyq/ct-end-term-aug-2025-an/q2-opt1-1.webp#575x42)",
              "![Figure](/pyq/ct-end-term-aug-2025-an/q2-opt2-1.webp#575x47)",
              "![Figure](/pyq/ct-end-term-aug-2025-an/q2-opt3-1.webp#575x43)",
              "![Figure](/pyq/ct-end-term-aug-2025-an/q2-opt4-1.webp#401x43)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q3-1.webp#575x614)",
            options: [
              "Number of students from the cities with the average total marks of the city greater than the average total marks of the dataset.",
              "Number of students from the cities with the average total marks of the city less than the average total marks of the dataset.",
              "Number of cities with the average total marks less than the average total marks of the dataset.",
              "Number of cities with the average total marks more than the average total marks of the dataset"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q4-1.webp#575x367)",
            options: [
              "Dictionary with authors as keys mapped to the year of publication of their latest book",
              "Dictionary with authors as keys mapped to the year of publication of their first book",
              "Dictionary with authors as keys mapped to the year of publication of their second book",
              "Dictionary with authors as keys mapped to the year of publication of their second latest book"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q5-1.webp#575x518)",
            options: [
              "Number of pairs of students with different gender or same Town/City",
              "Number of pairs of students with same gender or different Town/City",
              "Number of pairs of students with different gender and same Town/City",
              "Number of pairs of students with same gender and different Town/City"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q6",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q6-1.webp#400x373)",
            options: [
              "There are 5 cliques of size three present in the graph.",
              "The nodes 0, 2, 3 and 4 form a clique of size four.",
              "The maximum size of clique that appears in the graph is 3.",
              "The nodes 1, 2 and 3 form a clique of size three."
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q7",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q7-1.webp#575x808)",
            options: [
              "When L = [5, 8, 6, 1, 3], the output of findSomething1(L) is 8.",
              "When L = [5, 8, 6, 1, 3], the output of findSomething1(L) is 1.",
              "When L = [5, 8, 6, 1, 3], the output of findSomething2(L) is 8.",
              "When L = [5, 8, 6, 1, 3], the output of findSomething2(L) is 1."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q8",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q8-1.webp#575x273)",
            options: [
              "The first element of both the lists, cumuList and aList, will be same.",
              "Number of elements in cumuList will be one lesser than that of aList.",
              "cumuList is a list of numbers in decreasing order.",
              "Number of elements in both lists, cumuList and aList, will be different."
            ],
            answer: [
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q9",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q9-1.webp#575x576)",
            options: [
              "N represents maximum number of bills issued to a single customer.",
              "count represents number of customers.",
              "At the end of the execution, the value of A will be 1.",
              "N represents maximum number of bills issued to a single customer from the same shop."
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q10",
            type: "multi",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q10-1.webp#575x258)",
            options: [
              "![Figure](/pyq/ct-end-term-aug-2025-an/q10-opt1-1.webp#360x49)",
              "![Figure](/pyq/ct-end-term-aug-2025-an/q10-opt2-1.webp#526x51)",
              "![Figure](/pyq/ct-end-term-aug-2025-an/q10-opt3-1.webp#516x52)",
              "![Figure](/pyq/ct-end-term-aug-2025-an/q10-opt4-1.webp#528x49)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q11",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q11-1.webp#575x343)",
            answer: 13,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q12",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q12-1.webp#575x476)",
            answer: 4,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q13",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q13-1.webp#575x742)",
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q14",
            type: "numerical",
            marks: 4,
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q14-1.webp#439x273)",
            answer: 10,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q15",
            type: "multi",
            marks: 5,
            passage: "Consider the following condensed version of the “Trains” dataset. There are a total of n stations, with stations being indexed from 0 to n − 1. There are M rows in the table. Each row contains information about a train that connects two stations without any stops in between.\n\n![Figure](/pyq/ct-end-term-aug-2025-an/q15-passage-1.webp#436x244)\n\nRow r, tells us that train t departs from station i and arrives at station j after covering a distance of d kilometers without stopping at any intermediate station. Therefore, each train t will occupy multiple rows in this table.\nThis scenario is modeled as a graph and is represented by a matrix A. Each node in the graph corresponds to a station. Assume that the value of n is already given to you. Consider the following pseudocode.\n\n![Figure](/pyq/ct-end-term-aug-2025-an/q15-passage-2.webp#404x570)\n\nBased on the above data, answer the given subquestions.",
            prompt: "If (i, j) is a pair of stations, which of the following statements about the dictionary A[i][j] are true?",
            options: [
              "Each key corresponds to a train that goes from station i to j without stopping at any intermediate station.",
              "Each key corresponds to a train that goes from station i to j. It may stop at multiple stations between i and j.",
              "The value corresponding to key t of the dictionary is the distance between stations i and j on t’s route.",
              "The value corresponding to key t of the dictionary is the minimum distance between stations i and j on t’s route."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q16",
            type: "multi",
            marks: 6,
            passage: "Consider the following condensed version of the “Trains” dataset. There are a total of n stations, with stations being indexed from 0 to n − 1. There are M rows in the table. Each row contains information about a train that connects two stations without any stops in between.\n\n![Figure](/pyq/ct-end-term-aug-2025-an/q15-passage-1.webp#436x244)\n\nRow r, tells us that train t departs from station i and arrives at station j after covering a distance of d kilometers without stopping at any intermediate station. Therefore, each train t will occupy multiple rows in this table.\nThis scenario is modeled as a graph and is represented by a matrix A. Each node in the graph corresponds to a station. Assume that the value of n is already given to you. Consider the following pseudocode.\n\n![Figure](/pyq/ct-end-term-aug-2025-an/q15-passage-2.webp#404x570)\n\nBased on the above data, answer the given subquestions.",
            prompt: "ijMin is a procedure that accepts a pair of stations (i, j), and the matrix A as input. It returns a train which goes from i to j by covering the least distance, without stopping at any intermediate station. If there is no train connecting these two stations, the procedure returns -1. The pseudocode may have mistakes. Identify all of them (if any).\n\n![Figure](/pyq/ct-end-term-aug-2025-an/q16-1.webp#369x349)\n\nBased on the above data, answer the given subquestions.",
            options: [
              "Error in line 3",
              "Error in line 5",
              "Error in line 7",
              "Error in line 9"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q17",
            type: "multi",
            marks: 5,
            passage: "Let M be an adjacency matrix of a graph G given below, where M[i][j] = 1 if there is an edge from i to j, otherwise 0.\nListV represents the list of vertices of the graph G.\n\n![Figure](/pyq/ct-end-term-aug-2025-an/q17-passage-1.webp#390x291)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q17-1.webp#502x512)",
            options: [
              "newMatrix [2] [4] = 1",
              "newMatrix [1] [1] = 0",
              "newMatrix [3] [0] = 1",
              "newMatrix [1] [3] = 0"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q18",
            type: "mcq",
            marks: 5,
            passage: "Let M be an adjacency matrix of a graph G given below, where M[i][j] = 1 if there is an edge from i to j, otherwise 0.\nListV represents the list of vertices of the graph G.\n\n![Figure](/pyq/ct-end-term-aug-2025-an/q17-passage-1.webp#390x291)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ct-end-term-aug-2025-an/q18-1.webp#498x449)",
            options: [
              "3",
              "5",
              "6",
              "9"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q19",
            type: "mcq",
            marks: 5,
            passage: "Consider the implementation of the following procedure getDictionary.\nAssume that the procedure absolute takes an integer as parameter and returns the absolute value. For example, absolute(-2) = 2 and absolute(3) = 3.\n\n![Figure](/pyq/ct-end-term-aug-2025-an/q19-passage-1.webp#534x437)\n\nLet D be the value returned by getDictionary([5, 10, 20, 30, 20, 10, 20, 5, 15]). Answer the given subquestions based on D.",
            prompt: "What is the value of D[20] ?",
            options: [
              "7",
              "10",
              "30",
              "20"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "ct-end-term-aug-2025-an-q20",
            type: "numerical",
            marks: 4,
            passage: "Consider the implementation of the following procedure getDictionary.\nAssume that the procedure absolute takes an integer as parameter and returns the absolute value. For example, absolute(-2) = 2 and absolute(3) = 3.\n\n![Figure](/pyq/ct-end-term-aug-2025-an/q19-passage-1.webp#534x437)\n\nLet D be the value returned by getDictionary([5, 10, 20, 30, 20, 10, 20, 5, 15]). Answer the given subquestions based on D.",
            prompt: "What is the value of length(keys(D)) ?",
            answer: 5,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "ct-end-term-apr-2025-fn",
    title: "CT End Term · 13 Apr 2025 (FN)",
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
        subjectSlug: "computational-thinking",
        title: "Computational Thinking",
        short: "CT",
        questions: [
          {
            id: "ct-end-term-apr-2025-fn-q1",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q1-1.webp#575x521)",
            options: [
              "Dictionary with words as keys mapped to the number of sentences in which the word is present.",
              "Dictionary with words as keys mapped to the frequency count of the word in the dataset.",
              "Dictionary with words as keys mapped to the maximum frequency of the word in a sentence.",
              "Dictionary with words as keys mapped to the number of sentences in which the word is present more than one time."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q2",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q2-1.webp#575x629)",
            options: [
              "A = Number of cities where students score the highest marks in Mathematics B = The highest marks in Mathematics",
              "A = Number of cities where students score the lowest marks in Mathematics B = The highest marks in Mathematics",
              "A = Cities where students score the lowest marks in Mathematics B = The lowest marks in Mathematics",
              "A = Number of cities with the highest Mathematics scores\nB = The lowest marks in Mathematics"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q3",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q3-1.webp#575x445)",
            options: [
              "0",
              "2",
              "4",
              "6"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q4",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q4-1.webp#575x389)",
            options: [
              "A dictionary where each city maps to the highest total marks scored and the corresponding student's name.",
              "A dictionary where each city maps to the lowest total marks scored and the corresponding student's name.",
              "A dictionary where each city maps to the lowest total marks recorded in that city.",
              "None of these"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q5",
            type: "mcq",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q5-1.webp#575x646)",
            options: [
              "they are from different cities/towns",
              "they have the same gender",
              "they are from the same cities/towns or have the same gender",
              "they are from the same cities/towns but have different genders"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q6",
            type: "mcq",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q6-1.webp#575x671)",
            options: [
              "j scored at most 20 and at least 30 more marks in Chemistry than i",
              "i scored at most 20 and at least 30 more marks in Chemistry than j",
              "i scored at least 20 and at most 30 more marks in Chemistry than j",
              "j scored at least 20 and at most 30 more marks in Chemistry than i"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q7",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q7-1.webp#575x507)",
            options: [
              "outList represents a list of lists",
              "Each element in outList represents a list containing words and their parts of speech from a sentence except for the nouns",
              "Each element in outList corresponds to one character from the paragraph",
              "Each element in outL ist represents the words from a sentence that have part of speech 'noun'"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q8",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q8-1.webp#575x374)",
            options: [
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q8-opt1-1.webp#575x112)",
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q8-opt2-1.webp#575x179)",
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q8-opt3-1.webp#408x31)",
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q8-opt4-1.webp#575x241)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q9",
            type: "multi",
            marks: 4,
            prompt: "Let D be a non-empty dictionary defined as:\nD = { \"x\": [10, 20, 30], \"y\": [5, 15, 25], \"z\": { \"a\": 100, \"b\": 200 }, \"w\": \"a\" }\nChoose the correct option(s). It is a Multiple Select Question (MSQ).",
            options: [
              "The expression first(D[\"x\"]) + last(D[\"y\"]) evaluates to 35.",
              "The expression init(D[\"z\"]) returns \"a\":100.",
              "The expression length(keys(D)) returns 4.",
              "The expression first(rest(D[\"x\"])) returns 30."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q10",
            type: "multi",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q10-1.webp#575x372)",
            options: [
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q10-opt1-1.webp#419x36)",
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q10-opt2-1.webp#416x28)",
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q10-opt3-1.webp#575x198)",
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q10-opt4-1.webp#575x200)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q11",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q11-1.webp#575x480)",
            answer: 3,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q12",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q12-1.webp#575x324)",
            answer: -2,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q13",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/ct-end-term-apr-2025-fn/q13-passage-1.webp#575x830)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q13-1.webp#240x36)",
            options: [
              "Revenue generated by item j for shop i",
              "Revenue generated by item i for shop j",
              "Cost of item i in shop j",
              "Cost of item j in shop i"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q14",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/ct-end-term-apr-2025-fn/q13-passage-1.webp#575x830)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What will costD[i] represent at the end of the execution?",
            options: [
              "List of item(s) which generated highest revenue for shop i",
              "List of item(s) which generated lowest revenue for shop i",
              "List of cost of most sold item(s) in shop i",
              "List of cost of least sold item(s) in shop i"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q15",
            type: "mcq",
            marks: 5,
            passage: "The following table contains information regarding books in a library. Each entry in the table corresponds to a book and is authored by at least two authors. There is a pool of n authors, each author being assigned a unique index between 0 and n − 1. There are M books in total.\n\n![Figure](/pyq/ct-end-term-apr-2025-fn/q15-passage-1.webp#208x167)\n\nThe table is represented by a dictionary named books, with the keys as serial numbers and values as the corresponding list of authors. Assume that books has already been computed. For example, we have: books[0] = [0, 2, 3].\nBased on the above data, answer the given subquestions.",
            prompt: "The following pseudocode generates a graph G from books. Each node corresponds to an author. There is an edge between two different authors j and k if they have co-authored a book, and the edge is labeled with the number of books they have co-authored. Choose the correct code fragment to complete the following pseudocode.\n\n![Figure](/pyq/ct-end-term-apr-2025-fn/q15-1.webp#366x246)",
            options: [
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q15-opt1-1.webp#319x51)",
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q15-opt2-1.webp#350x116)",
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q15-opt3-1.webp#354x116)",
              "![Figure](/pyq/ct-end-term-apr-2025-fn/q15-opt4-1.webp#324x76)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q16",
            type: "mcq",
            marks: 5,
            passage: "The following table contains information regarding books in a library. Each entry in the table corresponds to a book and is authored by at least two authors. There is a pool of n authors, each author being assigned a unique index between 0 and n − 1. There are M books in total.\n\n![Figure](/pyq/ct-end-term-apr-2025-fn/q15-passage-1.webp#208x167)\n\nThe table is represented by a dictionary named books, with the keys as serial numbers and values as the corresponding list of authors. Assume that books has already been computed. For example, we have: books[0] = [0, 2, 3].\nBased on the above data, answer the given subquestions.",
            prompt: "The following pseudocode creates adjacency matrix matrix2 of another graph H from books. For two different authors j and k, what does the value matrix2[j] [k] represent at the end of the execution?\n\n![Figure](/pyq/ct-end-term-apr-2025-fn/q16-1.webp#575x409)",
            options: [
              "List of authors who have co-authored a book with both j and k",
              "List of authors who have co-authored a book with either j or k",
              "List of authors who have co-authored at least two book with both j and k",
              "List of authors who have co-authored at least two book with either j or k"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q17",
            type: "mcq",
            marks: 5,
            passage: "Let M be an adjacency matrix of a graph G given below, where M[i][j] = 1 if there is an edge from i to j, otherwise 0.\nListV represents the list of vertices of the graph G.\n\n![Figure](/pyq/ct-end-term-apr-2025-fn/q17-passage-1.webp#346x398)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q17-1.webp#485x577)",
            options: [
              "p = 0, q = 0",
              "p = 1, q = 0",
              "p = 0, q = 1",
              "p = 1, q = 1"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q18",
            type: "mcq",
            marks: 5,
            passage: "Let M be an adjacency matrix of a graph G given below, where M[i][j] = 1 if there is an edge from i to j, otherwise 0.\nListV represents the list of vertices of the graph G.\n\n![Figure](/pyq/ct-end-term-apr-2025-fn/q17-passage-1.webp#346x398)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-fn/q18-1.webp#547x489)",
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
            id: "ct-end-term-apr-2025-fn-q19",
            type: "mcq",
            marks: 5,
            passage: "The following pseudocode is executed using the “Scores” dataset. Two students form a study pair if their difference in Mathematics marks are at most 10. Assume that Pile P1 is always restored back after calling studyPair(Pile P1).\n\n![Figure](/pyq/ct-end-term-apr-2025-fn/q19-passage-1.webp#575x717)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What will count1 represent at the end of execution?",
            options: [
              "Number of study pairs",
              "Number of pairs of study pair",
              "Number of students who formed study pairs",
              "Number of study pairs from the same city"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-fn-q20",
            type: "mcq",
            marks: 5,
            passage: "The following pseudocode is executed using the “Scores” dataset. Two students form a study pair if their difference in Mathematics marks are at most 10. Assume that Pile P1 is always restored back after calling studyPair(Pile P1).\n\n![Figure](/pyq/ct-end-term-apr-2025-fn/q19-passage-1.webp#575x717)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What will count3 represent at the end of execution?",
            options: [
              "Number of study pairs where at least one student in the pair is not from the cities Chennai, Bengaluru, and Vellore",
              "Number of study pairs where both students in the pair are not from the same city among Chennai, Bengaluru and Vellore",
              "Number of study pairs where both students in the pair are from the same city among Chennai, Bengaluru and Vellore",
              "None of these"
            ],
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "ct-end-term-apr-2025-an",
    title: "CT End Term · 13 Apr 2025 (AN)",
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
        subjectSlug: "computational-thinking",
        title: "Computational Thinking",
        short: "CT",
        questions: [
          {
            id: "ct-end-term-apr-2025-an-q1",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q1-1.webp#575x522)",
            options: [
              "![Figure](/pyq/ct-end-term-apr-2025-an/q1-opt1-1.webp#366x153)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q1-opt2-1.webp#375x152)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q1-opt3-1.webp#381x156)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q1-opt4-1.webp#347x152)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q2",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q2-1.webp#575x578)",
            options: [
              "![Figure](/pyq/ct-end-term-apr-2025-an/q2-opt1-1.webp#526x50)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q2-opt2-1.webp#520x48)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q2-opt3-1.webp#441x49)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q2-opt4-1.webp#391x47)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q3",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q3-1.webp#575x444)",
            options: [
              "1",
              "3",
              "5",
              "9"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q4",
            type: "mcq",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q4-1.webp#575x611)",
            options: [
              "they are from different cities/towns",
              "they have the same gender",
              "they are from the different cities/towns and have different genders",
              "they are from the same cities/towns or have the different genders"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q5",
            type: "mcq",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q5-1.webp#575x656)",
            options: [
              "j scored at most 20 and at least 30 more marks in Mathematics than i",
              "i scored at most 20 and at least 30 more marks in Mathematics than j",
              "i scored at least 20 and at most 30 more marks in Mathematics than j",
              "j scored at least 20 and at most 30 more marks in Mathematics than i"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q6",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q6-1.webp#575x482)",
            options: [
              "outList represents a list of lists",
              "Each element in outList represents a list containing words and their parts of speech from a sentence except for the adjectives",
              "Each element in outList corresponds to one sentence from the paragraph",
              "Each element in outList represents the words from a sentence that have part of speech 'adjective'"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q7",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q7-1.webp#575x497)",
            options: [
              "A dictionary where each gender maps to the total number of students for each city.",
              "A dictionary where each city maps to the total number of students for each gender.",
              "A dictionary where each city maps to the total number of students.",
              "None of these"
            ],
            answer: [
              1
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q8",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q8-1.webp#575x375)",
            options: [
              "![Figure](/pyq/ct-end-term-apr-2025-an/q8-opt1-1.webp#575x113)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q8-opt2-1.webp#575x175)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q8-opt3-1.webp#397x24)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q8-opt4-1.webp#575x241)"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q9",
            type: "multi",
            marks: 4,
            prompt: "Let D be a non-empty dictionary defined as:\nD = { \"x\": [10, 20, 30], \"y\": [5, 15, 25], \"z\": { \"a\": 100, \"b\": 200 }, \"w\": \"a\" }\nChoose the correct option(s). It is a Multiple Select Question (MSQ).",
            options: [
              "The expression last(D[\"x\"]) + init(D[\"y\"]) evaluates to 35.",
              "The expression init(D[\"z\"]) returns \"a\":100.",
              "The expression length(D[\"z\"]) returns 2.",
              "The expression last(rest(D[\"x\"])) returns 30."
            ],
            answer: [
              3
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q10",
            type: "multi",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q10-1.webp#575x353)",
            options: [
              "![Figure](/pyq/ct-end-term-apr-2025-an/q10-opt1-1.webp#417x26)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q10-opt2-1.webp#416x26)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q10-opt3-1.webp#575x200)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q10-opt4-1.webp#575x195)"
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q11",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q11-1.webp#575x322)",
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q12",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q12-1.webp#575x478)",
            answer: 4,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q13",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/ct-end-term-apr-2025-an/q13-passage-1.webp#575x823)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ct-end-term-apr-2025-an/q13-1.webp#225x23)",
            options: [
              "Revenue generated by item j for shop i",
              "Revenue generated by item i for shop j",
              "Cost of item i in shop j",
              "Cost of item j in shop i"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q14",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/ct-end-term-apr-2025-an/q13-passage-1.webp#575x823)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What will costD[i] represent at the end of the execution?",
            options: [
              "List of item(s) which generated highest revenue for shop i",
              "List of item(s) which generated lowest revenue for shop i",
              "List of cost of most sold item(s) in shop i",
              "List of cost of least sold item(s) in shop i"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q15",
            type: "mcq",
            marks: 5,
            passage: "![Figure](/pyq/ct-end-term-apr-2025-an/q15-passage-1.webp#575x330)\n\nBased on the above data, answer the given subquestions.",
            prompt: "The following pseudocode generates a graph G from books. Each node corresponds to an author. For two different authors j and k, what does the value matrix[j] [k] represent at the end of the execution?\n\n![Figure](/pyq/ct-end-term-apr-2025-an/q15-1.webp#460x248)",
            options: [
              "Number of books that they have co-authored",
              "List of books that they have co-authored",
              "Total number of books authored by both the authors",
              "Total number of books authored by either j or k or both"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q16",
            type: "multi",
            marks: 5,
            passage: "![Figure](/pyq/ct-end-term-apr-2025-an/q15-passage-1.webp#575x330)\n\nBased on the above data, answer the given subquestions.",
            prompt: "The following pseudocode creates adjacency matrix matrix2 of another graph H from books. For two different authors j and k, matrix2[j] [k] represents list of authors who have co-authored a book with both j and k. Choose the correct code fragment to complete the following pseudocode.\n\n![Figure](/pyq/ct-end-term-apr-2025-an/q16-1.webp#373x388)",
            options: [
              "![Figure](/pyq/ct-end-term-apr-2025-an/q16-opt1-1.webp#575x89)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q16-opt2-1.webp#566x110)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q16-opt3-1.webp#575x90)",
              "![Figure](/pyq/ct-end-term-apr-2025-an/q16-opt4-1.webp#575x112)"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q17",
            type: "mcq",
            marks: 5,
            passage: "Let M be an adjacency matrix of a graph G given below, where M[i][j] = 1 if there is an edge from i to j, otherwise 0.\nListV represents the list of vertices of the graph G.\n\n![Figure](/pyq/ct-end-term-apr-2025-an/q17-passage-1.webp#413x458)\n\nAnswer the given subquestions.",
            prompt: "Consider the below pseudocode\n\n![Figure](/pyq/ct-end-term-apr-2025-an/q17-1.webp#483x386)\n\nWhat will the values of p and q be at the end of execution of pseudocode given below?\n\n![Figure](/pyq/ct-end-term-apr-2025-an/q17-2.webp#294x93)",
            options: [
              "p = 0, q = 0",
              "p = 1, q = 0",
              "p = 0, q = 1",
              "p = 1, q = 1"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q18",
            type: "mcq",
            marks: 5,
            passage: "Let M be an adjacency matrix of a graph G given below, where M[i][j] = 1 if there is an edge from i to j, otherwise 0.\nListV represents the list of vertices of the graph G.\n\n![Figure](/pyq/ct-end-term-apr-2025-an/q17-passage-1.webp#413x458)\n\nAnswer the given subquestions.",
            prompt: "Consider the below pseudocode.\n\n![Figure](/pyq/ct-end-term-apr-2025-an/q18-1.webp#481x370)\n\nWhat will be the of value of count at the end of the execution?",
            options: [
              "0",
              "1",
              "2",
              "3"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q19",
            type: "multi",
            marks: 5,
            passage: "The following pseudocode is executed using the “Scores” dataset. Two students form a study pair if their difference in Mathematics marks are at most 10. Assume that Pile P1 is always restored back after calling studyPair(Pile P1).\n\n![Figure](/pyq/ct-end-term-apr-2025-an/q19-passage-1.webp#575x714)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following statements is/are correct after psuedocode is executed?",
            options: [
              "count1 represents number of study pairs",
              "count1 represents total number of students",
              "count2 represents number of study pair where both the students in each pair are from the same city among Chennai, Bengaluru and Vellore",
              "count2 represents number of study pair where both the students in each pair are not from the same city among Chennai, Bengaluru and Vellore"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-apr-2025-an-q20",
            type: "multi",
            marks: 5,
            passage: "The following pseudocode is executed using the “Scores” dataset. Two students form a study pair if their difference in Mathematics marks are at most 10. Assume that Pile P1 is always restored back after calling studyPair(Pile P1).\n\n![Figure](/pyq/ct-end-term-apr-2025-an/q19-passage-1.webp#575x714)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following statements is/are correct after psuedocode is executed ?",
            options: [
              "studyPair(Pile CHN) will give the number of study pairs where both students in the pair are from Chennai.",
              "studyPair(Pile CHN) will give the number of study pairs where both students in the pair are not from Chennai.",
              "count3 represents number of study pairs where both students in the pair are not from the same city among Chennai, Bengaluru and Vellore",
              "count3 represents number of study pairs where both students in the pair are from the same city among Chennai, Bengaluru and Vellore"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "ct-end-term-dec-2024-fn",
    title: "CT End Term · 22 Dec 2024 (FN)",
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
        subjectSlug: "computational-thinking",
        title: "Computational Thinking",
        short: "CT",
        questions: [
          {
            id: "ct-end-term-dec-2024-fn-q1",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q1-1.webp#391x274)",
            options: [
              "6",
              "9",
              "8",
              "1"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q2",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q2-1.webp#534x382)",
            options: [
              "If L1 = [2, 3, 5], L2 = [2, 4, 5], then CompareLists[L1, L2] returns true.",
              "If L1 = [2, 4, 5], L2 = [5, 4, 2], then CompareLists[L1, L2] returns true.",
              "If L1 = [2, 4, 5], L2 = [2, 5, 4], then CompareLists[L1, L2] returns true.",
              "If L1 = [2, 4, 5], L2 = [2, 4, 5], then CompareLists[L1, L2] returns true."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q3",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q3-1.webp#575x546)",
            options: [
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q3-opt1-1.webp#380x70)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q3-opt2-1.webp#381x70)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q3-opt3-1.webp#379x69)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q3-opt4-1.webp#250x73)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q4",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q4-1.webp#575x524)",
            options: [
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q4-opt1-1.webp#337x149)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q4-opt2-1.webp#337x148)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q4-opt3-1.webp#337x155)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q4-opt4-1.webp#336x153)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q5",
            type: "mcq",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q5-1.webp#575x606)",
            options: [
              "Number of students from the cities with the average total marks of the city more than the average total marks of the dataset.",
              "Number of students from the cities with the average total marks of the city less than the average total marks of the dataset.",
              "Number of cities with the average total marks less than the average total marks of the dataset.",
              "Number of cities with the average total marks more than the average total marks of the dataset"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q6",
            type: "multi",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q6-1.webp#523x447)",
            options: [
              "A represent the number of sentences in the \"Words\" dataset",
              "A represent the number of words in the \"Words\" dataset",
              "outList represent list of lists of last and first word of each sentence in that order.",
              "outList represent list of lists of first and last word of each sentence in that order."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q7",
            type: "multi",
            marks: 6,
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q7-1.webp#575x345)",
            options: [
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q7-opt1-1.webp#562x27)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q7-opt2-1.webp#573x27)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q7-opt3-1.webp#575x181)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q7-opt4-1.webp#575x190)"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q8",
            type: "multi",
            marks: 6,
            prompt: "The given pseudocode is executed using the “Words” dataset. At the end of execution A captures the frequency count of the most frequent vowel in the dataset. But the pseudocode may have mistakes. Identify all such mistakes (if any). Assume that all statements not listed in the options below are free of errors. It is a Multiple Select Question (MSQ).\n\n![Figure](/pyq/ct-end-term-dec-2024-fn/q8-1.webp#357x563)",
            options: [
              "Line 1: Incorrect initialization of D",
              "Line 8: Incorrect conditional expression",
              "Line 9: A updated with wrong value",
              "Line 13: Incorrect initialization of i",
              "Line 16: Conditional expression should not use \"not\" operator",
              "Line 22: i updated at wrong place"
            ],
            answer: [
              0,
              3,
              4
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q9",
            type: "multi",
            marks: 5,
            prompt: "Consider the graph given below.\n\n![Figure](/pyq/ct-end-term-dec-2024-fn/q9-1.webp#457x413)\n\nWhich of the following statements is/are true?",
            options: [
              "There are 4 cliques of size three present in the graph.",
              "The nodes 0, 11, 6 and 12 form a clique of size four.",
              "The maximum size of clique that appears in the graph is 3.",
              "The nodes 0 and 5 form a clique of size two."
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q10",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q10-1.webp#545x498)\n\nWhich of the following statements is/are true?",
            options: [
              "C will be true, if there exist more fiction books than non-fiction books.",
              "B represents number of non-fiction books.",
              "A represents number of fiction books.",
              "C will be true, if there exist more fiction books than non-fiction English books"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q11",
            type: "multi",
            marks: 4,
            prompt: "Let D be a non-empty dictionary. Choose the correct option(s). It is a Multiple Select\nQuestion(MSQ).",
            options: [
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q11-opt1-1.webp#400x25)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q11-opt2-1.webp#434x25)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q11-opt3-1.webp#306x23)",
              "![Figure](/pyq/ct-end-term-dec-2024-fn/q11-opt4-1.webp#473x26)"
            ],
            answer: [
              2
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q12",
            type: "multi",
            marks: 4,
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q12-1.webp#575x581)",
            options: [
              "N represents minimum number of bills issued to a single customer.",
              "count represents number of customers.",
              "A represents maximum number of bills issued to a single customer.",
              "If we replace line 16 with N = N + 1, then N represents number of bills issued to a single customer."
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q13",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q13-1.webp#575x347)",
            answer: 15,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q14",
            type: "numerical",
            marks: 5,
            prompt: "The given pseudocode is executed using a dataset having the same fields as the “Words” dataset, and contains the following words:\n\"The experience was simply wonderful. The product quality is fantastic, and I would definitely recommend it to others. It is not only affordable but also has an excellent design. Overall, I believe it is a great choice for anyone looking for a reliable product.\"\nConsider the following information:\n1. unique(L) returns a list of unique elements of list L. For example unique([\"think\", \"like\", \"toppers\", \"think\"]) will return [\"think\", \"like\", \"toppers\"].\n2. comNo(L1, L2) returns the number of common elements in lists L1 and L2.\n3. Ignore the upper and lower case, and punctuation symbols while comparing with other words.\n\n![Figure](/pyq/ct-end-term-dec-2024-fn/q14-1.webp#575x367)\n\nWhat will the value of posSen be at the end of the execution of the above pseudocode?",
            answer: 2,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q15",
            type: "mcq",
            marks: 4,
            passage: "![Figure](/pyq/ct-end-term-dec-2024-fn/q15-passage-1.webp#575x609)",
            prompt: "There is an edge between students i and j, with i != j, if and only if:",
            options: [
              "they are from the same city/town",
              "they have the same gender",
              "they are from the same city/town and have the same gender",
              "they are from the same city/town or have the same gender"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q16",
            type: "multi",
            marks: 5,
            passage: "![Figure](/pyq/ct-end-term-dec-2024-fn/q15-passage-1.webp#575x609)",
            prompt: "Which of the following statements is/are true? It is a Multiple Select Question (MSQ).",
            options: [
              "last(A[01]) represent the gender of the student having sequence number 01.",
              "rest(A[01]) represent the gender of the student having sequence number 01.",
              "In a graph, all students in a given clique are from the same city/town",
              "If B[x][y] =1 and B[y][z] = 1, then B[x][z] = 1."
            ],
            answer: [
              0
            ],
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q17",
            type: "numerical",
            marks: 5,
            passage: "![Figure](/pyq/ct-end-term-dec-2024-fn/q17-passage-1.webp#575x642)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q17-1.webp#315x95)",
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q18",
            type: "numerical",
            marks: 4,
            passage: "![Figure](/pyq/ct-end-term-dec-2024-fn/q17-passage-1.webp#575x642)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q18-1.webp#285x100)",
            answer: 0,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q19",
            type: "mcq",
            marks: 5,
            passage: "![Figure](/pyq/ct-end-term-dec-2024-fn/q19-passage-1.webp#575x387)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Consider the below pseudocode\n\n![Figure](/pyq/ct-end-term-dec-2024-fn/q19-1.webp#471x538)",
            options: [
              "p = 0, q = 0",
              "p = 1, q = 0",
              "p = 0, q = 1",
              "p = 1, q = 1"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "ct-end-term-dec-2024-fn-q20",
            type: "mcq",
            marks: 5,
            passage: "![Figure](/pyq/ct-end-term-dec-2024-fn/q19-passage-1.webp#575x387)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ct-end-term-dec-2024-fn/q20-1.webp#474x439)",
            options: [
              "0",
              "1",
              "2",
              "3"
            ],
            answer: 3,
            explanation: ""
          }
        ]
      }
    ]
  }
];
