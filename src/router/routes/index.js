import Layout from '@/layout/index.vue'
import Dashboard from '@/views/dashboard/index.vue'

export const basicRoutes = [
  {
    name: '404',
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    isHidden: true,
  },
  {
    name: 'REDIRECT',
    path: '/redirect',
    component: Layout,
    isHidden: true,
    children: [
      {
        name: 'REDIRECT_NAME',
        path: '',
        component: () => import('@/views/redirect/index.vue'),
      },
    ],
  },
  {
    name: 'LOGIN',
    path: '/login',
    component: () => import('@/views/login/index.vue'),
    isHidden: true,
    meta: {
      title: '登录页',
    },
  },

  {
    name: 'HOME',
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    meta: {
      title: '首页',
    },
    children: [
      {
        name: 'DASHBOARD',
        path: 'dashboard',
        component: Dashboard,
        meta: {
          title: 'Dashboard',
        },
      },
    ],
  },

  {
    name: 'TEST',
    path: '/test',
    component: Layout,
    redirect: '/test/unocss',
    meta: {
      title: '测试',
    },
    children: [
      {
        name: 'UNOCSS',
        path: 'unocss',
        component: () => import('@/views/test-page/TestUnocss.vue'),
        meta: {
          title: '测试unocss',
        },
      },
      {
        name: 'MESSAGE',
        path: 'message',
        component: () => import('@/views/test-page/TestMessage.vue'),
        meta: {
          title: '测试Message',
        },
      },
      {
        name: 'DIALOG',
        path: 'dialog',
        component: () => import('@/views/test-page/TestDialog.vue'),
        meta: {
          title: '测试Dialog',
        },
      },
    ],
  },
]

export const NOT_FOUND_ROUTE = {
  name: 'NOT_FOUND',
  path: '/:pathMatch(.*)*',
  redirect: '/404',
  isHidden: true,
}

const modules = import.meta.globEager('./modules/*.js')
const asyncRoutes = []
Object.keys(modules).forEach((key) => {
  asyncRoutes.push(...modules[key].default)
})

export { asyncRoutes }
