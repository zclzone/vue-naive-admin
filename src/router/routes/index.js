import Layout from '@/layout/index.vue'
import Home from '@/views/dashboard/index.vue'

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
    name: 'Dashboard',
    path: '/',
    component: Layout,
    redirect: '/home',
    meta: {
      title: 'Dashboard',
      icon: 'mdi:chart-bar',
    },
    children: [
      {
        name: 'Home',
        path: 'home',
        component: Home,
        meta: {
          title: '首页',
          icon: 'mdi:home',
        },
      },
    ],
  },

  {
    name: 'ErrorPage',
    path: '/error-page',
    component: Layout,
    redirect: '/error-page/404',
    meta: {
      title: '错误页',
      icon: 'mdi:alert-circle-outline',
      index: 4,
    },
    children: [
      {
        name: 'ERROR-404',
        path: '404',
        component: () => import('@/views/error-page/404.vue'),
        meta: {
          title: '404',
          icon: 'mdi:alert-circle-outline',
        },
      },
    ],
  },

  {
    name: 'Test',
    path: '/test',
    component: Layout,
    redirect: '/test/unocss',
    meta: {
      title: '基础功能测试',
      icon: 'mdi:menu',
    },
    children: [
      {
        name: 'Unocss',
        path: 'unocss',
        component: () => import('@/views/test-page/unocss/index.vue'),
        meta: {
          title: '测试unocss',
        },
      },
      {
        name: 'Message',
        path: 'message',
        component: () => import('@/views/test-page/message/index.vue'),
        meta: {
          title: '测试Message',
        },
      },
      {
        name: 'Dialog',
        path: 'dialog',
        component: () => import('@/views/test-page/dialog/index.vue'),
        meta: {
          title: '测试Dialog',
        },
      },
      {
        name: 'TestKeepAlive',
        path: 'keep-alive',
        component: () => import('@/views/test-page/keep-alive/index.vue'),
        meta: {
          title: '测试Keep-Alive',
          keepAlive: true,
        },
      },
    ],
  },

  {
    name: 'ExternalLink',
    path: '/external-link',
    component: Layout,
    meta: {
      title: '外部链接',
      icon: 'mdi:link-variant',
    },
    children: [
      {
        name: 'LinkGithubSrc',
        path: 'https://github.com/zclzone/vue-naive-admin',
        meta: {
          title: '源码 - github',
          icon: 'mdi:github',
        },
      },
      {
        name: 'LinkGiteeSrc',
        path: 'https://gitee.com/zclzone/vue-naive-admin',
        meta: {
          title: '源码 - gitee',
          icon: 'simple-icons:gitee',
        },
      },
      {
        name: 'LinkDocs',
        path: 'https://zclzone.github.io/vue-naive-admin-docs',
        meta: {
          title: '文档 - vuepress',
          icon: 'mdi:vuejs',
        },
      },
    ],
  },
]

export const NOT_FOUND_ROUTE = {
  name: 'NotFound',
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
