const path = require("path")

module.exports = {
  entry: {
    'webvtt-player': path.resolve(__dirname, './src/index.js')
  },
  output: {
    filename: `[name].js`,
    path: path.resolve(__dirname, 'dist'),
    library: 'webvttPlayer',
    libraryTarget: 'umd',
    umdNamedDefine: true,
    globalObject: 'this'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ["babel-loader", "eslint-loader"],
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    modules: ['node_modules'],
    extensions: ['.js']
  }
}
