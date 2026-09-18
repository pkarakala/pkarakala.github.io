# Updating the portfolio

## Add a project

1. Copy `templates/project.md` to `src/content/work/my-project.md`.
2. Set `title`, a unique `slug`, a concise `summary`, `category`, and `order`.
3. Keep `draft: true` until ready. Drafts are validated but omitted from both the homepage and archive.
4. Add the real `repository` URL or `reports` paths. Never guess a repository URL. If there is no public evidence, omit those fields and explain the limitation in `status`.
5. Record collaborators in `collaborators`. Use `attribution` for a precise credit such as “Course project with …”.
6. Set `draft: false`, then run `npm run build` and preview.

Categories: `Research`, `Coursework`, `Independent project`; use neutral `Project` when the source does not establish the context. Adding a project never requires changing a layout or page.

```yaml
---
title: Your actual project title
slug: your-project
summary: One or two concrete sentences about what you explored or built.
category: Independent project
order: 15
draft: true
collaborators: []
---
```

Use the exact external URL for `repository`. For a report, copy the real PDF under `public/assets/pdfs/`, then add:

```yaml
reports:
  - label: Read report
    url: /assets/pdfs/your-project/report.pdf
```

The title points directly to the repository or, when there is exactly one report, to that report. All report links remain visible in the archive. `related` accepts a list of `{ label, url }` for related external evidence. `date`, `context`, `role`, and `status` are optional; omit unknown details. The project Markdown body is for authoring notes and is not rendered as a case study.

For a measured result or reproducible figure, add optional `evidence: { statement, label, url }`. The statement appears on both Home and Work, with a direct link to the methods, raw timings, or figure. Qualify device, workload, simulation conditions, and variability as needed; do not imply a one-device measurement is a general speedup. A conceptual cover image remains labeled with its caption on both pages.

For a collection of reports, add `reportHeading` so the archive presents them as one labeled group. A title with multiple reports does not link arbitrarily to the first PDF; readers choose the report they want. ECE 136C is one work entry with eight report links. Its `anchorAliases` preserve the former `#quantum-optics` and `#xanadu-x8` fragments on the combined card.

Optional real images appear in the archive and, when featured, on the homepage with `cover: { src, alt, caption, width, height }`. Use a root-relative `/assets/` URL and accurate alt text/caption and dimensions. Avoid generic or invented project imagery. The six restored covers are the images from the previous portfolio; the other projects remain text-only instead of using filler artwork. The header mark is the owner-supplied image at `public/assets/images/house-circuit-mark.png`.

## Choose selected work

Add a unique positive `featuredOrder` to each project to include on the homepage. Remove the field to keep it only in the archive. Lower values appear first. `order` controls the full archive. Keep the selection small enough to skim; the current selection contains four entries. Related subprojects can remain linked from a parent entry without appearing as duplicate archive cards. When consolidating entries, preserve old fragment URLs with `anchorAliases`.

## Replace the resume

The single primary URL is **`/assets/pdfs/resume.pdf`**. To copy a replacement without changing or rewriting the source PDF:

```sh
npm run resume:set -- "/absolute/path/to/your/new-resume.pdf"
npm run build
```

The script copies the exact bytes into `public/assets/pdfs/resume.pdf` and updates `docs/resume-source.json` with a SHA-256 integrity record. All current resume links use `src/data/profile.ts`. The original `resume1.pdf` and `resume2.pdf` are retained only to preserve old asset URLs; the website does not promote these versions.

## Update experience, education, or contact details

- `src/data/experience.ts`: organization, role, and displayed dates.
- `src/data/profile.ts`: name, exact program/university wording, introduction, human-readable obfuscated email display, GitHub, LinkedIn, and canonical resume URL. Home and Contact render it as text, without a `mailto:` link. This deters simple page scrapers but is not a guarantee against sophisticated scraping or the address appearing in public PDFs/repositories.
- `src/data/coursework.json`: course groups, course titles, catalog links, and explicitly documented terms.
- `src/data/about.md`: the verbatim owner-approved About prose. Edit only when the owner approves new copy. It is rendered once on the homepage; `/about.html` takes visitors there.

Do not add a graduation date unless it is explicitly approved. Resume text is not automatically imported into the website.

## Write a note

Copy `templates/note.md` to `src/content/notes/your-note.md`. Set a title, description, date, and Markdown body. Keep `draft: true` while writing. Publish with `draft: false` only when ready.

The first published note automatically adds Notes to navigation, creates `/notes.html`, adds the article at `/notes/your-note.html`, and includes it in the sitemap. With no published notes, there is no Notes navigation item or empty production index. The two checked-in `example-draft.md` entries demonstrate adding content without touching layout code and are deliberately unpublished.

## Design and preview

Edit colors, font families, and shared spacing in `src/styles/tokens.css`. Component and responsive rules are in `src/styles/global.css`. Fonts are locally bundled from Fontsource; license copies are in `public/assets/fonts/licenses/`.

```sh
npm ci
npm run dev
npm run build
npm run preview
npm run check:links
```

Review homepage and Work at 1440, 1024, 768, 390, and 320px; follow keyboard focus, open a report and the resume, and check collaborator credits. The production build fails on missing local links/assets and draft leaks. External checks report blocked destinations separately; a bot-blocked response is not proof a URL is broken.

## Compatibility and assets

- `/index.html` and `/` serve the homepage.
- `/projects.html` forwards to `/work.html` using a static, JavaScript-free compatibility page.
- `/about.html` forwards to `/#about`; `/assets/pdfs/resume.html` forwards to `/resume.html`.
- `/contact.html`, `/coursework.html`, `/resume.html`, and `/404.html` remain available.
- `#research`, `#labs`, and `#skills` still resolve from the homepage.
- Existing PDF, image, portrait, banner, and stylesheet paths are preserved. Only the canonical resume PDF is intentionally replaced.

Keep reports under their established filenames: the ECE 136C public filenames do not match the internal report numbering. Link labels now describe the actual report topics. Do not rename these assets merely to match the cover-page numbers.
