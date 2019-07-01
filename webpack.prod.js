const merge = require('webpack-merge')
const common = require('./webpack.config.js')

module.exports = merge(common, {
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
    }  
  }
})
