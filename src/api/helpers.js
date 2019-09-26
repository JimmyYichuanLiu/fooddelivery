import axios from 'axios'
/* 用axios进行封装 */
const ERR_OK = 0

export function get(url) {
  return function (params) {
    return axios.get(url, {
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
