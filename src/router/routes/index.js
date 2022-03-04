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
    name: 'ERROR-PAGE',
    path: '/error-page',
    component: Layout,
    redirect: '/error-page/404',
    meta: {
      title: '错误页',
    },
    children: [
      {
        name: 'ERROR-404',
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        meta: {
          title: '404',
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
      {
        name: 'TEST-KEEP-ALIVE',
        path: 'keep-alive',
        component: () => import('@/views/test-page/TestKeepAlive.vue'),
        meta: {
          title: '测试Keep-Alive',
          keepAlive: true,
        },
      },
    ],
  },

  {
    name: 'EXTERNAL-LINK',
    path: '/external-link',
    component: Layout,
    meta: {
      title: '外部链接',
    },
    children: [
      {
        name: 'LINK-GITHUB-SRC',
        path: 'https://github.com/zclzone/vue-naive-admin',
        meta: {
          title: '源码 - github',
        },
      },
      {
        name: 'LINK-GITEE-SRC',
        path: 'https://gitee.com/zclzone/vue-naive-admin',
        meta: {
          title: '源码 - gitee',
        },
      },
      {
        name: 'LINK-DOCS',
        path: 'https://www.yuque.com/qszone/vue-naive-admin',
        meta: {
          title: '文档 - 语雀',
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
