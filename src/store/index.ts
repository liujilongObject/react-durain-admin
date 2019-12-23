import { combineReducers, createStore } from 'redux'

import settings from './settings'

const rootReducer = combineReducers({
  settings
})

export type AppState = ReturnType<typeof rootReducer>

const initState: AppState = {
  settings: {
    siderCollapsed: false
  }
}

const store = createStore(rootReducer, initState)

export default store
