import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtTextarea, AtInputNumber } from "taro-ui";
import DoubanListBook from "../../components/doubanlist-book";
import fetchDouban from "../../utilities/fetch-douban";

class AddInfo extends Component {
  config = {
    navigationBarTitleText: "添加发布信息"
  };

  state = {
    book: {}
  };

  constructor() {
    this.fetchData = fetchDouban;
  }

  fetchDataSuccess(respone) {
    const { data } = respone;
    this.setState({
      book: data
    });
  }

  componentWillMount() {
    const { bookid } = this.$router.params;
    this.fetchData({
      bookid: bookid,
      success: this.fetchDataSuccess.bind(this)
    });
  }

  render() {
    const { book } = this.state;

    return (
      <View>
        <DoubanListBook data={book} selected={true} />
        <AtForm className="mx-2 p-3">
          <AtInput
            name="condition"
            title="大致品相"
            type="text"
            placeholder="接近全新"
          />
          <AtInput
            name="location"
            title="所在地"
            type="text"
            placeholder="Melbouren, VIC"
          />
          <AtInput
            name="price"
            title="出价"
            type="digit"
            placeholder="请输入想要出售的价格"
          />
          <AtInput
            name="contact"
            title="联络方式"
            type="text"
            placeholder="微信号，手机或邮箱"
          />
          <AtTextarea
            className="m-2"
            name="comment"
            height={180}
            title="评论（可选）"
            maxLength={180}
            placeholder="还有什么想说的呢？(可选)"
          />
          <AtButton
            className="button-md text-base"
            type="primary"
            formType="submit"
          >
            确认添加
          </AtButton>
        </AtForm>
      </View>
    );
  }
}

export default AddInfo;
