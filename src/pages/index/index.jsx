import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import Publish from './../publish'
import { AtTabBar } from "taro-ui";
import "./index.scss";


const tabList = [
  { title: '首页', iconType: 'home'},
  { title: '发布', iconType: 'add'},
  { title: '我的', iconType: 'user'}
]

//navBar Component
export default class Index extends Taro.Component {

  constructor(props){
    super(props);
    this.state={
      current: 0
    }
  }

  handleClick(value){
    this.setState({
      current: value
    })
  }
  componentDidMount(){
    Taro.setNavigationBarTitle({
      title: tabList[this.state.current].title
    })
  }
  componentDidUpdate(){
    Taro.setNavigationBarTitle({
      title: tabList[this.state.current].title
    })
  }
  render(){
    return(
      <View>
          {this.state.current===1 && <Publish />}
          <AtTabBar
            fixed
            tabList={tabList}
            onClick={this.handleClick.bind(this)}
            current={this.state.current}
          />
      </View>
    )
  }
}
