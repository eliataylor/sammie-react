var publicPath = 'public';

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 8888,
        host: 'localhost',
        hot : true,
        historyApiFallback: true,
        contentBase: publicPath,
        noInfo: false,
        stats: 'minimal',
        publicPath: publicPath
    }
};
