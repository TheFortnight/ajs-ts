/* eslint-disable linebreak-style */
const path = require('path');

module.exports = {
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'app.js',
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        exclude: /node_modules/,
        use: {
        loader: 'ts-loader',
        }
        }
    ],
  },
  resolve: {
    extensions: [ '.tsx', '.ts', '.js' ],
    },
};
