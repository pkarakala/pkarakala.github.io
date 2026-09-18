# Implementation review

Local review began September 17, 2026 (America/Los_Angeles). Original baseline: `0e25c9d`. Initial review passes were local; the Astro portfolio was subsequently published through PR #1 and the GitHub Pages Actions workflow.

The sections below record successive local review passes; their counts describe the pass in which they were measured. The latest content revision is recorded first.

## Live deployment and responsive follow-up

PR #1 merged as `d65a2865fc8d270c74874e6cd028d261cdd57b3d`. GitHub Pages was changed from legacy branch publishing to the Actions workflow. The `main` build and deploy run completed successfully, and direct requests to the public Home and Work pages returned the expected KernelRelay-first selection, nine archive entries, and ML Systems Lab component links.

A live browser review at a 629px viewport exposed overly narrow project copy beside cover images. The follow-up CSS stacks covered cards at 800px and below and limits image width at intermediate desktop sizes. Local browser checks at 629px, 768px, and 390px show full-width project copy with no document-level horizontal overflow.

## KernelRelay and selected-work revision

The owner-approved four-card selection is KernelRelay, Continuous Quantum Error Correction, ML Systems Lab, and Photonic Fiber Communication. Transformer Inference Analysis remains in the Work archive. TensorDescent, KernelForge, and AccelSim remain linked under ML Systems Lab but no longer appear as separate archive cards; their former fragment URLs resolve to the parent card. KernelRelay is described as an evaluation harness with feedback trajectories for future training, not as a model-training implementation; the archive explicitly notes its deterministic mock proposer.

`npm run build` passed with 0 Astro errors and warnings. The output contains 9 HTML pages, 9 published work entries, 16 PDFs, and 165 checked local references. Automated checks verify the featured order, KernelRelay link, component repository links, and preserved fragments. The local Home and Work pages were reviewed in the browser. Existing project images were retained. At the time of this local review, the revision had not yet been pushed or published.

## Experience correction

The Pando.ai Engineer Intern row was removed from the local homepage experience section at the owner's request. AWS Braket and the Quantum Codesign Lab entries remain. The supplied resume PDF and the older live site were not changed.

## Coursework correction

Per the owner's correction, ECE 136B, ECE 154A, ECE 154B, and CS 160 were removed from the local Astro coursework data. ECE 162 was already absent; ECE 162A, 162B, and 162C were then added as three separately labeled planned courses using current UCSB catalog titles and links. The local coursework page lists 15 existing entries plus 3 planned entries; the selected resume PDF was not changed. The older live HTML on `main` still contains the former coursework claims until a separately approved publication or correction.

## Graphs project visibility

At the owner's request, “Application of Graphs to Machine Learning” became an unpublished draft rather than a Work entry. Its source was retained for easy recovery, but the build verified that it was absent from the public archive. At that review pass, the Work archive contained 11 published entries. No other project or report was removed in that pass.

## ECE 136C consolidation

The Work archive has one Quantum Computing & Photonics Labs entry for ECE 136C, replacing two redundant subtopic cards. It retains the eight distinct report PDFs, image, Group #7 attribution, and descriptions of both quantum-optics experiments and Xanadu X8 work. The former `#quantum-optics` and `#xanadu-x8` fragments resolve to this card. Desktop (1440px) and phone (390px, 320px) browser checks showed one ECE 136C entry, eight report links, both aliases, and no horizontal overflow. The build at that review pass validated 12 work entries, 16 PDFs, and 167 local references; a fresh mobile Lighthouse accessibility audit scored 100 with no failed checks. No push or publication was performed.

## Follow-up visual pass: logo, typography, and project images

The owner-supplied house/circuit image now replaces the italic `pr.` wordmark. The surname and contact heading no longer use display italics; editorial headings share Fraunces regular, while navigation and body copy use Manrope. Six images from the previous portfolio were mapped back to their actual projects. The featured QEC and transformer images appear on Home; all six appear in Work. Text-only projects were not given invented covers. Images open at full resolution when selected.

The homepage featured projects now use aligned editorial rows, with existing images to the right at desktop widths and beneath the description on phones. Reviewed fresh headless Chrome renders at 1440px and 390px for Home and Work; all six cover images, the portrait, and the logo loaded after scrolling, and neither page had horizontal overflow. `npm run build` checked 29 Astro files without errors or warnings and verified 9 HTML pages, 14 projects, 174 local references, and 16 PDFs. `git diff --check` passed.

New simulated-mobile Lighthouse lab scores: Home **100/100/100/100** and Work **99/100/100/100** (performance/accessibility/best practices/SEO); neither accessibility report has a failed audit. The snapshots are in `docs/lighthouse-summary.json`; raw reports and browser captures remain local in `.qa/`. No push, merge, or publication was performed in this pass.

## Production build and integrity

