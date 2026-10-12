import type { PyqTopicTags } from "../../types";

// 18 past-paper questions in 4 topics, 0 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const operatingSystemsTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "xv6-boot",
      "title": "xv6 boot & the first process",
      "summary": "_entry per CPU, the path to initcode and what userinit sets up",
      "ids": [
        "os-quiz-1-oct-2025-an-q1",
        "os-quiz-1-oct-2025-an-q6",
        "os-quiz-1-oct-2025-an-q17"
      ]
    },
    {
      "slug": "system-calls-traps",
      "title": "System calls & traps in RISC-V",
      "summary": "Mode registers, trapframe a7/a0 and the syscall sequence behind a shell command",
      "ids": [
        "os-quiz-1-oct-2025-an-q2",
        "os-quiz-1-oct-2025-an-q12",
        "os-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "slug": "processes-fork",
      "title": "Processes, fork, exit & states",
      "summary": "xv6 process states and transitions, fork steps, zombies and fork output tracing",
      "ids": [
        "os-quiz-1-oct-2025-an-q3",
        "os-quiz-1-oct-2025-an-q4",
        "os-quiz-1-oct-2025-an-q5",
        "os-quiz-1-oct-2025-an-q9",
        "os-quiz-1-oct-2025-an-q10",
        "os-quiz-1-oct-2025-an-q11",
        "os-quiz-1-oct-2025-an-q16",
        "os-quiz-1-oct-2025-an-q18"
      ]
    },
    {
      "slug": "memory-mmio-paging",
      "title": "Memory-mapped I/O & paging",
      "summary": "Device address ranges, register access sizes, page size and frame counts",
      "ids": [
        "os-quiz-1-oct-2025-an-q7",
        "os-quiz-1-oct-2025-an-q8",
        "os-quiz-1-oct-2025-an-q14",
        "os-quiz-1-oct-2025-an-q15"
      ]
    }
  ],
  "repeats": []
};
