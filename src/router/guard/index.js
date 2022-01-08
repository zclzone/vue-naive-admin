import { createPageLoadingGuard } from './pageLoadingGuard'
import { createPermissionGuard } from './permissionGuard'

export function setupRouterGuard(router) {
  createPageLoadingGuard(router)
  createPermissionGuard(router)
}
