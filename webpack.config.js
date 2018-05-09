const path = require('path');
const  webpack = require('webpack');
var HtmlWebpackHarddiskPlugin = require('html-webpack-harddisk-plugin');

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: './client/index.js',
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: [/node_modules/],
        use: [{
          loader: 'babel-loader',
          options: {
            presets: ['es2015', 'react'],
            plugins: ['transform-object-rest-spread', 'async-to-promises']
          }
        }],
      }
      //loaders for other file types can go here
    ]
  },
  plugins: [
    new HtmlWebpackHarddiskPlugin({
      outputPath: path.resolve(__dirname, 'dist')
    })
  ],
  devServer: {
    // https: true,
    // inline: true,
    // port: 443, // default


    historyApiFallback: {
      index: 'index.html',
    }, // cannot GET *url* after press f5
    hot: true,
    // enable HMR on the server
    host: "localhost", // default
    port: 8099, // default
    contentBase: path.join(__dirname, 'dist'), // отдает по умолчанию(можн указ люб папку), если нет бандлов
    // proxy: [{
    //     path: '*',
    //     target: 'http://localhost:9000',
    // }]
  },
  devtool: "source-map"  //inProduction ? "source-map" : "cheap-module-inline-source-map",

}