var path = require('path');
var webpack = require('webpack');
var merge = require('webpack-merge');
var common = require('./webpack.common.js');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = merge(common, {
    mode:'production',
    optimization: {
      minimize: true
    },
    /*
    module: {
        rules: [
          {
              test: /\.(png|jp(e*)g|svg)$/,
              use: [{
                  loader: 'url-loader',
                  options: {
                      limit: 8000, // Convert images < 8kb to base64 strings
                      name: 'images/[hash]-[name].[ext]'
                  }
              }]
          }

      ]
    },
    */
    plugins: [
/*        new webpack.LoaderOptionsPlugin({
            minimize: true,
            debug: false
        }),
        new webpack.optimize.OccurrenceOrderPlugin(),
        */
        new webpack.EnvironmentPlugin({
            NODE_ENV: 'prod'
        })
        /* ,
        new MiniCssExtractPlugin({
            filename: "[name].css",
            chunkFilename: "[id].css"
        }) */
    ]
});
