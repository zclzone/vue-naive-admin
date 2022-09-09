const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Test',
  path: '/base',
  component: Layout,
  redirect: '/base/unocss',
  meta: {
    title: '基础功能',
    customIcon: 'logo',
    order: 1,
  },
  children: [
    {
      name: 'Unocss',
      path: 'unocss',
      component: () => import('./unocss/index.vue'),
      meta: {
        title: '测试unocss',
        icon: 'material-symbols:auto-awesome-outline-rounded',
      },
    },
    {
      name: 'Message',
      path: 'message',
      component: () => import('./message/index.vue'),
      meta: {
        title: '测试Message',
        icon: 'material-symbols:auto-awesome-outline-rounded',
      },
    },
    {
      name: 'Dialog',
      path: 'dialog',
      component: () => import('./dialog/index.vue'),
      meta: {
        title: '测试Dialog',
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
