const path = require('path');
const webpack = require('webpack');
const targetDir = 'public';

module.exports = {
    entry: path.join(__dirname, 'src/es6', 'index'),
    output: {
        path: path.join(__dirname, targetDir),
        publicPath : '/',
        filename: 'bundle.js'
    },
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
                    loader: "style-loader" // creates style nodes from JS strings
                  },
                  {
                    loader: "css-loader" // translates CSS into CommonJS
                  },
                  {
                    loader: "sass-loader", // compiles Sass to CSS
                    options: {
                        includePaths: ["src/scss"]
                    }
                  }
                ]
              },
              {
                 test: /\.(png|svg|jpg|gif)$/,
                 use: [
                   'file-loader'
                 ]
               }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.sass', '.scss']
    },
    plugins: [
//        new webpack.EnvironmentPlugin({
//            NODE_ENV: 'dev'
//        }),
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
    ]
};
