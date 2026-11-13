---
title: ML Systems Lab
slug: ml-systems-lab
group: ML systems
summary: Three small prototypes that follow a PyTorch model down the accelerator stack, from computation graph to kernel to simulated hardware.
built: TensorDescent lowers PyTorch FX graphs to an IR with operator fusion and buffer reuse, KernelForge fuses and tiles kernels into CUDA style code, and AccelSim models instruction execution, memory traffic, and cycles.
evidence:
  statement: 'For a 2 layer MLP (1024 to 512 to 10), AccelSim schedules 9 instructions in 27 cycles, 21 compute and 6 memory, moving 2.1 MB at 50.6% buffer utilization.'
  label: AccelSim results
  url: https://github.com/pkarakala/AccelSim
category: Independent project
date: January to April 2026
order: 8
anchorAliases: [tensor-descent, kernel-forge, accel-sim]
repository: https://github.com/pkarakala/ml-systems-lab
status: Instruction costs are fixed toy values (a matrix multiply is 10 cycles), not a calibrated hardware model.
related:
  - label: TensorDescent
    url: https://github.com/pkarakala/FX2Accel
  - label: KernelForge
    url: https://github.com/pkarakala/KernelForge
  - label: AccelSim
    url: https://github.com/pkarakala/AccelSim
cover:
  src: /assets/images/accelsim-timeline.webp
  alt: Timeline chart of AccelSim instructions for a 2 layer MLP. Five one cycle loads, a 10 cycle matrix multiply, a ReLU, a second 10 cycle matrix multiply, and a store, ending at cycle 27.
  caption: AccelSim instruction timeline for a 2 layer MLP, re-plotted from the example in the AccelSim README.
  width: 1200
  height: 560
---
