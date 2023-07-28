module.exports = {
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
        "plugins": ["@typescript-eslint"],
        "parserOptions": {
            "project": "./tsconfig.json"
        },
    },
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "react-app",
        "react-app/jest",
        "plugin:react/recommended",
        "standard-with-typescript"
    ],
    "overrides": [
    ],
    "plugins": [
        "react",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended",
        '@typescript-eslint'

    ],
        "rules": {
            "@typescript-eslint/dot-notation": "error"

    }
}
