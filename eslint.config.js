import { FlatCompat } from '@eslint/eslintrc';
import prettierConfig from 'eslint-config-prettier/flat';
import prettierPlugin from 'eslint-plugin-prettier/recommended';
import react from 'eslint-plugin-react';
import sonarjs from 'eslint-plugin-sonarjs';
import unicorn from 'eslint-plugin-unicorn';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname
});

export default tseslint.config(
  {
    ignores: ['.expo']
  },
  ...compat.config({
    /**
     * Under the hood 'expo' automatically configures:
     * - eslint-plugin-react-hooks
     */
    extends: ['expo']
  }),
  prettierConfig,
  prettierPlugin,
  sonarjs.configs.recommended,
  unicorn.configs.recommended,
  {
    files: ['**/*.ts', '**/*.tsx'],
    ...react.configs.flat.recommended,
    languageOptions: {
      ...react.configs.flat.recommended.languageOptions
    }
  },
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...tseslint.configs.strict,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylistic,
      ...tseslint.configs.stylisticTypeChecked
    ],
    rules: {
      '@typescript-eslint/array-type': 'off',
      '@typescript-eslint/consistent-type-definitions': 'off',
      '@typescript-eslint/consistent-type-imports': [
        'warn',
        { prefer: 'type-imports', fixStyle: 'inline-type-imports' }
      ],
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/require-await': 'off',
      '@typescript-eslint/no-misused-promises': [
        'error',
        { checksVoidReturn: { attributes: false } }
      ]
    }
  },
  {
    linterOptions: {
      reportUnusedDisableDirectives: true
    },
    languageOptions: {
      parserOptions: {
        projectService: true
      }
    }
  },
  {
    rules: {
      'unicorn/no-null': 'off',
      'unicorn/prevent-abbreviations': [
        'error',
        {
          allowList: {
            env: true
          }
        }
      ]
    }
  }
);
