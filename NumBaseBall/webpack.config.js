const { Module } = require("webpack");
const path = require("path");
const { appendFile } = require("fs");

Module.exports = {
  name: "numbaseball-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "./src/dist"),
    filename: "app.js",
  }, // 출력
};
