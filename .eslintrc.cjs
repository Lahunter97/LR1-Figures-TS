module.exports = {
    env: { node: true, es2022: true, jest: true },
    parser: '@typescript-eslint/parser',
    plugins: ['@typescript-eslint', 'import'],
    extends: ['airbnb-base', 'plugin:@typescript-eslint/recommended'],
    parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
    settings: { 'import/resolver': { node: { extensions: ['.ts', '.js'] } } },
    rules: {
      'no-console': 'off',
      'import/extensions': ['error', 'ignorePackages', { ts: 'always', js: 'always' }],
      'class-methods-use-this': 'off',
    },
  };
  