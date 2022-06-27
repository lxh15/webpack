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
            // { // 处理图片
            //     test: /\.(png|jpg|gif|jpeg)$/,
            //     use: [
            //         {
            //             loader: 'url-loader', // 匹配文件, 尝试转base64字符串打包到js中
            //             // 配置limit, 超过8k, 不转, file-loader复制, 随机名, 输出文件
            //             options: {
            //                 limit: 8 * 1024,
            //             },
            //         },
            //     ],
            // },
            {// webpack 5
                test: /\.(png|jpg|gif)$/i, // 匹配的图片
                // type: 'asset/resource', // 处理资源模块的方式
                // asset/resource 直接复制dist 目录下
                // type: 'asset/inline'
                // 直接转换成based64

                // 在导出一个 data URI 和发送一个单独的文件之间自动选择。
                // 如果你设置的是asset模式
                // 以8KB大小区分图片文件
                // 小于8KB的, 把图片文件转base64, 打包进js中
                // 大于8KB的, 直接把图片文件输出到dist下
                type: 'asset',
                dependency: { not: ['url'] },
                // parser: { // 解析器 规则
                //   dataUrlCondition: { // dataUrl的情况
                //     maxSize: 8 * 1024,
                //     // maxSize 限制最大值
                //   },
                // },
                // generator: { // 生成器
                //   filename: '[hash:6][ext]', // 资源文件处理之后 输出的文件名
                //   // ext 文件扩展名
                // }
            },
            //字体图标
            { // webpack5默认内部不认识这些文件, 所以当做静态资源直接输出即可
                test: /\.(eot|svg|ttf|woff|woff2)$/,
                type: 'asset/resource',
                generator: {
                    filename: 'font-[name].[hash:6][ext]'
                }
            },
            // { // 处理字体图标的解析
            //     test: /\.(eot|svg|ttf|woff|woff2)$/,
            //         use: [
            //             {
            //                 loader: 'url-loader',
            //                 options: {
            //                     limit: 2 * 1024,
            //                     // 配置输出的文件名
            //                     name: '[name].[ext]',
            //                     // 配置输出的文件目录
            //                     outputPath: "fonts/"
            //                 }
            //             }
            //         ]
            // }

            // 高级语法
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'] // 预设:转码规则(用bable开发环境本来预设的)
                    }
                }
            },
        ]
    }

}

