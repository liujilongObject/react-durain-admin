import React, { FC } from 'react'
import { Provider } from 'react-redux'
// import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'

import renderRoutes from '@/utils/router-config'
import routes from '@/routes'
import store from '@/store'
import './app.scss'

const App: FC = () => {
  return (
    <Provider store={store}>
      <div className='App'>
        <Router>{renderRoutes(routes)}</Router>
      </div>
    </Provider>
  )
}

export default App
