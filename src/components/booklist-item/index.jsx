import Taro, { Component } from '@tarojs/taro';
import { View, Text, Image } from '@tarojs/components';
import { AtCard } from 'taro-ui';

class BookListItem extends Component {

  //Using global custom styles in app.scss
  static options = {
    addGlobalClass: true
  }

  render() {
    const {data: book } = this.props

    return(
      <View className='card__item my-2 mx-3'>
        <Image
          className='card__item-image'
          src={book.image.src}
          mode='aspectFit'
        />
        <View className='card__item-content'>
          <View className='card__item-content-header mb-1'>
            {book.name}
          </View>
          <View className='card__item-content-subtitle text-muted mb-5'>
            {book.author}
          </View>
          <View className='card__item-content-footer'>
            <View className='card__item-content-footer-sm'>
              <Text>原价\n</Text>
              <Text className='mr-3 text-muted text-through'>{'￥' + book.originalPrice}</Text>
            </View>
            <View className='card__item-content-footer-lg'>
              <Text>主人定价\n</Text>
              <Text className='mr-3'>{'$' + book.priceFrom + '起'}</Text>
            </View>
            <View className='card__item-content-footer-lg'>
              <Text className='mx-1'>2</Text>
              <Text>本可买</Text>
            </View>
          </View>
        </View>
      </View>
    )
  }
}

export default BookListItem;


// <View className='card mb-2'>
//   <Image
//     className='card-img-top'
//     src={book.image.src}
//     mode='aspectFit'
//   />
//   <View className='card-body text-center'>
//     <View className='card-title mb-2'>
//        <View className='card-title-text'>{book.name}</View>
//       </View>
//   </View>
//   <View className='card-subtitle'>
//     <Text>原价</Text>
//     <Text className='mr-2 text-muted text-through'>{'￥' + book.originalPrice}</Text>
//   </View>
// </View>
