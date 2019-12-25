import Cookies from 'js-cookie'

import { UserState, SET_TOKEN, DELETE_TOKEN, UserActionTypes } from './types'

const initState: UserState = {
  token: ''
}

export function userReducer(
  state = initState,
  action: UserActionTypes
): UserState {
  switch (action.type) {
    case SET_TOKEN:
      Cookies.set('TOKEN', action.payload.token)
      return {
        ...state,
        ...action.payload
      }

    case DELETE_TOKEN:
      state.token = ''
      return state

    default:
      return state
  }
}
