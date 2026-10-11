import type { QualifierMock } from "../../types";

// Deep Learning Practice: IIT Madras BS End Term papers (3 papers, 64 questions).
// Questions, options and answer keys are reproduced from the official question papers.
// Figures, code and maths typeset as images are in public/pyq/<slug>/, embedded inline as
// ![Figure](src#WxH). Range answers are stored as midpoint ± tolerance.
// Generated from the paper PDFs; edit with care.

export const dlpEndTermPapers: QualifierMock[] = [
  {
    slug: "dlp-end-term-aug-2025-fn",
    title: "DLP End Term · 31 Aug 2025 (FN)",
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
        subjectSlug: "deep-learning-practice",
        title: "Deep Learning Practice",
        short: "DLP",
        questions: [
          {
            id: "dlp-end-term-aug-2025-fn-q1",
            type: "mcq",
            marks: 5,
            prompt: "Consider the task of applying a convolutional layer with a stride of 1 to an image of size 227 × 227 (Grayscale), while ensuring that the output feature map retains the same spatial dimensions. Which of the following code snippets correctly implements this using PyTorch?",
            options: [
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q1-opt1-1.webp#575x25)",
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q1-opt2-1.webp#575x23)",
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q1-opt3-1.webp#575x22)",
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q1-opt4-1.webp#575x27)"
            ],
            answer: 3,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q2",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q2-1.webp#575x134)",
            options: [
              "Output size: 8 × 8; Effective receptive field: 5 × 5",
              "Output size: 10 × 10; Effective receptive field: 5 × 5",
              "Output size: 10 × 10; Effective receptive field: 3 × 3",
              "Output size: 12 × 12; Effective receptive field: 7 × 7"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q3",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q3-1.webp#575x197)",
            options: [
              "AlexNet < InceptionNet-v3 < VGG-19 < ResNet-50",
              "AlexNet < VGG-19 < Inception-v3 < ResNet-50",
              "Inception-v3 < AlexNet < VGG-19 < ResNet-50",
              "AlexNet < Inception-v3 < ResNet-50 < VGG-19"
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q4",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q4-1.webp#575x599)",
            options: [
              "ResNet has too many parameters for this simple task.",
              "Residual connections are only useful when training very deep networks, and this task does not require such depth.",
              "ResNet architectures perform poorly on low-resolution inputs due to their reliance on fixed feature scales.",
              "InceptionNet would have been better because it uses multiple receptive fields in parallel."
            ],
            answer: 1,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q5",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q5-1.webp#575x528)",
            options: [
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q5-opt1-1.webp#410x25)",
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q5-opt2-1.webp#402x21)",
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q5-opt3-1.webp#552x24)",
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q5-opt4-1.webp#383x27)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q6",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q6-1.webp#575x323)",
            options: [
              "A–(e), B–(c), C–(a), D–(d), E–(b)",
              "A–(e), B–(b), C–(c), D–(a), E–(d)",
              "A–(e), B–(a), C–(c), D–(d), E–(b)",
              "A–(c), B–(e), C–(a), D–(b), E–(d)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q7",
            type: "mcq",
            marks: 5,
            prompt: "Consider the original U-Net architecture.\nWhich of the following statements about the convolutional and pooling operations is correct?",
            options: [
              "U-Net uses 5 × 5 convolutional filters and 2 × 2 max pooling filters with stride 2 in the encoder path.",
              "U-Net uses 3 × 3 convolutional filters and 2 × 2 average pooling filters with stride 1 in both encoder and decoder.",
              "U-Net uses 3 × 3 convolutional filters (with padding) and 2 × 2 max pooling filters with stride 2 to halve the spatial resolution in the encoder.",
              "U-Net uses 3 × 3 filters and 1 × 1 pooling to preserve spatial dimensions between contracting and expanding paths."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q8",
            type: "multi",
            marks: 5,
            prompt: "Which of the following are valid advantages of using Convolutional Neural Networks (CNNs) instead of fully connected Multilayer Perceptrons (MLPs) for image-based tasks?",
            options: [
              "CNNs require significantly fewer parameters than MLPs for high-dimensional image inputs.",
              "CNNs are better at capturing spatial hierarchies due to weight sharing and local connectivity.",
              "CNNs can approximate any function with fewer layers than MLPs due to the universal approximation theorem.",
              "CNNs are translation invariant by design, making them robust to object position shifts in images.",
              "CNNs do not require any activation functions since convolutions are linear operators.",
              "CNNs are computationally faster than MLPs on image data due to sparse connections and weight sharing."
            ],
            answer: [
              0,
              1,
              3,
              5
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q9",
            type: "multi",
            marks: 5,
            prompt: "In the Faster R-CNN architecture, the Region Proposal Network (RPN) plays a critical role in object detection.\nWhich of the following statements correctly describe the role of the RPN?",
            options: [
              "The RPN generates a set of class-agnostic region proposals likely to contain objects.",
              "The RPN performs classification and bounding box regression to output object classes and their exact locations.",
              "The RPN uses anchor boxes of different scales and aspect ratios to slide over convolutional feature maps.",
              "The RPN replaces traditional region proposal methods like selective search, making the pipeline faster and end-to-end trainable.",
              "The RPN outputs fixed-size feature maps that are directly used for object classification.",
              "The RPN filters out background regions by assigning objectness scores to anchors."
            ],
            answer: [
              0,
              2,
              3,
              5
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q10",
            type: "multi",
            marks: 5,
            prompt: "Which of the following are valid advantages of YOLO compared to Fast R-CNN or Faster R-CNN?",
            options: [
              "YOLO performs object classification and localization in a single forward pass, making it faster than two-stage detectors like Fast R-CNN and Faster R-CNN.",
              "YOLO does not require region proposal generation, making the entire pipeline fully end-to-end trainable.",
              "YOLO achieves higher localization accuracy than Faster R-CNN on small objects due to its coarse grid-based prediction.",
              "YOLO treats bounding box coordinates and objectness score as regression outputs, while computing class probabilities through classification.",
              "YOLO achieves higher precision by using a large number of anchor boxes per region.",
              "YOLO treats object detection as a regression problem, which simplifies the detection pipeline and reduces computational overhead."
            ],
            answer: [
              0,
              1,
              3,
              5
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q11",
            type: "multi",
            marks: 5,
            prompt: "Which of the following are advantages of ResNet over VGG-19?",
            options: [
              "ResNet requires fewer parameters than VGG-19 while achieving higher accuracy.",
              "ResNet’s residual connections help mitigate vanishing gradients in very deep networks.",
              "On the CIFAR-10 dataset, ResNet achieves higher training and validation accuracy using significantly fewer convolutional layers than VGG-19.",
              "ResNet models can be trained with depths exceeding 100 layers without suffering from degradation problems.",
              "ResNet blocks require more memory and training time due to the skip connections compared to VGG-19.",
              "VGG-19 is easier to deploy on edge devices because of its lightweight residual architecture."
            ],
            answer: [
              0,
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q12",
            type: "multi",
            marks: 5,
            prompt: "Which of the following code snippets can be used for data augmentation during training in PyTorch?",
            options: [
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q12-opt1-1.webp#344x105)",
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q12-opt2-1.webp#304x108)",
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q12-opt3-1.webp#509x106)",
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q12-opt4-1.webp#513x93)",
              "![Figure](/pyq/dlp-end-term-aug-2025-fn/q12-opt5-1.webp#292x101)"
            ],
            answer: [
              0,
              2,
              4
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q13",
            type: "multi",
            marks: 5,
            prompt: "Which of the following statements are correct regarding Generative Adversarial Networks (GANs)?",
            options: [
              "The generator tries to minimize the probability that the discriminator correctly classifies fake samples.",
              "The discriminator is trained to maximize the probability of correctly classifying real and generated (fake) data.",
              "The generator directly receives labeled training data to learn the target distribution.",
              "During training, the generator is updated based on the discriminator’s feedback to improve sample quality.",
              "GAN training can suffer from instability due to the adversarial objective, leading to issues like mode collapse.",
              "A perfectly trained discriminator ensures faster convergence of the generator."
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
            id: "dlp-end-term-aug-2025-fn-q14",
            type: "multi",
            marks: 5,
            prompt: "SRGAN and ESRGAN are both deep learning architectures designed for single image super- resolution. Which of the following statements correctly describe the key differences between ESRGAN and SRGAN?",
            options: [
              "ESRGAN replaces the standard residual blocks in SRGAN with Residual-in- Residual Dense Blocks (RRDB) for better performance.",
              "SRGAN employs Perceptual Loss, while ESRGAN removes it to focus only on pixel-wise MSE loss for training stability.",
              "ESRGAN produces sharper and more realistic textures than SRGAN due to architectural and loss function improvements.",
              "Both SRGAN and ESRGAN use a VGG-based perceptual loss computed on feature maps extracted from deeper and shallower layers, respectively, of a pretrained classifier.",
              "SRGAN is trained using only adversarial and perceptual losses, whereas ESRGAN includes a content loss computed using pixel-wise L1 loss."
            ],
            answer: [
              0,
              2,
              4
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q15",
            type: "multi",
            marks: 5,
            prompt: "The Multi-stage Progressive Image Restoration Network (MPRNet) is a state-of-the-art architecture for tasks like image deblurring and deraining. It follows a multi-stage design where features are progressively refined across stages. how many of the above components are explicitly part of the original MPRNet architecture?",
            options: [
              "a single layer neural network.",
              "UNet",
              "Supervised Attention Module",
              "Channel Attention Block",
              "Fast RCNN block"
            ],
            answer: [
              1,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q16",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q16-1.webp#575x194)",
            answer: 3029908880,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q17",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q17-1.webp#575x174)",
            answer: 0.63,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.61 to 0.65."
          },
          {
            id: "dlp-end-term-aug-2025-fn-q18",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q18-1.webp#575x400)",
            answer: 0.51,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.49 to 0.53."
          },
          {
            id: "dlp-end-term-aug-2025-fn-q19",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q19-1.webp#575x185)",
            answer: 64,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q20",
            type: "numerical",
            marks: 1.5,
            passage: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q20-passage-1.webp#575x295)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Compute the PSNR for Model 1 (in dB) (rounded to 2 decimal places) :",
            answer: 25,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-fn-q21",
            type: "numerical",
            marks: 1.5,
            passage: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q20-passage-1.webp#575x295)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Compute the PSNR for Model 2 (in dB) (rounded to 2 decimal places):",
            answer: 25.57,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 25.55 to 25.59."
          },
          {
            id: "dlp-end-term-aug-2025-fn-q22",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/dlp-end-term-aug-2025-fn/q20-passage-1.webp#575x295)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which model produces an image more similar to the ground truth?",
            answer: 2,
            explanation: ""
          }
        ]
      }
    ]
  },
  {
    slug: "dlp-end-term-aug-2025-an",
    title: "DLP End Term · 31 Aug 2025 (AN)",
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
        subjectSlug: "deep-learning-practice",
        title: "Deep Learning Practice",
        short: "DLP",
        questions: [
          {
            id: "dlp-end-term-aug-2025-an-q1",
            type: "mcq",
            marks: 5,
            prompt: "Consider the task of applying a convolutional layer with a stride of 1 to an image of size 111 × 111 (Grayscale), while ensuring that the output feature map retains the same spatial dimensions. Which of the following code snippets correctly implements this using PyTorch?",
            options: [
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q1-opt1-1.webp#575x30)",
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q1-opt2-1.webp#575x29)",
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q1-opt3-1.webp#575x29)",
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q1-opt4-1.webp#575x31)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q2",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-an/q2-1.webp#575x139)",
            options: [
              "Output size: 15 × 15; Effective receptive field: 5 × 5",
              "Output size: 17 × 17; Effective receptive field: 5 × 5",
              "Output size: 13 × 13; Effective receptive field: 5 × 5",
              "Output size: 15 × 15; Effective receptive field: 3 × 3"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q3",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-an/q3-1.webp#575x185)",
            options: [
              "ResNet-50 > Inception-v3 > VGG-19 > AlexNet",
              "ResNet-50 > VGG-19 > Inception-v3 > AlexNet",
              "Inception-v3 > ResNet-50 > VGG-19 > AlexNet",
              "VGG-19 > ResNet-50 > Inception-v3 > AlexNet"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q4",
            type: "mcq",
            marks: 5,
            prompt: "Consider the following PyTorch CNN model used for a classification task on a small dataset of 32 x 32 RGB images:\n\n![Figure](/pyq/dlp-end-term-aug-2025-an/q4-1.webp#575x624)",
            options: [
              "VGG-19 uses too many skip connections, which interfere with shallow patterns.",
              "The original model had batch normalization, and VGG-19 lacks it by default.",
              "The dataset is too small and simple for a deep architecture like VGG-19 to show its advantages, and may even overfit.",
              "VGG-19 performs better only on grayscale images, not RGB images."
            ],
            answer: 2,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q5",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-an/q5-1.webp#575x431)",
            options: [
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q5-opt1-1.webp#282x32)",
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q5-opt2-1.webp#385x31)",
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q5-opt3-1.webp#333x28)",
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q5-opt4-1.webp#354x22)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q6",
            type: "mcq",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-an/q6-1.webp#575x305)",
            options: [
              "A–(d), B–(e), C–(a), D–(b), E–(c)",
              "A–(d), B–(a), C–(e), D–(b), E–(c)",
              "A–(e), B–(d), C–(a), D–(c), E–(b)",
              "A–(d), B–(e), C–(b), D–(a), E–(c)"
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q7",
            type: "mcq",
            marks: 5,
            prompt: "In the original U-Net architecture, which of the following statements about the decoder (expanding) path is correct?",
            options: [
              "The decoder upsamples the feature maps using 2 x 2 transposed convolutions and concatenates them with corresponding encoder features.",
              "The decoder uses 3 x 3 max pooling to increase the spatial resolution before feature fusion.",
              "The decoder applies 1 x 1 convolutions to increase spatial dimensions and reduce channel depth.",
              "The decoder merges encoder and decoder features using element-wise addition instead of concatenation."
            ],
            answer: 0,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q8",
            type: "multi",
            marks: 5,
            prompt: "Which of the following are valid reasons why Convolutional Neural Networks (CNNs) are preferred over fully connected Multilayer Perceptrons (MLPs) for image processing tasks?",
            options: [
              "CNNs reduce the number of parameters by using local connections and weight sharing.",
              "CNNs can process images of arbitrary size without any architectural changes.",
              "CNNs exploit the spatial structure of images, making them more efficient at recognizing patterns.",
              "CNNs perform better than MLPs because they always use deeper networks.",
              "CNNs maintain spatial hierarchies by stacking convolution and pooling layers.",
              "CNNs can generalize better to unseen data due to their built-in translational invariance."
            ],
            answer: [
              0,
              2,
              4,
              5
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q9",
            type: "multi",
            marks: 5,
            prompt: "In the Faster R-CNN architecture, the Region of Interest (RoI) Pooling layer plays a key role in the object detection pipeline.\nWhich of the following statements correctly describe the function and properties of RoI Pooling?",
            options: [
              "RoI Pooling converts variable-sized region proposals into fixed-size feature maps for the classifier head.",
              "RoI Pooling crops the region proposals from the input image and resizes them to a fixed dimension.",
              "RoI Pooling enables batching and fully connected layers by standardizing the input dimensions.",
              "RoI Pooling uses bilinear interpolation to produce smoother feature maps for each proposal.",
              "RoI Pooling operates on convolutional feature maps, not directly on the raw image.",
              "RoI Pooling discards proposals with low objectness scores before passing them to the classifier."
            ],
            answer: [
              0,
              2,
              4
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q10",
            type: "multi",
            marks: 5,
            prompt: "Which of the following are valid advantages of YOLO compared to Fast R-CNN or Faster R-CNN?",
            options: [
              "YOLO is faster at inference time because it predicts bounding boxes and class probabilities in a single pass.",
              "YOLO is fully end-to-end trainable and does not rely on external region proposal mechanisms.",
              "YOLO achieves higher recall than Faster R-CNN on all types of objects, especially small and overlapping ones.",
              "YOLO formulates detection as a combination of regression (for bounding box coordinates and objectness score) and classification (for discrete object categories).",
              "YOLO uses multi-scale feature fusion to improve detection of small objects.",
              "YOLO’s architecture allows it to be deployed more easily on real-time and edge devices due to its compactness."
            ],
            answer: [
              0,
              1,
              3,
              5
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q11",
            type: "multi",
            marks: 5,
            prompt: "Which of the following are NOT advantages of AlexNet over InceptionNet?",
            options: [
              "AlexNet is simpler and easier to implement compared to the complex multi- branch design of InceptionNet.",
              "AlexNet requires fewer parameters than InceptionNet due to its shallow architecture.",
              "AlexNet has better accuracy on ImageNet than InceptionNet due to its early adoption of ReLU and dropout.",
              "AlexNet is faster to train on small datasets because of its shallow depth and simpler structure.",
              "InceptionNet extracts multi-scale features using filters of different sizes in parallel, which improves accuracy.",
              "AlexNet lacks 1 x 1 convolutions, which are used in InceptionNet for dimensionality reduction and increased efficiency."
            ],
            answer: [
              2,
              4,
              5
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q12",
            type: "multi",
            marks: 5,
            prompt: "Which of the following code snippets can be used for data augmentation during training in PyTorch?",
            options: [
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q12-opt1-1.webp#369x112)",
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q12-opt2-1.webp#303x105)",
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q12-opt3-1.webp#555x110)",
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q12-opt4-1.webp#425x111)",
              "![Figure](/pyq/dlp-end-term-aug-2025-an/q12-opt5-1.webp#571x111)"
            ],
            answer: [
              0,
              2,
              4
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q13",
            type: "multi",
            marks: 5,
            prompt: "Which of the following statements are correct regarding the training dynamics and properties of Generative Adversarial Networks (GANs)?",
            options: [
              "The generator’s objective is to produce data that the discriminator cannot distinguish from real data.",
              "The discriminator is trained to minimize the distance between the generated data and the real data distributions.",
              "GAN training is a min-max game where the generator and discriminator have opposing goals.",
              "Mode collapse refers to the generator producing diverse outputs that cover multiple modes of the data distribution.",
              "A balance between generator and discriminator learning rates is important to ensure stable training.",
              "Conditional GANs extend standard GANs by incorporating label information into both the generator and discriminator."
            ],
            answer: [
              0,
              2,
              4,
              5
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q14",
            type: "multi",
            marks: 5,
            prompt: "SRGAN and ESRGAN are both deep learning architectures designed for single image super- resolution. Which of the following statements about the differences between ESRGAN and SRGAN are NOT correct?",
            options: [
              "ESRGAN replaces the standard residual blocks in SRGAN with Residual-in- Residual Dense Blocks (RRDB) for better performance.",
              "SRGAN employs Perceptual Loss, while ESRGAN removes it to focus only on pixel-wise MSE loss for training stability.",
              "ESRGAN produces sharper and more realistic textures than SRGAN due to architectural and loss function improvements.",
              "Both SRGAN and ESRGAN use a VGG-based perceptual loss computed on feature maps extracted from deeper layers of a pretrained classifier.",
              "SRGAN is trained using only adversarial and perceptual losses, whereas ESRGAN includes a content loss computed using pixel-wise L1 loss."
            ],
            answer: [
              1,
              3
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q15",
            type: "multi",
            marks: 5,
            prompt: "The Multi-stage Progressive Image Restoration Network (MPRNet) is designed to progressively restore degraded images across multiple stages. It integrates several architectural innovations to enhance image restoration performance. How many of the above components are explicitly part of the original MPRNet architecture?",
            options: [
              "UNet-style encoder-decoder at each stage",
              "Residual Channel Attention Network (RCAN)",
              "Supervised Attention Module (SAM)",
              "Skip connections across stages",
              "Non-local Attention Module"
            ],
            answer: [
              0,
              2,
              3
            ],
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q16",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-an/q16-1.webp#575x203)",
            answer: 394264576,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q17",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-an/q17-1.webp#575x169)",
            answer: 0.63,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.61 to 0.65."
          },
          {
            id: "dlp-end-term-aug-2025-an-q18",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-an/q18-1.webp#575x399)",
            answer: 0.32,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 0.3 to 0.34."
          },
          {
            id: "dlp-end-term-aug-2025-an-q19",
            type: "numerical",
            marks: 5,
            prompt: "![Figure](/pyq/dlp-end-term-aug-2025-an/q19-1.webp#575x189)",
            answer: 25,
            explanation: ""
          },
          {
            id: "dlp-end-term-aug-2025-an-q20",
            type: "numerical",
            marks: 1.5,
            passage: "![Figure](/pyq/dlp-end-term-aug-2025-an/q20-passage-1.webp#575x298)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Compute the PSNR for Model 1 (in dB) (rounded to 2 decimal places):",
            answer: 26.35,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 26.33 to 26.37."
          },
          {
            id: "dlp-end-term-aug-2025-an-q21",
            type: "numerical",
            marks: 1.5,
            passage: "![Figure](/pyq/dlp-end-term-aug-2025-an/q20-passage-1.webp#575x298)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Compute the PSNR for Model 2 (in dB) (rounded to 2 decimal places):",
            answer: 24.88,
            tolerance: 0.02,
            explanation: "Official answer key accepts any value from 24.86 to 24.9."
          },
          {
            id: "dlp-end-term-aug-2025-an-q22",
            type: "numerical",
            marks: 2,
            passage: "![Figure](/pyq/dlp-end-term-aug-2025-an/q20-passage-1.webp#575x298)\n\nBased on the above data, answer the given subquestions.",
            prompt: "Which model produces an image more similar to the ground truth?",
            answer: 1,
            explanation: ""
          }
        ]
      }
    ]
  },
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
