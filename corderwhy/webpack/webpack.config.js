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
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader","css-loader"],
      },
    ],
  },
};
