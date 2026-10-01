import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pkarakala.github.io',
  output: 'static',
  build: { format: 'file' },
  trailingSlash: 'never',
  devToolbar: { enabled: false },
  // Cache the small progressive-enhancement module across page visits.
  vite: { build: { assetsInlineLimit: 0 } },
});
