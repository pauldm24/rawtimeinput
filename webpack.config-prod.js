var webpack = require('webpack')

module.exports = require('./webpack.config')

module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  })
)

module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin())
