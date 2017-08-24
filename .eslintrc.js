module.exports = {
  extends: 'airbnb',
  parser: 'babel-eslint',
  plugins: ['react', 'jsx-a11y', 'import'],
  env: {
    browser: true,
    jest: true,
  },
  rules: {
    'react/prop-types': 0,
    strict: 0,
  },
};
