//页面逻辑
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './index.scss'
export default class Index extends Component {

  componentWillMount () { }

  componentDidMount () {
    this.init();
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  init(){
    let numList = [];
    let numObj = {};
    for(let i=0;i<10000;i++){
      numObj = {};
      numObj.name = '王' + i;
      numObj.id = i;
      numList.push(numObj);
    }
    Taro.setStorage({
      key:"numList",
      data:numList
    })
  }

  onTag(){
    Taro.navigateTo({
      url: '/pages/wordList/wordList'
    })
  };

  onPagenation(){
    console.log('分页跳转');
    Taro.navigateTo({
      url: '/pages/pagination/pagination'
    })
  }
  onLinkForm(){
    Taro.navigateTo({
      url: '/pages/taroForm/taroForm'
    })
  }
  onLinkPicker(){
    Taro.navigateTo({
      url: '/pages/picker/picker'
    })
  }
  config = {
    // navigationBarTitleText: '首页'
  }

  render () {
    let data = {
      vertical:false,
      describeA:'列表',
      describeB:'分页',
      describeC:'表单',
      describeD:'选择器'
    }
    return (
      <View className='index'>
         <Swiper
        className='test-h'
        className='swiper-img'
        indicatorColor='#999'
        indicatorActiveColor='#333'
        vertical={data.vertical}
        circular
        indicatorDots={data.vertical}
        autoplay>
        <SwiperItem>
          <View className='demo-text-1'>
          <Image
          className='demo-img-list'
          src='./../../img/scene1.jpg'
        />
          </View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-2'> 
          <Image
             className='demo-img-list'
          src='./../../img/scene2.jpg'
        /></View>
        </SwiperItem>
        <SwiperItem>
          <View className='demo-text-3'>
            <Image
               className='demo-img-list'
          src='./../../img/scene3.jpg'
        /></View>
        </SwiperItem>
      </Swiper>
    <View className='linkList'>
      <View className='linkList-1'>
        <View className='linkList-2' onClick={this.onTag}></View>
        <text>{data.describeA}</text>
      </View>
      <View className='linkList-1'>
        <View className='linkList-2' onClick={this.onPagenation}></View>
        <text>{data.describeB}</text>
      </View>
      <View className='linkList-1'>
        <View className='linkList-2' onClick={this.onLinkForm}></View>
        <text>{data.describeC}</text>
      </View>
      <View className='linkList-1'>
        <View className='linkList-2' onClick={this.onLinkPicker}></View>
        <text>{data.describeD}</text>
      </View>
    </View>
      </View>
    )
  }
}
