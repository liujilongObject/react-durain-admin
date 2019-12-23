import React, { FC } from 'react'
import { Layout } from 'antd'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'

import DuSider from '@/components/DuSider'
import DuHeader from '@/components/DuHeader/index'
import './layouts.scss'

const { Content } = Layout

const DefaultLayout: FC<RouteConfigComponentProps> = ({ route }) => {
  return (
    <Layout>
      <DuSider routes={route && route.routes} />
      <Layout>
        <DuHeader />
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 420 }}>
            {route && renderRoutes(route.routes)}
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
