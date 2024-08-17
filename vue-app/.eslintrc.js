/**
 * .eslint.js
 *
 * ESLint configuration file.
 */

module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'vuetify',
    '@vue/eslint-config-typescript',
    './.eslintrc-auto-import.json',
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:vue/recommended',
    'prettier',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
    requireConfigFile: false,
  },
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/script-indent': off,
    'prettier/prettier': ['error', { singleQuote: true, semi: true }],
  },
};
