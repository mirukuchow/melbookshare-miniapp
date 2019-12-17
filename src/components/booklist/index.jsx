import Taro, { Component } from '@tarojs/taro';
import { View, Image, Text } from '@tarojs/components';
import BookListItem from '../booklist-item';

class BookList extends Component {

  //Using global custom styles in app.scss
  static options = {
    addGlobalClass: true
  }

  render() {
    const { data: books } = this.props;

    return(
      <View className='p-3'>
        {books.map(book =>
          <BookListItem key={book.id} data={book} />
      )}
      </View>
    )
  }
}

export default BookList;
