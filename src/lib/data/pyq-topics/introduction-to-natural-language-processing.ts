import type { PyqTopicTags } from "../../types";

// 25 past-paper questions in 6 topics, 0 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const introductionToNaturalLanguageProcessingTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "text-processing-pos-parsing",
      "title": "POS tagging, parsing & TF-IDF",
      "summary": "POS tagging probabilities and metrics, pragmatic ambiguity, transition-based parsing and TF-IDF scores",
      "ids": [
        "inlp-end-term-apr-2025-an-q1",
        "inlp-end-term-apr-2025-an-q2",
        "inlp-end-term-apr-2025-an-q11",
        "inlp-end-term-apr-2025-an-q20",
        "inlp-end-term-apr-2025-an-q21"
      ]
    },
    {
      "slug": "sequence-models-decoding",
      "title": "Sequence models & decoding",
      "summary": "LSTMs vs RNNs, teacher forcing, beam search, temperature sampling and speculative decoding",
      "ids": [
        "inlp-end-term-apr-2025-an-q8",
        "inlp-end-term-apr-2025-an-q14",
        "inlp-end-term-apr-2025-an-q15",
        "inlp-end-term-apr-2025-an-q22",
        "inlp-end-term-apr-2025-an-q9",
        "inlp-end-term-apr-2025-an-q19"
      ]
    },
    {
      "slug": "transformers-and-fine-tuning",
      "title": "Transformers & LLM fine-tuning",
      "summary": "BERT vs GPT, few-shot prompting, instruction tuning, RLHF, LoRA and QLoRA",
      "ids": [
        "inlp-end-term-apr-2025-an-q12",
        "inlp-end-term-apr-2025-an-q5",
        "inlp-end-term-apr-2025-an-q13"
      ]
    },
    {
      "slug": "retrieval-augmented-generation",
      "title": "Retrieval-augmented generation",
      "summary": "How RAG differs from parametric LLMs, its components, generator choice and context budgeting",
      "ids": [
        "inlp-end-term-apr-2025-an-q3",
        "inlp-end-term-apr-2025-an-q4",
        "inlp-end-term-apr-2025-an-q16",
        "inlp-end-term-apr-2025-an-q23"
      ]
    },
    {
      "slug": "interpretability",
      "title": "Model interpretability",
      "summary": "Attention flow and rollout, integrated gradients and Shapley values for feature attribution",
      "ids": [
        "inlp-end-term-apr-2025-an-q6",
        "inlp-end-term-apr-2025-an-q10",
        "inlp-end-term-apr-2025-an-q24",
        "inlp-end-term-apr-2025-an-q25"
      ]
    },
    {
      "slug": "ethics-and-bias",
      "title": "Ethics & bias in NLP",
      "summary": "Ethical concerns in LLM deployment, unintended bias and bias amplification",
      "ids": [
        "inlp-end-term-apr-2025-an-q7",
        "inlp-end-term-apr-2025-an-q17",
        "inlp-end-term-apr-2025-an-q18"
      ]
    }
  ],
  "repeats": []
};
