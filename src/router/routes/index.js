import Layout from '@/layout/index.vue'
import Home from '@/views/dashboard/index.vue'
import { ChartBar, Dove, Github, HouseDamage, LastfmSquare, Link, TimesCircle } from '@vicons/fa'

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
    name: 'DASHBOARD',
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: 'Dashboard',
      icon: ChartBar,
    },
    children: [
      {
        name: 'HOME',
        path: 'home',
        component: Home,
        meta: {
          title: '首页',
          icon: HouseDamage,
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
      title: '基础功能测试',
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
    name: 'ERROR-PAGE',
    path: '/error-page',
    component: Layout,
    redirect: '/error-page/404',
    meta: {
      title: '错误页',
      icon: TimesCircle,
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
    name: 'EXTERNAL-LINK',
    path: '/external-link',
    component: Layout,
    meta: {
      title: '外部链接',
      icon: Link,
    },
    children: [
      {
        name: 'LINK-GITHUB-SRC',
        path: 'https://github.com/zclzone/vue-naive-admin',
        meta: {
          title: '源码 - github',
          icon: Github,
        },
      },
      {
        name: 'LINK-GITEE-SRC',
        path: 'https://gitee.com/zclzone/vue-naive-admin',
        meta: {
          title: '源码 - gitee',
          icon: LastfmSquare,
        },
      },
      {
        name: 'LINK-DOCS',
        path: 'https://zclzone.github.io/vue-naive-admin-docs',
        meta: {
          title: '文档 - vuepress',
          icon: LastfmSquare,
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
