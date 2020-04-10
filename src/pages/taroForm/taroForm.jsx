//页面逻辑
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './taroForm.scss'
import { AtForm, AtInput, AtButton,AtInputNumber,AtRadio,AtCheckbox } from 'taro-ui'
export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      inputNum:'',
      radioValue:'option1',
      checkedList: ['list1']
    },
    this.checkboxOption = [{
      value: 'list1',
      label: 'iPhone X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。'
    },{
      value: 'list2',
      label: 'HUAWEI P20'
    },{
      value: 'list3',
      label: 'OPPO Find X',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
    },{
      value: 'list4',
      label: 'vivo NEX',
      desc: '部分地区提供电子普通发票，用户可自行打印，效力等同纸质普通发票，具体以实际出具的发票类型为准。',
      disabled: true
  }]
  }

  handleChange (value) {
    this.setState({
      value
    })
  }
  handleChangeNumber (value) {
    this.setState({
      inputNum:value
    })
  }
  handleChangeRadio(value){
    this.setState({
      radioValue:value
    })
  }
  handleChangeCheck(value){
    this.setState({
      checkedList: value
    })
  }
  onSubmit (event) {
    console.log(this.state.value)
  }
  onReset (event) {
    this.setState({
      value: '',
    })
  }
  submit(){
    console.log('提交');
  }
  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  config = {
    // navigationBarTitleText: 'tab切换页'
  }

  render(){

    let formOne = (
      <AtForm
        onSubmit={this.onSubmit.bind(this)}
        onReset={this.onReset.bind(this)}
      >
        <AtInput 
          name='value' 
          title='文本' 
          type='text' 
          placeholder='单行文本' 
          value={this.state.value} 
          onChange={this.handleChange.bind(this, 'value')} 
        />
         <AtInputNumber
        min={0}
        max={10}
        step={1}
        value={this.state.inputNum}
        onChange={this.handleChangeNumber.bind(this)}
      />

      <AtRadio
        options={[
          { label: '单选项一', value: 'option1', desc: '单选项描述' },
          { label: '单选项二', value: 'option2' },
          { label: '单选项三禁用', value: 'option3', desc: '单选项描述', disabled: true }
        ]}
        value={this.state.radioValue}
        onClick={this.handleChangeRadio.bind(this)}
      />
      <AtCheckbox
        options={this.checkboxOption}
        selectedList={this.state.checkedList}
        onChange={this.handleChangeCheck.bind(this)}
      />
        <AtButton onClick={this.submit}>提交</AtButton>
        <AtButton formType='reset'>重置</AtButton>
      </AtForm>
    )

    return(
      <View>
        {formOne}
      </View>
    )
  }
}
