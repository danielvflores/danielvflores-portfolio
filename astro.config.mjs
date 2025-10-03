import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://danielvflores-portfolio.vercel.app',
  base: '/',
  trailingSlash: 'ignore',
  output: 'static',
  
  // SEO optimizations
  compressHTML: true,
  
  // Sitemap generation
  integrations: [
    sitemap()
  ],
  
  // Build optimizations
  build: {
    inlineStylesheets: 'auto'
  },
  
  // Prefetch configuration
  prefetch: {
    prefetchAll: true
  }
});
