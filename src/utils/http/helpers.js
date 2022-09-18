import { useUserStore } from '@/store'
import { isNullOrUndef, removeToken, toLogin } from '@/utils'

export function addBaseParams(params) {
  if (!params.userId) {
    params.userId = useUserStore().userId
  }
}

export function resolveResError(error = {}) {
  let { code, message } = error
  if (isNullOrUndef(code)) {
    // 未知错误
    code = -1
    message = message ?? '接口未知异常！'
  } else {
    switch (code) {
      case 400:
        message = message ?? '请求参数错误'
        break
      case 401:
        message = message ?? '登录已过期'
        removeToken()
        toLogin()
        break
      case 403:
        message = message ?? '没有权限'
        break
      case 404:
        message = message ?? '资源或接口不存在'
        break
      case 500:
        message = message ?? '服务器异常'
        break
      default:
        message = message ?? '操作异常！'
        break
    }
  }
  return { code, message }
}
