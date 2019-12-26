import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
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

  render() {
    return <View>User Profile </View>;
  }
}

export default UserProfile;
