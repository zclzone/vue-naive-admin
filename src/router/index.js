import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router'
import { setupRouterGuard } from './guard'
import { basicRoutes } from './routes'

const isHash = !!import.meta.env.VITE_APP_USE_HASH
export const router = createRouter({
  history: isHash ? createWebHashHistory('/') : createWebHistory('/'),
  routes: [],
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    router.hasRoute(name) && router.removeRoute(name)
  })
  basicRoutes.forEach((route) => {
    !router.hasRoute(route.name) && router.addRoute(route)
  })
}

export function setupRouter(app) {
  basicRoutes.forEach((route) => {
    !router.hasRoute(route.name) && router.addRoute(route)
  })
  app.use(router)
  setupRouterGuard(router)
}
