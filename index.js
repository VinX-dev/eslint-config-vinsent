module.exports = {
    extends: "airbnb",
    plugins: [
        "react",
        "jsx-a11y",
        "import"
    ],
    // please see the README.md for reasons why these are added
    rules: {
        "max-len": ["error", 120, 4, {
            ignoreUrls: true,
            ignoreComments: false,
            ignoreRegExpLiterals: true,
            ignoreStrings: true,
            ignoreTemplateLiterals: true,
        }],
        "comma-dangle": 0,
        "no-underscore-dangle": 0,
        "import/prefer-default-export": 0,
        "indent": ["error", 4],
        "react/jsx-filename-extension": 0,
        "react/jsx-indent": ["error", 4],
        "react/jsx-indent-props": ["error", 4],
        "jsx-a11y/no-static-element-interactions": 0
    }
};
