const webpack = require('webpack');
const path = require('path');
const buildPath = path.resolve(__dirname, 'dist');
const nodeModulesPath = path.resolve(__dirname, 'node_modules');
const TransferWebpackPlugin = require('transfer-webpack-plugin');

const config = {
  context: __dirname + "/src",
  entry: './app.js',
  devtool: 'source-map',
  output: {
    path: buildPath,
    filename: 'app.js',
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
      },
    }),
    new webpack.NoErrorsPlugin(),
    new TransferWebpackPlugin([
      {from: 'images', to: 'images'},
      {from: 'css', to: 'css'},
      {from: 'fonts', to: 'fonts'},
    ], path.resolve(__dirname, 'src')),
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: [nodeModulesPath],
      },
      {
        test: /\.html$/,
        loader: "file-loader?name=[name].[ext]"
      }
    ],
  },
};

module.exports = config;
