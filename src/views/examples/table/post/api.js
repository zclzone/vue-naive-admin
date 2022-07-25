import request from '@/utils/http'

export default {
  getPosts: (params = {}) => request.get('posts', params),
  getPostById: (id) => request.get(`/post/${id}`),
  savePost: (id, data = {}) => {
    if (id) {
      return request.put(`/post/${id}`, data)
    }
    return request.post('/post', data)
  },
  deletePost: (id) => request.delete(`/post/${id}`),
}
