const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const PreloadWebpackPlugin = require('preload-webpack-plugin');
const ScriptExtHtmlWebpackPlugin = require('script-ext-html-webpack-plugin');
const FaviconsWebpackPlugin = require('favicons-webpack-plugin')

function as(entry) {
  if (/\.css$/.test(entry)) return 'style';
  if (/\.woff$/.test(entry)) return 'font';
  if (/\.png$/.test(entry)) return 'image';
  return 'script';
}

module.exports = (options) => ({
  mode: options.mode,
  entry: options.entry,
  output: options.output,
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: options.babelQuery,
        },
      },
      {
        test: /\.scss$/i,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      {
        test: /\.html$/,
        use: 'html-loader',
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      },
    },
  },
  plugins: [
    new webpack.EnvironmentPlugin({
      NODE_ENV: process.env.NODE_ENV,
    }),
    new HtmlWebpackPlugin({
      inject: true,
      template: 'src/index.html',
    }),
    new FaviconsWebpackPlugin(path.resolve('src/assets/img/icon-512x512.png')),
    new PreloadWebpackPlugin({
      as,
      rel: 'preload',
      include: ['vendors', 'main'],
    }),
    new PreloadWebpackPlugin({
      as,
      rel: 'prefetch',
    }),
    new ScriptExtHtmlWebpackPlugin({
      defaultAttribute: 'defer',
    }),
    ...options.plugins,
  ],
  devtool: options.devtool,
  target: 'web',
  performance: options.performance || {},
});