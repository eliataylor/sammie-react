var merge = require('webpack-merge');

var env = !process.env.NODE_ENV ? 'dev' : process.env.NODE_ENV;
var base = require('./webpack.common.js');
var extend = require('./webpack.' + (env).trim() + '.js');

module.exports = merge(base, extend);