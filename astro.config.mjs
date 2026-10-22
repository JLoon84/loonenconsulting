// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: "https://loonenconsulting.com",
  base: process.env.SITE_BASE ?? "/",
});
