import React, { FC } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'
// import { useHistory } from 'react-router-dom'

const BlankLayout: FC<RouteConfigComponentProps> = ({ route }) => {
  return <div>{route && renderRoutes(route.routes)}</div>
}

export default BlankLayout
