const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Demo',
  path: '/demo',
  component: Layout,
  redirect: '/demo/crud-table',
  meta: {
    title: '示例页面',
    customIcon: 'logo',
    role: ['admin'],
    requireAuth: true,
    order: 3,
  },
  children: [
    {
      name: 'CrudTable',
      path: 'crud-table',
      component: () => import('./table/index.vue'),
      meta: {
        title: '文章列表',
        icon: 'mdi:table',
        role: ['admin'],
        requireAuth: true,
      },
    },
    {
      name: 'MDEditor',
      path: 'md-editor',
      component: () => import('./editor/md-editor.vue'),
      meta: {
        title: 'MD编辑器',
        icon: 'icon-park:editor',
        role: ['admin'],
        requireAuth: true,
      },
    },
  ],
}
