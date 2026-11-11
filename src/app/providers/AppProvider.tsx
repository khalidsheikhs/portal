import { createContext, useContext, useState } from "react"

type AppState = {
  appName: string
}

const AppContext = createContext<AppState | undefined>(undefined)

export function AppProvider({ children }: { children: React.ReactNode }) {
  const [appName, setAppName] = useState("My Dashboard")

  const value = {
    appName,
    setAppName,
  }

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  )
}

export function useAppContext() {
  const context = useContext(AppContext)

  if (!context)
    throw new Error("useAppContext must be used inside AppProvider")

  return context
}