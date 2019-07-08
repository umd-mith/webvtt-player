const path = require('path')
const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')

const exampleDir = path.resolve(__dirname, 'example')
const publicDir = path.resolve(__dirname, 'public')

module.exports = merge(common, {
  entry: {
    'webvtt-player': path.resolve(__dirname, './example/index')
  },
  output: {
    path: publicDir
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(exampleDir, 'index.html'),
      filename: path.resolve(publicDir, 'index.html'),
      inject: 'body',
    }),
    new CopyWebpackPlugin([
      {
        from: path.resolve(exampleDir, 'data'),
        to: 'data'
      }
    ])
  ],
  module: {
    rules: [
      {
        test: /.css$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: {
                localIdentName: '[local]'
              }
            }
          }
        ]
      }
    ]
  }
})
