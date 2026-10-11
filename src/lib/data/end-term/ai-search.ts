import type { QualifierMock } from "../../types";

// AI: Search Methods for Problem Solving: IIT Madras BS End Term papers (2 papers, 54 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const aiSearchEndTermPapers: QualifierMock[] = [
  {
    slug: "ai-search-end-term-aug-2025-fn",
    title: "AI Search End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "ai-search-methods-for-problem-solving",
        title: "AI: Search Methods for Problem Solving",
        short: "AI Search",
        questions: [
          {
            id: "ai-search-end-term-aug-2025-fn-q1",
            type: "text",
            marks: 1,
            passage: "SEARCH\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q1-passage-1.webp#575x461)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the path found by the Best First Search algorithm? Enter the path as a comma separated list of node labels.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: S,X,Y,Z",
            answer: [
              "S,E,C,G"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q2",
            type: "text",
            marks: 1,
            passage: "SEARCH\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q1-passage-1.webp#575x461)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ai-search-end-term-aug-2025-fn/q2-1.webp#305x96)\n\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: S,X,Y,Z",
            answer: [
              "S,F,B,A,G"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q3",
            type: "text",
            marks: 1,
            passage: "SEARCH\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q1-passage-1.webp#575x461)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the path found by Branch-and-Bound search algorithm? Enter the path as a comma separated list of node labels.\nUse the Branch-and-Bound variation that avoids cyclic expansions like S,E,S,E,S,E,...\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: S,X,Y,Z",
            answer: [
              "S,F,B,A,G"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 1,
            passage: "SEARCH\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q1-passage-1.webp#575x461)\n\nBased on the above data, answer the given subquestions.",
            prompt: "For the given map, which algorithm finds the shortest path from S to G?",
            options: [
              "![Figure](/pyq/ai-search-end-term-aug-2025-fn/q4-opt1-1.webp#174x24)",
              "![Figure](/pyq/ai-search-end-term-aug-2025-fn/q4-opt2-1.webp#310x23)",
              "![Figure](/pyq/ai-search-end-term-aug-2025-fn/q4-opt3-1.webp#425x25)",
              "![Figure](/pyq/ai-search-end-term-aug-2025-fn/q4-opt4-1.webp#120x20)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 1,
            passage: "SEARCH\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q1-passage-1.webp#575x461)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Select the correct statement(s) about the given graph.",
            options: [
              "Heuristic is admissible.",
              "Heuristic is not admissible.",
              "Heuristic is admissible in some cases and not admissible in other cases.",
              "There is not enough information to determine admissibility."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q6",
            type: "text",
            marks: 1,
            passage: "TSP Branch-and-Bound\nThe TSP Branch-and-Bound algorithm is solving a TSP instance where the cities are A, B, C, .... and so on. The Branch-and-Bound search tree at the time when the algorithm has discovered the optimal tour is shown below.\nEach node in the search tree displays an edge (either XY or ~XY), a cost value, and a unique reference number (a1, b1, b2, ..., c1, ..., d1, ..., e1, e2). Use the reference numbers to break ties. When required, enter the reference numbers in short answers.\nWhat information can you glean from the search tree? Answer the sub-questions based on the information gleaned from the search tree.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q6-passage-1.webp#575x541)",
            prompt: "Let S0 (ref. no. a1) be the first node to be refined, identify the next 4 nodes (2nd to 5th node) that are refined by the TSP Branch-and-Bound algorithm. Enter the nodes (node reference numbers) in the order they are refined.\nEnter a comma separated list of node reference numbers.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: a9,b9,c9,d9",
            answer: [
              "b1,c2,b2,c3"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q7",
            type: "text",
            marks: 1,
            passage: "TSP Branch-and-Bound\nThe TSP Branch-and-Bound algorithm is solving a TSP instance where the cities are A, B, C, .... and so on. The Branch-and-Bound search tree at the time when the algorithm has discovered the optimal tour is shown below.\nEach node in the search tree displays an edge (either XY or ~XY), a cost value, and a unique reference number (a1, b1, b2, ..., c1, ..., d1, ..., e1, e2). Use the reference numbers to break ties. When required, enter the reference numbers in short answers.\nWhat information can you glean from the search tree? Answer the sub-questions based on the information gleaned from the search tree.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q6-passage-1.webp#575x541)",
            prompt: "Which node represents the optimal tour? Enter the node reference number in the text box, or enter NIL if it is not possible to determine the optimal tour.\nEnter a node reference number.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: a9",
            answer: [
              "d3"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q8",
            type: "text",
            marks: 1,
            passage: "TSP Branch-and-Bound\nThe TSP Branch-and-Bound algorithm is solving a TSP instance where the cities are A, B, C, .... and so on. The Branch-and-Bound search tree at the time when the algorithm has discovered the optimal tour is shown below.\nEach node in the search tree displays an edge (either XY or ~XY), a cost value, and a unique reference number (a1, b1, b2, ..., c1, ..., d1, ..., e1, e2). Use the reference numbers to break ties. When required, enter the reference numbers in short answers.\nWhat information can you glean from the search tree? Answer the sub-questions based on the information gleaned from the search tree.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q6-passage-1.webp#575x541)",
            prompt: "What is the cost of the optimal tour? Enter the cost of the optimal tour in the text box, or enter NIL if it is not possible to determine the optimal tour.\nEnter an integer.\nNO SPACES, TABS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: 42",
            answer: [
              "434"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q9",
            type: "text",
            marks: 1,
            passage: "TSP Branch-and-Bound\nThe TSP Branch-and-Bound algorithm is solving a TSP instance where the cities are A, B, C, .... and so on. The Branch-and-Bound search tree at the time when the algorithm has discovered the optimal tour is shown below.\nEach node in the search tree displays an edge (either XY or ~XY), a cost value, and a unique reference number (a1, b1, b2, ..., c1, ..., d1, ..., e1, e2). Use the reference numbers to break ties. When required, enter the reference numbers in short answers.\nWhat information can you glean from the search tree? Answer the sub-questions based on the information gleaned from the search tree.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q6-passage-1.webp#575x541)",
            prompt: "Determine the number of cities in the TSP instance. Enter the number of cities in the text box, or enter NIL if it is not possible to determine the number of cities.\nEnter an integer.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: 42",
            answer: [
              "5"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q10",
            type: "text",
            marks: 1,
            passage: "TSP Branch-and-Bound\nThe TSP Branch-and-Bound algorithm is solving a TSP instance where the cities are A, B, C, .... and so on. The Branch-and-Bound search tree at the time when the algorithm has discovered the optimal tour is shown below.\nEach node in the search tree displays an edge (either XY or ~XY), a cost value, and a unique reference number (a1, b1, b2, ..., c1, ..., d1, ..., e1, e2). Use the reference numbers to break ties. When required, enter the reference numbers in short answers.\nWhat information can you glean from the search tree? Answer the sub-questions based on the information gleaned from the search tree.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q6-passage-1.webp#575x541)",
            prompt: "Start from city A, what is the path representation of the optimal tour? Enter the path\nrepresentation in the text box, or enter NIL if it is not possible to determine the optimal tour. Enter a comma separated list of cities (city labels).\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: A,B,C",
            answer: [
              "A,B,D,E,C",
              "A,C,E,D,B"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q11",
            type: "multi",
            marks: 1,
            passage: "GAMES\nThe figure shows a game tree with evaluation function values at the leaf nodes.\nThe leaf nodes are labeled from A to K.\nUse these labels to enter a leaf node or a list of leaf nodes in short answers (textbox). Tie-breaker:\nWhen several nodes carry the same best cost then select the deepest node, if tie persists then select the leftmost of the deepest nodes to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q11-passage-1.webp#575x402)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following is a strategy for the MAX player?",
            options: [
              "D,E,F,G",
              "H,I,J,K",
              "D,E,F",
              "H,I"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q12",
            type: "text",
            marks: 1,
            passage: "GAMES\nThe figure shows a game tree with evaluation function values at the leaf nodes.\nThe leaf nodes are labeled from A to K.\nUse these labels to enter a leaf node or a list of leaf nodes in short answers (textbox). Tie-breaker:\nWhen several nodes carry the same best cost then select the deepest node, if tie persists then select the leftmost of the deepest nodes to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q11-passage-1.webp#575x402)\n\nBased on the above data, answer the given subquestions.",
            prompt: "List the leaf nodes in the best strategy for MAX. Enter the node labels in alphabetical order. Enter a comma separated list of node labels in alphabetical order.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: X,Y,Z",
            answer: [
              "A,C"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q13",
            type: "text",
            marks: 1,
            passage: "GAMES\nThe figure shows a game tree with evaluation function values at the leaf nodes.\nThe leaf nodes are labeled from A to K.\nUse these labels to enter a leaf node or a list of leaf nodes in short answers (textbox). Tie-breaker:\nWhen several nodes carry the same best cost then select the deepest node, if tie persists then select the leftmost of the deepest nodes to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q11-passage-1.webp#575x402)\n\nBased on the above data, answer the given subquestions.",
            prompt: "List the leaf nodes inspected by Alpha-Beta algorithm.\nEnter a comma separated list of node labels in alphabetical order.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: X,Y,Z",
            answer: [
              "A,B,D,H"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q14",
            type: "text",
            marks: 1,
            passage: "GAMES\nThe figure shows a game tree with evaluation function values at the leaf nodes.\nThe leaf nodes are labeled from A to K.\nUse these labels to enter a leaf node or a list of leaf nodes in short answers (textbox). Tie-breaker:\nWhen several nodes carry the same best cost then select the deepest node, if tie persists then select the leftmost of the deepest nodes to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q11-passage-1.webp#575x402)\n\nBased on the above data, answer the given subquestions.",
            prompt: "List the leaf nodes SOLVED by SSS*.\nEnter a comma separated list of node labels in alphabetical order.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: X,Y,Z",
            answer: [
              "A,B,D,H",
              "A,D,H,B",
              "D,H,A,B"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q15",
            type: "text",
            marks: 1,
            passage: "PROBLEM DECOMPOSITION\nThe figure shows an AND-OR graph that depicts how a problem S can be decomposed into one or more smaller problems. Nodes are uniquely identified by labels (S, A, B, …). The number in each node is the heuristic estimate of the cost of solving that node.\nNodes shown in double lines are primitive nodes and their values are actual costs. Observe that a primitive node is added to the graph by its parent when the parent is expanded, and the primitive node is labeled as SOLVED and it will not be expanded subsequently.\nThe cost of each edge is 10 units.\nTie-breaker 1: If several nodes have the same cost then break the tie using node labels. Tie-breaker 2: For AND nodes, expand the unsolved branch with the highest cost\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q15-passage-1.webp#509x365)",
            prompt: "![Figure](/pyq/ai-search-end-term-aug-2025-fn/q15-1.webp#324x128)\n\nEnter a comma separated list of node labels.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: X,Y,Z",
            answer: [
              "S,C,B",
              "C,B"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q16",
            type: "text",
            marks: 1,
            passage: "PROBLEM DECOMPOSITION\nThe figure shows an AND-OR graph that depicts how a problem S can be decomposed into one or more smaller problems. Nodes are uniquely identified by labels (S, A, B, …). The number in each node is the heuristic estimate of the cost of solving that node.\nNodes shown in double lines are primitive nodes and their values are actual costs. Observe that a primitive node is added to the graph by its parent when the parent is expanded, and the primitive node is labeled as SOLVED and it will not be expanded subsequently.\nThe cost of each edge is 10 units.\nTie-breaker 1: If several nodes have the same cost then break the tie using node labels. Tie-breaker 2: For AND nodes, expand the unsolved branch with the highest cost\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q15-passage-1.webp#509x365)",
            prompt: "Determine the value of the start node S after each node is expanded. Enter the value of S after each node is expanded.\nEnter a comma separated list of numbers.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: 12,42,17",
            answer: [
              "45,50,80",
              "50,80"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q17",
            type: "numerical",
            marks: 1,
            passage: "PROBLEM DECOMPOSITION\nThe figure shows an AND-OR graph that depicts how a problem S can be decomposed into one or more smaller problems. Nodes are uniquely identified by labels (S, A, B, …). The number in each node is the heuristic estimate of the cost of solving that node.\nNodes shown in double lines are primitive nodes and their values are actual costs. Observe that a primitive node is added to the graph by its parent when the parent is expanded, and the primitive node is labeled as SOLVED and it will not be expanded subsequently.\nThe cost of each edge is 10 units.\nTie-breaker 1: If several nodes have the same cost then break the tie using node labels. Tie-breaker 2: For AND nodes, expand the unsolved branch with the highest cost\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q15-passage-1.webp#509x365)",
            prompt: "What is the final value of the start node S computed by AO*?\nEnter a number.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: 17",
            answer: 80,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q18",
            type: "multi",
            marks: 1,
            passage: "RULE BASED EXPERT SYSTEMS\nA Rete Net for a rule based system to identify engines, turbines and motors is shown in the figure. BoM refers to Bill-of-Materials, which is a list of parts and their quantities needed for assembling a machine.\nThe nodes in the network are uniquely identified by labels: A1,A2,... for Alpha nodes; B1,B2,... for beta nodes; R1,R2,... for rules.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q18-passage-1.webp#575x542)\n\nThe Working Memory contains the following WMEs uniquely identified by timestamps (sequence numbers). Assume that WMEs reside in the appropriate Alpha node, and Beta nodes simply point to elements in the ancestor Alpha nodes.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q18-passage-2.webp#412x178)\n\nThe sub-questions are based on the first Match-Resolve-Execute cycle. Determine the locations of the WMEs and compute the conflict set, then answer the sub-questions.",
            prompt: "Which of the following rule-data tuples occur in the conflict set?",
            options: [
              "(Diesel-Engine, 101, 107)",
              "(Petrol-Engine, 107, 102)",
              "(Engine, 107)",
              "(Single-Phase-Motor, 105, 104)",
              "(Motor, 104)",
              "(Motor, 106)"
            ],
            answer: [
              2,
              3,
              4,
              5
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q19",
            type: "mcq",
            marks: 1,
            passage: "RULE BASED EXPERT SYSTEMS\nA Rete Net for a rule based system to identify engines, turbines and motors is shown in the figure. BoM refers to Bill-of-Materials, which is a list of parts and their quantities needed for assembling a machine.\nThe nodes in the network are uniquely identified by labels: A1,A2,... for Alpha nodes; B1,B2,... for beta nodes; R1,R2,... for rules.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q18-passage-1.webp#575x542)\n\nThe Working Memory contains the following WMEs uniquely identified by timestamps (sequence numbers). Assume that WMEs reside in the appropriate Alpha node, and Beta nodes simply point to elements in the ancestor Alpha nodes.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q18-passage-2.webp#412x178)\n\nThe sub-questions are based on the first Match-Resolve-Execute cycle. Determine the locations of the WMEs and compute the conflict set, then answer the sub-questions.",
            prompt: "If the Inference Engine uses Specificity for conflict resolution then which rule-data tuple will fire in the first round?",
            options: [
              "(Diesel-Engine, 101, 107)",
              "(Petrol-Engine, 107, 102)",
              "(Engine, 107)",
              "(Single-Phase-Motor, 105, 104)",
              "(Motor, 104)",
              "(Motor, 106)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q20",
            type: "mcq",
            marks: 1,
            passage: "RULE BASED EXPERT SYSTEMS\nA Rete Net for a rule based system to identify engines, turbines and motors is shown in the figure. BoM refers to Bill-of-Materials, which is a list of parts and their quantities needed for assembling a machine.\nThe nodes in the network are uniquely identified by labels: A1,A2,... for Alpha nodes; B1,B2,... for beta nodes; R1,R2,... for rules.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q18-passage-1.webp#575x542)\n\nThe Working Memory contains the following WMEs uniquely identified by timestamps (sequence numbers). Assume that WMEs reside in the appropriate Alpha node, and Beta nodes simply point to elements in the ancestor Alpha nodes.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q18-passage-2.webp#412x178)\n\nThe sub-questions are based on the first Match-Resolve-Execute cycle. Determine the locations of the WMEs and compute the conflict set, then answer the sub-questions.",
            prompt: "If the Inference Engine uses Recency for conflict resolution which rule-data tuple will fire in the first round?",
            options: [
              "(Diesel-Engine, 101, 107)",
              "(Petrol-Engine, 107, 102)",
              "(Engine, 107)",
              "(Single-Phase-Motor, 105, 104)",
              "(Motor, 104)",
              "(Motor, 106)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q21",
            type: "multi",
            marks: 1,
            passage: "AUTOMATED PLANNING\nThe domain description of a Blocks World with a single one-armed robot is given below.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q21-passage-1.webp#575x714)\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q21-passage-2.webp#575x340)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following are applicable actions in the start state?",
            options: [
              "Putdown(D)",
              "Unstack(D, B)",
              "Unstack(C, A)",
              "Pickup(E)",
              "Pickup(A)",
              "Stack(B, A)",
              "Stack(A, C)"
            ],
            answer: [
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q22",
            type: "multi",
            marks: 1,
            passage: "AUTOMATED PLANNING\nThe domain description of a Blocks World with a single one-armed robot is given below.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q21-passage-1.webp#575x714)\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q21-passage-2.webp#575x340)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following are relevant actions in the goal state?",
            options: [
              "Putdown(D)",
              "Unstack(D, B)",
              "Unstack(C, A)",
              "Pickup(E)",
              "Pickup(A)",
              "Stack(B, A)",
              "Stack(A , C)"
            ],
            answer: [
              5,
              6
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q23",
            type: "multi",
            marks: 1,
            passage: "AUTOMATED PLANNING\nThe domain description of a Blocks World with a single one-armed robot is given below.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q21-passage-1.webp#575x714)\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q21-passage-2.webp#575x340)\n\nBased on the above data, answer the given subquestions.",
            prompt: "In the planning graph, which of the following are mutex action pairs in Layer 1?",
            options: [
              "Unstack(D, B), Pickup(E)",
              "Unstack(D, B), Unstack(C, A)",
              "Pickup(E), Stack(B, A)",
              "Pickup(E), Stack(A, C)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q24",
            type: "multi",
            marks: 1,
            passage: "AUTOMATED PLANNING\nThe domain description of a Blocks World with a single one-armed robot is given below.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q21-passage-1.webp#575x714)\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q21-passage-2.webp#575x340)\n\nBased on the above data, answer the given subquestions.",
            prompt: "In the planning graph, which of the following are mutex proposition pairs in Layer 1?",
            options: [
              "clear(B), holding(C)",
              "clear(B), clear(A)",
              "clear(E), on(D, B)",
              "clear(E), holding(D)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q25",
            type: "mcq",
            marks: 1,
            passage: "CONSTRAINT SATISFACTION\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q25-passage-1.webp#575x272)",
            prompt: "Is the given CSP arc consistent?",
            options: [
              "Yes",
              "No",
              "Cannot be determined"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q26",
            type: "mcq",
            marks: 1,
            passage: "CONSTRAINT SATISFACTION\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q25-passage-1.webp#575x272)",
            prompt: "Is the given CSP path consistent?",
            options: [
              "No",
              "Yes",
              "Cannot be determined"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-fn-q27",
            type: "text",
            marks: 1,
            passage: "CONSTRAINT SATISFACTION\n\n![Figure](/pyq/ai-search-end-term-aug-2025-fn/q25-passage-1.webp#575x272)",
            prompt: "Does the given CSP have a solution? Enter the solution for regions A,B,C as a comma separated list of colours. Enter NIL if there is no solution.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: r,b,r",
            answer: [
              "g,r,b",
              "g,b,r"
            ],
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "ai-search-end-term-aug-2025-an",
    title: "AI Search End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "ai-search-methods-for-problem-solving",
        title: "AI: Search Methods for Problem Solving",
        short: "AI Search",
        questions: [
          {
            id: "ai-search-end-term-aug-2025-an-q1",
            type: "text",
            marks: 1,
            passage: "SEARCH\nThe figure shows a map on a uniform grid where each tile is 1x1 in size.\nThe start node is S and the goal node is G.\nThe MoveGen function returns nodes in alphabetical order.\nUse Manhattan Distance as the heuristic function.\nTie-breaker: If several nodes have the same cost, use node labels to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q1-passage-1.webp#379x305)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the path found by the Best First Search algorithm? Enter the path as a comma separated list of node labels.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: S,X,Y,Z",
            answer: [
              "S,C,F,G"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q2",
            type: "text",
            marks: 1,
            passage: "SEARCH\nThe figure shows a map on a uniform grid where each tile is 1x1 in size.\nThe start node is S and the goal node is G.\nThe MoveGen function returns nodes in alphabetical order.\nUse Manhattan Distance as the heuristic function.\nTie-breaker: If several nodes have the same cost, use node labels to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q1-passage-1.webp#379x305)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the path found by A* search algorithm? Enter the path as a comma separated list of node labels.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: S,X,Y,Z",
            answer: [
              "S,B,A,E,G"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q3",
            type: "text",
            marks: 1,
            passage: "SEARCH\nThe figure shows a map on a uniform grid where each tile is 1x1 in size.\nThe start node is S and the goal node is G.\nThe MoveGen function returns nodes in alphabetical order.\nUse Manhattan Distance as the heuristic function.\nTie-breaker: If several nodes have the same cost, use node labels to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q1-passage-1.webp#379x305)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What is the path found by Branch-and-Bound search algorithm? Enter the path as a comma separated list of node labels.\nUse the Branch-and-Bound variation that avoids cyclic expansions like S,B,S,B,S,B,...\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: S,X,Y,Z",
            answer: [
              "S,B,A,E,G"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 1,
            passage: "SEARCH\nThe figure shows a map on a uniform grid where each tile is 1x1 in size.\nThe start node is S and the goal node is G.\nThe MoveGen function returns nodes in alphabetical order.\nUse Manhattan Distance as the heuristic function.\nTie-breaker: If several nodes have the same cost, use node labels to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q1-passage-1.webp#379x305)\n\nBased on the above data, answer the given subquestions.",
            prompt: "For the given map, which algorithm finds the shortest path from S to G?",
            options: [
              "![Figure](/pyq/ai-search-end-term-aug-2025-an/q4-opt1-1.webp#162x29)",
              "![Figure](/pyq/ai-search-end-term-aug-2025-an/q4-opt2-1.webp#291x23)",
              "![Figure](/pyq/ai-search-end-term-aug-2025-an/q4-opt3-1.webp#390x24)",
              "![Figure](/pyq/ai-search-end-term-aug-2025-an/q4-opt4-1.webp#126x21)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 1,
            passage: "SEARCH\nThe figure shows a map on a uniform grid where each tile is 1x1 in size.\nThe start node is S and the goal node is G.\nThe MoveGen function returns nodes in alphabetical order.\nUse Manhattan Distance as the heuristic function.\nTie-breaker: If several nodes have the same cost, use node labels to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q1-passage-1.webp#379x305)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Select the correct statement(s) about the given graph.",
            options: [
              "Heuristic is admissible.",
              "Heuristic is not admissible.",
              "Heuristic is admissible in some cases and not admissible in other cases.",
              "There is not enough information to determine admissibility."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q6",
            type: "text",
            marks: 1,
            passage: "TSP BnB\nTSP BnB algorithm is solving a TSP instance where the cities are A, B, C, .... and so on. The BnB search tree (at the point when the algorithm discovers the optimal tour) is provided below. Each node in the search tree displays an edge (either XY or ¬XY), a cost value, and a unique reference number (a1, b1, ..., c1, ..., d1, ..., e1, e2). Use the reference numbers to break ties. When required, use reference numbers in short answers.\nWhat information can you glean from the search tree? Answer the sub-questions based on the information gleaned from the search tree.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q6-passage-1.webp#463x452)",
            prompt: "Let S0 (ref. no. a1) be the first node to be refined, identify the next 4 nodes (2nd to 5th node) that are refined by the TSP BnB algorithm. Enter the nodes (node reference numbers) in the order they are refined.\nEnter a comma separated list of node reference numbers.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: a9,b9,c9,d9",
            answer: [
              "b1,c1,d2,b2"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q7",
            type: "text",
            marks: 1,
            passage: "TSP BnB\nTSP BnB algorithm is solving a TSP instance where the cities are A, B, C, .... and so on. The BnB search tree (at the point when the algorithm discovers the optimal tour) is provided below. Each node in the search tree displays an edge (either XY or ¬XY), a cost value, and a unique reference number (a1, b1, ..., c1, ..., d1, ..., e1, e2). Use the reference numbers to break ties. When required, use reference numbers in short answers.\nWhat information can you glean from the search tree? Answer the sub-questions based on the information gleaned from the search tree.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q6-passage-1.webp#463x452)",
            prompt: "Which node represents the optimal tour? Enter the node reference number in the text box, or enter NIL if it is not possible to determine the optimal tour.\nEnter a node reference number.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: a9",
            answer: [
              "d5"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q8",
            type: "text",
            marks: 1,
            passage: "TSP BnB\nTSP BnB algorithm is solving a TSP instance where the cities are A, B, C, .... and so on. The BnB search tree (at the point when the algorithm discovers the optimal tour) is provided below. Each node in the search tree displays an edge (either XY or ¬XY), a cost value, and a unique reference number (a1, b1, ..., c1, ..., d1, ..., e1, e2). Use the reference numbers to break ties. When required, use reference numbers in short answers.\nWhat information can you glean from the search tree? Answer the sub-questions based on the information gleaned from the search tree.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q6-passage-1.webp#463x452)",
            prompt: "What is the cost of the optimal tour? Enter the cost of the optimal tour in the text box, or enter NIL if it is not possible to determine the optimal tour.\nEnter an integer.\nNO SPACES, TABS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: 42",
            answer: [
              "366"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q9",
            type: "text",
            marks: 1,
            passage: "TSP BnB\nTSP BnB algorithm is solving a TSP instance where the cities are A, B, C, .... and so on. The BnB search tree (at the point when the algorithm discovers the optimal tour) is provided below. Each node in the search tree displays an edge (either XY or ¬XY), a cost value, and a unique reference number (a1, b1, ..., c1, ..., d1, ..., e1, e2). Use the reference numbers to break ties. When required, use reference numbers in short answers.\nWhat information can you glean from the search tree? Answer the sub-questions based on the information gleaned from the search tree.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q6-passage-1.webp#463x452)",
            prompt: "Determine the number of cities in the TSP instance. Enter the number of cities in the text box, or enter NIL if it is not possible to determine the number of cities.\nEnter an integer.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: 42",
            answer: [
              "5"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q10",
            type: "text",
            marks: 1,
            passage: "TSP BnB\nTSP BnB algorithm is solving a TSP instance where the cities are A, B, C, .... and so on. The BnB search tree (at the point when the algorithm discovers the optimal tour) is provided below. Each node in the search tree displays an edge (either XY or ¬XY), a cost value, and a unique reference number (a1, b1, ..., c1, ..., d1, ..., e1, e2). Use the reference numbers to break ties. When required, use reference numbers in short answers.\nWhat information can you glean from the search tree? Answer the sub-questions based on the information gleaned from the search tree.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q6-passage-1.webp#463x452)",
            prompt: "Start from city A, what is the path representation of the optimal tour? Enter the path\nrepresentation in the text box, or enter NIL if it is not possible to determine the optimal tour. Enter a comma separated list of cities (city labels).\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: A,B,C",
            answer: [
              "A,B,D,C,E",
              "A,E,C,D,B"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q11",
            type: "multi",
            marks: 1,
            passage: "GAMES\nThe figure shows a game tree with evaluation function values at the leaf nodes.\nThe leaf nodes are labeled from A to K.\nUse these labels to enter a leaf node or a list of leaf nodes in short answers (textbox). Tie-breaker:\nWhen several nodes carry the same best cost then select the deepest node,\nif tie persists then select the leftmost of the deepest nodes to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q11-passage-1.webp#575x384)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following is a strategy for the MAX player?",
            options: [
              "I,K",
              "E,F,G",
              "E,F",
              "I,J,K"
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q12",
            type: "text",
            marks: 1,
            passage: "GAMES\nThe figure shows a game tree with evaluation function values at the leaf nodes.\nThe leaf nodes are labeled from A to K.\nUse these labels to enter a leaf node or a list of leaf nodes in short answers (textbox). Tie-breaker:\nWhen several nodes carry the same best cost then select the deepest node,\nif tie persists then select the leftmost of the deepest nodes to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q11-passage-1.webp#575x384)\n\nBased on the above data, answer the given subquestions.",
            prompt: "List the leaf nodes in the best strategy for MAX. Enter the node labels in alphabetical order. Enter a comma separated list of node labels in alphabetical order.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: X,Y,Z",
            answer: [
              "A,C,D"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q13",
            type: "text",
            marks: 1,
            passage: "GAMES\nThe figure shows a game tree with evaluation function values at the leaf nodes.\nThe leaf nodes are labeled from A to K.\nUse these labels to enter a leaf node or a list of leaf nodes in short answers (textbox). Tie-breaker:\nWhen several nodes carry the same best cost then select the deepest node,\nif tie persists then select the leftmost of the deepest nodes to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q11-passage-1.webp#575x384)\n\nBased on the above data, answer the given subquestions.",
            prompt: "List the leaf nodes inspected by Alpha-Beta algorithm.\nEnter a comma separated list of node labels in alphabetical order.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: X,Y,Z",
            answer: [
              "A,B,E,I"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q14",
            type: "text",
            marks: 1,
            passage: "GAMES\nThe figure shows a game tree with evaluation function values at the leaf nodes.\nThe leaf nodes are labeled from A to K.\nUse these labels to enter a leaf node or a list of leaf nodes in short answers (textbox). Tie-breaker:\nWhen several nodes carry the same best cost then select the deepest node,\nif tie persists then select the leftmost of the deepest nodes to break the tie.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q11-passage-1.webp#575x384)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/ai-search-end-term-aug-2025-an/q14-1.webp#327x188)",
            answer: [
              "A,B,E,I",
              "A,E,I,B",
              "I,E,A,B"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q15",
            type: "text",
            marks: 1,
            passage: "PROBLEM DECOMPOSITION\nThe figure shows an AND-OR graph that depicts how a problem S can be decomposed into one or more smaller problems. Nodes are uniquely identified by labels (S, A, B, …). The number in each node is the heuristic estimate of the cost of solving that node.\nNodes shown in double lines are primitive nodes and their values are actual costs. Observe that a primitive node is added to the graph by its parent when the parent is expanded, and the primitive node is labeled as SOLVED and it will not be expanded subsequently.\nThe cost of each edge is 2 units.\nTie-breaker 1: If several nodes have the same cost then break the tie using node labels. Tie-breaker 2: For AND nodes, expand the unsolved branch with the highest cost.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q15-passage-1.webp#351x343)\n\nUse AO* algorithm to solve S, then answer the subquestions.",
            prompt: "![Figure](/pyq/ai-search-end-term-aug-2025-an/q15-1.webp#346x216)",
            answer: [
              "S,B,A",
              "B,A"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q16",
            type: "text",
            marks: 1,
            passage: "PROBLEM DECOMPOSITION\nThe figure shows an AND-OR graph that depicts how a problem S can be decomposed into one or more smaller problems. Nodes are uniquely identified by labels (S, A, B, …). The number in each node is the heuristic estimate of the cost of solving that node.\nNodes shown in double lines are primitive nodes and their values are actual costs. Observe that a primitive node is added to the graph by its parent when the parent is expanded, and the primitive node is labeled as SOLVED and it will not be expanded subsequently.\nThe cost of each edge is 2 units.\nTie-breaker 1: If several nodes have the same cost then break the tie using node labels. Tie-breaker 2: For AND nodes, expand the unsolved branch with the highest cost.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q15-passage-1.webp#351x343)\n\nUse AO* algorithm to solve S, then answer the subquestions.",
            prompt: "Determine the value of the start node S after each node is expanded. Enter the value of S after each node is expanded.\nEnter a comma separated list of numbers.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: 12,42,17",
            answer: [
              "34,37,56",
              "37,56"
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q17",
            type: "numerical",
            marks: 1,
            passage: "PROBLEM DECOMPOSITION\nThe figure shows an AND-OR graph that depicts how a problem S can be decomposed into one or more smaller problems. Nodes are uniquely identified by labels (S, A, B, …). The number in each node is the heuristic estimate of the cost of solving that node.\nNodes shown in double lines are primitive nodes and their values are actual costs. Observe that a primitive node is added to the graph by its parent when the parent is expanded, and the primitive node is labeled as SOLVED and it will not be expanded subsequently.\nThe cost of each edge is 2 units.\nTie-breaker 1: If several nodes have the same cost then break the tie using node labels. Tie-breaker 2: For AND nodes, expand the unsolved branch with the highest cost.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q15-passage-1.webp#351x343)\n\nUse AO* algorithm to solve S, then answer the subquestions.",
            prompt: "![Figure](/pyq/ai-search-end-term-aug-2025-an/q17-1.webp#324x158)",
            answer: 56,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q18",
            type: "multi",
            marks: 1,
            passage: "RULE BASED EXPERT SYSTEMS\nA Rete Net for a rule based system to identify engines, turbines and motors is shown in the figure. Here, BoM refers to Bill-of-Materials, which is a list of parts and their quantities needed for assembling a machine.\nThe nodes in the network are uniquely identified by labels: A1,A2,... for Alpha nodes; B1,B2,... for beta nodes; R1,R2,... for rules.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q18-passage-1.webp#575x549)\n\nThe Working Memory contains the following WMEs uniquely identified by timestamps (sequence numbers). Assume that WMEs reside in the appropriate Alpha node, and Beta nodes simply point to elements in the ancestor Alpha nodes.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q18-passage-2.webp#430x194)\n\nThe sub-questions are based on the first Match-Resolve-Execute cycle. Determine the locations of the WMEs and compute the conflict set, then answer the given sub-questions.",
            prompt: "Which of the following rule-data tuples occur in the conflict set?",
            options: [
              "(Liquid-Fuel-Rocket, 102, 107)",
              "(Solid-Fuel-Rocket, 107, 101)",
              "(Windmill, 105, 104)",
              "(Generator, 104)",
              "(Generator, 106)",
              "(Rocket, 107)"
            ],
            answer: [
              2,
              3,
              4,
              5
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q19",
            type: "mcq",
            marks: 1,
            passage: "RULE BASED EXPERT SYSTEMS\nA Rete Net for a rule based system to identify engines, turbines and motors is shown in the figure. Here, BoM refers to Bill-of-Materials, which is a list of parts and their quantities needed for assembling a machine.\nThe nodes in the network are uniquely identified by labels: A1,A2,... for Alpha nodes; B1,B2,... for beta nodes; R1,R2,... for rules.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q18-passage-1.webp#575x549)\n\nThe Working Memory contains the following WMEs uniquely identified by timestamps (sequence numbers). Assume that WMEs reside in the appropriate Alpha node, and Beta nodes simply point to elements in the ancestor Alpha nodes.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q18-passage-2.webp#430x194)\n\nThe sub-questions are based on the first Match-Resolve-Execute cycle. Determine the locations of the WMEs and compute the conflict set, then answer the given sub-questions.",
            prompt: "If the Inference Engine uses Specificity for conflict resolution then which rule-data tuple will fire in the first round?",
            options: [
              "(Liquid-Fuel-Rocket, 102, 107)",
              "(Solid-Fuel-Rocket, 107, 101)",
              "(Windmill, 105, 104)",
              "(Generator, 104)",
              "(Generator, 106)",
              "(Rocket, 107)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q20",
            type: "mcq",
            marks: 1,
            passage: "RULE BASED EXPERT SYSTEMS\nA Rete Net for a rule based system to identify engines, turbines and motors is shown in the figure. Here, BoM refers to Bill-of-Materials, which is a list of parts and their quantities needed for assembling a machine.\nThe nodes in the network are uniquely identified by labels: A1,A2,... for Alpha nodes; B1,B2,... for beta nodes; R1,R2,... for rules.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q18-passage-1.webp#575x549)\n\nThe Working Memory contains the following WMEs uniquely identified by timestamps (sequence numbers). Assume that WMEs reside in the appropriate Alpha node, and Beta nodes simply point to elements in the ancestor Alpha nodes.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q18-passage-2.webp#430x194)\n\nThe sub-questions are based on the first Match-Resolve-Execute cycle. Determine the locations of the WMEs and compute the conflict set, then answer the given sub-questions.",
            prompt: "If the Inference Engine uses Recency for conflict resolution which rule-data tuple will fire in the first round?",
            options: [
              "(Liquid-Fuel-Rocket, 102, 107)",
              "(Solid-Fuel-Rocket, 107, 101)",
              "(Windmill, 105, 104)",
              "(Generator, 104)",
              "(Generator, 106)",
              "(Rocket, 107)"
            ],
            answer: 5,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q21",
            type: "multi",
            marks: 1,
            passage: "AUTOMATED PLANNING\nThe domain description of a Blocks World with a single one-armed robot is given below.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q21-passage-1.webp#575x730)\n\nConsider the following planning problem.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q21-passage-2.webp#531x284)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following are applicable actions in the start state?",
            options: [
              "Putdown(D)",
              "Unstack(D,A)",
              "Unstack(E,B)",
              "Pickup(C)",
              "Pickup(A)",
              "Stack(A,B)",
              "Stack(B,C)"
            ],
            answer: [
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q22",
            type: "multi",
            marks: 1,
            passage: "AUTOMATED PLANNING\nThe domain description of a Blocks World with a single one-armed robot is given below.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q21-passage-1.webp#575x730)\n\nConsider the following planning problem.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q21-passage-2.webp#531x284)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following are relevant actions in the goal state?",
            options: [
              "Putdown(D)",
              "Unstack(D,A)",
              "Unstack(E,B)",
              "Pickup(C)",
              "Pickup(A)",
              "Stack(A,B)",
              "Stack(B,C)"
            ],
            answer: [
              5,
              6
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q23",
            type: "multi",
            marks: 1,
            passage: "AUTOMATED PLANNING\nThe domain description of a Blocks World with a single one-armed robot is given below.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q21-passage-1.webp#575x730)\n\nConsider the following planning problem.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q21-passage-2.webp#531x284)\n\nBased on the above data, answer the given subquestions.",
            prompt: "In the planning graph, which of the following are mutex action pairs in Layer 1?",
            options: [
              "Unstack(D,A), Pickup(C)",
              "Unstack(D,A), Unstack(E,B)",
              "Pickup(C), Stack(A,B)",
              "Pickup(C), Stack(B,C)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q24",
            type: "multi",
            marks: 1,
            passage: "AUTOMATED PLANNING\nThe domain description of a Blocks World with a single one-armed robot is given below.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q21-passage-1.webp#575x730)\n\nConsider the following planning problem.\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q21-passage-2.webp#531x284)\n\nBased on the above data, answer the given subquestions.",
            prompt: "In the planning graph, which of the following are mutex proposition pairs in Layer 1?",
            options: [
              "clear(A), holding(E)",
              "clear(A), clear(B)",
              "clear(C), on(D,A)",
              "clear(C), holding(E)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q25",
            type: "mcq",
            marks: 1,
            passage: "CONSTRAINT SATISFACTION\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q25-passage-1.webp#575x286)",
            prompt: "Is the given CSP arc consistent?",
            options: [
              "Yes",
              "No",
              "Cannot be determined"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q26",
            type: "mcq",
            marks: 1,
            passage: "CONSTRAINT SATISFACTION\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q25-passage-1.webp#575x286)",
            prompt: "Is the given CSP path consistent?",
            options: [
              "No",
              "Yes",
              "Cannot be determined"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "ai-search-end-term-aug-2025-an-q27",
            type: "text",
            marks: 1,
            passage: "CONSTRAINT SATISFACTION\n\n![Figure](/pyq/ai-search-end-term-aug-2025-an/q25-passage-1.webp#575x286)",
            prompt: "Does the given CSP have a solution? Enter the solution for regions A,B,C as a comma separated list of colours. Enter NIL if there is no solution.\nNO SPACES, TABS, DOTS, BRACKETS OR EXTRANEOUS CHARACTERS.\nAnswer format: r,b,r",
            answer: [
              "g,r,b",
              "g,b,r"
            ],
            explanation: ""
          }
        ]
      }
    ]
  }
];
