import { defineConfig } from 'astro/config';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  site: process.env.PUBLIC_SITE || 'https://default-site.com',
  base: process.env.PUBLIC_BASE_URL || '/',
  trailingSlash: 'always',
});
