const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Test',
  path: '/base',
  component: Layout,
  redirect: '/base/index',
  meta: {
    title: '基础功能',
    icon: 'majesticons:compass-line',
    order: 1,
  },
  children: [
    {
      name: 'BaseComponents',
      path: 'index',
      component: () => import('./index.vue'),
      meta: {
        title: '基础组件',
        icon: 'material-symbols:auto-awesome-outline-rounded',
      },
    },
    {
      name: 'Unocss',
      path: 'unocss',
      component: () => import('./unocss/index.vue'),
      meta: {
        title: 'Unocss',
        icon: 'material-symbols:auto-awesome-outline-rounded',
      },
    },
    {
      name: 'KeepAlive',
      path: 'keep-alive',
      component: () => import('./keep-alive/index.vue'),
      meta: {
        title: 'KeepAlive',
        icon: 'material-symbols:auto-awesome-outline-rounded',
        keepAlive: true,
      },
    },
  ],
}
