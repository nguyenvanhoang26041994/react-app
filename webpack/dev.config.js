const webpack = require('webpack');
const path = require('path');

module.exports = require('./base.config')({
  mode: 'development',
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), 'src/index.js'),
  ],
  output: {
    filename: '[name].js',
    chunkFilename: '[name].chunk.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devtool: 'eval-source-map',
});
