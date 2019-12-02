import {axios} from '@utils/request'

export function login (form) {
  return axios({
    method: 'post',
    url: '/sys/login',
    data: {form}
  })
}

export function logout (logoutToken) {
  return axios({
    url: '/sys/logout',
    method: 'post',
    headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      'X-Access-Token': logoutToken
    }
  })
}
