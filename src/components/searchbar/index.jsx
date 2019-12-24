import Taro, { Component } from '@tarojs/taro';
import { View } from '@tarojs/components';
import { AtSearchBar } from 'taro-ui'

const SearchBar = ({value, onChange, onActionClick, onConfirm}) => (
      <View>
        <AtSearchBar
          value={value}
          onChange={onChange}
          onActionClick={onActionClick}
          onConfirm={onConfirm}
        />
      </View>
)

export default SearchBar;
