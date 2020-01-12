import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtCard, AtPagination } from "taro-ui";
import SearchBar from "../../components/searchbar";
import DoubanList from "../../components/doubanlist";
import Placeholder from "../../components/placeholder";
import fetchDouban from "../../utilities/fetch-douban";

//navBar Component
export default class Index extends Component {
  constructor() {
    this.fetchData = fetchDouban;
  }

  state = {
    books: [],
    placeholder: false,
    total: 1,
    pageSize: 10,
    current: 1,
    serviceError: false,
    search: ""
  };

  // async componentWillMount() {
  //   this.fetchData({
  //     search: this.state.search,
  //     success: this.fetchDataSuccess.bind(this),
  //     fail: this.fetchDataFail.bind(this)
  //   });
  // }

  fetchDataSuccess(response) {
    const { data, header } = response;
    const { books } = data; //json structure: response -> data -> books (array)
    this.setState({
      books: books,
      placeholder: false
    });
  }

  fetchDataFail(response) {
    this.setState({
      serviceError: true,
      placeholder: false
    });
  }

  search(value) {
    console.log(value);
    this.fetchData({
      search: value,
      resource: "search",
      success: this.fetchDataSuccess.bind(this),
      fail: this.fetchDataFail.bind(this)
    });
  }

  onChangeSearchBar(value) {
    this.setState({
      search: value
    });
  }

  //When clicking search button
  onActionClickSearchBar() {
    this.search(this.state.search);
  }
  //When pressing enter button
  onConfirmSearchBar() {
    this.search(this.state.search);
  }

  onClickSelectBook(book) {
    Taro.navigateTo({
      url: `/pages/publish/addinfo?bookid=${book.id}`
    });
    console.log(book.id)
  }

  config = {
    navigationBarTitleText: "猫本书友"
  };

  render() {
    const {
      books,
      placeholder,
      total,
      pageSize,
      current,
      serviceError
    } = this.state;
    const errorPage = (
      <Text className="page-demo">Kotakun找不到了！！</Text>
    );
    return (
      <View>
        {" "}
        <View className="result__bg">
          <SearchBar
            value={this.state.search}
            onChange={this.onChangeSearchBar.bind(this)}
            onActionClick={this.onActionClickSearchBar.bind(this)}
            onConfirm={this.onConfirmSearchBar.bind(this)}
          />
          <DoubanList data={books} onClickSelectBook={this.onClickSelectBook} />
        </View>
      </View>
    );
  }
}
