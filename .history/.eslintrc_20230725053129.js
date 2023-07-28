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
    "plugins": [
        "react",
        "eslint:recommended",
        "plugin:@typescript-eslint/recommended"

    ],
        "rules": {
            "@typescript-eslint/dot-notation": "error"

    }
}
