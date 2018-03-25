const webpack = require('webpack');

const config = {
    entry: __dirname + '/js/index.jsx',
    output: {
        path: __dirname + '/dist',
        filename: 'bundel.js',
    },
    resolve: {
        extension: ['.js', '.jsx', '.css']
    }
};
module.exports = config;
