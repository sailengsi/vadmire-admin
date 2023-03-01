import { VAdmireRoute } from '..'

export const CONSTANT_ROUTES: VAdmireRoute[] = [
  {
    path: '/login',
    name: 'SystemAuth',
    component: '~/views/auth/SystemAuth.vue',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/404',
    name: 'SystemNotFound',
    component: '~/views/404.vue',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/demo',
    name: 'SystemDemo',
    component: 'Layout',
    meta: {
      text: 'Demo页面',
      isShow: true,
      icon: 'arcticons:democracy',
    },
    children: [
      {
        path: '',
        name: 'SystemDemoMain',
        component: '~/views/Demo.vue',
        meta: {
          text: 'Demo',
          icon: 'material-symbols:workspace-premium-outline',
        },
      },
    ],
  },
  {
    path: '/',
    name: 'Home',
    redirect: '/block/demo1',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/layout',
    name: 'LayoutHome',
    component: 'Layout',
    meta: {
      isShow: false,
    },
  },
  {
    path: '/block/demo1',
    name: 'BlockDemo-1',
    component: '~/views/block/demo1.vue',
    meta: {
      isShow: false,
    },
  },
]

export const MATCH_404_ROUTES: VAdmireRoute = {
  path: '/:catchAll(.*)',
  redirect: '/404',
  name: 'Match_404',
  meta: {
    isShow: false,
  },
}
