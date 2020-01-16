import Taro, { Component } from "@tarojs/taro";
import { View } from "@tarojs/components";
import { AtForm, AtInput, AtButton, AtTextarea, AtInputNumber } from "taro-ui";
import DoubanListBook from "../../components/doubanlist-book";
import fetchDouban from "../../utilities/fetch-douban";

class AddInfo extends Component {
  config = {
    navigationBarTitleText: "添加发布信息"
  };

  constructor() {
    super(...arguments);
    this.fetchData = fetchDouban;
    this.state = {
      book: {
      },
      condition: "",
      location: "",
      price: "",
      contact: "",
      comment: ""
    };
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

  onSubmit(event) {
    const { book, condition, location, price, contact, comment } = this.state;
    console.log('book',book);
    const response = Taro.request({
      method: "POST",
      url: `${API_DB}/books`,
      data: {
        title: book.title,
        sourceId: book.id,
        image: book.images.small,
        author: book.author,
        rating: book.rating.average,
        originalPrice: book.price,
        price: price,
        condition: condition,
        comment: comment,
        contact: contact,
        location: location
      }
    });
    const { statusCode } = response;
    switch ((response, statusCode)) {
      case 200:
        console.log("提交成功！");
        break;
    }
  }

  // Reusbale for all inputs
  handleChange = (name, value) => {
    this.setState({
      [name]: value
    });
  };

  render() {
    const { book, condition, location, price, contact, comment } = this.state;

    return (
      <View>
        <DoubanListBook data={book} selected={true} />
        <AtForm className="mx-2 p-3" onSubmit={this.onSubmit.bind(this)}>
          <AtInput
            name="condition"
            title="大致品相"
            type="text"
            placeholder="接近全新"
            value={this.state.conditon}
            onChange={this.handleChange.bind(this, "condition")}
          />
          <AtInput
            name="location"
            title="所在地"
            type="text"
            placeholder="Melbouren, VIC"
            value={this.state.location}
            onChange={this.handleChange.bind(this, "location")}
          />
          <AtInput
            name="price"
            title="出价"
            type="digit"
            placeholder="请输入想要出售的价格"
            value={this.state.price}
            onChange={this.handleChange.bind(this, "price")}
          />
          <AtInput
            name="contact"
            title="联络方式"
            type="text"
            placeholder="微信号，手机或邮箱"
            value={this.state.contact}
            onChange={this.handleChange.bind(this, "contact")}
          />
          <AtTextarea
            className="m-2"
            name="comment"
            height={180}
            title="评论（可选）"
            maxLength={180}
            placeholder="还有什么想说的呢？(可选)"
            value={this.state.comment}
            onChange={this.handleChange.bind(this, "comment")}
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
