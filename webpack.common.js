const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const outputDir = path.join(__dirname, "build/");

module.exports = {
  entry: "./src/Index.bs.js",
  output: {
    path: outputDir,
    filename: "Index.js"
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader", "postcss-loader"]
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "src/index.html",
      inject: false
    }),
    new MiniCssExtractPlugin({ filename: "./css/app.css" })
  ]
};
