import pixie from "@pixie-cheeks/eslint-config";
import tseslint from "typescript-eslint";

export default tseslint.config(
  { files: ["**/*.ts,js,cjs"] },
  { ignores: ["dist"] },
  ...pixie.base,
  {
    files: ["eslint.config.js", "vite.config.ts"],
    rules: {
      "import-x/no-default-export": "off",
    },
  },
  {
    files: ["src/**/*"],
    rules: {
      "n/no-unsupported-features/node-builtins": "off",
    },
  },
  {
    files: ["**/*.ts"],
    extends: [
      tseslint.configs.strictTypeChecked,
      tseslint.configs.stylisticTypeChecked,
    ],
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    rules: {
      "@typescript-eslint/consistent-type-definitions": ["error", "type"],
      "@typescript-eslint/explicit-function-return-type": "error",
    },
  },
  pixie.prettier,
);
