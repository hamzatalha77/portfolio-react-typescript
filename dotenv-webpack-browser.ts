const Dotenv = require('dotenv-webpack')
const DefinePlugin = require('webpack').DefinePlugin

class DotenvWebpackBrowser extends Dotenv {
  apply(compiler) {
    super.apply(compiler)

    new DefinePlugin({
      'process.env': JSON.stringify(process.env),
    }).apply(compiler)
  }
}

module.exports = DotenvWebpackBrowser
