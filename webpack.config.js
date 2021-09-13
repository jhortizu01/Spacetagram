const path = require('path')
const NodePolyfillPlugin = require("node-polyfill-webpack-plugin")
const sass = require('sass')

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
   mode: "none",
   module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          "style-loader",
          "css-loader",
          "sass-loader"
        ]
      },
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader", "sass-loader"],
    
      },
      {
        test: /\.(png|svg|jpg|gif|jpeg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[name].[ext]',
              outputPath: 'images/',
              publicPath: 'images/'
            }
          }
        ]
      }
    ]
  },

  plugins: [
    new NodePolyfillPlugin()
  ]

}