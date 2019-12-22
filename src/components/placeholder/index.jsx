import Taro, { Component, setState } from "@tarojs/taro";
import { View } from "@tarojs/components";
import classNames from "classnames";
import "./../../assets/styles/app.scss";

function Placeholder({ className = '', quantity = 1, show = false }) {
  const amount = parseInt(quantity);
  const classValue = classNames("ui placeholder", className);
  const items = [...Array(amount).keys()];

  return (
    <View>
      {show &&
        items.map(i => (
          <View key={i} className={classValue}>
            <View className="image rectangular"></View>
            <View className="line"></View>
            <View className="very short line"></View>
          </View>
        ))}
    </View>
  );
}

export default Placeholder;
