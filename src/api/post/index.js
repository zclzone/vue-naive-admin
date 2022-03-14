import { defAxios as request } from '@/utils/http'

export function getPosts(data = {}) {
  return request({
    url: '/posts',
    method: 'get',
    data,
  })
}

export function getPostById({ id }) {
  return request({
    url: `/post/${id}`,
    method: 'get',
  })
}

export function savePost(id, data = {}) {
  if (id) {
    return request({
      url: `/post/${id}`,
      method: 'put',
      data,
    })
  }

  return request({
    url: '/post',
    method: 'post',
    data,
  })
}

export function deletePost(id) {
  return request({
    url: `/post/${id}`,
    method: 'delete',
  })
}
