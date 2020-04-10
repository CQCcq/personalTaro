//页面逻辑
import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import './pagination.scss'
import { AtPagination } from 'taro-ui'
export default class Index extends Component {

  constructor (prop){
    super(prop)
    this.state = {
      pagination:{
          pageSize:5,
          current:1,
          total:50,
          icon:true
        },
        date:new Date().getSeconds(),
      ListPage:[
        // {id:1,title:'测试',img:'./../../img/scene1.jpg'},
        // {id:2,title:'测试',img:'./../../img/scene2.jpg'},
        // {id:3,title:'测试',img:'./../../img/scene3.jpg'},
        // {id:4,title:'测试',img:'./../../img/scene3.jpg'},
        // {id:5,title:'测试',img:'./../../img/scene3.jpg'},
      ],
      lists:[
        {id:1,title:'测试',img:'./../../img/scene1.jpg'},
        {id:2,title:'测试',img:'./../../img/scene2.jpg'},
        {id:3,title:'测试',img:'./../../img/scene3.jpg'},
        {id:4,title:'测试',img:'./../../img/scene3.jpg'},
        {id:5,title:'测试',img:'./../../img/scene3.jpg'},
        {id:6,title:'测试',img:'./../../img/scene3.jpg'},
        {id:7,title:'测试',img:'./../../img/scene3.jpg'},
        {id:8,title:'测试',img:'./../../img/scene3.jpg'},
        {id:9,title:'测试',img:'./../../img/scene3.jpg'},
        {id:10,title:'测试',img:'./../../img/scene3.jpg'},
        {id:11,title:'测试',img:'./../../img/scene3.jpg'},
        {id:12,title:'测试',img:'./../../img/scene3.jpg'},
        {id:13,title:'测试',img:'./../../img/scene3.jpg'},
        {id:14,title:'测试',img:'./../../img/scene3.jpg'},
        {id:15,title:'测试',img:'./../../img/scene3.jpg'},
        {id:16,title:'测试',img:'./../../img/scene3.jpg'},
        {id:17,title:'测试',img:'./../../img/scene3.jpg'},
        {id:18,title:'测试',img:'./../../img/scene3.jpg'},
        {id:19,title:'测试',img:'./../../img/scene3.jpg'},
        {id:20,title:'测试',img:'./../../img/scene3.jpg'},
        {id:21,title:'测试',img:'./../../img/scene3.jpg'},
        {id:22,title:'测试',img:'./../../img/scene3.jpg'},
        {id:23,title:'测试',img:'./../../img/scene3.jpg'},
        {id:24,title:'测试',img:'./../../img/scene3.jpg'},
        {id:25,title:'测试',img:'./../../img/scene3.jpg'},
        {id:26,title:'测试',img:'./../../img/scene3.jpg'},
        {id:27,title:'测试',img:'./../../img/scene3.jpg'},
        {id:28,title:'测试',img:'./../../img/scene3.jpg'},
        {id:29,title:'测试',img:'./../../img/scene3.jpg'},
        {id:30,title:'测试',img:'./../../img/scene3.jpg'},
        {id:31,title:'测试',img:'./../../img/scene3.jpg'},
        {id:32,title:'测试',img:'./../../img/scene3.jpg'},
        {id:33,title:'测试',img:'./../../img/scene3.jpg'},
        {id:34,title:'测试',img:'./../../img/scene3.jpg'},
        {id:35,title:'测试',img:'./../../img/scene3.jpg'},
        {id:36,title:'测试',img:'./../../img/scene3.jpg'},
        {id:37,title:'测试',img:'./../../img/scene3.jpg'},
        {id:38,title:'测试',img:'./../../img/scene3.jpg'},
        {id:39,title:'测试',img:'./../../img/scene1.jpg'},
        {id:40,title:'测试',img:'./../../img/scene1.jpg'},
        {id:41,title:'测试',img:'./../../img/scene1.jpg'},
        {id:42,title:'测试',img:'./../../img/scene1.jpg'},
        {id:43,title:'测试',img:'./../../img/scene1.jpg'},
        {id:44,title:'测试',img:'./../../img/scene1.jpg'},
        {id:45,title:'测试',img:'./../../img/scene1.jpg'},
        {id:46,title:'测试',img:'./../../img/scene1.jpg'},
        {id:47,title:'测试',img:'./../../img/scene1.jpg'},
        {id:48,title:'测试',img:'./../../img/scene1.jpg'},
        {id:49,title:'测试',img:'./../../img/scene1.jpg'},
        {id:50,title:'测试',img:'./../../img/scene1.jpg'},
        {id:51,title:'测试',img:'./../../img/scene1.jpg'},
        {id:52,title:'测试',img:'./../../img/scene1.jpg'},
        {id:53,title:'测试',img:'./../../img/scene1.jpg'},
        {id:54,title:'测试',img:'./../../img/scene1.jpg'},
        {id:55,title:'测试',img:'./../../img/scene1.jpg'},
        {id:56,title:'测试',img:'./../../img/scene1.jpg'},
        {id:57,title:'测试',img:'./../../img/scene1.jpg'},
        {id:58,title:'测试',img:'./../../img/scene1.jpg'},
        {id:59,title:'测试',img:'./../../img/scene1.jpg'},
        {id:60,title:'测试',img:'./../../img/scene1.jpg'},
        {id:61,title:'测试',img:'./../../img/scene1.jpg'},
        {id:62,title:'测试',img:'./../../img/scene1.jpg'},
        {id:63,title:'测试',img:'./../../img/scene1.jpg'},
        {id:64,title:'测试',img:'./../../img/scene1.jpg'},
        {id:65,title:'测试',img:'./../../img/scene1.jpg'},
        {id:66,title:'测试',img:'./../../img/scene1.jpg'},
        {id:67,title:'测试',img:'./../../img/scene1.jpg'},
        {id:68,title:'测试',img:'./../../img/scene1.jpg'},
        {id:69,title:'测试',img:'./../../img/scene1.jpg'},
        {id:70,title:'测试',img:'./../../img/scene1.jpg'},
        {id:71,title:'测试',img:'./../../img/scene1.jpg'},
        {id:72,title:'测试',img:'./../../img/scene1.jpg'},
        {id:73,title:'测试',img:'./../../img/scene1.jpg'},
        {id:74,title:'测试',img:'./../../img/scene1.jpg'},
        {id:75,title:'测试',img:'./../../img/scene1.jpg'},
        {id:76,title:'测试',img:'./../../img/scene1.jpg'},
        {id:77,title:'测试',img:'./../../img/scene1.jpg'},
        {id:78,title:'测试',img:'./../../img/scene1.jpg'},
        {id:79,title:'测试',img:'./../../img/scene1.jpg'},
        {id:80,title:'测试',img:'./../../img/scene1.jpg'},
        {id:81,title:'测试',img:'./../../img/scene1.jpg'},
        {id:82,title:'测试',img:'./../../img/scene1.jpg'},
        {id:83,title:'测试',img:'./../../img/scene1.jpg'},
        {id:84,title:'测试',img:'./../../img/scene1.jpg'},
        {id:85,title:'测试',img:'./../../img/scene1.jpg'},
        {id:86,title:'测试',img:'./../../img/scene1.jpg'},
        {id:87,title:'测试',img:'./../../img/scene1.jpg'},
        {id:88,title:'测试',img:'./../../img/scene1.jpg'},
        {id:89,title:'测试',img:'./../../img/scene1.jpg'},
        {id:90,title:'测试',img:'./../../img/scene1.jpg'},
        {id:91,title:'测试',img:'./../../img/scene1.jpg'},
        {id:92,title:'测试',img:'./../../img/scene1.jpg'},
        {id:93,title:'测试',img:'./../../img/scene1.jpg'},
        {id:94,title:'测试',img:'./../../img/scene1.jpg'},
        {id:95,title:'测试',img:'./../../img/scene1.jpg'},
        {id:96,title:'测试',img:'./../../img/scene1.jpg'},
        {id:97,title:'测试',img:'./../../img/scene1.jpg'},
        {id:98,title:'测试',img:'./../../img/scene1.jpg'},
        {id:99,title:'测试',img:'./../../img/scene1.jpg'},
        {id:100,title:'测试',img:'./../../img/scene1.jpg'},
        ]
  }
  }

