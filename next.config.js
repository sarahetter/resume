// next.config.js
const withSass = require("@zeit/next-sass");

module.exports = withSass({
  exportPathMap() {
    return {
      "/": { page: "/" }
    };
  }
});
