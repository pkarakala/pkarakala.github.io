---
title: Quantum Photonics Measurement Labs
slug: quantum-photonics
group: Quantum
summary: Hands on single photon measurement. We counted photon pairs, checked that light arrives one photon at a time, and measured how cleanly single photons interfere.
metric:
  value: g²(0) = 0.130 ± 0.014
  label: heralded single photons with room lights off, raw, well under the 0.5 threshold
built: 'Heralded SPDC photon pair source with single photon avalanche diodes and coincidence counting, used for CHSH Bell tests, g²(0) antibunching, Mach Zehnder and quantum eraser visibility, and photonic circuit programming on a cloud photonic chip.'
evidence:
  statement: 'CHSH S = 2.35 ± 0.09 at 3.16 mW pump power, about 3.9σ above the classical bound. Single photon interference visibility reached about 0.44 to 0.50.'
category: Coursework
context: ECE 136C
date: Spring 2025
collaborators: [Nate Barnaby, Gavin Kesler, Bryan Fernandez]
attribution: "With Nate Barnaby, Gavin Kesler, and Bryan Fernandez (Group 7)."
order: 10
featuredOrder: 3
status: Visibility was limited by path distinguishability, alignment, and accidental coincidences. Corrections to the original reports are noted under each one.
anchorAliases: [quantum-optics, xanadu-x8]
reportHeading: ECE 136C lab reports
reports:
  - label: Bell state measurements
    url: /assets/pdfs/ece136c/lab1.pdf
    hindsight: 'The report calls S = 2.155 ± 0.083 at 26.4 mW a statistically significant violation, but it is only about 1.9σ above 2, and the discussion quotes ± 0.01, which conflicts with the propagated ± 0.083. The 3.16 mW run, S = 2.35 ± 0.09, is the stronger evidence.'
  - label: Single photon antibunching
    url: /assets/pdfs/ece136c/lab2.pdf
    hindsight: 'With the room lights on, the accidental corrected g²(0) = 0.538 ± 0.171 does not support g²(0) below 0.5. The lights off heralded data does: 0.130 ± 0.014 raw and 0.093 ± 0.093 after accidental correction at 30 s.'
  - label: Optical qubits & interference
    url: /assets/pdfs/ece136c/lab3.pdf
    hindsight: 'The report treats a visibility of 0.5 as agreement with theory. For an ideal Mach Zehnder with indistinguishable paths the visibility is 1. The measured value near 0.5 was set by distinguishability, alignment, and accidental coincidences, not by theory.'
  - label: The quantum eraser
    url: /assets/pdfs/ece136c/lab4.pdf
    hindsight: 'The report calls 0.5 the visibility of perfect interference. Once which path information is erased, the ideal visibility is 1. The measured 0.436 to 0.455 was limited by residual distinguishability, alignment, and accidental coincidences.'
  - label: Photonic computing on a cloud chip
    url: /assets/pdfs/ece136c/lab5.pdf
  - label: Squeezed light & gates
    url: /assets/pdfs/ece136c/lab6.pdf
  - label: Photonic quantum circuits
    url: /assets/pdfs/ece136c/lab7.pdf
  - label: Gaussian boson sampling
    url: /assets/pdfs/ece136c/lab8.pdf
---

Numbers from the lab reports: lab 1 (Bell, Sections 4.2 to 4.5) and lab 2 (antibunching, lights off tables).
Text only at the owner's request; the former lab photo is not displayed.
