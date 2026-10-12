import type { PyqTopicTags } from "../../types";

// 187 past-paper questions in 8 topics, 30 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const deepLearningForComputerVisionTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "image-processing-and-filtering",
      "title": "Image processing & filtering",
      "summary": "Contrast stretching, integral images, linear/median/Gaussian filters, separable kernels and Fourier facts",
      "ids": [
        "dl-cv-quiz-2-aug-2025-an-q1",
        "dl-cv-end-term-aug-2025-an-q3",
        "dl-cv-end-term-aug-2025-an-q10",
        "dl-cv-end-term-aug-2025-an-q20",
        "dl-cv-end-term-aug-2025-an-q21",
        "dl-cv-end-term-aug-2025-an-q25",
        "dl-cv-end-term-aug-2025-fn-q11",
        "dl-cv-end-term-aug-2025-fn-q21",
        "dl-cv-end-term-aug-2025-fn-q24",
        "dl-cv-end-term-aug-2025-fn-q25",
        "dl-cv-quiz-1-oct-2025-an-q1",
        "dl-cv-quiz-1-oct-2025-an-q2",
        "dl-cv-quiz-1-oct-2025-an-q3",
        "dl-cv-quiz-1-oct-2025-an-q4",
        "dl-cv-quiz-1-oct-2025-an-q12",
        "dl-cv-quiz-1-oct-2025-an-q17",
        "dl-cv-quiz-1-oct-2025-an-q18",
        "dl-cv-quiz-1-oct-2025-an-q20"
      ]
    },
    {
      "slug": "edges-corners-and-features",
      "title": "Edges, corners & SIFT features",
      "summary": "Sobel, LoG, Canny steps and thresholds, Harris corners, SIFT stages, Gabor filters and scale space",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q9",
        "dl-cv-end-term-aug-2025-an-q11",
        "dl-cv-end-term-aug-2025-fn-q1",
        "dl-cv-end-term-aug-2025-fn-q2",
        "dl-cv-end-term-aug-2025-fn-q3",
        "dl-cv-end-term-aug-2025-fn-q6",
        "dl-cv-end-term-aug-2025-fn-q12",
        "dl-cv-quiz-1-oct-2025-an-q6",
        "dl-cv-quiz-1-oct-2025-an-q7",
        "dl-cv-quiz-1-oct-2025-an-q8",
        "dl-cv-quiz-1-oct-2025-an-q13",
        "dl-cv-quiz-1-oct-2025-an-q14",
        "dl-cv-quiz-1-oct-2025-an-q21",
        "dl-cv-quiz-1-oct-2025-an-q22",
        "dl-cv-quiz-1-oct-2025-an-q29",
        "dl-cv-quiz-1-oct-2025-an-q30",
        "dl-cv-quiz-1-oct-2025-an-q31",
        "dl-cv-quiz-1-oct-2025-an-q32",
        "dl-cv-quiz-1-oct-2025-an-q33",
        "dl-cv-quiz-1-oct-2025-an-q34"
      ]
    },
    {
      "slug": "neural-network-training",
      "title": "Neural networks & training",
      "summary": "Activations and derivatives, backprop, momentum and optimizers, regularization, tuning, PyTorch/NumPy",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q2",
        "dl-cv-end-term-aug-2025-an-q7",
        "dl-cv-end-term-aug-2025-an-q19",
        "dl-cv-end-term-aug-2025-an-q22",
        "dl-cv-end-term-aug-2025-an-q27",
        "dl-cv-end-term-aug-2025-an-q28",
        "dl-cv-end-term-aug-2025-an-q44",
        "dl-cv-end-term-aug-2025-an-q45",
        "dl-cv-end-term-aug-2025-an-q46",
        "dl-cv-end-term-aug-2025-an-q47",
        "dl-cv-end-term-aug-2025-an-q48",
        "dl-cv-end-term-aug-2025-an-q49",
        "dl-cv-end-term-aug-2025-fn-q5",
        "dl-cv-end-term-aug-2025-fn-q10",
        "dl-cv-end-term-aug-2025-fn-q20",
        "dl-cv-end-term-aug-2025-fn-q22",
        "dl-cv-end-term-aug-2025-fn-q26",
        "dl-cv-end-term-aug-2025-fn-q30",
        "dl-cv-end-term-aug-2025-fn-q31",
        "dl-cv-end-term-aug-2025-fn-q36",
        "dl-cv-end-term-aug-2025-fn-q37",
        "dl-cv-end-term-aug-2025-fn-q38",
        "dl-cv-end-term-aug-2025-fn-q39",
        "dl-cv-end-term-aug-2025-fn-q40",
        "dl-cv-end-term-aug-2025-fn-q41",
        "dl-cv-quiz-1-oct-2025-an-q5",
        "dl-cv-quiz-1-oct-2025-an-q9",
        "dl-cv-quiz-1-oct-2025-an-q11",
        "dl-cv-quiz-1-oct-2025-an-q15",
        "dl-cv-quiz-1-oct-2025-an-q19",
        "dl-cv-quiz-1-oct-2025-an-q26",
        "dl-cv-quiz-1-oct-2025-an-q27",
        "dl-cv-quiz-1-oct-2025-an-q28"
      ]
    },
    {
      "slug": "cnn-layers-and-architectures",
      "title": "CNN layers & architectures",
      "summary": "Feature map size, parameter and cost counts, depthwise separable conv, receptive field, AlexNet, VGG, ResNet",
      "ids": [
        "dl-cv-quiz-2-aug-2025-an-q5",
        "dl-cv-quiz-2-aug-2025-an-q6",
        "dl-cv-quiz-2-aug-2025-an-q16",
        "dl-cv-quiz-2-aug-2025-an-q26",
        "dl-cv-quiz-2-aug-2025-an-q27",
        "dl-cv-quiz-2-aug-2025-an-q28",
        "dl-cv-quiz-2-aug-2025-an-q29",
        "dl-cv-quiz-2-aug-2025-an-q30",
        "dl-cv-quiz-2-aug-2025-an-q31",
        "dl-cv-end-term-aug-2025-an-q26",
        "dl-cv-end-term-aug-2025-an-q29",
        "dl-cv-end-term-aug-2025-an-q30",
        "dl-cv-end-term-aug-2025-an-q31",
        "dl-cv-end-term-aug-2025-an-q32",
        "dl-cv-end-term-aug-2025-fn-q4",
        "dl-cv-end-term-aug-2025-fn-q29",
        "dl-cv-end-term-aug-2025-fn-q32",
        "dl-cv-end-term-aug-2025-fn-q33",
        "dl-cv-end-term-aug-2025-fn-q34",
        "dl-cv-end-term-aug-2025-fn-q35",
        "dl-cv-quiz-1-oct-2025-an-q10",
        "dl-cv-quiz-1-oct-2025-an-q16",
        "dl-cv-quiz-1-oct-2025-an-q23",
        "dl-cv-quiz-1-oct-2025-an-q24",
        "dl-cv-quiz-1-oct-2025-an-q25"
      ]
    },
    {
      "slug": "detection-and-segmentation",
      "title": "Object detection & segmentation",
      "summary": "R-CNN family, YOLO, SSD, IoU, SegNet, DETR and Segment Anything",
      "ids": [
        "dl-cv-quiz-2-aug-2025-an-q2",
        "dl-cv-quiz-2-aug-2025-an-q3",
        "dl-cv-quiz-2-aug-2025-an-q4",
        "dl-cv-quiz-2-aug-2025-an-q7",
        "dl-cv-quiz-2-aug-2025-an-q9",
        "dl-cv-quiz-2-aug-2025-an-q17",
        "dl-cv-end-term-aug-2025-an-q1",
        "dl-cv-end-term-aug-2025-an-q12",
        "dl-cv-end-term-aug-2025-an-q14",
        "dl-cv-end-term-aug-2025-fn-q9",
        "dl-cv-end-term-aug-2025-fn-q13",
        "dl-cv-end-term-aug-2025-fn-q14",
        "dl-cv-end-term-aug-2025-fn-q15",
        "dl-cv-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "slug": "rnn-attention-transformers",
      "title": "RNNs, attention & transformers",
      "summary": "RNN types, GRU gates, vanishing gradients, attention scores and context vectors, ViT",
      "ids": [
        "dl-cv-quiz-2-aug-2025-an-q8",
        "dl-cv-quiz-2-aug-2025-an-q10",
        "dl-cv-quiz-2-aug-2025-an-q11",
        "dl-cv-quiz-2-aug-2025-an-q12",
        "dl-cv-quiz-2-aug-2025-an-q13",
        "dl-cv-quiz-2-aug-2025-an-q14",
        "dl-cv-quiz-2-aug-2025-an-q15",
        "dl-cv-quiz-2-aug-2025-an-q18",
        "dl-cv-quiz-2-aug-2025-an-q19",
        "dl-cv-quiz-2-aug-2025-an-q20",
        "dl-cv-quiz-2-aug-2025-an-q21",
        "dl-cv-quiz-2-aug-2025-an-q22",
        "dl-cv-quiz-2-aug-2025-an-q23",
        "dl-cv-quiz-2-aug-2025-an-q24",
        "dl-cv-quiz-2-aug-2025-an-q25",
        "dl-cv-quiz-2-aug-2025-an-q32",
        "dl-cv-quiz-2-aug-2025-an-q33",
        "dl-cv-quiz-2-aug-2025-an-q34",
        "dl-cv-quiz-2-aug-2025-an-q35",
        "dl-cv-quiz-2-aug-2025-an-q36",
        "dl-cv-quiz-2-aug-2025-an-q37",
        "dl-cv-quiz-2-aug-2025-an-q38",
        "dl-cv-quiz-2-aug-2025-an-q39",
        "dl-cv-quiz-2-aug-2025-an-q40",
        "dl-cv-quiz-2-aug-2025-an-q41",
        "dl-cv-quiz-2-aug-2025-an-q42",
        "dl-cv-quiz-2-aug-2025-an-q43",
        "dl-cv-quiz-2-aug-2025-an-q44",
        "dl-cv-quiz-2-aug-2025-an-q45",
        "dl-cv-quiz-2-aug-2025-an-q46",
        "dl-cv-quiz-2-aug-2025-an-q47",
        "dl-cv-quiz-2-aug-2025-an-q48",
        "dl-cv-quiz-2-aug-2025-an-q49",
        "dl-cv-quiz-2-aug-2025-an-q50",
        "dl-cv-quiz-2-aug-2025-an-q51",
        "dl-cv-quiz-2-aug-2025-an-q52",
        "dl-cv-end-term-aug-2025-an-q4",
        "dl-cv-end-term-aug-2025-an-q8",
        "dl-cv-end-term-aug-2025-an-q13",
        "dl-cv-end-term-aug-2025-fn-q7",
        "dl-cv-end-term-aug-2025-fn-q8",
        "dl-cv-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "slug": "generative-models",
      "title": "Generative models",
      "summary": "Autoencoders, VAE, VQ-VAE, GANs, StyleGAN, diffusion steps and classifier-free guidance",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q5",
        "dl-cv-end-term-aug-2025-an-q15",
        "dl-cv-end-term-aug-2025-an-q16",
        "dl-cv-end-term-aug-2025-an-q17",
        "dl-cv-end-term-aug-2025-an-q23",
        "dl-cv-end-term-aug-2025-an-q24",
        "dl-cv-end-term-aug-2025-fn-q17",
        "dl-cv-end-term-aug-2025-fn-q18",
        "dl-cv-end-term-aug-2025-fn-q27",
        "dl-cv-end-term-aug-2025-fn-q28"
      ]
    },
    {
      "slug": "vision-language-models",
      "title": "Vision-language: CLIP & BLIP",
      "summary": "CLIP training and CLIPScore, and labelling parts of the BLIP architecture",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q6",
        "dl-cv-end-term-aug-2025-an-q18",
        "dl-cv-end-term-aug-2025-an-q33",
        "dl-cv-end-term-aug-2025-an-q34",
        "dl-cv-end-term-aug-2025-an-q35",
        "dl-cv-end-term-aug-2025-an-q36",
        "dl-cv-end-term-aug-2025-an-q37",
        "dl-cv-end-term-aug-2025-an-q38",
        "dl-cv-end-term-aug-2025-an-q39",
        "dl-cv-end-term-aug-2025-an-q40",
        "dl-cv-end-term-aug-2025-an-q41",
        "dl-cv-end-term-aug-2025-an-q42",
        "dl-cv-end-term-aug-2025-an-q43",
        "dl-cv-end-term-aug-2025-fn-q19",
        "dl-cv-end-term-aug-2025-fn-q42",
        "dl-cv-end-term-aug-2025-fn-q43",
        "dl-cv-end-term-aug-2025-fn-q44",
        "dl-cv-end-term-aug-2025-fn-q45",
        "dl-cv-end-term-aug-2025-fn-q46",
        "dl-cv-end-term-aug-2025-fn-q47",
        "dl-cv-end-term-aug-2025-fn-q48",
        "dl-cv-end-term-aug-2025-fn-q49",
        "dl-cv-end-term-aug-2025-fn-q50",
        "dl-cv-end-term-aug-2025-fn-q51",
        "dl-cv-end-term-aug-2025-fn-q52"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Compute an integral image or recover pixel values from it",
      "ids": [
        "dl-cv-quiz-2-aug-2025-an-q1",
        "dl-cv-end-term-aug-2025-an-q25"
      ]
    },
    {
      "title": "Apply linear contrast stretching to a small grayscale image",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q21",
        "dl-cv-end-term-aug-2025-fn-q24",
        "dl-cv-quiz-1-oct-2025-an-q1"
      ]
    },
    {
      "title": "Apply a 3x3 median filter and find the output value at a position",
      "ids": [
        "dl-cv-end-term-aug-2025-fn-q25",
        "dl-cv-quiz-1-oct-2025-an-q20"
      ]
    },
    {
      "title": "Separate a 2D kernel into 1D kernels / pick separable kernels",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q10",
        "dl-cv-end-term-aug-2025-fn-q11",
        "dl-cv-quiz-1-oct-2025-an-q18"
      ]
    },
    {
      "title": "Pick the high-pass filters from given 3x3 kernels",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q20",
        "dl-cv-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Match Gaussian, Sobel and derivative-of-Gaussian filters to their roles",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q9",
        "dl-cv-end-term-aug-2025-fn-q2",
        "dl-cv-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "title": "Order the steps of the Canny edge detector",
      "ids": [
        "dl-cv-end-term-aug-2025-fn-q3",
        "dl-cv-quiz-1-oct-2025-an-q6"
      ]
    },
    {
      "title": "Order the stages of the SIFT algorithm",
      "ids": [
        "dl-cv-end-term-aug-2025-fn-q6",
        "dl-cv-quiz-1-oct-2025-an-q7"
      ]
    },
    {
      "title": "Match LoG, scale-invariant detection, texture and Gabor filter",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q11",
        "dl-cv-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "Match activation functions to their derivatives",
      "ids": [
        "dl-cv-end-term-aug-2025-fn-q5",
        "dl-cv-quiz-1-oct-2025-an-q9"
      ]
    },
    {
      "title": "Compute outputs of sigmoid, ReLU, softplus etc. for a given input",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q44",
        "dl-cv-end-term-aug-2025-an-q45",
        "dl-cv-end-term-aug-2025-an-q46",
        "dl-cv-end-term-aug-2025-an-q47",
        "dl-cv-end-term-aug-2025-an-q48",
        "dl-cv-end-term-aug-2025-an-q49",
        "dl-cv-end-term-aug-2025-fn-q36",
        "dl-cv-end-term-aug-2025-fn-q37",
        "dl-cv-end-term-aug-2025-fn-q38",
        "dl-cv-end-term-aug-2025-fn-q39",
        "dl-cv-end-term-aug-2025-fn-q40",
        "dl-cv-end-term-aug-2025-fn-q41",
        "dl-cv-quiz-1-oct-2025-an-q5"
      ]
    },
    {
      "title": "Backpropagation: compute de/da and de/db for a small graph",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q27",
        "dl-cv-end-term-aug-2025-an-q28",
        "dl-cv-end-term-aug-2025-fn-q30",
        "dl-cv-end-term-aug-2025-fn-q31"
      ]
    },
    {
      "title": "One momentum gradient descent update of a parameter",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q22",
        "dl-cv-end-term-aug-2025-fn-q26",
        "dl-cv-quiz-1-oct-2025-an-q26"
      ]
    },
    {
      "title": "False statement about hyperparameter tuning with train/val/test sets",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q7",
        "dl-cv-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Statements on early stopping, L1 vs L2, dropout and McCulloch-Pitts",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q19",
        "dl-cv-end-term-aug-2025-fn-q20"
      ]
    },
    {
      "title": "Feature map size after two successive convolutions",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q26",
        "dl-cv-end-term-aug-2025-fn-q29",
        "dl-cv-quiz-1-oct-2025-an-q24"
      ]
    },
    {
      "title": "Count the parameters of a standard convolution layer",
      "ids": [
        "dl-cv-quiz-2-aug-2025-an-q26",
        "dl-cv-quiz-1-oct-2025-an-q25"
      ]
    },
    {
      "title": "AlexNet statements on response normalization and conv parameters",
      "ids": [
        "dl-cv-quiz-2-aug-2025-an-q6",
        "dl-cv-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Match YOLO, SSD, RetinaNet and SegNet to their key ideas",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q12",
        "dl-cv-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "Why DETR performs poorly on small objects",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q1",
        "dl-cv-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Why Segment Anything (SAM) helps data annotation",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q14",
        "dl-cv-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "True/false on attention in BiRNNs, captioning and transformers",
      "ids": [
        "dl-cv-quiz-2-aug-2025-an-q8",
        "dl-cv-quiz-2-aug-2025-an-q14",
        "dl-cv-end-term-aug-2025-an-q8",
        "dl-cv-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Techniques that fix vanishing/exploding gradients in RNNs",
      "ids": [
        "dl-cv-quiz-2-aug-2025-an-q12",
        "dl-cv-quiz-2-aug-2025-an-q13",
        "dl-cv-end-term-aug-2025-fn-q23"
      ]
    },
    {
      "title": "Match RNN architectures (many-to-one etc.) to applications",
      "ids": [
        "dl-cv-quiz-2-aug-2025-an-q10",
        "dl-cv-end-term-aug-2025-an-q13"
      ]
    },
    {
      "title": "True/false statements on VAE, GAN and StyleGAN",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q15",
        "dl-cv-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "True/false on autoencoders, PCA, attention and positional encoding",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q17",
        "dl-cv-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "True/false statements about CLIP training and use",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q18",
        "dl-cv-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "title": "Diffusion reverse process: steps to reduce noise variance",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q23",
        "dl-cv-end-term-aug-2025-fn-q27"
      ]
    },
    {
      "title": "Diffusion forward process: total noise variance with linear beta",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q24",
        "dl-cv-end-term-aug-2025-fn-q28"
      ]
    },
    {
      "title": "Label the parts of the BLIP architecture from the figure",
      "ids": [
        "dl-cv-end-term-aug-2025-an-q33",
        "dl-cv-end-term-aug-2025-an-q34",
        "dl-cv-end-term-aug-2025-an-q35",
        "dl-cv-end-term-aug-2025-an-q36",
        "dl-cv-end-term-aug-2025-an-q37",
        "dl-cv-end-term-aug-2025-an-q38",
        "dl-cv-end-term-aug-2025-an-q39",
        "dl-cv-end-term-aug-2025-an-q40",
        "dl-cv-end-term-aug-2025-an-q41",
        "dl-cv-end-term-aug-2025-an-q42",
        "dl-cv-end-term-aug-2025-an-q43",
        "dl-cv-end-term-aug-2025-fn-q42",
        "dl-cv-end-term-aug-2025-fn-q43",
        "dl-cv-end-term-aug-2025-fn-q44",
        "dl-cv-end-term-aug-2025-fn-q45",
        "dl-cv-end-term-aug-2025-fn-q46",
        "dl-cv-end-term-aug-2025-fn-q47",
        "dl-cv-end-term-aug-2025-fn-q48",
        "dl-cv-end-term-aug-2025-fn-q49",
        "dl-cv-end-term-aug-2025-fn-q50",
        "dl-cv-end-term-aug-2025-fn-q51",
        "dl-cv-end-term-aug-2025-fn-q52"
      ]
    }
  ]
};
