import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import BookListItem from '../booklist-item';

const BookList = ({ data: books }) => (
  <View>
    {books.map(book =>
      <BookListItem key={book.id} data={book} />
    )}
  </View>
)

export default BookList;
