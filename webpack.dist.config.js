var path = require('path')

module.exports = {
  entry: './vue-fraction-grid.js',
  output: {
    path: path.join(__dirname, './dist'),
    filename: 'vue-fraction-grid.js',
    library: 'vueFractionGrid',
    libraryTarget: 'umd'
  },
  resolve: {
    extensions: ['.vue', '.js']
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        use: 'vue-loader'
      },
      {
        test: /\.js$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  }
}
