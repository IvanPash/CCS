module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:vue/vue3-recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  plugins: ['vue', 'prettier'],
  rules: {
    'no-undef': 'off',
    semi: 'off',
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'no-return-assign': 'off',
    'max-len': [
      'error',
      {
        code: 100,
        ignoreStrings: true,
        ignoreTemplateLiterals: true,
        ignoreComments: true,
        ignorePattern: '^\\s*class=',
      },
    ],
  },
  ignorePatterns: ['node_modules/', '.buildt/', '.idea/', '.vscode/', 'dist/'],
}
