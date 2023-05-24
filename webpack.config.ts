const path = require('path')
const webpack = require('webpack')

module.exports = {
  // Other webpack configuration options

  resolve: {
    fallback: {
      fs: false, // Exclude fs module
      path: require.resolve('path-browserify'), // Use path-browserify polyfill
      os: require.resolve('os-browserify/browser'), // Use os-browserify polyfill
    },
  },

  // Rest of your webpack configuration

  plugins: [
    // Provide polyfills for the required modules
    new webpack.ProvidePlugin({
      process: 'process/browser',
    }),
  ],
}
