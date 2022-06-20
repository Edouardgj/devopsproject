module, exports = {
    "extends": "airbnb",
    "parser": "babel-eslint",
    "plugins": [
        "react"
    ],
    "env" : {
    "browser": true,
    "commonjs": true,

    "amd": true, // Enables require() and define() as global variables as per the amd spec.
    "node": true, // Enables Node. js global variables and Node.js scoping.
    "jest": true,
    "es6": true
    },
    "extends": "eslint: recommended",
    "parserOptions": {
        "ecmaVersion":"latest"
    },
    "rules": {} 
    }
    //"eslint": "npx eslint './src/*.(js,ts}' . -fix",
