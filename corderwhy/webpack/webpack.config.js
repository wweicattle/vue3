//
let path = require("path");
let webpack = require("webpack")
const CopyPlugin = require("copy-webpack-plugin");
let htmlwebpackplugin = require("html-webpack-plugin");
//引用插件
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

const {VueLoaderPlugin}= require("vue-loader");
module.exports = {
  entry: ['babel-polyfill', "/src/index.js"],
  output: {
    path: path.resolve(__dirname, "buddle"),
    // filename: "js/[name]build[hash:10].js",
    filename: "js/[name].js",

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
      },
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        use: ['vue-loader'],
        exclude: /node_modules/,
      },

    ],


  },
  cache: {
    type: 'memory'
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
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
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  }
};
console.log(process.env.NDOE_ENV);
