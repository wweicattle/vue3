//
let path = require("path");

const CopyPlugin = require("copy-webpack-plugin");
let htmlwebpackplugin = require("html-webpack-plugin");
const {
  copyFile
} = require("fs");
module.exports = {
  entry: ['babel-polyfill', "/src/index.js"],
  output: {
    path: path.resolve(__dirname, "buddle"),
    filename: "buddles.js",
  },
  module: {
    rules: [{
        test: /\.css$/,
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.less$/i,
        use: ["style-loader", "css-loader", "less-loader"]
      },
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader",
        ]
      },
      {
        test: /\.tsx/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.(png|jpg|jpeg)$/,
        type: "asset",
        generator: {
          filename: 'static/[hash:6][ext][query]'
        }
      }
    ],


  },
  plugins: [
    new htmlwebpackplugin({
      template: "./public/index.html"
    }),
    new CopyPlugin({
      patterns: [{
        from: "public",
        to: "./",
        globOptions: {
          dot: true,
          gitignore: true,
          ignore: ["**/index.html*"],
        },
      }, ],
    })
  ]
};
