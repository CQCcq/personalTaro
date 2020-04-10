//项目入口文件

import Taro, { Component, login } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss'

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  config = {
    pages: [
      'pages/index/index',
      'pages/personal/personal',
      'pages/login/login',
      'pages/wordList/wordList',
      'pages/pagination/pagination',
      'pages/taroForm/taroForm',
      'pages/picker/picker'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: '演示用例',
      navigationBarTextStyle: 'black'
    },
    // "sitemapLocation": "sitemap.json",
    "tabBar":{
      color:'#fafafa',
      selectedColor:'#aaeeea',
      backgroundColor:'#adadad',
      borderStyle:"black",
      "list":[
        {
          pagePath:'pages/index/index', //页面路径，必须在pages中先定义
          text:'首页', //tab上按钮的文字,
          iconPath:'img/index.png', //本地图片路径，
          selectedIconPath:'img/selectIndex.png' //选中时的图片路径
         },
         {
          pagePath:'pages/login/login', //页面路径，必须在pages中先定义
          text:'商品页', //tab上按钮的文字,
          iconPath:'img/shop.png', //本地图片路径，
          selectedIconPath:'img/selectShop.png' //选中时的图片路径
         },
         {
          pagePath:'pages/personal/personal', //页面路径，必须在pages中先定义
          text:'个人中心', //tab上按钮的文字,
          iconPath:'img/personal.png', //本地图片路径，
          selectedIconPath:'img/selectPersonal.png' //选中时的图片路径
         }
      ],
      position:'bottom',
      custom:false
    },
    "debug":true
  }

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
