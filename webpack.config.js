//自身配置
const base = require("./webpack.base.js");
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const path = require('path');

let devconfig ={
    devtool: 'eval-source-map',
    entry:{
        hot:'webpack-dev-server/client?http://127.0.0.1:8085',
    },
    output: {
        path: path.join(__dirname,'dist'),
        publicPath:'/dist/',
        libraryTarget: "var",
        filename: '[name]-[hash].js'//打包后输出文件的文件名
    },
    devServer: {
        contentBase: "./",
        // contentBase: ["http://192.168.2.223:8080/","./"],
        host: 'localhost',
        port: 8085, //默认8080
        historyApiFallback:true,
        inline:true,
        hot:true
    },
    module:{
        loaders: [{
            test: /\.less$/,
            loader:'style-loader!css-loader!less-loader'
        },{
            test: /\.css$/,
            loader:'style-loader!css-loader'
        } ,{
            test: /\.js$/,
            loader: 'babel-loader'}
           ]
    },
    plugins:[
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NamedModulesPlugin(),
        new webpack.DefinePlugin({
            baseURL:"'http://www.cctvjy.cn'"
        })
    ]
}

base.expendConfig(devconfig);
console.log(devconfig);
module.exports = devconfig;
