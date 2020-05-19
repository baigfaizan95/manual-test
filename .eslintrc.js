module.exports = {
  parser: 'babel-eslint',

  extends: ['prettier', 'plugin:react/recommended'],

  env: {
    browser: true,
    node: true,
    es6: true,
  },

  plugins: ['prettier', 'react'],

  rules: {
    'no-extra-semi': 1,
    'no-inner-declarations': 2,
    'no-use-before-define': ['warn', { functions: false, classes: true }],

    curly: 2,
    'no-eval': 2,
    'no-extend-native': 2,
    'no-new-wrappers': 2,
    'no-with': 2,
    'no-return-await': 2,

    'no-undef': 2,
    'no-var': 2,
    'no-unused-vars': [2, { argsIgnorePattern: '^_', varsIgnorePattern: '^_' }],
    'prefer-const': [
      'error',
      {
        destructuring: 'all',
        ignoreReadBeforeAssign: false,
      },
    ],

    'no-array-constructor': 2,
    'no-new-object': 2,

    'prettier/prettier': 'error',

    'react/prop-types': 0,
    'react/no-find-dom-node': 0,
  },
  settings: {
    react: {
      version: '^16.11.0',
    },
    eslint: {
      packageManager: 'yarn',
    },
  },
};
