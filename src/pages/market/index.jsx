import Taro, { Component } from "@tarojs/taro";
import { View, Text } from "@tarojs/components";
import { AtPagination } from "taro-ui";
import SearchBar from "../../components/searchbar";
import BookList from "../../components/booklist";
import Placeholder from "../../components/placeholder";
import fetchData from "../../utilities/fetch-data";

//navBar Component
export default class Index extends Component {

  constructor(){
    this.fetchData = fetchData
  }

  state = {
    books: [],
    placeholder: true,
    total: 0,
    pageSize: 10,
    current: 1,
    serviceError: false,
    search: ''
  };

  async componentWillMount() {
    this.fetchData({
      resource: 'books',
      page: this.state.current,
      pageSize: this.state.pageSize,
      success: this.fetchDataSuccess.bind(this),
      fail: this.fetchDataFail.bind(this)
    })
  }

  fetchDataSuccess(response) {
    const { data, header } = response
    this.setState({
      books: data,
      placeholder: false,
      total: header['X-Total-Count']
    })
  }

  fetchDataFail(response) {
    this.setState({
      serviceError: true,
      placeholder: false
    })
  }

  onPageChange({ current }) {
    this.setState({
      current,
      placeholder: true
    }, () => {
      this.fetchData({
        resource: 'books',
        page: this.state.current,
        pageSize: this.state.pageSize,
        success: this.fetchDataSuccess.bind(this),
        fail: this.fetchDataFail.bind(this)
      })
    })
  }

  search(value) {
    this.fetchData({
      resource: 'books',
      search: value,
      page: this.state.current,
      pageSize: this.state.pageSize,
      success: this.fetchDataSuccess.bind(this),
      fail: this.fetchDataFail.bind(this)
    })
  }

  onChangeSearchBar(value) {
    this.setState({
      search: value
    }, () => {
      console.log(value)
      this.search(value)
    })
  }
  //When clicking search button
  onActionClickSearchBar() {
    this.search(this.state.search)
  }
  //When pressing enter button
  onConfirmSearchBar() {
    //this.search(this.state.search)
  }

  config = {
    navigationBarTitleText: '猫本书友'
  };

  render() {

    const { books, placeholder, total, pageSize, current, serviceError } = this.state
    const page = (
      <View className="result__bg">
        <SearchBar
          value={this.state.search}
          onChange={this.onChangeSearchBar.bind(this)}
          onActionClick={this.onActionClickSearchBar.bind(this)}
          onConfirm={this.onConfirmSearchBar.bind(this)}
        />
        <Placeholder className='m-3' quantity='10' show={placeholder} />
        {!placeholder && <BookList data={books} />}
        <AtPagination
          icon
          total={parseInt(total)}
          pageSize={pageSize}
          current={current}
          className='my-4'
          onPageChange={this.onPageChange.bind(this)}
        />
      </View>
    )
    const errorPage = (
      <Text className='page-demo'>
        Kotakun找不到了！！！\n\n\n\n\n\n
        <Text className='text-xs'>
          运行npm run dev:server了吗？
        </Text>
      </Text>

    )
    return (
      <View>
        {serviceError ? errorPage : page}
      </View>
    );
  }
}
