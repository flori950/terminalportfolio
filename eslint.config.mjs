import js from '@eslint/js';
import typescript from '@typescript-eslint/eslint-plugin';
import typescriptParser from '@typescript-eslint/parser';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{js,jsx,ts,tsx}'],
    plugins: {
      '@typescript-eslint': typescript,
      react,
      'react-hooks': reactHooks,
    },
    languageOptions: {
      parser: typescriptParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.es2021,
        ...globals.node,
        React: 'readonly',
        HTMLElement: 'readonly',
        HTMLInputElement: 'readonly',
        HTMLFormElement: 'readonly',
        beforeEach: 'readonly',
        localStorage: 'readonly',
        screen: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
      },
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
    rules: {
      'react/react-in-jsx-scope': 'off',
      'react/no-unescaped-entities': 'off',
      'camelcase': 'error',
      'no-duplicate-imports': 'error',
      '@typescript-eslint/no-unused-vars': 'error',
      'no-unused-vars': 'off', // Turn off the base rule in favor of @typescript-eslint version
      'react/prop-types': 'off',
      'linebreak-style': 'off', // Turn off linebreak-style for Windows compatibility
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'coverage/', '*.config.js', '*.config.ts'],
  },
];
