import React, { FC } from 'react'
import { Layout, Icon } from 'antd'
import { connect, useDispatch } from 'react-redux'

import { siderCollapsedSelector } from '@/store/settings/selectors'
import { toggleSiderCollapsed } from '@/store/settings/actions'
import './header.scss'

const { Header } = Layout

interface DuHeaderProps {
  siderCollapsed: boolean
}

const DuHeader: FC<DuHeaderProps> = props => {
  const { siderCollapsed } = props
  const dispatch = useDispatch()

  function toggleSider() {
    dispatch(toggleSiderCollapsed({ siderCollapsed: !siderCollapsed }))
  }

  return (
    <>
      <Header className='du-header'>
        <Icon
          className='trigger'
          type={siderCollapsed ? 'menu-unfold' : 'menu-fold'}
          onClick={toggleSider}
        />
        <div className='header-avatar-wrapper'>
          <img alt='' src={require('@/assets/images/logo.jpg')} />
        </div>
      </Header>
    </>
  )
}

export default connect(siderCollapsedSelector)(DuHeader)
