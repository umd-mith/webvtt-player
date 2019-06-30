const merge = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
  externals: {
    'react': 'react',
    'react-dom': 'ReactDOM'
  }
})
