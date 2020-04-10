//页面逻辑
import Taro, { Component } from '@tarojs/taro'
import {
  TaroScrollbar
} from 'taro-scrollbar'
import { View, Text } from '@tarojs/components'
import { AtCard } from "taro-ui"
import './personal.scss'

export default class Index extends Component {

  constructor(props) {
    super(props)
    this.state = {
      list: [
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        },
        {
          note: '标题1',
          title: 'title',
          content: '文本内容'
        }
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  down(){
    console.log('下拉刷新触发')
  }

  loadMore(){
    console.log('上拉刷新')
  }

  config = {
    // navigationBarTitleText: 'tab切换页'
  }

  render () {
    const { list } = this.state
    return (
      <View className='index'>
        <TaroScrollbar down={this.down} loadMore={this.loadMore} >
          <View className='container'>
            {
              list.map((item, index) => {
                return <AtCard
                  key={index}
                  note={item.note}
                  title={item.title}
                >
                  {item.content}
                </AtCard>
              })
            }
          
          </View>
        </TaroScrollbar>
      </View>
    )
  }
}
