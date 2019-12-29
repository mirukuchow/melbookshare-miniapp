import Taro, { Component } from "@tarojs/taro";
import { View, Button } from "@tarojs/components";
import { gql } from "apollo-boost";

import client from "../../utilities/graphql";

class UserProfile extends Component {
  componentDidMount() {
    client
      .query({
        query: gql`
          query getCopiesByOwnerId($id: ID!) {
            getCopiesByOwnerId(id: $id) {
              id
              book {
                title
                image
                author
                rating
              }
            }
          }
        `,
        variables: { id: "123" }
      })
      .then(data =>
        console.log("data", data)
      )
      .catch(error => {
        console.error(error.graphQLErrors[0].message);
        console.error(error.message);
        console.error(error.networkError);
      });
  }
  config = {
    navigationBarTitleText: "UserProfile"
  };

  wxLogin = () => {
    Taro.login({
      async success (res) {
        if (res.code) {
          console.log("res.code", res.code);
          const cred = await Taro.request({
            url: `https://api.weixin.qq.com/sns/jscode2session?appid=wx3dfc2961862ee7d2&secret=5360dd86b5bed0515519b090d49a22f3&js_code=${res.code}&grant_type=authorization_code`,
          })
          console.log("openid", cred.data.openid); // TODO: this open id will be used as user id
        } else {
          console.log('登录失败！' + res.errMsg)
        }
      }
    })
  }

  render() {
    return <View>User Profile<Button onClick={this.wxLogin}>Login</Button></View>;
  }
}

export default UserProfile;
