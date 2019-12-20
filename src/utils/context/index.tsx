import React, { FC, createContext, useContext } from 'react'

export interface SiderContextValue {
  collapsed: boolean
}

export const SiderContext = createContext<SiderContextValue>({
  collapsed: false
})

export const SiderProvider: FC<SiderContextValue> = props => {
  const { collapsed, children } = props
  return (
    <SiderContext.Provider value={{ collapsed: collapsed }}>
      {children}
    </SiderContext.Provider>
  )
}

export function useSiderCollapsed() {
  return useContext(SiderContext)
}
