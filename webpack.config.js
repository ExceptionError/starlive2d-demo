const path = require('path');
const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: {
    'index': './src/index.ts',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/dist/'
  },
  resolve: {
    alias: {
      '@cubism': path.resolve(__dirname, '..', 'cubism', 'src'),
    },
    extensions: ['.ts', '.js'],
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        loader: 'ts-loader'
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(__dirname, './dist'),
    watchContentBase: true,
    inline: true,
    hot: true,
    port: 5000,
    compress: true,
    writeToDisk: true,
    open: true
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: false,
      template: path.resolve(__dirname, 'public', 'index.html'),
      filename: 'index.html',
    }),
    new CopyPlugin({
      patterns: [
        { from: './**/*', context: path.resolve(__dirname, '..', 'Core'), },
        { from: './**/*', context: path.resolve(__dirname, '..', 'Resources'), },
      ],
    }),
  ],
}
