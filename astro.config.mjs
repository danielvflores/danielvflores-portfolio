import { defineConfig } from 'astro/config';

export default defineConfig({
  // Configuración para Vercel con base URL correcta
  base: '/',
  trailingSlash: 'ignore',
  output: 'static'
});
