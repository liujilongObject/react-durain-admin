import React, { FC } from 'react'
import { Layout, Menu, Icon } from 'antd'
import './sider.scss'

const { Sider } = Layout

export interface DuSiderProps {
  collapsed: boolean
  onToggleSider: () => void
}

const DuSider: FC<DuSiderProps> = props => {
  const { collapsed, onToggleSider } = props

  return (
    <>
      <Sider
        breakpoint='lg'
        style={{
          minHeight: '100vh'
        }}
        trigger={null}
        collapsed={collapsed}
        onBreakpoint={onToggleSider}
      >
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['4']}>
          <Menu.Item key='1'>
            <Icon type='user' />
            <span className='nav-text'>nav 1</span>
          </Menu.Item>
          <Menu.Item key='2'>
            <Icon type='video-camera' />
            <span className='nav-text'>nav 2</span>
          </Menu.Item>
          <Menu.Item key='3'>
            <Icon type='upload' />
            <span className='nav-text'>nav 3</span>
          </Menu.Item>
          <Menu.Item key='4'>
            <Icon type='user' />
            <span className='nav-text'>nav 4</span>
          </Menu.Item>
        </Menu>
      </Sider>
    </>
  )
}

export default DuSider
