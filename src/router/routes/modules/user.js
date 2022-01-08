import Layout from '@/layout/index.vue'

export default [
  {
    name: 'USER_MANAGER',
    path: '/user',
    component: Layout,
    redirect: '/user/management',
    meta: {
      title: '用户中心',
      role: ['admin'],
    },
    children: [
      {
        name: 'USER',
        path: 'management',
        component: () => import('@/views/user/index.vue'),
        meta: {
          title: '用户管理',
          role: ['admin'],
        },
      },
      {
        name: 'PERMISSION',
        path: 'permission',
        component: () => import('@/views/user/UserPermission.vue'),
        meta: {
          title: '权限管理',
          role: ['admin'],
        },
      },
    ],
  },
]
