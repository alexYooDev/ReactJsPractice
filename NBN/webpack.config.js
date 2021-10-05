const { Module } = require("webpack");
const path = require("path");
const RefreshWebpackPlugin = require("@pmmmwh/react-refresh-webpack-plugin");

Module.exports = {
  name: "wordtail-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extension: [".js", ".jsx"],
  },
  // 입력
  entry: {
    app: ["./client"],
  },
  modules: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  plugins: [new RefreshWebpackPlugin()],
  // 출력
  output: {
    //현재 디렉토리와 하위디렉토리 주소를 합친다.
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  },
  devServer: {
    hot: true,
  },
};
