# Pranav Reddy — portfolio

A static Astro portfolio for https://pkarakala.github.io. The homepage, Work archive, coursework, and resume share layouts, components, and design tokens. Essential content and navigation use no client JavaScript.

## Local development

Use Node 24 LTS and npm.

```sh
npm ci
npm run dev
```

Open the local address printed by Astro (normally http://127.0.0.1:4321). With Astro 7, development starts in the background; use `npx astro dev stop` to stop it.

```sh
npm run build
npm run preview -- --port 4321
```

Stop development first if you want the production preview on the same port. The build runs Astro/TypeScript validation and checks all local links, fragments, assets, PDFs, resume integrity, approved About copy, archive coverage, metadata, and draft exclusion. `npm run check:links` checks external destinations and requires network access.

See [CONTENT-GUIDE.md](CONTENT-GUIDE.md) for routine edits and [BUILD-CONTEXT.md](BUILD-CONTEXT.md) for migration decisions. Review evidence is in [docs/VERIFICATION.md](docs/VERIFICATION.md).

## GitHub Pages

`astro.config.mjs` uses `https://pkarakala.github.io` with **no repository base path** and emits literal `.html` pages to `dist/`. Only `dist/` is deployed. Reports and images retain their original root-relative URLs.

The `.github/workflows/pages.yml` workflow validates pull requests and deploys the built `dist/` directory on `main` pushes or a manual run on `main`. The repository's Pages source is **GitHub Actions**; the repository root is not the published website.

Public files belong in `public/`. Supporting source and documentation remain outside the generated website.
