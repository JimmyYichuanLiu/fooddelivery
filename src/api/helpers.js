import axios from 'axios'

const urlMap = {
  development: '/',
  production: 'http://61chuanjimmy.com/food-delivery/'
}
const baseUrl = urlMap[process.env.NODE_ENV]
/* 用axios进行封装 */
const ERR_OK = 0

export function get(url) {
  return function (params) {
    return axios.get(baseUrl + url, {
      params
    }).then((res) => {
      const { errno, data } = res.data
      if (errno === ERR_OK) {
        return data
      }
    }).catch(() => {

    })
  }
}
