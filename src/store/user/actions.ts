import { UserState, SET_TOKEN, DELETE_TOKEN } from './types'

export function setToken(newState: UserState) {
  return {
    type: SET_TOKEN,
    payload: newState
  }
}

export function deleteToken() {
  return {
    type: DELETE_TOKEN
  }
}
