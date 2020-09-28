const path = require('path');
const { override, addWebpackAlias, addDecoratorsLegacy } = require('customize-cra');
const eslintConfigOverrides = require('customize-cra-eslint');
const eslintConfig = require('./.eslintrc.js');

module.exports = override(
  addWebpackAlias({
    '@': path.resolve(__dirname, 'src'),
  }),
  addDecoratorsLegacy(),
  eslintConfigOverrides(eslintConfig),
);
