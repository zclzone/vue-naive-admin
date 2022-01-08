import { defAxios } from '@/utils/http'

export const login = (data) => {
  return defAxios({
    url: '/auth/login',
    method: 'post',
    data,
  })
}

export const refreshToken = () => {
  return defAxios({
    url: '/auth/refreshToken',
    method: 'post',
  })
}
