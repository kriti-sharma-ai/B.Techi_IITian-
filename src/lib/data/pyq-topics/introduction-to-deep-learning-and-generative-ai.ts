import type { PyqTopicTags } from "../../types";

// 20 past-paper questions in 4 topics, 0 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const introductionToDeepLearningAndGenerativeAiTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "pytorch-tensors",
      "title": "PyTorch tensors",
      "summary": "Indexing, stacking, squeezing and permuting tensor dimensions",
      "ids": [
        "dl-genai-quiz-1-oct-2025-an-q1",
        "dl-genai-quiz-1-oct-2025-an-q2",
        "dl-genai-quiz-1-oct-2025-an-q3",
        "dl-genai-quiz-1-oct-2025-an-q6"
      ]
    },
    {
      "slug": "pytorch-training-workflow",
      "title": "PyTorch training workflow",
      "summary": "Moving data to the GPU, torch.no_grad, and train vs eval mode with dropout and batch norm",
      "ids": [
        "dl-genai-quiz-1-oct-2025-an-q4",
        "dl-genai-quiz-1-oct-2025-an-q5",
        "dl-genai-quiz-1-oct-2025-an-q8"
      ]
    },
    {
      "slug": "neural-networks-gradients",
      "title": "Neural networks & gradient descent",
      "summary": "Forward pass equations, sigmoid outputs, gradients of the loss and gradient descent updates",
      "ids": [
        "dl-genai-quiz-1-oct-2025-an-q9",
        "dl-genai-quiz-1-oct-2025-an-q10",
        "dl-genai-quiz-1-oct-2025-an-q11",
        "dl-genai-quiz-1-oct-2025-an-q12",
        "dl-genai-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "slug": "parameters-cnns-inception",
      "title": "Parameter counts, CNNs & Inception",
      "summary": "Counting trainable parameters in dense and conv layers, padding and Inception output channels",
      "ids": [
        "dl-genai-quiz-1-oct-2025-an-q7",
        "dl-genai-quiz-1-oct-2025-an-q14",
        "dl-genai-quiz-1-oct-2025-an-q15",
        "dl-genai-quiz-1-oct-2025-an-q16",
        "dl-genai-quiz-1-oct-2025-an-q17",
        "dl-genai-quiz-1-oct-2025-an-q18",
        "dl-genai-quiz-1-oct-2025-an-q19",
        "dl-genai-quiz-1-oct-2025-an-q20"
      ]
    }
  ],
  "repeats": []
};
