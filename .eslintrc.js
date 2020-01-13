module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaFeatures: {
      legacyDecorators: true
    }
  },
  extends: [
    'prettier',
    'prettier/vue',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended'
  ],
  plugins: ['prettier'],
  // add your custom rules here
  rules: {
    'space-before-function-paren': ['error', 'never'],
    '@typescript-eslint/indent': ['error', 2]
  }
}
