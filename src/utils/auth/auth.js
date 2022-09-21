import { router } from '@/router'

export function toLogin() {
  const currentRoute = unref(router.currentRoute)
  const needRedirect = !currentRoute.meta.requireAuth && !['/404', '/login'].includes(router.currentRoute.value.path)
  router.replace({
    path: '/login',
    query: needRedirect ? { ...router.currentRoute.value.query, redirect: router.currentRoute.value.path } : {},
  })
}

export function toFourZeroFour() {
  router.replace({
    path: '/404',
  })
}
