const path = require("path");
let HtmlWebpackPlugin = require("html-webpack-plugin");
module.exports = {
  devServer: {
    port: 3000,
    progress: true,
    contentBase: "./build",
    compress: true, //壓縮
  },
  entry: "./src/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
      filename: "index.html",
      // minify: {
      //   removeAttributeQuotes: true,
      //   collapseWhitespace: true,
      // },
      hash: true,
    }),
  ],
  module: {
    rules: [
      // {
      //   test: /\.js$/,
      //   use: {
      //     loader: "eslint-loader",
      //     enforce: "pre",
      //     exclude: /node_modules/,
      //   },
      // },
      {
        test: /\.js$/,
        use: {
          loader: "babel-loader",
          options: {
            // 配置 Babel 解析器 (第三步)
            presets: ["@babel/preset-env"],
            plugins: ["@babel/plugin-transform-runtime"],
          },
        },
        exclude: /node_modules/,
      },
    ],
  },
};
