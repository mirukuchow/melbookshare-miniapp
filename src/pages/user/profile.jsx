import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabBar } from "taro-ui";

//navBar Component
export default class Profile extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  render() {
    return(
      <View className='page-demo'>
      User Profile
      </View>
    )
  }
}
