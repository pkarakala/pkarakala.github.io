---
title: Michelson Interferometry
slug: michelson-interferometry
group: Photonics & optical links
summary: Built a Michelson interferometer and used its fringes to measure optical path changes far smaller than a hair, from mirror motion, a flame in one arm, and a rotated plexiglass plate.
built: Michelson interferometer with about 632 nm light and a green filter for 543 nm, an 8 mm plexiglass plate on a rotation stage, and red and white LEDs to probe coherence length.
evidence:
  statement: Rotating the plate shifted 20 fringes, an optical path change of 12.64 µm. The LED fringes were too short in coherence for our alignment to capture.
category: Coursework
context: ECE 136A
date: Fall 2025
collaborators: [Altug Ozcetinkaya, Christopher Hemsley, Dashiell Franklin, Gavin Kesler, Karl Tizon, Nicholas Shand]
order: 5
status: The plate index came out well below the known value. The note under the report explains why.
cover:
  src: /assets/images/michelson-fringes.webp
  alt: Two photographs of green circular interference fringes on a screen. On the right the fringes are bent and distorted.
  caption: Michelson fringes photographed in the lab, before (left) and after (right) a lighter flame was placed in one arm.
  width: 960
  height: 560
reports:
  - label: Coherence & interference
    url: /assets/pdfs/ece136a/lab3.pdf
    hindsight: 'The report gives n = 1.14 for plexiglass, which is about 1.49 in the visible. The rotated plate formula depends steeply on the rotation angle, which the report does not state: with N = 20 and t = 8 mm at 543 nm, n = 1.14 implies about 6°, while 4° already gives about 1.39. The setup also mixed 632 nm and 543 nm light, and the wavelength in the formula has to match the fringes counted.'
---

Split out of the ECE 136A entry in Nov 2026. Figures are from the report (before and after lighter).
