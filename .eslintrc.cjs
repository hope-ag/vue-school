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
  rules: {
    'vue/multi-word-component-names': 'off',
    'vue/block-order': [
      'error',
      {
        order: ['script', 'template', 'style']
      }
    ]
  },
  parserOptions: {
    ecmaVersion: 'latest'
  }
}
