import { createPageLoadingGuard } from './pageLoadingGuard'
import { createPageTitleGuard } from './pageTitleGuard'
import { createPermissionGuard } from './permissionGuard'

export function setupRouterGuard(router) {
  createPageLoadingGuard(router)
  createPermissionGuard(router)
  createPageTitleGuard(router)
}
