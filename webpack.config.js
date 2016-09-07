const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
  devtool: 'source-map',
  entry: [
    './src/index.js', // 入口文件
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
  ],
  output: {
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/build/',
    path: './build',
  },
  plugins: [
    new HtmlWebpackPlugin(),
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: [/src/],
      }, {
        test: /\.css$/,
        loader: 'style!css',
      },
      {
        test: /\.less$/,
        loader: 'style!css!postcss!less',
      },
    ],
    preLoaders: [
      {
        test: /\.js$/,
        loaders: ['eslint-loader'],
        include: [path.resolve('src')],
      },
    ],
  },
  resolve: {
    extensions: ['', '.js', '.jsx'], //
  },
  stats: { colors: true },
  devServer: {
    hot: true,
    historyApiFallback: true,
    stats: {
      chunkModules: false,
      colors: true,
    },
  },
};
