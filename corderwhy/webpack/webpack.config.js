//
let path = require("path");
let webpack = require("webpack")
const CopyPlugin = require("copy-webpack-plugin");
let htmlwebpackplugin = require("html-webpack-plugin");
//引用插件
const {
  CleanWebpackPlugin
} = require("clean-webpack-plugin");

const {
  VueLoaderPlugin
} = require("vue-loader");
module.exports = {
  // performance: {
  //   hints: 'warning',
  //   //入口起点的最大体积 整数类型（以字节为单位）
  //   maxEntrypointSize: 50000000,
  //   //生成文件的最大体积 整数类型（以字节为单位 300k）
  //   maxAssetSize: 30000000,
  //   //只给出 js 文件的性能提示
  //   assetFilter: function (assetFilename) {
  //     return assetFilename.endsWith('.css') || assetFilename.endsWith('.js');
  //   }
  // },
  entry: ['babel-polyfill', "/src/index.js"],
  target: "web",
  mode: "development",
  devtool: "source-map",
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
    }),
    new CleanWebpackPlugin(),
    new VueLoaderPlugin()
  ],
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  devServer: {
    hot: true,
    compress: true,
    port: 9000,
    compress: true,
    proxy: {
      "/wuwei": {
        target: "http://127.0.0.1:4444/name",
        changeOrigin: true,
        pathRewrite: {
          "^/wuwei": ""
        },
      },
      "/ss": {
        target: "https://api.apiopen.top/videoCategoryDetails",
        // changeOrigin: true,
        pathRewrite: {
          "^/ss": ""
        },
      }
    }
  },
};
