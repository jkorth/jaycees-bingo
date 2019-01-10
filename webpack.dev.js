const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const outputDir = path.join(__dirname, "build/");

module.exports = merge(common, {
  devtool: "inline-source-map",
  mode: "development",
  devServer: {
    compress: true,
    contentBase: outputDir,
    port: process.env.PORT || 8000,
    historyApiFallback: true
  }
});
