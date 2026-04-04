# Portfolio Build Context — Pranav Reddy

This document preserves the full context of decisions, structure, and content sources used to build this portfolio site. Use it to reconstruct or extend the site from scratch.

---

## Owner

- Name: Pranav Reddy
- Email: preddy@ucsb.edu
- University: UC Santa Barbara — Electrical & Computer Engineering
- LinkedIn: linkedin.com/in/pranav-reddy-98bb962b9
- GitHub: github.com/pkarakala

---

## Site Structure

```
├── index.html          # Homepage — hero, research, skills, labs
├── about.html          # About page — photo, intro, impact cards, values, CTA
├── projects.html       # Projects page — 7 project cards with PDFs and GitHub links
├── contact.html        # Contact page — email, phone, LinkedIn, resume, coursework
├── coursework.html     # Coursework page — 4 course categories + resume download
├── styles.css          # Shared stylesheet — all themes, components, responsive
├── profile.jpg         # Profile photo used on index.html and about.html
├── .gitignore          # Excludes .DS_Store, cqec-ml-decoder/, .vscode/
├── assets/
│   ├── images/         # Project card images (webp)
│   │   ├── optics.webp
│   │   ├── quantum-photonics.webp
│   │   ├── qec.webp
│   │   ├── raman.webp
│   │   └── lyapunov.webp
│   └── pdfs/           # All PDFs served locally (no external links)
│       ├── resume.pdf
│       ├── ece133/raman.pdf
│       ├── ece135/HCF_and_an_Analytic_Model.pdf
│       ├── ece136a/lab1.pdf, lab2.pdf, lab3.pdf
│       ├── ece136c/lab1.pdf through lab8.pdf
│       └── ece133/raman.pdf
├── cqec-ml-decoder/    # Separate git repo (excluded from main repo)
│   └── README.md       # Updated with 4-phase content
├── INTERVIEW-PREP.md   # STAR responses for interview preparation
├── INTERVIEW-PREP.html # Print-ready HTML version (Cmd+P → Save as PDF)
├── career.md           # Career planning — target companies skill mapping
└── BUILD-CONTEXT.md    # This file
```

---

## Design Decisions

### Theme & Colors
- Primary: `#0d9488` (teal)
- Secondary: `#7c3aed` (purple)
- Gradient: `linear-gradient(135deg, #0d9488 0%, #7c3aed 100%)`
- Dark mode is DEFAULT (first-time visitors see dark)
- Light mode available via toggle, preference saved in localStorage
- All pages share the same color palette and gradient

### Typography
- Font: Inter (system fallback stack)
- Hero h1: 3.5rem, white, 800 weight
- Section titles: 2.2rem
- Card titles: 1.4-1.5rem

