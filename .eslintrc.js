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
    "jsx-a11y/no-static-element-interactions": 0,
    'jsx-a11y/click-events-have-key-events': 0,
    "no-console": 0,
    "arrow-body-style": 0,
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
