import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";

class UserProfile extends Component {
  config = {
    navigationBarTitleText: "UserProfile"
  };

  render() {
    return <View>User Profile</View>;
  }
}

export default UserProfile;
