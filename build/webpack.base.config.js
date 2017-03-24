var webpack = require('webpack');
var path = require('path');
var utils = require('./utils');

function resolve(relPath) {
    return path.resolve(__dirname, relPath); // resolve 方法用于将相对路径转为绝对路径。
}
module.exports = {
    entry: { app: resolve('../src/main.js') },
    output: {
        filename: 'js/[name].js'
    },
    resolve: {
        extensions: ['.js', '.vue', '.css', '.scss'],
        alias: {
            vue: 'vue/dist/vue.js'
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                use: "babel-loader",
                include: [resolve('../src')] // include属性指定处理哪个目录下的文件。
            },
            {
                test: /\.vue$/,
                use: {
                    loader: "vue-loader",
                    options: utils.vueLoaderOptions()
                }
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                use: {
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'images/[name].[hash:7].[ext]'
                    }
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                use: [{
                    loader: "url-loader",
                    options: {
                        limit: 10000,
                        name: 'fonts/[name].[hash:7].[ext]'
                    }
                }]
            }
        ]
    }
}