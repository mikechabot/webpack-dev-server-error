var path = require("path");
var HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: [
      path.resolve(__dirname, 'app/App.jsx')
    ],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js"
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, 'app/index.html'),
        inject: 'body'
      })
    ],
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel',
                query: {
                    presets: ['react', 'es2015']
                },
                include: __dirname
            }
        ]

    }
};