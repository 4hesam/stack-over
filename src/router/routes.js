const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [{ path: '', component: () => import('pages/IndexPage.vue') }],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
  {path: '/login',
    component:() => import('components/LoginPage.vue'),
  },
  {path: '/signup',
    component:() => import('components/SignupPage.vue'),
  },
]

export default routes
