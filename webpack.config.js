var path = require('path')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var webpack = require('webpack')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var autoprefixer = require('autoprefixer')

module.exports = {
  entry: {
    app: path.join(__dirname, 'src', 'index.js'),
    vendor: ['babel-polyfill', 'react', 'react-dom'],
  },

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].js',
  },

  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: 'babel-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.scss$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              options: { importLoaders: 1 },
            },
            {
              loader: 'postcss-loader',
              options: {
                plugins: [autoprefixer({ browsers: ['last 2 versions', 'last 3 iOS versions'] })],
              },
            },
            {
              loader: 'sass-loader',
            },
          ],
        }),
      },
    ],
  },
  plugins: [
    new ExtractTextPlugin({
      filename: 'css/[name].css',
      disable: process.env.NODE_ENV === 'development',
    }),
  ],
}
