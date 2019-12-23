import React, { FC } from 'react'
import { Layout, Menu, Icon } from 'antd'
import { connect, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import { RouteConfig } from 'react-router-config'

import { siderCollapsedSelector } from '@/store/settings/selectors'
import { toggleSiderCollapsed } from '@/store/settings/actions'
import './sider.scss'

const { Sider } = Layout

export interface DuSiderProps {
  siderCollapsed: boolean
  routes?: Array<RouteConfig>
}

const DuSider: FC<DuSiderProps> = props => {
  const { siderCollapsed, routes } = props
  const dispatch = useDispatch()
  const history = useHistory()
  console.log(routes, '---routes')
  function onToggleSider(broken: boolean) {
    dispatch(toggleSiderCollapsed({ siderCollapsed: broken }))
  }

  return (
    <>
      <Sider
        breakpoint='lg'
        style={{
          minHeight: '100vh'
        }}
        trigger={null}
        collapsed={siderCollapsed}
        onBreakpoint={broken => {
          onToggleSider(broken)
        }}
      >
        <div className='logo' />
        <Menu theme='dark' mode='inline' defaultSelectedKeys={['1']}>
          {routes &&
            routes.map((route, idx) => (
              <Menu.Item
                key={String(idx)}
                onClick={() => history.replace(`${route.path}`)}
              >
                <Icon type={route.meta.icon} />
                <span className='nav-text'>{route.name}</span>
              </Menu.Item>
            ))}
        </Menu>
      </Sider>
    </>
  )
}

export default connect(siderCollapsedSelector)(DuSider)
