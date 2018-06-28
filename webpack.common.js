const path = require('path');
const webpack = require('webpack');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const targetDir = 'public/build';

module.exports = {
    entry: {
        polyfills: 'babel-polyfill',
        app: path.join(__dirname, 'src/es6', 'index')
    },
    output: {
        path: path.join(__dirname, targetDir, 'js'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
          {
                enforce: 'pre',
                test: /\.jsx?$/,
                loader: 'eslint-loader',
                exclude: /node_modules|scss/
            },
            {
                enforce: 'pre',
                test: /\.html$/,
                loader: 'htmllint-loader',
                exclude: /node_modules/
            },
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: [
                            'es2015',
                            'stage-0'
                        ],
                        plugins: [
                            'transform-decorators-legacy',
                            'transform-class-properties',
                            'transform-es2015-classes'
                        ]
                    }
                }]
            }, {
                test: /\.html$/,
                loader: 'html-loader'
            },
            {
              test: /\.css$/,
              include: path.join(__dirname, '/src/components'),
              loader: 'raw-loader'
            },
            {
              test: /\.css$/,
              exclude: path.join(__dirname, '../public/css'),
              use: ExtractTextPlugin.extract({
                use: 'raw-loader'
              })
            },
            {
                test: /\.(scss|sass)$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {
                            sourceMap: true
                        }
                    }, {
                        loader: 'resolve-url-loader'
                    }, {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }]
                })
            },
            {
              test: /\.(png|jpe?g|gif|ico)$/,
              loader: 'file-loader?name=images/[name].[ext]'
            },
            {
              test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
              use: [{
                loader: 'file-loader',
                options: {
                  name: '[name].[ext]',
                  outputPath: path.join(__dirname, 'build/fonts')
                }
              }]
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass', '.scss']
    },
    target: 'web',
    plugins: [
/*        new HtmlWebPackPlugin({
          template: "./src/index.html",
          filename: "./index.html"
        }),
        */
        new ExtractTextPlugin(
          '[name].css'
          // allChunks: true
        ),
        new CopyWebpackPlugin([
          {from:'./src/fonts/',to:'fonts'},
          {from:'./src/images/',to:'images'}
        ]),
        new webpack.LoaderOptionsPlugin({
            test: /\.jsx?/,
            options: {
                eslint: {
                    failOnWarning: false,
                    failOnError: true
                },
                sassLoader: {
                    includePaths: ['scss']
                },
            }
        }),
//        new webpack.EnvironmentPlugin({
//            NODE_ENV: 'dev'
//        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin([targetDir])
    ]
};
