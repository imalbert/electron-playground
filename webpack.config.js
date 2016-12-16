const webpack = require('webpack')

module.exports = {

  target: 'electron',

  entry: {
    app: ['webpack/hot/dev-server', './src/entry.js']
  },

  output: {
    path: './public/built',
    filename: 'bundle.js',
    publicPath: 'http://localhost:8080/built/'
  },

  devServer: {
    contentBase: './public',
    publicPath: 'http://localhost:8080/built/'
  },

  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['react', 'es2015']
        }
      },
      { test: /(\.css|\.scss)$/, loaders: ['style', 'css?sourceMap', 'sass?sourceMap'] }
    ]
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
}

