import { router } from '@/router'

export function toLogin() {
  router.replace({
    path: '/login',
    query: { ...router.currentRoute.query, redirect: router.currentRoute.path },
  })
}
