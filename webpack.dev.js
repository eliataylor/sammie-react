const path = require('path');

module.exports = {
    devtool: 'cheap-module-source-map',
    devServer: {
        port: 8888,
        host: 'localhost',
        quiet : false,
        hot : true,
        historyApiFallback: true,
        contentBase: [path.join(__dirname, 'public'), path.join(__dirname, 'src')],
        noInfo: false,
        stats: 'minimal',
        publicPath: 'http://localhost:8888/'
    }
};
