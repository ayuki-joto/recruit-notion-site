module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    parser: "babel-eslint",
  },
  extends: ["eslint:recommended", "plugin:vue/recommended", "plugin:prettier/recommended"],
  plugins: ["vue"],
  rules: {},
};
