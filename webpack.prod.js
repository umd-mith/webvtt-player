const merge = require('webpack-merge')
const common = require('./webpack.config.js')
const ExtractTextPlugin = require("extract-text-webpack-plugin")

const extractCSS = new ExtractTextPlugin('webvtt-player.css')

module.exports = merge(common, {
  module: {
    rules: [
      {
        test: /.css$/,
        use: extractCSS.extract([
          'css-loader',
          'postcss-loader'
        ])          
      }
    ]
  },
  plugins: [
    extractCSS
  ],
  externals: {
    react: {          
      commonjs: "react",          
      commonjs2: "react",          
      amd: "React",          
      root: "React"      
    },      
    "react-dom": {          
      commonjs: "react-dom",          
      commonjs2: "react-dom",          
      amd: "ReactDOM",          
      root: "ReactDOM"      
    },
    "react-media-player": {
      commonjs: "react-media-player",
      commonjs2: "react-media-player",
      amd: "ReactMediaPlayer",
      root: "ReactMediaPlayer"
    }
  }
})
