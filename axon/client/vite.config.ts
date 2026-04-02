import react, { reactCompilerPreset } from "@vitejs/plugin-react";
import { tanstackRouter } from "@tanstack/router-plugin/vite";
import { AXON_CLIENT_PORT } from "@lab/core/constants/ports";
import tailwindcss from "@tailwindcss/vite";
import babel from "@rolldown/plugin-babel";
import { defineConfig } from "vite";
import { resolve } from "node:path";

export default defineConfig({
  plugins: [
    // Make sure that '@tanstack/router-plugin/vite' is passed before '@vitejs/plugin-react'
    tanstackRouter({
      autoCodeSplitting: true,
      quoteStyle: "double",
      semicolons: true,
      target: "react",
    }),
    babel({ presets: [reactCompilerPreset()] }),
    react(),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": resolve(__dirname, "src"),
    },
  },
  server: {
    port: AXON_CLIENT_PORT,
  },
});
