module.exports = {
    "extends": "airbnb-base",
    "rules": {
        "indent": ["error", 4],
        "max-len": ["error", 120, 4],
        "comma-dangle": ["error", {
            "arrays": "only-multiline",
            "objects": "only-multiline",
            "imports": "never",
            "exports": "never",
            "functions": "ignore"
        }],
        "no-plusplus": "off",
        "no-underscore-dangle": 0
    }
};
