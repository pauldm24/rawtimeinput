var path = require('path')
var webpack = require('webpack')

module.exports = require('./webpack.config')

module.exports.devtool = 'eval-source-map'

module.exports.devServer = {
  contentBase: path.join(__dirname, 'public'),
  port: 8181,
  compress: true,
  stats: 'errors-only',
  hot: true,
  historyApiFallback: {
    index: 'index.html',
  },
}

module.exports.plugins.push(new webpack.HotModuleReplacementPlugin())
