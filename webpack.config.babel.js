import webpack from 'webpack';
import DotenvPlugin from 'dotenv-webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import BrowserSyncPlugin from 'browser-sync-webpack-plugin';
import path from 'path';
import { version } from './package.json';

const DotenvPluginConfig = new DotenvPlugin({
  safe: false,
  path: '.env'
});

const HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/src/index.html',
  filename: 'index.html',
  inject: 'body'
});

const BrowserSyncPluginConfig = new BrowserSyncPlugin({
  host: 'localhost',
  port: 3000,
  proxy: 'http://localhost:8080/'
}, {
  reload: false
})

const WebpackProviderConfig = new webpack.ProvidePlugin({
  '$': "jquery",
  'window.jQuery': "jquery",
  'jQuery': 'jquery',
  'window.$': 'jquery',
  'React': 'react'
});



let plugins = [
  DotenvPluginConfig,
  HTMLWebpackPluginConfig,
  BrowserSyncPluginConfig,
  WebpackProviderConfig
];

let loaders = [
  { test: /.jsx?$/, loader: 'babel-loader', exclude: /node_modules/ },
  { test: /\.css$/, loader: 'style-loader!css-loader' },
  { test: /\.png$/, loader: "url-loader?limit=100000" },
  { test: /\.jpg$/, loader: "file-loader" },
  { test: /\.sass$/, loaders: ['style', 'css', 'sass'] },
  { test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff' },
  { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream' },
  { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file' },
  { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml' }
]
let alias = {
  jquery: __dirname + '/node_modules/jquery/dist/jquery.min.js',
  'jquery-ui': __dirname + '/node_modules/jquery-ui/ui/core.js'
}
let config = {
  entry: './src/index.react.js',
  output: { path: __dirname + '/docs/dist', filename: 'bundle.js' },
  devServer: {
    historyApiFallback: true,
    inline: true
  },
  resolve: {
    root: [
      path.resolve('./src'),
      path.resolve('./node_modules')
    ]
  },
  alias: alias,
  module: {
    loaders: loaders
  },
  plugins: plugins
}





export default config;
