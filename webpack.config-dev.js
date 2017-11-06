var path = require('path')
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')

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

module.exports.plugins.push(
  new HtmlWebpackPlugin({
    title: 'Raw time input',
    template: path.join(__dirname, 'index.tmpl.html'),
    inject: 'body',
  })
)

module.exports.plugins.push(
  new webpack.optimize.CommonsChunkPlugin({
    names: ['vendor'],
  })
)

module.exports.plugins.push(new webpack.NamedModulesPlugin())

module.exports.plugins.push(new webpack.HotModuleReplacementPlugin())
