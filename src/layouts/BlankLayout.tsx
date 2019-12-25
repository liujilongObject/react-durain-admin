import React, { FC } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'
import { connect } from 'react-redux'

import renderRoutes from '@/utils/router-config'
import { userTokenSelector } from '@/store/user/selectors'

interface BasicLayoutProps extends RouteConfigComponentProps {
  token: string
}

const BlankLayout: FC<BasicLayoutProps> = ({ route, token }) => {
  return <div>{route && renderRoutes(route.routes, token ? true : false)}</div>
}

export default connect(userTokenSelector)(BlankLayout)
