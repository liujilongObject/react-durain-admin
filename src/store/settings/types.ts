const namespace: string = 'settings'

export interface SettingsState {
  siderCollapsed: boolean
}

export const TOGGLE_SIDER_COLLAPSED: string = `${namespace}/TOGGLE_SIDER_COLLAPSED`

interface ToggleSiderCollapsedAction {
  type: typeof TOGGLE_SIDER_COLLAPSED
  payload: SettingsState
}

export type SiderActionTypes = ToggleSiderCollapsedAction
