module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: 'eslint-config-imweb',
  plugins: ['@typescript-eslint', 'react', 'react-hooks'],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: './tsconfig.json',
  },
  rules: {
    "no-use-before-define": "off",
    "@typescript-eslint/no-use-before-define": ["error"],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
    "import/extensions": [
      "error",
      "ignorePackages",
      {
        "js": "never",
        "jsx": "never",
        "ts": "never",
        "tsx": "never"
      }
   ]
  },
  settings: {
    "import/extensions": [".js",".jsx",".ts",".tsx"],
    "import/parsers": {
        "@typescript-eslint/parser": [".ts",".tsx"]
    },
    "import/resolver": {
      "node": {
        "extensions": [".js",".jsx",".ts",".tsx"]
      }
    }
  },
};