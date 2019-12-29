import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import DoubanListBook from "../doubanlist-book";
import classNames from "classnames";
import "./../../assets/styles/app.scss";

function DoubanList({ data: books }) {
  //const [books, setBooks] = useState(booksData);

  return (
    <View>
      {books &&
        books.map(book => (
          <View>
            <DoubanListBook
              key={book.id}
              data={book}
              onClick={this.props.onClickSelectBook.bind(this, book)}
              />
          </View>
        ))}
    </View>
  );
}

export default DoubanList;
