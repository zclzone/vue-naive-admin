import { getToken } from '@/utils/token'
import { toLogin } from '@/utils/auth'
import { isWithoutToken, resolveResError } from './helpers'

export function reqResolve(config) {
  // 处理不需要token的请求
  if (isWithoutToken(config)) {
    return config
  }

  const token = getToken()
  if (!token) {
    // * 未登录或者token过期的情况下,跳转登录页重新登录
    toLogin()
    return Promise.reject({ code: '-1', message: '未登录' })
  }

  /**
   * * 加上 token
   * ! 认证方案: JWT Bearer
   */
  config.headers.Authorization = config.headers.Authorization || 'Bearer ' + token

  return config
}

export function reqReject(error) {
  return Promise.reject(error)
}

export function repResolve(response) {
  const { noNeedTip } = response.config
  if (response.data?.code !== 0) {
    const { code, message } = resolveResError(response?.data)
    !noNeedTip && $message.error(message)
    return Promise.reject({ code, message, error: response?.data })
  }
  return Promise.resolve(response?.data)
}

export function repReject(error) {
  const { noNeedTip } = error.response?.config || error.config
  const { code, message } = resolveResError(error.response?.data)
  !noNeedTip && $message.error(message)
  return Promise.reject({ code, message, error })
}
