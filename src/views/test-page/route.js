const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Test',
  path: '/test',
  component: Layout,
  redirect: '/test/unocss',
  meta: {
    title: '基础功能测试',
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
      name: 'TestKeepAlive',
      path: 'keep-alive',
      component: () => import('./keep-alive/index.vue'),
      meta: {
        title: '测试Keep-Alive',
        keepAlive: true,
        icon: 'material-symbols:auto-awesome-outline-rounded',
      },
    },
  ],
}
