import { globalIgnores } from "eslint/config";

export const ignoreConfig = globalIgnores([
  "**/routeTree.gen.ts",
  "**/_generated/",
  "**/migrations/",
  "**/.tanstack/",
  "**/dist/",
  "**/build/",
]);
