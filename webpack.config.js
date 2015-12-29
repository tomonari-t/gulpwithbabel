/**
* webpack config
* For babel
*/

import webpack from 'webpack';

const config = {
  // entry: { 複数のファイルのする必要がある場合
  //   main: __dirname + '/src/js/main.js'
  // },
  output: {
    path: __dirname + '/dist/js/',
    filename: 'main.js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  }
  // plugins: [
  //   new webpack.optimize.DedupePlugin(),
  //   new webpack.optimize.CommonsChunkPlugin({
  //     name: 'vendor',
  //     filename: 'vendor.js',
  //     minChunks: Infinity
  //   }),
  //   new webpack.optimize.AggressiveMergingPlugin(),
  //   new webpack.ProvidePlugin({
  //     $: "jquery",
  //     jQuery: "jquery",
  //     "window.jQuery": "jquery"
  //   })
  // ]
};

export default config;
