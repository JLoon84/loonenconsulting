// @ts-check
import { defineConfig } from "astro/config";

// Generate a sitemap during production builds.
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://www.loonenconsulting.com",
  base: "/",
  output: "static",
  trailingSlash: "always",

  build: {
    format: "directory",
  },

  // Generate a sitemap during production builds.
  integrations: [
    sitemap({
      filter: (page) => {
        const pathname = new URL(page).pathname;

        return pathname !== "/" && pathname !== "/404/";
      },
    }),
  ],
});