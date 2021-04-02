const path = require('path');
const webpack = require('webpack');
const Dotenv = require('dotenv-webpack');

module.exports = {
  mode: 'development',
  externals: {
    "react": "React",
    "react-dom": "ReactDOM"
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '..', './.env.development'),
    }),
  ],
  devServer: {
    contentBase: path.resolve(__dirname, '..', './assets'),
    watchContentBase: true,
    hot: true,
    port: 8081,
  },
  devtool: 'eval-source-map',
};
