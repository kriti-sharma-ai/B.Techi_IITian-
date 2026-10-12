import type { PyqTopicTags } from "../../types";

// 158 past-paper questions in 14 topics, 36 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const programmingDataStructuresAndAlgorithmsTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "complexity-and-recurrences",
      "title": "Complexity, growth & recurrences",
      "summary": "Big-O of loops and recursive code, ordering growth functions, solving recurrences",
      "ids": [
        "pdsa-end-term-dec-2024-an-q2",
        "pdsa-end-term-dec-2024-an-q14",
        "pdsa-end-term-dec-2024-fn-q2",
        "pdsa-end-term-dec-2024-fn-q11",
        "pdsa-end-term-apr-2025-an-q1",
        "pdsa-end-term-apr-2025-an-q10",
        "pdsa-end-term-apr-2025-an-q18",
        "pdsa-quiz-2-aug-2025-an-q9",
        "pdsa-end-term-aug-2025-an-q1",
        "pdsa-end-term-aug-2025-an-q15",
        "pdsa-end-term-aug-2025-fn-q1",
        "pdsa-end-term-aug-2025-fn-q16",
        "pdsa-quiz-1-oct-2025-an-q1",
        "pdsa-quiz-1-oct-2025-an-q2"
      ]
    },
    {
      "slug": "searching-and-sorting",
      "title": "Searching & sorting",
      "summary": "Binary search traces, quicksort partition pivots, insertion/selection/merge sort behaviour and cost",
      "ids": [
        "pdsa-end-term-dec-2024-an-q3",
        "pdsa-end-term-dec-2024-an-q4",
        "pdsa-end-term-dec-2024-fn-q3",
        "pdsa-end-term-dec-2024-fn-q18",
        "pdsa-end-term-apr-2025-an-q2",
        "pdsa-end-term-apr-2025-an-q3",
        "pdsa-end-term-aug-2025-an-q2",
        "pdsa-end-term-aug-2025-an-q16",
        "pdsa-end-term-aug-2025-fn-q15",
        "pdsa-end-term-aug-2025-fn-q17",
        "pdsa-quiz-1-oct-2025-an-q3",
        "pdsa-quiz-1-oct-2025-an-q4",
        "pdsa-quiz-1-oct-2025-an-q5",
        "pdsa-quiz-1-oct-2025-an-q6"
      ]
    },
    {
      "slug": "recursion-lists-stacks-queues",
      "title": "Recursion, linked lists, stacks & queues",
      "summary": "Trace recursive code, linked list operations, stack and queue functions, picking a data structure",
      "ids": [
        "pdsa-end-term-dec-2024-an-q1",
        "pdsa-end-term-dec-2024-an-q6",
        "pdsa-end-term-dec-2024-fn-q1",
        "pdsa-end-term-dec-2024-fn-q5",
        "pdsa-end-term-apr-2025-an-q14",
        "pdsa-end-term-aug-2025-an-q3",
        "pdsa-end-term-aug-2025-fn-q2",
        "pdsa-quiz-1-oct-2025-an-q7",
        "pdsa-quiz-1-oct-2025-an-q8",
        "pdsa-quiz-1-oct-2025-an-q9",
        "pdsa-quiz-1-oct-2025-an-q12",
        "pdsa-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "slug": "hashing",
      "title": "Hashing & linear probing",
      "summary": "Insert keys with linear probing, find slots, probabilities and possible insertion orders",
      "ids": [
        "pdsa-end-term-dec-2024-an-q5",
        "pdsa-end-term-dec-2024-fn-q4",
        "pdsa-end-term-apr-2025-an-q15",
        "pdsa-end-term-aug-2025-an-q17",
        "pdsa-end-term-aug-2025-fn-q3",
        "pdsa-quiz-1-oct-2025-an-q14"
      ]
    },
    {
      "slug": "graphs-bfs-dfs",
      "title": "Graphs, BFS, DFS & topological sort",
      "summary": "Edge/vertex counts, BFS levels and distances, DFS edge types, components and topological orders",
      "ids": [
        "pdsa-end-term-dec-2024-an-q7",
        "pdsa-end-term-dec-2024-an-q19",
        "pdsa-end-term-dec-2024-fn-q16",
        "pdsa-end-term-dec-2024-fn-q19",
        "pdsa-end-term-apr-2025-an-q4",
        "pdsa-end-term-apr-2025-an-q5",
        "pdsa-end-term-apr-2025-an-q16",
        "pdsa-end-term-aug-2025-an-q4",
        "pdsa-end-term-aug-2025-an-q18",
        "pdsa-end-term-aug-2025-an-q21",
        "pdsa-end-term-aug-2025-fn-q4",
        "pdsa-end-term-aug-2025-fn-q5",
        "pdsa-end-term-aug-2025-fn-q20",
        "pdsa-quiz-1-oct-2025-an-q10",
        "pdsa-quiz-1-oct-2025-an-q11",
        "pdsa-quiz-1-oct-2025-an-q15",
        "pdsa-quiz-1-oct-2025-an-q16",
        "pdsa-quiz-1-oct-2025-an-q17"
      ]
    },
    {
      "slug": "shortest-paths",
      "title": "Shortest paths: Dijkstra & Bellman-Ford",
      "summary": "Run Dijkstra or Bellman-Ford on a graph, visit order, distances, complexity and properties",
      "ids": [
        "pdsa-end-term-dec-2024-an-q8",
        "pdsa-end-term-dec-2024-fn-q6",
        "pdsa-end-term-apr-2025-an-q20",
        "pdsa-quiz-2-aug-2025-an-q1",
        "pdsa-quiz-2-aug-2025-an-q11",
        "pdsa-end-term-aug-2025-an-q5",
        "pdsa-end-term-aug-2025-an-q6",
        "pdsa-end-term-aug-2025-an-q14",
        "pdsa-end-term-aug-2025-fn-q6",
        "pdsa-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "slug": "minimum-spanning-trees",
      "title": "Minimum spanning trees",
      "summary": "MST weight and count, Prim and Kruskal behaviour, cut and cycle properties, spanning tree count",
      "ids": [
        "pdsa-end-term-dec-2024-an-q9",
        "pdsa-end-term-dec-2024-fn-q7",
        "pdsa-end-term-apr-2025-an-q12",
        "pdsa-end-term-apr-2025-an-q21",
        "pdsa-quiz-2-aug-2025-an-q3",
        "pdsa-quiz-2-aug-2025-an-q14",
        "pdsa-end-term-aug-2025-an-q22",
        "pdsa-end-term-aug-2025-fn-q8",
        "pdsa-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "slug": "heaps",
      "title": "Heaps & priority queues",
      "summary": "Insert and delete in min/max heaps, heapify, find the heap before the last insertion",
      "ids": [
        "pdsa-end-term-dec-2024-an-q11",
        "pdsa-end-term-apr-2025-an-q7",
        "pdsa-quiz-2-aug-2025-an-q2",
        "pdsa-quiz-2-aug-2025-an-q5",
        "pdsa-end-term-aug-2025-an-q7",
        "pdsa-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "slug": "trees-bst-avl",
      "title": "Binary trees, BST & AVL trees",
      "summary": "Node/height bounds, traversals, BST insertion, AVL rotations and min/max nodes for a height",
      "ids": [
        "pdsa-end-term-dec-2024-an-q10",
        "pdsa-end-term-dec-2024-an-q12",
        "pdsa-end-term-dec-2024-an-q20",
        "pdsa-end-term-dec-2024-fn-q8",
        "pdsa-end-term-dec-2024-fn-q9",
        "pdsa-end-term-dec-2024-fn-q20",
        "pdsa-end-term-dec-2024-fn-q21",
        "pdsa-end-term-apr-2025-an-q6",
        "pdsa-end-term-apr-2025-an-q8",
        "pdsa-end-term-apr-2025-an-q13",
        "pdsa-quiz-2-aug-2025-an-q4",
        "pdsa-quiz-2-aug-2025-an-q7",
        "pdsa-quiz-2-aug-2025-an-q12",
        "pdsa-quiz-2-aug-2025-an-q15",
        "pdsa-end-term-aug-2025-an-q19",
        "pdsa-end-term-aug-2025-an-q23",
        "pdsa-end-term-aug-2025-fn-q18",
        "pdsa-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "slug": "greedy-algorithms",
      "title": "Greedy: scheduling, Huffman, merging",
      "summary": "Activity selection, Huffman code lengths, optimal merge of sorted lists, greedy properties",
      "ids": [
        "pdsa-end-term-dec-2024-an-q21",
        "pdsa-end-term-dec-2024-an-q22",
        "pdsa-end-term-dec-2024-an-q23",
        "pdsa-end-term-dec-2024-fn-q10",
        "pdsa-end-term-dec-2024-fn-q22",
        "pdsa-end-term-dec-2024-fn-q23",
        "pdsa-end-term-apr-2025-an-q9",
        "pdsa-end-term-apr-2025-an-q22",
        "pdsa-quiz-2-aug-2025-an-q6",
        "pdsa-quiz-2-aug-2025-an-q8",
        "pdsa-end-term-aug-2025-an-q8",
        "pdsa-end-term-aug-2025-an-q24",
        "pdsa-end-term-aug-2025-fn-q9",
        "pdsa-end-term-aug-2025-fn-q24"
      ]
    },
    {
      "slug": "divide-and-conquer",
      "title": "Divide & conquer",
      "summary": "Count inversions, median of medians, closest pair of points",
      "ids": [
        "pdsa-end-term-dec-2024-an-q13",
        "pdsa-end-term-dec-2024-fn-q17",
        "pdsa-end-term-apr-2025-an-q11",
        "pdsa-end-term-apr-2025-an-q23",
        "pdsa-quiz-2-aug-2025-an-q10",
        "pdsa-quiz-2-aug-2025-an-q13",
        "pdsa-quiz-2-aug-2025-an-q16",
        "pdsa-end-term-aug-2025-an-q9",
        "pdsa-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "slug": "dynamic-programming",
      "title": "Dynamic programming",
      "summary": "Grid paths, matrix chain order, edit distance/LCS/LCW, knapsack and DP recurrences",
      "ids": [
        "pdsa-end-term-dec-2024-an-q15",
        "pdsa-end-term-dec-2024-an-q16",
        "pdsa-end-term-dec-2024-an-q24",
        "pdsa-end-term-dec-2024-fn-q12",
        "pdsa-end-term-dec-2024-fn-q24",
        "pdsa-end-term-dec-2024-fn-q25",
        "pdsa-end-term-apr-2025-an-q17",
        "pdsa-end-term-apr-2025-an-q24",
        "pdsa-end-term-aug-2025-an-q10",
        "pdsa-end-term-aug-2025-an-q11",
        "pdsa-end-term-aug-2025-an-q25",
        "pdsa-end-term-aug-2025-fn-q11",
        "pdsa-end-term-aug-2025-fn-q12",
        "pdsa-end-term-aug-2025-fn-q25"
      ]
    },
    {
      "slug": "lp-and-network-flow",
      "title": "Linear programming & network flow",
      "summary": "Write valid LP constraints, max flow value, min cuts and flow modelling",
      "ids": [
        "pdsa-end-term-dec-2024-an-q17",
        "pdsa-end-term-dec-2024-an-q25",
        "pdsa-end-term-dec-2024-fn-q13",
        "pdsa-end-term-dec-2024-fn-q14",
        "pdsa-end-term-apr-2025-an-q19",
        "pdsa-end-term-aug-2025-an-q12",
        "pdsa-end-term-aug-2025-an-q20",
        "pdsa-end-term-aug-2025-fn-q13",
        "pdsa-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "slug": "np-completeness",
      "title": "Intractability & NP-completeness",
      "summary": "P, NP, NP-hard reductions, vertex cover and independent set",
      "ids": [
        "pdsa-end-term-dec-2024-an-q18",
        "pdsa-end-term-dec-2024-fn-q15",
        "pdsa-end-term-apr-2025-an-q25",
        "pdsa-end-term-aug-2025-an-q13",
        "pdsa-end-term-aug-2025-fn-q14"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Find which element could have been the quicksort pivot after first partition",
      "ids": [
        "pdsa-end-term-dec-2024-an-q4",
        "pdsa-end-term-dec-2024-fn-q3",
        "pdsa-end-term-aug-2025-an-q16",
        "pdsa-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Find probability the next key lands at an index with linear probing",
      "ids": [
        "pdsa-end-term-dec-2024-an-q5",
        "pdsa-end-term-dec-2024-fn-q4"
      ]
    },
    {
      "title": "Find a possible key insertion order for a linear-probing hash table",
      "ids": [
        "pdsa-end-term-apr-2025-an-q15",
        "pdsa-end-term-aug-2025-an-q17"
      ]
    },
    {
      "title": "Find the index where a key is stored with linear probing",
      "ids": [
        "pdsa-end-term-aug-2025-fn-q3",
        "pdsa-quiz-1-oct-2025-an-q14"
      ]
    },
    {
      "title": "Trace a recursive function that pops and re-pushes a stack or queue",
      "ids": [
        "pdsa-end-term-dec-2024-an-q6",
        "pdsa-end-term-dec-2024-fn-q5",
        "pdsa-quiz-1-oct-2025-an-q7"
      ]
    },
    {
      "title": "Say what a recursive function on a list does",
      "ids": [
        "pdsa-end-term-dec-2024-an-q1",
        "pdsa-end-term-dec-2024-fn-q1"
      ]
    },
    {
      "title": "Find the time complexity of a loop-based function",
      "ids": [
        "pdsa-end-term-dec-2024-an-q2",
        "pdsa-end-term-dec-2024-fn-q2",
        "pdsa-end-term-aug-2025-an-q1",
        "pdsa-quiz-1-oct-2025-an-q1"
      ]
    },
    {
      "title": "BFS: compare d(s,u) and d(s,v) when u is visited before v",
      "ids": [
        "pdsa-end-term-dec-2024-an-q7",
        "pdsa-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Run Dijkstra's algorithm and find visit order or shortest distances",
      "ids": [
        "pdsa-end-term-dec-2024-an-q8",
        "pdsa-end-term-dec-2024-fn-q6",
        "pdsa-end-term-apr-2025-an-q20",
        "pdsa-quiz-2-aug-2025-an-q1",
        "pdsa-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "title": "Check bounds linking height, internal, leaf and total nodes of a binary tree",
      "ids": [
        "pdsa-end-term-dec-2024-an-q10",
        "pdsa-end-term-dec-2024-fn-q8"
      ]
    },
    {
      "title": "True/false about inorder and postorder traversal of a BST",
      "ids": [
        "pdsa-end-term-dec-2024-an-q12",
        "pdsa-end-term-dec-2024-fn-q9"
      ]
    },
    {
      "title": "Count the inversions (or inversion pairs) in a list",
      "ids": [
        "pdsa-end-term-dec-2024-an-q13",
        "pdsa-end-term-dec-2024-fn-q17",
        "pdsa-end-term-apr-2025-an-q11",
        "pdsa-quiz-2-aug-2025-an-q16"
      ]
    },
    {
      "title": "Count inversions between two rankings of movies",
      "ids": [
        "pdsa-end-term-aug-2025-an-q9",
        "pdsa-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Solve a recurrence like T(n)=aT(n/b)+f(n) to get its complexity",
      "ids": [
        "pdsa-end-term-dec-2024-an-q14",
        "pdsa-end-term-dec-2024-fn-q11",
        "pdsa-end-term-apr-2025-an-q10",
        "pdsa-quiz-2-aug-2025-an-q9"
      ]
    },
    {
      "title": "Count grid paths from (0,0) to (m,n) with DP, with or without blocks",
      "ids": [
        "pdsa-end-term-dec-2024-an-q15",
        "pdsa-end-term-dec-2024-fn-q24",
        "pdsa-end-term-apr-2025-an-q24",
        "pdsa-end-term-aug-2025-an-q25"
      ]
    },
    {
      "title": "Matrix chain multiplication: best order or minimum multiplications",
      "ids": [
        "pdsa-end-term-dec-2024-an-q16",
        "pdsa-end-term-dec-2024-fn-q12",
        "pdsa-end-term-aug-2025-an-q10",
        "pdsa-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Reason about P, NP, NP-hard and NP-complete reductions",
      "ids": [
        "pdsa-end-term-dec-2024-an-q18",
        "pdsa-end-term-dec-2024-fn-q15",
        "pdsa-end-term-aug-2025-an-q13",
        "pdsa-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Use n(n-1) or n(n-1)/2 to relate edges and vertices of a graph",
      "ids": [
        "pdsa-end-term-dec-2024-an-q19",
        "pdsa-end-term-dec-2024-fn-q19",
        "pdsa-end-term-apr-2025-an-q4",
        "pdsa-end-term-aug-2025-an-q21",
        "pdsa-end-term-aug-2025-fn-q20",
        "pdsa-quiz-1-oct-2025-an-q15"
      ]
    },
    {
      "title": "Find min or max nodes / max height of an AVL tree",
      "ids": [
        "pdsa-end-term-dec-2024-an-q20",
        "pdsa-end-term-dec-2024-fn-q21",
        "pdsa-end-term-apr-2025-an-q13"
      ]
    },
    {
      "title": "Build a Huffman tree and find code lengths or total bits",
      "ids": [
        "pdsa-end-term-dec-2024-an-q21",
        "pdsa-end-term-dec-2024-fn-q10",
        "pdsa-end-term-apr-2025-an-q9",
        "pdsa-quiz-2-aug-2025-an-q8",
        "pdsa-end-term-aug-2025-an-q8",
        "pdsa-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Activity selection: max number of meetings in one room",
      "ids": [
        "pdsa-end-term-dec-2024-an-q22",
        "pdsa-end-term-dec-2024-fn-q22",
        "pdsa-end-term-aug-2025-an-q24",
        "pdsa-end-term-aug-2025-fn-q24"
      ]
    },
    {
      "title": "Optimal merge of sorted lists: total comparisons in worst case",
      "ids": [
        "pdsa-end-term-dec-2024-an-q23",
        "pdsa-end-term-dec-2024-fn-q23",
        "pdsa-end-term-apr-2025-an-q22"
      ]
    },
    {
      "title": "Pick valid or invalid constraints for a word-problem LP",
      "ids": [
        "pdsa-end-term-dec-2024-an-q25",
        "pdsa-end-term-dec-2024-fn-q13",
        "pdsa-end-term-apr-2025-an-q19",
        "pdsa-end-term-aug-2025-an-q20",
        "pdsa-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "title": "Pick valid (or invalid) topological orderings of a DAG",
      "ids": [
        "pdsa-end-term-dec-2024-fn-q16",
        "pdsa-quiz-1-oct-2025-an-q10"
      ]
    },
    {
      "title": "Trace binary search: iterations, comparisons or value of high",
      "ids": [
        "pdsa-end-term-dec-2024-fn-q18",
        "pdsa-end-term-apr-2025-an-q2",
        "pdsa-quiz-1-oct-2025-an-q3"
      ]
    },
    {
      "title": "Arrange functions in order of asymptotic growth",
      "ids": [
        "pdsa-end-term-apr-2025-an-q1",
        "pdsa-end-term-aug-2025-an-q15",
        "pdsa-end-term-aug-2025-fn-q16",
        "pdsa-quiz-1-oct-2025-an-q2"
      ]
    },
    {
      "title": "Recall time complexity of a sorting algorithm in a given case",
      "ids": [
        "pdsa-end-term-apr-2025-an-q3",
        "pdsa-end-term-aug-2025-an-q2",
        "pdsa-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "State the time complexity of BFS, Dijkstra or Kruskal",
      "ids": [
        "pdsa-end-term-apr-2025-an-q5",
        "pdsa-end-term-aug-2025-an-q14",
        "pdsa-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Heap after delete_max/delete_min then insert",
      "ids": [
        "pdsa-end-term-apr-2025-an-q7",
        "pdsa-quiz-2-aug-2025-an-q2",
        "pdsa-end-term-aug-2025-an-q7"
      ]
    },
    {
      "title": "Max-heap: find last inserted element or heap before last insert",
      "ids": [
        "pdsa-quiz-2-aug-2025-an-q5",
        "pdsa-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Find the weight of the minimum spanning tree",
      "ids": [
        "pdsa-end-term-apr-2025-an-q21",
        "pdsa-quiz-2-aug-2025-an-q14"
      ]
    },
    {
      "title": "Count MSTs plus their weight (alpha + beta)",
      "ids": [
        "pdsa-end-term-aug-2025-an-q22",
        "pdsa-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Trace median of medians on a given list",
      "ids": [
        "pdsa-end-term-apr-2025-an-q23",
        "pdsa-quiz-2-aug-2025-an-q10"
      ]
    },
    {
      "title": "Insert into an AVL tree and find the result or the leaves",
      "ids": [
        "pdsa-quiz-2-aug-2025-an-q7",
        "pdsa-end-term-aug-2025-an-q19",
        "pdsa-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "Code to insert or delete the first node of a linked list",
      "ids": [
        "pdsa-end-term-aug-2025-an-q3",
        "pdsa-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Min height or max nodes of a binary tree",
      "ids": [
        "pdsa-quiz-2-aug-2025-an-q15",
        "pdsa-end-term-aug-2025-an-q23",
        "pdsa-end-term-aug-2025-fn-q23"
      ]
    }
  ]
};
