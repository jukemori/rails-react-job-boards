module.exports = {
  globals: {
    window: true,
    document: true,
  },
  root: true,
  extends: ["airbnb", "airbnb/hooks", "prettier"],
  rules: {
    "import/no-extraneous-dependencies": ["error", { devDependencies: true }],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/function-component-definition": [
      1,
      { namedComponents: "arrow-function" },
    ],
    "no-console": 0,
    "no-alert": 0,
    "react/prop-types": "off",
  },
};
