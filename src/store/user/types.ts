const namespace: string = 'user'

export interface UserState {
  token: string
  userName?: string
  password?: number | string
  avatar?: string
}

export const SET_TOKEN = `${namespace}/SET_TOKEN`
export const DELETE_TOKEN = `${namespace}/DELETE_TOKEN`

interface SetTokenAction {
  type: typeof SET_TOKEN
  payload: UserState
}

interface DeleteTokenAction {
  type: typeof DELETE_TOKEN
  payload: UserState
}

export type UserActionTypes = SetTokenAction | DeleteTokenAction
