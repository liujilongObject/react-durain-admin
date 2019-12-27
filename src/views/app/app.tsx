import React, { FC } from 'react'
import { Provider } from 'react-redux'
// import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'

import renderRoutes from '@/utils/router-config'
import routes from '@/routes'
import store from '@/store'
import '@/assets/styles/global.scss'

const App: FC = () => {
  return (
    <Provider store={store}>
      <div style={{ minHeight: '100vh' }}>
        <Router>{renderRoutes(routes)}</Router>
      </div>
    </Provider>
  )
}

export default App
