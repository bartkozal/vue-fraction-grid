module.exports = {
  entry: 'docs/index.js',
  port: 8080,
  html: {
    template: 'docs/index.html'
  },
  webpack: {
    output: {
      publicPath: './'
    }
  },
  postcss: [
    require('postcss-import')(),
    require('postcss-color-function')(),
    require('postcss-cssnext')()
  ]
}
