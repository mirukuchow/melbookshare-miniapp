import Taro, { Component } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import classNames from "classnames";
import "./../../assets/styles/app.scss";

const BookListItem = ({ data: book }) => (
  <View className="card__item my-2 mx-3">
    <Image className="card__item-image" src={book.image.src} mode="aspectFit" />
    <View className="card__item-content">
      <View className="card__item-content-header mb-1">{book.title}</View>
      <View className="card__item-content-subtitle text-muted mb-5">
        {book.author}
      </View>
      <View className="card__item-content-footer">
        <View className="card__item-content-footer-sm">
          <Text className="text-xs">原价\n</Text>
          <Text className="mr-3 text-muted text-through">
            {"￥" + book.availableBooks}
          </Text>
        </View>
        <View className="card__item-content-footer-lg">
          <Text className="text-xs">主人定价\n</Text>
          <Text className="mr-3">{"$" + book.priceFrom + " 起"}</Text>
        </View>
        <View className="card__item-content-footer-lg">
          <Text className="mx-1">2</Text>
          <Text>本可买</Text>
        </View>
      </View>
    </View>
  </View>
);


export default BookListItem;
