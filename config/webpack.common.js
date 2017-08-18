var helpers = require('./helpers');
var webpack = require('webpack');
var CopyWebpackPlugin = require('copy-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.browser.ts',
        'vendor': './src/vendor.browser.ts',
        'app': './src/main.browser.ts'
    },

    resolve: {
        extensions: ['*', '.ts', '.js']
    },

    module: {
        loaders: [{
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                exclude: helpers.root('src', 'index.html'),
                loader: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                exclude: helpers.root('src', 'static'),
                loader: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            {
                test: /^.*/,
                include: helpers.root('src', 'static'),
                loader: "file-loader?name=static/[path][name].[ext]&context=./src/static"
            },
            {
                test: /\.css$/,
                exclude: helpers.root('src', 'app'),
                loader: ExtractTextPlugin.extract('style', 'css?sourceMap')
            },
            {
                test: /\.css$/,
                include: helpers.root('src', 'app'),
                loader: 'raw-loader'
            }
        ]
    },

    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        /**
         * See: https://github.com/angular/angular/issues/11580
         */
        new webpack.ContextReplacementPlugin(
            /angular(\\|\/)core(\\|\/)@angular/,
            helpers.root('src', 'app'), {}
        ),
        new CopyWebpackPlugin([{
            from: 'src/static',
            to: 'static'
        }])
    ]
};