  componentWillMount () { 
    
  }

 async componentDidMount () { 
   await this.getListData();
  //  await  this.updateData();
  }

  componentWillUnmount () { }

  componentDidShow () { 
   
  }

  componentDidHide () { }
updateData(){
  this.setState((state, props) => {
    console.log(state,props);
    // return {counter: state.counter + props.step};
  });
}

onPageChange= (e)=>{
  let { pagination , lists , ListPage} = this.state;
      this.state.ListPage = [];
      pagination.total = lists.length;
      pagination.current = e.current;
      for(let i=(e.current - 1) * pagination.pageSize;i<((e.current - 1) * pagination.pageSize + pagination.pageSize) && i<lists.length;i++){
      this.state.ListPage.push(lists[i]);
      }
    this.setState((value)=>{
      value
    })
}

  getListData(){
    let { pagination , lists , ListPage} = this.state;
    pagination.total = lists.length;
    for(let i=0;i<pagination.pageSize && i<lists.length;i++){
      ListPage.push(lists[i]);
    }
    this.setState((state,props)=>{
      state:state
    })
  }

  config = {
    // navigationBarTitleText: 'tab切换页'
  }
  render () {
    let { pagination ,ListPage } = this.state;
    console.log('分页具体数据',ListPage);
    let sidebar = (
      <View>
        {/* <text>单个图片</text>
      <View style='width:100%;height:10px;background: #a1a1a1'>
      <Image
          className='img-list'
          src={'./../../img/scene1.jpg'}
        />
      </View> */}
        {ListPage.map((post) =>
        <View key={post.id} className='test-list'>
          <View className='test-one'>  
            <Image
          className='img-list'
          src={post.img}
        />
  <Text className='test-word'>{post.title}{post.id}</Text>
        </View>
        </View>
        )}
      </View>
    )
    // console.log('picList',sidebar);
    return (
      <View className='personal'>
        {sidebar}
        <AtPagination 
            total={pagination.total} 
            pageSize={pagination.pageSize}
            current={pagination.current}
            icon={pagination.icon}
            onPageChange={this.onPageChange}
          >
        </AtPagination>
      </View>
    )
  }
}