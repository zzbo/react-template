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
    "@typescript-eslint/type-annotation-spacing": "error",
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
