'use strict'

const path = require('path')
const { CheckerPlugin } = require('awesome-typescript-loader')


module.exports = {
    entry: {
        lodash: './src/lodash.ts',
        ramda: './src/ramda.ts',
    },
    target: 'node',
    output: {
        libraryTarget: 'commonjs2',
        path: path.join(__dirname, '.webpack'),
        filename: 'src/[name].js',
    },
    module: {
        loaders: [
            { test: /\.ts$/, loader: 'awesome-typescript-loader' },
        ],
    },
    externals: ['aws-sdk'],
    resolve: {
        extensions: ['.ts', '.js'],
    },
    devtool: 'source-map',
    plugins: [
        new CheckerPlugin(),
    ],
}
