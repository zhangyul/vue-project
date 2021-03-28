'use strict'
const path = require('path');
const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const TerserWebpackPlugin = require('terser-webpack-plugin');
const { VueLoaderPlugin } = require('vue-loader');
const CopyWebpackPlugin = require("copy-webpack-plugin");
// const VueLoader=require('vue-loader');
// 打包分析插件
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    // 压缩相关配置
    optimization: {
        // minimizer: [new TerserWebpackPlugin({
        //     // 加快构建速度
        //     cache: true,
        //     // 开启多线程提高打包速度
        //     // parallel:true,
        //     terserOptions: {
        //         compress: {
        //             // 无用代码
        //             unused: true,
        //             // 调试信息
        //             drop_debugger: true,
        //             // 输出
        //             drop_console: true,
        //             dead_code: true,
        //         }
        //     }
        // })]
    },
    mode: 'development',// 'production',
    // 工程资源入口入口，webpack打包哪个文件
    entry: './app.js',
    // {
    //     "index": 'index.js',
    // },
    output: {  // 出口
        //  必须为绝对路径
        path: path.join(__dirname, './dist'),
        filename: 'bundle.js',// 输出文件名称
    },
    devServer: {
        port: 3000,// 端口
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        // HMR热更新配置
        hot: true,
    },
    resolve: {
        extensions: ['.js', '.vue', '.json'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js',
            // '@': resolve('src'),
        }
    },
    // 文件加载器  loader
    module: {
        //  不解析的文件，此类文件中不应包含import等语法
        noParse: /node_modules\/(jquery\.js)/,
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js?/,// 文件规则正则
                exclude: /node_modules/,
                use: ['babel-loader']
            },

            {
                test: /\.css$/,
                use: [
                    'vue-style-loader',
                    'css-loader'
                ]
            },
            {
                test: /\.less$/,
                use: ["style-loader", "css-loader", "less-loader"]
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                // options: {
                //     limit: 10000,
                //     name: utils.assetsPath('media/[name].[hash:7].[ext]')
                // }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                // options: {
                //     limit: 10000,
                //     name: utils.assetsPath('fonts/[name].[hash:7].[ext]')
                // }
            }
        ]
    },
    plugins: [
        // 压缩代码体积
        // new UglifyJsPlugin(),

        // 编译html文件
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, 'src/index.html'),
            filename: 'index.html', // 输出文件名
        }),
        new VueLoaderPlugin(),
        // 旧语法
        // new CopyWebpackPlugin([{
        //     from: 'static',
        //     to: "static"
        // }]),
        // 新语法 https://webpack.js.org/plugins/copy-webpack-plugin/#options-1
        new CopyWebpackPlugin(
            {
                patterns: [
                    { from: 'static', to: 'static' }
                ]
            }
        )

        // new BundleAnalyzerPlugin(),
    ],
};
