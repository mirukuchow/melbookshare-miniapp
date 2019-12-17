import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtList, AtListItem } from "taro-ui";
import SearchBar from "../../components/searchbar";
import BookList from "../../components/booklist";
import Placeholder from "../../components/placeholder";

//navBar Component
export default class Index extends Taro.Component {
  config = {
    navigationBarTitleText: "猫本书友"
  };

  state = {
    books: [],
    placeholder: true,
  };

  async componentWillMount() {
    const response = await Taro.request({
      url: `${API_DB}/books`
    });

    this.setState({
      books: response.data,
      placeholder: false,

    });
  }

  render() {
    const { books, placeholder } = this.state;

    return (
      <View>
        <SearchBar />
        <Placeholder className='m-3' quantity='10' show={placeholder} />
        <BookList data={books} />
      </View>
    );
  }
}
