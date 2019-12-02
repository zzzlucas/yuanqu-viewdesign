import vue from 'vue'
import Config from '@/config'

function url(api) {
  return `${Config.url.api}/jeecg-boot/sys/`
}

export function api_login(form) {
  return vue.http({
    method: 'post',
    url: url('login'),
    data: {form}
  })
}
