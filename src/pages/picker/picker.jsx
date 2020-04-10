//页面逻辑
import Taro, { Component } from '@tarojs/taro'
import { View, Text ,Picker} from '@tarojs/components'
import { AtImagePicker,AtRange,AtToast} from 'taro-ui'
import './picker.scss'

export default class Index extends Component {

  constructor(props){
    super(props)
    this.state = {
      selector: ['美国', '中国', '巴西', '日本'],
      selectorChecked: '美国',
      timeSel: '12:01',
      dateSel: '2018-04-22',
      files: [{
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki1.jpeg',
      },
      {
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki2.jpeg',
      },
      {
        url: 'https://jimczj.gitee.io/lazyrepay/aragaki3.png',
      }],
      isOpened: false,
      text: '',
    }
  }

  onChange = e => {
    this.setState({
      selectorChecked: this.state.selector[e.detail.value]
    })
  }
onTimeChange = e => {
    this.setState({
      timeSel: e.detail.value
    })
  }
  onDateChange = e => {
    this.setState({
      dateSel: e.detail.value
    })
  }

  onChange (files) {
    this.setState({
      files
    })
  }
  onFail (mes) {
    console.log(mes)
  }
  onImageClick (index, file) {
    console.log(index, file)
  }
  handleChange (value) {
    this.setState({
      isOpened: true,
      text: `${value[0]}~${value[1]}`
    })
  }
  

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    // navigationBarTitleText: 'tab切换页'
  }

  render () {
    let picker = (
      <View className='container'>
      <View className='page-body'>
        <View className='page-section'>
          <Text>地区选择器</Text>
          <View>
            <Picker mode='selector' range={this.state.selector} onChange={this.onChange}>
              <View className='picker'>
                当前选择：{this.state.selectorChecked}
              </View>
            </Picker>
          </View>
        </View>
        <View className='page-section'>
          <Text>时间选择器</Text>
          <View>
            <Picker mode='time' onChange={this.onTimeChange}>
              <View className='picker'>
                当前选择：{this.state.timeSel}
              </View>
            </Picker>
          </View>
        </View>
        <View className='page-section'>
          <Text>日期选择器</Text>
          <View>
            <Picker mode='date' onChange={this.onDateChange}>
              <View className='picker'>
                当前选择：{this.state.dateSel}
              </View>
            </Picker>
          </View>
        </View>
      </View>
    </View>
    )

    let imgPicker = (
      <View>
      <AtImagePicker
        // files={this.state.files}
        // onChange={this.onChange.bind(this)}
      />
      </View>
    )

    let range = (
      <View>
         <AtToast
          text={this.state.text}
          isOpened={this.state.isOpened}
        />
        <AtRange
          value={[20, 60]}
          min={0}
          max={100}
          onChange={this.handleChange.bind(this)}
        />
      </View>
    )
    return (
      <View className='personal'>
        {picker}
        {imgPicker}
        {range}
      </View>
    )
  }
}
