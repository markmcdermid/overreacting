var path = require('path');
var merge = require('webpack-merge');

const PATHS = {
  app: path.join(__dirname, '../src'),
  build: path.join(__dirname, '../dist')
};

const development = require('./dev.config.js');
const production = require('./prod.config.js');

const common = {
  entry: [
    PATHS.app
  ],
  output: {
    path: PATHS.build,
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.json', '.scss'],
    modulesDirectories: ['node_modules', PATHS.app],
  },
  module: {
    loaders: [
      { test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
      { test: /\.scss$/, loader: 'style!css?localIdentName=[path][name]--[local]!sass' }
    ]
  }
};

const TARGET = process.env.npm_lifecycle_event;
if (TARGET === 'start' || !TARGET) {
  module.exports = merge(development, common);
}

if (TARGET === 'build' || !TARGET) {
  module.exports = merge(production, common);
}
