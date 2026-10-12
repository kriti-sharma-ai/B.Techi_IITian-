import type { PyqTopicTags } from "../../types";

// 16 past-paper questions in 4 topics, 0 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const reinforcementLearningTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "multi-armed-bandits",
      "title": "Multi-armed bandits",
      "summary": "PAC arms, UCB arm choice, lower vs upper bounds and best strategy with hidden cases",
      "ids": [
        "rl-quiz-1-oct-2025-an-q1",
        "rl-quiz-1-oct-2025-an-q2",
        "rl-quiz-1-oct-2025-an-q4",
        "rl-quiz-1-oct-2025-an-q8",
        "rl-quiz-1-oct-2025-an-q9"
      ]
    },
    {
      "slug": "contextual-bandits",
      "title": "Contextual bandits & LinUCB",
      "summary": "Why use contextual bandits, role of the context vector in LinUCB and the regret goal",
      "ids": [
        "rl-quiz-1-oct-2025-an-q10",
        "rl-quiz-1-oct-2025-an-q11",
        "rl-quiz-1-oct-2025-an-q12"
      ]
    },
    {
      "slug": "mdp-returns-bellman",
      "title": "MDPs, returns & Bellman equations",
      "summary": "Episodic vs continuing returns, discounted rewards and the Bellman optimality equation",
      "ids": [
        "rl-quiz-1-oct-2025-an-q13",
        "rl-quiz-1-oct-2025-an-q14",
        "rl-quiz-1-oct-2025-an-q15",
        "rl-quiz-1-oct-2025-an-q16"
      ]
    },
    {
      "slug": "policy-value-iteration",
      "title": "Policy evaluation, PI & VI",
      "summary": "Evaluate a policy on a small MDP, compare policy and value iteration cost and convergence",
      "ids": [
        "rl-quiz-1-oct-2025-an-q3",
        "rl-quiz-1-oct-2025-an-q5",
        "rl-quiz-1-oct-2025-an-q6",
        "rl-quiz-1-oct-2025-an-q7"
      ]
    }
  ],
  "repeats": []
};
