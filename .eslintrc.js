module.exports = {
    "plugins": [
        "react"
    ],
    "env": {
        "browser": true,
        "commonjs": true,
        "amd": true, // Enables require() and define() as global variables as per the amd spec.
        "node": true, // Enables Node.js global variables and Node.js scoping.
        "jest": true,
        "es6": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "parserOptions": {
        "ecmaVersion": "2015",
        "sourceType": "module",
        "ecmaFeatures": {
            "jsx": true
          }
    },
    "rules": {
        "react/react-in-jsx-scope":"off",
        //"react/jsx-filename-extension":[1,{"exetensions":[".js",".jsx"]}],
        "react/jsx-uses-react": "error",
        "react/jsx-uses-vars": "error",
    }

}

// "eslint": "npx eslint './src/*.{js,ts}' . --fix",
