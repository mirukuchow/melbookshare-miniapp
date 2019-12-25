import Taro, { useState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import BookListBook from "../booklist-book";
import BookListCopy from "../booklist-copy";
import classNames from "classnames";
import "./../../assets/styles/app.scss";

function BookList ({ data: books }) {



  return(
    <View>
      {books &&
        books.map(book => (
        <View>
          <BookListBook key={book.id} data={book} />
        </View>
      ))}
    </View>
  );
};


export default BookList;
