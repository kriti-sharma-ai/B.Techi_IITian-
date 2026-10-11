import type { QualifierMock } from "../../types";

// Large Language Models: IIT Madras BS End Term papers (2 papers, 34 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const llmEndTermPapers: QualifierMock[] = [
  {
    slug: "llm-end-term-aug-2025-fn",
    title: "LLM End Term · 31 Aug 2025 (FN)",
    description: "End Term paper from the May 2025 term, forenoon session on 31 Aug 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-08-31",
      session: "FN",
      term: "May 2025"
    },
    sections: [
      {
        subjectSlug: "large-language-models",
        title: "Large Language Models",
        short: "LLM",
        questions: [
          {
            id: "llm-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-fn/q1-1.webp#575x446)",
            options: [
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q1-opt1-1.webp#111x33)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q1-opt2-1.webp#130x31)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q1-opt3-1.webp#125x24)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q1-opt4-1.webp#142x25)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-fn/q2-1.webp#575x302)",
            options: [
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q2-opt1-1.webp#252x102)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q2-opt2-1.webp#265x94)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q2-opt3-1.webp#257x96)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q2-opt4-1.webp#261x99)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q3",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statements about subword tokenizers (e.g., Byte Pair Encoding, SentencePiece) is true?",
            options: [
              "They always split words into individual characters.",
              "They help handle rare words by breaking them into smaller units.",
              "They require the vocabulary to contain every possible word in the language.",
              "They can reduce the overall vocabulary size compared to word-level tokenizers."
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q4",
            type: "multi",
            marks: 3,
            prompt: "A GPT-based model is fine-tuned for story generation. During evaluation, you test different decoding strategies on the same prompt:\n1. Method A: Every run produces the exact same story, even when executed multiple times. 2. Method B: The story changes slightly in each run, but overall structure and key events remain similar.\n3. Method C: The story is wildly different each time, sometimes even changing the genre. Based on the observations, select the most likely decoding strategies for each method:",
            options: [
              "Method A: Greedy decoding",
              "Method A: Top-K sampling with K = 50",
              "Method B: Top-P sampling with p = 0.9",
              "Method C: Top-P sampling with p = 0.5 and high temperature T = 1.5",
              "Method C: Beam search with K = 5"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q5",
            type: "multi",
            marks: 3,
            prompt: "Which of the following are valid design choices when building a transformer-based language model?",
            options: [
              "Number of transformer layers",
              "Learning rate schedule",
              "Font style of the source code",
              "Vocabulary size",
              "Type of normalization (e.g., LayerNorm)"
            ],
            answer: [
              0,
              1,
              3,
              4
            ],
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q6",
            type: "multi",
            marks: 3,
            prompt: "Which of the following statements about Top-k and Nucleus (Top-p) sampling are correct?",
            options: [
              "Top-k keeps only the k most probable tokens before sampling.",
              "Top-p dynamically chooses the smallest set of tokens whose cumulative probability exceeds p.",
              "Top-k is always a subset of Top-p.",
              "Top-p always has a fixed number of candidate tokens."
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q7",
            type: "multi",
            marks: 3,
            prompt: "Which of the following preprocessing steps are commonly required when preparing data for transformer models like BERT?",
            options: [
              "Lowercasing text (for uncased models)",
              "Splitting into subword units using BPE or WordPiece",
              "Removing all punctuation marks",
              "Adding position indices for each token"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q8",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-fn/q8-1.webp#575x281)",
            answer: 0.41,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.38 to 0.44."
          },
          {
            id: "llm-end-term-aug-2025-fn-q9",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-fn/q9-passage-1.webp#575x559)",
            prompt: "For the input “you enjoy tea often”, compute the final representation of the word “tea” after the attention layer (i.e., after applying W_Q, W_K, W_V , attention weights, and W_O). Enter the sum of the elements in the resulting vector.",
            answer: 1.02,
            tolerance: 0.04,
            explanation: "Official answer key accepts any value from 0.98 to 1.06."
          },
          {
            id: "llm-end-term-aug-2025-fn-q10",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-fn/q9-passage-1.webp#575x559)",
            prompt: "Suppose the input sentence is “tea you enjoy often”. Using the same matrices and processing method, what is the attention score (i.e., softmax entry from A) for the query word “tea” attending to key word “often”?",
            answer: 0.07,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.04 to 0.1."
          },
          {
            id: "llm-end-term-aug-2025-fn-q11",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-fn/q11-passage-1.webp#575x842)",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-fn/q11-1.webp#291x63)",
            options: [
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q11-opt1-1.webp#135x26)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q11-opt2-1.webp#163x24)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q11-opt3-1.webp#132x26)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q11-opt4-1.webp#107x34)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q12",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-fn/q11-passage-1.webp#575x842)",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-fn/q12-1.webp#270x62)",
            answer: 120,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q13",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-fn/q11-passage-1.webp#575x842)",
            prompt: "What percentage of entries in the attention matrix are zero (i.e., the sparsity)?",
            answer: 80,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q14",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-fn/q14-passage-1.webp#575x692)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-fn/q14-1.webp#345x82)",
            options: [
              "(0, 1, 2, 3, 4)",
              "(-1, 0, 1, 2, 3)",
              "(-2, -1, 0, 1, 2)",
              "(-3, -2, -1, 0, 1)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q15",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-fn/q14-passage-1.webp#575x692)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-fn/q15-1.webp#274x84)",
            options: [
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q15-opt1-1.webp#193x25)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q15-opt2-1.webp#232x25)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q15-opt3-1.webp#218x27)",
              "![Figure](/pyq/llm-end-term-aug-2025-fn/q15-opt4-1.webp#244x27)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q16",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-fn/q14-passage-1.webp#575x692)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-fn/q16-1.webp#326x305)",
            answer: 10,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-fn-q17",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-fn/q14-passage-1.webp#575x692)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-fn/q17-1.webp#351x175)",
            answer: 21.65,
            tolerance: 0.35,
            explanation: "Official answer key accepts any value from 21.3 to 22."
          }
        ]
      }
    ]
  },
  {
    slug: "llm-end-term-aug-2025-an",
    title: "LLM End Term · 31 Aug 2025 (AN)",
    description: "End Term paper from the May 2025 term, afternoon session on 31 Aug 2025, with the official answer key.",
    difficulty: "Standard",
    durationMin: 90,
    endTerm: {
      date: "2025-08-31",
      session: "AN",
      term: "May 2025"
    },
    sections: [
      {
        subjectSlug: "large-language-models",
        title: "Large Language Models",
        short: "LLM",
        questions: [
          {
            id: "llm-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 3,
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-an/q1-1.webp#575x451)",
            options: [
              "![Figure](/pyq/llm-end-term-aug-2025-an/q1-opt1-1.webp#92x20)",
              "![Figure](/pyq/llm-end-term-aug-2025-an/q1-opt2-1.webp#111x23)",
              "![Figure](/pyq/llm-end-term-aug-2025-an/q1-opt3-1.webp#112x21)",
              "![Figure](/pyq/llm-end-term-aug-2025-an/q1-opt4-1.webp#130x21)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 2,
            prompt: "A GPT model is trained using causal language modeling. During training, for a sequence of T = 4 tokens, which of the following correctly represents the attention mask matrix applied to the attention logits?",
            options: [
              "![Figure](/pyq/llm-end-term-aug-2025-an/q2-opt1-1.webp#172x94)",
              "![Figure](/pyq/llm-end-term-aug-2025-an/q2-opt2-1.webp#130x93)",
              "![Figure](/pyq/llm-end-term-aug-2025-an/q2-opt3-1.webp#98x91)",
              "![Figure](/pyq/llm-end-term-aug-2025-an/q2-opt4-1.webp#97x93)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-an/q3-1.webp#575x290)",
            options: [
              "(a) : Random Local Attention,\n(b) : Strided Local Attention,\n(c) : Sparse Block Attention,\n(d) : Local + Global Attention",
              "(a) : Strided Local Attention,\n(b) : Local + Global Attention,\n(c) : Random Local Attention,\n(d) : Sparse Block Attention",
              "(a) : Strided Local Attention,\n(b) : Random Local Attention,\n(c) : Local + Global Attention,\n(d) : Sparse Block Attention",
              "(a) : Sparse Block Attention,\n(b) : Local + Global Attention,\n(c) : Strided Local Attention,\n(d) : Random Local Attention"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q4",
            type: "multi",
            marks: 3,
            prompt: "Which of the following preprocessing steps are commonly used when preparing data for transformer models like BERT?",
            options: [
              "Adding special tokens such as [CLS] and [SEP] to the sequence",
              "Splitting tokens into subword units using a model-specific tokenizer",
              "Removing all punctuation marks to ensure cleaner embeddings",
              "Adding positional information to each token embedding"
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q5",
            type: "multi",
            marks: 3,
            prompt: "Which modifications are used in transformers to handle longer sequences efficiently?",
            options: [
              "Using sparse attention patterns to reduce computational complexity",
              "Applying low-rank matrix factorization to approximate attention",
              "Increasing only the feed-forward network width without modifying attention",
              "Replacing the softmax function in attention with other activation function for faster training"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q6",
            type: "multi",
            marks: 3,
            prompt: "In Transformer models that use relative position embeddings (such as in Transformer-XL or T5), clipping is often applied to the relative position indices. Which of the following statements about clipping in relative position embeddings are correct?",
            options: [
              "Clipping ensures that very large relative distances are mapped to a fixed maximum distance.",
              "Without clipping, the model would require embeddings for every possible relative distance, which is infeasible for long sequences.",
              "Clipping increases the precision of embeddings for large relative distances.",
              "Clipping introduces an upper bound k such that all distances greater than k are mapped to the same index."
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q7",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-an/q7-1.webp#575x109)",
            answer: 6,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q8",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-an/q8-passage-1.webp#575x574)",
            prompt: "For the input “you enjoy tea often”, compute the final representation of the word “enjoy” after the attention layer (i.e., after applying W_Q, W_K, W_V , attention weights, and W_O). Enter the sum of the elements in the resulting vector.",
            answer: 0.96,
            tolerance: 0.04,
            explanation: "Official answer key accepts any value from 0.92 to 1."
          },
          {
            id: "llm-end-term-aug-2025-an-q9",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-an/q8-passage-1.webp#575x574)",
            prompt: "Suppose the input sentence is “tea you enjoy often”. Using the same matrices and processing method, what is the attention score (i.e., softmax entry from A) for the query word “tea” attending to key word “often”?",
            answer: 0.07,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.04 to 0.1."
          },
          {
            id: "llm-end-term-aug-2025-an-q10",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-an/q10-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Choose the correct representation of π for the given mask image.",
            options: [
              "π = (2, 1, 3, 4, 0)",
              "π = (0, 4, 3, 1, 2)",
              "π = (0, 3, 4, 2, 1)",
              "All of these"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q11",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-an/q10-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "How many permutations of π are possible for n = 5?",
            answer: 120,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q12",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-an/q10-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "What percentage of entries in the attention matrix are zero (i.e., the sparsity)?",
            answer: 80,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q13",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-an/q13-passage-1.webp#575x629)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-an/q13-1.webp#316x73)",
            options: [
              "(0, 1, 2, 3, 4, 5)",
              "(-1, 0, 1, 2, 3, 4)",
              "(-3, -2, -1, 0, 1, 2)",
              "(-2, -1, 0, 1, 2, 3)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q14",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-an/q13-passage-1.webp#575x629)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-an/q14-1.webp#315x52)",
            options: [
              "[−0.4,−0.4,−0.4,−0.4]",
              "[−0.1,−0.1,−0.1,−0.1]",
              "[−0.8,−0.8,−0.8,−0.8]",
              "[−0.2,−0.2,−0.2,−0.2]"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q15",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-an/q13-passage-1.webp#575x629)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-an/q15-1.webp#325x250)",
            answer: 15.2,
            explanation: ""
          },
          {
            id: "llm-end-term-aug-2025-an-q16",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-an/q13-passage-1.webp#575x629)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-an/q16-1.webp#319x175)",
            answer: 24,
            tolerance: 0.3,
            explanation: "Official answer key accepts any value from 23.7 to 24.3."
          },
          {
            id: "llm-end-term-aug-2025-an-q17",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/llm-end-term-aug-2025-an/q13-passage-1.webp#575x629)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/llm-end-term-aug-2025-an/q17-1.webp#314x395)",
            answer: 39,
            explanation: ""
          }
        ]
      }
    ]
  }
];
