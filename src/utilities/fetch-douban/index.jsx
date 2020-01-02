import Taro from "@tarojs/taro";
import buildUrl from "build-url";
import _ from "lodash";

async function fetchData({
  resource = "",
  search = "",
  page = "",
  pageSize = "",
  bookid = "",
  success = () => {},
  fail = () => {}
}) {
  let queryParams = {};
  let path = `${resource}`;

  if (search) queryParams.q = search;
  if (bookid) path = `${bookid}`;
  if (page) queryParams._page = page;
  if (pageSize) queryParams._limit = pageSize;

  if (_.isEmpty(queryParams)) {
    queryParams = null;
  }

  const url = buildUrl(API_DOUBAN, {
    path,
    queryParams
  });

  const header = { "Content-type": "application/text" };

  try {
    console.log(url);
    const response = await Taro.request({ url, header });
    const { statusCode } = response;
    switch (statusCode) {
      case 200:
        success(response);
        break;
      default:
        throw new Error("Kotakun找不到了！！！");
        break;
    }
  } catch (error) {
    fail(error);
  }
}

export default fetchData;
