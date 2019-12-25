import { combineReducers, createStore } from 'redux'

/* reducers */
import settings from './settings'
import user from './user'

/* state */
import { settingsState } from './settings'
import { userState } from './user'

const rootReducer = combineReducers({
  settings,
  user
})

export type AppState = ReturnType<typeof rootReducer>

const initState: AppState = {
  settings: settingsState,
  user: userState
}

const store = createStore(rootReducer, initState)

export default store
