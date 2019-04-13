const path = require('path');
const HtmlPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const glob = require('glob');
const PurifyCSSPlugin = require("purifycss-webpack");
const webpack = require("webpack");
const entry = require('./entry.js');
var CopyWebpackPlugin = require('copy-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: entry,
    output: {
        path: path.resolve(__dirname,'dist'),
        filename: '[name].js'
    },
    module:{
        rules:[
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: [{
                        loader: "css-loader",
                        options: {importLoaders: 1}
                    }, "postcss-loader"]
                })
            },
            {
                test: /\.(jpg|png|gif)$/,
                use: [{
                    loader: "url-loader",
                    options:{
                        limit: 500,
                        outputPath: "imgs/"
                    }
                }]
            },
            {
                test: /\.(htm|html)$/i,
                loader: 'html-withimg-loader'
            },
            {
                test: /\.scss$/,
                // use: ['style-loader','css-loader','sass-loader']
                use: ExtractTextPlugin.extract({
                    use: ['css-loader','sass-loader'],
                    fallback: 'style-loader',
                })
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'babel-loader',
                    options: {
                        presets: ["@babel/preset-env"]
                    }
                }],
                exclude: /node_modules/
            }
            
        ]
    },
    plugins:[
        new HtmlPlugin({
            template: './src/index.html',
            minify:{
                removeAttributeQuotes: true
            },
            hash: true,
        }),
        new ExtractTextPlugin("index.css"),
        new PurifyCSSPlugin({
            paths: glob.sync(path.join(__dirname, 'src/*.html')),
        }),
        new webpack.BannerPlugin('翻版必究'),
        new webpack.ProvidePlugin({
            $: "jquery"
        }),
        new CopyWebpackPlugin([{
            from: __dirname + '/src/public',
            to: './public'
        }])
    ],
    devServer:{
        contentBase: path.resolve(__dirname,'dist'),
        host: 'localhost',
        port: 8081
    },
    

}