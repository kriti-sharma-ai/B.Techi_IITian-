import type { PyqTopicTags } from "../../types";

// 90 past-paper questions in 8 topics, 19 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const deepLearningPracticeTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "tokenizers-and-pretraining",
      "title": "Tokenizers & LLM pre-training",
      "summary": "BPE, WordPiece, SentencePiece, CLM objective, model families and embedding/attention parameter counts",
      "ids": [
        "dlp-quiz-1-oct-2025-an-q1",
        "dlp-quiz-1-oct-2025-an-q7",
        "dlp-quiz-1-oct-2025-an-q8",
        "dlp-quiz-1-oct-2025-an-q11",
        "dlp-quiz-1-oct-2025-an-q12",
        "dlp-quiz-1-oct-2025-an-q14",
        "dlp-quiz-1-oct-2025-an-q15"
      ]
    },
    {
      "slug": "llm-fine-tuning",
      "title": "Fine-tuning LLMs: PEFT & GPU memory",
      "summary": "Full fine-tuning vs LoRA, RLHF, Hugging Face datasets/Trainer and GPU memory estimates",
      "ids": [
        "dlp-quiz-1-oct-2025-an-q2",
        "dlp-quiz-1-oct-2025-an-q3",
        "dlp-quiz-1-oct-2025-an-q4",
        "dlp-quiz-1-oct-2025-an-q5",
        "dlp-quiz-1-oct-2025-an-q6",
        "dlp-quiz-1-oct-2025-an-q9",
        "dlp-quiz-1-oct-2025-an-q10",
        "dlp-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "slug": "speech-asr-tts",
      "title": "Speech: ASR, TTS & diarization",
      "summary": "Wav2Vec2, SpeechT5, WER, speaker embeddings, data collators and Trainer arguments for speech",
      "ids": [
        "dlp-quiz-2-aug-2025-an-q1",
        "dlp-quiz-2-aug-2025-an-q2",
        "dlp-quiz-2-aug-2025-an-q3",
        "dlp-quiz-2-aug-2025-an-q4",
        "dlp-quiz-2-aug-2025-an-q5",
        "dlp-quiz-2-aug-2025-an-q6",
        "dlp-quiz-2-aug-2025-an-q7",
        "dlp-quiz-2-aug-2025-an-q8",
        "dlp-quiz-2-aug-2025-an-q9",
        "dlp-quiz-2-aug-2025-an-q10",
        "dlp-quiz-2-aug-2025-an-q11"
      ]
    },
    {
      "slug": "convolution-and-pooling",
      "title": "Convolution & pooling arithmetic",
      "summary": "Output shapes, parameter and operation counts, padding, pooling code, 1x1 convs and CNN vs MLP",
      "ids": [
        "dlp-end-term-apr-2025-an-q2",
        "dlp-end-term-apr-2025-an-q4",
        "dlp-end-term-apr-2025-an-q10",
        "dlp-end-term-apr-2025-an-q16",
        "dlp-end-term-apr-2025-an-q17",
        "dlp-end-term-aug-2025-an-q1",
        "dlp-end-term-aug-2025-an-q2",
        "dlp-end-term-aug-2025-an-q8",
        "dlp-end-term-aug-2025-an-q16",
        "dlp-end-term-aug-2025-an-q19",
        "dlp-end-term-aug-2025-fn-q1",
        "dlp-end-term-aug-2025-fn-q2",
        "dlp-end-term-aug-2025-fn-q8",
        "dlp-end-term-aug-2025-fn-q16",
        "dlp-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "slug": "cnn-architectures",
      "title": "CNN architectures & transfer learning",
      "summary": "AlexNet, VGG, Inception, ResNet, fine-tuning pretrained models and data augmentation",
      "ids": [
        "dlp-end-term-apr-2025-an-q1",
        "dlp-end-term-apr-2025-an-q8",
        "dlp-end-term-apr-2025-an-q15",
        "dlp-end-term-apr-2025-an-q18",
        "dlp-end-term-aug-2025-an-q3",
        "dlp-end-term-aug-2025-an-q4",
        "dlp-end-term-aug-2025-an-q5",
        "dlp-end-term-aug-2025-an-q11",
        "dlp-end-term-aug-2025-an-q12",
        "dlp-end-term-aug-2025-fn-q3",
        "dlp-end-term-aug-2025-fn-q4",
        "dlp-end-term-aug-2025-fn-q5",
        "dlp-end-term-aug-2025-fn-q11",
        "dlp-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "slug": "object-detection",
      "title": "Object detection & its metrics",
      "summary": "R-CNN family, RPN, RoI pooling, YOLO, IoU, precision/recall, F1 and box MAE",
      "ids": [
        "dlp-end-term-apr-2025-an-q3",
        "dlp-end-term-apr-2025-an-q6",
        "dlp-end-term-apr-2025-an-q7",
        "dlp-end-term-apr-2025-an-q13",
        "dlp-end-term-apr-2025-an-q14",
        "dlp-end-term-aug-2025-an-q6",
        "dlp-end-term-aug-2025-an-q9",
        "dlp-end-term-aug-2025-an-q10",
        "dlp-end-term-aug-2025-an-q17",
        "dlp-end-term-aug-2025-an-q18",
        "dlp-end-term-aug-2025-fn-q9",
        "dlp-end-term-aug-2025-fn-q10",
        "dlp-end-term-aug-2025-fn-q17",
        "dlp-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "slug": "segmentation-and-depth",
      "title": "Segmentation & depth estimation",
      "summary": "U-Net encoder/decoder, monocular and stereo depth estimation, left-right consistency",
      "ids": [
        "dlp-end-term-apr-2025-an-q5",
        "dlp-end-term-apr-2025-an-q12",
        "dlp-end-term-apr-2025-an-q19",
        "dlp-end-term-apr-2025-an-q20",
        "dlp-end-term-aug-2025-an-q7",
        "dlp-end-term-aug-2025-fn-q6",
        "dlp-end-term-aug-2025-fn-q7"
      ]
    },
    {
      "slug": "gans-and-restoration",
      "title": "GANs, super-resolution & restoration",
      "summary": "GAN training, SRGAN vs ESRGAN, MPRNet, LAKDNet and PSNR-based image quality",
      "ids": [
        "dlp-end-term-apr-2025-an-q9",
        "dlp-end-term-apr-2025-an-q11",
        "dlp-end-term-aug-2025-an-q13",
        "dlp-end-term-aug-2025-an-q14",
        "dlp-end-term-aug-2025-an-q15",
        "dlp-end-term-aug-2025-an-q20",
        "dlp-end-term-aug-2025-an-q21",
        "dlp-end-term-aug-2025-an-q22",
        "dlp-end-term-aug-2025-fn-q13",
        "dlp-end-term-aug-2025-fn-q14",
        "dlp-end-term-aug-2025-fn-q15",
        "dlp-end-term-aug-2025-fn-q20",
        "dlp-end-term-aug-2025-fn-q21",
        "dlp-end-term-aug-2025-fn-q22"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Find the output shape of a conv layer given kernel, stride and padding",
      "ids": [
        "dlp-end-term-apr-2025-an-q2",
        "dlp-end-term-aug-2025-an-q19",
        "dlp-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "title": "Replace the final layer of a pretrained CNN for a new number of classes",
      "ids": [
        "dlp-end-term-apr-2025-an-q1",
        "dlp-end-term-aug-2025-an-q5",
        "dlp-end-term-aug-2025-fn-q5"
      ]
    },
    {
      "title": "Compute IoU / mean IoU of predicted vs ground-truth bounding boxes",
      "ids": [
        "dlp-end-term-apr-2025-an-q3",
        "dlp-end-term-aug-2025-an-q18",
        "dlp-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "Compute the F1 score from predictions or a confusion matrix",
      "ids": [
        "dlp-end-term-apr-2025-an-q14",
        "dlp-end-term-aug-2025-an-q17",
        "dlp-end-term-aug-2025-fn-q17"
      ]
    },
    {
      "title": "Pick the Conv2d code that keeps a grayscale image's spatial size",
      "ids": [
        "dlp-end-term-aug-2025-an-q1",
        "dlp-end-term-aug-2025-fn-q1"
      ]
    },
    {
      "title": "Find MaxPool2d output size and effective receptive field with dilation",
      "ids": [
        "dlp-end-term-aug-2025-an-q2",
        "dlp-end-term-aug-2025-fn-q2"
      ]
    },
    {
      "title": "Order AlexNet, VGG-19, Inception-v3 and ResNet-50 by depth",
      "ids": [
        "dlp-end-term-aug-2025-an-q3",
        "dlp-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Explain why a deeper network does not help on a small image dataset",
      "ids": [
        "dlp-end-term-aug-2025-an-q4",
        "dlp-end-term-aug-2025-fn-q4"
      ]
    },
    {
      "title": "Select valid advantages of CNNs over MLPs for images",
      "ids": [
        "dlp-end-term-aug-2025-an-q8",
        "dlp-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "title": "Select valid advantages of YOLO over Fast/Faster R-CNN",
      "ids": [
        "dlp-end-term-aug-2025-an-q10",
        "dlp-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Pick the advantages of one CNN architecture over another",
      "ids": [
        "dlp-end-term-aug-2025-an-q11",
        "dlp-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Identify PyTorch code snippets valid for data augmentation",
      "ids": [
        "dlp-end-term-aug-2025-an-q12",
        "dlp-end-term-aug-2025-fn-q12"
      ]
    },
    {
      "title": "Select correct statements about GAN training",
      "ids": [
        "dlp-end-term-aug-2025-an-q13",
        "dlp-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "title": "Identify correct/incorrect differences between SRGAN and ESRGAN",
      "ids": [
        "dlp-end-term-aug-2025-an-q14",
        "dlp-end-term-aug-2025-fn-q14"
      ]
    },
    {
      "title": "Count which listed components belong to the original MPRNet",
      "ids": [
        "dlp-end-term-aug-2025-an-q15",
        "dlp-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "title": "Count total operations of parallel 1x1, 3x3 and 5x5 convolutions",
      "ids": [
        "dlp-end-term-aug-2025-an-q16",
        "dlp-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Compute PSNR in dB from a given MSE",
      "ids": [
        "dlp-end-term-aug-2025-an-q20",
        "dlp-end-term-aug-2025-an-q21",
        "dlp-end-term-aug-2025-fn-q20",
        "dlp-end-term-aug-2025-fn-q21"
      ]
    },
    {
      "title": "Decide which model is closer to ground truth using PSNR",
      "ids": [
        "dlp-end-term-aug-2025-an-q22",
        "dlp-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "title": "Identify the correct statement about the original U-Net layers",
      "ids": [
        "dlp-end-term-aug-2025-an-q7",
        "dlp-end-term-aug-2025-fn-q7"
      ]
    }
  ]
};
