import React from 'react'
import loadable from '@loadable/component'
import { RouteConfig } from 'react-router-config'

import Loading from '@/utils/loading'
import BasicLayout from '@/layouts/BasicLayout'
import BlankLayout from '@/layouts/BlankLayout'
import NotFound from '@/components/NotFound'

const Login = loadable(
  () => import(/* webpackChunkName: "login" */ '@/views/login'),
  { fallback: <Loading /> }
)
const Dashboard = loadable(
  () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard'),
  { fallback: <Loading /> }
)
const Test = loadable(
  () => import(/* webpackChunkName: "test" */ '@/views/test'),
  { fallback: <Loading /> }
)

const routes: Array<RouteConfig> = [
  {
    component: BlankLayout,
    requireAuth: false,
    routes: [
      {
        path: '/login',
        name: 'Login',
        exact: true,
        component: Login,
        requireAuth: false
      },
      {
        component: BasicLayout,
        requireAuth: true,
        routes: [
          {
            path: '/dashboard',
            name: 'Dashboard',
            meta: {
              icon: 'user',
              title: 'Dashboard'
            },
            component: Dashboard
          },
          {
            path: '/test',
            name: 'Test',
            meta: {
              icon: 'video-camera',
              title: 'Test'
            },
            component: Test
          },
          {
            path: '/nav-3',
            name: 'Nav-3',
            meta: {
              icon: 'upload',
              title: 'Nav-3'
            },
            component: BlankLayout
          },
          {
            path: '/nav-4',
            name: 'Nav-4',
            meta: {
              icon: 'appstore'
            },
            component: BlankLayout,
            routes: [
              {
                path: '/nav-4/sub-1',
                name: 'Nav-4/sub-1',
                meta: {
                  icon: 'user'
                },
                component: BlankLayout,
                routes: [
                  {
                    path: '/nav-4/sub-1/more-1',
                    name: 'Nav-4/sub-1/more-1',
                    meta: {
                      icon: 'user'
                    },
                    component: NotFound
                  },
                  {
                    path: '/nav-4/sub-1/more-2',
                    name: 'Nav-4/sub-1/more-2',
                    meta: {
                      icon: 'user'
                    },
                    component: NotFound
                  }
                ]
              },
              {
                path: '/nav-4/sub-2',
                name: 'Nav-4/sub-2',
                meta: {
                  icon: 'user'
                },
                component: NotFound
              }
            ]
          },
          {
            path: '*',
            name: '404',
            component: NotFound
          }
        ]
      }
    ]
  }
]

export default routes
