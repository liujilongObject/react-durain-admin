import { combineReducers } from 'redux'
import siderReducers from './sider/reducers'

const rootReducer = combineReducers({
  ...siderReducers
})
