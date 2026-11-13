---
title: "Optical Interconnect Co-⁠Design (OICD)"
slug: oicd
group: Photonics & optical links
summary: An open source tool that checks whether the optical links between AI chips actually close, from the rack down to a single microring, in a 3D explorer anyone can click through.
metric:
  value: FSR ≥ 3.2 THz
  label: ring FSR at which interleaving buys a 16 wavelength BiDi link about 6 dB of isolation
built: Python model of link budgets, WDM and microring physics, BiDi wavelength plans, and rack level yield, validated against the draft IEEE 802.3dj DR budget. Every number is tagged with its source.
evidence:
  statement: 'The same worst case rack path is −1.0 dB or +2.0 dB depending on which side of a detachable fiber connector the budget is measured. A 99% yield over 8,192 links needs about 4.7σ per link.'
  label: Read the findings
  url: https://github.com/pkarakala/oicd/blob/main/docs/paper/main.md
category: Independent project
date: October 2026
order: 1
featuredOrder: 1
repository: https://github.com/pkarakala/oicd
status: Worst case over the modeled constraints only. BER, TDECQ, dispersion, and thermal effects are not evaluated, and draft 802.3dj values may change. Built from public information and not affiliated with any company whose work is cited.
related:
  - label: Model card
    url: https://github.com/pkarakala/oicd/blob/main/docs/model_card.md
  - label: Sourced fact pages
    url: https://github.com/pkarakala/oicd/tree/main/docs/twin
cover:
  src: /assets/images/oicd-engine.webp
  alt: 3D render of an exploded optical engine package, with photonic and electronic chips lifted above an organic substrate and ball grid array, beside a fiber array unit.
  caption: Exploded BiDi optical engine in the OICD explorer. Schematic geometry.
  width: 1200
  height: 750
video:
  src: /assets/video/oicd-walkthrough.mp4
  poster: /assets/video/oicd-walkthrough-poster.webp
  duration: '1:31'
  width: 1920
  height: 1080
  description: A silent tour with on screen captions. It moves from a reference rack to a switch tray, a BiDi optical engine and its photonic chip, a single microring modulator in cross section, and a photonic tensor core processor.
---

Facts from the repository README (Findings and Limits) and the owner's resume (Nov 2026).
The title joins "Co-Design" with a word joiner so it never wraps at the hyphen.
