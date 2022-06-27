// 引入路径模块
const path = require('path')

// 引入打包html模块
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 引入自动清除dist目录内容插件
const { CleanWebpackPlugin } = require('clean-webpack-plugin')

// 


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
    // 配置开发服务器
    devServer: {
        port: 3000, // 端口号
        open: true // 自动打开浏览器
    },
    // 配置的loader
    module: {
        rules: [ // 规则
            { // 配置处理css
                test: /\.css$/, // 匹配以 css结尾的文件
                // css-loader 把css 文件转换成 webpack 可以识别的文件
                // style-loader 把css代码 插入到dom中
                // loader 执行 从右往左
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/, // 匹配执行类型的文件
                // 使用less-loader, 让webpack处理less文件, 内置还会用less翻译less代码成css内容
                // 执行的顺序 less-loader css-loader style-loader
                // less-loader 先把less代码转换成css
                // css-loader 再把css代码转换成webpack 可以识别的js代码
                // style-loader 在把css代码插入到 dom中
                use: ["style-loader", "css-loader", 'less-loader']
            },
        ]
    }

}

