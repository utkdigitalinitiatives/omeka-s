const path = require('path');

module.exports = {
  entry: './src/index-usual.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  mode: 'production',
};
