import { SiderState, TOGGLE_COLLAPSED } from './types'

export function toggleCollapsed(newState: SiderState) {
  return {
    type: TOGGLE_COLLAPSED,
    payload: newState
  }
}
