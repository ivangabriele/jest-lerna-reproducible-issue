const withCss = require("@zeit/next-css");
const withTranspileModules = require("next-transpile-modules");

module.exports = withCss(
  // We use next-transpile-modules in order to transpile the ui package source
  // so that it can be imported in this package during webpack build process:
  // https://josephluck.co.uk/blog/next-typescript-monorepo
  withTranspileModules({
    transpileModules: ["@ivangabriele/example-lerna-babel-jest-ui"]
  })
);
