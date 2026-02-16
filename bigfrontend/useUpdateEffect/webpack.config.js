'use strict';

const path = require('path');

module.exports = {
    entry: './index.jsx',
    context: path.resolve(__dirname),
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.m?jsx$/,
                exclude : /node_modules/,
                use : {
                    loader : "babel-loader",
                    options : {
                        presets : ["@babel/preset-env", "@babel/preset-react"]
                    }
                }
            }
        ]
    },
    devServer : {
        static : path.resolve(__dirname, ""),
        open : true,
        port: 9000
    },
    resolve: {
    },
    devtool: 'source-map',
    plugins: [
    ]
};
