const path = require('path'),
  webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

// https://codeburst.io/react-isomorphic-universal-app-w-nodejs-redux-react-router-v4-be80aa57dcaf

module.exports = {
  context: path.resolve(__dirname, './src'),
  entry: {
    app: ['babel-polyfill', './client/index.js'],
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, './dist/assets'),
    publicPath: '/assets',
  },
  resolve: {
    extensions: ['.js', '.jsx', '.css' /**'.less', '.scss', '.sass'*/], // какие файлы ищет в модулях
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
      },
      // {
      //   test: /\.css$/,
      //   // include: paths,
      //   include: path.resolve(__dirname, 'src'),
      //   use: [
      //     'style-loader',
      //     'css-loader'
      //   ]
      // }
      {
        test: /\.css$/,
        // loader: "style-loader!css-loader"
        loader: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: 'css-loader'
        })
      },
      {
        test: /\.less/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      }
      //loaders for other file types can go here
    ]
  },
  plugins: [
    new ExtractTextPlugin({
      allChunks: true,
      filename: 'bundle.css'
    })
  ],
  devServer: {
    // https: true,
    // inline: true,
    // port: 443, // default


    // historyApiFallback: {
    //   index: 'index.html',
    // }, // cannot GET *url* after press f5
    // hot: true,
    // enable HMR on the server
    host: "localhost", // default
    port:
      8099, // default
    contentBase:
      path.join(__dirname, 'dist'), // отдает по умолчанию(можн указ люб папку), если нет бандлов
    // proxy: [{
    //     path: '*',
    //     target: 'http://localhost:9000',
    // }]
  }
  ,
}