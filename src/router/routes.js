export default [
  {
    path: '/',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/index') },
    ],
  },

  {
    path: '/login',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/login') },
    ],
  },

  {
    path: '/register',
    component: () => import('layouts/default'),
    children: [
      { path: '', component: () => import('pages/register') },
    ],
  },

  {
    path: '/activity',
    component: () => import('layouts/default'),
    children: [
      { path: '/add', component: () => import('pages/activity/add') },
      { path: '/delete', component: () => import('pages/activity/delete') },
      { path: '/list', component: () => import('pages/activity/list') },
      { path: '/view', component: () => import('pages/activity/view') },
      { path: '/edit', component: () => import('pages/activity/edit') },
      { path: '/booking', component: () => import('pages/activity/booking') },
    ],
  },


  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
