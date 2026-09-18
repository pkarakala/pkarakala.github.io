import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://pkarakala.github.io',
  output: 'static',
  build: { format: 'file' },
  trailingSlash: 'never',
  devToolbar: { enabled: false },
});
