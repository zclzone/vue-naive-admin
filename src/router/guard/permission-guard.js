import { useUserStore } from '@/store/modules/user'
import { usePermissionStore } from '@/store/modules/permission'
import { NOT_FOUND_ROUTE } from '@/router/routes'
import { getToken, refreshAccessToken } from '@/utils/token'
import { isNullOrWhitespace } from '@/utils/is'

const WHITE_LIST = ['/login', '/404']
export function createPermissionGuard(router) {
  const userStore = useUserStore()
  const permissionStore = usePermissionStore()
  router.beforeEach(async (to) => {
    const token = getToken()

    /** 没有token的情况 */
    if (isNullOrWhitespace(token)) {
      if (WHITE_LIST.includes(to.path)) return true
      return { path: 'login', query: { ...to.query, redirect: to.path } }
    }

    /** 有token的情况 */
    if (to.path === '/login') return { path: '/', replace: true }
    if (to.path === '/404') return true

    // 已经拿到用户信息
    if (userStore.userId) {
      refreshAccessToken()
      return true
    }
    try {
      await userStore.getUserInfo()
      const accessRoutes = permissionStore.generateRoutes(userStore.role)
      accessRoutes.forEach((route) => {
        !router.hasRoute(route.name) && router.addRoute(route)
      })
      router.addRoute(NOT_FOUND_ROUTE)
      return { ...to, replace: true }
    } catch (error) {
      console.error(error)
      return
    }
  })
}
