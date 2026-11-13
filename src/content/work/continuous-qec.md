---
title: Continuous Quantum Error Correction
slug: continuous-qec
group: Quantum
summary: Can a small neural network track errors in a continuously measured qubit better than a hand built filter? We tested it as the noise got more realistic.
metric:
  value: 88% vs 84%
  label: GRU against the Bayesian filter with colored noise, transients, and drift
built: Compared threshold decoders, Bayesian filters, and GRUs on simulated continuous syndrome measurements across four phases of increasing realism.
evidence:
  statement: 'GRU 88% vs Bayesian 84% under non ideal noise and drift (Phase 3). The Bayesian filter wins when its noise model holds (95% vs 93%, Phase 2), and self training without labels collapsed to 45%.'
  label: View results plot
  url: https://github.com/pkarakala/cqec-ml-decoder/blob/main/outputs/figures/robustness_vs_noise.png
category: Research
date: January 2026 to present
collaborators: [Clark Enge]
order: 11
repository: https://github.com/pkarakala/cqec-ml-decoder
status: Simulated measurement records only, from one recorded run per phase.
cover:
  src: /assets/images/cqec-robustness.webp
  alt: Line chart of decoder test accuracy against measurement noise. The GRU starts near 100% and the threshold decoder near 85%; both fall to about 63% at the highest noise.
  caption: Test accuracy against measurement noise, threshold decoder vs a GRU retrained at each noise level. From the repository.
  width: 1200
  height: 655
---

Numbers from the repository README results tables (Phases 2 to 4).
