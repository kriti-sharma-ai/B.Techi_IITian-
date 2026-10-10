import type { QualifierMock } from "../../types";

// Deep Learning Practice: IIT Madras BS End Term papers (1 papers, 20 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const dlpEndTermPapers: QualifierMock[] = [
  {
    slug: "dlp-end-term-apr-2025-an",
    title: "DLP End Term · 13 Apr 2025 (AN)",
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
        subjectSlug: "deep-learning-practice",
        title: "Deep Learning Practice",
        short: "DLP",
        questions: [
          {
            id: "dlp-end-term-apr-2025-an-q1",
            type: "mcq",
            marks: 5,
            prompt: "Consider the following code snippet for modifying an AlexNet architecture to adapt it for a custom classification task with 10 output classes. Fill in the blank portion with the most appropriate code snippet.\n\n![Figure](/pyq/dlp-end-term-apr-2025-an/q1-1.webp#424x355)\n\nWhich of the following code snippets correctly fills the blank portion to modify the AlexNet classifier while preserving the pretrained feature extraction layers?",
            options: [
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q1-opt1-1.webp#575x29)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q1-opt2-1.webp#493x27)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q1-opt3-1.webp#301x108)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q1-opt4-1.webp#575x35)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q2",
            type: "mcq",
            marks: 5,
            prompt: "An RGB image of size 227 × 227 × 3 is first converted to grayscale and then passed through a 2D Convolutional Neural Network (CNN) layer with the following parameters:\n– Kernel size: 3 × 3\n– Stride: 1\n– Padding: 1\n– Number of filters: 16\nWhat will be the shape of the output feature map?",
            options: [
              "(227, 227, 3)",
              "(227, 227, 16)",
              "(225, 225, 16)",
              "(114, 114, 16)"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q3",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-apr-2025-an/q3-1.webp#575x132)",
            options: [
              "0.25",
              "0.29",
              "0.45",
              "0.21"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q4",
            type: "mcq",
            marks: 5,
            prompt: "Consider a Convolutional Neural Network (CNN) where the feature map after the convolutional and pooling layers has a shape of (8, 8, 64). This feature map is flattened and connected to a fully connected layer with 256 output neurons.\nHow many parameters (weights and biases) are in this fully connected layer?",
            options: [
              "524, 544",
              "65, 536",
              "258, 048",
              "10, 48, 832"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q5",
            type: "mcq",
            marks: 5,
            prompt: "In self-supervised depth estimation, left-right consistency loss is often used to ensure that the depth maps from stereo images agree with each other. Which of the following code snippets correctly implements a left-right consistency loss by reconstructing the left depth map from the right depth map using disparity?",
            options: [
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q5-opt1-1.webp#575x138)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q5-opt2-1.webp#555x119)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q5-opt3-1.webp#575x133)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q5-opt4-1.webp#553x112)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q6",
            type: "mcq",
            marks: 5,
            prompt: "In the Fast R-CNN object detection pipeline, which of the following steps is NOT part of the preprocessing process?",
            options: [
              "Resize the input image to a fixed size.",
              "Extract region proposals using Selective Search.",
              "Apply a Region Proposal Network (RPN) to generate region proposals.",
              "Extract features from the entire image using a CNN backbone before classifying region proposals."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q7",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-apr-2025-an/q7-1.webp#575x396)",
            options: [
              "2.00",
              "2.25",
              "2.40",
              "2.75"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q8",
            type: "mcq",
            marks: 5,
            prompt: "The following code snippets attempt to implement an Inception module in PyTorch. Identify the correct snippet(s):",
            options: [
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q8-opt1-1.webp#364x108)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q8-opt2-1.webp#215x102)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q8-opt3-1.webp#369x104)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q8-opt4-1.webp#360x113)"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q9",
            type: "mcq",
            marks: 5,
            prompt: "LAKDNet is designed to enhance feature extraction and knowledge distillation in deep neural networks. Which of the following best describes its core architectural improvement?",
            options: [
              "It employs a Dual Attention Mechanism (Spatial and Channel Attention) to improve feature aggregation.",
              "It uses Graph Convolutional Networks (GCNs) to capture hierarchical dependencies in spatial features.",
              "It integrates Recurrent Neural Networks (RNNs) to enhance temporal feature extraction.",
              "It relies on Transformer-based self-attention to capture global contextual dependencies."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q10",
            type: "mcq",
            marks: 5,
            prompt: "The following PyTorch code implements a simple Convolutional Neural Network (CNN). However, some of the layers are incomplete. Select the correct option to complete the layers.\n\n![Figure](/pyq/dlp-end-term-apr-2025-an/q10-1.webp#575x429)",
            options: [
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q10-opt1-1.webp#336x153)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q10-opt2-1.webp#349x127)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q10-opt3-1.webp#339x128)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q10-opt4-1.webp#336x154)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q11",
            type: "mcq",
            marks: 5,
            prompt: "SRGAN is a deep learning-based approach for image super-resolution that improves the perceptual quality of upscaled images. Which of the following best describes the role of the adversarial loss in SRGAN?",
            options: [
              "It minimizes the pixel-wise difference between the super-resolved and high- resolution images to ensure pixel accuracy.",
              "It encourages the generator to produce high-resolution images that are perceptually similar to real images by fooling the discriminator.",
              "It directly optimizes the Structural Similarity Index (SSIM) to improve texture and detail preservation.",
              "It ensures that the generated high-resolution images have better Peak Signal- to-Noise Ratio (PSNR) compared to traditional interpolation methods."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q12",
            type: "mcq",
            marks: 5,
            prompt: "In the U-Net architecture, downsampling is performed using pooling layers to reduce spatial dimensions while preserving important features. Which of the following code snippets correctly implement the pooling layer in U-Net?",
            options: [
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q12-opt1-1.webp#516x192)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q12-opt2-1.webp#515x196)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q12-opt3-1.webp#503x189)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q12-opt4-1.webp#509x193)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q13",
            type: "mcq",
            marks: 5,
            prompt: "Consider the following code snippet, which generates predictions and ground truth for an object detection task:\n\n![Figure](/pyq/dlp-end-term-apr-2025-an/q13-1.webp#575x842)\n\nGiven the predictions and ground truths, what are the precision and recall values?",
            options: [
              "Precision: 0.75, Recall: 1.00",
              "Precision: 0.75, Recall: 0.75",
              "Precision: 1.00, Recall: 0.75",
              "Precision: 0.60, Recall: 1.00"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q14",
            type: "mcq",
            marks: 5,
            prompt: "Consider the following code snippet, which calculates the F1-score for an object detection task:\n\n![Figure](/pyq/dlp-end-term-apr-2025-an/q14-1.webp#575x422)\n\nGiven the predictions and ground truth, what is the calculated F1-score?",
            options: [
              "0.67",
              "0.71",
              "0.73",
              "0.75"
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q15",
            type: "mcq",
            marks: 5,
            prompt: "In VGGNet, which part of the architecture contributes the most to memory utilization during training, and which part contains the **highest number of parameters?",
            options: [
              "The early convolutional layers have the highest memory utilization, while the fully connected layers** have the highest number of parameters.",
              "The fully connected layers have the highest memory utilization, while the convolutional layers have the highest number of parameters.",
              "The deeper convolutional layers have the highest memory utilization, while the **pooling layers** have the highest number of parameters.",
              "The batch normalization layers have the highest memory utilization, while the skip connections have the highest number of parameters."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q16",
            type: "multi",
            marks: 5,
            prompt: "Which of the following code snippets correctly implement Min Pooling in PyTorch?",
            options: [
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q16-opt1-1.webp#508x211)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q16-opt2-1.webp#453x116)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q16-opt3-1.webp#513x204)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q16-opt4-1.webp#575x206)"
            ],
            answer: [
              0,
              1
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q17",
            type: "multi",
            marks: 5,
            prompt: "In deep convolutional neural networks, 1 x 1 convolutions play a significant role in optimizing computation and feature extraction. Which of the following statements correctly describe their role in modern CNN architectures?",
            options: [
              "1 x 1 convolutions can be used to perform dimensionality reduction by reducing the number of channels before applying computationally expensive convolutions.",
              "They introduce non-linearity into the network, even when used without activation functions.",
              "1 x 1 convolutions enable cross-channel interactions by linearly combining feature maps from different channels.",
              "In ResNet architectures, 1 x 1 convolutions are used in bottleneck blocks to match the dimensions when applying skip connections.",
              "When applied after a max pooling layer, 1 x 1 convolutions help recover lost spatial information by increasing the resolution of the feature maps."
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q18",
            type: "multi",
            marks: 5,
            prompt: "Consider the following PyTorch code snippet for a custom ResNet block.\n\n![Figure](/pyq/dlp-end-term-apr-2025-an/q18-1.webp#575x716)\n\nWhich of the following options correctly fill in the missing code snippet?",
            options: [
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q18-opt1-1.webp#152x31)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q18-opt2-1.webp#269x39)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q18-opt3-1.webp#308x45)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q18-opt4-1.webp#349x39)",
              "![Figure](/pyq/dlp-end-term-apr-2025-an/q18-opt5-1.webp#216x28)"
            ],
            answer: [
              1,
              2
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q19",
            type: "multi",
            marks: 5,
            prompt: "Estimating depth from a single image using a multiscale deep neural network presents several challenges. Which of the following correctly describe these challenges?",
            options: [
              "Understanding global context and handling variations in scene geometry and textureless regions.",
              "Dealing with scale ambiguity and the lack of absolute depth reference in monocular images.",
              "Reducing computational complexity while matching points across two images.",
              "Handling occlusions and depth discontinuities, especially at object boundaries.",
              "Accurately aligning stereo image pairs and computing disparity for depth estimation."
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-apr-2025-an-q20",
            type: "multi",
            marks: 5,
            prompt: "Monocular depth estimation using a multiscale deep neural network presents several challenges due to the lack of direct depth cues. Which of the following is a primary challenge specific to monocular depth estimation?",
            options: [
              "Handling scale ambiguity and the absence of absolute depth reference in single images.",
              "Accurately computing depth by triangulating matching keypoints between two images.",
              "Estimating depth consistently in textureless regions and under varying lighting conditions.",
              "Using LiDAR or structured light to obtain precise depth values instead of predicting them."
            ],
            answer: [
              0,
              2
            ],
            explanation: ""
          }
        ]
      }
    ]
  }
];
