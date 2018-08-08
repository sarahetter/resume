module.exports = {
	"extends": ["airbnb", "prettier"],
	"env": {
    "browser": true,
	},
	"rules": {
    "react/jsx-filename-extension": 0,
    "strict": 0,
    "react/forbid-prop-types": 0,
    "react/no-unescaped-entities": 0,
    "prettier/prettier": "error",
    "import/prefer-default-export": 0,
    "import/no-named-as-default": 0,
    "no-plusplus": 0,
    "no-loop-func": 0,
    "no-unused-vars": ["error", {
      "argsIgnorePattern": "^_",
      "varsIgnorePattern": "^_"
    }],
    "no-return-assign" : 0,
    "compat/compat": "error"
  },
  "plugins": [
    "prettier",
    "jest",
    "compat"
  ],
  "settings": {
    "polyfills": ['promises']
  }
};