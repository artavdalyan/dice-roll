const path = require('path');

module.exports = {
  'env': {
    'browser': true,
    'es6': true,
    'node': true,
  },
  'parser': '@typescript-eslint/parser',
  'parserOptions': {
    'project': path.resolve(__dirname, './tsconfig.json'),
    'sourceType': 'module',
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
  ],
  'settings': {
    'import/parsers': { '@typescript-eslint/parser': ['.ts'] },
  },
  plugins: [
    'eslint-plugin-import',
    'eslint-plugin-import-helpers',
    '@typescript-eslint',
    '@angular-eslint',
    '@typescript-eslint/tslint',
    'prettier',
    'simple-import-sort',
  ],
  rules: {
    'indent': ['error', 2],
    '@typescript-eslint/camelcase': 'off',
    '@typescript-eslint/no-unused-vars-experimental': [
      'error',
      { ignoredNamesRegex: '^_' }
    ],
    '@typescript-eslint/adjacent-overload-signatures': 'error',
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/explicit-member-accessibility': [
      'off',
      {
        'overrides': {
          'constructors': 'off',
        },
      },
    ],
    '@typescript-eslint/no-misused-promises': 'off',
    '@typescript-eslint/unbound-method': 'off',
    '@typescript-eslint/indent': 'off',
    '@typescript-eslint/consistent-type-definitions': 'error',
    '@typescript-eslint/member-delimiter-style': [
      'error',
      {
        'multiline': {
          'delimiter': 'semi',
          'requireLast': true,
        },
        'singleline': {
          'delimiter': 'semi',
          'requireLast': false,
        },
      },
    ],
    '@typescript-eslint/no-angle-bracket-type-assertion': 'off',
    '@typescript-eslint/no-empty-interface': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-inferrable-types': 'error',
    '@typescript-eslint/no-namespace': 'error',
    '@typescript-eslint/no-shadow': ['error'],
    '@typescript-eslint/no-require-imports': 'error',
    '@typescript-eslint/no-this-alias': 'error',
    '@typescript-eslint/no-empty-function': ['error', { 'allow': ['constructors', 'methods'] }],
    '@typescript-eslint/no-misused-new': 'error',
    '@typescript-eslint/no-use-before-define': 'error',
    '@typescript-eslint/no-use-before-declare': 'off',
    '@typescript-eslint/no-var-requires': 'error',
    '@typescript-eslint/prefer-for-of': 'error',
    '@typescript-eslint/prefer-function-type': 'error',
    '@typescript-eslint/prefer-namespace-keyword': 'error',
    '@typescript-eslint/quotes': [
      'error',
      'single',
      {
        'avoidEscape': true,
      },
    ],
    '@typescript-eslint/semi': [
      'error',
      'always',
    ],
    '@typescript-eslint/naming-convention': [
      'error',
      {
        selector: 'default',
        format: ['camelCase', 'PascalCase', 'snake_case', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'variable',
        format: ['camelCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'enumMember',
        format: ['PascalCase', 'UPPER_CASE'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'interface',
        format: ['PascalCase'],
        prefix: ['I'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'typeLike',
        format: ['PascalCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: ['private'],
        format: ['camelCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'memberLike',
        modifiers: ['public'],
        format: ['camelCase', 'PascalCase'],
        leadingUnderscore: 'allow'
      },
      {
        selector: 'variable',
        types: ['boolean'],
        format: ['PascalCase'],
        prefix: ['is', 'should', 'has', 'can', 'did', 'will'],
        leadingUnderscore: 'allow'
      }
    ],
    '@typescript-eslint/type-annotation-spacing': 'error',
    '@typescript-eslint/unified-signatures': 'error',
    '@angular-eslint/component-class-suffix': 'error',
    '@angular-eslint/contextual-lifecycle': 'error',
    '@angular-eslint/directive-class-suffix': 'error',
    '@angular-eslint/directive-selector': [
      'error',
      { type: 'attribute', prefix: 'app', style: 'camelCase' },
    ],
    '@angular-eslint/component-selector': [
      'error',
      { type: 'element', prefix: ['app', 'lib', ''], style: 'kebab-case' },
    ],
    'no-restricted-imports': [
      'error',
      {
        paths: [
          {
            name: 'rxjs/Rx',
            message: 'Please import directly from \'rxjs\' instead',
          },
        ],
      },
    ],
    '@typescript-eslint/member-ordering': [
    'error',
    {
      default: [
        'static-field',
        'instance-field',
        'static-method',
        'instance-method',
      ],
    },
  ],
    '@typescript-eslint/no-non-null-assertion': 'error',
    'no-fallthrough': 'error',
    '@angular-eslint/no-conflicting-lifecycle': 'error',
    '@angular-eslint/no-host-metadata-property': 'error',
    '@angular-eslint/no-input-rename': 'error',
    '@angular-eslint/no-inputs-metadata-property': 'error',
    '@angular-eslint/no-output-on-prefix': 'error',
    '@angular-eslint/no-output-rename': 'error',
    '@angular-eslint/no-outputs-metadata-property': 'error',
    '@angular-eslint/use-lifecycle-interface': 'warn',
    '@angular-eslint/use-pipe-transform-interface': 'error',
    'import-helpers/order-imports': [
      'error',
      {
        'newlinesBetween': 'always',
        'groups': [
          'module',
          '/^@projects/',
          [
            'parent',
            'sibling',
            'index',
          ]
        ],
        'alphabetize': {
          'order': 'asc',
          'ignoreCase': true,
        },
      },
    ],
    'object-curly-spacing': [
      'error',
      'always',
    ],
    'no-multi-spaces': [
      'error',
    ],
    'arrow-body-style': 'error',
    // 'arrow-parens': [
    //   'error',
    //   'as-needed',
    // ],
    '@typescript-eslint/ban-types': ['error', {
      'types': {
        'String': {
          'message': 'Use string instead',
          'fixWith': 'string',
        },
        '{}': {
          'message': 'Use Record<K, V> instead',
          'fixWith': 'Record<K, V>',
        },
        'object': {
          'message': 'Use Record<K, V> instead',
          'fixWith': 'Record<K, V>',
        },
      },
    }],
    // 'complexity': ['warn', 3],
    'constructor-super': 'error',
    'curly': 'error',
    'dot-notation': 'off',
    'eol-last': 'error',
    'eqeqeq': [
      'error',
      'smart',
    ],
    'guard-for-in': 'error',
    'id-match': 'error',
    'import/no-default-export': 'error',
    'import/no-deprecated': 'warn',
    'import/no-extraneous-dependencies': 'off',
    'import/no-internal-modules': 'off',
    'import/order': 'off',
    'max-classes-per-file': 'off',
    'max-len': [
      'error',
      {
        'code': 300,
      },
    ],
    'new-parens': 'error',
    'no-bitwise': 'error',
    'no-caller': 'error',
    'no-cond-assign': 'error',
    'no-console': [
      'error',
      {
        'allow': [
          'info',
          'dirxml',
          'warn',
          'error',
          'dir',
          'timeLog',
          'assert',
          'clear',
          'count',
          'countReset',
          'group',
          'groupCollapsed',
          'groupEnd',
          'table',
          'markTimeline',
          'profile',
          'profileEnd',
          'timeline',
          'timelineEnd',
          'timeStamp',
          'context',
        ],
      },
    ],
    'no-debugger': 'error',
    'no-duplicate-case': 'error',
    'no-duplicate-imports': 'error',
    'no-empty': 'error',
    'no-eval': 'error',
    'no-extra-bind': 'error',
    'no-invalid-this': 'error',
    'no-irregular-whitespace': 'error',
    'no-multiple-empty-lines': [
      'error',
      {
        'max': 1,
      },
    ],
    'no-new-func': 'error',
    'no-new-wrappers': 'error',
    'no-redeclare': 'error',
    'no-return-await': 'error',
    'no-sequences': 'error',
    'no-sparse-arrays': 'error',
    'no-template-curly-in-string': 'error',
    'no-shadow': 'off',
    'no-throw-literal': 'error',
    'no-trailing-spaces': 'error',
    'no-undef-init': 'error',
    'no-unsafe-finally': 'error',
    'no-unused-expressions': 'error',
    'no-unused-labels': 'error',
    'no-var': 'error',
    'object-shorthand': 'error',
    'prefer-const': 'error',
    'prefer-object-spread': 'error',
    'quote-props': [
      'error',
      'as-needed',
    ],
    'radix': 'error',
    'space-before-function-paren': [
      'error',
      {
        'anonymous': 'never',
        'named': 'never',
        'asyncArrow': 'always',
      },
    ],
    'use-isnan': 'error',
    'valid-typeof': 'off',
    '@typescript-eslint/tslint/config': [
      'error',
      {
        'rulesDirectory': [
          './node_modules/tslint-eslint-rules/dist/rules',
          './node_modules/tslint-config-prettier/lib',
          './node_modules/tslint-consistent-codestyle/rules',
        ],
        'rules': {
          'align': [
            true,
            'parameters',
            'statements',
            'members',
          ],
          'comment-format': [
            true,
            'check-space',
          ],
          'import-spacing': true,
          'jsdoc-format': [
            true,
            'check-multiline-start',
          ],
          'no-accessor-recursion': true,
          'no-collapsible-if': true,
          'no-implicit-dependencies': false,
          'no-multi-spaces': true,
          'no-reference-import': true,
          'no-return-undefined': [
            true,
            'allow-void-expression',
          ],
          'no-unnecessary-callback-wrapper': true,
          'no-unnecessary-else': true,
          'no-unnecessary-type-annotation': true,
          'no-var-before-return': true,
          'number-literal-format': true,
          'object-shorthand-properties-first': true,
          'one-line': [
            true,
            'check-open-brace',
            'check-catch',
            'check-else',
            'check-finally',
            'check-whitespace',
          ],
          'parameter-properties': [
            true,
            'leading',
            'member-access',
          ],
          'prefer-conditional-expression': true,
          'prefer-const-enum': true,
          'prefer-while': true,
          'switch-final-break': true,
          'whitespace': [
            true,
            'check-branch',
            'check-decl',
            'check-operator',
            'check-separator',
            'check-type',
            'check-type-operator',
            'check-rest-spread',
          ],
        },
      },
    ],
  },
  overrides: [
    {
      files: ['*.component.html'],
      parser: '@angular-eslint/template-parser',
      plugins: ['@angular-eslint/template'],
      rules: {
        // ORIGINAL tslint.json -> "template-banana-in-box": true,
        '@angular-eslint/template/banana-in-a-box': 'error',

        // ORIGINAL tslint.json -> "template-no-negated-async": true,
        '@angular-eslint/template/no-negated-async': 'error',
      },
    },
    {
      files: ['*.component.ts'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
      },
      plugins: ['@angular-eslint/template'],
      processor: '@angular-eslint/template/extract-inline-html',
    },
  ],
};
