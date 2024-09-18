import { defineConfig } from "astro/config";
import node from "@astrojs/node";
import react from "@astrojs/react";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";
import partytown from '@astrojs/partytown'

export default defineConfig({
  site: 'http://demo2.vnisc.com.vn',
  integrations: [
    react({
      include: ["**/react/*"],
    }),
    sitemap(),
    partytown({
      config: {
        forward: ["dataLayer.push"],
      },
  })
  ],
  output: "server",
  adapter: vercel(),
});