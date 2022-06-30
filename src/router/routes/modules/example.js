import Layout from '@/layout/index.vue'

export default [
  {
    name: 'Example',
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    meta: {
      title: '组件示例',
      role: ['admin'],
      icon: 'mdi:menu',
    },
    children: [
      {
        name: 'Table',
        path: 'table',
        component: () => import('@/views/examples/table/index.vue'),
        redirect: '/example/table/post',
        meta: {
          title: '表格',
          role: ['admin'],
          icon: 'mdi:table',
        },
        children: [
          {
            name: 'PostList',
            path: 'post',
            component: () => import('@/views/examples/table/post/index.vue'),
            meta: {
              title: '文章列表',
              role: ['admin'],
            },
          },
          {
            name: 'PostCreate',
            path: 'post-create',
            component: () => import('@/views/examples/table/post/PostCreate.vue'),
            meta: {
              title: '创建文章',
              role: ['admin'],
            },
          },
        ],
      },
    ],
  },
]
