import type { QualifierMock } from "../../types";

// Introduction to Natural Language Processing: IIT Madras BS End Term papers (1 papers, 25 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const inlpEndTermPapers: QualifierMock[] = [
  {
    slug: "inlp-end-term-apr-2025-an",
    title: "i-NLP End Term · 13 Apr 2025 (AN)",
    description: "End Term paper from the January 2025 term, afternoon session on 13 Apr 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-04-13",
      session: "AN",
      term: "January 2025"
    },
    sections: [
      {
        subjectSlug: "introduction-to-natural-language-processing",
        title: "Introduction to Natural Language Processing",
        short: "i-NLP",
        questions: [
          {
            id: "inlp-end-term-apr-2025-an-q1",
            type: "mcq",
            marks: 3,
            prompt: "Why might accuracy be a misleading metric for evaluating POS tagging systems in cases of class imbalance?",
            options: [
              "Because accuracy does not account for the number of true negatives.",
              "Because accuracy gives equal weight to all classes, even if some tags are much rarer than others.",
              "Because accuracy only measures the precision of the system, ignoring recall.",
              "Because accuracy is not affected by the number of false positives and false negatives."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q2",
            type: "mcq",
            marks: 3,
            prompt: "In stochastic POS tagging, why is it necessary to calculate both individual word probabilities and tag sequence probabilities?",
            options: [
              "Individual word probabilities are sufficient for accurate tagging, and tag sequence probabilities are redundant.",
              "Individual word probabilities are only used for rare words, while tag sequence probabilities are used for common words.",
              "Tag sequence probabilities help in determining the most likely sequence of tags, while individual word probabilities provide local context.",
              "Both probabilities are used to reduce the computational complexity of the tagging process."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q3",
            type: "mcq",
            marks: 3,
            prompt: "How does Retrieval-Augmented Generation (RAG) differ from standard parametric models like GPT-3?",
            options: [
              "RAG eliminates the need for transformer-based token generation.",
              "RAG uses retrieval but does not update its knowledge dynamically over time.",
              "RAG only works when trained on labeled question-answer datasets.",
              "RAG retrieves external documents dynamically, reducing reliance on pre- trained knowledge."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q4",
            type: "mcq",
            marks: 3,
            prompt: "Which of the following architectures is most commonly used as the generator in RAG models?",
            options: [
              "GPT-3",
              "BART",
              "BERT",
              "RoBERTa"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q5",
            type: "mcq",
            marks: 3,
            prompt: "A company wants to optimize an LLM for programming tasks. Which approach is the most efficient if they have limited labeled data?",
            options: [
              "Train a new model from scratch using a large programming dataset.",
              "Fine-tune a transformer model with instruction tuning.",
              "Use Few-shot prompting with an existing LLM.",
              "Apply a BERT-based model instead of transformers."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q6",
            type: "mcq",
            marks: 3,
            prompt: "Which of the following statements about Attention Flow in Transformer models is TRUE?",
            options: [
              "Attention flow computes the contribution of each token independently without considering other tokens.",
              "Attention flow assigns higher scores to tokens that appear earlier in the sequence by default.",
              "Attention flow combines attention scores across multiple layers to determine overall token influence.",
              "Attention flow values are always normalized across all tokens in the sequence to sum to 1."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q7",
            type: "mcq",
            marks: 3,
            prompt: "Which of the following scenarios represents an ethical concern with LLM deployment?",
            options: [
              "A summarization model shortening news articles while maintaining factual accuracy.",
              "A question-answering system providing different answers for different demographics when asked about salary negotiations.",
              "A chatbot refusing to generate offensive or harmful content.",
              "A translation model translating medical terms with higher accuracy than general terms."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q8",
            type: "mcq",
            marks: 4,
            prompt: "How does an LSTM differ from a standard RNN in terms of remembering information?",
            options: [
              "It uses a larger hidden state.",
              "It stores all past hidden states explicitly.",
              "It introduces gates to control the flow of information.",
              "It completely replaces hidden states with attention mechanisms."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q9",
            type: "mcq",
            marks: 5,
            prompt: "In the context of speculative decoding, a draft model predicts three tokens: \"a\", \"quick\", \"fox\". The main model assigns probabilities 0.8, 0.6, and 0.8 respectively.The draft model's probabilities for these words were 0.7, 0.9, and 0.9.\nWhich tokens are most likely to be accepted?",
            options: [
              "All three tokens",
              "Only \"a\" and \"fox\"",
              "Only \"a\"",
              "None of the tokens"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q10",
            type: "mcq",
            marks: 5,
            prompt: "Consider the following attention matrices for two layers (corresponding to tokens 1 and 2) in a transformer model:\nLayer 1 Attention Matrix:\n\n![Figure](/pyq/inlp-end-term-apr-2025-an/q10-1.webp#168x67)\n\nLayer 2 Attention Matrix:\n\n![Figure](/pyq/inlp-end-term-apr-2025-an/q10-2.webp#165x67)\n\nWhat is the total attention from token 2 to token 1 after performing attention rollout?",
            options: [
              "0.57",
              "0.33",
              "0.39",
              "0.26"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q11",
            type: "multi",
            marks: 6,
            prompt: "Which of the following sentences contain pragmatic ambiguity due to potential sarcasm or irony?",
            options: [
              "\"Wow, another Monday! Just what I needed.\"",
              "\"The meeting was only three hours long. So productive!\"",
              "\"I love spending hours in traffic. It’s my favorite part of the day.\"",
              "\"The weather is perfect for a picnic today.\"",
              "\"She always arrives on time, unlike some people.\""
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q12",
            type: "multi",
            marks: 4,
            prompt: "Which of the following statements correctly describe how BERT differs from GPT and standard transformer models?",
            options: [
              "BERT is a bidirectional model, while GPT is autoregressive.",
              "BERT uses masked language modeling (MLM), while GPT uses causal language modeling (CLM).",
              "Standard transformers use encoder-only architectures, whereas BERT and GPT both use decoder-only architectures.",
              "BERT is trained for sentence embeddings, while GPT is trained for next-token prediction."
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q13",
            type: "multi",
            marks: 4,
            prompt: "Which of the following statements is/are incorrect regarding Reinforcement Learning from Human Feedback (RLHF), Supervised Instruction Fine-Tuning, LoRA, and QLoRA?",
            options: [
              "RLHF helps improve model behavior by learning from human preference rankings.",
              "LoRA (Low-Rank Adaptation) reduces the number of trainable parameters by using low-rank matrices.",
              "Supervised Instruction Fine-Tuning involves reinforcement learning for generating human-like responses.",
              "QLoRA applies quantization to reduce memory consumption during fine- tuning."
            ],
            answer: [
              2
            ],
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q14",
            type: "multi",
            marks: 4,
            prompt: "During sequence-to-sequence model training, which of the following statements is/are correct regarding Teacher Forcing and Student Forcing?",
            options: [
              "Teacher Forcing is used during inference, while Student Forcing is used during training.",
              "Teacher Forcing provides the correct previous output as input during training, whereas Student Forcing generates outputs based on its own previous predictions.",
              "Student Forcing helps the model converge faster than Teacher Forcing.",
              "Teacher Forcing is mainly used in reinforcement learning settings."
            ],
            answer: [
              1
            ],
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q15",
            type: "multi",
            marks: 4,
            prompt: "Which of the following statements about beam search is/are incorrect ?",
            options: [
              "Beam search balances exploration and exploitation by considering multiple sequences at each step.",
              "A larger beam width increases computational cost but improves search quality.",
              "Greedy search is equivalent to beam search with beam size B = 1.",
              "Unlike greedy search, beam search guarantees finding the globally optimal sequence."
            ],
            answer: [
              3
            ],
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q16",
            type: "multi",
            marks: 4,
            prompt: "Which components are essential in a RAG pipeline?",
            options: [
              "retriever model (e.g., DPR) that fetches relevant documents.",
              "decoder-only transformer for sequence generation.",
              "BM25-based sparse retrieval method as the primary retriever.",
              "BERT-based query encoder for document ranking."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q17",
            type: "multi",
            marks: 4,
            prompt: "Which of the following are the examples of unintended bias in an NLP model?",
            options: [
              "A sentiment analysis model rating all political tweets as \"negative\".",
              "A chatbot trained specifically for medical consultations failing on legal queries.",
              "A text summarization model producing longer summaries for academic papers.",
              "A machine translation system translating \"doctor\" to \"he\" and \"nurse\" to \"she\" in a gender-neutral language."
            ],
            answer: [
              0,
              3
            ],
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q18",
            type: "multi",
            marks: 4,
            prompt: "Which of the following factors contribute to bias amplification in NLP models?",
            options: [
              "Reinforcement learning from biased human feedback.",
              "Training on unbalanced datasets where stereotypes exist.",
              "Applying debiasing techniques such as zeroing out gender-related word embeddings.",
              "Using a larger model size to improve performance."
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q19",
            type: "multi",
            marks: 5,
            prompt: "![Figure](/pyq/inlp-end-term-apr-2025-an/q19-1.webp#575x178)",
            options: [
              "The probability of \"apple\" increases further.",
              "The probabilities of \"banana\" and \"cherry\" become closer to \"apple\".",
              "The probabilities remain unchanged.",
              "The model always picks \"banana\".",
              "The model always picks \"cherry\"."
            ],
            answer: [
              0
            ],
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q20",
            type: "numerical",
            marks: 4,
            prompt: "In a transition-based parser using SHIFT, LEFTARC, and RIGHTARC operations, what is the minimum number of operations needed to parse the sentence \"I love coding\" (excluding the ROOT node)?",
            answer: 4,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q21",
            type: "numerical",
            marks: 4,
            prompt: "A TF-IDF model is applied to a document corpus of 50,000 documents. The term \"optimization\" appears in 750 documents. In a specific document, \"optimization\" appears 8 times, and the total number of words in that document is 1200. Using log base 10 ( log_(10)), compute the TF-IDF score for \"optimization\" in this document. Enter your answer correct to three decimal places.",
            answer: 0.015,
            tolerance: 0.005,
            explanation: "Official answer key accepts any value from 0.01 to 0.02."
          },
          {
            id: "inlp-end-term-apr-2025-an-q22",
            type: "numerical",
            marks: 4,
            prompt: "A beam search with beam width = 4 and vocabulary size = 8 is run for 3 decoding steps. How many sequences will remain at the end of 3 steps after pruning?",
            answer: 4,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q23",
            type: "numerical",
            marks: 4,
            prompt: "A transformer-based Retrieval-Augmented Generation (RAG) system retrieves the top-10 most relevant passages, where each passage contains 512 tokens. However, a portion of the model's 4096-token context length is reserved for the input query and special tokens (e.g., separators, instructions). If the model reserves 1024 tokens for the input query, how many full retrieved passages can fit within the remaining context window?",
            answer: 6,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q24",
            type: "numerical",
            marks: 4,
            prompt: "Consider the following regression model:\nF(x) = 500 * Age + 1000 * Income + 20000\nFor an input with:\nAge = 30\nIncome = 50\nBaseline Input:\nAge = 0\nIncome = 0\nWhat is the Integrated Gradient for the feature Income?",
            answer: 50000,
            explanation: ""
          },
          {
            id: "inlp-end-term-apr-2025-an-q25",
            type: "numerical",
            marks: 6,
            prompt: "![Figure](/pyq/inlp-end-term-apr-2025-an/q25-1.webp#575x459)",
            answer: 162.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 162 to 163."
          }
        ]
      }
    ]
  }
];
