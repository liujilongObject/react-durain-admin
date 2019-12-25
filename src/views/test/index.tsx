import React, { FC } from 'react'
import { RouteConfigComponentProps } from 'react-router-config'

import renderRoutes from '@/utils/router-config'
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
