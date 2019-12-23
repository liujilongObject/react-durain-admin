import loadable from '@loadable/component'
import { RouteConfig } from 'react-router-config'

import DefaultLayout from '@/layouts/DefaultLayout'
// import NotFound from '@/components/NotFound/index'

const Dashboard = loadable(() =>
  import(/* webpackChunkName: "dashboard" */ '@/views/dashboard')
)
const Test = loadable(() =>
  import(/* webpackChunkName: "test" */ '@/views/test')
)

const routes: Array<RouteConfig> = [
  {
    component: DefaultLayout,
    routes: [
      {
        path: '/',
        name: 'Dashboard',
        exact: true,
        meta: {
          icon: 'user'
        },
        component: Dashboard
      },
      {
        path: '/test',
        name: 'Test',
        meta: {
          icon: 'video-camera'
        },
        component: Test
      },
      {
        path: '/nav-3',
        name: 'Nav-3',
        meta: {
          icon: 'upload'
        },
        component: Test
      },
      {
        path: '/nav-4',
        name: 'Nav-4',
        meta: {
          icon: 'user'
        },
        component: Test
      }
      // {
      //   path: '*',
      //   name: '404',
      //   component: NotFound
      // }
    ]
  }
]

export default routes
