module.exports = {
  root: true,
  extends: ['universe/native'],
  rules: {
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: 'error',
    'max-len': ['error', { code: 120, tabWidth: 2 }],
  },
};
