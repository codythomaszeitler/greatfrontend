'use strict';


const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /.js$/,
                exclude: /node_modules/,
                use  : {
                    loader : 'babel-loader',
                    options : {
                        presets : ["@babel/preset-env", ["@babel/preset-react", {runtime : 'automatic'}]]
                    }
                }
            }
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin()
    ], 
    mode : 'development'
};
