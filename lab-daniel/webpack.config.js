const HtmlPlugin = require('html-webpack-plugin')
const path = require('path');

module.exports = {
 mode: 'development',
 entry: `${__dirname}/src/main.js`,
 plugins: [new HtmlPlugin()],
 devServer: {
 contentBase: path.join(__dirname, 'dist'),
 compress: true,
 port: 8080
},
 module: {
   rules: [
     {
       test: /\.js$/,
       exclude: /node_modules/,
       loader: 'babel-loader',
     },
     {
       test: /\.scss$/,
       loader: ['style-loader', 'css-loader', 'sass-loader'],
     },
   ]
 }
}