import type { PyqTopicTags } from "../../types";

// 18 past-paper questions in 4 topics, 0 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const computerNetworksTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "network-basics",
      "title": "Network basics & components",
      "summary": "Hosts, MAC addresses, buffers in packet switching and critical nodes in a graph",
      "ids": [
        "computer-networks-quiz-1-oct-2025-an-q1",
        "computer-networks-quiz-1-oct-2025-an-q2",
        "computer-networks-quiz-1-oct-2025-an-q3",
        "computer-networks-quiz-1-oct-2025-an-q9"
      ]
    },
    {
      "slug": "delay-throughput",
      "title": "Delay, throughput & Little's law",
      "summary": "Compute transmission and propagation delay, link length, throughput and requests in system",
      "ids": [
        "computer-networks-quiz-1-oct-2025-an-q6",
        "computer-networks-quiz-1-oct-2025-an-q10",
        "computer-networks-quiz-1-oct-2025-an-q11",
        "computer-networks-quiz-1-oct-2025-an-q12",
        "computer-networks-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "slug": "sockets-checksum-stop-and-wait",
      "title": "Sockets, UDP checksum & Stop-and-Wait",
      "summary": "Socket identity, one's complement UDP checksum and Stop-and-Wait utilization and data rate",
      "ids": [
        "computer-networks-quiz-1-oct-2025-an-q4",
        "computer-networks-quiz-1-oct-2025-an-q7",
        "computer-networks-quiz-1-oct-2025-an-q8",
        "computer-networks-quiz-1-oct-2025-an-q17"
      ]
    },
    {
      "slug": "sliding-window-arq",
      "title": "Sliding window: Go-Back-N & SR",
      "summary": "Retransmissions in GBN and Selective Repeat, sequence number space and window from BDP",
      "ids": [
        "computer-networks-quiz-1-oct-2025-an-q5",
        "computer-networks-quiz-1-oct-2025-an-q14",
        "computer-networks-quiz-1-oct-2025-an-q15",
        "computer-networks-quiz-1-oct-2025-an-q16",
        "computer-networks-quiz-1-oct-2025-an-q18"
      ]
    }
  ],
  "repeats": []
};
