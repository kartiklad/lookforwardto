var path = require('path');
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  entry: './src/index.js',
  output: {
    path: __dirname + '/dist',
    filename: '[name].js'
  },
  module: {
    loaders: [
      {
        test: /.js?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-2']
        }
      },
      {
        test: /.json?$/,
        loader: 'json-loader',
        exclude: /node_modules/
      },
      {
        test: /.css?$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css")
  ]
}
