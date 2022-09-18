import { request } from '@/utils'

export default {
  login: (data) => request.post('/auth/login', data, { noNeedToken: true }),
}
