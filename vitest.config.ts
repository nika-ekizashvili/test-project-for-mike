import { defineConfig } from "vitest/config";
import react from "@vitejs/plugin-react";
import { resolve } from "node:path";

// Unit tests run in jsdom with the React plugin, so component tests written as .tsx parse.
// Without this file vitest hands .tsx straight to the bundler and every component test dies
// with "Unexpected JSX expression" before a single assertion runs.
export default defineConfig({
  plugins: [react()],
  test: {
    environment: "jsdom",
    globals: true,
    setupFiles: ["./vitest.setup.ts"],
    include: ["src/**/*.{test,spec}.{ts,tsx}"],
    // A repo with no unit tests yet is not a failing repo. Without this vitest exits 1 on an
    // empty suite, so `npm test` is red on the base branch itself and no PR can ever be green.
    passWithNoTests: true,
  },
  resolve: {
    alias: { "@": resolve(__dirname, "./src") },
  },
});
