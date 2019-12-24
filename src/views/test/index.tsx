import React, { FC } from 'react'
import { renderRoutes, RouteConfigComponentProps } from 'react-router-config'

import MySteps from '@/components/MySteps'

const Test: FC<RouteConfigComponentProps> = ({ route }) => {
  return (
    <div>
      <MySteps />
      <div>{route && renderRoutes(route.routes)}</div>
    </div>
  )
}

export default Test
