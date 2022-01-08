import { defineStore } from 'pinia'
import { asyncRoutes, basicRoutes } from '@/router/routes'
import { difference } from 'lodash-es'

function hasPermission(route, role) {
  const routeRole = route.meta?.role ? route.meta.role : []
  if (!role.length || !routeRole.length) {
    return false
  }
  return difference(routeRole, role).length < routeRole.length
}

function filterAsyncRoutes(routes = [], role) {
  const ret = []
  routes.forEach((route) => {
    if (hasPermission(route, role)) {
      const curRoute = {
        ...route,
        children: [],
      }
      if (route.children && route.children.length) {
        curRoute.children = filterAsyncRoutes(route.children, role)
      } else {
        Reflect.deleteProperty(curRoute, 'children')
      }
      ret.push(curRoute)
    }
  })
  return ret
}

export const usePermissionStore = defineStore('permission', {
  state() {
    return {
      accessRoutes: [],
    }
  },
  getters: {
    routes() {
      return basicRoutes.concat(this.accessRoutes)
    },
  },
  actions: {
    generateRoutes(role = []) {
      const accessRoutes = filterAsyncRoutes(asyncRoutes, role)
      this.accessRoutes = accessRoutes
      return accessRoutes
    },
  },
})
