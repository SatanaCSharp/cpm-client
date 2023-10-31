module.exports = {
    env: {
        browser: true,
        es2021: true,
    },
    extends: [
        'plugin:react/recommended',
        'plugin:@typescript-eslint/recommended',
        'airbnb',
    ],
    parser: '@typescript-eslint/parser',
    parserOptions: {
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    settings: {
        'import/resolver': {
            typescript: {},
        },
    },
    plugins: ['react', '@typescript-eslint', 'react-hooks'],
    globals: {
        React: true,
        google: true,
        mount: true,
        mountWithRouter: true,
        shallow: true,
        shallowWithRouter: true,
        context: true,
        expect: true,
        jsdom: true,
        JSX: true,
    },
    rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/require-default-props': 'off',
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'max-len': [
            'error',
            {
                code: 120,
                ignoreRegExpLiterals: true,
                ignoreComments: true,
                ignoreTrailingComments: true,
                ignoreStrings: true,
            },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'react/prop-types': 'off',
        'no-restricted-syntax': 'off',
        'import/prefer-default-export': 'off',
        'no-shadow': 'off',
        '@typescript-eslint/no-shadow': ['error'],
        'no-unused-vars': 'off',
        '@typescript-eslint/no-unused-vars': ['error'],
        'react/jsx-props-no-spreading': 'off',
        'import/no-extraneous-dependencies': 'off',
        'implicit-arrow-linebreak': 'off',
        'object-curly-newline': 'off',
        'react/jsx-wrap-multilines': 'off',
        indent: 'off',
        'operator-linebreak': [
            'error',
            'after',
            {
                overrides: {
                    '?': 'before',
                    ':': 'before',
                },
            },
        ],
        'import/extensions': [
            'error',
            'ignorePackages',
            {
                js: 'never',
                jsx: 'never',
                ts: 'never',
                tsx: 'never',
            },
        ],
    },
};