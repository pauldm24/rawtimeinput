var webpack = require('webpack')
var path = require('path')

module.exports = require('./webpack.config')

module.exports.entry = {
  index: ['./index.js'],
}

module.exports.output = {
  path: path.join(__dirname, 'build'),
  filename: '[name].js',
  library: 'RawTimeInput',
  libraryTarget: 'umd',
}

module.exports.externals = {
  react: {
    root: 'React',
    commonjs2: 'react',
    commonjs: 'react',
    amd: 'react',
  },
}

module.exports.plugins.push(
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify('production'),
    },
  })
)

module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin())
