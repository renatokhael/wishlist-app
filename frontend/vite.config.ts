import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueDevTools from "vite-plugin-vue-devtools";

export default defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  test: {
    environment: "happy-dom", // Define o ambiente de teste como Happy DOM
    globals: true, // Se estiver usando APIs globais do Vitest, como `describe`, `it`, etc.
    // setupFiles: './setupTests.ts', // Remova ou comente essa linha se você não precisar de um setup
  },
});
