import { defineConfig } from "astro/config";

// Set site and base for GitHub Pages deployment under /trueassisttechnology-blog
export default defineConfig({
  srcDir: "src",
  outDir: "dist",
  site: "https://vandana1412a.github.io",
  base: "/trueassisttechnology-blog"
});
