import { lStorage } from './cache'
import { refreshToken } from '@/api/auth'

const TOKEN_CODE = 'access_token'
const DURATION = 6 * 60 * 60

export function getToken() {
  return lStorage.get(TOKEN_CODE)
}

export function setToken(token) {
  lStorage.set(TOKEN_CODE, token, DURATION)
}

export function removeToken() {
  lStorage.remove(TOKEN_CODE)
}

export async function refreshAccessToken() {
  const tokenItem = lStorage.getItem(TOKEN_CODE)
  if (!tokenItem) {
    return
  }
  const { time } = tokenItem
  // token生成或者刷新后30分钟内不执行刷新
  if (new Date().getTime() - time <= 1000 * 60 * 30) return
  try {
    const res = await refreshToken()
    if (res.code === 0) {
      setToken(res.data.token)
    }
  } catch (error) {}
}
