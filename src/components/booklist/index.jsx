import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import BookListItem from "../booklist-item";
import classNames from "classnames";
import "./../../assets/styles/app.scss";

const BookList = ({ data: books }) => (
  <View>
    {books.map(b => (
      <BookListItem key={book.id} data={book} />
    ))}
  </View>
);

export default BookList;
