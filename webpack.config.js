const fs = require('fs');
const path = require('path');
const webpack = require('webpack');
const apps = require('./apps.config')
const {VueLoaderPlugin} = require('vue-loader')
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')

const resolveApps = () => {
  const entry = {};
  // entry: path.resolve(__dirname, './apps/index.js'),
  const apps_config = Object.keys(apps.apps)
  apps_config.forEach(el => {
    entry[el] = path.resolve(__dirname, `./apps/${el}/${apps.apps[el].entry}`)
  })

  fs.readdirSync('./apps').forEach(el => {
    if (apps_config.indexOf(el) < 0) {
      entry[el] = path.resolve(__dirname, `./apps/${el}/index.js`)
    }
  })

  return entry;
}

module.exports = {
  target: 'web',
  mode: "production",
  entry: resolveApps(),
  module: {
    rules: [
      {
        test: /\.(js)$/,
        exclude: /node_modules/,
        use: ['babel-loader']
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {}
      },
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      }
    ]
  },
  resolve: {
    extensions: ['*', '.js'],
    alias: {
      '@': path.join(__dirname, 'apps')
    }
  },
  output: {
    path: path.resolve(__dirname, apps.output),
    filename: '[name]/index.js',
  },
  devServer: {
    // contentBase: path.resolve(__dirname, './dist')
    static: './dist',
    hot: true,
  },
  plugins: [
    new VueLoaderPlugin(),
    new CopyWebpackPlugin({patterns: Object.keys(resolveApps()).map(function (x) {return {from: 'apps/' + x + '/app', to: x + '/app'}})}),
    new CopyWebpackPlugin({patterns: Object.keys(resolveApps()).map(function (x) {return {from: 'apps/' + x + '/lang', to: x + '/lang'}})}),
    ...Object.keys(resolveApps()).map(function (x) {
      return new HtmlWebpackPlugin({
        filename: x+'/index.html',
        template: 'apps/'+x+'/index.html',
        inject: true
      })
    })
  ]
};
