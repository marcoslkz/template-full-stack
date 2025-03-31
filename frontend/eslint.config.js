import globals from "globals";
import tseslint from "typescript-eslint";
import pluginReactConfig from "eslint-plugin-react/configs/recommended.js";
import reactRefresh from "eslint-plugin-react-refresh";
import reactHooks from "eslint-plugin-react-hooks";
import js from "@eslint/js";

export default [
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      parserOptions: {
        ecmaFeatures: { jsx: true },
      },
    },
  },
  pluginReactConfig,
  {
    files: ["**/*.{js,jsx,mjs,cjs,ts,tsx}"],
    plugins: {
      "react-refresh": reactRefresh,
      "react-hooks": reactHooks,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      "react/react-in-jsx-scope": "off", // Optional: Vite handles React import
      "react/jsx-uses-react": "off", // Optional: Vite handles React import
    },
    settings: {
      react: {
        version: "detect", // Automatically detect the React version
      },
    },
  },
];
