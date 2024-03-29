module.exports = {
    extends: "airbnb",
    plugins: [
        "react",
        "jsx-a11y",
        "import"
    ],
    // please see the README.md for reasons why these are added
    rules: {
        "no-console": ["warn", { allow: ["warn", "info", "error", "group", "groupEnd"] }],
        "max-len": 0,
        "comma-dangle": 0,
        "no-underscore-dangle": 0,
        "import/prefer-default-export": 0,
        "indent": ["error", 4, {
            SwitchCase: 1
        }],
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "react/no-did-mount-set-state": 0,
        "react/no-danger": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "react/jsx-one-expression-per-line": 0,
        "object-curly-newline": 0,
        "import/no-unresolved": [ "error", { ignore: [ "img", "env", "theme", "lib" ] } ],
        "camelcase": 0,
        "react/jsx-props-no-spreading": 0,
        "arrow-parens": [2, "as-needed", { requireForBlockBody: true }]
    }
};
