import { defineConfig, transformWithOxc } from "vite";
import react from "@vitejs/plugin-react";

const candidateJsxPlugin = {
  name: "candidate-js-jsx",
  enforce: "pre",
  async transform(code, id) {
    if (!id.includes("/src/") || !id.endsWith(".js")) {
      return null;
    }
    return transformWithOxc(code, id, { lang: "jsx" }, undefined, this.environment?.config);
  },
};

export default defineConfig({
  plugins: [candidateJsxPlugin, react()],
  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: {
        ".js": "jsx",
      },
    },
  },
  server: {
    allowedHosts: [".internal", ".vm-provider.internal"],
  },
  test: {
    environment: "happy-dom",
    globals: true,
    setupFiles: "./src/test/setupTests.js",
    include: ["src/**/*.{test,spec}.{js,jsx,ts,tsx}"],
  },
});
