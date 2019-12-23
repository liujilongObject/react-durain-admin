import {
  SettingsState,
  TOGGLE_SIDER_COLLAPSED,
  SiderActionTypes
} from './types'

const initState: SettingsState = {
  siderCollapsed: false
}

export function settingsReducer(
  state = initState,
  action: SiderActionTypes
): SettingsState {
  switch (action.type) {
    case TOGGLE_SIDER_COLLAPSED:
      return {
        ...state,
        ...action.payload
      }
    default:
      return state
  }
}
