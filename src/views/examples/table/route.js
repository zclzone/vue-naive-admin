const Layout = () => import('@/layout/index.vue')

export default {
  name: 'Example',
  path: '/example',
  component: Layout,
  redirect: '/example/table',
  meta: {
    title: '组件示例',
    icon: 'mdi:menu',
    role: ['admin'],
    requireAuth: true,
    order: 3,
  },
  children: [
    {
      name: 'Table',
      path: 'table',
      component: () => import('./index.vue'),
      redirect: '/example/table/post',
      meta: {
        title: '表格',
        icon: 'mdi:table',
        role: ['admin'],
        requireAuth: true,
      },
      children: [
        {
          name: 'PostList',
          path: 'post',
          component: () => import('./post/index.vue'),
          meta: {
            title: '文章列表',
            role: ['admin'],
            requireAuth: true,
          },
        },
        {
          name: 'PostCreate',
          path: 'post-create',
          component: () => import('./post/PostCreate.vue'),
          meta: {
            title: '创建文章',
            role: ['admin'],
            requireAuth: true,
          },
        },
      ],
    },
  ],
}
