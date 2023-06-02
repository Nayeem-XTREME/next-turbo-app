module.exports = {
  env: {
    es2021: true,
    browser: true,
  },
  extends: [
    'next/core-web-vitals',
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:storybook/recommended',
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    sourceType: 'module',
    ecmaVersion: 'latest',
    babelOptions: {
      presets: [require.resolve('next/babel')],
    },
  },
  plugins: ['react', '@typescript-eslint', 'simple-import-sort'],
  rules: {
    semi: ['error', 'always'],
    quotes: ['error', 'single'],
    'react/display-name': 'off',
    'react/react-in-jsx-scope': 'off',
    'import/no-duplicates': 'error',
    'simple-import-sort/exports': 'error',
    '@next/next/no-html-link-for-pages': 'off',
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'error',
    'simple-import-sort/imports': [
      'error',
      {
        // Copied and tweaked from
        // https://github.com/lydell/eslint-plugin-simple-import-sort/blob/main/examples/.eslintrc.js
        groups: [
          // Node.js builtins. You could also generate this regex if you use a `.js` config.
          // For example: `^(${require("module").builtinModules.join("|")})(/|$)`
          [
            '^(assert|buffer|child_process|cluster|console|constants|crypto|dgram|dns|domain|events|fs|http|https|module|net|os|path|punycode|querystring|readline|repl|stream|string_decoder|sys|timers|tls|tty|url|util|vm|zlib|freelist|v8|process|async_hooks|http2|perf_hooks)(/.*|$)',
          ],
          // Packages. `next` and `react` related packages come first.
          [
            '^react',
            'next',
            'next-auth',
            'next-auth/providers',
            'next-auth/next',
            'tss-react',
            'tailwind-styled-components',
            'tailwind.config.js',
            'tailwindcss/resolveConfig',
            'date-fns',
            'react-icons',
            'react-hook-form',
            '@emotion',
            '@next',
            '@mui',
            '@hookform/resolvers',
            '@reduxjs/toolkit',
            'redux-persist',
            'redux-logger',
            'next-redux-cookie-wrapper',
            'next-redux-wrapper',
            '^@?\\w',
          ],
          // Custom packages
          // components
          // hooks
          // api
          // state
          // helpers
          // utils
          // configs
          // types
          [
            '^(@app/components)(/.*|$)',
            '^(@app/hooks)(/.*|$)',
            '^(@app/api)(/.*|$)',
            '^(@app/state)(/.*|$)',
            '^(@app/helpers)(/.*|$)',
            '^(@app/utils)(/.*|$)',
            '^(@app/configs)(/.*|$)',
            '^(@app/types)(/.*|$)',
          ],
          // pages
          ['^(@/app)(/.*|$)', '^(@/pages)(/.*|$)'],
          // Other relative imports. Put same-folder imports and `.` last.
          ['^\\./(?=.*/)(?!/?$)', '^\\.(?!/?$)', '^\\./?$'],
          // Parent imports. Put `..` last.
          ['^\\.\\.(?!/?$)', '^\\.\\./?$'],
          // public
          ['^(public)(/.*|$)'],
          // types
          ['^.*\\u0000$'],
          // Style module imports.
          ['^.+\\.module.scss$', '^.+\\.module.css$'],
          // Style imports.
          ['^.+\\.scss$', '^.+\\.css$'],
          // Side effect imports.
          ['^\\u0000'],
        ],
      },
    ],
  },
};
