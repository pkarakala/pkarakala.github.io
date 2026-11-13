---
title: Fiber Link Simulation
slug: photonic-fiber
group: Photonics & optical links
summary: How far can a fiber link carry data before bit errors pile up? We simulated one in VPIphotonics and compared standard, dispersion compensating, and hollow core fiber.
metric:
  value: 'BER 3.6 × 10⁻⁸'
  label: standard single mode fiber at 80 km; hollow core stayed below the simulation floor
built: 'Externally modulated laser into an 80 km link at 193 THz with 5 mW launch power and a PIN receiver (R = 1, no dark current). We swept fiber length, launch power, and carrier frequency for each fiber type, and used the Zeisberger and Schmidt analytic model for hollow core loss and dispersion.'
evidence:
  statement: 'Standard SMF reached a BER of 3.6 × 10⁻⁸ at 80 km and degraded to 3.2 × 10⁻⁵ at 200 km. Hollow core fiber stayed below the simulation''s BER floor in both cases, and its eye stayed open at high launch power where the SMF eye closed.'
category: Coursework
context: ECE 135
date: March 2026
collaborators: [Nicholas Shand, Dash Franklin, Gavin Kesler]
attribution: Course project with Nicholas Shand, Dash Franklin, and Gavin Kesler.
order: 3
featuredOrder: 3
status: Hollow core fiber was approximated with a nonlinear single mode fiber model using published hollow core parameters, and runs above 100 mW failed, which limited the sweep.
cover:
  src: /assets/images/fiber-eye-diagrams.webp
  alt: Two simulated eye diagrams at high launch power. The hollow core fiber eye is wide open; the standard single mode fiber eye is closed by overlapping traces.
  caption: 'Simulated received eyes at high launch power, from the report. TODO(Pranav): send the VPI BER vs distance or BER vs launch power sweep to add a BER plot.'
  width: 1040
  height: 1065
reports:
  - label: Read report
    url: /assets/pdfs/ece135/HCF_and_an_Analytic_Model.pdf
    hindsight: 'The report says VPI estimated the hollow core BER as zero. A BER of exactly zero means the error rate fell below what the simulation can resolve in that run, not that the link is error free.'
---

Facts from the ECE 135 report, Sections II and III. Eye diagrams are Figures 5 and 6 of the report.
