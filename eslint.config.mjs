/**
 * 文件职责：统一 TypeScript、测试、脚本和配置文件的规模、复杂度与依赖规则。
 * 关键边界：生产函数 60 行，测试 callback 100 行，所有手工代码文件最多 400 行。
 */

import js from '@eslint/js'
import importPlugin from 'eslint-plugin-import'
import globals from 'globals'
import tseslint from 'typescript-eslint'

const sharedRules = {
  complexity: ['error', 10],
  'import/no-cycle': ['error', { ignoreExternal: true, maxDepth: Infinity }],
  'max-depth': ['error', 4],
  'max-lines': ['error', { max: 400, skipBlankLines: false, skipComments: false }],
  'max-lines-per-function': [
    'error',
    { max: 60, skipBlankLines: false, skipComments: false },
  ],
  'max-params': ['error', 5],
}

export default tseslint.config(
  {
    ignores: [
      'coverage/**',
      'dist/**',
      'lib/**',
      'node_modules/**',
      'playwright-report/**',
      'test-results/**',
    ],
  },
  js.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}', 'tests/**/*.{ts,tsx}', '*.config.ts'],
    extends: [...tseslint.configs.recommendedTypeChecked],
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      import: importPlugin,
    },
    rules: {
      ...sharedRules,
      '@typescript-eslint/consistent-type-imports': 'error',
      '@typescript-eslint/explicit-function-return-type': [
        'error',
        { allowExpressions: true },
      ],
      '@typescript-eslint/no-explicit-any': 'error',
      '@typescript-eslint/no-floating-promises': 'error',
      '@typescript-eslint/no-misused-promises': 'error',
      '@typescript-eslint/no-unnecessary-type-assertion': 'error',
    },
    settings: {
      'import/resolver': {
        typescript: true,
      },
    },
  },
  {
    files: ['tests/**/*.{ts,tsx}'],
    rules: {
      'max-lines-per-function': [
        'error',
        { max: 100, skipBlankLines: false, skipComments: false },
      ],
    },
  },
  {
    files: ['scripts/**/*.mjs', '*.config.{js,mjs,cjs}'],
    languageOptions: {
      globals: globals.node,
    },
    plugins: {
      import: importPlugin,
    },
    rules: sharedRules,
  },
)
