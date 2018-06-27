var path = require('path');
var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var publicPath = './build';

var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CleanWebpackPlugin = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = merge(common, {
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 8888,
        host: 'localhost',
        historyApiFallback: true,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath
    },
    plugins: [
      new ExtractTextPlugin(
        './css/[name].css'
        // allChunks: true
      ),
/*      new ExtractTextPlugin({
          filename: 'css/kpstyles.css',
          disable: false,
          allChunks: false
      }),
      */
      new CopyWebpackPlugin([
        {from:'./fonts/',to:'fonts'}
      ]),
    ]
});
