import Taro, { useState } from "@tarojs/taro";
import { View, Text, Image } from "@tarojs/components";
import BookListCopy from "../booklist-copy";
import classNames from "classnames";
import "./../../assets/styles/app.scss";

function BookListBook({ data: book }) {
  const [showCopies, setShowCopies] = useState(false);

  return (
    <View>
      <View className="card__book my-2 mx-3" onClick={() => setShowCopies(!showCopies)}>
        <Image
          className="card__book-image"
          src={book.image.src}
          mode="aspectFit"
        />
        <View className="card__book-content">
          <View className="card__book-content-header mb-1">{book.title}</View>
          <View className="card__book-content-subtitle text-muted mb-5">
            {book.author}
          </View>
          <View className="card__book-content-footer">
            <View className="card__book-content-footer-sm">
              <Text className="text-xs">原价\n</Text>
              <Text className="mr-3 text-muted text-through">
                {"￥" + book.availableBooks}
              </Text>
            </View>
            <View className="card__book-content-footer-lg">
              <Text className="text-xs">主人定价\n</Text>
              <Text className="mr-3">{"$" + book.priceFrom + " 起"}</Text>
            </View>
            <View className="card__book-content-footer-lg">
              <Text className="mx-1">2</Text>
              <Text>本可买</Text>
            </View>
          </View>
        </View>
      </View>
      {showCopies && <BookListCopy />}
    </View>
  );
}

export default BookListBook;
