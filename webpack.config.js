const path = require('path');

module.exports = {
  devtool: 'cheap-eval-source-map',
  entry: './client/index.jsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    extensions: ['.js', '.jsx', '.json'],
  },
  devServer: {
    publicPath: '/dist/',
    contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'dist')],
  },
  module: {
    rules: [
      { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
    ],
  },
};
