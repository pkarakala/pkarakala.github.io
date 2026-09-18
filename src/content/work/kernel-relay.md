---
title: KernelRelay
slug: kernel-relay
summary: 'Built an evaluation loop for PyTorch-to-Triton kernel proposals: numerical checks against eager PyTorch, GPU timing for verified candidates, and feedback traces. The current proposer is a fixed mock, not a trained agent.'
evidence:
  statement: 'In one same-process Tesla T4 confirmation, a verified fused candidate took 0.053 ms versus 0.120 ms for the best framework path (2.26×); other runs varied.'
  label: Methods & timings
  url: https://github.com/pkarakala/kernel-relay/blob/main/results/agent-eval/README.md
category: Independent project
date: September 2026
order: 1
featuredOrder: 1
repository: https://github.com/pkarakala/kernel-relay
status: The fixed mock sequence does not adapt to feedback or train a model. This T4 result is not a general GPU speedup claim.
---
