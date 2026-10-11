import type { QualifierMock } from "../../types";

// Deep Learning for Computer Vision: IIT Madras BS End Term papers (2 papers, 101 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const dlCvEndTermPapers: QualifierMock[] = [
  {
    slug: "dl-cv-end-term-aug-2025-fn",
    title: "DL for CV End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "deep-learning-for-computer-vision",
        title: "Deep Learning for Computer Vision",
        short: "DL for CV",
        questions: [
          {
            id: "dl-cv-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q1-1.webp#401x327)\n\nChoose the correct matching:",
            options: [
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q1-opt1-1.webp#505x34)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q1-opt2-1.webp#503x33)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q1-opt3-1.webp#510x35)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q1-opt4-1.webp#506x39)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q2-1.webp#575x169)",
            options: [
              "1→ iii, 2→ iv, 3→ i, 4 → ii",
              "1→ iii, 2→ i, 3 → ii, 4 → v",
              "1→ iii, 2→ iv, 3→ v, 4 → ii",
              "1→ iv, 2→ iii, 3→ i, 4 → ii"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 2,
            prompt: "Identify the correct sequence of steps in a Canny edge detection pipeline. Steps are listed below: 1. Compute gradient magnitude and direction\n2. Connect individual components\n3. Smoothen the image\n4. Threshold into strong, weak, or no edge\n5. Gaussian Filter and Hysteresis\n6. Non-maximum suppression\n7. Apply derivative to get edges",
            options: [
              "6→ 1→ 4→ 5 → 2",
              "3→ 1→ 6→ 4 → 2",
              "3→ 5→ 1→ 4 → 2",
              "6→ 3→ 5→ 7 → 2"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q4-1.webp#575x170)",
            options: [
              "Only statement P is true",
              "Only statement Q is true",
              "Both statements are true",
              "None of these statements is true"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q5-1.webp#575x204)",
            options: [
              "1→ vi, 2→ iii, 3 →v, 4 → i",
              "1→ i, 2→ iv, 3 → iii, 4→ ii",
              "1→ i, 2→ v, 3 → iii, 4→ iv",
              "1→ iv, 2→ iii, 3→ ii, 4 → i"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 2,
            prompt: "Which of the following is the correct sequence of steps of the SIFT algorithm?\n1. Using the Taylor series expansion of the scale-space function, lo-calize the key points. 2. Estimate the orientation of keypoints using the local image gra-dients.\n3. Find the edge points using the eigenvalues of the Hessian and reject these points.\n4. Find a raw SIFT descriptor vector using the gradient orientations of the neighborhood around the key points.\n5. Detect extreme points in scale space using an approximation of the Laplacian of Gaussian.",
            options: [
              "5, 2, 1, 3, 4",
              "5, 1, 3, 2, 4",
              "1, 3, 2, 4, 5",
              "1, 5, 3, 2, 4"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q7",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q7-1.webp#575x77)",
            options: [
              "Sigmoid of alignment scores",
              "ReLU of alignment scores",
              "Softmax of alignment scores",
              "Linear projections of alignment scores"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q8",
            type: "mcq",
            marks: 2,
            prompt: "Which one of the following statements is true?",
            options: [
              "Attention mechanisms cannot be applied to the bidirectional RNN model",
              "An image captioning network cannot be trained end-to-end even though we are using 2 different modalities to train the network",
              "One of the key components in the vanilla transformer are the recurrent connections that help them to deal with variable input length.",
              "None of these"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q9",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q9-1.webp#547x473)",
            options: [
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q9-opt1-1.webp#72x55)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q9-opt2-1.webp#72x52)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q9-opt3-1.webp#71x52)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q9-opt4-1.webp#74x55)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q10",
            type: "mcq",
            marks: 2,
            prompt: "Which one of the following statements regarding hyperparameter tuning is false?",
            options: [
              "Validation set is the best choice for tuning hyperparameters",
              "Picking hyperparameters that perform the best on the training set leads to overfitting",
              "Tuning hyperparameters on the test set is an acceptable approach to find the most powerful model for generalization performance",
              "Test set performance, with hyperparameters tuned on the validation set, would be a realistic measure of how the model will generalize to new data."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q11",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q11-1.webp#575x139)",
            options: [
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q11-opt1-1.webp#170x78)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q11-opt2-1.webp#172x70)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q11-opt3-1.webp#173x79)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q11-opt4-1.webp#172x74)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q12",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q12-1.webp#575x155)",
            options: [
              "1→ iii, 2→ iv, 3→ ii, 4 → i",
              "1→ i, 2→ iv, 3 → iii, 4→ ii",
              "1→ iv, 2→ iii, 3→ ii, 4 → i",
              "1→ iii, 2→ i, 3 → ii, 4 →v"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q13",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q13-1.webp#440x165)",
            options: [
              "1→ iv, 2→ v, 3→ i, 4 → ii",
              "1→ iii, 2→ i, 3 → v, 4→ ii",
              "1→ iv, 2→ iii, 3→ ii, 4 → i",
              "1→ iii, 2→ i, 3 → ii, 4→ v"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q14",
            type: "mcq",
            marks: 2,
            prompt: "What makes the Segment Anything Model (SAM) particularly advantageous for image annotation tasks compared to conventional segmentation approaches?",
            options: [
              "It has perfect segmentation accuracy",
              "It has minimal hardware requirements for operation",
              "It can generalize to segment objects it wasn’t specifically trained on",
              "It automatically identifies and labels all objects in an image without user prompts"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q15",
            type: "mcq",
            marks: 2,
            prompt: "Statement 1: The Segment Anything Model (SAM) demonstrates zero-shot generalization capabilities across various downstream tasks.\nStatement 2: SAM’s training involves a largescale, diverse mask dataset using a prompt-based segmentation approach. Which one of the following options is most appropriate?",
            options: [
              "Both statements are correct, and Statement 2 correctly explains Statement 1.",
              "Both statements are correct, but Statement 2 does not correctly explain Statement 1.",
              "Statement 1 is correct, but Statement 2 is incorrect.",
              "Statement 1 is incorrect, but Statement 2 is correct.",
              "Both statements are incorrect."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q16",
            type: "mcq",
            marks: 2,
            prompt: "Why does DETR typically exhibit poor performance in detecting small objects compared to larger ones?",
            options: [
              "The CNN backbone used in DETR has a fixed receptive field that’s too large for small objects",
              "The global self-attention mechanism in DETR tends to dilute the signal from small objects across all image locations",
              "DETR’s loss function actively discards all detections smaller than 50x50 pixels",
              "The object queries in DETR are programmed to ignore any object smaller than 10",
              "DETR’s encoder-decoder architecture was specifically designed to only detect large objects"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q17",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statements are false? (Select all that apply)",
            options: [
              "Generative adversarial networks (GANs) generate sharper images compared to Variational AutoEncoders (VAE)",
              "GAN is an example of an implicit density estimation model",
              "Fully connected layers in mapping network of Style-GAN do not change the dimension of its input",
              "The generator and discriminator are always trained together in a GAN"
            ],
            answer: [
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q18",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statements are true? (Select all possible correct options)",
            options: [
              "Autoencoder are equivalent to Principal Component Analysis (PCA) provided we don’t use of non-linear activation functions",
              "When using global attention on temporal data, alignment weights are learnt for encoder hidden representations for all time steps",
              "Positional encoding is an important component of the transformer architecture as it conveys information about order in a given sequence",
              "It is not possible to generate different captions for the same image that have similar meaning but different tone/style",
              "Autoencoders can not be used for data compression as its input and output dimensions are different"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q19",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statements about CLIP are TRUE? (Select ALL that apply)",
            options: [
              "CLIP uses a contrastive loss function to align text and image embeddings.",
              "CLIP requires image labels for training.",
              "CLIP is trained to maximize cosine similarity between embeddings of matching text-image pairs.",
              "CLIP model is trained with pretext tasks such as rotation prediction and inpainting to learn effective feature representations.",
              "To use the CLIP model for image classification, it is imperative to finetune it on downstream datasets."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q20",
            type: "multi",
            marks: 2,
            prompt: "Which one of the following statements is true:",
            options: [
              "Weight change criterion is a method of ‘early stopping’ that checks whether or not the error is dropping over epochs to decide whether to continue training or stop.",
              "L1 norm tends to create more sparse weights than L2 norm.",
              "During the training phase, for each iteration, Dropout ignores a random fraction, p, of nodes, and accounts for it in the test phase by scaling down the activations by a factor of p.",
              "A single McCulloch-Pitts neuron is capable of modeling AND, OR, XOR, NOR, and NAND functions."
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q21",
            type: "multi",
            marks: 2,
            prompt: "Which of the following are examples of a high-pass filter?",
            options: [
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q21-opt1-1.webp#97x79)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q21-opt2-1.webp#129x75)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q21-opt3-1.webp#125x76)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q21-opt4-1.webp#97x74)"
            ],
            answer: [
              0,
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q22",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statements are true? (Select all that apply)",
            options: [
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q22-opt1-1.webp#575x88)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q22-opt2-1.webp#575x26)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q22-opt3-1.webp#431x27)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q22-opt4-1.webp#575x28)"
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q23",
            type: "multi",
            marks: 2,
            prompt: "Which of the following techniques help control the exploding or vanishing gradient problem in recurrent neural networks?",
            options: [
              "Gradient clipping",
              "Use ReLU activation funtion to control exploding gradient and sigmoid activation to control vanishing gradients",
              "Use Long Short-Term Memory (LSTM)",
              "Use data augmentation methods (for example, reversing the input sequence)"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q24",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q24-1.webp#575x225)",
            answer: 0,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q25",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q25-1.webp#575x253)",
            answer: 30,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q26",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q26-1.webp#575x109)",
            answer: -0.21,
            tolerance: 0.005,
            explanation: "Official answer key accepts any value from -0.215 to -0.205."
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q27",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q27-1.webp#575x102)",
            answer: 45,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q28",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q28-1.webp#575x137)",
            answer: 3.75,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q29",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q29-1.webp#575x133)",
            answer: 100,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q30",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q30-passage-1.webp#489x337)",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q30-1.webp#273x47)",
            answer: -2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q31",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q30-passage-1.webp#489x337)",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q31-1.webp#279x45)",
            answer: 5,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q32",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q32-passage-1.webp#575x87)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Element 1: _______________",
            answer: 0.54,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q33",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q32-passage-1.webp#575x87)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Element 2: _______________",
            answer: 0.25,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q34",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q32-passage-1.webp#575x87)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Element 3: _______________",
            answer: 0.19,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q35",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q32-passage-1.webp#575x87)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Element 4: _______________",
            answer: 0.58,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q36",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q36-passage-1.webp#575x222)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Sigmoid _______________",
            answer: 0.95,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q37",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q36-passage-1.webp#575x222)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Linear _______________",
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q38",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q36-passage-1.webp#575x222)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Indicator Function _______________",
            answer: 1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q39",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q36-passage-1.webp#575x222)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Softplus _______________",
            answer: 3.05,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q40",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q36-passage-1.webp#575x222)\n\nBased on the above data, answer the given subquestions.",
            prompt: "ReLu _______________",
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q41",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q36-passage-1.webp#575x222)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Leaky-ReLu _______________",
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q42",
            type: "numerical",
            marks: 0.55,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-1.webp#236x23)",
            answer: 1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q43",
            type: "numerical",
            marks: 0.55,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q43-1.webp#305x49)",
            answer: 5,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q44",
            type: "numerical",
            marks: 0.55,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q44-1.webp#295x47)",
            answer: 11,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q45",
            type: "numerical",
            marks: 0.55,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q45-1.webp#317x52)",
            answer: 7,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q46",
            type: "numerical",
            marks: 0.55,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q46-1.webp#252x23)",
            answer: 8,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q47",
            type: "numerical",
            marks: 0.55,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q47-1.webp#306x59)",
            answer: 4,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q48",
            type: "numerical",
            marks: 0.54,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q48-1.webp#302x47)",
            answer: 10,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q49",
            type: "numerical",
            marks: 0.54,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q49-1.webp#273x25)",
            answer: 9,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q50",
            type: "numerical",
            marks: 0.54,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q50-1.webp#301x27)",
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q51",
            type: "numerical",
            marks: 0.54,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q51-1.webp#279x28)",
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-fn-q52",
            type: "numerical",
            marks: 0.54,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below: For each of the given entities, enter the appropriate number from the figure that corresponds to it:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q42-passage-1.webp#575x275)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-fn/q52-1.webp#307x47)",
            answer: 6,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "dl-cv-end-term-aug-2025-an",
    title: "DL for CV End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "deep-learning-for-computer-vision",
        title: "Deep Learning for Computer Vision",
        short: "DL for CV",
        questions: [
          {
            id: "dl-cv-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 2,
            prompt: "Why does DETR typically exhibit poor performance in detecting small objects compared to larger ones? Choose the best answer in your opinion.",
            options: [
              "The CNN backbone used in DETR has a fixed receptive field that’s too large for small objects.",
              "The global self-attention mechanism in DETR tends to dilute the signal from small objects across all image locations.",
              "DETR’s loss function actively discards all detections smaller than 50 × 50 pixels.",
              "The object queries in DETR are programmed to ignore any object smaller than 10% of the image size.",
              "DETR’s encoder-decoder architecture was specifically designed to only detect objects larger than a cat."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 2,
            prompt: "Consider the following Pytorch code:\n1. x = torch.tensor([[-3.,2.,3.],[4.,-5.,7.],[20.,3.,2.]])\n2. print(torch.mean(x,dim=0,keepdim=True))\nThe output of the code is:",
            options: [
              "tensor([ 7., 0., 4.])",
              "tensor([[ -7., 10., -4.]])",
              "tensor([[ -7.],[7.],[4.]])",
              "tensor([ -7., 7., 3.])",
              "tensor([[7., 0., 4.]])",
              "tensor([[ 0.],[7.],[4.]])"
            ],
            answer: 4,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 2,
            prompt: "Which one of the following statements is false?",
            options: [
              "Linear contrast stretching is a point operation.",
              "Moving average is an example of a local operation.",
              "Convolution in the spatial domain cannot be obtained through addition in the frequency domain.",
              "All of these."
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 2,
            prompt: "What is the correct order of operations for processing an image through a Vision Transformer (ViT)?",
            options: [
              "Image patching → Positional embedding → Linear projection of flattened patches → Transformer encoder→ Classification head",
              "Image patching → Linear projection of flattened patches → Positional embedding → Transformer encoder→ Classification head",
              "Positional embedding → Image patching → Linear projection of flattened patches → Transformer encoder→ Classification head",
              "Linear projection of Images → Image patching → Positional embedding → Transformer encoder → Classification head",
              "Linear projection of Images → Image patching → Positional embedding → Transformer encoder → Transformer decoder→ Classification head"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 2,
            prompt: "Vector Quantized Variational Autoencoder (VQ-VAE) utilizes a discrete latent representation as opposed to continuous latent spaces used in traditional VAEs. One of the key components of a VQ- VAE is the codebook, which consists of a set of learnable vectors. What is the primary role of the codebook in VQ-VAE?",
            options: [
              "It performs the non-linear transformation of the input data to a higher dimensional space.",
              "It regularizes the encoder by penalizing complex encodings.",
              "It provides a finite set of vectors which the encoder’s outputs are mapped to, effectively quantizing the latent space.",
              "It decodes the quantized vectors back into the reconstructed input space."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q6",
            type: "mcq",
            marks: 2,
            prompt: "Given two normalized embeddings from CLIP, I = [0.2, 0.5, 0.3, 0.4] for an image and T = [0.1, 0.6, 0.3, 0.7] for a text description, compute the CLIPScore(I,T).",
            options: [
              "− 69%",
              "0%",
              "69%",
              "50%"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q7",
            type: "mcq",
            marks: 2,
            prompt: "Which one of the following statements regarding hyperparameter tuning is false?",
            options: [
              "Validation set is the best choice for tuning hyperparameters",
              "Picking hyperparameters that perform the best on the training set leads to overfitting",
              "Tuning hyperparameters on the test set is an acceptable approach to find the most powerful model for generalization performance",
              "Test set performance, with hyperparameters tuned on the validation set, would be a realistic measure of how the model will generalize to new data."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q8",
            type: "mcq",
            marks: 2,
            prompt: "Which one of the following statements is false? (Pick the most appropriate one.)",
            options: [
              "Attention mechanisms can be applied to the bidirectional RNN model",
              "An image captioning network can be trained end-to-end even though we are using 2 different modalities to train the network",
              "One of the key components in the vanilla transformer is the recurrent connection that help them to deal with variable input length.",
              "All of these."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q9",
            type: "mcq",
            marks: 2,
            prompt: "You are designing an edge detection pipeline for noisy grayscale images. For each of the following goals, choose the most appropriate filter or method:\n1. Smooth out noise before any edge detection step\n2. Detect edges by finding zero-crossings in the second derivative\n3. Highlight regions with a strong intensity gradient\n4. Perform basic edge detection with a simple directional gradient filter",
            options: [
              "1 → Gaussian filter, 2 → Laplacian of Gaussian, 3 → First derivative of Gaussian, 4 → Sobel operator",
              "1 → Sobel operator, 2 → Gaussian filter, 3 → Laplacian of Gaussian, 4 → First derivative of Gaussian",
              "1 → First derivative of Gaussian, 2 → Sobel operator, 3 → Gaussian filter, 4 → Laplacian of Gaussian",
              "1→Laplacian of Gaussian, 2→First derivative of Gaussian, 3→Sobel operator, 4→Gaussian filter"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q10",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q10-1.webp#575x149)",
            options: [
              "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q10-opt1-1.webp#168x82)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q10-opt2-1.webp#166x74)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q10-opt3-1.webp#164x77)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q10-opt4-1.webp#162x78)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q11",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q11-1.webp#575x185)",
            options: [
              "1→ iii, 2→ iv, 3→ ii, 4 → i",
              "1→ i, 2→ iv, 3 → iii, 4→ ii",
              "1→ iv, 2→ iii, 3→ ii, 4 → i",
              "1→ iii, 2→ i, 3 → ii, 4 →v"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q12",
            type: "mcq",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q12-1.webp#460x183)",
            options: [
              "1→ iv, 2→ v, 3→ i, 4 → ii",
              "1→ iii, 2→ i, 3 → v, 4→ ii",
              "1→ iv, 2→ iii, 3→ ii, 4 → i",
              "1→ iii, 2→ i, 3 → ii, 4→ v"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q13",
            type: "mcq",
            marks: 2,
            prompt: "In which one of the following applications would you use a many- to-one RNN architecture? Choose the most appropriate answer.",
            options: [
              "Input is a review of a movie and output is the sentiment of the given review",
              "Input is an image and output is the textual description of the given image",
              "Input is an image and output is the class to which the given image belongs",
              "Input is a sentence in English language and output is the same sentence translated to Hindi language"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q14",
            type: "mcq",
            marks: 2,
            prompt: "Why might Segment Anything (SAM) be particularly useful in data annotation tasks compared to traditional segmentation models?",
            options: [
              "It produces perfect segmentation masks.",
              "It can adapt to segment any object, even those not seen during training",
              "It requires less computational resources",
              "It automatically labels all objects in an image without user input"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q15",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statements are true? (Select all possible correct options)",
            options: [
              "Variational AutoEncoders (VAE) generate sharper images compared to Generative adversarial networks (GANs)",
              "GAN is an example of an implicit density estimation model",
              "Fully connected layers in mapping network of Style-GAN change the dimension of its input",
              "In a GAN, the generator and discriminator are trained in an alternating fashion, each using the other’s output to improve."
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q16",
            type: "multi",
            marks: 2,
            prompt: "Classifier-free guidance is a technique used in diffusion models to improve sample quality without the explicit use of a classifier. This technique involves modifying the sampling process based on a control parameter. If the control parameter, denoted as γ, is set to zero, what effect does this have on the generation process?",
            options: [
              "It fails to generate realistic samples",
              "It removes all guidance, effectively making the process equivalent to the unconditional generation.",
              "It maximizes the influence of the classifier, leading to highly detailed generations.",
              "It can lead to more diverse samples compared to higher values of γ, as the generation process is less constrained by the conditional information."
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q17",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statements are true? (Select all possible correct options)",
            options: [
              "Autoencoder are equivalent to Principal Component Analysis (PCA) provided we don’t use of non-linear activation functions",
              "When using global attention on temporal data, alignment weights are learnt for encoder hidden representations for all time steps",
              "Positional encoding is an important component of the trans- former architecture as it conveys information about order in a given sequence",
              "It is not possible to generate different captions for the same image that have similar meaning but different tone/style",
              "Autoencoders can not be used for data compression as its input and output dimensions are different"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q18",
            type: "multi",
            marks: 2,
            prompt: "Which of the following statements about CLIP are TRUE? (Select ALL that apply)",
            options: [
              "CLIP uses a cross-entropy loss function to align text and image embeddings.",
              "CLIP requires image labels for training.",
              "CLIP is trained to maximize cosine similarity between embeddings of matching text-image pairs.",
              "CLIP model is trained with pretext tasks such as rotation prediction and inpainting to learn effective feature representations.",
              "To use the CLIP model for image classification, it is imperative to finetune it on downstream datasets."
            ],
            answer: [
              2
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q19",
            type: "multi",
            marks: 2,
            prompt: "Which one of the following statements is true:",
            options: [
              "Weight change criterion is a method of ‘early stopping’ that checks whether or not the error is dropping over epochs to decide whether to continue training or stop.",
              "L1 norm tends to create more sparse weights than L2 norm.",
              "During the training phase, for each iteration, Dropout ignores a random fraction, p, of nodes, and accounts for it in the test phase by scaling down the activations by a factor of p.",
              "A single McCulloch-Pitts neuron is capable of modeling AND, OR, XOR, NOR, and NAND functions."
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q20",
            type: "multi",
            marks: 2,
            prompt: "Which of the following are examples of a high-pass filter?",
            options: [
              "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q20-opt1-1.webp#90x74)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q20-opt2-1.webp#118x72)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q20-opt3-1.webp#118x71)",
              "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q20-opt4-1.webp#91x74)"
            ],
            answer: [
              0,
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q21",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q21-1.webp#575x194)",
            answer: 93.5,
            tolerance: 0.5,
            explanation: "Official answer key accepts any value from 93 to 94."
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q22",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q22-1.webp#575x106)",
            answer: 0.935,
            tolerance: 0.005,
            explanation: "Official answer key accepts any value from 0.93 to 0.94."
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q23",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q23-1.webp#575x74)",
            answer: 43,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q24",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q24-1.webp#575x128)",
            answer: 3.75,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q25",
            type: "numerical",
            marks: 2,
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q25-1.webp#575x175)",
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q26",
            type: "numerical",
            marks: 2,
            prompt: "What is the size of the feature map after applying two successive convolution operations with given parameters? Image size = 72×72, Kernel size = 5×5, Padding = 2 and Stride = 3. (In calculation, take floor(x) whenever x is non-integer.If the answer is N × N, write just one value N in the blank) __________________ .",
            answer: 8,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q27",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q27-passage-1.webp#400x357)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q27-1.webp#187x89)",
            answer: -2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q28",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q27-passage-1.webp#400x357)\n\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q28-1.webp#181x81)",
            answer: 5,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q29",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q29-passage-1.webp#575x77)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Element 1:___________",
            answer: 0.49,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q30",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q29-passage-1.webp#575x77)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Element 2:___________",
            answer: 0.55,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q31",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q29-passage-1.webp#575x77)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Element 3:___________",
            answer: 0.1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q32",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q29-passage-1.webp#575x77)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Element 4:___________",
            answer: 0.5,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q33",
            type: "numerical",
            marks: 1,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "Self-Attention _______________",
            answer: 1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q34",
            type: "numerical",
            marks: 0.5,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "BERT Text Encoder Bi Self Attention:__________________",
            answer: 5,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q35",
            type: "numerical",
            marks: 0.5,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "Image-Text Matching Loss (LITM ):__________________",
            answer: 11,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q36",
            type: "numerical",
            marks: 0.5,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "Image Grounded Text Encoder Bi Self Attention: ___________________",
            answer: 7,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q37",
            type: "numerical",
            marks: 0.5,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q37-1.webp#250x23)",
            answer: 8,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q38",
            type: "numerical",
            marks: 0.5,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "Image Grounded Text Encoder Cross Attention: _________________",
            answer: 4,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q39",
            type: "numerical",
            marks: 0.5,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "Image-Text Contrastive Loss (LITC): ____________",
            answer: 10,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q40",
            type: "numerical",
            marks: 0.5,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q40-1.webp#278x26)",
            answer: 9,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q41",
            type: "numerical",
            marks: 0.5,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "Causal Self Attention: _____________",
            answer: 3,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q42",
            type: "numerical",
            marks: 0.5,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q42-1.webp#276x24)",
            answer: 2,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q43",
            type: "numerical",
            marks: 0.5,
            passage: "Consider the BLIP model architecture with an input (image-text pair) as shown below:\n\n![Figure](/pyq/dl-cv-end-term-aug-2025-an/q33-passage-1.webp#575x294)\n\nFor each of the entities given, enter the appropriate number from the figure that corresponds to it:\nBased on the above data, answer the given subquestions.",
            prompt: "Image Grounded Text Decoder Cross Attention: _____________",
            answer: 6,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q44",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q44-passage-1.webp#575x225)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Sigmoid ______________",
            answer: 0.99,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q45",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q44-passage-1.webp#575x225)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Linear ______________",
            answer: 26.01,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q46",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q44-passage-1.webp#575x225)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Indicator Function ______________",
            answer: 1,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q47",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q44-passage-1.webp#575x225)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Softplus _____________",
            answer: 26.01,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q48",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q44-passage-1.webp#575x225)\n\nBased on the above data, answer the given subquestions.",
            prompt: "ReLU _______________",
            answer: 26.01,
            explanation: ""
          },
          {
            id: "dl-cv-end-term-aug-2025-an-q49",
            type: "numerical",
            marks: 1,
            passage: "![Figure](/pyq/dl-cv-end-term-aug-2025-an/q44-passage-1.webp#575x225)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Leaky-ReLU _____________",
            answer: 26.01,
            explanation: ""
          }
        ]
      }
    ]
  }
];
