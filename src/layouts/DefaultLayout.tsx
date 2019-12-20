import React, { FC, useState } from 'react'
import { Layout, Icon } from 'antd'
import './layouts.scss'
import DuSider from '@/components/DuSider'

const { Header, Content } = Layout

const DefaultLayout: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  function toggleSider(): void {
    setCollapsed(prev => !prev)
  }

  return (
    <Layout>
      <DuSider collapsed={collapsed} onToggleSider={toggleSider} />
      <Layout>
        <Header style={{ background: '#fff', padding: 0 }}>
          <Icon
            className='trigger'
            type={collapsed ? 'menu-unfold' : 'menu-fold'}
            onClick={toggleSider}
          />
        </Header>
        <Content style={{ margin: '24px 16px 0' }}>
          <div style={{ padding: 24, background: '#fff', minHeight: 420 }}>
            content
          </div>
        </Content>
      </Layout>
    </Layout>
  )
}

export default DefaultLayout
