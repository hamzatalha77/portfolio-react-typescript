const path = require('path')
const webpack = require('webpack')

module.exports = {
  // Other webpack configuration options

  resolve: {
    fallback: {
      fs: false,
      path: require.resolve('path-browserify'),
      os: require.resolve('os-browserify/browser'),
    },
  },

  plugins: [
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
  node: {
    fs: 'empty',
  },
}
