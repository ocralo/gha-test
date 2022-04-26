module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'airbnb', 'prettier'],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react', 'prettier'],
  rules: {
    //here we can change any rule "off/error/warn"
    'prettier/prettier': 'error', // or warn
    // this is needed for prettier to work

    //example rules

    'no-unused-vars': 'warn', // default in airbnb is error

    //you can disable add or remove rules based on your coding taste
  },
};
