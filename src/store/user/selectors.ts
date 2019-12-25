import { AppState } from '@/store'

export const userTokenSelector = (state: AppState) => ({
  token: state.user.token
})
