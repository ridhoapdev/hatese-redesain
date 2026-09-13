// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';
import alpinejs from '@astrojs/alpinejs';

export default defineConfig({
  site: 'https://hatese.co.id', // Ganti dengan domain final
  integrations: [
    sitemap(),
    alpinejs({ entrypoint: '/src/alpine.ts' }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});