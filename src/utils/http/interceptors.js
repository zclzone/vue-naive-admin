import { router } from '@/router'
import { getToken, removeToken } from '@/utils/token'
import { isWithoutToken } from './help'

export function setupInterceptor(service) {
  service.interceptors.request.use(
    async (config) => {
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
        config.headers.Authorization = 'Bearer ' + token

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
    },
    (error) => Promise.reject(error)
  )

  service.interceptors.response.use(
    (response) => response?.data,
    (error) => {
      let { code, message } = error.response?.data
      return Promise.reject({ code, message })

      /**
       * TODO 此处可以根据后端返回的错误码自定义框架层面的错误处理
       */
      switch (code) {
        case 401:
          // 未登录（可能是token过期或者无效了）
          console.error(message)
          removeToken()
          const { currentRoute } = router
          router.replace({
            path: '/login',
            query: { ...currentRoute.query, redirect: currentRoute.path },
          })
          break
        case 403:
          // 没有权限
          console.error(message)
          break
        case 404:
          // 资源不存在
          console.error(message)
          break
        default:
          break
      }
      // 已知错误resolve，在业务代码中作提醒，未知错误reject，捕获错误统一提示接口异常（9000以上为业务类型错误，需要跟后端确定好）
      if ([401, 403, 404].includes(code) || code >= 9000) {
        return Promise.resolve({ code, message })
      } else {
        console.error('【err】' + error)
        return Promise.reject({ message: '接口异常，请稍后重试！' })
      }
    }
  )
}
