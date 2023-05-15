import { defineConfig } from "vite";
import { resolve } from "path";

// const root = resolve(__dirname, "src");
const outDir = resolve(__dirname, "dist");

export default defineConfig({
  base: "./",
  build: {
    outDir,
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        service: resolve(__dirname, "src/service/index.html"),
      },
    },
  },
});
