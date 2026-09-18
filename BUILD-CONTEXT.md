# Portfolio build context

Updated September 17, 2026. Starting commit: `0e25c9d` (`Add files via upload`). Remote: `https://github.com/pkarakala/pkarakala.github.io.git`.

## Architecture and design

Astro 7 static output with shared layouts/components, plain CSS, local Fontsource fonts, Markdown work and notes collections, and centralized profile/experience data. No client JavaScript is needed. The only deployed directory is `dist/`.

The initial palette and type direction were revised after direct owner feedback: the owner requested different colors/fonts and a personal creative direction informed by professional portfolios. Final tokens use cool blue-gray, deep pine, and rust; Fraunces display text pairs with Manrope body text. An open name masthead, two-column selected work, and contrasting About section replace the initial ruled frame. Paco Coursey and Maggie Appleton were inspected visually for concise evidence presentation and personal typography, respectively. No source site's assets or commercial fonts were copied.

The original banner and its social-image URL are retained as existing assets. It still reflects the old visual identity; no replacement social image was requested/generated.

## Content authority and provenance

The owner-supplied `DESIGN-BRIEF.md` and `HOMEPAGE-COPY.md` from the planning folder govern content; the later request to change color/font/composition supersedes the original visual token suggestions. About prose was copied verbatim into `src/data/about.md`, including its two italic book titles. The current portrait is preserved at `/profile.jpg`; responsive WebP copies keep its complete natural rectangle with no filter.

- AWS Braket and current Niu Group role/dates: supplied homepage copy, attributed there to the selected resume.
- Pando.ai: appeared in the supplied homepage copy and prior portfolio, then was removed from the displayed experience section at the owner's request.
- The original four selected projects came from approved homepage copy. The later owner-approved selection leads with KernelRelay, retains Continuous Quantum Error Correction and ML Systems Lab, adds Photonic Fiber Communication to the four featured cards, and moves Transformer Inference Analysis to the archive.
- Original project inventory: `index.html`, `projects.html`, and existing HTML resume at the starting commit. The archive retains the original public project evidence. TensorDescent, KernelForge, and AccelSim are linked under ML Systems Lab rather than repeated as standalone cards, with former fragments preserved there. ECE 136C subtopics are consolidated under one lab entry; the graph-algorithms summary from the old resume is retained only as an unpublished draft at the owner's request.
- KernelRelay's public repository and documentation support an evaluation-and-feedback description, not a model-training claim: it uses fixed mock source proposals, validates candidates against eager PyTorch, records rewards and trajectories, and reports measured T4 timings. The portfolio describes those traces as material for future compiler-agent training.
- Research control summary: original Niu Group portfolio entry, with confidential implementation details left unpublished. Original numerical claims remain in their reports/repositories instead of becoming profile statistics.
- Raman summary: corrected to supervised mineral classification after reading the actual ECE 133 report, instead of repeating the old page’s generic peak-fitting description.
- ECE 135 collaborators: Nicholas Shand, Dash Franklin, Gavin Kesler; homepage copy and report cover agree.
- ECE 136C collaborators: Nate Barnaby, Gavin Kesler, Bryan Fernandez, verified from all eight report covers. Public files `lab1.pdf` through `lab8.pdf` contain reports numbered 3 through 10; topic labels identify them without changing URLs.
- ECE 136A collaborators: Altug Ozcetinkaya, Christopher Hemsley, Dashiell Franklin, Gavin Kesler, Karl Tizon, Nicholas Shand, verified from all three report covers.
- Coursework: 15 existing course entries remain after the owner removed ECE 136B, ECE 154A, ECE 154B, and CS 160. ECE 162A, 162B, and 162C are listed in a separate planned-coursework section, without a projected term or claim of completion. The obsolete ECE 10 catalog URL returned 404, so its link now uses UCSB’s official ECE 10 series overview; the original course wording is retained. No graduation date is displayed.

`docs/migration-inventory.json` records original public page links, fragments, and asset hashes. The build checks retention of original evidence links, public assets, and legacy entry points.

## Resume

Owner-selected source: `Pranav_Reddy_ML_Compilers_2027.pdf`, supplied from the owner’s Desktop resume directory. The original PDF was not modified. Its exact bytes are served at the stable `/assets/pdfs/resume.pdf`. `docs/resume-source.json` records the approved hash. Older resume assets remain for URL compatibility but have no promoted download links.

## Publishing

GitHub Pages initially used legacy publishing from `main:/`. The Astro migration uses a GitHub Actions workflow to deploy only the generated `dist/` directory. Pull requests run the build without deploying; `main` pushes deploy after the repository Pages source is switched to GitHub Actions.

Supporting material (`career.md`, nested `cqec-ml-decoder/`) remains in the repository but is excluded from the Astro build. The legacy build log can be retrieved from Git at `0e25c9d:BUILD-CONTEXT.md`; obsolete theme and manual HTML instructions no longer govern the site.

See `CONTENT-GUIDE.md` for editing and preview instructions and `docs/VERIFICATION.md` for final review evidence and limitations.
