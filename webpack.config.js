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
  resolve: {  //これは、ファイルの識別子の省略できるように
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [  //読み込むファイルの種類によってloaderをしてい。ただいまES6+react
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
