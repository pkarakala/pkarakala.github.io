---
title: Mineral Identification via Raman Spectroscopy
slug: raman-spectroscopy
group: Photonics & optical links
summary: Taught a classifier to identify minerals from their Raman spectra, the fingerprint of how a material scatters laser light.
metric:
  value: 0.42%
  label: test error classifying mineral family with a linear SVM
built: Linear SVM, logistic regression, and RBF kernel SVM classifiers in MATLAB, with one vs one and one vs rest strategies, each timed over five runs.
evidence:
  statement: Test error was typically below 2%, with one edge case. The linear models were the most accurate, which points to a linearly separable dataset.
category: Coursework
context: ECE 133
order: 5
cover:
  src: /assets/images/raman.webp
  alt: Raman spectrum with fitted peaks marked across Raman shift values.
  caption: Raman spectrum with fitted peaks.
  width: 640
  height: 274
reports:
  - label: Read report
    url: /assets/pdfs/ece133/raman.pdf
---
