// @ts-check
const eslint = require('@eslint/js');
const tseslint = require('typescript-eslint');
const angular = require('angular-eslint');
const prettier = require('eslint-config-prettier');

module.exports = tseslint.config(
  {
    // Regenerated in full by every Save and Sync. A finding here is a codegen
    // bug, and it belongs to whoever owns the editor — not to this app.
    ignores: [
      'dist/**',
      '.angular/**',
      'public/assets/**',
      '.magmonium/**',
      'src/app/features/**',
      'src/app/pages/**',
      'src/app/widgets/**',
      'src/app/shared/lib/**',
      'src/app/*.router.ts',
      'src/app/*.provide.ts',
    ],
  },
  {
    files: ['**/*.ts'],
    extends: [
      eslint.configs.recommended,
      ...tseslint.configs.recommended,
      ...angular.configs.tsRecommended,
      prettier,
    ],
    processor: angular.processInlineTemplates,
  },
  {
    files: ['**/*.html'],
    extends: [
      ...angular.configs.templateRecommended,
      ...angular.configs.templateAccessibility,
    ],
  },
  {
    // src/app/custom/ is yours and is linted like any hand-written code, but
    // it may only reach src/app/shared/. Everything else the editor emits is
    // downstream of it, so an import the other way is the one cycle this
    // layering can produce (ADR 0088).
    files: ['src/app/custom/**/*.ts'],
    rules: {
      'no-restricted-imports': [
        'error',
        {
          patterns: [
            {
              group: [
                '**/features/**',
                '**/pages/**',
                '**/widgets/**',
                '**/shared/lib/**',
              ],
              message:
                'src/app/custom/ may import src/app/shared/ only — features, pages and widgets are generated and import custom, not the other way round.',
            },
          ],
        },
      ],
    },
  }
);
