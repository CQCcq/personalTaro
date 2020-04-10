//页面逻辑
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './login.scss'

export default class Index extends Component {

  constructor(prop){
    super(prop)
    this.state = {
      numberList:[],
      MapProps:{
        longitude:'121.46083868127292', //中心经度
        latitude:'31.202379778518566',   //中心维度
        markers:[      //标记点
            {
              id:0,
              longitude:'121.46083868127292', //中心经度
              latitude:'31.202379778518566',   //中心维度
              title:'公司',
              iconPath:'',
              alpha:1,
              // label:'为编辑点旁边增加标签',
              // iconAppendStr: '黄龙时代广场黄龙时代广场黄龙时代广场黄龙时代广场test'
            }
        ],
        circles:[
          {
            longitude:'121.46083868127292', //中心经度
            latitude:'31.202379778518566',   //中心维度
            color: "#000000AA",
            fillColor: "#00000000",
            radius: 80,
            strokeWidth: 1,
          },
          // {
          //   longitude:'121.46083868127292', //中心经度
          //   latitude:'31.202379778518566',   //中心维度
          //   color:"#ff2243",
          //   fillColor:'#0000AA',
          //   radius:50,     //半径
          //   strokeWidth:1  //描边的宽度
          // }
        ]
      }
    }
  }

  componentWillMount () { }

  componentDidMount () {
    this.init();
   }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  onTap(e){
      console.log("天命所归",e);
  }

  config = {
    // navigationBarTitleText: 'tab切换页',
  }

  async init(){
    console.log('undefined',this.state);
    let test = [];
   await Taro.getStorage({
      key: 'numList',
      success: function (res) {
        // console.log(res.data)
        test = res.data;
      }
    })
    this.state.numberList = test
   await this.setState((value) => {
      value
      // console.log(state,props);
      // return {counter: state.counter + props.step};
    })
  }

  render () {
    let {numberList,MapProps} = this.state;
    let sidebar = (
      <View>
        {numberList.map((post) =>
        <View key={post.id} className='test-list'>
          <View className='test-one'>  
          {post.name}
            {/* <Image
          style='width: 110rpx;height: 110rpx;background: #fff;'
          src={post.img}
        /> */}
  {/* <Text className='test-word'>{post.title}{post.id}</Text> */}
        </View>
        </View>
        )}
      </View>
    )

    return (
      <View className='login'>
       <Map className = 'map' onClick={this.onTap} 
       longitude = {MapProps.longitude}
       latitude = {MapProps.latitude}
       markers = {MapProps.markers}
       circles = {MapProps.circles}
       />
        {/* {sidebar} */}
      </View>
    )
  }
}
