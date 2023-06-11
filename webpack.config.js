const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
  target: 'node',
  entry: './dev-server.js', // Entry point of your Node.js application
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js', // Output bundled file name
  },
  externals: [nodeExternals()], // Exclude node_modules from the bundle
};
