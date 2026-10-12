import type { PyqTopicTags } from "../../types";

// 81 past-paper questions in 11 topics, 10 repeated question types.
// Tagged once from every question (text and figures); question ids match the paper data.

export const mathematicalFoundationsOfGenerativeAiTopics: PyqTopicTags = {
  "topics": [
    {
      "slug": "divergences-f-gan",
      "title": "KL, JS & f-divergences",
      "summary": "KL between Gaussians, JS for disjoint supports, f-divergence generators and variational forms",
      "ids": [
        "mfgai-end-term-aug-2025-an-q1",
        "mfgai-end-term-aug-2025-an-q3",
        "mfgai-end-term-aug-2025-fn-q1",
        "mfgai-quiz-1-oct-2025-an-q1",
        "mfgai-quiz-1-oct-2025-an-q3",
        "mfgai-quiz-1-oct-2025-an-q13"
      ]
    },
    {
      "slug": "gan-objective-training",
      "title": "GAN objective & training",
      "summary": "Optimal discriminator, value function, vanishing gradients, generator losses and layer sizes",
      "ids": [
        "mfgai-end-term-aug-2025-an-q2",
        "mfgai-end-term-aug-2025-an-q4",
        "mfgai-end-term-aug-2025-fn-q2",
        "mfgai-end-term-aug-2025-fn-q3",
        "mfgai-quiz-1-oct-2025-an-q2",
        "mfgai-quiz-1-oct-2025-an-q5",
        "mfgai-quiz-1-oct-2025-an-q15",
        "mfgai-quiz-1-oct-2025-an-q17",
        "mfgai-quiz-1-oct-2025-an-q18"
      ]
    },
    {
      "slug": "wgan-optimal-transport",
      "title": "Wasserstein GAN & optimal transport",
      "summary": "Transport plans, EMD/W1 distance, critic estimates and weight clipping",
      "ids": [
        "mfgai-end-term-aug-2025-fn-q4",
        "mfgai-quiz-1-oct-2025-an-q7",
        "mfgai-quiz-1-oct-2025-an-q11",
        "mfgai-quiz-1-oct-2025-an-q12",
        "mfgai-quiz-1-oct-2025-an-q19",
        "mfgai-quiz-1-oct-2025-an-q20"
      ]
    },
    {
      "slug": "bigan-evaluation",
      "title": "BiGAN, domain adaptation & FID",
      "summary": "BiGAN discriminator and cycle error, gradient reversal layers and FID interpretation",
      "ids": [
        "mfgai-end-term-aug-2025-fn-q5",
        "mfgai-quiz-1-oct-2025-an-q4",
        "mfgai-quiz-1-oct-2025-an-q6",
        "mfgai-quiz-1-oct-2025-an-q8",
        "mfgai-quiz-1-oct-2025-an-q9",
        "mfgai-quiz-1-oct-2025-an-q10",
        "mfgai-quiz-1-oct-2025-an-q14",
        "mfgai-quiz-1-oct-2025-an-q16"
      ]
    },
    {
      "slug": "gmm-em-elbo",
      "title": "GMMs, EM & the ELBO",
      "summary": "GMM responsibilities, M-step means, ELBO values and optimal decoder variance",
      "ids": [
        "mfgai-quiz-2-aug-2025-an-q1",
        "mfgai-quiz-2-aug-2025-an-q2",
        "mfgai-quiz-2-aug-2025-an-q4",
        "mfgai-end-term-aug-2025-an-q5",
        "mfgai-end-term-aug-2025-an-q8"
      ]
    },
    {
      "slug": "variational-autoencoders",
      "title": "VAEs & reparameterisation",
      "summary": "Reparameterisation trick, KL to a standard normal, Beta-VAE loss, shapes and parameter counts",
      "ids": [
        "mfgai-quiz-2-aug-2025-an-q3",
        "mfgai-quiz-2-aug-2025-an-q5",
        "mfgai-quiz-2-aug-2025-an-q9",
        "mfgai-quiz-2-aug-2025-an-q10",
        "mfgai-quiz-2-aug-2025-an-q12",
        "mfgai-quiz-2-aug-2025-an-q14",
        "mfgai-end-term-aug-2025-an-q6",
        "mfgai-end-term-aug-2025-an-q7",
        "mfgai-end-term-aug-2025-fn-q6",
        "mfgai-end-term-aug-2025-fn-q7",
        "mfgai-end-term-aug-2025-fn-q8"
      ]
    },
    {
      "slug": "vq-vae",
      "title": "VQ-VAE & codebooks",
      "summary": "Nearest-codeword quantisation, commitment loss and latent size in bits",
      "ids": [
        "mfgai-quiz-2-aug-2025-an-q6",
        "mfgai-quiz-2-aug-2025-an-q7",
        "mfgai-end-term-aug-2025-an-q9",
        "mfgai-end-term-aug-2025-fn-q9"
      ]
    },
    {
      "slug": "ddpm",
      "title": "DDPM: forward & reverse process",
      "summary": "Noising x_t, closed-form marginals, epsilon-to-mean, posterior coefficients and PyTorch shapes",
      "ids": [
        "mfgai-quiz-2-aug-2025-an-q8",
        "mfgai-quiz-2-aug-2025-an-q11",
        "mfgai-quiz-2-aug-2025-an-q13",
        "mfgai-quiz-2-aug-2025-an-q15",
        "mfgai-quiz-2-aug-2025-an-q16",
        "mfgai-quiz-2-aug-2025-an-q17",
        "mfgai-end-term-aug-2025-an-q10",
        "mfgai-end-term-aug-2025-an-q11",
        "mfgai-end-term-aug-2025-an-q12",
        "mfgai-end-term-aug-2025-an-q13",
        "mfgai-end-term-aug-2025-fn-q10",
        "mfgai-end-term-aug-2025-fn-q11",
        "mfgai-end-term-aug-2025-fn-q12",
        "mfgai-end-term-aug-2025-fn-q13"
      ]
    },
    {
      "slug": "ddim-guidance",
      "title": "DDIM sampling & guidance",
      "summary": "Deterministic DDIM, eta noise scale, DDIM step code and classifier-free guidance",
      "ids": [
        "mfgai-end-term-aug-2025-an-q14",
        "mfgai-end-term-aug-2025-an-q15",
        "mfgai-end-term-aug-2025-fn-q14",
        "mfgai-end-term-aug-2025-fn-q15"
      ]
    },
    {
      "slug": "transformers-decoding",
      "title": "Transformers, attention & decoding",
      "summary": "Top-k/top-p renormalisation, attention outputs and parameters, layer normalisation",
      "ids": [
        "mfgai-end-term-aug-2025-an-q16",
        "mfgai-end-term-aug-2025-an-q17",
        "mfgai-end-term-aug-2025-an-q18",
        "mfgai-end-term-aug-2025-an-q19",
        "mfgai-end-term-aug-2025-fn-q16",
        "mfgai-end-term-aug-2025-fn-q17",
        "mfgai-end-term-aug-2025-fn-q18",
        "mfgai-end-term-aug-2025-fn-q19"
      ]
    },
    {
      "slug": "rl-for-language-models",
      "title": "RL for LMs: policy gradient & PPO",
      "summary": "LM as an MDP, discounted returns, policy gradient and PPO ratio/clipped objective",
      "ids": [
        "mfgai-end-term-aug-2025-an-q20",
        "mfgai-end-term-aug-2025-an-q21",
        "mfgai-end-term-aug-2025-an-q22",
        "mfgai-end-term-aug-2025-fn-q20",
        "mfgai-end-term-aug-2025-fn-q21",
        "mfgai-end-term-aug-2025-fn-q22"
      ]
    }
  ],
  "repeats": [
    {
      "title": "Count trainable parameters of fully connected generator/encoder layers",
      "ids": [
        "mfgai-quiz-2-aug-2025-an-q9",
        "mfgai-end-term-aug-2025-an-q7",
        "mfgai-quiz-1-oct-2025-an-q5"
      ]
    },
    {
      "title": "Compute the latent z with the reparameterisation trick",
      "ids": [
        "mfgai-quiz-2-aug-2025-an-q3",
        "mfgai-end-term-aug-2025-an-q6"
      ]
    },
    {
      "title": "Compute the noised sample x_t in the DDPM forward process",
      "ids": [
        "mfgai-quiz-2-aug-2025-an-q11",
        "mfgai-end-term-aug-2025-fn-q10"
      ]
    },
    {
      "title": "Find the GAN generator gradient when supports are disjoint",
      "ids": [
        "mfgai-end-term-aug-2025-an-q2",
        "mfgai-quiz-1-oct-2025-an-q17"
      ]
    },
    {
      "title": "Compute the output spatial size of (transposed) conv layers",
      "ids": [
        "mfgai-end-term-aug-2025-an-q4",
        "mfgai-end-term-aug-2025-fn-q3"
      ]
    },
    {
      "title": "Pick the PyTorch code for the DDPM mean from predicted noise",
      "ids": [
        "mfgai-end-term-aug-2025-an-q12",
        "mfgai-end-term-aug-2025-fn-q11"
      ]
    },
    {
      "title": "Renormalise token probabilities after top-p/top-k filtering",
      "ids": [
        "mfgai-end-term-aug-2025-an-q16",
        "mfgai-end-term-aug-2025-fn-q16"
      ]
    },
    {
      "title": "Count projection matrix parameters in self-attention",
      "ids": [
        "mfgai-end-term-aug-2025-an-q17",
        "mfgai-end-term-aug-2025-fn-q18"
      ]
    },
    {
      "title": "Evaluate the PPO clipped surrogate objective",
      "ids": [
        "mfgai-end-term-aug-2025-an-q21",
        "mfgai-end-term-aug-2025-fn-q22"
      ]
    },
    {
      "title": "Identify what the BiGAN discriminator distinguishes/optimises",
      "ids": [
        "mfgai-end-term-aug-2025-fn-q5",
        "mfgai-quiz-1-oct-2025-an-q16"
      ]
    }
  ]
};
