import React, { FC } from 'react'
import { Provider } from 'react-redux'
// import { renderRoutes } from 'react-router-config'
import { HashRouter as Router } from 'react-router-dom'
import { Store } from 'redux'

import renderRoutes from '@/utils/router-config'
import routes from '@/routes'
import store from '@/store'
import '@/assets/styles/global.scss'

store.subscribe(tokenSideEffect(store))

function tokenSideEffect(store: Store): () => void {
  return () => {
    const state = store.getState()
    if (!state.user.token) {
      window.location.href = '#/login'
    }
  }
}

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
