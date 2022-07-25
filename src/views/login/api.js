import request from '@/utils/http'

export default {
  login: (data) => request.post('/auth/login', data),
}