### Navigation
- Fixed top nav with backdrop blur
- Hamburger menu on mobile (< 768px)
- Nav changes to gradient background on scroll (index.html only)
- Links: About, Research (#), Projects, Skills (#), Labs (#), Contact
- Sub-pages use `index.html#section` for anchor links back to homepage

### Profile Image
- Oval shape: 280x350px with border-radius: 50%
- object-position: center 20%
- filter: brightness(1.25) contrast(1.08)
- Same styling on both index.html and about.html

### Icons
- All card icons are inline SVGs (no emojis, no external icon libraries)
- White stroke on gradient background boxes
- GitHub logo is inline SVG everywhere (consistent)

### Responsive Breakpoints
- 1024px: Hero stacks to single column
- 768px: Hamburger menu, single-column grids, smaller fonts
- 480px: Further size reductions, single-column contact/research grids, tighter timeline, smaller card icons
- `overflow-x: hidden` on body to prevent horizontal scroll from decorative pseudo-elements
- Project cards use `word-wrap`/`overflow-wrap: break-word` to prevent text overflow on mobile

---

## Content Sources

### Resume Content (provided by user)
- Quantum Codesign Lab: Niu Group, UCSB, June 2025–present
  - Feedback-based quantum algorithms (FQAs)
  - Lyapunov-based control, TFIM
  - 40+ CPU core parallel simulation
  - Multi-layer adaptive quantum circuit pipelines
- Pando.ai: Engineer Intern, July 2024–January 2025
  - Real-time RAG pipeline with LLM inference
  - Scalable alerting infrastructure
  - Production enterprise supply chain
- Sigma Phi Epsilon: Chapter VP (Mar–Aug 2025), Housing Manager (Jan–Aug 2025)
  - $150,000+ budget
  - 140+ guest vineyard formal
  - 28 residents, food service contract negotiation

### Professor Murphy Niu References
- UCSB Faculty: https://cs.ucsb.edu/people/faculty/murphy-niu
- Personal site: https://www.murphyniu.com/
- Google Scholar: https://scholar.google.com/citations?user=0wJPxfkAAAAJ&hl=en
- Role: Stansbury Chair in CS at UCSB, Senior Research Scientist at Google Quantum AI
- Research: quantum control optimization, circuit optimization with deep RL, real-time feedback control

### CQEC ML Decoder (from GitHub repo)
- Repo: https://github.com/pkarakala/cqec-ml-decoder
- Authors: Pranav Reddy + Clark Enge
- 4 phases: static → Hamiltonian → non-ideal → adaptive
- Key results: GRU 96%, adaptive GRU 82% under drift vs 70% Bayesian
- 244 unit tests total (44 + 58 + 22 + 99 + 21)
- Source files: operators.py, sim_measurement.py, sim_hamiltonian.py, sim_nonideal.py, sim_drifting.py, decoders.py, adaptive_gru.py, bayesian_filter.py, datasets.py, metrics.py


### Coursework (from UCSB catalog)
- ECE 135 — Fiber Optic Communication Systems: https://catalog.ucsb.edu/courses/ECE%20135
- ECE 136A — Optical Systems & Photonics: https://catalog.ucsb.edu/courses/ECE%20136A
- ECE 136B — Photonic Imaging & Design: https://catalog.ucsb.edu/courses/ECE%20136B
- ECE 136C — Quantum Computing & Photonics: https://catalog.ucsb.edu/courses/ECE%20136C
- ECE 130A — Signal Processing & Linear Systems: https://catalog.ucsb.edu/courses/ECE%20130A
- ECE 130B — Discrete-Time Signals & Systems: https://catalog.ucsb.edu/courses/ECE%20130B
- ECE 133 — Optimization & Machine Learning: https://catalog.ucsb.edu/courses/ECE%20133
- ECE 152A — Digital Design Principles: https://catalog.ucsb.edu/courses/ECE%20152A
- ECE 132 — Semiconductor Devices: https://catalog.ucsb.edu/courses/ECE%20132
- ECE 134 — Electromagnetics & Wave Phenomena: https://catalog.ucsb.edu/courses/ECE%20134

### Lab Results (from old_project.html and portfolio content)
- Bell inequality: S = 2.35 ± 0.09
- Single-photon antibunching: g²(0) = 0.094
- GBS: 1 million shots, 4-photon post-selection on Xanadu X8
- Raman spectroscopy: 12 ML models, 0.18-0.48% test error
- ECE 136A: 3 lab PDFs
- ECE 136C: 8 lab PDFs

### External Links Used
- UCSB: https://www.ucsb.edu/
- ECE Department: https://www.ece.ucsb.edu/
- Pando.ai: https://pando.ai
- Vercel site (original): https://pranavkarakala.vercel.app/
- PDFs downloaded from Vercel and stored locally in assets/pdfs/

---

## Key Build Decisions Log

1. Started from old_project.html (Next.js saved page) as reference for correct links and images
2. Replaced all external PDF links with local copies in assets/pdfs/
3. Moved images from "Pranav Reddy — Portfolio_files/" to clean assets/images/
4. Deleted all Next.js artifacts (JS, CSS, duplicate images)
5. Changed default theme to dark mode across all 5 pages
6. Added hamburger menu for mobile on all pages
7. Replaced all emojis with inline SVG icons for professional appearance
8. All "Quantum Computing", "Machine Learning" etc. consistently capitalized
9. All UCSB course references hyperlinked to catalog.ucsb.edu
10. All "Electrical & Computer Engineering" and "UC Santa Barbara" hyperlinked (except hero section)
11. GitHub logo is consistent inline SVG across all pages
12. Hero section scaled down 15% (70vh → 55vh)
13. Profile image: oval, brightness(1.25), contrast(1.08)
14. Merged "Featured Projects" into "Research Focus" section on index.html
15. Card order in Research: Quantum Codesign Lab → CQEC → Xanadu X8 → Pando.ai → 4 small tiles
16. Contact page: 5 tiles in one row (email, phone, LinkedIn, resume, coursework)
17. LinkedIn URL: https://www.linkedin.com/in/pranav-reddy-98bb962b9/ (updated from old /pranav-reddy)
18. cqec-ml-decoder README updated with 4-phase content (Phase 3: non-ideal, Phase 4: adaptive)
19. INTERVIEW-PREP.md covers: general Q&A, Deliver Results, Earn Trust, Dive Deep, Learn & Be Curious, AgenticAI Fluency (5 themes), Coursework-Grounded, Campus Life + Greek Life
20. Research Focus tile headings normalized to 1.5rem across all card types (research-card and project-card)
21. CTA banner text updated: "Working on ML Accelerators, HPC systems, next-gen hardware, or a tough engineering problem?"

---

## How to Rebuild From Scratch

1. Create the 5 HTML pages (index, about, projects, contact, coursework) with shared styles.css
2. Use the color palette and gradient defined above
3. Copy profile.jpg, assets/images/*.webp, and assets/pdfs/**/*.pdf
4. Reference this document for all content, links, and design decisions
5. Set dark mode as default in all page scripts
6. Add hamburger menu nav to all pages
7. Use inline SVGs for all icons (no emojis)
8. Hyperlink all course references to catalog.ucsb.edu
9. Keep cqec-ml-decoder as a separate git repo (excluded via .gitignore)


---

## Full Session Prompt History

This section captures every significant prompt and action from the build session in chronological order. Use this to understand the reasoning behind each decision and to continue work in a new session.

---

### Phase 1: Initial Setup & Project Links Fix

1. **Read old_project.html and update projects.html** — Compared the old Next.js saved page against the current projects.html. Fixed all external links and images:
   - ECE 136A lab PDFs: corrected paths to `/labs/ece136a/lab1-3.pdf`
   - ECE 136C lab PDFs: expanded from 1 link to all 8 individual labs
   - CQEC GitHub: fixed username from `pranavreddy` to `pkarakala`
   - Raman Spectroscopy: changed from fake GitHub link to correct PDF at `/projects/ece133/raman.pdf`
   - All 5 project images: pointed to `Pranav Reddy — Portfolio_files/*.webp`

### Phase 2: Layout & Styling

2. **Remove section titles** — Removed "Public & Coursework" and "Research" category labels, merged all cards into one grid
3. **Image scaling** — Set project card images to 30% → 60% → 85% width through iterative feedback
4. **Two cards per row** — Forced `grid-template-columns: repeat(2, 1fr)` for projects grid
5. **Fix broken PDF links** — Prefixed all PDF hrefs with `https://pranavkarakala.vercel.app/` base URL
6. **GitHub logo** — Replaced 🔗 emoji with inline SVG GitHub logo on CQEC card in projects.html
7. **Consistent button colors** — Unified PDF and GitHub button styles to use `var(--primary)` for both

### Phase 3: cqec-ml-decoder README

8. **Read repo source code** — Read all source files from `/Users/ykreddy/pranav_html/cqec-ml-decoder/` (operators.py, decoders.py, bayesian_filter.py, sim_hamiltonian.py, sim_measurement.py, metrics.py, datasets.py, healthcheck.py)
9. **Rewrote README** — Created engaging README with code snippets from actual source files, measurement models, results tables, figure grid, and "Under the Hood" section
10. **Fixed CDATA artifacts** — Rewrote README cleanly after CDATA tags got embedded from fsWrite

### Phase 4: About Page Redesign

11. **Rebuilt about.html** — Created new layout with photo+intro grid, 6 impact cards, values strip, personal note, and gradient CTA banner
12. **Oval profile photo** — Changed from 280x280 square to 280x350 oval with border-radius: 50%
13. **Aligned photo with content** — Changed `align-items: start` to `center`
14. **Updated intro text** — "high performance computing" → "High Performance Computing", added specific project references (96% accuracy, 40+ cores, RAG pipelines)
15. **About tagline** — "Quantum Computing, Photonics, HPC, and ML — building systems that scale under real hardware constraints"

### Phase 5: Navigation & Cross-Page Consistency

16. **Unified navbar** — Copied index.html nav (About, Research, Projects, Skills, Labs, Contact) to all sub-pages with `index.html#section` anchor links
17. **Hero buttons** — Changed from "Get in Touch" + "View Research" to "Research" (#research) + "Projects" (projects.html) + "Get in Touch" (contact.html)
18. **CTA button styling** — Made both buttons transparent/outlined by default, white fill on hover

### Phase 6: Research Section Icons

19. **Replaced emoji icons** — Swapped ⚛️💡🔬🤖 with inline SVG icons (atom, photon burst, microscope, neural net) on index.html research tiles
20. **About page icons** — Replaced all emoji icons on impact cards and values strip with SVG icons in gradient containers

### Phase 7: External References & Hyperlinks

21. **Resume link** — Found resume at `pranavkarakala.vercel.app/resume.pdf`, added to contact.html
22. **Quantum Codesign Lab** — Added to Labs section (later moved to Research), with links to Prof. Niu's UCSB faculty page, murphyniu.com, and Google Scholar
23. **Resume content integration** — Updated Quantum Codesign Lab card with actual resume bullet points (FQAs, 40+ cores, adaptive circuits)
24. **Pando.ai card** — Added internship experience card with supply chain network SVG icon, linked title to pando.ai
25. **UCSB course hyperlinks** — Linked ECE 136A, 136C, 133 to catalog.ucsb.edu across index.html and projects.html
26. **ECE/UCSB hover links** — Added `.hover-link` class (no underline, highlight on hover) for "Electrical & Computer Engineering" and "UC Santa Barbara" references

### Phase 8: PDF Downloads & File Cleanup

27. **Downloaded all PDFs locally** — 13 PDFs total: 3 ECE136A labs, 8 ECE136C labs, 1 Raman report, 1 resume → `assets/pdfs/`
28. **Updated all PDF links** — Changed from `pranavkarakala.vercel.app/...` to local `assets/pdfs/...` paths
29. **Workspace cleanup** — Deleted: old_project.html, 2 timestamped code dumps, draft README copy, 18 Next.js artifacts, .DS_Store files
30. **Renamed image folder** — Moved 5 webp images from "Pranav Reddy — Portfolio_files/" to `assets/images/`, deleted old folder

### Phase 9: Coursework & Contact Pages

31. **Coursework page** — Renamed resume.html to coursework.html, added 3 course categories (Quantum & Photonics, Signals/Systems/ML, Hardware & Architecture) with catalog links
32. **Contact page tiles** — Added Coursework tile alongside Email, Phone, LinkedIn, Resume; forced 5-column grid
33. **Contact tagline** — "Open to intern opportunities and research in hardware-focused software engineering, computer architecture, HPC, ML/AI, Photonics and Quantum Systems."

### Phase 10: Capitalization & Consistency

34. **Quantum Computing capitalization** — Standardized to always capitalize across all pages
35. **Spelling check** — Reviewed all text content, fixed about.html tagline that wasn't updated
36. **GitHub emoji consistency** — Standardized inline SVG GitHub logo across index.html and projects.html
37. **Color palette audit** — Fixed coursework.html download card gradient from old indigo-blue to teal-purple

### Phase 11: Research Section Restructuring

38. **Merged Featured Projects into Research** — Removed separate "Featured Projects" section, moved CQEC and Xanadu cards into Research Focus
39. **Card ordering** — Quantum Codesign Lab → CQEC → Xanadu X8 → Pando.ai → 4 small research tiles
40. **Added card icons** — SVG gradient icons added to CQEC, Xanadu, and Pando.ai project cards
41. **Tightened project card spacing** — Reduced padding between header border and body content

### Phase 12: Dark Mode & Theme

42. **Dark mode default** — Changed all 5 pages to default to dark mode (set dark if no saved preference)
43. **Profile image brightness** — Added `filter: brightness(1.25) contrast(1.08)` to both index.html and about.html profile images

### Phase 13: Hero Section Tuning

44. **Hero scaling** — Reduced from 70vh to 55vh, tightened padding
45. **Profile image adjustments** — Multiple iterations on object-position (20% → 30% → 38% → 32% → 26% → 15% → back to 20%) and size (280px → 320px → 260px → 280x350 oval)
46. **Profile card background** — Tested 0.15 → 0.25 → 0.4 → reverted to 0.15
47. **Hero stats** — Updated from "8+ Lab Experiments, 96% QEC, 12+ ML Models" to "244 Unit Tests, 96% QEC, 4 QEC Phases"
48. **Removed hero hyperlinks** — Removed ECE and UCSB links from hero paragraph (plain text)

### Phase 14: Mobile Responsive

49. **Full responsive overhaul** — Added 3 breakpoints (1024px, 768px, 480px) with comprehensive rules for nav, hero, grids, cards, timeline, buttons, footer
50. **Hamburger menu** — Added to all 5 pages: `.hamburger` button, `.nav-links` wrapper, toggle script, auto-close on link click
51. **Projects mobile** — Grid collapses to 1 column, card images shrink to 60%
52. **About mobile** — Hero grid stacks, photo shrinks, impact grid single column, values strip vertical
53. **Contact mobile** — 5 → 3 → 2 column grid at breakpoints

### Phase 15: Git Setup

54. **Initialized git** — `git init`, excluded cqec-ml-decoder (separate repo), created .gitignore
55. **First commit** — "Portfolio site: complete redesign with dark mode, research cards, coursework, hyperlinked references, and local PDFs"
56. **Second commit** — "Mobile responsive design, image brightness, hero scaling"
57. **No remote configured** — User needs to create GitHub repo and add remote

### Phase 16: CQEC Content Update (from latest GitHub)

58. **Fetched latest repo content** — README now has 4 phases (added Phase 3: non-ideal, Phase 4: adaptive)
59. **Updated all CQEC references** — index.html (hero stats, project card, research tile), projects.html (card description), about.html (impact cards) — all now reference 4 phases, 244 tests, adaptive GRU

### Phase 17: Interview Preparation Document

60. **Created INTERVIEW-PREP.md** — 10 general STAR responses + key numbers table
61. **Deliver Results** — 4 responses (exceed expectations, tight deadline, short-term sacrifice, competing priorities)
62. **Earn Trust** — 5 responses (earn trust, honest feedback, mistake handling, build credibility, disagreements)
63. **Dive Deep** — 5 responses (deep data analysis, data-driven decisions, root cause, complex system, question assumptions)
64. **Learn and Be Curious** — 5 responses (self-teaching, curiosity beyond scope, recent learning, new tools, staying current)
65. **AgenticAI Fluency** — 5 themes with 13 questions mapped: identifying use cases, responsible use, evaluating output, fact-checking, knowing when NOT to use
66. **Coursework-grounded responses** — 3 responses weaving in all 9 courses (ECE 130A/B, 132, 133, 134, 136A/B/C, 152A)
67. **Campus life & Greek life** — 5 responses: outside academics, stress handling, why UCSB, Sigma Phi Epsilon VP ($150K budget, 140-guest formal), surprise factor
68. **Renamed GenAI → AgenticAI** throughout document
69. **Removed "Leadership Principle:" prefix** — sections now just say "Deliver Results", "Earn Trust", etc.
70. **Removed Kiro references** — replaced with "AgenticAI tools" and "an AI-assisted coding tool"
71. **Grammar fixes** — "a AgenticAI" → "an AgenticAI" in 2 places
72. **Question styling** — HTML version highlights all Q lines with dark navy blue background and left border
73. **Generated INTERVIEW-PREP.html** — Print-ready styled HTML (Cmd+P → Save as PDF)

### Phase 18: Career Planning

74. **Created career.md** — Researched Lightmatter, Etched, Taalas, Cerebras roles and mapped against Pranav's skills
75. **Transferable skill matrix** — 10 skill domains rated across all 4 companies
76. **Internship domain ranking** — Tier 1: HW-SW co-design + ASIC tools; Tier 2: ML inference + HPC; Tier 3: Photonics + Embedded
77. **Skill gap closure plan** — 5 gaps with specific actions and timelines

### Phase 19: Content & Link Updates

78. **CTA banner text** — Changed "Working on HPC systems, next-gen hardware, or a tough engineering problem?" to include "ML Accelerators" at the front (about.html)
79. **Research Focus heading consistency** — Normalized all tile headings to 1.5rem: changed `.project-header h3` from 1.8rem to 1.5rem in styles.css, removed inline `font-size: 1.5rem` from ML Systems Acceleration Lab h3
80. **LinkedIn URL update** — Updated all LinkedIn links across contact.html (tile + footer) to https://www.linkedin.com/in/pranav-reddy-98bb962b9/

### Phase 20: Mobile Responsiveness Overhaul

81. **Body overflow-x** — Added `overflow-x: hidden` to body to prevent horizontal scroll from decorative pseudo-elements
82. **480px breakpoint expansion (styles.css)** — Added comprehensive rules: single-column research/contact grids, tighter timeline (1.5rem padding-left), smaller card icons (44px), smaller project headers, vertical project meta, smaller hero stats, smaller buttons
83. **Contact page mobile** — Changed 550px breakpoint from 2-column to single-column grid
84. **About page 480px breakpoint** — Added rules for smaller photo (150x190), smaller impact cards, tighter CTA banner and personal note
85. **Projects page 480px breakpoint** — Added rules for wider card images (90%), smaller card link buttons
86. **Project card word wrap** — Added `word-wrap: break-word` and `overflow-wrap: break-word` to `.project-card` to prevent text overflow

### Phase 21: ECE 135 Fiber Optic Communication Project

87. **New project card** — Added "Photonic Fiber Optic Communication (ECE 135)" tile to projects.html with inline SVG diagram showing AR-HCF cross-section and signal chain
88. **Content from final report** — AR-HCF group report (Group 4: Nicholas Shand, Pranav Reddy, Dash Franklin, Gavin Kesler). Key results: confinement loss ∝ 1/R⁴, BER ≈ 0 at 100 mW and 350 THz, nonlinear overlap η ≈ 10⁻³
89. **PDF linked** — assets/pdfs/ece135/HCF_and_an_Analytic_Model.pdf
90. **Coursework page updated** — Added ECE 135 — Fiber Optic Communication Systems to Quantum & Photonics category

### Phase 22: Projects Page Reorder & Content Updates

91. **Projects page reorder** — New order: CQEC → ML Systems Lab → ECE 136C → ECE 135 Fiber Optics → Lyapunov → ECE 136A → Raman Spectroscopy
92. **Research Focus subtitle** — Updated to include "ML system accelerators, quantum computing, computer architecture"
93. **ML Systems card rename** — "ML Systems Acceleration Lab" → "ML Systems Accelerator Lab" on index.html
94. **GitHub links green** — ML Systems and CQEC cards on index.html: GitHub logo fill changed to `var(--primary)`, link text shortened to "GitHub", styled green with font-weight 500
95. **Skills section overhaul** — Renamed "Machine Learning" → "ML Systems", added torch.fx/Kernel Optimization/Accelerator Simulation; moved CUDA and Graph IR/Compilers to "Programming & Systems"; renamed "Quantum & Physics" → "Quantum & Photonics"; added VPI Photonics and Quantum Error Correction
96. **Skills subtitle** — Updated to "Quantum, Photonics, ML System Compilers, Photonic Inference Systems, Hardware computing and software"
97. **Labs subtitle** — Updated to include "ML accelerator systems and computer architecture"

### Phase 23: About Page Overhaul

98. **About intro rewrite** — Two new paragraphs covering ML accelerator stack, torch.fx, CUDA codegen, AR-HCF fiber analysis, and RAG pipelines
99. **About page header** — Updated tagline to "Quantum Computing, Photonics, ML Accelerator Systems, and Fiber Optics"
100. **Impact card: Engineering Scalable Systems** — Rewritten to highlight ML accelerator stack (torch.fx, Triton-style kernel optimization, cycle-accurate simulation)
101. **Impact card: Next-Gen Architecture** — Rewritten with concrete references to ML compiler IRs, CUDA codegen, AR-HCF modeling, memory planning
102. **Impact card: Bridging Theory and Practice** — Added AR-HCF analytic model vs simulation reference
103. **Impact card: Experimental Rigor** — Added VPI Photonics simulation validation reference
104. **Impact card: Collaborative Research** — Added ECE 135 group project (4-person team) reference
105. **CTA paragraph** — Added "ML accelerator systems" to opportunities list
106. **About footer LinkedIn** — Fixed to https://www.linkedin.com/in/pranav-reddy-98bb962b9/

### Phase 24: Coursework Page Expansion

107. **5 missing courses added** — ECE 144 (Waveguide Physics), ECE 139 (Probability & Stats), ECE 153B (Interface Design), ECE 10 (Digital Circuit Design), CS 24 (C++)
108. **New category: Systems Programming** — CS 16, CS 24, ECE 154A (Fall 2026), ECE 154B (Fall 2026), CS 160 (Fall 2026)
109. **Category renames** — "Signals, Systems & ML" → "ML Systems & Signals", "Hardware & Architecture" → "Hardware Architecture"
110. **Coursework footer LinkedIn** — Fixed to https://www.linkedin.com/in/pranav-reddy-98bb962b9/
111. **Projects footer LinkedIn** — Fixed to https://www.linkedin.com/in/pranav-reddy-98bb962b9/

---

---

## Files Created This Session

| File | Purpose |
|------|---------|
| index.html | Homepage — hero, research, skills, labs |
| about.html | About page — redesigned with impact cards |
| projects.html | Projects — 7 cards with local PDFs |
| contact.html | Contact — 5 tiles in one row |
| coursework.html | Coursework — 4 categories + resume download |
| styles.css | Shared stylesheet (rebuilt from scratch after accidental deletion) |
| .gitignore | Excludes cqec-ml-decoder/, .DS_Store, .vscode/ |
| cqec-ml-decoder/README.md | Updated with 4-phase content |
| INTERVIEW-PREP.md | STAR responses for interview prep |
| INTERVIEW-PREP.html | Print-ready HTML version |
| career.md | Career planning — target companies analysis |
| BUILD-CONTEXT.md | This file — full session context |

---

## Notes for Future Sessions

- styles.css was accidentally deleted mid-session and rebuilt from memory — verify against the live site if anything looks off
- The cqec-ml-decoder/ folder is a separate git repo (has its own .git/) — excluded from the main portfolio repo via .gitignore
- No git remote is configured yet — user needs to create a GitHub repo and push
- Profile image (profile.jpg) background is dark — CSS brightness filter compensates but user may want to edit the actual image
- The old Vercel site (pranavkarakala.vercel.app) is the original Next.js portfolio — this static site replaces it
- INTERVIEW-PREP.html must be regenerated after any changes to INTERVIEW-PREP.md (use the Python markdown+styled HTML script)
- LinkedIn URL is now https://www.linkedin.com/in/pranav-reddy-98bb962b9/ — all pages updated
- All Research Focus tile headings are normalized to 1.5rem — maintain this if adding new cards
- Skills section has 3 categories: Quantum & Photonics, ML Systems, Programming & Systems
- Coursework page has 4 categories: Quantum & Photonics, ML Systems & Signals, Hardware Architecture, Systems Programming
- ECE 154A, ECE 154B, and CS 160 are listed as Fall 2026 (upcoming)
- Projects page has 7 cards in order: CQEC → ML Systems → ECE 136C → ECE 135 → Lyapunov → ECE 136A → Raman
