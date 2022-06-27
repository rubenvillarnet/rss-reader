module.exports = {
  root: true,
  env: {
    browser: true, // Enables browser globals like window and document
    node: true // Enables Node.js global variables and Node.js scoping.
  },
  settings: {
    react: {
      version: "detect" // Automatically detect the react version
    }
  },
  parser: "@typescript-eslint/parser", // TypeScript Parser
  parserOptions: {
    ecmaVersion: "latest" // Use the latest ECMAScript standard
  },
  plugins: ["@typescript-eslint", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended", // Uses the recommended rules from the @typescript-eslint/eslint-plugin
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "plugin:jest/recommended", // Recommended Jest Linting
    "plugin:testing-library/react",
    "prettier", // Uses prettier to disable ESLint rules from @typescript-eslint/eslint-plugin that would conflict with prettier
    "plugin:prettier/recommended" // Enables eslint-plugin-prettier and eslint-config-prettier. This will display prettier errors as ESLint errors. Make sure this is always the last configuration in the extends array.
  ],
  rules: {
    // Formatting
    "prettier/prettier": [
      "error",
      {},
      {
        usePrettierrc: true
      }
    ]
  }
};
