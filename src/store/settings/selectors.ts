import { AppState } from '@/store'

export const siderCollapsedSelector = (state: AppState) => ({
  siderCollapsed: state.settings.siderCollapsed
})
