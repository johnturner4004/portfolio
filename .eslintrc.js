/* eslint-disable spellcheck/spell-checker */
module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:react/jsx-runtime',
    'airbnb',
  ],
  overrides: [
  ],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: [
    'react',
    'spellcheck',
  ],
  rules: {
    'spellcheck/spell-checker': [
      'warn', {
        skipWords: [
          'rect',
          'keydown',
          'mr',
          'builtins',
          'dataset',
          'linebreak',
          'li',
          'mb',
          'mx',
          'pmt',
          'Bal',
          'href',
        ],
      },
    ],
    'linebreak-style': ['error', 'windows'],
    'react/react-in-jsx-scope': 'off',
  },
};
