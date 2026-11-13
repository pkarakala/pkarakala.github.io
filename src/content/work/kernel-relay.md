---
title: KernelRelay
slug: kernel-relay
group: ML systems
summary: A harness that checks a fused GPU kernel is both correct and faster than standard PyTorch before trusting it.
metric:
  value: 2.26×
  label: verified fused kernel against the fastest PyTorch path, one Tesla T4 run
built: Built a loop to check and time Triton kernels against eager PyTorch. Proposals currently come from a fixed mock.
evidence:
  statement: 'In one Tesla T4 run, a verified fused kernel took 0.053 ms versus 0.120 ms for the best framework path (2.26×), measured in the same process. Other runs varied.'
  label: Methods & timings
  url: https://github.com/pkarakala/kernel-relay/blob/main/results/agent-eval/README.md
category: Independent project
date: September 2026
order: 7
featuredOrder: 5
repository: https://github.com/pkarakala/kernel-relay
status: The mock proposer does not learn from feedback. These timings apply to the tested workload and GPU.
related:
  - label: ML Systems Lab
    url: https://github.com/pkarakala/ml-systems-lab
  - label: Transformer roofline study
    url: https://github.com/pkarakala/transformer-inference-roofline
---
