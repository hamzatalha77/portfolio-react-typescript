import path from 'path'
import nodeExternals from 'webpack-node-externals'

export default {
  // ...
  externalsPresets: { node: true }, // Exclude node_modules
  externals: [nodeExternals()], // Exclude Node.js core modules
}
