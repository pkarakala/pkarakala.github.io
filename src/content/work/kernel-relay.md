---
title: KernelRelay
slug: kernel-relay
summary: Built a loop to check and time Triton kernels against eager PyTorch. Proposals currently come from a fixed mock.
evidence:
  statement: 'In one Tesla T4 run, a verified fused kernel took 0.053 ms versus 0.120 ms for the best framework path (2.26×), measured in the same process. Other runs varied.'
  label: Methods & timings
  url: https://github.com/pkarakala/kernel-relay/blob/main/results/agent-eval/README.md
category: Independent project
date: September 2026
order: 9
repository: https://github.com/pkarakala/kernel-relay
status: The mock proposer does not learn from feedback. These timings apply to the tested workload and GPU.
---
