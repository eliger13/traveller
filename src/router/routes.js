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
    path: '/settings/',
    component: () => import('layouts/default'),
    children: [
      { path: 'setting/', component: () => import('pages/settings/setting') },
      { path: 'password/', component: () => import('pages/settings/password') },
    ],
  },

  {
    path: '/profile/',
    component: () => import('layouts/default'),
    children: [
      { path: 'modify/', component: () => import('pages/profile/modify') },
      { path: 'view/', component: () => import('pages/profile/view') },
    ],
  },

  {
    path: '/activity/',
    component: () => import('layouts/default'),
    children: [
      { path: 'add/', component: () => import('pages/activity/add') },
      { path: 'delete/', component: () => import('pages/activity/delete') },
      { path: 'list/', component: () => import('pages/activity/list') },
      { path: 'view/', component: () => import('pages/activity/view') },
      { path: 'edit/', component: () => import('pages/activity/edit') },
      { path: 'booking/', component: () => import('pages/activity/booking') },
      { path: 'report/', component: () => import('pages/activity/report') },
    ],
  },


  { // Always leave this as last one
    path: '*',
    component: () => import('pages/404'),
  },
];
