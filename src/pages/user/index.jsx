import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtTabBar } from "taro-ui";
import "./index.scss";

//navBar Component
export default class Index extends Taro.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  render() {
    return <View>User</View>;
  }
}
