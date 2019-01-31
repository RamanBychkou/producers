const path = require('path');

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundler.js'
  },
  devServer : {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
}