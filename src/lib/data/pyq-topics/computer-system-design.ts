import type { PyqTopicTags } from "../../types";

// 67 past-paper questions in 7 topics, 20 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const computerSystemDesignTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "number-systems",
      "title": "Number systems & binary arithmetic",
      "summary": "Base conversion, bits needed, 1's/2's complement subtraction and Moore's law estimates",
      "ids": [
        "csd-end-term-aug-2025-an-q1",
        "csd-end-term-aug-2025-an-q5",
        "csd-end-term-aug-2025-an-q20",
        "csd-end-term-aug-2025-fn-q1",
        "csd-end-term-aug-2025-fn-q5",
        "csd-end-term-aug-2025-fn-q20",
        "csd-quiz-1-oct-2025-an-q2",
        "csd-quiz-1-oct-2025-an-q9"
      ]
    },
    {
      "slug": "logic-gates-boolean-algebra",
      "title": "Logic gates & Boolean algebra",
      "summary": "Gate behaviour, Boolean identities, circuit outputs and output probability for random inputs",
      "ids": [
        "csd-quiz-2-aug-2025-an-q9",
        "csd-end-term-aug-2025-an-q8",
        "csd-end-term-aug-2025-fn-q8",
        "csd-quiz-1-oct-2025-an-q1",
        "csd-quiz-1-oct-2025-an-q3",
        "csd-quiz-1-oct-2025-an-q4",
        "csd-quiz-1-oct-2025-an-q7"
      ]
    },
    {
      "slug": "minimization-universal-gates",
      "title": "SOP/POS, K-maps & universal gates",
      "summary": "Minterm/maxterm forms, minimisation and minimum NAND/NOR gate counts",
      "ids": [
        "csd-quiz-2-aug-2025-an-q8",
        "csd-quiz-2-aug-2025-an-q10",
        "csd-quiz-2-aug-2025-an-q14",
        "csd-end-term-aug-2025-an-q7",
        "csd-end-term-aug-2025-an-q9",
        "csd-end-term-aug-2025-an-q11",
        "csd-end-term-aug-2025-fn-q7",
        "csd-end-term-aug-2025-fn-q9",
        "csd-end-term-aug-2025-fn-q11",
        "csd-quiz-1-oct-2025-an-q5",
        "csd-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "slug": "multiplexers-decoders",
      "title": "Multiplexers, decoders & delays",
      "summary": "Implementing functions with muxes, decoder-based circuits and propagation delay",
      "ids": [
        "csd-quiz-2-aug-2025-an-q2",
        "csd-quiz-2-aug-2025-an-q15",
        "csd-end-term-aug-2025-an-q4",
        "csd-end-term-aug-2025-an-q10",
        "csd-end-term-aug-2025-fn-q4",
        "csd-end-term-aug-2025-fn-q10",
        "csd-quiz-1-oct-2025-an-q6",
        "csd-quiz-1-oct-2025-an-q8",
        "csd-quiz-1-oct-2025-an-q10",
        "csd-quiz-1-oct-2025-an-q11"
      ]
    },
    {
      "slug": "latches-flip-flops",
      "title": "Latches & flip-flops",
      "summary": "D latch, D/JK flip-flop behaviour, flip-flop counts and deriving flip-flop input logic",
      "ids": [
        "csd-quiz-2-aug-2025-an-q1",
        "csd-quiz-2-aug-2025-an-q3",
        "csd-quiz-2-aug-2025-an-q4",
        "csd-quiz-2-aug-2025-an-q5",
        "csd-quiz-2-aug-2025-an-q12",
        "csd-end-term-aug-2025-an-q3",
        "csd-end-term-aug-2025-an-q6",
        "csd-end-term-aug-2025-fn-q3",
        "csd-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "slug": "sequential-circuits-counters",
      "title": "Sequential circuits & counters",
      "summary": "Tracing flip-flop circuits over clock pulses, state counts, mod-N and Johnson counters",
      "ids": [
        "csd-quiz-2-aug-2025-an-q6",
        "csd-quiz-2-aug-2025-an-q7",
        "csd-quiz-2-aug-2025-an-q11",
        "csd-quiz-2-aug-2025-an-q13",
        "csd-end-term-aug-2025-an-q2",
        "csd-end-term-aug-2025-an-q12",
        "csd-end-term-aug-2025-an-q13",
        "csd-end-term-aug-2025-an-q14",
        "csd-end-term-aug-2025-an-q15",
        "csd-end-term-aug-2025-fn-q2",
        "csd-end-term-aug-2025-fn-q12",
        "csd-end-term-aug-2025-fn-q13",
        "csd-end-term-aug-2025-fn-q14",
        "csd-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "slug": "processor-design",
      "title": "Bus, registers & instruction encoding",
      "summary": "Control words on a common bus, instruction bit widths and hex machine code",
      "ids": [
        "csd-end-term-aug-2025-an-q16",
        "csd-end-term-aug-2025-an-q17",
        "csd-end-term-aug-2025-an-q18",
        "csd-end-term-aug-2025-an-q19",
        "csd-end-term-aug-2025-fn-q16",
        "csd-end-term-aug-2025-fn-q17",
        "csd-end-term-aug-2025-fn-q18",
        "csd-end-term-aug-2025-fn-q19"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Find the minimum number of 2-input NAND/NOR gates to implement a function",
      "ids": [
        "csd-quiz-2-aug-2025-an-q10",
        "csd-quiz-2-aug-2025-an-q14",
        "csd-end-term-aug-2025-an-q7",
        "csd-end-term-aug-2025-fn-q7",
        "csd-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "title": "Find the minimum number of 2:1 multiplexers to implement a function",
      "ids": [
        "csd-quiz-2-aug-2025-an-q15",
        "csd-end-term-aug-2025-an-q10",
        "csd-end-term-aug-2025-fn-q10",
        "csd-quiz-1-oct-2025-an-q10"
      ]
    },
    {
      "title": "Trace a JK flip-flop circuit's output over the next few clock pulses",
      "ids": [
        "csd-quiz-2-aug-2025-an-q11",
        "csd-end-term-aug-2025-an-q14",
        "csd-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Find the probability a gate circuit outputs 1/0 for uniformly random inputs",
      "ids": [
        "csd-end-term-aug-2025-an-q8",
        "csd-end-term-aug-2025-fn-q8",
        "csd-quiz-1-oct-2025-an-q7"
      ]
    },
    {
      "title": "True/false: one's complement of a 4-bit number",
      "ids": [
        "csd-end-term-aug-2025-an-q1",
        "csd-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "True/false: synchronous vs asynchronous counter clocking",
      "ids": [
        "csd-end-term-aug-2025-an-q2",
        "csd-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "True/false: number of flip-flops needed for 64 states",
      "ids": [
        "csd-end-term-aug-2025-an-q3",
        "csd-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "True/false: exactly one decoder output is high",
      "ids": [
        "csd-end-term-aug-2025-an-q4",
        "csd-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "True/false: transistor count growth under Moore's law",
      "ids": [
        "csd-end-term-aug-2025-an-q5",
        "csd-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "Derive the D flip-flop input logic from a next-state truth table",
      "ids": [
        "csd-end-term-aug-2025-an-q6",
        "csd-end-term-aug-2025-fn-q6"
      ]
    },
    {
      "title": "Minimum gates for a 1-bit equality comparator using NOR/NAND only",
      "ids": [
        "csd-end-term-aug-2025-an-q9",
        "csd-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Count minterms when output is 1 for exactly two of four inputs",
      "ids": [
        "csd-end-term-aug-2025-an-q11",
        "csd-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Count reachable states of a D flip-flop circuit with an XNOR gate",
      "ids": [
        "csd-end-term-aug-2025-an-q12",
        "csd-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "State of a mod-12 up counter after 25 clock pulses",
      "ids": [
        "csd-end-term-aug-2025-an-q13",
        "csd-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "Number of unique states of an n-bit Johnson counter",
      "ids": [
        "csd-end-term-aug-2025-an-q15",
        "csd-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "Write the hex control word for a register transfer on a common bus",
      "ids": [
        "csd-end-term-aug-2025-an-q16",
        "csd-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Minimum instruction bits for a 3-register ALU operation",
      "ids": [
        "csd-end-term-aug-2025-an-q17",
        "csd-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Maximum number of registers from a control word's register field",
      "ids": [
        "csd-end-term-aug-2025-an-q18",
        "csd-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "Encode a MOV instruction into hexadecimal machine code",
      "ids": [
        "csd-end-term-aug-2025-an-q19",
        "csd-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "title": "Compute A - B in 8-bit 2's complement",
      "ids": [
        "csd-end-term-aug-2025-an-q20",
        "csd-end-term-aug-2025-fn-q20"
      ]
    }
  ]
};
