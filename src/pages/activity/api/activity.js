import vue from 'vue'
import Config from '@/config'

function url(api) {
  return `${Config.url.api}/jeecg-boot/park.service/${api}`
}

export function api_index(keyword, parkId, pageNo, pageSize, status) {
  return vue.http({
    method: 'get',
    url: url('mgrActivityInfo/list'),
    params: {keyword: keyword, parkId: parkId,pageNo: pageNo, pageSize: pageSize, status: status}
  })
}


export function api_view(id) {
  return vue.http({
    method: 'get',
    url: url('mgrActivityInfo/queryById'),
    params: {activityId: id}
  })
}
