const path = require('path');
const webpack = require('webpack');
const targetDir = 'public';
const HtmlWebpackPlugin = require('html-webpack-plugin');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const devMode = process.env.NODE_ENV !== 'prod';
console.log('DevMode: ' + devMode);
module.exports = {
    entry: path.join(__dirname, 'src/es6', 'index'),
    output: {
        path: path.join(__dirname, targetDir),
        publicPath : '/',
        filename: 'bundle.js'
    },
    devtool: "source-map",
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: ['babel-loader']
            },
            {
                test: /\.scss$/,
                use: [
                  {
                    loader: devMode ? 'style-loader' : MiniCssExtractPlugin.loader,
                  },
                  {
                    loader: "css-loader", // translates CSS into CommonJS
                    options: {
                      importLoaders: 1,
                    }
                  },
                  {
                      loader: "postcss-loader",
                      options: {
                          autoprefixer: {
                              browsers: ["last 2 versions"]
                          },
                          plugins: () => [
                              require('autoprefixer')
                          ]
                      },
                  },
                  {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                        includePath: ['src/scss'],
                        sourceMap : true
                    }
                  }
                ]
              },
              {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   {
                      loader: 'file-loader',
                      options: {
                         name(file) {
                           if (process.env.NODE_ENV === 'dev') {
                             return '[path][name].[ext]';
                           }

                           return '[hash].[ext]';
                         }
                       }
                   }
                 ]
               },
               {
              test: /\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,
                  use: [{
                      loader: 'file-loader',
                      options: {
                          name: '[name].[ext]',
                          outputPath: 'fonts/'
                      }
                  }]
              }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass', '.scss']
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new HtmlWebpackPlugin({
          title: 'Sammie Amna Khalil Taylor',
          inject: true,
          hash: true,
          template: './src/index.html',
          filename: 'index.html',
          favicon: './src/images/logo.png'
        })
    ]
};
