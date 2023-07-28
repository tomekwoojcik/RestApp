module.exports = {
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
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
        "plugins": ["@typescript-eslint"],
        "parserOptions": {
            "project": "./tsconfig.json"
        },
    },
    "plugins": [
        "react"
    ],
        "rules": {
            "@typescript-eslint/dot-notation": "error"

    }
}
