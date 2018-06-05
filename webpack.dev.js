var path = require('path');
var merge = require('webpack-merge');
var common = require('./webpack.common.js');
var publicPath = './build';

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
        new ExtractTextPlugin({
            filename: 'css/kpstyles.css',
            disable: false,
            allChunks: false
        })
    ]
});
