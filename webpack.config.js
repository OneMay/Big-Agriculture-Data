var path = require('path')
var webpack = require('webpack')

module.exports = {
    entry: path.join(__dirname, 'src/client/index.js'),
    output: {
        path: path.join(__dirname, 'src/server/public/javascripts/'),
        publicPath: '/javascripts/',
        filename: 'build.js'
    },
    resolve: {
        extensions: ['', '.js', '.vue']
    },
    resolveLoader: {
        root: path.join(__dirname, 'node_modules')
    },
    module: {
        loaders: [{
                test: /\.js$/,
                loader: 'babel',
                exclude: path.join(__dirname, "node_modules"),
                query: { presets: ['es2015'] }
            },
            {
                test: /\.vue$/,
                loader: 'vue'
            },
            {
                test: /\.json$/,
                loader: 'json'
            },
            {
                test: /\.css$/,
                loader: "style!css?modules&localIdentName=[local]",
                exclude: '/src/static/'
            },
            {
                test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/,
                loader: 'url-loader',
                query: {
                    limit: 50000,
                    name: '[name].[ext]?[hash:7]'
                }
            }
        ]
    },
    devtool: 'eval-source-map',
    plugins: [
        new webpack.HotModuleReplacementPlugin()
    ]
}