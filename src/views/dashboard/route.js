const Layout = () => import('@/layout/index.vue')

export default {
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
      component: () => import('./index.vue'),
      meta: {
        title: '首页',
        icon: 'mdi:home',
      },
    },
  ],
}
