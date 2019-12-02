import {axios} from '@utils/request'

export function httpAction (method, url, params, data, headers) {
  return axios({
    method,
    url,
    params,
    data,
    headers
  })
}

export function getAction (url, params) {
  return httpAction('get', url, params)
}

export function postAction (url, data) {
  return httpAction('post', url, null, data)
}

export function putAction (url, data) {
  return httpAction('put', url, null, data)
}

export function deleteAction (url, data) {
  return httpAction('delete', url, null, data)
}
