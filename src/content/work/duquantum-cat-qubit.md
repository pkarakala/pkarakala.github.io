---
title: Cat Qubits at DuQuantum
slug: duquantum-cat-qubit
group: Quantum
summary: Simulated cat qubits for a hardware challenge at Duke's quantum computing hackathon, and designed a better way to read them out.
metric:
  value: 1.12% → 0.65%
  label: estimated readout error, cosine pulse against a square pulse
built: Prepared and stabilized cats, measured bit and phase flip rates, read the memory mode through the buffer, and designed a readout pulse.
evidence:
  statement: 'In simulation, a 2 µs cosine readout pulse tuned to the 3.14 MHz buffer ring cut estimated readout error from 1.12% to 0.65% versus a square pulse, assuming ideal detection.'
  label: Readout analysis
  url: https://github.com/pkarakala/duquantum-cat-qubit/blob/main/docs/task_2.md#24--improve-readout-without-sacrificing-memory-protection
category: Project
context: DuQuantum 2026, Duke University
date: October 2026
collaborators: [Xuanyu Zhu, Halo Kwok, Harshit Aggarwal]
attribution: "Team Von Neumann's Ghost with Xuanyu Zhu, Halo Kwok, and Harshit Aggarwal. 3rd place overall, plus two sponsor awards."
order: 13
repository: https://github.com/pkarakala/duquantum-cat-qubit
cover:
  src: /assets/images/cat-qubit.webp
  alt: Wigner function plots of a cat qubit forming from vacuum into two coherent state lobes.
  caption: Simulated Wigner function as a cat qubit forms from vacuum over 3 µs.
  width: 1200
  height: 667
---

Source: repository README and docs/task_2.md, plus the owner's LinkedIn post (Oct 2026).
Company names (challenge sponsor, award sponsors) are kept off the site as of Nov 2026.
