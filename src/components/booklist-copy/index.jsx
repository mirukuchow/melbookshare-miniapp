import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import classNames from "classnames";
import "./../../assets/styles/app.scss";
import avatar from "./../../assets/sample-images/avatar.png"
import contact from "./../../assets/icons/contact.png"
import button from "./../../assets/icons/button.png"

function BookListCopy ({ data:copy }) {

  return (
    <View className="card__copy my-3 mx-3">
      <View className="card__copy-content">
        <Figure className="card__copy-content-wechat">
          <Image className="card__copy-content-wechat-avatar" src={avatar} />
          <View className="card__copy-content-wechat-username">{copy.owner.alias}</View>
          <Image className="card__copy-content-wechat-contact" src={button} />
        </Figure>
        <View className="card__copy-content-comment my-3">“{copy.comment}”</View>
        <View className="card__copy-footer">
          <View className="card__copy-footer-lg">
            <Text>主人定价\n</Text>
            <Text>${copy.price}</Text>
          </View>
          <View className="card__copy-footer-lg">
            <Text>品相\n</Text>
            <Text>{copy.condition}</Text>
          </View>
          <View className="card__copy-footer-lg">
            <Text>位置\n</Text>
            <Text>{copy.location}</Text>
          </View>
        </View>
        <View className="card__copy-viewmore">
          <Text className="card__copy-viewmore-text text-muted">失眠的泡泡书架上还有《如果房子会说话》，《如果房子会说话》，《如果房子会说话》</Text>
          <Text className="card__copy-viewmore-button">查看更多</Text>
        </View>
      </View>
    </View>
  );
}


export default BookListCopy;
