import pluginJs from '@eslint/js';
import pluginPrettier from 'eslint-plugin-prettier';
import globals from 'globals';

const config = [
  {
    languageOptions: {
      globals: {
        ...globals.browser,
      },
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
    },
  },
  pluginJs.configs.recommended,
  {
    files: ['*.js'],
    plugins: {
      prettier: pluginPrettier,
    },
    rules: {
      'prettier/prettier': ['error'],
    },
  },
];

export default config;
