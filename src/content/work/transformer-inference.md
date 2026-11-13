---
title: Transformer Inference Roofline
slug: transformer-inference
group: ML systems
summary: Where does transformer inference spend its time? A roofline model shows when each operation is limited by arithmetic and when by memory bandwidth.
metric:
  value: ~1 FLOP/byte
  label: typical decode intensity, against a ridge point of 80 on the modeled accelerator
built: Python roofline model of attention, projection, MLP, and KV cache operations, swept over sequence length, batch size, and hidden size on a toy accelerator with 120 TFLOP/s and 1.5 TB/s.
evidence:
  statement: 'All 405 decode operations were memory bound, at 0.5 to 8 FLOP per byte. Prefill crosses the 80 FLOP/byte ridge only as tokens per pass grow: 156 of 405 prefill operations were compute bound.'
category: Independent project
date: April 2026
order: 9
repository: https://github.com/pkarakala/transformer-inference-roofline
status: An analytical model with rounded hardware numbers, not measured on real hardware.
cover:
  src: /assets/images/roofline-knee.webp
  alt: Log scale roofline chart. Decode operations cluster between 0.5 and 8 FLOP per byte on the sloped memory roof, while prefill operations extend past the ridge at 80 FLOP per byte onto the flat 120 TFLOP/s compute roof.
  caption: Roofline around the ridge point, re-plotted from the repository's sweep. Decode in rust, prefill in teal.
  width: 1200
  height: 720
---

Numbers come from running main.py in the repository (default sweep, 810 operations) on 2026-11-13.
