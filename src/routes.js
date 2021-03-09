import React from "react";
import {routeList} from './untils/routeMap'
export const routes = [
  
  {
    path: '/b',
    component: React.lazy(() => import('@src/home.jsx')),
    redirect:'/home?id=1',
    children: [
      {
        path: '/home',
        component: React.lazy(() => import('@src/home.jsx')),
        meta: {
          title: '首页',
          auth: ['admin'],
          icon: 'read',
        },
      },
    ],
  },
  {
    path: '/login',
    component: React.lazy(() => import('@src/login.jsx')),
    meta: {
      title: '登录',
    },
  },
  {
    path: '/a',
    component: React.lazy(() => import('@src/404.jsx')),
  },
  {
    path: '/',
    component: React.lazy(() => import('@src/home.jsx')),
  }
];


export const list = routeList(routes)