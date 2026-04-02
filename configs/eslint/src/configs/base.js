import perfectionist from "eslint-plugin-perfectionist";
import { defineConfig } from "eslint/config";
import ts from "typescript-eslint";
import js from "@eslint/js";

import { ignoreConfig } from "../ignore.js";

export const baseConfig = defineConfig([
  ignoreConfig,
  js.configs.recommended,
  ts.configs.recommendedTypeChecked,
  {
    rules: {
      "@typescript-eslint/only-throw-error": [
        "error",
        {
          allow: [
            {
              package: "@tanstack/router-core",
              name: "Redirect",
              from: "package",
            },
            {
              package: "@tanstack/router-core",
              name: "NotFoundError",
              from: "package",
            },
          ],
        },
      ],
      "@typescript-eslint/no-import-type-side-effects": "error",
      "@typescript-eslint/consistent-type-imports": "error",
      curly: "error",
    },
  },
  perfectionist.configs["recommended-line-length"],
]);
