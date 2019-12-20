import React, { FC, useState } from 'react'
import { Layout, Icon } from 'antd'

const { Header } = Layout

const DuHeader: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  function toggleSider(): void {
    setCollapsed(prev => !prev)
  }

  return (
    <>
      <Header style={{ background: '#fff', padding: 0 }}>
        <Icon
          className='trigger'
          type={collapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggleSider}
        />
      </Header>
    </>
  )
}

export default DuHeader
