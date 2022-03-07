import { defAxios } from '@/utils/http'

export function getPosts(data = {}) {
  return defAxios({
    url: '/posts',
    method: 'get',
    data,
  })
}

export function getPostById({ id }) {
  return defAxios({
    url: `/post/${id}`,
    method: 'get',
  })
}

export function savePost(id, data = {}) {
  if (id) {
    return defAxios({
      url: `/post/${id}`,
      method: 'put',
      data,
    })
  }

  return defAxios({
    url: '/post',
    method: 'post',
    data,
  })
}

export function deletePost(id) {
  return defAxios({
    url: `/post/${id}`,
    method: 'delete',
  })
}
