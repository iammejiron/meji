import { dirname } from "path";
import { fileURLToPath } from "url";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const compat = new FlatCompat({
  baseDirectory: __dirname,
});

// 基本設定（JS/TS 両方に適用）
const eslintConfig = [
  ...compat.extends("next/core-web-vitals"),
  {
    files: ["**/*.{js,jsx}"],
    rules: {
      // React 属性名のタイプミス検出
      "react/no-unknown-property": ["error", { ignore: [] }],
    },
  },
  {
    // TypeScript 専用設定（型チェックあり）
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
      parser: (await import("@typescript-eslint/parser")).default,
      parserOptions: {
        project: "./tsconfig.json",
        tsconfigRootDir: __dirname,
      },
    },
    plugins: {
      "@typescript-eslint": (await import("@typescript-eslint/eslint-plugin"))
        .default,
    },
    rules: {
      "react/no-unknown-property": ["error", { ignore: [] }],
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_" },
      ],
    },
  },
];

export default eslintConfig;
