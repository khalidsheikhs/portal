import { useEffect } from "react"
import { getUserInfo } from "./services/getUserInfo"
import { useToken } from "./stores/token"
import { useAuth } from "./stores/auth"

export function AuthInitializer() {
  const setAuth = useAuth((state) => state.setAuth)
  const unsetAuth = useAuth((state) => state.unsetAuth)
  const token = useToken((state) => state.token)
  const clearToken = useToken((state) => state.clear)

  useEffect(() => {
    let cancelled = false

    const initializeAuth = async () => {
      if (!token) {
        unsetAuth()
        return
      }

      try {
        const user = await getUserInfo()
        if (!cancelled) setAuth(user)
      } catch {
        if (!cancelled) {
          clearToken()
          unsetAuth()
        }
      }
    }

    void initializeAuth()

    return () => {
      cancelled = true
    }
  }, []) // dispatch, 

  return null
}