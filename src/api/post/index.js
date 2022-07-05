import { defAxios as request } from '@/utils/http'

export function getPosts(params = {}) {
  return request({
    url: '/posts',
    method: 'get',
    params,
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
