module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
        "plugins": ["@typescript-eslint"],
        
    },
    "parserOptions": {
        "project": "./tsconfig.json"
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        "plugin:eslint/recommended"
    ],
    "overrides": [
    ],
    "plugins": [
        'prettier',
        'eslint-plugin-eslint',
        "eslint",
        "react",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        '@typescript-eslint'

    ],
        "rules": {
            "@typescript-eslint/dot-notation": "error"

    }
}
