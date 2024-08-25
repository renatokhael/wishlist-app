// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///X:/challenges/luizalabs-freedom/frontend/node_modules/vite/dist/node/index.js";
import vue from "file:///X:/challenges/luizalabs-freedom/frontend/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import vueDevTools from "file:///X:/challenges/luizalabs-freedom/frontend/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
var __vite_injected_original_import_meta_url = "file:///X:/challenges/luizalabs-freedom/frontend/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [vue(), vueDevTools()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  },
  test: {
    environment: "happy-dom",
    // Define o ambiente de teste como Happy DOM
    globals: true
    // Se estiver usando APIs globais do Vitest, como `describe`, `it`, etc.
    // setupFiles: './setupTests.ts', // Remova ou comente essa linha se você não precisar de um setup
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJYOlxcXFxjaGFsbGVuZ2VzXFxcXGx1aXphbGFicy1mcmVlZG9tXFxcXGZyb250ZW5kXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJYOlxcXFxjaGFsbGVuZ2VzXFxcXGx1aXphbGFicy1mcmVlZG9tXFxcXGZyb250ZW5kXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9YOi9jaGFsbGVuZ2VzL2x1aXphbGFicy1mcmVlZG9tL2Zyb250ZW5kL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSBcIm5vZGU6dXJsXCI7XG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tIFwidml0ZVwiO1xuaW1wb3J0IHZ1ZSBmcm9tIFwiQHZpdGVqcy9wbHVnaW4tdnVlXCI7XG5pbXBvcnQgdnVlRGV2VG9vbHMgZnJvbSBcInZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29sc1wiO1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbdnVlKCksIHZ1ZURldlRvb2xzKCldLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgIFwiQFwiOiBmaWxlVVJMVG9QYXRoKG5ldyBVUkwoXCIuL3NyY1wiLCBpbXBvcnQubWV0YS51cmwpKSxcbiAgICB9LFxuICB9LFxuICB0ZXN0OiB7XG4gICAgZW52aXJvbm1lbnQ6IFwiaGFwcHktZG9tXCIsIC8vIERlZmluZSBvIGFtYmllbnRlIGRlIHRlc3RlIGNvbW8gSGFwcHkgRE9NXG4gICAgZ2xvYmFsczogdHJ1ZSwgLy8gU2UgZXN0aXZlciB1c2FuZG8gQVBJcyBnbG9iYWlzIGRvIFZpdGVzdCwgY29tbyBgZGVzY3JpYmVgLCBgaXRgLCBldGMuXG4gICAgLy8gc2V0dXBGaWxlczogJy4vc2V0dXBUZXN0cy50cycsIC8vIFJlbW92YSBvdSBjb21lbnRlIGVzc2EgbGluaGEgc2Ugdm9jXHUwMEVBIG5cdTAwRTNvIHByZWNpc2FyIGRlIHVtIHNldHVwXG4gIH0sXG59KTtcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBa1QsU0FBUyxlQUFlLFdBQVc7QUFDclYsU0FBUyxvQkFBb0I7QUFDN0IsT0FBTyxTQUFTO0FBQ2hCLE9BQU8saUJBQWlCO0FBSHVLLElBQU0sMkNBQTJDO0FBS2hQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVMsQ0FBQyxJQUFJLEdBQUcsWUFBWSxDQUFDO0FBQUEsRUFDOUIsU0FBUztBQUFBLElBQ1AsT0FBTztBQUFBLE1BQ0wsS0FBSyxjQUFjLElBQUksSUFBSSxTQUFTLHdDQUFlLENBQUM7QUFBQSxJQUN0RDtBQUFBLEVBQ0Y7QUFBQSxFQUNBLE1BQU07QUFBQSxJQUNKLGFBQWE7QUFBQTtBQUFBLElBQ2IsU0FBUztBQUFBO0FBQUE7QUFBQSxFQUVYO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
