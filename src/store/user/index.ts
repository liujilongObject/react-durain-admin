import Cookies from 'js-cookie'

import { userReducer as user } from './reducers'
import { UserState } from './types'

export const userState: UserState = {
  token: Cookies.get('TOKEN') || ''
}

export default user
