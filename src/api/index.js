import request from '@/utils/http'

export default {
  getUser: () => request.get('/user'),
  refreshToken: () => request.post('/auth/refreshToken'),
}
