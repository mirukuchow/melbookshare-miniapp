import Taro, { useState } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import { AtButton } from "taro-ui";
import classNames from "classnames";
import "./../../assets/styles/app.scss";

function DoubanListBook({ data: book }) {
  const [selected, setSelected] = useState(this.props.selected);


  return (
    <View>
      <View className="card__book my-2 mx-3">
        <Image
          className="card__book-image"
          src={book.images.small}
          mode="aspectFit"
        />
        <View className="card__book-content">
          <View className="card__book-content-rating">
            豆瓣评分：{" " + book.rating.average}
          </View>
          <View className="card__book-content-header mb-1">{book.title}</View>
          <View className="card__book-content-subtitle text-muted mb-5">
            {book.author}
          </View>
          {!selected && (
            <View className="card__book-content-button">
              <AtButton
                type="primary"
                size="small"
                onClick={this.props.onClick}
              >
                就这本
              </AtButton>
            </View>
          )}
        </View>
      </View>
    </View>
  );
}

export default DoubanListBook;
