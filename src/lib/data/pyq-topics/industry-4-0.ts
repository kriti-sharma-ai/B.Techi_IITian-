import type { PyqTopicTags } from "../../types";

// 20 past-paper questions in 4 topics, 0 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const industry40Topics: PyqTopicTags = {
  "topics": [
    {
      "slug": "industrial-eras-sourcing",
      "title": "Industrial eras & global sourcing",
      "summary": "Landmarks of Industry 1.0 to 4.0, Industry 4.0 examples and spotting offshoring",
      "ids": [
        "industry-4-quiz-1-oct-2025-an-q1",
        "industry-4-quiz-1-oct-2025-an-q2",
        "industry-4-quiz-1-oct-2025-an-q10"
      ]
    },
    {
      "slug": "facility-layouts",
      "title": "Facility layout types",
      "summary": "Product, process, group and fixed-position layouts: pros, cons and when to use each",
      "ids": [
        "industry-4-quiz-1-oct-2025-an-q3",
        "industry-4-quiz-1-oct-2025-an-q4",
        "industry-4-quiz-1-oct-2025-an-q5",
        "industry-4-quiz-1-oct-2025-an-q6",
        "industry-4-quiz-1-oct-2025-an-q7",
        "industry-4-quiz-1-oct-2025-an-q20"
      ]
    },
    {
      "slug": "assembly-line-balancing",
      "title": "Assembly line balancing",
      "summary": "Cycle time, minimum workstations, balance delay and line efficiency",
      "ids": [
        "industry-4-quiz-1-oct-2025-an-q8",
        "industry-4-quiz-1-oct-2025-an-q11",
        "industry-4-quiz-1-oct-2025-an-q12",
        "industry-4-quiz-1-oct-2025-an-q13",
        "industry-4-quiz-1-oct-2025-an-q14",
        "industry-4-quiz-1-oct-2025-an-q15",
        "industry-4-quiz-1-oct-2025-an-q16",
        "industry-4-quiz-1-oct-2025-an-q17"
      ]
    },
    {
      "slug": "facility-location",
      "title": "Facility location",
      "summary": "Euclidean distance, cross-median method and Euclidean facility location properties",
      "ids": [
        "industry-4-quiz-1-oct-2025-an-q9",
        "industry-4-quiz-1-oct-2025-an-q18",
        "industry-4-quiz-1-oct-2025-an-q19"
      ]
    }
  ],
  "repeats": []
};
