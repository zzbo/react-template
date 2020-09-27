module.exports = {
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