import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        name: 'index',
        component: () => import('pages/IndexPage.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('layouts/ClearLayout.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('src/pages/login/LoginPage.vue'),
      },
      {
        path: 'confirm',
        name: 'confirm_user',
        component: () => import('src/pages/login/ConfirmCodeLoginPage.vue'),
      },
      {
        path: 'create',
        name: 'create_user',
        component: () => import('src/pages/login/CreateLoginPage.vue'),
      },
    ],
  },
  {
    path: '/form',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: ':id',
        props: true,
        name: 'maker',
        component: () => import('src/pages/Form/GenericForm.vue'),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
