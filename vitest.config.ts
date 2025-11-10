import { defineConfig } from "vitest/config";
import config from "./vite.config";

export default defineConfig({
  plugins: [...config.plugins],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: "./tests/vitest.setup.ts",
  },
});
