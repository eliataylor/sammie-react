var env = !process.env.NODE_ENV ? 'dev' : process.env.NODE_ENV;
var base = require('./webpack.common.js');
var extend = require('./webpack.' + (env).trim() + '.js');

let config = Object.assign({}, base, extend);
module.exports = config;
