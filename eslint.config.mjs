import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

const eslintConfig = [
  ...compat.config({
    parser: "@typescript-eslint/parser",
    plugins: ["@typescript-eslint"],
    extends: [
      "eslint:recommended",
      "plugin:@typescript-eslint/recommended",
      "prettier",
    ],
    env: {
      node: true,
      es6: true,
    },
  }),
];

export default eslintConfig;
