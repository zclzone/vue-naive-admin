import { defAxios } from '@/utils/http'

export function getUsers(data = {}) {
  return defAxios({
    url: '/users',
    method: 'get',
    data,
  })
}

export function getUser(id) {
  if (id) {
    return defAxios({
      url: `/user/${id}`,
      method: 'get',
    })
  }
  return defAxios({
    url: '/user',
    method: 'get',
  })
}

export function saveUser(data = {}, id) {
  if (id) {
    return defAxios({
      url: '/user',
      method: 'put',
      data,
    })
  }

  return defAxios({
    url: `/user/${id}`,
    method: 'put',
    data,
  })
}
