/* eslint-env node */
require('@rushstack/eslint-patch/modern-module-resolution')

module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    '@vue/eslint-config-typescript',
    '@vue/eslint-config-prettier'
  ],
  overrides: [
    {
      files: ['cypress/e2e/**.{cy,spec}.{js,ts,jsx,tsx}'],
      extends: ['plugin:cypress/recommended']
    }
  ],
  parserOptions: {
    ecmaVersion: 'latest'
  },
  rules: {
    eqeqeq: 1,
    'prettier/prettier': 'error',
    'no-unused-vars': 0,
    'no-console': 1,
    'no-cond-assign': 2,
    'comma-spacing': 2,
    'eol-last': 2,
    'key-spacing': 2,
    'no-dupe-args': 2,
    'no-unreachable': 2,
    'no-var': 2,
    'prefer-const': 2,
    'no-debugger': 2
  }
}
