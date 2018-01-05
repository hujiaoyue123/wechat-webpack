const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');


let base= {
    entry:{
        column:'./page/column.js',
        columnList:'./page/columnList.js',
        home:'./page/home.js',
        higherCourse:'./page/higherCourse.js',
        columnVideo:'./page/columnVideo.js',
        liveCourse:'./page/liveCourse.js',
        phoneVideoHis:'./page/phoneVideoHis.js',
        phoneVideoReview:'./page/phoneVideoReview.js',
        login:'./page/login.js',
        zixun:'./page/zixun.js'

    },
    plugins:[
        new webpack.optimize.CommonsChunkPlugin({
            name:'vendors'
        }),
        new HtmlWebpackPlugin({
            filename:"./column.html",
            template:"./tpl/column.html",
            inject:true,
            cached:true,
            hash:true,
            chunks:['column','vendors']
        }), new HtmlWebpackPlugin({
            filename:"./columnVideo.html",
            template:"./tpl/columnVideo.html",
            inject:true,
            cached:true,
            hash:true,
            chunks:['columnVideo','vendors']
        }), new HtmlWebpackPlugin({
            filename:"./zixun.html",
            template:"./tpl/zixun.html",
            inject:true,
            cached:true,
            hash:true,
            chunks:['zixun','vendors']
        }), new HtmlWebpackPlugin({
            filename:"./login.html",
            template:"./tpl/login.html",
            inject:true,
            cached:true,
            hash:true,
            chunks:['login','vendors']
        }), new HtmlWebpackPlugin({
            filename:"./phoneVideoReview.html",
            template:"./tpl/phoneVideoReview.html",
            inject:true,
            cached:true,
            hash:true,
            chunks:['phoneVideoReview','vendors']
        }), new HtmlWebpackPlugin({
            filename:"./phoneVideoHis.html",
            template:"./tpl/phoneVideoHis.html",
            inject:true,
            cached:true,
            hash:true,
            chunks:['phoneVideoHis','vendors']
        }), new HtmlWebpackPlugin({
            filename:"./liveCourse.html",
            template:"./tpl/liveCourse.html",
            inject:true,
            cached:true,
            hash:true,
            chunks:['liveCourse','vendors']
        }),
        new HtmlWebpackPlugin({
            filename:"./columnList.html",
            template:"./tpl/columnList.html",
            inject:true,
            cached:true,
            hash:true,
            chunks:['columnList','vendors']
        }),
        new HtmlWebpackPlugin({
            filename:"./higherCourse.html",
            template:"./tpl/higherCourse.html",
            inject:true,
            cached:true,
            hash:true,
            chunks:['higherCourse','vendors']
        }),
        new HtmlWebpackPlugin({
            filename:"./home.html",
            template:"./tpl/home.html",
            inject:true,
            cached:true,
            hash:true,
            chunks:['home','vendors']
        })
    ]
};

function expendConfig(tagConfig) {
    for(let e in base.entry){
        tagConfig.entry[e] = base.entry[e]
    }

    for(let p of base.plugins){
        tagConfig.plugins.push(p);
    }


    for(let x in base.externals){
        tagConfig.externals[x] = base.externals[x];
    }
    // for(let ex of base.externals){
    //     tagConfig.plugins[ex] = base.externals[ex];
    // }
}
module.exports.expendConfig = expendConfig;
module.exports.config = base;