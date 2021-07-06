//
let path = require("path");
console.log(path.resolve(__filename));
module.exports = {
  entry: "/src/index.js",
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
      }
    ],


  }
};
