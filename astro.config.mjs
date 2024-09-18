import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  site: 'http://demo2.vnisc.com.vn',
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    sitemap()
  ],
  output: "server",
  adapter: vercel(),
});