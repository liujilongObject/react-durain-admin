import { SettingsState, TOGGLE_SIDER_COLLAPSED } from './types'

export function toggleSiderCollapsed(newState: SettingsState) {
  return {
    type: TOGGLE_SIDER_COLLAPSED,
    payload: newState
  }
}
