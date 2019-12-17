import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';

class BookListItem extends Component {

  //Using global custom styles in app.scss
  static options = {
    addGlobalClass: true
  }

  render() {
    const {data: book } = this.props

    return(
      <View className='card mb-2'>
        <Image
          className='card-img-top'
          src={book.image.src}
          mode='aspectFit'
        />
        <View className='card-body text-center'>
          <View className='card-title mb-2'>
             <View className='card-title-text'>{book.name}</View>
            </View>
        </View>
        <View className='card-subtitle'>
          <Text>原价</Text>
          <Text className='mr-2 text-muted text-through'>{'￥' + book.originalPrice}</Text>
        </View>
      </View>
    )
  }
}

export default BookListItem;
