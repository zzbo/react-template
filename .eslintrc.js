module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: 'eslint-config-imweb',
  plugins: ['react-hooks'],
  parser: '@typescript-eslint/parser',

  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  }
};