module.exports = {
  root: true,
  extends: [
    'plugin:vue/vue3-essential',
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    '@vue/eslint-config-prettier',
    '@vue/airbnb',
    'prettier',
  ],
  env: {
    'vue/setup-compiler-macros': true,
  },
  rules: {
    'no-template-curly-in-string': 0,
    'import/no-unresolved': 0,
    'import/extensions': 0,
    'vuejs-accessibility/click-events-have-key-events': 0,
    'import/prefer-default-export': 0,
    'vue/multi-word-component-names': 0,
    'import/no-extraneous-dependencies': 0,
    'no-console': 0,
    'no-param-reassign': 0,
    'no-useless-catch': 0,
    'prettier/prettier': [
      'error',
      {
        endOfLine: 'auto',
      },
    ],
    'consistent-return': 0,
    'prefer-destructuring': 0,
    'vuejs-accessibility/mouse-events-have-key-events': 0,
  },
};