- `npm run build`: passed. Astro checked 29 files with 0 errors, 0 warnings, and 0 hints.
- Output: 9 HTML pages, 14 published project entries, 16 preserved PDF URLs, 158 local resource/link references checked.
- Each original image, report, and legacy resume variant matches its baseline SHA-256. The intentionally replaced primary resume matches the selected source PDF exactly.
- Downloaded the primary PDF from the running production preview and compared it byte-for-byte with the supplied Desktop file: identical. The original file was not edited.
- At the migration baseline, `src/data/about.md` matched the then-approved `HOMEPAGE-COPY.md` paragraphs. A later owner-approved copy revision superseded that baseline; the current build checks that the current Markdown renders without changing its text.
- Original project evidence links remain reachable from Work. The archive includes ML stack components, older graph work, and named lab subtopics in addition to the original main project cards.
- Notes/project templates were copied into their collections as draft examples without layout edits; build checks confirm they appear in neither production pages nor navigation. No empty Notes index is generated.
- Titles, descriptions, canonicals, sitemap, image dimensions/alt text, local font paths, PDF signatures, skip links, IDs, and internal fragments passed automated checks.
- Build emits no executable client JavaScript; all essential copy, navigation, archive entries, and downloads are static HTML links.
- `git diff --check`: passed. `npm audit --omit=dev`: 0 vulnerabilities.

## Browser review

Reviewed live reference sites for clear project presentation, typography, and composition. Revised colors, typography, and layout in response to the owner's request for a distinct identity. No reference assets were copied.

Reviewed the production homepage at **1440, 1024, 768, 390, and 320 CSS pixels**, with saved full-page captures in `.qa/`. Reviewed Work at tablet and phone widths, including 320px. No document-level horizontal overflow at the tested sizes. Text, rules, project summaries, collaborator credit, and portrait fit the available width; mobile navigation remains visible without a script-dependent menu.

The portrait keeps its natural rectangular proportions and unfiltered color. It loads from local responsive WebP sources with intrinsic dimensions and lazy loading. Font assets load locally. Text contrast ratios against the page background: body 10.87:1, secondary 5.51:1, rust links 5.56:1. About body contrast is 11.79:1.

Verified navigation to Work, About, Contact, coursework, and resume. The old Projects and About routes arrive at their intended replacements. The fiber-report link opens the original named PDF; the resume viewer opens the selected PDF under its stable public URL. Reviewed the resume and coursework layouts at phone width, and checked 404 recovery back home.

Keyboard: the first Tab exposes the skip link with a 2px visible outline; Enter transfers focus to the main landmark. Links have visible focus styles and ordinary native activation. Motion is limited to brief color transitions; reduced-motion removes these transitions. There is no smooth-scroll animation or reveal that could hide content.

## Lighthouse

Local production server, Lighthouse 13.4.1, headless Chrome 153, default simulated mobile throttling. These are laboratory results, not field Core Web Vitals.

| Page | Performance | Accessibility | Best practices | SEO |
| --- | ---: | ---: | ---: | ---: |
| Home | 100 | 100 | 100 | 100 |
| Work | 100 | 100 | 100 | 100 |

The initial home audit was 94 performance / 100 accessibility. Font preloads and more precise portrait sources addressed loading opportunities. The later home full audit still reported an experimental accessible-name finding despite its 100 score; that logo was then corrected and the final accessibility-only audit reports **no failures**. Work’s initial skipped heading level and accessible-name finding were fixed; its final full audit has no accessibility failures. Exact score snapshots and test environment are saved in `docs/lighthouse-summary.json`; full HTML/JSON reports are in `.qa/`.

## External links and remaining limitations

- All six external project repositories, the GitHub profile, both research links, and the working course destinations returned HTTP 200.
- The original ECE 10 catalog URL returned 404. Its destination was replaced with the verified official UCSB ECE 10 series overview. Original course wording is retained rather than guessing a different course taken by the owner.
- LinkedIn returned HTTP 999 to the automated checker. The exact owner-provided URL is retained; its live profile could not be independently verified by that check.
- The existing `banner.png` and social-image metadata are preserved. This image still carries the previous visual style and wording; the visible portfolio uses the new identity. No replacement social image was generated.
- GitHub Pages initially used legacy `main:/` publishing. The source was switched to GitHub Actions for the Astro launch, and the `main` deployment completed successfully.
- Cross-browser, physical-device, screen-reader-user, and field performance testing were not performed. Automated scores do not substitute for those checks.

## Preview and maintenance

The production preview runs at http://127.0.0.1:4321. To restart later: `npm run build`, then `npm run preview -- --port 4321`. Use `npx astro preview stop` to stop the background preview. See `CONTENT-GUIDE.md` for project creation, notes, resume replacement, experience updates, and publishing preparation.

## Later content pass: evidence and positioning

The owner approved a hardware-first ML-systems hero statement and a shorter About section, while explicitly retaining the Experience rows unchanged. The KernelRelay card now links a qualified single-T4, same-process confirmation (0.053 ms fused versus 0.120 ms best framework, 2.26×) and names the fixed mock proposer. The co-authored QEC card links a simulation result plot and labels its retained diagram as illustrative. ML Systems Lab is described as three linked prototypes. These are content changes, not new experiments or independently reproduced measurements.

The local `npm run build` pass checked 29 Astro files without errors or warnings and verified 9 HTML pages, 9 published projects, 165 local references, and 16 PDFs. The repository's benchmark and QEC figure paths were checked before linking. Home, Selected Work, QEC, and About were reviewed in the local browser at desktop width; previous responsive CSS was left unchanged.
