import Taro from '@tarojs/taro'
import buildUrl from 'build-url'

async function fetchData({
  resource = '',
  search = '',
  page = '',
  pageSize = '',
  success = () => {},
  fail = () => {}
})
{
  let queryParams = {}

  if(search) queryParams.q = search
  if(filters) queryParams.filters = filters
  if(page) queryParams._page = page
  if(pageSize) queryParams._limit = pageSize

  const path = `${resource}`

  const url = buildUrl(API_DB,{
    path,
    queryParams
  })

  try {
    const response = await Taro.request({url})
    const { statusCode } = response
    switch (statusCode) {
      case 200:
        success(response)
        break;
      default:
        throw new Error('Kotakun找不到了！！！')
        break;
    }
  } catch (error){
    fail(error)
  }
}

export default fetchData
