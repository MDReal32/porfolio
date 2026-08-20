// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

// https://astro.build/config
export default defineConfig({
  outDir: "build",
  // assetsInlineLimit: 0 forces hoisted scripts to external files instead of inlining them
  vite: { plugins: [tailwindcss()], build: { assetsInlineLimit: 0 } },
  site: "https://mdreal.org"
});
