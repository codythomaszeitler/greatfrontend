'use strict';

const CopyPlugin = require('copy-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
    entry: './index.js',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js'
    },
    module: {
        rules: [
        ]
    },
    resolve: {
    },
    devtool: 'source-map',
    devServer: {
        static: path.resolve(__dirname, "dist"),
        open: true,
        port: 9000
    },
    plugins: [
        new CopyPlugin({
            patterns: [{
                from: path.resolve(__dirname, "index.css"),
                to: path.resolve(__dirname, "dist/index.css")
            }]
        }),
        new HtmlWebpackPlugin({
            title: "My Webpack App",
            template: "./index.html",
        })
    ],
    mode: 'development'
};
