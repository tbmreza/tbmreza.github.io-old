const ghpages = require("gh-pages");

ghpages.publish(
  "__sapper__/export",
  {
    branch: "master",
    repo: "https://github.com/tbmreza/tbmreza.github.io.git",
    user: {
      name: "tbmreza",
      email: "rezahandzalah@gmail.com",
    },
  },
  () => {
    console.log("Deploy Complete!");
  }
);
