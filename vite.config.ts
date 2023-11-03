import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Components from "unplugin-vue-components/vite";
import AutoImport from "unplugin-auto-import/vite";
import VueRouter from "unplugin-vue-router/vite";
import { VueRouterAutoImports } from "unplugin-vue-router";
import { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    VueRouter(),
    vue(),
    Components({
      directoryAsNamespace: true,
      collapseSamePrefixes: true,
    }),
    AutoImport({
      imports: ["vue", "@vueuse/core", "pinia", VueRouterAutoImports],
      vueTemplate: true,
      dirs: ["./src/stores"],
    }),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "./src"),
    },
  },
});
