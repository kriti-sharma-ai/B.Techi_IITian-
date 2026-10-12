import type { PyqTopicTags } from "../../types";

// 71 past-paper questions in 6 topics, 15 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const largeLanguageModelsTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "transformer-self-attention",
      "title": "Transformer & self-attention",
      "summary": "Scaled dot-product attention by hand, causal masks, heads, normalisation and parameter/memory counts",
      "ids": [
        "llm-end-term-aug-2025-an-q2",
        "llm-end-term-aug-2025-an-q8",
        "llm-end-term-aug-2025-an-q9",
        "llm-end-term-aug-2025-fn-q9",
        "llm-end-term-aug-2025-fn-q10",
        "llm-quiz-1-oct-2025-an-q1",
        "llm-quiz-1-oct-2025-an-q4",
        "llm-quiz-1-oct-2025-an-q7",
        "llm-quiz-1-oct-2025-an-q11",
        "llm-quiz-1-oct-2025-an-q12",
        "llm-quiz-1-oct-2025-an-q14",
        "llm-quiz-1-oct-2025-an-q15",
        "llm-quiz-1-oct-2025-an-q16",
        "llm-quiz-1-oct-2025-an-q17",
        "llm-quiz-1-oct-2025-an-q18",
        "llm-quiz-1-oct-2025-an-q19"
      ]
    },
    {
      "slug": "decoding-strategies",
      "title": "Decoding strategies & teacher forcing",
      "summary": "Greedy, beam, exhaustive, top-k/top-p and temperature sampling; teacher forcing in training",
      "ids": [
        "llm-end-term-aug-2025-an-q7",
        "llm-end-term-aug-2025-fn-q4",
        "llm-end-term-aug-2025-fn-q6",
        "llm-end-term-aug-2025-fn-q8",
        "llm-quiz-1-oct-2025-an-q3",
        "llm-quiz-1-oct-2025-an-q5",
        "llm-quiz-1-oct-2025-an-q6",
        "llm-quiz-1-oct-2025-an-q8",
        "llm-quiz-1-oct-2025-an-q9",
        "llm-quiz-1-oct-2025-an-q10",
        "llm-quiz-1-oct-2025-an-q13",
        "llm-quiz-1-oct-2025-an-q20"
      ]
    },
    {
      "slug": "tokenization",
      "title": "Tokenization: BPE, WordPiece & more",
      "summary": "BPE merges and vocab counts, WordPiece scores, Viterbi SentencePiece and subword motivation",
      "ids": [
        "llm-quiz-2-aug-2025-an-q1",
        "llm-quiz-2-aug-2025-an-q3",
        "llm-quiz-2-aug-2025-an-q6",
        "llm-quiz-2-aug-2025-an-q9",
        "llm-quiz-2-aug-2025-an-q13",
        "llm-quiz-2-aug-2025-an-q14",
        "llm-quiz-2-aug-2025-an-q15",
        "llm-quiz-2-aug-2025-an-q16",
        "llm-quiz-2-aug-2025-an-q17",
        "llm-end-term-aug-2025-an-q1",
        "llm-end-term-aug-2025-fn-q1",
        "llm-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "slug": "pretraining-scaling",
      "title": "Pretraining, T5, data & scaling laws",
      "summary": "Pretraining objectives, T5 span corruption, data filtering, task mixing and scaling laws",
      "ids": [
        "llm-quiz-2-aug-2025-an-q2",
        "llm-quiz-2-aug-2025-an-q4",
        "llm-quiz-2-aug-2025-an-q5",
        "llm-quiz-2-aug-2025-an-q7",
        "llm-quiz-2-aug-2025-an-q8",
        "llm-quiz-2-aug-2025-an-q10",
        "llm-quiz-2-aug-2025-an-q11",
        "llm-quiz-2-aug-2025-an-q12",
        "llm-end-term-aug-2025-an-q4",
        "llm-end-term-aug-2025-fn-q5",
        "llm-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "slug": "efficient-attention",
      "title": "Efficient & sparse attention",
      "summary": "Sparse/local/global attention masks, block attention permutations and attention sparsity",
      "ids": [
        "llm-end-term-aug-2025-an-q3",
        "llm-end-term-aug-2025-an-q5",
        "llm-end-term-aug-2025-an-q10",
        "llm-end-term-aug-2025-an-q11",
        "llm-end-term-aug-2025-an-q12",
        "llm-end-term-aug-2025-fn-q2",
        "llm-end-term-aug-2025-fn-q11",
        "llm-end-term-aug-2025-fn-q12",
        "llm-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "slug": "positional-encodings",
      "title": "Positional encodings: relative & ALiBi",
      "summary": "Sinusoidal encoding, relative positions and clipping, naive relative embeddings and ALiBi biases",
      "ids": [
        "llm-end-term-aug-2025-an-q6",
        "llm-end-term-aug-2025-an-q13",
        "llm-end-term-aug-2025-an-q14",
        "llm-end-term-aug-2025-an-q15",
        "llm-end-term-aug-2025-an-q16",
        "llm-end-term-aug-2025-an-q17",
        "llm-end-term-aug-2025-fn-q14",
        "llm-end-term-aug-2025-fn-q15",
        "llm-end-term-aug-2025-fn-q16",
        "llm-end-term-aug-2025-fn-q17",
        "llm-quiz-1-oct-2025-an-q2"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Find the most probable tokenization with Viterbi (SentencePiece)",
      "ids": [
        "llm-quiz-2-aug-2025-an-q6",
        "llm-end-term-aug-2025-an-q1",
        "llm-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "Why subword tokenizers handle rare/OOV words better",
      "ids": [
        "llm-quiz-2-aug-2025-an-q1",
        "llm-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Apply the causal look-ahead mask to attention scores",
      "ids": [
        "llm-end-term-aug-2025-an-q2",
        "llm-quiz-1-oct-2025-an-q4"
      ]
    },
    {
      "title": "Match attention mask images to sparse attention variants",
      "ids": [
        "llm-end-term-aug-2025-an-q3",
        "llm-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Pick common preprocessing steps for BERT-style models",
      "ids": [
        "llm-end-term-aug-2025-an-q4",
        "llm-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "title": "Compute a word's attention output (sum of elements) from given matrices",
      "ids": [
        "llm-end-term-aug-2025-an-q8",
        "llm-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Find an attention score after reordering the input sentence",
      "ids": [
        "llm-end-term-aug-2025-an-q9",
        "llm-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Read the block permutation pi from a block attention mask",
      "ids": [
        "llm-end-term-aug-2025-an-q10",
        "llm-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Count permutations of pi for n blocks",
      "ids": [
        "llm-end-term-aug-2025-an-q11",
        "llm-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "Compute the sparsity percentage of a block attention matrix",
      "ids": [
        "llm-end-term-aug-2025-an-q12",
        "llm-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "List relative positions j - i for a token",
      "ids": [
        "llm-end-term-aug-2025-an-q13",
        "llm-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Find the naive relative position embedding p(j-i) for a token pair",
      "ids": [
        "llm-end-term-aug-2025-an-q14",
        "llm-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "Compute the combined embedding h_i with naive relative positions",
      "ids": [
        "llm-end-term-aug-2025-an-q15",
        "llm-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Compute the pre-attention score e_ij with relative position embeddings",
      "ids": [
        "llm-end-term-aug-2025-an-q16",
        "llm-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Identify which decoding strategies are deterministic or random",
      "ids": [
        "llm-end-term-aug-2025-fn-q4",
        "llm-quiz-1-oct-2025-an-q10"
      ]
    }
  ]
};
