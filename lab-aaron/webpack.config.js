'use strict';

const HtmlPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: `${__dirname}/src/js/main.js`,
  plugins: [new HtmlPlugin({
    filename: '../index.html'
  })
],
  module: {
    rules: [
      {
        test: /\.js$/,//No $ because store.js is not a .jsx file (it has no react code in it)
        exclude: /node_modules/,
        loader: 'babel-loader'
      },
      {
        test: /\.css$/,
        loader: ['style-loader', 'css-loader']
      }
    ]
  }
};