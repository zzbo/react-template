module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  extends: [
    "airbnb-typescript",
    "plugin:@typescript-eslint/recommended",
    "plugin:import/typescript",
  ],
  rules: {
    'max-len': [
      'error',
      {
        code: 130,
      },
    ],
    'react/jsx-key': 2,
  },
  parserOptions: {
    project: './tsconfig.json',
  },
};
