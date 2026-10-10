import type { QualifierMock } from "../../types";

// Deep Learning: IIT Madras BS End Term papers (2 papers, 50 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const deepLearningEndTermPapers: QualifierMock[] = [
  {
    slug: "deep-learning-end-term-aug-2025-an",
    title: "Deep Learning End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "deep-learning",
        title: "Deep Learning",
        short: "Deep Learning",
        questions: [
          {
            id: "deep-learning-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 2,
            prompt: "Consider the following two statements regarding model performance:\nStatement 1: A model achieving zero training loss is guaranteed to perform well on unseen data. Statement 2: Incorporating a regularization term in the loss function may lead to higher training loss but lower generalization error.\nWhich of the following options is correct?",
            options: [
              "Both Statement 1 and Statement 2 are true.",
              "Statement 1 is true, but Statement 2 is false.",
              "None of these.",
              "Statement 1 is false, but Statement 2 is true."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 2,
            prompt: "How does unsupervised layerwise pretraining help in alleviating the vanishing gradient problem?",
            options: [
              "It allows the network to learn a better representation of the data in each layer, which leads to better- initialized weights for subsequent supervised training.",
              "It adds skip connections to the network, which are then removed before the supervised training.",
              "It replaces the sigmoid functions with ReLU functions during the pretraining phase.",
              "It regularizes the network’s weights, making them smaller and less likely to cause the gradients to explode."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q3",
            type: "multi",
            marks: 2,
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q3-1.webp#575x330)",
            options: [
              "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q3-opt1-1.webp#29x19)",
              "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q3-opt2-1.webp#28x19)",
              "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q3-opt3-1.webp#30x23)",
              "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q3-opt4-1.webp#31x20)",
              "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q3-opt5-1.webp#30x22)"
            ],
            answer: [
              2,
              4
            ],
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q4",
            type: "numerical",
            marks: 3,
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q4-1.webp#575x317)",
            answer: 1.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 1 to 2."
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q5",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q5-passage-1.webp#571x475)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q5-1.webp#305x96)",
            answer: 1.925,
            tolerance: 0.035,
            explanation: "Official answer key accepts any value from 1.89 to 1.96."
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q6",
            type: "numerical",
            marks: 4,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q5-passage-1.webp#571x475)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q6-1.webp#410x211)",
            answer: 0.34,
            tolerance: 0.04,
            explanation: "Official answer key accepts any value from 0.3 to 0.38."
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q7",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q5-passage-1.webp#571x475)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q7-1.webp#326x201)",
            answer: 1.36,
            tolerance: 0.04,
            explanation: "Official answer key accepts any value from 1.32 to 1.4."
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q8",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q8-passage-1.webp#291x310)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q8-1.webp#354x286)",
            answer: 512,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q9",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q8-passage-1.webp#291x310)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q9-1.webp#324x93)",
            answer: 12288,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q10",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q8-passage-1.webp#291x310)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q10-1.webp#372x273)",
            answer: 33088,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q11",
            type: "numerical",
            marks: 2,
            passage: "Consider a CBOW model for learning word embeddings. The vocabulary is made up of three words, {good, bad, ugly}. W and C are the matrices that contain the word and context embeddings respectively. The columns in each matrix correspond to the embeddings. Both matrices are of shape 2 x 3:\n\n![Figure](/pyq/deep-learning-end-term-aug-2025-an/q11-passage-1.webp#455x85)\n\nThe context window is 1, meaning, the next word is predicted using just the current word as context. Recall that we use softmax to make predictions at the output.\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q11-1.webp#309x135)",
            answer: 0.67,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 0.62 to 0.72."
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q12",
            type: "mcq",
            marks: 2,
            passage: "Consider a CBOW model for learning word embeddings. The vocabulary is made up of three words, {good, bad, ugly}. W and C are the matrices that contain the word and context embeddings respectively. The columns in each matrix correspond to the embeddings. Both matrices are of shape 2 x 3:\n\n![Figure](/pyq/deep-learning-end-term-aug-2025-an/q11-passage-1.webp#455x85)\n\nThe context window is 1, meaning, the next word is predicted using just the current word as context. Recall that we use softmax to make predictions at the output.\nBased on the above data, answer the given subquestions.",
            prompt: "The CBOW model is now used to generate a “sentence” or a string of words. First we pass the word “good” and retain the word with highest probability as the output, say word_1, which is in turn passed as input to the model. If the model is run this way for exactly three time steps, what is the sentence that it outputs? Note that the sentence here is “word_1 word_2 word_3”.\n\n![Figure](/pyq/deep-learning-end-term-aug-2025-an/q12-1.webp#417x255)",
            options: [
              "bad ugly good",
              "good bad ugly",
              "bad bad bad",
              "good good good",
              "bad ugly bad"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q13",
            type: "mcq",
            marks: 3,
            passage: "Consider a CBOW model for learning word embeddings. The vocabulary is made up of three words, {good, bad, ugly}. W and C are the matrices that contain the word and context embeddings respectively. The columns in each matrix correspond to the embeddings. Both matrices are of shape 2 x 3:\n\n![Figure](/pyq/deep-learning-end-term-aug-2025-an/q11-passage-1.webp#455x85)\n\nThe context window is 1, meaning, the next word is predicted using just the current word as context. Recall that we use softmax to make predictions at the output.\nBased on the above data, answer the given subquestions.",
            prompt: "Now consider updating the word embeddings using the sample “good good”. The first “good” in the string is used as context and the second “good” as the true label. Use cross entropy as the loss function and run one iteration of gradient descent with η = 1 starting with the existing values for the embeddings.\nFind the updated word embedding for “good” and choose the most appropriate option from below. Note that you have to compute the updated word embedding for “good” and not its context embedding.",
            options: [
              "(1.76, -0.24)",
              "(1.24, -0.76)",
              "(1.76, 1.76)",
              "(1.76, -1.76)",
              "(1.24, -1.24)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q14",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q14-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q14-1.webp#70x25)",
            answer: 0.25,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q15",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q14-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q15-1.webp#75x26)",
            answer: 0.5,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q16",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q14-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q16-1.webp#70x29)",
            answer: 1,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q17",
            type: "numerical",
            marks: 3,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q14-passage-1.webp#575x842)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q17-1.webp#312x120)",
            answer: 0.125,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q18",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q18-passage-1.webp#575x233)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q18-1.webp#274x24)",
            answer: 2,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-aug-2025-an-q19",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q18-passage-1.webp#575x233)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-aug-2025-an/q19-1.webp#297x80)",
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "deep-learning-end-term-apr-2025-an",
    title: "Deep Learning End Term · 13 Apr 2025 (AN)",
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
        subjectSlug: "deep-learning",
        title: "Deep Learning",
        short: "Deep Learning",
        questions: [
          {
            id: "deep-learning-end-term-apr-2025-an-q1",
            type: "mcq",
            marks: 1,
            prompt: "A neural network is being trained for a regression problem in which the target is in the interval (−1, 1). Which of the following is NOT a good choice for the activation function at the output layer?",
            options: [
              "ReLU",
              "Linear (identity)",
              "Tanh"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q2",
            type: "mcq",
            marks: 3,
            prompt: "In the transformer architecture, which of the following are true regarding cross attention in the decoder?",
            options: [
              "The query vectors come from the decoder stack, while the key and value vectors come from the encoder stack.",
              "The query and value vectors come from the decoder stack, while the key vectors come from the encoder stack.",
              "The query, key and value vectors come from the decoder stack.",
              "The query, key and value vectors come from the encoder stack."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q3",
            type: "multi",
            marks: 2,
            prompt: "Consider applying dropout to a hidden layer with p = 0.5. Which of the following are true?",
            options: [
              "During training, a randomly chosen set of neurons in the layer are dropped out. The neurons to be dropped are determined dynamically during each iteration.",
              "During inference (testing), no neurons are dropped out. Instead, the activation of each neuron in the layer is scaled by 0.5.",
              "During training, a fixed set of neurons in the layer are dropped out. This set remains the same in every iteration and the neurons to be dropped are determined before the training begins.",
              "During inference (testing), a randomly chosen set of neurons in the layer are dropped out."
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q4",
            type: "multi",
            marks: 3,
            prompt: "Consider the following plot of error versus model complexity. Models of varying complexity are evaluated on the same training and test datasets. Model complexity increases from left to right:\n\n![Figure](/pyq/deep-learning-end-term-apr-2025-an/q4-1.webp#370x276)\n\nSelect all true options.",
            options: [
              "(1) corresponds to the test error.",
              "(2) corresponds to the training error.",
              "(3) corresponds to a model with high bias and low variance.",
              "(1) corresponds to the training error.",
              "(2) corresponds to the test error.",
              "(3) corresponds to a model with low bias and high variance."
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q5",
            type: "multi",
            marks: 3,
            prompt: "Consider the following tasks which can be solved using an encoder-decoder architecture. Which of these tasks has a decoder where an RNN is not necessary?",
            options: [
              "Video classification: outputs a single class label",
              "Sentiment analysis: outputs a single class label",
              "Document summarization: outputs a sequence of text",
              "Machine translation: outputs a sequence of text",
              "Video captioning: outputs a sequence of text"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q6",
            type: "numerical",
            marks: 3,
            prompt: "The input volume to a convolutional layer is 100×100×5. If ten kernels, each of size 9 × 9, with unit stride are applied over this volume, what should be the padding so that the output volume has dimensions 100 × 100 × 10? Note that you should enter the value of P as per the convention we have been following.",
            answer: 4,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q7",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q7-passage-1.webp#575x498)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the value of x at which the tower attains its maximum value.",
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q8",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q7-passage-1.webp#575x498)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the maximum value that the tower attains.",
            answer: 0.6,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q9",
            type: "mcq",
            marks: 1,
            passage: "Consider the multi-head self-attention mechanism in the encoder of a transformer with 8 heads. The word embedding dimension is 32. In a given head, the query, key and value vectors have the same dimension and each of them is 4. The sequence length is 5.\nBased on the above data, answer the given subquestions.",
            prompt: "In any given head, what is the dimension of the W_Q matrix?",
            options: [
              "32 × 4",
              "32 × 32",
              "4 × 4",
              "32 × 8",
              "5 × 5"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q10",
            type: "mcq",
            marks: 1,
            passage: "Consider the multi-head self-attention mechanism in the encoder of a transformer with 8 heads. The word embedding dimension is 32. In a given head, the query, key and value vectors have the same dimension and each of them is 4. The sequence length is 5.\nBased on the above data, answer the given subquestions.",
            prompt: "In any given head, what is the dimension of the query-key product matrix?",
            options: [
              "5 × 5",
              "4 × 4",
              "8 × 8",
              "32 × 32"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q11",
            type: "numerical",
            marks: 1,
            passage: "Consider the multi-head self-attention mechanism in the encoder of a transformer with 8 heads. The word embedding dimension is 32. In a given head, the query, key and value vectors have the same dimension and each of them is 4. The sequence length is 5.\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q11-1.webp#309x114)",
            answer: 32,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q12",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q12-passage-1.webp#575x361)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the value y at the end of the forward pass.",
            answer: 9,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q13",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q12-passage-1.webp#575x361)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q13-1.webp#350x62)",
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q14",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q12-passage-1.webp#575x361)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q14-1.webp#351x60)",
            answer: 6,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q15",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q15-passage-1.webp#550x99)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q15-1.webp#115x26)",
            options: [
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q15-opt1-1.webp#14x21)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q15-opt2-1.webp#36x15)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q15-opt3-1.webp#20x15)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q15-opt4-1.webp#12x19)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q16",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q15-passage-1.webp#550x99)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q16-1.webp#114x24)",
            options: [
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q16-opt1-1.webp#40x15)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q16-opt2-1.webp#21x16)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q16-opt3-1.webp#13x21)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q16-opt4-1.webp#12x21)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q17",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q15-passage-1.webp#550x99)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following is true?",
            options: [
              "The mask matrix is added to the query-key product matrix before applying softmax.",
              "The mask matrix is added to the query-key product matrix after applying softmax.",
              "The mask matrix could be added either before or after the softmax."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q18",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q18-passage-1.webp#575x94)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find a.",
            answer: -0.67,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from -0.7 to -0.64."
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q19",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q18-passage-1.webp#575x94)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find b.",
            answer: 0.67,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.64 to 0.7."
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q20",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q18-passage-1.webp#575x94)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find c.",
            answer: 0.33,
            tolerance: 0.03,
            explanation: "Official answer key accepts any value from 0.3 to 0.36."
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q21",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q21-passage-1.webp#575x271)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the probability of predicting “three” given “two” as context.",
            answer: 0.25,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 0.2 to 0.3."
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q22",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q21-passage-1.webp#575x271)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q22-1.webp#367x158)",
            answer: 0.25,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 0.2 to 0.3."
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q23",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q23-passage-1.webp#575x572)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Find the number of parameters associated with the layer “Convolution-2” that are required to transform V_2 to V_3. Ignore biases.",
            answer: 648,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q24",
            type: "mcq",
            marks: 1,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q23-passage-1.webp#575x572)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of the following corresponds to V_4, the activation volume output by the layer “MaxPooling- 2”?",
            options: [
              "16 × 16 × 12",
              "8 × 8 × 12",
              "32 × 32 × 8",
              "16 × 16 × 6"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q25",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q23-passage-1.webp#575x572)\n\nBased on the above data, answer the given subquestions.",
            prompt: "The parameters associated with the fully connected layers, namely “FC- 1” and “Output”, represent what percentage of the total number of parameters in the network? The answer should be rounded off to the nearest integer. Ignore biases.",
            options: [
              "98%",
              "85%",
              "50%",
              "10%"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q26",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q26-passage-1.webp#575x172)\n\nBased on the above data, answer the given subquestions.",
            prompt: "With a total of 7 time steps (T = 7), what is the total count of parameters (including bias) within the network?",
            answer: 33,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q27",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q26-passage-1.webp#575x172)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q27-1.webp#341x121)",
            options: [
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q27-opt1-1.webp#171x23)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q27-opt2-1.webp#128x24)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q27-opt3-1.webp#170x23)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q27-opt4-1.webp#98x28)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q28",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q26-passage-1.webp#575x172)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q28-1.webp#402x277)",
            answer: 16.1,
            tolerance: 0.1,
            explanation: "Official answer key accepts any value from 16 to 16.2."
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q29",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q29-passage-1.webp#575x704)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which of these is the correct ordering among the learning rates?",
            options: [
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q29-opt1-1.webp#100x23)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q29-opt2-1.webp#99x20)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q29-opt3-1.webp#100x21)",
              "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q29-opt4-1.webp#100x18)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q30",
            type: "mcq",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q29-passage-1.webp#575x704)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q30-1.webp#227x27)",
            options: [
              "0.5",
              "0.9",
              "0.1",
              "1"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "deep-learning-end-term-apr-2025-an-q31",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q29-passage-1.webp#575x704)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/deep-learning-end-term-apr-2025-an/q31-1.webp#374x142)",
            answer: 0.59,
            tolerance: 0.05,
            explanation: "Official answer key accepts any value from 0.54 to 0.64."
          }
        ]
      }
    ]
  }
];
