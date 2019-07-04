const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const HtmlWebpackPlugin = require("html-webpack-plugin");
const DashboardPlugin = require('webpack-dashboard/plugin');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    template: path.join(__dirname, "./example/index.html"),
    filename: "./index.html",
    inlineSource: '\.(js|css)',
})

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  entry: {
    "webvtt-player": path.resolve(__dirname, './example/index.js')
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, './example')
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './example'
  },
  module: {
    rules: [
      {
        test: /.css$/,
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
  },
  plugins: [
    htmlWebpackPlugin,
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  ],
  devServer: {
    host: '0.0.0.0',
    port: 3000,
    contentBase: './example/'
  },
  performance: {
    hints: false
  }
})