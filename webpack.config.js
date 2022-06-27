// 引入路径模块
const path = require('path')

// 引入打包html模块
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 引入自动清除dist目录内容插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')



module.exports = {
    mode: 'development',
    entry: './scr/index.js',// 入口
    output: { // 出口
        path: path.resolve(__dirname, 'dist'), //出口路径 绝对路径
        filename: 'bundle.js' // 输出的文件名
    },
    // 插件配置的字段
    plugins: [
        new HtmlWebpackPlugin({ // 自定义配置
            template: './public/index.html',  // 打包的文件模板
            filename: 'index.html',  //  打包生成的文件名
        }),
        new CleanWebpackPlugin(),
        // 删除的是 dist 的那个输出文件的文件夹

    ],
    devServer: {
        port: 3000, // 端口号
        open: true // 自动打开浏览器
    }

}

