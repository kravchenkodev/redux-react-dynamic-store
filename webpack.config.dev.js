var path = require('path');
var webpack = require('webpack');

module.exports = {
    devtool: 'source-map',
    entry: './src/index.js',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'index.js',
        publicPath: '/',
        libraryTarget: 'umd'
    },
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
            },
            {
                test: /\.js$/,
                loader: 'babel',
                include: path.join(__dirname, 'src'),
            },
        ]
    }
};
