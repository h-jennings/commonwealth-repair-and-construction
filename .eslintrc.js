module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
  },
  extends: [
    'plugin:react/recommended',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
  ],
  plugins: ['react', 'import', 'prettier', 'jest'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      modules: true,
      jsx: true,
    },
  },
  rules: {
    indent: ['error', 2, { SwitchCase: 1 }],
    quotes: ['warn', 'single'],
    'linebreak-style': [1, 'unix'],
    'no-unused-vars': 'warn',
    'jsx-a11y/anchor-is-valid': 'off',
    'no-console': 1,
    'react/prop-types': 0,
  },
};
