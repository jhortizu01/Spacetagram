const path = require('path')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const sass = require('sass')
const MiniCssExtractPlugin = require("mini-css-extract-plugin");


module.exports = {
  entry: './src/index.js',
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, 'dist')
  },
  devServer: {
    port: 8080,
    static: path.resolve(__dirname, 'dist')
  },
   mode: "development",
   module: {
    rules: [
      {
        test: /\.s?css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader", "sass-loader"]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        type: "asset"
      }
    ]
  },

  plugins: [
    new NodePolyfillPlugin(), 
    new MiniCssExtractPlugin()
  ]

}