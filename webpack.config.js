const path = require('path')
const HTMLWebpackPlugin = require('html-webpack-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: "build.js",
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: path.join(__dirname, 'src', 'index.html')
        }),
        new CleanWebpackPlugin()
    ],
    devServer: {
        publicPath: path.join(__dirname, 'public'),
        port: 3000
    }
}