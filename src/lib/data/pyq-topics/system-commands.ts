import type { PyqTopicTags } from "../../types";

// 102 past-paper questions in 10 topics, 24 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const systemCommandsTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "files-permissions-archives",
      "title": "Files, links, permissions & archives",
      "summary": "Creating and moving files, hard/soft links, chmod permissions, tar and gzip",
      "ids": [
        "system-commands-end-term-apr-2025-fn-q6",
        "system-commands-end-term-apr-2025-fn-q12",
        "system-commands-end-term-aug-2025-an-q16",
        "system-commands-end-term-aug-2025-an-q20",
        "system-commands-end-term-aug-2025-fn-q8",
        "system-commands-end-term-aug-2025-fn-q20",
        "system-commands-quiz-1-oct-2025-an-q1",
        "system-commands-quiz-1-oct-2025-an-q2",
        "system-commands-quiz-1-oct-2025-an-q15",
        "system-commands-quiz-1-oct-2025-an-q16"
      ]
    },
    {
      "slug": "shell-expansion-redirection",
      "title": "Shell expansion, pipes & redirection",
      "summary": "Brace expansion, command substitution, subshells, exit codes, &&/||, redirecting output",
      "ids": [
        "system-commands-end-term-dec-2024-an-q1",
        "system-commands-end-term-dec-2024-fn-q1",
        "system-commands-end-term-apr-2025-fn-q10",
        "system-commands-end-term-apr-2025-fn-q14",
        "system-commands-end-term-apr-2025-fn-q15",
        "system-commands-end-term-apr-2025-fn-q16",
        "system-commands-end-term-aug-2025-an-q13",
        "system-commands-end-term-aug-2025-fn-q1",
        "system-commands-end-term-aug-2025-fn-q6",
        "system-commands-end-term-aug-2025-fn-q14",
        "system-commands-quiz-1-oct-2025-an-q6",
        "system-commands-quiz-1-oct-2025-an-q7",
        "system-commands-quiz-1-oct-2025-an-q10",
        "system-commands-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "slug": "find-and-globbing",
      "title": "Finding files: find & wildcards",
      "summary": "find with -name, -size, -mtime, -exec, and glob patterns to match file names",
      "ids": [
        "system-commands-end-term-dec-2024-an-q5",
        "system-commands-end-term-dec-2024-an-q10",
        "system-commands-end-term-dec-2024-fn-q5",
        "system-commands-end-term-apr-2025-fn-q4",
        "system-commands-end-term-aug-2025-an-q15",
        "system-commands-end-term-aug-2025-fn-q3",
        "system-commands-quiz-1-oct-2025-an-q3"
      ]
    },
    {
      "slug": "regex-grep",
      "title": "Regular expressions & grep",
      "summary": "Build or read BRE/ERE patterns, backreferences, and grep options and match counts",
      "ids": [
        "system-commands-end-term-dec-2024-an-q3",
        "system-commands-end-term-dec-2024-an-q8",
        "system-commands-end-term-dec-2024-an-q12",
        "system-commands-end-term-dec-2024-fn-q4",
        "system-commands-end-term-dec-2024-fn-q7",
        "system-commands-end-term-dec-2024-fn-q11",
        "system-commands-end-term-apr-2025-fn-q9",
        "system-commands-end-term-aug-2025-an-q1",
        "system-commands-end-term-aug-2025-an-q5",
        "system-commands-end-term-aug-2025-an-q12",
        "system-commands-end-term-aug-2025-fn-q7",
        "system-commands-end-term-aug-2025-fn-q19",
        "system-commands-quiz-1-oct-2025-an-q8",
        "system-commands-quiz-1-oct-2025-an-q9",
        "system-commands-quiz-1-oct-2025-an-q11",
        "system-commands-quiz-1-oct-2025-an-q14"
      ]
    },
    {
      "slug": "sed",
      "title": "Editing streams with sed",
      "summary": "sed substitution, line ranges, deleting and printing lines, backreferences",
      "ids": [
        "system-commands-end-term-dec-2024-an-q7",
        "system-commands-end-term-dec-2024-fn-q10",
        "system-commands-end-term-apr-2025-fn-q5",
        "system-commands-end-term-apr-2025-fn-q11",
        "system-commands-end-term-aug-2025-fn-q10",
        "system-commands-end-term-aug-2025-fn-q13",
        "system-commands-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "slug": "awk-text-filters",
      "title": "awk, sort & text filters",
      "summary": "awk fields, arrays and sums, sort keys, removing duplicates, printing line ranges",
      "ids": [
        "system-commands-end-term-dec-2024-an-q2",
        "system-commands-end-term-dec-2024-an-q6",
        "system-commands-end-term-dec-2024-an-q9",
        "system-commands-end-term-dec-2024-fn-q2",
        "system-commands-end-term-dec-2024-fn-q3",
        "system-commands-end-term-dec-2024-fn-q9",
        "system-commands-end-term-dec-2024-fn-q12",
        "system-commands-end-term-apr-2025-fn-q1",
        "system-commands-end-term-apr-2025-fn-q3",
        "system-commands-end-term-aug-2025-an-q6",
        "system-commands-end-term-aug-2025-an-q9",
        "system-commands-end-term-aug-2025-an-q10",
        "system-commands-end-term-aug-2025-an-q11",
        "system-commands-end-term-aug-2025-an-q18",
        "system-commands-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "slug": "bash-scripting",
      "title": "Bash scripting: logic, loops, functions",
      "summary": "Trace scripts with arguments, shift, conditions, loops, functions and background jobs",
      "ids": [
        "system-commands-end-term-dec-2024-an-q11",
        "system-commands-end-term-dec-2024-an-q13",
        "system-commands-end-term-dec-2024-an-q14",
        "system-commands-end-term-dec-2024-an-q15",
        "system-commands-end-term-dec-2024-fn-q8",
        "system-commands-end-term-dec-2024-fn-q13",
        "system-commands-end-term-dec-2024-fn-q14",
        "system-commands-end-term-dec-2024-fn-q15",
        "system-commands-end-term-aug-2025-an-q8",
        "system-commands-end-term-aug-2025-an-q19",
        "system-commands-end-term-aug-2025-fn-q2",
        "system-commands-end-term-aug-2025-fn-q9",
        "system-commands-end-term-aug-2025-fn-q15",
        "system-commands-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "slug": "text-editors",
      "title": "Text editors: vi, nano, ed, emacs",
      "summary": "Editor commands and which editor fits a task",
      "ids": [
        "system-commands-end-term-apr-2025-fn-q8",
        "system-commands-end-term-aug-2025-an-q3",
        "system-commands-end-term-aug-2025-fn-q5",
        "system-commands-quiz-1-oct-2025-an-q5"
      ]
    },
    {
      "slug": "cron-scheduling",
      "title": "Scheduling jobs with cron",
      "summary": "Read and write crontab entries: when and how often a job runs",
      "ids": [
        "system-commands-end-term-dec-2024-an-q4",
        "system-commands-end-term-dec-2024-fn-q6",
        "system-commands-end-term-apr-2025-fn-q2",
        "system-commands-end-term-aug-2025-an-q17",
        "system-commands-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "slug": "networking-system-admin",
      "title": "Networking, packages & admin tools",
      "summary": "Network troubleshooting commands, ports, apt/dpkg, make, git, checking file tampering",
      "ids": [
        "system-commands-end-term-apr-2025-fn-q7",
        "system-commands-end-term-apr-2025-fn-q13",
        "system-commands-end-term-aug-2025-an-q2",
        "system-commands-end-term-aug-2025-an-q4",
        "system-commands-end-term-aug-2025-an-q7",
        "system-commands-end-term-aug-2025-an-q14",
        "system-commands-end-term-aug-2025-fn-q4",
        "system-commands-end-term-aug-2025-fn-q12",
        "system-commands-quiz-1-oct-2025-an-q4",
        "system-commands-quiz-1-oct-2025-an-q12"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Predict the output of echo with nested brace expansion",
      "ids": [
        "system-commands-end-term-dec-2024-an-q1",
        "system-commands-end-term-dec-2024-fn-q1"
      ]
    },
    {
      "title": "Predict output of sort on keys piped to awk that drops duplicate keys",
      "ids": [
        "system-commands-end-term-dec-2024-an-q2",
        "system-commands-end-term-dec-2024-fn-q3",
        "system-commands-end-term-apr-2025-fn-q1"
      ]
    },
    {
      "title": "Choose the ERE pattern that matches lines with given field formats",
      "ids": [
        "system-commands-end-term-dec-2024-an-q3",
        "system-commands-end-term-dec-2024-fn-q4"
      ]
    },
    {
      "title": "Choose a regex that matches an address format (MAC or IPv4)",
      "ids": [
        "system-commands-end-term-dec-2024-an-q8",
        "system-commands-end-term-dec-2024-fn-q11"
      ]
    },
    {
      "title": "Palindrome strings with BRE backreferences",
      "ids": [
        "system-commands-end-term-dec-2024-an-q12",
        "system-commands-end-term-dec-2024-fn-q7"
      ]
    },
    {
      "title": "Interpret a crontab entry: when or how often the job runs",
      "ids": [
        "system-commands-end-term-dec-2024-an-q4",
        "system-commands-end-term-dec-2024-fn-q6",
        "system-commands-end-term-aug-2025-an-q17",
        "system-commands-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Remove duplicate lines by the first three fields, keep first one",
      "ids": [
        "system-commands-end-term-dec-2024-an-q6",
        "system-commands-end-term-dec-2024-fn-q9"
      ]
    },
    {
      "title": "Find file/directory names that start with a and end with e",
      "ids": [
        "system-commands-end-term-dec-2024-an-q10",
        "system-commands-end-term-dec-2024-fn-q5"
      ]
    },
    {
      "title": "Which inputs make the leap-year script echo false or exit 1",
      "ids": [
        "system-commands-end-term-dec-2024-an-q11",
        "system-commands-end-term-dec-2024-fn-q8"
      ]
    },
    {
      "title": "Trace a sed/tr script that builds an acronym from an argument",
      "ids": [
        "system-commands-end-term-dec-2024-an-q13",
        "system-commands-end-term-dec-2024-fn-q15"
      ]
    },
    {
      "title": "Count characters printed by a function called in a foreground loop",
      "ids": [
        "system-commands-end-term-dec-2024-an-q14",
        "system-commands-end-term-dec-2024-fn-q13"
      ]
    },
    {
      "title": "Count characters printed when a function runs in the background (&)",
      "ids": [
        "system-commands-end-term-dec-2024-an-q15",
        "system-commands-end-term-dec-2024-fn-q14"
      ]
    },
    {
      "title": "Choose commands that print a given range of lines from a file",
      "ids": [
        "system-commands-end-term-dec-2024-an-q9",
        "system-commands-end-term-dec-2024-fn-q10",
        "system-commands-end-term-aug-2025-an-q11"
      ]
    },
    {
      "title": "Count items with an awk associative array (word or IP frequency)",
      "ids": [
        "system-commands-end-term-apr-2025-fn-q3",
        "system-commands-end-term-aug-2025-an-q9"
      ]
    },
    {
      "title": "Swap two fields or words with sed backreferences",
      "ids": [
        "system-commands-end-term-apr-2025-fn-q11",
        "system-commands-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "What does find ... -exec ... do",
      "ids": [
        "system-commands-end-term-apr-2025-fn-q4",
        "system-commands-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "What does tar with --exclude and -czf do",
      "ids": [
        "system-commands-end-term-apr-2025-fn-q12",
        "system-commands-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Count the entries extracted by tar -xzf from a described archive",
      "ids": [
        "system-commands-end-term-aug-2025-an-q20",
        "system-commands-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Order the commands to troubleshoot a network or web service",
      "ids": [
        "system-commands-end-term-aug-2025-an-q2",
        "system-commands-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Match editors (vi, nano, ed, emacs) with commands or use cases",
      "ids": [
        "system-commands-end-term-aug-2025-an-q3",
        "system-commands-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "Choose a command to show open or listening network ports",
      "ids": [
        "system-commands-end-term-apr-2025-fn-q7",
        "system-commands-quiz-1-oct-2025-an-q4"
      ]
    },
    {
      "title": "Count matching lines from grep piped to wc -l",
      "ids": [
        "system-commands-end-term-aug-2025-fn-q6",
        "system-commands-end-term-aug-2025-fn-q19",
        "system-commands-quiz-1-oct-2025-an-q14"
      ]
    },
    {
      "title": "Replace a word with the vi substitute command",
      "ids": [
        "system-commands-end-term-apr-2025-fn-q8",
        "system-commands-quiz-1-oct-2025-an-q5"
      ]
    },
    {
      "title": "Subshells and the value of BASH_SUBSHELL",
      "ids": [
        "system-commands-end-term-apr-2025-fn-q15",
        "system-commands-end-term-aug-2025-an-q13"
      ]
    }
  ]
};
