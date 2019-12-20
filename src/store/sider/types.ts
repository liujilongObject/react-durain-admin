const namespace: string = 'sider'

export interface SiderState {
  collapsed: boolean
}

export const TOGGLE_COLLAPSED: string = `${namespace}/TOGGLE_COLLAPSED`

export interface ToggleCollapsedAction {
  type: typeof TOGGLE_COLLAPSED
  payload: SiderState
}

export type SiderActionTypes = ToggleCollapsedAction
