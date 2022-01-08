import { createLocalStorage } from './cache'
import { refreshToken } from '@/api/auth'

const TOKEN_CODE = 'access_token'
const DURATION = 6 * 60 * 60

export const lsToken = createLocalStorage()

export function getToken() {
  return lsToken.get(TOKEN_CODE)
}

export function setToken(token) {
  lsToken.set(TOKEN_CODE, token, DURATION)
}

export function removeToken() {
  lsToken.remove(TOKEN_CODE)
}

export async function refreshAccessToken() {
  const tokenItem = lsToken.getItem(TOKEN_CODE)
  if (!tokenItem) {
    return
  }
  const { time } = tokenItem
  if (new Date().getTime() - time > 1000 * 60 * 30) {
    try {
      const res = await refreshToken()
      if (res.code === 0) {
        setToken(res.data.token)
      }
    } catch (error) {
      console.error(error)
    }
  }
}
