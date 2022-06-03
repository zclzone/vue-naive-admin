import { router } from '@/router'
import { getToken, removeToken } from '@/utils/token'
import { isNullOrUndef } from '../is'
import { isWithoutToken } from './helpers'

export function reqResolve(config) {
  // 防止缓存，给get请求加上时间戳
  if (config.method === 'get') {
    config.params = { ...config.params, t: new Date().getTime() }
  }

  // 处理不需要token的请求
  if (isWithoutToken(config)) {
    return config
  }

  const token = getToken()
  if (token) {
    /**
     * * jwt token
     * ! 认证方案: Bearer
     */
    if (!config.headers.Authorization) config.headers.Authorization = 'Bearer ' + token

    return config
  }
  /**
   * * 未登录或者token过期的情况下
   * * 跳转登录页重新登录，携带当前路由及参数，登录成功会回到原来的页面
   */
  const { currentRoute } = router
  router.replace({
    path: '/login',
    query: { ...currentRoute.query, redirect: currentRoute.path },
  })
  return Promise.reject({ code: '-1', message: '未登录' })
}

export function reqReject(error) {
  return Promise.reject(error)
}

export function repResolve(response) {
  return response?.data
}

export function repReject(error) {
  let { code, message } = error.response?.data || {}
  if (isNullOrUndef(code)) {
    // 未知错误
    console.error('【err】' + error)
    return Promise.reject({ code: -1, message: '接口异常！', error })
  }
  /**
   * TODO 此处可以根据后端返回的错误码自定义框架层面的错误处理
   */
  switch (code) {
    case 401:
      message = message || '未登录'
      // * 处理未登录的情况
      removeToken()
      const { currentRoute } = router
      router.replace({
        path: '/login',
        query: { ...currentRoute.query, redirect: currentRoute.path },
      })
      break
    case 403:
      message = message || '没有权限'
      // TODO 处理没有权限的情况
      break
    case 404:
      message = message || '资源或接口不存在'
      // TODO 处理资源或接口不存在的情况
      break
    default:
      break
  }
  return Promise.resolve({ code, message })
}
