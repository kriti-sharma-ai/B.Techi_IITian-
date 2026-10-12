import type { PyqTopicTags } from "../../types";

// 99 past-paper questions in 11 topics, 27 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const aiSearchMethodsForProblemSolvingTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "state-space",
      "title": "State spaces",
      "summary": "Modelling puzzles as state-space graphs: reachable states, neighbours and number of states",
      "ids": [
        "ai-search-quiz-1-oct-2025-an-q1",
        "ai-search-quiz-1-oct-2025-an-q2",
        "ai-search-quiz-1-oct-2025-an-q3"
      ]
    },
    {
      "slug": "blind-and-heuristic-search",
      "title": "DFS, BFS, Best First & Hill Climbing",
      "summary": "Tracing nodes inspected and paths found by DFS, BFS, Best First Search and Hill Climbing",
      "ids": [
        "ai-search-quiz-1-oct-2025-an-q4",
        "ai-search-quiz-1-oct-2025-an-q5",
        "ai-search-quiz-1-oct-2025-an-q6",
        "ai-search-quiz-1-oct-2025-an-q7",
        "ai-search-quiz-1-oct-2025-an-q8",
        "ai-search-quiz-1-oct-2025-an-q9",
        "ai-search-quiz-1-oct-2025-an-q10",
        "ai-search-quiz-1-oct-2025-an-q11"
      ]
    },
    {
      "slug": "tsp-construction-heuristics",
      "title": "TSP construction heuristics",
      "summary": "Building TSP tours with Nearest Neighbour and Savings heuristics and their tour costs",
      "ids": [
        "ai-search-quiz-1-oct-2025-an-q16",
        "ai-search-quiz-1-oct-2025-an-q17",
        "ai-search-quiz-1-oct-2025-an-q18",
        "ai-search-quiz-1-oct-2025-an-q19",
        "ai-search-quiz-1-oct-2025-an-q20"
      ]
    },
    {
      "slug": "genetic-algorithms",
      "title": "Genetic algorithms & tour edits",
      "summary": "Ordinal representation, cycle crossover, single-point crossover and k-edge exchange for TSP",
      "ids": [
        "ai-search-quiz-1-oct-2025-an-q12",
        "ai-search-quiz-1-oct-2025-an-q13",
        "ai-search-quiz-1-oct-2025-an-q14",
        "ai-search-quiz-1-oct-2025-an-q15"
      ]
    },
    {
      "slug": "optimal-search-a-star",
      "title": "Branch & Bound and A* search",
      "summary": "Paths found by Best First, Branch & Bound, A* and wA*, completeness and heuristic admissibility",
      "ids": [
        "ai-search-quiz-2-aug-2025-an-q1",
        "ai-search-quiz-2-aug-2025-an-q2",
        "ai-search-quiz-2-aug-2025-an-q3",
        "ai-search-quiz-2-aug-2025-an-q4",
        "ai-search-quiz-2-aug-2025-an-q5",
        "ai-search-quiz-2-aug-2025-an-q6",
        "ai-search-end-term-aug-2025-an-q1",
        "ai-search-end-term-aug-2025-an-q2",
        "ai-search-end-term-aug-2025-an-q3",
        "ai-search-end-term-aug-2025-an-q4",
        "ai-search-end-term-aug-2025-an-q5",
        "ai-search-end-term-aug-2025-fn-q1",
        "ai-search-end-term-aug-2025-fn-q2",
        "ai-search-end-term-aug-2025-fn-q3",
        "ai-search-end-term-aug-2025-fn-q4",
        "ai-search-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "slug": "tsp-branch-and-bound",
      "title": "TSP Branch & Bound",
      "summary": "Lower bounds, refinement order, excluded-segment costs and reading the optimal tour from a BnB tree",
      "ids": [
        "ai-search-quiz-2-aug-2025-an-q7",
        "ai-search-quiz-2-aug-2025-an-q8",
        "ai-search-quiz-2-aug-2025-an-q9",
        "ai-search-quiz-2-aug-2025-an-q10",
        "ai-search-quiz-2-aug-2025-an-q11",
        "ai-search-end-term-aug-2025-an-q6",
        "ai-search-end-term-aug-2025-an-q7",
        "ai-search-end-term-aug-2025-an-q8",
        "ai-search-end-term-aug-2025-an-q9",
        "ai-search-end-term-aug-2025-an-q10",
        "ai-search-end-term-aug-2025-fn-q6",
        "ai-search-end-term-aug-2025-fn-q7",
        "ai-search-end-term-aug-2025-fn-q8",
        "ai-search-end-term-aug-2025-fn-q9",
        "ai-search-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "slug": "game-playing",
      "title": "Game trees: Minimax, Alpha-Beta, SSS*",
      "summary": "MAX strategies, best strategy leaves, Alpha-Beta cuts and leaves solved by SSS*",
      "ids": [
        "ai-search-quiz-2-aug-2025-an-q12",
        "ai-search-quiz-2-aug-2025-an-q13",
        "ai-search-quiz-2-aug-2025-an-q14",
        "ai-search-quiz-2-aug-2025-an-q15",
        "ai-search-quiz-2-aug-2025-an-q16",
        "ai-search-quiz-2-aug-2025-an-q17",
        "ai-search-quiz-2-aug-2025-an-q18",
        "ai-search-end-term-aug-2025-an-q11",
        "ai-search-end-term-aug-2025-an-q12",
        "ai-search-end-term-aug-2025-an-q13",
        "ai-search-end-term-aug-2025-an-q14",
        "ai-search-end-term-aug-2025-fn-q11",
        "ai-search-end-term-aug-2025-fn-q12",
        "ai-search-end-term-aug-2025-fn-q13",
        "ai-search-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "slug": "and-or-graphs",
      "title": "Problem decomposition & AO*",
      "summary": "Expansion order and start-node values when solving AND-OR graphs with AO*",
      "ids": [
        "ai-search-end-term-aug-2025-an-q15",
        "ai-search-end-term-aug-2025-an-q16",
        "ai-search-end-term-aug-2025-an-q17",
        "ai-search-end-term-aug-2025-fn-q15",
        "ai-search-end-term-aug-2025-fn-q16",
        "ai-search-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "slug": "rule-based-systems",
      "title": "Rule-based expert systems & Rete",
      "summary": "Conflict sets in a Rete net and conflict resolution by specificity and recency",
      "ids": [
        "ai-search-end-term-aug-2025-an-q18",
        "ai-search-end-term-aug-2025-an-q19",
        "ai-search-end-term-aug-2025-an-q20",
        "ai-search-end-term-aug-2025-fn-q18",
        "ai-search-end-term-aug-2025-fn-q19",
        "ai-search-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "slug": "automated-planning",
      "title": "Automated planning",
      "summary": "Applicable and relevant actions, Goal Stack Planning and mutexes in planning graphs (Blocks World)",
      "ids": [
        "ai-search-quiz-2-aug-2025-an-q19",
        "ai-search-quiz-2-aug-2025-an-q20",
        "ai-search-quiz-2-aug-2025-an-q21",
        "ai-search-quiz-2-aug-2025-an-q22",
        "ai-search-quiz-2-aug-2025-an-q23",
        "ai-search-quiz-2-aug-2025-an-q24",
        "ai-search-quiz-2-aug-2025-an-q25",
        "ai-search-end-term-aug-2025-an-q21",
        "ai-search-end-term-aug-2025-an-q22",
        "ai-search-end-term-aug-2025-an-q23",
        "ai-search-end-term-aug-2025-an-q24",
        "ai-search-end-term-aug-2025-fn-q21",
        "ai-search-end-term-aug-2025-fn-q22",
        "ai-search-end-term-aug-2025-fn-q23",
        "ai-search-end-term-aug-2025-fn-q24"
      ]
    },
    {
      "slug": "constraint-satisfaction",
      "title": "Constraint satisfaction",
      "summary": "Arc and path consistency and finding solutions for small map-colouring CSPs",
      "ids": [
        "ai-search-end-term-aug-2025-an-q25",
        "ai-search-end-term-aug-2025-an-q26",
        "ai-search-end-term-aug-2025-an-q27",
        "ai-search-end-term-aug-2025-fn-q25",
        "ai-search-end-term-aug-2025-fn-q26",
        "ai-search-end-term-aug-2025-fn-q27"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Find the path returned by Best First Search",
      "ids": [
        "ai-search-end-term-aug-2025-an-q1",
        "ai-search-end-term-aug-2025-fn-q1",
        "ai-search-quiz-1-oct-2025-an-q9"
      ]
    },
    {
      "title": "Find the path returned by A* on a grid map with Manhattan heuristic",
      "ids": [
        "ai-search-end-term-aug-2025-an-q2",
        "ai-search-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Find the path returned by Branch & Bound on a grid map",
      "ids": [
        "ai-search-end-term-aug-2025-an-q3",
        "ai-search-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Which algorithms find the shortest path on the given map",
      "ids": [
        "ai-search-end-term-aug-2025-an-q4",
        "ai-search-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Decide whether the heuristic is admissible for the given graph",
      "ids": [
        "ai-search-quiz-2-aug-2025-an-q6",
        "ai-search-end-term-aug-2025-an-q5",
        "ai-search-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "TSP BnB tree: list the 2nd-5th nodes refined",
      "ids": [
        "ai-search-end-term-aug-2025-an-q6",
        "ai-search-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "title": "TSP BnB tree: identify the node with the optimal tour",
      "ids": [
        "ai-search-end-term-aug-2025-an-q7",
        "ai-search-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "TSP BnB tree: cost of the optimal tour",
      "ids": [
        "ai-search-end-term-aug-2025-an-q8",
        "ai-search-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "TSP BnB tree: number of cities in the instance",
      "ids": [
        "ai-search-end-term-aug-2025-an-q9",
        "ai-search-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "TSP BnB tree: path representation of the optimal tour",
      "ids": [
        "ai-search-end-term-aug-2025-an-q10",
        "ai-search-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Identify a valid strategy for MAX in a game tree",
      "ids": [
        "ai-search-end-term-aug-2025-an-q11",
        "ai-search-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "List the leaf nodes in MAX's best strategy",
      "ids": [
        "ai-search-quiz-2-aug-2025-an-q12",
        "ai-search-end-term-aug-2025-an-q12",
        "ai-search-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "List leaf nodes inspected or pruned by Alpha-Beta",
      "ids": [
        "ai-search-quiz-2-aug-2025-an-q13",
        "ai-search-end-term-aug-2025-an-q13",
        "ai-search-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "List leaf nodes SOLVED by SSS*",
      "ids": [
        "ai-search-quiz-2-aug-2025-an-q15",
        "ai-search-end-term-aug-2025-an-q14",
        "ai-search-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "AO*: list nodes expanded in order",
      "ids": [
        "ai-search-end-term-aug-2025-an-q15",
        "ai-search-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "AO*: value of start node S after each expansion",
      "ids": [
        "ai-search-end-term-aug-2025-an-q16",
        "ai-search-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "AO*: final value of the start node S",
      "ids": [
        "ai-search-end-term-aug-2025-an-q17",
        "ai-search-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Rete net: which rule-data tuples are in the conflict set",
      "ids": [
        "ai-search-end-term-aug-2025-an-q18",
        "ai-search-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "Rete net: rule that fires first under Specificity",
      "ids": [
        "ai-search-end-term-aug-2025-an-q19",
        "ai-search-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "title": "Rete net: rule that fires first under Recency",
      "ids": [
        "ai-search-end-term-aug-2025-an-q20",
        "ai-search-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Blocks World: select applicable actions in the start state",
      "ids": [
        "ai-search-quiz-2-aug-2025-an-q20",
        "ai-search-end-term-aug-2025-an-q21",
        "ai-search-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Blocks World: select relevant actions for the goal",
      "ids": [
        "ai-search-quiz-2-aug-2025-an-q21",
        "ai-search-end-term-aug-2025-an-q22",
        "ai-search-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "title": "Planning graph: mutex action pairs in layer 1",
      "ids": [
        "ai-search-end-term-aug-2025-an-q23",
        "ai-search-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "title": "Planning graph: mutex proposition pairs in layer 1",
      "ids": [
        "ai-search-end-term-aug-2025-an-q24",
        "ai-search-end-term-aug-2025-fn-q24"
      ]
    },
    {
      "title": "Is the 3-region map-colouring CSP arc consistent?",
      "ids": [
        "ai-search-end-term-aug-2025-an-q25",
        "ai-search-end-term-aug-2025-fn-q25"
      ]
    },
    {
      "title": "Is the 3-region map-colouring CSP path consistent?",
      "ids": [
        "ai-search-end-term-aug-2025-an-q26",
        "ai-search-end-term-aug-2025-fn-q26"
      ]
    },
    {
      "title": "Find a solution of the 3-region map-colouring CSP or NIL",
      "ids": [
        "ai-search-end-term-aug-2025-an-q27",
        "ai-search-end-term-aug-2025-fn-q27"
      ]
    }
  ]
};
