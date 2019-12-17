import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import classNames from 'classnames'

class Placeholder extends Component {

  static defaultProps = {
    quantity: 1,
    show: false,
    className: '',
  }

  //Using global custom styles in app.scss
  static options = {
    addGlobalClass: true
  }

  render() {
    const classValue = classNames(
      'ui placeholder',
      this.props.className
    )
    const quantity = parseInt(this.props.quantity)
    const items = [...Array(quantity).keys()]

    const { show } = this.props

    return(
      <View>
      {
        show &&
        items.map(i =>
          <View key={i} className={classValue}>
            <View className='image rectangular'></View>
            <View className='line'></View>
            <View className='very short line'></View>
          </View>
        )
      }
      </View>
    )
  }
}

export default Placeholder;
