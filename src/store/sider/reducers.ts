import { SiderState, TOGGLE_COLLAPSED, SiderActionTypes } from './types'

const initState: SiderState = {
  collapsed: false
}

export function siderReducer(
  state = initState,
  action: SiderActionTypes
): SiderState {
  switch (action.type) {
    case TOGGLE_COLLAPSED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}

export default {
  siderReducer
}
