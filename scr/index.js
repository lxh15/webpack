// // 轮播图逻辑
// console.log('实现轮播图的业务逻辑')
// // tab栏切换的逻辑
// console.log('实现tabs标签页的逻辑')


// 引入banner.js和tabs.js
import './banner'
import './tab'

// 引入jquery
import $, { fn } from 'jquery'
$('#swiper').css('background-color', 'red')

// 引入css文件 
import './styles/index.css'

// 引入less文件 
import './styles/index.less'


// 引用图片
import imgUrl from './assets/1.gif';

let img = document.createElement('img');
img.src = imgUrl;
document.body.appendChild(img);

// 引入图片-使用
// import imgUrl from './assets/1.gif'
// const theImg = document.createElement("img")
// theImg.src = imgUrl
// document.body.appendChild(theImg)

// 引入字体图标文件
import './assets/fonts/iconfont.css'


// 高级语法
class App {
    static a = 123
}

console.log(App.a)


const str = () => {
    console.log('======')
}

str()

// 添加vue文件
import vue from './app.vue'