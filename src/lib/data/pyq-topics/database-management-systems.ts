import type { PyqTopicTags } from "../../types";

// 128 past-paper questions in 12 topics, 34 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const databaseManagementSystemsTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "relational-model-and-algebra",
      "title": "Relational model & relational algebra",
      "summary": "Schema levels, RA/TRC/DRC expressions, joins, division and equivalent algebra expressions",
      "ids": [
        "dbms-quiz-1-oct-2025-an-q9",
        "dbms-end-term-dec-2024-an-q16",
        "dbms-end-term-dec-2024-an-q18",
        "dbms-end-term-dec-2024-fn-q15",
        "dbms-end-term-dec-2024-fn-q18",
        "dbms-end-term-apr-2025-an-q10",
        "dbms-end-term-apr-2025-an-q12",
        "dbms-end-term-apr-2025-fn-q9",
        "dbms-end-term-apr-2025-fn-q10",
        "dbms-end-term-aug-2025-fn-q11",
        "dbms-quiz-1-oct-2025-an-q1",
        "dbms-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "slug": "sql-queries",
      "title": "SQL queries & their output",
      "summary": "Read or pick SQL queries: joins, subqueries, EXISTS/EXCEPT, GROUP BY/HAVING, LIKE and query results",
      "ids": [
        "dbms-end-term-dec-2024-an-q12",
        "dbms-end-term-dec-2024-fn-q13",
        "dbms-end-term-apr-2025-an-q2",
        "dbms-end-term-apr-2025-an-q6",
        "dbms-end-term-apr-2025-fn-q4",
        "dbms-end-term-apr-2025-fn-q6",
        "dbms-end-term-aug-2025-fn-q1",
        "dbms-end-term-aug-2025-fn-q3",
        "dbms-end-term-aug-2025-fn-q12",
        "dbms-end-term-aug-2025-fn-q15",
        "dbms-quiz-1-oct-2025-an-q2",
        "dbms-quiz-1-oct-2025-an-q3",
        "dbms-quiz-1-oct-2025-an-q4",
        "dbms-quiz-1-oct-2025-an-q7",
        "dbms-quiz-1-oct-2025-an-q10",
        "dbms-quiz-1-oct-2025-an-q11"
      ]
    },
    {
      "slug": "sql-ddl-constraints-app-dev",
      "title": "SQL DDL, constraints & app development",
      "summary": "CREATE TABLE checks, foreign keys and cascades, views, GRANT, Python DB access and SQL injection",
      "ids": [
        "dbms-end-term-dec-2024-an-q17",
        "dbms-end-term-dec-2024-fn-q14",
        "dbms-end-term-apr-2025-an-q19",
        "dbms-end-term-apr-2025-an-q20",
        "dbms-end-term-apr-2025-fn-q19",
        "dbms-end-term-apr-2025-fn-q20",
        "dbms-quiz-1-oct-2025-an-q5",
        "dbms-quiz-1-oct-2025-an-q6",
        "dbms-quiz-1-oct-2025-an-q13",
        "dbms-quiz-1-oct-2025-an-q14",
        "dbms-quiz-2-aug-2025-an-q4",
        "dbms-quiz-2-aug-2025-an-q10"
      ]
    },
    {
      "slug": "er-model",
      "title": "Entity-relationship model",
      "summary": "Read ER diagrams for cardinality and participation, and map them to relational schemas",
      "ids": [
        "dbms-end-term-dec-2024-an-q14",
        "dbms-end-term-dec-2024-fn-q17",
        "dbms-end-term-apr-2025-an-q11",
        "dbms-end-term-apr-2025-fn-q11",
        "dbms-end-term-aug-2025-fn-q10",
        "dbms-quiz-1-oct-2025-an-q8"
      ]
    },
    {
      "slug": "functional-dependencies-and-keys",
      "title": "Functional dependencies & keys",
      "summary": "FDs from a table instance, closures, canonical cover and counting super keys",
      "ids": [
        "dbms-end-term-dec-2024-an-q19",
        "dbms-end-term-dec-2024-fn-q19",
        "dbms-end-term-apr-2025-an-q1",
        "dbms-end-term-apr-2025-fn-q8",
        "dbms-end-term-aug-2025-fn-q14",
        "dbms-end-term-apr-2025-an-q16",
        "dbms-end-term-apr-2025-fn-q16",
        "dbms-quiz-2-aug-2025-an-q14",
        "dbms-quiz-2-aug-2025-an-q2",
        "dbms-quiz-2-aug-2025-an-q8"
      ]
    },
    {
      "slug": "normalization-and-decomposition",
      "title": "Normal forms & decomposition",
      "summary": "Lossless join, dependency preservation, 2NF/3NF/BCNF checks and multivalued dependencies",
      "ids": [
        "dbms-end-term-dec-2024-an-q5",
        "dbms-end-term-dec-2024-fn-q16",
        "dbms-quiz-2-aug-2025-an-q1",
        "dbms-end-term-aug-2025-fn-q9",
        "dbms-quiz-2-aug-2025-an-q3",
        "dbms-quiz-2-aug-2025-an-q5",
        "dbms-quiz-2-aug-2025-an-q7",
        "dbms-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "slug": "storage-disks-and-buffers",
      "title": "Storage: disks, RAID & buffers",
      "summary": "Disk transfer rate, read time and capacity, RAID efficiency, page replacement and file organisation",
      "ids": [
        "dbms-end-term-dec-2024-an-q7",
        "dbms-end-term-dec-2024-fn-q2",
        "dbms-end-term-apr-2025-an-q7",
        "dbms-end-term-dec-2024-an-q8",
        "dbms-end-term-dec-2024-fn-q3",
        "dbms-end-term-apr-2025-an-q13",
        "dbms-end-term-apr-2025-fn-q13",
        "dbms-end-term-aug-2025-fn-q18",
        "dbms-end-term-apr-2025-an-q15",
        "dbms-end-term-apr-2025-fn-q14",
        "dbms-quiz-2-aug-2025-an-q6",
        "dbms-quiz-2-aug-2025-an-q11",
        "dbms-quiz-2-aug-2025-an-q12"
      ]
    },
    {
      "slug": "b-plus-trees-and-search-trees",
      "title": "B+ trees, BSTs & multilevel index",
      "summary": "B+ tree order, keys per node, node splits, search cost, multilevel index blocks and BST shape",
      "ids": [
        "dbms-end-term-dec-2024-an-q3",
        "dbms-end-term-dec-2024-fn-q7",
        "dbms-end-term-dec-2024-an-q9",
        "dbms-end-term-dec-2024-fn-q4",
        "dbms-end-term-aug-2025-fn-q2",
        "dbms-end-term-dec-2024-an-q10",
        "dbms-end-term-dec-2024-fn-q5",
        "dbms-end-term-apr-2025-an-q5",
        "dbms-end-term-apr-2025-fn-q1",
        "dbms-end-term-aug-2025-fn-q16",
        "dbms-quiz-2-aug-2025-an-q9",
        "dbms-quiz-2-aug-2025-an-q13",
        "dbms-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "slug": "hashing-and-bitmap-indices",
      "title": "Hashing & bitmap indices",
      "summary": "Static vs dynamic hashing, collision-free hash functions, extendable hashing and bitmap indices",
      "ids": [
        "dbms-end-term-dec-2024-an-q6",
        "dbms-end-term-dec-2024-fn-q1",
        "dbms-end-term-apr-2025-an-q8",
        "dbms-end-term-apr-2025-fn-q7",
        "dbms-end-term-apr-2025-an-q9",
        "dbms-end-term-apr-2025-fn-q5",
        "dbms-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "slug": "transactions-and-serializability",
      "title": "Transactions & serializability",
      "summary": "Conflict/view serializability, precedence graphs, equivalent schedules and two-phase locking",
      "ids": [
        "dbms-end-term-dec-2024-an-q1",
        "dbms-end-term-dec-2024-an-q2",
        "dbms-end-term-dec-2024-fn-q11",
        "dbms-end-term-dec-2024-fn-q12",
        "dbms-end-term-apr-2025-an-q4",
        "dbms-end-term-apr-2025-an-q17",
        "dbms-end-term-apr-2025-fn-q12",
        "dbms-end-term-apr-2025-fn-q17",
        "dbms-end-term-aug-2025-fn-q6",
        "dbms-end-term-aug-2025-fn-q19",
        "dbms-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "slug": "recovery-and-backup",
      "title": "Recovery, logs & backup",
      "summary": "Log-based recovery with checkpoints, undo/redo decisions, values on disk and backup set counts",
      "ids": [
        "dbms-end-term-dec-2024-an-q4",
        "dbms-end-term-dec-2024-fn-q8",
        "dbms-end-term-apr-2025-an-q18",
        "dbms-end-term-apr-2025-fn-q15",
        "dbms-end-term-dec-2024-an-q13",
        "dbms-end-term-dec-2024-an-q15",
        "dbms-end-term-dec-2024-fn-q10",
        "dbms-end-term-apr-2025-fn-q2",
        "dbms-end-term-aug-2025-fn-q7",
        "dbms-end-term-dec-2024-an-q11",
        "dbms-end-term-dec-2024-fn-q6",
        "dbms-end-term-apr-2025-an-q3",
        "dbms-end-term-apr-2025-fn-q3",
        "dbms-end-term-aug-2025-fn-q17",
        "dbms-end-term-dec-2024-fn-q9"
      ]
    },
    {
      "slug": "query-processing",
      "title": "Query processing & join cost",
      "summary": "Block nested-loop join cost: block transfers, seeks and size of the inner relation",
      "ids": [
        "dbms-end-term-dec-2024-an-q20",
        "dbms-end-term-dec-2024-fn-q20",
        "dbms-end-term-apr-2025-an-q14",
        "dbms-end-term-apr-2025-fn-q18",
        "dbms-end-term-aug-2025-fn-q13"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Find values of data items on disk after a crash from given log records",
      "ids": [
        "dbms-end-term-dec-2024-an-q4",
        "dbms-end-term-dec-2024-fn-q8",
        "dbms-end-term-apr-2025-an-q18",
        "dbms-end-term-apr-2025-fn-q15"
      ]
    },
    {
      "title": "Count backup sets to load for full recovery from a backup schedule",
      "ids": [
        "dbms-end-term-dec-2024-an-q11",
        "dbms-end-term-dec-2024-fn-q6",
        "dbms-end-term-apr-2025-an-q3",
        "dbms-end-term-apr-2025-fn-q3",
        "dbms-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Decide undo/redo/ignore for transactions around a checkpoint and failure",
      "ids": [
        "dbms-end-term-dec-2024-an-q15",
        "dbms-end-term-dec-2024-fn-q10",
        "dbms-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Check conflict and view serializability of a schedule",
      "ids": [
        "dbms-end-term-dec-2024-an-q1",
        "dbms-end-term-dec-2024-fn-q11"
      ]
    },
    {
      "title": "Check if two schedules S1 and S2 are conflict/view equivalent",
      "ids": [
        "dbms-end-term-dec-2024-an-q2",
        "dbms-end-term-dec-2024-fn-q12"
      ]
    },
    {
      "title": "Check conflict serializability and 2PL-lockability of a schedule",
      "ids": [
        "dbms-end-term-apr-2025-an-q4",
        "dbms-end-term-apr-2025-fn-q12",
        "dbms-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "title": "Count conflict-equivalent serial schedules of a given schedule",
      "ids": [
        "dbms-end-term-apr-2025-an-q17",
        "dbms-end-term-apr-2025-fn-q17",
        "dbms-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Find inner relation blocks from block nested-loop join cost",
      "ids": [
        "dbms-end-term-dec-2024-an-q20",
        "dbms-end-term-dec-2024-fn-q20",
        "dbms-end-term-apr-2025-an-q14",
        "dbms-end-term-apr-2025-fn-q18"
      ]
    },
    {
      "title": "Pick FDs that hold in a given relation instance",
      "ids": [
        "dbms-end-term-dec-2024-an-q19",
        "dbms-end-term-dec-2024-fn-q19",
        "dbms-end-term-apr-2025-an-q1",
        "dbms-end-term-apr-2025-fn-q8",
        "dbms-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Count the super keys of a relation from its FD set",
      "ids": [
        "dbms-end-term-apr-2025-an-q16",
        "dbms-end-term-apr-2025-fn-q16",
        "dbms-quiz-2-aug-2025-an-q14"
      ]
    },
    {
      "title": "Check lossless join, dependency preservation and NF of a decomposition",
      "ids": [
        "dbms-end-term-dec-2024-an-q5",
        "dbms-end-term-dec-2024-fn-q16",
        "dbms-quiz-2-aug-2025-an-q1",
        "dbms-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Find tuples that must exist given a multivalued dependency",
      "ids": [
        "dbms-quiz-2-aug-2025-an-q7",
        "dbms-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Read cardinality and participation statements from an ER diagram",
      "ids": [
        "dbms-end-term-dec-2024-fn-q17",
        "dbms-end-term-apr-2025-an-q11",
        "dbms-end-term-apr-2025-fn-q11",
        "dbms-end-term-aug-2025-fn-q10",
        "dbms-quiz-1-oct-2025-an-q8"
      ]
    },
    {
      "title": "Pick RA/TRC/DRC expressions for an English query on a given schema",
      "ids": [
        "dbms-end-term-dec-2024-an-q18",
        "dbms-end-term-dec-2024-fn-q15",
        "dbms-end-term-apr-2025-an-q10",
        "dbms-end-term-apr-2025-fn-q10"
      ]
    },
    {
      "title": "Pick relational algebra expressions equivalent to a project-select-join",
      "ids": [
        "dbms-end-term-dec-2024-an-q16",
        "dbms-end-term-dec-2024-fn-q18",
        "dbms-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Pick RA expressions for IT employees earning above 70,000",
      "ids": [
        "dbms-end-term-apr-2025-an-q12",
        "dbms-end-term-apr-2025-fn-q9"
      ]
    },
    {
      "title": "Find students who took no course from a given department in SQL",
      "ids": [
        "dbms-end-term-dec-2024-an-q12",
        "dbms-end-term-dec-2024-fn-q13"
      ]
    },
    {
      "title": "Choose SQL with GROUP BY/HAVING to find categories by product price",
      "ids": [
        "dbms-end-term-apr-2025-an-q2",
        "dbms-end-term-apr-2025-fn-q4"
      ]
    },
    {
      "title": "Match SQL queries (LIKE, GROUP BY, JOIN) to English questions",
      "ids": [
        "dbms-end-term-apr-2025-an-q6",
        "dbms-end-term-apr-2025-fn-q6"
      ]
    },
    {
      "title": "Find the INSERT that violates CREATE TABLE constraints",
      "ids": [
        "dbms-end-term-dec-2024-an-q17",
        "dbms-end-term-dec-2024-fn-q14"
      ]
    },
    {
      "title": "Count rows in insurance and nominee tables after a DELETE",
      "ids": [
        "dbms-end-term-apr-2025-an-q19",
        "dbms-end-term-apr-2025-fn-q19"
      ]
    },
    {
      "title": "Find nominee table contents after INSERTs with foreign keys",
      "ids": [
        "dbms-end-term-apr-2025-an-q20",
        "dbms-end-term-apr-2025-fn-q20"
      ]
    },
    {
      "title": "Find the column a bitmap index is built on",
      "ids": [
        "dbms-end-term-dec-2024-an-q6",
        "dbms-end-term-dec-2024-fn-q1"
      ]
    },
    {
      "title": "Compute storage efficiency of RAID-1 and RAID-4",
      "ids": [
        "dbms-end-term-dec-2024-an-q7",
        "dbms-end-term-dec-2024-fn-q2"
      ]
    },
    {
      "title": "Compute disk transfer rate from RPM, sectors and sector size",
      "ids": [
        "dbms-end-term-dec-2024-an-q8",
        "dbms-end-term-dec-2024-fn-q3"
      ]
    },
    {
      "title": "Time to read a file stored in non-consecutive disk sectors",
      "ids": [
        "dbms-end-term-apr-2025-an-q13",
        "dbms-end-term-apr-2025-fn-q13"
      ]
    },
    {
      "title": "Count page faults for a buffer replacement policy (LRU/MRU)",
      "ids": [
        "dbms-end-term-apr-2025-an-q15",
        "dbms-end-term-apr-2025-fn-q14",
        "dbms-quiz-2-aug-2025-an-q6"
      ]
    },
    {
      "title": "Count node splits when inserting keys into a B+ tree of order 3",
      "ids": [
        "dbms-end-term-dec-2024-an-q3",
        "dbms-end-term-dec-2024-fn-q7"
      ]
    },
    {
      "title": "Max and min number of keys in the root of a B+ tree of order n",
      "ids": [
        "dbms-end-term-dec-2024-an-q9",
        "dbms-end-term-dec-2024-fn-q4",
        "dbms-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Number of blocks at each level of a multilevel index",
      "ids": [
        "dbms-end-term-dec-2024-an-q10",
        "dbms-end-term-dec-2024-fn-q5"
      ]
    },
    {
      "title": "Best B+ tree order from key size, pointer size and block size",
      "ids": [
        "dbms-end-term-apr-2025-an-q5",
        "dbms-end-term-apr-2025-fn-q1"
      ]
    },
    {
      "title": "Statements on static vs dynamic hashing",
      "ids": [
        "dbms-end-term-apr-2025-an-q8",
        "dbms-end-term-apr-2025-fn-q7"
      ]
    },
    {
      "title": "Pick hash functions that give unique values for given keys",
      "ids": [
        "dbms-end-term-apr-2025-an-q9",
        "dbms-end-term-apr-2025-fn-q5"
      ]
    },
    {
      "title": "Build a BST from an insert order and answer questions about it",
      "ids": [
        "dbms-quiz-2-aug-2025-an-q9",
        "dbms-end-term-aug-2025-fn-q4"
      ]
    }
  ]
};
