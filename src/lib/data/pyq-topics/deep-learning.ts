import type { PyqTopicTags } from "../../types";

// 103 past-paper questions in 9 topics, 19 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const deepLearningTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "mp-neuron-perceptron",
      "title": "MP neurons, perceptrons & towers",
      "summary": "MP neuron thresholds, perceptron learning and bias range, MLP power and sigmoid tower functions",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q7",
        "deep-learning-end-term-apr-2025-an-q8",
        "deep-learning-end-term-aug-2025-fn-q1",
        "deep-learning-end-term-aug-2025-fn-q3",
        "deep-learning-quiz-1-oct-2025-an-q1",
        "deep-learning-quiz-1-oct-2025-an-q3",
        "deep-learning-quiz-1-oct-2025-an-q7",
        "deep-learning-quiz-1-oct-2025-an-q13",
        "deep-learning-quiz-1-oct-2025-an-q14",
        "deep-learning-quiz-1-oct-2025-an-q15",
        "deep-learning-quiz-1-oct-2025-an-q16"
      ]
    },
    {
      "slug": "feedforward-networks",
      "title": "Feedforward networks & output layers",
      "summary": "Output activations and losses, forward pass with sigmoid/softmax, cross-entropy and weight gradients",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q1",
        "deep-learning-quiz-2-aug-2025-an-q11",
        "deep-learning-quiz-2-aug-2025-an-q12",
        "deep-learning-quiz-2-aug-2025-an-q13",
        "deep-learning-quiz-1-oct-2025-an-q6",
        "deep-learning-quiz-1-oct-2025-an-q9",
        "deep-learning-quiz-1-oct-2025-an-q10",
        "deep-learning-quiz-1-oct-2025-an-q11",
        "deep-learning-quiz-1-oct-2025-an-q12",
        "deep-learning-quiz-1-oct-2025-an-q17",
        "deep-learning-quiz-1-oct-2025-an-q18"
      ]
    },
    {
      "slug": "backpropagation",
      "title": "Backpropagation by hand",
      "summary": "Forward pass and chain-rule derivatives on small computation graphs",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q12",
        "deep-learning-end-term-apr-2025-an-q13",
        "deep-learning-end-term-apr-2025-an-q14",
        "deep-learning-end-term-apr-2025-an-q18",
        "deep-learning-end-term-apr-2025-an-q19",
        "deep-learning-end-term-apr-2025-an-q20",
        "deep-learning-end-term-aug-2025-an-q14",
        "deep-learning-end-term-aug-2025-an-q15",
        "deep-learning-end-term-aug-2025-an-q16",
        "deep-learning-end-term-aug-2025-an-q17",
        "deep-learning-end-term-aug-2025-an-q18",
        "deep-learning-end-term-aug-2025-an-q19",
        "deep-learning-end-term-aug-2025-fn-q14",
        "deep-learning-end-term-aug-2025-fn-q15",
        "deep-learning-end-term-aug-2025-fn-q16",
        "deep-learning-end-term-aug-2025-fn-q17",
        "deep-learning-end-term-aug-2025-fn-q18",
        "deep-learning-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "slug": "gradient-descent-optimizers",
      "title": "Gradient descent & optimizers",
      "summary": "Learning rate effects, GD/SGD/mini-batch updates, momentum, adaptive optimizers and Taylor series",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q29",
        "deep-learning-end-term-apr-2025-an-q30",
        "deep-learning-end-term-apr-2025-an-q31",
        "deep-learning-quiz-2-aug-2025-an-q2",
        "deep-learning-end-term-aug-2025-an-q3",
        "deep-learning-end-term-aug-2025-fn-q4",
        "deep-learning-quiz-1-oct-2025-an-q2",
        "deep-learning-quiz-1-oct-2025-an-q4",
        "deep-learning-quiz-1-oct-2025-an-q5",
        "deep-learning-quiz-1-oct-2025-an-q8"
      ]
    },
    {
      "slug": "regularization-generalization",
      "title": "Regularization & generalization",
      "summary": "Bias-variance curves, overfitting, L2 regularization, dropout, label noise, autoencoders, pretraining",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q3",
        "deep-learning-end-term-apr-2025-an-q4",
        "deep-learning-quiz-2-aug-2025-an-q1",
        "deep-learning-quiz-2-aug-2025-an-q3",
        "deep-learning-quiz-2-aug-2025-an-q4",
        "deep-learning-quiz-2-aug-2025-an-q8",
        "deep-learning-quiz-2-aug-2025-an-q9",
        "deep-learning-quiz-2-aug-2025-an-q10",
        "deep-learning-end-term-aug-2025-an-q1",
        "deep-learning-end-term-aug-2025-an-q2",
        "deep-learning-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "slug": "cnn",
      "title": "Convolutional neural networks",
      "summary": "Conv output size, padding, parameter counts, pooling and gradients through a conv layer",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q6",
        "deep-learning-end-term-apr-2025-an-q23",
        "deep-learning-end-term-apr-2025-an-q24",
        "deep-learning-end-term-apr-2025-an-q25",
        "deep-learning-quiz-2-aug-2025-an-q5",
        "deep-learning-quiz-2-aug-2025-an-q6",
        "deep-learning-quiz-2-aug-2025-an-q7",
        "deep-learning-quiz-2-aug-2025-an-q14",
        "deep-learning-quiz-2-aug-2025-an-q15",
        "deep-learning-quiz-2-aug-2025-an-q16",
        "deep-learning-end-term-aug-2025-an-q4",
        "deep-learning-end-term-aug-2025-fn-q8",
        "deep-learning-end-term-aug-2025-fn-q9",
        "deep-learning-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "slug": "word-embeddings",
      "title": "Word embeddings (word2vec/CBOW)",
      "summary": "Softmax probability of a word given context, greedy generation and embedding update steps",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q21",
        "deep-learning-end-term-apr-2025-an-q22",
        "deep-learning-end-term-aug-2025-an-q11",
        "deep-learning-end-term-aug-2025-an-q12",
        "deep-learning-end-term-aug-2025-an-q13",
        "deep-learning-end-term-aug-2025-fn-q11",
        "deep-learning-end-term-aug-2025-fn-q12",
        "deep-learning-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "slug": "rnn-seq2seq-attention",
      "title": "RNNs, encoder-decoder & attention",
      "summary": "RNN parameters and loss, encoder-decoder design, attention scores, weights and context vector",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q5",
        "deep-learning-end-term-apr-2025-an-q26",
        "deep-learning-end-term-apr-2025-an-q27",
        "deep-learning-end-term-apr-2025-an-q28",
        "deep-learning-end-term-aug-2025-an-q5",
        "deep-learning-end-term-aug-2025-an-q6",
        "deep-learning-end-term-aug-2025-an-q7"
      ]
    },
    {
      "slug": "transformers",
      "title": "Transformers & self-attention",
      "summary": "Q/K/V shapes, multi-head attention, masking, parameter counts and scaled dot-product attention",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q2",
        "deep-learning-end-term-apr-2025-an-q9",
        "deep-learning-end-term-apr-2025-an-q10",
        "deep-learning-end-term-apr-2025-an-q11",
        "deep-learning-end-term-apr-2025-an-q15",
        "deep-learning-end-term-apr-2025-an-q16",
        "deep-learning-end-term-apr-2025-an-q17",
        "deep-learning-end-term-aug-2025-an-q8",
        "deep-learning-end-term-aug-2025-an-q9",
        "deep-learning-end-term-aug-2025-an-q10",
        "deep-learning-end-term-aug-2025-fn-q5",
        "deep-learning-end-term-aug-2025-fn-q6",
        "deep-learning-end-term-aug-2025-fn-q7"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Choose the output activation/loss for a regression target",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q1",
        "deep-learning-quiz-1-oct-2025-an-q6"
      ]
    },
    {
      "title": "Find conv output size or padding with (W - F + 2P)/S + 1",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q6",
        "deep-learning-quiz-2-aug-2025-an-q5"
      ]
    },
    {
      "title": "Count the parameters of a convolution layer",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q23",
        "deep-learning-quiz-2-aug-2025-an-q6"
      ]
    },
    {
      "title": "Compute ŷ by a forward pass through a small network",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q12",
        "deep-learning-end-term-aug-2025-an-q16",
        "deep-learning-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Compute a weight derivative by the chain rule in a small network",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q13",
        "deep-learning-end-term-aug-2025-an-q17",
        "deep-learning-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Compute intermediate value s1 in the forward pass",
      "ids": [
        "deep-learning-end-term-aug-2025-an-q14",
        "deep-learning-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Compute intermediate value s2 in the forward pass",
      "ids": [
        "deep-learning-end-term-aug-2025-an-q15",
        "deep-learning-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "Evaluate f(1) for the given weights w1 = 1, w2 = -5",
      "ids": [
        "deep-learning-end-term-aug-2025-an-q18",
        "deep-learning-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "Evaluate ∂f/∂w1 at given weights and input",
      "ids": [
        "deep-learning-end-term-aug-2025-an-q19",
        "deep-learning-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "title": "Match loss plots to small, good and too-large learning rates",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q29",
        "deep-learning-quiz-1-oct-2025-an-q2"
      ]
    },
    {
      "title": "Judge two statements on training loss, optimization and regularization",
      "ids": [
        "deep-learning-end-term-aug-2025-an-q1",
        "deep-learning-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Compute the cross-entropy loss for a given prediction",
      "ids": [
        "deep-learning-quiz-2-aug-2025-an-q4",
        "deep-learning-quiz-1-oct-2025-an-q10"
      ]
    },
    {
      "title": "Find the conv + ReLU output for a toy image and kernel",
      "ids": [
        "deep-learning-quiz-2-aug-2025-an-q14",
        "deep-learning-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Find ŷ after conv and pooling in a toy CNN",
      "ids": [
        "deep-learning-quiz-2-aug-2025-an-q15",
        "deep-learning-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "title": "Find the gradient of the loss w.r.t. one kernel element through conv + pooling",
      "ids": [
        "deep-learning-quiz-2-aug-2025-an-q16",
        "deep-learning-end-term-aug-2025-an-q4",
        "deep-learning-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Compute P(word | context) with softmax over word and context embeddings",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q21",
        "deep-learning-end-term-aug-2025-an-q11",
        "deep-learning-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Do one gradient descent update of a word embedding",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q22",
        "deep-learning-end-term-aug-2025-an-q13",
        "deep-learning-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "Generate a 3-word sentence greedily with a CBOW model",
      "ids": [
        "deep-learning-end-term-aug-2025-an-q12",
        "deep-learning-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "Find the shape of an attention matrix inside one head",
      "ids": [
        "deep-learning-end-term-apr-2025-an-q10",
        "deep-learning-end-term-aug-2025-an-q8"
      ]
    }
  ]
};
