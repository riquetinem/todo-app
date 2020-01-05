const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/index.jsx',
    output: {
        path: __dirname + '/public',
        filename: './app.js'
    },

    devServer: {
        port: 8080,
        contentBase: './public'
    },

    resolve: {
        extensions: ['', '.js', '.jsx'],
        alias: {
            modules: __dirname + '/node_modules'
        }
    },

    plugins: [
        new ExtractTextPlugin('app.css')
    ],

    module: {
        loaders: [{
            test: /.[x]?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react'],
                plugins: ['transform-object-rest-spread']
            }
        }, {
            test: /\.css$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
        }, {
            test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg)(\?.*$|$)/,
            loader: 'file'
        }]
    }
}

// test: /.[x]?$/ = RECONHECE TANTO O .JS QUANTO O .JSX

// assim tava dando erro: test: /\.woof|.woof2|.ttf|.eot|.svg*.*$/,