const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "oci",
    projectName: "travel-train",
    webpackConfigEnv,
    argv,
  });

  return merge(defaultConfig, {
    module:{
      rules:[
        {
          test: /\.(css)$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  });
};
