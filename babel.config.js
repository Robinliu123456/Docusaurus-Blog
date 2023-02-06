module.exports = {
  presets: [require.resolve('@docusaurus/core/lib/babel/preset')],
    plugins: [
      ["@locator/babel-jsx/dist", {
        env: "development"
      }]
    ],
};
