import { createRouter, createWebHistory } from 'vue-router'
import { setupRouterGuard } from './guard'
import { basicRoutes } from './routes'

export const router = createRouter({
  history: createWebHistory('/'),
  routes: basicRoutes,
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

export function resetRouter() {
  router.getRoutes().forEach((route) => {
    const { name } = route
    if (name && !WHITE_NAME_LIST.includes(name)) {
      router.hasRoute(name) && router.removeRoute(name)
    }
  })
}

export function setupRouter(app) {
  app.use(router)
  setupRouterGuard(router)
}
