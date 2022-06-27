const path = require('path')
module.exports = {
    mode: 'development',
    entry: './scr/index.js',// 入口
    output: { // 出口
        path: path.resolve(__dirname, 'dist'), // 路径
        filename: 'bundle.js' // 输出的文件名
    }
}