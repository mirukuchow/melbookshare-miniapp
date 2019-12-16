import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtList, AtListItem } from 'taro-ui';
import SearchBar from '../../components/searchbar'

//navBar Component
export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: "猫本书友"
  };

  state = {
    books: []
  };

  constructor(props) {
    super(props);
    this.state = {
      current: 0
    };
  }

  async componentWillMount() {
    const response = await Taro.request({
      url: `${API_DB}/books`
    });
    console.log(response);

    this.setState({
      books: response.data
    });
  }

  render() {
    const { books } = this.state;

    return (
      <View>
        <SearchBar />
        <View className='page-demo'>
          <AtList>
            {books.map(book => (
              <AtListItem
                key={book.id}
                arrow='down'
                thumb={book.image.src}
                title={book.name}
                note={"$" + book.price}
              />
            ))}
          </AtList>
        </View>
      </View>
    );
  }
}
