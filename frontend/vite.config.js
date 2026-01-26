import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: "jsdom",
    setupFiles: "./setupTests.js",
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5000", // your backend server
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
