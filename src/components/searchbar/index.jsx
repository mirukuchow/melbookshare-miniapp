import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui'

class SearchBar extends Component {
  state = {
    value: ''
  }

  onChange(value) {
    this.setState({
      value
    })
  }

  //Pressing "Search" Button will trigger onActionClick()
  onActionClick() {
    console.log(`搜索：${this.state.value}`)
  }

  //Pressing "Enter" key will trigger onConfirm()
  onConfirm() {
    console.log(`搜索：${this.state.value}`)
  }

  render() {
    return(
      <View>
        <AtSearchBar
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onActionClick={this.onActionClick.bind(this)}
        />
      </View>
    )
  }
}

export default SearchBar;
