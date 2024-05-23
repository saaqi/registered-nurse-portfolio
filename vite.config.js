import { defineConfig } from "vite";
import webfontDownload from "vite-plugin-webfont-dl";
import { ViteMinifyPlugin } from "vite-plugin-minify";
import { comment } from "postcss";
const IN_PRODUCTION = process.env.NODE_ENV === "production";
const IN_DEVELOPMENT = process.env.NODE_ENV === "development";


export default defineConfig({
  plugins: [

    /* ## Download Google Fonts and attach them with production build for offline use
    --------------------------------------------- */
    IN_PRODUCTION &&
      webfontDownload([
        "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700&display=swap",
      ]),

    /* ## Minify the output HTML files in production
    --------------------------------------------- */
    IN_PRODUCTION && ViteMinifyPlugin({}),
  ],

  base: "./",
  server: {
    port: 3000,
  },

  // build: {
  //   outDir: "./docs",
  // },
});
